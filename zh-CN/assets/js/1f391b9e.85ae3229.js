"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[6061],{67973:(e,n,t)=>{t.r(n),t.d(n,{default:()=>d});var a=t(96540),i=t(20053),l=t(1003),o=t(17559),c=t(28620),r=t(19497),s=t(96054);const m={mdxPageWrapper:"mdxPageWrapper_j9I6"};function d(e){const{content:n}=e,{metadata:{title:t,description:d,frontMatter:u}}=n,{wrapperClassName:f,hide_table_of_contents:v}=u;return a.createElement(l.e3,{className:(0,i.A)(f??o.G.wrapper.mdxPages,o.G.page.mdxPage)},a.createElement(l.be,{title:t,description:d}),a.createElement(c.A,null,a.createElement("main",{className:"container container--fluid margin-vert--lg"},a.createElement("div",{className:(0,i.A)("row",m.mdxPageWrapper)},a.createElement("div",{className:(0,i.A)("col",!v&&"col--8")},a.createElement("article",null,a.createElement(r.A,null,a.createElement(n,null)))),!v&&n.toc.length>0&&a.createElement("div",{className:"col col--2"},a.createElement(s.A,{toc:n.toc,minHeadingLevel:u.toc_min_heading_level,maxHeadingLevel:u.toc_max_heading_level}))))))}},65195:(e,n,t)=>{t.d(n,{A:()=>v});var a=t(58168),i=t(96540),l=t(6342);function o(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const a=t.slice(2,e.level);e.parentIndex=Math.max(...a),t[e.level]=n}));const a=[];return n.forEach((e=>{const{parentIndex:t,...i}=e;t>=0?n[t].children.push(i):a.push(i)})),a}function c(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return n.flatMap((e=>{const n=c({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[{...e,children:n}]:n}))}function r(e){const n=e.getBoundingClientRect();return n.top===n.bottom?r(e.parentNode):n}function s(e,n){let{anchorTopOffset:t}=n;const a=e.find((e=>r(e).top>=t));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function m(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:n}}=(0,l.p)();return(0,i.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,i.useRef)(void 0),t=m();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:i,minHeadingLevel:l,maxHeadingLevel:o}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),c=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const a=[];for(let i=n;i<=t;i+=1)a.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:o}),r=s(c,{anchorTopOffset:t.current}),m=e.find((e=>r&&r.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(i),e.classList.add(i),n.current=e):e.classList.remove(i)}(e,e===m)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,t])}function u(e){let{toc:n,className:t,linkClassName:a,isChild:l}=e;return n.length?i.createElement("ul",{className:l?void 0:t},n.map((e=>i.createElement("li",{key:e.id},i.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(u,{isChild:!0,toc:e.children,className:t,linkClassName:a}))))):null}const f=i.memo(u);function v(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:m,maxHeadingLevel:u,...v}=e;const h=(0,l.p)(),p=m??h.tableOfContents.minHeadingLevel,g=u??h.tableOfContents.maxHeadingLevel,E=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,i.useMemo)((()=>c({toc:o(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:p,maxHeadingLevel:g});return d((0,i.useMemo)((()=>{if(r&&s)return{linkClassName:r,linkActiveClassName:s,minHeadingLevel:p,maxHeadingLevel:g}}),[r,s,p,g])),i.createElement(f,(0,a.A)({toc:E,className:t,linkClassName:r},v))}},60890:(e,n,t)=>{t.d(n,{A:()=>m});var a=t(96540),i=t(20053),l=t(17559),o=t(21312);const c={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(o.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(o.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(o.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(o.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(o.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},r={secondary:"note",important:"info",success:"tip",warning:"danger"};function s(e){const{mdxAdmonitionTitle:n,rest:t}=function(e){const n=a.Children.toArray(e),t=n.find((e=>a.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),i=a.createElement(a.Fragment,null,n.filter((e=>e!==t)));return{mdxAdmonitionTitle:t,rest:i}}(e.children);return{...e,title:e.title??n,children:t}}function m(e){const{children:n,type:t,title:o,icon:m}=s(e),d=function(e){const n=r[e]??e,t=c[n];return t||(console.warn(`No admonition config found for admonition type "${n}". Using Info as fallback.`),c.info)}(t),u=o??d.label,{iconComponent:f}=d,v=m??a.createElement(f,null);return a.createElement("div",{className:(0,i.A)(l.G.common.admonition,l.G.common.admonitionType(e.type),"alert",`alert--${d.infimaClassName}`,"admonition")},a.createElement("div",{className:(0,i.A)("alert-icon","admonition-icon")},v),a.createElement("div",{className:(0,i.A)("alert-content","admonition-content")},a.createElement("div",{className:"admonition-heading"},u),n))}},20356:(e,n,t)=>{t.d(n,{A:()=>r});var a=t(58168),i=t(96540),l=t(20053),o=t(17559);const c={codeBlockContainer:"codeBlockContainer_APcc"};function r(e){let{as:n,...t}=e;return i.createElement(n,(0,a.A)({},t,{className:(0,l.A)(t.className,c.codeBlockContainer,o.G.common.codeBlock)}))}},53997:(e,n,t)=>{t.d(n,{A:()=>s});var a=t(58168),i=t(96540),l=t(20053),o=t(83551);const c={details:"details_r1OI"},r="alert alert--info";function s(e){let{...n}=e;return i.createElement(o.B,(0,a.A)({},n,{className:(0,l.A)(r,c.details,n.className)}))}},96054:(e,n,t)=>{t.d(n,{A:()=>d});var a=t(58168),i=t(96540),l=t(20053),o=t(65195);const c={tableOfContents:"tableOfContents_jeP5"};var r=t(62388);const s="table-of-contents__link toc-highlight",m="table-of-contents__link--active";function d(e){let{className:n,...t}=e;return i.createElement(r.P.div,{className:(0,l.A)(c.tableOfContents,"thin-scrollbar",n),initial:{opacity:0,x:100},animate:{opacity:1,x:0},transition:{type:"spring",stiffness:400,damping:20,duration:.3}},i.createElement(o.A,(0,a.A)({},t,{linkClassName:s,linkActiveClassName:m})))}}}]);