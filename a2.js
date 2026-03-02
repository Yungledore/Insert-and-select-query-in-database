var mysql = require("mysql2");
var connection = mysql.createConnection({
    host: "localhost",
    user:'root',
    password:'200511',
    database:'student'
})
connection.connect((err)=>{
    if (err) throw err;
    console.log("connected");
    connection.query("SELECT * FROM students",function(err,result,fields){if (err) throw err;
        console.log(result)
    })
})
