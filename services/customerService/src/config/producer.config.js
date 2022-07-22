const amqp = require('amqplib');

module.exports.producer = async(exchangeName, routingKey, message)=>{
  try {
    const connection = await  amqp.connect(process.env.AMQP_URI);
    const channel = await connection.createChannel();
    await channel.assertExchange(exchangeName, 'direct', {durable: true});
    channel.publish(exchangeName, routingKey, Buffer.from(message));
    connection.close();
  } catch (e) {
    throw e;
  }
}
