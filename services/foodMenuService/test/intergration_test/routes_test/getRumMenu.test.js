const request = require('supertest');

const Rum = require('../../../src/models/rum.model');
let server;

describe('GET: /api/menu/rum', ()=>{
  beforeEach(()=>{
    server = require('../../../src/app');
    const data = [
      {name: "Bacardi Oak Heart", price: 450, storeItem: [], imgUrl: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cnVtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
      {name: "Captain Morgan Spiced", price: 500, storeItem: [], imgUrl: "https://images.unsplash.com/photo-1500217052183-bc01eee1a74e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJ1bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
      {name: "Malibu", price: 500, storeItem: [], imgUrl: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cnVtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}
    ];
    data.map(async(item)=>{
      const rum = new Rum(item);
      await rum.save();
    });
  });

  afterEach(async()=>{
    await server.close();
    await Rum.deleteMany({});
  });

  it('Should return rum menu items', async()=>{
    const response = await request(server)
    .get('/api/menu/rum')
    .expect(200);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Fetch successful');
  });
})
