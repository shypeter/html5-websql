html5-websql
===
It's a simple javascript library.

How to use
===

1.Initialize your database, first step is setting database info in 'webSQLParameter.js', example:
```
var database = "myDB";
var dbSize = 40 * 1024 * 1024; //40MB
var dbDescribe = "This is my sb";
```
Then setting 'create table statement' in 'createTableObj' object.
```
createTableObj['toDoList'] = "CREATE TABLE IF NOT EXISTS....";
```
Go to websqlDemoEasy.html, and add two script files.
```
<script src="./webSQLParameter.js"></script>
<script src="./webSQL.js"></script>
```
and
```
dbInit("keyValue");
```
Now DB is Ready to go!

2.Insert data to DB.
Specify table name to 'insertTableObj' object and sql statment in 'webSQLParameter.js'.
```
insertTableObj['keyValue'] = "INSERT INTO keyValue (key, value) VALUES (?,?)";
```
Then call 'dbSetCustTable()' in 'webSQLParameter.js'
```
dbSetCustTable("keyValue", ['updateFlag', '1']);
```

3.Select data from DB.
Specify table name to 'selectTableObj' object and sql statment in 'webSQLParameter.js'.
```
selectTableObj['toDoList'] = "SELECT * FROM toDoList WHERE key LIKE ?";
```
Then CustTable() in 'websqlDemoEasy.html'. you should setting 'table name','parament','call back function' , finally you get data from DB. 
```
dbGetCustTable("keyValue", ['updateFlag'], function(tx, result){
	if(result.rows.length != 0){
		console.log(result.rows.item(0).key);
		console.log(result.rows.item(0).value);
	}
});
```

There are some simple use case. 'websqlDemoEasy.html' doesn't have UI to show data, Please read 'toDoList.html' to get more detial.
