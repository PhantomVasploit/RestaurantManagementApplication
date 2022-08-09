const request = require('supertest');

const Cider = require('../../../src/models/cider.model');
let server;

describe('POST: /api/menu/cider', ()=>{

  beforeEach(async()=>{
    server = require('../../../src/app');
    await Cider.deleteMany({});
  });

  afterEach(async()=>{
    await server.close();
    await Cider.deleteMany({});
  });

  it('Should seed the database with cider menu items', async()=>{
    const response = await request(server)
    .post('/api/menu/cider')
    .expect(201)
    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Database successfully seeded');
  });

})
