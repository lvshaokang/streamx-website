"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[5758],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),o=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=o(n),d=a,m=u["".concat(p,".").concat(d)]||u[d]||g[d]||l;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var o=2;o<l;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39750:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var r=n(58168),a=(n(96540),n(15680));const l={id:"k8s-dev",title:"Flink K8s \u96c6\u6210\u652f\u6301",sidebar_position:1},i=void 0,s={unversionedId:"flink-k8s/k8s-dev",id:"flink-k8s/k8s-dev",title:"Flink K8s \u96c6\u6210\u652f\u6301",description:"StreamPark Flink Kubernetes \u57fa\u4e8e Flink Native Kubernetes \u5b9e\u73b0\uff0c\u652f\u6301\u4ee5\u4e0b Flink \u8fd0\u884c\u6a21\u5f0f\uff1a",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/flink-k8s/1-deployment.md",sourceDirName:"flink-k8s",slug:"/flink-k8s/k8s-dev",permalink:"/zh-CN/docs/flink-k8s/k8s-dev",draft:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/flink-k8s/1-deployment.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"k8s-dev",title:"Flink K8s \u96c6\u6210\u652f\u6301",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u9ad8\u7ea7\u6269\u5c55",permalink:"/zh-CN/docs/advanced/"},next:{title:"K8S PVC \u8d44\u6e90\u4f7f\u7528",permalink:"/zh-CN/docs/flink-k8s/k8s-pvc-integration"}},p={},o=[{value:"\u989d\u5916\u73af\u5883\u8981\u6c42",id:"\u989d\u5916\u73af\u5883\u8981\u6c42",level:2},{value:"\u96c6\u6210\u51c6\u5907",id:"\u96c6\u6210\u51c6\u5907",level:2},{value:"Kubernetes \u8fde\u63a5\u914d\u7f6e",id:"kubernetes-\u8fde\u63a5\u914d\u7f6e",level:3},{value:"Kubernetes RBAC \u914d\u7f6e",id:"kubernetes-rbac-\u914d\u7f6e",level:3},{value:"Docker \u8fdc\u7a0b\u5bb9\u5668\u670d\u52a1\u914d\u7f6e",id:"docker-\u8fdc\u7a0b\u5bb9\u5668\u670d\u52a1\u914d\u7f6e",level:3},{value:"\u4efb\u52a1\u63d0\u4ea4",id:"\u4efb\u52a1\u63d0\u4ea4",level:2},{value:"Application \u4efb\u52a1\u53d1\u5e03",id:"application-\u4efb\u52a1\u53d1\u5e03",level:3},{value:"Session \u4efb\u52a1\u53d1\u5e03",id:"session-\u4efb\u52a1\u53d1\u5e03",level:3},{value:"\u76f8\u5173\u53c2\u6570\u914d\u7f6e",id:"\u76f8\u5173\u53c2\u6570\u914d\u7f6e",level:2}],c={toc:o},u="wrapper";function g(e){let{components:t,...l}=e;return(0,a.yg)(u,(0,r.A)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"StreamPark Flink Kubernetes \u57fa\u4e8e ",(0,a.yg)("a",{parentName:"p",href:"https://ci.apache.org/projects/flink/flink-docs-stable/docs/deployment/resource-providers/native_kubernetes/"},"Flink Native Kubernetes")," \u5b9e\u73b0\uff0c\u652f\u6301\u4ee5\u4e0b Flink \u8fd0\u884c\u6a21\u5f0f\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Native-Kubernetes Application"),(0,a.yg)("li",{parentName:"ul"},"Native-Kubernetes Session")),(0,a.yg)("p",null,"\u5355\u4e2a StreamPark \u5b9e\u4f8b\u5f53\u524d\u53ea\u652f\u6301\u5355\u4e2a Kubernetes \u96c6\u7fa4\uff0c\u5982\u679c\u60a8\u6709\u591a Kubernetes \u652f\u6301\u7684\u8bc9\u6c42\uff0c\u6b22\u8fce\u63d0\u4ea4\u76f8\u5173\u7684 ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-streampark/issues"},"Fearure Request Issue")," : )"),(0,a.yg)("br",null),(0,a.yg)("h2",{id:"\u989d\u5916\u73af\u5883\u8981\u6c42"},"\u989d\u5916\u73af\u5883\u8981\u6c42"),(0,a.yg)("p",null,"StreamPark Flink-Kubernetes \u9700\u8981\u5177\u5907\u4ee5\u4e0b\u989d\u5916\u7684\u8fd0\u884c\u73af\u5883\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Kubernetes"),(0,a.yg)("li",{parentName:"ul"},"Maven\uff08StreamPark \u8fd0\u884c\u8282\u70b9\u5177\u5907\uff09"),(0,a.yg)("li",{parentName:"ul"},"Docker\uff08StreamPark \u8fd0\u884c\u8282\u70b9\u662f\u5177\u5907\uff09")),(0,a.yg)("p",null,"StreamPark \u5b9e\u4f8b\u5e76\u4e0d\u9700\u8981\u5f3a\u5236\u90e8\u7f72\u5728 Kubernetes \u6240\u5728\u8282\u70b9\u4e0a\uff0c\u53ef\u4ee5\u90e8\u7f72\u5728 Kubernetes \u96c6\u7fa4\u5916\u90e8\u8282\u70b9\uff0c\u4f46\u662f\u9700\u8981\u8be5 StreamPark \u90e8\u7f72\u8282\u70b9\u4e0e Kubernetes \u96c6\u7fa4",(0,a.yg)("strong",{parentName:"p"},"\u4fdd\u6301\u7f51\u7edc\u901a\u4fe1\u7545\u901a"),"\u3002"),(0,a.yg)("br",null),(0,a.yg)("h2",{id:"\u96c6\u6210\u51c6\u5907"},"\u96c6\u6210\u51c6\u5907"),(0,a.yg)("h3",{id:"kubernetes-\u8fde\u63a5\u914d\u7f6e"},"Kubernetes \u8fde\u63a5\u914d\u7f6e"),(0,a.yg)("p",null,"StreamPark \u76f4\u63a5\u4f7f\u7528\u7cfb\u7edf ",(0,a.yg)("inlineCode",{parentName:"p"},"\uff5e/.kube/config ")," \u4f5c\u4e3a Kubernetes \u96c6\u7fa4\u7684\u8fde\u63a5\u51ed\u8bc1\uff0c\u6700\u4e3a\u7b80\u5355\u7684\u65b9\u5f0f\u662f\u76f4\u63a5\u62f7\u8d1d Kubernetes \u8282\u70b9\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},".kube/config")," \u5230 StreamPark \u8282\u70b9\u7528\u6237\u76ee\u5f55\uff0c\u5404\u4e91\u670d\u52a1\u5546 Kubernetes \u670d\u52a1\u4e5f\u90fd\u63d0\u4f9b\u4e86\u76f8\u5173\u914d\u7f6e\u7684\u5feb\u901f\u4e0b\u8f7d\u3002\u5f53\u7136\u4e3a\u4e86\u6743\u9650\u7ea6\u675f\uff0c\u4e5f\u53ef\u4ee5\u81ea\u884c\u751f\u6210\u5bf9\u5e94 Kubernetes \u81ea\u5b9a\u4e49\u8d26\u6237\u7684 config\u3002"),(0,a.yg)("p",null,"\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7 StreamPark \u6240\u5728\u673a\u5668\u7684 kubectl \u5feb\u901f\u68c0\u67e5\u76ee\u6807 Kubernetes \u96c6\u7fa4\u7684\u8fde\u901a\u6027\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl cluster-info\n")),(0,a.yg)("h3",{id:"kubernetes-rbac-\u914d\u7f6e"},"Kubernetes RBAC \u914d\u7f6e"),(0,a.yg)("p",null,"\u540c\u6837\u7684\uff0c\u9700\u8981\u51c6\u5907 Flink \u6240\u4f7f\u7528 Kubernetes Namespace \u7684 RBAC \u8d44\u6e90\uff0c\u8bf7\u53c2\u8003 Flink-Docs\uff1a",(0,a.yg)("a",{parentName:"p",href:"https://ci.apache.org/projects/flink/flink-docs-stable/docs/deployment/resource-providers/native_kubernetes/#rbac"},"https://ci.apache.org/projects/flink/flink-docs-stable/docs/deployment/resource-providers/native_kubernetes/#rbac")),(0,a.yg)("p",null,"\u5047\u8bbe\u4f7f\u7528 Flink Namespace \u4e3a ",(0,a.yg)("inlineCode",{parentName:"p"},"flink-dev"),"\uff0c\u4e0d\u660e\u786e\u6307\u5b9a Kubernetes \u8d26\u6237\uff0c\u53ef\u4ee5\u5982\u4e0b\u521b\u5efa\u7b80\u5355 clusterrolebinding \u8d44\u6e90\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"kubectl create clusterrolebinding flink-role-binding-default --clusterrole=edit --serviceaccount=flink-dev:default\n")),(0,a.yg)("h3",{id:"docker-\u8fdc\u7a0b\u5bb9\u5668\u670d\u52a1\u914d\u7f6e"},"Docker \u8fdc\u7a0b\u5bb9\u5668\u670d\u52a1\u914d\u7f6e"),(0,a.yg)("p",null,"\u5728 StreamPark Setting \u9875\u9762\uff0c\u914d\u7f6e\u76ee\u6807 Kubernetes \u96c6\u7fa4\u6240\u4f7f\u7528\u7684 Docker \u5bb9\u5668\u670d\u52a1\u7684\u8fde\u63a5\u4fe1\u606f\u3002"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"docker register setting",src:n(76437).A,width:"2616",height:"1980"})),(0,a.yg)("p",null,"\u5728\u8fdc\u7a0b Docker \u5bb9\u5668\u670d\u52a1\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,a.yg)("inlineCode",{parentName:"p"},"streampark")," \u7684 Namespace(\u8be5Namespace\u53ef\u81ea\u5b9a\u4e49\u547d\u540d\uff0c\u547d\u540d\u4e0d\u4e3a streampark \u8bf7\u5728setting\u9875\u9762\u4fee\u6539\u786e\u8ba4) \uff0c\u4e3a StreamPark \u81ea\u52a8\u6784\u5efa\u7684 Flink image \u63a8\u9001\u7a7a\u95f4\uff0c\u8bf7\u786e\u4fdd\u4f7f\u7528\u7684 Docker Register User \u5177\u6709\u8be5  Namespace \u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"pull"),"/",(0,a.yg)("inlineCode",{parentName:"p"},"push")," \u6743\u9650\u3002"),(0,a.yg)("p",null,"\u53ef\u4ee5\u5728 StreamPark \u6240\u5728\u8282\u70b9\u901a\u8fc7 docker command \u7b80\u5355\u6d4b\u8bd5\u6743\u9650\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"# verify access\ndocker login --username=<your_username> <your_register_addr>\n# verify push permission\ndocker pull busybox\ndocker tag busybox <your_register_addr>/streampark/busybox\ndocker push <your_register_addr>/streampark/busybox\n# verify pull permission\ndocker pull <your_register_addr>/streampark/busybox\n")),(0,a.yg)("br",null),(0,a.yg)("h2",{id:"\u4efb\u52a1\u63d0\u4ea4"},"\u4efb\u52a1\u63d0\u4ea4"),(0,a.yg)("h3",{id:"application-\u4efb\u52a1\u53d1\u5e03"},"Application \u4efb\u52a1\u53d1\u5e03"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"k8s application submit",src:n(17908).A,width:"2546",height:"1942"})),(0,a.yg)("p",null,"\u5176\u4e2d\u9700\u8981\u8bf4\u660e\u7684\u53c2\u6570\u5982\u4e0b\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Flink Base Docker Image"),"\uff1a \u57fa\u7840 Flink Docker \u955c\u50cf\u7684 Tag\uff0c\u53ef\u4ee5\u76f4\u63a5\u4ece ",(0,a.yg)("a",{parentName:"li",href:"https://hub.docker.com/_/flink"},"DockerHub - offical/flink")," \u83b7\u53d6\uff0c\u4e5f\u652f\u6301\u7528\u6237\u79c1\u6709\u7684\u5e95\u5c42\u955c\u50cf\uff0c\u6b64\u65f6\u5728 setting \u8bbe\u7f6e Docker Register Account \u9700\u8981\u5177\u5907\u8be5\u79c1\u6709\u955c\u50cf \t",(0,a.yg)("inlineCode",{parentName:"li"},"pull")," \u6743\u9650\u3002"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Rest-Service Exposed Type"),"\uff1a\u5bf9\u5e94 Flink \u539f\u751f ",(0,a.yg)("a",{parentName:"li",href:"https://ci.apache.org/projects/flink/flink-docs-stable/docs/deployment/config/#kubernetes"},"kubernetes.rest-service.exposed.type")," \u914d\u7f6e\uff0c\u5404\u4e2a\u5019\u9009\u503c\u8bf4\u660e\uff1a",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"ClusterIP"),"\uff1a\u9700\u8981 StreamPark \u53ef\u76f4\u63a5\u8bbf\u95ee Kubernetes \u5185\u90e8\u7f51\u7edc\uff1b"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"LoadBalancer"),"\uff1a\u9700\u8981 Kubernetes \u63d0\u524d\u521b\u5efa LoadBalancer \u8d44\u6e90\uff0c\u4e14 Flink Namespace \u5177\u5907\u81ea\u52a8\u7ed1\u5b9a\u6743\u9650\uff0c\u540c\u65f6 StreamPark \u53ef\u4ee5\u8bbf\u95ee\u8be5 LoadBalancer \u7f51\u5173\uff1b"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"NodePort"),"\uff1a\u9700\u8981 StreamPark \u53ef\u4ee5\u76f4\u63a5\u8fde\u901a\u6240\u6709 Kubernetes \u8282\u70b9\uff1b"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Kubernetes Pod Template"),"\uff1a Flink \u81ea\u5b9a\u4e49 pod-template \u914d\u7f6e\uff0c\u6ce8\u610f ",(0,a.yg)("inlineCode",{parentName:"li"},"container-name")," \u5fc5\u987b\u4e3a ",(0,a.yg)("inlineCode",{parentName:"li"},"flink-main-container"),"\uff0c\u5982\u679c Kubernetes pod \u62c9\u53d6 Docker \u955c\u50cf\u9700\u8981\u79d8\u94a5\uff0c\u8bf7\u5728 pod \u6a21\u677f\u6587\u4ef6\u4e2d\u8865\u5168\u79d8\u94a5\u76f8\u5173\u4fe1\u606f\uff0cpod \u6a21\u677f\u5982\u4e0b\uff1a",(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: pod-template\nspec:\n  serviceAccount: default\n  containers:\n  - name: flink-main-container\n    image:\n  imagePullSecrets:\n  - name: regsecret\n"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Dynamic Option"),"\uff1a Flink on Kubernetes \u52a8\u6001\u53c2\u6570\uff08\u90e8\u5206\u53c2\u6570\u4e5f\u53ef\u5728 pod-template \u6587\u4ef6\u4e2d\u5b9a\u4e49\uff09\uff0c\u8be5\u53c2\u6570\u9700\u8981\u4ee5 ",(0,a.yg)("inlineCode",{parentName:"li"},"-D")," \u5f00\u5934\uff0c\u8be6\u60c5\u89c1 ",(0,a.yg)("a",{parentName:"li",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/zh/docs/deployment/config/#kubernetes"},"Flink on Kubernetes\u76f8\u5173\u53c2\u6570"),"\u3002")),(0,a.yg)("p",null,"\u4efb\u52a1\u542f\u52a8\u540e\uff0c\u652f\u6301\u5728\u8be5\u4efb\u52a1\u7684 Detail \u9875\u76f4\u63a5\u8bbf\u95ee\u5bf9\u5e94\u7684 Flink Web UI \u9875\u9762\uff1a"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"k8s app detail",src:n(80466).A,width:"2542",height:"1946"})),(0,a.yg)("h3",{id:"session-\u4efb\u52a1\u53d1\u5e03"},"Session \u4efb\u52a1\u53d1\u5e03"),(0,a.yg)("p",null,"Flink-Native-Kubernetes Session \u4efb\u52a1 Kubernetes \u989d\u5916\u7684\u914d\u7f6e\uff08pod-template \u7b49\uff09\u5b8c\u5168\u7531\u63d0\u524d\u90e8\u7f72\u7684 Flink-Session \u96c6\u7fa4\u51b3\u5b9a\uff0c\u8bf7\u76f4\u63a5\u53c2\u8003 Flink-Doc\uff1a",(0,a.yg)("a",{parentName:"p",href:"https://ci.apache.org/projects/flink/flink-docs-stable/docs/deployment/resource-providers/native_kubernetes"},"https://ci.apache.org/projects/flink/flink-docs-stable/docs/deployment/resource-providers/native_kubernetes")),(0,a.yg)("br",null),(0,a.yg)("h2",{id:"\u76f8\u5173\u53c2\u6570\u914d\u7f6e"},"\u76f8\u5173\u53c2\u6570\u914d\u7f6e"),(0,a.yg)("p",null,"StreamPark \u5728 ",(0,a.yg)("inlineCode",{parentName:"p"},"applicaton.yml"),"  Flink-Kubernetes \u76f8\u5173\u53c2\u6570\u5982\u4e0b\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4e0d\u9700\u8981\u989d\u5916\u8c03\u6574\u9ed8\u8ba4\u503c\u3002"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"\u914d\u7f6e\u9879"),(0,a.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,a.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"streampark.docker.register.image-namespace"),(0,a.yg)("td",{parentName:"tr",align:null},"\u8fdc\u7a0b docker \u5bb9\u5668\u670d\u52a1\u4ed3\u5e93\u547d\u540d\u7a7a\u95f4\uff0c\u6784\u5efa\u7684 flink-job \u955c\u50cf\u4f1a\u63a8\u9001\u5230\u8be5\u547d\u540d\u7a7a\u95f4\u3002"),(0,a.yg)("td",{parentName:"tr",align:null},"null")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"streampark.flink-k8s.tracking.polling-task-timeout-sec.job-status"),(0,a.yg)("td",{parentName:"tr",align:null},"\u6bcf\u7ec4 flink \u72b6\u6001\u8ffd\u8e2a\u4efb\u52a1\u7684\u8fd0\u884c\u8d85\u65f6\u79d2\u6570"),(0,a.yg)("td",{parentName:"tr",align:null},"120")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"streampark.flink-k8s.tracking.polling-task-timeout-sec.cluster-metric"),(0,a.yg)("td",{parentName:"tr",align:null},"\u6bcf\u7ec4 flink \u6307\u6807\u8ffd\u8e2a\u4efb\u52a1\u7684\u8fd0\u884c\u8d85\u65f6\u79d2\u6570"),(0,a.yg)("td",{parentName:"tr",align:null},"120")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"streampark.flink-k8s.tracking.polling-interval-sec.job-status"),(0,a.yg)("td",{parentName:"tr",align:null},"flink \u72b6\u6001\u8ffd\u8e2a\u4efb\u52a1\u8fd0\u884c\u95f4\u9694\u79d2\u6570\uff0c\u4e3a\u4e86\u7ef4\u6301\u51c6\u786e\u6027\uff0c\u8bf7\u8bbe\u7f6e\u5728 5s \u4ee5\u4e0b\uff0c\u6700\u4f73\u8bbe\u7f6e\u5728 2-3s"),(0,a.yg)("td",{parentName:"tr",align:null},"5")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"streampark.flink-k8s.tracking.polling-interval-sec.cluster-metric"),(0,a.yg)("td",{parentName:"tr",align:null},"flink \u6307\u6807\u8ffd\u8e2a\u4efb\u52a1\u8fd0\u884c\u95f4\u9694\u79d2\u6570"),(0,a.yg)("td",{parentName:"tr",align:null},"10")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"streampark.flink-k8s.tracking.silent-state-keep-sec"),(0,a.yg)("td",{parentName:"tr",align:null},"silent \u8ffd\u8e2a\u5bb9\u9519\u65f6\u95f4\u79d2\u6570"),(0,a.yg)("td",{parentName:"tr",align:null},"60")))))}g.isMDXComponent=!0},76437:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/docker_register_setting-55ff0f03235a1708b428b016d8ccc8a2.png"},80466:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/k8s_app_detail-5ee71eb0d0e20f2c6e3009e98b3d63db.png"},17908:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/k8s_application_submit-7d2a3d17220cc3048b6d5b22184f9afc.png"}}]);