const request = require('supertest')

const Reservation = require('../../../src/models/reservation.model')
let server

describe('/api/reservations', ()=>{

    beforeAll(async()=>{
        server = require('../../../src/app')
        const reservation = new Reservation({
            customer: "paulvasgit99@gmail.com",
            reservationDate: "2022-10-29T21:00:00.000Z",
            reservationTime: "10:00",
            numberOfGuests: "4",
            orders: [{"itemName": "Chicken Tikka", "quantityOrdered": "4", "itemPrice": "250"}]
        })
        await reservation.save()
    })

    afterAll(async()=>{
        await server.close()
        await Reservation.deleteMany({})
    })

    it('Should delete the reservation whose id is passed as as a url parameter', async()=>{

        const reservation = await Reservation.findOne({customer: 'paulvasgit99@gmail.com'})
        const response = await request(server)
        .delete(`/api/reservations/${reservation._id}`)
        .expect(200)
        expect(response.status).toBe(200)
        expect(response.body.message).toBe('Reservation deleted')
    })

})