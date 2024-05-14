"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[5910],{15680:(e,r,t)=>{t.d(r,{xA:()=>s,yg:()=>f});var a=t(96540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),i=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=i(e.components);return a.createElement(l.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},g=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=i(t),g=n,f=u["".concat(l,".").concat(g)]||u[g]||m[g]||o;return t?a.createElement(f,c(c({ref:r},s),{},{components:t})):a.createElement(f,c({ref:r},s))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=g;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p[u]="string"==typeof e?e:n,c[1]=p;for(var i=2;i<o;i++)c[i]=t[i];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},71803:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var a=t(58168),n=(t(96540),t(15680));const o={slug:"streampark-usercase-changan",title:"\u957f\u5b89\u6c7d\u8f66\u4ece\u81ea\u7814\u5e73\u53f0\u5230Apache StreamPark\u2122 \u7684\u5347\u7ea7\u5b9e\u8df5",tags:["StreamPark","\u751f\u4ea7\u5b9e\u8df5"]},c=void 0,p={permalink:"/zh-CN/blog/streampark-usercase-changan",editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/blog/9-streampark-usercase-changan.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/9-streampark-usercase-changan.md",title:"\u957f\u5b89\u6c7d\u8f66\u4ece\u81ea\u7814\u5e73\u53f0\u5230Apache StreamPark\u2122 \u7684\u5347\u7ea7\u5b9e\u8df5",description:"\u5bfc\u8bfb\uff1a\u957f\u5b89\u6c7d\u8f66\u662f\u4e2d\u56fd\u6c7d\u8f66\u56db\u5927\u96c6\u7fa4\u9635\u8425\u4f01\u4e1a\u4e4b\u4e00\uff0c\u968f\u7740\u4e1a\u52a1\u53d1\u5c55\u548c\u6570\u667a\u5316\u7684\u63a8\u8fdb\uff0c\u5bf9\u6570\u636e\u7684\u5b9e\u6548\u6027\u8981\u6c42\u8d8a\u6765\u8d8a\u9ad8\uff0cFlink \u4f5c\u4e1a\u8d8a\u6765\u8d8a\u591a\uff0c\u957f\u5b89\u6c7d\u8f66\u539f\u672c\u5f00\u53d1\u4e86\u4e00\u5957\u6d41\u5e94\u7528\u5e73\u53f0\uff0c\u7528\u6765\u6ee1\u8db3\u5f00\u53d1\u4eba\u5458\u5bf9\u4e8e Flink \u4f5c\u4e1a\u7ba1\u7406\u548c\u8fd0\u7ef4\u5de5\u4f5c\u7684\u57fa\u7840\u9700\u6c42\uff0c\u4f46\u662f\u5728\u5b9e\u9645\u4f7f\u7528\u4e2d\u9762\u4e34\u8bf8\u591a\u6311\u6218\u548c\u56f0\u5883\uff0c\u6700\u7ec8\u4f7f\u7528 Apache StreamPark \u6765\u4f5c\u4e3a\u4e00\u7ad9\u5f0f\u5b9e\u65f6\u8ba1\u7b97\u5e73\u53f0\uff0c\u6709\u6548\u89e3\u51b3\u4e86\u4e4b\u524d\u9762\u4e34\u7684\u8bf8\u591a\u56f0\u5883\uff0cStreamPark \u63d0\u4f9b\u7684\u89e3\u51b3\u65b9\u6848\u7b80\u5316\u4e86\u6574\u4e2a\u5f00\u53d1\u6d41\u7a0b\uff0c\u5728 Flink \u4f5c\u4e1a\u5f00\u53d1\u90e8\u7f72\u4e0a\u8282\u7701\u4e86\u5f88\u591a\u65f6\u95f4\uff0c\u8d70\u51fa\u4e86\u4f5c\u4e1a\u8fd0\u7ef4\u7ba1\u7406\u7684\u6ce5\u6cbc\uff0c\u663e\u8457\u5730\u63d0\u5347\u4e86\u6548\u7387\u3002",date:"2024-05-13T02:24:37.000Z",formattedDate:"2024\u5e745\u670813\u65e5",tags:[{label:"StreamPark",permalink:"/zh-CN/blog/tags/stream-park"},{label:"\u751f\u4ea7\u5b9e\u8df5",permalink:"/zh-CN/blog/tags/\u751f\u4ea7\u5b9e\u8df5"}],readingTime:14.23,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"streampark-usercase-changan",title:"\u957f\u5b89\u6c7d\u8f66\u4ece\u81ea\u7814\u5e73\u53f0\u5230Apache StreamPark\u2122 \u7684\u5347\u7ea7\u5b9e\u8df5",tags:["StreamPark","\u751f\u4ea7\u5b9e\u8df5"]},prevItem:{title:"\u81ea\u5982\u57fa\u4e8eApache StreamPark\u2122 \u7684\u5b9e\u65f6\u8ba1\u7b97\u5e73\u53f0\u5b9e\u8df5",permalink:"/zh-CN/blog/streampark-usercase-ziru"}},l={authorsImageUrls:[]},i=[],s={toc:i},u="wrapper";function m(e){let{components:r,...o}=e;return(0,n.yg)(u,(0,a.A)({},s,o,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("img",{src:t(87910).A,width:"1080",height:"460"})),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"\u5bfc\u8bfb"),"\uff1a\u957f\u5b89\u6c7d\u8f66\u662f\u4e2d\u56fd\u6c7d\u8f66\u56db\u5927\u96c6\u7fa4\u9635\u8425\u4f01\u4e1a\u4e4b\u4e00\uff0c\u968f\u7740\u4e1a\u52a1\u53d1\u5c55\u548c\u6570\u667a\u5316\u7684\u63a8\u8fdb\uff0c\u5bf9\u6570\u636e\u7684\u5b9e\u6548\u6027\u8981\u6c42\u8d8a\u6765\u8d8a\u9ad8\uff0cFlink \u4f5c\u4e1a\u8d8a\u6765\u8d8a\u591a\uff0c\u957f\u5b89\u6c7d\u8f66\u539f\u672c\u5f00\u53d1\u4e86\u4e00\u5957\u6d41\u5e94\u7528\u5e73\u53f0\uff0c\u7528\u6765\u6ee1\u8db3\u5f00\u53d1\u4eba\u5458\u5bf9\u4e8e Flink \u4f5c\u4e1a\u7ba1\u7406\u548c\u8fd0\u7ef4\u5de5\u4f5c\u7684\u57fa\u7840\u9700\u6c42\uff0c\u4f46\u662f\u5728\u5b9e\u9645\u4f7f\u7528\u4e2d\u9762\u4e34\u8bf8\u591a\u6311\u6218\u548c\u56f0\u5883\uff0c\u6700\u7ec8\u4f7f\u7528 Apache StreamPark \u6765\u4f5c\u4e3a\u4e00\u7ad9\u5f0f\u5b9e\u65f6\u8ba1\u7b97\u5e73\u53f0\uff0c\u6709\u6548\u89e3\u51b3\u4e86\u4e4b\u524d\u9762\u4e34\u7684\u8bf8\u591a\u56f0\u5883\uff0cStreamPark \u63d0\u4f9b\u7684\u89e3\u51b3\u65b9\u6848\u7b80\u5316\u4e86\u6574\u4e2a\u5f00\u53d1\u6d41\u7a0b\uff0c\u5728 Flink \u4f5c\u4e1a\u5f00\u53d1\u90e8\u7f72\u4e0a\u8282\u7701\u4e86\u5f88\u591a\u65f6\u95f4\uff0c\u8d70\u51fa\u4e86\u4f5c\u4e1a\u8fd0\u7ef4\u7ba1\u7406\u7684\u6ce5\u6cbc\uff0c\u663e\u8457\u5730\u63d0\u5347\u4e86\u6548\u7387\u3002"),(0,n.yg)("p",null,"\u4f9b\u7a3f\u5355\u4f4d\uff5c\u957f\u5b89\u667a\u80fd\u5316\u7814\u7a76\u9662\u4e91\u5e73\u53f0\u5f00\u53d1\u6240"),(0,n.yg)("p",null,"\u7f16\u8f91\u6821\u5bf9\uff5c\u6f58\u6708\u9e4f"))}m.isMDXComponent=!0},87910:(e,r,t)=>{t.d(r,{A:()=>a});const a=t.p+"assets/images/cover-cfb54d18805b5d425d6bbd2659db2533.png"}}]);