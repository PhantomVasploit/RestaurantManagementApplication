const request = require('supertest');

const Admin = require('../../../src/model/admin.model');
let server;

describe('/api/admin/register', ()=>{

  beforeEach(async ()=>{
    server = require('../../../src/app');
    await Admin.deleteMany({});
  })

  afterEach(async()=>{
    await server.close();
    await Admin.deleteMany({});
  })

  it('Should create a new administrator account and return the account details', async()=>{
    const response = await request(server)
    .post('/api/admin/register')
    .send({firstName: 'Paul', lastName: 'Sanga', email: 'paulvasgit99@gmail.com', password: 'pajoy9903'})
    .expect(201);
    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Administrator account created successfully')
    expect(response.body.admin.firstName).toBe('Paul');
    expect(response.body.admin.lastName).toBe('Sanga');
    expect(response.body.admin.email).toBe('paulvasgit99@gmail.com');
  });

})
