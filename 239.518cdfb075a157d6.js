(()=>{"use strict";function*O(t,e=t.length){for(let n=0;n<t.length;n++)if(1===e)yield[t[n]];else{const r=O([...t.slice(0,n),...t.slice(n+1,t.length)],e-1);for(const c of r)yield[t[n],...c]}}const E=["\uacf5\uaca9\ub825 \uac10\uc18c","\uacf5\uaca9\uc18d\ub3c4 \uac10\uc18c","\ubc29\uc5b4\ub825 \uac10\uc18c","\uc774\ub3d9\uc18d\ub3c4 \uac10\uc18c"];function m(t,e){const n=Object.assign({},t);return Object.entries(e).forEach(([r,c])=>{n[r]||(n[r]=0),n[r]+=c}),n}function R(t,e,n,r,c,u){const b=E.filter(i=>!u.allowedPenalties.includes(i));function f(i){return!!u.hasBuyPrice&&!i.buyPrice||i.tradeLeft<u.tradeLeft||u.exclude.has(i.id)}return function l(i,o,s,a,h){if(function(i){return b.find(o=>{var s;return i[o]>=5*Math.floor((null!==(s=n[o])&&void 0!==s?s:0)/5+1)})}(i)||o>c)return[];if(h===e.length)return function(i){return Object.keys(u.effects).find(o=>i[o]<u.effects[o])}(i)?[]:[{effects:i,price:o,items:a}];const j=[],F=t[h],S=e[h];for(const g of F)s[g.name]||f(g)||j.push(...l(m(i,g.effects),o+g.price,Object.assign(Object.assign({},s),{[g.name]:!0}),Object.assign(Object.assign({},a),{[S]:g}),h+1));return j}(Object.values(r).reduce((i,o)=>m(i,o.effects),n),0,Object.fromEntries(Object.values(r).map(i=>[i.name,!0])),r,0)}function P(t){return JSON.stringify(Object.values(t.items).sort((e,n)=>e.name.localeCompare(n.name)))}function $(t,e,n,r,c){const u=Array.from(O(["\ubaa9\uac78\uc774","\uadc0\uac78\uc7741","\uadc0\uac78\uc7742","\ubc18\uc9c01","\ubc18\uc9c02"].filter(p=>!r[p]))),b=u.length*t.length;let d=0,f=[];for(const p of t)for(const l of u){const i=[];for(let o=0;o<l.length;o+=1){const s=l[o],a=Object.entries(p[o]),h=n[`${a[0][0]}_${a[0][1]}_${a[1][0]}_${a[1][1]}_${s}`];h.length>0&&i.push(h)}if(i.length===l.length){f.push(...R(i,l,e,r,f.length?f[f.length-1].price:1/0,c));const o={};f.forEach(s=>{o[P(s)]=s}),f=Object.values(o),f.sort((s,a)=>s.price-a.price),f=f.slice(0,300)}d+=1,postMessage({done:!1,total:b,finished:d})}postMessage({done:!0,result:f})}addEventListener("message",({data:t})=>{$(t.combinations,t.initialEffect,t.searchResult,t.fixedItems,t.filter)})})();