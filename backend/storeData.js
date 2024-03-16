// set up variables
const sqlite3 = require('sqlite3').verbose(); 
let sql;

// connect database
const db = new sqlite3.Database('./database.db',sqlite3.OPEN_READWRITE,(err)=> { 

    if(err)  return console.error(err.message);
}) 


 // create table       
sql = 'Create TABLE Quiz(totalNumberCorrect int,totalNumberWrong int ,Average int ) ' 
db.run(sql)

//Drop Table
db.run("DROP TABLE users") 


//insert data into table  

sql = 'Insert INTO Quiz(totalNumberCorrect,totalNumberWrong,Average) VALUES (?,?,?)' 
db.run(sql,[],(err)=> { 
    if(err) return console.error(err.message)
})