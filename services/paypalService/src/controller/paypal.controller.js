const paypal = require('../config/paypal.config')
const amqp = require('amqplib')


module.exports.initiatePayment = async(req, res)=>{
    
    const connection = await amqp.connect()
    const channel = await connection.createChannel()
    await channel.assertQueue('orders', {durable: true})
    channel.consume('orders', (message)=>{
        let parsed = JSON.parse(message.content.toString())
        console.log(JSON.stringify(parsed))
        channel.ack(message)

        let items = []

        parsed.orders.map((order)=>{
            items.push({name: order.itemName, sku: order._id, price: order.itemPrice.toFixed(2), currency: 'USD', quantity: order.quantityOrdered})
            return JSON.stringify(items)
        })

        const create_payment_json = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "redirect_urls": {
                "return_url": "http://127.0.0.1:5006/api/payment/paypal/success",
                "cancel_url": "http://127.0.0.1:5006/api/payment/paypal/cancel"
            },
            "transactions": [{
                "item_list": {
                    "items": items
                },
                "amount": {
                    "currency": "USD",
                    "total": parsed.totalCost.toFixed(2).toString()
                },
                "description": "COOX'S RESTAURANT RESERVATION PAYMENT."
            }]
        };

        paypal.payment.create(create_payment_json, function (error, payment) {
            if (error) {
                throw error;
            } else {
                payment.links.map((link)=>{
                    if(link.rel === 'approval_url'){
                        res.status(200).json({message: 'Payment Approved Proceed To Execution', redirectUrl: link.href})
                    }
                })   
            }
        });

        items = []
    }, {noAck: false})
    
}


module.exports.paymentSuccess = (req, res)=>{
    const payerId = req.query.PayerID
    const paymentId = req.query.paymentId

    const execute_payment_json = {
        "payer_id": payerId,
        "transactions": [{
            "amount": {
                "currency": "USD",
                "total": "2500.00"
            }
        }]
    }

    paypal.payment.execute(paymentId, execute_payment_json, function(error, payment){
        if(error){
            throw error
        } else {
            console.log("Get Payment Response");
            console.log(JSON.stringify(payment))
        }
    })
}

module.exports.cancelPayment = (req, res)=>{
    res.status(200).json({message: 'Transcation cancelled by the customer'})
}