const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Controls-BO60q2ng.js","assets/Settings-CEAng9sh.js","assets/Settings-CUgL9f1I.js"])))=>i.map(i=>d[i]);
import{a as e,c as t,i as n,l as r,n as i,r as a,s as o,t as s}from"./Settings-CEAng9sh.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var c=e=>{let t=new Set;do for(let n of Reflect.ownKeys(e))t.add([e,n]);while((e=Reflect.getPrototypeOf(e))&&e!==Object.prototype);return t};function l(e,{include:t,exclude:n}={}){let r=e=>{let r=t=>typeof t==`string`?e===t:t.test(e);return t?t.some(r):!n||!n.some(r)};for(let[t,n]of c(e.constructor.prototype)){if(n===`constructor`||!r(n))continue;let i=Reflect.getOwnPropertyDescriptor(t,n);i&&typeof i.value==`function`&&(e[n]=e[n].bind(e))}return e}function u(e,t,n){return Math.min(Math.max(e,t),n)}function d(e,t){return 1-Math.exp(-e*t)}function f(e){let t=Number.parseInt(e.replace(`#`,``),16);return[t>>16&255,t>>8&255,t&255].map(e=>{let t=e/255;return t<=.04045?t/12.92:((t+.055)/1.055)**2.4})}function p(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var m=[0,-.45,-.2,-.7],h=12,g=.2,_=.7,v=class{element;frame=0;hasMuted=!1;levelElements=[];levels;motion=window.matchMedia(`(prefers-reduced-motion: reduce)`);sound;time=0;constructor({element:e,sound:t}){l(this),this.element=e,this.sound=t,this.levelElements=Array.from(e.querySelectorAll(`.chrome__level`)),this.levels=this.levelElements.map(()=>g);for(let e of[`pointerdown`,`pointerup`,`touchend`])this.element.addEventListener(e,e=>e.stopPropagation());this.element.addEventListener(`click`,this.onClick),window.addEventListener(`click`,this.onUnmute),window.addEventListener(`keydown`,this.onUnmute),window.addEventListener(`pointerup`,this.onPointerUp),window.addEventListener(`touchend`,this.onTouchEnd)}async onClick(e){e.stopPropagation();let t=await this.sound.toggle();this.hasMuted=!t,this.update()}async onUnmute(){this.hasMuted||this.sound.isEnabled||(await this.sound.enable(),this.update())}onPointerUp(e){e.pointerType!==`mouse`&&this.onUnmute()}onTouchEnd(){this.sound.resume(),this.onUnmute()}update(){let e=this.sound.isEnabled;this.element.setAttribute(`aria-pressed`,String(e)),this.element.setAttribute(`aria-label`,e?`Turn sound off`:`Turn sound on`),this.frame||=(this.time=performance.now(),requestAnimationFrame(this.onFrame))}onFrame(e){let t=Math.min((e-this.time)/1e3,.1),n=e/1e3;this.time=e;let r=!this.sound.isEnabled;this.levels=this.levels.map((e,i)=>{if(!this.sound.isEnabled){let n=e+(g-e)*d(8,t);return Math.abs(n-g)>.001&&(r=!1),n}if(this.motion.matches)return _;let a=((n-(m[i]??0))/.9%2+2)%2,o=a<1?a:2-a;return g+.8*(.5-.5*Math.cos(Math.PI*o))}),this.render(),this.frame=r?0:requestAnimationFrame(this.onFrame)}render(){this.levelElements.forEach((e,t)=>{e.style.transform=`translateY(${(1-(this.levels[t]??g))*h}px)`})}};function y(e,t){return class extends e{constructor(...e){super(...e),t(this)}}}var b=y(Array,e=>e.fill(0)),x=1e-6;function S(e){function t(t=0,n=0){let r=new e(2);return t!==void 0&&(r[0]=t,n!==void 0&&(r[1]=n)),r}let n=t;function r(t,n,r){let i=r??new e(2);return i[0]=t,i[1]=n,i}function i(t,n){let r=n??new e(2);return r[0]=Math.ceil(t[0]),r[1]=Math.ceil(t[1]),r}function a(t,n){let r=n??new e(2);return r[0]=Math.floor(t[0]),r[1]=Math.floor(t[1]),r}function o(t,n){let r=n??new e(2);return r[0]=Math.round(t[0]),r[1]=Math.round(t[1]),r}function s(t,n=0,r=1,i){let a=i??new e(2);return a[0]=Math.min(r,Math.max(n,t[0])),a[1]=Math.min(r,Math.max(n,t[1])),a}function c(t,n,r){let i=r??new e(2);return i[0]=t[0]+n[0],i[1]=t[1]+n[1],i}function l(t,n,r,i){let a=i??new e(2);return a[0]=t[0]+n[0]*r,a[1]=t[1]+n[1]*r,a}function u(e,t){let n=e[0],r=e[1],i=t[0],a=t[1],o=Math.sqrt(n*n+r*r)*Math.sqrt(i*i+a*a),s=o&&E(e,t)/o;return Math.acos(s)}function d(t,n,r){let i=r??new e(2);return i[0]=t[0]-n[0],i[1]=t[1]-n[1],i}let f=d;function p(e,t){return Math.abs(e[0]-t[0])<x&&Math.abs(e[1]-t[1])<x}function m(e,t){return e[0]===t[0]&&e[1]===t[1]}function h(t,n,r,i){let a=i??new e(2);return a[0]=t[0]+r*(n[0]-t[0]),a[1]=t[1]+r*(n[1]-t[1]),a}function g(t,n,r,i){let a=i??new e(2);return a[0]=t[0]+r[0]*(n[0]-t[0]),a[1]=t[1]+r[1]*(n[1]-t[1]),a}function _(t,n,r){let i=r??new e(2);return i[0]=Math.max(t[0],n[0]),i[1]=Math.max(t[1],n[1]),i}function v(t,n,r){let i=r??new e(2);return i[0]=Math.min(t[0],n[0]),i[1]=Math.min(t[1],n[1]),i}function y(t,n,r){let i=r??new e(2);return i[0]=t[0]*n,i[1]=t[1]*n,i}let b=y;function S(t,n,r){let i=r??new e(2);return i[0]=t[0]/n,i[1]=t[1]/n,i}function C(t,n){let r=n??new e(2);return r[0]=1/t[0],r[1]=1/t[1],r}let w=C;function T(t,n,r){let i=r??new e(3),a=t[0]*n[1]-t[1]*n[0];return i[0]=0,i[1]=0,i[2]=a,i}function E(e,t){return e[0]*t[0]+e[1]*t[1]}function D(e){let t=e[0],n=e[1];return Math.sqrt(t*t+n*n)}let O=D;function k(e){let t=e[0],n=e[1];return t*t+n*n}let A=k;function j(e,t){let n=e[0]-t[0],r=e[1]-t[1];return Math.sqrt(n*n+r*r)}let M=j;function N(e,t){let n=e[0]-t[0],r=e[1]-t[1];return n*n+r*r}let P=N;function F(t,n){let r=n??new e(2),i=t[0],a=t[1],o=i*i+a*a,s=o>0?1/Math.sqrt(o):1;return r[0]=i*s,r[1]=a*s,r}function I(t,n){let r=n??new e(2);return r[0]=-t[0],r[1]=-t[1],r}function L(t,n){let r=n??new e(2);return r[0]=t[0],r[1]=t[1],r}let R=L;function z(t,n,r){let i=r??new e(2);return i[0]=t[0]*n[0],i[1]=t[1]*n[1],i}let B=z;function V(t,n,r){let i=r??new e(2);return i[0]=t[0]/n[0],i[1]=t[1]/n[1],i}let H=V;function U(t=1,n){let r=n??new e(2),i=Math.random()*2*Math.PI;return r[0]=Math.cos(i)*t,r[1]=Math.sin(i)*t,r}function W(t){let n=t??new e(2);return n[0]=0,n[1]=0,n}function G(t,n,r){let i=r??new e(2),a=t[0],o=t[1];return i[0]=a*n[0]+o*n[4]+n[12],i[1]=a*n[1]+o*n[5]+n[13],i}function K(t,n,r){let i=r??new e(2),a=t[0],o=t[1];return i[0]=n[0]*a+n[4]*o+n[8],i[1]=n[1]*a+n[5]*o+n[9],i}function q(t,n,r,i){let a=i??new e(2),o=t[0]-n[0],s=t[1]-n[1],c=Math.sin(r),l=Math.cos(r);return a[0]=o*l-s*c+n[0],a[1]=o*c+s*l+n[1],a}function J(t,n,r){let i=r??new e(2);return F(t,i),y(i,n,i)}function ee(t,n,r){let i=r??new e(2);return D(t)>n?J(t,n,i):L(t,i)}function te(t,n,r){return h(t,n,.5,r??new e(2))}return{create:t,fromValues:n,set:r,ceil:i,floor:a,round:o,clamp:s,add:c,addScaled:l,angle:u,subtract:d,sub:f,equalsApproximately:p,equals:m,lerp:h,lerpV:g,max:_,min:v,mulScalar:y,scale:b,divScalar:S,inverse:C,invert:w,cross:T,dot:E,length:D,len:O,lengthSq:k,lenSq:A,distance:j,dist:M,distanceSq:N,distSq:P,normalize:F,negate:I,copy:L,clone:R,multiply:z,mul:B,divide:V,div:H,random:U,zero:W,transformMat4:G,transformMat3:K,rotate:q,setLength:J,truncate:ee,midpoint:te}}var C=new Map;function w(e){let t=C.get(e);return t||(t=S(e),C.set(e,t)),t}function T(e){function t(t,n,r){let i=new e(3);return t!==void 0&&(i[0]=t,n!==void 0&&(i[1]=n,r!==void 0&&(i[2]=r))),i}let n=t;function r(t,n,r,i){let a=i??new e(3);return a[0]=t,a[1]=n,a[2]=r,a}function i(t,n){let r=n??new e(3);return r[0]=Math.ceil(t[0]),r[1]=Math.ceil(t[1]),r[2]=Math.ceil(t[2]),r}function a(t,n){let r=n??new e(3);return r[0]=Math.floor(t[0]),r[1]=Math.floor(t[1]),r[2]=Math.floor(t[2]),r}function o(t,n){let r=n??new e(3);return r[0]=Math.round(t[0]),r[1]=Math.round(t[1]),r[2]=Math.round(t[2]),r}function s(t,n=0,r=1,i){let a=i??new e(3);return a[0]=Math.min(r,Math.max(n,t[0])),a[1]=Math.min(r,Math.max(n,t[1])),a[2]=Math.min(r,Math.max(n,t[2])),a}function c(t,n,r){let i=r??new e(3);return i[0]=t[0]+n[0],i[1]=t[1]+n[1],i[2]=t[2]+n[2],i}function l(t,n,r,i){let a=i??new e(3);return a[0]=t[0]+n[0]*r,a[1]=t[1]+n[1]*r,a[2]=t[2]+n[2]*r,a}function u(e,t){let n=e[0],r=e[1],i=e[2],a=t[0],o=t[1],s=t[2],c=Math.sqrt(n*n+r*r+i*i)*Math.sqrt(a*a+o*o+s*s),l=c&&E(e,t)/c;return Math.acos(l)}function d(t,n,r){let i=r??new e(3);return i[0]=t[0]-n[0],i[1]=t[1]-n[1],i[2]=t[2]-n[2],i}let f=d;function p(e,t){return Math.abs(e[0]-t[0])<x&&Math.abs(e[1]-t[1])<x&&Math.abs(e[2]-t[2])<x}function m(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}function h(t,n,r,i){let a=i??new e(3);return a[0]=t[0]+r*(n[0]-t[0]),a[1]=t[1]+r*(n[1]-t[1]),a[2]=t[2]+r*(n[2]-t[2]),a}function g(t,n,r,i){let a=i??new e(3);return a[0]=t[0]+r[0]*(n[0]-t[0]),a[1]=t[1]+r[1]*(n[1]-t[1]),a[2]=t[2]+r[2]*(n[2]-t[2]),a}function _(t,n,r){let i=r??new e(3);return i[0]=Math.max(t[0],n[0]),i[1]=Math.max(t[1],n[1]),i[2]=Math.max(t[2],n[2]),i}function v(t,n,r){let i=r??new e(3);return i[0]=Math.min(t[0],n[0]),i[1]=Math.min(t[1],n[1]),i[2]=Math.min(t[2],n[2]),i}function y(t,n,r){let i=r??new e(3);return i[0]=t[0]*n,i[1]=t[1]*n,i[2]=t[2]*n,i}let b=y;function S(t,n,r){let i=r??new e(3);return i[0]=t[0]/n,i[1]=t[1]/n,i[2]=t[2]/n,i}function C(t,n){let r=n??new e(3);return r[0]=1/t[0],r[1]=1/t[1],r[2]=1/t[2],r}let w=C;function T(t,n,r){let i=r??new e(3),a=t[2]*n[0]-t[0]*n[2],o=t[0]*n[1]-t[1]*n[0];return i[0]=t[1]*n[2]-t[2]*n[1],i[1]=a,i[2]=o,i}function E(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function D(e){let t=e[0],n=e[1],r=e[2];return Math.sqrt(t*t+n*n+r*r)}let O=D;function k(e){let t=e[0],n=e[1],r=e[2];return t*t+n*n+r*r}let A=k;function j(e,t){let n=e[0]-t[0],r=e[1]-t[1],i=e[2]-t[2];return Math.sqrt(n*n+r*r+i*i)}let M=j;function N(e,t){let n=e[0]-t[0],r=e[1]-t[1],i=e[2]-t[2];return n*n+r*r+i*i}let P=N;function F(t,n){let r=n??new e(3),i=t[0],a=t[1],o=t[2],s=i*i+a*a+o*o,c=s>0?1/Math.sqrt(s):1;return r[0]=i*c,r[1]=a*c,r[2]=o*c,r}function I(t,n){let r=n??new e(3);return r[0]=-t[0],r[1]=-t[1],r[2]=-t[2],r}function L(t,n){let r=n??new e(3);return r[0]=t[0],r[1]=t[1],r[2]=t[2],r}let R=L;function z(t,n,r){let i=r??new e(3);return i[0]=t[0]*n[0],i[1]=t[1]*n[1],i[2]=t[2]*n[2],i}let B=z;function V(t,n,r){let i=r??new e(3);return i[0]=t[0]/n[0],i[1]=t[1]/n[1],i[2]=t[2]/n[2],i}let H=V;function U(t=1,n){let r=n??new e(3),i=Math.random()*2*Math.PI,a=Math.random()*2-1,o=Math.sqrt(1-a*a)*t;return r[0]=Math.cos(i)*o,r[1]=Math.sin(i)*o,r[2]=a*t,r}function W(t){let n=t??new e(3);return n[0]=0,n[1]=0,n[2]=0,n}function G(t,n,r){let i=r??new e(3),a=t[0],o=t[1],s=t[2],c=n[3]*a+n[7]*o+n[11]*s+n[15]||1;return i[0]=(n[0]*a+n[4]*o+n[8]*s+n[12])/c,i[1]=(n[1]*a+n[5]*o+n[9]*s+n[13])/c,i[2]=(n[2]*a+n[6]*o+n[10]*s+n[14])/c,i}function K(t,n,r){let i=r??new e(3),a=t[0],o=t[1],s=t[2];return i[0]=a*n[0]+o*n[4]+s*n[8],i[1]=a*n[1]+o*n[5]+s*n[9],i[2]=a*n[2]+o*n[6]+s*n[10],i}function q(t,n,r){let i=r??new e(3),a=t[0],o=t[1],s=t[2];return i[0]=a*n[0]+o*n[4]+s*n[8],i[1]=a*n[1]+o*n[5]+s*n[9],i[2]=a*n[2]+o*n[6]+s*n[10],i}function J(t,n,r){let i=r??new e(3),a=n[0],o=n[1],s=n[2],c=n[3]*2,l=t[0],u=t[1],d=t[2],f=o*d-s*u,p=s*l-a*d,m=a*u-o*l;return i[0]=l+f*c+(o*m-s*p)*2,i[1]=u+p*c+(s*f-a*m)*2,i[2]=d+m*c+(a*p-o*f)*2,i}function ee(t,n){let r=n??new e(3);return r[0]=t[12],r[1]=t[13],r[2]=t[14],r}function te(t,n,r){let i=r??new e(3),a=n*4;return i[0]=t[a+0],i[1]=t[a+1],i[2]=t[a+2],i}function ne(t,n){let r=n??new e(3),i=t[0],a=t[1],o=t[2],s=t[4],c=t[5],l=t[6],u=t[8],d=t[9],f=t[10];return r[0]=Math.sqrt(i*i+a*a+o*o),r[1]=Math.sqrt(s*s+c*c+l*l),r[2]=Math.sqrt(u*u+d*d+f*f),r}function re(t,n,r,i){let a=i??new e(3),o=[],s=[];return o[0]=t[0]-n[0],o[1]=t[1]-n[1],o[2]=t[2]-n[2],s[0]=o[0],s[1]=o[1]*Math.cos(r)-o[2]*Math.sin(r),s[2]=o[1]*Math.sin(r)+o[2]*Math.cos(r),a[0]=s[0]+n[0],a[1]=s[1]+n[1],a[2]=s[2]+n[2],a}function ie(t,n,r,i){let a=i??new e(3),o=[],s=[];return o[0]=t[0]-n[0],o[1]=t[1]-n[1],o[2]=t[2]-n[2],s[0]=o[2]*Math.sin(r)+o[0]*Math.cos(r),s[1]=o[1],s[2]=o[2]*Math.cos(r)-o[0]*Math.sin(r),a[0]=s[0]+n[0],a[1]=s[1]+n[1],a[2]=s[2]+n[2],a}function ae(t,n,r,i){let a=i??new e(3),o=[],s=[];return o[0]=t[0]-n[0],o[1]=t[1]-n[1],o[2]=t[2]-n[2],s[0]=o[0]*Math.cos(r)-o[1]*Math.sin(r),s[1]=o[0]*Math.sin(r)+o[1]*Math.cos(r),s[2]=o[2],a[0]=s[0]+n[0],a[1]=s[1]+n[1],a[2]=s[2]+n[2],a}function oe(t,n,r){let i=r??new e(3);return F(t,i),y(i,n,i)}function se(t,n,r){let i=r??new e(3);return D(t)>n?oe(t,n,i):L(t,i)}function ce(t,n,r){return h(t,n,.5,r??new e(3))}return{create:t,fromValues:n,set:r,ceil:i,floor:a,round:o,clamp:s,add:c,addScaled:l,angle:u,subtract:d,sub:f,equalsApproximately:p,equals:m,lerp:h,lerpV:g,max:_,min:v,mulScalar:y,scale:b,divScalar:S,inverse:C,invert:w,cross:T,dot:E,length:D,len:O,lengthSq:k,lenSq:A,distance:j,dist:M,distanceSq:N,distSq:P,normalize:F,negate:I,copy:L,clone:R,multiply:z,mul:B,divide:V,div:H,random:U,zero:W,transformMat4:G,transformMat4Upper3x3:K,transformMat3:q,transformQuat:J,getTranslation:ee,getAxis:te,getScaling:ne,rotateX:re,rotateY:ie,rotateZ:ae,setLength:oe,truncate:se,midpoint:ce}}var E=new Map;function D(e){let t=E.get(e);return t||(t=T(e),E.set(e,t)),t}function O(e){let t=w(e),n=D(e);function r(t,n,r,i,a,o,s,c,l){let u=new e(12);return u[3]=0,u[7]=0,u[11]=0,t!==void 0&&(u[0]=t,n!==void 0&&(u[1]=n,r!==void 0&&(u[2]=r,i!==void 0&&(u[4]=i,a!==void 0&&(u[5]=a,o!==void 0&&(u[6]=o,s!==void 0&&(u[8]=s,c!==void 0&&(u[9]=c,l!==void 0&&(u[10]=l))))))))),u}function i(t,n,r,i,a,o,s,c,l,u){let d=u??new e(12);return d[0]=t,d[1]=n,d[2]=r,d[3]=0,d[4]=i,d[5]=a,d[6]=o,d[7]=0,d[8]=s,d[9]=c,d[10]=l,d[11]=0,d}function a(t,n){let r=n??new e(12);return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=0,r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=0,r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=0,r}function o(t,n){let r=n??new e(12),i=t[0],a=t[1],o=t[2],s=t[3],c=i+i,l=a+a,u=o+o,d=i*c,f=a*c,p=a*l,m=o*c,h=o*l,g=o*u,_=s*c,v=s*l,y=s*u;return r[0]=1-p-g,r[1]=f+y,r[2]=m-v,r[3]=0,r[4]=f-y,r[5]=1-d-g,r[6]=h+_,r[7]=0,r[8]=m+v,r[9]=h-_,r[10]=1-d-p,r[11]=0,r}function s(t,n){let r=n??new e(12);return r[0]=-t[0],r[1]=-t[1],r[2]=-t[2],r[4]=-t[4],r[5]=-t[5],r[6]=-t[6],r[8]=-t[8],r[9]=-t[9],r[10]=-t[10],r}function c(t,n,r){let i=r??new e(12);return i[0]=t[0]*n,i[1]=t[1]*n,i[2]=t[2]*n,i[4]=t[4]*n,i[5]=t[5]*n,i[6]=t[6]*n,i[8]=t[8]*n,i[9]=t[9]*n,i[10]=t[10]*n,i}let l=c;function u(t,n,r){let i=r??new e(12);return i[0]=t[0]+n[0],i[1]=t[1]+n[1],i[2]=t[2]+n[2],i[4]=t[4]+n[4],i[5]=t[5]+n[5],i[6]=t[6]+n[6],i[8]=t[8]+n[8],i[9]=t[9]+n[9],i[10]=t[10]+n[10],i}function d(t,n){let r=n??new e(12);return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[8]=t[8],r[9]=t[9],r[10]=t[10],r}let f=d;function p(e,t){return Math.abs(e[0]-t[0])<x&&Math.abs(e[1]-t[1])<x&&Math.abs(e[2]-t[2])<x&&Math.abs(e[4]-t[4])<x&&Math.abs(e[5]-t[5])<x&&Math.abs(e[6]-t[6])<x&&Math.abs(e[8]-t[8])<x&&Math.abs(e[9]-t[9])<x&&Math.abs(e[10]-t[10])<x}function m(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[4]===t[4]&&e[5]===t[5]&&e[6]===t[6]&&e[8]===t[8]&&e[9]===t[9]&&e[10]===t[10]}function h(t){let n=t??new e(12);return n[0]=1,n[1]=0,n[2]=0,n[4]=0,n[5]=1,n[6]=0,n[8]=0,n[9]=0,n[10]=1,n}function g(t,n){let r=n??new e(12);if(r===t){let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,r}let i=t[0],a=t[1],o=t[2],s=t[4],c=t[5],l=t[6],u=t[8],d=t[9],f=t[10];return r[0]=i,r[1]=s,r[2]=u,r[4]=a,r[5]=c,r[6]=d,r[8]=o,r[9]=l,r[10]=f,r}function _(t,n){let r=n??new e(12),i=t[0],a=t[1],o=t[2],s=t[4],c=t[5],l=t[6],u=t[8],d=t[9],f=t[10],p=f*c-l*d,m=-f*s+l*u,h=d*s-c*u,g=1/(i*p+a*m+o*h);return r[0]=p*g,r[1]=(-f*a+o*d)*g,r[2]=(l*a-o*c)*g,r[4]=m*g,r[5]=(f*i-o*u)*g,r[6]=(-l*i+o*s)*g,r[8]=h*g,r[9]=(-d*i+a*u)*g,r[10]=(c*i-a*s)*g,r}function v(e){let t=e[0],n=e[1],r=e[2],i=e[4],a=e[5],o=e[6],s=e[8],c=e[9],l=e[10];return t*(a*l-c*o)-i*(n*l-c*r)+s*(n*o-a*r)}let y=_;function b(t,n,r){let i=r??new e(12),a=t[0],o=t[1],s=t[2],c=t[4],l=t[5],u=t[6],d=t[8],f=t[9],p=t[10],m=n[0],h=n[1],g=n[2],_=n[4],v=n[5],y=n[6],b=n[8],x=n[9],S=n[10];return i[0]=a*m+c*h+d*g,i[1]=o*m+l*h+f*g,i[2]=s*m+u*h+p*g,i[4]=a*_+c*v+d*y,i[5]=o*_+l*v+f*y,i[6]=s*_+u*v+p*y,i[8]=a*b+c*x+d*S,i[9]=o*b+l*x+f*S,i[10]=s*b+u*x+p*S,i}let S=b;function C(e,t,n){let r=n??h();return e!==r&&(r[0]=e[0],r[1]=e[1],r[2]=e[2],r[4]=e[4],r[5]=e[5],r[6]=e[6]),r[8]=t[0],r[9]=t[1],r[10]=1,r}function T(e,n){let r=n??t.create();return r[0]=e[8],r[1]=e[9],r}function E(e,n,r){let i=r??t.create(),a=n*4;return i[0]=e[a+0],i[1]=e[a+1],i}function O(e,t,n,r){let i=r===e?e:d(e,r),a=n*4;return i[a+0]=t[0],i[a+1]=t[1],i}function k(e,n){let r=n??t.create(),i=e[0],a=e[1],o=e[4],s=e[5];return r[0]=Math.sqrt(i*i+a*a),r[1]=Math.sqrt(o*o+s*s),r}function A(e,t){let r=t??n.create(),i=e[0],a=e[1],o=e[2],s=e[4],c=e[5],l=e[6],u=e[8],d=e[9],f=e[10];return r[0]=Math.sqrt(i*i+a*a+o*o),r[1]=Math.sqrt(s*s+c*c+l*l),r[2]=Math.sqrt(u*u+d*d+f*f),r}function j(t,n){let r=n??new e(12);return r[0]=1,r[1]=0,r[2]=0,r[4]=0,r[5]=1,r[6]=0,r[8]=t[0],r[9]=t[1],r[10]=1,r}function M(t,n,r){let i=r??new e(12),a=n[0],o=n[1],s=t[0],c=t[1],l=t[2],u=t[4],d=t[5],f=t[6],p=t[8],m=t[9],h=t[10];return t!==i&&(i[0]=s,i[1]=c,i[2]=l,i[4]=u,i[5]=d,i[6]=f),i[8]=s*a+u*o+p,i[9]=c*a+d*o+m,i[10]=l*a+f*o+h,i}function N(t,n){let r=n??new e(12),i=Math.cos(t),a=Math.sin(t);return r[0]=i,r[1]=a,r[2]=0,r[4]=-a,r[5]=i,r[6]=0,r[8]=0,r[9]=0,r[10]=1,r}function P(t,n,r){let i=r??new e(12),a=t[0],o=t[1],s=t[2],c=t[4],l=t[5],u=t[6],d=Math.cos(n),f=Math.sin(n);return i[0]=d*a+f*c,i[1]=d*o+f*l,i[2]=d*s+f*u,i[4]=d*c-f*a,i[5]=d*l-f*o,i[6]=d*u-f*s,t!==i&&(i[8]=t[8],i[9]=t[9],i[10]=t[10]),i}function F(t,n){let r=n??new e(12),i=Math.cos(t),a=Math.sin(t);return r[0]=1,r[1]=0,r[2]=0,r[4]=0,r[5]=i,r[6]=a,r[8]=0,r[9]=-a,r[10]=i,r}function I(t,n,r){let i=r??new e(12),a=t[4],o=t[5],s=t[6],c=t[8],l=t[9],u=t[10],d=Math.cos(n),f=Math.sin(n);return i[4]=d*a+f*c,i[5]=d*o+f*l,i[6]=d*s+f*u,i[8]=d*c-f*a,i[9]=d*l-f*o,i[10]=d*u-f*s,t!==i&&(i[0]=t[0],i[1]=t[1],i[2]=t[2]),i}function L(t,n){let r=n??new e(12),i=Math.cos(t),a=Math.sin(t);return r[0]=i,r[1]=0,r[2]=-a,r[4]=0,r[5]=1,r[6]=0,r[8]=a,r[9]=0,r[10]=i,r}function R(t,n,r){let i=r??new e(12),a=t[0],o=t[1],s=t[2],c=t[8],l=t[9],u=t[10],d=Math.cos(n),f=Math.sin(n);return i[0]=d*a-f*c,i[1]=d*o-f*l,i[2]=d*s-f*u,i[8]=d*c+f*a,i[9]=d*l+f*o,i[10]=d*u+f*s,t!==i&&(i[4]=t[4],i[5]=t[5],i[6]=t[6]),i}let z=N,B=P;function V(t,n){let r=n??new e(12);return r[0]=t[0],r[1]=0,r[2]=0,r[4]=0,r[5]=t[1],r[6]=0,r[8]=0,r[9]=0,r[10]=1,r}function H(t,n,r){let i=r??new e(12),a=n[0],o=n[1];return i[0]=a*t[0],i[1]=a*t[1],i[2]=a*t[2],i[4]=o*t[4],i[5]=o*t[5],i[6]=o*t[6],t!==i&&(i[8]=t[8],i[9]=t[9],i[10]=t[10]),i}function U(t,n){let r=n??new e(12);return r[0]=t[0],r[1]=0,r[2]=0,r[4]=0,r[5]=t[1],r[6]=0,r[8]=0,r[9]=0,r[10]=t[2],r}function W(t,n,r){let i=r??new e(12),a=n[0],o=n[1],s=n[2];return i[0]=a*t[0],i[1]=a*t[1],i[2]=a*t[2],i[4]=o*t[4],i[5]=o*t[5],i[6]=o*t[6],i[8]=s*t[8],i[9]=s*t[9],i[10]=s*t[10],i}function G(t,n){let r=n??new e(12);return r[0]=t,r[1]=0,r[2]=0,r[4]=0,r[5]=t,r[6]=0,r[8]=0,r[9]=0,r[10]=1,r}function K(t,n,r){let i=r??new e(12);return i[0]=n*t[0],i[1]=n*t[1],i[2]=n*t[2],i[4]=n*t[4],i[5]=n*t[5],i[6]=n*t[6],t!==i&&(i[8]=t[8],i[9]=t[9],i[10]=t[10]),i}function q(t,n){let r=n??new e(12);return r[0]=t,r[1]=0,r[2]=0,r[4]=0,r[5]=t,r[6]=0,r[8]=0,r[9]=0,r[10]=t,r}function J(t,n,r){let i=r??new e(12);return i[0]=n*t[0],i[1]=n*t[1],i[2]=n*t[2],i[4]=n*t[4],i[5]=n*t[5],i[6]=n*t[6],i[8]=n*t[8],i[9]=n*t[9],i[10]=n*t[10],i}return{add:u,clone:f,copy:d,create:r,determinant:v,equals:m,equalsApproximately:p,fromMat4:a,fromQuat:o,get3DScaling:A,getAxis:E,getScaling:k,getTranslation:T,identity:h,inverse:_,invert:y,mul:S,mulScalar:l,multiply:b,multiplyScalar:c,negate:s,rotate:P,rotateX:I,rotateY:R,rotateZ:B,rotation:N,rotationX:F,rotationY:L,rotationZ:z,scale:H,scale3D:W,scaling:V,scaling3D:U,set:i,setAxis:O,setTranslation:C,translate:M,translation:j,transpose:g,uniformScale:K,uniformScale3D:J,uniformScaling:G,uniformScaling3D:q}}var k=new Map;function A(e){let t=k.get(e);return t||(t=O(e),k.set(e,t)),t}function j(e){let t=D(e);function n(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){let _=new e(16);return t!==void 0&&(_[0]=t,n!==void 0&&(_[1]=n,r!==void 0&&(_[2]=r,i!==void 0&&(_[3]=i,a!==void 0&&(_[4]=a,o!==void 0&&(_[5]=o,s!==void 0&&(_[6]=s,c!==void 0&&(_[7]=c,l!==void 0&&(_[8]=l,u!==void 0&&(_[9]=u,d!==void 0&&(_[10]=d,f!==void 0&&(_[11]=f,p!==void 0&&(_[12]=p,m!==void 0&&(_[13]=m,h!==void 0&&(_[14]=h,g!==void 0&&(_[15]=g)))))))))))))))),_}function r(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_){let v=_??new e(16);return v[0]=t,v[1]=n,v[2]=r,v[3]=i,v[4]=a,v[5]=o,v[6]=s,v[7]=c,v[8]=l,v[9]=u,v[10]=d,v[11]=f,v[12]=p,v[13]=m,v[14]=h,v[15]=g,v}function i(t,n){let r=n??new e(16);return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=0,r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=0,r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function a(t,n){let r=n??new e(16),i=t[0],a=t[1],o=t[2],s=t[3],c=i+i,l=a+a,u=o+o,d=i*c,f=a*c,p=a*l,m=o*c,h=o*l,g=o*u,_=s*c,v=s*l,y=s*u;return r[0]=1-p-g,r[1]=f+y,r[2]=m-v,r[3]=0,r[4]=f-y,r[5]=1-d-g,r[6]=h+_,r[7]=0,r[8]=m+v,r[9]=h-_,r[10]=1-d-p,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function o(t,n){let r=n??new e(16);return r[0]=-t[0],r[1]=-t[1],r[2]=-t[2],r[3]=-t[3],r[4]=-t[4],r[5]=-t[5],r[6]=-t[6],r[7]=-t[7],r[8]=-t[8],r[9]=-t[9],r[10]=-t[10],r[11]=-t[11],r[12]=-t[12],r[13]=-t[13],r[14]=-t[14],r[15]=-t[15],r}function s(t,n,r){let i=r??new e(16);return i[0]=t[0]+n[0],i[1]=t[1]+n[1],i[2]=t[2]+n[2],i[3]=t[3]+n[3],i[4]=t[4]+n[4],i[5]=t[5]+n[5],i[6]=t[6]+n[6],i[7]=t[7]+n[7],i[8]=t[8]+n[8],i[9]=t[9]+n[9],i[10]=t[10]+n[10],i[11]=t[11]+n[11],i[12]=t[12]+n[12],i[13]=t[13]+n[13],i[14]=t[14]+n[14],i[15]=t[15]+n[15],i}function c(t,n,r){let i=r??new e(16);return i[0]=t[0]*n,i[1]=t[1]*n,i[2]=t[2]*n,i[3]=t[3]*n,i[4]=t[4]*n,i[5]=t[5]*n,i[6]=t[6]*n,i[7]=t[7]*n,i[8]=t[8]*n,i[9]=t[9]*n,i[10]=t[10]*n,i[11]=t[11]*n,i[12]=t[12]*n,i[13]=t[13]*n,i[14]=t[14]*n,i[15]=t[15]*n,i}let l=c;function u(t,n){let r=n??new e(16);return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=t[11],r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15],r}let d=u;function f(e,t){return Math.abs(e[0]-t[0])<x&&Math.abs(e[1]-t[1])<x&&Math.abs(e[2]-t[2])<x&&Math.abs(e[3]-t[3])<x&&Math.abs(e[4]-t[4])<x&&Math.abs(e[5]-t[5])<x&&Math.abs(e[6]-t[6])<x&&Math.abs(e[7]-t[7])<x&&Math.abs(e[8]-t[8])<x&&Math.abs(e[9]-t[9])<x&&Math.abs(e[10]-t[10])<x&&Math.abs(e[11]-t[11])<x&&Math.abs(e[12]-t[12])<x&&Math.abs(e[13]-t[13])<x&&Math.abs(e[14]-t[14])<x&&Math.abs(e[15]-t[15])<x}function p(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]&&e[6]===t[6]&&e[7]===t[7]&&e[8]===t[8]&&e[9]===t[9]&&e[10]===t[10]&&e[11]===t[11]&&e[12]===t[12]&&e[13]===t[13]&&e[14]===t[14]&&e[15]===t[15]}function m(t){let n=t??new e(16);return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function h(t,n){let r=n??new e(16);if(r===t){let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,r}let i=t[0],a=t[1],o=t[2],s=t[3],c=t[4],l=t[5],u=t[6],d=t[7],f=t[8],p=t[9],m=t[10],h=t[11],g=t[12],_=t[13],v=t[14],y=t[15];return r[0]=i,r[1]=c,r[2]=f,r[3]=g,r[4]=a,r[5]=l,r[6]=p,r[7]=_,r[8]=o,r[9]=u,r[10]=m,r[11]=v,r[12]=s,r[13]=d,r[14]=h,r[15]=y,r}function g(t,n){let r=n??new e(16),i=t[0],a=t[1],o=t[2],s=t[3],c=t[4],l=t[5],u=t[6],d=t[7],f=t[8],p=t[9],m=t[10],h=t[11],g=t[12],_=t[13],v=t[14],y=t[15],b=m*y,x=v*h,S=u*y,C=v*d,w=u*h,T=m*d,E=o*y,D=v*s,O=o*h,k=m*s,A=o*d,j=u*s,M=f*_,N=g*p,P=c*_,F=g*l,I=c*p,L=f*l,R=i*_,z=g*a,B=i*p,V=f*a,H=i*l,U=c*a,W=b*l+C*p+w*_-(x*l+S*p+T*_),G=x*a+E*p+k*_-(b*a+D*p+O*_),K=S*a+D*l+A*_-(C*a+E*l+j*_),q=T*a+O*l+j*p-(w*a+k*l+A*p),J=1/(i*W+c*G+f*K+g*q);return r[0]=J*W,r[1]=J*G,r[2]=J*K,r[3]=J*q,r[4]=J*(x*c+S*f+T*g-(b*c+C*f+w*g)),r[5]=J*(b*i+D*f+O*g-(x*i+E*f+k*g)),r[6]=J*(C*i+E*c+j*g-(S*i+D*c+A*g)),r[7]=J*(w*i+k*c+A*f-(T*i+O*c+j*f)),r[8]=J*(M*d+F*h+I*y-(N*d+P*h+L*y)),r[9]=J*(N*s+R*h+V*y-(M*s+z*h+B*y)),r[10]=J*(P*s+z*d+H*y-(F*s+R*d+U*y)),r[11]=J*(L*s+B*d+U*h-(I*s+V*d+H*h)),r[12]=J*(P*m+L*v+N*u-(I*v+M*u+F*m)),r[13]=J*(B*v+M*o+z*m-(R*m+V*v+N*o)),r[14]=J*(R*u+U*v+F*o-(H*v+P*o+z*u)),r[15]=J*(H*m+I*o+V*u-(B*u+U*m+L*o)),r}function _(e){let t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=d*g,v=h*f,y=s*g,b=h*c,x=s*f,S=d*c,C=r*g,w=h*i,T=r*f,E=d*i,D=r*c,O=s*i,k=_*o+b*u+x*m-(v*o+y*u+S*m),A=v*n+C*u+E*m-(_*n+w*u+T*m),j=y*n+w*o+D*m-(b*n+C*o+O*m),M=S*n+T*o+O*u-(x*n+E*o+D*u);return t*k+a*A+l*j+p*M}let v=g;function y(t,n,r){let i=r??new e(16),a=t[0],o=t[1],s=t[2],c=t[3],l=t[4],u=t[5],d=t[6],f=t[7],p=t[8],m=t[9],h=t[10],g=t[11],_=t[12],v=t[13],y=t[14],b=t[15],x=n[0],S=n[1],C=n[2],w=n[3],T=n[4],E=n[5],D=n[6],O=n[7],k=n[8],A=n[9],j=n[10],M=n[11],N=n[12],P=n[13],F=n[14],I=n[15];return i[0]=a*x+l*S+p*C+_*w,i[1]=o*x+u*S+m*C+v*w,i[2]=s*x+d*S+h*C+y*w,i[3]=c*x+f*S+g*C+b*w,i[4]=a*T+l*E+p*D+_*O,i[5]=o*T+u*E+m*D+v*O,i[6]=s*T+d*E+h*D+y*O,i[7]=c*T+f*E+g*D+b*O,i[8]=a*k+l*A+p*j+_*M,i[9]=o*k+u*A+m*j+v*M,i[10]=s*k+d*A+h*j+y*M,i[11]=c*k+f*A+g*j+b*M,i[12]=a*N+l*P+p*F+_*I,i[13]=o*N+u*P+m*F+v*I,i[14]=s*N+d*P+h*F+y*I,i[15]=c*N+f*P+g*F+b*I,i}let b=y;function S(e,t,n){let r=n??m();return e!==r&&(r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r[4]=e[4],r[5]=e[5],r[6]=e[6],r[7]=e[7],r[8]=e[8],r[9]=e[9],r[10]=e[10],r[11]=e[11]),r[12]=t[0],r[13]=t[1],r[14]=t[2],r[15]=1,r}function C(e,n){let r=n??t.create();return r[0]=e[12],r[1]=e[13],r[2]=e[14],r}function w(e,n,r){let i=r??t.create(),a=n*4;return i[0]=e[a+0],i[1]=e[a+1],i[2]=e[a+2],i}function T(e,t,n,r){let i=r===e?r:u(e,r),a=n*4;return i[a+0]=t[0],i[a+1]=t[1],i[a+2]=t[2],i}function E(e,n){let r=n??t.create(),i=e[0],a=e[1],o=e[2],s=e[4],c=e[5],l=e[6],u=e[8],d=e[9],f=e[10];return r[0]=Math.sqrt(i*i+a*a+o*o),r[1]=Math.sqrt(s*s+c*c+l*l),r[2]=Math.sqrt(u*u+d*d+f*f),r}function O(t,n,r,i,a){let o=a??new e(16),s=Math.tan(Math.PI*.5-.5*t);if(o[0]=s/n,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=s,o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[11]=-1,o[12]=0,o[13]=0,o[15]=0,Number.isFinite(i)){let e=1/(r-i);o[10]=i*e,o[14]=i*r*e}else o[10]=-1,o[14]=-r;return o}function k(t,n,r,i=1/0,a){let o=a??new e(16),s=1/Math.tan(t*.5);if(o[0]=s/n,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=s,o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[11]=-1,o[12]=0,o[13]=0,o[15]=0,i===1/0)o[10]=0,o[14]=r;else{let e=1/(i-r);o[10]=r*e,o[14]=i*r*e}return o}function A(t,n,r,i,a,o,s){let c=s??new e(16);return c[0]=2/(n-t),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(i-r),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1/(a-o),c[11]=0,c[12]=(n+t)/(t-n),c[13]=(i+r)/(r-i),c[14]=a/(a-o),c[15]=1,c}function j(t,n,r,i,a,o,s){let c=s??new e(16),l=n-t,u=i-r,d=a-o;return c[0]=2*a/l,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*a/u,c[6]=0,c[7]=0,c[8]=(t+n)/l,c[9]=(i+r)/u,c[10]=o/d,c[11]=-1,c[12]=0,c[13]=0,c[14]=a*o/d,c[15]=0,c}function M(t,n,r,i,a,o=1/0,s){let c=s??new e(16),l=n-t,u=i-r;if(c[0]=2*a/l,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*a/u,c[6]=0,c[7]=0,c[8]=(t+n)/l,c[9]=(i+r)/u,c[11]=-1,c[12]=0,c[13]=0,c[15]=0,o===1/0)c[10]=0,c[14]=a;else{let e=1/(o-a);c[10]=a*e,c[14]=o*a*e}return c}let N=t.create(),P=t.create(),F=t.create();function I(n,r,i,a){let o=a??new e(16);return t.normalize(t.subtract(r,n,F),F),t.normalize(t.cross(i,F,N),N),t.normalize(t.cross(F,N,P),P),o[0]=N[0],o[1]=N[1],o[2]=N[2],o[3]=0,o[4]=P[0],o[5]=P[1],o[6]=P[2],o[7]=0,o[8]=F[0],o[9]=F[1],o[10]=F[2],o[11]=0,o[12]=n[0],o[13]=n[1],o[14]=n[2],o[15]=1,o}function L(n,r,i,a){let o=a??new e(16);return t.normalize(t.subtract(n,r,F),F),t.normalize(t.cross(i,F,N),N),t.normalize(t.cross(F,N,P),P),o[0]=N[0],o[1]=N[1],o[2]=N[2],o[3]=0,o[4]=P[0],o[5]=P[1],o[6]=P[2],o[7]=0,o[8]=F[0],o[9]=F[1],o[10]=F[2],o[11]=0,o[12]=n[0],o[13]=n[1],o[14]=n[2],o[15]=1,o}function R(n,r,i,a){let o=a??new e(16);return t.normalize(t.subtract(n,r,F),F),t.normalize(t.cross(i,F,N),N),t.normalize(t.cross(F,N,P),P),o[0]=N[0],o[1]=P[0],o[2]=F[0],o[3]=0,o[4]=N[1],o[5]=P[1],o[6]=F[1],o[7]=0,o[8]=N[2],o[9]=P[2],o[10]=F[2],o[11]=0,o[12]=-(N[0]*n[0]+N[1]*n[1]+N[2]*n[2]),o[13]=-(P[0]*n[0]+P[1]*n[1]+P[2]*n[2]),o[14]=-(F[0]*n[0]+F[1]*n[1]+F[2]*n[2]),o[15]=1,o}function z(t,n){let r=n??new e(16);return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=t[0],r[13]=t[1],r[14]=t[2],r[15]=1,r}function B(t,n,r){let i=r??new e(16),a=n[0],o=n[1],s=n[2],c=t[0],l=t[1],u=t[2],d=t[3],f=t[4],p=t[5],m=t[6],h=t[7],g=t[8],_=t[9],v=t[10],y=t[11],b=t[12],x=t[13],S=t[14],C=t[15];return t!==i&&(i[0]=c,i[1]=l,i[2]=u,i[3]=d,i[4]=f,i[5]=p,i[6]=m,i[7]=h,i[8]=g,i[9]=_,i[10]=v,i[11]=y),i[12]=c*a+f*o+g*s+b,i[13]=l*a+p*o+_*s+x,i[14]=u*a+m*o+v*s+S,i[15]=d*a+h*o+y*s+C,i}function V(t,n){let r=n??new e(16),i=Math.cos(t),a=Math.sin(t);return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=i,r[6]=a,r[7]=0,r[8]=0,r[9]=-a,r[10]=i,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function H(t,n,r){let i=r??new e(16),a=t[4],o=t[5],s=t[6],c=t[7],l=t[8],u=t[9],d=t[10],f=t[11],p=Math.cos(n),m=Math.sin(n);return i[4]=p*a+m*l,i[5]=p*o+m*u,i[6]=p*s+m*d,i[7]=p*c+m*f,i[8]=p*l-m*a,i[9]=p*u-m*o,i[10]=p*d-m*s,i[11]=p*f-m*c,t!==i&&(i[0]=t[0],i[1]=t[1],i[2]=t[2],i[3]=t[3],i[12]=t[12],i[13]=t[13],i[14]=t[14],i[15]=t[15]),i}function U(t,n){let r=n??new e(16),i=Math.cos(t),a=Math.sin(t);return r[0]=i,r[1]=0,r[2]=-a,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=a,r[9]=0,r[10]=i,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function W(t,n,r){let i=r??new e(16),a=t[0],o=t[1],s=t[2],c=t[3],l=t[8],u=t[9],d=t[10],f=t[11],p=Math.cos(n),m=Math.sin(n);return i[0]=p*a-m*l,i[1]=p*o-m*u,i[2]=p*s-m*d,i[3]=p*c-m*f,i[8]=p*l+m*a,i[9]=p*u+m*o,i[10]=p*d+m*s,i[11]=p*f+m*c,t!==i&&(i[4]=t[4],i[5]=t[5],i[6]=t[6],i[7]=t[7],i[12]=t[12],i[13]=t[13],i[14]=t[14],i[15]=t[15]),i}function G(t,n){let r=n??new e(16),i=Math.cos(t),a=Math.sin(t);return r[0]=i,r[1]=a,r[2]=0,r[3]=0,r[4]=-a,r[5]=i,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function K(t,n,r){let i=r??new e(16),a=t[0],o=t[1],s=t[2],c=t[3],l=t[4],u=t[5],d=t[6],f=t[7],p=Math.cos(n),m=Math.sin(n);return i[0]=p*a+m*l,i[1]=p*o+m*u,i[2]=p*s+m*d,i[3]=p*c+m*f,i[4]=p*l-m*a,i[5]=p*u-m*o,i[6]=p*d-m*s,i[7]=p*f-m*c,t!==i&&(i[8]=t[8],i[9]=t[9],i[10]=t[10],i[11]=t[11],i[12]=t[12],i[13]=t[13],i[14]=t[14],i[15]=t[15]),i}function q(t,n,r){let i=r??new e(16),a=t[0],o=t[1],s=t[2],c=Math.sqrt(a*a+o*o+s*s);a/=c,o/=c,s/=c;let l=a*a,u=o*o,d=s*s,f=Math.cos(n),p=Math.sin(n),m=1-f;return i[0]=l+(1-l)*f,i[1]=a*o*m+s*p,i[2]=a*s*m-o*p,i[3]=0,i[4]=a*o*m-s*p,i[5]=u+(1-u)*f,i[6]=o*s*m+a*p,i[7]=0,i[8]=a*s*m+o*p,i[9]=o*s*m-a*p,i[10]=d+(1-d)*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}let J=q;function ee(t,n,r,i){let a=i??new e(16),o=n[0],s=n[1],c=n[2],l=Math.sqrt(o*o+s*s+c*c);o/=l,s/=l,c/=l;let u=o*o,d=s*s,f=c*c,p=Math.cos(r),m=Math.sin(r),h=1-p,g=u+(1-u)*p,_=o*s*h+c*m,v=o*c*h-s*m,y=o*s*h-c*m,b=d+(1-d)*p,x=s*c*h+o*m,S=o*c*h+s*m,C=s*c*h-o*m,w=f+(1-f)*p,T=t[0],E=t[1],D=t[2],O=t[3],k=t[4],A=t[5],j=t[6],M=t[7],N=t[8],P=t[9],F=t[10],I=t[11];return a[0]=g*T+_*k+v*N,a[1]=g*E+_*A+v*P,a[2]=g*D+_*j+v*F,a[3]=g*O+_*M+v*I,a[4]=y*T+b*k+x*N,a[5]=y*E+b*A+x*P,a[6]=y*D+b*j+x*F,a[7]=y*O+b*M+x*I,a[8]=S*T+C*k+w*N,a[9]=S*E+C*A+w*P,a[10]=S*D+C*j+w*F,a[11]=S*O+C*M+w*I,t!==a&&(a[12]=t[12],a[13]=t[13],a[14]=t[14],a[15]=t[15]),a}let te=ee;function ne(t,n){let r=n??new e(16);return r[0]=t[0],r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=t[1],r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=t[2],r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function re(t,n,r){let i=r??new e(16),a=n[0],o=n[1],s=n[2];return i[0]=a*t[0],i[1]=a*t[1],i[2]=a*t[2],i[3]=a*t[3],i[4]=o*t[4],i[5]=o*t[5],i[6]=o*t[6],i[7]=o*t[7],i[8]=s*t[8],i[9]=s*t[9],i[10]=s*t[10],i[11]=s*t[11],t!==i&&(i[12]=t[12],i[13]=t[13],i[14]=t[14],i[15]=t[15]),i}function ie(t,n){let r=n??new e(16);return r[0]=t,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=t,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=t,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function ae(t,n,r){let i=r??new e(16);return i[0]=n*t[0],i[1]=n*t[1],i[2]=n*t[2],i[3]=n*t[3],i[4]=n*t[4],i[5]=n*t[5],i[6]=n*t[6],i[7]=n*t[7],i[8]=n*t[8],i[9]=n*t[9],i[10]=n*t[10],i[11]=n*t[11],t!==i&&(i[12]=t[12],i[13]=t[13],i[14]=t[14],i[15]=t[15]),i}return{add:s,aim:I,axisRotate:ee,axisRotation:q,cameraAim:L,clone:d,copy:u,create:n,determinant:_,equals:p,equalsApproximately:f,fromMat3:i,fromQuat:a,frustum:j,frustumReverseZ:M,getAxis:w,getScaling:E,getTranslation:C,identity:m,inverse:g,invert:v,lookAt:R,mul:b,mulScalar:l,multiply:y,multiplyScalar:c,negate:o,ortho:A,perspective:O,perspectiveReverseZ:k,rotate:te,rotateX:H,rotateY:W,rotateZ:K,rotation:J,rotationX:V,rotationY:U,rotationZ:G,scale:re,scaling:ne,set:r,setAxis:T,setTranslation:S,translate:B,translation:z,transpose:h,uniformScale:ae,uniformScaling:ie}}var M=new Map;function N(e){let t=M.get(e);return t||(t=j(e),M.set(e,t)),t}function P(e){let t=D(e);function n(t,n,r,i){let a=new e(4);return t!==void 0&&(a[0]=t,n!==void 0&&(a[1]=n,r!==void 0&&(a[2]=r,i!==void 0&&(a[3]=i)))),a}let r=n;function i(t,n,r,i,a){let o=a??new e(4);return o[0]=t,o[1]=n,o[2]=r,o[3]=i,o}function a(t,n,r){let i=r??new e(4),a=n*.5,o=Math.sin(a);return i[0]=o*t[0],i[1]=o*t[1],i[2]=o*t[2],i[3]=Math.cos(a),i}function o(e,n){let r=n??t.create(3),i=Math.acos(e[3])*2,a=Math.sin(i*.5);return a>x?(r[0]=e[0]/a,r[1]=e[1]/a,r[2]=e[2]/a):(r[0]=1,r[1]=0,r[2]=0),{angle:i,axis:r}}function s(e,t){let n=O(e,t);return Math.acos(2*n*n-1)}function c(t,n,r){let i=r??new e(4),a=t[0],o=t[1],s=t[2],c=t[3],l=n[0],u=n[1],d=n[2],f=n[3];return i[0]=a*f+c*l+o*d-s*u,i[1]=o*f+c*u+s*l-a*d,i[2]=s*f+c*d+a*u-o*l,i[3]=c*f-a*l-o*u-s*d,i}let l=c;function u(t,n,r){let i=r??new e(4),a=n*.5,o=t[0],s=t[1],c=t[2],l=t[3],u=Math.sin(a),d=Math.cos(a);return i[0]=o*d+l*u,i[1]=s*d+c*u,i[2]=c*d-s*u,i[3]=l*d-o*u,i}function d(t,n,r){let i=r??new e(4),a=n*.5,o=t[0],s=t[1],c=t[2],l=t[3],u=Math.sin(a),d=Math.cos(a);return i[0]=o*d-c*u,i[1]=s*d+l*u,i[2]=c*d+o*u,i[3]=l*d-s*u,i}function f(t,n,r){let i=r??new e(4),a=n*.5,o=t[0],s=t[1],c=t[2],l=t[3],u=Math.sin(a),d=Math.cos(a);return i[0]=o*d+s*u,i[1]=s*d-o*u,i[2]=c*d+l*u,i[3]=l*d-c*u,i}function p(t,n,r,i){let a=i??new e(4),o=t[0],s=t[1],c=t[2],l=t[3],u=n[0],d=n[1],f=n[2],p=n[3],m=o*u+s*d+c*f+l*p;m<0&&(m=-m,u=-u,d=-d,f=-f,p=-p);let h,g;if(1-m>x){let e=Math.acos(m),t=Math.sin(e);h=Math.sin((1-r)*e)/t,g=Math.sin(r*e)/t}else h=1-r,g=r;return a[0]=h*o+g*u,a[1]=h*s+g*d,a[2]=h*c+g*f,a[3]=h*l+g*p,a}function m(t,n){let r=n??new e(4),i=t[0],a=t[1],o=t[2],s=t[3],c=i*i+a*a+o*o+s*s,l=c?1/c:0;return r[0]=-i*l,r[1]=-a*l,r[2]=-o*l,r[3]=s*l,r}function h(t,n){let r=n??new e(4);return r[0]=-t[0],r[1]=-t[1],r[2]=-t[2],r[3]=t[3],r}function g(t,n){let r=n??new e(4),i=t[0]+t[5]+t[10];if(i>0){let e=Math.sqrt(i+1);r[3]=.5*e;let n=.5/e;r[0]=(t[6]-t[9])*n,r[1]=(t[8]-t[2])*n,r[2]=(t[1]-t[4])*n}else{let e=0;t[5]>t[0]&&(e=1),t[10]>t[e*4+e]&&(e=2);let n=(e+1)%3,i=(e+2)%3,a=Math.sqrt(t[e*4+e]-t[n*4+n]-t[i*4+i]+1);r[e]=.5*a;let o=.5/a;r[3]=(t[n*4+i]-t[i*4+n])*o,r[n]=(t[n*4+e]+t[e*4+n])*o,r[i]=(t[i*4+e]+t[e*4+i])*o}return r}function _(t,n,r,i,a){let o=a??new e(4),s=t*.5,c=n*.5,l=r*.5,u=Math.sin(s),d=Math.cos(s),f=Math.sin(c),p=Math.cos(c),m=Math.sin(l),h=Math.cos(l);switch(i){case`xyz`:o[0]=u*p*h+d*f*m,o[1]=d*f*h-u*p*m,o[2]=d*p*m+u*f*h,o[3]=d*p*h-u*f*m;break;case`xzy`:o[0]=u*p*h-d*f*m,o[1]=d*f*h-u*p*m,o[2]=d*p*m+u*f*h,o[3]=d*p*h+u*f*m;break;case`yxz`:o[0]=u*p*h+d*f*m,o[1]=d*f*h-u*p*m,o[2]=d*p*m-u*f*h,o[3]=d*p*h+u*f*m;break;case`yzx`:o[0]=u*p*h+d*f*m,o[1]=d*f*h+u*p*m,o[2]=d*p*m-u*f*h,o[3]=d*p*h-u*f*m;break;case`zxy`:o[0]=u*p*h-d*f*m,o[1]=d*f*h+u*p*m,o[2]=d*p*m+u*f*h,o[3]=d*p*h-u*f*m;break;case`zyx`:o[0]=u*p*h-d*f*m,o[1]=d*f*h+u*p*m,o[2]=d*p*m-u*f*h,o[3]=d*p*h+u*f*m;break;default:throw Error(`Unknown rotation order: ${i}`)}return o}function v(t,n){let r=n??new e(4);return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r}let y=v;function b(t,n,r){let i=r??new e(4);return i[0]=t[0]+n[0],i[1]=t[1]+n[1],i[2]=t[2]+n[2],i[3]=t[3]+n[3],i}function S(t,n,r){let i=r??new e(4);return i[0]=t[0]-n[0],i[1]=t[1]-n[1],i[2]=t[2]-n[2],i[3]=t[3]-n[3],i}let C=S;function w(t,n,r){let i=r??new e(4);return i[0]=t[0]*n,i[1]=t[1]*n,i[2]=t[2]*n,i[3]=t[3]*n,i}let T=w;function E(t,n,r){let i=r??new e(4);return i[0]=t[0]/n,i[1]=t[1]/n,i[2]=t[2]/n,i[3]=t[3]/n,i}function O(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]}function k(t,n,r,i){let a=i??new e(4);return a[0]=t[0]+r*(n[0]-t[0]),a[1]=t[1]+r*(n[1]-t[1]),a[2]=t[2]+r*(n[2]-t[2]),a[3]=t[3]+r*(n[3]-t[3]),a}function A(e){let t=e[0],n=e[1],r=e[2],i=e[3];return Math.sqrt(t*t+n*n+r*r+i*i)}let j=A;function M(e){let t=e[0],n=e[1],r=e[2],i=e[3];return t*t+n*n+r*r+i*i}let N=M;function P(t,n){let r=n??new e(4),i=t[0],a=t[1],o=t[2],s=t[3],c=Math.sqrt(i*i+a*a+o*o+s*s);return c>1e-5?(r[0]=i/c,r[1]=a/c,r[2]=o/c,r[3]=s/c):(r[0]=0,r[1]=0,r[2]=0,r[3]=1),r}function F(e,t){return Math.abs(e[0]-t[0])<x&&Math.abs(e[1]-t[1])<x&&Math.abs(e[2]-t[2])<x&&Math.abs(e[3]-t[3])<x}function I(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]}function L(t){let n=t??new e(4);return n[0]=0,n[1]=0,n[2]=0,n[3]=1,n}let R=t.create(),z=t.create(),B=t.create();function V(n,r,i){let o=i??new e(4),s=t.dot(n,r);return s<-.999999?(t.cross(z,n,R),t.len(R)<1e-6&&t.cross(B,n,R),t.normalize(R,R),a(R,Math.PI,o),o):s>.999999?(o[0]=0,o[1]=0,o[2]=0,o[3]=1,o):(t.cross(n,r,R),o[0]=R[0],o[1]=R[1],o[2]=R[2],o[3]=1+s,P(o,o))}let H=new e(4),U=new e(4);function W(t,n,r,i,a,o){let s=o??new e(4);return p(t,i,a,H),p(n,r,a,U),p(H,U,2*a*(1-a),s),s}return{create:n,fromValues:r,set:i,fromAxisAngle:a,toAxisAngle:o,angle:s,multiply:c,mul:l,rotateX:u,rotateY:d,rotateZ:f,slerp:p,inverse:m,conjugate:h,fromMat:g,fromEuler:_,copy:v,clone:y,add:b,subtract:S,sub:C,mulScalar:w,scale:T,divScalar:E,dot:O,lerp:k,length:A,len:j,lengthSq:M,lenSq:N,normalize:P,equalsApproximately:F,equals:I,identity:L,rotationTo:V,sqlerp:W}}var F=new Map;function I(e){let t=F.get(e);return t||(t=P(e),F.set(e,t)),t}function L(e){function t(t,n,r,i){let a=new e(4);return t!==void 0&&(a[0]=t,n!==void 0&&(a[1]=n,r!==void 0&&(a[2]=r,i!==void 0&&(a[3]=i)))),a}let n=t;function r(t,n,r,i,a){let o=a??new e(4);return o[0]=t,o[1]=n,o[2]=r,o[3]=i,o}function i(t,n){let r=n??new e(4);return r[0]=Math.ceil(t[0]),r[1]=Math.ceil(t[1]),r[2]=Math.ceil(t[2]),r[3]=Math.ceil(t[3]),r}function a(t,n){let r=n??new e(4);return r[0]=Math.floor(t[0]),r[1]=Math.floor(t[1]),r[2]=Math.floor(t[2]),r[3]=Math.floor(t[3]),r}function o(t,n){let r=n??new e(4);return r[0]=Math.round(t[0]),r[1]=Math.round(t[1]),r[2]=Math.round(t[2]),r[3]=Math.round(t[3]),r}function s(t,n=0,r=1,i){let a=i??new e(4);return a[0]=Math.min(r,Math.max(n,t[0])),a[1]=Math.min(r,Math.max(n,t[1])),a[2]=Math.min(r,Math.max(n,t[2])),a[3]=Math.min(r,Math.max(n,t[3])),a}function c(t,n,r){let i=r??new e(4);return i[0]=t[0]+n[0],i[1]=t[1]+n[1],i[2]=t[2]+n[2],i[3]=t[3]+n[3],i}function l(t,n,r,i){let a=i??new e(4);return a[0]=t[0]+n[0]*r,a[1]=t[1]+n[1]*r,a[2]=t[2]+n[2]*r,a[3]=t[3]+n[3]*r,a}function u(t,n,r){let i=r??new e(4);return i[0]=t[0]-n[0],i[1]=t[1]-n[1],i[2]=t[2]-n[2],i[3]=t[3]-n[3],i}let d=u;function f(e,t){return Math.abs(e[0]-t[0])<x&&Math.abs(e[1]-t[1])<x&&Math.abs(e[2]-t[2])<x&&Math.abs(e[3]-t[3])<x}function p(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]}function m(t,n,r,i){let a=i??new e(4);return a[0]=t[0]+r*(n[0]-t[0]),a[1]=t[1]+r*(n[1]-t[1]),a[2]=t[2]+r*(n[2]-t[2]),a[3]=t[3]+r*(n[3]-t[3]),a}function h(t,n,r,i){let a=i??new e(4);return a[0]=t[0]+r[0]*(n[0]-t[0]),a[1]=t[1]+r[1]*(n[1]-t[1]),a[2]=t[2]+r[2]*(n[2]-t[2]),a[3]=t[3]+r[3]*(n[3]-t[3]),a}function g(t,n,r){let i=r??new e(4);return i[0]=Math.max(t[0],n[0]),i[1]=Math.max(t[1],n[1]),i[2]=Math.max(t[2],n[2]),i[3]=Math.max(t[3],n[3]),i}function _(t,n,r){let i=r??new e(4);return i[0]=Math.min(t[0],n[0]),i[1]=Math.min(t[1],n[1]),i[2]=Math.min(t[2],n[2]),i[3]=Math.min(t[3],n[3]),i}function v(t,n,r){let i=r??new e(4);return i[0]=t[0]*n,i[1]=t[1]*n,i[2]=t[2]*n,i[3]=t[3]*n,i}let y=v;function b(t,n,r){let i=r??new e(4);return i[0]=t[0]/n,i[1]=t[1]/n,i[2]=t[2]/n,i[3]=t[3]/n,i}function S(t,n){let r=n??new e(4);return r[0]=1/t[0],r[1]=1/t[1],r[2]=1/t[2],r[3]=1/t[3],r}let C=S;function w(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]}function T(e){let t=e[0],n=e[1],r=e[2],i=e[3];return Math.sqrt(t*t+n*n+r*r+i*i)}let E=T;function D(e){let t=e[0],n=e[1],r=e[2],i=e[3];return t*t+n*n+r*r+i*i}let O=D;function k(e,t){let n=e[0]-t[0],r=e[1]-t[1],i=e[2]-t[2],a=e[3]-t[3];return Math.sqrt(n*n+r*r+i*i+a*a)}let A=k;function j(e,t){let n=e[0]-t[0],r=e[1]-t[1],i=e[2]-t[2],a=e[3]-t[3];return n*n+r*r+i*i+a*a}let M=j;function N(t,n){let r=n??new e(4),i=t[0],a=t[1],o=t[2],s=t[3],c=i*i+a*a+o*o+s*s,l=c>0?1/Math.sqrt(c):1;return r[0]=i*l,r[1]=a*l,r[2]=o*l,r[3]=s*l,r}function P(t,n){let r=n??new e(4);return r[0]=-t[0],r[1]=-t[1],r[2]=-t[2],r[3]=-t[3],r}function F(t,n){let r=n??new e(4);return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r}let I=F;function L(t,n,r){let i=r??new e(4);return i[0]=t[0]*n[0],i[1]=t[1]*n[1],i[2]=t[2]*n[2],i[3]=t[3]*n[3],i}let R=L;function z(t,n,r){let i=r??new e(4);return i[0]=t[0]/n[0],i[1]=t[1]/n[1],i[2]=t[2]/n[2],i[3]=t[3]/n[3],i}let B=z;function V(t){let n=t??new e(4);return n[0]=0,n[1]=0,n[2]=0,n[3]=0,n}function H(t,n,r){let i=r??new e(4),a=t[0],o=t[1],s=t[2],c=t[3];return i[0]=n[0]*a+n[4]*o+n[8]*s+n[12]*c,i[1]=n[1]*a+n[5]*o+n[9]*s+n[13]*c,i[2]=n[2]*a+n[6]*o+n[10]*s+n[14]*c,i[3]=n[3]*a+n[7]*o+n[11]*s+n[15]*c,i}function U(t,n,r){let i=r??new e(4);return N(t,i),v(i,n,i)}function W(t,n,r){let i=r??new e(4);return T(t)>n?U(t,n,i):F(t,i)}function G(t,n,r){return m(t,n,.5,r??new e(4))}return{create:t,fromValues:n,set:r,ceil:i,floor:a,round:o,clamp:s,add:c,addScaled:l,subtract:u,sub:d,equalsApproximately:f,equals:p,lerp:m,lerpV:h,max:g,min:_,mulScalar:v,scale:y,divScalar:b,inverse:S,invert:C,dot:w,length:T,len:E,lengthSq:D,lenSq:O,distance:k,dist:A,distanceSq:j,distSq:M,normalize:N,negate:P,copy:F,clone:I,multiply:L,mul:R,divide:z,div:B,zero:V,transformMat4:H,setLength:U,truncate:W,midpoint:G}}var R=new Map;function z(e){let t=R.get(e);return t||(t=L(e),R.set(e,t)),t}function B(e,t,n,r,i,a){return{mat3:A(e),mat4:N(t),quat:I(n),vec2:w(r),vec3:D(i),vec4:z(a)}}var{mat3:V,mat4:H,quat:U,vec2:W,vec3:G,vec4:K}=B(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array),{mat3:q,mat4:J,quat:ee,vec2:te,vec3:ne,vec4:re}=B(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array),{mat3:ie,mat4:ae,quat:oe,vec2:se,vec3:ce,vec4:le}=B(b,Array,Array,Array,Array,Array);function ue(e){let t=e.numberOfChannels,n=e.length,r=new DataView(new ArrayBuffer(44+n*t*2)),i=Array.from({length:t},(t,n)=>e.getChannelData(n)),a=(e,t)=>{for(let n=0;n<t.length;n++)r.setUint8(e+n,t.charCodeAt(n))};a(0,`RIFF`),r.setUint32(4,36+n*t*2,!0),a(8,`WAVE`),a(12,`fmt `),r.setUint32(16,16,!0),r.setUint16(20,1,!0),r.setUint16(22,t,!0),r.setUint32(24,e.sampleRate,!0),r.setUint32(28,e.sampleRate*t*2,!0),r.setUint16(32,t*2,!0),r.setUint16(34,16,!0),a(36,`data`),r.setUint32(40,n*t*2,!0);for(let e=0;e<n;e++)for(let n=0;n<t;n++){let a=Math.max(-1,Math.min(1,i[n]?.[e]??0));r.setInt16(44+(e*t+n)*2,a<0?a*32768:a*32767,!0)}let o=new Uint8Array(r.buffer),s=``;for(let e=0;e<o.length;e+=32768)s+=String.fromCharCode(...o.subarray(e,e+32768));return btoa(s)}var de=48e3,fe=.6,pe=2,me=293.66,he=[0,3,5,7,10],Y=Array.from({length:9},(e,t)=>me*2*2**((12*Math.floor(t/5)+he[t%5])/12)),ge=[[0,3],[1,4],[2,5],[4,7],[5,8]],_e=[-3,-2,-1,1,1,2,2,3];function ve(e,t){let n=Math.round(e.sampleRate*t),r=e.createBuffer(2,n,e.sampleRate),i=Math.round(e.sampleRate*.012),a=e.sampleRate*.004;for(let o=0;o<2;o++){let s=r.getChannelData(o),c=p(29+o*7),l=0;for(let r=i;r<n;r++){let n=(r-i)/e.sampleRate,o=.08+.5*Math.exp(-n*2.4);l+=(c()*2-1-l)*o,s[r]=l*Math.exp(-6.9*n/t)*Math.min(1,(r-i)/a)}}return r}function ye(e){let t=Math.round(e.sampleRate*pe),n=e.createBuffer(1,t,e.sampleRate),r=n.getChannelData(0),i=p(41);for(let e=0;e<t;e++)r[e]=i()*2-1;return n}function be(e,t){let{reverb:n}=r.sound,i=e.createGain(),a=e.createGain(),o=e.createConvolver(),s=e.createBiquadFilter(),c=e.createGain(),l=e.createGain(),u=e.createBiquadFilter(),d=e.createBiquadFilter(),f=e.createDynamicsCompressor(),p=e.createDynamicsCompressor(),m=e.createGain();return o.buffer=ve(e,n.seconds),s.type=`highpass`,s.frequency.value=320,c.gain.value=n.level,u.type=`highpass`,u.frequency.value=120,u.Q.value=.6,d.type=`lowpass`,d.frequency.value=1e4,d.Q.value=.5,f.threshold.value=-20,f.knee.value=10,f.ratio.value=2.5,f.attack.value=.005,f.release.value=.16,p.threshold.value=-3,p.knee.value=0,p.ratio.value=20,p.attack.value=.001,p.release.value=.06,m.gain.value=t,i.connect(l),a.connect(o).connect(s).connect(c).connect(l),l.connect(u).connect(d).connect(f).connect(p).connect(m),m.connect(e.destination),{context:e,dry:i,noise:ye(e),send:a,volume:m}}function xe(e,t,n,r,i){let a=Math.max(r,1e-5);return e.setValueAtTime(0,t),e.linearRampToValueAtTime(a,t+n),e.exponentialRampToValueAtTime(a*.001,t+n+i),e.linearRampToValueAtTime(0,t+n+i+.01),t+n+i+.01}var Se=class{context;end=0;fader;input;nodes=[];output;reverb;panner;sources=[];wetFader;constructor(e,t){let{context:n}=e;this.context=n,this.output=e,this.input=this.add(n.createGain()),this.fader=this.add(n.createGain()),this.wetFader=this.add(n.createGain()),this.panner=this.add(n.createStereoPanner()),this.reverb=this.add(n.createGain());let r=this.add(n.createGain());r.gain.value=t.send,this.panner.pan.value=t.pan,this.input.connect(this.fader).connect(this.panner),this.panner.connect(e.dry),this.panner.connect(r).connect(e.send),this.reverb.connect(this.wetFader).connect(e.send)}add(e){return this.nodes.push(e),e}constant(e){let t=this.add(this.context.createGain());return t.gain.value=e,t}gain(e,t,n,r){let i=this.add(this.context.createGain());return i.gain.value=0,this.end=Math.max(this.end,xe(i.gain,e,t,n,r)),i}filter(e,t,n=.7){let r=this.add(this.context.createBiquadFilter());return r.type=e,r.frequency.value=t,r.Q.value=n,r}oscillator(e,t,n){let r=this.add(this.context.createOscillator());return r.type=e,r.frequency.setValueAtTime(t,n),r.start(n),this.sources.push(r),r}noise(e,t){let n=this.add(this.context.createBufferSource());return n.buffer=this.output.noise,n.loop=!0,n.start(e,t*1.5),this.sources.push(n),n}finish(){let e=this.end+.02,[t]=this.sources;for(let t of this.sources)t.stop(e);t&&(t.onended=()=>{for(let e of this.nodes)e.disconnect()})}release(e){if(e>=this.end)return;let t=e+.016;for(let n of[this.fader,this.wetFader])n.gain.setValueAtTime(1,e),n.gain.linearRampToValueAtTime(0,t);this.end=t;for(let e of this.sources)e.stop(t+.01)}};function Ce(e,t,n){let{decay:r}=t;for(let[i,a,o]of[[1,1,1],[2,.14,.5],[3,.05,.35]]){let s=e.oscillator(`sine`,t.pitch*i*1.012,n);s.frequency.exponentialRampToValueAtTime(t.pitch*i,n+.014),s.connect(e.gain(n,.003,t.level*a,r*o)).connect(e.input)}e.noise(n,t.noise).connect(e.filter(`highpass`,4200)).connect(e.gain(n,6e-4,t.level*.09,.005)).connect(e.input)}function we(e,t,n){let{decay:i}=r.sound;for(let[r,a]of[t.pitch,t.pitch*1.5].entries()){let o=n+r*.025,s=t.level*(r===0?1:.8);e.oscillator(`sine`,a,o).connect(e.gain(o,.003,s,i.flash)).connect(e.input),e.oscillator(`sine`,a*2,o).connect(e.gain(o,.003,s*.08,i.flash*.4)).connect(e.input)}}function Te(e,t,n){let{decay:i}=r.sound,a=e.filter(`lowpass`,6e3,.5),o=e.gain(n,.004,t.level,i.lock),s=[[1,`triangle`,.45],[1.5,`triangle`,.6],[2,`sine`,.75],[3,`sine`,.2]];a.frequency.setValueAtTime(6e3,n),a.frequency.setTargetAtTime(1700,n+.004,.06),a.connect(o).connect(e.input);for(let[r,i,o]of s)for(let s of[-4,4]){let c=e.oscillator(i,t.pitch*r,n),l=e.constant(o*.5);c.detune.value=s,c.connect(l).connect(a)}let c=e.oscillator(`sine`,t.pitch*4*1.03,n);c.frequency.exponentialRampToValueAtTime(t.pitch*4,n+.02),c.connect(e.gain(n,.001,t.level*.16,.06)).connect(e.input),e.noise(n,t.noise).connect(e.filter(`bandpass`,3e3,.8)).connect(e.gain(n,6e-4,t.level*.3,.018)).connect(e.input);let l=e.oscillator(`sine`,t.pitch*8,n),u=e.oscillator(`sine`,5.5,n),d=e.constant(t.pitch*8*.004),f=e.gain(n,.04,t.level*.07,i.lock*1.6),p=e.constant(.35);u.connect(d).connect(l.frequency),l.connect(f),f.connect(e.reverb),f.connect(p).connect(e.input)}var Ee={flash:we,lock:Te,tick:Ce};function De(e){return e.cue===`lock`?e.decay*1.6:e.decay+.03}var Oe=class{active=[];captureTime=0;context=null;density={};heard={};isCapture=!1;isEnabled=!1;last={};log=[];note=3;output=null;random=p(17);constructor(){l(this)}async enable(){if(!this.isCapture){this.context||(this.context=new AudioContext({latencyHint:`interactive`}),this.output=be(this.context,0)),this.isEnabled=!0,this.output?.volume.gain.setTargetAtTime(r.sound.volume,this.context.currentTime,.03);try{await this.context.resume()}catch{this.isEnabled=!1}}}disable(){this.isEnabled=!1,this.output?.volume.gain.setTargetAtTime(0,this.context?.currentTime??0,.03)}async toggle(){return this.isEnabled?this.disable():await this.enable(),this.isEnabled}resume(){let{context:e}=this;this.isEnabled&&e&&e.state!==`running`&&e.resume().catch(()=>{})}startCapture(){this.isCapture=!0,this.captureTime=0,this.log=[]}get now(){return this.isCapture?this.captureTime:this.context?.currentTime??0}step(e){if(e===0){let e=_e[Math.floor(this.random()*_e.length)],t=this.note+e;return this.note=u(t<0||t>=Y.length?this.note-e:t,0,Y.length-1),Y[this.note]}let t=this.note+e*(this.random()<.25?2:1);return t>=Y.length&&(t-=he.length),t<0&&(t+=he.length),this.note=t,Y[t]}pitchFor(e,t){if(e===`lock`)return me;if(e===`flash`){let[e]=ge[Math.floor(this.random()*ge.length)];return Y[e]}return this.step(t)}play(e,t,n=.5,i=0){let{decay:a,levels:o,sends:s,spacing:c,voices:l}=r.sound,d=this.now+i,f=Math.max(d-(this.heard[e]??d),0),p=(this.density[e]??0)*Math.exp(-f/fe)+1,m=(p-1)/fe;if(this.density[e]=p,this.heard[e]=d,d-(this.last[e]??-1/0)<c[e])return;let h=n>.55?1:n<.45?-1:0,g={at:i+this.random()*.004,cue:e,cut:1/0,decay:a[e]/(1+m/15),level:o[e]*(.85+this.random()*.15)/Math.sqrt(1+m/8),noise:this.random(),pan:(u(t,0,1)*2-1)*.6,pitch:this.pitchFor(e,h),send:s[e]},_=this.isCapture?this.captureTime+g.at:(this.context?.currentTime??0)+.005+g.at;for(this.last[e]=d,this.active=this.active.filter(e=>e.end>_);this.active.length>=l;){let e=this.active.shift();e.hit.cut=Math.min(e.hit.cut,_),e.voice?.release(_)}if(this.isCapture){let e={...g,at:_};this.log.push(e),this.active.push({end:_+De(g),hit:e,voice:null})}else this.output&&this.context&&this.isEnabled&&this.context.state===`running`&&this.active.push({end:_+De(g),hit:g,voice:this.schedule(this.output,g,_)})}schedule(e,t,n){let r=new Se(e,t);return Ee[t.cue](r,t,n),r.finish(),Number.isFinite(t.cut)&&r.release(t.cut),r}update(e){this.captureTime+=e}hits(){return this.log.map(({at:e,cue:t})=>({at:e,cue:t}))}async captured(e){let t=new OfflineAudioContext(2,Math.ceil(e*de),de),n=be(t,r.sound.volume);for(let t of this.log)t.at<e&&this.schedule(n,t,t.at);return ue(await t.startRendering())}};function ke(e){return e<.5?4*e*e*e:1-(-2*e+2)**3/2}function Ae(e,t,n){return e+(t-e)*n}var je=class{framings;index=0;move;push;time=0;constructor(e,t=2.2,n=.05){this.framings=e,this.move=t,this.push=n}get current(){return this.framings[this.index%this.framings.length]}get next(){return this.framings[(this.index+1)%this.framings.length]}get isMoving(){return this.time>=this.current.hold}update(e){for(this.time+=e;this.time>=this.current.hold+this.move;)this.time-=this.current.hold+this.move,this.index=(this.index+1)%this.framings.length}skip(e){this.isMoving||(e<0&&(this.index=(this.index+this.framings.length-2)%this.framings.length),this.time=this.current.hold)}shot(){let{current:e,next:t}=this,n=Math.min(this.time/e.hold,1),r=ke(Math.min(Math.max((this.time-e.hold)/this.move,0),1)),i=(e,t)=>e.distance*(1-this.push*t),a=i(e,n),o=i(t,0);return{distance:Math.exp(Ae(Math.log(a),Math.log(o),r)),pitch:Ae(e.pitch,t.pitch,r),target:e.target.map((e,n)=>Ae(e,t.target[n],r)),yaw:Ae(e.yaw,t.yaw,r)}}},Me=[[`viewProjection`,16],[`view`,16],[`lightViewProjection`,16],[`camera`,4],[`light`,4],[`ambient`,4],[`floor`,4],[`bands`,4],[`center`,4],[`shadow`,4],[`resolution`,4],[`palette`,40],[`style`,4],[`tones`,16]],Ne=(()=>{let e={},t=0;for(let[n,r]of Me)e[n]=t,t+=r;return e})(),Pe=Me.reduce((e,[,t])=>e+t,0),Fe=class{data=new Float32Array(Pe);set(e,t){this.data.set(t,Ne[e])}},Ie=class{offset=[0,0];options;phase;roll=0;rollTarget=0;smoothed=[0,0];wobble=[0,0,0];constructor(e,t=.7){this.options=e,this.phase=t}update(e,t,n,r,i){let{follow:a,move:o,roll:s,rollFollow:c,rollSpeed:l,settle:f,wobble:p,wobbleSpeed:m}=this.options;for(let t=0;t<2;t++){let r=e[t]*o[t]*i;this.smoothed[t]=this.smoothed[t]+(r-this.smoothed[t])*d(f,n),this.offset[t]=this.offset[t]+(this.smoothed[t]-this.offset[t])*d(a,n)}let h=u(Math.abs(t)/l,0,1),g=s*Math.PI/180*h*Math.sign(t)*i;this.rollTarget+=(g-this.rollTarget)*d(c,n),this.roll+=(this.rollTarget-this.roll)*d(c*3.5,n);let _=this.phase,v=m,y=r*1e3,b=Math.cos(_+y*75e-5*v)*(_+Math.sin(y*95e-5*v)*200),x=Math.sin(Math.asin(Math.cos(_+y*85e-5*v)))*(Math.sin(_+y*75e-5*v)*150);b*=Math.sin(_+y*75e-5*v)*2*Math.cos(_+y*75e-5*v)*1.1,x*=Math.cos(_+y*65e-5*v)*1.75*Math.sin(_+y*25e-5*v)*1.15;let S=Math.sin(_+b*.0025)*100,C=p*.001*i,w=[b*C,x*C,S*C];for(let e=0;e<3;e++)this.wobble[e]=this.wobble[e]+(w[e]-this.wobble[e])*d(4.2,n)}};function X(e){return Math.hypot(e[0],e[1],e[2])}var Le=class{accumulator=0;bodies=[];center;contacts=0;pointer={isActive:!1,position:[0,0,0],velocity:[0,0,0]};time=0;constructor(e,t){let{count:n,radius:i,spawn:a}=r.physics,o=p(t);this.center=e;for(let t=0;t<n;t++){let t=i[0]+(i[1]-i[0])*o()**1.6,n=o()*2-1,r=o()*Math.PI*2,s=Math.sqrt(1-n*n),c=a[0]+o()*(a[1]-a[0]);this.bodies.push({band:o(),force:[0,0,0],mass:t*t*t,position:[e[0]+s*Math.cos(r)*c,e[1]+n*.7*c,e[2]+s*Math.sin(r)*c],radius:t,velocity:[0,0,0]})}this.bodies.sort((e,t)=>t.radius-e.radius)}setPointer(e){this.pointer=e}kick(e,t=r.physics.kick){for(let n of this.bodies){let r=[n.position[0]-e[0],n.position[1]-e[1],n.position[2]-e[2]],i=Math.max(X(r),.001),a=t*Math.exp(-(i*i)/.5);for(let e=0;e<3;e++)n.velocity[e]=n.velocity[e]+r[e]/i*a}}separate(){let{repulsion:e,separationDamping:t}=r.physics,{bodies:n}=this,i=0;for(let r=0;r<n.length;r++){let a=n[r];for(let o=r+1;o<n.length;o++){let r=n[o],s=[r.position[0]-a.position[0],r.position[1]-a.position[1],r.position[2]-a.position[2]],c=X(s),l=a.radius+r.radius-c;if(l<=0||c<1e-6)continue;i++;let u=[s[0]/c,s[1]/c,s[2]/c],d=(r.velocity[0]-a.velocity[0])*u[0]+(r.velocity[1]-a.velocity[1])*u[1]+(r.velocity[2]-a.velocity[2])*u[2],f=e*l-t*Math.min(d,0);for(let e=0;e<3;e++){let t=u[e]*f*Math.min(a.mass,r.mass);a.force[e]=a.force[e]-t,r.force[e]=r.force[e]+t}}}this.contacts=i}integrate(e,t){let{attraction:n,breathe:i,breatheSpeed:a,damping:o,maximumSpeed:s,rest:c,restSpeed:l,swirl:u}=r.physics,{field:d,maximum:f,push:p}=r.pointer,m=this.pointer,h=X(m.velocity),g=Math.min(h/f,1)**1.5,_=n*(1+i*Math.sin(this.time*a)*t);for(let n of this.bodies){let r=[n.position[0]-this.center[0],n.position[1]-this.center[1],n.position[2]-this.center[2]],i=[-r[0]*_-r[2]*u*t+n.force[0]/n.mass,-r[1]*_+n.force[1]/n.mass,-r[2]*_+r[0]*u*t+n.force[2]/n.mass];if(m.isActive&&g>1e-4){let e=[n.position[0]-m.position[0],n.position[1]-m.position[1],n.position[2]-m.position[2]],r=Math.max(X(e),1e-4),a=Math.max(r-n.radius,0),o=p*Math.max(1-a/d,0)**2*g*t;for(let t=0;t<3;t++)i[t]=i[t]+e[t]/r*o}let a=X(n.velocity),f=o+c*Math.max(0,1-a/l),h=Math.exp(-f*e);for(let t=0;t<3;t++)n.velocity[t]=(n.velocity[t]+i[t]*e)*h;let v=X(n.velocity);if(v>s)for(let e=0;e<3;e++)n.velocity[e]=n.velocity[e]*s/v;for(let t=0;t<3;t++)n.position[t]=n.position[t]+n.velocity[t]*e;n.force=[0,0,0]}}step(e,t){this.time+=e,this.separate(),this.integrate(e,t)}update(e,t=1){let n=1/r.physics.rate;for(this.accumulator=Math.min(this.accumulator+e,n*16);this.accumulator>=n-1e-9;)this.step(n,t),this.accumulator-=n}write(e){this.bodies.forEach((t,n)=>{e.set([...t.position,t.radius,0,0,0,t.band],n*8)})}get energy(){return this.bodies.reduce((e,t)=>e+t.mass*X(t.velocity)**2,0)}},Re=class{damping;stiffness;value=0;velocity=0;constructor({damping:e=13,stiffness:t=160}={}){this.damping=e,this.stiffness=t}kick(e){this.velocity+=e}update(e,t){let n=Math.max(1,Math.ceil(Math.min(t,1/15)*120)),r=Math.min(t,1/15)/n;for(let t=0;t<n;t++)this.velocity+=(e-this.value)*this.stiffness*r,this.velocity*=Math.exp(-this.damping*r),this.value+=this.velocity*r;return this.value}},ze={ascii:.5,block:.35,color:0,dither:.7,glitch:.8,halftone:.55,lineart:1,negative:.8,pixels:1,scan:.4,silhouette:.8,smoke:.35,thermal:1.3,wire:.7,xray:1.3},Be=[`lineart`,`silhouette`,`thermal`,`xray`],Ve=[`block`];function He(e,t){let n=Math.min(e.left+e.width,t.left+t.width)-Math.max(e.left,t.left),r=Math.min(e.top+e.height,t.top+t.height)-Math.max(e.top,t.top);return Math.max(n,0)*Math.max(r,0)}function Ue(e,t){return t.left>=e.left&&t.top>=e.top&&t.left+t.width<=e.left+e.width&&t.top+t.height<=e.top+e.height}var We=class{boxes=[];cues=[];energy=0;extent=200;flickering=new Set;focus=[720,450];height=900;idle=0;lastLook=`color`;lead=[720,450];motion=1;nextId=1;nextSwap=2;pointer=[720,450];pump=new Re({damping:11,stiffness:140});random;time=0;travel=0;spawnPoint=null;wasActive=!1;width=1440;constructor(e){this.random=p(e)}range(e,t){return e+this.random()*(t-e)}pick(e){return e[Math.floor(this.random()*e.length)]}weight(e,t){let n=Be.includes(e);return t===`large`?Ve.includes(e)?0:ze[e]*(n?3:.4):t===`small`?ze[e]*(n?.25:1):ze[e]}pickLook(e){let t=n.filter(t=>t!==this.lastLook&&this.weight(t,e)>0),r=t.reduce((t,n)=>t+this.weight(n,e),0),i=this.random()*r;for(let n of t)if(i-=this.weight(n,e),i<=0)return this.lastLook=n,n;return this.lastLook=t[0],this.lastLook}resize(e,t){this.width=e,this.height=t}get scale(){return this.width<this.height?this.width*1.15:Math.min(this.height,this.width*.8)}get drawn(){return this.ordered}get ordered(){return[...this.boxes.filter(e=>!e.trail).sort((e,t)=>t.size[0]*t.size[1]-e.size[0]*e.size[1]),...this.boxes.filter(e=>e.trail)]}get living(){return this.boxes.filter(e=>e.leaving===null)}rectangleAt(e,t){return{height:t[1],left:e[0]-t[0]/2,top:e[1]-t[1]/2,width:t[0]}}fits(e,t,n){let{nested:i,overlap:a}=r.boxes,o=this.rectangleAt(t,n),s=0;for(let t of this.living){if(t===e)continue;let n=this.rectangleAt(t.home,t.size),c=He(o,n);if(!(c<=0)&&!(c/Math.min(o.width*o.height,n.width*n.height)<=a+.35*Math.min(this.living.length/r.trail.maximum,1))){if((Ue(n,o)||Ue(o,n))&&s===0&&this.random()<i)s++;else return!1}}return!0}candidate(e,t,n){let{scale:r}=this,i=[t[0]*.5+8,t[1]*.5+8],a,o;if(n)a=this.focus[0]+(this.random()-.5)*this.extent*.9,o=this.focus[1]+(this.random()-.5)*this.extent*.7;else if(this.random()<.55){let t=this.random()*Math.PI*2,n=this.range(.04,.42)*r;a=e[0]+Math.cos(t)*n,o=e[1]+Math.sin(t)*n*.8}else a=this.focus[0]+(this.random()-.5)*this.extent*2.6,o=this.focus[1]+(this.random()-.5)*this.extent*2.2;return[u(a,i[0],this.width-i[0]),u(o,i[1],this.height-i[1])]}sizeFor(e){let{scale:t}=this,n=this.range(.62,1.6);if(e){let e=u(this.extent*1.35*this.range(.85,1.15),t*.26,t*.6);return[e*Math.sqrt(n),e/Math.sqrt(n)]}let r=this.range(.11,.25)*t;return[r*Math.sqrt(n),r/Math.sqrt(n)]}place(e,t,n=0,i=!0){let{boxes:a}=r,o=this.living.filter(t=>t!==e&&t.isLarge).length,s=this.pickLook(o<a.large?`any`:`small`),c=Be.includes(s)&&o<a.large&&this.random()<.8;!c&&Be.includes(s)&&this.random()<.6&&(s=this.pickLook(`small`));let l=null;for(let n=0;n<28;n++){let r=this.sizeFor(c),i=this.candidate(t,r,c);if(l??={center:i,size:r},this.fits(e,i,r)){l={center:i,size:r};break}n===27&&(l={center:i,size:[r[0]*.7,r[1]*.7]})}let u=l;e.isLarge=c,e.size=u.size,e.home=u.center,e.origin=[...this.lead],e.born=this.time,e.expires=this.time+this.range(a.lifetime[0],a.lifetime[1])*(c?1.4:1),e.flash=this.time+a.flash,e.look=s,e.seed=this.random(),i&&this.cue(`tick`,u.center[0],.5,n)}create(e){let t={born:this.time,expires:0,flash:0,hasCorners:this.random()<.45,home:[...e],id:this.nextId++,isCornerFilled:this.random()<.5,isLarge:!1,landing:-1,labelSide:this.pick([`below`,`below`,`below`,`above`,`right`,`none`]),leaving:null,look:`pixels`,origin:[...e],outline:this.pick([`solid`,`solid`,`dashed`,`brackets`,`faint`,`double`]),seed:0,size:[100,100],trail:null};return this.place(t,e),this.boxes.push(t),t}cue(e,t,n=.5,r=0){this.cues.push({amount:n,cue:e,delay:r,x:t/Math.max(this.width,1)})}swap(e){this.cue(`flash`,e.home[0]),e.look=this.pickLook(e.isLarge?`large`:`small`),e.seed=this.random(),e.flash=this.time+r.boxes.flash}trim(e){let{maximum:t}=r.trail,n=this.rectangleAt(e.trail?.to??e.home,e.size);for(let t of this.living){if(t===e)continue;let r=this.rectangleAt(t.trail?.to??t.home,t.size);He(n,r)/(r.width*r.height)>.5&&(t.leaving=this.time)}for(;this.living.length>t;){let t=this.living.filter(t=>t!==e).sort((e,t)=>e.born-t.born)[0];if(!t)break;t.leaving=this.time}}retireOldest(){let e=this.living.sort((e,t)=>e.born-t.born)[0];e&&(e.leaving=this.time)}press(e,t){this.lead=[e,t],this.pointer=[e,t],this.idle=0;let n=this.living.map(e=>({box:e,order:this.random()})).sort((e,t)=>e.order-t.order).map(({box:e})=>e);for(let e of n)e.home=[-this.width,-this.height];for(let e of n){let t=[this.range(.08,.92)*this.width,this.range(.12,.88)*this.height];this.place(e,t,0,!1),e.trail=null,e.origin=[...this.lead],e.landing=-1}this.cues=this.cues.filter(e=>e.cue!==`tick`),this.cue(`lock`,e)}isFlashing(e){let{flash:t}=r.boxes;return this.time<e.flash||this.time>=e.landing&&this.time<e.landing+t}cut(){this.pump.kick(r.boxes.pump*4);for(let e of this.living)this.swap(e)}target(){let{maximum:e,minimum:t}=r.boxes;return Math.round(t+(e-t)*this.energy)}open(){let{boxes:e}=r;for(let t=0;t<e.minimum;t++){let n=this.create(this.focus),r=e.opening[t];r&&t===0&&(n.isLarge=!0,n.size=this.sizeFor(!0),n.size=[Math.max(n.size[0],n.size[1])*1.05,Math.max(n.size[0],n.size[1])*.92],n.home=[this.focus[0],this.focus[1]+this.extent*.05]),r&&(n.look=r,n.seed=.3),t>0&&(this.place(n,this.focus),r&&(n.look=r,n.seed=.3))}}updateFlicker(){let{flicker:e,flickerLimit:t}=r.boxes,n=this.boxes.filter(t=>this.time-t.born<e||t.leaving!==null).sort((e,t)=>(t.leaving??t.born)-(e.leaving??e.born));this.flickering=new Set(n.slice(0,t).map(e=>e.id)),this.boxes=this.boxes.filter(t=>t.leaving===null||this.time-t.leaving<e&&this.flickering.has(t.id))}update(e,t,n,i=1,a=this.extent){let{boxes:o}=r,{scale:s}=this;this.time+=e,this.focus=n,this.extent=a,this.boxes.length===0&&(this.lead=[...n],this.pointer=[...n],this.open());let c=t.isActive&&this.wasActive?Math.hypot(t.x-this.pointer[0],t.y-this.pointer[1]):0,l=e>0?c/e/s:0;this.wasActive=t.isActive,t.isActive&&(this.pointer=[t.x,t.y]),this.energy+=(u(l/1.4,0,1)-this.energy)*d(l>this.energy?6:.9,e),this.idle=c>.5?0:this.idle+e;let f=this.idle>1.2||!t.isActive,p=f&&this.idle>4?n:this.pointer;if(this.lead=this.lead.map((t,n)=>t+(p[n]-t)*d(f?.6:6,e)),f&&(this.nextSwap-=e,this.nextSwap<=0)){this.nextSwap=this.range(o.idleSwap[0],o.idleSwap[1]);let e=this.living;e.length>0&&this.swap(this.pick(e))}this.updateTrail(t,i),this.pump.update(0,e),this.updateFlicker(),this.motion=i,i<1&&(this.pump.value*=i)}isFlickering(e){return this.motion<1||!this.flickering.has(e.id)?!1:Math.floor(this.time*40)%2==0}isScrambling(e){return this.time-e.born<r.boxes.scramble}spawnTrail(e,t){let{size:n}=r.trail,i=this.range(n[0],n[1])*this.scale,a=this.range(.65,1.55),o={born:this.time,expires:1/0,flash:this.time+r.boxes.flash,hasCorners:this.random()<.4,home:[...t],id:this.nextId++,isCornerFilled:this.random()<.5,isLarge:!1,landing:-1,labelSide:this.pick([`below`,`none`,`none`]),leaving:null,look:this.pickLook(`any`),origin:[...t],outline:this.pick([`solid`,`solid`,`faint`,`brackets`]),seed:this.random(),size:[i*Math.sqrt(a),i/Math.sqrt(a)],trail:{from:[...e],to:[...t]}};this.boxes.push(o),this.trim(o),this.cue(`tick`,t[0],+(t[0]-e[0]-(t[1]-e[1])>=0))}updateTrail(e,t){let{threshold:n}=r.trail;if(!e.isActive){this.spawnPoint=null;return}let i=[e.x,e.y];if(!this.spawnPoint)this.spawnPoint=i;else if(Math.hypot(i[0]-this.spawnPoint[0],i[1]-this.spawnPoint[1])>n*this.scale){let e=t<1?[i[0]+(this.spawnPoint[0]-i[0])*.3,i[1]+(this.spawnPoint[1]-i[1])*.3]:this.spawnPoint;this.spawnTrail(e,i),this.spawnPoint=i,this.random()<r.trail.scatter&&this.scatter()}}scatter(){let e=[this.range(.08,.92)*this.width,this.range(.12,.88)*this.height],t=this.create(e);t.expires=1/0,this.trim(t)}trailRectangle(e,t){let{grow:n,travel:i}=r.trail,a=Math.max(this.time-e.born,0),o=1-2**(-10*Math.min(a/i,1)),s=(this.motion<1?1:n+(1-n)*o)*(1+this.pump.value*.08),c=t.from[0]+(t.to[0]-t.from[0])*o,l=t.from[1]+(t.to[1]-t.from[1])*o,u=e.size[0]*s,d=e.size[1]*s;return{height:Math.round(d),left:Math.round(c-u/2),top:Math.round(l-d/2),width:Math.round(u)}}opacity(e){return this.isFlickering(e)?.3:1}rectangle(e){if(e.trail)return this.trailRectangle(e,e.trail);let{drift:t,flicker:n}=r.boxes,i=.18*(1-Math.min((this.time-e.born)/n,1)),a=Math.max(.6,1+this.pump.value*.12+i),o=e.size[0]*a,s=e.size[1]*a,c=e.isLarge?t*.4:t,l=e.home[0]+(this.lead[0]-e.origin[0])*c,d=e.home[1]+(this.lead[1]-e.origin[1])*c;return{height:Math.round(s),left:Math.round(u(l,o*.3,this.width-o*.3)-o/2),top:Math.round(u(d,s*.3,this.height-s*.3)-s/2),width:Math.round(o)}}uniforms(e){let t=[],r=[];for(let i of this.drawn.slice(-e)){let{height:e,left:a,top:o,width:s}=this.rectangle(i);t.push(a/this.width,o/this.height,s/this.width,e/this.height),r.push(n.indexOf(i.look),this.opacity(i),+!!this.isFlashing(i),i.seed)}let i=t.length/4;for(;t.length<e*4;)t.push(0,0,0,0),r.push(0,0,0,0);return{count:i,fills:r,rectangles:t}}},Ge=class{cache=new Map;device;identities=new WeakMap;next=0;constructor(e){l(this),this.device=e}identity(e){let t=this.identities.get(e);return t===void 0&&(t=this.next++,this.identities.set(e,t)),t}key(e,t){let n=t.map(({binding:e,resource:t})=>{let n=`buffer`in t?t.buffer:t;return`${e}:${this.identity(n)}`});return`${this.identity(e)}|${n.join(`,`)}`}get(e,t){let n=this.key(e,t),r=this.cache.get(n);return r||(r=this.device.createBindGroup({entries:t,layout:e}),this.cache.set(n,r)),r}clear(){this.cache.clear()}},Ke=[` `,`.`,`,`,`:`,`;`,`-`,`~`,`=`,`+`,`*`,`x`,`o`,`O`,`#`,`%`,`@`],Z={height:80,width:48};function qe(e){let t=document.createElement(`canvas`),n=t.getContext(`2d`);if(t.width=Z.width*Ke.length,t.height=Z.height,!n)throw Error(`No 2D context for the glyph atlas`);n.fillStyle=`#000`,n.fillRect(0,0,t.width,t.height),n.fillStyle=`#fff`,n.font=`600 ${Z.height*.78}px ui-monospace, "SF Mono", Menlo, monospace`,n.textAlign=`center`,n.textBaseline=`middle`,Ke.forEach((e,t)=>{n.fillText(e,(t+.5)*Z.width,Z.height*.54)});let r=e.createTexture({format:`rgba8unorm`,label:`glyphs`,size:[t.width,t.height],usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});return e.queue.copyExternalImageToTexture({source:t},{texture:r},[t.width,t.height]),r}var Q=4,Je=8,Ye=`500 9px ui-monospace, "SF Mono", Menlo, Consolas, monospace`,Xe=11,Ze=`rgb(34 34 34 / 86%)`,Qe=`rgb(240 244 255 / 86%)`;function $e(e,t=4){return String(Math.max(0,e)).padStart(t,`0`)}var et=class{canvas=document.createElement(`canvas`);context;stats={contacts:0,spheres:0};hasCursor=new URLSearchParams(window.location.search).has(`cursor`);isCapture=new URLSearchParams(window.location.search).has(`capture`);isDark=!1;random=p(5);get ink(){return this.isDark?Qe:Ze}constructor(){let e=this.canvas.getContext(`2d`);if(!e)throw Error(`No 2D context for the boxes overlay`);this.context=e,this.canvas.className=`boxes`,this.canvas.setAttribute(`aria-hidden`,`true`),document.querySelector(`.canvas`)?.after(this.canvas)}draw(e,t){let{canvas:n,context:r}=this,i=this.isCapture?window.devicePixelRatio:Math.min(window.devicePixelRatio,2),a=window.innerWidth,o=window.innerHeight;(n.width!==Math.round(a*i)||n.height!==Math.round(o*i))&&(n.width=Math.round(a*i),n.height=Math.round(o*i)),r.setTransform(i,0,0,i,0,0),r.clearRect(0,0,a,o);for(let t of e.drawn){let n=e.rectangle(t);r.save(),r.globalAlpha=e.opacity(t),this.drawOutline(t,n.left,n.top,n.width,n.height),t.labelSide!==`none`&&this.drawLabel(e,t,n.left,n.top,n.width,n.height,i),r.restore()}this.hasCursor&&this.drawCursor(t[0],t[1])}drawCursor(e,t){let{context:n}=this,r=[[0,0],[0,16],[4,12.2],[6.8,18.4],[9.4,17.3],[6.7,11.2],[11.6,11.2]];n.save(),n.translate(Math.round(e),Math.round(t)),n.beginPath();for(let[e,[t,i]]of r.entries())e===0?n.moveTo(t,i):n.lineTo(t,i);n.closePath(),n.lineJoin=`round`,n.lineWidth=1.6,n.strokeStyle=`#ffffff`,n.fillStyle=`#111111`,n.stroke(),n.fill(),n.restore()}drawOutline(e,t,n,r,i){let{context:a}=this,o=t+r,s=n+i;if(a.save(),a.strokeStyle=this.ink,a.lineWidth=1,a.globalAlpha*=e.outline===`faint`?.4:.9,e.outline===`brackets`){let e=Math.min(Je,r/2,i/2);a.beginPath();for(let[r,i,c,l]of[[t,n,1,1],[o,n,-1,1],[o,s,-1,-1],[t,s,1,-1]])a.moveTo(r+.5+c*e,i+.5),a.lineTo(r+.5,i+.5),a.lineTo(r+.5,i+.5+l*e);a.stroke()}else if(a.setLineDash(e.outline===`dashed`?[3,3]:[]),a.strokeRect(t+.5,n+.5,r,i),e.outline===`double`){let e=Math.round(Math.min(r,i)*.08);a.globalAlpha*=.6,a.strokeRect(t+e+.5,n-e+.5,r,i)}if(e.hasCorners){a.setLineDash([]),a.fillStyle=this.ink;for(let[r,i]of[[t,n],[o,n],[o,s],[t,s]])e.isCornerFilled?a.fillRect(r-Q/2,i-Q/2,Q,Q):a.strokeRect(r-Q/2+.5,i-Q/2+.5,Q,Q)}a.restore()}lines(e,t,n,r,i,a,o){let s=e.isScrambling(t),c=()=>Math.floor(this.random()*3e3),l=e=>s?c():Math.round(e*o),u=`#${String(t.id%100).padStart(2,`0`)} ${t.look}  ${l(i)}×${l(a)}`,d=`x ${$e(l(n+i/2))}  y ${$e(l(r+a/2))}`,f=`sphere ${this.stats.spheres} · contact ${this.stats.contacts}`;return t.size[1]<e.height*.13?[u,d]:[u,d,f]}drawLabel(e,t,n,r,i,a,o){let{context:s}=this,c=this.lines(e,t,n,r,i,a,o);s.fillStyle=this.ink,s.font=Ye,s.shadowBlur=3,s.shadowColor=this.isDark?`rgb(0 0 0 / 60%)`:`rgb(200 200 200 / 70%)`,s.textBaseline=`top`,c.forEach((e,o)=>{t.labelSide===`right`?s.fillText(e,n+i+6,r+o*Xe):t.labelSide===`above`?s.fillText(e,n,r-4-(c.length-o)*Xe):s.fillText(e,n,r+a+5+o*Xe)})}},tt=`struct Post {
  resolution: vec4f,
  grade: vec4f,
  bloom: vec4f,
  look: vec4f,
  background: vec4f,
  boxes: array<vec4f, 20>,
  fills: array<vec4f, 20>,
}

