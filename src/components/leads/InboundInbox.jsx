import React,{useEffect,useState} from 'react';
import {collection,query,where,onSnapshot,doc,updateDoc,serverTimestamp} from 'firebase/firestore';
import {db} from '../../config/firebase';

export default function InboundInbox(){
 const [leads,setLeads]=useState([]),[error,setError]=useState(''),[open,setOpen]=useState(false),[loading,setLoading]=useState(true),[busy,setBusy]=useState('');
 useEffect(()=>onSnapshot(query(collection(db,'leads'),where('inbound','==',true)),snapshot=>{
  setLeads(snapshot.docs.map(row=>({id:row.id,...row.data()})).sort((a,b)=>(b.createdAt?.seconds||0)-(a.createdAt?.seconds||0)));setLoading(false);setError('');
 },()=>{setError('Unable to load website enquiries. Check your signed-in access and database permissions.');setLoading(false);}),[]);
 const unread=leads.filter(lead=>lead.unread).length;
 async function update(id,changes){setBusy(id);try{await updateDoc(doc(db,'leads',id),{...changes,updatedAt:serverTimestamp()});setError('');}catch{setError('The update could not be saved. Please try again.');}finally{setBusy('');}}
 return <section className="inbound-inbox"><div className="inbound-heading"><div><h2>Website enquiries</h2><p>App ideas and project requests from your website.</p></div><button type="button" className="inbound-bell" aria-expanded={open} aria-controls="inbound-list" onClick={()=>setOpen(!open)} aria-label={`${unread} unread website enquiries`}><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></svg> {unread} new {open?'Hide':'View'}</button></div>
  {error&&<p role="alert">{error}</p>}
  {open&&<div id="inbound-list">{loading?<p role="status">Loading enquiries…</p>:leads.length===0?<p>No website enquiries yet. New submissions will appear here once server-side lead storage is connected.</p>:leads.map(lead=><article className="inbound-card" key={lead.id}>
   <div className="inbound-heading"><h3>{lead.contactName||lead.businessName} {lead.unread&&<span className="inbound-new">New</span>}</h3><time>{lead.createdAt?.toDate?.().toLocaleString('en-GB')||'Just received'}</time></div>
   <div className="inbound-contact"><a href={'mailto:'+lead.email}>{lead.email}</a>{lead.phone&&<a href={'tel:'+lead.phone.replace(/[^\d+]/g,'')}>{lead.phone}</a>}</div>
   <p className="inbound-message">{lead.notes}</p><p className="inbound-meta">{[lead.service,lead.source,lead.medium,lead.campaign].filter(Boolean).join(' · ')}</p>
   {lead.notificationStatus==='failed'&&<p role="status">Saved here, but the email alert could not be delivered.</p>}
   <div className="inbound-actions"><label>Follow-up status<select value={lead.status||'New'} disabled={busy===lead.id} onChange={event=>update(lead.id,{status:event.target.value})}>{['New','Contacted','Qualified','Won','Lost'].map(status=><option key={status}>{status}</option>)}</select></label>{lead.unread&&<button type="button" disabled={busy===lead.id} onClick={()=>update(lead.id,{unread:false})}>Mark as read</button>}</div>
  </article>)}</div>}
  <style>{`.inbound-inbox{background:#212623;color:#f3f5ef;border:1px solid #526057;border-radius:12px;padding:26px;margin-bottom:30px;font:16px Inter,Arial,sans-serif}.inbound-inbox p{font-size:16px;color:#c0cdc4;line-height:1.6}.inbound-inbox h2{font-size:28px;color:#b5f4d7;letter-spacing:-.03em;margin:0 0 10px}.inbound-heading{display:flex;align-items:center;justify-content:space-between;gap:20px;flex-wrap:wrap}.inbound-bell,.inbound-actions button{padding:12px 16px;border:1px solid #b5f4d7;border-radius:6px;color:#17251d;background:#b5f4d7;cursor:pointer;font-size:16px}.inbound-card{border-top:1px solid #526057;margin-top:24px;padding-top:24px}.inbound-card h3{font-size:22px;color:#fff;letter-spacing:-.02em}.inbound-card time,.inbound-new{font-size:14px}.inbound-new{padding:4px 8px;background:#ef91b8;color:#20151b;border-radius:4px;margin-left:8px}.inbound-contact{display:flex;flex-wrap:wrap;gap:20px;margin-block:18px}.inbound-contact a{color:#b5f4d7;overflow-wrap:anywhere;text-decoration:underline}.inbound-message{white-space:pre-wrap;overflow-wrap:anywhere}.inbound-meta{margin-block:16px}.inbound-actions{display:flex;align-items:end;flex-wrap:wrap;gap:20px}.inbound-actions label{font-size:14px}.inbound-actions select{font-size:16px;min-width:180px}.inbound-actions button:disabled{opacity:.6}`}</style>
 </section>;
}
