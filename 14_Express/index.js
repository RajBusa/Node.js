const express = require('express')
const { listen } = require('express/lib/application')
const app = express()

app.get('', (req, res)=>{
    res.send('this is home page')
})
app.get('/about', (req, res)=>{
    res.send('this is about page')
})

app.listen(4200)