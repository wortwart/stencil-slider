let t,e,n,l=0,o=!1,s=!1,r=!1,c=!1;const i=window,a=document,f={t:0,l:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,l)=>t.addEventListener(e,n,l),rel:(t,e,n,l)=>t.removeEventListener(e,n,l)},u=(()=>!!a.documentElement.attachShadow)(),w=(()=>{try{return new CSSStyleSheet,!0}catch(t){}return!1})(),m=new WeakMap,p=t=>m.get(t),d=(t,e)=>m.set(e.o=t,e),$=(t,e)=>e in t,h=t=>console.error(t),y=new Map,b=new Map,_=[],j=[],g=[],v=(t,e)=>n=>{t.push(n),o||(o=!0,e&&4&f.t?S(R):f.raf(R))},M=(t,e)=>{let n=0,l=0;for(;n<t.length&&(l=performance.now())<e;)try{t[n++](l)}catch(o){h(o)}n===t.length?t.length=0:0!==n&&t.splice(0,n)},R=()=>{l++,(t=>{for(let n=0;n<t.length;n++)try{t[n](performance.now())}catch(e){h(e)}t.length=0})(_);const t=2==(6&f.t)?performance.now()+10*Math.ceil(l*(1/22)):1/0;M(j,t),M(g,t),j.length>0&&(g.push(...j),j.length=0),(o=_.length+j.length+g.length>0)?f.raf(R):l=0},S=t=>Promise.resolve().then(t),k=v(j,!0),U={},L=t=>"object"==(t=typeof t)||"function"===t,O=()=>i.CSS&&i.CSS.supports&&i.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_wortwart("./p-d8631f0b.js").then(()=>{f.s=i.__stencil_cssshim}),P=async()=>{f.s=i.__stencil_cssshim;const t=new RegExp("/wortwart(\\.esm)?\\.js($|\\?|#)"),e=Array.from(a.querySelectorAll("script")).find(e=>t.test(e.src)||"wortwart"===e.getAttribute("data-stencil-namespace")),n=e["data-opts"];{const t=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,i.location.href));return x(t.href),window.customElements||await __sc_import_wortwart("./p-d0882b30.js"),Object.assign(Object.assign({},n),{resourcesUrl:t.href})}},x=t=>{const e=(()=>`__sc_import_${"wortwart".replace(/\s|-/g,"_")}`)();try{i[e]=new Function("w",`return import(w);//${Math.random()}`)}catch(n){const l=new Map;i[e]=n=>{const o=new URL(n,t).href;let s=l.get(o);if(!s){const t=a.createElement("script");t.type="module",t.src=URL.createObjectURL(new Blob([`import * as m from '${o}'; window.${e}.m = m;`],{type:"application/javascript"})),s=new Promise(n=>{t.onload=()=>{n(i[e].m),t.remove()}}),l.set(o,s),a.head.appendChild(t)}return s}}},C=new WeakMap,T=t=>"sc-"+t,A=(t,e,...n)=>{let l=null,o=null,s=!1,r=!1,c=[];const i=e=>{for(let n=0;n<e.length;n++)l=e[n],Array.isArray(l)?i(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof t&&!L(l))&&(l=String(l)),s&&r?c[c.length-1].i+=l:c.push(s?E(null,l):l),r=s)};if(i(n),e){e.name&&(o=e.name);{const t=e.className||e.class;t&&(e.class="object"!=typeof t?t:Object.keys(t).filter(e=>t[e]).join(" "))}}const a=E(t,null);return a.u=e,c.length>0&&(a.p=c),a.$=o,a},E=(t,e)=>({t:0,h:t,i:e,_:null,p:null,u:null,$:null}),W={},D=(t,e,n,l,o,s)=>{if(n===l)return;let r=$(t,e),c=e.toLowerCase();if("class"===e){const e=t.classList,o=N(n),s=N(l);e.remove(...o.filter(t=>t&&!s.includes(t))),e.add(...s.filter(t=>t&&!o.includes(t)))}else if(r||"o"!==e[0]||"n"!==e[1]){const c=L(l);if((r||c&&null!==l)&&!o)try{if(t.tagName.includes("-"))t[e]=l;else{let o=null==l?"":l;"list"===e?r=!1:null!=n&&t[e]==o||(t[e]=o)}}catch(a){}null==l||!1===l?t.removeAttribute(e):(!r||4&s||o)&&!c&&t.setAttribute(e,l=!0===l?"":l)}else e="-"===e[2]?e.slice(3):$(i,c)?c.slice(2):c[2]+e.slice(3),n&&f.rel(t,e,n,!1),l&&f.ael(t,e,l,!1)},F=/\s/,N=t=>t?t.split(F):[],q=(t,e,n,l)=>{const o=11===e._.nodeType&&e._.host?e._.host:e._,s=t&&t.u||U,r=e.u||U;for(l in s)l in r||D(o,l,s[l],void 0,n,e.t);for(l in r)D(o,l,s[l],r[l],n,e.t)},B=(l,o,r,i)=>{let f,u,w,m=o.p[r],p=0;if(s||(c=!0,"slot"===m.h&&(t&&i.classList.add(t+"-s"),m.t|=m.p?2:1)),null!==m.i)f=m._=a.createTextNode(m.i);else if(1&m.t)f=m._=a.createTextNode("");else if(f=m._=a.createElement(2&m.t?"slot-fb":m.h),q(null,m,!1),(t=>null!=t)(t)&&f["s-si"]!==t&&f.classList.add(f["s-si"]=t),m.p)for(p=0;p<m.p.length;++p)(u=B(l,m,p,f))&&f.appendChild(u);return f["s-hn"]=n,3&m.t&&(f["s-sr"]=!0,f["s-cr"]=e,f["s-sn"]=m.$||"",(w=l&&l.p&&l.p[r])&&w.h===m.h&&l._&&H(l._,!1)),f},H=(t,e)=>{f.t|=1;const l=t.childNodes;for(let o=l.length-1;o>=0;o--){const t=l[o];t["s-hn"]!==n&&t["s-ol"]&&(J(t).insertBefore(t,I(t)),t["s-ol"].remove(),t["s-ol"]=void 0,c=!0),e&&H(t,e)}f.t&=-2},V=(t,e,l,o,s,r)=>{let c,i=t["s-cr"]&&t["s-cr"].parentNode||t;for(i.shadowRoot&&i.tagName===n&&(i=i.shadowRoot);s<=r;++s)o[s]&&(c=B(null,l,s,t))&&(o[s]._=c,i.insertBefore(c,I(e)))},z=(t,e,n,l,o)=>{for(;e<=n;++e)(l=t[e])&&(r=!0,(o=l._)["s-ol"]?o["s-ol"].remove():H(o,!0),o.remove())},G=(t,e)=>t.h===e.h&&("slot"!==t.h||t.$===e.$),I=t=>t&&t["s-ol"]||t,J=t=>(t["s-ol"]?t["s-ol"]:t).parentNode,K=(t,e)=>{const n=e._=t._,l=t.p,o=e.p;let s;null===e.i?("slot"===e.h||q(t,e,!1),null!==l&&null!==o?((t,e,n,l)=>{let o,s=0,r=0,c=e.length-1,i=e[0],a=e[c],f=l.length-1,u=l[0],w=l[f];for(;s<=c&&r<=f;)null==i?i=e[++s]:null==a?a=e[--c]:null==u?u=l[++r]:null==w?w=l[--f]:G(i,u)?(K(i,u),i=e[++s],u=l[++r]):G(a,w)?(K(a,w),a=e[--c],w=l[--f]):G(i,w)?("slot"!==i.h&&"slot"!==w.h||H(i._.parentNode,!1),K(i,w),t.insertBefore(i._,a._.nextSibling),i=e[++s],w=l[--f]):G(a,u)?("slot"!==i.h&&"slot"!==w.h||H(a._.parentNode,!1),K(a,u),t.insertBefore(a._,i._),a=e[--c],u=l[++r]):(o=B(e&&e[r],n,r,t),u=l[++r],o&&J(i._).insertBefore(o,I(i._)));s>c?V(t,null==l[f+1]?null:l[f+1]._,n,l,r,f):r>f&&z(e,s,c)})(n,l,e,o):null!==o?(null!==t.i&&(n.textContent=""),V(n,null,e,o,0,o.length-1)):null!==l&&z(l,0,l.length-1)):(s=n["s-cr"])?s.parentNode.textContent=e.i:t.i!==e.i&&(n.data=e.i)},Q=t=>{let e,n,l,o,s,r,c=t.childNodes;for(n=0,l=c.length;n<l;n++)if(1===(e=c[n]).nodeType){if(e["s-sr"])for(s=e["s-sn"],e.hidden=!1,o=0;o<l;o++)if(c[o]["s-hn"]!==e["s-hn"])if(r=c[o].nodeType,""!==s){if(1===r&&s===c[o].getAttribute("slot")){e.hidden=!0;break}}else if(1===r||3===r&&""!==c[o].textContent.trim()){e.hidden=!0;break}Q(e)}},X=[],Y=t=>{let e,n,l,o,s=t.childNodes,c=s.length,i=0,a=0,f=0;for(c=s.length;i<c;i++){if((e=s[i])["s-sr"]&&(n=e["s-cr"]))for(o=e["s-sn"],a=(l=n.parentNode.childNodes).length-1;a>=0;a--)(n=l[a])["s-cn"]||n["s-nr"]||n["s-hn"]===e["s-hn"]||((3===(f=n.nodeType)||8===f)&&""===o||1===f&&null===n.getAttribute("slot")&&""===o||1===f&&n.getAttribute("slot")===o)&&(X.some(t=>t.j===n)||(r=!0,n["s-sn"]=o,X.push({g:e,j:n})));1===e.nodeType&&Y(e)}},Z=(t,e)=>{e&&!t.v&&e["s-p"].push(new Promise(e=>t.v=e))},tt=(t,e,n,l)=>{if(e.t|=16,4&e.t)return void(e.t|=512);const o=e.o,s=()=>et(t,e,n,o,l);let r;return Z(e,e.M),l&&(r=ot(o,"componentWillLoad")),st(r,()=>k(s))},et=(l,o,i,w,m)=>{const p=l["s-rc"];m&&((t,e)=>{const n=((t,e)=>{let n=T(e.R),l=b.get(n);if(t=11===t.nodeType?t:a,l)if("string"==typeof l){let e,o=C.get(t=t.head||t);o||C.set(t,o=new Set),o.has(n)||((e=a.createElement("style")).innerHTML=l,t.insertBefore(e,t.querySelector("link")),o&&o.add(n))}else t.adoptedStyleSheets.includes(l)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,l]);return n})(u&&t.shadowRoot?t.shadowRoot:t.getRootNode(),e);10&e.t&&(t["s-sc"]=n,t.classList.add(n+"-h"))})(l,i);try{((l,o,i,w)=>{n=l.tagName;const m=o.S||E(null,null),p=(t=>t&&t.h===W)(w)?w:A(null,null,w);if(p.h=null,p.t|=4,o.S=p,p._=m._=l.shadowRoot||l,t=l["s-sc"],e=l["s-cr"],s=u&&0!=(1&i.t),r=!1,K(m,p),c){Y(p._);for(let t=0;t<X.length;t++){const e=X[t];if(!e.j["s-ol"]){const t=a.createTextNode("");t["s-nr"]=e.j,e.j.parentNode.insertBefore(e.j["s-ol"]=t,e.j)}}f.t|=1;for(let t=0;t<X.length;t++){const e=X[t],n=e.g.parentNode;let l=e.g.nextSibling,o=e.j["s-ol"];for(;o=o.previousSibling;){let t=o["s-nr"];if(t&&t["s-sn"]===e.j["s-sn"]&&n===t.parentNode&&(!(t=t.nextSibling)||!t["s-nr"])){l=t;break}}(!l&&n!==e.j.parentNode||e.j.nextSibling!==l)&&e.j!==l&&n.insertBefore(e.j,l)}f.t&=-2}r&&Q(p._),X.length=0})(l,o,i,w.render())}catch(d){h(d)}o.t&=-17,o.t|=2,p&&(p.forEach(t=>t()),l["s-rc"]=void 0);{const t=l["s-p"],e=()=>nt(l,o,i);0===t.length?e():(Promise.all(t).then(e),o.t|=4,t.length=0)}},nt=(t,e,n)=>{const l=e.o,o=e.M;64&e.t?ot(l,"componentDidUpdate"):(e.t|=64,t.classList.add("hydrated"),ot(l,"componentDidLoad"),e.k(t),o||lt()),e.v&&(e.v(),e.v=void 0),512&e.t&&S(()=>tt(t,e,n,!1)),e.t&=-517},lt=()=>{a.documentElement.classList.add("hydrated"),f.t|=2},ot=(t,e,n)=>{if(t&&t[e])try{return t[e](n)}catch(l){h(l)}},st=(t,e)=>t&&t.then?t.then(e):e(),rt=(t,e,n)=>{if(e.U){const l=Object.entries(e.U),o=t.prototype;if(l.forEach(([t,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(o,t,{get(){return((t,e)=>p(t).L.get(e))(this,t)},set(n){((t,e,n,l)=>{const o=p(this),s=o.O,r=o.L.get(e),c=o.t,i=o.o;(n=((t,e)=>null==t||L(t)?t:4&e?"false"!==t&&(""===t||!!t):t)(n,l.U[e][0]))===r||8&c&&void 0!==r||(o.L.set(e,n),i&&2==(18&c)&&tt(s,o,l,!1))})(0,t,n,e)},configurable:!0,enumerable:!0})}),1&n){const e=new Map;o.attributeChangedCallback=function(t,n,l){f.jmp(()=>{const n=e.get(t);this[n]=(null!==l||"boolean"!=typeof this[n])&&l})},t.observedAttributes=l.filter(([t,e])=>15&e[0]).map(([t,n])=>{const l=n[1]||t;return e.set(l,t),l})}}return t},ct=(t,e={})=>{const n=[],l=e.exclude||[],o=a.head,s=i.customElements,r=o.querySelector("meta[charset]"),c=a.createElement("style"),d=[];let $,_=!0;Object.assign(f,e),f.l=new URL(e.resourcesUrl||"./",a.baseURI).href,e.syncQueue&&(f.t|=4),t.forEach(t=>t[1].forEach(e=>{const o={t:e[0],R:e[1],U:e[2],P:e[3]};o.U=e[2],!u&&1&o.t&&(o.t|=8);const r=o.R,c=class extends HTMLElement{constructor(t){super(t),(t=>{const e={t:0,O:t,L:new Map};e.C=new Promise(t=>e.k=t),t["s-p"]=[],t["s-rc"]=[],m.set(t,e)})(t=this),1&o.t&&(u?t.attachShadow({mode:"open"}):"shadowRoot"in t||(t.shadowRoot=t))}connectedCallback(){$&&(clearTimeout($),$=null),_?d.push(this):f.jmp(()=>((t,e)=>{if(0==(1&f.t)){const n=()=>{},l=p(t);if(!(1&l.t)){let n;l.t|=1,n||(4&e.t||8&e.t)&&(t=>{const e=t["s-cr"]=a.createComment("");e["s-cn"]=!0,t.insertBefore(e,t.firstChild)})(t);{let e=t;for(;e=e.parentNode||e.host;)if(e["s-p"]){Z(l,l.M=e);break}}e.U&&Object.entries(e.U).forEach(([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}}),S(()=>(async(t,e,n,l,o)=>{if(0==(32&e.t)){e.t|=32;{if((o=(t=>{const e=t.R.replace(/-/g,"_"),n=t.T,l=y.get(n);return l?l[e]:__sc_import_wortwart(`./${n}.entry.js`).then(t=>(y.set(n,t),t[e]),h)})(n)).then){const t=()=>{};o=await o,t()}o.isProxied||(rt(o,n,2),o.isProxied=!0);const t=()=>{};e.t|=8;try{new o(e)}catch(c){h(c)}e.t&=-9,t()}const t=T(n.R);if(!b.has(t)&&o.style){const e=()=>{};let l=o.style;8&n.t&&(l=await __sc_import_wortwart("./p-affe7c09.js").then(e=>e.scopeCss(l,t,!1))),((t,e,n)=>{let l=b.get(t);w&&n?(l=l||new CSSStyleSheet).replace(e):l=e,b.set(t,l)})(t,l,!!(1&n.t)),e()}}const s=e.M,r=()=>tt(t,e,n,!0);s&&s["s-rc"]?s["s-rc"].push(r):r()})(t,l,e))}n()}})(this,o))}disconnectedCallback(){f.jmp(()=>void 0)}"s-hmr"(t){}forceUpdate(){((t,e)=>{{const n=p(t);2==(18&n.t)&&tt(t,n,e,!1)}})(this,o)}componentOnReady(){return p(this).C}};o.T=t[0],l.includes(r)||s.get(r)||(n.push(r),s.define(r,rt(c,o,1)))})),c.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",c.setAttribute("data-styles",""),o.insertBefore(c,r?r.nextSibling:o.firstChild),_=!1,d.length>0?d.forEach(t=>t.connectedCallback()):f.jmp(()=>$=setTimeout(lt,30,"timeout"))},it=t=>p(t).O;export{O as a,ct as b,it as g,A as h,P as p,d as r};