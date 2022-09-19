const request = require('supertest');

const Admin = require('../../../src/model/admin.model');
let server;

describe('/api/admin/register', ()=>{

  beforeEach(async ()=>{
    server = require('../../../src/app');
    await Admin.deleteMany({});
    const admin = new Admin({firstName: 'Phantom', lastName: 'Vasploit', email: 'phantom@gmail.com', phoneNumber: '+254114552260', password: 'pajoy9903'});
    await admin.save();
  })

  afterEach(async()=>{
    await server.close();
    await Admin.deleteMany({});
  })

  it('Should create a new administrator account and return the account details', async()=>{
    const response = await request(server)
    .post('/api/admin/register')
    .send({firstName: 'Paul', lastName: 'Sanga', email: 'paulvasgit99@gmail.com', password: 'pajoy9903', phoneNumber: '+254757255894'})
    .expect(201);
    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Administrator account created successfully')
    expect(response.body.admin.firstName).toBe('Paul');
    expect(response.body.admin.lastName).toBe('Sanga');
    expect(response.body.admin.email).toBe('paulvasgit99@gmail.com');
    expect(response.body.admin.phoneNumber).toBe('+254757255894');
  });

  it('Should return a status code of 400 and a message for an already registred email address', async()=>{
    const response = await request(server)
    .post('/api/admin/register')
    .send({firstName: 'Phantom', lastName: 'Vasploit', email: 'phantom@gmail.com', password: 'pajoy9903', phoneNumber: '+254114552260'})
    .expect(400)
    expect(response.status).toBe(400);
    expect(response.body.message).toBe('The email is registered');
  });

})
