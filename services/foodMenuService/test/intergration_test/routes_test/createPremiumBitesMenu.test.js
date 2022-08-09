const request = require('supertest');

const PremiumBite = require('../../../src/models/premiumBites.model');
let server;

describe('POST: /api/menu/premium-bites', ()=>{

  beforeEach(async()=>{
    server = require('../../../src/app');
    await PremiumBite.deleteMany({});
  });

  afterEach(async()=>{
    await server.close();
    await PremiumBite.deleteMany({});
  });

  it('Should seed the database with premium bites menu items', async()=>{
    const response = await request(server)
    .post('/api/menu/premium-bites')
    .expect(201)
    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Database successfully seeded');
  });

})
