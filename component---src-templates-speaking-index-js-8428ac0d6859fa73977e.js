(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{195:function(e,t,n){"use strict";n.r(t);n(231),n(20);var a=n(197),r=n(5),o=n(0),i=n(92),c=n(217),l=n(198),s=n(203),p=n(199),d=n(341),u=n.n(d);n(19);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var h=function(e){return Object(r.c)("svg",m({"aria-hidden":"true","data-prefix":"fas","data-icon":"images",className:"svg-inline--fa fa-images fa-w-18",viewBox:"0 0 576 512",width:"1em",height:"1em"},e),Object(r.c)("path",{fill:"currentColor",d:"M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v208c0 44.112 35.888 80 80 80h336zm96-80V80c0-26.51-21.49-48-48-48H144c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48h384c26.51 0 48-21.49 48-48zM256 128c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-96 144l55.515-55.515c4.686-4.686 12.284-4.686 16.971 0L272 256l135.515-135.515c4.686-4.686 12.284-4.686 16.971 0L512 208v112H160v-48z"}))};function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var f=function(e){return Object(r.c)("svg",g({"aria-hidden":"true","data-prefix":"fas","data-icon":"video",className:"svg-inline--fa fa-video fa-w-18",viewBox:"0 0 576 512",width:"1em",height:"1em"},e),Object(r.c)("path",{fill:"currentColor",d:"M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"}))};n(22);var b=Object(a.a)("div",{target:"e1gps5zz0"})({name:"bvvzy5",styles:"width:100%;height:30vh;min-height:300px;max-height:900px;background:#46c9e5;&.collapsed{height:0;min-height:0;max-height:0;}"}),v=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).state={events:t.events},n.createMap=n.createMap.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n)),n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=a.prototype;return o.createMap=function(){var e=L.tileLayer("https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}",{attribution:'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',subdomains:"abcd",minZoom:1,maxZoom:16,ext:"png"}),t=L.map("speaking_map").setView([51.505,-.09],3);e.addTo(t);var n=L.markerClusterGroup({maxClusterRadius:20});this.state.events.forEach(function(e){var t=e.frontmatter.event_location_gps.split(",").map(parseFloat);L.marker(t).bindPopup("<b>"+e.frontmatter.event_name+"</b><br/><em>"+e.frontmatter.title+"</em><br/>"+e.frontmatter.date).addTo(n)}),n.addTo(t)},o.shouldComponentUpdate=function(){return!this.state.loaded},o.componentDidMount=function(){this.setState({loaded:!0});var e=document.createElement("script");e.type="text/javascript",e.src="/resources/leaflet/leaflet.js";var t=document.createElement("link");t.type="text/css",t.rel="stylesheet",t.href="/resources/leaflet/leaflet.css",document.head.appendChild(e),document.head.appendChild(t),e.onload=this.createMap.bind(this)},o.render=function(){return Object(r.c)(b,{className:this.state.loaded?null:"collapsed",id:"speaking_map"})},a}(o.Component),j=n(201);function O(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}n.d(t,"pageQuery",function(){return x});var y=Object(a.a)("div",{target:"e1iccc0a0"})({name:"1ss216w",styles:"margin:2em auto;padding-left:20px;padding-right:20px;max-width:820px;flex-direction:column;font-size:16px;@media (min-width:780px){width:90%;font-size:17px;}h2{margin:2em 0 1em 0;color:#46c9e5;border:none;}h3{margin:0;padding:1em 0 0 0;}p,ul{line-height:1.7;margin:1em 0 0 0;max-width:42em;}p.slides-video{margin:1em 0 0 0;a{display:inline-block;margin:0 0 0 1em;&:first-of-type{margin:0;}svg{vertical-align:text-bottom;}}}ul.topics{padding:0 0 0 2em;a{font-weight:bold;}}ul.events{list-style:none;li{border-top:1px solid #ececec;margin-top:2em;padding-top:2em;line-height:1.2;&:first-of-type{border-top:none;margin-top:0;padding-top:0;}}}"}),k=function(e){function t(){return e.apply(this,arguments)||this}return O(t,e),t.prototype.render=function(){var e=this.props.event.frontmatter,t=function(e){var t={comaSeparated:null,and:null,length:e.length};if(1===e.length)t.comaSeparated=e;else{var n=e[e.length-1];t.comaSeparated=e.slice(0,e.length-1),t.and=n}return t}(e.with);return Object(r.c)("div",null,Object(r.c)("div",{className:"event-wrapper",itemScope:!0,itemType:"http://schema.org/Event"},Object(r.c)("h3",{className:"event-title",itemProp:"name"},e.title,e.is_workshop?" (workshop)":""),Object(r.c)("p",{style:{marginTop:"1em"}},Object(r.c)("span",null,Object(r.c)("a",{itemProp:"url",href:e.event_link,rel:"nofollow noopener noreferrer",target:"_blank"},e.event_name)," ","(",Object(r.c)("span",{itemProp:"location",itemScope:!0,itemType:"http://schema.org/Place"},Object(r.c)("span",{itemProp:"name"},e.event_city),Object(r.c)("span",{"aria-hidden":"true",style:{display:"none"},itemProp:"address"},e.event_location)),")"),"  - ",Object(r.c)("span",{itemProp:"startDate"},e.date),t.length>0&&Object(r.c)("span",null,"  - with"," ",t.comaSeparated.map(function(e,n){return Object(r.c)(o.Fragment,{key:e.name},Object(r.c)("a",{href:e.link,rel:"nofollow noopener noreferrer",target:"_blank"},e.name),n<t.comaSeparated.length-1&&", ")}),t.and&&Object(r.c)(o.Fragment,null," and"," ",Object(r.c)("a",{href:t.and.link,rel:"nofollow noopener noreferrer",target:"_blank"},t.and.name)))),(e.slides_link||e.video_link)&&Object(r.c)("p",{className:"slides-video"},e.slides_link&&Object(r.c)("a",{href:e.slides_link,rel:"nofollow noopener noreferrer",target:"_blank"},Object(r.c)(h,null)," Slides")," ",e.video_link&&Object(r.c)("a",{href:e.video_link,rel:"nofollow noopener noreferrer",target:"_blank"},Object(r.c)(f,null)," Video"))))},t}(o.Component),w=function(e){function t(){return e.apply(this,arguments)||this}return O(t,e),t.prototype.render=function(){var e=Object(c.get)(this,"props.data.site.siteMetadata.title"),t=this.props.pageContext.events,n=function(e){var t=(new Date).toISOString(),n=[],a=[];return e.forEach(function(e){e.frontmatter.originalDate>=t?n.unshift(e):a.push(e)}),{future:n,past:a}}(t),a=n.future,o=n.past;return Object(r.c)(s.a,{location:this.props.location,section:"speaking"},Object(r.c)(l.a,{path:"speaking/",pageData:{frontmatter:{title:"Speaking (conferences and workshops) - "+e,meta_description:"Luciano Mammino's speaking engagements, conferences and workshops"}}}),Object(r.c)(p.a,{className:"small gradientOverlay",backgroundImage:u.a},Object(r.c)("h1",null,"Speaking")),Object(r.c)(y,null,Object(r.c)(j.a,null,Object(r.c)("p",null,"I am quite involved with conferences and I love delivering technical talks and workshops."),Object(r.c)("p",null,"Lately I have been focusing on the following topics:"),Object(r.c)("ul",{className:"topics"},Object(r.c)("li",null,Object(r.c)(i.Link,{to:"/tag/node-js"},"Node.js"),","," ",Object(r.c)(i.Link,{to:"/tag/javascript"},"JavaScript")," and"," ",Object(r.c)(i.Link,{to:"/tag/design-patterns"},"Design Patterns")),Object(r.c)("li",null,Object(r.c)(i.Link,{to:"/tag/serverless"},"Serverless")," and"," ",Object(r.c)(i.Link,{to:"/tag/aws"},"AWS")),Object(r.c)("li",null,Object(r.c)("strong",null,"Systems architecture")," and"," ",Object(r.c)(i.Link,{to:"/tag/scalability"},"Scalability"))),Object(r.c)("p",null,"If you think I can be a good suit to talk or host a workshop, you can"," ",Object(r.c)("strong",null,Object(r.c)("a",{href:"http://loige.link/invite-me-to-a-conference",target:"_blank",rel:"nofollow noopener noreferrer"},"📩 invite me to your next cool conference")),"."),Object(r.c)("p",null,"Here you can find a list of my future and past engagements."))),Object(r.c)(v,{events:t}),Object(r.c)(y,null,Object(r.c)(j.a,null,Object(r.c)("h2",null,"Upcoming events"),a.length>0&&Object(r.c)("ul",{className:"events"},a.map(function(e){return Object(r.c)("li",{key:e.frontmatter.slug},Object(r.c)(k,{event:e}))})),0===a.length&&Object(r.c)("p",null,"No future events planned at this time :("),Object(r.c)("h2",null,"Past events (",o.length,")"),Object(r.c)("ul",{className:"events"},o.map(function(e){return Object(r.c)("li",{key:e.frontmatter.slug},Object(r.c)(k,{event:e}))})))))},t}(o.Component),x=(t.default=w,"1652182481")},199:function(e,t,n){"use strict";var a=n(197),r=n(5),o=n(0),i=n(200),c=n.n(i);var l=Object(a.a)("div",{target:"ea1ziiz0"})({name:"vvgs1u",styles:"background-color:#46c9e5;background-repeat:no-repeat;background-position:center;background-size:cover;width:100%;min-height:300px;height:50vh;display:table;&.small{max-height:300px;}&.tiledBg{background-size:auto;background-repeat:repeat;}&.bottomRightBg{background-position:bottom right;}&.gradientOverlay{position:relative;z-index:-2;&:before{content:'';position:absolute;top:0;right:0;bottom:0;left:0;background-image:linear-gradient(to bottom right,#46c9e5,#d26ac2);opacity:0.6;z-index:-1;}}@media (min-width:780px){height:70vh;}"}),s=Object(a.a)("div",{target:"ea1ziiz1"})({name:"1dbbfk8",styles:"display:table-cell;vertical-align:middle;text-align:center;font-weight:700;color:#fff;padding:0 2em;color:white;text-shadow:1px 3px 0 #000,-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000;@media (min-width:780px){font-size:1.2em;}h1{font-size:2em;line-height:1.6em;}h2{font-size:1.5em;margin:0.5em 0 0 0;line-height:1.6em;}&.textOverlay > * > span{background:#000000c4;display:inline;padding:0.2em;box-decoration-break:clone;-webkit-box-decoration-break:clone;}"}),p=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.props,t=(e.isSmall,e.children),n=e.className,a=this.props.backgroundImage||c.a;return Object(r.c)(l,{className:n,style:{backgroundImage:"url("+a+")"}},Object(r.c)(s,{className:n},t))},a}(o.Component);t.a=p},200:function(e,t,n){e.exports=n.p+"static/default-bg-e7d1dfbd3202e36e2d9d70dfd5a77122.jpg"},231:function(e,t,n){"use strict";n(232)("link",function(e){return function(t){return e(this,"a","href",t)}})},232:function(e,t,n){var a=n(9),r=n(11),o=n(40),i=/"/g,c=function(e,t,n,a){var r=String(o(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(a).replace(i,"&quot;")+'"'),c+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),a(a.P+a.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},341:function(e,t,n){e.exports=n.p+"static/speaking-bg-b3fa54c7a0352de7f7ab61fed7f8b40c.jpg"}}]);
//# sourceMappingURL=component---src-templates-speaking-index-js-8428ac0d6859fa73977e.js.map