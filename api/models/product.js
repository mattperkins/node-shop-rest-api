const mongoose = require('mongoose')

//  create mongoose schema
const productSchema = mongoose.Schema({
  // data types
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  price: Number
})

module.exports = mongoose.model('Product', productSchema)