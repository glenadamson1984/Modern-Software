import test from 'node:test';import assert from 'node:assert/strict';
import {validateEnquiry,processEnquiry} from '../src/lib/contact.mjs';
const valid={name:'Example Person',email:'person@example.com',message:'We need to connect our stock records with our receiving process.',company:'Example business',budget:'£15,000–£30,000'};
test('enquiries validate required fields, limits and bot trap before contacting mail service',async()=>{
 for(const body of [null,[],{}, {...valid,email:'invalid'},{...valid,email:'a@b.com\r\nBcc:x@y.com'},{...valid,message:'short'},{...valid,website:'https://spam.example'},{...valid,name:'x'.repeat(121)}]){
  let sent=false;const result=await processEnquiry(body,{send:async()=>{sent=true}});assert.equal(result.status,400);assert.equal(sent,false);
 }
 assert.equal(validateEnquiry({...valid,name:' Example Person '}).data.name,'Example Person');
});
test('delivery success, configuration failure and provider failure remain distinct',async()=>{
 let delivered;const ok=await processEnquiry(valid,{send:async(data)=>{delivered=data}});assert.equal(ok.status,200);assert.equal(delivered.budget,valid.budget);assert.equal(delivered.email,valid.email);
 let sent=false;assert.equal((await processEnquiry(valid,{configured:false,send:async()=>{sent=true}})).status,503);assert.equal(sent,false);
 assert.equal((await processEnquiry(valid,{send:async()=>{throw new Error('Provider failure')}})).status,502);
});
