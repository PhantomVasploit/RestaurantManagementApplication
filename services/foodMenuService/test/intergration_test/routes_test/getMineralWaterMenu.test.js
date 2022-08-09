const request = require('supertest');

const MineralWater = require('../../../src/models/mineralWater.model');
let server;

describe('GET: /api/menu/mineral-water', ()=>{
  beforeEach(()=>{
    server = require('../../../src/app');
    const data = [
      {name: "Aquamist Still Classic 375 ml", price: 500, storeItem: ["Aquamist Still Classic 375 ml Bottles"]},
      {name: "Aquamist Still Classic 750 ml", price: 700, storeItem: ["Aquamist Still Classic 750 ml Bottles"]},
      {name: "Aquamist Sparkling Classic 375 ml", price: 500, storeItem: ["Aquamist Sparkling Classic 375 ml Bottles"]},
      {name: "Aquamist Sparkling Classic 750 ml", price: 700, storeItem: ["Aquamist Sparkling Classic 750 ml Bottles"]},
      {name: "San Pellegrino 750 ml", price: 900, storeItem: ["San Pellegrino 750 ml Bottles"]},
      {name: "Mayers Still Small", price: 500, storeItem: ["Mayers Still Small Bottles"]},
      {name: "Mayers Still Large", price: 700, storeItem: ["Mayers Still Large Bottles"]},
      {name: "Mayers Sparkling Small", price: 500, storeItem: ["Mayers Sparkling Small Bottles"]},
      {name: "Mayers Sparkling Large", price: 700, storeItem: ["Mayers Sparkling Large Bottles"]}
    ];
    data.map(async(item)=>{
      const mineralWater = new MineralWater(item);
      await mineralWater.save();
    });
  });

  afterEach(async()=>{
    await server.close();
    await MineralWater.deleteMany({});
  });

  it('Should return mineral water menu items', async()=>{
    const response = await request(server)
    .get('/api/menu/mineral-water')
    .expect(200);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Fetch successful');
  });
})
