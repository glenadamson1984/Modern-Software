import {processEnquiry} from '../../lib/contact.mjs';
import {leadStoreConfigured,saveWebsiteLead,markLeadNotification} from '../../lib/lead-store.mjs';
export const prerender=false;
export const POST=async ({request})=>{
 const json=request.headers.get('content-type')?.includes('application/json');const origin=request.headers.get('origin');
 if(origin&&origin!==new URL(request.url).origin&&!['https://modern-software.co.uk','https://www.modern-software.co.uk'].includes(origin))return Response.json({message:'Please send your enquiry from the website.'},{status:403});
 let body;try{const text=await request.text();if(text.length>20000)return Response.json({message:'Your enquiry is too large.'},{status:413});body=json?JSON.parse(text):Object.fromEntries(new URLSearchParams(text));}catch{return Response.json({message:'Please check your enquiry details.'},{status:400});}
 const key=process.env.SENDGRID_API_KEY||import.meta.env.SENDGRID_API_KEY;
 const stored=leadStoreConfigured();
 const result=await processEnquiry(body,{configured:!!key||stored,save:stored?saveWebsiteLead:undefined,markNotification:stored?markLeadNotification:undefined,send:async (data,leadId)=>{if(!key)throw new Error('Email notifications unavailable');const {default:mail}=await import('@sendgrid/mail');mail.setApiKey(key);await mail.send({to:'glenadamson1984@gmail.com',from:'glen.adamson@modern-software.co.uk',replyTo:data.email,subject:'Modern Software — New project enquiry',text:Object.entries(data).map(([k,v])=>`${k}: ${v}`).join('\n\n')+'\n\n'+(leadId?'Saved in your private leads inbox. ':'')+'Admin: https://www.modern-software.co.uk/leads'});}});
 if(json)return Response.json({message:result.message},{status:result.status,headers:{'Cache-Control':'no-store'}});
 if(result.status===200)return new Response(null,{status:303,headers:{Location:'/thank-you','Cache-Control':'no-store'}});
 return new Response(`<!doctype html><html lang="en-GB"><title>Enquiry | Modern Software</title><meta name="robots" content="noindex"><h1>We couldn’t send your enquiry</h1><p>${result.message}</p><p><a href="/contact">Return to the form</a> or <a href="mailto:glen.adamson@modern-software.co.uk">email Glen</a>.</p></html>`,{status:result.status,headers:{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store'}});
};
export const ALL=()=>Response.json({message:'Method not allowed'},{status:405,headers:{Allow:'POST'}});
