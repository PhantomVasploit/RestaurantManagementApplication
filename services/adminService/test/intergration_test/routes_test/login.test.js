const request = require('supertest');

const Admin = require('../../../src/model/admin.model');
let server;

describe('/api/admin/login', ()=>{

  beforeEach(async()=>{
    server = require('../../../src/app');
    const admin = new Admin({ firstName: 'Paul', lastName: 'Sanga', email: 'paulvasgit99@gmail.com', password: 'pajoy9903', phoneNumber: '+254757255894' });
    await admin.save();
  });

  afterEach(async()=>{
    await server.close();
    await Admin.deleteMany({});
  });

  it('Should return authenticated user', async()=>{
    const response = await request(server)
    .post('/api/admin/login')
    .send({email: 'paulvasgit99@gmail.com', password: 'pajoy9903'})
    .expect(200);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Login successful')
    expect(response.body.admin.firstName).toBe('Paul');
    expect(response.body.admin.lastName).toBe('Sanga');
    expect(response.body.admin.email).toBe('paulvasgit99@gmail.com')
  });

  it('Should return status of 400 and an invalid message if provided an invalid email', async()=>{
    const response = await request(server)
    .post('/api/admin/login')
    .send({email: 'paul@gmail.com', password: 'pajoy9903'})
    .expect(400);
    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Invalid Login Credentials');
  });

  it('Should return status of 400 and an invalid message if provided an invalid password', async()=>{
    const response = await request(server)
    .post('/api/admin/login')
    .send({email: 'paulvasgit99@gmail.com', password: 'sdfghjkhg'})
    .expect(400);
    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Invalid Login Credentials');
  });

})
