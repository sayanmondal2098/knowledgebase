"use strict";(self.webpackChunkknowledgebase=self.webpackChunkknowledgebase||[]).push([[309],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),h=n,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||r;return a?o.createElement(m,i(i({ref:t},d),{},{components:a})):o.createElement(m,i({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}c.displayName="MDXCreateElement"},169:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=a(7462),n=(a(7294),a(3905));const r={},i="Introduction",l={unversionedId:"Backend/Python Backend/Python ORM/Introduction",id:"Backend/Python Backend/Python ORM/Introduction",title:"Introduction",description:"What is Object Relational Mapping (ORM)",source:"@site/docs/Backend/Python Backend/Python ORM/Introduction.md",sourceDirName:"Backend/Python Backend/Python ORM",slug:"/Backend/Python Backend/Python ORM/Introduction",permalink:"/knowledgebase/docs/Backend/Python Backend/Python ORM/Introduction",draft:!1,editUrl:"https://sayanmondal2098.github.io/knowledgebase/docs/docs/Backend/Python Backend/Python ORM/Introduction.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Insert Data into Table",permalink:"/knowledgebase/docs/Backend/Python Backend/Python ORM/Insert Data"},next:{title:"Query Data into Table",permalink:"/knowledgebase/docs/Backend/Python Backend/Python ORM/Query Table"}},s={},p=[{value:"What is Object Relational Mapping (ORM)",id:"what-is-object-relational-mapping-orm",level:2},{value:"How does ORM work?",id:"how-does-orm-work",level:2},{value:"Types of ORMs",id:"types-of-orms",level:2},{value:"Active record pattern",id:"active-record-pattern",level:3},{value:"Data-mapper patterns",id:"data-mapper-patterns",level:3},{value:"ORM vs. SQL",id:"orm-vs-sql",level:2},{value:"Native Querying with SQL",id:"native-querying-with-sql",level:3},{value:"SQL Query Builders",id:"sql-query-builders",level:3},{value:"What is an ORM Tool?",id:"what-is-an-orm-tool",level:2},{value:"ORM",id:"orm",level:2},{value:"Advantages of Using ORM Tools",id:"advantages-of-using-orm-tools",level:2},{value:"Disadvantages of Using ORM Tools",id:"disadvantages-of-using-orm-tools",level:2},{value:"Popular ORM Tools for Java",id:"popular-orm-tools-for-java",level:3},{value:"1. Hibernate",id:"1-hibernate",level:4},{value:"2. Apache OpenJPA",id:"2-apache-openjpa",level:4},{value:"3. EclipseLink",id:"3-eclipselink",level:4},{value:"4. jOOQ",id:"4-jooq",level:4},{value:"5. Oracle TopLink",id:"5-oracle-toplink",level:4},{value:"Popular ORM Tools for Python",id:"popular-orm-tools-for-python",level:3},{value:"1. Django",id:"1-django",level:4},{value:"2. web2py",id:"2-web2py",level:4},{value:"3. SQLObject",id:"3-sqlobject",level:4},{value:"4. SQLAlchemy",id:"4-sqlalchemy",level:4},{value:"Popular ORM Tools for PHP",id:"popular-orm-tools-for-php",level:3},{value:"1. Laravel",id:"1-laravel",level:4},{value:"2. CakePHP",id:"2-cakephp",level:4},{value:"3. Qcodo",id:"3-qcodo",level:4},{value:"4. RedBeanPHP",id:"4-redbeanphp",level:4},{value:"Popular ORM Tools for .NET",id:"popular-orm-tools-for-net",level:3},{value:"1. Entity Framework",id:"1-entity-framework",level:4},{value:"2. NHibernate",id:"2-nhibernate",level:4},{value:"3. Dapper",id:"3-dapper",level:4},{value:"4. Base One Foundation Component Library (BFC)",id:"4-base-one-foundation-component-library-bfc",level:4}],d={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"introduction"},"Introduction"),(0,n.kt)("h2",{id:"what-is-object-relational-mapping-orm"},"What is Object Relational Mapping (ORM)"),(0,n.kt)("p",null,'Object Relational Mapping (ORM) is a technique used in creating a "bridge" between object-oriented programs and, in most cases, relational databases.'),(0,n.kt)("p",null,'ORM stands for "Object to Relational Mapping" where'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The  ",(0,n.kt)("strong",{parentName:"li"},"Object"),"  part is the one you use with your programming language ( python in this case )"),(0,n.kt)("li",{parentName:"ul"},"The  ",(0,n.kt)("strong",{parentName:"li"},"Relational"),"  part is a Relational Database Manager System ( A database that is ) there are other types of databases but the most popular is relational ( you know tables, columns, pk fk etc eg Oracle MySQL, MS-SQL )"),(0,n.kt)("li",{parentName:"ul"},"And finally the  ",(0,n.kt)("strong",{parentName:"li"},"Mapping"),"  part is where you do a bridge between your objects and your tables.")),(0,n.kt)("h2",{id:"how-does-orm-work"},"How does ORM work?"),(0,n.kt)("p",null,"ORMs create a model of the object-oriented program with a high-level of abstraction. In other words, it makes a level of logic without the underlying details of the code. Mapping describes the relationship between an object and the data without knowing how the data is structured. The model can then be used to connect the application with the SQL code needed to manage data activities. This \u201cplumbing\u201d type of code does not have to be rewritten, saving the developer a tremendous amount of time."),(0,n.kt)("h2",{id:"types-of-orms"},"Types of ORMs"),(0,n.kt)("p",null,"ORMs employ two different strategies: active record pattern and data-mapper pattern."),(0,n.kt)("h3",{id:"active-record-pattern"},"Active record pattern"),(0,n.kt)("p",null,"This strategy maps data within the structure of objects in the code. You manage data using classes and structures within your programming code. This method has problems since the database structure is tightly connected to the code, making it difficult to  ",(0,n.kt)("a",{parentName:"p",href:"https://www.altexsoft.com/blog/data-migration/"},"remove the database and migrate it"),"  to a different application."),(0,n.kt)("h3",{id:"data-mapper-patterns"},"Data-mapper patterns"),(0,n.kt)("p",null,"The data-mapper pattern attempts to decouple the business logic in the objects from the database. This separation can make it easier to change databases and use the same programming logic."),(0,n.kt)("h2",{id:"orm-vs-sql"},"ORM vs. SQL"),(0,n.kt)("p",null,"Developers can use raw SQL code to write a direct interface between the application and the database. Most relational databases support SQL to build data interfaces and applications. It\u2019s stable, and since SQL has been used since the 1970s, it\u2019s well documented and supported. Programmers maintain a lot of control over their data interface with SQL. It requires a lot of work, but it is more flexible and detailed than an ORM abstraction."),(0,n.kt)("h3",{id:"native-querying-with-sql"},"Native Querying with SQL"),(0,n.kt)("p",null,"Using raw SQL also has its drawbacks. For instance, the developer is responsible for the safety and security of the database code. SQL injection is a problem where user input can affect the data state causing issues with the application and data integrity. ORMs sanitizes the code, making it easier to avoid these problems."),(0,n.kt)("h3",{id:"sql-query-builders"},"SQL Query Builders"),(0,n.kt)("p",null,"Query builders add a layer of abstraction over the raw SQL without masking all of the underlying details. The builders formalize querying patterns and add methods to or functions that add escape items for easier application integration. They add a templating layer to help developers understand the database structure within the same coding application. Template builders still require developers to understand the database structure, requiring them to know SQL."),(0,n.kt)("h2",{id:"what-is-an-orm-tool"},"What is an ORM Tool?"),(0,n.kt)("p",null,"An ORM tool is software designed to help OOP developers interact with relational databases. So instead of creating your own ORM software from scratch, you can make use of these tools."),(0,n.kt)("h2",{id:"orm"},"ORM"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Object-relational_mapping"},"Object-Relational Mapping"),"  (ORM) is a technique that lets you query and manipulate data from a database using an object-oriented paradigm. When talking about ORM, most people are referring to a  ",(0,n.kt)("em",{parentName:"p"},"library"),'  that implements the Object-Relational Mapping technique, hence the phrase "an ORM".'),(0,n.kt)("p",null,"An ORM library is a completely ordinary library written in your language of choice that encapsulates the code needed to manipulate the data, so you don't use SQL anymore; you interact directly with an object in the same language you're using."),(0,n.kt)("p",null,"For example, here is a completely imaginary case with a pseudo language:"),(0,n.kt)("p",null,'You have a book class, you want to retrieve all the books of which the author is "Linus". Manually, you would do something like that:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"book_list = new List();\nsql = \"SELECT book FROM library WHERE author = 'Linus'\";\ndata = query(sql); // I over simplify ...\nwhile (row = data.next())\n{\n     book = new Book();\n     book.setAuthor(row.get('author');\n     book_list.add(book);\n}\n")),(0,n.kt)("p",null,"With an ORM library, it would look like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'book_list = BookTable.query(author="Linus");\n')),(0,n.kt)("p",null,"The mechanical part is taken care of automatically via the ORM library."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Using ORM saves a lot of time because:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Don%27t_repeat_yourself"},"DRY"),": You write your data model in only one place, and it's easier to update, maintain, and reuse the code."),(0,n.kt)("li",{parentName:"ul"},"A lot of stuff is done automatically, from database handling to  ",(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Internationalization_and_localization"},"I18N"),"."),(0,n.kt)("li",{parentName:"ul"},"It forces you to write  ",(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller"},"MVC"),"  code, which, in the end, makes your code a little cleaner."),(0,n.kt)("li",{parentName:"ul"},"You don't have to write poorly-formed SQL (most Web programmers really suck at it, because SQL is treated like a \"sub\" language, when in reality it's a very powerful and complex one)."),(0,n.kt)("li",{parentName:"ul"},"Sanitizing; using prepared statements or transactions are as easy as calling a method.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Using an ORM library is more flexible because:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"It fits in your natural way of coding (it's your language!)."),(0,n.kt)("li",{parentName:"ul"},"It abstracts the DB system, so you can change it whenever you want."),(0,n.kt)("li",{parentName:"ul"},"The model is weakly bound to the rest of the application, so you can change it or use it anywhere else."),(0,n.kt)("li",{parentName:"ul"},"It lets you use OOP goodness like data inheritance without a headache.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"But ORM can be a pain:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You have to learn it, and ORM libraries are not lightweight tools;"),(0,n.kt)("li",{parentName:"ul"},"You have to set it up. Same problem."),(0,n.kt)("li",{parentName:"ul"},"Performance is OK for usual queries, but a SQL master will always do better with his own SQL for big projects."),(0,n.kt)("li",{parentName:"ul"},"It abstracts the DB. While it's OK if you know what's happening behind the scene, it's a trap for new programmers that can write very greedy statements, like a heavy hit in a  ",(0,n.kt)("inlineCode",{parentName:"li"},"for"),"  loop.")),(0,n.kt)("h2",{id:"advantages-of-using-orm-tools"},"Advantages of Using ORM Tools"),(0,n.kt)("p",null,"Here are some of the advantages of using an ORM tool:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"It speeds up development time for teams."),(0,n.kt)("li",{parentName:"ul"},"Decreases the cost of development."),(0,n.kt)("li",{parentName:"ul"},"Handles the logic required to interact with databases."),(0,n.kt)("li",{parentName:"ul"},"Improves security. ORM tools are built to eliminate the possibility of SQL injection attacks."),(0,n.kt)("li",{parentName:"ul"},"You write less code when using ORM tools than with SQL.")),(0,n.kt)("h2",{id:"disadvantages-of-using-orm-tools"},"Disadvantages of Using ORM Tools"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Learning how to use ORM tools can be time consuming."),(0,n.kt)("li",{parentName:"ul"},"They are likely not going to perform better when very complex queries are involved."),(0,n.kt)("li",{parentName:"ul"},"ORMs are generally slower than using SQL.")),(0,n.kt)("h3",{id:"popular-orm-tools-for-java"},"Popular ORM Tools for Java"),(0,n.kt)("h4",{id:"1-hibernate"},"1. Hibernate"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://hibernate.org/orm/"},"Hibernate"),"  enables developers to write data persistent classes following OOP concepts like inheritance, polymorphism, association, composition. Hibernate is highly performant and is also scalable."),(0,n.kt)("h4",{id:"2-apache-openjpa"},"2. Apache OpenJPA"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://openjpa.apache.org/"},"Apache OpenJPA"),"  is also a Java persistence tool. It can be used as a stand-alone  ",(0,n.kt)("strong",{parentName:"p"},"POJO")," (plain old Java object) persistence layer."),(0,n.kt)("h4",{id:"3-eclipselink"},"3. EclipseLink"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.eclipse.org/eclipselink/"},"EclipseLink"),"  is an open source Java persistence solution for relational, XML, and database web services."),(0,n.kt)("h4",{id:"4-jooq"},"4. jOOQ"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.jooq.org/"},"jOOQ"),"  generates Java code from data stored in a database. You can also use this tool to build type safe SQL queries."),(0,n.kt)("h4",{id:"5-oracle-toplink"},"5. Oracle TopLink"),(0,n.kt)("p",null,"You can use  ",(0,n.kt)("a",{parentName:"p",href:"https://docs.oracle.com/cd/E17904_01/web.1111/b32441/undtl.htm#JITDG91126"},"Oracle TopLink"),"  to build high-performance applications that store persistent data. The data can be transformed into either relational data or XML elements."),(0,n.kt)("h3",{id:"popular-orm-tools-for-python"},"Popular ORM Tools for Python"),(0,n.kt)("h4",{id:"1-django"},"1. Django"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.djangoproject.com/en/4.1/topics/db/queries/"},"Django"),"  is a great tool for building web applications rapidly."),(0,n.kt)("h4",{id:"2-web2py"},"2. web2py"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://www.web2py.com/init/default/index"},"web2py"),"  is an open source full-stack Python framework for building fast, scalable, secure, and data-driven web applications."),(0,n.kt)("h4",{id:"3-sqlobject"},"3. SQLObject"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://www.sqlobject.org/"},"SQLObject"),"  is an object relational manager that provides an object interface to your database."),(0,n.kt)("h4",{id:"4-sqlalchemy"},"4. SQLAlchemy"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.sqlalchemy.org/"},"SQLAlchemy"),"  provides persistence patterns designed for efficient and high-performing database access."),(0,n.kt)("h3",{id:"popular-orm-tools-for-php"},"Popular ORM Tools for PHP"),(0,n.kt)("h4",{id:"1-laravel"},"1. Laravel"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://laravel.com/docs/9.x/eloquent"},"Laravel"),"  comes with an object relational manager called Eloquent which makes interaction with databases easier."),(0,n.kt)("h4",{id:"2-cakephp"},"2. CakePHP"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://book.cakephp.org/4/en/orm.html"},"CakePHP"),"  provides two object types: repositories which give you access to a collection of data and entities which represents individual records of data."),(0,n.kt)("h4",{id:"3-qcodo"},"3. Qcodo"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/qcodo/qcodo"},"Qcodo"),"  provides different commands that can be run in the terminal to interact with databases."),(0,n.kt)("h4",{id:"4-redbeanphp"},"4. RedBeanPHP"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://redbeanphp.com/index.php"},"RedBeanPHP"),"  is a zero config object relational mapper."),(0,n.kt)("h3",{id:"popular-orm-tools-for-net"},"Popular ORM Tools for .NET"),(0,n.kt)("h4",{id:"1-entity-framework"},"1. Entity Framework"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/ef/"},"Entity Framework"),"  is a multi-database object-database mapper. It supports SQL, SQLite, MySQL, PostgreSQL, and Azure Cosmos DB."),(0,n.kt)("h4",{id:"2-nhibernate"},"2. NHibernate"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://nhibernate.info/"},"NHibernate"),"  is an open source object relational mapper with tons of plugins and tools to make development easier and faster."),(0,n.kt)("h4",{id:"3-dapper"},"3. Dapper"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.learndapper.com/"},"Dapper"),"  is a micro-ORM. It is mainly used to map queries to objects. This tool doesn't do most of the things an ORM tool would do like SQL generation, caching results, lazy loading, and so on."),(0,n.kt)("h4",{id:"4-base-one-foundation-component-library-bfc"},"4. Base One Foundation Component Library (BFC)"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://www.boic.com/b1mspecsheet.htm"},"BFC"),"  is a framework for creating networked database applications with Visual Studio and DBMS software from Microsoft, Oracle, IBM, Sybase, and MySQL."),(0,n.kt)("p",null,"You can see more ORM tools ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_object%E2%80%93relational_mapping_software"},"here"),"."))}u.isMDXComponent=!0}}]);