@group(0) @binding(0) var<uniform> post: Post;
@group(0) @binding(1) var linearSampler: sampler;
@group(0) @binding(2) var source: texture_2d<f32>;

struct VertexOutput {
  @builtin(position) position: vec4f,
  @location(0) uv: vec2f,
}

@vertex
fn vs(@builtin(vertex_index) index: u32) -> VertexOutput {
  let corner = vec2f(f32((index << 1u) & 2u), f32(index & 2u));
  var out: VertexOutput;
  out.position = vec4f(corner * 2.0 - 1.0, 0.0, 1.0);
  out.uv = vec2f(corner.x, 1.0 - corner.y);
  return out;
}


fn luminance(color: vec3f) -> f32 {
  return dot(color, vec3f(0.2126, 0.7152, 0.0722));
}


fn tap(uv: vec2f, offset: vec2f, texel: vec2f) -> vec3f {
  return textureSampleLevel(source, linearSampler, uv + texel * offset, 0.0).rgb;
}

@fragment
fn fs(in: VertexOutput) -> @location(0) vec4f {
  let uv = in.uv;
  let texel = 1.0 / vec2f(textureDimensions(source));
  var color = tap(uv, vec2f(0.0), texel) * 0.125;

  color += (tap(uv, vec2f(-2.0, -2.0), texel) + tap(uv, vec2f(2.0, -2.0), texel) + tap(uv, vec2f(-2.0, 2.0), texel) +
    tap(uv, vec2f(2.0, 2.0), texel)) * 0.03125;
  color += (tap(uv, vec2f(0.0, -2.0), texel) + tap(uv, vec2f(-2.0, 0.0), texel) + tap(uv, vec2f(2.0, 0.0), texel) +
    tap(uv, vec2f(0.0, 2.0), texel)) * 0.0625;
  color += (tap(uv, vec2f(-1.0, -1.0), texel) + tap(uv, vec2f(1.0, -1.0), texel) + tap(uv, vec2f(-1.0, 1.0), texel) +
    tap(uv, vec2f(1.0, 1.0), texel)) * 0.125;

  return vec4f(color, 1.0);
}
`,nt=`struct Post {
  resolution: vec4f,
  grade: vec4f,
  bloom: vec4f,
  look: vec4f,
  background: vec4f,
  boxes: array<vec4f, 20>,
  fills: array<vec4f, 20>,
}

