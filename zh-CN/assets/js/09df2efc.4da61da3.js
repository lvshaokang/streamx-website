"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[2498],{15680:(e,r,t)=>{t.d(r,{xA:()=>s,yg:()=>k});var a=t(96540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=a.createContext({}),c=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=c(e.components);return a.createElement(p.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},f=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(t),f=n,k=m["".concat(p,".").concat(f)]||m[f]||u[f]||o;return t?a.createElement(k,i(i({ref:r},s),{},{components:t})):a.createElement(k,i({ref:r},s))}));function k(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l[m]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},90706:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=t(58168),n=(t(96540),t(15680));const o={slug:"flink-development-framework-streampark",title:"Flink \u5f00\u53d1\u5229\u5668 Apache StreamPark\u2122",tags:["StreamPark","DataStream","FlinkSQL"]},i=void 0,l={permalink:"/zh-CN/blog/flink-development-framework-streampark",editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/blog/1-flink-framework-streampark.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/1-flink-framework-streampark.md",title:"Flink \u5f00\u53d1\u5229\u5668 Apache StreamPark\u2122",description:"Hadoop \u4f53\u7cfb\u867d\u7136\u5728\u76ee\u524d\u5e94\u7528\u975e\u5e38\u5e7f\u6cdb\uff0c\u4f46\u67b6\u6784\u7e41\u7410\u3001\u8fd0\u7ef4\u590d\u6742\u5ea6\u8fc7\u9ad8\u3001\u7248\u672c\u5347\u7ea7\u56f0\u96be\uff0c\u4e14\u7531\u4e8e\u90e8\u95e8\u539f\u56e0\uff0c\u6570\u636e\u4e2d\u53f0\u9700\u6c42\u6392\u671f\u8f83\u957f\uff0c\u6211\u4eec\u6025\u9700\u63a2\u7d22\u654f\u6377\u6027\u5f00\u53d1\u7684\u6570\u636e\u5e73\u53f0\u6a21\u5f0f\u3002\u5728\u76ee\u524d\u4e91\u539f\u751f\u67b6\u6784\u7684\u666e\u53ca\u548c\u6e56\u4ed3\u4e00\u4f53\u5316\u7684\u5927\u80cc\u666f\u4e0b\uff0c\u6211\u4eec\u5df2\u7ecf\u786e\u5b9a\u4e86\u5c06 Doris \u4f5c\u4e3a\u79bb\u7ebf\u6570\u636e\u4ed3\u5e93\uff0c\u5c06 TiDB\uff08\u76ee\u524d\u5df2\u7ecf\u5e94\u7528\u4e8e\u751f\u4ea7\uff09\u4f5c\u4e3a\u5b9e\u65f6\u6570\u636e\u5e73\u53f0\uff0c\u540c\u65f6\u56e0\u4e3a Doris \u5177\u6709 on MySQL \u7684 ODBC \u80fd\u529b\uff0c\u6240\u4ee5\u53c8\u53ef\u4ee5\u5bf9\u5916\u90e8\u6570\u636e\u5e93\u8d44\u6e90\u8fdb\u884c\u6574\u5408\uff0c\u7edf\u4e00\u5bf9\u5916\u8f93\u51fa\u62a5\u8868",date:"2024-05-13T02:24:37.000Z",formattedDate:"2024\u5e745\u670813\u65e5",tags:[{label:"StreamPark",permalink:"/zh-CN/blog/tags/stream-park"},{label:"DataStream",permalink:"/zh-CN/blog/tags/data-stream"},{label:"FlinkSQL",permalink:"/zh-CN/blog/tags/flink-sql"}],readingTime:15.375,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"flink-development-framework-streampark",title:"Flink \u5f00\u53d1\u5229\u5668 Apache StreamPark\u2122",tags:["StreamPark","DataStream","FlinkSQL"]},prevItem:{title:"Apache StreamPark\u2122 Flink on Kubernetes \u5b9e\u8df5",permalink:"/zh-CN/blog/streampark-flink-on-k8s"},nextItem:{title:"\u81ea\u5982\u57fa\u4e8e Apache StreamPark\u2122 + Paimon \u5b9e\u73b0\u6570\u636e\u4e00\u952e\u5165\u6e56\u6700\u4f73\u5b9e\u8df5",permalink:"/zh-CN/blog/streampark-flink-with-paimon-in-ziru"}},p={authorsImageUrls:[]},c=[],s={toc:c},m="wrapper";function u(e){let{components:r,...o}=e;return(0,n.yg)(m,(0,a.A)({},s,o,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("br",null),(0,n.yg)("p",null,"Hadoop \u4f53\u7cfb\u867d\u7136\u5728\u76ee\u524d\u5e94\u7528\u975e\u5e38\u5e7f\u6cdb\uff0c\u4f46\u67b6\u6784\u7e41\u7410\u3001\u8fd0\u7ef4\u590d\u6742\u5ea6\u8fc7\u9ad8\u3001\u7248\u672c\u5347\u7ea7\u56f0\u96be\uff0c\u4e14\u7531\u4e8e\u90e8\u95e8\u539f\u56e0\uff0c\u6570\u636e\u4e2d\u53f0\u9700\u6c42\u6392\u671f\u8f83\u957f\uff0c\u6211\u4eec\u6025\u9700\u63a2\u7d22\u654f\u6377\u6027\u5f00\u53d1\u7684\u6570\u636e\u5e73\u53f0\u6a21\u5f0f\u3002\u5728\u76ee\u524d\u4e91\u539f\u751f\u67b6\u6784\u7684\u666e\u53ca\u548c\u6e56\u4ed3\u4e00\u4f53\u5316\u7684\u5927\u80cc\u666f\u4e0b\uff0c\u6211\u4eec\u5df2\u7ecf\u786e\u5b9a\u4e86\u5c06 Doris \u4f5c\u4e3a\u79bb\u7ebf\u6570\u636e\u4ed3\u5e93\uff0c\u5c06 TiDB\uff08\u76ee\u524d\u5df2\u7ecf\u5e94\u7528\u4e8e\u751f\u4ea7\uff09\u4f5c\u4e3a\u5b9e\u65f6\u6570\u636e\u5e73\u53f0\uff0c\u540c\u65f6\u56e0\u4e3a Doris \u5177\u6709 on MySQL \u7684 ODBC \u80fd\u529b\uff0c\u6240\u4ee5\u53c8\u53ef\u4ee5\u5bf9\u5916\u90e8\u6570\u636e\u5e93\u8d44\u6e90\u8fdb\u884c\u6574\u5408\uff0c\u7edf\u4e00\u5bf9\u5916\u8f93\u51fa\u62a5\u8868"),(0,n.yg)("p",null,(0,n.yg)("img",{src:t(82594).A,width:"1200",height:"738"})))}u.isMDXComponent=!0},82594:(e,r,t)=>{t.d(r,{A:()=>a});const a=t.p+"assets/images/doris-4baaea78343b928b0a798ae9238c489f.png"}}]);