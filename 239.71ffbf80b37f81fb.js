(()=>{"use strict";function*E(t,n=t.length){for(let i=0;i<t.length;i++)if(1===n)yield[t[i]];else{const e=E([...t.slice(0,i),...t.slice(i+1,t.length)],n-1);for(const l of e)yield[t[i],...l]}}const q=["\uacf5\uaca9\ub825 \uac10\uc18c","\uacf5\uaca9\uc18d\ub3c4 \uac10\uc18c","\ubc29\uc5b4\ub825 \uac10\uc18c","\uc774\ub3d9\uc18d\ub3c4 \uac10\uc18c"];function S(t,n){const i=Object.assign({},t);return n.forEach(([e,l])=>{i[e]||(i[e]=0),i[e]+=l}),i}function A(t,n,i,e,l,s){const a=q.filter(r=>!s.allowedPenalties.includes(r)),O=Object.fromEntries([i.stonePenalty]),m=function(t,n){return Array.from({length:n},(i,e)=>{let l=0;for(let s=e;s<n-1;s+=1)l+=t[s+1][0].price;return l})}(t,n.length);function g(r){return a.find(c=>{var p;return r[c]>=5*Math.floor((null!==(p=O[c])&&void 0!==p?p:0)/5+1)})}const o=n.length;return function f(r,c,p,h,u){if(u===o)return function(r){return Object.keys(s.effects).find(c=>r[c]<s.effects[c])}(r)||s.ancientCountMin>0&&Object.values(h).filter(d=>6===d.grade).length<s.ancientCountMin?[]:[{effects:r,price:c,items:Object.assign({},h),stoneBook:i}];const y=[],b=t[u],P=n[u],v=m[u];for(const d of b){if(p.has(d.id)||c+d.price+v>l)continue;const _=S(r,d.effects);g(_)||(p.add(d.id),h[P]=d,y.push(...f(_,c+d.price,p,h,u+1)),p.delete(d.id),delete h[P])}return y}(Object.values(e).reduce((r,c)=>S(r,c.effects),O),0,new Set(Object.values(e).map(r=>r.id)),e,0)}function R(t){return JSON.stringify(Object.values(t.items).sort((n,i)=>n.name.localeCompare(i.name)))}function $(t,n){return t.filter(e=>e.isFixed||!function(e){return e.grade<5||!!n.hasBuyPrice&&!e.buyPrice||e.tradeLeft<n.tradeLeft||n.exclude.has(e.id)}(e))}function I(t,n,i,e,l){let s=Array.from(E(["\ubaa9\uac78\uc774","\uadc0\uac78\uc7741","\uadc0\uac78\uc7742","\ubc18\uc9c01","\ubc18\uc9c02"].filter(o=>!e[o])));const a=function(t){return{\uadc0\uac78\uc774:JSON.stringify(t.\uadc0\uac78\uc7741)===JSON.stringify(t.\uadc0\uac78\uc7742),\ubc18\uc9c0:JSON.stringify(t.\ubc18\uc9c01)===JSON.stringify(t.\ubc18\uc9c02)}}(n);a.\uadc0\uac78\uc774&&(s=s.filter(o=>o.findIndex(c=>"\uadc0\uac78\uc7741"===c)<o.findIndex(c=>"\uadc0\uac78\uc7742"===c))),a.\ubc18\uc9c0&&(s=s.filter(o=>o.findIndex(c=>"\ubc18\uc9c01"===c)<o.findIndex(c=>"\ubc18\uc9c02"===c)));const O=s.length*t.flatMap(o=>o.combinations).length,m=Object.fromEntries(Object.entries(i).map(([o,f])=>[o,$(f,l)]));let g=0;const j=new Map;for(const{combinations:o,stoneBook:f}of t){let r=[];for(const c of o)for(const p of s){const h=[];for(let u=0;u<p.length;u+=1){const y=p[u],b=Object.entries(c[u]),P=m[`${b[0][0]}_${b[0][1]}_${b[1][0]}_${b[1][1]}_${y}`].sort((v,d)=>v.price-d.price);P.length>0&&h.push(P)}if(h.length===p.length){r.push(...A(h,p,f,e,r.length?r[r.length-1].price:1/0,l));const u={};r.forEach(y=>{u[R(y)]=y}),r=Object.values(u),r.sort((y,b)=>y.price-b.price),r=r.slice(0,300)}g+=1,postMessage({done:!1,total:O,finished:g})}j.set(f,r)}postMessage({done:!0,result:[...j.values()].flat().sort((o,f)=>o.price-f.price)})}addEventListener("message",({data:t})=>{I(t.candidates,t.accMap,t.searchResult,t.fixedItems,t.filter)})})();