const mongoose = require("mongoose");
//in order to create schema

const productSchema = 
  mongoose.Schema({
      code:Number,
      size:String,
      price:Number,
      stuff:String
}); 
const ProductModel = mongoose.model("Product",productSchema);//model name 
//then, schema name
module.exports = ProductModel; 