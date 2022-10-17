const Reservation = require('../models/reservation.model')
const {Order} = require('../models/order.model')

module.exports.createReservation = (req, res)=>{
    const { customer, reservationDate, reservationTime, numberOfGuests } = req.body
    const reqOrders = req.body.orders
    console.log(JSON.stringify(reqOrders))
    Reservation.create({customer, reservationDate, reservationTime, numberOfGuests })
    .then((reservation)=>{
        
        res.status(201).json({message: 'Reservation has been saved', reservation})
    })
    .catch((e)=>{
        throw e;
    })
}

module.exports.getReservations = (req, res)=>{
    const customerEmail = req.params.customerEmail
    Reservation.find({customer: customerEmail})
    .then((reservation)=>{
        res.status(200).json({message: 'Fetch successful', reservation})
    })
    .catch((e)=>{
        throw e
    })
}

module.exports.updateReservation = (req, res)=>{
    const reservationId = req.params.reservationId
    const { customer, reservationDate, reservationTime, numberOfGuests } = req.body
    Reservation.findOneAndUpdate({_id: reservationId}, { customer, reservationDate, reservationTime, numberOfGuests })
    .then((reservation)=>{
        reservation.orders = [...req.body.orders]
        reservation.save()
        res.status(200).json({message: 'Reservation updated', reservation})
    })
    .catch((e)=>{
        throw e
    })
}

module.exports.deleteReservation = (req, res)=>{
    const reservationId = req.params.reservationId
    Reservation.findOneAndRemove({_id: reservationId})
    .then((reservation)=>{
        res.status(200).json({message: 'Reservation deleted'})
    })
    .catch((e)=>{
        throw e
    })
}