const request = require('supertest');

const Cognac = require('../../../src/models/cognac.model');
let server;

describe('POST: /api/menu/cognac', ()=>{

  beforeEach(async()=>{
    server = require('../../../src/app');
    await Cognac.deleteMany({});
  });

  afterEach(async()=>{
    await server.close();
    await Cognac.deleteMany({});
  });

  it('Should seed the database with cognac menu items', async()=>{
    const response = await request(server)
    .post('/api/menu/cognac')
    .expect(201)
    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Database successfully seeded');
  });

})
