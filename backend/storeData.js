// set up variables
const sqlite3 = require('sqlite3').verbose(); 
let sql;

// connect database
export const db = new sqlite3.Database('./database.db',sqlite3.OPEN_READWRITE,(err)=> { 

    if(err)  return console.error(err.message);
}) 


 // create table       

const createTable = () =>  { 
    sql = 'CREATE TABLE Quiz(totalNumberCorrect INTEGER,totalNumber INTEGER) ' 
    db.run(sql)
    

}
 
const getAverage = () => { 

sql= 'SELECT AVG(totalNumberCorrect/totalNumber) AS Average FROM Quiz  '


}

//Drop Table 

const dropTable = () => { 
    db.run("DROP TABLE Quiz") 
}



//insert data into table  

const insertData = (correct,numberOfQuestions) => { 

    sql = 'Insert INTO Quiz(totalNumberCorrect,totalNumber) VALUES (?,?)' 
    db.run(sql,[],(err)=> { 
        if(err) return console.error(err.message)
    })


}

createTable()