@group(0) @binding(0) var<uniform> post: Post;
@group(0) @binding(1) var linearSampler: sampler;
@group(0) @binding(2) var source: texture_2d<f32>;

struct VertexOutput {
  @builtin(position) position: vec4f,
  @location(0) uv: vec2f,
}

@vertex
fn vs(@builtin(vertex_index) index: u32) -> VertexOutput {
  let corner = vec2f(f32((index << 1u) & 2u), f32(index & 2u));
  var out: VertexOutput;
  out.position = vec4f(corner * 2.0 - 1.0, 0.0, 1.0);
  out.uv = vec2f(corner.x, 1.0 - corner.y);
  return out;
}


fn luminance(color: vec3f) -> f32 {
  return dot(color, vec3f(0.2126, 0.7152, 0.0722));
}


fn tap(uv: vec2f, offset: vec2f, texel: vec2f) -> vec3f {
  let color = min(textureSampleLevel(source, linearSampler, uv + offset * texel, 0.0).rgb, vec3f(64.0));

  return color / (1.0 + luminance(color));
}

@fragment
fn fs(in: VertexOutput) -> @location(0) vec4f {
  let texel = 1.0 / vec2f(textureDimensions(source));
  var color = tap(in.uv, vec2f(-1.0, -1.0), texel) + tap(in.uv, vec2f(1.0, -1.0), texel) +
    tap(in.uv, vec2f(-1.0, 1.0), texel) + tap(in.uv, vec2f(1.0, 1.0), texel);

  color *= 0.25;
  color /= max(1.0 - luminance(color), 0.0001);

  let threshold = post.bloom.y;
  let knee = smoothstep(threshold, threshold + 0.8, luminance(color));

  return vec4f(color * knee, 1.0);
}
`,rt=`struct Post {
  resolution: vec4f,
  grade: vec4f,
  bloom: vec4f,
  look: vec4f,
  background: vec4f,
  boxes: array<vec4f, 20>,
  fills: array<vec4f, 20>,
}

