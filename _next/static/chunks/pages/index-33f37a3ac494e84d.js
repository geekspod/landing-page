(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9361:function(e,t){"use strict";t.Z=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}},5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3678)}])},8045:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(9361).Z,r=n(4941).Z,a=n(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,s=e.unoptimized,c=void 0!==s&&s,p=e.priority,h=void 0!==p&&p,w=e.loading,A=e.lazyRoot,k=void 0===A?null:A,E=e.lazyBoundary,I=e.className,L=e.quality,R=e.width,O=e.height,C=e.style,P=e.objectFit,q=e.objectPosition,M=e.onLoadingComplete,H=e.placeholder,D=void 0===H?"empty":H,W=e.blurDataURL,B=l(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),V=d.useContext(g.ImageConfigContext),Z=d.useMemo((function(){var e=b||V||f.imageConfigDefault,t=a(e.deviceSizes).concat(a(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return o({},e,{allSizes:t,deviceSizes:n})}),[V]),F=B,U=n?"responsive":"intrinsic";"layout"in F&&(F.layout&&(U=F.layout),delete F.layout);var G=S;if("loader"in F){if(F.loader){var T=F.loader;G=function(e){e.config;var t=l(e,["config"]);return T(t)}}delete F.loader}var Q="";if(function(e){return"object"===typeof e&&(_(e)||function(e){return void 0!==e.src}(e))}(t)){var J=_(t)?t.default:t;if(!J.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(W=W||J.blurDataURL,Q=J.src,(!U||"fill"!==U)&&(O=O||J.height,R=R||J.width,!J.height||!J.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)))}var X=!h&&("lazy"===w||"undefined"===typeof w);((t="string"===typeof t?t:Q).startsWith("data:")||t.startsWith("blob:"))&&(c=!0,X=!1);y.has(t)&&(X=!1);v&&(c=!0);var K,Y=r(d.useState(!1),2),$=Y[0],ee=Y[1],te=r(m.useIntersection({rootRef:k,rootMargin:E||"200px",disabled:!X}),3),ne=te[0],ie=te[1],re=te[2],ae=!X||ie,oe={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},se={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ce=!1,le={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:P,objectPosition:q},de=z(R),ue=z(O),fe=z(L);0;var me=Object.assign({},C,le),ge="blur"!==D||$?{}:{backgroundSize:P||"cover",backgroundPosition:q||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(W,'")')};if("fill"===U)oe.display="block",oe.position="absolute",oe.top=0,oe.left=0,oe.bottom=0,oe.right=0;else if("undefined"!==typeof de&&"undefined"!==typeof ue){var pe=ue/de,he=isNaN(pe)?"100%":"".concat(100*pe,"%");"responsive"===U?(oe.display="block",oe.position="relative",ce=!0,se.paddingTop=he):"intrinsic"===U?(oe.display="inline-block",oe.position="relative",oe.maxWidth="100%",ce=!0,se.maxWidth="100%",K="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(de,"%27%20height=%27").concat(ue,"%27/%3e")):"fixed"===U&&(oe.display="inline-block",oe.position="relative",oe.width=de,oe.height=ue)}else 0;var ve={src:x,srcSet:void 0,sizes:void 0};ae&&(ve=j({config:Z,src:t,unoptimized:c,layout:U,width:de,quality:fe,sizes:n,loader:G}));var be=t;0;var ye,xe="imagesrcset",we="imagesizes";xe="imageSrcSet",we="imageSizes";var _e=(i(ye={},xe,ve.srcSet),i(ye,we,ve.sizes),ye),je=d.default.useLayoutEffect,ze=d.useRef(M),Se=d.useRef(t);d.useEffect((function(){ze.current=M}),[M]),je((function(){Se.current!==t&&(re(),Se.current=t)}),[re,t]);var Ae=o({isLazy:X,imgAttributes:ve,heightInt:ue,widthInt:de,qualityInt:fe,layout:U,className:I,imgStyle:me,blurStyle:ge,loading:w,config:Z,unoptimized:c,placeholder:D,loader:G,srcString:be,onLoadingCompleteRef:ze,setBlurComplete:ee,setIntersection:ne,isVisible:ae,noscriptSizes:n},F);return d.default.createElement(d.default.Fragment,null,d.default.createElement("span",{style:oe},ce?d.default.createElement("span",{style:se},K?d.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:K}):null):null,d.default.createElement(N,Object.assign({},Ae))),h?d.default.createElement(u.default,null,d.default.createElement("link",Object.assign({key:"__nimg-"+ve.src+ve.srcSet+ve.sizes,rel:"preload",as:"image",href:ve.srcSet?void 0:ve.src},_e))):null)};var o=n(6495).Z,s=n(2648).Z,c=n(1598).Z,l=n(7273).Z,d=c(n(7294)),u=s(n(5443)),f=n(9309),m=n(7190),g=n(9977),p=(n(3794),n(2392));var h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,experimentalFuture:!0}||{},v=h.experimentalUnoptimized,b={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,experimentalFuture:!0},y=new Set,x=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var w=new Map([["default",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(p.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(r||75)}],["imgix",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality,a=new URL("".concat(t.path).concat(k(n))),o=a.searchParams;o.set("auto",o.get("auto")||"format"),o.set("fit",o.get("fit")||"max"),o.set("w",o.get("w")||i.toString()),r&&o.set("q",r.toString());return a.href}],["cloudinary",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality,a=["f_auto","c_limit","w_"+i,"q_"+(r||"auto")].join(",")+"/";return"".concat(t.path).concat(a).concat(k(n))}],["akamai",function(e){var t=e.config,n=e.src,i=e.width;return"".concat(t.path).concat(k(n),"?imwidth=").concat(i)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function _(e){return void 0!==e.default}function j(e){var t=e.config,n=e.src,i=e.unoptimized,r=e.layout,o=e.width,s=e.quality,c=e.sizes,l=e.loader;if(i)return{src:n,srcSet:void 0,sizes:void 0};var d=function(e,t,n,i){var r=e.deviceSizes,o=e.allSizes;if(i&&("fill"===n||"responsive"===n)){for(var s,c=/(^|\s)(1?\d?\d)vw/g,l=[];s=c.exec(i);s)l.push(parseInt(s[2]));if(l.length){var d,u=.01*(d=Math).min.apply(d,a(l));return{widths:o.filter((function(e){return e>=r[0]*u})),kind:"w"}}return{widths:o,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:r,kind:"w"}:{widths:a(new Set([t,2*t].map((function(e){return o.find((function(t){return t>=e}))||o[o.length-1]})))),kind:"x"}}(t,o,r,c),u=d.widths,f=d.kind,m=u.length-1;return{sizes:c||"w"!==f?c:"100vw",srcSet:u.map((function(e,i){return"".concat(l({config:t,src:n,quality:s,width:e})," ").concat("w"===f?e:i+1).concat(f)})).join(", "),src:l({config:t,src:n,quality:s,width:u[m]})}}function z(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function S(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",i=w.get(n);if(i)return i(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(n))}function A(e,t,n,i,r,a){e&&e.src!==x&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(y.add(t),"blur"===i&&a(!0),null==r?void 0:r.current)){var n=e.naturalWidth,o=e.naturalHeight;r.current({naturalWidth:n,naturalHeight:o})}})))}var N=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),i=e.qualityInt,r=e.layout,a=e.className,s=e.imgStyle,c=e.blurStyle,u=e.isLazy,f=e.placeholder,m=e.loading,g=e.srcString,p=e.config,h=e.unoptimized,v=e.loader,b=e.onLoadingCompleteRef,y=e.setBlurComplete,x=e.setIntersection,w=e.onLoad,_=e.onError,z=(e.isVisible,e.noscriptSizes),S=l(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return m=u?"lazy":m,d.default.createElement(d.default.Fragment,null,d.default.createElement("img",Object.assign({},S,t,{decoding:"async","data-nimg":r,className:a,style:o({},s,c),ref:d.useCallback((function(e){x(e),(null==e?void 0:e.complete)&&A(e,g,0,f,b,y)}),[x,g,r,f,b,y]),onLoad:function(e){A(e.currentTarget,g,0,f,b,y),w&&w(e)},onError:function(e){"blur"===f&&y(!0),_&&_(e)}})),(u||"blur"===f)&&d.default.createElement("noscript",null,d.default.createElement("img",Object.assign({},S,j({config:p,src:g,unoptimized:h,layout:r,width:n,quality:i,sizes:z,loader:v}),{decoding:"async","data-nimg":r,style:s,className:a,loading:m}))))};function k(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,l=e.disabled||!o,d=r.useRef(),u=i(r.useState(!1),2),f=u[0],m=u[1],g=i(r.useState(null),2),p=g[0],h=g[1];r.useEffect((function(){if(o){if(d.current&&(d.current(),d.current=void 0),l||f)return;return p&&p.tagName&&(d.current=function(e,t,n){var i=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},i=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(i&&(t=s.get(i)))return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:a,elements:r},c.push(n),s.set(n,t),t}(n),r=i.id,a=i.observer,o=i.elements;return o.set(e,t),a.observe(e),function(){if(o.delete(e),a.unobserve(e),0===o.size){a.disconnect(),s.delete(r);var t=c.findIndex((function(e){return e.root===r.root&&e.margin===r.margin}));t>-1&&c.splice(t,1)}}}(p,(function(e){return e&&m(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==d.current||d.current(),d.current=void 0}}if(!f){var e=a.requestIdleCallback((function(){return m(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[p,l,n,t,f]);var v=r.useCallback((function(){m(!1)}),[]);return[h,f,v]};var r=n(7294),a=n(9311),o="function"===typeof IntersectionObserver;var s=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3678:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var i=n(5893),r=n(9008),a=n.n(r),o=n(5675),s=n.n(o),c=n(214),l=n.n(c);function d(){return(0,i.jsxs)("div",{className:l().container,children:[(0,i.jsxs)(a(),{children:[(0,i.jsx)("title",{children:"Create Next App"}),(0,i.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsxs)("main",{className:l().main,children:[(0,i.jsxs)("h1",{className:l().title,children:["Welcome to ",(0,i.jsx)("a",{href:"https://nextjs.org",children:"Next.js!"})]}),(0,i.jsxs)("p",{className:l().description,children:["Get started by editing"," ",(0,i.jsx)("code",{className:l().code,children:"pages/index.js"})]}),(0,i.jsxs)("div",{className:l().grid,children:[(0,i.jsxs)("a",{href:"https://nextjs.org/docs",className:l().card,children:[(0,i.jsx)("h2",{children:"Documentation \u2192"}),(0,i.jsx)("p",{children:"Find in-depth information about Next.js features and API."})]}),(0,i.jsxs)("a",{href:"https://nextjs.org/learn",className:l().card,children:[(0,i.jsx)("h2",{children:"Learn \u2192"}),(0,i.jsx)("p",{children:"Learn about Next.js in an interactive course with quizzes!"})]}),(0,i.jsxs)("a",{href:"https://github.com/vercel/next.js/tree/canary/examples",className:l().card,children:[(0,i.jsx)("h2",{children:"Examples \u2192"}),(0,i.jsx)("p",{children:"Discover and deploy boilerplate example Next.js projects."})]}),(0,i.jsxs)("a",{href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:l().card,children:[(0,i.jsx)("h2",{children:"Deploy \u2192"}),(0,i.jsx)("p",{children:"Instantly deploy your Next.js site to a public URL with Vercel."})]})]})]}),(0,i.jsx)("footer",{className:l().footer,children:(0,i.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,i.jsx)("span",{className:l().logo,children:(0,i.jsx)(s(),{src:"/vercel.svg",alt:"Vercel Logo",width:72,height:16})})]})})]})}},214:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},9008:function(e,t,n){e.exports=n(5443)},5675:function(e,t,n){e.exports=n(8045)}},function(e){e.O(0,[774,888,179],(function(){return t=5557,e(e.s=t);var t}));var t=e.O();_N_E=t}]);