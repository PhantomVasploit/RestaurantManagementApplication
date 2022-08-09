const request = require('supertest');

const Juice = require('../../../src/models/juice.model');
let server;

describe('POST: /api/menu/juice', ()=>{

  beforeEach(async()=>{
    server = require('../../../src/app');
    await Juice.deleteMany({});
  });

  afterEach(async()=>{
    await server.close();
    await Juice.deleteMany({});
  });

  it('Should seed the database with juice menu items', async()=>{
    const response = await request(server)
    .post('/api/menu/juice')
    .expect(201)
    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Database successfully seeded');
  });

})
