const request = require('supertest');

const Chef = require('../../../src/model/chef.model');
let server;

describe('/api/chef/regsiter', ()=>{

  beforeEach(async()=>{
    server = require('../../../src/app');
    await Chef.deleteMany({});
    const chef = new Chef({firstName: 'Phantom', lastName: 'Vasploit', email: 'phantom@gmail.com', phoneNumber: '+254114552260', password: 'pajoy9903'})
    await chef.save();
  });

  afterEach(async()=>{
    await server.close();
    await Chef.deleteMany({});
  });

  it('Should create a new chef account', async()=>{
    const response = await request(server)
    .post('/api/chef/register')
    .send({firstName: 'Paul', lastName: 'Sanga', email: 'paulvasgit99@gmail.com', password: 'pajoy9903'})
    .expect(201)
    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Chef account created successfully')
    expect(response.body.chef.firstName).toBe('Paul');
    expect(response.body.chef.lastName).toBe('Sanga');
    expect(response.body.chef.email).toBe('paulvasgit99@gmail.com');
  });

  it('Should return a status code of 400 and a message for an already registered email address', async()=>{
    const response = await request(server)
    .post('/api/chef/register')
    .send({firstName: 'Phantom', lastName: 'Vasploit', email: 'phantom@gmail.com', password: 'pajoy9903', phoneNumber: '+254114552260'})
    .expect(400)
    expect(response.status).toBe(400);
    expect(response.body.message).toBe('The email is registered');
  });

});
