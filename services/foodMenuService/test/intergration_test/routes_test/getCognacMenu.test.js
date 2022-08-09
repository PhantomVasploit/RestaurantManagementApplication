const request = require('supertest');

const Cognac = require('../../../src/models/cognac.model');
let server;

describe('GET: /api/menu/cognac', ()=>{
  beforeEach(()=>{
    server = require('../../../src/app');
    const data = [
      {name: "Hennessy VSOP", price: 1500, storeItem: ["Hennessy VSOP Bottles"], imgUrl: "https://images.unsplash.com/photo-1602984156862-14b9ee0885c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVubmVzc3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
      {name: "Hennessy XO", price: 4000, storeItem: ["Hennessy Xo"], imgUrl: "https://images.unsplash.com/photo-1644175397093-6a33f10cb7be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aGVubmVzc3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
      {name: "Remy Martin VSOP", price: 1000, storeItem: ["Remy Martin VSOP"], imgUrl: "https://images.unsplash.com/photo-1619451050621-83cb7aada2d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVteSUyMG1hcnRpbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
      {name: "Remy Martin XO", price: 4500, storeItem: ["Remy Martin XO"], imgUrl: "https://images.unsplash.com/photo-1616671293442-ea4255128f78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVteSUyMG1hcnRpbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}
    ];
    data.map(async(item)=>{
      const cognac = new Cognac(item);
      await cognac.save();
    });
  });

  afterEach(async()=>{
    await server.close();
    await Cognac.deleteMany({});
  });

  it('Should return cognac menu items', async()=>{
    const response = await request(server)
    .get('/api/menu/cognac')
    .expect(200);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Fetch successful')
  });
})
