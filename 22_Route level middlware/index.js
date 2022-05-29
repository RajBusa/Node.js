const express = require('express');
const reqFilter = require('./imddleware.js')
const app = express();
const route = express.Router();

route.use(reqFilter)

// middel ware applie
app.get('/', reqFilter ,(req, res)=>{
    res.send("<h3>Home Page</h3>")
})
app.get('/users', reqFilter, (req, res)=>{
    res.send("<h3>Users Page</h3>")
})
// middel ware applie
route.get('/about',(req, res)=>{
    res.send("<h3>About Page</h3>")
})
// middel ware applie
route.get('/contect',(req, res)=>{
    res.send("<h3>Contect Page</h3>")
})
app.use('/', route)
app.listen(5000)
