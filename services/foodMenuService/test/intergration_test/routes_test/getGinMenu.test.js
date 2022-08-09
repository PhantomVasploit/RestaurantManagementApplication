const request = require('supertest');

const Gin = require('../../../src/models/gin.model');
let server;

describe('GET: /api/menu/gin', ()=>{
  beforeEach(()=>{
    server = require('../../../src/app');
    const data = [
      {name: "Bombay Sapphire", price: 550, storeItem: ["Bombay Sapphire Bottles"], imgUrl: "https://images.unsplash.com/photo-1520935443738-cdd39913a9e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9tYmF5JTIwc2FwcGhpcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
      {name: "Tanqueray", price: 650, storeItem: ["Tanqueray Bottles"], imgUrl: "https://images.unsplash.com/photo-1633219663580-47cd03228ec7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGFucXVlcmF5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
      {name: "Hendrick’s", price: 1000, storeItem: ["Hendrick's Bottles"], imgUrl: "https://images.unsplash.com/photo-1607190345101-031b3e4080fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhlbmRyaWNrJUUyJTgwJTk5c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}
    ];
    data.map(async(item)=>{
      const gin = new Gin(item);
      await gin.save();
    });
  });

  afterEach(async()=>{
    await server.close();
    await Gin.deleteMany({});
  });

  it('Should return gin menu items', async()=>{
    const response = await request(server)
    .get('/api/menu/gin')
    .expect(200);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Fetch successful');
  });
})
