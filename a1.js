var mysql = require('mysql2')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '200511',
    database: 'student'
})
connection.connect((err) =>{
    if (err) throw err
    console.log('connected');
    var sql = "INSERT INTO students(Student_ID,Student_FirstName,Student_LastName,Student_City,Student_Grade) VALUES ?";
    var values = [
        [101,'Teenu','Prashant','Madurai','5'],
        [103,'Chintu','Prakash','Chennai','6'],
        [107,'Caral','Smith','Texas','2'],
        [109,'Riya','Gutpa','Pune','9'],
        [102,'Teka','Prachant','Bangalore','8']
    ];
    connection.query(sql,[values],function(err,result){
        if(err) throw err;
        console.log('Multiple data inserted in DB')
    })
})