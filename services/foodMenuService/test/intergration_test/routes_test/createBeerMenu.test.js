const request = require('supertest');

const Beer = require('../../../src/models/beer.model');
let server;

describe('POST: /api/menu/beer', ()=>{

  beforeEach(async()=>{
    server = require('../../../src/app');
    await Beer.deleteMany({});
  });

  afterEach(async()=>{
    await server.close();
    await Beer.deleteMany({});
  });

  it('Should seed the database with beer menu items', async()=>{
    const response = await request(server)
    .post('/api/menu/beer')
    .expect(201)
    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Beer drink added successfully to the food menu database');
  });

})
