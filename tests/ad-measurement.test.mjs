import {test} from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFileSync} from 'node:fs';
const source=readFileSync(new URL('../public/scripts/ad-measurement.js',import.meta.url),'utf8');
function setup(stored){
 const handlers={},events={},scripts=[],storage=new Map(stored?[['modern-software-ad-consent-v1',stored]]:[]);
 const control=name=>({addEventListener:(_,fn)=>{handlers[name]=fn}});
 const banner={hidden:true,querySelector:control};
 const document={querySelector:s=>s==='[data-ad-consent]'?banner:control(s),createElement:()=>({}),head:{appendChild:s=>scripts.push(s)}};
 const window={addEventListener:(name,fn)=>events[name]=fn};
 vm.runInNewContext(source,{window,document,localStorage:{getItem:k=>storage.get(k),setItem:(k,v)=>storage.set(k,v)},Date});
 const conversions=()=>window.dataLayer.filter(args=>args[0]==='event'&&args[1]==='conversion');
 return {handlers,events,scripts,banner,conversions};
}
test('Google is blocked before consent and after rejection, including form success',()=>{
 const c=setup();assert.equal(c.banner.hidden,false);assert.equal(c.scripts.length,0);
 c.events['modern-software:enquiry-sent']();c.handlers['[data-ad-reject]']();c.events['modern-software:enquiry-sent']();
 assert.equal(c.scripts.length,0);assert.equal(c.conversions().length,0);
});
test('acceptance loads one tag; only successful enquiries produce conversion events; withdrawal stops them',()=>{
 const c=setup();c.handlers['[data-ad-accept]']();assert.equal(c.scripts.length,1);assert.equal(c.conversions().length,0);
 c.events['modern-software:enquiry-sent']();assert.equal(c.conversions().length,1);
 assert.deepEqual(Object.keys(c.conversions()[0][2]),['send_to']);
 c.handlers['[data-ad-settings]']();c.handlers['[data-ad-accept]']();assert.equal(c.scripts.length,1);
 c.handlers['[data-ad-reject]']();c.events['modern-software:enquiry-sent']();assert.equal(c.conversions().length,1);
});
test('returning rejection remains blocked and returning acceptance restores measurement',()=>{
 assert.equal(setup('rejected').scripts.length,0);const accepted=setup('accepted');assert.equal(accepted.scripts.length,1);assert.equal(accepted.banner.hidden,true);
});
