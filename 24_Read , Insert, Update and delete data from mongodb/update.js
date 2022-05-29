const dbConnect = require('./mongodb')


const update = async ()=>{
    // console.log("Update Pge")
    let data = await dbConnect();
    let result = await data.updateMany(
        {name: 'Motorola one fusion plus'},
        {$set:{name: 'Motorola'}}
    )
    console.log(result);
}

update();