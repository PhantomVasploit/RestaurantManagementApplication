const request = require('supertest');

const MainCourse = require('../../../src/models/mainCourse.model');
let server;

describe('GET: /api/menu/main-course', ()=>{

  beforeEach(()=>{
    server = require('../../../src/app');
    const data = [
      {name: "Beef Fillet Steak 'Café de Paris'", price: 2800, storeItem: ["Butter", "Garlic", "Cloves", "Rosemary", "Thyme", "Oil", "Salt", "Pepper"], imgUrl: "https://images.unsplash.com/photo-1625937329935-287441889bce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVlZiUyMGZpbGxldCUyMHN0ZWFrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" },
      {name: "Chicken Tikka", price: 1700, "storeItem": ["Chicken", "Yoghurt", "Lemon", "Garlic", "Cloves", "Ginger", "Salt", "Ground Cumin", "Garam Masala", "Paprika", "Onions", "Tumeric", ], imgUrl: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2hpY2tlbiUyMHRpa2thfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
      {name: "Tilapia Fish 'Signature Dish'", price: 2100, storeItem: ["Tilapia Fillet", "All-Purpose Flour", "Olive Oil", "Black Pepper", "Butter", "Lemon", "Thyme"], imgUrl: "https://images.unsplash.com/photo-1613626630502-182579c0432c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJpZWQlMjBmaXNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}
    ];
    data.map(async(item)=>{
      const mainCourseMeal = new MainCourse(item);
      await mainCourseMeal.save();
    });
  });

  afterEach(async()=>{
    await server.close();
    await MainCourse.deleteMany({});
  });

  it('Should return main course meals menu items', async()=>{
    const response = await request(server)
    .get('/api/menu/main-course')
    .expect(200)
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Fetch successful')
  });

});
