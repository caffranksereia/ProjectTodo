const express = require('express')
const Lowdb = require('lowdb')
const cors = require('cors')
const app = express()

const FileSync = require('lowdb/adapters/FileSync')
const adapters = new FileSync('Todo.json')
const db = Lowdb(adapters)

const port = 3000

db.defaults({Todo:[]})
.write()



app.use(cors())

app.get('/',(req,res)=>{
    res.send('hello world!')
})

app.listen(port,()=>{
    console.log(`localhost${port}`)
})