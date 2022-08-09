const request = require('supertest');

const Gin = require('../../../src/models/gin.model');
let server;

describe('POST: /api/menu/gin', ()=>{

  beforeEach(async()=>{
    server = require('../../../src/app');
    await Gin.deleteMany({});
  });

  afterEach(async()=>{
    await server.close();
    await Gin.deleteMany({});
  });

  it('Should seed the database with gin menu items', async()=>{
    const response = await request(server)
    .post('/api/menu/gin')
    .expect(201)
    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Database successfully seeded');
  });

})
