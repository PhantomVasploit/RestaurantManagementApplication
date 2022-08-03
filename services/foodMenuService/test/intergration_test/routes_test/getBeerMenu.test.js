const request = require('supertest');

const Beer = require('../../../src/models/beer.model');
let server;

describe('GET: /api/menu/beer', ()=>{
  beforeEach(()=>{
    server = require('../../../src/app');
    const data = [
      {name: "Tusker Lager", price: 600, storeItem: ["Tusker Lager Bottles"], imgUrl: "https://images.unsplash.com/photo-1574283073530-b9b1332fc305?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHVza2VyJTIwbGFnZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
      {name: "Tusker Malt", price: 600, storeItem: ["Tusker Malt Bottles"], imgUrl: "https://images.unsplash.com/photo-1586993451228-09818021e309?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmVlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
      {name: "Tusker Lite", price: 600, storeItem: ["Tusker Lite Bottles"], imgUrl: "https://images.unsplash.com/photo-1630446070374-df1ec648ac65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJlZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
      {name: "White Cap Lager", price: 600, storeItem: ["White Cap Lager Bottles"], imgUrl: "https://images.unsplash.com/photo-1566633806327-68e152aaf26d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmVlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
      {name: "White Cap Light", price: 600, storeItem: ["White Cap Light Bottles"], imgUrl: "https://images.unsplash.com/photo-1618183479302-1e0aa382c36b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmVlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
      {name: "Guinness", price: 700, storeItem: ["Guinness Bottles"], imgUrl: "https://images.unsplash.com/photo-1563396983631-2f8cf576bb36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3Vpbm5lc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
      {name: "Heineken", price: 700, storeItem: ["Heineken Bottles"], imgUrl: "https://images.unsplash.com/photo-1599333388451-e28bda44d0c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhlaW5la2VufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}
    ];
    data.map(async(item)=>{
      const beer = new Beer(item);
      await beer.save();
    });
  });

  afterEach(async()=>{
    await server.close();
    await Beer.deleteMany({});
  });

  it('Should return beer menu items', async()=>{
    const response = await request(server)
    .get('/api/menu/beer')
    .expect(200)
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Fetch successful')
  });
})
