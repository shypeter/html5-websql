/*
	This js is setting database name size and describe , also you can customize table query that is make your html clean better.
	Author : Peter
	Date : 2014/09/24
*/

var database = "myDB";
var dbSize = 40 * 1024 * 1024;
var dbDescribe = "This is my webDB";

//create table
var createTableObj = new Object();
createTableObj['keyValue'] = "CREATE TABLE IF NOT EXISTS keyValue ( key CHAR(200), value CHAR(200) )";
createTableObj['toDoList'] = "CREATE TABLE IF NOT EXISTS toDoList ( id INTEGER PRIMARY KEY AUTOINCREMENT, key CHAR(200), value CHAR(200) )";

//alert table
var alterTableObj = new Object();
alterTableObj['keyValue'] = "ALTER TABLE keyValue ADD COLUMN id INTEGER";

//delete table
var deleteTableObj = new Object();
deleteTableObj['keyValue'] = "DELETE FROM keyValue WHERE key LIKE ?";
deleteTableObj['toDoList'] = "DELETE FROM toDoList WHERE id LIKE ?";

//get data
var selectTableObj = new Object();
selectTableObj['keyValue'] = "SELECT * FROM keyValue WHERE key LIKE ?";
selectTableObj['toDoList'] = "SELECT * FROM toDoList WHERE key LIKE ?";

//insert data
var insertTableObj = new Object();
insertTableObj['keyValue'] = "INSERT INTO keyValue (key, value) VALUES (?,?)";
insertTableObj['toDoList'] = "INSERT INTO toDoList (key, value) VALUES (?,?)";

//update data
var updateTableObj = new Object();
updateTableObj['keyValue'] = "UPDATE keyValue SET value=? WHERE key LIKE ?";
