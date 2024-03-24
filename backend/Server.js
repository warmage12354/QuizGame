import { db } from './storeData';

const express = require('express') 
const app = express(); 
const cors = require('cors');
const { db } = require('./storeData');


app.use(express.static('frontend'))
app.use(express.json())
app.use(cors());

app.post('/',(req,res)=> { 

    const length = req.body;
   const score = req.body; 

   db.add

    

    if(!length || !score ) { 

        return res.status(400).send({status:'failed'})

    }

    res.status(200).send({status:'recieved'})
})

app.get('/', (req,res) => { 

    const dynamic = req.params 
    const key = req.query;
    res.status(200).json('hello')

})


app.listen(8080, () => { 


    console.log("server is running on port 8080")

}
    
    
    
    )
