var mysql = require('mysql2')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '200511',
    database: 'faris'
})
connection.connect((err) =>{
    if (err) throw err
    console.log('connected');
    var sql = "INSERT INTO project2(Age,FirstName,LastName,City,Hobby) VALUES ?";
    var values = [
        [14,'Faris','Nukman','Johor Baru','Fishing'],
        [15,'Joel','Goh','Kuala lumpur','Batminton'],
    ];
    connection.query(sql,[values],function(err,result){
        if(err) throw err;
        console.log('data inserted')
    })
})