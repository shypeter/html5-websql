/*
	This js is setting database name size and describe , also you can customize table query that is make your html clean better.
	Author : Peter
	Date : 2014/09/24
*/

var database = "stock";
var dbSize = 40 * 1024 * 1024;
var dbDescribe = "web sql for stock";

//create table
var createTableObj = new Object();
createTableObj['kline'] = "CREATE TABLE IF NOT EXISTS kline ( sysId INTEGER, stockId INTEGER, stockName CHAR(100), type CHAR(100), content TEXT, dataDate DATE DEFAULT (datetime('now','localtime')))";
createTableObj['userFavorites'] = "CREATE TABLE IF NOT EXISTS userFavorites ( id INTEGER, data CHAR(200), dataDate DATE DEFAULT (datetime('now','localtime')))";
createTableObj['keyValue'] = "CREATE TABLE IF NOT EXISTS keyValue ( key CHAR(200), value CHAR(200) )";

//alert table
var alterTableObj = new Object();
alterTableObj['keyValue'] = "ALTER TABLE keyValue ADD COLUMN id INTEGER";

//delete table
var deleteTableObj = new Object();
deleteTableObj['keyValue'] = "DELETE FROM keyValue WHERE key LIKE ?";

//get data
var selectTableObj = new Object();
selectTableObj['userFavorites'] = "SELECT * FROM userFavorites WHERE id = ?";
selectTableObj['keyValue'] = "SELECT * FROM keyValue WHERE key LIKE ?";

//insert data
var insertTableObj = new Object();
insertTableObj['keyValue'] = "INSERT INTO keyValue (key, value) VALUES (?,?)";

//update data
var updateTableObj = new Object();
updateTableObj['keyValue'] = "UPDATE keyValue SET value=? WHERE key LIKE ?";