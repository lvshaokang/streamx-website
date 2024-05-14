"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[4813],{61943:(e,t,a)=>{a.d(t,{A:()=>m});var n=a(96540),l=a(21312),r=a(17559),o=a(58168),i=a(20053);const s={iconEdit:"iconEdit_Z9Sw"};function c(e){let{className:t,...a}=e;return n.createElement("svg",(0,o.A)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.A)(s.iconEdit,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function m(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.G.common.editThisPage},n.createElement(c,null),n.createElement(l.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},56133:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(96540),l=a(20053),r=a(75489);const o={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function i(e){let{permalink:t,label:a,count:i}=e;return n.createElement(r.A,{href:t,className:(0,l.A)(o.tag,i?o.tagWithCount:o.tagRegular)},a,i&&n.createElement("span",null,i))}},62053:(e,t,a)=>{a.d(t,{A:()=>s});var n=a(96540),l=a(20053),r=a(21312),o=a(56133);const i={tags:"tags_jXut",tag:"tag_QGVx"};function s(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.A)(i.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:i.tag},n.createElement(o.A,{label:t,permalink:a}))}))))}},7131:(e,t,a)=>{a.d(t,{e:()=>i,i:()=>o});var n=a(96540),l=a(89532);const r=n.createContext(null);function o(e){let{children:t,content:a,isBlogPostPage:l=!1}=e;const o=function(e){let{content:t,isBlogPostPage:a}=e;return(0,n.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:l});return n.createElement(r.Provider,{value:o},t)}function i(){const e=(0,n.useContext)(r);if(null===e)throw new l.dV("BlogPostProvider");return e}},53465:(e,t,a)=>{a.d(t,{W:()=>c});var n=a(96540),l=a(44586);const r=["zero","one","two","few","many","other"];function o(e){return r.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function s(){const{i18n:{currentLocale:e}}=(0,l.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function c(){const e=s();return{selectMessage:(t,a)=>function(e,t,a){const n=e.split("|");if(1===n.length)return n[0];n.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const l=a.select(t),r=a.pluralForms.indexOf(l);return n[Math.min(r,n.length-1)]}(a,t,e)}}},60890:(e,t,a)=>{a.d(t,{A:()=>m});var n=a(96540),l=a(20053),r=a(17559),o=a(21312);const i={note:{infimaClassName:"secondary",iconComponent:function(){return n.createElement("svg",{viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:n.createElement(o.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return n.createElement("svg",{viewBox:"0 0 12 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:n.createElement(o.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return n.createElement("svg",{viewBox:"0 0 12 16"},n.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:n.createElement(o.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return n.createElement("svg",{viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:n.createElement(o.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return n.createElement("svg",{viewBox:"0 0 16 16"},n.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:n.createElement(o.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},s={secondary:"note",important:"info",success:"tip",warning:"danger"};function c(e){const{mdxAdmonitionTitle:t,rest:a}=function(e){const t=n.Children.toArray(e),a=t.find((e=>n.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),l=n.createElement(n.Fragment,null,t.filter((e=>e!==a)));return{mdxAdmonitionTitle:a,rest:l}}(e.children);return{...e,title:e.title??t,children:a}}function m(e){const{children:t,type:a,title:o,icon:m}=c(e),d=function(e){const t=s[e]??e,a=i[t];return a||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),i.info)}(a),u=o??d.label,{iconComponent:g}=d,p=m??n.createElement(g,null);return n.createElement("div",{className:(0,l.A)(r.G.common.admonition,r.G.common.admonitionType(e.type),"alert",`alert--${d.infimaClassName}`,"admonition")},n.createElement("div",{className:(0,l.A)("alert-icon","admonition-icon")},p),n.createElement("div",{className:(0,l.A)("alert-content","admonition-content")},n.createElement("div",{className:"admonition-heading"},u),t))}},73404:(e,t,a)=>{a.d(t,{A:()=>E});var n=a(96540),l=a(20053),r=a(28620),o=a(24581),i=a(75489),s=a(21312),c=a(62388);const m={sidebar:"sidebar_brwN",sidebarItemTitle:"sidebarItemTitle_r4Q1",sidebarItemList:"sidebarItemList_QwSx",sidebarItem:"sidebarItem_lnhn",sidebarItemLink:"sidebarItemLink_yNGZ",sidebarItemLinkActive:"sidebarItemLinkActive_oSRm",backButton:"backButton_MCHS"};function d(e){let{sidebar:t}=e;return n.createElement(c.P.aside,{className:"col col--2 overflow-hidden",initial:{opacity:0,x:-100},animate:{opacity:1,x:0},transition:{type:"spring",stiffness:400,damping:20,duration:.3}},n.createElement("nav",{className:(0,l.A)(m.sidebar,"thin-scrollbar"),"aria-label":(0,s.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:m.backButton,onClick:()=>{window.history.back()}},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24"},n.createElement("path",{fill:"currentColor",d:"M8 7v4L2 6l6-5v4h5a8 8 0 1 1 0 16H4v-2h9a6 6 0 0 0 0-12H8Z"}))),n.createElement(i.A,{href:"/blog",className:(0,l.A)(m.sidebarItemTitle,"margin-bottom--sm")},t.title),n.createElement("ul",{className:(0,l.A)(m.sidebarItemList,"clean-list")},t.items.map((e=>n.createElement("li",{key:e.permalink,className:m.sidebarItem},n.createElement(i.A,{isNavLink:!0,to:e.permalink,className:m.sidebarItemLink,activeClassName:m.sidebarItemLinkActive},e.title)))))))}var u=a(75600);function g(e){let{sidebar:t}=e;return n.createElement("ul",{className:"menu__list"},t.items.map((e=>n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(i.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function p(e){return n.createElement(u.GX,{component:g,props:e})}function h(e){let{sidebar:t}=e;const a=(0,o.l)();return t?.items.length?"mobile"===a?n.createElement(p,{sidebar:t}):n.createElement(d,{sidebar:t}):null}function E(e){const{sidebar:t,toc:a,children:o,...i}=e,s=t&&t.items.length>0;return n.createElement(r.A,i,n.createElement("div",{className:"container-wrapper blog-container"},n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(h,{sidebar:t}),n.createElement("main",{className:(0,l.A)("col",{"col--8 overflow-hidden":s,"col--12":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&n.createElement("div",{className:"col col--2"},a)))))}},52217:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(96540),l=a(21312),r=a(55915);function o(e){const{metadata:t}=e,{previousPage:a,nextPage:o}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,l.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(r.A,{permalink:a,title:n.createElement(l.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),o&&n.createElement(r.A,{permalink:o,title:n.createElement(l.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},63049:(e,t,a)=>{a.d(t,{A:()=>R});var n=a(96540),l=a(20053),r=a(7131),o=a(86025),i=a(44586);function s(e){let{children:t,className:a}=e;const{frontMatter:l,assets:s,metadata:{description:c,date:m},isBlogPostPage:d}=(0,r.e)(),{withBaseUrl:u}=(0,o.h)(),g=s.image??l.image,p=l.keywords??[],h=new Date(m),{i18n:{currentLocale:E}}=(0,i.A)(),f=h.getFullYear();let v=`${h.getMonth()+1}`;const b=h.getDate();let N=`${f}\u5e74${v}\u6708`;return"en"===E&&(v=h.toLocaleString("default",{month:"long"}),N=`${v}, ${f}`),n.createElement("div",{className:""+(d?"":"blog-list--box")},n.createElement("div",{className:"row "+(d?"":"blog-list--item"),style:{margin:0}},!d&&n.createElement("div",{className:"post__date-container col col--3 padding-right--lg margin-bottom--lg"},n.createElement("div",{className:"post__date"},n.createElement("div",{className:"post__day"},b),n.createElement("div",{className:"post__year_month"},N)),n.createElement("div",{className:"line__decor"})),n.createElement("div",{className:"col "+(d?"col--12 article__details article-bg":"col--9")},n.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},c&&n.createElement("meta",{itemProp:"description",content:c}),g&&n.createElement("link",{itemProp:"image",href:u(g,{absolute:!0})}),p.length>0&&n.createElement("meta",{itemProp:"keywords",content:p.join(",")}),t))))}var c=a(75489);const m={blogPostTitle:"blogPostTitle_thoQ",blogPostTitleLink:"blogPostTitleLink_Mh8X",title:"title_xvU1"};function d(e){let{className:t}=e;const{metadata:a,isBlogPostPage:o}=(0,r.e)(),{permalink:i,title:s}=a,d=o?"h1":"h2";return n.createElement(d,{className:(0,l.A)(o?"margin-bottom--md":"margin-vert--md",m.blogPostTitle,o?"text--center":"",t,"post--titleLink"),itemProp:"headline"},o?s:n.createElement("div",{className:m.blogPostTitleLink},n.createElement(c.A,{itemProp:"url",to:i},s)))}var u=a(21312),g=a(53465);const p={"container-blog":"container-blog_SUY0"};function h(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,g.W)();return t=>{const a=Math.ceil(t);return e(a,(0,u.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return n.createElement(n.Fragment,null,a(t))}function E(e){let{date:t,formattedDate:a}=e;return n.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function f(){return n.createElement(n.Fragment,null," \xb7 ")}function v(e){let{className:t}=e;const{metadata:a,isBlogPostPage:o}=(0,r.e)(),{date:i,formattedDate:s,readingTime:c}=a;return o?n.createElement("div",{className:(0,l.A)(p.container,"margin-vert--md",t)},n.createElement(E,{date:i,formattedDate:s}),void 0!==c&&n.createElement(n.Fragment,null,n.createElement(f,null),n.createElement(h,{readingTime:c}))):null}function b(e){return e.href?n.createElement(c.A,e):n.createElement(n.Fragment,null,e.children)}function N(e){let{author:t,className:a}=e;const{name:r,title:o,url:i,imageURL:s,email:c}=t,m=i||c&&`mailto:${c}`||void 0;return n.createElement("div",{className:(0,l.A)("avatar margin-bottom--sm",a)},s&&n.createElement(b,{href:m,className:"avatar__photo-link"},n.createElement("img",{className:"avatar__photo",src:s,alt:r,itemProp:"image"})),r&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(b,{href:m,itemProp:"url"},n.createElement("span",{itemProp:"name"},r))),o&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},o)))}const A={authorCol:"authorCol_q4o9",imageOnlyAuthorRow:"imageOnlyAuthorRow_lXe7",imageOnlyAuthorCol:"imageOnlyAuthorCol_cxD5"};function _(e){let{className:t}=e;const{metadata:{authors:a},assets:o}=(0,r.e)();if(0===a.length)return null;const i=a.every((e=>{let{name:t}=e;return!t}));return n.createElement("div",{className:(0,l.A)("margin-top--md margin-bottom--sm",i?A.imageOnlyAuthorRow:"row",t)},a.map(((e,t)=>n.createElement("div",{className:(0,l.A)(!i&&"col col--6",i?A.imageOnlyAuthorCol:A.authorCol),key:t},n.createElement(N,{author:{...e,imageURL:o.authorsImageUrls[t]??e.imageURL}})))))}function w(){const{metadata:e,isBlogPostPage:t}=(0,r.e)(),{tags:a,hasTruncateMarker:l}=e;return t||0===a.length?null:(a.length>0||l)&&n.createElement("div",{className:"post__tags-container margin-top--none margin-bottom--md"},a.length>0&&n.createElement(n.Fragment,null,n.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"tags",className:"svg-inline--fa fa-tags margin-right--md",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",color:"#c4d3e0"},n.createElement("path",{fill:"currentColor",d:"M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.744 18.745 49.136 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zM112 160c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm513.941 133.823L421.823 497.941c-18.745 18.745-49.137 18.745-67.882 0l-.36-.36L527.64 323.522c16.999-16.999 26.36-39.6 26.36-63.64s-9.362-46.641-26.36-63.64L331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882z"})),a.slice(0,4).map(((e,t)=>{let{label:a,permalink:l}=e;return n.createElement(c.A,{key:l,className:"post__tags "+(t>0?"margin-horiz--sm":"margin-right--sm"),to:l,style:{fontSize:"0.75em",fontWeight:500}},a)}))))}function k(){return n.createElement("header",null,n.createElement(d,null),n.createElement(v,null),n.createElement(_,null),n.createElement(w,null))}var P=a(70440),T=a(19497);function L(e){let{children:t,className:a}=e;const{isBlogPostPage:o}=(0,r.e)();return n.createElement("div",{id:o?P.blogPostContainerID:void 0,className:(0,l.A)("markdown",a),itemProp:"articleBody"},n.createElement(T.A,null,t))}var y=a(61943),C=a(58168);const x={readMore:"readMore_YoYl"};function M(){return n.createElement("b",{className:x.readMore},n.createElement(u.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function B(e){const{blogPostTitle:t,...a}=e;return n.createElement(c.A,(0,C.A)({"aria-label":(0,u.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),n.createElement(M,null))}var z=a(62053);const F={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_Wr5y"};function I(){const{metadata:e,isBlogPostPage:t}=(0,r.e)(),{tags:a,title:o,editUrl:i,hasTruncateMarker:s}=e,c=!t&&s;if(!(c||i))return null;return n.createElement("footer",{className:(0,l.A)("row docusaurus-mt-lg",t&&F.blogPostFooterDetailsFull)},n.createElement("div",{className:"post-footer"},(()=>{if(!t)return null;const e=[];return a.length>0&&e.push(n.createElement("div",{className:(0,l.A)("col",{"col--9":c}),key:"tags"},n.createElement(z.A,{tags:a}))),i&&e.push(n.createElement("div",{className:"col col-3 text--right",key:"editUrl"},n.createElement(y.A,{editUrl:i}))),e})()),c&&n.createElement("div",{className:(0,l.A)("col text--right")},n.createElement(B,{blogPostTitle:o,to:e.permalink})))}function R(e){let{children:t,className:a}=e;const o=function(){const{isBlogPostPage:e}=(0,r.e)();return e?void 0:"margin-bottom--xl"}();return n.createElement(s,{className:(0,l.A)(o,a)},n.createElement(k,null),n.createElement(L,null,t),n.createElement(I,null))}},12886:(e,t,a)=>{a.d(t,{A:()=>s});var n=a(96540),l=a(7131),r=a(63049),o=a(62388);const i={from:{opacity:.01,y:100},to:e=>({opacity:1,y:0,transition:{type:"spring",damping:25,stiffness:100,bounce:.2,duration:.3,delay:.2*e}})};function s(e){let{items:t,component:a=r.A}=e;return n.createElement(n.Fragment,null,t.map(((e,t)=>{let{content:r}=e;return n.createElement(l.i,{key:r.metadata.permalink,content:r},n.createElement(o.P.div,{initial:"from",animate:"to",custom:t,viewport:{once:!0,amount:.8},variants:i},n.createElement(a,null,n.createElement(r,null))))})))}},84549:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var n=a(96540),l=a(20053),r=a(21312),o=a(53465),i=a(1003),s=a(17559),c=a(75489),m=a(73404),d=a(52217),u=a(41463),g=a(12886);function p(e){const t=function(){const{selectMessage:e}=(0,o.W)();return t=>e(t,(0,r.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,r.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function h(e){let{tag:t}=e;const a=p(t);return n.createElement(n.Fragment,null,n.createElement(i.be,{title:a}),n.createElement(u.A,{tag:"blog_tags_posts"}))}function E(e){let{tag:t,items:a,sidebar:l,listMetadata:o}=e;const i=p(t);return n.createElement(m.A,{sidebar:l},n.createElement("header",{className:"margin-bottom--xl"},n.createElement("h1",null,i),n.createElement(c.A,{href:t.allTagsPath},n.createElement(r.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),n.createElement(g.A,{items:a}),n.createElement(d.A,{metadata:o}))}function f(e){return n.createElement(i.e3,{className:(0,l.A)(s.G.wrapper.blogPages,s.G.page.blogTagPostListPage)},n.createElement(h,e),n.createElement(E,e))}},20356:(e,t,a)=>{a.d(t,{A:()=>s});var n=a(58168),l=a(96540),r=a(20053),o=a(17559);const i={codeBlockContainer:"codeBlockContainer_APcc"};function s(e){let{as:t,...a}=e;return l.createElement(t,(0,n.A)({},a,{className:(0,r.A)(a.className,i.codeBlockContainer,o.G.common.codeBlock)}))}},53997:(e,t,a)=>{a.d(t,{A:()=>c});var n=a(58168),l=a(96540),r=a(20053),o=a(83551);const i={details:"details_r1OI"},s="alert alert--info";function c(e){let{...t}=e;return l.createElement(o.B,(0,n.A)({},t,{className:(0,r.A)(s,i.details,t.className)}))}},55915:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(96540),l=a(20053),r=a(75489);const o={paginationNavLink:"paginationNavLink_UdUv","pagination-nav__link--next":"pagination-nav__link--next_UjCy",paginationNavLabel:"paginationNavLabel_YPzM",paginationNavContent:"paginationNavContent__3xr"};function i(e){const{permalink:t,title:a,subLabel:i,isNext:s}=e;return n.createElement(r.A,{className:(0,l.A)("pagination-nav__link",s?"pagination-nav__link--next":"pagination-nav__link--prev",o.paginationNavLink),to:t},!s&&n.createElement("svg",{width:"24",height:"25",viewBox:"0 0 24 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"M9.2751 19.175L10.3251 18.125L5.4501 13.25H21.6001V11.75H5.4501L10.3251 6.87501L9.2751 5.82501L2.5751 12.5L9.2751 19.175Z",fill:"currentColor"})),n.createElement("div",{className:o.paginationNavContent},i&&n.createElement("div",{className:"pagination-nav__sublabel"},i),n.createElement("div",{className:(0,l.A)(o.paginationNavLabel,"pagination-nav__label")},a)),s&&n.createElement("svg",{width:"24",height:"25",viewBox:"0 0 24 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"M14.7249 19.175L13.6749 18.125L18.5499 13.25H2.3999V11.75H18.5499L13.6749 6.87501L14.7249 5.82501L21.4249 12.5L14.7249 19.175Z",fill:"currentColor"})))}}}]);