@group(0) @binding(0) var<uniform> post: Post;
@group(0) @binding(1) var linearSampler: sampler;
@group(0) @binding(2) var source: texture_2d<f32>;

struct VertexOutput {
  @builtin(position) position: vec4f,
  @location(0) uv: vec2f,
}

@vertex
fn vs(@builtin(vertex_index) index: u32) -> VertexOutput {
  let corner = vec2f(f32((index << 1u) & 2u), f32(index & 2u));
  var out: VertexOutput;
  out.position = vec4f(corner * 2.0 - 1.0, 0.0, 1.0);
  out.uv = vec2f(corner.x, 1.0 - corner.y);
  return out;
}


fn luminance(color: vec3f) -> f32 {
  return dot(color, vec3f(0.2126, 0.7152, 0.0722));
}


@group(0) @binding(3) var previous: texture_2d<f32>;

fn tap(uv: vec2f, offset: vec2f) -> vec3f {
  return textureSampleLevel(source, linearSampler, uv + offset, 0.0).rgb;
}

@fragment
fn fs(in: VertexOutput) -> @location(0) vec4f {
  let offset = post.bloom.z / vec2f(textureDimensions(source));
  let uv = in.uv;
  var color = tap(uv, vec2f(0.0)) * 4.0;

  color += (tap(uv, vec2f(-offset.x, 0.0)) + tap(uv, vec2f(offset.x, 0.0))) * 2.0;
  color += (tap(uv, vec2f(0.0, -offset.y)) + tap(uv, vec2f(0.0, offset.y))) * 2.0;
  color += tap(uv, -offset) + tap(uv, offset);
  color += tap(uv, vec2f(-offset.x, offset.y)) + tap(uv, vec2f(offset.x, -offset.y));

  return vec4f(textureSampleLevel(previous, linearSampler, uv, 0.0).rgb + color / 16.0, 1.0);
}
`,it=`struct Post {
  resolution: vec4f,
  grade: vec4f,
  bloom: vec4f,
  look: vec4f,
  background: vec4f,
  boxes: array<vec4f, 20>,
  fills: array<vec4f, 20>,
}

