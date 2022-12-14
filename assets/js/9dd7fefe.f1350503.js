"use strict";(self.webpackChunkknowledgebase=self.webpackChunkknowledgebase||[]).push([[108],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=i(n),m=a,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(y,l(l({ref:t},p),{},{components:n})):r.createElement(y,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4694:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const o={},l="Create Table",s={unversionedId:"Backend/Python Backend/Python ORM/Create Table",id:"Backend/Python Backend/Python ORM/Create Table",title:"Create Table",description:"## Steps to create a table in postgresql",source:"@site/docs/Backend/Python Backend/Python ORM/Create Table.md",sourceDirName:"Backend/Python Backend/Python ORM",slug:"/Backend/Python Backend/Python ORM/Create Table",permalink:"/knowledgebase/docs/Backend/Python Backend/Python ORM/Create Table",draft:!1,editUrl:"https://sayanmondal2098.github.io/knowledgebase/docs/docs/Backend/Python Backend/Python ORM/Create Table.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Fast API",permalink:"/knowledgebase/docs/Backend/Python Backend/FastAPI/Welcome"},next:{title:"Working with Transactions and the DBAPI",permalink:"/knowledgebase/docs/Backend/Python Backend/Python ORM/Data Transaction"}},c={},i=[{value:"Steps to create a table in postgresql",id:"steps-to-create-a-table-in-postgresql",level:2}],p={toc:i};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-table"},"Create Table"),(0,a.kt)("h2",{id:"steps-to-create-a-table-in-postgresql"},"Steps to create a table in postgresql"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create Engine"),(0,a.kt)("li",{parentName:"ul"},"Create session"),(0,a.kt)("li",{parentName:"ul"},"Create table"),(0,a.kt)("li",{parentName:"ul"},"Migrate ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from  sqlalchemy  import  create_engine, Integer, String, Column\nfrom  sqlalchemy.orm  import  sessionmaker\nfrom  sqlalchemy.ext.declarative  import  declarative_base\n\nengine = create_engine(\"postgresql://username:password@host:port/db_name\",echo=False)\nSession = sessionmaker(bind=engine)\nsession = Session()\nBase = declarative_base()\n\nclass  Student(Base):\n\n    __tablename__ = 'student'  \n    id = Column(Integer, primary_key = True)\n    name=Column(String(50))\n    age= Column(Integer)\n    grade= Column(String(50))  \n\nBase.metadata.create_all(engine)\n")))}d.isMDXComponent=!0}}]);