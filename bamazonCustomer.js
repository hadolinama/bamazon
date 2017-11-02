//requiring my sql
var mysql = require('mysql');
var inquirer = require('inquirer');


// creating a connection to mysql server
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: 3306,
  password:'',
  database: 'bamazon_db'
});

connection.connect(function (err){
  if(err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  // createProduct();
});