@group(0) @binding(0) var<uniform> post: Post;
@group(0) @binding(1) var linearSampler: sampler;
@group(0) @binding(2) var source: texture_2d<f32>;

struct VertexOutput {
  @builtin(position) position: vec4f,
  @location(0) uv: vec2f,
}

@vertex
fn vs(@builtin(vertex_index) index: u32) -> VertexOutput {
  let corner = vec2f(f32((index << 1u) & 2u), f32(index & 2u));
  var out: VertexOutput;
  out.position = vec4f(corner * 2.0 - 1.0, 0.0, 1.0);
  out.uv = vec2f(corner.x, 1.0 - corner.y);
  return out;
}


fn luminance(color: vec3f) -> f32 {
  return dot(color, vec3f(0.2126, 0.7152, 0.0722));
}


@group(0) @binding(3) var bloomTexture: texture_2d<f32>;
@group(0) @binding(4) var infoTexture: texture_2d<f32>;
@group(0) @binding(5) var detailTexture: texture_2d<f32>;
@group(0) @binding(6) var glowTexture: texture_2d<f32>;
@group(0) @binding(7) var glyphTexture: texture_2d<f32>;

const LOOK_XRAY = 1;
const LOOK_PIXELS = 2;
const LOOK_NEGATIVE = 3;
const LOOK_THERMAL = 4;
const LOOK_GLITCH = 5;
const LOOK_LINEART = 6;
const LOOK_SILHOUETTE = 7;
const LOOK_HALFTONE = 8;
const LOOK_DITHER = 9;
const LOOK_WIRE = 10;
const LOOK_SCAN = 11;
const LOOK_ASCII = 12;
const LOOK_BLOCK = 13;
const LOOK_SMOKE = 14;

