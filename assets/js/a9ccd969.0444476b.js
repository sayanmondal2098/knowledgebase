"use strict";(self.webpackChunkknowledgebase=self.webpackChunkknowledgebase||[]).push([[86],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9158:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={},l="Fast API",i={unversionedId:"Backend/Python Backend/FastAPI/Welcome",id:"Backend/Python Backend/FastAPI/Welcome",title:"Fast API",description:"FastAPI framework, high performance, easy to learn, fast to code, ready for production",source:"@site/docs/Backend/Python Backend/FastAPI/Welcome.md",sourceDirName:"Backend/Python Backend/FastAPI",slug:"/Backend/Python Backend/FastAPI/Welcome",permalink:"/knowledgebase/docs/Backend/Python Backend/FastAPI/Welcome",draft:!1,editUrl:"https://sayanmondal2098.github.io/knowledgebase/docs/docs/Backend/Python Backend/FastAPI/Welcome.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How to start",permalink:"/knowledgebase/docs/Backend/Python Backend/Basic Setup"},next:{title:"Create Table",permalink:"/knowledgebase/docs/Backend/Python Backend/Python ORM/Create Table"}},s={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fast-api"},"Fast API"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"FastAPI framework, high performance, easy to learn, fast to code, ready for production"),"\nFastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.7+ based on standard Python type hints."),(0,r.kt)("p",null,"The key features are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Fast"),": Very high performance, on par with  ",(0,r.kt)("strong",{parentName:"li"},"NodeJS"),"  and  ",(0,r.kt)("strong",{parentName:"li"},"Go"),"  (thanks to Starlette and Pydantic).  ",(0,r.kt)("a",{parentName:"li",href:"https://fastapi.tiangolo.com/#performance"},"One of the fastest Python frameworks available"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Fast to code"),": Increase the speed to develop features by about 200% to 300%. *"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Fewer bugs"),": Reduce about 40% of human (developer) induced errors. *"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Intuitive"),": Great editor support.  Completion  everywhere. Less time debugging."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Easy"),": Designed to be easy to use and learn. Less time reading docs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Short"),": Minimize code duplication. Multiple features from each parameter declaration. Fewer bugs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Robust"),": Get production-ready code. With automatic interactive documentation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Standards-based"),": Based on (and fully compatible with) the open standards for APIs:  ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OAI/OpenAPI-Specification"},"OpenAPI"),"  (previously known as Swagger) and  ",(0,r.kt)("a",{parentName:"li",href:"https://json-schema.org/"},"JSON Schema"),".")),(0,r.kt)("p",null,"To create a virtua env, follow the command -"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m venv venv (in mac)\nor\npy -3 -m venv venv (windows)\n")),(0,r.kt)("p",null,"The activate the venv with "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"source venv/bin/activate (mac)\nor\nvenv/Scripts/activate.bat (windows)\n")),(0,r.kt)("p",null,"To install fastAPI"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install fastapi[all]\n")),(0,r.kt)("p",null,"You will also need an ASGI server, for production such as ",(0,r.kt)("a",{parentName:"p",href:"https://www.uvicorn.org/"},"Uvicorn")," or ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pgjones/hypercorn"},"Hypercorn"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'pip install "uvicorn[standard]"\n')),(0,r.kt)("p",null,"Run the server with "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"uvicorn main:app --reload\n")))}u.isMDXComponent=!0}}]);