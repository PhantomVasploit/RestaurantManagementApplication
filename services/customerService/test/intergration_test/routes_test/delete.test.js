const request = require('supertest');

const Customer = require('../../../src/model/customer.model');
let server;

describe('/api/customer/:customerId', ()=>{

  beforeEach(async()=>{
    server = require('../../../src/app');
    const customer = new Customer({firstName: 'Paul', lastName: 'Sanga', email: 'paulvasgit99@gmail.com', phoneNumber: '254757255894', password: 'pajoy9903'});
    await customer.save();
  });

  afterEach(async()=>{
    await server.close();
    await Customer.deleteMany({});
  });

  it('Should delete existing customer account', async()=>{
    const customer = await Customer.findOne({email: 'paulvasgit99@gmail.com'});
    const response = await request(server)
    .delete(`/api/customer/${customer._id}`)
    .expect(200)
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Customer account deleted successfully');
  })

})
