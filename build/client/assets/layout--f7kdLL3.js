import{j as i}from"./jsx-runtime-C-_spy54.js";import{M as ln,I as dn,A as un,F as _n,K as hn,L as fn,N as mn,a as pn,i as gn}from"./index-hdkCHUwo.js";import{B as we,c as V,S as bn}from"./button-iwFMjRuO.js";import{L as Ie,f as Pe,d as Qe,g as At}from"./components-CzmxjdGq.js";import{t as K,c as xn}from"./i18next-BaiEmIpz.js";import{r as $e}from"./index-aGVi9Z7h.js";import Ht from"./chevron-right-6UkNzAiO.js";import{L as lt,D as It,a as Pt,b as Bt,c as zt,d as Ve,e as vn,f as Ae,g as yn}from"./index-DxAmqMFe.js";import wn from"./house-C6aMd4Qj.js";import{A as dt,a as ut,b as _t}from"./avatar-BgbBtH3S.js";import{u as Ut,d as Be,e as le,f as de,b as Xt,i as Cn,C as Sn,j as kn,k as jn,m as En,n as Nn,o as Ln,c as Mn,S as Yt,p as Tn,a as Fn,l as Dn,q as Rn,r as $n,s as An,t as Hn}from"./collapsible-BSwuwUdu.js";import{g as ht}from"./capitalize-first-letter-B7Vzw64t.js";import Ot from"./chevrons-up-down-5qfEoU0h.js";import In from"./baby-DgMnrUCH.js";import Pn from"./log-out-CLB95vkg.js";import{D as Bn}from"./dynamic-icon-C4zINTb5.js";import{a as zn}from"./base-url-B9uMRsbQ.js";import{a as ft}from"./roles-BJUEHkaA.js";import Un from"./gallery-vertical-end-BYxi71iF.js";import Xn from"./plus-COX8ICm6.js";import{b as xe,l as Yn}from"./index-BhNJZyJl.js";import{u as On}from"./500-B3AgJgcX.js";import qn from"./sun-Dd8RrOa2.js";import Gn from"./moon-BtbB0FjW.js";import Vn from"./bug-D68z8G1-.js";import Wn from"./bookmark-BiEUvFTg.js";import Zn from"./activity-D1uAEx_5.js";import{i as Kn}from"./isBrowser-BS1Xf4tW.js";import{d as Jn,g as qt,a as et,b as mt,l as Le,c as Qn,e as er,G as tr,f as nr}from"./node-_8Bt17R8.js";import{S as Gt}from"./separator-B8pwcghe.js";import{B as rr}from"./badge-BhqrVBYW.js";import or from"./fullscreen-BdrxcCiw.js";import ar from"./languages-BKqb1Vvs.js";import ir from"./funnel-x-CYsxWJ7C.js";import sr from"./funnel-C3SKbMgL.js";import cr from"./search-FPMhHXhJ.js";import{O as lr}from"./index-DN0hhrBY.js";function dr(e,t={},n=et()){const{message:r,name:a,email:o,url:l,source:u,associatedEventId:d,tags:c}=e,h={contexts:{feedback:Jn({contact_email:o,name:a,message:r,url:l,source:u,associated_event_id:d})},type:"feedback",level:"info",tags:c},s=n&&n.getClient()||qt();return s&&s.emit("beforeSendFeedback",h,t),n.captureEvent(h,t)}const G=tr,S=G.document,ve=G.navigator,Vt="Report a Bug",ur="Cancel",_r="Send Bug Report",hr="Confirm",fr="Report a Bug",mr="your.email@example.org",pr="Email",gr="What's the bug? What did you expect?",br="Description",xr="Your Name",vr="Name",yr="Thank you for your report!",wr="(required)",Cr="Add a screenshot",Sr="Remove screenshot",kr="widget",jr="api",Er=5e3,Nr=(e,t={includeReplay:!0})=>{if(!e.message)throw new Error("Unable to submit feedback with empty message");const n=qt();if(!n)throw new Error("No client setup, cannot send feedback.");e.tags&&Object.keys(e.tags).length&&et().setTags(e.tags);const r=dr({source:jr,url:nr(),...e},t);return new Promise((a,o)=>{const l=setTimeout(()=>o("Unable to determine if Feedback was correctly sent."),5e3),u=n.on("afterSendEvent",(d,c)=>{if(d.event_id===r)return clearTimeout(l),u(),c&&typeof c.statusCode=="number"&&c.statusCode>=200&&c.statusCode<300?a(r):c&&typeof c.statusCode=="number"&&c.statusCode===0?o("Unable to send Feedback. This is because of network issues, or because you are using an ad-blocker."):c&&typeof c.statusCode=="number"&&c.statusCode===403?o("Unable to send Feedback. This could be because this domain is not in your list of allowed domains."):o("Unable to send Feedback. This could be because of network issues, or because you are using an ad-blocker")})})},Me=typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__;function Lr(){return!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ve.userAgent)||/Macintosh/i.test(ve.userAgent)&&ve.maxTouchPoints&&ve.maxTouchPoints>1||!isSecureContext)}function je(e,t){return{...e,...t,tags:{...e.tags,...t.tags},onFormOpen:()=>{t.onFormOpen&&t.onFormOpen(),e.onFormOpen&&e.onFormOpen()},onFormClose:()=>{t.onFormClose&&t.onFormClose(),e.onFormClose&&e.onFormClose()},onSubmitSuccess:n=>{t.onSubmitSuccess&&t.onSubmitSuccess(n),e.onSubmitSuccess&&e.onSubmitSuccess(n)},onSubmitError:n=>{t.onSubmitError&&t.onSubmitError(n),e.onSubmitError&&e.onSubmitError(n)},onFormSubmitted:()=>{t.onFormSubmitted&&t.onFormSubmitted(),e.onFormSubmitted&&e.onFormSubmitted()},themeDark:{...e.themeDark,...t.themeDark},themeLight:{...e.themeLight,...t.themeLight}}}function Mr(e){const t=S.createElement("style");return t.textContent=`
.widget__actor {
  position: fixed;
  z-index: var(--z-index);
  margin: var(--page-margin);
  inset: var(--actor-inset);

  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px;

  font-family: inherit;
  font-size: var(--font-size);
  font-weight: 600;
  line-height: 1.14em;
  text-decoration: none;

  background: var(--actor-background, var(--background));
  border-radius: var(--actor-border-radius, 1.7em/50%);
  border: var(--actor-border, var(--border));
  box-shadow: var(--actor-box-shadow, var(--box-shadow));
  color: var(--actor-color, var(--foreground));
  fill: var(--actor-color, var(--foreground));
  cursor: pointer;
  opacity: 1;
  transition: transform 0.2s ease-in-out;
  transform: translate(0, 0) scale(1);
}
.widget__actor[aria-hidden="true"] {
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  transform: translate(0, 16px) scale(0.98);
}

.widget__actor:hover {
  background: var(--actor-hover-background, var(--background));
  filter: var(--interactive-filter);
}

.widget__actor svg {
  width: 1.14em;
  height: 1.14em;
}

@media (max-width: 600px) {
  .widget__actor span {
    display: none;
  }
}
`,e&&t.setAttribute("nonce",e),t}function z(e,t){return Object.entries(t).forEach(([n,r])=>{e.setAttributeNS(null,n,r)}),e}const ce=20,Tr="http://www.w3.org/2000/svg";function Fr(){const e=u=>G.document.createElementNS(Tr,u),t=z(e("svg"),{width:`${ce}`,height:`${ce}`,viewBox:`0 0 ${ce} ${ce}`,fill:"var(--actor-color, var(--foreground))"}),n=z(e("g"),{clipPath:"url(#clip0_57_80)"}),r=z(e("path"),{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M15.6622 15H12.3997C12.2129 14.9959 12.031 14.9396 11.8747 14.8375L8.04965 12.2H7.49956V19.1C7.4875 19.3348 7.3888 19.5568 7.22256 19.723C7.05632 19.8892 6.83435 19.9879 6.59956 20H2.04956C1.80193 19.9968 1.56535 19.8969 1.39023 19.7218C1.21511 19.5467 1.1153 19.3101 1.11206 19.0625V12.2H0.949652C0.824431 12.2017 0.700142 12.1783 0.584123 12.1311C0.468104 12.084 0.362708 12.014 0.274155 11.9255C0.185602 11.8369 0.115689 11.7315 0.0685419 11.6155C0.0213952 11.4995 -0.00202913 11.3752 -0.00034808 11.25V3.75C-0.00900498 3.62067 0.0092504 3.49095 0.0532651 3.36904C0.0972798 3.24712 0.166097 3.13566 0.255372 3.04168C0.344646 2.94771 0.452437 2.87327 0.571937 2.82307C0.691437 2.77286 0.82005 2.74798 0.949652 2.75H8.04965L11.8747 0.1625C12.031 0.0603649 12.2129 0.00407221 12.3997 0H15.6622C15.9098 0.00323746 16.1464 0.103049 16.3215 0.278167C16.4966 0.453286 16.5964 0.689866 16.5997 0.9375V3.25269C17.3969 3.42959 18.1345 3.83026 18.7211 4.41679C19.5322 5.22788 19.9878 6.32796 19.9878 7.47502C19.9878 8.62209 19.5322 9.72217 18.7211 10.5333C18.1345 11.1198 17.3969 11.5205 16.5997 11.6974V14.0125C16.6047 14.1393 16.5842 14.2659 16.5395 14.3847C16.4948 14.5035 16.4268 14.6121 16.3394 14.7042C16.252 14.7962 16.147 14.8698 16.0307 14.9206C15.9144 14.9714 15.7891 14.9984 15.6622 15ZM1.89695 10.325H1.88715V4.625H8.33715C8.52423 4.62301 8.70666 4.56654 8.86215 4.4625L12.6872 1.875H14.7247V13.125H12.6872L8.86215 10.4875C8.70666 10.3835 8.52423 10.327 8.33715 10.325H2.20217C2.15205 10.3167 2.10102 10.3125 2.04956 10.3125C1.9981 10.3125 1.94708 10.3167 1.89695 10.325ZM2.98706 12.2V18.1625H5.66206V12.2H2.98706ZM16.5997 9.93612V5.01393C16.6536 5.02355 16.7072 5.03495 16.7605 5.04814C17.1202 5.13709 17.4556 5.30487 17.7425 5.53934C18.0293 5.77381 18.2605 6.06912 18.4192 6.40389C18.578 6.73866 18.6603 7.10452 18.6603 7.47502C18.6603 7.84552 18.578 8.21139 18.4192 8.54616C18.2605 8.88093 18.0293 9.17624 17.7425 9.41071C17.4556 9.64518 17.1202 9.81296 16.7605 9.90191C16.7072 9.91509 16.6536 9.9265 16.5997 9.93612Z"});t.appendChild(n).appendChild(r);const a=e("defs"),o=z(e("clipPath"),{id:"clip0_57_80"}),l=z(e("rect"),{width:`${ce}`,height:`${ce}`,fill:"white"});return o.appendChild(l),a.appendChild(o),t.appendChild(a).appendChild(o).appendChild(l),t}function Dr({triggerLabel:e,triggerAriaLabel:t,shadow:n,styleNonce:r}){const a=S.createElement("button");if(a.type="button",a.className="widget__actor",a.ariaHidden="false",a.ariaLabel=t||e||Vt,a.appendChild(Fr()),e){const l=S.createElement("span");l.appendChild(S.createTextNode(e)),a.appendChild(l)}const o=Mr(r);return{el:a,appendToDom(){n.appendChild(o),n.appendChild(a)},removeFromDom(){n.removeChild(a),n.removeChild(o)},show(){a.ariaHidden="false"},hide(){a.ariaHidden="true"}}}const Wt="rgba(88, 74, 192, 1)",Rr={foreground:"#2b2233",background:"#ffffff",accentForeground:"white",accentBackground:Wt,successColor:"#268d75",errorColor:"#df3338",border:"1.5px solid rgba(41, 35, 47, 0.13)",boxShadow:"0px 4px 24px 0px rgba(43, 34, 51, 0.12)",outline:"1px auto var(--accent-background)",interactiveFilter:"brightness(95%)"},pt={foreground:"#ebe6ef",background:"#29232f",accentForeground:"white",accentBackground:Wt,successColor:"#2da98c",errorColor:"#f55459",border:"1.5px solid rgba(235, 230, 239, 0.15)",boxShadow:"0px 4px 24px 0px rgba(43, 34, 51, 0.12)",outline:"1px auto var(--accent-background)",interactiveFilter:"brightness(150%)"};function gt(e){return`
  --foreground: ${e.foreground};
  --background: ${e.background};
  --accent-foreground: ${e.accentForeground};
  --accent-background: ${e.accentBackground};
  --success-color: ${e.successColor};
  --error-color: ${e.errorColor};
  --border: ${e.border};
  --box-shadow: ${e.boxShadow};
  --outline: ${e.outline};
  --interactive-filter: ${e.interactiveFilter};
  `}function $r({colorScheme:e,themeDark:t,themeLight:n,styleNonce:r}){const a=S.createElement("style");return a.textContent=`
:host {
  --font-family: system-ui, 'Helvetica Neue', Arial, sans-serif;
  --font-size: 14px;
  --z-index: 100000;

  --page-margin: 16px;
  --inset: auto 0 0 auto;
  --actor-inset: var(--inset);

  font-family: var(--font-family);
  font-size: var(--font-size);

  ${e!=="system"?"color-scheme: only light;":""}

  ${gt(e==="dark"?{...pt,...t}:{...Rr,...n})}
}

${e==="system"?`
@media (prefers-color-scheme: dark) {
  :host {
    ${gt({...pt,...t})}
  }
}`:""}
}
`,r&&a.setAttribute("nonce",r),a}const Ar=({lazyLoadIntegration:e,getModalIntegration:t,getScreenshotIntegration:n})=>({id:a="sentry-feedback",autoInject:o=!0,showBranding:l=!0,isEmailRequired:u=!1,isNameRequired:d=!1,showEmail:c=!0,showName:h=!0,enableScreenshot:s=!0,useSentryUser:f={email:"email",name:"username"},tags:_,styleNonce:g,scriptNonce:C,colorScheme:w="system",themeLight:x={},themeDark:k={},addScreenshotButtonLabel:T=Cr,cancelButtonLabel:F=ur,confirmButtonLabel:R=hr,emailLabel:U=pr,emailPlaceholder:X=mr,formTitle:q=fr,isRequiredLabel:m=wr,messageLabel:p=br,messagePlaceholder:y=gr,nameLabel:v=vr,namePlaceholder:D=xr,removeScreenshotButtonLabel:O=Sr,submitButtonLabel:M=_r,successMessageText:H=yr,triggerLabel:ie=Vt,triggerAriaLabel:I="",onFormOpen:Y,onFormClose:se,onSubmitSuccess:Q,onSubmitError:me,onFormSubmitted:sn}={})=>{const pe={id:a,autoInject:o,showBranding:l,isEmailRequired:u,isNameRequired:d,showEmail:c,showName:h,enableScreenshot:s,useSentryUser:f,tags:_,styleNonce:g,scriptNonce:C,colorScheme:w,themeDark:k,themeLight:x,triggerLabel:ie,triggerAriaLabel:I,cancelButtonLabel:F,submitButtonLabel:M,confirmButtonLabel:R,formTitle:q,emailLabel:U,emailPlaceholder:X,messageLabel:p,messagePlaceholder:y,nameLabel:v,namePlaceholder:D,successMessageText:H,isRequiredLabel:m,addScreenshotButtonLabel:T,removeScreenshotButtonLabel:O,onFormClose:se,onFormOpen:Y,onSubmitError:me,onSubmitSuccess:Q,onFormSubmitted:sn};let ee=null,ge=[];const it=N=>{if(!ee){const $=S.createElement("div");$.id=String(N.id),S.body.appendChild($),ee=$.attachShadow({mode:"open"}),ee.appendChild($r(N))}return ee},st=async N=>{const $=N.enableScreenshot&&Lr();let W,B;try{W=(t?t():await e("feedbackModalIntegration",C))(),mt(W)}catch{throw Me&&Le.error("[Feedback] Error when trying to load feedback integrations. Try using `feedbackSyncIntegration` in your `Sentry.init`."),new Error("[Feedback] Missing feedback modal integration!")}try{const te=$?n?n():await e("feedbackScreenshotIntegration",C):void 0;te&&(B=te(),mt(B))}catch{Me&&Le.error("[Feedback] Missing feedback screenshot integration. Proceeding without screenshots.")}const A=W.createDialog({options:{...N,onFormClose:()=>{A&&A.close(),N.onFormClose&&N.onFormClose()},onFormSubmitted:()=>{A&&A.close(),N.onFormSubmitted&&N.onFormSubmitted()}},screenshotIntegration:B,sendFeedback:Nr,shadow:it(N)});return A},ct=(N,$={})=>{const W=je(pe,$),B=typeof N=="string"?S.querySelector(N):typeof N.addEventListener=="function"?N:null;if(!B)throw Me&&Le.error("[Feedback] Unable to attach to target element"),new Error("Unable to attach to target element");let A=null;const te=async()=>{A||(A=await st({...W,onFormSubmitted:()=>{A&&A.removeFromDom(),W.onFormSubmitted&&W.onFormSubmitted()}})),A.appendToDom(),A.open()};B.addEventListener("click",te);const Xe=()=>{ge=ge.filter(cn=>cn!==Xe),A&&A.removeFromDom(),A=null,B.removeEventListener("click",te)};return ge.push(Xe),Xe},Ue=(N={})=>{const $=je(pe,N),W=it($),B=Dr({triggerLabel:$.triggerLabel,triggerAriaLabel:$.triggerAriaLabel,shadow:W,styleNonce:g});return ct(B.el,{...$,onFormOpen(){B.hide()},onFormClose(){B.show()},onFormSubmitted(){B.show()}}),B};return{name:"Feedback",setupOnce(){!Kn()||!pe.autoInject||(S.readyState==="loading"?S.addEventListener("DOMContentLoaded",()=>Ue().appendToDom()):Ue().appendToDom())},attachTo:ct,createWidget(N={}){const $=Ue(je(pe,N));return $.appendToDom(),$},async createForm(N={}){return st(je(pe,N))},remove(){ee&&(ee.parentElement&&ee.parentElement.remove(),ee=null),ge.forEach(N=>N()),ge=[]}}};var ze,E,Zt,oe,bt,Kt,We,Ce={},tt=[],Hr=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,nt=Array.isArray;function re(e,t){for(var n in t)e[n]=t[n];return e}function Jt(e){var t=e.parentNode;t&&t.removeChild(e)}function b(e,t,n){var r,a,o,l={};for(o in t)o=="key"?r=t[o]:o=="ref"?a=t[o]:l[o]=t[o];if(arguments.length>2&&(l.children=arguments.length>3?ze.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)l[o]===void 0&&(l[o]=e.defaultProps[o]);return Te(e,l,r,a,null)}function Te(e,t,n,r,a){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:a??++Zt,__i:-1,__u:0};return a==null&&E.vnode!=null&&E.vnode(o),o}function Se(e){return e.children}function Fe(e,t){this.props=e,this.context=t}function he(e,t){if(t==null)return e.__?he(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?he(e):null}function Ir(e,t,n){var r,a=e.__v,o=a.__e,l=e.__P;if(l)return(r=re({},a)).__v=a.__v+1,E.vnode&&E.vnode(r),rt(l,r,a,e.__n,l.ownerSVGElement!==void 0,32&a.__u?[o]:null,t,o??he(a),!!(32&a.__u),n),r.__.__k[r.__i]=r,r.__d=void 0,r.__e!=o&&Qt(r),r}function Qt(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Qt(e)}}function xt(e){(!e.__d&&(e.__d=!0)&&oe.push(e)&&!He.__r++||bt!==E.debounceRendering)&&((bt=E.debounceRendering)||Kt)(He)}function He(){var e,t,n,r=[],a=[];for(oe.sort(We);e=oe.shift();)e.__d&&(n=oe.length,t=Ir(e,r,a)||t,n===0||oe.length>n?(Ze(r,t,a),a.length=r.length=0,t=void 0,oe.sort(We)):t&&E.__c&&E.__c(t,tt));t&&Ze(r,t,a),He.__r=0}function en(e,t,n,r,a,o,l,u,d,c,h){var s,f,_,g,C,w=r&&r.__k||tt,x=t.length;for(n.__d=d,Pr(n,t,w),d=n.__d,s=0;s<x;s++)(_=n.__k[s])!=null&&typeof _!="boolean"&&typeof _!="function"&&(f=_.__i===-1?Ce:w[_.__i]||Ce,_.__i=s,rt(e,_,f,a,o,l,u,d,c,h),g=_.__e,_.ref&&f.ref!=_.ref&&(f.ref&&ot(f.ref,null,_),h.push(_.ref,_.__c||g,_)),C==null&&g!=null&&(C=g),65536&_.__u||f.__k===_.__k?d=tn(_,d,e):typeof _.type=="function"&&_.__d!==void 0?d=_.__d:g&&(d=g.nextSibling),_.__d=void 0,_.__u&=-196609);n.__d=d,n.__e=C}function Pr(e,t,n){var r,a,o,l,u,d=t.length,c=n.length,h=c,s=0;for(e.__k=[],r=0;r<d;r++)(a=e.__k[r]=(a=t[r])==null||typeof a=="boolean"||typeof a=="function"?null:typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?Te(null,a,null,null,a):nt(a)?Te(Se,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?Te(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):a)!=null?(a.__=e,a.__b=e.__b+1,u=Br(a,n,l=r+s,h),a.__i=u,o=null,u!==-1&&(h--,(o=n[u])&&(o.__u|=131072)),o==null||o.__v===null?(u==-1&&s--,typeof a.type!="function"&&(a.__u|=65536)):u!==l&&(u===l+1?s++:u>l?h>d-l?s+=u-l:s--:s=u<l&&u==l-1?u-l:0,u!==r+s&&(a.__u|=65536))):(o=n[r])&&o.key==null&&o.__e&&(o.__e==e.__d&&(e.__d=he(o)),Ke(o,o,!1),n[r]=null,h--);if(h)for(r=0;r<c;r++)(o=n[r])!=null&&!(131072&o.__u)&&(o.__e==e.__d&&(e.__d=he(o)),Ke(o,o))}function tn(e,t,n){var r,a;if(typeof e.type=="function"){for(r=e.__k,a=0;r&&a<r.length;a++)r[a]&&(r[a].__=e,t=tn(r[a],t,n));return t}e.__e!=t&&(n.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType===8);return t}function Br(e,t,n,r){var a=e.key,o=e.type,l=n-1,u=n+1,d=t[n];if(d===null||d&&a==d.key&&o===d.type)return n;if(r>(d!=null&&!(131072&d.__u)?1:0))for(;l>=0||u<t.length;){if(l>=0){if((d=t[l])&&!(131072&d.__u)&&a==d.key&&o===d.type)return l;l--}if(u<t.length){if((d=t[u])&&!(131072&d.__u)&&a==d.key&&o===d.type)return u;u++}}return-1}function vt(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Hr.test(t)?n:n+"px"}function Ee(e,t,n,r,a){var o;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||vt(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||vt(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/(PointerCapture)$|Capture$/i,"$1")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r?n.u=r.u:(n.u=Date.now(),e.addEventListener(t,o?wt:yt,o)):e.removeEventListener(t,o?wt:yt,o);else{if(a)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t!=="role"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,n))}}function yt(e){if(this.l){var t=this.l[e.type+!1];if(e.t){if(e.t<=t.u)return}else e.t=Date.now();return t(E.event?E.event(e):e)}}function wt(e){if(this.l)return this.l[e.type+!0](E.event?E.event(e):e)}function rt(e,t,n,r,a,o,l,u,d,c){var h,s,f,_,g,C,w,x,k,T,F,R,U,X,q,m=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(d=!!(32&n.__u),o=[u=t.__e=n.__e]),(h=E.__b)&&h(t);e:if(typeof m=="function")try{if(x=t.props,k=(h=m.contextType)&&r[h.__c],T=h?k?k.props.value:h.__:r,n.__c?w=(s=t.__c=n.__c).__=s.__E:("prototype"in m&&m.prototype.render?t.__c=s=new m(x,T):(t.__c=s=new Fe(x,T),s.constructor=m,s.render=Ur),k&&k.sub(s),s.props=x,s.state||(s.state={}),s.context=T,s.__n=r,f=s.__d=!0,s.__h=[],s._sb=[]),s.__s==null&&(s.__s=s.state),m.getDerivedStateFromProps!=null&&(s.__s==s.state&&(s.__s=re({},s.__s)),re(s.__s,m.getDerivedStateFromProps(x,s.__s))),_=s.props,g=s.state,s.__v=t,f)m.getDerivedStateFromProps==null&&s.componentWillMount!=null&&s.componentWillMount(),s.componentDidMount!=null&&s.__h.push(s.componentDidMount);else{if(m.getDerivedStateFromProps==null&&x!==_&&s.componentWillReceiveProps!=null&&s.componentWillReceiveProps(x,T),!s.__e&&(s.shouldComponentUpdate!=null&&s.shouldComponentUpdate(x,s.__s,T)===!1||t.__v===n.__v)){for(t.__v!==n.__v&&(s.props=x,s.state=s.__s,s.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(p){p&&(p.__=t)}),F=0;F<s._sb.length;F++)s.__h.push(s._sb[F]);s._sb=[],s.__h.length&&l.push(s);break e}s.componentWillUpdate!=null&&s.componentWillUpdate(x,s.__s,T),s.componentDidUpdate!=null&&s.__h.push(function(){s.componentDidUpdate(_,g,C)})}if(s.context=T,s.props=x,s.__P=e,s.__e=!1,R=E.__r,U=0,"prototype"in m&&m.prototype.render){for(s.state=s.__s,s.__d=!1,R&&R(t),h=s.render(s.props,s.state,s.context),X=0;X<s._sb.length;X++)s.__h.push(s._sb[X]);s._sb=[]}else do s.__d=!1,R&&R(t),h=s.render(s.props,s.state,s.context),s.state=s.__s;while(s.__d&&++U<25);s.state=s.__s,s.getChildContext!=null&&(r=re(re({},r),s.getChildContext())),f||s.getSnapshotBeforeUpdate==null||(C=s.getSnapshotBeforeUpdate(_,g)),en(e,nt(q=h!=null&&h.type===Se&&h.key==null?h.props.children:h)?q:[q],t,n,r,a,o,l,u,d,c),s.base=t.__e,t.__u&=-161,s.__h.length&&l.push(s),w&&(s.__E=s.__=null)}catch(p){t.__v=null,d||o!=null?(t.__e=u,t.__u|=d?160:32,o[o.indexOf(u)]=null):(t.__e=n.__e,t.__k=n.__k),E.__e(p,t,n)}else o==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=zr(n.__e,t,n,r,a,o,l,d,c);(h=E.diffed)&&h(t)}function Ze(e,t,n){for(var r=0;r<n.length;r++)ot(n[r],n[++r],n[++r]);E.__c&&E.__c(t,e),e.some(function(a){try{e=a.__h,a.__h=[],e.some(function(o){o.call(a)})}catch(o){E.__e(o,a.__v)}})}function zr(e,t,n,r,a,o,l,u,d){var c,h,s,f,_,g,C,w=n.props,x=t.props,k=t.type;if(k==="svg"&&(a=!0),o!=null){for(c=0;c<o.length;c++)if((_=o[c])&&"setAttribute"in _==!!k&&(k?_.localName===k:_.nodeType===3)){e=_,o[c]=null;break}}if(e==null){if(k===null)return document.createTextNode(x);e=a?document.createElementNS("http://www.w3.org/2000/svg",k):document.createElement(k,x.is&&x),o=null,u=!1}if(k===null)w===x||u&&e.data===x||(e.data=x);else{if(o=o&&ze.call(e.childNodes),w=n.props||Ce,!u&&o!=null)for(w={},c=0;c<e.attributes.length;c++)w[(_=e.attributes[c]).name]=_.value;for(c in w)_=w[c],c=="children"||(c=="dangerouslySetInnerHTML"?s=_:c==="key"||c in x||Ee(e,c,null,_,a));for(c in x)_=x[c],c=="children"?f=_:c=="dangerouslySetInnerHTML"?h=_:c=="value"?g=_:c=="checked"?C=_:c==="key"||u&&typeof _!="function"||w[c]===_||Ee(e,c,_,w[c],a);if(h)u||s&&(h.__html===s.__html||h.__html===e.innerHTML)||(e.innerHTML=h.__html),t.__k=[];else if(s&&(e.innerHTML=""),en(e,nt(f)?f:[f],t,n,r,a&&k!=="foreignObject",o,l,o?o[0]:n.__k&&he(n,0),u,d),o!=null)for(c=o.length;c--;)o[c]!=null&&Jt(o[c]);u||(c="value",g!==void 0&&(g!==e[c]||k==="progress"&&!g||k==="option"&&g!==w[c])&&Ee(e,c,g,w[c],!1),c="checked",C!==void 0&&C!==e[c]&&Ee(e,c,C,w[c],!1))}return e}function ot(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){E.__e(r,n)}}function Ke(e,t,n){var r,a;if(E.unmount&&E.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||ot(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){E.__e(o,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(a=0;a<r.length;a++)r[a]&&Ke(r[a],t,n||typeof e.type!="function");n||e.__e==null||Jt(e.__e),e.__=e.__e=e.__d=void 0}function Ur(e,t,n){return this.constructor(e,n)}function Xr(e,t,n){var r,a,o,l;E.__&&E.__(e,t),a=(r=!1)?null:t.__k,o=[],l=[],rt(t,e=t.__k=b(Se,null,[e]),a||Ce,Ce,t.ownerSVGElement!==void 0,a?null:t.firstChild?ze.call(t.childNodes):null,o,a?a.__e:t.firstChild,r,l),e.__d=void 0,Ze(o,e,l)}ze=tt.slice,E={__e:function(e,t,n,r){for(var a,o,l;t=t.__;)if((a=t.__c)&&!a.__)try{if((o=a.constructor)&&o.getDerivedStateFromError!=null&&(a.setState(o.getDerivedStateFromError(e)),l=a.__d),a.componentDidCatch!=null&&(a.componentDidCatch(e,r||{}),l=a.__d),l)return a.__E=a}catch(u){e=u}throw e}},Zt=0,Fe.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=re({},this.state),typeof e=="function"&&(e=e(re({},n),this.props)),e&&re(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),xt(this))},Fe.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),xt(this))},Fe.prototype.render=Se,oe=[],Kt=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,We=function(e,t){return e.__v.__b-t.__v.__b},He.__r=0;var J,j,Ye,Ct,fe=0,nn=[],De=[],L=E,St=L.__b,kt=L.__r,jt=L.diffed,Et=L.__c,Nt=L.unmount,Lt=L.__;function ae(e,t){L.__h&&L.__h(j,e,fe||t),fe=0;var n=j.__H||(j.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:De}),n.__[e]}function ue(e){return fe=1,rn(an,e)}function rn(e,t,n){var r=ae(J++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):an(void 0,t),function(u){var d=r.__N?r.__N[0]:r.__[0],c=r.t(d,u);d!==c&&(r.__N=[c,r.__[1]],r.__c.setState({}))}],r.__c=j,!j.u)){var a=function(u,d,c){if(!r.__c.__H)return!0;var h=r.__c.__H.__.filter(function(f){return!!f.__c});if(h.every(function(f){return!f.__N}))return!o||o.call(this,u,d,c);var s=!1;return h.forEach(function(f){if(f.__N){var _=f.__[0];f.__=f.__N,f.__N=void 0,_!==f.__[0]&&(s=!0)}}),!(!s&&r.__c.props===u)&&(!o||o.call(this,u,d,c))};j.u=!0;var o=j.shouldComponentUpdate,l=j.componentWillUpdate;j.componentWillUpdate=function(u,d,c){if(this.__e){var h=o;o=void 0,a(u,d,c),o=h}l&&l.call(this,u,d,c)},j.shouldComponentUpdate=a}return r.__N||r.__}function Yr(e,t){var n=ae(J++,3);!L.__s&&at(n.__H,t)&&(n.__=e,n.i=t,j.__H.__h.push(n))}function on(e,t){var n=ae(J++,4);!L.__s&&at(n.__H,t)&&(n.__=e,n.i=t,j.__h.push(n))}function Or(e){return fe=5,ke(function(){return{current:e}},[])}function qr(e,t,n){fe=6,on(function(){return typeof e=="function"?(e(t()),function(){return e(null)}):e?(e.current=t(),function(){return e.current=null}):void 0},n==null?n:n.concat(e))}function ke(e,t){var n=ae(J++,7);return at(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function _e(e,t){return fe=8,ke(function(){return e},t)}function Gr(e){var t=j.context[e.__c],n=ae(J++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(j)),t.props.value):e.__}function Vr(e,t){L.useDebugValue&&L.useDebugValue(t?t(e):e)}function Wr(e){var t=ae(J++,10),n=ue();return t.__=e,j.componentDidCatch||(j.componentDidCatch=function(r,a){t.__&&t.__(r,a),n[1](r)}),[n[0],function(){n[1](void 0)}]}function Zr(){var e=ae(J++,11);if(!e.__){for(var t=j.__v;t!==null&&!t.__m&&t.__!==null;)t=t.__;var n=t.__m||(t.__m=[0,0]);e.__="P"+n[0]+"-"+n[1]++}return e.__}function Kr(){for(var e;e=nn.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Re),e.__H.__h.forEach(Je),e.__H.__h=[]}catch(t){e.__H.__h=[],L.__e(t,e.__v)}}L.__b=function(e){j=null,St&&St(e)},L.__=function(e,t){t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Lt&&Lt(e,t)},L.__r=function(e){kt&&kt(e),J=0;var t=(j=e.__c).__H;t&&(Ye===j?(t.__h=[],j.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=De,n.__N=n.i=void 0})):(t.__h.forEach(Re),t.__h.forEach(Je),t.__h=[],J=0)),Ye=j},L.diffed=function(e){jt&&jt(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(nn.push(t)!==1&&Ct===L.requestAnimationFrame||((Ct=L.requestAnimationFrame)||Jr)(Kr)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==De&&(n.__=n.__V),n.i=void 0,n.__V=De})),Ye=j=null},L.__c=function(e,t){t.some(function(n){try{n.__h.forEach(Re),n.__h=n.__h.filter(function(r){return!r.__||Je(r)})}catch(r){t.some(function(a){a.__h&&(a.__h=[])}),t=[],L.__e(r,n.__v)}}),Et&&Et(e,t)},L.unmount=function(e){Nt&&Nt(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{Re(r)}catch(a){t=a}}),n.__H=void 0,t&&L.__e(t,n.__v))};var Mt=typeof requestAnimationFrame=="function";function Jr(e){var t,n=function(){clearTimeout(r),Mt&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);Mt&&(t=requestAnimationFrame(n))}function Re(e){var t=j,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),j=t}function Je(e){var t=j;e.__c=e.__(),j=t}function at(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function an(e,t){return typeof t=="function"?t(e):t}const Qr={__proto__:null,useCallback:_e,useContext:Gr,useDebugValue:Vr,useEffect:Yr,useErrorBoundary:Wr,useId:Zr,useImperativeHandle:qr,useLayoutEffect:on,useMemo:ke,useReducer:rn,useRef:Or,useState:ue},eo="http://www.w3.org/2000/svg";function to(){const e=r=>S.createElementNS(eo,r),t=z(e("svg"),{width:"32",height:"30",viewBox:"0 0 72 66",fill:"inherit"}),n=z(e("path"),{transform:"translate(11, 11)",d:"M29,2.26a4.67,4.67,0,0,0-8,0L14.42,13.53A32.21,32.21,0,0,1,32.17,40.19H27.55A27.68,27.68,0,0,0,12.09,17.47L6,28a15.92,15.92,0,0,1,9.23,12.17H4.62A.76.76,0,0,1,4,39.06l2.94-5a10.74,10.74,0,0,0-3.36-1.9l-2.91,5a4.54,4.54,0,0,0,1.69,6.24A4.66,4.66,0,0,0,4.62,44H19.15a19.4,19.4,0,0,0-8-17.31l2.31-4A23.87,23.87,0,0,1,23.76,44H36.07a35.88,35.88,0,0,0-16.41-31.8l4.67-8a.77.77,0,0,1,1.05-.27c.53.29,20.29,34.77,20.66,35.17a.76.76,0,0,1-.68,1.13H40.6q.09,1.91,0,3.81h4.78A4.59,4.59,0,0,0,50,39.43a4.49,4.49,0,0,0-.62-2.28Z"});return t.appendChild(n),t}function no({options:e}){const t=ke(()=>({__html:to().outerHTML}),[]);return b("h2",{class:"dialog__header"},b("span",{class:"dialog__title"},e.formTitle),e.showBranding?b("a",{class:"brand-link",target:"_blank",href:"https://sentry.io/welcome/",title:"Powered by Sentry",rel:"noopener noreferrer",dangerouslySetInnerHTML:t}):null)}function ro(e,t){const n=[];return t.isNameRequired&&!e.name&&n.push(t.nameLabel),t.isEmailRequired&&!e.email&&n.push(t.emailLabel),e.message||n.push(t.messageLabel),n}function Oe(e,t){const n=e.get(t);return typeof n=="string"?n.trim():""}function oo({options:e,defaultEmail:t,defaultName:n,onFormClose:r,onSubmit:a,onSubmitSuccess:o,onSubmitError:l,showEmail:u,showName:d,screenshotInput:c}){const{tags:h,addScreenshotButtonLabel:s,removeScreenshotButtonLabel:f,cancelButtonLabel:_,emailLabel:g,emailPlaceholder:C,isEmailRequired:w,isNameRequired:x,messageLabel:k,messagePlaceholder:T,nameLabel:F,namePlaceholder:R,submitButtonLabel:U,isRequiredLabel:X}=e,[q,m]=ue(null),[p,y]=ue(!1),v=c&&c.input,[D,O]=ue(null),M=_e(I=>{O(I),y(!1)},[]),H=_e(I=>{const Y=ro(I,{emailLabel:g,isEmailRequired:w,isNameRequired:x,messageLabel:k,nameLabel:F});return Y.length>0?m(`Please enter in the following required fields: ${Y.join(", ")}`):m(null),Y.length===0},[g,w,x,k,F]),ie=_e(async I=>{try{if(I.preventDefault(),!(I.target instanceof HTMLFormElement))return;const Y=new FormData(I.target),se=await(c&&p?c.value():void 0),Q={name:Oe(Y,"name"),email:Oe(Y,"email"),message:Oe(Y,"message"),attachments:se?[se]:void 0};if(!H(Q))return;try{await a({name:Q.name,email:Q.email,message:Q.message,source:kr,tags:h},{attachments:Q.attachments}),o(Q)}catch(me){Me&&Le.error(me),m(me),l(me)}}catch{}},[c&&p,o,l]);return b("form",{class:"form",onSubmit:ie},v&&p?b(v,{onError:M}):null,b("div",{class:"form__right","data-sentry-feedback":!0},b("div",{class:"form__top"},q?b("div",{class:"form__error-container"},q):null,d?b("label",{for:"name",class:"form__label"},b(qe,{label:F,isRequiredLabel:X,isRequired:x}),b("input",{class:"form__input",defaultValue:n,id:"name",name:"name",placeholder:R,required:x,type:"text"})):b("input",{"aria-hidden":!0,value:n,name:"name",type:"hidden"}),u?b("label",{for:"email",class:"form__label"},b(qe,{label:g,isRequiredLabel:X,isRequired:w}),b("input",{class:"form__input",defaultValue:t,id:"email",name:"email",placeholder:C,required:w,type:"email"})):b("input",{"aria-hidden":!0,value:t,name:"email",type:"hidden"}),b("label",{for:"message",class:"form__label"},b(qe,{label:k,isRequiredLabel:X,isRequired:!0}),b("textarea",{autoFocus:!0,class:"form__input form__input--textarea",id:"message",name:"message",placeholder:T,required:!0,rows:5})),v?b("label",{for:"screenshot",class:"form__label"},b("button",{class:"btn btn--default",type:"button",onClick:()=>{O(null),y(I=>!I)}},p?f:s),D?b("div",{class:"form__error-container"},D.message):null):null),b("div",{class:"btn-group"},b("button",{class:"btn btn--primary",type:"submit"},U),b("button",{class:"btn btn--default",type:"button",onClick:r},_))))}function qe({label:e,isRequired:t,isRequiredLabel:n}){return b("span",{class:"form__label__text"},e,t&&b("span",{class:"form__label__text--required"},n))}const Ne=16,Tt=17,ao="http://www.w3.org/2000/svg";function io(){const e=d=>G.document.createElementNS(ao,d),t=z(e("svg"),{width:`${Ne}`,height:`${Tt}`,viewBox:`0 0 ${Ne} ${Tt}`,fill:"inherit"}),n=z(e("g"),{clipPath:"url(#clip0_57_156)"}),r=z(e("path"),{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.55544 15.1518C4.87103 16.0308 6.41775 16.5 8 16.5C10.1217 16.5 12.1566 15.6571 13.6569 14.1569C15.1571 12.6566 16 10.6217 16 8.5C16 6.91775 15.5308 5.37103 14.6518 4.05544C13.7727 2.73985 12.5233 1.71447 11.0615 1.10897C9.59966 0.503466 7.99113 0.34504 6.43928 0.653721C4.88743 0.962403 3.46197 1.72433 2.34315 2.84315C1.22433 3.96197 0.462403 5.38743 0.153721 6.93928C-0.15496 8.49113 0.00346625 10.0997 0.608967 11.5615C1.21447 13.0233 2.23985 14.2727 3.55544 15.1518ZM4.40546 3.1204C5.46945 2.40946 6.72036 2.03 8 2.03C9.71595 2.03 11.3616 2.71166 12.575 3.92502C13.7883 5.13838 14.47 6.78405 14.47 8.5C14.47 9.77965 14.0905 11.0306 13.3796 12.0945C12.6687 13.1585 11.6582 13.9878 10.476 14.4775C9.29373 14.9672 7.99283 15.0953 6.73777 14.8457C5.48271 14.596 4.32987 13.9798 3.42502 13.075C2.52018 12.1701 1.90397 11.0173 1.65432 9.76224C1.40468 8.50718 1.5328 7.20628 2.0225 6.02404C2.5122 4.8418 3.34148 3.83133 4.40546 3.1204Z"}),a=z(e("path"),{d:"M6.68775 12.4297C6.78586 12.4745 6.89218 12.4984 7 12.5C7.11275 12.4955 7.22315 12.4664 7.32337 12.4145C7.4236 12.3627 7.51121 12.2894 7.58 12.2L12 5.63999C12.0848 5.47724 12.1071 5.28902 12.0625 5.11098C12.0178 4.93294 11.9095 4.77744 11.7579 4.67392C11.6064 4.57041 11.4221 4.52608 11.24 4.54931C11.0579 4.57254 10.8907 4.66173 10.77 4.79999L6.88 10.57L5.13 8.56999C5.06508 8.49566 4.98613 8.43488 4.89768 8.39111C4.80922 8.34735 4.713 8.32148 4.61453 8.31498C4.51605 8.30847 4.41727 8.32147 4.32382 8.35322C4.23038 8.38497 4.14413 8.43484 4.07 8.49999C3.92511 8.63217 3.83692 8.81523 3.82387 9.01092C3.81083 9.2066 3.87393 9.39976 4 9.54999L6.43 12.24C6.50187 12.3204 6.58964 12.385 6.68775 12.4297Z"});t.appendChild(n).append(a,r);const o=e("defs"),l=z(e("clipPath"),{id:"clip0_57_156"}),u=z(e("rect"),{width:`${Ne}`,height:`${Ne}`,fill:"white",transform:"translate(0 0.5)"});return l.appendChild(u),o.appendChild(l),t.appendChild(o).appendChild(l).appendChild(u),t}function so({open:e,onFormSubmitted:t,...n}){const r=n.options,a=ke(()=>({__html:io().outerHTML}),[]),[o,l]=ue(null),u=_e(()=>{o&&(clearTimeout(o),l(null)),t()},[o]),d=_e(c=>{n.onSubmitSuccess(c),l(setTimeout(()=>{t(),l(null)},Er))},[t]);return b(Se,null,o?b("div",{class:"success__position",onClick:u},b("div",{class:"success__content"},r.successMessageText,b("span",{class:"success__icon",dangerouslySetInnerHTML:a}))):b("dialog",{class:"dialog",onClick:r.onFormClose,open:e},b("div",{class:"dialog__position"},b("div",{class:"dialog__content",onClick:c=>{c.stopPropagation()}},b(no,{options:r}),b(oo,{...n,onSubmitSuccess:d})))))}const co=`
.dialog {
  position: fixed;
  z-index: var(--z-index);
  margin: 0;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  height: 100vh;
  width: 100vw;

  color: var(--dialog-color, var(--foreground));
  fill: var(--dialog-color, var(--foreground));
  line-height: 1.75em;

  background-color: rgba(0, 0, 0, 0.05);
  border: none;
  inset: 0;
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
}

.dialog__position {
  position: fixed;
  z-index: var(--z-index);
  inset: var(--dialog-inset);
  padding: var(--page-margin);
  display: flex;
  max-height: calc(100vh - (2 * var(--page-margin)));
}
@media (max-width: 600px) {
  .dialog__position {
    inset: var(--page-margin);
    padding: 0;
  }
}

.dialog__position:has(.editor) {
  inset: var(--page-margin);
  padding: 0;
}

.dialog:not([open]) {
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
}
.dialog:not([open]) .dialog__content {
  transform: translate(0, -16px) scale(0.98);
}

.dialog__content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: var(--dialog-padding, 24px);
  max-width: 100%;
  width: 100%;
  max-height: 100%;
  overflow: auto;

  background: var(--dialog-background, var(--background));
  border-radius: var(--dialog-border-radius, 20px);
  border: var(--dialog-border, var(--border));
  box-shadow: var(--dialog-box-shadow, var(--box-shadow));
  transform: translate(0, 0) scale(1);
  transition: transform 0.2s ease-in-out;
}

`,lo=`
.dialog__header {
  display: flex;
  gap: 4px;
  justify-content: space-between;
  font-weight: var(--dialog-header-weight, 600);
  margin: 0;
}
.dialog__title {
  align-self: center;
  width: var(--form-width, 272px);
}

@media (max-width: 600px) {
  .dialog__title {
    width: auto;
  }
}

.dialog__position:has(.editor) .dialog__title {
  width: auto;
}


.brand-link {
  display: inline-flex;
}
.brand-link:focus-visible {
  outline: var(--outline);
}
`,uo=`
.form {
  display: flex;
  overflow: auto;
  flex-direction: row;
  gap: 16px;
  flex: 1 0;
}

.form__right {
  flex: 0 0 auto;
  display: flex;
  overflow: auto;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  width: var(--form-width, 100%);
}

.dialog__position:has(.editor) .form__right {
  width: var(--form-width, 272px);
}

.form__top {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form__error-container {
  color: var(--error-color);
  fill: var(--error-color);
}

.form__label {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 0px;
}

.form__label__text {
  display: flex;
  gap: 4px;
  align-items: center;
}

.form__label__text--required {
  font-size: 0.85em;
}

.form__input {
  font-family: inherit;
  line-height: inherit;
  background: transparent;
  box-sizing: border-box;
  border: var(--input-border, var(--border));
  border-radius: var(--input-border-radius, 6px);
  color: var(--input-color, inherit);
  fill: var(--input-color, inherit);
  font-size: var(--input-font-size, inherit);
  font-weight: var(--input-font-weight, 500);
  padding: 6px 12px;
}

.form__input::placeholder {
  opacity: 0.65;
  color: var(--input-placeholder-color, inherit);
  filter: var(--interactive-filter);
}

.form__input:focus-visible {
  outline: var(--input-focus-outline, var(--outline));
}

.form__input--textarea {
  font-family: inherit;
  resize: vertical;
}

.error {
  color: var(--error-color);
  fill: var(--error-color);
}
`,_o=`
.btn-group {
  display: grid;
  gap: 8px;
}

.btn {
  line-height: inherit;
  border: var(--button-border, var(--border));
  border-radius: var(--button-border-radius, 6px);
  cursor: pointer;
  font-family: inherit;
  font-size: var(--button-font-size, inherit);
  font-weight: var(--button-font-weight, 600);
  padding: var(--button-padding, 6px 16px);
}
.btn[disabled] {
  opacity: 0.6;
  pointer-events: none;
}

.btn--primary {
  color: var(--button-primary-color, var(--accent-foreground));
  fill: var(--button-primary-color, var(--accent-foreground));
  background: var(--button-primary-background, var(--accent-background));
  border: var(--button-primary-border, var(--border));
  border-radius: var(--button-primary-border-radius, 6px);
  font-weight: var(--button-primary-font-weight, 500);
}
.btn--primary:hover {
  color: var(--button-primary-hover-color, var(--accent-foreground));
  fill: var(--button-primary-hover-color, var(--accent-foreground));
  background: var(--button-primary-hover-background, var(--accent-background));
  filter: var(--interactive-filter);
}
.btn--primary:focus-visible {
  background: var(--button-primary-hover-background, var(--accent-background));
  filter: var(--interactive-filter);
  outline: var(--button-primary-focus-outline, var(--outline));
}

.btn--default {
  color: var(--button-color, var(--foreground));
  fill: var(--button-color, var(--foreground));
  background: var(--button-background, var(--background));
  border: var(--button-border, var(--border));
  border-radius: var(--button-border-radius, 6px);
  font-weight: var(--button-font-weight, 500);
}
.btn--default:hover {
  color: var(--button-color, var(--foreground));
  fill: var(--button-color, var(--foreground));
  background: var(--button-hover-background, var(--background));
  filter: var(--interactive-filter);
}
.btn--default:focus-visible {
  background: var(--button-hover-background, var(--background));
  filter: var(--interactive-filter);
  outline: var(--button-focus-outline, var(--outline));
}
`,ho=`
.success__position {
  position: fixed;
  inset: var(--dialog-inset);
  padding: var(--page-margin);
  z-index: var(--z-index);
}
.success__content {
  background: var(--success-background, var(--background));
  border: var(--success-border, var(--border));
  border-radius: var(--success-border-radius, 1.7em/50%);
  box-shadow: var(--success-box-shadow, var(--box-shadow));
  font-weight: var(--success-font-weight, 600);
  color: var(--success-color);
  fill: var(--success-color);
  padding: 12px 24px;
  line-height: 1.75em;

  display: grid;
  align-items: center;
  grid-auto-flow: column;
  gap: 6px;
  cursor: default;
}

.success__icon {
  display: flex;
}
`;function fo(e){const t=S.createElement("style");return t.textContent=`
:host {
  --dialog-inset: var(--inset);
}

${co}
${lo}
${uo}
${_o}
${ho}
`,e&&t.setAttribute("nonce",e),t}function mo(){const e=et().getUser(),t=Qn().getUser(),n=er().getUser();return e&&Object.keys(e).length?e:t&&Object.keys(t).length?t:n}const po=()=>({name:"FeedbackModal",setupOnce(){},createDialog:({options:e,screenshotIntegration:t,sendFeedback:n,shadow:r})=>{const a=r,o=e.useSentryUser,l=mo(),u=S.createElement("div"),d=fo(e.styleNonce);let c="";const h={get el(){return u},appendToDom(){!a.contains(d)&&!a.contains(u)&&(a.appendChild(d),a.appendChild(u))},removeFromDom(){a.removeChild(u),a.removeChild(d),S.body.style.overflow=c},open(){f(!0),e.onFormOpen&&e.onFormOpen(),c=S.body.style.overflow,S.body.style.overflow="hidden"},close(){f(!1),S.body.style.overflow=c}},s=t&&t.createInput({h:b,hooks:Qr,dialog:h,options:e}),f=_=>{Xr(b(so,{options:e,screenshotInput:s,showName:e.showName||e.isNameRequired,showEmail:e.showEmail||e.isEmailRequired,defaultName:o&&l&&l[o.name]||"",defaultEmail:o&&l&&l[o.email]||"",onFormClose:()=>{f(!1),e.onFormClose&&e.onFormClose()},onSubmit:n,onSubmitSuccess:g=>{f(!1),e.onSubmitSuccess&&e.onSubmitSuccess(g)},onSubmitError:g=>{e.onSubmitError&&e.onSubmitError(g)},onFormSubmitted:()=>{e.onFormSubmitted&&e.onFormSubmitted()},open:_}),u)};return h}});function go({h:e}){return function({top:n,left:r,corner:a,onGrabButton:o}){return e("button",{class:`editor__crop-corner editor__crop-corner--${a} `,style:{top:n,left:r},onMouseDown:l=>{l.preventDefault(),o(l,a)},onClick:l=>{l.preventDefault()}})}}function bo(e){const t=S.createElement("style"),n="#1A141F",r="#302735";return t.textContent=`
.editor {
  padding: 10px;
  padding-top: 65px;
  padding-bottom: 65px;
  flex-grow: 1;

  background-color: ${n};
  background-image: repeating-linear-gradient(
      -145deg,
      transparent,
      transparent 8px,
      ${n} 8px,
      ${n} 11px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 15px,
      ${r} 15px,
      ${r} 16px
    );
}

.editor__canvas-container {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.editor__canvas-container canvas {
  object-fit: contain;
  position: relative;
}

.editor__crop-btn-group {
  padding: 8px;
  gap: 8px;
  border-radius: var(--menu-border-radius, 6px);
  background: var(--button-primary-background, var(--background));
  width: 175px;
  position: absolute;
}

.editor__crop-corner {
  width: 30px;
  height: 30px;
  position: absolute;
  background: none;
  border: 3px solid #ffffff;
}

.editor__crop-corner--top-left {
  cursor: nwse-resize;
  border-right: none;
  border-bottom: none;
}
.editor__crop-corner--top-right {
  cursor: nesw-resize;
  border-left: none;
  border-bottom: none;
}
.editor__crop-corner--bottom-left {
  cursor: nesw-resize;
  border-right: none;
  border-top: none;
}
.editor__crop-corner--bottom-right {
  cursor: nwse-resize;
  border-left: none;
  border-top: none;
}
`,e&&t.setAttribute("nonce",e),t}function xo({hooks:e}){return function({onBeforeScreenshot:n,onScreenshot:r,onAfterScreenshot:a,onError:o}){e.useEffect(()=>{(async()=>{n();const u=await ve.mediaDevices.getDisplayMedia({video:{width:G.innerWidth*G.devicePixelRatio,height:G.innerHeight*G.devicePixelRatio},audio:!1,monitorTypeSurfaces:"exclude",preferCurrentTab:!0,selfBrowserSurface:"include",surfaceSwitching:"exclude"}),d=S.createElement("video");await new Promise((c,h)=>{d.srcObject=u,d.onloadedmetadata=()=>{r(d),u.getTracks().forEach(s=>s.stop()),c()},d.play().catch(h)}),a()})().catch(o)},[])}}const ye=30,Z=3,ne=ye+Z,P=G.devicePixelRatio,be=e=>({x:Math.min(e.startX,e.endX),y:Math.min(e.startY,e.endY),width:Math.abs(e.startX-e.endX),height:Math.abs(e.startY-e.endY)}),Ge=e=>{const t=e.clientHeight,n=e.clientWidth,r=e.width/e.height;let a=t*r,o=t;a>n&&(a=n,o=n/r);const l=(n-a)/2,u=(t-o)/2;return{startX:l,startY:u,endX:a+l,endY:o+u}};function vo({h:e,hooks:t,imageBuffer:n,dialog:r,options:a}){const o=xo({hooks:t});return function({onError:u}){const d=t.useMemo(()=>({__html:bo(a.styleNonce).innerText}),[]),c=go({h:e}),h=t.useRef(null),s=t.useRef(null),f=t.useRef(null),[_,g]=t.useState({startX:0,startY:0,endX:0,endY:0}),[C,w]=t.useState(!1),[x,k]=t.useState(!1);t.useEffect(()=>{G.addEventListener("resize",T,!1)},[]);function T(){const m=f.current,p=be(Ge(n));if(m){m.width=p.width*P,m.height=p.height*P,m.style.width=`${p.width}px`,m.style.height=`${p.height}px`;const v=m.getContext("2d");v&&v.scale(P,P)}const y=s.current;y&&(y.style.width=`${p.width}px`,y.style.height=`${p.height}px`),g({startX:0,startY:0,endX:p.width,endY:p.height})}t.useEffect(()=>{const m=f.current;if(!m)return;const p=m.getContext("2d");if(!p)return;const y=be(Ge(n)),v=be(_);p.clearRect(0,0,y.width,y.height),p.fillStyle="rgba(0, 0, 0, 0.5)",p.fillRect(0,0,y.width,y.height),p.clearRect(v.x,v.y,v.width,v.height),p.strokeStyle="#ffffff",p.lineWidth=3,p.strokeRect(v.x+1,v.y+1,v.width-2,v.height-2),p.strokeStyle="#000000",p.lineWidth=1,p.strokeRect(v.x+3,v.y+3,v.width-6,v.height-6)},[_]);function F(m,p){w(!1),k(!0);const y=R(p),v=()=>{S.removeEventListener("mousemove",y),S.removeEventListener("mouseup",v),w(!0),k(!1)};S.addEventListener("mouseup",v),S.addEventListener("mousemove",y)}const R=t.useCallback(m=>function(p){if(!f.current)return;const y=f.current,v=y.getBoundingClientRect(),D=p.clientX-v.x,O=p.clientY-v.y;switch(m){case"top-left":g(M=>({...M,startX:Math.min(Math.max(0,D),M.endX-ne),startY:Math.min(Math.max(0,O),M.endY-ne)}));break;case"top-right":g(M=>({...M,endX:Math.max(Math.min(D,y.width/P),M.startX+ne),startY:Math.min(Math.max(0,O),M.endY-ne)}));break;case"bottom-left":g(M=>({...M,startX:Math.min(Math.max(0,D),M.endX-ne),endY:Math.max(Math.min(O,y.height/P),M.startY+ne)}));break;case"bottom-right":g(M=>({...M,endX:Math.max(Math.min(D,y.width/P),M.startX+ne),endY:Math.max(Math.min(O,y.height/P),M.startY+ne)}));break}},[]),U=t.useRef({initialX:0,initialY:0});function X(m){if(x)return;U.current={initialX:m.clientX,initialY:m.clientY};const p=v=>{const D=f.current;if(!D)return;const O=v.clientX-U.current.initialX,M=v.clientY-U.current.initialY;g(H=>{const ie=Math.max(0,Math.min(H.startX+O,D.width/P-(H.endX-H.startX))),I=Math.max(0,Math.min(H.startY+M,D.height/P-(H.endY-H.startY))),Y=ie+(H.endX-H.startX),se=I+(H.endY-H.startY);return U.current.initialX=v.clientX,U.current.initialY=v.clientY,{startX:ie,startY:I,endX:Y,endY:se}})},y=()=>{S.removeEventListener("mousemove",p),S.removeEventListener("mouseup",y)};S.addEventListener("mousemove",p),S.addEventListener("mouseup",y)}function q(){const m=S.createElement("canvas"),p=be(Ge(n)),y=be(_);m.width=y.width*P,m.height=y.height*P;const v=m.getContext("2d");v&&n&&v.drawImage(n,y.x/p.width*n.width,y.y/p.height*n.height,y.width/p.width*n.width,y.height/p.height*n.height,0,0,m.width,m.height);const D=n.getContext("2d");D&&(D.clearRect(0,0,n.width,n.height),n.width=m.width,n.height=m.height,n.style.width=`${y.width}px`,n.style.height=`${y.height}px`,D.drawImage(m,0,0),T())}return o({onBeforeScreenshot:t.useCallback(()=>{r.el.style.display="none"},[]),onScreenshot:t.useCallback(m=>{const p=n.getContext("2d");if(!p)throw new Error("Could not get canvas context");n.width=m.videoWidth,n.height=m.videoHeight,n.style.width="100%",n.style.height="100%",p.drawImage(m,0,0)},[n]),onAfterScreenshot:t.useCallback(()=>{r.el.style.display="block";const m=h.current;m&&m.appendChild(n),T()},[]),onError:t.useCallback(m=>{r.el.style.display="block",u(m)},[])}),e("div",{class:"editor"},e("style",{nonce:a.styleNonce,dangerouslySetInnerHTML:d}),e("div",{class:"editor__canvas-container",ref:h},e("div",{class:"editor__crop-container",style:{position:"absolute",zIndex:1},ref:s},e("canvas",{onMouseDown:X,style:{position:"absolute",cursor:C?"move":"auto"},ref:f}),e(c,{left:_.startX-Z,top:_.startY-Z,onGrabButton:F,corner:"top-left"}),e(c,{left:_.endX-ye+Z,top:_.startY-Z,onGrabButton:F,corner:"top-right"}),e(c,{left:_.startX-Z,top:_.endY-ye+Z,onGrabButton:F,corner:"bottom-left"}),e(c,{left:_.endX-ye+Z,top:_.endY-ye+Z,onGrabButton:F,corner:"bottom-right"}),e("div",{style:{left:Math.max(0,_.endX-191),top:Math.max(0,_.endY+8),display:C?"flex":"none"},class:"editor__crop-btn-group"},e("button",{onClick:m=>{m.preventDefault(),f.current&&g({startX:0,startY:0,endX:f.current.width/P,endY:f.current.height/P}),w(!1)},class:"btn btn--default"},a.cancelButtonLabel),e("button",{onClick:m=>{m.preventDefault(),q(),w(!1)},class:"btn btn--primary"},a.confirmButtonLabel)))))}}const yo=()=>({name:"FeedbackScreenshot",setupOnce(){},createInput:({h:e,hooks:t,dialog:n,options:r})=>{const a=S.createElement("canvas");return{input:vo({h:e,hooks:t,imageBuffer:a,dialog:n,options:r}),value:async()=>{const o=await new Promise(l=>{a.toBlob(l,"image/png")});if(o)return{data:new Uint8Array(await o.arrayBuffer()),filename:"screenshot.png",contentType:"application/png"}}}}}),wo=Ar({getModalIntegration:()=>po,getScreenshotIntegration:()=>yo});function ya(){const e=ln();return i.jsx("div",{className:"relative h-screen font-['sans-serif']",children:i.jsxs("div",{className:"absolute top-1/2 left-1/2 w-full max-w-[520px] -translate-x-1/2 -translate-y-1/2 text-center leading-[1.4]",children:[i.jsxs("div",{className:"relative z-[-1] mx-auto mt-0 mb-5 h-[200px]",children:[i.jsx("h1",{className:"text-forceground absolute top-1/2 left-1/2 m-0 -translate-x-1/2 -translate-y-1/2 text-[236px] font-extralight uppercase",children:"Oops!"}),i.jsxs("h2",{className:"text-forceground bg-background absolute inset-x-0 bottom-0 m-auto inline-block px-[5px] pt-5 text-[28px] font-normal capitalize",children:[i.jsx("span",{className:"bg-background absolute -top-1 -right-1 -bottom-1 -left-1 z-10 blur-xl"}),"403 - Permission Denied"]})]}),i.jsx("p",{className:"mb-8 text-xl text-red-500",children:"Sorry, You don't have permission to access this page."}),i.jsx(we,{onClick:e,className:"mr-3",children:"Go Back"}),i.jsx(Ie,{prefetch:"intent",viewTransition:!0,to:"/system/admin/auditRecord/applyRole",children:i.jsx(we,{children:"Apply Permission"})})]})})}function Co({...e}){return i.jsx("nav",{"aria-label":"breadcrumb","data-slot":"breadcrumb",...e})}function So({className:e,...t}){return i.jsx("ol",{"data-slot":"breadcrumb-list",className:V("text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",e),...t})}function Ft({className:e,...t}){return i.jsx("li",{"data-slot":"breadcrumb-item",className:V("inline-flex items-center gap-1.5",e),...t})}function Dt({asChild:e,className:t,...n}){const r=e?bn:"a";return i.jsx(r,{"data-slot":"breadcrumb-link",className:V("hover:text-foreground transition-colors",t),...n})}function ko({className:e,...t}){return i.jsx("span",{"data-slot":"breadcrumb-page",role:"link","aria-disabled":"true","aria-current":"page",className:V("text-foreground font-normal",e),...t})}function Rt({children:e,className:t,...n}){return i.jsx("li",{"data-slot":"breadcrumb-separator",role:"presentation","aria-hidden":"true",className:V("[&>svg]:size-3.5",t),...n,children:e??i.jsx(Ht,{})})}const $t=e=>{if(!e)throw new Error("输入不能为空");if(typeof e!="string")throw new Error("输入必须为字符串类型");return e.toLowerCase().replace(/[-\s]/g,"_").replace(/_([a-z])/g,(t,n)=>n.toUpperCase())},jo=({showHome:e=!0,meta:t})=>{var d,c,h,s,f;const{breadcrumbs:n}=dn({meta:t}),{hasDashboard:r}=un(),{resources:a}=_n(),o=a[0],l=hn("/",a),u=n.map(({label:_,href:g},C)=>i.jsxs($e.Fragment,{children:[i.jsx(Ft,{children:g?i.jsx(Dt,{asChild:!0,className:"text-link hover:bg-transparent",children:i.jsx(lt,{href:g,children:K(`menus.${$t(_)}`,_)})}):i.jsx(ko,{children:K(`menus.${$t(_)}`,_)})}),C<n.length-1&&i.jsx(Rt,{})]},C));return i.jsx(Co,{children:i.jsxs(So,{children:[e||r||l.found?i.jsxs(i.Fragment,{children:[i.jsx(Ft,{children:i.jsx(Dt,{href:(d=o.list)==null?void 0:d.toString(),asChild:!0,title:((c=o==null?void 0:o.meta)==null?void 0:c.title)??o.name??"Dashboard",children:i.jsx(lt,{className:"hover:bg-transparent",href:(h=o.list)==null?void 0:h.toString(),title:((s=o==null?void 0:o.meta)==null?void 0:s.title)??o.name??"Dashboard",children:((f=o==null?void 0:o.meta)==null?void 0:f.icon)??i.jsx(wn,{className:"h-4 w-4"})})})}),i.jsx(Rt,{})]}):null,u]})})};function Eo(){const{user:e}=Pe("root")||{},{mutate:t}=fn(),{isMobile:n}=Ut();function r(){t()}return i.jsx(Be,{children:i.jsx(le,{children:i.jsxs(It,{children:[i.jsx(Pt,{asChild:!0,children:i.jsxs(de,{size:"lg",className:"data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",children:[i.jsxs(dt,{className:"h-8 w-8 rounded-lg",children:[i.jsx(ut,{src:(e==null?void 0:e.avatar)||"/images/avatar.jpg",alt:(e==null?void 0:e.name)||""}),i.jsx(_t,{className:"rounded-lg",children:ht((e==null?void 0:e.name)||"")||"?"})]}),i.jsxs("div",{className:"grid flex-1 text-left text-sm leading-tight",children:[i.jsx("span",{className:"truncate font-semibold capitalize",children:(e==null?void 0:e.name)||"unknown user"}),i.jsx("span",{className:"truncate text-xs",children:(e==null?void 0:e.email)||"..."})]}),i.jsx(Ot,{className:"ml-auto size-4"})]})}),i.jsxs(Bt,{className:"w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg",side:n?"bottom":"right",align:"end",sideOffset:4,children:[i.jsx(zt,{className:"p-0 font-normal",children:i.jsxs("div",{className:"flex items-center gap-2 px-1 py-1.5 text-left text-sm",children:[i.jsxs(dt,{className:"h-8 w-8 rounded-lg",children:[i.jsx(ut,{src:(e==null?void 0:e.avatar)||"/images/avatar.jpg",alt:(e==null?void 0:e.name)||""}),i.jsx(_t,{className:"rounded-lg",children:ht((e==null?void 0:e.name)||"")||"?"})]}),i.jsxs("div",{className:"grid flex-1 text-left text-sm leading-tight",children:[i.jsx("span",{className:"truncate font-semibold capitalize",children:(e==null?void 0:e.name)||"unknown user"}),i.jsx("span",{className:"truncate text-xs",children:(e==null?void 0:e.email)||"..."})]})]})}),i.jsx(Ve,{}),i.jsx(vn,{children:i.jsxs(Ae,{children:[i.jsx(In,{}),i.jsx(Ie,{prefetch:"intent",viewTransition:!0,to:"/system/admin/auditRecord/applyRole",children:K("menus.auditRecord/applyRole")})]})}),i.jsx(Ve,{}),i.jsxs(Ae,{onClick:r,children:[i.jsx(Pn,{}),i.jsx("span",{children:K("buttons.logout")})]})]})]})})})}function No(){const{menuItems:e,selectedKey:t,defaultOpenKeys:n}=mn(),r=pn(),a=o=>{var u,d,c,h,s,f;const l=[(u=o.list)==null?void 0:u.toString(),(d=o.create)==null?void 0:d.toString()];return r.id&&l.push((h=(c=o.edit)==null?void 0:c.toString())==null?void 0:h.replace(":id",r.id),(f=(s=o.show)==null?void 0:s.toString())==null?void 0:f.replace(":id",r.id)),l.filter(Boolean)};return e.map((o,l)=>{var u;return i.jsxs(Xt,{children:[i.jsx(Cn,{children:((u=o.meta)==null?void 0:u.label)||K(`menus.${o.name}`,o.name)}),i.jsx(Be,{children:o.children.map((d,c)=>{var f,_,g;const h=n.includes(d.key),s=((f=d.meta)==null?void 0:f.label)||K(`menus.${d.name}`,d.name);return i.jsx(Sn,{asChild:!0,defaultOpen:h,className:"group/collapsible",children:i.jsxs(le,{children:[i.jsx(kn,{asChild:!0,children:i.jsxs(de,{tooltip:s,children:[((_=d==null?void 0:d.meta)==null?void 0:_.icon)&&i.jsx(Bn,{name:d.meta.icon}),i.jsx("span",{className:"capitalize",children:s}),i.jsx(Ht,{className:"ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"})]})}),i.jsx(jn,{children:i.jsx(En,{children:(g=d.children)==null?void 0:g.map(C=>{var T,F;const w=a(C),x=w.includes(t)||w.some(R=>(R==null?void 0:R.endsWith(t))||(t==null?void 0:t.endsWith(R))),k=((T=C.meta)==null?void 0:T.label)||K(`menus.${C.name}`,C.name);return i.jsx(Nn,{children:i.jsx(Ln,{asChild:!0,isActive:x,className:V(x&&"bg-primary! text-primary-foreground!"),children:i.jsx(Ie,{prefetch:"intent",viewTransition:!0,to:((F=C.list)==null?void 0:F.toString())??"/#",children:i.jsx("span",{className:"capitalize",children:k})})})},C.key)})})})]})},c)})})]},l)})}function Lo(){const{isMobile:e}=Ut(),{user:t}=Pe("root")||{},{role:n,roles:r=[]}=t||{},a=ft.filter(d=>r.includes(d.value)),[o,l]=$e.useState(ft.find(d=>d.value===n)),u=$e.useCallback(async d=>{try{const c=new FormData;c.append("role",(d==null?void 0:d.value)||""),await fetch(`${zn}/permissions/switch`,{method:"POST",body:c}),l(d),location.reload()}catch(c){console.error(c)}},[]);return i.jsx(Be,{children:i.jsx(le,{children:i.jsxs(It,{children:[i.jsx(Pt,{asChild:!0,children:i.jsxs(de,{size:"lg",className:"data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",children:[i.jsx("div",{className:"bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 shrink-0 items-center justify-center rounded-lg",children:i.jsx(Un,{className:"size-4"})}),i.jsxs("div",{className:"grid flex-1 text-left text-sm leading-tight",children:[i.jsx("span",{className:"truncate font-semibold",children:"OSS Inc."}),i.jsx("span",{className:"truncate text-xs",children:(o==null?void 0:o.label)||"unknown"})]}),i.jsx(Ot,{className:"ml-auto"})]})}),i.jsxs(Bt,{className:"w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg",align:"start",side:e?"bottom":"right",sideOffset:4,children:[i.jsx(zt,{className:"text-muted-foreground text-xs",children:"roles"}),a.map((d,c)=>i.jsxs(Ae,{onClick:()=>u(d),className:"gap-2 p-2",disabled:d.value===(o==null?void 0:o.value),children:[i.jsx("div",{className:"flex size-6 items-center justify-center rounded-sm border",children:i.jsx(d.icon,{className:"size-4 shrink-0"})}),d.label,i.jsxs(yn,{children:["⌘",c+1]})]},d.value)),i.jsx(Ve,{}),i.jsxs(Ae,{className:"gap-2 p-2",children:[i.jsx("div",{className:"bg-background flex size-6 items-center justify-center rounded-md border",children:i.jsx(Xn,{className:"size-4"})}),i.jsx("div",{className:"text-muted-foreground font-medium",children:i.jsx(Ie,{prefetch:"intent",viewTransition:!0,to:"/system/admin/auditRecord/applyRole",children:"Apply More Roles"})})]})]})]})})})}function Mo({theme:e,setTheme:t}){const n=()=>{const r=e&&e===xe.Theme.DARK?xe.Theme.LIGHT:xe.Theme.DARK;t(r),document.documentElement.classList.remove(e||xe.Theme.LIGHT),document.documentElement.classList.add(r)};return i.jsxs("div",{className:"w-full cursor-pointer px-0 py-2 select-none",onClick:n,children:[i.jsx(qn,{size:16,className:"absolute scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"}),i.jsx(Gn,{size:16,className:"absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"}),i.jsx("span",{children:" "})]})}const To=[{title:"API Docs",url:"/api-docs",icon:Wn},{title:"Service Health Check",url:"https://stats.uptimerobot.com/XtZEMRaY1Y",icon:Zn}];function Fo(){const[e,t]=xe.useTheme(),n=$e.useRef(null);return On(()=>{if(!n.current)return;wo({autoInject:!1,colorScheme:e}).attachTo(n.current)}),i.jsx(Xt,{className:"mt-auto opacity-80",children:i.jsx(Mn,{children:i.jsxs(Be,{children:[To.map((r,a)=>i.jsx(le,{children:i.jsx(de,{asChild:!0,size:"sm",children:i.jsxs("a",{href:r.url,target:"_blank",rel:"noreferrer",children:[i.jsx(r.icon,{className:V(r.title==="Service Health Check"&&"animate-pulse text-green-500")}),i.jsx("span",{children:K(`menusSecondary.${r.title}`,r.title)})]})})},a)),i.jsx(le,{children:i.jsx(de,{asChild:!0,size:"sm",children:i.jsxs("div",{ref:n,className:"cursor-pointer",children:[i.jsx(Vn,{className:"text-yellow-500"}),i.jsx("span",{children:K("menusSecondary.Report a Bug","Report a Bug")})]})})},"sentry-feedback"),i.jsx(le,{children:i.jsx(de,{asChild:!0,size:"sm",children:i.jsx("div",{className:"cursor-pointer",children:i.jsx(Mo,{theme:e,setTheme:t})})})},"theme-switch")]})})})}function Do({...e}){return i.jsxs(Yt,{collapsible:"icon",...e,children:[i.jsx(Tn,{children:i.jsx(Lo,{})}),i.jsxs(Fn,{children:[i.jsx(No,{}),i.jsx(Fo,{})]}),i.jsx(Dn,{children:i.jsx(Eo,{})}),i.jsx(Rn,{})]})}const Ro=()=>i.jsx(we,{variant:"ghost",size:"icon",onClick:()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()},children:i.jsx(or,{})});function $o(){const[e,t]=Qe(),{locale:n}=Pe("root"),{changeLocale:r,getLocale:a}=gn(),o=xn()?a():n;return i.jsx(we,{variant:"ghost",size:"icon",type:"submit",onClick:async()=>{const l=o==="zh"?"en":"zh";await r(l),e.set("locale",l),t(e,{replace:!0})},children:i.jsx(ar,{className:V("transition-all",o==="en"&&"scale-x-[-1]")})})}function Ao(){const[e,t]=Qe(),n=At(),{query:r}=Yn.useKBar(),a=n[n.length-1],o=a.handle,l=i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"flex h-8 cursor-pointer items-center gap-2 rounded-full border px-2 text-sm opacity-50",onClick:()=>r.toggle(),children:[i.jsx(cr,{className:"size-4"}),i.jsx("span",{children:"Search..."}),i.jsx(rr,{className:"size-4 w-auto rounded-full px-1",children:"⌘K"})]}),i.jsx($o,{}),i.jsx(Ro,{})]}),{uiTools:u,uiFilter:d}=o||{};if(!u&&!d)return i.jsx("div",{className:"flex items-center gap-1",children:l});function c(f,_){_?e.set(f,"1"):e.delete(f),t(e,{replace:!0})}const h=typeof u=="function"?u(a,n):u,s=!!e.get("filter");return i.jsxs("div",{className:"flex items-center gap-1",children:[l,d&&i.jsx(we,{variant:"ghost",size:"icon",className:V(s&&"text-green-500"),onClick:()=>c("filter",!s),children:s?i.jsx(ir,{}):i.jsx(sr,{})}),i.jsx(Gt,{orientation:"vertical",className:"h-4"}),h]})}function Ho(e){const[t]=Qe(),n=At(),r=n[n.length-1],a=r.handle,{uiFilter:o}=a||{};if(!o)return null;const l=!!t.get("filter");return i.jsx(Yt,{collapsible:"none",className:V("sticky top-0 flex h-svh w-0 border-l transition-all",l&&"w-(--sidebar-width)!"),...e,children:typeof o=="function"?o(r,n):o})}function wa({children:e}){const{sidebarClose:t}=Pe("root");return i.jsxs($n,{open:!t||t!=="true",children:[i.jsx(Do,{}),i.jsxs(An,{className:"max-w-[100vw] group-has-data-[collapsible=icon]/sidebar-wrapper:max-w-[calc(100vw-var(--sidebar-width-icon))] group-has-data-[state=expanded]/sidebar-wrapper:max-w-[calc(100vw-var(--sidebar-width))]",children:[i.jsxs("header",{className:"bg-background sticky top-0 z-10 flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12",children:[i.jsxs("div",{className:"flex items-center gap-2 px-4",children:[i.jsx(Hn,{className:"-ml-1"}),i.jsx(Gt,{orientation:"vertical",className:"mr-2 h-2!"}),i.jsx(jo,{})]}),i.jsx("div",{className:"ml-auto px-3",children:i.jsx(Ao,{})})]}),i.jsx("div",{className:"flex max-w-full flex-1 flex-col gap-4 p-4 pt-0 transition-[max-width] duration-200 ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:max-w-[calc(100vw-var(--sidebar-width-icon))] group-data-[collapsible=offcanvas]/sidebar-wrapper:max-w-[100vw]",children:e||i.jsx(lr,{})})]}),i.jsx(Ho,{})]})}export{ya as P,wa as S};
