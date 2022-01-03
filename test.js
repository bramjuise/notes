const mysql = require('mysql2')
const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.USER,
    database: process.env.DB
})

var december_data, january_data, february_data;

conn.query(
    'SELECT * FROM `winter` WHERE `month` = "january"',
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    }
  );