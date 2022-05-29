const express = require('express');
const app = express();

const reqFilter = (req, res, next)=>{
    if(!req.query.age){
        res.send("Please Enter Age");
    }
    else if(req.query.age < 18){
        res.send("You can not accesss this page");
    }
    else{
        next();
    }
}

app.use(reqFilter)

app.get('/',(req, res)=>{
    res.send("<h3>Home Page</h3>")
})
app.get('/users',(req, res)=>{
    res.send("<h3>Users Page</h3>")
})

app.listen(5000)
