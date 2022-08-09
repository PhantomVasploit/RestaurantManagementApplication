const request = require('supertest');

const Cider = require('../../../src/models/cider.model');
let server;

describe('GET: /api/menu/cider', ()=>{
  beforeEach(()=>{
    server = require('../../../src/app');
    const data = [
      {name: "Smirnoff Ice Red", price: 600, storeItem: ["Smirnoff Ice Red Bottles"], imgUrl: "https://images.unsplash.com/photo-1550985543-f47f38aeee65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c21pcm5vZmZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
      {name: "Smirnoff Ice Black", price: 600, storeItem: ["Smirnoff Ice Black"], imgUrl: "https://images.unsplash.com/photo-1550985543-f47f38aeee65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c21pcm5vZmZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
      {name: "Redd’s", price: 600, storeItem: ["Redd's Bottles"], imgUrl: "https://images.unsplash.com/photo-1509459423522-c1b58365f2a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2lkZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
      {name: "Oettinger Pils", price: 600, storeItem: ["Oettinger Pils Bottles"], imgUrl: "https://images.unsplash.com/photo-1510630093590-b7d7fabbb5ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2lkZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
      {name: "Oettinger Weissbier", price: 600, storeItem: ["Oettinger Weissbier Bottles"], imgUrl: "https://images.unsplash.com/photo-1515723959262-56195aae7cdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNpZGVyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}
    ];
    data.map(async(item)=>{
      const cider = new Cider(item);
      await cider.save();
    });
  });

  afterEach(async()=>{
    await server.close();
    await Cider.deleteMany({});
  });

  it('Should return cider menu items', async()=>{
    const response = await request(server)
    .get('/api/menu/cider')
    .expect(200);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Fetch successful')
  });
})
