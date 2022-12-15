# Insert Data into Table
 
 ## Steps to insert data in a table  
- Create instance of table class
- Add data to session
- Commit changes to Database

 To Add Single record in table - 
```python
student1 = Student(
name = "Test User",
age = "20",
grade = "Third Year"
)

session.add(student1)
session.commit()
```

To add multiple records in table -
```python

student2 = Student(
name = "Test User 1",
age = "22",
grade = "Fifth Year"
)

student3 = Student(
name = "Test User 2",
age = "18",
grade = "First Year"
)

session.add_all([student2, student3])
#session.commit()
```


Other way to add record 
```python
student4 = Student()
student4.name = 'Admin'
student4.age = '16'
student4.grade = 'Class 10'  
session.add(student4)
session.commit()
```