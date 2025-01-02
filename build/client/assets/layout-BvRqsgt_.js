import{j as i,r as B}from"./jsx-runtime-BMlD0yL_.js";import{S as Rt,a as bn,b as He,C as vn,c as ue,d as xn,e as _e,f as yn,g as wn,h as kn,i as Cn,j as Sn,u as Dt,D as $t,k as Ht,l as Pt,m as zt,n as We,o as En,p as de,B as jn,q as Mn,P as Ln,r as Nn,s as Bt,t as Fn,v as In,w as Tn,x as An,F as Rn,y as Dn,z as Ut,A as $n,E as Hn,G as Pn,H as zn,I as Bn,J as Un,K as On,L as Xn,M as Yn}from"./dropdown-menu-BQWkXHsy.js";import{m as qn,r as mt}from"./menus-BnU23AEJ.js";import{c as oe}from"./cn-B8mTpEaj.js";import"./api.agreement._agreementId_.pdf_-CYRM_IyK.js";import{m as Pe,L as Gn,n as Ot,b as Vn,F as Wn,c as Xt}from"./components-CuaJT0t0.js";import{M as Zn,q as Kn}from"./index-DQwOLLTm.js";import{c as Jn,P as rt,g as Qn,u as Yt}from"./x-X8OSiik2.js";import{c as U,B as ot}from"./button-B_xz3V2G.js";import{G as er}from"./gallery-vertical-end-bHSfYUDN.js";import{G as ze,d as tr,g as Be,a as at,i as nr,S as rr,l as Ne,b as or,c as ar,e as Fe}from"./index-B73fgA5T.js";import{u as ir}from"./use-mount-effect-D-pHQY95.js";import{a as qt,O as sr}from"./index-DD1qRzJI.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="7be24b76-e37d-4658-9168-bec9b6bcd5ef",e._sentryDebugIdIdentifier="sentry-dbid-7be24b76-e37d-4658-9168-bec9b6bcd5ef")}catch{}})();const cr=ze;function lr(){try{return cr.document.location.href}catch{return""}}function dr(e,t={},n=at()){const{message:r,name:o,email:a,url:c,source:d,associatedEventId:u,tags:l}=e,f={contexts:{feedback:tr({contact_email:a,name:o,message:r,url:c,source:d,associated_event_id:u})},type:"feedback",level:"info",tags:l},s=n&&n.getClient()||Be();return s&&s.emit("beforeSendFeedback",f,t),n.captureEvent(f,t)}function ur(){return typeof window<"u"&&(!nr()||_r())}function _r(){const e=ze.process;return!!e&&e.type==="renderer"}const ye=ze,hr={replayIntegration:"replay",replayCanvasIntegration:"replay-canvas",feedbackIntegration:"feedback",feedbackModalIntegration:"feedback-modal",feedbackScreenshotIntegration:"feedback-screenshot",captureConsoleIntegration:"captureconsole",contextLinesIntegration:"contextlines",linkedErrorsIntegration:"linkederrors",debugIntegration:"debug",dedupeIntegration:"dedupe",extraErrorDataIntegration:"extraerrordata",httpClientIntegration:"httpclient",reportingObserverIntegration:"reportingobserver",rewriteFramesIntegration:"rewriteframes",sessionTimingIntegration:"sessiontiming",browserProfilingIntegration:"browserprofiling",moduleMetadataIntegration:"modulemetadata"},gt=ye;async function fr(e,t){const n=hr[e],r=gt.Sentry=gt.Sentry||{};if(!n)throw new Error(`Cannot lazy load integration: ${e}`);const o=r[e];if(typeof o=="function"&&!("_isShim"in o))return o;const a=pr(n),c=ye.document.createElement("script");c.src=a,c.crossOrigin="anonymous",c.referrerPolicy="origin",t&&c.setAttribute("nonce",t);const d=new Promise((s,p)=>{c.addEventListener("load",()=>s()),c.addEventListener("error",p)}),u=ye.document.currentScript,l=ye.document.body||ye.document.head||u&&u.parentElement;if(l)l.appendChild(c);else throw new Error(`Could not find parent element to insert lazy-loaded ${e} script`);try{await d}catch{throw new Error(`Error when loading integration: ${e}`)}const f=r[e];if(typeof f!="function")throw new Error(`Could not load integration: ${e}`);return f}function pr(e){const t=Be(),n=t&&t.getOptions(),r=n&&n.cdnBaseUrl||"https://browser.sentry-cdn.com";return new URL(`/${rr}/${e}.min.js`,r).toString()}const Z=ze,k=Z.document,we=Z.navigator,Gt="Report a Bug",mr="Cancel",gr="Send Bug Report",br="Confirm",vr="Report a Bug",xr="your.email@example.org",yr="Email",wr="What's the bug? What did you expect?",kr="Description",Cr="Your Name",Sr="Name",Er="Thank you for your report!",jr="(required)",Mr="Add a screenshot",Lr="Remove screenshot",Nr="widget",Fr="api",Ir=5e3,Tr=(e,t={includeReplay:!0})=>{if(!e.message)throw new Error("Unable to submit feedback with empty message");const n=Be();if(!n)throw new Error("No client setup, cannot send feedback.");e.tags&&Object.keys(e.tags).length&&at().setTags(e.tags);const r=dr({source:Fr,url:lr(),...e},t);return new Promise((o,a)=>{const c=setTimeout(()=>a("Unable to determine if Feedback was correctly sent."),5e3),d=n.on("afterSendEvent",(u,l)=>{if(u.event_id===r)return clearTimeout(c),d(),l&&typeof l.statusCode=="number"&&l.statusCode>=200&&l.statusCode<300?o(r):l&&typeof l.statusCode=="number"&&l.statusCode===0?a("Unable to send Feedback. This is because of network issues, or because you are using an ad-blocker."):l&&typeof l.statusCode=="number"&&l.statusCode===403?a("Unable to send Feedback. This could be because this domain is not in your list of allowed domains."):a("Unable to send Feedback. This could be because of network issues, or because you are using an ad-blocker")})})},Ie=typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__;function Ar(){return!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(we.userAgent)||/Macintosh/i.test(we.userAgent)&&we.maxTouchPoints&&we.maxTouchPoints>1||!isSecureContext)}function je(e,t){return{...e,...t,tags:{...e.tags,...t.tags},onFormOpen:()=>{t.onFormOpen&&t.onFormOpen(),e.onFormOpen&&e.onFormOpen()},onFormClose:()=>{t.onFormClose&&t.onFormClose(),e.onFormClose&&e.onFormClose()},onSubmitSuccess:n=>{t.onSubmitSuccess&&t.onSubmitSuccess(n),e.onSubmitSuccess&&e.onSubmitSuccess(n)},onSubmitError:n=>{t.onSubmitError&&t.onSubmitError(n),e.onSubmitError&&e.onSubmitError(n)},onFormSubmitted:()=>{t.onFormSubmitted&&t.onFormSubmitted(),e.onFormSubmitted&&e.onFormSubmitted()},themeDark:{...e.themeDark,...t.themeDark},themeLight:{...e.themeLight,...t.themeLight}}}function Rr(e){const t=k.createElement("style");return t.textContent=`
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
`,e&&t.setAttribute("nonce",e),t}function z(e,t){return Object.entries(t).forEach(([n,r])=>{e.setAttributeNS(null,n,r)}),e}const le=20,Dr="http://www.w3.org/2000/svg";function $r(){const e=d=>Z.document.createElementNS(Dr,d),t=z(e("svg"),{width:`${le}`,height:`${le}`,viewBox:`0 0 ${le} ${le}`,fill:"var(--actor-color, var(--foreground))"}),n=z(e("g"),{clipPath:"url(#clip0_57_80)"}),r=z(e("path"),{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M15.6622 15H12.3997C12.2129 14.9959 12.031 14.9396 11.8747 14.8375L8.04965 12.2H7.49956V19.1C7.4875 19.3348 7.3888 19.5568 7.22256 19.723C7.05632 19.8892 6.83435 19.9879 6.59956 20H2.04956C1.80193 19.9968 1.56535 19.8969 1.39023 19.7218C1.21511 19.5467 1.1153 19.3101 1.11206 19.0625V12.2H0.949652C0.824431 12.2017 0.700142 12.1783 0.584123 12.1311C0.468104 12.084 0.362708 12.014 0.274155 11.9255C0.185602 11.8369 0.115689 11.7315 0.0685419 11.6155C0.0213952 11.4995 -0.00202913 11.3752 -0.00034808 11.25V3.75C-0.00900498 3.62067 0.0092504 3.49095 0.0532651 3.36904C0.0972798 3.24712 0.166097 3.13566 0.255372 3.04168C0.344646 2.94771 0.452437 2.87327 0.571937 2.82307C0.691437 2.77286 0.82005 2.74798 0.949652 2.75H8.04965L11.8747 0.1625C12.031 0.0603649 12.2129 0.00407221 12.3997 0H15.6622C15.9098 0.00323746 16.1464 0.103049 16.3215 0.278167C16.4966 0.453286 16.5964 0.689866 16.5997 0.9375V3.25269C17.3969 3.42959 18.1345 3.83026 18.7211 4.41679C19.5322 5.22788 19.9878 6.32796 19.9878 7.47502C19.9878 8.62209 19.5322 9.72217 18.7211 10.5333C18.1345 11.1198 17.3969 11.5205 16.5997 11.6974V14.0125C16.6047 14.1393 16.5842 14.2659 16.5395 14.3847C16.4948 14.5035 16.4268 14.6121 16.3394 14.7042C16.252 14.7962 16.147 14.8698 16.0307 14.9206C15.9144 14.9714 15.7891 14.9984 15.6622 15ZM1.89695 10.325H1.88715V4.625H8.33715C8.52423 4.62301 8.70666 4.56654 8.86215 4.4625L12.6872 1.875H14.7247V13.125H12.6872L8.86215 10.4875C8.70666 10.3835 8.52423 10.327 8.33715 10.325H2.20217C2.15205 10.3167 2.10102 10.3125 2.04956 10.3125C1.9981 10.3125 1.94708 10.3167 1.89695 10.325ZM2.98706 12.2V18.1625H5.66206V12.2H2.98706ZM16.5997 9.93612V5.01393C16.6536 5.02355 16.7072 5.03495 16.7605 5.04814C17.1202 5.13709 17.4556 5.30487 17.7425 5.53934C18.0293 5.77381 18.2605 6.06912 18.4192 6.40389C18.578 6.73866 18.6603 7.10452 18.6603 7.47502C18.6603 7.84552 18.578 8.21139 18.4192 8.54616C18.2605 8.88093 18.0293 9.17624 17.7425 9.41071C17.4556 9.64518 17.1202 9.81296 16.7605 9.90191C16.7072 9.91509 16.6536 9.9265 16.5997 9.93612Z"});t.appendChild(n).appendChild(r);const o=e("defs"),a=z(e("clipPath"),{id:"clip0_57_80"}),c=z(e("rect"),{width:`${le}`,height:`${le}`,fill:"white"});return a.appendChild(c),o.appendChild(a),t.appendChild(o).appendChild(a).appendChild(c),t}function Hr({triggerLabel:e,triggerAriaLabel:t,shadow:n,styleNonce:r}){const o=k.createElement("button");if(o.type="button",o.className="widget__actor",o.ariaHidden="false",o.ariaLabel=t||e||Gt,o.appendChild($r()),e){const c=k.createElement("span");c.appendChild(k.createTextNode(e)),o.appendChild(c)}const a=Rr(r);return{el:o,appendToDom(){n.appendChild(a),n.appendChild(o)},removeFromDom(){n.removeChild(o),n.removeChild(a)},show(){o.ariaHidden="false"},hide(){o.ariaHidden="true"}}}const Vt="rgba(88, 74, 192, 1)",Pr={foreground:"#2b2233",background:"#ffffff",accentForeground:"white",accentBackground:Vt,successColor:"#268d75",errorColor:"#df3338",border:"1.5px solid rgba(41, 35, 47, 0.13)",boxShadow:"0px 4px 24px 0px rgba(43, 34, 51, 0.12)",outline:"1px auto var(--accent-background)",interactiveFilter:"brightness(95%)"},bt={foreground:"#ebe6ef",background:"#29232f",accentForeground:"white",accentBackground:Vt,successColor:"#2da98c",errorColor:"#f55459",border:"1.5px solid rgba(235, 230, 239, 0.15)",boxShadow:"0px 4px 24px 0px rgba(43, 34, 51, 0.12)",outline:"1px auto var(--accent-background)",interactiveFilter:"brightness(150%)"};function vt(e){return`
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
  `}function zr({colorScheme:e,themeDark:t,themeLight:n,styleNonce:r}){const o=k.createElement("style");return o.textContent=`
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

  ${vt(e==="dark"?{...bt,...t}:{...Pr,...n})}
}

