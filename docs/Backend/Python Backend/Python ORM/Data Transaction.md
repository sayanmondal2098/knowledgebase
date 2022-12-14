# Working with Transactions and the DBAPI

With the  [`Engine`](https://docs.sqlalchemy.org/en/20/core/connections.html#sqlalchemy.engine.Engine "sqlalchemy.engine.Engine")  object ready to go, we may now proceed to dive into the basic operation of an  [`Engine`](https://docs.sqlalchemy.org/en/20/core/connections.html#sqlalchemy.engine.Engine "sqlalchemy.engine.Engine")  and its primary interactive endpoints, the  [`Connection`](https://docs.sqlalchemy.org/en/20/core/connections.html#sqlalchemy.engine.Connection "sqlalchemy.engine.Connection")  and  [`Result`](https://docs.sqlalchemy.org/en/20/core/connections.html#sqlalchemy.engine.Result "sqlalchemy.engine.Result"). We will additionally introduce the ORM’s  [facade](https://docs.sqlalchemy.org/en/20/glossary.html#term-facade)  for these objects, known as the  [`Session`](https://docs.sqlalchemy.org/en/20/orm/session_api.html#sqlalchemy.orm.Session "sqlalchemy.orm.Session").

**Note to ORM readers**

When using the ORM, the  [`Engine`](https://docs.sqlalchemy.org/en/20/core/connections.html#sqlalchemy.engine.Engine "sqlalchemy.engine.Engine")  is managed by another object called the  [`Session`](https://docs.sqlalchemy.org/en/20/orm/session_api.html#sqlalchemy.orm.Session "sqlalchemy.orm.Session"). The  [`Session`](https://docs.sqlalchemy.org/en/20/orm/session_api.html#sqlalchemy.orm.Session "sqlalchemy.orm.Session")  in modern SQLAlchemy emphasizes a transactional and SQL execution pattern that is largely identical to that of the  [`Connection`](https://docs.sqlalchemy.org/en/20/core/connections.html#sqlalchemy.engine.Connection "sqlalchemy.engine.Connection")  discussed below, so while this subsection is Core-centric, all of the concepts here are essentially relevant to ORM use as well and is recommended for all ORM learners. The execution pattern used by the  [`Connection`](https://docs.sqlalchemy.org/en/20/core/connections.html#sqlalchemy.engine.Connection "sqlalchemy.engine.Connection")  will be contrasted with that of the  [`Session`](https://docs.sqlalchemy.org/en/20/orm/session_api.html#sqlalchemy.orm.Session "sqlalchemy.orm.Session")  at the end of this section.

As we have yet to introduce the SQLAlchemy Expression Language that is the primary feature of SQLAlchemy, we will make use of one simple construct within this package called the  [`text()`](https://docs.sqlalchemy.org/en/20/core/sqlelement.html#sqlalchemy.sql.expression.text "sqlalchemy.sql.expression.text")  construct, which allows us to write SQL statements as  **textual SQL**. Rest assured that textual SQL in day-to-day SQLAlchemy use is by far the exception rather than the rule for most tasks, even though it always remains fully available.

## Getting a Connection

The sole purpose of the  [`Engine`](https://docs.sqlalchemy.org/en/20/core/connections.html#sqlalchemy.engine.Engine "sqlalchemy.engine.Engine")  object from a user-facing perspective is to provide a unit of connectivity to the database called the  [`Connection`]. When working with the Core directly, the  [`Connection`] object is how all interaction with the database is done. As the  [`Connection`] represents an open resource against the database, we want to always limit the scope of our use of this object to a specific context, and the best way to do that is by using Python context manager form, also known as  [the with statement](https://docs.python.org/3/reference/compound_stmts.html#with). Below we illustrate “Hello World”, using a textual SQL statement. Textual SQL is emitted using a construct called  [`text()`] that will be discussed in more detail later:
```python
from sqlalchemy import text
with engine.connect() as conn:
	result = conn.execute(text("select 'hello world'"))
	print(result.all())
```
```bash
BEGIN  (implicit)
select  'hello world'
[...]  ()

[('hello world',)]

ROLLBACK
```
In the above example, the context manager provided for a database connection and also framed the operation inside of a transaction. The default behavior of the Python DBAPI includes that a transaction is always in progress; when the scope of the connection is  [released], a ROLLBACK is emitted to end the transaction. The transaction is  **not committed automatically**; when we want to commit data we normally need to call  [`Connection.commit()`](https://docs.sqlalchemy.org/en/20/core/connections.html#sqlalchemy.engine.Connection.commit "sqlalchemy.engine.Connection.commit")  as we’ll see in the next section.

>“autocommit” mode is available for special cases. The section  [Setting Transaction Isolation Levels including DBAPI Autocommit](https://docs.sqlalchemy.org/en/20/core/connections.html#dbapi-autocommit)  discusses this.

The result of our SELECT was also returned in an object called  [`Result`](https://docs.sqlalchemy.org/en/20/core/connections.html#sqlalchemy.engine.Result "sqlalchemy.engine.Result")  that will be discussed later, however for the moment we’ll add that it’s best to ensure this object is consumed within the “connect” block, and is not passed along outside of the scope of our connection.

## Committing Changes[](https://docs.sqlalchemy.org/en/20/tutorial/dbapi_transactions.html#committing-changes "Permalink to this heading")

We just learned that the DBAPI connection is non-autocommitting. What if we want to commit some data? We can alter our above example to create a table and insert some data, and the transaction is then committed using the  [`Connection.commit()`](https://docs.sqlalchemy.org/en/20/core/connections.html#sqlalchemy.engine.Connection.commit "sqlalchemy.engine.Connection.commit")  method, invoked  **inside**  the block where we acquired the  [`Connection`](https://docs.sqlalchemy.org/en/20/core/connections.html#sqlalchemy.engine.Connection "sqlalchemy.engine.Connection")  object:

# "commit as you go"
```
>>> with engine.connect() as conn:
...     conn.execute(text("CREATE TABLE some_table (x int, y int)"))
...     conn.execute(
...         text("INSERT INTO some_table (x, y) VALUES (:x, :y)"),
...         [{"x": 1, "y": 1}, {"x": 2, "y": 4}],
...     )
...     conn.commit()

BEGIN  (implicit)
CREATE  TABLE  some_table  (x  int,  y  int)
[...]  ()
<sqlalchemy.engine.cursor.CursorResult  object  at  0x...>
INSERT  INTO  some_table  (x,  y)  VALUES  (?,  ?)
[...]  [(1,  1),  (2,  4)]
<sqlalchemy.engine.cursor.CursorResult  object  at  0x...>
COMMIT
```
Above, we emitted two SQL statements that are generally transactional, a “CREATE TABLE” statement  [[1]](https://docs.sqlalchemy.org/en/20/tutorial/dbapi_transactions.html#id2)  and an “INSERT” statement that’s parameterized (the parameterization syntax above is discussed a few sections below in  [Sending Multiple Parameters](https://docs.sqlalchemy.org/en/20/tutorial/dbapi_transactions.html#tutorial-multiple-parameters)). As we want the work we’ve done to be committed within our block, we invoke the  [`Connection.commit()`](https://docs.sqlalchemy.org/en/20/core/connections.html#sqlalchemy.engine.Connection.commit "sqlalchemy.engine.Connection.commit")  method which commits the transaction. After we call this method inside the block, we can continue to run more SQL statements and if we choose we may call  [`Connection.commit()`](https://docs.sqlalchemy.org/en/20/core/connections.html#sqlalchemy.engine.Connection.commit "sqlalchemy.engine.Connection.commit")  again for subsequent statements. SQLAlchemy refers to this style as  **commit as you go**.

There is also another style of committing data, which is that we can declare our “connect” block to be a transaction block up front. For this mode of operation, we use the  [`Engine.begin()`](https://docs.sqlalchemy.org/en/20/core/connections.html#sqlalchemy.engine.Engine.begin "sqlalchemy.engine.Engine.begin")  method to acquire the connection, rather than the  [`Engine.connect()`](https://docs.sqlalchemy.org/en/20/core/connections.html#sqlalchemy.engine.Engine.connect "sqlalchemy.engine.Engine.connect")  method. This method will both manage the scope of the  [`Connection`](https://docs.sqlalchemy.org/en/20/core/connections.html#sqlalchemy.engine.Connection "sqlalchemy.engine.Connection")  and also enclose everything inside of a transaction with COMMIT at the end, assuming a successful block, or ROLLBACK in case of exception raise. This style may be referred towards as  **begin once**:

# "begin once"
```
>>> with engine.begin() as conn:
...     conn.execute(
...         text("INSERT INTO some_table (x, y) VALUES (:x, :y)"),
...         [{"x": 6, "y": 8}, {"x": 9, "y": 10}],
...     )

BEGIN  (implicit)
INSERT  INTO  some_table  (x,  y)  VALUES  (?,  ?)
[...]  [(6,  8),  (9,  10)]
<sqlalchemy.engine.cursor.CursorResult  object  at  0x...>
COMMIT
```
“Begin once” style is often preferred as it is more succinct and indicates the intention of the entire block up front. However, within this tutorial we will normally use “commit as you go” style as it is more flexible for demonstration purposes.

What’s “BEGIN (implicit)”?

You might have noticed the log line “BEGIN (implicit)” at the start of a transaction block. “implicit” here means that SQLAlchemy  **did not actually send any command**  to the database; it just considers this to be the start of the DBAPI’s implicit transaction. You can register  [event hooks](https://docs.sqlalchemy.org/en/20/core/events.html#core-sql-events)  to intercept this event, for example.

[[1](https://docs.sqlalchemy.org/en/20/tutorial/dbapi_transactions.html#id1)]

[DDL](https://docs.sqlalchemy.org/en/20/glossary.html#term-DDL)  refers to the subset of SQL that instructs the database to create, modify, or remove schema-level constructs such as tables. DDL such as “CREATE TABLE” is recommended to be within a transaction block that ends with COMMIT, as many databases uses transactional DDL such that the schema changes don’t take place until the transaction is committed. However, as we’ll see later, we usually let SQLAlchemy run DDL sequences for us as part of a higher level operation where we don’t generally need to worry about the COMMIT.

## Basics of Statement Execution[](https://docs.sqlalchemy.org/en/20/tutorial/dbapi_transactions.html#basics-of-statement-execution "Permalink to this heading")

We have seen a few examples that run SQL statements against a database, making use of a method called  [`Connection.execute()`](https://docs.sqlalchemy.org/en/20/core/connections.html#sqlalchemy.engine.Connection.execute "sqlalchemy.engine.Connection.execute"), in conjunction with an object called  [`text()`](https://docs.sqlalchemy.org/en/20/core/sqlelement.html#sqlalchemy.sql.expression.text "sqlalchemy.sql.expression.text"), and returning an object called  [`Result`](https://docs.sqlalchemy.org/en/20/core/connections.html#sqlalchemy.engine.Result "sqlalchemy.engine.Result"). In this section we’ll illustrate more closely the mechanics and interactions of these components.

Most of the content in this section applies equally well to modern ORM use when using the  [`Session.execute()`](https://docs.sqlalchemy.org/en/20/orm/session_api.html#sqlalchemy.orm.Session.execute "sqlalchemy.orm.Session.execute")  method, which works very similarly to that of  [`Connection.execute()`](https://docs.sqlalchemy.org/en/20/core/connections.html#sqlalchemy.engine.Connection.execute "sqlalchemy.engine.Connection.execute"), including that ORM result rows are delivered using the same  [`Result`](https://docs.sqlalchemy.org/en/20/core/connections.html#sqlalchemy.engine.Result "sqlalchemy.engine.Result")  interface used by Core.

### Fetching Rows[](https://docs.sqlalchemy.org/en/20/tutorial/dbapi_transactions.html#fetching-rows "Permalink to this heading")

We’ll first illustrate the  [`Result`](https://docs.sqlalchemy.org/en/20/core/connections.html#sqlalchemy.engine.Result "sqlalchemy.engine.Result")  object more closely by making use of the rows we’ve inserted previously, running a textual SELECT statement on the table we’ve created:
```
>>> with engine.connect() as conn:
...     result = conn.execute(text("SELECT x, y FROM some_table"))
...     for row in result:
...         print(f"x: {row.x} y: {row.y}")

BEGIN  (implicit)
SELECT  x,  y  FROM  some_table
[...]  ()

x: 1  y: 1
x: 2  y: 4
x: 6  y: 8
x: 9  y: 10

ROLLBACK
```
Above, the “SELECT” string we executed selected all rows from our table. The object returned is called  [`Result`](https://docs.sqlalchemy.org/en/20/core/connections.html#sqlalchemy.engine.Result "sqlalchemy.engine.Result")  and represents an iterable object of result rows.

[`Result`](https://docs.sqlalchemy.org/en/20/core/connections.html#sqlalchemy.engine.Result "sqlalchemy.engine.Result")  has lots of methods for fetching and transforming rows, such as the  [`Result.all()`](https://docs.sqlalchemy.org/en/20/core/connections.html#sqlalchemy.engine.Result.all "sqlalchemy.engine.Result.all")  method illustrated previously, which returns a list of all  [`Row`](https://docs.sqlalchemy.org/en/20/core/connections.html#sqlalchemy.engine.Row "sqlalchemy.engine.Row")  objects. It also implements the Python iterator interface so that we can iterate over the collection of  [`Row`](https://docs.sqlalchemy.org/en/20/core/connections.html#sqlalchemy.engine.Row "sqlalchemy.engine.Row")  objects directly.

The  [`Row`](https://docs.sqlalchemy.org/en/20/core/connections.html#sqlalchemy.engine.Row "sqlalchemy.engine.Row")  objects themselves are intended to act like Python  [named tuples](https://docs.python.org/3/library/collections.html#collections.namedtuple). Below we illustrate a variety of ways to access rows.

-   **Tuple Assignment**  - This is the most Python-idiomatic style, which is to assign variables to each row positionally as they are received:
    
    result = conn.execute(text("select x, y from some_table"))
    
    for x, y in result:
        ...
    
-   **Integer Index**  - Tuples are Python sequences, so regular integer access is available too:
 ```python
    result = conn.execute(text("select x, y from some_table"))
    
    for row in result:
        x = row[0]
 ```   
-   **Attribute Name**  - As these are Python named tuples, the tuples have dynamic attribute names matching the names of each column. These names are normally the names that the SQL statement assigns to the columns in each row. While they are usually fairly predictable and can also be controlled by labels, in less defined cases they may be subject to database-specific behaviors:
  ```python
    result = conn.execute(text("select x, y from some_table"))
    
    for row in result:
        y = row.y
    
        # illustrate use with Python f-strings
        print(f"Row: {row.x}  {y}")
  ```  
-   **Mapping Access**  - To receive rows as Python  **mapping**  objects, which is essentially a read-only version of Python’s interface to the common  `dict`  object, the  [`Result`](https://docs.sqlalchemy.org/en/20/core/connections.html#sqlalchemy.engine.Result "sqlalchemy.engine.Result")  may be  **transformed**  into a  [`MappingResult`](https://docs.sqlalchemy.org/en/20/core/connections.html#sqlalchemy.engine.MappingResult "sqlalchemy.engine.MappingResult")  object using the  [`Result.mappings()`](https://docs.sqlalchemy.org/en/20/core/connections.html#sqlalchemy.engine.Result.mappings "sqlalchemy.engine.Result.mappings")  modifier; this is a result object that yields dictionary-like  [`RowMapping`](https://docs.sqlalchemy.org/en/20/core/connections.html#sqlalchemy.engine.RowMapping "sqlalchemy.engine.RowMapping")  objects rather than  [`Row`](https://docs.sqlalchemy.org/en/20/core/connections.html#sqlalchemy.engine.Row "sqlalchemy.engine.Row")  objects:
    
    result = conn.execute(text("select x, y from some_table"))
    
    for dict_row in result.mappings():
        x = dict_row["x"]
        y = dict_row["y"]
    

### Sending Parameters[](https://docs.sqlalchemy.org/en/20/tutorial/dbapi_transactions.html#sending-parameters "Permalink to this heading")

SQL statements are usually accompanied by data that is to be passed with the statement itself, as we saw in the INSERT example previously. The  [`Connection.execute()`](https://docs.sqlalchemy.org/en/20/core/connections.html#sqlalchemy.engine.Connection.execute "sqlalchemy.engine.Connection.execute")  method therefore also accepts parameters, which are referred towards as  [bound parameters](https://docs.sqlalchemy.org/en/20/glossary.html#term-bound-parameters). A rudimentary example might be if we wanted to limit our SELECT statement only to rows that meet a certain criteria, such as rows where the “y” value were greater than a certain value that is passed in to a function.

In order to achieve this such that the SQL statement can remain fixed and that the driver can properly sanitize the value, we add a WHERE criteria to our statement that names a new parameter called “y”; the  [`text()`](https://docs.sqlalchemy.org/en/20/core/sqlelement.html#sqlalchemy.sql.expression.text "sqlalchemy.sql.expression.text")  construct accepts these using a colon format “`:y`”. The actual value for “`:y`” is then passed as the second argument to  [`Connection.execute()`](https://docs.sqlalchemy.org/en/20/core/connections.html#sqlalchemy.engine.Connection.execute "sqlalchemy.engine.Connection.execute")  in the form of a dictionary:
```
>>> with engine.connect() as conn:
...     result = conn.execute(text("SELECT x, y FROM some_table WHERE y > :y"), {"y": 2})
...     for row in result:
...         print(f"x: {row.x} y: {row.y}")

BEGIN  (implicit)
SELECT  x,  y  FROM  some_table  WHERE  y  >  ?
[...]  (2,)

x: 2  y: 4
x: 6  y: 8
x: 9  y: 10

ROLLBACK
```
In the logged SQL output, we can see that the bound parameter  `:y`  was converted into a question mark when it was sent to the SQLite database. This is because the SQLite database driver uses a format called “qmark parameter style”, which is one of six different formats allowed by the DBAPI specification. SQLAlchemy abstracts these formats into just one, which is the “named” format using a colon.

Always use bound parameters

As mentioned at the beginning of this section, textual SQL is not the usual way we work with SQLAlchemy. However, when using textual SQL, a Python literal value, even non-strings like integers or dates, should  **never be stringified into SQL string directly**; a parameter should  **always**  be used. This is most famously known as how to avoid SQL injection attacks when the data is untrusted. However it also allows the SQLAlchemy dialects and/or DBAPI to correctly handle the incoming input for the backend. Outside of plain textual SQL use cases, SQLAlchemy’s Core Expression API otherwise ensures that Python literal values are passed as bound parameters where appropriate.

### Sending Multiple Parameters[](https://docs.sqlalchemy.org/en/20/tutorial/dbapi_transactions.html#sending-multiple-parameters "Permalink to this heading")

In the example at  [Committing Changes](https://docs.sqlalchemy.org/en/20/tutorial/dbapi_transactions.html#tutorial-committing-data), we executed an INSERT statement where it appeared that we were able to INSERT multiple rows into the database at once. For statements  [DML](https://docs.sqlalchemy.org/en/20/glossary.html#term-DML)  statements such as “INSERT”, “UPDATE” and “DELETE”, we can send  **multiple parameter sets**  to the  [`Connection.execute()`](https://docs.sqlalchemy.org/en/20/core/connections.html#sqlalchemy.engine.Connection.execute "sqlalchemy.engine.Connection.execute")  method by passing a list of dictionaries instead of a single dictionary, which indicates that the single SQL statement should be invoked multiple times, once for each parameter set. This style of execution is known as  [executemany](https://docs.sqlalchemy.org/en/20/glossary.html#term-executemany):
```
>>> with engine.connect() as conn:
...     conn.execute(
...         text("INSERT INTO some_table (x, y) VALUES (:x, :y)"),
...         [{"x": 11, "y": 12}, {"x": 13, "y": 14}],
...     )
...     conn.commit()

BEGIN  (implicit)
INSERT  INTO  some_table  (x,  y)  VALUES  (?,  ?)
[...]  [(11,  12),  (13,  14)]
<sqlalchemy.engine.cursor.CursorResult  object  at  0x...>
COMMIT
```
The above operation is equivalent to running the given INSERT statement once for each parameter set, except that the operation will be optimized for better performance across many rows.

A key behavioral difference between “execute” and “executemany” is that the latter doesn’t support returning of result rows, even if the statement includes the RETURNING clause. The one exception to this is when using a Core  [`insert()`](https://docs.sqlalchemy.org/en/20/core/dml.html#sqlalchemy.sql.expression.insert "sqlalchemy.sql.expression.insert")  construct, introduced later in this tutorial at  [Inserting Rows with Core](https://docs.sqlalchemy.org/en/20/tutorial/data_insert.html#tutorial-core-insert), which also indicates RETURNING using the  [`Insert.returning()`](https://docs.sqlalchemy.org/en/20/core/dml.html#sqlalchemy.sql.expression.Insert.returning "sqlalchemy.sql.expression.Insert.returning")  method. In that case, SQLAlchemy makes use of special logic to reorganize the INSERT statement so that it can be invoked for many rows while still supporting RETURNING.

See also

[executemany](https://docs.sqlalchemy.org/en/20/glossary.html#term-executemany)  - in the  [Glossary](https://docs.sqlalchemy.org/en/20/glossary.html), describes the DBAPI-level  [cursor.executemany()](https://peps.python.org/pep-0249/#executemany)  method that’s used for most “executemany” executions.

[“Insert Many Values” Behavior for INSERT statements](https://docs.sqlalchemy.org/en/20/core/connections.html#engine-insertmanyvalues)  - in  [Working with Engines and Connections](https://docs.sqlalchemy.org/en/20/core/connections.html), describes the specialized logic used by  [`Insert.returning()`](https://docs.sqlalchemy.org/en/20/core/dml.html#sqlalchemy.sql.expression.Insert.returning "sqlalchemy.sql.expression.Insert.returning")  to deliver result sets with “executemany” executions.

## Executing with an ORM Session[](https://docs.sqlalchemy.org/en/20/tutorial/dbapi_transactions.html#executing-with-an-orm-session "Permalink to this heading")

As mentioned previously, most of the patterns and examples above apply to use with the ORM as well, so here we will introduce this usage so that as the tutorial proceeds, we will be able to illustrate each pattern in terms of Core and ORM use together.

The fundamental transactional / database interactive object when using the ORM is called the  [`Session`](https://docs.sqlalchemy.org/en/20/orm/session_api.html#sqlalchemy.orm.Session "sqlalchemy.orm.Session"). In modern SQLAlchemy, this object is used in a manner very similar to that of the  [`Connection`](https://docs.sqlalchemy.org/en/20/core/connections.html#sqlalchemy.engine.Connection "sqlalchemy.engine.Connection"), and in fact as the  [`Session`](https://docs.sqlalchemy.org/en/20/orm/session_api.html#sqlalchemy.orm.Session "sqlalchemy.orm.Session")  is used, it refers to a  [`Connection`](https://docs.sqlalchemy.org/en/20/core/connections.html#sqlalchemy.engine.Connection "sqlalchemy.engine.Connection")  internally which it uses to emit SQL.

When the  [`Session`](https://docs.sqlalchemy.org/en/20/orm/session_api.html#sqlalchemy.orm.Session "sqlalchemy.orm.Session")  is used with non-ORM constructs, it passes through the SQL statements we give it and does not generally do things much differently from how the  [`Connection`](https://docs.sqlalchemy.org/en/20/core/connections.html#sqlalchemy.engine.Connection "sqlalchemy.engine.Connection")  does directly, so we can illustrate it here in terms of the simple textual SQL operations we’ve already learned.

The  [`Session`](https://docs.sqlalchemy.org/en/20/orm/session_api.html#sqlalchemy.orm.Session "sqlalchemy.orm.Session")  has a few different creational patterns, but here we will illustrate the most basic one that tracks exactly with how the  [`Connection`](https://docs.sqlalchemy.org/en/20/core/connections.html#sqlalchemy.engine.Connection "sqlalchemy.engine.Connection")  is used which is to construct it within a context manager:
```
>>> from sqlalchemy.orm import Session

>>> stmt = text("SELECT x, y FROM some_table WHERE y > :y ORDER BY x, y")
>>> with Session(engine) as session:
...     result = session.execute(stmt, {"y": 6})
...     for row in result:
...         print(f"x: {row.x} y: {row.y}")

BEGIN  (implicit)
SELECT  x,  y  FROM  some_table  WHERE  y  >  ?  ORDER  BY  x,  y
[...]  (6,)

x: 6  y: 8
x: 9  y: 10
x: 11  y: 12
x: 13  y: 14

ROLLBACK
```
The example above can be compared to the example in the preceding section in  [Sending Parameters](https://docs.sqlalchemy.org/en/20/tutorial/dbapi_transactions.html#tutorial-sending-parameters)  - we directly replace the call to  `with  engine.connect()  as  conn`  with  `with  Session(engine)  as  session`, and then make use of the  [`Session.execute()`](https://docs.sqlalchemy.org/en/20/orm/session_api.html#sqlalchemy.orm.Session.execute "sqlalchemy.orm.Session.execute")  method just like we do with the  [`Connection.execute()`](https://docs.sqlalchemy.org/en/20/core/connections.html#sqlalchemy.engine.Connection.execute "sqlalchemy.engine.Connection.execute")  method.

Also, like the  [`Connection`](https://docs.sqlalchemy.org/en/20/core/connections.html#sqlalchemy.engine.Connection "sqlalchemy.engine.Connection"), the  [`Session`](https://docs.sqlalchemy.org/en/20/orm/session_api.html#sqlalchemy.orm.Session "sqlalchemy.orm.Session")  features “commit as you go” behavior using the  [`Session.commit()`](https://docs.sqlalchemy.org/en/20/orm/session_api.html#sqlalchemy.orm.Session.commit "sqlalchemy.orm.Session.commit")  method, illustrated below using a textual UPDATE statement to alter some of our data:
```
>>> with Session(engine) as session:
...     result = session.execute(
...         text("UPDATE some_table SET y=:y WHERE x=:x"),
...         [{"x": 9, "y": 11}, {"x": 13, "y": 15}],
...     )
...     session.commit()

BEGIN  (implicit)
UPDATE  some_table  SET  y=?  WHERE  x=?
[...]  [(11,  9),  (15,  13)]
COMMIT
```