const GLYPHS = 16.0;
const GLOW_LEVELS = 5.0;

fn neutral(color: vec3f) -> vec3f {
  let start = 0.76;
  var result = color;
  let peak = max(result.r, max(result.g, result.b));

  if (peak < start) {
    return result;
  }

  let range = 1.0 - start;
  let compressed = 1.0 - range * range / (peak + range - start);

  result *= compressed / peak;

  let desaturation = 1.0 - 1.0 / (0.15 * (peak - compressed) + 1.0);

  return mix(result, vec3f(compressed), desaturation);
}

fn toSrgb(color: vec3f) -> vec3f {
  return select(color * 12.92, 1.055 * pow(color, vec3f(1.0 / 2.4)) - 0.055, color > vec3f(0.0031308));
}

fn fromHex(value: u32) -> vec3f {
  return vec3f(f32((value >> 16u) & 255u), f32((value >> 8u) & 255u), f32(value & 255u)) / 255.0;
}

fn hash12(point: vec2f) -> f32 {
  var value = fract(vec3f(point.xyx) * 0.1031);

  value += dot(value, value.yzx + 33.33);

  return fract((value.x + value.y) * value.z);
}

fn base(uv: vec2f) -> vec3f {
  var color = textureSampleLevel(source, linearSampler, uv, 0.0).rgb;

  color += textureSampleLevel(bloomTexture, linearSampler, uv, 0.0).rgb * post.bloom.x;
  color *= post.grade.x;

  let center = (uv - 0.5) * vec2f(post.resolution.x * post.resolution.w, 1.0);

  color *= 1.0 - smoothstep(0.4, 1.3, length(center)) * post.grade.z;

  return saturate(toSrgb(saturate(neutral(color))));
}

fn infoAt(uv: vec2f) -> vec4f {
  return textureSampleLevel(infoTexture, linearSampler, uv, 0.0);
}

fn detailAt(uv: vec2f) -> vec4f {
  return textureSampleLevel(detailTexture, linearSampler, uv, 0.0);
}

fn glowAt(uv: vec2f) -> vec3f {
  return textureSampleLevel(glowTexture, linearSampler, uv, 0.0).rgb / GLOW_LEVELS;
}

fn kindOf(info: vec4f) -> f32 {
  return info.y / max(info.x, 0.001);
}

fn edgeAt(uv: vec2f, width: f32) -> f32 {
  let offset = post.resolution.zw * width * post.look.x;
  let center = infoAt(uv);
  let left = infoAt(uv - vec2f(offset.x, 0.0));
  let right = infoAt(uv + vec2f(offset.x, 0.0));
  let up = infoAt(uv - vec2f(0.0, offset.y));
  let down = infoAt(uv + vec2f(0.0, offset.y));
  let coverage = abs(left.x - right.x) + abs(up.x - down.x);
  let near = min(min(left.w, right.w), min(up.w, down.w));
  let depth = (abs(left.w - right.w) + abs(up.w - down.w)) / max(near, 0.01) * min(min(left.x, right.x), min(up.x, down.x));
  let facing = (abs(left.z - right.z) + abs(up.z - down.z)) * center.x;

  return saturate(coverage * 1.4 + smoothstep(0.012, 0.04, depth) + smoothstep(0.35, 0.8, facing) * 0.6);
}

fn mosaicUv(pixel: vec2f, origin: vec2f, size: f32) -> vec2f {
  let cell = floor((pixel - origin) / size);

  return (origin + (cell + 0.5) * size) * post.resolution.zw;
}

fn xray(uv: vec2f) -> vec3f {
  let info = infoAt(uv);
  let glow = glowAt(uv);
  let edge = edgeAt(uv, 0.9);
  let inner = edge * smoothstep(0.6, 1.0, info.x);
  let veins = detailAt(uv).x * info.x;
  let shell = pow(1.0 - saturate(info.z / max(info.x, 0.001)), 1.4);
  let body = info.x * (0.16 + 0.8 * shell);
  let halo = (1.0 - info.x) * (glow.x * 0.75 + glow.y * 0.9);
  let light = saturate(body * (1.0 - inner * 0.5 - veins * 0.16) + halo + edge * (1.0 - info.x) * 0.5);
  let teal = fromHex(0x0b5d63u);
  let cyan = fromHex(0x63e3e6u);
  let white = fromHex(0xeefffeu);
  let low = mix(vec3f(0.0), teal, smoothstep(0.0, 0.3, light));
  let middle = mix(low, cyan, smoothstep(0.25, 0.62, light));

  return mix(middle, white, smoothstep(0.45, 0.85, light));
}

fn thermal(uv: vec2f) -> vec3f {
  let info = infoAt(uv);
  let detail = detailAt(uv);
  let kind = kindOf(info);
  let lit = detail.w;
  let facing = saturate(info.z / max(info.x, 0.001));
  let heat = 0.02 + pow(lit, 1.3) * 0.66 + facing * 0.06;

  let ground = mix(0.74, 1.0, smoothstep(0.35, 0.95, detail.z));
  let value = mix(ground, heat, saturate(info.x));
  var stops = array<vec3f, 6>(
    fromHex(0x1c0d9eu),
    fromHex(0x3a1cf2u),
    fromHex(0x9a22d6u),
    fromHex(0xff2a74u),
    fromHex(0xff5a0au),
    fromHex(0xffd000u),
  );
  let position = saturate(value) * 5.0;
  let index = min(i32(floor(position)), 4);

  return mix(stops[index], stops[index + 1], min(position - f32(index), 1.0));
}

fn glitch(uv: vec2f, pixel: vec2f, seed: f32) -> vec3f {
  let scale = post.look.x;
  let band = floor(pixel.y / (scale * 16.0));
  let tick = floor(post.bloom.w * 9.0);
  let chance = hash12(vec2f(band, tick + seed * 31.0));
  let shift = select(0.0, (chance - 0.82) * 220.0 * scale, chance > 0.82) * post.resolution.z;
  let split = 5.0 * scale * post.resolution.z;
  let moved = uv + vec2f(shift, 0.0);
  let red = base(moved + vec2f(split, 0.0)).r;
  let green = base(moved).g;
  let blue = base(moved - vec2f(split, 0.0)).b;
  let tint = vec3f(0.92, 1.0, 1.02);
  let lines = select(1.0, 0.9, fract(pixel.y / (scale * 3.0)) < 0.34);

  return saturate(vec3f(red, green, blue) * tint * lines);
}

fn lineart(uv: vec2f) -> vec3f {
  let info = infoAt(uv);
  let detail = detailAt(uv);
  let kind = kindOf(info);
  let edge = saturate(edgeAt(uv, 0.8) * 1.3);
  let lit = saturate(0.45 + detail.w);
  var fill = mix(fromHex(0xfcecc6u), fromHex(0xfffdf7u), lit);
  var stripe = fromHex(0xf0892au);
  var outline = fromHex(0xc0602au);

  if (kind > 0.6) {
    fill = mix(fromHex(0xdba6eeu), fromHex(0xfbeefbu), lit);
    stripe = fromHex(0x9338d0u);
    outline = fromHex(0x7a2cc0u);
  } else if (kind > 0.4) {
    fill = fromHex(0xa05ce0u);
    stripe = fromHex(0x7a2cc0u);
    outline = fromHex(0x6a22b0u);
  }

  var color = mix(vec3f(0.985), fill, info.x);

  color = mix(color, stripe, detail.x * info.x * 0.85);
  color = mix(color, outline, edge);

  return color;
}

fn silhouette(uv: vec2f) -> vec3f {
  let info = infoAt(uv);
  let glow = glowAt(uv);
  let edge = edgeAt(uv, 0.9) * info.x;
  let body = info.x * (0.94 + 0.05 * info.z) * (1.0 - edge * 0.55);
  let halo = (1.0 - exp(-glow.x * 1.8)) * 0.55;

  return vec3f(max(body, halo));
}

fn halftone(uv: vec2f, pixel: vec2f) -> vec3f {
  let cell = post.look.x * 6.0;
  let rotated = vec2f(pixel.x + pixel.y, pixel.y - pixel.x) * 0.70710678 / cell;
  let center = (floor(rotated) + 0.5) * cell;
  let back = vec2f(center.x - center.y, center.x + center.y) * 0.70710678;
  let darkness = smoothstep(0.22, 0.92, 1.0 - luminance(base(back * post.resolution.zw)));
  let radius = sqrt(saturate(darkness * 1.1)) * 0.6;
  let distance = length(fract(rotated) - 0.5);
  let edge = 0.8 / cell;
  let ink = 1.0 - smoothstep(radius - edge, radius + edge, distance);

  return mix(fromHex(0xefede6u), fromHex(0x1d1d1fu), ink);
}

fn bayer(cell: vec2f) -> f32 {
  var matrix = array<f32, 16>(0.0, 8.0, 2.0, 10.0, 12.0, 4.0, 14.0, 6.0, 3.0, 11.0, 1.0, 9.0, 15.0, 7.0, 13.0, 5.0);
  let x = i32(cell.x - 4.0 * floor(cell.x / 4.0));
  let y = i32(cell.y - 4.0 * floor(cell.y / 4.0));

  return (matrix[y * 4 + x] + 0.5) / 16.0;
}

fn dither(pixel: vec2f, origin: vec2f) -> vec3f {
  let size = post.look.x * 4.0;
  let cell = floor((pixel - origin) / size);
  let center = (origin + (cell + 0.5) * size) * post.resolution.zw;
  let value = smoothstep(0.3, 0.86, 1.0 - luminance(base(center)));
  let isOn = value > bayer(cell);
  let distance = length(fract((pixel - origin) / size) - 0.5);
  let dot = 1.0 - smoothstep(0.3, 0.42, distance);

  return vec3f(select(0.04, mix(0.04, 0.95, dot), isOn));
}

fn wire(uv: vec2f, seed: f32) -> vec3f {
  let info = infoAt(uv);
  let detail = detailAt(uv);
  let lines = saturate(detail.y * info.x * 0.75 + edgeAt(uv, 0.8));

  if (seed > 0.5) {
    return mix(vec3f(0.035), vec3f(0.9), lines);
  }

  return mix(vec3f(0.955), vec3f(0.36), lines);
}

fn ascii(pixel: vec2f, origin: vec2f) -> vec3f {
  let height = post.look.x * 11.0;
  let size = vec2f(height * 0.6, height);
  let cell = floor((pixel - origin) / size);
  let center = (origin + (cell + 0.5) * size) * post.resolution.zw;
  let value = pow(smoothstep(0.28, 1.0, 1.0 - luminance(base(center))), 1.6);
  let index = floor(clamp(value, 0.0, 0.999) * GLYPHS);
  let local = fract((pixel - origin) / size);
  let glyph = textureSampleLevel(glyphTexture, linearSampler, vec2f((index + local.x) / GLYPHS, local.y), 0.0).r;

  return mix(vec3f(0.05), vec3f(0.86, 0.95, 0.94), glyph);
}

fn block(uv: vec2f, seed: f32) -> vec3f {
  let info = infoAt(uv);
  let choice = i32(floor(seed * 4.0));
  var back = fromHex(0xf6c400u);
  var front = fromHex(0x1d2a78u);

  if (choice == 1) {
    back = fromHex(0x1d2a78u);
    front = fromHex(0xf6c400u);
  } else if (choice == 2) {
    back = fromHex(0xc8102eu);
    front = fromHex(0xf3a6e4u);
  } else if (choice == 3) {
    back = fromHex(0xe98fdcu);
    front = fromHex(0xc8102eu);
  }

  return mix(mix(back, front, info.x), back, edgeAt(uv, 0.9) * info.x * 0.85);
}

fn sparkle(pixel: vec2f, origin: vec2f, size: f32, coverage: f32) -> vec4f {
  let cell = floor((pixel - origin) / size);
  let chance = hash12(cell + floor(post.bloom.w * 6.0) * 7.31);
  let hue = hash12(cell * 1.7 + 3.1);
  let color = select(fromHex(0xd8e04au), fromHex(0x6fd3e0u), hue > 0.5);

  return vec4f(color, select(0.0, 1.0, chance < 0.012 * coverage));
}

fn look(code: i32, uv: vec2f, pixel: vec2f, origin: vec2f, seed: f32) -> vec3f {
  switch code {
    case LOOK_XRAY: {
      if (seed > 0.6) {
        return xray(mosaicUv(pixel, origin, post.look.x * 7.0));
      }

      return xray(uv);
    }
    case LOOK_PIXELS: {
      let size = post.look.x * (9.0 + floor(seed * 3.0) * 4.0);
      let center = mosaicUv(pixel, origin, size);
      let speck = sparkle(pixel, origin, size, infoAt(center).x);

      return mix(base(center), speck.rgb, speck.a);
    }
    case LOOK_NEGATIVE: {
      let size = post.look.x * (11.0 + floor(seed * 3.0) * 5.0);
      let center = mosaicUv(pixel, origin, size);
      let value = 0.17 + 0.8 * pow(smoothstep(0.25, 0.97, 1.0 - luminance(base(center))), 1.5);
      let speck = sparkle(pixel, origin, size, infoAt(center).x);

      return mix(vec3f(value), speck.rgb, speck.a);
    }
    case LOOK_THERMAL: {
      if (seed > 0.7) {
        return thermal(mosaicUv(pixel, origin, post.look.x * 10.0));
      }

      return thermal(uv);
    }
    case LOOK_GLITCH: {
      return glitch(uv, pixel, seed);
    }
    case LOOK_LINEART: {
      return lineart(uv);
    }
    case LOOK_SILHOUETTE: {
      return silhouette(uv);
    }
    case LOOK_HALFTONE: {
      return halftone(uv, pixel);
    }
    case LOOK_DITHER: {
      return dither(pixel, origin);
    }
    case LOOK_WIRE: {
      return wire(uv, seed);
    }
    case LOOK_SCAN: {
      let lines = select(1.0, 0.9, fract(pixel.y / (post.look.x * 3.0)) < 0.34);

      return mix(base(uv), vec3f(1.0), 0.6) * lines;
    }
    case LOOK_ASCII: {
      return ascii(pixel, origin);
    }
    case LOOK_BLOCK: {
      return block(uv, seed);
    }
    case LOOK_SMOKE: {
      return base(uv) * 0.46 + 0.03;
    }
    default: {
      return base(uv);
    }
  }
}

@fragment
fn fs(in: VertexOutput) -> @location(0) vec4f {
  let uv = in.uv;
  let pixel = uv * post.resolution.xy;
  var color = base(uv);

  for (var index = 0; index < i32(post.look.y); index++) {
    let box = post.boxes[index];
    let fill = post.fills[index];

    if (uv.x < box.x || uv.y < box.y || uv.x > box.x + box.z || uv.y > box.y + box.w) {
      continue;
    }

    var boxed = look(i32(fill.x + 0.5), uv, pixel, box.xy * post.resolution.xy, fill.w);

    boxed = mix(boxed, vec3f(0.95), fill.z * 0.85);
    color = mix(color, boxed, fill.y);
  }

  let seed = floor(pixel) + fract(post.bloom.w) * vec2f(1931.0, 2713.0);
  let grain = hash12(seed) + hash12(seed + 71.3) - 1.0;

  color += grain * post.grade.w + (hash12(seed + 13.1) - 0.5) / 255.0;
  color = (color - 0.5) * post.grade.y + 0.5;

  return vec4f(saturate(color), 1.0);
}
`,at=`struct Post {
  resolution: vec4f,
  grade: vec4f,
  bloom: vec4f,
  look: vec4f,
  background: vec4f,
  boxes: array<vec4f, 20>,
  fills: array<vec4f, 20>,
}

@group(0) @binding(0) var<uniform> post: Post;
@group(0) @binding(1) var linearSampler: sampler;
@group(0) @binding(2) var source: texture_2d<f32>;

struct VertexOutput {
  @builtin(position) position: vec4f,
  @location(0) uv: vec2f,
}

@vertex
fn vs(@builtin(vertex_index) index: u32) -> VertexOutput {
  let corner = vec2f(f32((index << 1u) & 2u), f32(index & 2u));
  var out: VertexOutput;
  out.position = vec4f(corner * 2.0 - 1.0, 0.0, 1.0);
  out.uv = vec2f(corner.x, 1.0 - corner.y);
  return out;
}


fn luminance(color: vec3f) -> f32 {
  return dot(color, vec3f(0.2126, 0.7152, 0.0722));
}


fn tap(uv: vec2f, offset: vec2f, texel: vec2f) -> vec3f {
  let info = textureSampleLevel(source, linearSampler, uv + offset * texel, 0.0);
  let rim = info.x * pow(1.0 - saturate(info.z), 2.0);

  return vec3f(info.x, rim, 0.0);
}

