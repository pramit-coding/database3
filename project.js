var mysql = require("mysql")
var connection = mysql.createConnection({
    host: " sql12.freesqldatabase.com",
    name: "sql12814302",
    user: "sql12814302",
    password: "deZzTkS6YR"

});

var sql = "INSERT INTO Sports('ID','Name','Best_Player','Fan_Base')VALUES ?";

var VALUES = [

    [1,'Cricket','Kholi','40000000'],
    [2, 'Soccer','Ronaldho','2000000'],
    [3, "Voleyball",'Giba','210000'],
    [4,"Hockey","Horton","43902"]

];

connection.query(sql,[VALUES],function(err,result){
    if (err) throw err;
    console.log("Records inserted into Sports");
});

