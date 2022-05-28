const express = require('express')
const { listen } = require('express/lib/application')
const app = express()

app.get('', (req, res)=>{
    res.send('this is home page')
    res.send('name of user', req.query.name)
})
app.get('/about', (req, res)=>{
    // http://localhost:4200/about/?name=raj
    // name of user raj
    res.send('this is about page')
    console.log('name of user', req.query.name)
})

app.listen(4200)