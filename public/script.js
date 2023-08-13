console.log("from script.js")

let todos = document.querySelectorAll(".todo")
todos.forEach((todo)=>{
    todo.addEventListener("click",(e)=>{
        e.target.classList.toggle("checked")
    })
})