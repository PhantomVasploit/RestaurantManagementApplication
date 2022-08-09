const request = require('supertest');

const RedWine = require('../../../src/models/redWine.model');
let server;

describe('POST: /api/menu/red-wine', ()=>{

  beforeEach(async()=>{
    server = require('../../../src/app');
    await RedWine.deleteMany({});
  });

  afterEach(async()=>{
    await server.close();
    await RedWine.deleteMany({});
  });

  it('Should seed the database with red wine menu items', async()=>{
    const response = await request(server)
    .post('/api/menu/red-wine')
    .expect(201)
    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Database successfully seeded');
  });

})
