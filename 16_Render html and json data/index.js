const express = require('express')
const app  = express()
app.get('',(req, res)=>{
    res.send(`<h1>This is Raj Busa</h1><a href="/about">about</a>`)
})
app.get('/about',(req, res)=>{
    res.send(`
        <input type="text" paceholder="Name" value="${req.query.name}">
        <button type="submit">Submit</button>
    `)
})
app.get('/json',(req, res)=>{
    res.send([
        {
            name: "Raj",
            email: "NA"
        },
        {
            name: "Raj",
            email: "NA"
        }, 
    ])
})

app.listen(5000)