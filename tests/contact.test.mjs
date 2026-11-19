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
test('inbound enquiries are saved before email; a saved lead survives email failure',async()=>{
 const calls=[];const body={...valid,source:'google',medium:'cpc',campaign:'ni-apps'};
 const result=await processEnquiry(body,{save:async data=>{calls.push('saved');assert.equal(data.campaign,'ni-apps');return 'test-lead';},send:async(data,id)=>{calls.push('email');assert.equal(id,'test-lead');throw new Error('Mail offline');},markNotification:async(id,status)=>calls.push(status)});
 assert.equal(result.status,200);assert.deepEqual(calls,['saved','email','failed']);
 let sent=false;const failed=await processEnquiry(valid,{save:async()=>{throw new Error('DB offline')},send:async()=>{sent=true}});assert.equal(failed.status,503);assert.equal(sent,false);
});
