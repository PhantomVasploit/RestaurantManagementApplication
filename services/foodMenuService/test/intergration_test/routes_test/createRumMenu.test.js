const request = require('supertest');

const Rum = require('../../../src/models/rum.model');
let server;

describe('POST: /api/menu/rum', ()=>{

  beforeEach(async()=>{
    server = require('../../../src/app');
    await Rum.deleteMany({});
  });

  afterEach(async()=>{
    await server.close();
    await Rum.deleteMany({});
  });

  it('Should seed the database with rum menu items', async()=>{
    const response = await request(server)
    .post('/api/menu/rum')
    .expect(201)
    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Database successfully seeded');
  });

})
