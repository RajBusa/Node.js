const dbConnect = require('./mongodb')

const deleteData = async ()=>{
    let data = await dbConnect();
    let result = await data.deleteMany(
        {name: 'Motorola'}
    )
    console.log(result)
}
deleteData()