const request = require('supertest');

const Customer = require('../../../src/model/customer.model');
let server;

describe('/api/customer/register', ()=>{

  beforeEach(async()=>{
    server = require('../../../src/app');
    await Customer.deleteMany({});
    const customer = new Customer({firstName: 'Phantom', lastName: 'Vasploit', email: 'phantom@gmail.com', password: 'pajoy9903', phoneNumber: '+254114552260'});
    await customer.save();
  });

  afterEach(async()=>{
    await server.close();
    await Customer.deleteMany({});
  });

  it('Should create a new customer account with an unregistered email address', async()=>{
    const response = await request(server)
    .post('/api/customer/register')
    .send({firstName: 'Paul', lastName: 'Sanga', email: 'paulvasgit99@gmail.com', password: 'pajoy9903', phoneNumber: '254757255894'})
    .expect(201);
    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Customer account created successfully');
    expect(response.body.customer.firstName).toBe('Paul');
    expect(response.body.customer.lastName).toBe('Sanga');
    expect(response.body.customer.email).toBe('paulvasgit99@gmail.com');
    expect(response.body.customer.phoneNumber).toBe('254757255894');
  });

  it('Should return a status code of 400 and a message for an already registred email address', async()=>{
    const response = await request(server)
    .post('/api/customer/register')
    .send({firstName: 'Phantom', lastName: 'Vasploit', email: 'phantom@gmail.com', password: 'pajoy9903', phoneNumber: '+254114552260'})
    .expect(400)
    expect(response.status).toBe(400);
    expect(response.body.message).toBe('This email is registred');
  });

})
