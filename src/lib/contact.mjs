export function validateEnquiry(body){
 if(!body||typeof body!=='object'||Array.isArray(body))return {error:'Please provide your enquiry details.'};
 if(body.website)return {error:'Unable to process this submission.'};
 const limits={name:120,email:254,company:180,phone:50,service:100,budget:100,message:6000,timescale:180,source:180,medium:180,campaign:180};const data={};
 for(const [field,max] of Object.entries(limits)){const raw=body[field]??'';if(typeof raw!=='string'||raw.length>max)return {error:'Please check the length of your enquiry fields.'};data[field]=raw.trim();}
 if(!data.name||data.message.length<20||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)||/[\r\n]/.test(data.email))return {error:'Please provide your name, a valid email and a project description of at least 20 characters.'};
 return {data};
}
export async function processEnquiry(body,{send,configured=true,save,markNotification}){
 const result=validateEnquiry(body);if(result.error)return {status:400,message:result.error};
 if(!configured)return {status:503,message:'The enquiry service is temporarily unavailable. Please email glen.adamson@modern-software.co.uk directly.'};
 let leadId;
 if(save){try{leadId=await save(result.data);}catch{return {status:503,message:'Your enquiry could not be saved. Please retry or email Glen directly.'};}}
 try{
  await send(result.data,leadId);
  if(leadId&&markNotification)await markNotification(leadId,'sent').catch(()=>{});
  return {status:200,message:'Your enquiry has been sent.'};
 }catch{
  if(leadId){if(markNotification)await markNotification(leadId,'failed').catch(()=>{});return {status:200,message:'Your enquiry has been received.'};}
  return {status:502,message:'Your enquiry could not be sent. Please retry or email Glen directly.'};
 }
}
