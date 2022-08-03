const request = require('supertest');

const MainCourse = require("../../../src/models/mainCourse.model");
let server;

describe('POST: /api/menu/main-course', ()=>{

  beforeEach(async()=>{
    server = require('../../../src/app.js');
    await MainCourse.deleteMany({});
  });

  afterEach(async()=>{
    await server.close();
    await MainCourse.deleteMany({});
  });

  it('Should seed the database with main course meal menu items', async()=>{
    const response = await request(server)
    .post('/api/menu/main-course')
    .expect(201);
    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Item added to the database successfully');
  });

});
