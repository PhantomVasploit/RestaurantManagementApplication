const Order = require('../models/order.model')

module.exports.createOrder = (req, res)=>{
    const orders = req.body
    orders.map((order)=>{
        Order.create({ itemName: order.itemName, quantityOrdered: order.itemQuantity, itemPrice: order.itemPrice})
        .then((order)=>{
            res.status(201).json({message: `Order successfully added to the database`, order})
        })
        .catch((e)=>{
            throw e
        })
    })
}

module.exports.getOrders = (req, res)=>{
    Order.find({})
    .then((orders)=>{
        res.status(200).json({message: 'Fetch successful', orders})
    })
    .catch((e)=>{
        throw e
    })
}

module.exports.getCustomerOrders = (req, res)=>{
    const { email } = req.body
    Order.find({customer: email})
    .then((orders)=>{
        res.status(200).json({message: 'Fetch successful'})
    })
    .catch((e)=>{
        throw e
    })
}