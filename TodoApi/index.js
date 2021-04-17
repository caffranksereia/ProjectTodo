const express = require('express')
const Lowdb = require('lowdb')
const cors = require('cors')
const {v4} = require('uuid')

const router = express.Router()
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('Todo.json')
var itsTime = Date.now()
const db = Lowdb(adapter)

const port = 3000

const app = express()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

db
 .defaults({
    Todo:[]
    })
.write()



app.get('/',(req,res)=>{
    res.send('hello world!')
})

app.get('/All',(req,res)=>{
    const data = db.get('Todo').value()

    res.json(data)
    
})
app.get('/get/:id',(req,res)=>{


    const userTodo = db.get('Todo').find({id:req.params.id}).value()
    console.log(userTodo)
    res.json(userTodo)
})
app.post('/AddTodo',(req,res)=>{
    const data = { 
        id:v4(),
        Titulo:req.body.Titulo,
        Todo:req.body.Todo,
        createData:itsTime,
        donneTodo:false
    }
    db.get('Todo').push(data).write()
    console.log(data)
    res.send("Adicionado")
})

app.put('/EditTodo/:id',(req,res)=>{
    const id = req.params.id 
    const todo = req.body

    const edditTodo = db.get('Todo').find({id}).assign(todo).write()
    res.json(edditTodo)
})

app.delete('/DelTodo/:id',(req,res)=>{
    const id = req.params.id

    const delTodo = db.get('Todo').remove({id}).write()

    res.json(delTodo)
})

app.listen(port,()=>{
    console.log(`localhost${port}`)
})