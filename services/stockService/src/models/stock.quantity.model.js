const mongoose = require('mongoose')

const { Schema } = mongoose
const stockQuantityAndDayModel = new Schema({
    itemName: {
        type: String,
        required: [true, 'Stock name is required']
    },
    quantityPurchased: {
        type: Number,
        required: [true, 'Stock quantity purchased required']
    },
    itemPrice: {
        type: Number,
        required: [true, 'Stock price field is required']
    },
    dateOfPurchase: {
        type: Date,
        required: [true, 'Date of purchase field is required'],
        default: Date.now
    }
})

const StockQuantityAndDate = mongoose.model('StockQuantityAndDate', stockQuantityAndDayModel)
module.exports = StockQuantityAndDate