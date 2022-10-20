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

    it("Should fetch all customer's reservations", async()=>{

        const response = await request(server)
        .get(`/api/reservations/paulvasgit99@gmail.com`)
        .expect(200)
        expect(response.status).toBe(200)
        expect(response.body.message).toBe('Fetch successful')
        expect(response.body.reservation[0].customer).toBe("paulvasgit99@gmail.com")
        expect(response.body.reservation[0].reservationDate).toBe("2022-10-29T21:00:00.000Z")
        expect(response.body.reservation[0].reservationTime).toBe("10:00")
        expect(response.body.reservation[0].numberOfGuests).toBe(4)
    })

})