const mongoose = require('mongoose');

const URI = "mongodb://talhahassan:talhahassan@cluster0-shard-00-00.gweu2.mongodb.net:27017,cluster0-shard-00-01.gweu2.mongodb.net:27017,cluster0-shard-00-02.gweu2.mongodb.net:27017/A1?ssl=true&replicaSet=atlas-t8bqss-shard-0&authSource=admin&retryWrites=true&w=majority";
//expressapp
const connectDB = async() => {
    await mongoose.connect(URI, {
        useUnifiedTopology:true,
        useNewUrlParser:true
    });
    console.log('db connected..');
}

module.exports = connectDB;