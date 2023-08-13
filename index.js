import express from "express"
import bodyParser from "body-parser"
const app = express()
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }));
// app.set('views', './views');
// app.set('view engine', 'ejs');
const port = 3001

app.get("/",(req,res)=>{
    res.render("index.ejs")
})


app.listen(port, ()=>{
 console.log('listening on port '+port)
})
