(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[8885],{34042:function(e){e.exports=function(e){function t(a){if(n[a])return n[a].exports;var i=n[a]={exports:{},id:a,loaded:!1};return e[a].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=(a(n(1)),n(6)),r=a(o),c=a(n(7)),s=a(n(8)),u=a(n(9)),l=a(n(10)),m=a(n(11)),d=a(n(14)),f=[],h=!1,g={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},p=function(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(h=!0),h)return f=(0,m.default)(f,g),(0,l.default)(f,g.once),f},b=function(){f=(0,d.default)(),p()},v=function(){f.forEach((function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")}))},y=function(e){return!0===e||"mobile"===e&&u.default.mobile()||"phone"===e&&u.default.phone()||"tablet"===e&&u.default.tablet()||"function"==typeof e&&!0===e()},w=function(e){g=i(g,e),f=(0,d.default)();var t=document.all&&!window.atob;return y(g.disable)||t?v():(g.disableMutationObserver||s.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),g.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",g.easing),document.querySelector("body").setAttribute("data-aos-duration",g.duration),document.querySelector("body").setAttribute("data-aos-delay",g.delay),"DOMContentLoaded"===g.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?p(!0):"load"===g.startEvent?window.addEventListener(g.startEvent,(function(){p(!0)})):document.addEventListener(g.startEvent,(function(){p(!0)})),window.addEventListener("resize",(0,c.default)(p,g.debounceDelay,!0)),window.addEventListener("orientationchange",(0,c.default)(p,g.debounceDelay,!0)),window.addEventListener("scroll",(0,r.default)((function(){(0,l.default)(f,g.once)}),g.throttleDelay)),g.disableMutationObserver||s.default.ready("[data-aos]",b),f)};e.exports={init:w,refresh:p,refreshHard:b}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function a(t){var n=g,a=p;return g=p=void 0,N=t,v=e.apply(a,n)}function o(e){return N=e,y=setTimeout(l,t),j?a(e):v}function r(e){var n=t-(e-w);return O?E(n,b-(e-N)):n}function s(e){var n=e-w;return void 0===w||n>=t||n<0||O&&e-N>=b}function l(){var e=x();return s(e)?m(e):void(y=setTimeout(l,r(e)))}function m(e){return y=void 0,I&&g?a(e):(g=p=void 0,v)}function d(){void 0!==y&&clearTimeout(y),N=0,g=w=p=y=void 0}function f(){return void 0===y?v:m(x())}function h(){var e=x(),n=s(e);if(g=arguments,p=this,w=e,n){if(void 0===y)return o(w);if(O)return y=setTimeout(l,t),a(w)}return void 0===y&&(y=setTimeout(l,t)),v}var g,p,b,v,y,w,N=0,j=!1,O=!1,I=!0;if("function"!=typeof e)throw new TypeError(u);return t=c(t)||0,i(n)&&(j=!!n.leading,b=(O="maxWait"in n)?k(c(n.maxWait)||0,t):b,I="trailing"in n?!!n.trailing:I),h.cancel=d,h.flush=f,h}function a(e,t,a){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(u);return i(a)&&(o="leading"in a?!!a.leading:o,r="trailing"in a?!!a.trailing:r),n(e,t,{leading:o,maxWait:t,trailing:r})}function i(e){var t=void 0===e?"undefined":s(e);return!!e&&("object"==t||"function"==t)}function o(e){return!!e&&"object"==(void 0===e?"undefined":s(e))}function r(e){return"symbol"==(void 0===e?"undefined":s(e))||o(e)&&w.call(e)==m}function c(e){if("number"==typeof e)return e;if(r(e))return l;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=h.test(e);return n||g.test(e)?p(e.slice(2),n?2:8):f.test(e)?l:+e}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u="Expected a function",l=NaN,m="[object Symbol]",d=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,g=/^0o[0-7]+$/i,p=parseInt,b="object"==(void 0===t?"undefined":s(t))&&t&&t.Object===Object&&t,v="object"==("undefined"==typeof self?"undefined":s(self))&&self&&self.Object===Object&&self,y=b||v||Function("return this")(),w=Object.prototype.toString,k=Math.max,E=Math.min,x=function(){return y.Date.now()};e.exports=a}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=g,a=p;return g=p=void 0,N=t,v=e.apply(a,n)}function o(e){return N=e,y=setTimeout(l,t),j?i(e):v}function c(e){var n=t-(e-x);return O?k(n,b-(e-N)):n}function u(e){var n=e-x;return void 0===x||n>=t||n<0||O&&e-N>=b}function l(){var e=E();return u(e)?m(e):void(y=setTimeout(l,c(e)))}function m(e){return y=void 0,I&&g?i(e):(g=p=void 0,v)}function d(){void 0!==y&&clearTimeout(y),N=0,g=x=p=y=void 0}function f(){return void 0===y?v:m(E())}function h(){var e=E(),n=u(e);if(g=arguments,p=this,x=e,n){if(void 0===y)return o(x);if(O)return y=setTimeout(l,t),i(x)}return void 0===y&&(y=setTimeout(l,t)),v}var g,p,b,v,y,x,N=0,j=!1,O=!1,I=!0;if("function"!=typeof e)throw new TypeError(s);return t=r(t)||0,a(n)&&(j=!!n.leading,b=(O="maxWait"in n)?w(r(n.maxWait)||0,t):b,I="trailing"in n?!!n.trailing:I),h.cancel=d,h.flush=f,h}function a(e){var t=void 0===e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==(void 0===e?"undefined":c(e))}function o(e){return"symbol"==(void 0===e?"undefined":c(e))||i(e)&&y.call(e)==l}function r(e){if("number"==typeof e)return e;if(o(e))return u;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(m,"");var n=f.test(e);return n||h.test(e)?g(e.slice(2),n?2:8):d.test(e)?u:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s="Expected a function",u=NaN,l="[object Symbol]",m=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,h=/^0o[0-7]+$/i,g=parseInt,p="object"==(void 0===t?"undefined":c(t))&&t&&t.Object===Object&&t,b="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,v=p||b||Function("return this")(),y=Object.prototype.toString,w=Math.max,k=Math.min,E=function(){return v.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){var t=void 0,a=void 0;for(t=0;t<e.length;t+=1){if((a=e[t]).dataset&&a.dataset.aos)return!0;if(a.children&&n(a.children))return!0}return!1}function a(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(){return!!a()}function o(e,t){var n=window.document,i=new(a())(r);c=t,i.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function r(e){e&&e.forEach((function(e){var t=Array.prototype.slice.call(e.addedNodes),a=Array.prototype.slice.call(e.removedNodes);if(n(t.concat(a)))return c()}))}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){};t.default={isSupported:i,ready:o}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,r=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,s=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=a();return!(!o.test(e)&&!r.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=a();return!(!c.test(e)&&!s.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new u},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var a=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):void 0!==a&&("false"===a||!n&&"true"!==a)&&e.node.classList.remove("aos-animate")},a=function(e,t){var a=window.pageYOffset,i=window.innerHeight;e.forEach((function(e,o){n(e,i+a,t)}))};t.default=a},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(n(12)),o=function(e,t){return e.forEach((function(e,n){e.node.classList.add("aos-init"),e.position=(0,i.default)(e.node,t.offset)})),e};t.default=o},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(n(13)),o=function(e,t){var n=0,a=0,o=window.innerHeight,r={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(r.offset&&!isNaN(r.offset)&&(a=parseInt(r.offset)),r.anchor&&document.querySelectorAll(r.anchor)&&(e=document.querySelectorAll(r.anchor)[0]),n=(0,i.default)(e).top,r.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=o/2;break;case"bottom-center":n+=o/2+e.offsetHeight;break;case"center-center":n+=o/2+e.offsetHeight/2;break;case"top-top":n+=o;break;case"bottom-top":n+=e.offsetHeight+o;break;case"center-top":n+=e.offsetHeight/2+o}return r.anchorPlacement||r.offset||isNaN(t)||(a=t),n+a};t.default=o},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,(function(e){return{node:e}}))};t.default=n}])},78478:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var a=n(96540),i=n(92303);function o(e){let{children:t,fallback:n}=e;return(0,i.A)()?a.createElement(a.Fragment,null,t?.()):n??null}},26689:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>f});var a=n(96540),i=n(78478),o=n(92303);const r=JSON.parse('{"zh-CN":{"info":{"desc":"StreamPark \u793e\u533a\u7531\u8d21\u732e\u8005\u7ec4\u6210\u3002 \u8d21\u732e\u8005\u53ef\u4ee5\u76f4\u63a5\u8bbf\u95ee StreamPark \u9879\u76ee\u7684\u6e90\u4ee3\u7801\u5e76\u53c2\u4e0e\u8d21\u732e\u5f53\u4e2d(\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\u4ee3\u7801\u7684\u8d21\u732e)\u3002 \u8d21\u732e\u8005\u901a\u8fc7\u63d0\u4ea4\u8865\u4e01\u548c\u5efa\u8bae\u6765\u6539\u5584\u9879\u76ee\u3002 \u8be5\u9879\u76ee\u7684\u8d21\u732e\u8005\u6570\u91cf\u662f\u65e0\u9650\u7684\u3002 \u65e0\u8bba\u662f\u7410\u788e\u7684\u6e05\u7406\u5de5\u4f5c\uff0c\u91cd\u8981\u7684\u65b0\u529f\u80fd\u8fd8\u662f\u5176\u4ed6\u91cd\u5927\u7684\u5956\u52b1\uff0c\u5bf9 StreamPark \u6240\u505a\u7684\u6240\u6709\u8d21\u732e\u90fd\u5c06\u53d7\u5230\u6781\u5927\u7684\u8d5e\u8d4f\u3002","tip":"(\u6392\u540d\u4e0d\u5206\u5148\u540e)","contributors":"\u611f\u8c22\u6240\u6709\u4e3a StreamPark \u505a\u51fa\u8d21\u732e\u7684\u8d21\u732e\u8005\u4eec\uff01"},"mentor":[{"githubId":"18818196","gitUrl":"https://github.com/tisonkun","name":"tison"},{"githubId":"219644","gitUrl":"https://github.com/WillemJiang","name":"Willem Ning Jiang"},{"githubId":"4958168","gitUrl":"https://github.com/Apache9","name":"Duo Zhang"},{"githubId":"1727146","gitUrl":"https://github.com/StephanEwen","name":"Stephan Ewen"},{"githubId":"263695","gitUrl":"https://github.com/tweise","name":"Thomas Weise"}],"PPMC":[{"githubId":"13284744","gitUrl":"https://github.com/wolfboys","name":"Huajie Wang"},{"githubId":"22493821","gitUrl":"https://github.com/Al-assad","name":"Linying Yu"},{"githubId":"60029759","gitUrl":"https://github.com/MonsterChenzhuo","name":"Zhuoyu Chen"},{"githubId":"5511181","gitUrl":"https://github.com/GuoNingNing","name":"Ning Guo"},{"githubId":"7881241","gitUrl":"https://github.com/xinzhuxiansheng","name":"Yang Zhou"},{"githubId":"29084491","gitUrl":"https://github.com/lvshaokang","name":"Shaokang Lv"},{"githubId":"45427129","gitUrl":"https://github.com/monrg","name":"Qingrong Wang"},{"githubId":"19602424","gitUrl":"https://github.com/macksonmu","name":"Chunjin Mu"},{"githubId":"39726513","gitUrl":"https://github.com/wangsizhu0504","name":"Sizhu Wang"}],"committer":[{"githubId":"38427477","gitUrl":"https://github.com/1996fanrui","name":"Rui Fan"},{"githubId":"23091870","gitUrl":"https://github.com/zhoulii","name":"Li Zhou"},{"githubId":"13617900","gitUrl":"https://github.com/GOODBOY008","name":"Zhongqiang Gong"},{"githubId":"64569824","gitUrl":"https://github.com/RocMarshal","name":"Yuepeng Pan"},{"githubId":"77189278","gitUrl":"https://github.com/caicancai","name":"Cancai Cai"},{"githubId":"52746628","gitUrl":"https://github.com/VampireAchao","name":"achao"}]},"en":{"info":{"desc":"The StreamPark team is comprised of Members and Contributors. Members have direct access to the source of StreamPark project and actively evolve the code-base. Contributors improve the project through submission of patches and suggestions to the Members. The number of Contributors to the project is unbounded. All contributions to StreamPark are greatly appreciated, whether for trivial cleanups, big new features or other material rewards.","tip":"(In no particular order)","contributors":"Thanks all the contributors who already contributed to StreamPark!"},"mentor":[{"githubId":"18818196","gitUrl":"https://github.com/tisonkun","name":"tison"},{"githubId":"219644","gitUrl":"https://github.com/WillemJiang","name":"Willem Ning Jiang"},{"githubId":"4958168","gitUrl":"https://github.com/Apache9","name":"Duo Zhang"},{"githubId":"1727146","gitUrl":"https://github.com/StephanEwen","name":"Stephan Ewen"},{"githubId":"263695","gitUrl":"https://github.com/tweise","name":"Thomas Weise"}],"PPMC":[{"githubId":"13284744","gitUrl":"https://github.com/wolfboys","name":"Huajie Wang"},{"githubId":"22493821","gitUrl":"https://github.com/Al-assad","name":"Linying Yu"},{"githubId":"60029759","gitUrl":"https://github.com/MonsterChenzhuo","name":"Zhuoyu Chen"},{"githubId":"5511181","gitUrl":"https://github.com/GuoNingNing","name":"Ning Guo"},{"githubId":"7881241","gitUrl":"https://github.com/xinzhuxiansheng","name":"Yang Zhou"},{"githubId":"29084491","gitUrl":"https://github.com/lvshaokang","name":"Shaokang Lv"},{"githubId":"45427129","gitUrl":"https://github.com/monrg","name":"Qingrong Wang"},{"githubId":"19602424","gitUrl":"https://github.com/macksonmu","name":"Chunjin Mu"},{"githubId":"39726513","gitUrl":"https://github.com/wangsizhu0504","name":"Sizhu Wang"}],"committer":[{"githubId":"38427477","gitUrl":"https://github.com/1996fanrui","name":"Rui Fan"},{"githubId":"23091870","gitUrl":"https://github.com/zhoulii","name":"Li Zhou"},{"githubId":"13617900","gitUrl":"https://github.com/GOODBOY008","name":"Zhongqiang Gong"},{"githubId":"64569824","gitUrl":"https://github.com/RocMarshal","name":"Yuepeng Pan"},{"githubId":"77189278","gitUrl":"https://github.com/caicancai","name":"Cancai Cai"},{"githubId":"52746628","gitUrl":"https://github.com/VampireAchao","name":"achao"}]}}');var c,s=n(28620);function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}const l=e=>{let{title:t,titleId:n,...i}=e;return a.createElement("svg",u({className:"icon",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",width:200,height:200,"aria-labelledby":n},i),t?a.createElement("title",{id:n},t):null,c||(c=a.createElement("path",{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"})))};var m=n(34042),d=n.n(m);function f(){const e=(0,o.A)()&&0===location.pathname.indexOf("/zh-CN/")?"zh-CN":"en",t=r?.[e];function n(e){return"@"+e.replace("https://github.com/","")}function c(e){return"https://avatars.githubusercontent.com/u/"+e+"?v=4"}return a.createElement(s.A,null,a.createElement(i.A,null,(()=>(d().init({offset:100,duration:700,easing:"ease-out-quad",once:!0}),window.addEventListener("load",d().refresh),a.createElement("div",{className:"block team_page container overflow-hidden",style:{padding:"10px 0 30px"}},a.createElement("h3",{className:"fs-2 mb-4 fw-bold text-center"},"StreamPark Team"),a.createElement("hr",{className:"divider my-4 mx-auto",style:{maxWidth:"10rem"}}),a.createElement("p",{className:"team_desc team_indent"},t.info.desc),a.createElement("h3",{className:"team_title"},"Mentor",a.createElement("span",{className:"desc"},t.info.tip)),a.createElement("div",{className:"team-group"},t.mentor.map(((e,t)=>a.createElement("div",{className:"team-box my-3",key:t,"data-aos":"fade-up","data-aos-delay":100*t},a.createElement("div",{className:"hover-top-in text-center"},a.createElement("div",{className:"team-user overflow-hidden z-index-1 position-relative px-5 d-flex justify-content-center"},a.createElement("img",{className:"team-user-img",src:c(e.githubId),title:"",alt:""})),a.createElement("div",{className:"position-relative bg-team text-center hover-top--in"},a.createElement("h6",{className:"font-weight-bold team-name mb-1"},e.name),a.createElement("small",null,n(e.gitUrl)),a.createElement("div",{className:"pt-2"},a.createElement("a",{className:"icon-sm team-link",href:e.gitUrl},a.createElement(l,{className:"github-icon"}))))))))),a.createElement("h3",{className:"team_title"},"PPMC",a.createElement("span",{className:"desc"},t.info.tip)),a.createElement("div",{className:"team-group"},t.PPMC.map(((e,t)=>a.createElement("div",{className:"team-box my-3",key:t,"data-aos":"fade-up","data-aos-delay":100*t},a.createElement("div",{className:"hover-top-in text-center"},a.createElement("div",{className:"team-user overflow-hidden z-index-1 position-relative px-5 d-flex justify-content-center"},a.createElement("img",{className:"team-user-img",src:c(e.githubId),title:"",alt:""})),a.createElement("div",{className:"position-relative bg-team text-center hover-top--in"},a.createElement("h6",{className:"font-weight-bold team-name mb-1"},e.name),a.createElement("small",null,n(e.gitUrl)),a.createElement("div",{className:"pt-2"},a.createElement("a",{className:"icon-sm team-link",href:e.gitUrl},a.createElement(l,{className:"github-icon"}))))))))),a.createElement("h3",{className:"team_title"},"Committer",a.createElement("span",{className:"desc"},t.info.tip)),a.createElement("div",{className:"team-group"},t.committer.map(((e,t)=>a.createElement("div",{className:"team-box my-3",key:t,"data-aos":"fade-up","data-aos-delay":100*t},a.createElement("div",{className:"hover-top-in text-center"},a.createElement("div",{className:"team-user overflow-hidden z-index-1 position-relative px-5 d-flex justify-content-center"},a.createElement("img",{className:"team-user-img",src:c(e.githubId),title:"",alt:""})),a.createElement("div",{className:"position-relative bg-team text-center hover-top--in"},a.createElement("h6",{className:"font-weight-bold team-name mb-1"},e.name),a.createElement("small",null,n(e.gitUrl)),a.createElement("div",{className:"pt-2"},a.createElement("a",{className:"icon-sm team-link",href:e.gitUrl},a.createElement(l,{className:"github-icon"}))))))))),a.createElement("h3",{className:"team_title"},"Contributors"),a.createElement("span",{className:"desc"},t.info.contributors),a.createElement("div",{className:"row py-4"},a.createElement("img",{src:"https://contrib.rocks/image?repo=apache/streampark"})))))))}}}]);