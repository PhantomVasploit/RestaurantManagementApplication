const amqp = require('amqplib')

module.exports.producer = async (message)=>{
    try{
        let totalCost = 0
        message.orders.map((order)=>{
            return totalCost += (parseInt(order.quantityOrdered) * parseInt(order.itemPrice))
        })
        let data = { orders: [...message.orders], totalCost, customer: message.customer}
        const connection = await amqp.connect(process.env.AMQP_URI)
        const channel = await connection.createChannel()
        await channel.assertQueue('orders', {durable: true})
        channel.sendToQueue('orders', Buffer.from(JSON.stringify(data)), {persistent: true})
        await channel.close()
    }catch(e){
        throw e
    }
}
