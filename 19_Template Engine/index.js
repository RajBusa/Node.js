const path = require('path')
const express = require('express')
const app = express();

const publicPath = path.join(__dirname, 'public');
// console.log(publicPath);

app.set('view engine', 'ejs')

app.get('',(_,res)=>{
    res.sendFile(`${publicPath}/index.html`)
})
app.get('/aboutMe',(_,res)=>{
    res.sendFile(`${publicPath}/about.html`)
})
app.get('/profile',(_, res)=>{
    const user={
        name: 'Raj',
        email: 'raj@gmail.com'
    }
    res.render('profile',{user})
})

app.get('*',(_,res)=>{
    res.sendFile(`${publicPath}/pageNotFound.html`)
})

app.listen(5000);