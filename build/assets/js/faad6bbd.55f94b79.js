"use strict";(self.webpackChunkknowledgebase=self.webpackChunkknowledgebase||[]).push([[419],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,y=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(y,s(s({ref:t},c),{},{components:n})):a.createElement(y,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var d=2;d<o;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4303:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const o={},s="Insert Data into Table",i={unversionedId:"Backend/Python Backend/Python ORM/Insert Data",id:"Backend/Python Backend/Python ORM/Insert Data",title:"Insert Data into Table",description:"## Steps to insert data in a table",source:"@site/docs/Backend/Python Backend/Python ORM/Insert Data.md",sourceDirName:"Backend/Python Backend/Python ORM",slug:"/Backend/Python Backend/Python ORM/Insert Data",permalink:"/knowledgebase/docs/Backend/Python Backend/Python ORM/Insert Data",draft:!1,editUrl:"https://sayanmondal2098.github.io/knowledgebase/docs/docs/Backend/Python Backend/Python ORM/Insert Data.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Establishing Connectivity - the Engine",permalink:"/knowledgebase/docs/Backend/Python Backend/Python ORM/Establish Connection"},next:{title:"Introduction",permalink:"/knowledgebase/docs/Backend/Python Backend/Python ORM/Introduction"}},l={},d=[{value:"Steps to insert data in a table",id:"steps-to-insert-data-in-a-table",level:2}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"insert-data-into-table"},"Insert Data into Table"),(0,r.kt)("h2",{id:"steps-to-insert-data-in-a-table"},"Steps to insert data in a table"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create instance of table class")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add data to session")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Commit changes to Database"),(0,r.kt)("p",{parentName:"li"},"To Add Single record in table - "))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'student1 = Student(\nname = "Test User",\nage = "20",\ngrade = "Third Year"\n)\n\nsession.add(student1)\nsession.commit()\n')),(0,r.kt)("p",null,"To add multiple records in table -"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\nstudent2 = Student(\nname = "Test User 1",\nage = "22",\ngrade = "Fifth Year"\n)\n\nstudent3 = Student(\nname = "Test User 2",\nage = "18",\ngrade = "First Year"\n)\n\nsession.add_all([student2, student3])\n#session.commit()\n')),(0,r.kt)("p",null,"Other way to add record "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"student4 = Student()\nstudent4.name = 'Admin'\nstudent4.age = '16'\nstudent4.grade = 'Class 10'  \nsession.add(student4)\nsession.commit()\n")))}p.isMDXComponent=!0}}]);