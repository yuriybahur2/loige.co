(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"7evw":function(e,t,n){"use strict";n("R48M"),Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=t.CommentEmbed=t.CommentCount=void 0;var r=n("UZsz"),o=n("Bp/N"),u=n("HhXV");t.CommentCount=r.CommentCount,t.CommentEmbed=o.CommentEmbed,t.DiscussionEmbed=u.DiscussionEmbed;var i={CommentCount:r.CommentCount,CommentEmbed:o.CommentEmbed,DiscussionEmbed:u.DiscussionEmbed};t.default=i},"Bp/N":function(e,t,n){"use strict";n("YBKJ"),n("q8oJ"),n("C9fy"),n("8npG"),n("LagC"),n("pS08"),n("R48M"),Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=i(n("q1tI")),u=i(n("17x9"));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var s=t.CommentEmbed=function(e){function t(){return a(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"getSrc",value:function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")}},{key:"render",value:function(){return o.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}]),t}(o.default.Component);s.defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320},s.propTypes={commentId:u.default.string.isRequired,showMedia:u.default.bool,showParentComment:u.default.bool,width:u.default.number,height:u.default.number}},HhXV:function(e,t,n){"use strict";n("JHok"),n("LagC"),n("pS08"),n("E5k/"),n("R48M"),Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=c(n("q1tI")),i=c(n("17x9")),a=n("ZMnY");function c(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var D=["preData","preInit","onInit","onReady","afterRender","preReset","onIdentify","beforeComment","onNewComment","onPaginate"];(t.DiscussionEmbed=function(e){function t(){return s(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,a.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,a.insertScript)("https://"+this.props.shortname+".disqus.com/embed.js","dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,a.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){var t=this;this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,D.forEach((function(n){t.callbacks[n]=[e[n]]}))}}},{key:"render",value:function(){return u.default.createElement("div",r({},this.props,{id:"disqus_thread"}))}}]),t}(u.default.Component)).propTypes={shortname:i.default.string.isRequired,config:i.default.shape({identifier:i.default.string,url:i.default.string,title:i.default.string,preData:i.default.func,preInit:i.default.func,onInit:i.default.func,onReady:i.default.func,afterRender:i.default.func,preReset:i.default.func,onIdentify:i.default.func,beforeComment:i.default.func,onNewComment:i.default.func,onPaginate:i.default.func}).isRequired}},Roim:function(e,t){e.exports=function(){return/[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2694\u2696\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD79\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED0\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3]|\uD83E[\uDD10-\uDD18\uDD80-\uDD84\uDDC0]|\uD83C\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uD83C\uDDFE\uD83C[\uDDEA\uDDF9]|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDFC\uD83C[\uDDEB\uDDF8]|\uD83C\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uD83C\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF8\uDDFE\uDDFF]|\uD83C\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uD83C\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uD83C\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uD83C\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uD83C\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uD83C\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uD83C\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uD83C\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uD83C\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uD83C\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uD83C\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uD83C\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uD83C\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uD83C\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uD83C\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uD83C\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|[#\*0-9]\u20E3/g}},UZsz:function(e,t,n){"use strict";n("LagC"),n("pS08"),n("R48M"),Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=a(n("q1tI")),u=a(n("17x9")),i=n("ZMnY");function a(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var l=(0,i.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1);(t.CommentCount=function(e){function t(){return c(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,i.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?l():(0,i.insertScript)("https://"+this.props.shortname+".disqus.com/count.js","dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,i.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return o.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}]),t}(o.default.Component)).propTypes={shortname:u.default.string.isRequired,config:u.default.shape({identifier:u.default.string,url:u.default.string,title:u.default.string}).isRequired}},YBKJ:function(e,t,n){"use strict";var r=n("emib"),o=n("qDzq"),u=n("CCE/"),i=n("TUPI"),a=n("kxs/"),c=n("96qb"),s=n("chL8").f,l=n("Drra").f,D=n("rjfK").f,p=n("EU/P").trim,d=r.Number,f=d,m=d.prototype,h="Number"==u(n("nsRs")(m)),b="trim"in String.prototype,g=function(e){var t=a(e,!1);if("string"==typeof t&&t.length>2){var n,r,o,u=(t=b?t.trim():p(t,3)).charCodeAt(0);if(43===u||45===u){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===u){switch(t.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+t}for(var i,c=t.slice(2),s=0,l=c.length;s<l;s++)if((i=c.charCodeAt(s))<48||i>o)return NaN;return parseInt(c,r)}}return+t};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof d&&(h?c((function(){m.valueOf.call(n)})):"Number"!=u(n))?i(new f(g(t)),n,d):g(t)};for(var y,v=n("QPJK")?s(f):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),F=0;v.length>F;F++)o(f,y=v[F])&&!o(d,y)&&D(d,y,l(f,y));d.prototype=m,m.constructor=d,n("IYdN")(r,"Number",d)}},ZMnY:function(e,t,n){"use strict";n("m210"),n("4DPX"),n("Ggvi"),n("rzGZ"),n("Dq+y"),n("8npG"),n("YbXK"),n("ToIb"),n("wZFJ"),n("MIFh"),n("R48M"),Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var r=void 0;return function(){var o=this,u=arguments,i=function(){r=null,n||e.apply(o,u)},a=n&&!r;window.clearTimeout(r),r=setTimeout(i,t),a&&e.apply(o,u)}},t.isReactElement=i,t.shallowComparison=function(e,t){var n=new Set(Object.keys(e),Object.keys(t)),r=!0,o=!1,u=void 0;try{for(var a,c=n[Symbol.iterator]();!(r=(a=c.next()).done);r=!0){var s=a.value;if(e[s]!==t[s]&&!i(e[s]))return!0}}catch(l){o=!0,u=l}finally{try{!r&&c.return&&c.return()}finally{if(o)throw u}}return!1};var r,o=n("q1tI"),u=(r=o)&&r.__esModule?r:{default:r};function i(e){return!!u.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return u.default.isValidElement(e)}))}},ZVJz:function(e,t,n){n("HXzo"),n("sC2a"),n("pS08");var r=n("Roim");e.exports=a;var o=Object.hasOwnProperty,u=/\s/g,i=/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~’]/g;function a(){if(!(this instanceof a))return new a;this.reset()}function c(e,t){return"string"!=typeof e?"":(t||(e=e.toLowerCase()),e.trim().replace(i,"").replace(r(),"").replace(u,"-"))}a.prototype.slug=function(e,t){for(var n=c(e,!0===t),r=n;o.call(this.occurrences,n);)this.occurrences[r]++,n=r+"-"+this.occurrences[r];return this.occurrences[n]=0,n},a.prototype.reset=function(){this.occurrences=Object.create(null)},a.slug=c},gpkv:function(e,t,n){e.exports=n.p+"static/200-cb588b738a90b17740d5c8fd47777e73.jpg"},osTN:function(e,t,n){"use strict";var r=n("wTIg"),o=n("q1tI"),u=n("gpkv"),i=n.n(u),a=n("qKvR");var c=Object(r.a)("a",{target:"e1pruv500"})({name:"1jztyo0",styles:"background:#ffffcd;padding:0.5em;font-size:12px;display:block;color:inherit;text-decoration:none;border:1px solid #ffffcd;margin:0 0 1em 0;&:hover{border-color:#f89000;}"}),s=Object(r.a)("span",{target:"e1pruv501"})({name:"p58oka",styles:"display:flex;flex-direction:row;flex-wrap:wrap;"}),l=Object(r.a)("span",{target:"e1pruv502"})({name:"13cvdli",styles:"width:50%;padding:0 0 0 1em;display:block;&.left{max-width:125px;padding:0 0 0 1em !important;}@media (max-width:1024px) and (min-width:780px){width:100%;max-width:auto !important;margin:0;&.left{padding:0 0 0 1em;}h4{padding:1em 0 0.5em 0 !important;}}&:first-of-type{padding:0;}h4{padding:0 0 0.5em 0;font-size:14px;}"}),D=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){return Object(a.c)(c,{rel:"nofollow noopener noreferrer",target:"_blank",href:"https://loige.link/nodejs-book-ref-blog"},Object(a.c)(s,null,Object(a.c)(l,{className:"left"},Object(a.c)("img",{src:i.a,style:{width:"100%"},alt:"Node.js Design Patterns Second Edition"})),Object(a.c)(l,null,Object(a.c)("h4",null,"Node.js Design Patterns"),Object(a.c)("p",null,"Master best practices to build modular and scalable server-side web applications guided by"," ",Object(a.c)("em",null,"Node.js Design Patterns Second Edition"),". Available as"," ",Object(a.c)("strong",null,"Digital")," and ",Object(a.c)("strong",null,"Print"),"."))))},r}(o.Component);t.a=D},yZlL:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return ee}));n("sC2a");var r=n("wTIg"),o=n("q1tI"),u=n("mwIZ"),i=n.n(u),a=n("EYWl"),c=n("Bl7J"),s=n("1oc3"),l=n("Wbzz"),D=n("7evw"),p=n("2IR0"),d=(n("E5k/"),n("qKvR"));function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var m=function(e){return Object(d.c)("svg",f({"aria-hidden":"true","data-prefix":"fas","data-icon":"comments",className:"svg-inline--fa fa-comments fa-w-18",viewBox:"0 0 576 512",width:"1em",height:"1em"},e),Object(d.c)("path",{fill:"currentColor",d:"M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z"}))},h=n("EM/3"),b=n("KWwF"),g=n("QAI7");var y=Object(r.a)("div",{target:"ep8980s0"})({name:"1qj4z9r",styles:"margin:2em 0;line-height:25px;padding:0 1em;a{text-decoration:none;color:inherit;&:hover{text-decoration:underline;}}@media (min-width:780px){padding:0 2em;}"}),v=Object(r.a)("div",{target:"ep8980s1"})({name:"1l1pps0",styles:"margin:2em 0;line-height:25px;padding:1em;font-size:small;border-radius:8px;background:rgba(255,229,100,0.3);a{text-decoration:none;border-bottom:2px solid #ffe564;color:inherit;&:hover{border-bottom:2px solid #ff9b51;}}@media (min-width:780px){padding:2em 2em;}"}),F=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props,t=e.post,n=e.site,r=e.disqusShortName,u=e.githubLink,i={url:n+"/"+t.frontmatter.slug,identifier:t.frontmatter.slug,title:t.frontmatter.title};return Object(d.c)(o.Fragment,null,Object(d.c)(y,null,Object(d.c)(b.a,{style:{marginLeft:0},date:t.frontmatter.date}),Object(d.c)(g.a,{tags:t.frontmatter.tags}),Object(d.c)("a",{href:"#comments",title:"Read comments"},Object(d.c)(m,{style:{margin:"0 .25em 0 1em"}}),Object(d.c)(D.CommentCount,{shortname:r,config:i},"comments")),Object(d.c)("p",null,"— Published by"," ",Object(d.c)("em",null,Object(d.c)(l.Link,{to:"/about"},"Luciano Mammino")))),Object(d.c)(p.a,{dangerouslySetInnerHTML:{__html:t.html}}),u&&Object(d.c)(v,null,Object(d.c)("strong",null,"Found a typo or something that can be improved?"),Object(d.c)("br",null),"In the spirit of Open Source, you can contribute to this article by"," ",Object(d.c)("a",{href:u,target:"_blank",rel:"noopener noreferrer"},"submitting a PR on ",Object(d.c)(h.a,null)," GitHub")),Object(d.c)(y,{style:{borderTop:"1px solid #ececec",marginTop:"2em",paddingTop:"2em",lineHeight:"1.2"}},Object(d.c)("h2",{id:"comments"},Object(d.c)(m,{style:{margin:"0 .25em 0 0"}})," Comments"),Object(d.c)(D.DiscussionEmbed,{shortname:r,config:i})))},r}(o.Component),E=n("osTN"),C=n("ZVJz"),w=n.n(C);var O=Object(r.a)("div",{target:"eu4hp7r0"})({name:"exth3p",styles:"ol{color:#6d6d6d;padding:0 0 0 2em;list-style:decimal-leading-zero;}ol ol{padding:0 0 0 0.3em;}ol li{font-size:0.8rem;font-family:source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace;margin-top:5px;color:#111;a{font-size:1.2em;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;color:#6d6d6d;border-bottom:1px solid transparent;text-decoration:none;font-weight:bold;&:hover{color:#000;outline-width:0;}}&.depth-3{font-size:0.8em;list-style:none;}}"}),j=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props.headings.filter((function(e){return e.depth<=3})).map((function(e){return e.children=[],e})).reduce((function(e,t,n,r){var o=e[e.length-1];return o&&t.depth>o.depth?(o.children.push(t),e):(e.push(t),e)}),[]),t=w()();return Object(d.c)(O,null,Object(d.c)("h3",null,"Sections"),Object(d.c)("ol",null,e.map((function(e){var n=e.value,r=e.depth,o=e.children;return Object(d.c)("li",{className:"depth-"+r,key:n},Object(d.c)("a",{href:"#"+t.slug(n),dangerouslySetInnerHTML:{__html:n}}),o.length>0&&Object(d.c)("ol",null,o.map((function(e){var n=e.value,r=e.depth;return Object(d.c)("li",{className:"depth-"+r,key:n},Object(d.c)("a",{href:"#"+t.slug(n),dangerouslySetInnerHTML:{__html:n}}))}))))}))))},r}(o.Component),_=n("/Fy0");function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var k=function(e){return Object(d.c)("svg",x({"aria-hidden":"true","data-prefix":"fab","data-icon":"facebook-square",className:"svg-inline--fa fa-facebook-square fa-w-14",viewBox:"0 0 448 512",width:"1em",height:"1em"},e),Object(d.c)("path",{fill:"currentColor",d:"M448 80v352c0 26.5-21.5 48-48 48h-85.3V302.8h60.6l8.7-67.6h-69.3V192c0-19.6 5.4-32.9 33.5-32.9H384V98.7c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9H184v67.6h60.9V480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z"}))};function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var A=function(e){return Object(d.c)("svg",I({"aria-hidden":"true","data-prefix":"fab","data-icon":"linkedin-in",className:"svg-inline--fa fa-linkedin-in fa-w-14",viewBox:"0 0 448 512",width:"1em",height:"1em"},e),Object(d.c)("path",{fill:"currentColor",d:"M100.3 480H7.4V180.9h92.9V480zM53.8 140.1C24.1 140.1 0 115.5 0 85.8 0 56.1 24.1 32 53.8 32c29.7 0 53.8 24.1 53.8 53.8 0 29.7-24.1 54.3-53.8 54.3zM448 480h-92.7V334.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V480h-92.8V180.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V480z"}))};function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var B=function(e){return Object(d.c)("svg",S({"aria-hidden":"true","data-prefix":"fab","data-icon":"pinterest",className:"svg-inline--fa fa-pinterest fa-w-16",viewBox:"0 0 496 512",width:"1em",height:"1em"},e),Object(d.c)("path",{fill:"currentColor",d:"M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"}))};function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var N=function(e){return Object(d.c)("svg",R({"aria-hidden":"true","data-prefix":"far","data-icon":"envelope",className:"svg-inline--fa fa-envelope fa-w-16",viewBox:"0 0 512 512",width:"1em",height:"1em"},e),Object(d.c)("path",{fill:"currentColor",d:"M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"}))};var q=Object(r.a)("ul",{target:"ey4v4xz0"})({name:"125xt49",styles:"list-style:none;font-size:30px;padding:0.2em 0;li{display:inline-block;margin:0 0.2em 0 0;a{color:#6d6d6d;}a.twitter:hover{color:#00aced;}a.facebook:hover{color:#3b5998;}a.linkedin:hover{color:#007bb6;}a.pinterest:hover{color:#cb2027;}a.email:hover{color:black;}}"}),M={twitter:Object(d.c)(_.a,null),facebook:Object(d.c)(k,null),linkedin:Object(d.c)(A,null),pinterest:Object(d.c)(B,null),email:Object(d.c)(N,null)},P={twitter:function(e,t,n,r,o){return"https://twitter.com/intent/tweet?text="+encodeURIComponent(t)+"&url="+encodeURIComponent(e)+"&source="+encodeURIComponent(n)+"&related="+o+"&via="+o},facebook:function(e,t,n,r,o){return"https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(e)},linkedin:function(e,t,n,r,o){return"http://www.linkedin.com/shareArticle?mini=true&url="+encodeURIComponent(e)+"&title="+encodeURIComponent(t)+"&source="+encodeURIComponent(n)},pinterest:function(e,t,n,r,o){return"https://pinterest.com/pin/create/button/?media="+encodeURIComponent(r)+"&url="+encodeURIComponent(e)+"&is_video=false&description="+encodeURIComponent(t)},email:function(e,t,n,r,o){return"mailto:?&body=%0A"+encodeURIComponent(t)+"%0A%0A"+encodeURIComponent(e)+"&subject="+encodeURIComponent(t)}},z=["twitter","facebook","linkedin","pinterest","email"],U=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props,t=e.url,n=e.title,r=e.site,o=e.imageUrl,u=e.twitterProfile;return Object(d.c)(q,null,z.map((function(e){return Object(d.c)("li",{key:e},Object(d.c)("a",{rel:"nofollow noopener noreferrer",className:e,target:"_blank",href:P[e](t,n,r,o,u),title:"Share via "+e},M[e]))})))},r}(o.Component);var T=Object(r.a)("ul",{target:"e1empo690"})({name:"11m37pp",styles:"color:#6d6d6d;list-style:outside;padding:0 0 0 1.25em;li{margin:0.75em 0 0 0;&:first-of-type{margin-top:0;}}a{color:#6d6d6d;text-decoration:none;font-weight:bold;}a:hover{color:#000;}"}),V=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props.similar;return Object(d.c)(T,null,e.map((function(e){return Object(d.c)("li",{key:e.slug},Object(d.c)(l.Link,{to:"/"+e.slug},e.title))})))},r}(o.Component),L=n("c62E");var H=Object(r.a)("ul",{target:"e191jpam0"})({name:"bjcerb",styles:"display:flex;flex-wrap:wrap;list-style:none;padding:0;font-size:14px;min-height:260px;@media (min-width:780px){flex-wrap:nowrap;font-size:16px;}@media (min-width:1024px){height:300px;font-size:18px;}"}),Q=Object(r.a)("li",{target:"e191jpam1"})({name:"1c4m9lv",styles:"width:100%;text-align:center;min-height:100%;background:black;background-size:cover;a{text-decoration:none;display:flex;flex-direction:column;justify-content:space-between;background:rgba(0,0,0,0.8);height:100%;transition:background 0.5s ease;padding:1em;&:hover{background:rgba(0,0,0,0.3);}h4{color:#fff;font-size:1.2em;}p{color:rgba(255,255,255,0.8);font-size:0.8em;vertical-align:middle;line-height:1em;svg{vertical-align:text-bottom;}}}"}),G=Object(r.a)("span",{target:"e191jpam2"})({name:"1mhqlqt",styles:"display:inline-block;padding:4px 10px 5px;text-transform:uppercase;font-size:0.8em;color:rgba(255,255,255,0.8);"}),J=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props,t=e.previous,n=e.next,r=t&&t.frontmatter.header_img?"url("+t.frontmatter.header_img.publicURL+")":void 0,o=n&&n.frontmatter.header_img?"url("+n.frontmatter.header_img.publicURL+")":void 0;return Object(d.c)(H,null,t&&Object(d.c)(Q,{style:{backgroundImage:r}},Object(d.c)(l.Link,{to:t.fields.slug,rel:"prev"},Object(d.c)(G,null,"Read this next"),Object(d.c)("h4",null,t.frontmatter.title),Object(d.c)("p",null,Object(d.c)(L.a,null)," ",t.timeToRead," minutes read"))),n&&Object(d.c)(Q,{style:{backgroundImage:o}},Object(d.c)(l.Link,{to:n.fields.slug,rel:"next"},Object(d.c)(G,null,"You might enjoy"),Object(d.c)("h4",null,n.frontmatter.title),Object(d.c)("p",null,Object(d.c)(L.a,null)," ",n.timeToRead," minutes read"))))},r}(o.Component);var Y=Object(r.a)("div",{target:"e1kc7zwr0"})({name:"dpbxro",styles:"min-height:100vh;margin:0 auto;padding-left:20px;padding-right:20px;max-width:1260px;display:flex;flex-direction:column;@media (min-width:780px){width:90%;}"}),Z=Object(r.a)("section",{target:"e1kc7zwr1"})({name:"i3jcei",styles:"flex:1;display:flex;"}),K=Object(r.a)("div",{target:"e1kc7zwr2"})({name:"11d495d",styles:"flex:1;@media (min-width:780px){display:flex;}"}),X=Object(r.a)("main",{target:"e1kc7zwr3"})({name:"19yjhy2",styles:"flex:3;width:100%;"}),W=Object(r.a)("aside",{target:"e1kc7zwr4"})({name:"112aol2",styles:"flex:1;background:#f7f7f7;padding:1em;margin:0 0 2em 0;h3{margin:0 0 0.5em 0;position:relative;color:#111;}@media (min-width:780px){background:transparent;margin:0 0 1em 0;& > div{margin:1em 0 0 0;position:sticky;overflow-y:auto;top:70px;}}"}),$=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.pageContext,n=t.previous,r=t.next,u=t.similar,l=e.frontmatter.header_img?e.frontmatter.header_img.publicURL:void 0,D=i()(this.props,"data.site.siteMetadata.disqusShortName"),p=i()(this.props,"data.site.siteMetadata.siteUrl"),f={url:p.replace(/\/+$/,"")+"/"+e.frontmatter.slug+"/",title:e.frontmatter.title,site:p,imageUrl:""+p+l,twitterProfile:i()(this.props,"data.site.siteMetadata.twitterProfile")},m=i()(this.props,"data.markdownRemark.fileAbsolutePath"),h=m?"https://github.com/lmammino/loige.co/blob/master/"+m.substr(m.indexOf("content/")):null;return Object(d.c)(c.a,{location:this.props.location,section:"blog"},Object(d.c)(a.a,{path:e.frontmatter.slug+"/",pageData:e,isBlogPost:!0}),Object(d.c)(s.a,{className:"textOverlay",backgroundImage:l},Object(d.c)("h1",null,Object(d.c)("span",null,e.frontmatter.title))),Object(d.c)(Y,null,Object(d.c)(Z,null,Object(d.c)(K,null,Object(d.c)(X,null,Object(d.c)(F,{post:e,githubLink:h,site:p,disqusShortName:D})),Object(d.c)(W,null,Object(d.c)(E.a,null),Object(d.c)("div",null,e.headings.length>0&&Object(d.c)(j,{headings:e.headings}),Object(d.c)("h3",{style:{marginTop:"1em"}},"Share"),Object(d.c)(U,f),u.length>0&&Object(d.c)(o.Fragment,null,Object(d.c)("h3",{style:{marginTop:"1em"}},"Similar posts"),Object(d.c)(V,{similar:u}))))))),Object(d.c)(J,{previous:n,next:r}))},r}(o.Component),ee=(t.default=$,"653128063")}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-62b347af4f51aa4c3ac4.js.map