${e==="system"?`
@media (prefers-color-scheme: dark) {
  :host {
    ${vt({...bt,...t})}
  }
}`:""}
}
`,r&&o.setAttribute("nonce",r),o}const Br=({lazyLoadIntegration:e,getModalIntegration:t,getScreenshotIntegration:n})=>({id:o="sentry-feedback",autoInject:a=!0,showBranding:c=!0,isEmailRequired:d=!1,isNameRequired:u=!1,showEmail:l=!0,showName:f=!0,enableScreenshot:s=!0,useSentryUser:p={email:"email",name:"username"},tags:_,styleNonce:b,scriptNonce:F,colorScheme:w="system",themeLight:y={},themeDark:E={},addScreenshotButtonLabel:R=Mr,cancelButtonLabel:D=mr,confirmButtonLabel:q=br,emailLabel:O=yr,emailPlaceholder:X=xr,formTitle:V=vr,isRequiredLabel:h=jr,messageLabel:m=kr,messagePlaceholder:x=wr,nameLabel:v=Sr,namePlaceholder:T=Cr,removeScreenshotButtonLabel:G=Lr,submitButtonLabel:L=gr,successMessageText:$=Er,triggerLabel:ie=Gt,triggerAriaLabel:H="",onFormOpen:Y,onFormClose:se,onSubmitSuccess:Q,onSubmitError:ge,onFormSubmitted:mn}={})=>{const be={id:o,autoInject:a,showBranding:c,isEmailRequired:d,isNameRequired:u,showEmail:l,showName:f,enableScreenshot:s,useSentryUser:p,tags:_,styleNonce:b,scriptNonce:F,colorScheme:w,themeDark:E,themeLight:y,triggerLabel:ie,triggerAriaLabel:H,cancelButtonLabel:D,submitButtonLabel:L,confirmButtonLabel:q,formTitle:V,emailLabel:O,emailPlaceholder:X,messageLabel:m,messagePlaceholder:x,nameLabel:v,namePlaceholder:T,successMessageText:$,isRequiredLabel:h,addScreenshotButtonLabel:R,removeScreenshotButtonLabel:G,onFormClose:se,onFormOpen:Y,onSubmitError:ge,onSubmitSuccess:Q,onFormSubmitted:mn};let ee=null,ve=[];const _t=j=>{if(!ee){const N=k.createElement("div");N.id=String(j.id),k.body.appendChild(N),ee=N.attachShadow({mode:"open"}),ee.appendChild(zr(j))}return ee},ht=async(j,N,W)=>{const A=Be(),I=A&&A.getIntegrationByName(j);if(I)return I;const ce=(N&&N()||await e(W,F))();return A&&A.addIntegration(ce),ce},ft=async j=>{const N=j.enableScreenshot&&Ar(),[W,A]=await Promise.all([ht("FeedbackModal",t,"feedbackModalIntegration"),N?ht("FeedbackScreenshot",n,"feedbackScreenshotIntegration"):void 0]);if(!W)throw Ie&&Ne.error("[Feedback] Missing feedback modal integration. Try using `feedbackSyncIntegration` in your `Sentry.init`."),new Error("[Feedback] Missing feedback modal integration!");N&&!A&&Ie&&Ne.error("[Feedback] Missing feedback screenshot integration. Proceeding without screenshots.");const I=W.createDialog({options:{...j,onFormClose:()=>{I&&I.close(),j.onFormClose&&j.onFormClose()},onFormSubmitted:()=>{I&&I.close(),j.onFormSubmitted&&j.onFormSubmitted()}},screenshotIntegration:N?A:void 0,sendFeedback:Tr,shadow:_t(j)});return I},pt=(j,N={})=>{const W=je(be,N),A=typeof j=="string"?k.querySelector(j):typeof j.addEventListener=="function"?j:null;if(!A)throw Ie&&Ne.error("[Feedback] Unable to attach to target element"),new Error("Unable to attach to target element");let I=null;const Xe=async()=>{I||(I=await ft({...W,onFormSubmitted:()=>{I&&I.removeFromDom(),W.onFormSubmitted&&W.onFormSubmitted()}})),I.appendToDom(),I.open()};A.addEventListener("click",Xe);const ce=()=>{ve=ve.filter(gn=>gn!==ce),I&&I.removeFromDom(),I=null,A.removeEventListener("click",Xe)};return ve.push(ce),ce},Oe=(j={})=>{const N=je(be,j),W=_t(N),A=Hr({triggerLabel:N.triggerLabel,triggerAriaLabel:N.triggerAriaLabel,shadow:W,styleNonce:b});return pt(A.el,{...N,onFormOpen(){A.hide()},onFormClose(){A.show()},onFormSubmitted(){A.show()}}),A};return{name:"Feedback",setupOnce(){!ur()||!be.autoInject||(k.readyState==="loading"?k.addEventListener("DOMContentLoaded",()=>Oe().appendToDom()):Oe().appendToDom())},attachTo:pt,createWidget(j={}){const N=Oe(je(be,j));return N.appendToDom(),N},async createForm(j={}){return ft(je(be,j))},remove(){ee&&(ee.parentElement&&ee.parentElement.remove(),ee=null),ve.forEach(j=>j()),ve=[]}}};var Ue,S,Wt,re,xt,Zt,Ze,Ce={},it=[],Ur=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,st=Array.isArray;function ne(e,t){for(var n in t)e[n]=t[n];return e}function Kt(e){var t=e.parentNode;t&&t.removeChild(e)}function g(e,t,n){var r,o,a,c={};for(a in t)a=="key"?r=t[a]:a=="ref"?o=t[a]:c[a]=t[a];if(arguments.length>2&&(c.children=arguments.length>3?Ue.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)c[a]===void 0&&(c[a]=e.defaultProps[a]);return Te(e,c,r,o,null)}function Te(e,t,n,r,o){var a={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++Wt,__i:-1,__u:0};return o==null&&S.vnode!=null&&S.vnode(a),a}function Se(e){return e.children}function Ae(e,t){this.props=e,this.context=t}function pe(e,t){if(t==null)return e.__?pe(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?pe(e):null}function Or(e,t,n){var r,o=e.__v,a=o.__e,c=e.__P;if(c)return(r=ne({},o)).__v=o.__v+1,S.vnode&&S.vnode(r),ct(c,r,o,e.__n,c.ownerSVGElement!==void 0,32&o.__u?[a]:null,t,a??pe(o),!!(32&o.__u),n),r.__.__k[r.__i]=r,r.__d=void 0,r.__e!=a&&Jt(r),r}function Jt(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Jt(e)}}function yt(e){(!e.__d&&(e.__d=!0)&&re.push(e)&&!$e.__r++||xt!==S.debounceRendering)&&((xt=S.debounceRendering)||Zt)($e)}function $e(){var e,t,n,r=[],o=[];for(re.sort(Ze);e=re.shift();)e.__d&&(n=re.length,t=Or(e,r,o)||t,n===0||re.length>n?(Ke(r,t,o),o.length=r.length=0,t=void 0,re.sort(Ze)):t&&S.__c&&S.__c(t,it));t&&Ke(r,t,o),$e.__r=0}function Qt(e,t,n,r,o,a,c,d,u,l,f){var s,p,_,b,F,w=r&&r.__k||it,y=t.length;for(n.__d=u,Xr(n,t,w),u=n.__d,s=0;s<y;s++)(_=n.__k[s])!=null&&typeof _!="boolean"&&typeof _!="function"&&(p=_.__i===-1?Ce:w[_.__i]||Ce,_.__i=s,ct(e,_,p,o,a,c,d,u,l,f),b=_.__e,_.ref&&p.ref!=_.ref&&(p.ref&&lt(p.ref,null,_),f.push(_.ref,_.__c||b,_)),F==null&&b!=null&&(F=b),65536&_.__u||p.__k===_.__k?u=en(_,u,e):typeof _.type=="function"&&_.__d!==void 0?u=_.__d:b&&(u=b.nextSibling),_.__d=void 0,_.__u&=-196609);n.__d=u,n.__e=F}function Xr(e,t,n){var r,o,a,c,d,u=t.length,l=n.length,f=l,s=0;for(e.__k=[],r=0;r<u;r++)(o=e.__k[r]=(o=t[r])==null||typeof o=="boolean"||typeof o=="function"?null:typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?Te(null,o,null,null,o):st(o)?Te(Se,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?Te(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)!=null?(o.__=e,o.__b=e.__b+1,d=Yr(o,n,c=r+s,f),o.__i=d,a=null,d!==-1&&(f--,(a=n[d])&&(a.__u|=131072)),a==null||a.__v===null?(d==-1&&s--,typeof o.type!="function"&&(o.__u|=65536)):d!==c&&(d===c+1?s++:d>c?f>u-c?s+=d-c:s--:s=d<c&&d==c-1?d-c:0,d!==r+s&&(o.__u|=65536))):(a=n[r])&&a.key==null&&a.__e&&(a.__e==e.__d&&(e.__d=pe(a)),Je(a,a,!1),n[r]=null,f--);if(f)for(r=0;r<l;r++)(a=n[r])!=null&&!(131072&a.__u)&&(a.__e==e.__d&&(e.__d=pe(a)),Je(a,a))}function en(e,t,n){var r,o;if(typeof e.type=="function"){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,t=en(r[o],t,n));return t}e.__e!=t&&(n.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType===8);return t}function Yr(e,t,n,r){var o=e.key,a=e.type,c=n-1,d=n+1,u=t[n];if(u===null||u&&o==u.key&&a===u.type)return n;if(r>(u!=null&&!(131072&u.__u)?1:0))for(;c>=0||d<t.length;){if(c>=0){if((u=t[c])&&!(131072&u.__u)&&o==u.key&&a===u.type)return c;c--}if(d<t.length){if((u=t[d])&&!(131072&u.__u)&&o==u.key&&a===u.type)return d;d++}}return-1}function wt(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Ur.test(t)?n:n+"px"}function Me(e,t,n,r,o){var a;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||wt(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||wt(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")a=t!==(t=t.replace(/(PointerCapture)$|Capture$/i,"$1")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?r?n.u=r.u:(n.u=Date.now(),e.addEventListener(t,a?Ct:kt,a)):e.removeEventListener(t,a?Ct:kt,a);else{if(o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t!=="role"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,n))}}function kt(e){if(this.l){var t=this.l[e.type+!1];if(e.t){if(e.t<=t.u)return}else e.t=Date.now();return t(S.event?S.event(e):e)}}function Ct(e){if(this.l)return this.l[e.type+!0](S.event?S.event(e):e)}function ct(e,t,n,r,o,a,c,d,u,l){var f,s,p,_,b,F,w,y,E,R,D,q,O,X,V,h=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(u=!!(32&n.__u),a=[d=t.__e=n.__e]),(f=S.__b)&&f(t);e:if(typeof h=="function")try{if(y=t.props,E=(f=h.contextType)&&r[f.__c],R=f?E?E.props.value:f.__:r,n.__c?w=(s=t.__c=n.__c).__=s.__E:("prototype"in h&&h.prototype.render?t.__c=s=new h(y,R):(t.__c=s=new Ae(y,R),s.constructor=h,s.render=Gr),E&&E.sub(s),s.props=y,s.state||(s.state={}),s.context=R,s.__n=r,p=s.__d=!0,s.__h=[],s._sb=[]),s.__s==null&&(s.__s=s.state),h.getDerivedStateFromProps!=null&&(s.__s==s.state&&(s.__s=ne({},s.__s)),ne(s.__s,h.getDerivedStateFromProps(y,s.__s))),_=s.props,b=s.state,s.__v=t,p)h.getDerivedStateFromProps==null&&s.componentWillMount!=null&&s.componentWillMount(),s.componentDidMount!=null&&s.__h.push(s.componentDidMount);else{if(h.getDerivedStateFromProps==null&&y!==_&&s.componentWillReceiveProps!=null&&s.componentWillReceiveProps(y,R),!s.__e&&(s.shouldComponentUpdate!=null&&s.shouldComponentUpdate(y,s.__s,R)===!1||t.__v===n.__v)){for(t.__v!==n.__v&&(s.props=y,s.state=s.__s,s.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(m){m&&(m.__=t)}),D=0;D<s._sb.length;D++)s.__h.push(s._sb[D]);s._sb=[],s.__h.length&&c.push(s);break e}s.componentWillUpdate!=null&&s.componentWillUpdate(y,s.__s,R),s.componentDidUpdate!=null&&s.__h.push(function(){s.componentDidUpdate(_,b,F)})}if(s.context=R,s.props=y,s.__P=e,s.__e=!1,q=S.__r,O=0,"prototype"in h&&h.prototype.render){for(s.state=s.__s,s.__d=!1,q&&q(t),f=s.render(s.props,s.state,s.context),X=0;X<s._sb.length;X++)s.__h.push(s._sb[X]);s._sb=[]}else do s.__d=!1,q&&q(t),f=s.render(s.props,s.state,s.context),s.state=s.__s;while(s.__d&&++O<25);s.state=s.__s,s.getChildContext!=null&&(r=ne(ne({},r),s.getChildContext())),p||s.getSnapshotBeforeUpdate==null||(F=s.getSnapshotBeforeUpdate(_,b)),Qt(e,st(V=f!=null&&f.type===Se&&f.key==null?f.props.children:f)?V:[V],t,n,r,o,a,c,d,u,l),s.base=t.__e,t.__u&=-161,s.__h.length&&c.push(s),w&&(s.__E=s.__=null)}catch(m){t.__v=null,u||a!=null?(t.__e=d,t.__u|=u?160:32,a[a.indexOf(d)]=null):(t.__e=n.__e,t.__k=n.__k),S.__e(m,t,n)}else a==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=qr(n.__e,t,n,r,o,a,c,u,l);(f=S.diffed)&&f(t)}function Ke(e,t,n){for(var r=0;r<n.length;r++)lt(n[r],n[++r],n[++r]);S.__c&&S.__c(t,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(a){a.call(o)})}catch(a){S.__e(a,o.__v)}})}function qr(e,t,n,r,o,a,c,d,u){var l,f,s,p,_,b,F,w=n.props,y=t.props,E=t.type;if(E==="svg"&&(o=!0),a!=null){for(l=0;l<a.length;l++)if((_=a[l])&&"setAttribute"in _==!!E&&(E?_.localName===E:_.nodeType===3)){e=_,a[l]=null;break}}if(e==null){if(E===null)return document.createTextNode(y);e=o?document.createElementNS("http://www.w3.org/2000/svg",E):document.createElement(E,y.is&&y),a=null,d=!1}if(E===null)w===y||d&&e.data===y||(e.data=y);else{if(a=a&&Ue.call(e.childNodes),w=n.props||Ce,!d&&a!=null)for(w={},l=0;l<e.attributes.length;l++)w[(_=e.attributes[l]).name]=_.value;for(l in w)_=w[l],l=="children"||(l=="dangerouslySetInnerHTML"?s=_:l==="key"||l in y||Me(e,l,null,_,o));for(l in y)_=y[l],l=="children"?p=_:l=="dangerouslySetInnerHTML"?f=_:l=="value"?b=_:l=="checked"?F=_:l==="key"||d&&typeof _!="function"||w[l]===_||Me(e,l,_,w[l],o);if(f)d||s&&(f.__html===s.__html||f.__html===e.innerHTML)||(e.innerHTML=f.__html),t.__k=[];else if(s&&(e.innerHTML=""),Qt(e,st(p)?p:[p],t,n,r,o&&E!=="foreignObject",a,c,a?a[0]:n.__k&&pe(n,0),d,u),a!=null)for(l=a.length;l--;)a[l]!=null&&Kt(a[l]);d||(l="value",b!==void 0&&(b!==e[l]||E==="progress"&&!b||E==="option"&&b!==w[l])&&Me(e,l,b,w[l],!1),l="checked",F!==void 0&&F!==e[l]&&Me(e,l,F,w[l],!1))}return e}function lt(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){S.__e(r,n)}}function Je(e,t,n){var r,o;if(S.unmount&&S.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||lt(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(a){S.__e(a,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(o=0;o<r.length;o++)r[o]&&Je(r[o],t,n||typeof e.type!="function");n||e.__e==null||Kt(e.__e),e.__=e.__e=e.__d=void 0}function Gr(e,t,n){return this.constructor(e,n)}function Vr(e,t,n){var r,o,a,c;S.__&&S.__(e,t),o=(r=typeof n=="function")?null:t.__k,a=[],c=[],ct(t,e=t.__k=g(Se,null,[e]),o||Ce,Ce,t.ownerSVGElement!==void 0,o?null:t.firstChild?Ue.call(t.childNodes):null,a,o?o.__e:t.firstChild,r,c),e.__d=void 0,Ke(a,e,c)}Ue=it.slice,S={__e:function(e,t,n,r){for(var o,a,c;t=t.__;)if((o=t.__c)&&!o.__)try{if((a=o.constructor)&&a.getDerivedStateFromError!=null&&(o.setState(a.getDerivedStateFromError(e)),c=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,r||{}),c=o.__d),c)return o.__E=o}catch(d){e=d}throw e}},Wt=0,Ae.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=ne({},this.state),typeof e=="function"&&(e=e(ne({},n),this.props)),e&&ne(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),yt(this))},Ae.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),yt(this))},Ae.prototype.render=Se,re=[],Zt=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ze=function(e,t){return e.__v.__b-t.__v.__b},$e.__r=0;var J,C,Ye,St,me=0,tn=[],Re=[],M=S,Et=M.__b,jt=M.__r,Mt=M.diffed,Lt=M.__c,Nt=M.unmount,Ft=M.__;function ae(e,t){M.__h&&M.__h(C,e,me||t),me=0;var n=C.__H||(C.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:Re}),n.__[e]}function he(e){return me=1,nn(on,e)}function nn(e,t,n){var r=ae(J++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):on(void 0,t),function(d){var u=r.__N?r.__N[0]:r.__[0],l=r.t(u,d);u!==l&&(r.__N=[l,r.__[1]],r.__c.setState({}))}],r.__c=C,!C.u)){var o=function(d,u,l){if(!r.__c.__H)return!0;var f=r.__c.__H.__.filter(function(p){return!!p.__c});if(f.every(function(p){return!p.__N}))return!a||a.call(this,d,u,l);var s=!1;return f.forEach(function(p){if(p.__N){var _=p.__[0];p.__=p.__N,p.__N=void 0,_!==p.__[0]&&(s=!0)}}),!(!s&&r.__c.props===d)&&(!a||a.call(this,d,u,l))};C.u=!0;var a=C.shouldComponentUpdate,c=C.componentWillUpdate;C.componentWillUpdate=function(d,u,l){if(this.__e){var f=a;a=void 0,o(d,u,l),a=f}c&&c.call(this,d,u,l)},C.shouldComponentUpdate=o}return r.__N||r.__}function Wr(e,t){var n=ae(J++,3);!M.__s&&dt(n.__H,t)&&(n.__=e,n.i=t,C.__H.__h.push(n))}function rn(e,t){var n=ae(J++,4);!M.__s&&dt(n.__H,t)&&(n.__=e,n.i=t,C.__h.push(n))}function Zr(e){return me=5,Ee(function(){return{current:e}},[])}function Kr(e,t,n){me=6,rn(function(){return typeof e=="function"?(e(t()),function(){return e(null)}):e?(e.current=t(),function(){return e.current=null}):void 0},n==null?n:n.concat(e))}function Ee(e,t){var n=ae(J++,7);return dt(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function fe(e,t){return me=8,Ee(function(){return e},t)}function Jr(e){var t=C.context[e.__c],n=ae(J++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(C)),t.props.value):e.__}function Qr(e,t){M.useDebugValue&&M.useDebugValue(t?t(e):e)}function eo(e){var t=ae(J++,10),n=he();return t.__=e,C.componentDidCatch||(C.componentDidCatch=function(r,o){t.__&&t.__(r,o),n[1](r)}),[n[0],function(){n[1](void 0)}]}function to(){var e=ae(J++,11);if(!e.__){for(var t=C.__v;t!==null&&!t.__m&&t.__!==null;)t=t.__;var n=t.__m||(t.__m=[0,0]);e.__="P"+n[0]+"-"+n[1]++}return e.__}function no(){for(var e;e=tn.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(De),e.__H.__h.forEach(Qe),e.__H.__h=[]}catch(t){e.__H.__h=[],M.__e(t,e.__v)}}M.__b=function(e){C=null,Et&&Et(e)},M.__=function(e,t){t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Ft&&Ft(e,t)},M.__r=function(e){jt&&jt(e),J=0;var t=(C=e.__c).__H;t&&(Ye===C?(t.__h=[],C.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=Re,n.__N=n.i=void 0})):(t.__h.forEach(De),t.__h.forEach(Qe),t.__h=[],J=0)),Ye=C},M.diffed=function(e){Mt&&Mt(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(tn.push(t)!==1&&St===M.requestAnimationFrame||((St=M.requestAnimationFrame)||ro)(no)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==Re&&(n.__=n.__V),n.i=void 0,n.__V=Re})),Ye=C=null},M.__c=function(e,t){t.some(function(n){try{n.__h.forEach(De),n.__h=n.__h.filter(function(r){return!r.__||Qe(r)})}catch(r){t.some(function(o){o.__h&&(o.__h=[])}),t=[],M.__e(r,n.__v)}}),Lt&&Lt(e,t)},M.unmount=function(e){Nt&&Nt(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{De(r)}catch(o){t=o}}),n.__H=void 0,t&&M.__e(t,n.__v))};var It=typeof requestAnimationFrame=="function";function ro(e){var t,n=function(){clearTimeout(r),It&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);It&&(t=requestAnimationFrame(n))}function De(e){var t=C,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),C=t}function Qe(e){var t=C;e.__c=e.__(),C=t}function dt(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function on(e,t){return typeof t=="function"?t(e):t}const oo={__proto__:null,useCallback:fe,useContext:Jr,useDebugValue:Qr,useEffect:Wr,useErrorBoundary:eo,useId:to,useImperativeHandle:Kr,useLayoutEffect:rn,useMemo:Ee,useReducer:nn,useRef:Zr,useState:he},ao="http://www.w3.org/2000/svg";function io(){const e=r=>k.createElementNS(ao,r),t=z(e("svg"),{width:"32",height:"30",viewBox:"0 0 72 66",fill:"inherit"}),n=z(e("path"),{transform:"translate(11, 11)",d:"M29,2.26a4.67,4.67,0,0,0-8,0L14.42,13.53A32.21,32.21,0,0,1,32.17,40.19H27.55A27.68,27.68,0,0,0,12.09,17.47L6,28a15.92,15.92,0,0,1,9.23,12.17H4.62A.76.76,0,0,1,4,39.06l2.94-5a10.74,10.74,0,0,0-3.36-1.9l-2.91,5a4.54,4.54,0,0,0,1.69,6.24A4.66,4.66,0,0,0,4.62,44H19.15a19.4,19.4,0,0,0-8-17.31l2.31-4A23.87,23.87,0,0,1,23.76,44H36.07a35.88,35.88,0,0,0-16.41-31.8l4.67-8a.77.77,0,0,1,1.05-.27c.53.29,20.29,34.77,20.66,35.17a.76.76,0,0,1-.68,1.13H40.6q.09,1.91,0,3.81h4.78A4.59,4.59,0,0,0,50,39.43a4.49,4.49,0,0,0-.62-2.28Z"});return t.appendChild(n),t}function so({options:e}){const t=Ee(()=>({__html:io().outerHTML}),[]);return g("h2",{class:"dialog__header"},g("span",{class:"dialog__title"},e.formTitle),e.showBranding?g("a",{class:"brand-link",target:"_blank",href:"https://sentry.io/welcome/",title:"Powered by Sentry",rel:"noopener noreferrer",dangerouslySetInnerHTML:t}):null)}function co(e,t){const n=[];return t.isNameRequired&&!e.name&&n.push(t.nameLabel),t.isEmailRequired&&!e.email&&n.push(t.emailLabel),e.message||n.push(t.messageLabel),n}function qe(e,t){const n=e.get(t);return typeof n=="string"?n.trim():""}function lo({options:e,defaultEmail:t,defaultName:n,onFormClose:r,onSubmit:o,onSubmitSuccess:a,onSubmitError:c,showEmail:d,showName:u,screenshotInput:l}){const{tags:f,addScreenshotButtonLabel:s,removeScreenshotButtonLabel:p,cancelButtonLabel:_,emailLabel:b,emailPlaceholder:F,isEmailRequired:w,isNameRequired:y,messageLabel:E,messagePlaceholder:R,nameLabel:D,namePlaceholder:q,submitButtonLabel:O,isRequiredLabel:X}=e,[V,h]=he(null),[m,x]=he(!1),v=l&&l.input,[T,G]=he(null),L=fe(H=>{G(H),x(!1)},[]),$=fe(H=>{const Y=co(H,{emailLabel:b,isEmailRequired:w,isNameRequired:y,messageLabel:E,nameLabel:D});return Y.length>0?h(`Please enter in the following required fields: ${Y.join(", ")}`):h(null),Y.length===0},[b,w,y,E,D]),ie=fe(async H=>{try{if(H.preventDefault(),!(H.target instanceof HTMLFormElement))return;const Y=new FormData(H.target),se=await(l&&m?l.value():void 0),Q={name:qe(Y,"name"),email:qe(Y,"email"),message:qe(Y,"message"),attachments:se?[se]:void 0};if(!$(Q))return;try{await o({name:Q.name,email:Q.email,message:Q.message,source:Nr,tags:f},{attachments:Q.attachments}),a(Q)}catch(ge){Ie&&Ne.error(ge),h(ge),c(ge)}}catch{}},[l&&m,a,c]);return g("form",{class:"form",onSubmit:ie},v&&m?g(v,{onError:L}):null,g("div",{class:"form__right","data-sentry-feedback":!0},g("div",{class:"form__top"},V?g("div",{class:"form__error-container"},V):null,u?g("label",{for:"name",class:"form__label"},g(Ge,{label:D,isRequiredLabel:X,isRequired:y}),g("input",{class:"form__input",defaultValue:n,id:"name",name:"name",placeholder:q,required:y,type:"text"})):g("input",{"aria-hidden":!0,value:n,name:"name",type:"hidden"}),d?g("label",{for:"email",class:"form__label"},g(Ge,{label:b,isRequiredLabel:X,isRequired:w}),g("input",{class:"form__input",defaultValue:t,id:"email",name:"email",placeholder:F,required:w,type:"email"})):g("input",{"aria-hidden":!0,value:t,name:"email",type:"hidden"}),g("label",{for:"message",class:"form__label"},g(Ge,{label:E,isRequiredLabel:X,isRequired:!0}),g("textarea",{autoFocus:!0,class:"form__input form__input--textarea",id:"message",name:"message",placeholder:R,required:!0,rows:5})),v?g("label",{for:"screenshot",class:"form__label"},g("button",{class:"btn btn--default",type:"button",onClick:()=>{G(null),x(H=>!H)}},m?p:s),T?g("div",{class:"form__error-container"},T.message):null):null),g("div",{class:"btn-group"},g("button",{class:"btn btn--primary",type:"submit"},O),g("button",{class:"btn btn--default",type:"button",onClick:r},_))))}function Ge({label:e,isRequired:t,isRequiredLabel:n}){return g("span",{class:"form__label__text"},e,t&&g("span",{class:"form__label__text--required"},n))}const Le=16,Tt=17,uo="http://www.w3.org/2000/svg";function _o(){const e=u=>Z.document.createElementNS(uo,u),t=z(e("svg"),{width:`${Le}`,height:`${Tt}`,viewBox:`0 0 ${Le} ${Tt}`,fill:"inherit"}),n=z(e("g"),{clipPath:"url(#clip0_57_156)"}),r=z(e("path"),{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.55544 15.1518C4.87103 16.0308 6.41775 16.5 8 16.5C10.1217 16.5 12.1566 15.6571 13.6569 14.1569C15.1571 12.6566 16 10.6217 16 8.5C16 6.91775 15.5308 5.37103 14.6518 4.05544C13.7727 2.73985 12.5233 1.71447 11.0615 1.10897C9.59966 0.503466 7.99113 0.34504 6.43928 0.653721C4.88743 0.962403 3.46197 1.72433 2.34315 2.84315C1.22433 3.96197 0.462403 5.38743 0.153721 6.93928C-0.15496 8.49113 0.00346625 10.0997 0.608967 11.5615C1.21447 13.0233 2.23985 14.2727 3.55544 15.1518ZM4.40546 3.1204C5.46945 2.40946 6.72036 2.03 8 2.03C9.71595 2.03 11.3616 2.71166 12.575 3.92502C13.7883 5.13838 14.47 6.78405 14.47 8.5C14.47 9.77965 14.0905 11.0306 13.3796 12.0945C12.6687 13.1585 11.6582 13.9878 10.476 14.4775C9.29373 14.9672 7.99283 15.0953 6.73777 14.8457C5.48271 14.596 4.32987 13.9798 3.42502 13.075C2.52018 12.1701 1.90397 11.0173 1.65432 9.76224C1.40468 8.50718 1.5328 7.20628 2.0225 6.02404C2.5122 4.8418 3.34148 3.83133 4.40546 3.1204Z"}),o=z(e("path"),{d:"M6.68775 12.4297C6.78586 12.4745 6.89218 12.4984 7 12.5C7.11275 12.4955 7.22315 12.4664 7.32337 12.4145C7.4236 12.3627 7.51121 12.2894 7.58 12.2L12 5.63999C12.0848 5.47724 12.1071 5.28902 12.0625 5.11098C12.0178 4.93294 11.9095 4.77744 11.7579 4.67392C11.6064 4.57041 11.4221 4.52608 11.24 4.54931C11.0579 4.57254 10.8907 4.66173 10.77 4.79999L6.88 10.57L5.13 8.56999C5.06508 8.49566 4.98613 8.43488 4.89768 8.39111C4.80922 8.34735 4.713 8.32148 4.61453 8.31498C4.51605 8.30847 4.41727 8.32147 4.32382 8.35322C4.23038 8.38497 4.14413 8.43484 4.07 8.49999C3.92511 8.63217 3.83692 8.81523 3.82387 9.01092C3.81083 9.2066 3.87393 9.39976 4 9.54999L6.43 12.24C6.50187 12.3204 6.58964 12.385 6.68775 12.4297Z"});t.appendChild(n).append(o,r);const a=e("defs"),c=z(e("clipPath"),{id:"clip0_57_156"}),d=z(e("rect"),{width:`${Le}`,height:`${Le}`,fill:"white",transform:"translate(0 0.5)"});return c.appendChild(d),a.appendChild(c),t.appendChild(a).appendChild(c).appendChild(d),t}function ho({open:e,onFormSubmitted:t,...n}){const r=n.options,o=Ee(()=>({__html:_o().outerHTML}),[]),[a,c]=he(null),d=fe(()=>{a&&(clearTimeout(a),c(null)),t()},[a]),u=fe(l=>{n.onSubmitSuccess(l),c(setTimeout(()=>{t(),c(null)},Ir))},[t]);return g(Se,null,a?g("div",{class:"success__position",onClick:d},g("div",{class:"success__content"},r.successMessageText,g("span",{class:"success__icon",dangerouslySetInnerHTML:o}))):g("dialog",{class:"dialog",onClick:r.onFormClose,open:e},g("div",{class:"dialog__position"},g("div",{class:"dialog__content",onClick:l=>{l.stopPropagation()}},g(so,{options:r}),g(lo,{...n,onSubmitSuccess:u})))))}const fo=`
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

