const path = require('path')
const express = require('express')
const app = express();

const publicPath = path.join(__dirname, 'public');
// console.log(publicPath);

app.get('',(_,res)=>{
    res.sendFile(`${publicPath}/index.html`)
})
app.get('/aboutMe',(_,res)=>{
    res.sendFile(`${publicPath}/about.html`)
})
app.get('*',(_,res)=>{
    res.sendFile(`${publicPath}/pageNotFound.html`)
})

app.listen(5000);