@fragment
fn fs(in: VertexOutput) -> @location(0) vec4f {
  let texel = 1.0 / vec2f(textureDimensions(source));
  let color = tap(in.uv, vec2f(-1.0, -1.0), texel) + tap(in.uv, vec2f(1.0, -1.0), texel) +
    tap(in.uv, vec2f(-1.0, 1.0), texel) + tap(in.uv, vec2f(1.0, 1.0), texel);

  return vec4f(color * 0.25, 1.0);
}
`,$=`rgba16float`,ot=`rgba16float`,st=`rgba8unorm`,ct=6,lt=5;function ut(e,t,n,r){let i=e.createShaderModule({code:t,label:r});return e.createRenderPipelineAsync({fragment:{entryPoint:`fs`,module:i,targets:[{format:n}]},label:r,layout:`auto`,primitive:{topology:`triangle-list`},vertex:{entryPoint:`vs`,module:i}})}var dt=class{bindGroups;bloomDown=[];bloomUp=[];buffer;device;glowDown=[];glowUp=[];layouts=new Map;output;sampler;uniforms=new Float32Array(180);constructor(e,t,n){this.bindGroups=n,this.device=e,this.output=t,this.buffer=e.createBuffer({label:`post`,size:720,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.sampler=e.createSampler({addressModeU:`clamp-to-edge`,addressModeV:`clamp-to-edge`,magFilter:`linear`,minFilter:`linear`})}async create(){let{device:e}=this,[t,n,r,i,a]=await Promise.all([ut(e,nt,$,`bloom prefilter`),ut(e,at,$,`glow prefilter`),ut(e,tt,$,`bloom downsample`),ut(e,rt,$,`bloom upsample`),ut(e,it,this.output,`final`)]);Object.assign(this,{downsample:r,finalPipeline:a,glowPrefilter:n,prefilter:t,upsample:i})}target(e,t,n){let r=this.device.createTexture({format:$,label:n,size:[Math.max(e,1),Math.max(t,1)],usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING});return{texture:r,view:r.createView()}}layoutOf(e){let t=this.layouts.get(e);return t||(t=e.getBindGroupLayout(0),this.layouts.set(e,t)),t}pyramid(e,t,n,r){let i=[],a=[],o=e,s=t;for(let e=0;e<n;e++)o=Math.max(Math.floor(o/2),1),s=Math.max(Math.floor(s/2),1),i.push(this.target(o,s,`${r} down ${e}`)),a.push(this.target(o,s,`${r} up ${e}`));return{down:i,up:a}}resize(e,t){this.bindGroups.clear();for(let e of[...this.bloomDown,...this.bloomUp,...this.glowDown,...this.glowUp])e.texture.destroy();let n=this.pyramid(e,t,ct,`bloom`),r=this.pyramid(e,t,lt,`glow`);this.bloomDown=n.down,this.bloomUp=n.up,this.glowDown=r.down,this.glowUp=r.up}write(){this.device.queue.writeBuffer(this.buffer,0,this.uniforms)}pass(e,t,n,r){let i=this.bindGroups.get(this.layoutOf(t),r),a=e.beginRenderPass({colorAttachments:[{clearValue:[0,0,0,1],loadOp:`clear`,storeOp:`store`,view:n}]});a.setPipeline(t),a.setBindGroup(0,i),a.draw(3),a.end()}common(e){return[{binding:0,resource:{buffer:this.buffer}},{binding:1,resource:this.sampler},{binding:2,resource:e}]}chain(e,t,n,r,i){let a=this.common(n);this.pass(e,t,r[0].view,t===this.glowPrefilter?a.slice(1):a);for(let t=1;t<r.length;t++){let n=r[t-1],i=r[t];this.pass(e,this.downsample,i.view,this.common(n.view).slice(1))}let o=r[r.length-1];for(let t=r.length-2;t>=0;t--){let n=i[t],a=r[t];this.pass(e,this.upsample,n.view,[...this.common(o.view),{binding:3,resource:a.view}]),o=n}return o.view}render(e,t,n,r){let i=this.chain(e,this.prefilter,t.color,this.bloomDown,this.bloomUp),a=this.chain(e,this.glowPrefilter,t.info,this.glowDown,this.glowUp);this.pass(e,this.finalPipeline,r,[...this.common(t.color),{binding:3,resource:i},{binding:4,resource:t.info},{binding:5,resource:t.detail},{binding:6,resource:a},{binding:7,resource:n}])}},ft=`struct Frame {
  viewProjection: mat4x4f,
  view: mat4x4f,
  lightViewProjection: mat4x4f,
  camera: vec4f,
  light: vec4f,
  ambient: vec4f,
  floor: vec4f,
  bands: vec4f,
  center: vec4f,
  shadow: vec4f,
  resolution: vec4f,
  palette: array<vec4f, 10>,
  style: vec4f,
  tones: array<vec4f, 4>,
}

@group(0) @binding(0) var<uniform> frame: Frame;
@group(0) @binding(1) var<storage, read> bodies: array<vec4f>;

const KIND_PETAL = 0.25;


@group(1) @binding(0) var shadowMap: texture_depth_2d;
@group(1) @binding(1) var shadowSampler: sampler_comparison;

struct VertexInput {
  @location(0) position: vec4f,
  @location(1) normal: vec4f,
  @location(2) grid: vec4f,
}

struct VertexOutput {
  @builtin(position) clip: vec4f,
  @location(0) @interpolate(perspective, centroid) world: vec3f,
  @location(1) @interpolate(perspective, centroid) normal: vec3f,
  @location(2) @interpolate(perspective, centroid) grid: vec3f,
  @location(3) @interpolate(flat) kind: f32,
  @location(4) @interpolate(flat) instance: u32,
  @location(5) @interpolate(perspective, centroid) local: vec3f,
  @location(6) @interpolate(perspective, centroid) unit: vec3f,
}

struct SceneOutput {
  @location(0) color: vec4f,
  @location(1) info: vec4f,
  @location(2) detail: vec4f,
}

struct Placed {
  normal: vec3f,
  position: vec3f,
}

const PI = 3.14159265;

fn placed(input: VertexInput, instance: u32) -> Placed {
  var result: Placed;

  if (input.position.w < 0.1) {
    result.position = input.position.xyz;
    result.normal = input.normal.xyz;

    return result;
  }

  let body = bodies[instance * 2u];
  result.position = body.xyz + input.position.xyz * body.w;
  result.normal = input.normal.xyz;

  return result;
}

fn occlusionAt(position: vec3f, normal: vec3f, instance: u32) -> f32 {
  var blocked = 0.0;
  let count = u32(frame.center.w);

  for (var index = 0u; index < count; index++) {
    if (index == instance) {
      continue;
    }

    let other = bodies[index * 2u];
    let toward = other.xyz - position;
    let distance = max(length(toward), 1e-4);
    let facing = max(dot(normal, toward / distance), 0.0);

    blocked += facing * min(1.0, other.w * other.w / (distance * distance));
  }

  return max(0.3, 1.0 - blocked * 0.75);
}

@vertex
fn vs(input: VertexInput, @builtin(instance_index) instance: u32) -> VertexOutput {
  let result = placed(input, instance);
  var out: VertexOutput;

  out.clip = frame.viewProjection * vec4f(result.position, 1.0);
  out.world = result.position;
  out.normal = result.normal;
  out.kind = input.position.w;
  out.local = result.position;
  out.unit = input.position.xyz;

  if (input.position.w < 0.1) {
    out.grid = vec3f(0.0);
    out.instance = 4294967295u;
  } else {
    out.grid = vec3f(input.grid.xy, bodies[instance * 2u + 1u].w);
    out.instance = instance;
  }

  return out;
}

@vertex
fn vsShadow(input: VertexInput, @builtin(instance_index) instance: u32) -> @builtin(position) vec4f {
  return frame.lightViewProjection * vec4f(placed(input, instance).position, 1.0);
}

fn shadowVisibility(world: vec3f, normal: vec3f, pixel: vec2f) -> f32 {
  let offset = world + normal * 0.02 + frame.light.xyz * 0.006;
  let clip = frame.lightViewProjection * vec4f(offset, 1.0);
  let coordinate = vec3f(clip.xy * vec2f(0.5, -0.5) + 0.5, clip.z);

  if (any(coordinate.xy < vec2f(0.0)) || any(coordinate.xy > vec2f(1.0)) || coordinate.z > 1.0) {
    return 1.0;
  }

  let size = vec2f(textureDimensions(shadowMap));
  let rotation = fract(52.9829189 * fract(dot(pixel, vec2f(0.06711056, 0.00583715)))) * 2.0 * PI;
  let search = frame.shadow.z;
  var blockers = 0.0;
  var blockerDepth = 0.0;

  for (var index = 0; index < 12; index++) {
    let radius = sqrt((f32(index) + 0.5) / 12.0);
    let angle = f32(index) * 2.39996 + rotation;
    let tap = coordinate.xy + vec2f(cos(angle), sin(angle)) * radius * search;
    let depth = textureLoad(shadowMap, vec2i(clamp(tap, vec2f(0.0), vec2f(0.9999)) * size), 0);

    if (depth < coordinate.z - frame.shadow.y) {
      blockers += 1.0;
      blockerDepth += depth;
    }
  }

  if (blockers < 0.5) {
    return 1.0;
  }

  blockerDepth /= blockers;

  let penumbra = clamp((coordinate.z - blockerDepth) * frame.shadow.w, frame.shadow.x * 1.5, search);
  var lit = 0.0;

  for (var index = 0; index < 32; index++) {
    let radius = sqrt((f32(index) + 0.5) / 32.0);
    let angle = f32(index) * 2.39996 + rotation;
    let tap = coordinate.xy + vec2f(cos(angle), sin(angle)) * radius * penumbra;

    lit += textureSampleCompareLevel(shadowMap, shadowSampler, tap, coordinate.z - frame.shadow.y);
  }

  return lit / 32.0;
}

fn line(coordinate: f32) -> f32 {
  let distance = abs(fract(coordinate + 0.5) - 0.5);
  let width = max(fwidth(coordinate), 1e-4);

  return (1.0 - smoothstep(0.35 * width, 1.25 * width, distance)) * (1.0 - smoothstep(0.18, 0.45, width));
}

fn toOklab(color: vec3f) -> vec3f {
  let l = 0.4122214708 * color.r + 0.5363325363 * color.g + 0.0514459929 * color.b;
  let m = 0.2119034982 * color.r + 0.6806995451 * color.g + 0.1073969566 * color.b;
  let s = 0.0883024619 * color.r + 0.2817188376 * color.g + 0.6299787005 * color.b;
  let root = pow(max(vec3f(l, m, s), vec3f(0.0)), vec3f(1.0 / 3.0));

  return vec3f(
    0.2104542553 * root.x + 0.793617785 * root.y - 0.0040720468 * root.z,
    1.9779984951 * root.x - 2.428592205 * root.y + 0.4505937099 * root.z,
    0.0259040371 * root.x + 0.7827717662 * root.y - 0.808675766 * root.z,
  );
}

fn fromOklab(lab: vec3f) -> vec3f {
  let l = lab.x + 0.3963377774 * lab.y + 0.2158037573 * lab.z;
  let m = lab.x - 0.1055613458 * lab.y - 0.0638541728 * lab.z;
  let s = lab.x - 0.0894841775 * lab.y - 1.291485548 * lab.z;
  let cube = vec3f(l * l * l, m * m * m, s * s * s);

  return max(vec3f(
    4.0767416621 * cube.x - 3.3077115913 * cube.y + 0.2309699292 * cube.z,
    -1.2684380046 * cube.x + 2.6097574011 * cube.y - 0.3413193965 * cube.z,
    -0.0041960863 * cube.x - 0.7034186147 * cube.y + 1.707614701 * cube.z,
  ), vec3f(0.0));
}

fn palette(value: f32) -> vec3f {
  let position = fract(value);
  var lower = frame.palette[9];
  var upper = frame.palette[0];
  var start = lower.w - 1.0;
  var end = upper.w;

  for (var index = 0; index < 10; index++) {
    let stop = frame.palette[index];
    let next = frame.palette[(index + 1) % 10];
    let nextPosition = select(next.w, 1.0 + next.w, index == 9);

    if (position >= stop.w && position < nextPosition) {
      lower = stop;
      upper = next;
      start = stop.w;
      end = nextPosition;
    }
  }

  if (position < frame.palette[0].w) {
    start = frame.palette[9].w - 1.0;
  }

  let amount = smoothstep(0.0, 1.0, (position - start) / max(end - start, 1e-4));

  return fromOklab(mix(toOklab(lower.rgb), toOklab(upper.rgb), amount));
}

fn hash31(point: vec3f) -> f32 {
  var value = fract(point * vec3f(0.1031, 0.1030, 0.0973));

  value += dot(value, value.yzx + 33.33);

  return fract((value.x + value.y) * value.z);
}

fn noise3(point: vec3f) -> f32 {
  let cell = floor(point);
  let local = fract(point);
  let blend = local * local * (3.0 - 2.0 * local);
  let a = mix(hash31(cell), hash31(cell + vec3f(1.0, 0.0, 0.0)), blend.x);
  let b = mix(hash31(cell + vec3f(0.0, 1.0, 0.0)), hash31(cell + vec3f(1.0, 1.0, 0.0)), blend.x);
  let c = mix(hash31(cell + vec3f(0.0, 0.0, 1.0)), hash31(cell + vec3f(1.0, 0.0, 1.0)), blend.x);
  let d = mix(hash31(cell + vec3f(0.0, 1.0, 1.0)), hash31(cell + vec3f(1.0, 1.0, 1.0)), blend.x);

  return mix(mix(a, b, blend.y), mix(c, d, blend.y), blend.z);
}

fn fbm3(point: vec3f) -> f32 {
  var sum = 0.0;
  var amplitude = 0.5;
  var position = point;

  for (var octave = 0; octave < 5; octave++) {
    sum += noise3(position) * amplitude;
    position = position * 2.03 + vec3f(1.7, 9.2, 3.1);
    amplitude *= 0.5;
  }

  return sum;
}

fn box(direction: vec3f, center: vec3f, size: f32) -> f32 {
  return smoothstep(size, size * 0.6, 1.0 - dot(direction, normalize(center)));
}

fn studio(direction: vec3f) -> vec3f {
  let contrast = frame.style.z;
  let ground = frame.floor.rgb * mix(0.85, 0.16, contrast);
  let ceiling = mix(frame.floor.rgb, vec3f(1.0), 0.55) * frame.style.y * mix(1.0, 0.7, contrast);
  var color = mix(ground, ceiling, smoothstep(-0.25, 0.35, direction.y));

  color *= 1.0 - contrast * 0.85 * exp(-pow((direction.y - 0.04) * 9.0, 2.0));

  color += vec3f(3.2) * box(direction, vec3f(0.15, 1.0, 0.25), 0.12) * frame.style.y;
  color += vec3f(1.8) * box(direction, vec3f(-1.0, 0.25, 0.35), 0.06) * frame.style.y;
  color += vec3f(1.2) * box(direction, vec3f(0.9, 0.1, -0.4), 0.05) * frame.style.y;
  color *= 1.0 - 0.35 * smoothstep(0.02, -0.02, direction.y) * smoothstep(-0.3, 0.0, direction.y);

  return color;
}

fn specular(normal: vec3f, view: vec3f, light: vec3f, roughness: f32) -> f32 {
  let halfway = normalize(view + light);
  let alpha = roughness * roughness;
  let alphaSquared = alpha * alpha;
  let normalHalf = max(dot(normal, halfway), 0.0);
  let denominator = normalHalf * normalHalf * (alphaSquared - 1.0) + 1.0;

  return alphaSquared / (PI * denominator * denominator) * max(dot(normal, light), 0.0) * 0.25;
}

fn tone(seed: f32) -> vec3f {
  return frame.tones[min(u32(fract(seed) * 4.0), 3u)].rgb;
}

fn styled(
  normal: vec3f,
  view: vec3f,
  light: vec3f,
  unit: vec3f,
  seed: f32,
  shade: f32,
  visibility: f32,
  occlusion: f32,
  wire: f32,
  sky: vec3f,
) -> vec3f {
  let mode = i32(frame.style.x + 0.5);
  let facing = max(dot(normal, view), 0.0);
  let fresnel = 0.04 + 0.96 * pow(1.0 - facing, 5.0);
  let reflected = reflect(-view, normal);
  let diffuse = max(dot(normal, light), 0.0) * visibility;
  let soft = (dot(normal, light) * 0.5 + 0.5) * mix(0.6, 1.0, visibility);
  let ambient = mix(0.55, 1.0, occlusion);

  switch mode {
    case 1: {
      let tint = mix(vec3f(1.0), frame.tones[0].rgb, 0.25);

      return studio(reflected) * tint * mix(0.45, 1.0, occlusion) + vec3f(specular(normal, view, light, 0.08) * 6.0 * visibility);
    }
    case 2: {
      let red = studio(refract(-view, normal, 1.0 / 1.3));
      let green = studio(refract(-view, normal, 1.0 / 1.46));
      let blue = studio(refract(-view, normal, 1.0 / 1.66));
      let frost = mix(vec3f(red.r, green.g, blue.b) * 1.08, frame.floor.rgb, 0.18);
      let edge = pow(1.0 - facing, 2.0);
      let body = frost * mix(vec3f(1.0), frame.tones[0].rgb * 0.55, edge) * mix(0.7, 1.0, occlusion);
      let caustic = pow(max(dot(-normal, light), 0.0), 3.0) * 0.6 * visibility;

      return mix(body, studio(reflected), fresnel) + vec3f(caustic) + vec3f(specular(normal, view, light, 0.1) * 6.0 * visibility);
    }
    case 3: {
      let albedo = tone(seed);

      return albedo * (0.38 + 0.66 * soft) * ambient + albedo * pow(1.0 - facing, 2.0) * 0.12;
    }
    case 4: {
      let thickness = 1.2 + fbm3(unit * 2.5 + seed * 7.0) * 1.4 + (1.0 - facing) * 2.2;
      let film = 0.5 + 0.5 * cos(6.2831 * (vec3f(0.0, 0.33, 0.67) + thickness));
      let metal = studio(reflected) * mix(vec3f(0.85), film * 1.25, 0.75);

      return metal * mix(0.5, 1.0, occlusion) + vec3f(specular(normal, view, light, 0.12) * 4.0 * visibility);
    }
    case 5: {
      let neon = tone(seed);
      let rim = pow(1.0 - facing, 3.5);
      let body = vec3f(0.018) * (0.4 + soft) * ambient + vec3f(specular(normal, view, light, 0.42) * 0.5 * visibility);

      return body + neon * (rim * 4.5 + pow(1.0 - facing, 12.0) * 6.0);
    }
    case 6: {
      if (fract(seed * 3.0) < 0.42) {
        let gold = frame.tones[0].rgb;

        return studio(reflected) * gold * mix(0.4, 1.0, occlusion) + gold * vec3f(specular(normal, view, light, 0.22) * 5.0 * visibility);
      }

      let veins = abs(sin((unit.x * 3.0 + unit.y * 1.4 + fbm3(unit * 3.0 + seed * 11.0) * 5.0) * 2.4));
      let vein = 1.0 - smoothstep(0.0, 0.08, veins);
      let stone = mix(frame.tones[1].rgb, frame.tones[2].rgb, vein * 0.85 + fbm3(unit * 9.0) * 0.08);

      return stone * (0.42 + 0.62 * soft) * ambient + studio(reflected) * fresnel * 0.6 + vec3f(specular(normal, view, light, 0.2) * 1.6 * visibility);
    }
    case 7: {
      let fibre = fbm3(unit * vec3f(40.0, 9.0, 40.0) + seed * 13.0) * 0.16 + fbm3(unit * 6.0) * 0.08;
      let albedo = tone(seed) * (0.92 + fibre);
      let flat = floor(soft * 4.0 + 0.5) / 4.0;

      return albedo * (0.42 + 0.58 * mix(soft, flat, 0.25)) * ambient;
    }
    case 8: {
      let albedo = tone(seed);
      let through = pow(facing, 1.2);
      let edge = pow(1.0 - facing, 1.5);
      let glow = mix(albedo * albedo * 0.35, albedo * 1.15, through) * mix(0.75, 1.0, soft);
      let core = mix(albedo, vec3f(1.0), 0.35) * 0.55 * pow(facing, 6.0);
      let back = albedo * max(-dot(normal, light), 0.0) * 0.4 * (1.0 - edge);

      return (glow + core + back) * ambient + studio(reflected) * fresnel * 0.55 + vec3f(specular(normal, view, light, 0.07) * 7.0 * visibility);
    }
    case 9: {
      let scaled = unit * 3.6 + seed * 17.0;
      let cell = floor(scaled);
      let local = fract(scaled) - 0.5;
      let pick = hash31(cell);
      let chip = 1.0 - smoothstep(0.2 + pick * 0.08, 0.23 + pick * 0.08, length(local + (vec3f(hash31(cell + 3.1), hash31(cell + 5.7), hash31(cell + 8.3)) - 0.5) * 0.4));
      let speck = step(0.93, noise3(unit * 60.0 + seed * 3.0));
      var albedo = frame.tones[3].rgb;

      albedo = mix(albedo, tone(pick * 0.75), chip * step(0.12, pick));
      albedo = mix(albedo, vec3f(0.12), speck * 0.8);

      return albedo * (0.4 + 0.62 * soft) * ambient + studio(reflected) * fresnel * 0.35 + vec3f(specular(normal, view, light, 0.3) * 1.2 * visibility);
    }
    case 10: {
      let line = frame.tones[0].rgb;
      let rim = pow(1.0 - facing, 2.5);
      let body = frame.floor.rgb * (0.9 + 0.15 * soft);

      return mix(body, line, saturate(wire * 0.85 + rim * 0.9));
    }
    case 11: {
      let albedo = tone(seed);
      let pearl = 0.5 + 0.5 * cos(6.2831 * (vec3f(0.0, 0.33, 0.67) + (1.0 - facing) * 1.6 + seed));
      let body = albedo * (0.45 + 0.6 * soft) * ambient;

      return body + pearl * pow(1.0 - facing, 2.0) * 0.35 + studio(reflected) * fresnel * 0.9 + vec3f(specular(normal, view, light, 0.05) * 9.0 * visibility);
    }
    default: {
      return sky;
    }
  }
}

