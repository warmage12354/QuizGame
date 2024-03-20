const express = require('express') 
const app = express(); 



app.use(express.static('frontend'))
app.use(express.json())


app.post('/',(req,res)=> { 

    const parcel = req.body;
   
    if(!parcel) { 

        return res.status(400).send({status:'failed'})

    }

    res.status(200).send({status:'recieved'})
})

app.get('/', (req,res) => { 

    const dynamic = req.params 
    const key = req.query;
    console.log(dynamic,key)
    res.status(200).json('hello')

})


app.listen(8080, () => { 


    console.log("server is running on port 8080")

}
    
    
    
    )
