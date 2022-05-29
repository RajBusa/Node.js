module.exports = reqFilter = (req, res, next)=>{
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