const request = require('supertest');

const Bourbon = require('../../../src/models/bourbon.model');
let server;

describe('GET: /api/menu/bourbon', ()=>{

  beforeEach(()=>{
    server = require('../../../src/app');
    const data = [
      {name: "Makers Mark", price: 800, storeItem: ["Marker's Mark Bottles"], imgUrl: "https://images.unsplash.com/photo-1615553186013-06b13fe822e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJvdXJib258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
      {name: "Gentleman’s Jack", price: 850, storeItem: ["Gentleman's Jack Bottles"], imgUrl: "https://images.unsplash.com/photo-1583873583364-dcecd8292a3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJvdXJib258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"}
    ];
    data.map(async(item)=>{
      const bourbon = new Bourbon(item);
      await bourbon.save();
    });
  });

  afterEach(async()=>{
    await server.close();
    await Bourbon.deleteMany({});
  });

  it('Should return bourbon menu items', async()=>{
    const response = await request(server)
    .get('/api/menu/bourbon')
    .expect(200);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Fetch successful')
  });

})
