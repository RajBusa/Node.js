const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    catagory: String
});
mongoose.connect("mongodb://localhost:27017/ecomm")

const insertInDb = async ()=>{    
    const ProductsModel = mongoose.model('products', ProductSchema)
    let data = new ProductsModel({
        name: "s_20", 
        price: 1200,
        brand: "sam",
        catagory: "mobile"
    });
    let result = await data.save();
    console.log(result)
}
// insertInDb()

const updateInDb = async ()=>{
    const Product = mongoose.model('products', ProductSchema)
    let data = await Product.updateOne(
        {name: "s_20"},
        {$set: {price: 3000}}
    )
    console.log(data)
}
// updateInDb()

const deleteInDb = async ()=>{
    const Product = mongoose.model('products', ProductSchema)
    let data = await Product.deleteOne({name: "s_20"});
    console.log(data)
}
// deleteInDb()

const findInDb = async()=>{
    const Product = mongoose.model('products', ProductSchema)
    let data = await Product.find();
    // let data = await Product.find({name: "s 20"});
    console.log(data) 
}
findInDb()