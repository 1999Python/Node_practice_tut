const express = require('express');
const app = express();
const PORT = 4000

//Temp database


//middleware
app.use(express.json())
const db = []
//GET POST PATCH PUT DELETE //get tryna get the the info from the server and post tryna send info to the sserver
//
app.get('/', (req, res) =>{

console.log('raadi barbie')

res.status(200).json({"message": 'Im responding to whatever info you sent me' })
})// can use json or send 

//
app.post('/api/info', (req, res) =>{

    const { information } = req.body
    console.log('THE POSTED MESSAGE WAS: ', information)
    
    db.push(information)
    console.log('DB:', db)
    
    res.status(201).send({"yourMessage": information})
    
    })

//
app.delete('/delete/:id', (req, res) =>{
   console.log('what pain would you like me to remove ') 
   res.sendStatus(200)
})


 
//
app.put('/api', (req, res) =>{

})



app.listen(PORT, () => console.log(`Server has started on port : ${PORT}`))
