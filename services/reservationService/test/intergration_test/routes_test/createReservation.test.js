const request = require('supertest')

const Reservation = require('../../../src/models/reservation.model')
let server


describe('/api/reservations', ()=>{

    beforeAll(async()=>{
        server = require('../../../src/app')
        await Reservation.deleteMany({})
    })

    afterAll(async()=>{
        await server.close()
        await Reservation.deleteMany({})
    })

    it('Should create a new reservation instance inclusive of the order instance', async()=>{

        const response = await request(server)
        .post('/api/reservations')
        .send({
            customer: "paulvasgit99@gmail.com",
            reservationDate: "2022-10-29T21:00:00.000Z",
            reservationTime: "10:00",
            numberOfGuests: "4",
            orders: [{"itemName": "Chicken Tikka", "quantityOrdered": "4", "itemPrice": "250"}]
        })
        .expect(201)
        expect(response.body.message).toBe('Reservation saved')
        expect(response.status).toBe(201)
        expect(response.body.reservation.customer).toBe('paulvasgit99@gmail.com')
        expect(response.body.reservation.reservationDate).toBe("2022-10-29T21:00:00.000Z")
        expect(response.body.reservation.reservationTime).toBe("10:00")
        expect(response.body.reservation.numberOfGuests).toBe(4)
    })
})