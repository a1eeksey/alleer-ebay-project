const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
    },
    regularPrice: {
      type: String,
    },
    salePrice: {
      type: String,
    },
    stockAmount: {
      type: String,
    },
    category: {
        type: String,
    },
    dimensions: {
        type: String,
    },
    SKU: {
        type: String,
    },
})

module.exports = mongoose.model('StockItem', itemSchema)
