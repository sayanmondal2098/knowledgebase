# Introduction



## What is Object Relational Mapping (ORM) 

Object Relational Mapping (ORM) is a technique used in creating a "bridge" between object-oriented programs and, in most cases, relational databases.

ORM stands for "Object to Relational Mapping" where

-   The  **Object**  part is the one you use with your programming language ( python in this case )
    
-   The  **Relational**  part is a Relational Database Manager System ( A database that is ) there are other types of databases but the most popular is relational ( you know tables, columns, pk fk etc eg Oracle MySQL, MS-SQL )
    
-   And finally the  **Mapping**  part is where you do a bridge between your objects and your tables.

## How does ORM work?

ORMs create a model of the object-oriented program with a high-level of abstraction. In other words, it makes a level of logic without the underlying details of the code. Mapping describes the relationship between an object and the data without knowing how the data is structured. The model can then be used to connect the application with the SQL code needed to manage data activities. This “plumbing” type of code does not have to be rewritten, saving the developer a tremendous amount of time.

## Types of ORMs

ORMs employ two different strategies: active record pattern and data-mapper pattern.

### Active record pattern

This strategy maps data within the structure of objects in the code. You manage data using classes and structures within your programming code. This method has problems since the database structure is tightly connected to the code, making it difficult to  [remove the database and migrate it](https://www.altexsoft.com/blog/data-migration/)  to a different application.

### Data-mapper patterns

The data-mapper pattern attempts to decouple the business logic in the objects from the database. This separation can make it easier to change databases and use the same programming logic.

## ORM vs. SQL

Developers can use raw SQL code to write a direct interface between the application and the database. Most relational databases support SQL to build data interfaces and applications. It’s stable, and since SQL has been used since the 1970s, it’s well documented and supported. Programmers maintain a lot of control over their data interface with SQL. It requires a lot of work, but it is more flexible and detailed than an ORM abstraction.

### Native Querying with SQL

Using raw SQL also has its drawbacks. For instance, the developer is responsible for the safety and security of the database code. SQL injection is a problem where user input can affect the data state causing issues with the application and data integrity. ORMs sanitizes the code, making it easier to avoid these problems.

### SQL Query Builders

Query builders add a layer of abstraction over the raw SQL without masking all of the underlying details. The builders formalize querying patterns and add methods to or functions that add escape items for easier application integration. They add a templating layer to help developers understand the database structure within the same coding application. Template builders still require developers to understand the database structure, requiring them to know SQL.

## What is an ORM Tool?

An ORM tool is software designed to help OOP developers interact with relational databases. So instead of creating your own ORM software from scratch, you can make use of these tools.

## ORM

[Object-Relational Mapping](https://en.wikipedia.org/wiki/Object-relational_mapping)  (ORM) is a technique that lets you query and manipulate data from a database using an object-oriented paradigm. When talking about ORM, most people are referring to a  _library_  that implements the Object-Relational Mapping technique, hence the phrase "an ORM".

An ORM library is a completely ordinary library written in your language of choice that encapsulates the code needed to manipulate the data, so you don't use SQL anymore; you interact directly with an object in the same language you're using.

For example, here is a completely imaginary case with a pseudo language:

You have a book class, you want to retrieve all the books of which the author is "Linus". Manually, you would do something like that:

```java
book_list = new List();
sql = "SELECT book FROM library WHERE author = 'Linus'";
data = query(sql); // I over simplify ...
while (row = data.next())
{
     book = new Book();
     book.setAuthor(row.get('author');
     book_list.add(book);
}
```

With an ORM library, it would look like this:

```java
book_list = BookTable.query(author="Linus");
```

The mechanical part is taken care of automatically via the ORM library.

**Using ORM saves a lot of time because:**

-   [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself): You write your data model in only one place, and it's easier to update, maintain, and reuse the code.
-   A lot of stuff is done automatically, from database handling to  [I18N](https://en.wikipedia.org/wiki/Internationalization_and_localization).
-   It forces you to write  [MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)  code, which, in the end, makes your code a little cleaner.
-   You don't have to write poorly-formed SQL (most Web programmers really suck at it, because SQL is treated like a "sub" language, when in reality it's a very powerful and complex one).
-   Sanitizing; using prepared statements or transactions are as easy as calling a method.

**Using an ORM library is more flexible because:**

-   It fits in your natural way of coding (it's your language!).
-   It abstracts the DB system, so you can change it whenever you want.
-   The model is weakly bound to the rest of the application, so you can change it or use it anywhere else.
-   It lets you use OOP goodness like data inheritance without a headache.

**But ORM can be a pain:**

-   You have to learn it, and ORM libraries are not lightweight tools;
-   You have to set it up. Same problem.
-   Performance is OK for usual queries, but a SQL master will always do better with his own SQL for big projects.
-   It abstracts the DB. While it's OK if you know what's happening behind the scene, it's a trap for new programmers that can write very greedy statements, like a heavy hit in a  `for`  loop.


## Advantages of Using ORM Tools

Here are some of the advantages of using an ORM tool:

-   It speeds up development time for teams.
-   Decreases the cost of development.
-   Handles the logic required to interact with databases.
-   Improves security. ORM tools are built to eliminate the possibility of SQL injection attacks.
-   You write less code when using ORM tools than with SQL.

## Disadvantages of Using ORM Tools

-   Learning how to use ORM tools can be time consuming.
-   They are likely not going to perform better when very complex queries are involved.
-   ORMs are generally slower than using SQL.



### Popular ORM Tools for Java

#### 1. Hibernate

[Hibernate](https://hibernate.org/orm/)  enables developers to write data persistent classes following OOP concepts like inheritance, polymorphism, association, composition. Hibernate is highly performant and is also scalable.

#### 2. Apache OpenJPA

[Apache OpenJPA](https://openjpa.apache.org/)  is also a Java persistence tool. It can be used as a stand-alone  **POJO** (plain old Java object) persistence layer.

#### 3. EclipseLink

[EclipseLink](https://www.eclipse.org/eclipselink/)  is an open source Java persistence solution for relational, XML, and database web services.

#### 4. jOOQ

[jOOQ](https://www.jooq.org/)  generates Java code from data stored in a database. You can also use this tool to build type safe SQL queries.

#### 5. Oracle TopLink

You can use  [Oracle TopLink](https://docs.oracle.com/cd/E17904_01/web.1111/b32441/undtl.htm#JITDG91126)  to build high-performance applications that store persistent data. The data can be transformed into either relational data or XML elements.

### Popular ORM Tools for Python

#### 1. Django

[Django](https://docs.djangoproject.com/en/4.1/topics/db/queries/)  is a great tool for building web applications rapidly.

#### 2. web2py

[web2py](http://www.web2py.com/init/default/index)  is an open source full-stack Python framework for building fast, scalable, secure, and data-driven web applications.

#### 3. SQLObject

[SQLObject](http://www.sqlobject.org/)  is an object relational manager that provides an object interface to your database.

#### 4. SQLAlchemy

[SQLAlchemy](https://www.sqlalchemy.org/)  provides persistence patterns designed for efficient and high-performing database access.

### Popular ORM Tools for PHP

#### 1. Laravel

[Laravel](https://laravel.com/docs/9.x/eloquent)  comes with an object relational manager called Eloquent which makes interaction with databases easier.

#### 2. CakePHP

[CakePHP](https://book.cakephp.org/4/en/orm.html)  provides two object types: repositories which give you access to a collection of data and entities which represents individual records of data.

#### 3. Qcodo

[Qcodo](https://github.com/qcodo/qcodo)  provides different commands that can be run in the terminal to interact with databases.

#### 4. RedBeanPHP

[RedBeanPHP](https://redbeanphp.com/index.php)  is a zero config object relational mapper.

### Popular ORM Tools for .NET

#### 1. Entity Framework

[Entity Framework](https://learn.microsoft.com/en-us/ef/)  is a multi-database object-database mapper. It supports SQL, SQLite, MySQL, PostgreSQL, and Azure Cosmos DB.

#### 2. NHibernate

[NHibernate](https://nhibernate.info/)  is an open source object relational mapper with tons of plugins and tools to make development easier and faster.

#### 3. Dapper

[Dapper](https://www.learndapper.com/)  is a micro-ORM. It is mainly used to map queries to objects. This tool doesn't do most of the things an ORM tool would do like SQL generation, caching results, lazy loading, and so on.

#### 4. Base One Foundation Component Library (BFC)

[BFC](http://www.boic.com/b1mspecsheet.htm)  is a framework for creating networked database applications with Visual Studio and DBMS software from Microsoft, Oracle, IBM, Sybase, and MySQL.

You can see more ORM tools [here](https://en.wikipedia.org/wiki/List_of_object%E2%80%93relational_mapping_software).