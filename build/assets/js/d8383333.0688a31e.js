"use strict";(self.webpackChunkknowledgebase=self.webpackChunkknowledgebase||[]).push([[777],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,y=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(y,i(i({ref:t},h),{},{components:n})):a.createElement(y,i({ref:t},h))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5828:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={},i="Establishing Connectivity - the Engine",s={unversionedId:"Backend/Python Backend/Python ORM/Establish Connection",id:"Backend/Python Backend/Python ORM/Establish Connection",title:"Establishing Connectivity - the Engine",description:"The start of any SQLAlchemy application is an object called the  Engine. This object acts as a central source of connections to a particular database, providing both a factory as well as a holding space called a  connection pool  for these database connections. The engine is typically a global object created just once for a particular database server, and is configured using a URL string which will describe how it should connect to the database host or backend.",source:"@site/docs/Backend/Python Backend/Python ORM/Establish Connection.md",sourceDirName:"Backend/Python Backend/Python ORM",slug:"/Backend/Python Backend/Python ORM/Establish Connection",permalink:"/knowledgebase/docs/Backend/Python Backend/Python ORM/Establish Connection",draft:!1,editUrl:"https://sayanmondal2098.github.io/knowledgebase/docs/docs/Backend/Python Backend/Python ORM/Establish Connection.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Working with Transactions and the DBAPI",permalink:"/knowledgebase/docs/Backend/Python Backend/Python ORM/Data Transaction"},next:{title:"Introduction",permalink:"/knowledgebase/docs/Backend/Python Backend/Python ORM/Introduction"}},l={},c=[],h={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"establishing-connectivity---the-engine"},"Establishing Connectivity - the Engine"),(0,r.kt)("p",null,"The start of any SQLAlchemy application is an object called the  ",(0,r.kt)("a",{parentName:"p",href:"https://docs.sqlalchemy.org/en/20/core/connections.html#sqlalchemy.engine.Engine",title:"sqlalchemy.engine.Engine"},(0,r.kt)("inlineCode",{parentName:"a"},"Engine")),". This object acts as a central source of connections to a particular database, providing both a factory as well as a holding space called a  ",(0,r.kt)("a",{parentName:"p",href:"https://docs.sqlalchemy.org/en/20/core/pooling.html"},"connection pool"),"  for these database connections. The engine is typically a global object created just once for a particular database server, and is configured using a URL string which will describe how it should connect to the database host or backend."),(0,r.kt)("p",null,"For this tutorial we will use an in-memory-only SQLite database. This is an easy way to test things without needing to have an actual pre-existing database set up. The  ",(0,r.kt)("a",{parentName:"p",href:"https://docs.sqlalchemy.org/en/20/core/connections.html#sqlalchemy.engine.Engine",title:"sqlalchemy.engine.Engine"},(0,r.kt)("inlineCode",{parentName:"a"},"Engine")),"  is created by using the  ",(0,r.kt)("a",{parentName:"p",href:"https://docs.sqlalchemy.org/en/20/core/engines.html#sqlalchemy.create_engine",title:"sqlalchemy.create_engine"},(0,r.kt)("inlineCode",{parentName:"a"},"create_engine()")),"  function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from sqlalchemy import create_engine\nengine = create_engine("sqlite+pysqlite:///:memory:", echo=True)\n')),(0,r.kt)("p",null,"The main argument to  ",(0,r.kt)("a",{parentName:"p",href:"https://docs.sqlalchemy.org/en/20/core/engines.html#sqlalchemy.create_engine",title:"sqlalchemy.create_engine"},(0,r.kt)("inlineCode",{parentName:"a"},"create_engine")),"  is a string URL, above passed as the string  ",(0,r.kt)("inlineCode",{parentName:"p"},'"sqlite+pysqlite:///:memory:"'),". This string indicates to the  ",(0,r.kt)("inlineCode",{parentName:"p"},"Engine")," three important facts:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"What kind of database are we communicating with? This is the  ",(0,r.kt)("inlineCode",{parentName:"li"},"sqlite"),"  portion above, which links in SQLAlchemy to an object known as the  ",(0,r.kt)("a",{parentName:"li",href:"https://docs.sqlalchemy.org/en/20/glossary.html#term-dialect"},"dialect"),"."),(0,r.kt)("li",{parentName:"ol"},"What  ",(0,r.kt)("a",{parentName:"li",href:"https://docs.sqlalchemy.org/en/20/glossary.html#term-DBAPI"},"DBAPI"),"  are we using? The Python  ",(0,r.kt)("a",{parentName:"li",href:"https://docs.sqlalchemy.org/en/20/glossary.html#term-DBAPI"},"DBAPI"),"  is a third party driver that SQLAlchemy uses to interact with a particular database. In this case, we\u2019re using the name  ",(0,r.kt)("inlineCode",{parentName:"li"},"pysqlite"),", which in modern Python use is the  ",(0,r.kt)("a",{parentName:"li",href:"https://docs.python.org/library/sqlite3.html"},"sqlite3"),"  standard library interface for SQLite. If omitted, SQLAlchemy will use a default  ",(0,r.kt)("a",{parentName:"li",href:"https://docs.sqlalchemy.org/en/20/glossary.html#term-DBAPI"},"DBAPI"),"  for the particular database selected."),(0,r.kt)("li",{parentName:"ol"},"How do we locate the database? In this case, our URL includes the phrase  ",(0,r.kt)("inlineCode",{parentName:"li"},"/:memory:"),", which is an indicator to the  ",(0,r.kt)("inlineCode",{parentName:"li"},"sqlite3"),"  module that we will be using an  ",(0,r.kt)("strong",{parentName:"li"},"in-memory-only"),"  database. This kind of database is perfect for experimenting as it does not require any server nor does it need to create new files.")))}d.isMDXComponent=!0}}]);