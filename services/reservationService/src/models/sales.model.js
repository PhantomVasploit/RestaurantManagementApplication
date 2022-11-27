const mongoose = require('mongoose')

const { Schema } = mongoose
const salesSchema = new Schema({
    itemName: {
        type: String,
        required: [true, 'itemName field is required']
    },
    quantityOrdered: {
        type: Number,
        default: 1,
        required: [true, 'Quantity ordered is required']
    },
    itemPrice: {
        type: Number,
        required: [true, 'Price of item is required']
    }
})

const Sale = mongoose.model('Sale', salesSchema)
module.exports = Sale