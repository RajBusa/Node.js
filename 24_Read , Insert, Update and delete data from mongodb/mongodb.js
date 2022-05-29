const {MongoClient} = require('mongodb');
const { kill } = require('process');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function dbConnect(){
    let result = await client.connect();
    let db = result.db('ecomm');
    return db.collection('products');
}

module.exports = dbConnect;