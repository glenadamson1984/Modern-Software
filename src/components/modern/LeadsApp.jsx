import React,{useEffect,useState} from 'react';
export default function LeadsApp(){
 const [Ready,setReady]=useState(null);const [failed,setFailed]=useState(false);
 useEffect(()=>{let active=true;Promise.all([import('../../../pages/leads.jsx'),import('../../contexts/AuthContext')]).then(([{default:Leads},{AuthProvider}])=>{if(active)setReady(()=>function Admin(){return <AuthProvider><Leads/></AuthProvider>;});}).catch(()=>{if(active)setFailed(true);});return()=>{active=false;};},[]);
 return Ready?<Ready/>:<section className="page-hero wrap"><h1>Admin access.</h1><p role="status">{failed?'Admin sign-in is currently unavailable. Please check the Firebase configuration for this deployment.':'Loading secure sign-in…'}</p><a href="/">Return to the public website</a></section>;
}
