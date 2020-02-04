var express = require('express');
var router = express.Router();

const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'school31',
    database: 'example1',
    multipleStatements: true
})

connection.connect(err => {
    if(err) { return err; }
    else console.log("mysql database connected!");
})

connection.query('DROP DATABASE IF EXISTS employees;CREATE DATABASE IF NOT EXISTS employees;'
, function( err , result , fields) {
  if(err) throw err ;
  console.log( "DATABASE CREATED" );
})


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('users respond with a resource');
});

connection.query('USE employees'
, function( err, result, fields) {
  if (err) throw err ;
  console.log("USING employees.");
});

router.get('/adduser', (req, sen) => {
  connection.query('CREATE TABLE employees ( first_name  VARCHAR(14), last_name VARCHAR(16) , PRIMARY KEY (emp_no) ); '
  , function( err, result , fields) {
    if(err) throw err;
    console.log("table employees created");
  } )
})

module.exports = router;
