(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1491:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(9148)}])},9148:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return A}});var t=r(2322),o=r(7729),i=r(4720),u=r(4707),a=r(6711),c=r(6735),l=r(5754),s=r(2480),p=r(7118),f=r(7273),b=r(5145),y=r(8341),d=r(8678);function h(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function j(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){h(e,n,r[n])}))}return e}function m(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function g(e){var n=e.label,r=e.as,o=void 0===r?y.Z:r,i=m(e,["label","as"]);return(0,t.jsxs)(d.Z,{sx:{mb:3},children:[(0,t.jsx)(d.Z.Label,{children:n}),(0,t.jsx)(o,j({},i))]})}var x=r(2784),v=r(6081),O=r(792);function w(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function k(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function S(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,o,i=[],u=!0,a=!1;try{for(r=r.call(e);!(u=(t=r.next()).done)&&(i.push(t.value),!n||i.length!==n);u=!0);}catch(c){a=!0,o=c}finally{try{u||null==r.return||r.return()}finally{if(a)throw o}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return w(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return w(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var P=function(e,n){if("set"===n.type)return function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){k(e,n,r[n])}))}return e}({},e,k({},n.name,n.value));throw new Error("Unknown action type: ".concat(n.type))};function Z(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function _(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){Z(e,n,r[n])}))}return e}var E={"--support-ua-font-family":"'Roboto', sans-serif","--support-ua-bg-color":"#f5f5f5","--support-ua-font-weight":"normal","--support-ua-text-align":"center","--support-ua-padding":"15px","--support-ua-font-size":"18px","--support-ua-link-color":"#000000","--support-ua-link-hover-color":"#888888"};function A(){var e=function(e){var n=(0,x.useReducer)(P,e),r=n[0],t=n[1];return{connect:(0,x.useCallback)((function(e){return{name:e,value:r[e].endsWith("px")?parseInt(r[e],10):r[e],onChange:function(e){var n=e.target;t({type:"set",name:n.name,value:"number"===n.type?"".concat(n.value,"px"):n.value})}}}),[r]),codeString:(0,x.useMemo)((function(){var n=(0,O.Z)(e,r),t=Object.entries(n).map((function(e){var n=S(e,2),r=n[0],t=n[1];return"".concat(r,": ").concat(t,";")})).join("\n"),o=t?"<style>:root {".concat(t,"}</style>"):"";return(0,v.html)('\n      \x3c!-- insert into the head: --\x3e\n      <script src="https://unpkg.com/support-ukraine-banner/dist/main.min.js" defer><\/script>\n      '.concat(o,"\n      \x3c!-- insert into the body: --\x3e\n      <support-ua></support-ua>\n    "))}),[r,e]),style:r}}(E),n=e.connect,r=e.style,y=e.codeString;return(0,t.jsx)(i.ZP,{theme:u.Z,children:(0,t.jsxs)(a.Z,{children:[(0,t.jsxs)(o.default,{children:[(0,t.jsx)("title",{children:"Support Ukraine banner"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,t.jsx)("meta",{name:"google-site-verification",content:"h8wqwkV6NH_AtfMflXQ6X3LBljyKO2zHfBW8QJ2rIJI"}),(0,t.jsx)("script",{src:"https://unpkg.com/support-ukraine-banner/dist/main.min.js",defer:!0})]}),(0,t.jsxs)(c.X,{containerWidth:"medium",children:[(0,t.jsx)(c.X.Header,{children:(0,t.jsx)(l.Z,{as:"h1",sx:{textAlign:"center"},children:"Support Ukraine banner"})}),(0,t.jsxs)(c.X.Content,{children:[(0,t.jsx)(s.Z,{as:"p",sx:{fontSize:3},children:"Make your own design"}),(0,t.jsxs)(p.Z,{children:[(0,t.jsx)(g,_({label:"Background color",type:"color"},n("--support-ua-bg-color"))),(0,t.jsx)(g,_({label:"Font size",type:"number",trailingVisual:"px"},n("--support-ua-font-size"))),(0,t.jsx)(g,_({label:"Padding",type:"number",trailingVisual:"px"},n("--support-ua-padding"))),(0,t.jsx)(g,_({label:"Link color",type:"color"},n("--support-ua-link-color"))),(0,t.jsx)(g,_({label:"Link hover color",type:"color"},n("--support-ua-link-hover-color")))]}),(0,t.jsxs)(p.Z,{mb:3,children:[(0,t.jsx)(l.Z,{sx:{mb:3,fontSize:3},children:"Preview:"}),(0,t.jsx)("support-ukraine",{style:r})]}),(0,t.jsxs)(p.Z,{children:[(0,t.jsx)(l.Z,{sx:{mb:3,fontSize:3},children:"Code:"}),(0,t.jsx)(f.Z,{language:"html",style:b.MS,children:y})]})]})]})]})})}}},function(e){e.O(0,[774,925,603,888,179],(function(){return n=1491,e(e.s=n);var n}));var n=e.O();_N_E=n}]);