const request = require('supertest');

const BreakfastBite = require('../../../src/models/breakfastBites.model');
let server;

describe('GET: /api/menu/breakfast-bites', ()=>{
  beforeEach(()=>{
    server = require('../../../src/app');
    const data = [
      {name: "Swiss Muesli", price: 350, storeItem: ["Oats", "Wheat Germ", "Almonds", "Sunflower Seed", "Cranberries", "Dates"], imgUrl: "https://images.unsplash.com/photo-1619855328104-090bd44a4bb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bXVlc2xpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
      {name: "Pancake Stack", price: 600, storeItem: ["Eggs", "Milk", "Wheat Flour", "Butter", "Salt", "Baking Powder", "Sugar"], imgUrl: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJyZWFrZmFzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
      {name: "Premium Beef Patty Muffin", price: 800, storeItem: ["Butter", "Beef", "Eggs", "Onion", "Salt", "Cheddar Cheese"], imgUrl: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG11ZmZpbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
      {name: "Cured Smoked Salmon With Egg", price: 650, storeItem: ["Butter", "Eggs", "Spinach", "Bread"], imgUrl: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c21va2VkJTIwc2FsbW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
      {name: "Chef's British Fry Up", price: 800, storeItem: ["Eggs", "Ham", "Pork Sausages", "Beans", "Mushrooms", "Tomatoes", "Potatoes"], imgUrl: "https://images.unsplash.com/photo-1542276867-c7f5032e1835?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJ5JTIwdXB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"}
    ];
    data.map(async(item)=>{
      const breakfastBite = new BreakfastBite(item);
      await breakfastBite.save();
    });
  });

  afterEach(async()=>{
    await server.close();
    await BreakfastBite.deleteMany({});
  });

  it('Should return breakfast bites menu items', async()=>{
    const response = await request(server)
    .get('/api/menu/breakfast-bites')
    .expect(200)
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Fetch successful')
  });
  
})
