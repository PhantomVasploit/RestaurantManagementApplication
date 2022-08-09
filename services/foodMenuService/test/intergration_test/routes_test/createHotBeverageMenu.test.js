const request = require('supertest');

const HotBeverage = require('../../../src/models/hotBeverage.model');
let server;

describe('POST: /api/menu/hot-beverage', ()=>{

  beforeEach(async()=>{
    server = require('../../../src/app');
    await HotBeverage.deleteMany({});
  });

  afterEach(async()=>{
    await server.close();
    await HotBeverage.deleteMany({});
  });

  it('Should seed the database with hot beverage menu items', async()=>{
    const response = await request(server)
    .post('/api/menu/hot-beverage')
    .expect(201)
    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Database successfully seeded');
  });

})
