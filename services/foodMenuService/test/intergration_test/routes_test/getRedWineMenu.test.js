const request = require('supertest');

const RedWine = require('../../../src/models/redWine.model');
let server;

describe('GET: /api/menu/red-wine', ()=>{
  beforeEach(()=>{
    server = require('../../../src/app');
    const data = [
      {name: "Cavit Principato Pinot Noir, Italy", priceByGlass: 850, priceByBottle: 4500, storeItem: ["Cavit Principato Pinot Noir Bottles"], imgUrl: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F2aXQlMjBwcmluY2lwYXRvJTIwcGlub3QlMjBub2lyJTIwd2luZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", description: "Stylish, elegant and versatile wine, perfect for any occasion with soft tannins pleasing finish on palate"},
      {name: "JP Azeitao Red 2016", priceByGlass: 900, priceByBottle: 5000, storeItem: ["saint celine red wine bottles"], imgUrl: "https://images.unsplash.com/photo-1630369160812-26c7604cbd8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVkJTIwd2luZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", description: "Pronounced aromas of raspberry, spice, with notes of earth and pepper; dry, medium acidity and firm but balanced tannin; juicy black and red berry fruit flavours"},
      {name: "Zenato Valpolicella, Italy", priceByGlass: 1000, priceByBottle: 7500, storeItem: ["jp chenet bottles"], imgUrl: "https://images.unsplash.com/photo-1474722883778-792e7990302f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmVkJTIwd2luZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", description: "Ruby red in color, this Valpolicella Superiore offers fleshy aromas of wild berries, black currants, black cherries, and spices, with hints of chocolate"},
      {name: "Kanonkop Kadette Pinotage, South Africa", priceByGlass: 1000, priceByBottle: 8900,storeItem: ["k.w.v cape ruby bottles"], imgUrl: "https://images.unsplash.com/photo-1594986138018-cb0b6c2609d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVkJTIwd2luZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", description: "Full bodied with a deep ruby colour. Gentle oak and tannin structures give this wine a long, lingering and smooth finish, offering flavours of red berries, plum with a finish of sweet spice"},
      {name: "Penfold Koonunga Hill Shiraz-Carbernet Australia", priceByGlass: 1000, priceByBottle: 16000, storeItem: ["versus red wine bottles"], imgUrl: "https://images.unsplash.com/photo-1610065333275-b3e5c63fc872?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJlZCUyMHdpbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", description: "Fresh pudding mixture and mixed red berries (raspberry and strawberry). Glace fruit and sorbet edges and just the right inflection of cedary, seasoned oak"}
    ];
    data.map(async(item)=>{
      const redWine = new RedWine(item);
      await redWine.save();
    });
  });

  afterEach(async()=>{
    await server.close();
    await RedWine.deleteMany({});
  });

  it('Should return red wine menu items', async()=>{
    const response = await request(server)
    .get('/api/menu/red-wine')
    .expect(200);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Fetch successful');
  });
})
