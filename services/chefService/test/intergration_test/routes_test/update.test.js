const request = require('supertest');

const Chef = require('../../../src/model/chef.model');
let server;

describe('/api/customer/:chefId', ()=>{

  beforeEach(async()=>{
    server = require('../../../src/app');
    const chef = new Chef({firstName: 'Paul', lastName: 'Sanga', email: 'paulvasgit99@gmail.com', password: 'pajoy9903'});
    await chef.save();
  });

  afterEach(async()=>{
    await server.close();
    await Chef.deleteMany({});
  });

  it('Should update customer account details', async()=>{
    const chef = await Chef.findOne({email: 'paulvasgit99@gmail.com'});
    const response = await request(server)
    .put(`/api/chef/${chef._id}`)
    .send({firstName: 'Phantom', lastName: 'Vasploit', email: 'Phantom@gmail.com'})
    .expect(200);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Chef account is updated successfully')
  });

})
