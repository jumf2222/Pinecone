var app=function(){"use strict";function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function s(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(s)}function l(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(e,n,s){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const s=e.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}(n,s))}function a(t,e,n,s){if(t){const o=u(t,e,n,s);return t[0](o)}}function u(t,e,s,o){return t[1]&&o?n(s.ctx.slice(),t[1](o(e))):s.ctx}function d(t,e,n,s,o,r,l){const i=function(t,e,n,s){if(t[2]&&s){const o=t[2](s(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let s=0;s<n;s+=1)t[s]=e.dirty[s]|o[s];return t}return e.dirty|o}return e.dirty}(e,s,o,r);if(i){const o=u(e,n,s,l);t.p(o,i)}}function f(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function p(t,e,n=e){return t.set(n),e}const m="undefined"!=typeof window;let h=m?()=>window.performance.now():()=>Date.now(),g=m?t=>requestAnimationFrame(t):t;const $=new Set;function v(t){$.forEach((e=>{e.c(t)||($.delete(e),e.f())})),0!==$.size&&g(v)}function b(t,e){t.appendChild(e)}function y(t,e,n){t.insertBefore(e,n||null)}function x(t){t.parentNode.removeChild(t)}function w(t){return document.createElement(t)}function k(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function _(t){return document.createTextNode(t)}function C(){return _(" ")}function S(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function E(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function M(t,e){for(const n in e)E(t,n,e[n])}function A(t){return""===t?null:+t}function j(t){return Array.from(t.childNodes)}function q(t,e,n,s){for(let s=0;s<t.length;s+=1){const o=t[s];if(o.nodeName===e){let e=0;const r=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||r.push(t.name)}for(let t=0;t<r.length;t++)o.removeAttribute(r[t]);return t.splice(s,1)[0]}}return s?k(e):w(e)}function L(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function N(t,e){t.value=null==e?"":e}function H(t,e,n,s){t.style.setProperty(e,n,s?"important":"")}let T;function z(){if(void 0===T){T=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){T=!0}}return T}function Z(t,e){const n=getComputedStyle(t),s=(parseInt(n.zIndex)||0)-1;"static"===n.position&&(t.style.position="relative");const o=w("iframe");o.setAttribute("style",`display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: ${s};`),o.setAttribute("aria-hidden","true"),o.tabIndex=-1;const r=z();let l;return r?(o.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",l=S(window,"message",(t=>{t.source===o.contentWindow&&e()}))):(o.src="about:blank",o.onload=()=>{l=S(o.contentWindow,"resize",e)}),b(t,o),()=>{(r||l&&o.contentWindow)&&l(),x(o)}}function D(t,e,n){t.classList[n?"add":"remove"](e)}const I=new Set;let O,V=0;function F(t,e,n,s,o,r,l,i=0){const c=16.666/s;let a="{\n";for(let t=0;t<=1;t+=c){const s=e+(n-e)*r(t);a+=100*t+`%{${l(s,1-s)}}\n`}const u=a+`100% {${l(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${i}`,f=t.ownerDocument;I.add(f);const p=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild(w("style")).sheet),m=f.__svelte_rules||(f.__svelte_rules={});m[d]||(m[d]=!0,p.insertRule(`@keyframes ${d} ${u}`,p.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?`${h}, `:""}${d} ${s}ms linear ${o}ms 1 both`,V+=1,d}function W(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),o=n.length-s.length;o&&(t.style.animation=s.join(", "),V-=o,V||g((()=>{V||(I.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),I.clear())})))}function B(t){O=t}const P=[],R=[],G=[],J=[],Y=Promise.resolve();let K=!1;function Q(t){G.push(t)}function U(t){J.push(t)}let X=!1;const tt=new Set;function et(){if(!X){X=!0;do{for(let t=0;t<P.length;t+=1){const e=P[t];B(e),nt(e.$$)}for(B(null),P.length=0;R.length;)R.pop()();for(let t=0;t<G.length;t+=1){const e=G[t];tt.has(e)||(tt.add(e),e())}G.length=0}while(P.length);for(;J.length;)J.pop()();K=!1,X=!1,tt.clear()}}function nt(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Q)}}let st;function ot(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const rt=new Set;let lt;function it(){lt={r:0,c:[],p:lt}}function ct(){lt.r||r(lt.c),lt=lt.p}function at(t,e){t&&t.i&&(rt.delete(t),t.i(e))}function ut(t,e,n,s){if(t&&t.o){if(rt.has(t))return;rt.add(t),lt.c.push((()=>{rt.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}const dt={duration:0};function ft(n,s,o,i){let c=s(n,o),a=i?0:1,u=null,d=null,f=null;function p(){f&&W(n,f)}function m(t,e){const n=t.b-a;return e*=Math.abs(n),{a:a,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function b(s){const{delay:o=0,duration:l=300,easing:i=e,tick:b=t,css:y}=c||dt,x={start:h()+o,b:s};s||(x.group=lt,lt.r+=1),u||d?d=x:(y&&(p(),f=F(n,a,s,l,o,i,y)),s&&b(0,1),u=m(x,l),Q((()=>ot(n,s,"start"))),function(t){let e;0===$.size&&g(v),new Promise((n=>{$.add(e={c:t,f:n})}))}((t=>{if(d&&t>d.start&&(u=m(d,l),d=null,ot(n,u.b,"start"),y&&(p(),f=F(n,a,u.b,u.duration,0,i,c.css))),u)if(t>=u.end)b(a=u.b,1-a),ot(n,u.b,"end"),d||(u.b?p():--u.group.r||r(u.group.c)),u=null;else if(t>=u.start){const e=t-u.start;a=u.a+u.d*i(e/u.duration),b(a,1-a)}return!(!u&&!d)})))}return{run(t){l(c)?(st||(st=Promise.resolve(),st.then((()=>{st=null}))),st).then((()=>{c=c(),b(t)})):b(t)},end(){p(),u=d=null}}}function pt(t,e){ut(t,1,1,(()=>{e.delete(t.key)}))}function mt(t,e,n,s,o,r,l,i,c,a,u,d){let f=t.length,p=r.length,m=f;const h={};for(;m--;)h[t[m].key]=m;const g=[],$=new Map,v=new Map;for(m=p;m--;){const t=d(o,r,m),i=n(t);let c=l.get(i);c?s&&c.p(t,e):(c=a(i,t),c.c()),$.set(i,g[m]=c),i in h&&v.set(i,Math.abs(m-h[i]))}const b=new Set,y=new Set;function x(t){at(t,1),t.m(i,u),l.set(t.key,t),u=t.first,p--}for(;f&&p;){const e=g[p-1],n=t[f-1],s=e.key,o=n.key;e===n?(u=e.first,f--,p--):$.has(o)?!l.has(s)||b.has(s)?x(e):y.has(o)?f--:v.get(s)>v.get(o)?(y.add(s),x(e)):(b.add(o),f--):(c(n,l),f--)}for(;f--;){const e=t[f];$.has(e.key)||c(e,l)}for(;p;)x(g[p-1]);return g}function ht(t,e,n){const s=t.$$.props[e];void 0!==s&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function gt(t){t&&t.c()}function $t(t,e,n){const{fragment:o,on_mount:i,on_destroy:c,after_update:a}=t.$$;o&&o.m(e,n),Q((()=>{const e=i.map(s).filter(l);c?c.push(...e):r(e),t.$$.on_mount=[]})),a.forEach(Q)}function vt(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function bt(t,e){-1===t.$$.dirty[0]&&(P.push(t),K||(K=!0,Y.then(et)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function yt(e,n,s,l,i,c,a=[-1]){const u=O;B(e);const d=n.props||{},f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:i,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:a,skip_bound:!1};let p=!1;if(f.ctx=s?s(e,d,((t,n,...s)=>{const o=s.length?s[0]:n;return f.ctx&&i(f.ctx[t],f.ctx[t]=o)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](o),p&&bt(e,t)),n})):[],f.update(),p=!0,r(f.before_update),f.fragment=!!l&&l(f.ctx),n.target){if(n.hydrate){const t=j(n.target);f.fragment&&f.fragment.l(t),t.forEach(x)}else f.fragment&&f.fragment.c();n.intro&&at(e.$$.fragment),$t(e,n.target,n.anchor),et()}B(u)}class xt{$destroy(){vt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const wt=t=>({}),kt=t=>({});function _t(t){let e,n,s,o;const r=t[5].default,l=a(r,t,t[4],null),i=t[5].tip,c=a(i,t,t[4],kt);return{c(){e=w("div"),l&&l.c(),n=C(),s=w("div"),c&&c.c(),E(s,"class","tip svelte-1v9lnqj"),D(s,"left",t[1]),D(s,"right",t[2]),D(s,"top",t[3]),D(s,"bottom",t[0]),E(e,"class","content svelte-1v9lnqj")},m(t,r){y(t,e,r),l&&l.m(e,null),b(e,n),b(e,s),c&&c.m(s,null),o=!0},p(t,[e]){l&&l.p&&16&e&&d(l,r,t,t[4],e,null,null),c&&c.p&&16&e&&d(c,i,t,t[4],e,wt,kt),2&e&&D(s,"left",t[1]),4&e&&D(s,"right",t[2]),8&e&&D(s,"top",t[3]),1&e&&D(s,"bottom",t[0])},i(t){o||(at(l,t),at(c,t),o=!0)},o(t){ut(l,t),ut(c,t),o=!1},d(t){t&&x(e),l&&l.d(t),c&&c.d(t)}}}function Ct(t,e,n){let{$$slots:s={},$$scope:o}=e,{left:r=!1}=e,{right:l=!1}=e,{top:i=!1}=e,{bottom:c=!1}=e;return r||l||i||c||(c=!0),t.$$set=t=>{"left"in t&&n(1,r=t.left),"right"in t&&n(2,l=t.right),"top"in t&&n(3,i=t.top),"bottom"in t&&n(0,c=t.bottom),"$$scope"in t&&n(4,o=t.$$scope)},[c,r,l,i,o,s]}class St extends xt{constructor(t){super(),yt(this,t,Ct,_t,i,{left:1,right:2,top:3,bottom:0})}}function Et(t){const e=t-1;return e*e*e+1}function Mt(t,{delay:n=0,duration:s=400,easing:o=e}){const r=+getComputedStyle(t).opacity;return{delay:n,duration:s,easing:o,css:t=>"opacity: "+t*r}}function At(t,{delay:e=0,duration:n=400,easing:s=Et}){const o=getComputedStyle(t),r=+o.opacity,l=parseFloat(o.height),i=parseFloat(o.paddingTop),c=parseFloat(o.paddingBottom),a=parseFloat(o.marginTop),u=parseFloat(o.marginBottom),d=parseFloat(o.borderTopWidth),f=parseFloat(o.borderBottomWidth);return{delay:e,duration:n,easing:s,css:t=>`overflow: hidden;opacity: ${Math.min(20*t,1)*r};height: ${t*l}px;padding-top: ${t*i}px;padding-bottom: ${t*c}px;margin-top: ${t*a}px;margin-bottom: ${t*u}px;border-top-width: ${t*d}px;border-bottom-width: ${t*f}px;`}}function jt(t,e,n){const s=t.slice();return s[10]=e[n],s[11]=e,s[12]=n,s}function qt(t){let e;return{c(){e=w("p"),e.textContent="Delete Assessment",E(e,"slot","tip")},m(t,n){y(t,e,n)},d(t){t&&x(e)}}}function Lt(e){let n,s,o,r;return{c(){n=w("button"),n.innerHTML='<i class="material-icons svelte-fe0g88">clear</i>',s=C(),E(n,"class","delete svelte-fe0g88")},m(t,l){y(t,n,l),y(t,s,l),o||(r=S(n,"click",e[2]),o=!0)},p:t,d(t){t&&x(n),t&&x(s),o=!1,r()}}}function Nt(t){let e;return{c(){e=w("p"),e.textContent="Delete Grade",E(e,"slot","tip")},m(t,n){y(t,e,n)},d(t){t&&x(e)}}}function Ht(t){let e,n,s,o;function r(){return t[7](t[12])}return{c(){e=w("button"),e.innerHTML='<i class="material-icons svelte-fe0g88">clear</i>',n=C(),E(e,"class","delete svelte-fe0g88")},m(t,l){y(t,e,l),y(t,n,l),s||(o=S(e,"click",r),s=!0)},p(e,n){t=e},d(t){t&&x(e),t&&x(n),s=!1,o()}}}function Tt(t,e){let n,s,o,l,i,c,a,u,d,f,p,m;function h(){e[5].call(s,e[11],e[12])}function g(){e[6].call(c,e[11],e[12])}return u=new St({props:{left:!0,$$slots:{default:[Ht],tip:[Nt]},$$scope:{ctx:e}}}),{key:t,first:null,c(){n=w("div"),s=w("input"),o=C(),l=w("p"),l.textContent="/",i=C(),c=w("input"),a=C(),gt(u.$$.fragment),E(s,"type","number"),E(s,"step","any"),E(s,"class","svelte-fe0g88"),E(l,"class","slash svelte-fe0g88"),E(c,"type","number"),E(c,"min","1"),E(c,"step","any"),E(c,"class","svelte-fe0g88"),E(n,"class","hbox svelte-fe0g88"),this.first=n},m(t,r){y(t,n,r),b(n,s),N(s,e[10].mark),b(n,o),b(n,l),b(n,i),b(n,c),N(c,e[10].total),b(n,a),$t(u,n,null),f=!0,p||(m=[S(s,"input",h),S(c,"input",g)],p=!0)},p(t,n){e=t,1&n&&A(s.value)!==e[10].mark&&N(s,e[10].mark),1&n&&A(c.value)!==e[10].total&&N(c,e[10].total);const o={};8193&n&&(o.$$scope={dirty:n,ctx:e}),u.$set(o)},i(t){f||(at(u.$$.fragment,t),Q((()=>{d||(d=ft(n,At,{duration:200},!0)),d.run(1)})),f=!0)},o(t){ut(u.$$.fragment,t),d||(d=ft(n,At,{duration:200},!1)),d.run(0),f=!1},d(t){t&&x(n),vt(u),t&&d&&d.end(),p=!1,r(m)}}}function zt(t){let e,n,s,o,l,i,c,a,u,d,f,p,m,h,g,$,v,k,_,M,j,q,L=[],T=new Map;l=new St({props:{left:!0,$$slots:{default:[Lt],tip:[qt]},$$scope:{ctx:t}}});let z=t[0].grades;const Z=t=>t[10].id;for(let e=0;e<z.length;e+=1){let n=jt(t,z,e),s=Z(n);T.set(s,L[e]=Tt(s,n))}return{c(){e=w("form"),n=w("div"),s=w("input"),o=C(),gt(l.$$.fragment),i=C(),c=w("p"),c.textContent="Assessment Weight (%):",a=C(),u=w("div"),d=w("input"),f=C(),p=w("div"),m=C(),h=w("p"),h.textContent="Grades:",g=C(),$=w("div");for(let t=0;t<L.length;t+=1)L[t].c();v=C(),k=w("button"),k.textContent="Add Grade",E(s,"class","name svelte-fe0g88"),E(s,"placeholder","Assessment Name..."),E(n,"class","hbox svelte-fe0g88"),E(c,"class","label svelte-fe0g88"),E(d,"type","number"),E(d,"min","0"),E(d,"max","100"),E(d,"step","any"),E(d,"class","svelte-fe0g88"),H(p,"width","40px"),E(u,"class","hbox svelte-fe0g88"),E(h,"class","label svelte-fe0g88"),E(k,"class","add svelte-fe0g88"),E($,"class","grades svelte-fe0g88"),E(e,"class","content svelte-fe0g88")},m(r,x){y(r,e,x),b(e,n),b(n,s),N(s,t[0].name),b(n,o),$t(l,n,null),b(e,i),b(e,c),b(e,a),b(e,u),b(u,d),N(d,t[0].weight),b(u,f),b(u,p),b(e,m),b(e,h),b(e,g),b(e,$);for(let t=0;t<L.length;t+=1)L[t].m($,null);var w;b($,v),b($,k),t[8](k),M=!0,j||(q=[S(s,"input",t[3]),S(d,"input",t[4]),S(k,"click",t[9]),S(e,"submit",(w=Zt,function(t){return t.preventDefault(),w.call(this,t)}))],j=!0)},p(t,[e]){1&e&&s.value!==t[0].name&&N(s,t[0].name);const n={};if(8192&e&&(n.$$scope={dirty:e,ctx:t}),l.$set(n),1&e&&A(d.value)!==t[0].weight&&N(d,t[0].weight),1&e){const n=t[0].grades;it(),L=mt(L,e,Z,1,t,n,T,$,pt,Tt,v,jt),ct()}},i(t){if(!M){at(l.$$.fragment,t);for(let t=0;t<z.length;t+=1)at(L[t]);Q((()=>{_||(_=ft(e,At,{duration:200},!0)),_.run(1)})),M=!0}},o(t){ut(l.$$.fragment,t);for(let t=0;t<L.length;t+=1)ut(L[t]);_||(_=ft(e,At,{duration:200},!1)),_.run(0),M=!1},d(n){n&&x(e),vt(l);for(let t=0;t<L.length;t+=1)L[t].d();t[8](null),n&&_&&_.end(),j=!1,r(q)}}}const Zt=()=>{};function Dt(t,e,n){let s,{assessment:o}=e;return t.$$set=t=>{"assessment"in t&&n(0,o=t.assessment)},[o,s,function(e){!function(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t(e)))}(t,e)},function(){o.name=this.value,n(0,o)},function(){o.weight=A(this.value),n(0,o)},function(t,e){t[e].mark=A(this.value),n(0,o)},function(t,e){t[e].total=A(this.value),n(0,o)},t=>{n(0,o.grades=[...o.grades.slice(0,t),...o.grades.slice(t+1)],o)},function(t){R[t?"unshift":"push"]((()=>{s=t,n(1,s)}))},()=>{n(0,o.grades=[...o.grades,{mark:0,total:100,id:Date.now().toString()}],o),setTimeout((()=>{s.scrollIntoView({behavior:"smooth",block:"nearest"})}),300)}]}class It extends xt{constructor(t){super(),yt(this,t,Dt,zt,i,{assessment:0})}}const Ot=[];function Vt(e,n=t){let s;const o=[];function r(t){if(i(e,t)&&(e=t,s)){const t=!Ot.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),Ot.push(n,e)}if(t){for(let t=0;t<Ot.length;t+=2)Ot[t][0](Ot[t+1]);Ot.length=0}}}return{set:r,update:function(t){r(t(e))},subscribe:function(l,i=t){const c=[l,i];return o.push(c),1===o.length&&(s=n(r)||t),l(e),()=>{const t=o.indexOf(c);-1!==t&&o.splice(t,1),0===o.length&&(s(),s=null)}}}}let Ft=localStorage.getItem("courses"),Wt=Ft?JSON.parse(Ft):[];Ft=localStorage.getItem("currentCourse");let Bt=Ft?JSON.parse(Ft):0;const Pt=Vt(Wt),Rt=Vt(Bt);function Gt(t,e,n){const s=t.slice();return s[13]=e[n],s[14]=e,s[15]=n,s}function Jt(e){let n,s,o,r,l,i,c,a,u,d,f,p;return{c(){n=w("div"),s=w("div"),s.innerHTML='<i class="material-icons md-120 svelte-4s8qjl">widgets</i>',o=C(),r=w("h2"),r.textContent="No Courses Yet",l=C(),i=w("p"),i.textContent="Fortunately, it is very easy to add new ones.",c=C(),a=w("button"),a.textContent="Add Course",E(s,"class","circle svelte-4s8qjl"),E(r,"class","svelte-4s8qjl"),E(i,"class","empty-state svelte-4s8qjl"),E(a,"class","message svelte-4s8qjl"),E(a,"type","button"),E(n,"class","empty svelte-4s8qjl")},m(t,u){y(t,n,u),b(n,s),b(n,o),b(n,r),b(n,l),b(n,i),b(n,c),b(n,a),d=!0,f||(p=S(a,"click",e[12]),f=!0)},p:t,i(t){d||(Q((()=>{u||(u=ft(n,Mt,{duration:200},!0)),u.run(1)})),d=!0)},o(t){u||(u=ft(n,Mt,{duration:200},!1)),u.run(0),d=!1},d(t){t&&x(n),t&&u&&u.end(),f=!1,p()}}}function Yt(t){let e,n,s,o,l,i,c,a,u,d,f,p,m,h,g,$,v,k,M,A,j=t[0][t[1]].mark?`${t[0][t[1]].mark}%`:"",q=[],H=new Map;o=new St({props:{left:!0,$$slots:{default:[Qt],tip:[Kt]},$$scope:{ctx:t}}});let T=t[0][t[1]].assessments;const z=t=>t[13].id;for(let e=0;e<T.length;e+=1){let n=Gt(t,T,e),s=z(n);H.set(s,q[e]=Ut(s,n))}return{c(){e=w("div"),n=w("input"),s=C(),gt(o.$$.fragment),i=C(),c=w("p"),a=_("GRADE:\r\n      "),u=_(j),f=C(),p=w("div");for(let t=0;t<q.length;t+=1)q[t].c();m=C(),h=w("div"),g=w("button"),g.textContent="Add Assessment",E(n,"class","course svelte-4s8qjl"),E(e,"class","title svelte-4s8qjl"),E(c,"class","grade svelte-4s8qjl"),E(g,"class","add svelte-4s8qjl"),E(h,"class","add-wrapper svelte-4s8qjl"),E(p,"class","grades svelte-4s8qjl"),Q((()=>t[11].call(p))),D(p,"scrollbar",t[2]<=t[3])},m(r,l){y(r,e,l),b(e,n),N(n,t[0][t[1]].name),b(e,s),$t(o,e,null),y(r,i,l),y(r,c,l),b(c,a),b(c,u),y(r,f,l),y(r,p,l);for(let t=0;t<q.length;t+=1)q[t].m(p,null);b(p,m),b(p,h),b(h,g),t[9](g),$=Z(p,t[11].bind(p)),k=!0,M||(A=[S(n,"input",t[5]),S(g,"click",t[10])],M=!0)},p(t,e){3&e&&n.value!==t[0][t[1]].name&&N(n,t[0][t[1]].name);const s={};if(65539&e&&(s.$$scope={dirty:e,ctx:t}),o.$set(s),(!k||3&e)&&j!==(j=t[0][t[1]].mark?`${t[0][t[1]].mark}%`:"")&&L(u,j),3&e){const n=t[0][t[1]].assessments;it(),q=mt(q,e,z,1,t,n,H,p,pt,Ut,m,Gt),ct()}12&e&&D(p,"scrollbar",t[2]<=t[3])},i(t){if(!k){at(o.$$.fragment,t),Q((()=>{l||(l=ft(e,Mt,{duration:200},!0)),l.run(1)})),Q((()=>{d||(d=ft(c,Mt,{duration:200},!0)),d.run(1)}));for(let t=0;t<T.length;t+=1)at(q[t]);Q((()=>{v||(v=ft(p,Mt,{duration:200},!0)),v.run(1)})),k=!0}},o(t){ut(o.$$.fragment,t),l||(l=ft(e,Mt,{duration:200},!1)),l.run(0),d||(d=ft(c,Mt,{duration:200},!1)),d.run(0);for(let t=0;t<q.length;t+=1)ut(q[t]);v||(v=ft(p,Mt,{duration:200},!1)),v.run(0),k=!1},d(n){n&&x(e),vt(o),n&&l&&l.end(),n&&x(i),n&&x(c),n&&d&&d.end(),n&&x(f),n&&x(p);for(let t=0;t<q.length;t+=1)q[t].d();t[9](null),$(),n&&v&&v.end(),M=!1,r(A)}}}function Kt(t){let e;return{c(){e=w("p"),e.textContent="Delete Course",E(e,"slot","tip")},m(t,n){y(t,e,n)},d(t){t&&x(e)}}}function Qt(e){let n,s,o,r;return{c(){n=w("button"),n.innerHTML='<i class="material-icons svelte-4s8qjl">delete</i>',s=C(),E(n,"class","action svelte-4s8qjl")},m(t,l){y(t,n,l),y(t,s,l),o||(r=S(n,"click",e[6]),o=!0)},p:t,d(t){t&&x(n),t&&x(s),o=!1,r()}}}function Ut(t,e){let n,s,o,r;function l(t){e[7].call(null,t,e[13],e[14],e[15])}let i={};return void 0!==e[13]&&(i.assessment=e[13]),s=new It({props:i}),R.push((()=>ht(s,"assessment",l))),s.$on("click",(function(){return e[8](e[15])})),{key:t,first:null,c(){n=_(""),gt(s.$$.fragment),this.first=n},m(t,e){y(t,n,e),$t(s,t,e),r=!0},p(t,n){e=t;const r={};!o&&3&n&&(o=!0,r.assessment=e[13],U((()=>o=!1))),s.$set(r)},i(t){r||(at(s.$$.fragment,t),r=!0)},o(t){ut(s.$$.fragment,t),r=!1},d(t){t&&x(n),vt(s,t)}}}function Xt(t){let e,n,s,o;const r=[Yt,Jt],l=[];function i(t,e){return t[0].length>0?0:1}return n=i(t),s=l[n]=r[n](t),{c(){e=w("div"),s.c(),E(e,"class","wrapper svelte-4s8qjl")},m(t,s){y(t,e,s),l[n].m(e,null),o=!0},p(t,[o]){let c=n;n=i(t),n===c?l[n].p(t,o):(it(),ut(l[c],1,1,(()=>{l[c]=null})),ct(),s=l[n],s?s.p(t,o):(s=l[n]=r[n](t),s.c()),at(s,1),s.m(e,null))},i(t){o||(at(s),o=!0)},o(t){ut(s),o=!1},d(t){t&&x(e),l[n].d()}}}function te(t,e,n){let s,o;c(t,Pt,(t=>n(0,s=t))),c(t,Rt,(t=>n(1,o=t)));let r,l=0,i=0;return t.$$.update=()=>{if(3&t.$$.dirty&&s.length>0){let t=0;for(const e of s[o].assessments)for(const n of e.grades)t+=e.weight/100*n.mark/n.total/e.grades.length;p(Pt,s[o].mark=Math.round(100*(100*t+Number.EPSILON))/100,s)}},[s,o,l,i,r,function(){s[o].name=this.value,Pt.set(s)},()=>{p(Pt,s=[...s.slice(0,o),...s.slice(o+1)],s),o>=s.length&&s.length>0&&p(Rt,o=s.length-1,o)},function(t,e,n,o){n[o]=t,Pt.set(s)},t=>{p(Pt,s[o].assessments=[...s[o].assessments.slice(0,t),...s[o].assessments.slice(t+1)],s)},function(t){R[t?"unshift":"push"]((()=>{r=t,n(4,r)}))},()=>{p(Pt,s[o].assessments=[...s[o].assessments,{name:"",grades:[{mark:0,total:100,id:Date.now().toString()}],weight:0,id:Date.now().toString()}],s),setTimeout((()=>{r.scrollIntoView({behavior:"smooth",block:"nearest"})}),300)},function(){i=this.clientWidth,l=this.offsetWidth,n(3,i),n(2,l)},()=>{p(Pt,s=[...s,{name:"Course Name",assessments:[],mark:0,id:Date.now().toString()}],s)}]}Pt.subscribe((t=>{localStorage.setItem("courses",JSON.stringify(t))})),Rt.subscribe((t=>{localStorage.setItem("currentCourse",JSON.stringify(t))}));class ee extends xt{constructor(t){super(),yt(this,t,te,Xt,i,{})}}function ne(e){let n,s,o;return{c(){n=w("button"),n.innerHTML='<svg width="32" height="24" class="svelte-18t2dyg"><line id="top" x1="0" y1="2" x2="32" y2="2" class="svelte-18t2dyg"></line><line id="middle" x1="0" y1="12" x2="32" y2="12" class="svelte-18t2dyg"></line><line id="bottom" x1="0" y1="22" x2="32" y2="22" class="svelte-18t2dyg"></line></svg>',E(n,"class","text-gray-500 hover:text-gray-700 cursor-pointer mr-4 border-none focus:outline-none svelte-18t2dyg"),D(n,"open",e[0])},m(t,r){y(t,n,r),s||(o=S(n,"click",e[1]),s=!0)},p(t,[e]){1&e&&D(n,"open",t[0])},i:t,o:t,d(t){t&&x(n),s=!1,o()}}}function se(t,e,n){let{open:s=!1}=e;return t.$$set=t=>{"open"in t&&n(0,s=t.open)},[s,()=>n(0,s=!s)]}class oe extends xt{constructor(t){super(),yt(this,t,se,ne,i,{open:0})}}function re(t,e,n){const s=t.slice();return s[9]=e[n],s[11]=n,s}function le(t,e){let n,s,o,r,l,i,c,a,u,d,f=e[9].name+"",p=e[9].mark?`${e[9].mark}%`:"";function m(){return e[6](e[11])}return{key:t,first:null,c(){n=w("button"),s=w("p"),o=_(f),r=C(),l=w("p"),i=_(p),E(s,"class","name svelte-szmvxn"),E(l,"class","mark"),E(n,"class","course svelte-szmvxn"),D(n,"selected",e[5]===e[11]),this.first=n},m(t,e){y(t,n,e),b(n,s),b(s,o),b(n,r),b(n,l),b(l,i),a=!0,u||(d=S(n,"click",m),u=!0)},p(t,s){e=t,(!a||8&s)&&f!==(f=e[9].name+"")&&L(o,f),(!a||8&s)&&p!==(p=e[9].mark?`${e[9].mark}%`:"")&&L(i,p),40&s&&D(n,"selected",e[5]===e[11])},i(t){a||(Q((()=>{c||(c=ft(n,At,{duration:200},!0)),c.run(1)})),a=!0)},o(t){c||(c=ft(n,At,{duration:200},!1)),c.run(0),a=!1},d(t){t&&x(n),t&&c&&c.end(),u=!1,d()}}}function ie(t){let e,n,s,o,r,l,i,c,a,u,d,f,p,m,h,g=t[3].length+"",$=(t[2]||0===t[2]?t[2]:"")+"",v=[],k=new Map,M=t[3];const A=t=>t[9].id;for(let e=0;e<M.length;e+=1){let n=re(t,M,e),s=A(n);k.set(s,v[e]=le(s,n))}return{c(){e=w("div"),n=w("p"),s=_("Courses: "),o=_(g),r=C(),l=w("p"),i=_("GPA: "),c=_($),a=C(),u=w("div");for(let t=0;t<v.length;t+=1)v[t].c();d=C(),f=w("button"),f.textContent="Add Course",E(n,"class","title svelte-szmvxn"),E(l,"class","gpa svelte-szmvxn"),E(f,"class","add-course svelte-szmvxn"),E(f,"type","button"),E(u,"class","scroll svelte-szmvxn"),E(e,"class","wrapper svelte-szmvxn"),H(e,"width",(t[0]||!t[1]?100:0)+"%"),D(e,"mobile",t[1])},m(g,$){y(g,e,$),b(e,n),b(n,s),b(n,o),b(e,r),b(e,l),b(l,i),b(l,c),b(e,a),b(e,u);for(let t=0;t<v.length;t+=1)v[t].m(u,null);b(u,d),b(u,f),t[7](f),p=!0,m||(h=S(f,"click",t[8]),m=!0)},p(t,[n]){if((!p||8&n)&&g!==(g=t[3].length+"")&&L(o,g),(!p||4&n)&&$!==($=(t[2]||0===t[2]?t[2]:"")+"")&&L(c,$),41&n){const e=t[3];it(),v=mt(v,n,A,1,t,e,k,u,pt,le,d,re),ct()}(!p||3&n)&&H(e,"width",(t[0]||!t[1]?100:0)+"%"),2&n&&D(e,"mobile",t[1])},i(t){if(!p){for(let t=0;t<M.length;t+=1)at(v[t]);p=!0}},o(t){for(let t=0;t<v.length;t+=1)ut(v[t]);p=!1},d(n){n&&x(e);for(let t=0;t<v.length;t+=1)v[t].d();t[7](null),m=!1,h()}}}function ce(t,e,n){let s,o;c(t,Pt,(t=>n(3,s=t))),c(t,Rt,(t=>n(5,o=t)));let r,{mobile:l=!1}=e,{open:i=!1}=e,a=0;return t.$$set=t=>{"mobile"in t&&n(1,l=t.mobile),"open"in t&&n(0,i=t.open)},t.$$.update=()=>{if(1&t.$$.dirty&&document.body.classList.toggle("noscroll",i),12&t.$$.dirty){n(2,a=0);for(const t of s)t.mark>=85?n(2,a+=4):t.mark>=80?n(2,a+=3.7):t.mark>=77?n(2,a+=3.3):t.mark>=73?n(2,a+=3):t.mark>=70?n(2,a+=2.7):t.mark>=67?n(2,a+=2.3):t.mark>=63?n(2,a+=2):t.mark>=60?n(2,a+=1.7):t.mark>=57?n(2,a+=1.3):t.mark>=53?n(2,a+=1):t.mark>=50&&n(2,a+=.7);n(2,a=Math.floor(100*(a/s.length+Number.EPSILON))/100)}},[i,l,a,s,r,o,t=>{p(Rt,o=t,o),n(0,i=!1)},function(t){R[t?"unshift":"push"]((()=>{r=t,n(4,r)}))},()=>{p(Pt,s=[...s,{name:"Course Name",assessments:[],mark:0,id:Date.now().toString()}],s),setTimeout((()=>{r.scrollIntoView({behavior:"smooth",block:"nearest"})}),300)}]}class ae extends xt{constructor(t){super(),yt(this,t,ce,ie,i,{mobile:1,open:0})}}function ue(e){let s,o,r,l,i,c,a,u,d,f,p,m,h,g,$=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 125.03 28.14"},e[0]],v={};for(let t=0;t<$.length;t+=1)v=n(v,$[t]);return{c(){s=k("svg"),o=k("defs"),r=k("title"),l=_("Asset 1"),i=k("g"),c=k("g"),a=k("path"),u=k("path"),d=k("path"),f=k("path"),p=k("path"),m=k("path"),h=k("path"),g=k("path"),this.h()},l(t){s=q(t,"svg",{xmlns:!0,viewBox:!0},1);var e=j(s);o=q(e,"defs",{},1),j(o).forEach(x),r=q(e,"title",{},1);var n=j(r);l=function(t,e){for(let n=0;n<t.length;n+=1){const s=t[n];if(3===s.nodeType)return s.data=""+e,t.splice(n,1)[0]}return _(e)}(n,"Asset 1"),n.forEach(x),i=q(e,"g",{id:!0,"data-name":!0},1);var $=j(i);c=q($,"g",{id:!0,"data-name":!0},1);var v=j(c);a=q(v,"path",{class:!0,d:!0},1),j(a).forEach(x),u=q(v,"path",{class:!0,d:!0},1),j(u).forEach(x),d=q(v,"path",{class:!0,d:!0},1),j(d).forEach(x),f=q(v,"path",{class:!0,d:!0},1),j(f).forEach(x),p=q(v,"path",{class:!0,d:!0},1),j(p).forEach(x),m=q(v,"path",{class:!0,d:!0},1),j(m).forEach(x),h=q(v,"path",{class:!0,d:!0},1),j(h).forEach(x),g=q(v,"path",{class:!0,d:!0},1),j(g).forEach(x),v.forEach(x),$.forEach(x),e.forEach(x),this.h()},h(){E(a,"class","cls-1"),E(a,"d","M15.48,14.48c0,5.21-2.73,8.5-6.85,8.5a5.61,5.61,0,0,1-5.18-3H3.38v8.14H0V6.27H3.27V9.09h.06A5.69,5.69,0,0,1,8.56,6C12.73,6,15.48,9.28,15.48,14.48Zm-3.46,0c0-3.43-1.68-5.64-4.35-5.64s-4.31,2.25-4.31,5.64,1.72,5.65,4.31,5.65S12,17.94,12,14.48Z"),E(u,"class","cls-1"),E(u,"d","M17.92,1.94a2,2,0,0,1,3.92,0,2,2,0,0,1-3.92,0Zm.27,4.33h3.37V22.7H18.19Z"),E(d,"class","cls-1"),E(d,"d","M25,6.27h3.21V9h.08a5.34,5.34,0,0,1,5.17-3c3.63,0,5.71,2.32,5.71,6.08V22.7H35.8v-10c0-2.47-1.16-3.83-3.5-3.83s-3.91,1.69-3.91,4.24V22.7H25Z"),E(f,"class","cls-1"),E(f,"d","M56.53,17.88c-.47,3-3.31,5.14-7.08,5.14-4.82,0-7.75-3.27-7.75-8.46S44.67,6,49.31,6s7.41,3.22,7.41,8.2v1.16H45.11v.2c0,2.86,1.72,4.75,4.42,4.75a3.73,3.73,0,0,0,3.8-2.4ZM45.13,13h8.21c-.07-2.52-1.67-4.28-4-4.28S45.3,10.48,45.13,13Z"),E(p,"class","cls-1"),E(p,"d","M70.22,11.92a3.73,3.73,0,0,0-3.86-3.14C63.75,8.78,62,11,62,14.48s1.74,5.71,4.36,5.71a3.61,3.61,0,0,0,3.83-3.05h3.25c-.36,3.5-3.16,5.88-7.11,5.88-4.7,0-7.77-3.22-7.77-8.54S61.66,6,66.33,6c4.23,0,6.81,2.72,7.11,6Z"),E(m,"class","cls-1"),E(m,"d","M75.13,14.48C75.13,9.2,78.23,6,82.92,6s7.8,3.23,7.8,8.51S87.63,23,82.92,23,75.13,19.78,75.13,14.48Zm12.15,0c0-3.64-1.72-5.73-4.36-5.73s-4.36,2.09-4.36,5.73,1.72,5.75,4.36,5.75S87.28,18.14,87.28,14.48Z"),E(h,"class","cls-1"),E(h,"d","M93.33,6.27h3.22V9h.08a5.34,5.34,0,0,1,5.17-3c3.62,0,5.7,2.32,5.7,6.08V22.7h-3.39v-10c0-2.47-1.16-3.83-3.5-3.83s-3.91,1.69-3.91,4.24V22.7H93.33Z"),E(g,"class","cls-1"),E(g,"d","M124.84,17.88c-.46,3-3.31,5.14-7.07,5.14-4.83,0-7.75-3.27-7.75-8.46S113,6,117.63,6s7.4,3.22,7.4,8.2v1.16H113.42v.2c0,2.86,1.72,4.75,4.42,4.75a3.72,3.72,0,0,0,3.8-2.4ZM113.44,13h8.22c-.08-2.52-1.68-4.28-4-4.28A4.23,4.23,0,0,0,113.44,13Z"),E(c,"id","Layer_1-2"),E(c,"data-name","Layer 1"),E(i,"id","Layer_2"),E(i,"data-name","Layer 2"),M(s,v)},m(t,e){y(t,s,e),b(s,o),b(s,r),b(r,l),b(s,i),b(i,c),b(c,a),b(c,u),b(c,d),b(c,f),b(c,p),b(c,m),b(c,h),b(c,g)},p(t,[e]){M(s,v=function(t,e){const n={},s={},o={$$scope:1};let r=t.length;for(;r--;){const l=t[r],i=e[r];if(i){for(const t in l)t in i||(s[t]=1);for(const t in i)o[t]||(n[t]=i[t],o[t]=1);t[r]=i}else for(const t in l)o[t]=1}for(const t in s)t in n||(n[t]=void 0);return n}($,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 125.03 28.14"},1&e&&t[0]]))},i:t,o:t,d(t){t&&x(s)}}}function de(t,e,s){return t.$$set=t=>{s(0,e=n(n({},e),f(t)))},[e=f(e)]}class fe extends xt{constructor(t){super(),yt(this,t,de,ue,i,{})}}function pe(t){let e,n,s;function o(e){t[4].call(null,e)}let r={};return void 0!==t[1]&&(r.open=t[1]),e=new oe({props:r}),R.push((()=>ht(e,"open",o))),{c(){gt(e.$$.fragment)},m(t,n){$t(e,t,n),s=!0},p(t,s){const o={};!n&&2&s&&(n=!0,o.open=t[1],U((()=>n=!1))),e.$set(o)},i(t){s||(at(e.$$.fragment,t),s=!0)},o(t){ut(e.$$.fragment,t),s=!1},d(t){vt(e,t)}}}function me(t){let e,n,s,o,r,l,i,c,a,u,d,f,p,m,h,g,$,v,k,_;s=new fe({props:{width:"130px",height:"40px",fill:"var(--logo-color)"}});let S=t[3]&&pe(t);function M(e){t[6].call(null,e)}let A={mobile:t[3]};return void 0!==t[1]&&(A.open=t[1]),u=new ae({props:A}),R.push((()=>ht(u,"open",M))),g=new ee({}),{c(){e=w("div"),n=w("header"),gt(s.$$.fragment),o=C(),r=w("div"),l=C(),S&&S.c(),c=C(),a=w("nav"),gt(u.$$.fragment),f=C(),p=w("aside"),m=C(),h=w("main"),gt(g.$$.fragment),$=C(),v=w("footer"),v.innerHTML="<p>Made by Brian Latchman &amp; Julian de Rushe, 2021</p>",E(r,"class","spacer svelte-1lomsxd"),E(n,"class","svelte-1lomsxd"),Q((()=>t[5].call(n))),E(a,"class","svelte-1lomsxd"),E(h,"class","svelte-1lomsxd"),E(v,"class","svelte-1lomsxd"),E(e,"class","container svelte-1lomsxd"),H(e,"--header-height",t[2]+"px"),Q((()=>t[7].call(e))),D(e,"open",t[1])},m(d,x){y(d,e,x),b(e,n),$t(s,n,null),b(n,o),b(n,r),b(n,l),S&&S.m(n,null),i=Z(n,t[5].bind(n)),b(e,c),b(e,a),$t(u,a,null),b(e,f),b(e,p),b(e,m),b(e,h),$t(g,h,null),b(e,$),b(e,v),k=Z(e,t[7].bind(e)),_=!0},p(t,[s]){t[3]?S?(S.p(t,s),8&s&&at(S,1)):(S=pe(t),S.c(),at(S,1),S.m(n,null)):S&&(it(),ut(S,1,1,(()=>{S=null})),ct());const o={};8&s&&(o.mobile=t[3]),!d&&2&s&&(d=!0,o.open=t[1],U((()=>d=!1))),u.$set(o),(!_||4&s)&&H(e,"--header-height",t[2]+"px"),2&s&&D(e,"open",t[1])},i(t){_||(at(s.$$.fragment,t),at(S),at(u.$$.fragment,t),at(g.$$.fragment,t),_=!0)},o(t){ut(s.$$.fragment,t),ut(S),ut(u.$$.fragment,t),ut(g.$$.fragment,t),_=!1},d(t){t&&x(e),vt(s),S&&S.d(),i(),vt(u),vt(g),k()}}}function he(t,e,n){let s,o=0,r=!1,l=0;return t.$$.update=()=>{1&t.$$.dirty&&n(3,s=o<768)},[o,r,l,s,function(t){r=t,n(1,r)},function(){l=this.clientHeight,n(2,l)},function(t){r=t,n(1,r)},function(){o=this.clientWidth,n(0,o)}]}return new class extends xt{constructor(t){super(),yt(this,t,he,me,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
