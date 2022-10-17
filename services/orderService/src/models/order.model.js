const mongoose = require('mongoose')

const Schema = mongoose.Schema

const orderSchema = new Schema({
    itemName: {
        type: String,
        required: [true, 'itemName field is required']
    },
    orderDateAndTime: {
        type: Date,
        default: Date.now,
        required: [true, 'Order data and time is required']
    },
    quantityOrdered: {
        type: Number,
        default: 1,
        required: [true, 'Quantity ordered is required']
    },
    itemPrice: {
        type: Float,
        required: [true, 'Price of item is required']
    },
    customer: {
        type: String,
        required: [true, 'Customer email field is required']
    }
})

const Order = mongoose.model('Order', orderSchema)
module.exports = Order