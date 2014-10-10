/*
	This js is websql functions, if you want to set sql query , edit this code webSQLParameter.js.
	Author : Peter
	Date : 2014/09/24
*/

//==============system function area================
var html5 = {};
html5.webdb = {};
html5.webdb.db = null;

html5.webdb.open = function(database) {
	html5.webdb.db = openDatabase(database, '1.0', dbDescribe, dbSize);
}

html5.webdb.queries = function(sql, dataSet, renderFuncs) {
	var db = html5.webdb.db;
	db.transaction(function(tx) {
		tx.executeSql(sql, dataSet, renderFuncs, html5.webdb.onSuccess, html5.webdb.onError);
	});
}

html5.webdb.onError = function(tx, error) {
	console.log(error);
}
html5.webdb.onSuccess = function(tx, result) {
	console.log(result);
}

//==============Operation function area================
function dbInit(table) {
	if(createTableObj[table] != undefined){
		html5.webdb.open(database);
		html5.webdb.queries(createTableObj[table], [], null);
	}
	else{
		throw "GzFox websql : "+table+" undefined";
	}
}

function dbAlterTable(table){
	html5.webdb.queries(alterTableObj[table], [], null);
}

// This is original function for developer to use
function dbQuery(sql, dataSet, renderFuncs){
	if(renderFuncs === undefined){
		renderFuncs = null;
	}
	if(dataSet === undefined){
		dataSet = [];
	}
	if(sql === undefined){
		throw "GzFox websql : sql sentence undefined";
	}
	html5.webdb.queries(sql, dataSet, renderFuncs);
}

//select data with customize function
function dbGetCustTable(table, dataSet, renderFuncs){
	if(selectTableObj[table] === undefined){
		throw "GzFox websql : "+table+" undefined";
	}
	if(dataSet === undefined){
		throw "GzFox websql : "+dataSet+" undefined";
	}
	if(renderFuncs === undefined){
		throw "GzFox websql : "+renderFuncs+" undefined";
	}
	html5.webdb.queries(selectTableObj[table], dataSet, renderFuncs);
}

//insert data with customize function
function dbSetCustTable(table, dataSet, renderFuncs){
	if(renderFuncs === undefined){
		renderFuncs = null;
	}
	if(dataSet === undefined){
		throw "GzFox websql : "+dataSet+" undefined";
	}
	if(insertTableObj[table] === undefined){
		throw "GzFox websql : "+table+" undefined";
	}
	html5.webdb.queries(insertTableObj[table], dataSet, renderFuncs);
}

//update data with customize function
function dbUpdateCustTable(table, dataSet, renderFuncs){
	if(renderFuncs === undefined){
		renderFuncs = null;
	}
	if(dataSet === undefined){
		throw "GzFox websql : "+dataSet+" undefined";
	}
	if(insertTableObj[table] === undefined){
		throw "GzFox websql : "+table+" undefined";
	}
	html5.webdb.queries(updateTableObj[table], dataSet, renderFuncs);
}

//update data with customize function
function dbDelCustTable(table, dataSet, renderFuncs){
	if(renderFuncs === undefined){
		renderFuncs = null;
	}
	if(dataSet === undefined){
		throw "GzFox websql : "+dataSet+" undefined";
	}
	if(insertTableObj[table] === undefined){
		throw "GzFox websql : "+table+" undefined";
	}
	html5.webdb.queries(deleteTableObj[table], dataSet, renderFuncs);
}

//drop table with customize function
function dbDropCustTable(table, renderFuncs){
	if(renderFuncs === undefined){
		renderFuncs = null;
	}
	if(table === undefined){
		throw "GzFox websql : "+table+" undefined";
	}
	sql = "DROP TABLE IF EXISTS " + table;
	html5.webdb.queries(sql, [], renderFuncs);
}