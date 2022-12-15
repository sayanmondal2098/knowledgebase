# Delete Data from Table
 
 ## Steps to Delete a record in a table  
- Get record
- Delete Record
- Commit change


```python
studentData = session.query(Student).filter(Student.name == 'Test User 1').first()
session.delete(studentData)
session.commit()
```