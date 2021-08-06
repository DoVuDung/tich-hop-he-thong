// const mongoose = require('mongoose')

// //model
// (async function connect() {
//     try {
//         await mongoose.connect('mongodb+srv://tich-hop:admin@cluster0.9vllm.mongodb.net/test?authSource=admin&replicaSet=atlas-4wt7w2-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true', {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             useCreateIndex: true,
//             useFindAndModify: false,
//             useCreateIndex: true
//         })
//         console.log('$$$$$$$ Connect successfully!!!!')
//     } catch (error) {
//         console.log('@@@@@@ Connect failed!!!!')

//     }
// })();

// module.exports = { connect }

const { MongoClient } = require('mongodb');
const { connection } = require('mongoose');
const uri = "mongodb+srv://tich-hop:admin@cluster0.9vllm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
    console.log(connection);
});