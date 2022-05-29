const express = require('express');
const Mongodb = require('mongodb');
const dbConnect = require('./mongodb');

const app = express();

app.use(express.json())

app.get('/',async (req, res)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data)
    res.send(data)
})

app.post('/', async (req, res)=>{
    console.log(req.body)
    let data = await dbConnect();
    let result = await data.insertOne(req.body)
    console.log(result) 
    res.send(req.body)
})

app.put('/:name', async(req,res)=>{
    let data = await dbConnect();
    let result = await data.updateOne(
        // {name: req.body.name},
        {name: req.params.name},
        {$set : req.body}
    )
    // console.log(result)
    // res.send({name: "raj"})
    // console.log(req.body)
})

app.delete('/:id', async(req, res)=>{
    let data = await dbConnect();
    let result = await data.deleteOne(
        {_id: new Mongodb.ObjectId(req.params.id)}
    )
    console.log(result)
})

app.listen(5000)