const express = require('express');
const app = express();
const PORT = 4999
//middleware
app.use(express.json())
app.use(express.static('public'))
app.use(require('cors')())


function mw (req, res, next){
    console.log('Hit The Middleware')
    next()
}

//Temp database
const db = []

//scheduler
function cron(ms, fn){
async function cb(){
    clearTimeout(timeout)
    await fn()
    timeout = setTimeout(cb, ms)//ms millisecond //fn funct
}
let timeout = setTimeout(cb, ms)
    return () => { }
}
function consoleDB(){
    console.log('DB= ', db)
}
cron(1000, consoleDB)


//GET POST PATCH PUT DELETE //get tryna get the the info from the server and post tryna send info to the sserver
//
app.get('/',(req, res) =>{

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
app.delete('/delete/:id', mw,(req, res) =>{
    const {id, name} = req.params
   console.log('what pain would you like me to remove ') 
   res.sendStatus(200)
})


 
//
app.put('/api', (req, res) =>{
    const { information } = req.body
    console.log(information)
    res.sendStatus(200)
})



app.listen(PORT, () => console.log(`Server has started on port : ${PORT}`))
