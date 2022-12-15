# Query Data into Table
 
 ## Steps to update a record in a table  
- Get record
- change value
- Commit change

```python
studentData = session.query(Student).filter(Student.name == 'Test User 1').first()
studentData.name = "The Batman"
session.commit()
```