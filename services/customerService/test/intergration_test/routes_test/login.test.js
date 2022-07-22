const request = require('supertest');

const Customer = require('../../../src/model/customer.model');
let server;

describe('/api/customer/login', ()=>{

  beforeEach(async()=>{
    server = require('../../../src/app');
    const customer = new Customer({firstName: 'Paul', lastName: 'Sanga', email: 'paulvasgit99@gmail.com', phoneNumber: '254757255894', password: 'pajoy9903'});
    await customer.save();
  });

  afterEach(async()=>{
    await server.close();
    await Customer.deleteMany({});
  });

  it('Should return authenticated customer details', async()=>{
    const response = await request(server)
    .post('/api/customer/login')
    .send({email: 'paulvasgit99@gmail.com', password: 'pajoy9903'})
    .expect(200);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Login successful');
    expect(response.body.customer.firstName).toBe('Paul');
    expect(response.body.customer.lastName).toBe('Sanga');
    expect(response.body.customer.email).toBe('paulvasgit99@gmail.com');
    expect(response.body.customer.phoneNumber).toBe('254757255894');
  })

  it('Should return a 400 response status and an invalid message when provided an invalid email', async()=>{
    const response = await request(server)
    .post('/api/customer/login')
    .send({email: 'paul@gmail.com', password: 'pajoy9903'})
    .expect(400)
    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Invalid login credentials');
  });

  it('Should return a 400 response status and an invalid message when provided an invalid password', async()=>{
    const response = await request(server)
    .post('/api/customer/login')
    .send({email: 'paulvasgit99@gmail.com', password: 'ghfdsadfghjk'})
    .expect(400)
    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Invalid login credentials');
  });

})
