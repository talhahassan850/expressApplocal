const mongoose = require('mongoose');

const URI = "mongodb+srv://talhahassan:talhahassan@cluster0.zzvak.mongodb.net/s2?retryWrites=true&w=majority";
//testing
const connectDB = async() => {
    await mongoose.connect(URI, {
        useUnifiedTopology:true,
        useNewUrlParser:true
    });
    console.log('db connected..');
}

module.exports = connectDB;