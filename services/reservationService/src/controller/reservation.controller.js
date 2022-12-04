const _ = require('lodash')

const Reservation = require('../models/reservation.model')
const Sale = require('../models/sales.model')
const logger = require('../config/winston.config')
const { producer } = require('../config/orderProducer.config')
const { reservationProducer } = require('../config/reservationProducer.config')




module.exports.createReservation = (req, res)=>{
    const { customer, reservationDate, reservationTime, numberOfGuests } = req.body.body
    const reqOrders = req.body.body.orders
    Reservation.create({customer, reservationDate, reservationTime, numberOfGuests})
    .then((reservation)=>{
        reqOrders.map((order)=>{
            reservation.orders.push(order)
            Sale.find({})
            .then((sales)=>{
                sales.map((sale)=>{
                    if(sale.itemName === order.itemName){
                        sale.quantityOrdered += order.quantityOrdered
                        return sale.save((err, data)=>{
                            if(err){
                                throw err
                            }
                            if(data){
                                return
                            }
                        })
                    }
                })
            })
        })
        reservation.save((err, data)=>{
            if(err){
                throw err
            }
            if(data){
                return
            }
        })
        res.status(201).json({message: 'Reservation saved', reservation})
        producer(reservation)
        reservationProducer(reservation)
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

module.exports.getReservationsByDate = (req, res)=>{
    const date = new Date(req.params.date).toDateString()
    Reservation.find({reservationDate: date})
    .then((reservations)=>{
        res.status(200).json({message: 'Fetch successful', reservations})
    })
    .catch((e)=>{
        throw e
    })
}

module.exports.getSales = (req, res)=>{
    Sale.find({})
    .then((sales)=>{
        res.status(200).json({message: 'Fecth successful', sales})
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