`,po=`
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
`,mo=`
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
`,go=`
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
`,bo=`
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
`;function vo(e){const t=k.createElement("style");return t.textContent=`
:host {
  --dialog-inset: var(--inset);
}

${fo}
${po}
${mo}
${go}
${bo}
`,e&&t.setAttribute("nonce",e),t}function xo(){const e=at().getUser(),t=or().getUser(),n=ar().getUser();return e&&Object.keys(e).length?e:t&&Object.keys(t).length?t:n}const yo=()=>({name:"FeedbackModal",setupOnce(){},createDialog:({options:e,screenshotIntegration:t,sendFeedback:n,shadow:r})=>{const o=r,a=e.useSentryUser,c=xo(),d=k.createElement("div"),u=vo(e.styleNonce);let l="";const f={get el(){return d},appendToDom(){!o.contains(u)&&!o.contains(d)&&(o.appendChild(u),o.appendChild(d))},removeFromDom(){o.removeChild(d),o.removeChild(u),k.body.style.overflow=l},open(){p(!0),e.onFormOpen&&e.onFormOpen(),l=k.body.style.overflow,k.body.style.overflow="hidden"},close(){p(!1),k.body.style.overflow=l}},s=t&&t.createInput({h:g,hooks:oo,dialog:f,options:e}),p=_=>{Vr(g(ho,{options:e,screenshotInput:s,showName:e.showName||e.isNameRequired,showEmail:e.showEmail||e.isEmailRequired,defaultName:a&&c&&c[a.name]||"",defaultEmail:a&&c&&c[a.email]||"",onFormClose:()=>{p(!1),e.onFormClose&&e.onFormClose()},onSubmit:n,onSubmitSuccess:b=>{p(!1),e.onSubmitSuccess&&e.onSubmitSuccess(b)},onSubmitError:b=>{e.onSubmitError&&e.onSubmitError(b)},onFormSubmitted:()=>{e.onFormSubmitted&&e.onFormSubmitted()},open:_}),d)};return f}});function wo({h:e}){return function({top:n,left:r,corner:o,onGrabButton:a}){return e("button",{class:`editor__crop-corner editor__crop-corner--${o} `,style:{top:n,left:r},onMouseDown:c=>{c.preventDefault(),a(c,o)},onClick:c=>{c.preventDefault()}})}}function ko(e){const t=k.createElement("style"),n="#1A141F",r="#302735";return t.textContent=`
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
`,e&&t.setAttribute("nonce",e),t}function Co({hooks:e}){return function({onBeforeScreenshot:n,onScreenshot:r,onAfterScreenshot:o,onError:a}){e.useEffect(()=>{(async()=>{n();const d=await we.mediaDevices.getDisplayMedia({video:{width:Z.innerWidth*Z.devicePixelRatio,height:Z.innerHeight*Z.devicePixelRatio},audio:!1,monitorTypeSurfaces:"exclude",preferCurrentTab:!0,selfBrowserSurface:"include",surfaceSwitching:"exclude"}),u=k.createElement("video");await new Promise((l,f)=>{u.srcObject=d,u.onloadedmetadata=()=>{r(u),d.getTracks().forEach(s=>s.stop()),l()},u.play().catch(f)}),o()})().catch(a)},[])}}const ke=30,K=3,te=ke+K,P=Z.devicePixelRatio,xe=e=>({x:Math.min(e.startX,e.endX),y:Math.min(e.startY,e.endY),width:Math.abs(e.startX-e.endX),height:Math.abs(e.startY-e.endY)}),Ve=e=>{const t=e.clientHeight,n=e.clientWidth,r=e.width/e.height;let o=t*r,a=t;o>n&&(o=n,a=n/r);const c=(n-o)/2,d=(t-a)/2;return{startX:c,startY:d,endX:o+c,endY:a+d}};function So({h:e,hooks:t,imageBuffer:n,dialog:r,options:o}){const a=Co({hooks:t});return function({onError:d}){const u=t.useMemo(()=>({__html:ko(o.styleNonce).innerText}),[]),l=wo({h:e}),f=t.useRef(null),s=t.useRef(null),p=t.useRef(null),[_,b]=t.useState({startX:0,startY:0,endX:0,endY:0}),[F,w]=t.useState(!1),[y,E]=t.useState(!1);t.useEffect(()=>{Z.addEventListener("resize",R,!1)},[]);function R(){const h=p.current,m=xe(Ve(n));if(h){h.width=m.width*P,h.height=m.height*P,h.style.width=`${m.width}px`,h.style.height=`${m.height}px`;const v=h.getContext("2d");v&&v.scale(P,P)}const x=s.current;x&&(x.style.width=`${m.width}px`,x.style.height=`${m.height}px`),b({startX:0,startY:0,endX:m.width,endY:m.height})}t.useEffect(()=>{const h=p.current;if(!h)return;const m=h.getContext("2d");if(!m)return;const x=xe(Ve(n)),v=xe(_);m.clearRect(0,0,x.width,x.height),m.fillStyle="rgba(0, 0, 0, 0.5)",m.fillRect(0,0,x.width,x.height),m.clearRect(v.x,v.y,v.width,v.height),m.strokeStyle="#ffffff",m.lineWidth=3,m.strokeRect(v.x+1,v.y+1,v.width-2,v.height-2),m.strokeStyle="#000000",m.lineWidth=1,m.strokeRect(v.x+3,v.y+3,v.width-6,v.height-6)},[_]);function D(h,m){w(!1),E(!0);const x=q(m),v=()=>{k.removeEventListener("mousemove",x),k.removeEventListener("mouseup",v),w(!0),E(!1)};k.addEventListener("mouseup",v),k.addEventListener("mousemove",x)}const q=t.useCallback(h=>function(m){if(!p.current)return;const x=p.current,v=x.getBoundingClientRect(),T=m.clientX-v.x,G=m.clientY-v.y;switch(h){case"top-left":b(L=>({...L,startX:Math.min(Math.max(0,T),L.endX-te),startY:Math.min(Math.max(0,G),L.endY-te)}));break;case"top-right":b(L=>({...L,endX:Math.max(Math.min(T,x.width/P),L.startX+te),startY:Math.min(Math.max(0,G),L.endY-te)}));break;case"bottom-left":b(L=>({...L,startX:Math.min(Math.max(0,T),L.endX-te),endY:Math.max(Math.min(G,x.height/P),L.startY+te)}));break;case"bottom-right":b(L=>({...L,endX:Math.max(Math.min(T,x.width/P),L.startX+te),endY:Math.max(Math.min(G,x.height/P),L.startY+te)}));break}},[]),O=t.useRef({initialX:0,initialY:0});function X(h){if(y)return;O.current={initialX:h.clientX,initialY:h.clientY};const m=v=>{const T=p.current;if(!T)return;const G=v.clientX-O.current.initialX,L=v.clientY-O.current.initialY;b($=>{const ie=Math.max(0,Math.min($.startX+G,T.width/P-($.endX-$.startX))),H=Math.max(0,Math.min($.startY+L,T.height/P-($.endY-$.startY))),Y=ie+($.endX-$.startX),se=H+($.endY-$.startY);return O.current.initialX=v.clientX,O.current.initialY=v.clientY,{startX:ie,startY:H,endX:Y,endY:se}})},x=()=>{k.removeEventListener("mousemove",m),k.removeEventListener("mouseup",x)};k.addEventListener("mousemove",m),k.addEventListener("mouseup",x)}function V(){const h=k.createElement("canvas"),m=xe(Ve(n)),x=xe(_);h.width=x.width*P,h.height=x.height*P;const v=h.getContext("2d");v&&n&&v.drawImage(n,x.x/m.width*n.width,x.y/m.height*n.height,x.width/m.width*n.width,x.height/m.height*n.height,0,0,h.width,h.height);const T=n.getContext("2d");T&&(T.clearRect(0,0,n.width,n.height),n.width=h.width,n.height=h.height,n.style.width=`${x.width}px`,n.style.height=`${x.height}px`,T.drawImage(h,0,0),R())}return a({onBeforeScreenshot:t.useCallback(()=>{r.el.style.display="none"},[]),onScreenshot:t.useCallback(h=>{const m=n.getContext("2d");if(!m)throw new Error("Could not get canvas context");n.width=h.videoWidth,n.height=h.videoHeight,n.style.width="100%",n.style.height="100%",m.drawImage(h,0,0)},[n]),onAfterScreenshot:t.useCallback(()=>{r.el.style.display="block";const h=f.current;h&&h.appendChild(n),R()},[]),onError:t.useCallback(h=>{r.el.style.display="block",d(h)},[])}),e("div",{class:"editor"},e("style",{nonce:o.styleNonce,dangerouslySetInnerHTML:u}),e("div",{class:"editor__canvas-container",ref:f},e("div",{class:"editor__crop-container",style:{position:"absolute",zIndex:1},ref:s},e("canvas",{onMouseDown:X,style:{position:"absolute",cursor:F?"move":"auto"},ref:p}),e(l,{left:_.startX-K,top:_.startY-K,onGrabButton:D,corner:"top-left"}),e(l,{left:_.endX-ke+K,top:_.startY-K,onGrabButton:D,corner:"top-right"}),e(l,{left:_.startX-K,top:_.endY-ke+K,onGrabButton:D,corner:"bottom-left"}),e(l,{left:_.endX-ke+K,top:_.endY-ke+K,onGrabButton:D,corner:"bottom-right"}),e("div",{style:{left:Math.max(0,_.endX-191),top:Math.max(0,_.endY+8),display:F?"flex":"none"},class:"editor__crop-btn-group"},e("button",{onClick:h=>{h.preventDefault(),p.current&&b({startX:0,startY:0,endX:p.current.width/P,endY:p.current.height/P}),w(!1)},class:"btn btn--default"},o.cancelButtonLabel),e("button",{onClick:h=>{h.preventDefault(),V(),w(!1)},class:"btn btn--primary"},o.confirmButtonLabel)))))}}const Eo=()=>({name:"FeedbackScreenshot",setupOnce(){},createInput:({h:e,hooks:t,dialog:n,options:r})=>{const o=k.createElement("canvas");return{input:So({h:e,hooks:t,imageBuffer:o,dialog:n,options:r}),value:async()=>{const a=await new Promise(c=>{o.toBlob(c,"image/png")});if(a)return{data:new Uint8Array(await a.arrayBuffer()),filename:"screenshot.png",contentType:"application/png"}}}}}),jo=Br({lazyLoadIntegration:fr,getModalIntegration:()=>yo,getScreenshotIntegration:()=>Eo});/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mo=U("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lo=U("AudioLines",[["path",{d:"M2 10v3",key:"1fnikh"}],["path",{d:"M6 6v11",key:"11sgs0"}],["path",{d:"M10 3v18",key:"yhl04a"}],["path",{d:"M14 8v7",key:"3a1oy3"}],["path",{d:"M18 5v13",key:"123xd1"}],["path",{d:"M22 10v3",key:"154ddg"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const No=U("Baby",[["path",{d:"M9 12h.01",key:"157uk2"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"5yv0yz"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fo=U("BadgeCheck",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Io=U("BicepsFlexed",[["path",{d:"M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1",key:"1pmlyh"}],["path",{d:"M15 14a5 5 0 0 0-7.584 2",key:"5rb254"}],["path",{d:"M9.964 6.825C8.019 7.977 9.5 13 8 15",key:"kbvsx9"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const To=U("Bug",[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",key:"xs1cw7"}],["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4",key:"k3fwyw"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const an=U("ChevronsUpDown",[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ao=U("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ro=U("Fullscreen",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["rect",{width:"10",height:"8",x:"7",y:"8",rx:"1",key:"vys8me"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Do=U("Languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $o=U("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ho=U("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Po=U("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);function zo(){const e=Pe(),t=e[e.length-1];return qn.map((n,r)=>i.jsxs(Rt,{children:[i.jsx(bn,{children:n.title}),i.jsx(He,{children:n.items.map(o=>{var c;const a=t.id.includes(o.id);return i.jsx(vn,{asChild:!0,defaultOpen:a,className:"group/collapsible",children:i.jsxs(ue,{children:[i.jsx(xn,{asChild:!0,children:i.jsxs(_e,{tooltip:o.title,children:[o.icon&&i.jsx(o.icon,{}),i.jsx("span",{children:o.title}),i.jsx(yn,{className:"ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"})]})}),i.jsx(wn,{children:i.jsx(kn,{children:(c=o.children)==null?void 0:c.map(d=>{const u=t.id===d.id,l=d.id.replace("._index","").replace("routes","").replace(/\./g,"/");return i.jsx(Cn,{children:i.jsx(Sn,{asChild:!0,isActive:u,className:oe(u&&"!bg-primary !text-primary-foreground"),children:i.jsx(Gn,{to:l,children:i.jsx("span",{children:d.title})})})},d.title)})})})]})},o.id)})})]},r))}var ut="Avatar",[Bo,fa]=Jn(ut),[Uo,sn]=Bo(ut),cn=B.forwardRef((e,t)=>{const{__scopeAvatar:n,...r}=e,[o,a]=B.useState("idle");return i.jsx(Uo,{scope:n,imageLoadingStatus:o,onImageLoadingStatusChange:a,children:i.jsx(rt.span,{...r,ref:t})})});cn.displayName=ut;var ln="AvatarImage",dn=B.forwardRef((e,t)=>{const{__scopeAvatar:n,src:r,onLoadingStatusChange:o=()=>{},...a}=e,c=sn(ln,n),d=Oo(r,a.referrerPolicy),u=Qn(l=>{o(l),c.onImageLoadingStatusChange(l)});return Yt(()=>{d!=="idle"&&u(d)},[d,u]),d==="loaded"?i.jsx(rt.img,{...a,ref:t,src:r}):null});dn.displayName=ln;var un="AvatarFallback",_n=B.forwardRef((e,t)=>{const{__scopeAvatar:n,delayMs:r,...o}=e,a=sn(un,n),[c,d]=B.useState(r===void 0);return B.useEffect(()=>{if(r!==void 0){const u=window.setTimeout(()=>d(!0),r);return()=>window.clearTimeout(u)}},[r]),c&&a.imageLoadingStatus!=="loaded"?i.jsx(rt.span,{...o,ref:t}):null});_n.displayName=un;function Oo(e,t){const[n,r]=B.useState("idle");return Yt(()=>{if(!e){r("error");return}let o=!0;const a=new window.Image,c=d=>()=>{o&&r(d)};return r("loading"),a.onload=c("loaded"),a.onerror=c("error"),a.src=e,t&&(a.referrerPolicy=t),()=>{o=!1}},[e,t]),n}var hn=cn,fn=dn,pn=_n;const et=B.forwardRef(({className:e,...t},n)=>i.jsx(hn,{ref:n,className:oe("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",e),...t}));et.displayName=hn.displayName;const tt=B.forwardRef(({className:e,...t},n)=>i.jsx(fn,{ref:n,className:oe("aspect-square h-full w-full",e),...t}));tt.displayName=fn.displayName;const nt=B.forwardRef(({className:e,...t},n)=>i.jsx(pn,{ref:n,className:oe("flex h-full w-full items-center justify-center rounded-full bg-muted",e),...t}));nt.displayName=pn.displayName;function Xo(){var o,a;const{isMobile:e}=Dt(),{user:t}=Ot("root")||{},{mutate:n}=Zn();function r(){n()}return i.jsx(He,{children:i.jsx(ue,{children:i.jsxs($t,{children:[i.jsx(Ht,{asChild:!0,children:i.jsxs(_e,{size:"lg",className:"data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",children:[i.jsxs(et,{className:"h-8 w-8 rounded-lg",children:[i.jsx(tt,{src:(t==null?void 0:t.avatar)||"/avatar.jpg",alt:(t==null?void 0:t.username)||""}),i.jsx(nt,{className:"rounded-lg",children:((o=t==null?void 0:t.username)==null?void 0:o.charAt(0))||"?"})]}),i.jsxs("div",{className:"grid flex-1 text-left text-sm leading-tight",children:[i.jsx("span",{className:"truncate font-semibold capitalize",children:(t==null?void 0:t.username)||"unknown user"}),i.jsx("span",{className:"truncate text-xs",children:(t==null?void 0:t.email)||"..."})]}),i.jsx(an,{className:"ml-auto size-4"})]})}),i.jsxs(Pt,{className:"w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg",side:e?"bottom":"right",align:"end",sideOffset:4,children:[i.jsx(zt,{className:"p-0 font-normal",children:i.jsxs("div",{className:"flex items-center gap-2 px-1 py-1.5 text-left text-sm",children:[i.jsxs(et,{className:"h-8 w-8 rounded-lg",children:[i.jsx(tt,{src:(t==null?void 0:t.avatar)||"/avatar.jpg",alt:(t==null?void 0:t.username)||""}),i.jsx(nt,{className:"rounded-lg",children:((a=t==null?void 0:t.username)==null?void 0:a.charAt(0))||"?"})]}),i.jsxs("div",{className:"grid flex-1 text-left text-sm leading-tight",children:[i.jsx("span",{className:"truncate font-semibold capitalize",children:(t==null?void 0:t.username)||"unknown user"}),i.jsx("span",{className:"truncate text-xs",children:(t==null?void 0:t.email)||"..."})]})]})}),i.jsx(We,{}),i.jsxs(En,{children:[i.jsxs(de,{children:[i.jsx(Fo,{}),"Account"]}),i.jsxs(de,{children:[i.jsx(Ao,{}),"Billing"]}),i.jsxs(de,{children:[i.jsx(jn,{}),"Notifications"]})]}),i.jsx(We,{}),i.jsxs(de,{onClick:r,children:[i.jsx($o,{}),i.jsx("span",{children:"Log out"})]})]})]})})})}const At=[{icon:Io,role:"Administrator"},{icon:Lo,role:"Operations User"},{icon:No,role:"Guest"}];function Yo(){const{isMobile:e}=Dt(),[t,n]=B.useState(At[0]);return i.jsx(He,{children:i.jsx(ue,{children:i.jsxs($t,{children:[i.jsx(Ht,{asChild:!0,children:i.jsxs(_e,{size:"lg",className:"data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",children:[i.jsx("div",{className:"flex aspect-square size-8 shrink-0 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground",children:i.jsx(er,{className:"size-4"})}),i.jsxs("div",{className:"grid flex-1 text-left text-sm leading-tight",children:[i.jsx("span",{className:"truncate font-semibold",children:"OSS Inc."}),i.jsx("span",{className:"truncate text-xs",children:t.role})]}),i.jsx(an,{className:"ml-auto"})]})}),i.jsxs(Pt,{className:"w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg",align:"start",side:e?"bottom":"right",sideOffset:4,children:[i.jsx(zt,{className:"text-xs text-muted-foreground",children:"roles"}),At.map((r,o)=>i.jsxs(de,{onClick:()=>n(r),className:"gap-2 p-2",children:[i.jsx("div",{className:"flex size-6 items-center justify-center rounded-sm border",children:i.jsx(r.icon,{className:"size-4 shrink-0"})}),r.role,i.jsxs(Mn,{children:["⌘",o+1]})]},r.role)),i.jsx(We,{}),i.jsxs(de,{className:"gap-2 p-2",children:[i.jsx("div",{className:"flex size-6 items-center justify-center rounded-md border bg-background",children:i.jsx(Ln,{className:"size-4"})}),i.jsx("div",{className:"font-medium text-muted-foreground",children:"Add Role"})]})]})]})})})}function qo({theme:e,setTheme:t}){const n=Vn(),r=()=>{const o=e===Fe.Theme.LIGHT?Fe.Theme.DARK:Fe.Theme.LIGHT;t(o),n.submit({theme:o},{method:"POST",action:"/api/set-theme",encType:"application/json"})};return i.jsxs("div",{className:"w-full cursor-pointer select-none px-0 py-2",onClick:r,children:[i.jsx(Po,{size:16,className:"absolute rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),i.jsx(Ho,{size:16,className:"absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"}),i.jsx("span",{children:" "})]})}const Go=[{title:"Service Health Check",url:"#",icon:Mo}];function Vo(){const[e,t]=Fe.useTheme(),n=B.useRef(null);return ir(()=>{if(!n.current)return;jo({autoInject:!1,colorScheme:e}).attachTo(n.current)}),i.jsx(Rt,{className:"mt-auto opacity-80",children:i.jsx(Nn,{children:i.jsxs(He,{children:[Go.map(r=>i.jsx(ue,{children:i.jsx(_e,{asChild:!0,size:"sm",children:i.jsxs("a",{href:r.url,children:[i.jsx(r.icon,{className:oe(r.title==="Service Health Check"&&"animate-pulse text-green-500")}),i.jsx("span",{children:r.title})]})})},r.title)),i.jsx(ue,{children:i.jsx(_e,{asChild:!0,size:"sm",children:i.jsxs("div",{ref:n,className:"cursor-pointer",children:[i.jsx(To,{className:"text-yellow-500"}),i.jsx("span",{children:"Report a Bug"})]})})},"sentry-feedback"),i.jsx(ue,{children:i.jsx(_e,{asChild:!0,size:"sm",children:i.jsx("div",{className:"cursor-pointer",children:i.jsx(qo,{theme:e,setTheme:t})})})},"theme-switch")]})})})}function Wo({...e}){return i.jsxs(Bt,{collapsible:"icon",...e,children:[i.jsx(Fn,{children:i.jsx(Yo,{})}),i.jsxs(In,{children:[i.jsx(zo,{}),i.jsx(Vo,{})]}),i.jsx(Tn,{children:i.jsx(Xo,{})}),i.jsx(An,{})]})}function Zo(){const e=qt(),{translate:t,getLocale:n,changeLocale:r}=Kn(),o=n(),a=c=>{c.preventDefault();const d=new URLSearchParams(location.search);d.set("lng",o==="zh"?"en":"zh"),e(`${location.pathname}?${d.toString()}`,{replace:!0})};return i.jsx(Wn,{onSubmit:a,children:i.jsx(ot,{variant:"ghost",size:"icon",className:"h-7 w-7",type:"submit",onClick:()=>r(o==="zh"?"en":"zh"),children:i.jsx(Do,{className:oe("transition-all",o==="zh"&&"scale-x-[-1]")})})})}const Ko=()=>i.jsx(ot,{variant:"ghost",size:"icon",className:"h-7 w-7",onClick:()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()},children:i.jsx(Ro,{})});function Jo(){const[e]=Xt(),t=qt(),n=new URLSearchParams(e),r=Pe(),o=r[r.length-1],a=o.handle,c=i.jsxs(i.Fragment,{children:[i.jsx(Zo,{}),i.jsx(Ko,{})]}),{uiTools:d,uiFilter:u}=a||{};if(!d&&!u)return i.jsx("div",{className:"flex items-center gap-1",children:c});function l(p,_){_?n.set(p,"1"):n.delete(p),t(`./?${n.toString()}`,{replace:!0})}const f=typeof d=="function"?d(o,r):d,s=!!e.get("filter");return i.jsxs("div",{className:"flex items-center gap-1",children:[u&&i.jsx(ot,{variant:"ghost",size:"icon",className:"h-7 w-7",onClick:()=>l("filter",!s),children:s?i.jsx(Rn,{}):i.jsx(Dn,{})}),c,i.jsx(Ut,{orientation:"vertical",className:"mr-2 h-4"}),f]})}function Qo({...e}){const[t]=Xt(),n=Pe(),r=n[n.length-1],o=r.handle,{uiFilter:a}=o||{};if(!a)return null;const c=!!t.get("filter");return i.jsx(Bt,{collapsible:"none",className:oe("sticky top-0 flex h-svh w-0 border-l transition-all",c&&"w-[--sidebar-width]"),...e,children:typeof a=="function"?a(r,n):a})}function ea(){const e=Pe();return i.jsx($n,{children:i.jsx(Hn,{children:e.map((t,n)=>{const r=n===0;if(r)return null;const o=e[n+1],a=o&&o.id.includes("._index"),c=!mt[`${t.id}._index`],d=t.pathname===e[e.length-1].pathname,u=!r&&n<e.length-1,l=mt[t.id]||t.pathname.split("/").pop()||"home";return i.jsxs(B.Fragment,{children:[i.jsx(Pn,{className:"hidden capitalize md:block",children:d||c||a?i.jsx(zn,{children:l}):i.jsx(Bn,{href:t.pathname,children:l})}),u&&i.jsx(Un,{className:"hidden md:block"})]},t.id)})})})}function pa(){const e=Ot("root");return i.jsxs(On,{open:e.sidebarIsClose!=="true",children:[i.jsx(Wo,{}),i.jsxs(Xn,{children:[i.jsxs("header",{className:"sticky top-0 flex h-16 shrink-0 items-center gap-2 bg-background transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12",children:[i.jsxs("div",{className:"flex items-center gap-2 px-4",children:[i.jsx(Yn,{className:"-ml-1"}),i.jsx(Ut,{orientation:"vertical",className:"mr-2 h-4"}),i.jsx(ea,{})]}),i.jsx("div",{className:"ml-auto px-3",children:i.jsx(Jo,{})})]}),i.jsx("div",{className:"flex flex-1 flex-col gap-4 p-4 pt-0",children:i.jsx(sr,{})})]}),i.jsx(Qo,{})]})}export{pa as L};
//# sourceMappingURL=layout-BvRqsgt_.js.map
