const request = require('supertest');

const Bourbon = require('../../../src/models/bourbon.model');
let server;

describe('POST: /api/menu/bourbon', ()=>{

  beforeEach(async()=>{
    server = require('../../../src/app');
    await Bourbon.deleteMany({});
  });

  afterEach(async()=>{
    await server.close();
    await Bourbon.deleteMany({});
  });

  it('Should seed the database bourbon menu items', async()=>{
    const response = await request(server)
    .post('/api/menu/bourbon')
    .expect(201)
    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Bourbon drink seeded to database');
  });

});
