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

  it('Should update customer account details', async()=>{
    const customer = await Customer.findOne({email: 'paulvasgit99@gmail.com'});
    const response = await request(server)
    .put(`/api/customer/${customer._id}`)
    .send({firstName: 'Phantom', lastName: 'Vasploit', email: 'Phantom@gmail.com', phoneNumber: '25414552260'})
    .expect(200);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Customer account updated successfully')
  });

})
