const request = require('supertest');

const WhiteWine = require('../../../src/models/whiteWine.model');
let server;

describe('POST: /api/menu/white-wine', ()=>{

  beforeEach(async()=>{
    server = require('../../../src/app');
    await WhiteWine.deleteMany({});
  });

  afterEach(async()=>{
    await server.close();
    await WhiteWine.deleteMany({});
  });

  it('Should seed the database with white wine menu items', async()=>{
    const response = await request(server)
    .post('/api/menu/white-wine')
    .expect(201)
    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Database successfully seeded');
  });

})
