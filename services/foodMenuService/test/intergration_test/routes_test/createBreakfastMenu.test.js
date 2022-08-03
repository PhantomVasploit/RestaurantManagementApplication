const request = require('supertest');

const BreakfastBite = require('../../../src/models/breakfastBites.model');
let server;

describe('POST: /api/menu/breakfast-bites', ()=>{

  beforeEach(async()=>{
    server = require('../../../src/app');
    await BreakfastBite.deleteMany({});
  });

  afterEach(async()=>{
    await server.close();
    await BreakfastBite.deleteMany({});
  });

  it('Should seed the database with the breakfast bites menu items', async()=>{
    const response = await request(server)
    .post('/api/menu/breakfast-bites')
    .expect(201)
    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Database successfully seeded');
  });

})
