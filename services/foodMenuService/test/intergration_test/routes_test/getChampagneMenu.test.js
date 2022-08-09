const request = require('supertest');

const Champagne = require('../../../src/models/champagne.model');
let server;

describe('GET: /api/menu/breakfast-bites', ()=>{
  beforeEach(()=>{
    server = require('../../../src/app');
    const data = [
      {name: "Veuve Clicquot Brut", priceByBottle: 12500, priceByGlass: 2100,  storeItem: ["Veuve Clicquot Brut Bottles"], imgUrl: "https://images.unsplash.com/photo-1630771496884-46ce7c270a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmV1dmUlMjBjbGljcXVvdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
      {name: "Veuve Clicquot Rose", priceByBottle: 13900, priceByGlass: 2400, storeItem: ["Veuve Clicquot Rose Bottles"], imgUrl: "https://images.unsplash.com/photo-1592341687356-7a83335fc8ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHZldXZlJTIwY2xpY3F1b3QlMjBicnV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}
    ];
    data.map(async(item)=>{
      const breakfastBite = new Champagne(item);
      await breakfastBite.save();
    });
  });

  afterEach(async()=>{
    await server.close();
    await Champagne.deleteMany({});
  });

  it('Should return champagne menu items', async()=>{
    const response = await request(server)
    .get('/api/menu/champagne')
    .expect(200)
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Fetch successful')
  });

})
