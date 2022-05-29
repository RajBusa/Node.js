const dbConnect = require('./mongodb')

// dbConnect().then((res)=>{
//     res.find({price: 1200}).toArray().then((data)=>{
//         console.log(data);
//     })
// })

// OR

const main = async () =>{
    let data = await dbConnect();
    data = await data.find().toArray()    ;
    console.log(data);
}

main();