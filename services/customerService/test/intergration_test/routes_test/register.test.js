const request = require('supertest');

const Customer = require('../../../src/model/customer.model');
let server;

describe('/api/customer/register', ()=>{

  beforeEach(async()=>{
    server = require('../../../src/app');
    await Customer.deleteMany({});
  });

  afterEach(async()=>{
    await server.close();
    await Customer.deleteMany({});
  });

  it('Should create a new customer account', async()=>{
    const response = await request(server)
    .post('/api/customer/register')
    .send({firstName: 'Paul', lastName: 'Sanga', email: 'paulvasgit99@gmail', phoneNumber: '254757255894', password: 'pajoy9903'})
    .expect(201)
    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Customer account created successfully');
    expect(response.body.customer.firstName).toBe('Paul');
    expect(response.body.customer.lastName).toBe('Sanga');
    expect(response.body.customer.email).toBe('paulvasgit99@gmail.com');
    expect(response.body.customer.phoneNumber).toBe('254757255894');
  })

})
