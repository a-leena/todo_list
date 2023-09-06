import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

var today = new Date();
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var date = days[today.getDay()]+", "+today.getDate()+" "+months[today.getMonth()] + " " + today.getFullYear();

app.get("/",(req,res)=>{
    
    res.render("index.ejs",{
        date_today:date,
        year:today.getFullYear()
    });
})

app.post("/submit",(req,res)=> {
    console.log(req.body);
})
app.get("/tasks",(req,res)=>{
    res.render("tasks.ejs",{
        year:today.getFullYear()
    });
})


app.listen(port,()=>{
    console.log(`Server is up and running on port ${port}`);
})