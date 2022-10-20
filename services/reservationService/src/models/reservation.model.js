const mongoose = require('mongoose')

const { orderSchema } = require('./order.model')

const { Schema } = mongoose
const reservationSchema = new Schema({
    customer: {
        type: String,
        required: [true, 'Customer field is required']
    },
    reservationDate: {
        type: Date,
        required: [true, 'Reservation date field is required']
    },
    reservationTime: {
        type: String ,
        required: [true, 'Reservtion time field is required']
    },
    numberOfGuests: {
        type: Number,
        required: [true, 'Number of guests field is required']
    },
    orders: [orderSchema]
})

const Reservation = mongoose.model('Reservation', reservationSchema)
module.exports = Reservation