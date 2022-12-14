# Create Table
 
 ## Steps to create a table in postgresql 
- Create Engine
- Create session
- Create table
- Migrate 


```python
from  sqlalchemy  import  create_engine, Integer, String, Column
from  sqlalchemy.orm  import  sessionmaker
from  sqlalchemy.ext.declarative  import  declarative_base

engine = create_engine("postgresql://username:password@host:port/db_name",echo=False)
Session = sessionmaker(bind=engine)
session = Session()
Base = declarative_base()

class  Student(Base):

	__tablename__ = 'student'  
	id = Column(Integer, primary_key = True)
	name=Column(String(50))
	age= Column(Integer)
	grade= Column(String(50))  

Base.metadata.create_all(engine)
```






