import express from "express";
import bodyParser from "body-parser";
import { LocalStorage } from "node-localstorage";
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
const localStorage = new LocalStorage("./scratch");
const port = 3001;

app.get("/", (req, res) => {
  const storedTodos = localStorage.getItem("todos");
  const todos = storedTodos ? JSON.parse(storedTodos) : [];
  res.render("index.ejs", { todos });
});

app.post("/submit", (req, res) => {
  let newTodo = {
    task: req.body["newTodo"],
    creationDate: new Date(),
    isCompleted: false,
  };
  let storedTodos = localStorage.getItem("todos");
  let todos = storedTodos ? JSON.parse(storedTodos) : [];

  todos.push(newTodo);

  localStorage.setItem("todos", JSON.stringify(todos));
  res.redirect("/");
});

app.listen(port, () => {
  console.log("listening on port " + port);
});
