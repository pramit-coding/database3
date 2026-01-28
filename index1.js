var mysql = require("mysql")
var connection = mysql.createConnection({
    host: " sql12.freesqldatabase.com",
    name: "sql12814302",
    user: "sql12814302",
    password: "deZzTkS6YR"

});

var sql = "INSERT INTO Students('ID','Name','LastName','Student_Grade')VALUES ?";

var VALUES = [

    [1,'bob','JERRY','B'],
    [2, 'tom','PAT','A'],
    [3, "cane",'QUOKA','B'],
    [4,"lane","MOKKA","A"]

];

connection.query(sql,[VALUES],function(err,result){
    if (err) throw err;
    console.log("Records inserted into Students");
});

