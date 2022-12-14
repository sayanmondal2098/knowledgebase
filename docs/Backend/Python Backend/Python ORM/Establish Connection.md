# Establishing Connectivity - the Engine[](https://docs.sqlalchemy.org/en/20/tutorial/engine.html#establishing-connectivity-the-engine "Permalink to this heading")

The start of any SQLAlchemy application is an object called the  [`Engine`](https://docs.sqlalchemy.org/en/20/core/connections.html#sqlalchemy.engine.Engine "sqlalchemy.engine.Engine"). This object acts as a central source of connections to a particular database, providing both a factory as well as a holding space called a  [connection pool](https://docs.sqlalchemy.org/en/20/core/pooling.html)  for these database connections. The engine is typically a global object created just once for a particular database server, and is configured using a URL string which will describe how it should connect to the database host or backend.

For this tutorial we will use an in-memory-only SQLite database. This is an easy way to test things without needing to have an actual pre-existing database set up. The  [`Engine`](https://docs.sqlalchemy.org/en/20/core/connections.html#sqlalchemy.engine.Engine "sqlalchemy.engine.Engine")  is created by using the  [`create_engine()`](https://docs.sqlalchemy.org/en/20/core/engines.html#sqlalchemy.create_engine "sqlalchemy.create_engine")  function:

```python
from sqlalchemy import create_engine
engine = create_engine("sqlite+pysqlite:///:memory:", echo=True)
```
The main argument to  [`create_engine`](https://docs.sqlalchemy.org/en/20/core/engines.html#sqlalchemy.create_engine "sqlalchemy.create_engine")  is a string URL, above passed as the string  `"sqlite+pysqlite:///:memory:"`. This string indicates to the  `Engine` three important facts:

1.  What kind of database are we communicating with? This is the  `sqlite`  portion above, which links in SQLAlchemy to an object known as the  [dialect](https://docs.sqlalchemy.org/en/20/glossary.html#term-dialect).
    
2.  What  [DBAPI](https://docs.sqlalchemy.org/en/20/glossary.html#term-DBAPI)  are we using? The Python  [DBAPI](https://docs.sqlalchemy.org/en/20/glossary.html#term-DBAPI)  is a third party driver that SQLAlchemy uses to interact with a particular database. In this case, we’re using the name  `pysqlite`, which in modern Python use is the  [sqlite3](https://docs.python.org/library/sqlite3.html)  standard library interface for SQLite. If omitted, SQLAlchemy will use a default  [DBAPI](https://docs.sqlalchemy.org/en/20/glossary.html#term-DBAPI)  for the particular database selected.
    
3.  How do we locate the database? In this case, our URL includes the phrase  `/:memory:`, which is an indicator to the  `sqlite3`  module that we will be using an  **in-memory-only**  database. This kind of database is perfect for experimenting as it does not require any server nor does it need to create new files.
