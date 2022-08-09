const request = require('supertest');

const Champagne = require('../../../src/models/champagne.model');
let server;

describe('POST: /api/menu/champagne', ()=>{

  beforeEach(async()=>{
    server = require('../../../src/app');
    await Champagne.deleteMany({});
  });

  afterEach(async()=>{
    await server.close();
    await Champagne.deleteMany({});
  });

  it('Should seed the database champagne menu items', async()=>{
    const response = await request(server)
    .post('/api/menu/champagne')
    .expect(201)
    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Database successfully seeded');
  });

});
