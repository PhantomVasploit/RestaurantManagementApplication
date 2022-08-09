const request = require('supertest');

const LifeStyle = require('../../../src/models/lifeStyle.model');
let server;

describe('POST: /api/menu/life-style', ()=>{

  beforeEach(async()=>{
    server = require('../../../src/app');
    await LifeStyle.deleteMany({});
  });

  afterEach(async()=>{
    await server.close();
    await LifeStyle.deleteMany({});
  });

  it('Should seed the database with life style menu items', async()=>{
    const response = await request(server)
    .post('/api/menu/life-style')
    .expect(201)
    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Database successfully seeded');
  });

})
