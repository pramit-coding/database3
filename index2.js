var mysql = require("mysql")
var connection = mysql.createConnection({
    host: " sql12.freesqldatabase.com",
    name: "sql12814302",
    user: "sql12814302",
    password: "deZzTkS6YR"

});

var sql = "SELECT * FROM Students";

connection.query(sql,[VALUES],function(err,result){
    if (err) throw err;
    console.log("Records inserted into Students");
});

