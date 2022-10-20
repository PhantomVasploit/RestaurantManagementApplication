const mongoose = require('mongoose')

const { Schema } = mongoose

const orderSchema = new Schema({
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

const Order = mongoose.model('Order', orderSchema)
module.exports = {Order, orderSchema}