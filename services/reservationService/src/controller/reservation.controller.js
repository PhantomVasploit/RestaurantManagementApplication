const Reservation = require('../models/reservation.model')

const logger = require('../config/winston.config')
const {producer} = require('../config/producer.config')


module.exports.createReservation = (req, res)=>{
    const { customer, reservationDate, reservationTime, numberOfGuests } = req.body
    const reqOrders = req.body.orders
    Reservation.create({customer, reservationDate, reservationTime, numberOfGuests})
    .then((reservation)=>{
        reqOrders.map((order)=>{
            reservation.orders.push(order)
            reservation.save((err, data)=>{
                if(err){
                    throw err
                }
                if(data){
                    return
                }
            })
        })
        res.status(201).json({message: 'Reservation saved', reservation})
        producer(reservation)
    })
    .catch((e)=>{
        throw e
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
        req.body.orders ? reservation.orders = [...req.body.orders] : reservation
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