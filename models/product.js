const { model, Schema } = require('mongoose');

const productSchema = new Schema({
  name: { type: String, required: true, unique:true },
  description: { type: String, required: true},
  img: { type: String, required: true},
  price: { type: Number, required: true},
  qty: { type: Number, require: true}
}, {
  timestamps: true
})

module.exports = model('Product', productSchema)
