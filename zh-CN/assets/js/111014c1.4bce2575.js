"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[5433],{15680:(e,n,a)=>{a.d(n,{xA:()=>y,yg:()=>c});var r=a(96540);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function t(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,r,i=function(e,n){if(null==e)return{};var a,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var u=r.createContext({}),o=function(e){var n=r.useContext(u),a=n;return e&&(a="function"==typeof e?e(n):t(t({},n),e)),a},y=function(e){var n=o(e.components);return r.createElement(u.Provider,{value:n},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var a=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,y=p(e,["components","mdxType","originalType","parentName"]),g=o(a),s=i,c=g["".concat(u,".").concat(s)]||g[s]||m[s]||l;return a?r.createElement(c,t(t({ref:n},y),{},{components:a})):r.createElement(c,t({ref:n},y))}));function c(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=a.length,t=new Array(l);t[0]=s;var p={};for(var u in n)hasOwnProperty.call(n,u)&&(p[u]=n[u]);p.originalType=e,p[g]="string"==typeof e?e:i,t[1]=p;for(var o=2;o<l;o++)t[o]=a[o];return r.createElement.apply(null,t)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},21813:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>t,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var r=a(58168),i=(a(96540),a(15680));const l={id:"YarnQueueManagement",title:"Yarn\u961f\u5217\u7ba1\u7406",sidebar_position:8},t=void 0,p={unversionedId:"user-guide/YarnQueueManagement",id:"user-guide/YarnQueueManagement",title:"Yarn\u961f\u5217\u7ba1\u7406",description:"\u80cc\u666f\u4ecb\u7ecd",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user-guide/8-YarnQueueManagement.md",sourceDirName:"user-guide",slug:"/user-guide/YarnQueueManagement",permalink:"/zh-CN/docs/user-guide/YarnQueueManagement",draft:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/user-guide/8-YarnQueueManagement.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"YarnQueueManagement",title:"Yarn\u961f\u5217\u7ba1\u7406",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"\u53d8\u91cf\u7ba1\u7406",permalink:"/zh-CN/docs/user-guide/Variable"},next:{title:"\u6269\u5c55\u94fe\u63a5",permalink:"/zh-CN/docs/user-guide/ExternalLink"}},u={},o=[{value:"\u80cc\u666f\u4ecb\u7ecd",id:"\u80cc\u666f\u4ecb\u7ecd",level:2},{value:"\u5982\u4f55\u521b\u5efaYarn\u961f\u5217",id:"\u5982\u4f55\u521b\u5efayarn\u961f\u5217",level:2},{value:"\u5982\u4f55\u4f7f\u7528\u53ef\u7528\u961f\u5217",id:"\u5982\u4f55\u4f7f\u7528\u53ef\u7528\u961f\u5217",level:2},{value:"\u8be5\u529f\u80fd\u7684\u76f8\u5173\u6761\u76ee",id:"\u8be5\u529f\u80fd\u7684\u76f8\u5173\u6761\u76ee",level:2}],y={toc:o},g="wrapper";function m(e){let{components:n,...a}=e;return(0,i.yg)(g,(0,r.A)({},y,a,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"\u80cc\u666f\u4ecb\u7ecd"},"\u80cc\u666f\u4ecb\u7ecd"),(0,i.yg)("p",null,"\u5728\u5b9e\u9645\u7684\u751f\u4ea7\u73af\u5883\u4e2d\uff0c\u9488\u5bf9 ",(0,i.yg)("inlineCode",{parentName:"p"},"Yarn \u90e8\u7f72\u6a21\u5f0f"),"\uff0c\n\u7528\u6237\u901a\u5e38\u9700\u8981\u8f93\u5165 ",(0,i.yg)("inlineCode",{parentName:"p"},"queue")," \u6216 ",(0,i.yg)("inlineCode",{parentName:"p"},"queue"),"&",(0,i.yg)("inlineCode",{parentName:"p"},"labels")," \u6765\u6307\u5b9a\n",(0,i.yg)("inlineCode",{parentName:"p"},"yarn-application")," \u6a21\u5f0f\u4e0b\u7684 Flink \u5e94\u7528\u7a0b\u5e8f\n\u6216 ",(0,i.yg)("inlineCode",{parentName:"p"},"yarn-session")," \u6a21\u5f0f\u4e0b\u7684 Flink \u96c6\u7fa4\u7684\u914d\u7f6e\u3002\n\u5728\u6b64\u8fc7\u7a0b\u4e2d\uff0c\u7528\u6237\u7684\u624b\u52a8\u8f93\u5165\u53ef\u80fd\u4f1a\u5bfc\u81f4\u9519\u8bef\uff0c\n\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6307\u5b9a\u4e0d\u5b58\u5728\u7684\u961f\u5217\uff0c\u6216\u8005\u5c06 ",(0,i.yg)("inlineCode",{parentName:"p"},"flink \u5e94\u7528\u7a0b\u5e8f")," / ",(0,i.yg)("inlineCode",{parentName:"p"},"flink \u96c6\u7fa4"),"\n\u63d0\u4ea4\u5230\u9519\u8bef\u7684\u961f\u5217\u4e2d\u3002"),(0,i.yg)("p",null,"\u5982\u679c Yarn \u96c6\u7fa4\u4e2d\u4e0d\u5305\u542b\u7528\u6237\u6307\u5b9a\u7684\u961f\u5217\uff0c\n\u90a3\u4e48\u90e8\u7f72 ",(0,i.yg)("inlineCode",{parentName:"p"},"flink \u5e94\u7528\u7a0b\u5e8f")," / ",(0,i.yg)("inlineCode",{parentName:"p"},"flink \u96c6\u7fa4")," \u7684\u8fc7\u7a0b\n\u5c06\u4f1a\u8017\u65f6\uff0c\u5e76\u4f34\u968f\u7740\u7cdf\u7cd5\u7684\u7528\u6237\u4f53\u9a8c\u3002\n\u5982\u679c\u7531\u4e8e\u8f93\u5165\u9519\u8bef\u800c\u5c06\u4efb\u52a1\u63d0\u4ea4\u5230\u9519\u8bef\u7684\u961f\u5217\u4e2d\uff0c\n\u53ef\u80fd\u4f1a\u5f71\u54cd\u961f\u5217\u4e0a Yarn \u5e94\u7528\u7a0b\u5e8f\u7684\u7a33\u5b9a\u6027\uff0c\u5e76\u6ee5\u7528\u961f\u5217\u8d44\u6e90\u3002"),(0,i.yg)("p",null,"\u56e0\u6b64\uff0cStreamPark \u5f15\u5165\u4e86\u961f\u5217\u7ba1\u7406\u529f\u80fd\uff0c\u4ee5\u786e\u4fdd\u4e00\u7ec4\u6dfb\u52a0\u7684\u961f\u5217\u5728\u540c\u4e00\u56e2\u961f\u5185\u5171\u4eab\uff0c\n\u4e5f\u5c31\u662f\u786e\u4fdd\u961f\u5217\u8d44\u6e90\u5728\u56e2\u961f\u8303\u56f4\u5185\u662f\u9694\u79bb\u7684\u3002\u5b83\u53ef\u4ee5\u4ea7\u751f\u4ee5\u4e0b\u597d\u5904\uff1a"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u5f53\u90e8\u7f72 Flink ",(0,i.yg)("inlineCode",{parentName:"li"},"yarn-application")," \u5e94\u7528\u7a0b\u5e8f\u6216 Flink ",(0,i.yg)("inlineCode",{parentName:"li"},"yarn-session")," \u96c6\u7fa4\u65f6\uff0c\n\u5b83\u53ef\u4ee5\u5feb\u901f\u51c6\u786e\u5730\u8bbe\u7f6e Yarn \u961f\u5217\uff08",(0,i.yg)("inlineCode",{parentName:"li"},"yarn.application.queue"),"\uff09\u548c\u6807\u7b7e\uff08",(0,i.yg)("inlineCode",{parentName:"li"},"yarn.application.node-label"),"\uff09\u3002"),(0,i.yg)("li",{parentName:"ul"},"\u5b83\u4e0d\u4ec5\u786e\u4fdd\u4e86\u961f\u5217\u548c\u6807\u7b7e\u8f93\u5165\u7684\u6b63\u786e\u6027\uff0c\n\u800c\u4e14\u7f29\u77ed\u4e86\u7531\u4e8e\u9519\u8bef\u961f\u5217\u5bfc\u81f4\u5e94\u7528\u7a0b\u5e8f\u5931\u8d25\u7684\u65f6\u95f4\u6d88\u8017\uff0c\n\u5373\u5c3d\u65e9\u63d0\u793a\u7528\u6237\u961f\u5217\u8bbe\u7f6e\u7ed3\u679c\u662f\u5426\u6b63\u786e\uff0c\u63d0\u9ad8\u4ea4\u4e92\u6548\u7387\u3002"),(0,i.yg)("li",{parentName:"ul"},"\u6709\u6548\u9632\u6b62\u6ee5\u7528\u961f\u5217\u8d44\u6e90\u3002")),(0,i.yg)("h2",{id:"\u5982\u4f55\u521b\u5efayarn\u961f\u5217"},"\u5982\u4f55\u521b\u5efaYarn\u961f\u5217"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\u524d\u63d0\u6761\u4ef6\n\u60a8\u5fc5\u987b\u4fdd\u7559\u4e00\u4e2a\u7ba1\u7406\u5458\u7528\u6237\u5e10\u6237\u3002\u5728\u672c\u4f8b\u4e2d\uff0c\u7ba1\u7406\u5458\u7528\u6237 ",(0,i.yg)("inlineCode",{parentName:"p"},"admin")," \u7528\u4e8e\u767b\u5f55\u7cfb\u7edf\u4e2d\u7684 ",(0,i.yg)("inlineCode",{parentName:"p"},"default")," \u56e2\u961f\u3002")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\u5b9a\u4f4d ",(0,i.yg)("inlineCode",{parentName:"p"},"Yarn \u961f\u5217")," \u9875\u9762\u7684 ",(0,i.yg)("inlineCode",{parentName:"p"},"\u6dfb\u52a0")," \u6309\u94ae\uff0c\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u548c\u56fe\u793a\u64cd\u4f5c\uff1a"),(0,i.yg)("ol",{parentName:"li"},(0,i.yg)("li",{parentName:"ol"},"\u4f7f\u7528\u7ba1\u7406\u5458\u7528\u6237\u5e10\u6237\u767b\u5f55\u7cfb\u7edf\uff0c\u5e76\u9009\u62e9\u76ee\u6807\u56e2\u961f\u3002"),(0,i.yg)("li",{parentName:"ol"},"\u5355\u51fb ",(0,i.yg)("inlineCode",{parentName:"li"},"\u8bbe\u7f6e"),"\u3002"),(0,i.yg)("li",{parentName:"ol"},"\u5355\u51fb ",(0,i.yg)("inlineCode",{parentName:"li"},"Yarn \u961f\u5217"),"\u3002"),(0,i.yg)("li",{parentName:"ol"},"\u5355\u51fb ",(0,i.yg)("inlineCode",{parentName:"li"},"\u6dfb\u52a0"),"\u3002",(0,i.yg)("img",{src:"/doc/image/yarn-queue/flow_to_create.png"}),(0,i.yg)("br",null),(0,i.yg)("br",null)))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\u5728\u961f\u5217\u5b57\u6bb5\u4e2d\u8f93\u5165\u4fe1\u606f\u3002"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"\u521b\u5efa\u4e00\u4e2a\u5e72\u51c0\u7684\u961f\u5217\u3002",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"\u8f93\u5165\u6240\u9700\u7684yarn\u961f\u5217\u540d\u79f0"),(0,i.yg)("li",{parentName:"ul"},"\u5982\u679c\u9700\u8981\uff0c\u8f93\u5165\u53ef\u9009\u7684yarn\u961f\u5217\u63cf\u8ff0\u3002"),(0,i.yg)("li",{parentName:"ul"},"\u5355\u51fb",(0,i.yg)("inlineCode",{parentName:"li"},"\u786e\u8ba4"),"\u3002",(0,i.yg)("img",{src:"/doc/image/yarn-queue/flow_to_type_in_pure_queue.png"}),(0,i.yg)("br",null),(0,i.yg)("br",null)))),(0,i.yg)("li",{parentName:"ul"},"\u521b\u5efa\u4e00\u4e2a\u5e26\u6709\u6807\u7b7e\u7684\u961f\u5217\u3002",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"\u8f93\u5165\u6240\u9700\u7684yarn\u961f\u5217\u6807\u7b7e\u540d\u79f0\u3002\n\u961f\u5217\u6807\u7b7e\uff0c\u4f8b\u5982",(0,i.yg)("inlineCode",{parentName:"li"},"queue1"),"\u8868\u793a\u961f\u5217\u540d\u79f0\uff0c",(0,i.yg)("inlineCode",{parentName:"li"},"queue@label1\uff0clabel2"),"\u8868\u793a\u961f\u5217\u540d\u79f0\u4e3a",(0,i.yg)("inlineCode",{parentName:"li"},"queue1"),"\uff0c\u961f\u5217\u7684\u6807\u7b7e\u4e3a",(0,i.yg)("inlineCode",{parentName:"li"},"label1"),"\u548c",(0,i.yg)("inlineCode",{parentName:"li"},"label2"),"\u3002"),(0,i.yg)("li",{parentName:"ul"},"\u5982\u6709\u9700\u8981\uff0c\u8f93\u5165yarn\u961f\u5217\u7684\u53ef\u9009\u63cf\u8ff0\u3002"),(0,i.yg)("li",{parentName:"ul"},"\u70b9\u51fb",(0,i.yg)("inlineCode",{parentName:"li"},"\u786e\u8ba4"),"\u3002",(0,i.yg)("img",{src:"/doc/image/yarn-queue/flow_to_type_in_pure_queue_labels.png"}),(0,i.yg)("br",null),(0,i.yg)("br",null)))))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\u67e5\u770b\u5df2\u5b58\u5728\u7684yarn\u961f\u5217(\u53ca\u6807\u7b7e)\u3002"),(0,i.yg)("img",{src:"/doc/image/yarn-queue/existed_queues.png"}),(0,i.yg)("br",null),(0,i.yg)("br",null))),(0,i.yg)("h2",{id:"\u5982\u4f55\u4f7f\u7528\u53ef\u7528\u961f\u5217"},"\u5982\u4f55\u4f7f\u7528\u53ef\u7528\u961f\u5217"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u6307\u5b9a\u7684yarn\u961f\u5217\u7684Flink\u96c6\u7fa4\u3002"),(0,i.yg)("img",{src:"/doc/image/yarn-queue/available_queues_when_creating_cluster.png"}),(0,i.yg)("br",null),(0,i.yg)("br",null)),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u6307\u5b9a YARN \u961f\u5217\u7684 YARN \u5e94\u7528\u7a0b\u5e8f\u6a21\u5f0f\u4e0b\u7684 Flink \u5e94\u7528\u7a0b\u5e8f\u3002"),(0,i.yg)("img",{src:"/doc/image/yarn-queue/use_yarn_app_mode_to_create_application.png"}),(0,i.yg)("br",null),(0,i.yg)("br",null),(0,i.yg)("img",{src:"/doc/image/yarn-queue/available_queues_when_creating_application.png"}),(0,i.yg)("br",null),(0,i.yg)("br",null))),(0,i.yg)("h2",{id:"\u8be5\u529f\u80fd\u7684\u76f8\u5173\u6761\u76ee"},"\u8be5\u529f\u80fd\u7684\u76f8\u5173\u6761\u76ee"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\u8fd9\u4e2a\u7279\u6027\u4f1a\u5f71\u54cd\u4f7f\u7528\u65e7\u52a8\u6001\u5c5e\u6027\u6307\u5b9a\u4e86",(0,i.yg)("inlineCode",{parentName:"p"},"yarn-application"),"\u6a21\u5f0f\u4e0b\u7684flink\u5e94\u7528\u7a0b\u5e8f\u548c",(0,i.yg)("inlineCode",{parentName:"p"},"yarn-session"),"\u6a21\u5f0f\u4e0b\u7684flink\u96c6\u7fa4\u7684yarn\u961f\u5217(",(0,i.yg)("inlineCode",{parentName:"p"},"yarn.application.queue"),")\u548c\u6807\u7b7e(",(0,i.yg)("inlineCode",{parentName:"p"},"yarn.application.node-label"),")\u7684\u5e94\u7528\u7a0b\u5e8f\u3002  "),(0,i.yg)("blockquote",{parentName:"li"},(0,i.yg)("p",{parentName:"blockquote"},"\u8be5\u529f\u80fd\u4e0d\u4f1a\u5bf9\u5176\u4ea7\u751f\u4efb\u4f55\u5f71\u54cd\u3002StreamPark\u4ecd\u7136\u4fdd\u7559\u52a8\u6001\u5c5e\u6027\u7684\u6700\u9ad8\u4f18\u5148\u7ea7\uff0c\u5e76\u4e0d\u5f3a\u5236\u9a8c\u8bc1\u52a8\u6001\u5c5e\u6027\u4e2d\u6307\u5b9a\u7684\u961f\u5217\u548c\u6807\u7b7e\uff0c\u4e3a\u7528\u6237\u63d0\u4f9b\u9ad8\u7ea7\u914d\u7f6e\u7684\u7a7a\u95f4\u3002"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Yarn\u961f\u5217\u7684\u9694\u79bb\u5e76\u4e0d\u4e25\u683c\u3002"),(0,i.yg)("blockquote",{parentName:"li"},(0,i.yg)("p",{parentName:"blockquote"},"\u5728\u5f53\u524d\u7684\u8bbe\u8ba1\u4e2d\uff0c\u7531\u4e8e\u961f\u5217\u4e0e",(0,i.yg)("inlineCode",{parentName:"p"},"yarn-session"),"\u6a21\u5f0f\u4e0b\u7684Flink\u96c6\u7fa4\u4e4b\u95f4\u7684\u5173\u7cfb\uff0c\u961f\u5217\u7684\u6743\u9650\u5e76\u6ca1\u6709\u88ab\u4e25\u683c\u9694\u79bb\u3002\nFlink\u7684",(0,i.yg)("inlineCode",{parentName:"p"},"yarn-session"),"\u96c6\u7fa4\u5bf9\u6240\u6709\u56e2\u961f\u53ef\u89c1\uff0c\u5982\u4e0b\u56fe\u6240\u793a\u3002\u76ee\u6807",(0,i.yg)("inlineCode",{parentName:"p"},"yarn-session")," Flink\u96c6\u7fa4\u5728",(0,i.yg)("inlineCode",{parentName:"p"},"default"),"\u56e2\u961f\u4e2d\u4f7f\u7528\u4e00\u4e2a\u961f\u5217\uff0c\u4f46\u5b83\u4ecd\u7136\u53ef\u4ee5\u5728",(0,i.yg)("inlineCode",{parentName:"p"},"test"),"\u56e2\u961f\u4e2d\u9009\u62e9\u3002\n\u56e0\u6b64\uff0c\u5982\u679c",(0,i.yg)("inlineCode",{parentName:"p"},"yarn-session")," Flink\u96c6\u7fa4\u4f7f\u7528\u4f4d\u4e8e\u67d0\u4e2a\u56e2\u961f\u7684\u961f\u5217\uff0c\u968f\u7740\u76ee\u6807\u96c6\u7fa4\u7684\u8d44\u6e90\u4f7f\u7528\u91cf\u589e\u52a0\uff0c\u76ee\u6807\u8d44\u6e90\u4f7f\u7528\u7684\u961f\u5217\u8d44\u6e90\u4e5f\u4f1a\u589e\u52a0\u3002\u8fd9\u5c31\u662f\u7531\u4e8e\u961f\u5217\u548c",(0,i.yg)("inlineCode",{parentName:"p"},"yarn-session"),"\u6a21\u5f0fFlink\u96c6\u7fa4\u4e4b\u95f4\u7684\u5173\u7cfb\u5bfc\u81f4\u961f\u5217\u65e0\u6cd5\u88ab\u4e25\u683c\u9694\u79bb\u7684\u73b0\u8c61\u3002\n\u6362\u53e5\u8bdd\u8bf4\uff0c\u5728",(0,i.yg)("inlineCode",{parentName:"p"},"yarn-session"),"\u6a21\u5f0f\u4e0b\uff0cFlink\u96c6\u7fa4\u7684\u5171\u4eab\u5bfc\u81f4\u56e2\u961f\u4e4b\u95f4\u95f4\u63a5\u5171\u4eab\u961f\u5217\u8d44\u6e90\u3002")),(0,i.yg)("img",{src:"/doc/image/yarn-queue/use_yarn_session_mode_to_create_application.png"}),(0,i.yg)("br",null)),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\u4f1a\u8bdd\u96c6\u7fa4\u88ab\u6240\u6709\u56e2\u961f\u5171\u4eab\u3002\u4e3a\u4ec0\u4e48\u521b\u5efa ",(0,i.yg)("inlineCode",{parentName:"p"},"yarn-session")," Flink \u96c6\u7fa4\u65f6\uff0c\u53ea\u80fd\u4f7f\u7528\u5f53\u524d\u56e2\u961f\u4e2d\u7684\u961f\u5217\u800c\u975e\u6240\u6709\u56e2\u961f\u4e2d\u7684\u961f\u5217\u4f5c\u4e3a\u5019\u9009\u961f\u5217\u5217\u8868\uff1f"),(0,i.yg)("blockquote",{parentName:"li"},(0,i.yg)("p",{parentName:"blockquote"},"\u57fa\u4e8e\u4e0a\u8ff0\u6240\u63d0\u5230\u7684\uff0cStreamPark \u5e0c\u671b\u5728\u521b\u5efa ",(0,i.yg)("inlineCode",{parentName:"p"},"yarn-session")," Flink \u96c6\u7fa4\u65f6\uff0c\u7ba1\u7406\u5458\u53ea\u80fd\u6307\u5b9a\u5f53\u524d\u56e2\u961f\u6240\u5c5e\u7684\u961f\u5217\uff0c\u8fd9\u6709\u52a9\u4e8e\u7ba1\u7406\u5458\u66f4\u597d\u5730\u611f\u77e5\u5f53\u524d\u64cd\u4f5c\u5bf9\u5f53\u524d\u56e2\u961f\u7684\u5f71\u54cd\u3002"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\u4e3a\u4ec0\u4e48\u4e0d\u652f\u6301\u5c06 ",(0,i.yg)("inlineCode",{parentName:"p"},"flink yarn-session clusters / general clusters")," \u5728\u56e2\u961f\u8303\u56f4\u5185\u8fdb\u884c\u9694\u79bb\uff1f"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"\u96c6\u7fa4\u53ef\u89c1\u6027\u7684\u53d8\u5316\u5e26\u6765\u7684\u5f71\u54cd\u8303\u56f4\u6bd4\u961f\u5217\u53ef\u89c1\u6027\u7684\u53d8\u5316\u8303\u56f4\u66f4\u5927\u3002"),(0,i.yg)("li",{parentName:"ul"},"StreamPark \u9700\u8981\u9762\u5bf9\u66f4\u5927\u7684\u5411\u540e\u517c\u5bb9\u6027\u96be\u9898\uff0c\u540c\u65f6\u8fd8\u9700\u8981\u8003\u8651\u7528\u6237\u4f53\u9a8c\u3002"),(0,i.yg)("li",{parentName:"ul"},"\u76ee\u524d\uff0c\u793e\u533a\u5bf9\u4f7f\u7528 ",(0,i.yg)("inlineCode",{parentName:"li"},"yarn-application")," \u548c ",(0,i.yg)("inlineCode",{parentName:"li"},"yarn-session")," \u96c6\u7fa4\u6a21\u5f0f\u90e8\u7f72\u7684\u7528\u6237\u7fa4\u4f53\u548c\u5e94\u7528\u89c4\u6a21\u6ca1\u6709\u786e\u5207\u7684\u7814\u7a76\u3002\n\u57fa\u4e8e\u8fd9\u4e00\u4e8b\u5b9e\uff0c\u793e\u533a\u6ca1\u6709\u63d0\u4f9b\u66f4\u5927\u7684\u529f\u80fd\u652f\u6301\u3002"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\u5982\u679c\u60a8\u5bf9\u8be5\u529f\u80fd\u6709\u4efb\u4f55\u76f8\u5173\u9700\u6c42\uff0c\u8bf7\u968f\u65f6\u4e0e\u6211\u4eec\u8054\u7cfb\u6216\u76f4\u63a5\u5411\u793e\u533a\u90ae\u4ef6\u5217\u8868\u63d0\u4f9b\u53cd\u9988\u3002\u793e\u533a\u5c06\u6839\u636e\u7528\u6237\u7ec4\u548c\u5e94\u7528\u7a0b\u5e8f\u89c4\u6a21\u7684\u4f7f\u7528\u60c5\u51b5\u8fdb\u884c\u4e0b\u4e00\u6b65\u8bc4\u4f30\u548c\u652f\u6301\u3002"))),(0,i.yg)("p",null,"\u6b22\u8fce\u63d0\u51fa\u4efb\u4f55\u5efa\u8bae\u3002"))}m.isMDXComponent=!0}}]);