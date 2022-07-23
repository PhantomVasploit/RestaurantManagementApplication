const request = require('supertest');

const Chef = require('../../../src/model/chef.model');
let server;

describe('/api/chef/login', ()=>{

  beforeEach(async()=>{
    server = require('../../../src/app');
    const chef = new Chef({firstName: 'Paul', lastName: 'Sanga', email: 'paulvasgit99@gmail.com', password: 'pajoy9903'});
    await chef.save();
  });

  afterEach(async()=>{
    await server.close();
    await Chef.deleteMany({});
  });

  it('Should return authenicated chef details', async()=>{
    const response = await request(server)
    .post('/api/chef/login')
    .send({email: 'paulvasgit99@gmail.com', password: 'pajoy9903'})
    .expect(200);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Login successful')
    expect(response.body.chef.firstName).toBe('Paul');
    expect(response.body.chef.lastName).toBe('Sanga');
    expect(response.body.chef.email).toBe('paulvasgit99@gmail.com');
  });

  it('Should return status code 400 and invalid message when provided invalid email', async()=>{
    const response = await request(server)
    .post('/api/chef/login')
    .send({email: 'paul@gmail.com', password: 'pajoy9903'})
    .expect(400);
    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Inavlid login credentials');
  });

  it('Should return a status code of 400 and an invalid message when provided an inavlid password', async()=>{
    const response = await request(server)
    .post('/api/chef/login')
    .send({email: 'paulvasgit99@gmail.com', password: 'dsfghjkljhgfds'})
    .expect(400);
    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Invalid login credentials')
  });

})
