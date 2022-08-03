const request = require('supertest');

const Apperitif = require('../../../src/models/apperitif.model');
let server;

describe('POST: /api/menu/apperitif', ()=>{

  beforeEach(async()=>{
    server = require('../../../src/app');
    await Apperitif.deleteMany({});
  });

  afterEach(async()=>{
    await server.close();
    await Apperitif.deleteMany({});
  });

  it('Should seed the database with apperitif menu items', async()=>{
    const response = await request(server)
    .post('/api/menu/apperitif')
    .expect(201);
    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Apperitif drinks successfully added to the database');
  });

});
