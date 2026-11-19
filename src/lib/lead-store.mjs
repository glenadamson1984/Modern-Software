// Server-only credentials. Never import this module from a browser component.
export function leadStoreConfigured(env=process.env){return !!env.FIREBASE_SERVICE_ACCOUNT_JSON;}
export async function getLeadDatabase(){
 const raw=process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
 if(!raw)throw new Error('Lead storage is not configured');
 const {getApps,initializeApp,cert}=await import('firebase-admin/app');
 const {getFirestore}=await import('firebase-admin/firestore');
 let app=getApps().find(app=>app.name==='website-leads');
 if(!app)app=initializeApp({credential:cert(JSON.parse(raw))},'website-leads');
 return getFirestore(app);
}
export async function saveWebsiteLead(data){
 const db=await getLeadDatabase();
 const {FieldValue}=await import('firebase-admin/firestore');
 const ref=await db.collection('leads').add({
  contactName:data.name,email:data.email,phone:data.phone,businessName:data.company||data.name,
  town:'',website:'',source:data.source==='google'?'Ads':data.source||'Website',
  medium:data.medium,campaign:data.campaign,service:data.service,budget:data.budget,timescale:data.timescale,
  notes:data.message,status:'New',unread:true,inbound:true,notificationStatus:'pending',
  createdAt:FieldValue.serverTimestamp(),updatedAt:FieldValue.serverTimestamp(),
 });
 return ref.id;
}
export async function markLeadNotification(id,status){
 const db=await getLeadDatabase();await db.collection('leads').doc(id).update({notificationStatus:status});
}
