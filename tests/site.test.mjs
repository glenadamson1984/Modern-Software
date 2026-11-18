import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';import path from 'node:path';
const base=new URL('../dist/client/',import.meta.url);
const pages=['','about','services','portfolio','contact','consultancy','software-development-northern-ireland','website-design-northern-ireland','mobile-app-development','work/loweconex','work/sensoteq','work/terraquest','insights','insights/choosing-business-software','insights/planning-a-business-website','privacy'];
test('public pages contain indexable content, unique titles and correct canonical URLs without executing JavaScript',()=>{
 const titles=new Set();
 for(const page of pages){const html=fs.readFileSync(new URL((page?page+'/':'')+'index.html',base),'utf8');
  assert.equal((html.match(/<h1[\s>]/g)||[]).length,1,page);assert.equal((html.match(/rel="canonical"/g)||[]).length,1,page);
  assert.ok(html.includes('href="https://www.modern-software.co.uk'+(page?'/'+page:'/')+'"'),page);
  const title=html.match(/<title>(.*?)<\/title>/s)?.[1];assert.ok(title);assert.equal(titles.has(title),false,title);titles.add(title);
  assert.ok(html.includes('name="description"'));assert.ok(html.includes('lang="en-GB"'));assert.ok(html.includes('name="robots" content="index,follow"'));
  assert.ok(html.includes('https://www.glenadamson.co.uk/about'));assert.equal(html.includes('astro-island'),false,page);
 }
});
test('sitemap excludes admin, proposal and submission-only pages',()=>{
 const xml=fs.readFileSync(new URL('sitemap-0.xml',base),'utf8');for(const segment of ['/leads','/proposals','/thank-you','/404','modernsoftware.co.uk'])assert.equal(xml.includes(segment),false,segment);
 for(const page of ['software-development-northern-ireland','consultancy','website-design-northern-ireland','about'])assert.ok(xml.includes('/'+page));
});
test('page links resolve to a built page, server endpoint, redirect or existing asset',()=>{
 const output=JSON.parse(fs.readFileSync(new URL('../.vercel/output/config.json',import.meta.url),'utf8'));
 const redirects=new Set(output.routes.filter(r=>r.headers?.Location).map(r=>r.src.replace(/\/?\$$/,'')));
 for(const page of pages){const html=fs.readFileSync(new URL((page?page+'/':'')+'index.html',base),'utf8');
  for(const match of html.matchAll(/(?:href|src)="(\/[^"#?]*)(?:[?#][^"]*)?"/g)){const url=match[1];if(url.startsWith('/api/')||url.startsWith('/_astro/'))continue;
   const target=new URL('.'+url,base);const file=fs.existsSync(target),index=fs.existsSync(new URL('.'+url.replace(/\/$/,'')+'/index.html',base));
   assert.ok(file||index||redirects.has(url),`${page}: ${url}`);
  }
 }
});
