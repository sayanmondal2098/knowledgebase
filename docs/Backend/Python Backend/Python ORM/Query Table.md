# Query Data into Table
 
 ## Steps to insert data in a table  
- Get all data
- Get data in order
- Get data by filtering
- Count of results

```python
print("============== Query Where ==================")

studentData = session.query(Student).filter(Student.name == 'Test User 1')

for  student  in  studentData:
	print(student.name)
```

```python
print("============== Query Filter First ==================")
studentData = session.query(Student).filter(Student.name == 'Test User 1').first()

print(studentData.name)
```
```python
print("============== Query Filter Or ==================")
studentData = session.query(Student).filter(or_(Student.name=="Test User 1",Student.name=="Test User 2"))

for  student  in  studentData:
	print(student.name , student.age ,student.grade)
```

```python
print("============== Query Filter count ==================")
studentData = session.query(Student).filter(or_(Student.name=="Test User 1",Student.name=="Test User 2")).count()

print(" Total number is " , studentData)
```