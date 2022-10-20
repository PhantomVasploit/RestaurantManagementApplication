const mongoose = require('mongoose')

const { Schema } = mongoose
const paypalPaymentSchema = new Schema({
    paymentId: {
        type: String,
        required: [true, 'PaymentID field is required']
    },
    intent: {
        type: String,
        required: [true, 'Intent field is required']
    },
    state: {
        type: String,
        required: [true, 'State field is required']
    },
    cart: {
        type: String,
        required: [true, 'Cart field is required']
    },
    email: {
        type: String,
        required: [true, 'Email field is required']
    },
    payerId: {
        type: String,
        required: [true, 'PayerId field is required']
    },
    countryCode: {
        type: String,
        default: 'KE',
        required: [true, 'Country code field is required']
    },
    merchantId: {
        type: String,
        required: [true, 'MerchantId field is required']
    }
})