(()=>{"use strict";function*v(n,t=n.length){for(let i=0;i<n.length;i++)if(1===t)yield[n[i]];else{const e=v([...n.slice(0,i),...n.slice(i+1,n.length)],t-1);for(const l of e)yield[n[i],...l]}}const I=["\uacf5\uaca9\ub825 \uac10\uc18c","\uacf5\uaca9\uc18d\ub3c4 \uac10\uc18c","\ubc29\uc5b4\ub825 \uac10\uc18c","\uc774\ub3d9\uc18d\ub3c4 \uac10\uc18c"];function _(n,t){const i=Object.assign({},n);return t.forEach(([e,l])=>{i[e]||(i[e]=0),i[e]+=l}),i}function R(n,t,i,e,l,s){const f=I.filter(r=>!s.allowedPenalties.includes(r)),O=Object.fromEntries([i.stonePenalty]),h=function(n,t){return Array.from({length:t},(i,e)=>{let l=0;for(let s=e;s<t-1;s+=1)l+=n[s+1][0].price;return l})}(n,t.length);function g(r){return f.find(c=>{var p;return r[c]>=5*Math.floor((null!==(p=O[c])&&void 0!==p?p:0)/5+1)})}const o=t.length;return function a(r,c,p,y,u){if(u===o)return function(r){return Object.keys(s.effects).find(c=>r[c]<s.effects[c])}(r)||s.ancientCountMin>0&&Object.values(y).filter(d=>6===d.grade).length<s.ancientCountMin?[]:[{effects:r,price:c,items:Object.assign({},y),stoneBook:i}];const m=[],b=n[u],x=t[u],P=h[u];for(const d of b){if(p.has(d.name)||c+d.price+P>l)continue;const E=_(r,d.effects);g(E)||(p.add(d.name),y[x]=d,m.push(...a(E,c+d.price,p,y,u+1)),p.delete(d.name),delete y[x])}return m}(Object.values(e).reduce((r,c)=>_(r,c.effects),O),0,new Set(Object.values(e).map(r=>r.name)),e,0)}function $(n){return JSON.stringify(Object.values(n.items).sort((t,i)=>t.name.localeCompare(i.name)))}function w(n,t){return n.filter(e=>e.isFixed||!function(e){return e.grade<5||!!t.hasBuyPrice&&!e.buyPrice||e.tradeLeft<t.tradeLeft||t.exclude.has(e.id)}(e))}function C(n,t,i,e,l){let s=Array.from(v(["\ubaa9\uac78\uc774","\uadc0\uac78\uc7741","\uadc0\uac78\uc7742","\ubc18\uc9c01","\ubc18\uc9c02"].filter(o=>!e[o])));const f=function(n){return{\uadc0\uac78\uc774:JSON.stringify(n.\uadc0\uac78\uc7741)===JSON.stringify(n.\uadc0\uac78\uc7742),\ubc18\uc9c0:JSON.stringify(n.\ubc18\uc9c01)===JSON.stringify(n.\ubc18\uc9c02)}}(t);f.\uadc0\uac78\uc774&&(s=s.filter(o=>o.findIndex(c=>"\uadc0\uac78\uc7741"===c)<o.findIndex(c=>"\uadc0\uac78\uc7742"===c))),f.\ubc18\uc9c0&&(s=s.filter(o=>o.findIndex(c=>"\ubc18\uc9c01"===c)<o.findIndex(c=>"\ubc18\uc9c02"===c)));const O=s.length*n.flatMap(o=>o.combinations).length,h=Object.fromEntries(Object.entries(i).map(([o,a])=>[o,w(a,l)]));let g=0;const j=new Map;for(const{combinations:o,stoneBook:a}of n){let r=[];for(const c of o)for(const p of s){const y=[];for(let u=0;u<p.length;u+=1){const m=p[u],b=Object.entries(c[u]),x=h[`${b[0][0]}_${b[0][1]}_${b[1][0]}_${b[1][1]}_${t[m].category}_${t[m].quality}`].sort((P,d)=>P.price-d.price);x.length>0&&y.push(x)}if(y.length===p.length){r.push(...R(y,p,a,e,r.length?r[r.length-1].price:1/0,l));const u={};r.forEach(m=>{u[$(m)]=m}),r=Object.values(u),r.sort((m,b)=>m.price-b.price),r=r.slice(0,300)}g+=1,postMessage({done:!1,total:O,finished:g})}j.set(a,r)}postMessage({done:!0,result:[...j.values()].flat().sort((o,a)=>o.price-a.price)})}addEventListener("message",({data:n})=>{C(n.candidates,n.accMap,n.searchResult,n.fixedItems,n.filter)})})();