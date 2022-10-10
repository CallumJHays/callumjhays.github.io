(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{6172:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var i=n(9499),r=n(4730),o=n(5893),a=["children","className"];function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e){var t=e.children,n=e.className,i=(0,r.Z)(e,a);return(0,o.jsx)("span",l(l({},i),{},{className:"".concat(null!==n&&void 0!==n?n:""," cursor-pointer underline text-green-500"),children:t}))}},6918:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var i=n(1664),r=n.n(i),o=n(5893);function a(e){var t=e.side;return(0,o.jsx)("div",{className:"t"==t?"bg-white border-gray-500 mb-4 border-b":"bg-white border-gray-500 mt-4 border-t",children:(0,o.jsxs)("div",{className:"container max-w-3xl mx-auto grid grid-cols-4 divide-x divide-gray-500 text-center py-2",children:[(0,o.jsx)(r(),{href:"/",children:(0,o.jsx)("h3",{className:"py-2 hover:underline hover:text-green-500 cursor-pointer",children:"Home"})}),(0,o.jsx)(r(),{href:"/projects",children:(0,o.jsx)("h3",{className:"py-2 hover:underline hover:text-green-500 cursor-pointer",children:"Personal Projects"})}),(0,o.jsx)(r(),{href:"/blog",children:(0,o.jsx)("h3",{className:"py-2 hover:underline hover:text-green-500 cursor-pointer",children:"Blog"})}),(0,o.jsx)(r(),{href:"/resume",children:(0,o.jsx)("h3",{className:"py-2 hover:underline hover:text-green-500 cursor-pointer",children:"Resume"})})]})})}function s(e){var t=e.children,n=e.navigation,i=void 0===n||n,r=e.justifyInner,s=void 0===r?"start":r,l=e.justifyOuter,c=void 0===l?"between":l;return(0,o.jsxs)("div",{className:"between"===c?"min-h-screen flex flex-col justify-between":"min-h-screen flex flex-col justify-around",children:[i?(0,o.jsx)(a,{side:"t"}):null,(0,o.jsx)("div",{className:"start"===s?"flex flex-grow flex-col align-middle container mx-auto max-w-3xl p-4 justify-start":"flex flex-grow flex-col align-middle container mx-auto max-w-3xl p-4 justify-center",children:t}),i?(0,o.jsx)(a,{side:"b"}):null]})}},8075:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var i=n(1664),r=n.n(i),o=n(6172),a=n(5893);function s(e){var t=e.children,n=e.href,i=e.floatRight,s=void 0!==i&&i,l=e.className,c=void 0===l?"":l;return(0,a.jsx)(r(),{href:n,children:(0,a.jsx)("span",{children:(0,a.jsx)(o.Z,{className:s?"float-right pr-3 ".concat(c):c,children:t})})})}},6600:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var i=n(7005),r=n(6918),o=n(5893);function a(e){var t=e.children;e.className;return(0,o.jsx)("div",{className:"inline-block rounded-full px-3 py-1 text-xs mr-2 mb-2 border border-green-500 bg-white",children:t})}var s=n(8075),l=n(4644);function c(){return(0,o.jsxs)(r.Z,{children:[(0,o.jsx)("h1",{className:"my-10 ml-4 mb-20",children:"Personal Projects"}),(0,o.jsx)("div",{className:"flex flex-col items-center md:grid md:grid-cols-5 md:gap-10 mb-32",children:l.F.map((function(e){var t=e.title,n=e.subtitle,r=e.imageURI,l=e.githubURL,c=e.tags,d=e.id;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"md:col-span-2 mt-4 max-w-screen-sm",id:d,children:[(0,o.jsx)("h2",{className:"text-2xl mb-2 mt-8 md:hidden",children:t}),(0,o.jsx)("img",{src:r,className:"pb-2"}),(0,o.jsx)(i.Z,{className:"h-9 w-full",pauseOnHover:!0,gradientWidth:20,children:c.map((function(e){return(0,o.jsx)(a,{children:e})}))})]}),(0,o.jsxs)("div",{className:"md:col-span-3 bg-white p-2 max-w-screen-sm",children:[(0,o.jsx)("h2",{className:"text-2xl hidden md:block",id:d,children:t}),(0,o.jsx)("p",{className:"text-md mb-2 mt-2",children:n}),l?(0,o.jsx)(s.Z,{href:l,children:"Source Code (GitHub)"}):null]})]})}))})]})}},4644:function(e,t,n){"use strict";n.d(t,{F:function(){return o}});var i=n(8075),r=n(5893),o=[{title:"Droid Racing Challenge",id:"droid-racing-challenge",subtitle:(0,r.jsxs)(r.Fragment,{children:["Winning Entry for QUT's Droid Racing Challenge 2021.",(0,r.jsx)("br",{className:"mb-2"}),"Built using ",(0,r.jsx)(i.Z,{href:"https://github.com/CallumJHays/bdsim_realtime",children:"BDSim Realtime"}),"\xa0for all data processing, telemetry and high-level execution control.",(0,r.jsx)("br",{className:"mb-2"}),"Low-level ESC and Servo control done with Arduino.",(0,r.jsx)("br",{className:"mb-2"}),(0,r.jsx)(i.Z,{href:"https://www.youtube.com/watch?v=_i1_FaduE24",children:"YouTube Video"})]}),imageURI:"projects/DroidRacingChallenge.webp",tags:["Python","BDSim Realtime","Remote-Control","Webapp","OpenCV","Nvidia Jetson","ARM64","Arduino","C++","C","Embedded"],githubURL:null},{title:"BDSim Realtime",id:"bdsim-realtime",subtitle:(0,r.jsxs)(r.Fragment,{children:["Real-time execution, remote monitoring and tuning of block-diagrams for streamlined modeling, simulation and control of dynamical systems in Python.",(0,r.jsx)("br",{className:"mb-2"}),"Built upon ",(0,r.jsx)(i.Z,{href:"https://github.com/petercorke/bdsim",children:"BDSim"}),"\xa0for honours thesis project; supervised by renowned robotics professor Peter Corke."]}),imageURI:"projects/BdsimWeb.webp",tags:["Python","React","Realtime","Remote-Control","Telemetry","Block-Diagram","Modeling","Simulation","webapp","OpenCV","Computer-Vision","Tuning","Control-Theory","Signal-Analysis"],githubURL:"https://github.com/CallumJHays/bdsim_realtime"},{title:"Hillary the Hexapod",id:"hillary-the-hexapod",subtitle:(0,r.jsxs)(r.Fragment,{children:["Remote control, live calibration and 3D visualisation for\xa0",(0,r.jsx)(i.Z,{href:"https://www.qut.edu.au/robotics-club",children:"QUT Robotics Club"}),"'s long-running hexapod project.",(0,r.jsx)("br",{className:"mb-2"}),"Consists of a React/Typescript app hosted by an async Python server via websockets."]}),imageURI:"projects/Hillary.webp",tags:["Python","React","Remote-Control","Webapp","Kinematics","Robotics","Calibration","Joystick"],githubURL:"https://github.com/qut-robotics-club/hillary-hexapod"},{title:"React Github Activity Feed",id:"react-github-activity-feed",subtitle:(0,r.jsxs)("span",{children:["Turn-key Github activity feed React component. Great for portfolio sites of sporadic open-source developers.",(0,r.jsx)("br",{className:"mb-2"}),"Built for this portfolio site, and to practice publishing a React component to NPM with all the bells and whistles.",(0,r.jsx)("br",{className:"mb-2"}),(0,r.jsx)(i.Z,{href:"/react-github-activity-feed",children:"Storybook Demo / Docs"})]}),imageURI:"projects/react-github-activity-feed.webp",tags:["TypeScript","React","Github","Rollup","npm","Storybook"],githubURL:"https://github.com/CallumJHays/react-github-activity-feed"},{title:"Roo-Blocks",id:"roo-blocks",subtitle:(0,r.jsxs)("span",{children:["Child-friendly electron app for controlling an ESP32 over Bluetooth using Blockly.",(0,r.jsx)("br",{className:"mb-2"}),"Built for mechatronics design 3 (EGH454)"]}),imageURI:"projects/RooBlocks.webp",tags:["ESP32","MicroPython","Bluetooth","Blockly","Electron","TypeScript","React"],githubURL:"https://github.com/CallumJHays/Roo-Blocks"},{title:"Portfolio Site",id:"portfolio-site",subtitle:(0,r.jsxs)("span",{children:["Portfolio site you're looking at right now.",(0,r.jsx)("br",{className:"mb-2"}),"Built with Next.js/React and TailwindCSS using solely functional components and hooks.",(0,r.jsx)("br",{className:"mb-2"}),"Auto-deployed to github pages via Github Actions CI/CD."]}),imageURI:"projects/Portfolio.webp",tags:["Blog","Next.js","React","TypeScript","TailwindCSS","Portfolio"],githubURL:"https://github.com/CallumJHays/callumjhays.github.io"}]},6192:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return n(6600)}])},7005:function(e,t,n){var i=n(7294);function r(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var o=r(i),a=function(){return a=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},a.apply(this,arguments)};!function(e){if(!e||"undefined"===typeof window)return;const t=document.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t)}('.marquee-container {\n  overflow-x: hidden !important;\n  display: flex !important;\n  flex-direction: row !important;\n  position: relative;\n  width: 100%;\n}\n.marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.overlay::before, .overlay::after {\n  background: linear-gradient(to right, var(--gradient-color));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n}\n.overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.marquee {\n  flex: 0 0 auto;\n  min-width: 100%;\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}');t.Z=function(e){var t,n,r,s,l=e.style,c=void 0===l?{}:l,d=e.className,u=void 0===d?"":d,m=e.play,h=void 0===m||m,p=e.pauseOnHover,f=void 0!==p&&p,b=e.pauseOnClick,g=void 0!==b&&b,v=e.direction,y=void 0===v?"left":v,x=e.speed,j=void 0===x?20:x,w=e.delay,R=void 0===w?0:w,N=e.loop,C=void 0===N?0:N,k=e.gradient,P=void 0===k||k,O=e.gradientColor,E=void 0===O?[255,255,255]:O,S=e.gradientWidth,B=void 0===S?200:S,D=e.onFinish,T=e.onCycleComplete,U=e.children,Z=i.useState(0),_=Z[0],H=Z[1],L=i.useState(0),A=L[0],F=L[1],I=i.useState(!1),q=I[0],G=I[1],J=i.useRef(null),W=i.useRef(null);i.useEffect((function(){if(q){var e=function(){W.current&&J.current&&(H(J.current.getBoundingClientRect().width),F(W.current.getBoundingClientRect().width))};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}}),[q]),i.useEffect((function(){G(!0)}),[]);var M="rgba("+E[0]+", "+E[1]+", "+E[2],z=A<_?_/j:A/j;return o.default.createElement(i.Fragment,null,q?o.default.createElement("div",{ref:J,style:a(a({},c),(t={},t["--pause-on-hover"]=!h||f?"paused":"running",t["--pause-on-click"]=!h||f&&!g||g?"paused":"running",t)),className:u+" marquee-container"},P&&o.default.createElement("div",{style:(n={},n["--gradient-color"]=M+", 1), "+M+", 0)",n["--gradient-width"]="number"===typeof B?B+"px":B,n),className:"overlay"}),o.default.createElement("div",{ref:W,style:(r={},r["--play"]=h?"running":"paused",r["--direction"]="left"===y?"normal":"reverse",r["--duration"]=z+"s",r["--delay"]=R+"s",r["--iteration-count"]=C?""+C:"infinite",r),className:"marquee",onAnimationIteration:T,onAnimationEnd:D},U),o.default.createElement("div",{style:(s={},s["--play"]=h?"running":"paused",s["--direction"]="left"===y?"normal":"reverse",s["--duration"]=z+"s",s["--delay"]=R+"s",s["--iteration-count"]=C?""+C:"infinite",s),className:"marquee","aria-hidden":"true"},U)):null)}}},function(e){e.O(0,[792,774,888,179],(function(){return t=6192,e(e.s=t);var t}));var t=e.O();_N_E=t}]);