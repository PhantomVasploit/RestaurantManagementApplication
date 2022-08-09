const request = require('supertest');

const PremiumBite = require('../../../src/models/premiumBites.model');
let server;

describe('GET: /api/menu/premium-bites', ()=>{
  beforeEach(()=>{
    server = require('../../../src/app');
    const data = [
      {name: "Spring rolls", price: 500, storeItem: ["Olive Oil", "Garlic", "Pork Mince", "Mushrooms", "Carrots", "Beans", "Cabbage", "Cornflour", "Oyster Sauce", "Soy Sauce", "Spring Rolls Wrapper", "Apple Cider Vinegar"], imgUrl: "https://images.unsplash.com/photo-1613135373494-d1f6a77d159b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNwcmluZyUyMHJvbGxzJTIwZm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
      {name: "Vegetarian Warp", price: 1100, storeItem: ["Wheat Flour", "Hummus", "Edamame", "Spinach", "Avocados", "Carrots", "Cucumber", "Black Pepper", "Olive Oil"], imgUrl: "https://images.unsplash.com/photo-1600850056064-a8b380df8395?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3ByaW5nJTIwcm9sbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
      {name: "Beef Tenderloin Tips", price: 1000, storeItem: ["Beef Tenderloin Tips", "Butter", "Bay leaf", "Bell Pepper", "Carrots", "Peanut Oil", "Red Onion", "All Purpose Flour", "Mushrooms", "Lemon", "Salt"], imgUrl: "https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVlZiUyMHNpcmxvaW4lMjBzdGVhayUyMHNhbmR3aWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
      {name: "Mini Beef Burger Sliders", price: 900, storeItem: ["Beef", "Eschallots", "Olive Oil", "Cheese", "Brioche Slider Buns", "Mayonnaise", "Cornichons", "Rocket Leaves", "Tomatoes"], imgUrl: "https://images.unsplash.com/photo-1508737027454-e6454ef45afd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWluaSUyMGJlZWYlMjBidXJnZXIlMjBzbGlkZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
      {name: "Buffalo Chicken Wings", price: 850, storeItem: ["All Purpose Flour", "Paprika", "Cayenne Pepper", "Salt", "Chicken Wings", "Olive Oil", "Butter", "Black Pepper", "Garlic"], imgUrl: "https://images.unsplash.com/photo-1631897788978-da06ec45adcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnVmZmFsbyUyMGNoaWNrZW4lMjB3aW5nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
      {name: "Samosas", price: 1750, storeItem: ["Olive Oil", "Beef", "Red Onion", "Garlic", "Jalapeño", "Salt", "Pepper", "Coriander", "Cumin", "Scallions", "Peas", "Cilantro"], imgUrl: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2Ftb3Nhc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
      {name: "Truffle & Chips", price: 900, storeItem: ["Potatoes", "Parmesan Shavings", "Truffle Oil", "Salt"], imgUrl: "https://images.unsplash.com/photo-1580218863909-d882fbb62d7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHRydWZmbGUlMjAlMjYlMjBjaGlwc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}
    ];
    data.map(async(item)=>{
      const premiumBite = new PremiumBite(item);
      await premiumBite.save();
    });
  });

  afterEach(async()=>{
    await server.close();
    await PremiumBite.deleteMany({});
  });

  it('Should return premium bite menu items', async()=>{
    const response = await request(server)
    .get('/api/menu/premium-bites')
    .expect(200);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Fetch successful');
  });
})
