const amqp = require('amqplib')

module.exports.reservationProducer = async (message)=>{
    try{
        const connection = await amqp.connect(process.env.AMQP_URI)
        const channel = await connection.createChannel()
        await channel.assertQueue('reservation', {durable: true})
        channel.sendToQueue('reservation', Buffer.from(JSON.stringify(message)), {persistent: true})
        await channel.close()
    }catch(e){
        throw e
    }
}
