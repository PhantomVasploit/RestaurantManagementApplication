const mongoose = require('mongoose')

const { Schema } = mongoose
const stockSchema = new Schema({
    itemName: {
        type: String,
        required: [true, 'Stock name field is required']
    },
    itemPrice: {
        type: Number,
        required: [true, 'Stock price field is required']
    },
    quantityPurchased: {
        type: Number,
        required: [true, 'Quantity purchased field is required']
    }
})

const Stock = mongoose.model('Stock', stockSchema)
module.exports = Stock