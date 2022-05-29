const dbConnect = require('./mongodb')

const insert = async () =>{
    const db = await dbConnect()
    const result = await db.insertOne({
        name: 'Motorola one fusion plus',
        brand: 'Moto',
        price: 1260,
        category: 'Mobile'
    });
    console.log(result)
    if(result.acknowledged){
        console.log("DAta inserted")
    }
}

insert();