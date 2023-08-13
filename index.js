import express from "express"
import bodyParser from "body-parser"
const app = express()

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3001

app.get("/",(req,res)=>{
    res.render("index.ejs",{todos})
})

app.post("/submit",(req,res)=>{
   let newTodo = {
        task: req.body["newTodo"],
        creationDate: new Date(),
        isCompleted: false
    }
    todos.push(newTodo)
    res.redirect("/")
})

app.listen(port, ()=>{
 console.log('listening on port '+port)
})



let todos = [
    {task: "Study Excel functions",
        creationDate: "2023-08-11",
        isCompleted: false},
        {task: "Practice password hashing",
        creationDate: "2023-08-12",
        isCompleted: false},
        {task: "Implement SQl login management system ",
        creationDate: "2023-08-11",
        isCompleted: false},
        {task: "Walk the dog",
        creationDate: "2023-08-11",
        isCompleted: false}

]
