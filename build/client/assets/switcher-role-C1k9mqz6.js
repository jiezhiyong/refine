import{r as J,j as s,V as _n}from"./index-jG6TLAuK.js";import{c as I,a as W,S as hn,B as Se}from"./button-nJ3DiPmc.js";import{L as At,b as nt,o as $e,n as Bt}from"./components-L3uqpAeb.js";import{x as fn,n as pn,p as mn,y as gn,M as bn,B as xn,D as vn,S as Xe,t as yn,E as wn,F as kn}from"./500-DznNHTcq.js";import{d as Rt,S as Ht}from"./checkbox-DJYn4jr2.js";import{L as _t,F as Cn,b as Sn,D as $t,c as It,d as zt,e as Pt,f as Ve,g as jn,h as de,i as En}from"./index-dhnn1sud.js";import{H as Mn,c as Ln,l as Nn,b as ye,w as Tn}from"./index-BVjGJyoY.js";import{B as Fn}from"./badge-DIbh675r.js";import{S as Dn}from"./index-Cuy4oVjc.js";import{b as Ut,i as An,d as Ie,C as Bn,e as ue,j as Rn,f as _e,k as Hn,m as $n,n as In,o as zn,S as Xt,p as Pn,q as Un,r as Xn,c as Yn,u as Yt,B as On,s as qn,a as Gn,l as Vn,t as Wn,P as Zn}from"./sidebar-BXujW_xy.js";import{i as Kn}from"./isBrowser-C0tq15AE.js";import{h as Jn,g as Ot,m as rt,v as ht,l as Te,q as Qn,x as er,G as tr,o as nr}from"./node-B7-pBh_n.js";import{A as ft,a as pt,b as mt}from"./avatar-7s-Yg_xM.js";import{G as rr}from"./gallery-vertical-end-BA4ENofB.js";function or(e,t={},n=rt()){const{message:r,name:a,email:o,url:l,source:d,associatedEventId:u,tags:c}=e,h={contexts:{feedback:Jn({contact_email:o,name:a,message:r,url:l,source:d,associated_event_id:u})},type:"feedback",level:"info",tags:c},i=n&&n.getClient()||Ot();return i&&i.emit("beforeSendFeedback",h,t),n.captureEvent(h,t)}const V=tr,C=V.document,we=V.navigator,qt="Report a Bug",ar="Cancel",sr="Send Bug Report",ir="Confirm",cr="Report a Bug",lr="your.email@example.org",dr="Email",ur="What's the bug? What did you expect?",_r="Description",hr="Your Name",fr="Name",pr="Thank you for your report!",mr="(required)",gr="Add a screenshot",br="Remove screenshot",xr="widget",vr="api",yr=5e3,wr=(e,t={includeReplay:!0})=>{if(!e.message)throw new Error("Unable to submit feedback with empty message");const n=Ot();if(!n)throw new Error("No client setup, cannot send feedback.");e.tags&&Object.keys(e.tags).length&&rt().setTags(e.tags);const r=or({source:vr,url:nr(),...e},t);return new Promise((a,o)=>{const l=setTimeout(()=>o("Unable to determine if Feedback was correctly sent."),5e3),d=n.on("afterSendEvent",(u,c)=>{if(u.event_id===r)return clearTimeout(l),d(),c&&typeof c.statusCode=="number"&&c.statusCode>=200&&c.statusCode<300?a(r):c&&typeof c.statusCode=="number"&&c.statusCode===0?o("Unable to send Feedback. This is because of network issues, or because you are using an ad-blocker."):c&&typeof c.statusCode=="number"&&c.statusCode===403?o("Unable to send Feedback. This could be because this domain is not in your list of allowed domains."):o("Unable to send Feedback. This could be because of network issues, or because you are using an ad-blocker")})})},Fe=typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__;function kr(){return!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(we.userAgent)||/Macintosh/i.test(we.userAgent)&&we.maxTouchPoints&&we.maxTouchPoints>1||!isSecureContext)}function Me(e,t){return{...e,...t,tags:{...e.tags,...t.tags},onFormOpen:()=>{t.onFormOpen&&t.onFormOpen(),e.onFormOpen&&e.onFormOpen()},onFormClose:()=>{t.onFormClose&&t.onFormClose(),e.onFormClose&&e.onFormClose()},onSubmitSuccess:n=>{t.onSubmitSuccess&&t.onSubmitSuccess(n),e.onSubmitSuccess&&e.onSubmitSuccess(n)},onSubmitError:n=>{t.onSubmitError&&t.onSubmitError(n),e.onSubmitError&&e.onSubmitError(n)},onFormSubmitted:()=>{t.onFormSubmitted&&t.onFormSubmitted(),e.onFormSubmitted&&e.onFormSubmitted()},themeDark:{...e.themeDark,...t.themeDark},themeLight:{...e.themeLight,...t.themeLight}}}function Cr(e){const t=C.createElement("style");return t.textContent=`
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
`,e&&t.setAttribute("nonce",e),t}function P(e,t){return Object.entries(t).forEach(([n,r])=>{e.setAttributeNS(null,n,r)}),e}const le=20,Sr="http://www.w3.org/2000/svg";function jr(){const e=d=>V.document.createElementNS(Sr,d),t=P(e("svg"),{width:`${le}`,height:`${le}`,viewBox:`0 0 ${le} ${le}`,fill:"var(--actor-color, var(--foreground))"}),n=P(e("g"),{clipPath:"url(#clip0_57_80)"}),r=P(e("path"),{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M15.6622 15H12.3997C12.2129 14.9959 12.031 14.9396 11.8747 14.8375L8.04965 12.2H7.49956V19.1C7.4875 19.3348 7.3888 19.5568 7.22256 19.723C7.05632 19.8892 6.83435 19.9879 6.59956 20H2.04956C1.80193 19.9968 1.56535 19.8969 1.39023 19.7218C1.21511 19.5467 1.1153 19.3101 1.11206 19.0625V12.2H0.949652C0.824431 12.2017 0.700142 12.1783 0.584123 12.1311C0.468104 12.084 0.362708 12.014 0.274155 11.9255C0.185602 11.8369 0.115689 11.7315 0.0685419 11.6155C0.0213952 11.4995 -0.00202913 11.3752 -0.00034808 11.25V3.75C-0.00900498 3.62067 0.0092504 3.49095 0.0532651 3.36904C0.0972798 3.24712 0.166097 3.13566 0.255372 3.04168C0.344646 2.94771 0.452437 2.87327 0.571937 2.82307C0.691437 2.77286 0.82005 2.74798 0.949652 2.75H8.04965L11.8747 0.1625C12.031 0.0603649 12.2129 0.00407221 12.3997 0H15.6622C15.9098 0.00323746 16.1464 0.103049 16.3215 0.278167C16.4966 0.453286 16.5964 0.689866 16.5997 0.9375V3.25269C17.3969 3.42959 18.1345 3.83026 18.7211 4.41679C19.5322 5.22788 19.9878 6.32796 19.9878 7.47502C19.9878 8.62209 19.5322 9.72217 18.7211 10.5333C18.1345 11.1198 17.3969 11.5205 16.5997 11.6974V14.0125C16.6047 14.1393 16.5842 14.2659 16.5395 14.3847C16.4948 14.5035 16.4268 14.6121 16.3394 14.7042C16.252 14.7962 16.147 14.8698 16.0307 14.9206C15.9144 14.9714 15.7891 14.9984 15.6622 15ZM1.89695 10.325H1.88715V4.625H8.33715C8.52423 4.62301 8.70666 4.56654 8.86215 4.4625L12.6872 1.875H14.7247V13.125H12.6872L8.86215 10.4875C8.70666 10.3835 8.52423 10.327 8.33715 10.325H2.20217C2.15205 10.3167 2.10102 10.3125 2.04956 10.3125C1.9981 10.3125 1.94708 10.3167 1.89695 10.325ZM2.98706 12.2V18.1625H5.66206V12.2H2.98706ZM16.5997 9.93612V5.01393C16.6536 5.02355 16.7072 5.03495 16.7605 5.04814C17.1202 5.13709 17.4556 5.30487 17.7425 5.53934C18.0293 5.77381 18.2605 6.06912 18.4192 6.40389C18.578 6.73866 18.6603 7.10452 18.6603 7.47502C18.6603 7.84552 18.578 8.21139 18.4192 8.54616C18.2605 8.88093 18.0293 9.17624 17.7425 9.41071C17.4556 9.64518 17.1202 9.81296 16.7605 9.90191C16.7072 9.91509 16.6536 9.9265 16.5997 9.93612Z"});t.appendChild(n).appendChild(r);const a=e("defs"),o=P(e("clipPath"),{id:"clip0_57_80"}),l=P(e("rect"),{width:`${le}`,height:`${le}`,fill:"white"});return o.appendChild(l),a.appendChild(o),t.appendChild(a).appendChild(o).appendChild(l),t}function Er({triggerLabel:e,triggerAriaLabel:t,shadow:n,styleNonce:r}){const a=C.createElement("button");if(a.type="button",a.className="widget__actor",a.ariaHidden="false",a.ariaLabel=t||e||qt,a.appendChild(jr()),e){const l=C.createElement("span");l.appendChild(C.createTextNode(e)),a.appendChild(l)}const o=Cr(r);return{el:a,appendToDom(){n.appendChild(o),n.appendChild(a)},removeFromDom(){n.removeChild(a),n.removeChild(o)},show(){a.ariaHidden="false"},hide(){a.ariaHidden="true"}}}const Gt="rgba(88, 74, 192, 1)",Mr={foreground:"#2b2233",background:"#ffffff",accentForeground:"white",accentBackground:Gt,successColor:"#268d75",errorColor:"#df3338",border:"1.5px solid rgba(41, 35, 47, 0.13)",boxShadow:"0px 4px 24px 0px rgba(43, 34, 51, 0.12)",outline:"1px auto var(--accent-background)",interactiveFilter:"brightness(95%)"},gt={foreground:"#ebe6ef",background:"#29232f",accentForeground:"white",accentBackground:Gt,successColor:"#2da98c",errorColor:"#f55459",border:"1.5px solid rgba(235, 230, 239, 0.15)",boxShadow:"0px 4px 24px 0px rgba(43, 34, 51, 0.12)",outline:"1px auto var(--accent-background)",interactiveFilter:"brightness(150%)"};function bt(e){return`
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
  `}function Lr({colorScheme:e,themeDark:t,themeLight:n,styleNonce:r}){const a=C.createElement("style");return a.textContent=`
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

  ${bt(e==="dark"?{...gt,...t}:{...Mr,...n})}
}

${e==="system"?`
@media (prefers-color-scheme: dark) {
  :host {
    ${bt({...gt,...t})}
  }
}`:""}
}
`,r&&a.setAttribute("nonce",r),a}const Nr=({lazyLoadIntegration:e,getModalIntegration:t,getScreenshotIntegration:n})=>({id:a="sentry-feedback",autoInject:o=!0,showBranding:l=!0,isEmailRequired:d=!1,isNameRequired:u=!1,showEmail:c=!0,showName:h=!0,enableScreenshot:i=!0,useSentryUser:f={email:"email",name:"username"},tags:_,styleNonce:g,scriptNonce:E,colorScheme:w="system",themeLight:x={},themeDark:k={},addScreenshotButtonLabel:F=gr,cancelButtonLabel:D=ar,confirmButtonLabel:O=ir,emailLabel:U=dr,emailPlaceholder:X=lr,formTitle:G=cr,isRequiredLabel:p=mr,messageLabel:m=_r,messagePlaceholder:y=ur,nameLabel:v=fr,namePlaceholder:T=hr,removeScreenshotButtonLabel:q=br,submitButtonLabel:N=sr,successMessageText:R=pr,triggerLabel:ie=qt,triggerAriaLabel:H="",onFormOpen:Y,onFormClose:ce,onSubmitSuccess:ee,onSubmitError:ge,onFormSubmitted:dn}={})=>{const be={id:a,autoInject:o,showBranding:l,isEmailRequired:d,isNameRequired:u,showEmail:c,showName:h,enableScreenshot:i,useSentryUser:f,tags:_,styleNonce:g,scriptNonce:E,colorScheme:w,themeDark:k,themeLight:x,triggerLabel:ie,triggerAriaLabel:H,cancelButtonLabel:D,submitButtonLabel:N,confirmButtonLabel:O,formTitle:G,emailLabel:U,emailPlaceholder:X,messageLabel:m,messagePlaceholder:y,nameLabel:v,namePlaceholder:T,successMessageText:R,isRequiredLabel:p,addScreenshotButtonLabel:F,removeScreenshotButtonLabel:q,onFormClose:ce,onFormOpen:Y,onSubmitError:ge,onSubmitSuccess:ee,onFormSubmitted:dn};let te=null,xe=[];const lt=M=>{if(!te){const A=C.createElement("div");A.id=String(M.id),C.body.appendChild(A),te=A.attachShadow({mode:"open"}),te.appendChild(Lr(M))}return te},dt=async M=>{const A=M.enableScreenshot&&kr();let Z,z;try{Z=(t?t():await e("feedbackModalIntegration",E))(),ht(Z)}catch{throw Fe&&Te.error("[Feedback] Error when trying to load feedback integrations. Try using `feedbackSyncIntegration` in your `Sentry.init`."),new Error("[Feedback] Missing feedback modal integration!")}try{const ne=A?n?n():await e("feedbackScreenshotIntegration",E):void 0;ne&&(z=ne(),ht(z))}catch{Fe&&Te.error("[Feedback] Missing feedback screenshot integration. Proceeding without screenshots.")}const B=Z.createDialog({options:{...M,onFormClose:()=>{B&&B.close(),M.onFormClose&&M.onFormClose()},onFormSubmitted:()=>{B&&B.close(),M.onFormSubmitted&&M.onFormSubmitted()}},screenshotIntegration:z,sendFeedback:wr,shadow:lt(M)});return B},ut=(M,A={})=>{const Z=Me(be,A),z=typeof M=="string"?C.querySelector(M):typeof M.addEventListener=="function"?M:null;if(!z)throw Fe&&Te.error("[Feedback] Unable to attach to target element"),new Error("Unable to attach to target element");let B=null;const ne=async()=>{B||(B=await dt({...Z,onFormSubmitted:()=>{B&&B.removeFromDom(),Z.onFormSubmitted&&Z.onFormSubmitted()}})),B.appendToDom(),B.open()};z.addEventListener("click",ne);const Ue=()=>{xe=xe.filter(un=>un!==Ue),B&&B.removeFromDom(),B=null,z.removeEventListener("click",ne)};return xe.push(Ue),Ue},Pe=(M={})=>{const A=Me(be,M),Z=lt(A),z=Er({triggerLabel:A.triggerLabel,triggerAriaLabel:A.triggerAriaLabel,shadow:Z,styleNonce:g});return ut(z.el,{...A,onFormOpen(){z.hide()},onFormClose(){z.show()},onFormSubmitted(){z.show()}}),z};return{name:"Feedback",setupOnce(){!Kn()||!be.autoInject||(C.readyState==="loading"?C.addEventListener("DOMContentLoaded",()=>Pe().appendToDom()):Pe().appendToDom())},attachTo:ut,createWidget(M={}){const A=Pe(Me(be,M));return A.appendToDom(),A},async createForm(M={}){return dt(Me(be,M))},remove(){te&&(te.parentElement&&te.parentElement.remove(),te=null),xe.forEach(M=>M()),xe=[]}}};var ze,j,Vt,ae,xt,Wt,We,Ce={},ot=[],Tr=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,at=Array.isArray;function oe(e,t){for(var n in t)e[n]=t[n];return e}function Zt(e){var t=e.parentNode;t&&t.removeChild(e)}function b(e,t,n){var r,a,o,l={};for(o in t)o=="key"?r=t[o]:o=="ref"?a=t[o]:l[o]=t[o];if(arguments.length>2&&(l.children=arguments.length>3?ze.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)l[o]===void 0&&(l[o]=e.defaultProps[o]);return De(e,l,r,a,null)}function De(e,t,n,r,a){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:a??++Vt,__i:-1,__u:0};return a==null&&j.vnode!=null&&j.vnode(o),o}function je(e){return e.children}function Ae(e,t){this.props=e,this.context=t}function pe(e,t){if(t==null)return e.__?pe(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?pe(e):null}function Fr(e,t,n){var r,a=e.__v,o=a.__e,l=e.__P;if(l)return(r=oe({},a)).__v=a.__v+1,j.vnode&&j.vnode(r),st(l,r,a,e.__n,l.ownerSVGElement!==void 0,32&a.__u?[o]:null,t,o??pe(a),!!(32&a.__u),n),r.__.__k[r.__i]=r,r.__d=void 0,r.__e!=o&&Kt(r),r}function Kt(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Kt(e)}}function vt(e){(!e.__d&&(e.__d=!0)&&ae.push(e)&&!He.__r++||xt!==j.debounceRendering)&&((xt=j.debounceRendering)||Wt)(He)}function He(){var e,t,n,r=[],a=[];for(ae.sort(We);e=ae.shift();)e.__d&&(n=ae.length,t=Fr(e,r,a)||t,n===0||ae.length>n?(Ze(r,t,a),a.length=r.length=0,t=void 0,ae.sort(We)):t&&j.__c&&j.__c(t,ot));t&&Ze(r,t,a),He.__r=0}function Jt(e,t,n,r,a,o,l,d,u,c,h){var i,f,_,g,E,w=r&&r.__k||ot,x=t.length;for(n.__d=u,Dr(n,t,w),u=n.__d,i=0;i<x;i++)(_=n.__k[i])!=null&&typeof _!="boolean"&&typeof _!="function"&&(f=_.__i===-1?Ce:w[_.__i]||Ce,_.__i=i,st(e,_,f,a,o,l,d,u,c,h),g=_.__e,_.ref&&f.ref!=_.ref&&(f.ref&&it(f.ref,null,_),h.push(_.ref,_.__c||g,_)),E==null&&g!=null&&(E=g),65536&_.__u||f.__k===_.__k?u=Qt(_,u,e):typeof _.type=="function"&&_.__d!==void 0?u=_.__d:g&&(u=g.nextSibling),_.__d=void 0,_.__u&=-196609);n.__d=u,n.__e=E}function Dr(e,t,n){var r,a,o,l,d,u=t.length,c=n.length,h=c,i=0;for(e.__k=[],r=0;r<u;r++)(a=e.__k[r]=(a=t[r])==null||typeof a=="boolean"||typeof a=="function"?null:typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?De(null,a,null,null,a):at(a)?De(je,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?De(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):a)!=null?(a.__=e,a.__b=e.__b+1,d=Ar(a,n,l=r+i,h),a.__i=d,o=null,d!==-1&&(h--,(o=n[d])&&(o.__u|=131072)),o==null||o.__v===null?(d==-1&&i--,typeof a.type!="function"&&(a.__u|=65536)):d!==l&&(d===l+1?i++:d>l?h>u-l?i+=d-l:i--:i=d<l&&d==l-1?d-l:0,d!==r+i&&(a.__u|=65536))):(o=n[r])&&o.key==null&&o.__e&&(o.__e==e.__d&&(e.__d=pe(o)),Ke(o,o,!1),n[r]=null,h--);if(h)for(r=0;r<c;r++)(o=n[r])!=null&&!(131072&o.__u)&&(o.__e==e.__d&&(e.__d=pe(o)),Ke(o,o))}function Qt(e,t,n){var r,a;if(typeof e.type=="function"){for(r=e.__k,a=0;r&&a<r.length;a++)r[a]&&(r[a].__=e,t=Qt(r[a],t,n));return t}e.__e!=t&&(n.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType===8);return t}function Ar(e,t,n,r){var a=e.key,o=e.type,l=n-1,d=n+1,u=t[n];if(u===null||u&&a==u.key&&o===u.type)return n;if(r>(u!=null&&!(131072&u.__u)?1:0))for(;l>=0||d<t.length;){if(l>=0){if((u=t[l])&&!(131072&u.__u)&&a==u.key&&o===u.type)return l;l--}if(d<t.length){if((u=t[d])&&!(131072&u.__u)&&a==u.key&&o===u.type)return d;d++}}return-1}function yt(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Tr.test(t)?n:n+"px"}function Le(e,t,n,r,a){var o;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||yt(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||yt(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/(PointerCapture)$|Capture$/i,"$1")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r?n.u=r.u:(n.u=Date.now(),e.addEventListener(t,o?kt:wt,o)):e.removeEventListener(t,o?kt:wt,o);else{if(a)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t!=="role"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,n))}}function wt(e){if(this.l){var t=this.l[e.type+!1];if(e.t){if(e.t<=t.u)return}else e.t=Date.now();return t(j.event?j.event(e):e)}}function kt(e){if(this.l)return this.l[e.type+!0](j.event?j.event(e):e)}function st(e,t,n,r,a,o,l,d,u,c){var h,i,f,_,g,E,w,x,k,F,D,O,U,X,G,p=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(u=!!(32&n.__u),o=[d=t.__e=n.__e]),(h=j.__b)&&h(t);e:if(typeof p=="function")try{if(x=t.props,k=(h=p.contextType)&&r[h.__c],F=h?k?k.props.value:h.__:r,n.__c?w=(i=t.__c=n.__c).__=i.__E:("prototype"in p&&p.prototype.render?t.__c=i=new p(x,F):(t.__c=i=new Ae(x,F),i.constructor=p,i.render=Rr),k&&k.sub(i),i.props=x,i.state||(i.state={}),i.context=F,i.__n=r,f=i.__d=!0,i.__h=[],i._sb=[]),i.__s==null&&(i.__s=i.state),p.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=oe({},i.__s)),oe(i.__s,p.getDerivedStateFromProps(x,i.__s))),_=i.props,g=i.state,i.__v=t,f)p.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(p.getDerivedStateFromProps==null&&x!==_&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(x,F),!i.__e&&(i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(x,i.__s,F)===!1||t.__v===n.__v)){for(t.__v!==n.__v&&(i.props=x,i.state=i.__s,i.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(m){m&&(m.__=t)}),D=0;D<i._sb.length;D++)i.__h.push(i._sb[D]);i._sb=[],i.__h.length&&l.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(x,i.__s,F),i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(_,g,E)})}if(i.context=F,i.props=x,i.__P=e,i.__e=!1,O=j.__r,U=0,"prototype"in p&&p.prototype.render){for(i.state=i.__s,i.__d=!1,O&&O(t),h=i.render(i.props,i.state,i.context),X=0;X<i._sb.length;X++)i.__h.push(i._sb[X]);i._sb=[]}else do i.__d=!1,O&&O(t),h=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++U<25);i.state=i.__s,i.getChildContext!=null&&(r=oe(oe({},r),i.getChildContext())),f||i.getSnapshotBeforeUpdate==null||(E=i.getSnapshotBeforeUpdate(_,g)),Jt(e,at(G=h!=null&&h.type===je&&h.key==null?h.props.children:h)?G:[G],t,n,r,a,o,l,d,u,c),i.base=t.__e,t.__u&=-161,i.__h.length&&l.push(i),w&&(i.__E=i.__=null)}catch(m){t.__v=null,u||o!=null?(t.__e=d,t.__u|=u?160:32,o[o.indexOf(d)]=null):(t.__e=n.__e,t.__k=n.__k),j.__e(m,t,n)}else o==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Br(n.__e,t,n,r,a,o,l,u,c);(h=j.diffed)&&h(t)}function Ze(e,t,n){for(var r=0;r<n.length;r++)it(n[r],n[++r],n[++r]);j.__c&&j.__c(t,e),e.some(function(a){try{e=a.__h,a.__h=[],e.some(function(o){o.call(a)})}catch(o){j.__e(o,a.__v)}})}function Br(e,t,n,r,a,o,l,d,u){var c,h,i,f,_,g,E,w=n.props,x=t.props,k=t.type;if(k==="svg"&&(a=!0),o!=null){for(c=0;c<o.length;c++)if((_=o[c])&&"setAttribute"in _==!!k&&(k?_.localName===k:_.nodeType===3)){e=_,o[c]=null;break}}if(e==null){if(k===null)return document.createTextNode(x);e=a?document.createElementNS("http://www.w3.org/2000/svg",k):document.createElement(k,x.is&&x),o=null,d=!1}if(k===null)w===x||d&&e.data===x||(e.data=x);else{if(o=o&&ze.call(e.childNodes),w=n.props||Ce,!d&&o!=null)for(w={},c=0;c<e.attributes.length;c++)w[(_=e.attributes[c]).name]=_.value;for(c in w)_=w[c],c=="children"||(c=="dangerouslySetInnerHTML"?i=_:c==="key"||c in x||Le(e,c,null,_,a));for(c in x)_=x[c],c=="children"?f=_:c=="dangerouslySetInnerHTML"?h=_:c=="value"?g=_:c=="checked"?E=_:c==="key"||d&&typeof _!="function"||w[c]===_||Le(e,c,_,w[c],a);if(h)d||i&&(h.__html===i.__html||h.__html===e.innerHTML)||(e.innerHTML=h.__html),t.__k=[];else if(i&&(e.innerHTML=""),Jt(e,at(f)?f:[f],t,n,r,a&&k!=="foreignObject",o,l,o?o[0]:n.__k&&pe(n,0),d,u),o!=null)for(c=o.length;c--;)o[c]!=null&&Zt(o[c]);d||(c="value",g!==void 0&&(g!==e[c]||k==="progress"&&!g||k==="option"&&g!==w[c])&&Le(e,c,g,w[c],!1),c="checked",E!==void 0&&E!==e[c]&&Le(e,c,E,w[c],!1))}return e}function it(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){j.__e(r,n)}}function Ke(e,t,n){var r,a;if(j.unmount&&j.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||it(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){j.__e(o,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(a=0;a<r.length;a++)r[a]&&Ke(r[a],t,n||typeof e.type!="function");n||e.__e==null||Zt(e.__e),e.__=e.__e=e.__d=void 0}function Rr(e,t,n){return this.constructor(e,n)}function Hr(e,t,n){var r,a,o,l;j.__&&j.__(e,t),a=(r=!1)?null:t.__k,o=[],l=[],st(t,e=t.__k=b(je,null,[e]),a||Ce,Ce,t.ownerSVGElement!==void 0,a?null:t.firstChild?ze.call(t.childNodes):null,o,a?a.__e:t.firstChild,r,l),e.__d=void 0,Ze(o,e,l)}ze=ot.slice,j={__e:function(e,t,n,r){for(var a,o,l;t=t.__;)if((a=t.__c)&&!a.__)try{if((o=a.constructor)&&o.getDerivedStateFromError!=null&&(a.setState(o.getDerivedStateFromError(e)),l=a.__d),a.componentDidCatch!=null&&(a.componentDidCatch(e,r||{}),l=a.__d),l)return a.__E=a}catch(d){e=d}throw e}},Vt=0,Ae.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=oe({},this.state),typeof e=="function"&&(e=e(oe({},n),this.props)),e&&oe(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),vt(this))},Ae.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),vt(this))},Ae.prototype.render=je,ae=[],Wt=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,We=function(e,t){return e.__v.__b-t.__v.__b},He.__r=0;var Q,S,Ye,Ct,me=0,en=[],Be=[],L=j,St=L.__b,jt=L.__r,Et=L.diffed,Mt=L.__c,Lt=L.unmount,Nt=L.__;function se(e,t){L.__h&&L.__h(S,e,me||t),me=0;var n=S.__H||(S.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:Be}),n.__[e]}function he(e){return me=1,tn(rn,e)}function tn(e,t,n){var r=se(Q++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):rn(void 0,t),function(d){var u=r.__N?r.__N[0]:r.__[0],c=r.t(u,d);u!==c&&(r.__N=[c,r.__[1]],r.__c.setState({}))}],r.__c=S,!S.u)){var a=function(d,u,c){if(!r.__c.__H)return!0;var h=r.__c.__H.__.filter(function(f){return!!f.__c});if(h.every(function(f){return!f.__N}))return!o||o.call(this,d,u,c);var i=!1;return h.forEach(function(f){if(f.__N){var _=f.__[0];f.__=f.__N,f.__N=void 0,_!==f.__[0]&&(i=!0)}}),!(!i&&r.__c.props===d)&&(!o||o.call(this,d,u,c))};S.u=!0;var o=S.shouldComponentUpdate,l=S.componentWillUpdate;S.componentWillUpdate=function(d,u,c){if(this.__e){var h=o;o=void 0,a(d,u,c),o=h}l&&l.call(this,d,u,c)},S.shouldComponentUpdate=a}return r.__N||r.__}function $r(e,t){var n=se(Q++,3);!L.__s&&ct(n.__H,t)&&(n.__=e,n.i=t,S.__H.__h.push(n))}function nn(e,t){var n=se(Q++,4);!L.__s&&ct(n.__H,t)&&(n.__=e,n.i=t,S.__h.push(n))}function Ir(e){return me=5,Ee(function(){return{current:e}},[])}function zr(e,t,n){me=6,nn(function(){return typeof e=="function"?(e(t()),function(){return e(null)}):e?(e.current=t(),function(){return e.current=null}):void 0},n==null?n:n.concat(e))}function Ee(e,t){var n=se(Q++,7);return ct(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function fe(e,t){return me=8,Ee(function(){return e},t)}function Pr(e){var t=S.context[e.__c],n=se(Q++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(S)),t.props.value):e.__}function Ur(e,t){L.useDebugValue&&L.useDebugValue(t?t(e):e)}function Xr(e){var t=se(Q++,10),n=he();return t.__=e,S.componentDidCatch||(S.componentDidCatch=function(r,a){t.__&&t.__(r,a),n[1](r)}),[n[0],function(){n[1](void 0)}]}function Yr(){var e=se(Q++,11);if(!e.__){for(var t=S.__v;t!==null&&!t.__m&&t.__!==null;)t=t.__;var n=t.__m||(t.__m=[0,0]);e.__="P"+n[0]+"-"+n[1]++}return e.__}function Or(){for(var e;e=en.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Re),e.__H.__h.forEach(Je),e.__H.__h=[]}catch(t){e.__H.__h=[],L.__e(t,e.__v)}}L.__b=function(e){S=null,St&&St(e)},L.__=function(e,t){t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Nt&&Nt(e,t)},L.__r=function(e){jt&&jt(e),Q=0;var t=(S=e.__c).__H;t&&(Ye===S?(t.__h=[],S.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=Be,n.__N=n.i=void 0})):(t.__h.forEach(Re),t.__h.forEach(Je),t.__h=[],Q=0)),Ye=S},L.diffed=function(e){Et&&Et(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(en.push(t)!==1&&Ct===L.requestAnimationFrame||((Ct=L.requestAnimationFrame)||qr)(Or)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==Be&&(n.__=n.__V),n.i=void 0,n.__V=Be})),Ye=S=null},L.__c=function(e,t){t.some(function(n){try{n.__h.forEach(Re),n.__h=n.__h.filter(function(r){return!r.__||Je(r)})}catch(r){t.some(function(a){a.__h&&(a.__h=[])}),t=[],L.__e(r,n.__v)}}),Mt&&Mt(e,t)},L.unmount=function(e){Lt&&Lt(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{Re(r)}catch(a){t=a}}),n.__H=void 0,t&&L.__e(t,n.__v))};var Tt=typeof requestAnimationFrame=="function";function qr(e){var t,n=function(){clearTimeout(r),Tt&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);Tt&&(t=requestAnimationFrame(n))}function Re(e){var t=S,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),S=t}function Je(e){var t=S;e.__c=e.__(),S=t}function ct(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function rn(e,t){return typeof t=="function"?t(e):t}const Gr={__proto__:null,useCallback:fe,useContext:Pr,useDebugValue:Ur,useEffect:$r,useErrorBoundary:Xr,useId:Yr,useImperativeHandle:zr,useLayoutEffect:nn,useMemo:Ee,useReducer:tn,useRef:Ir,useState:he},Vr="http://www.w3.org/2000/svg";function Wr(){const e=r=>C.createElementNS(Vr,r),t=P(e("svg"),{width:"32",height:"30",viewBox:"0 0 72 66",fill:"inherit"}),n=P(e("path"),{transform:"translate(11, 11)",d:"M29,2.26a4.67,4.67,0,0,0-8,0L14.42,13.53A32.21,32.21,0,0,1,32.17,40.19H27.55A27.68,27.68,0,0,0,12.09,17.47L6,28a15.92,15.92,0,0,1,9.23,12.17H4.62A.76.76,0,0,1,4,39.06l2.94-5a10.74,10.74,0,0,0-3.36-1.9l-2.91,5a4.54,4.54,0,0,0,1.69,6.24A4.66,4.66,0,0,0,4.62,44H19.15a19.4,19.4,0,0,0-8-17.31l2.31-4A23.87,23.87,0,0,1,23.76,44H36.07a35.88,35.88,0,0,0-16.41-31.8l4.67-8a.77.77,0,0,1,1.05-.27c.53.29,20.29,34.77,20.66,35.17a.76.76,0,0,1-.68,1.13H40.6q.09,1.91,0,3.81h4.78A4.59,4.59,0,0,0,50,39.43a4.49,4.49,0,0,0-.62-2.28Z"});return t.appendChild(n),t}function Zr({options:e}){const t=Ee(()=>({__html:Wr().outerHTML}),[]);return b("h2",{class:"dialog__header"},b("span",{class:"dialog__title"},e.formTitle),e.showBranding?b("a",{class:"brand-link",target:"_blank",href:"https://sentry.io/welcome/",title:"Powered by Sentry",rel:"noopener noreferrer",dangerouslySetInnerHTML:t}):null)}function Kr(e,t){const n=[];return t.isNameRequired&&!e.name&&n.push(t.nameLabel),t.isEmailRequired&&!e.email&&n.push(t.emailLabel),e.message||n.push(t.messageLabel),n}function Oe(e,t){const n=e.get(t);return typeof n=="string"?n.trim():""}function Jr({options:e,defaultEmail:t,defaultName:n,onFormClose:r,onSubmit:a,onSubmitSuccess:o,onSubmitError:l,showEmail:d,showName:u,screenshotInput:c}){const{tags:h,addScreenshotButtonLabel:i,removeScreenshotButtonLabel:f,cancelButtonLabel:_,emailLabel:g,emailPlaceholder:E,isEmailRequired:w,isNameRequired:x,messageLabel:k,messagePlaceholder:F,nameLabel:D,namePlaceholder:O,submitButtonLabel:U,isRequiredLabel:X}=e,[G,p]=he(null),[m,y]=he(!1),v=c&&c.input,[T,q]=he(null),N=fe(H=>{q(H),y(!1)},[]),R=fe(H=>{const Y=Kr(H,{emailLabel:g,isEmailRequired:w,isNameRequired:x,messageLabel:k,nameLabel:D});return Y.length>0?p(`Please enter in the following required fields: ${Y.join(", ")}`):p(null),Y.length===0},[g,w,x,k,D]),ie=fe(async H=>{try{if(H.preventDefault(),!(H.target instanceof HTMLFormElement))return;const Y=new FormData(H.target),ce=await(c&&m?c.value():void 0),ee={name:Oe(Y,"name"),email:Oe(Y,"email"),message:Oe(Y,"message"),attachments:ce?[ce]:void 0};if(!R(ee))return;try{await a({name:ee.name,email:ee.email,message:ee.message,source:xr,tags:h},{attachments:ee.attachments}),o(ee)}catch(ge){Fe&&Te.error(ge),p(ge),l(ge)}}catch{}},[c&&m,o,l]);return b("form",{class:"form",onSubmit:ie},v&&m?b(v,{onError:N}):null,b("div",{class:"form__right","data-sentry-feedback":!0},b("div",{class:"form__top"},G?b("div",{class:"form__error-container"},G):null,u?b("label",{for:"name",class:"form__label"},b(qe,{label:D,isRequiredLabel:X,isRequired:x}),b("input",{class:"form__input",defaultValue:n,id:"name",name:"name",placeholder:O,required:x,type:"text"})):b("input",{"aria-hidden":!0,value:n,name:"name",type:"hidden"}),d?b("label",{for:"email",class:"form__label"},b(qe,{label:g,isRequiredLabel:X,isRequired:w}),b("input",{class:"form__input",defaultValue:t,id:"email",name:"email",placeholder:E,required:w,type:"email"})):b("input",{"aria-hidden":!0,value:t,name:"email",type:"hidden"}),b("label",{for:"message",class:"form__label"},b(qe,{label:k,isRequiredLabel:X,isRequired:!0}),b("textarea",{autoFocus:!0,class:"form__input form__input--textarea",id:"message",name:"message",placeholder:F,required:!0,rows:5})),v?b("label",{for:"screenshot",class:"form__label"},b("button",{class:"btn btn--default",type:"button",onClick:()=>{q(null),y(H=>!H)}},m?f:i),T?b("div",{class:"form__error-container"},T.message):null):null),b("div",{class:"btn-group"},b("button",{class:"btn btn--primary",type:"submit"},U),b("button",{class:"btn btn--default",type:"button",onClick:r},_))))}function qe({label:e,isRequired:t,isRequiredLabel:n}){return b("span",{class:"form__label__text"},e,t&&b("span",{class:"form__label__text--required"},n))}const Ne=16,Ft=17,Qr="http://www.w3.org/2000/svg";function eo(){const e=u=>V.document.createElementNS(Qr,u),t=P(e("svg"),{width:`${Ne}`,height:`${Ft}`,viewBox:`0 0 ${Ne} ${Ft}`,fill:"inherit"}),n=P(e("g"),{clipPath:"url(#clip0_57_156)"}),r=P(e("path"),{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.55544 15.1518C4.87103 16.0308 6.41775 16.5 8 16.5C10.1217 16.5 12.1566 15.6571 13.6569 14.1569C15.1571 12.6566 16 10.6217 16 8.5C16 6.91775 15.5308 5.37103 14.6518 4.05544C13.7727 2.73985 12.5233 1.71447 11.0615 1.10897C9.59966 0.503466 7.99113 0.34504 6.43928 0.653721C4.88743 0.962403 3.46197 1.72433 2.34315 2.84315C1.22433 3.96197 0.462403 5.38743 0.153721 6.93928C-0.15496 8.49113 0.00346625 10.0997 0.608967 11.5615C1.21447 13.0233 2.23985 14.2727 3.55544 15.1518ZM4.40546 3.1204C5.46945 2.40946 6.72036 2.03 8 2.03C9.71595 2.03 11.3616 2.71166 12.575 3.92502C13.7883 5.13838 14.47 6.78405 14.47 8.5C14.47 9.77965 14.0905 11.0306 13.3796 12.0945C12.6687 13.1585 11.6582 13.9878 10.476 14.4775C9.29373 14.9672 7.99283 15.0953 6.73777 14.8457C5.48271 14.596 4.32987 13.9798 3.42502 13.075C2.52018 12.1701 1.90397 11.0173 1.65432 9.76224C1.40468 8.50718 1.5328 7.20628 2.0225 6.02404C2.5122 4.8418 3.34148 3.83133 4.40546 3.1204Z"}),a=P(e("path"),{d:"M6.68775 12.4297C6.78586 12.4745 6.89218 12.4984 7 12.5C7.11275 12.4955 7.22315 12.4664 7.32337 12.4145C7.4236 12.3627 7.51121 12.2894 7.58 12.2L12 5.63999C12.0848 5.47724 12.1071 5.28902 12.0625 5.11098C12.0178 4.93294 11.9095 4.77744 11.7579 4.67392C11.6064 4.57041 11.4221 4.52608 11.24 4.54931C11.0579 4.57254 10.8907 4.66173 10.77 4.79999L6.88 10.57L5.13 8.56999C5.06508 8.49566 4.98613 8.43488 4.89768 8.39111C4.80922 8.34735 4.713 8.32148 4.61453 8.31498C4.51605 8.30847 4.41727 8.32147 4.32382 8.35322C4.23038 8.38497 4.14413 8.43484 4.07 8.49999C3.92511 8.63217 3.83692 8.81523 3.82387 9.01092C3.81083 9.2066 3.87393 9.39976 4 9.54999L6.43 12.24C6.50187 12.3204 6.58964 12.385 6.68775 12.4297Z"});t.appendChild(n).append(a,r);const o=e("defs"),l=P(e("clipPath"),{id:"clip0_57_156"}),d=P(e("rect"),{width:`${Ne}`,height:`${Ne}`,fill:"white",transform:"translate(0 0.5)"});return l.appendChild(d),o.appendChild(l),t.appendChild(o).appendChild(l).appendChild(d),t}function to({open:e,onFormSubmitted:t,...n}){const r=n.options,a=Ee(()=>({__html:eo().outerHTML}),[]),[o,l]=he(null),d=fe(()=>{o&&(clearTimeout(o),l(null)),t()},[o]),u=fe(c=>{n.onSubmitSuccess(c),l(setTimeout(()=>{t(),l(null)},yr))},[t]);return b(je,null,o?b("div",{class:"success__position",onClick:d},b("div",{class:"success__content"},r.successMessageText,b("span",{class:"success__icon",dangerouslySetInnerHTML:a}))):b("dialog",{class:"dialog",onClick:r.onFormClose,open:e},b("div",{class:"dialog__position"},b("div",{class:"dialog__content",onClick:c=>{c.stopPropagation()}},b(Zr,{options:r}),b(Jr,{...n,onSubmitSuccess:u})))))}const no=`
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

`,ro=`
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
`,oo=`
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
`,ao=`
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
`,so=`
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
`;function io(e){const t=C.createElement("style");return t.textContent=`
:host {
  --dialog-inset: var(--inset);
}

${no}
${ro}
${oo}
${ao}
${so}
`,e&&t.setAttribute("nonce",e),t}function co(){const e=rt().getUser(),t=Qn().getUser(),n=er().getUser();return e&&Object.keys(e).length?e:t&&Object.keys(t).length?t:n}const lo=()=>({name:"FeedbackModal",setupOnce(){},createDialog:({options:e,screenshotIntegration:t,sendFeedback:n,shadow:r})=>{const a=r,o=e.useSentryUser,l=co(),d=C.createElement("div"),u=io(e.styleNonce);let c="";const h={get el(){return d},appendToDom(){!a.contains(u)&&!a.contains(d)&&(a.appendChild(u),a.appendChild(d))},removeFromDom(){a.removeChild(d),a.removeChild(u),C.body.style.overflow=c},open(){f(!0),e.onFormOpen&&e.onFormOpen(),c=C.body.style.overflow,C.body.style.overflow="hidden"},close(){f(!1),C.body.style.overflow=c}},i=t&&t.createInput({h:b,hooks:Gr,dialog:h,options:e}),f=_=>{Hr(b(to,{options:e,screenshotInput:i,showName:e.showName||e.isNameRequired,showEmail:e.showEmail||e.isEmailRequired,defaultName:o&&l&&l[o.name]||"",defaultEmail:o&&l&&l[o.email]||"",onFormClose:()=>{f(!1),e.onFormClose&&e.onFormClose()},onSubmit:n,onSubmitSuccess:g=>{f(!1),e.onSubmitSuccess&&e.onSubmitSuccess(g)},onSubmitError:g=>{e.onSubmitError&&e.onSubmitError(g)},onFormSubmitted:()=>{e.onFormSubmitted&&e.onFormSubmitted()},open:_}),d)};return h}});function uo({h:e}){return function({top:n,left:r,corner:a,onGrabButton:o}){return e("button",{class:`editor__crop-corner editor__crop-corner--${a} `,style:{top:n,left:r},onMouseDown:l=>{l.preventDefault(),o(l,a)},onClick:l=>{l.preventDefault()}})}}function _o(e){const t=C.createElement("style"),n="#1A141F",r="#302735";return t.textContent=`
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
`,e&&t.setAttribute("nonce",e),t}function ho({hooks:e}){return function({onBeforeScreenshot:n,onScreenshot:r,onAfterScreenshot:a,onError:o}){e.useEffect(()=>{(async()=>{n();const d=await we.mediaDevices.getDisplayMedia({video:{width:V.innerWidth*V.devicePixelRatio,height:V.innerHeight*V.devicePixelRatio},audio:!1,monitorTypeSurfaces:"exclude",preferCurrentTab:!0,selfBrowserSurface:"include",surfaceSwitching:"exclude"}),u=C.createElement("video");await new Promise((c,h)=>{u.srcObject=d,u.onloadedmetadata=()=>{r(u),d.getTracks().forEach(i=>i.stop()),c()},u.play().catch(h)}),a()})().catch(o)},[])}}const ke=30,K=3,re=ke+K,$=V.devicePixelRatio,ve=e=>({x:Math.min(e.startX,e.endX),y:Math.min(e.startY,e.endY),width:Math.abs(e.startX-e.endX),height:Math.abs(e.startY-e.endY)}),Ge=e=>{const t=e.clientHeight,n=e.clientWidth,r=e.width/e.height;let a=t*r,o=t;a>n&&(a=n,o=n/r);const l=(n-a)/2,d=(t-o)/2;return{startX:l,startY:d,endX:a+l,endY:o+d}};function fo({h:e,hooks:t,imageBuffer:n,dialog:r,options:a}){const o=ho({hooks:t});return function({onError:d}){const u=t.useMemo(()=>({__html:_o(a.styleNonce).innerText}),[]),c=uo({h:e}),h=t.useRef(null),i=t.useRef(null),f=t.useRef(null),[_,g]=t.useState({startX:0,startY:0,endX:0,endY:0}),[E,w]=t.useState(!1),[x,k]=t.useState(!1);t.useEffect(()=>{V.addEventListener("resize",F,!1)},[]);function F(){const p=f.current,m=ve(Ge(n));if(p){p.width=m.width*$,p.height=m.height*$,p.style.width=`${m.width}px`,p.style.height=`${m.height}px`;const v=p.getContext("2d");v&&v.scale($,$)}const y=i.current;y&&(y.style.width=`${m.width}px`,y.style.height=`${m.height}px`),g({startX:0,startY:0,endX:m.width,endY:m.height})}t.useEffect(()=>{const p=f.current;if(!p)return;const m=p.getContext("2d");if(!m)return;const y=ve(Ge(n)),v=ve(_);m.clearRect(0,0,y.width,y.height),m.fillStyle="rgba(0, 0, 0, 0.5)",m.fillRect(0,0,y.width,y.height),m.clearRect(v.x,v.y,v.width,v.height),m.strokeStyle="#ffffff",m.lineWidth=3,m.strokeRect(v.x+1,v.y+1,v.width-2,v.height-2),m.strokeStyle="#000000",m.lineWidth=1,m.strokeRect(v.x+3,v.y+3,v.width-6,v.height-6)},[_]);function D(p,m){w(!1),k(!0);const y=O(m),v=()=>{C.removeEventListener("mousemove",y),C.removeEventListener("mouseup",v),w(!0),k(!1)};C.addEventListener("mouseup",v),C.addEventListener("mousemove",y)}const O=t.useCallback(p=>function(m){if(!f.current)return;const y=f.current,v=y.getBoundingClientRect(),T=m.clientX-v.x,q=m.clientY-v.y;switch(p){case"top-left":g(N=>({...N,startX:Math.min(Math.max(0,T),N.endX-re),startY:Math.min(Math.max(0,q),N.endY-re)}));break;case"top-right":g(N=>({...N,endX:Math.max(Math.min(T,y.width/$),N.startX+re),startY:Math.min(Math.max(0,q),N.endY-re)}));break;case"bottom-left":g(N=>({...N,startX:Math.min(Math.max(0,T),N.endX-re),endY:Math.max(Math.min(q,y.height/$),N.startY+re)}));break;case"bottom-right":g(N=>({...N,endX:Math.max(Math.min(T,y.width/$),N.startX+re),endY:Math.max(Math.min(q,y.height/$),N.startY+re)}));break}},[]),U=t.useRef({initialX:0,initialY:0});function X(p){if(x)return;U.current={initialX:p.clientX,initialY:p.clientY};const m=v=>{const T=f.current;if(!T)return;const q=v.clientX-U.current.initialX,N=v.clientY-U.current.initialY;g(R=>{const ie=Math.max(0,Math.min(R.startX+q,T.width/$-(R.endX-R.startX))),H=Math.max(0,Math.min(R.startY+N,T.height/$-(R.endY-R.startY))),Y=ie+(R.endX-R.startX),ce=H+(R.endY-R.startY);return U.current.initialX=v.clientX,U.current.initialY=v.clientY,{startX:ie,startY:H,endX:Y,endY:ce}})},y=()=>{C.removeEventListener("mousemove",m),C.removeEventListener("mouseup",y)};C.addEventListener("mousemove",m),C.addEventListener("mouseup",y)}function G(){const p=C.createElement("canvas"),m=ve(Ge(n)),y=ve(_);p.width=y.width*$,p.height=y.height*$;const v=p.getContext("2d");v&&n&&v.drawImage(n,y.x/m.width*n.width,y.y/m.height*n.height,y.width/m.width*n.width,y.height/m.height*n.height,0,0,p.width,p.height);const T=n.getContext("2d");T&&(T.clearRect(0,0,n.width,n.height),n.width=p.width,n.height=p.height,n.style.width=`${y.width}px`,n.style.height=`${y.height}px`,T.drawImage(p,0,0),F())}return o({onBeforeScreenshot:t.useCallback(()=>{r.el.style.display="none"},[]),onScreenshot:t.useCallback(p=>{const m=n.getContext("2d");if(!m)throw new Error("Could not get canvas context");n.width=p.videoWidth,n.height=p.videoHeight,n.style.width="100%",n.style.height="100%",m.drawImage(p,0,0)},[n]),onAfterScreenshot:t.useCallback(()=>{r.el.style.display="block";const p=h.current;p&&p.appendChild(n),F()},[]),onError:t.useCallback(p=>{r.el.style.display="block",d(p)},[])}),e("div",{class:"editor"},e("style",{nonce:a.styleNonce,dangerouslySetInnerHTML:u}),e("div",{class:"editor__canvas-container",ref:h},e("div",{class:"editor__crop-container",style:{position:"absolute",zIndex:1},ref:i},e("canvas",{onMouseDown:X,style:{position:"absolute",cursor:E?"move":"auto"},ref:f}),e(c,{left:_.startX-K,top:_.startY-K,onGrabButton:D,corner:"top-left"}),e(c,{left:_.endX-ke+K,top:_.startY-K,onGrabButton:D,corner:"top-right"}),e(c,{left:_.startX-K,top:_.endY-ke+K,onGrabButton:D,corner:"bottom-left"}),e(c,{left:_.endX-ke+K,top:_.endY-ke+K,onGrabButton:D,corner:"bottom-right"}),e("div",{style:{left:Math.max(0,_.endX-191),top:Math.max(0,_.endY+8),display:E?"flex":"none"},class:"editor__crop-btn-group"},e("button",{onClick:p=>{p.preventDefault(),f.current&&g({startX:0,startY:0,endX:f.current.width/$,endY:f.current.height/$}),w(!1)},class:"btn btn--default"},a.cancelButtonLabel),e("button",{onClick:p=>{p.preventDefault(),G(),w(!1)},class:"btn btn--primary"},a.confirmButtonLabel)))))}}const po=()=>({name:"FeedbackScreenshot",setupOnce(){},createInput:({h:e,hooks:t,dialog:n,options:r})=>{const a=C.createElement("canvas");return{input:fo({h:e,hooks:t,imageBuffer:a,dialog:n,options:r}),value:async()=>{const o=await new Promise(l=>{a.toBlob(l,"image/png")});if(o)return{data:new Uint8Array(await o.arrayBuffer()),filename:"screenshot.png",contentType:"application/png"}}}}}),mo=Nr({getModalIntegration:()=>lo,getScreenshotIntegration:()=>po});/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const go=I("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bo=I("ArrowLeftToLine",[["path",{d:"M3 19V5",key:"rwsyhb"}],["path",{d:"m13 6-6 6 6 6",key:"1yhaz7"}],["path",{d:"M7 12h14",key:"uoisry"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xo=I("AudioLines",[["path",{d:"M2 10v3",key:"1fnikh"}],["path",{d:"M6 6v11",key:"11sgs0"}],["path",{d:"M10 3v18",key:"yhl04a"}],["path",{d:"M14 8v7",key:"3a1oy3"}],["path",{d:"M18 5v13",key:"123xd1"}],["path",{d:"M22 10v3",key:"154ddg"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vo=I("Baby",[["path",{d:"M9 12h.01",key:"157uk2"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"5yv0yz"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yo=I("BadgeCheck",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wo=I("BicepsFlexed",[["path",{d:"M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1",key:"1pmlyh"}],["path",{d:"M15 14a5 5 0 0 0-7.584 2",key:"5rb254"}],["path",{d:"M9.964 6.825C8.019 7.977 9.5 13 8 15",key:"kbvsx9"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ko=I("Bug",[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",key:"xs1cw7"}],["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4",key:"k3fwyw"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const on=I("ChevronsUpDown",[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Co=I("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const So=I("Fullscreen",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["rect",{width:"10",height:"8",x:"7",y:"8",rx:"1",key:"vys8me"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jo=I("Languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eo=I("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mo=I("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lo=I("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),Dt=[{label:"Administrator",value:"administrator",icon:wo},{label:"Editor",value:"editor",icon:xo},{label:"Guest",value:"guest",icon:vo}],an=J.forwardRef(({...e},t)=>s.jsx("nav",{ref:t,"aria-label":"breadcrumb",...e}));an.displayName="Breadcrumb";const sn=J.forwardRef(({className:e,...t},n)=>s.jsx("ol",{ref:n,className:W("text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",e),...t}));sn.displayName="BreadcrumbList";const Qe=J.forwardRef(({className:e,...t},n)=>s.jsx("li",{ref:n,className:W("inline-flex items-center gap-1.5",e),...t}));Qe.displayName="BreadcrumbItem";const et=J.forwardRef(({asChild:e,className:t,...n},r)=>{const a=e?hn:"a";return s.jsx(a,{ref:r,className:W("hover:text-foreground transition-colors",t),...n})});et.displayName="BreadcrumbLink";const cn=J.forwardRef(({className:e,...t},n)=>s.jsx("span",{ref:n,role:"link","aria-disabled":"true","aria-current":"page",className:W("text-foreground font-normal",e),...t}));cn.displayName="BreadcrumbPage";const tt=({children:e,className:t,...n})=>s.jsx("li",{role:"presentation","aria-hidden":"true",className:W("[&>svg]:h-3.5 [&>svg]:w-3.5",t),...n,children:e??s.jsx(Rt,{})});tt.displayName="BreadcrumbSeparator";const No=({showHome:e=!0,meta:t})=>{var u,c,h,i,f;const{breadcrumbs:n}=fn({meta:t}),{hasDashboard:r}=pn(),{resources:a}=mn(),o=a[0],l=gn("/",a),d=n.map(({label:_,href:g},E)=>s.jsxs(J.Fragment,{children:[s.jsx(Qe,{children:g?s.jsx(et,{asChild:!0,className:"text-link hover:bg-transparent",children:s.jsx(_t,{href:g,children:_})}):s.jsx(cn,{children:_})}),E<n.length-1&&s.jsx(tt,{})]},E));return s.jsx(an,{children:s.jsxs(sn,{children:[e||r||l.found?s.jsxs(s.Fragment,{children:[s.jsx(Qe,{children:s.jsx(et,{href:(u=o.list)==null?void 0:u.toString(),asChild:!0,title:((c=o==null?void 0:o.meta)==null?void 0:c.title)??o.name??"Dashboard",children:s.jsx(_t,{className:"hover:bg-transparent",href:(h=o.list)==null?void 0:h.toString(),title:((i=o==null?void 0:o.meta)==null?void 0:i.title)??o.name??"Dashboard",children:((f=o==null?void 0:o.meta)==null?void 0:f.icon)??s.jsx(Mn,{className:"h-4 w-4"})})})}),s.jsx(tt,{})]}):null,d]})})},ln=({...e})=>{const t=bn();return s.jsx(Se,{icon:s.jsx(bo,{}),onClick:()=>t(),...e,children:"Go Back"})};ln.displayName="BackButton";function To(){const{menuItems:e,selectedKey:t,defaultOpenKeys:n}=xn(),r=vn(),a=o=>{var d,u,c,h,i,f;const l=[(d=o.list)==null?void 0:d.toString(),(u=o.create)==null?void 0:u.toString()];return r.id&&l.push((h=(c=o.edit)==null?void 0:c.toString())==null?void 0:h.replace(":id",r.id),(f=(i=o.show)==null?void 0:i.toString())==null?void 0:f.replace(":id",r.id)),l.filter(Boolean)};return e.map((o,l)=>s.jsx(Xe,{resource:o.name,action:"list",children:s.jsxs(Ut,{children:[s.jsx(An,{children:o.name}),s.jsx(Ie,{children:o.children.map((d,u)=>{var i,f;const c=n.includes(d.key),h=(i=d==null?void 0:d.meta)==null?void 0:i.icon;return s.jsx(Xe,{resource:d.name,action:"list",children:s.jsx(Bn,{asChild:!0,defaultOpen:c,className:"group/collapsible",children:s.jsxs(ue,{children:[s.jsx(Rn,{asChild:!0,children:s.jsxs(_e,{tooltip:d.name,children:[h&&s.jsx(h,{}),s.jsx("span",{className:"capitalize",children:d.name}),s.jsx(Rt,{className:"ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"})]})}),s.jsx(Hn,{children:s.jsx($n,{children:(f=d.children)==null?void 0:f.map(_=>{var x;const{meta:g}=_,E=a(_),w=E.includes(t)||E.some(k=>(k==null?void 0:k.endsWith(t))||(t==null?void 0:t.endsWith(k)));return s.jsx(Xe,{resource:_.name,action:"list",children:s.jsx(In,{children:s.jsx(zn,{asChild:!0,isActive:w,className:W(w&&"bg-primary! text-primary-foreground!"),children:s.jsx(At,{prefetch:"intent",viewTransition:!0,to:((x=_.list)==null?void 0:x.toString())??"/#",children:s.jsx("span",{className:"capitalize",children:(g==null?void 0:g.label)||_.name})})})})},_.key)})})})]})},u)},d.key)})})]},l)},o.key))}function na(){return s.jsx("div",{className:"relative h-screen font-['sans-serif']",children:s.jsxs("div",{className:"absolute top-1/2 left-1/2 w-full max-w-[520px] -translate-x-1/2 -translate-y-1/2 text-center leading-[1.4]",children:[s.jsxs("div",{className:"relative z-[-1] mx-auto mt-0 mb-5 h-[200px]",children:[s.jsx("h1",{className:"text-forceground absolute top-1/2 left-1/2 m-0 -translate-x-1/2 -translate-y-1/2 text-[236px] font-extralight uppercase",children:"Oops!"}),s.jsxs("h2",{className:"text-forceground bg-background absolute inset-x-0 bottom-0 m-auto inline-block px-[5px] pt-5 text-[28px] font-normal capitalize",children:[s.jsx("span",{className:"bg-background absolute -top-1 -right-1 -bottom-1 -left-1 z-10 blur-xl"}),"403 - Permission Denied"]})]}),s.jsx("p",{className:"mb-8 text-xl text-red-500",children:"Sorry, You don't have permission to access this page."}),s.jsx(At,{prefetch:"intent",viewTransition:!0,to:"/api/auth/logout",children:s.jsx(Se,{children:"Back To Login"})})]})})}const Fo=()=>s.jsx(Se,{variant:"ghost",size:"icon",onClick:()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()},children:s.jsx(So,{})});function Do(){const[e,t]=nt(),{locale:n}=$e("root"),{changeLocale:r,getLocale:a}=yn(),o=Ln()?a():n;return s.jsx(Se,{variant:"ghost",size:"icon",type:"submit",onClick:async()=>{const l=o==="zh"?"en":"zh";await r(l),e.set("locale",l),t(e,{replace:!0})},children:s.jsx(jo,{className:W("transition-all",o==="en"&&"scale-x-[-1]")})})}function Ao(){const[e,t]=nt(),n=Bt(),{query:r}=Nn.useKBar(),a=n[n.length-1],o=a.handle,l=s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"flex h-8 cursor-pointer items-center gap-2 rounded-full border px-2 text-sm opacity-50",onClick:()=>r.toggle(),children:[s.jsx(Dn,{className:"size-4"}),s.jsx("span",{children:"Search..."}),s.jsx(Fn,{className:"size-4 w-auto rounded-full px-1",children:"⌘K"})]}),s.jsx(ln,{variant:"ghost",size:"icon"}),s.jsx(Do,{}),s.jsx(Fo,{})]}),{uiTools:d,uiFilter:u}=o||{};if(!d&&!u)return s.jsx("div",{className:"flex items-center gap-1",children:l});function c(f,_){_?e.set(f,"1"):e.delete(f),t(e,{replace:!0})}const h=typeof d=="function"?d(a,n):d,i=!!e.get("filter");return s.jsxs("div",{className:"flex items-center gap-1",children:[l,u&&s.jsx(Se,{variant:"ghost",size:"icon",className:W(i&&"text-green-500"),onClick:()=>c("filter",!i),children:i?s.jsx(Cn,{}):s.jsx(Sn,{})}),s.jsx(Ht,{orientation:"vertical",className:"h-4"}),h]})}function Bo({...e}){const[t]=nt(),n=Bt(),r=n[n.length-1],a=r.handle,{uiFilter:o}=a||{};if(!o)return null;const l=!!t.get("filter");return s.jsx(Xt,{collapsible:"none",className:W("sticky top-0 flex h-svh w-0 border-l transition-all",l&&"w-(--sidebar-width)"),...e,children:typeof o=="function"?o(r,n):o})}function ra(){const{sidebarIsClose:e}=$e("root");return s.jsxs(Pn,{open:!e||e!=="true",children:[s.jsx(zo,{}),s.jsxs(Un,{children:[s.jsxs("header",{className:"bg-background sticky top-0 z-10 flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12",children:[s.jsxs("div",{className:"flex items-center gap-2 px-4",children:[s.jsx(Xn,{className:"-ml-1"}),s.jsx(Ht,{orientation:"vertical",className:"mr-2 h-4"}),s.jsx(No,{})]}),s.jsx("div",{className:"ml-auto px-3",children:s.jsx(Ao,{})})]}),s.jsx("div",{className:"flex max-w-[calc(100vw-var(--sidebar-width))] flex-1 flex-col gap-4 p-4 pt-0 transition-[max-width] duration-200 ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:max-w-[calc(100vw-var(--sidebar-width-icon))] group-data-[collapsible=offcanvas]/sidebar-wrapper:max-w-[100vw]",children:s.jsx(_n,{})})]}),s.jsx(Bo,{})]})}function Ro({theme:e,setTheme:t}){const n=()=>{const r=e&&e===ye.Theme.DARK?ye.Theme.LIGHT:ye.Theme.DARK;t(r),document.documentElement.classList.remove(e||ye.Theme.LIGHT),document.documentElement.classList.add(r)};return s.jsxs("div",{className:"w-full cursor-pointer px-0 py-2 select-none",onClick:n,children:[s.jsx(Lo,{size:16,className:"absolute scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"}),s.jsx(Mo,{size:16,className:"absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"}),s.jsx("span",{children:" "})]})}const Ho=[{title:"Service Health Check",url:"/playground/dashboard/health",icon:go}];function $o(){const[e,t]=ye.useTheme(),n=J.useRef(null);return wn(()=>{if(!n.current)return;mo({autoInject:!1,colorScheme:e}).attachTo(n.current)}),s.jsx(Ut,{className:"mt-auto opacity-80",children:s.jsx(Yn,{children:s.jsxs(Ie,{children:[Ho.map(r=>s.jsx(ue,{children:s.jsx(_e,{asChild:!0,size:"sm",children:s.jsxs("a",{href:r.url,children:[s.jsx(r.icon,{className:W(r.title==="Service Health Check"&&"animate-pulse text-green-500")}),s.jsx("span",{children:r.title})]})})},r.title)),s.jsx(ue,{children:s.jsx(_e,{asChild:!0,size:"sm",children:s.jsxs("div",{ref:n,className:"cursor-pointer",children:[s.jsx(ko,{className:"text-yellow-500"}),s.jsx("span",{children:"Report a Bug"})]})})},"sentry-feedback"),s.jsx(ue,{children:s.jsx(_e,{asChild:!0,size:"sm",children:s.jsx("div",{className:"cursor-pointer",children:s.jsx(Ro,{theme:e,setTheme:t})})})},"theme-switch")]})})})}function Io(){var a,o;const{user:e}=$e("root")||{},{mutate:t}=kn(),{isMobile:n}=Yt();function r(){t()}return s.jsx(Ie,{children:s.jsx(ue,{children:s.jsxs($t,{children:[s.jsx(It,{asChild:!0,children:s.jsxs(_e,{size:"lg",className:"data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",children:[s.jsxs(ft,{className:"h-8 w-8 rounded-lg",children:[s.jsx(pt,{src:(e==null?void 0:e.avatar)||"/avatar.jpg",alt:(e==null?void 0:e.name)||""}),s.jsx(mt,{className:"rounded-lg",children:((a=e==null?void 0:e.name)==null?void 0:a.charAt(0))||"?"})]}),s.jsxs("div",{className:"grid flex-1 text-left text-sm leading-tight",children:[s.jsx("span",{className:"truncate font-semibold capitalize",children:(e==null?void 0:e.name)||"unknown user"}),s.jsx("span",{className:"truncate text-xs",children:(e==null?void 0:e.email)||"..."})]}),s.jsx(on,{className:"ml-auto size-4"})]})}),s.jsxs(zt,{className:"w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg",side:n?"bottom":"right",align:"end",sideOffset:4,children:[s.jsx(Pt,{className:"p-0 font-normal",children:s.jsxs("div",{className:"flex items-center gap-2 px-1 py-1.5 text-left text-sm",children:[s.jsxs(ft,{className:"h-8 w-8 rounded-lg",children:[s.jsx(pt,{src:(e==null?void 0:e.avatar)||"/avatar.jpg",alt:(e==null?void 0:e.name)||""}),s.jsx(mt,{className:"rounded-lg",children:((o=e==null?void 0:e.name)==null?void 0:o.charAt(0))||"?"})]}),s.jsxs("div",{className:"grid flex-1 text-left text-sm leading-tight",children:[s.jsx("span",{className:"truncate font-semibold capitalize",children:(e==null?void 0:e.name)||"unknown user"}),s.jsx("span",{className:"truncate text-xs",children:(e==null?void 0:e.email)||"..."})]})]})}),s.jsx(Ve,{}),s.jsxs(jn,{children:[s.jsxs(de,{children:[s.jsx(yo,{}),"Account"]}),s.jsxs(de,{children:[s.jsx(Co,{}),"Billing"]}),s.jsxs(de,{children:[s.jsx(On,{}),"Notifications"]})]}),s.jsx(Ve,{}),s.jsxs(de,{onClick:r,children:[s.jsx(Eo,{}),s.jsx("span",{children:"Log out"})]})]})]})})})}function zo({...e}){return s.jsxs(Xt,{collapsible:"icon",...e,children:[s.jsx(qn,{children:s.jsx(Po,{})}),s.jsxs(Gn,{children:[s.jsx(To,{}),s.jsx($o,{})]}),s.jsx(Vn,{children:s.jsx(Io,{})}),s.jsx(Wn,{})]})}function Po(){const{isMobile:e}=Yt(),{user:t}=$e("root")||{},{role:n,roles:r=[]}=t||{},a=Dt.filter(u=>r.includes(u.value)),[o,l]=J.useState(Dt.find(u=>u.value===n)),d=J.useCallback(async u=>{try{await Tn.post("/permissions/switch",{role:u==null?void 0:u.value}),l(u),location.reload()}catch(c){console.error(c)}},[]);return s.jsx(Ie,{children:s.jsx(ue,{children:s.jsxs($t,{children:[s.jsx(It,{asChild:!0,children:s.jsxs(_e,{size:"lg",className:"data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",children:[s.jsx("div",{className:"bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 shrink-0 items-center justify-center rounded-lg",children:s.jsx(rr,{className:"size-4"})}),s.jsxs("div",{className:"grid flex-1 text-left text-sm leading-tight",children:[s.jsx("span",{className:"truncate font-semibold",children:"OSS Inc."}),s.jsx("span",{className:"truncate text-xs",children:(o==null?void 0:o.label)||"unknown"})]}),s.jsx(on,{className:"ml-auto"})]})}),s.jsxs(zt,{className:"w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg",align:"start",side:e?"bottom":"right",sideOffset:4,children:[s.jsx(Pt,{className:"text-muted-foreground text-xs",children:"roles"}),a.map((u,c)=>s.jsxs(de,{onClick:()=>d(u),className:"gap-2 p-2",disabled:u.value===(o==null?void 0:o.value),children:[s.jsx("div",{className:"flex size-6 items-center justify-center rounded-sm border",children:s.jsx(u.icon,{className:"size-4 shrink-0"})}),u.label,s.jsxs(En,{children:["⌘",c+1]})]},u.value)),s.jsx(Ve,{}),s.jsxs(de,{className:"gap-2 p-2",children:[s.jsx("div",{className:"bg-background flex size-6 items-center justify-center rounded-md border",children:s.jsx(Zn,{className:"size-4"})}),s.jsx("div",{className:"text-muted-foreground font-medium",children:"Apply Role"})]})]})]})})})}export{ra as L,na as P};
