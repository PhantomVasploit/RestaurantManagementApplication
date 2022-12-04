const amqp = require('amqplib')
const nodeMailer = require('nodemailer')
const { google } = require('googleapis')
const winston = require('winston')
require('dotenv').config()

const logger = require('./config/winston.config')

const OAuth2 = google.auth.OAuth2

const OAuth2_client = new OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET)
OAuth2_client.setCredentials({refresh_token: process.env.REFRESH_TOKEN})

winston.exceptions.handle(new winston.transports.File({filename: 'exceptions.log'}))
process.on('unhandledRejection', (ex)=>{
    throw ex
})

const sendMail = async ()=>{
    const connection = await amqp.connect(process.env.AMQP_URI)
    const channel = await connection.createChannel()
    await channel.assertQueue('reservation', {durable: true})
    channel.consume('reservation', (message)=>{
        let reservation = JSON.parse(message.content.toString())
        console.log(reservation)
        channel.ack(message)
        const accessToken = OAuth2_client.getAccessToken()
        const transporter = nodeMailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: process.env.EMAIL,
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                refreshToken: process.env.REFRESH_TOKEN,
                accessToken: accessToken
            }
        })

        let mailOptions = {
            from: `COOX'S RESTAURANT <${process.env.EMAIL}>`,
            to: reservation.customer,
            subject: "COOX'S RESTAURANT RESERVATION",
            html: 
                `<p>
                    Your reservation slated for ${new Date(reservation.reservationDate).toLocaleDateString()}
                    at ${reservation.reservationTime} has been approved and confirmed. This is the number of guests
                    expected ${reservation.numberOfGuests}.
                    These are the meals you're going to enjoy:
                    ${reservation.orders.map((order)=>{
                        return `<ul>
                                    <li>${order.quantityOrdered} of ${order.itemName}.</li>
                                </ul>`
                    })}
                    We recommend for your arrival ten minutes prior the reservation date.
                    Regards Coox's Restaurant Management.
                </p>`,
        }

        transporter.sendMail(mailOptions, function(err, info){
            if(err){
                throw err
            }
            if(info){
                return logger.info(info)
            }
            transporter.close()
        })
    }, {noAck: false})    
}

sendMail()