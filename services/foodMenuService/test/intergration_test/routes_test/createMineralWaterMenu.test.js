const request = require('supertest');

const MineralWater = require('../../../src/models/mineralWater.model');
let server;

describe('POST: /api/menu/mineral-water', ()=>{

  beforeEach(async()=>{
    server = require('../../../src/app');
    await MineralWater.deleteMany({});
  });

  afterEach(async()=>{
    await server.close();
    await MineralWater.deleteMany({});
  });

  it('Should seed the database with mineral water menu items', async()=>{
    const response = await request(server)
    .post('/api/menu/mineral-water')
    .expect(201)
    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Database successfully seeded');
  });

})
