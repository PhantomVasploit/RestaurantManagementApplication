const request = require('supertest');

const Apperitif = require('../../../src/models/apperitif.model');
let server;

describe('GET: /api/menu/apperitif', ()=>{

  beforeEach(async()=>{
    server = require('../../../src/app');
    const data = [
      {name: "martini rosso", price: 200, storeItem: ["Martini Rosso Bottles"], imgUrl: "https://images.unsplash.com/photo-1527762055594-4956c0c8c617?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFydGluaSUyMHJvc298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
      {name: "martini bainco", price: 200, storeItem: ["Martini Bianco Bottles"], imgUrl: "https://images.unsplash.com/photo-1648231838863-d450240d70e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG1hcnRpbmklMjBiYWluY298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
      {name: "martini extr dry", price: 200, storeItem: ["Martini Extra Dry Bottles"], imgUrl: "https://images.unsplash.com/photo-1607446045875-de57c995726b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFydGluaSUyMGJhaW5jb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
      {name: "milano rosso", price: 200, storeItem: ["Milano Rosso Bottles"], imgUrl: "https://images.unsplash.com/photo-1437418747212-8d9709afab22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWlsYW5vJTIwcm9zc28lMjBhbGNvaG9sfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
      {name: "milano bainco", price: 200, storeItem: ["Milano Bianco Bottles"], imgUrl: "https://images.unsplash.com/photo-1552611052-dd922d8f9603?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGFsY29ob2x8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
      {name: "milano extra dry", price: 200, storeItem: ["Milano Extra Dry Bottles"], imgUrl: "https://images.unsplash.com/flagged/photo-1575451536181-d25a71238d07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGFsY29ob2x8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
      {name: "campari", price: 200, storeItem: "Campari Bottles", imgUrl: "https://media.istockphoto.com/photos/spritz-or-campari-tonic-i-a-wine-glass-picture-id1198410015?b=1&k=20&m=1198410015&s=170667a&w=0&h=Qsn-6cAf5wtYIQSbSlGi6b8PB00ArQh0t2CrIU_m5zc="},
      {name: "pernod", price: 250, storeItem: ["Pernod Bottles"], imgUrl: "https://images.unsplash.com/photo-1533418605307-876e99686be4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcm5vZCUyMGFsY29ob2wlMjBnbGFzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
      {name: "ricard", price: 250, storeItem: ["Ricard Bottle"], imgUrl: "https://images.unsplash.com/photo-1581357796294-cf63598a1883?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmljYXJkJTIwYWxjb2hvbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
      {name: "pims no.1", price: 250, storeItem: ["Pims No.1 Bottles"], imgUrl: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGFsY29ob2x8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"}
    ];

    data.map(async(drink)=>{
      const apperitif = new Apperitif(drink);
      await apperitif.save();
    });
  });

  afterEach(async()=>{
    await server.close();
    await Apperitif.deleteMany({});
  });

  it('Should return all an array of all apperitif drinks', async ()=>{
    const response = await request(server)
    .get('/api/menu/apperitif')
    .expect(200);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Fetch successful');
  });

});