@fragment
fn fs(input: VertexOutput) -> SceneOutput {
  let view = normalize(frame.camera.xyz - input.world);
  let light = frame.light.xyz;
  let depth = length(frame.camera.xyz - input.world);
  let normal = normalize(input.normal);

  let isFloor = input.kind < 0.1;
  let visibility = shadowVisibility(input.world, select(normal, vec3f(0.0, 1.0, 0.0), isFloor), input.clip.xy);
  let facing = dot(normal, light);
  let wrap = facing * 0.5 + 0.5;
  let fillDirection = normalize(vec3f(-0.3, 0.45, 0.85));
  let fill = max(dot(normal, fillDirection), 0.0) * frame.ambient.z;
  var occlusion = 1.0;

  if (!isFloor) {
    occlusion = occlusionAt(input.world, normal, input.instance);
  }

  let shade = saturate((wrap * mix(0.55, 1.0, visibility) * 0.8 + fill * 0.35) * mix(0.55, 1.0, occlusion));
  let height = dot(input.local - frame.center.xyz, normalize(vec3f(0.25, 1.0, 0.35))) * frame.bands.z;
  let band = frame.bands.w + input.grid.z * frame.bands.x + height + (1.0 - mix(normal.y * 0.5 + 0.5, shade, 0.25)) * frame.bands.y;
  let stripe = line(band * 9.0);
  let wire = max(line(input.grid.x), line(input.grid.y));
  var out: SceneOutput;

  if (isFloor) {
    let distance = length(input.world.xz - frame.center.xz);
    let contact = 1.0 - frame.ambient.w * exp(-distance * distance / 0.03);
    let lit = mix(frame.floor.w, 1.0, visibility) * contact;

    out.color = vec4f(frame.floor.rgb * lit, 1.0);
    out.info = vec4f(0.0, 0.0, 1.0, depth);
    out.detail = vec4f(0.0, 0.0, visibility * contact, 1.0);

    return out;
  }

  let albedo = palette(band);
  let sky = mix(frame.ambient.y, frame.ambient.x, normal.y * 0.5 + 0.5);
  let brightness = (0.36 + 0.62 * shade) * mix(0.9, 1.08, sky);
  let rim = pow(1.0 - max(dot(normal, view), 0.0), 3.0) * 0.08 * occlusion;
  let gradient = albedo * brightness + vec3f(rim) * frame.floor.rgb;
  let color = styled(normal, view, light, normalize(input.unit), input.grid.z, shade, visibility, occlusion, wire, gradient);

  out.color = vec4f(color, 1.0);
  out.info = vec4f(1.0, input.kind, max(dot(normal, view), 0.0), depth);
  out.detail = vec4f(stripe, wire, visibility, shade);

  return out;
}
`,pt=40;function mt(e=28,t=44){let n=[],r=[];for(let[e,t]of[[-40,-40],[pt,-40],[-40,pt],[pt,pt]])n.push(e,0,t,a.floor,0,1,0,0,0,0,0,0);r.push(0,2,1,1,2,3);let i=n.length/12;for(let r=0;r<=e;r++){let i=r/e*Math.PI;for(let e=0;e<=t;e++){let o=e/t*Math.PI*2,s=Math.sin(i)*Math.cos(o),c=Math.cos(i),l=Math.sin(i)*Math.sin(o);n.push(s,c,l,a.petal,s,c,l,0,r/2,e/2,0,0)}}for(let n=0;n<e;n++)for(let e=0;e<t;e++){let a=i+n*(t+1)+e;r.push(a,a+t+1,a+1,a+1,a+t+1,a+t+2)}return{indices:new Uint32Array(r),sphereIndices:r.length-6,vertices:new Float32Array(n)}}var ht=`depth32float`,gt=`depth32float`,_t={arrayStride:48,attributes:[0,1,2].map(e=>({format:`float32x4`,offset:e*16,shaderLocation:e}))},vt=class{frame;scene;constructor(e){let t=GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT;this.frame=e.createBindGroupLayout({entries:[{binding:0,buffer:{type:`uniform`},visibility:t},{binding:1,buffer:{type:`read-only-storage`},visibility:t}],label:`frame`}),this.scene=e.createBindGroupLayout({entries:[{binding:0,texture:{sampleType:`depth`},visibility:GPUShaderStage.FRAGMENT},{binding:1,sampler:{type:`comparison`},visibility:GPUShaderStage.FRAGMENT}],label:`scene`})}},yt=class{bodyBuffer;bodyData;count;device;indexBuffer;layouts;sampleCount;sphereIndices;vertexBuffer;constructor(e,t,n,r){let i=mt();this.device=e,this.layouts=t,this.sampleCount=n,this.count=r,this.sphereIndices=i.sphereIndices,this.bodyData=new Float32Array(r*8),this.bodyBuffer=e.createBuffer({label:`bodies`,size:this.bodyData.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.vertexBuffer=e.createBuffer({label:`sphere vertices`,size:i.vertices.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.indexBuffer=e.createBuffer({label:`sphere indices`,size:i.indices.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),e.queue.writeBuffer(this.vertexBuffer,0,i.vertices),e.queue.writeBuffer(this.indexBuffer,0,i.indices)}async create(){let{device:e,layouts:t}=this,n=e.createShaderModule({code:ft,label:`spheres`}),r={cullMode:`none`,topology:`triangle-list`},[i,a]=await Promise.all([e.createRenderPipelineAsync({depthStencil:{depthCompare:`less`,depthWriteEnabled:!0,format:ht},fragment:{entryPoint:`fs`,module:n,targets:[{format:$},{format:ot},{format:st}]},label:`spheres scene`,layout:e.createPipelineLayout({bindGroupLayouts:[t.frame,t.scene]}),multisample:{count:this.sampleCount},primitive:r,vertex:{buffers:[_t],entryPoint:`vs`,module:n}}),e.createRenderPipelineAsync({depthStencil:{depthBias:2,depthBiasSlopeScale:2,depthCompare:`less`,depthWriteEnabled:!0,format:gt},label:`spheres shadow`,layout:e.createPipelineLayout({bindGroupLayouts:[t.frame]}),primitive:r,vertex:{buffers:[_t],entryPoint:`vsShadow`,module:n}})]);this.scene=i,this.shadow=a}upload(){this.device.queue.writeBuffer(this.bodyBuffer,0,this.bodyData)}drawScene(e,t,n){e.setPipeline(this.scene),e.setBindGroup(0,t),e.setBindGroup(1,n),e.setVertexBuffer(0,this.vertexBuffer),e.setIndexBuffer(this.indexBuffer,`uint32`),e.drawIndexed(6),e.drawIndexed(this.sphereIndices,this.count,6)}drawShadow(e,t){e.setPipeline(this.shadow),e.setBindGroup(0,t),e.setVertexBuffer(0,this.vertexBuffer),e.setIndexBuffer(this.indexBuffer,`uint32`),e.drawIndexed(this.sphereIndices,this.count,6)}},bt=4,xt=1/60,St=.05,Ct=60,wt=4,Tt=.35;function Et(e){return f(e)}var Dt=class{forcedLook=(()=>{let e=new URLSearchParams(window.location.search),t=e.get(`look`);if(!t||!n.includes(t))return null;let r=Array(80).fill(0),i=Array(80).fill(0);return r.splice(0,4,0,0,1,1),i.splice(0,4,n.indexOf(t),1,0,Number(e.get(`variant`)??.3)),{count:1,fills:i,rectangles:r}})();director=(()=>{let e=new je(i,r.camera.ease);return e.index=Number(new URLSearchParams(window.location.search).get(`shot`)??0)%i.length,e})();element;frame=new Fe;gaze=new Ie(r.gaze);isCapture=new URLSearchParams(window.location.search).has(`capture`);styleIndex=Math.max(0,t.findIndex(e=>e.name===new URLSearchParams(window.location.search).get(`style`)));isDestroyed=!1;isRevealed=!1;last=0;lens={tanX:1,tanY:1};motion=1;onFailure;pixelRatioQuery=null;pointer={isDown:!1,isInside:!1,isTouch:!1,presence:0,previous:[0,0],previousWorld:[0,0,0],smoothed:[0,0],target:[0,0],velocityX:0,velocityWorld:[0,0,0],world:[0,0,0]};ready;reducedMotion=window.matchMedia(`(prefers-reduced-motion: reduce)`);size={height:0,width:0};sound=new Oe;swarm=new We(213);targets=[];time=0;physics=new Le(s,11);palette=new Float32Array(e.flatMap(([e,t])=>[...f(t),e]));_eye=G.create();_inverse=H.create();_lightProjection=H.create();_lightView=H.create();_lightViewProjection=H.create();_projection=H.create();_view=H.create();_viewProjection=H.create();constructor({element:e,onFailure:t}){l(this),this.element=e,this.onFailure=t,this.onReducedMotionChange(),this.reducedMotion.addEventListener(`change`,this.onReducedMotionChange),this.ready=this.create().catch(e=>{console.error(e),this.fail()})}async create(){let e=await navigator.gpu.requestAdapter({powerPreference:`high-performance`});if(!e)throw Error(`No WebGPU adapter.`);if(this.device=await e.requestDevice({label:`boxes`}),this.device.lost.then(()=>{this.isDestroyed||this.fail()}),this.device.addEventListener(`uncapturederror`,e=>{console.error(e.error.message)}),this.format=navigator.gpu.getPreferredCanvasFormat(),this.context=this.element.getContext(`webgpu`),this.context.configure({alphaMode:`opaque`,device:this.device,format:this.format}),this.layouts=new vt(this.device),this.bindGroups=new Ge(this.device),this.frameBuffer=this.device.createBuffer({label:`frame`,size:Pe*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.createShadow(),this.spheres=new yt(this.device,this.layouts,bt,this.physics.bodies.length),this.post=new dt(this.device,this.format,this.bindGroups),this.glyphView=qe(this.device).createView(),this.overlay=new et,this.applyStyle(),await Promise.all([this.spheres.create(),this.post.create()]),!this.isDestroyed){for(let e=0;e<600;e++)this.physics.update(1/60,1);this.frameGroup=this.device.createBindGroup({entries:[{binding:0,resource:{buffer:this.frameBuffer}},{binding:1,resource:{buffer:this.spheres.bodyBuffer}}],label:`frame`,layout:this.layouts.frame}),this.onResize(),this.addEventListeners(),this.onLoopFrame(0),await this.device.queue.onSubmittedWorkDone(),this.isCapture?this.startCapture():requestAnimationFrame(e=>{this.last=e,this.isRevealed=!0,document.documentElement.classList.add(`is-ready`),requestAnimationFrame(this.onLoop)})}}startCapture(){this.isRevealed=!0,document.documentElement.classList.add(`is-capture`,`is-ready`),this.sound.startCapture();let e=window;e.capture={audio:this.sound.captured,hits:this.sound.hits,frame:async()=>{this.onLoopFrame(xt),await this.device.queue.onSubmittedWorkDone()},skip:e=>this.director.skip(e),style:e=>this.setStyle(e)}}fail(){this.isDestroyed=!0,this.onFailure()}createShadow(){this.shadowView=this.device.createTexture({format:gt,label:`shadow`,size:[o,o],usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}).createView(),this.sceneGroup=this.device.createBindGroup({entries:[{binding:0,resource:this.shadowView},{binding:1,resource:this.device.createSampler({compare:`less-equal`,magFilter:`linear`,minFilter:`linear`})}],label:`scene`,layout:this.layouts.scene})}get ratio(){let e=Number(new URLSearchParams(window.location.search).get(`ratio`));return e>0?e:Math.min(window.devicePixelRatio||1,2)}addEventListeners(){window.addEventListener(`resize`,this.onResize),window.addEventListener(`pointermove`,this.onPointerMove),window.addEventListener(`pointerdown`,this.onPointerDown),window.addEventListener(`pointerup`,this.onPointerUp),window.addEventListener(`pointercancel`,this.onPointerUp),window.addEventListener(`keydown`,this.onKeyDown),document.documentElement.addEventListener(`pointerleave`,this.onPointerLeave)}onResize(){this.watchPixelRatio(),this.resizeTargets(),this.swarm.resize(window.innerWidth,window.innerHeight)}watchPixelRatio(){this.pixelRatioQuery?.removeEventListener(`change`,this.onResize),this.pixelRatioQuery=window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.pixelRatioQuery.addEventListener(`change`,this.onResize)}resizeTargets(){let e=this.ratio,t=Math.max(1,Math.round(window.innerWidth*e)),n=Math.max(1,Math.round(window.innerHeight*e));if(t===this.size.width&&n===this.size.height)return;this.size={height:n,width:t},this.element.width=t,this.element.height=n,this.post.resize(t,n);for(let e of this.targets)e.destroy();this.targets=[];let r=(e,r,i)=>{let a=this.device.createTexture({format:r,label:e,sampleCount:i,size:[t,n],usage:GPUTextureUsage.RENDER_ATTACHMENT|(i===1?GPUTextureUsage.TEXTURE_BINDING:0)});return this.targets.push(a),a.createView()};this.views={color:r(`color`,$,1),colorSamples:r(`color samples`,$,bt),depth:r(`depth`,ht,bt),detail:r(`detail`,st,1),detailSamples:r(`detail samples`,st,bt),info:r(`info`,ot,1),infoSamples:r(`info samples`,ot,bt)}}isInterface(e){return!!e.target?.closest?.(`[data-interface]`)}updateTarget(e){this.pointer.target=[e.clientX/window.innerWidth*2-1,1-e.clientY/window.innerHeight*2],this.pointer.isTouch=e.pointerType!==`mouse`}onPointerMove(e){this.updateTarget(e),this.pointer.isInside=!this.isInterface(e)}onPointerDown(e){this.isInterface(e)||(this.updateTarget(e),this.pointer.isDown=!0,this.pointer.isInside=!0,this.isRevealed&&(this.styleIndex=(this.styleIndex+1)%t.length,this.applyStyle(),this.swarm.press(e.clientX,e.clientY),this.physics.kick(this.pointer.world)))}onPointerUp(){this.pointer.isDown=!1}onPointerLeave(){this.pointer.isInside=!1}onKeyDown(e){e.key===` `&&(this.physics.kick(s),this.swarm.cut())}get style(){return t[this.styleIndex]}setStyle(e){this.styleIndex=(e+t.length)%t.length,this.swarm.cut(),this.applyStyle()}applyStyle(){let{style:e}=this,t=document.documentElement;t.style.setProperty(`--room`,e.background),t.classList.toggle(`is-dark`,e.isDark),t.dataset.style=e.name,document.querySelector(`meta[name="theme-color"]`)?.setAttribute(`content`,e.background),this.overlay.isDark=e.isDark}onReducedMotionChange(){this.motion=this.reducedMotion.matches?Tt:1}get isPointerActive(){let{isDown:e,isInside:t,isTouch:n}=this.pointer;return this.isRevealed&&t&&(!n||e)}onLoop(e){if(this.isDestroyed)return;let t=Math.min((e-this.last)/1e3,.1);this.last=e,this.onLoopFrame(t),requestAnimationFrame(this.onLoop)}updatePointer(e){let{pointer:t}=this,n=this.isPointerActive,[r,i]=t.target,a=e>0?d(18,e):1;t.previous=[...t.smoothed],t.smoothed=[t.smoothed[0]+(r-t.smoothed[0])*a,t.smoothed[1]+(i-t.smoothed[1])*a];let o=Math.hypot(t.smoothed[0]-t.previous[0],t.smoothed[1]-t.previous[1]),s=e>0?o/e:0,c=e>0?(t.smoothed[0]-t.previous[0])/e:0,l=n?u(s/1.2,0,1):0;t.velocityX+=(c-t.velocityX)*d(8,e),t.presence+=(l-t.presence)*d(l>t.presence?10:1.6,e)}updateCamera(e){let t=this.size.width<this.size.height?r.camera.portraitDistance:1;this.gaze.update(this.isPointerActive?this.pointer.smoothed:[0,0],this.pointer.velocityX,e,this.time,this.motion);let n=this.director.shot(),i=n.yaw*Math.PI/180,a=n.pitch*Math.PI/180,o=n.distance*t,c=G.fromValues(...this.leaned(n.target)),l=G.fromValues(Math.cos(a)*Math.sin(i),Math.sin(a),Math.cos(a)*Math.cos(i)),u=G.normalize(G.cross([0,1,0],l)),d=G.cross(l,u),[f,p]=this.gaze.offset,[m,h,g]=this.gaze.wobble,_=G.add(c,G.scale(l,o));G.addScaled(_,u,(f+m*.1)*o,_),G.addScaled(_,d,(p+h*.1)*o,_),G.addScaled(_,l,g*.02*o,_),G.copy(_,this._eye);let v=this.gaze.roll,y=G.add(G.scale(d,Math.cos(v)),G.scale(u,Math.sin(v))),b=this.size.width/Math.max(1,this.size.height),x=(r.camera.fov+(this.size.width<this.size.height?8:0))*Math.PI/180;this.lens={tanX:Math.tan(x/2)*b,tanY:Math.tan(x/2)},H.perspective(x,b,St,Ct,this._projection),H.lookAt(_,c,y,this._view),H.multiply(this._projection,this._view,this._viewProjection),H.inverse(this._viewProjection,this._inverse);let{azimuth:S,elevation:C}=r.light,w=G.fromValues(Math.cos(C)*Math.sin(S),Math.sin(C),Math.cos(C)*Math.cos(S)),T=1.7,E=G.fromValues(s[0],s[1]*.5,s[2]);return H.lookAt(G.addScaled(E,w,wt),E,[0,1,0],this._lightView),H.ortho(-1.7,T,-1.7,T,.1,8,this._lightProjection),H.multiply(this._lightProjection,this._lightView,this._lightViewProjection),{extent:T,light:w,target:c}}pointerWorld(e){let[t,n]=this.pointer.smoothed,r=K.transformMat4([t,n,0,1],this._inverse),i=K.transformMat4([t,n,1,1],this._inverse),a=G.scale(r,1/r[3]),o=G.scale(i,1/i[3]),s=G.normalize(G.subtract(o,a)),c=G.normalize(G.subtract(this._eye,e)),l=G.dot(s,c);if(Math.abs(l)<1e-5)return[0,-10,0];let u=G.dot(G.subtract(e,a),c)/l,d=G.addScaled(a,s,u);return[d[0],d[1],d[2]]}plantExtent(){let[e,t,n]=this.center,r=this.screenOf([e,t,n]),i=this.screenOf([e,t+.55,n]),a=this._view,o=this.screenOf([e+a[0]*.6,t+a[4]*.6,n+a[8]*.6]);return Math.max(Math.hypot(i[0]-r[0],i[1]-r[1]),Math.hypot(o[0]-r[0],o[1]-r[1]))}get center(){return s}leaned([e,t,n]){let[r,i,a]=this.center;return[e+r,t+i,n+a]}screenOf(e){let t=K.transformMat4([...e,1],this._viewProjection),n=Math.max(t[3],1e-4);return[(t[0]/n*.5+.5)*window.innerWidth,(.5-t[1]/n*.5)*window.innerHeight]}updatePhysics(e,t,n){let{physics:r,pointer:i}=this,a=this.pointerWorld(n),o=i.world.map((t,n)=>e>0?(a[n]-t)/e:0),s=e>0?d(14,e):1;i.velocityWorld=i.velocityWorld.map((e,t)=>e+(o[t]-e)*s),i.world=a,r.setPointer({isActive:t,position:a,velocity:i.velocityWorld}),r.update(e,this.motion),r.write(this.spheres.bodyData),this.spheres.upload(),this.overlay.stats={contacts:r.contacts,spheres:r.bodies.length}}updateFrame(e,t){let{frame:n}=this,{bands:i,floor:a}=r,{height:c,width:l}=this.size,u=r.light.key,{style:d}=this,f=Et(d.background),p=d.shadow;n.set(`viewProjection`,this._viewProjection),n.set(`view`,this._view),n.set(`lightViewProjection`,this._lightViewProjection),n.set(`camera`,[...this._eye,this.time]),n.set(`light`,[...e,u]),n.set(`ambient`,[r.light.plant,r.light.plant*.55,r.light.fill,a.contact]),n.set(`floor`,[...f,p]),n.set(`bands`,[i.around*(.35+.65*(.5-.5*Math.cos(this.time*i.aroundSpeed))),i.shade,i.height,this.time*i.speed]),n.set(`center`,[...s,this.physics.bodies.length]),n.set(`shadow`,[1/o,.003,.9*r.light.softness/(2*t),7.9*r.light.softness/(2*t)]),n.set(`resolution`,[l,c,1/l,1/c]),n.set(`palette`,this.palette),n.set(`style`,[d.mode,d.environment,d.contrast,0]),n.set(`tones`,d.tones.flatMap(e=>[...Et(e),1])),this.device.queue.writeBuffer(this.frameBuffer,0,n.data)}updatePost(){let{grade:e}=r,{height:t,width:n}=this.size,{uniforms:i}=this.post,a=this.forcedLook??this.swarm.uniforms(20);i.set([n,t,1/n,1/t],0),i.set([e.exposure,e.contrast,e.vignette,e.grain],4),i.set([r.bloom.strength,r.bloom.threshold,r.bloom.radius,this.time],8),i.set([this.ratio,a.count,0,0],12),i.set([0,0,0,0],16),i.set(a.rectangles,20),i.set(a.fills,100),this.post.write()}onLoopFrame(e){this.time+=e;let t=this.device.createCommandEncoder({label:`frame`}),n=this.isPointerActive;this.updatePointer(e);let{extent:r,light:i,target:a}=this.updateCamera(e);this.updatePhysics(e,n,a),this.updateFrame(i,r),this.swarm.update(e,{isActive:n,x:(this.pointer.target[0]+1)/2*window.innerWidth,y:(1-this.pointer.target[1])/2*window.innerHeight},this.screenOf(this.center),this.motion,this.plantExtent()),this.updatePost();for(let{amount:e,cue:t,delay:n,x:r}of this.swarm.cues)this.sound.play(t,r,e,n);this.swarm.cues=[],this.sound.update(e);let o=t.beginRenderPass({colorAttachments:[],depthStencilAttachment:{depthClearValue:1,depthLoadOp:`clear`,depthStoreOp:`store`,view:this.shadowView},label:`shadow`});this.spheres.drawShadow(o,this.frameGroup),o.end();let{views:s}=this,c=Et(this.style.background),l=t.beginRenderPass({colorAttachments:[{clearValue:[...c,1],loadOp:`clear`,resolveTarget:s.color,storeOp:`discard`,view:s.colorSamples},{clearValue:[0,0,1,Ct],loadOp:`clear`,resolveTarget:s.info,storeOp:`discard`,view:s.infoSamples},{clearValue:[0,0,1,1],loadOp:`clear`,resolveTarget:s.detail,storeOp:`discard`,view:s.detailSamples}],depthStencilAttachment:{depthClearValue:1,depthLoadOp:`clear`,depthStoreOp:`discard`,view:s.depth},label:`scene`});this.spheres.drawScene(l,this.frameGroup,this.sceneGroup),l.end(),this.post.render(t,{color:s.color,detail:s.detail,info:s.info},this.glyphView,this.context.getCurrentTexture().createView()),this.device.queue.submit([t.finish()]),this.forcedLook||this.overlay.draw(this.swarm,[(this.pointer.target[0]+1)/2*window.innerWidth,(1-this.pointer.target[1])/2*window.innerHeight])}},Ot=`modulepreload`,kt=function(e){return`/specimen/`+e},At={},jt=function(e){return e.pathname.endsWith(`.css`)},Mt=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},Nt=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=kt(t,n);let r=s(t),i=jt(r);return Mt(At,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:Ot,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{let i=a=>{t.removeEventListener(`load`,i),t.removeEventListener(`error`,i),a.type===`error`?n(Error(`Unable to preload CSS for ${r}`)):e(a)};t.addEventListener(`load`,i),t.addEventListener(`error`,i)})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};await new Promise(e=>requestAnimationFrame(()=>setTimeout(e)));var Pt=document.documentElement;new URLSearchParams(window.location.search).has(`clean`)&&Pt.classList.add(`is-clean`);var Ft=document.querySelector(`.canvas`);function It(){Pt.classList.remove(`is-ready`),Pt.classList.add(`is-unsupported`);let e=document.querySelector(`.fallback`);e&&(e.hidden=!1)}if(!Ft||!navigator.gpu)It();else{let e=new Dt({element:Ft,onFailure:It}),t=document.querySelector(`.chrome__sound`);if(t){let n=new v({element:t,sound:e.sound});window.addEventListener(`keydown`,e=>{(e.key===`m`||e.key===`M`)&&n.onClick(new MouseEvent(`click`))})}Object.assign(window,{canvas:e}),window.location.hash===`#debug`&&e.ready.then(async()=>{let[{Controls:t},{settings:n}]=await Promise.all([Nt(()=>import(`./Controls-BO60q2ng.js`),__vite__mapDeps([0,1])),Nt(()=>import(`./Settings-CUgL9f1I.js`),__vite__mapDeps([2,1]))]);new t(e),Object.assign(window,{settings:n})})}