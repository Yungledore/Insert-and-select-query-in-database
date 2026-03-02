var mysql = require("mysql2");
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'200511',
    database:'student'
})
connection.connect((err)=>{
    if(err) throw err;
    console.log("connected");
    // specify the table name and column name of your table
    connection.query("SELECT Student_FirstName, Student_LastName FROM students WHERE Student_FirstName = 'Teka'",function(err,result,fields){
        if (err) throw err;
        console.log(result)
    })
})