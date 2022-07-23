const request = require('supertest');

const Chef = require('../../../src/model/chef.model');
let server;

describe('/api/chef/regsiter', ()=>{

  beforeEach(async()=>{
    server = require('../../../src/app');
    await Chef.deleteMany({});
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

});
