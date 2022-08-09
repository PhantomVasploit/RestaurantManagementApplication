const mongoose = require('mongoose');

const LifeStyle = require('../models/lifeStyle.model');
const logger = require('../config/winston.config');

module.exports.createLifeStyleMenu = (req, res)=>{
  const data = [
    {
       "name":"Mini Quiche",
       "price":1400,
       "storeItem":[
          "Bacon",
          "Swiss Cheese",
          "Spinach"
       ],
       "imgUrl":"https://images.unsplash.com/photo-1596432196113-62817b6cff8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWluaSUyMHF1aWNoZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
       "name":"Greek Salad",
       "price":1600,
       "storeItem":[
          "Feta",
          "Cheese",
          "Tomatoes",
          "Cucumber",
          "Olive",
          "Olive Oil",
          "Lemon",
          "Bell Pepper",
          "Oregano",
          "Salt",
          "Black Pepper",
          "Kalamata Olive",
          "Red Onion",
          "Red Wine Vinegar"
       ],
       "imgUrl":"https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZWslMjBzYWxhZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
       "name":"Grilled Open Face Focaccia",
       "price":400,
       "storeItem":[
          "Deli Pepperoni",
          "Tomatoes",
          "Green Beans",
          "Olive Oil",
          "Thyme Leaves",
          "Red Pepper",
          "Salt",
          "Black Pepper"
       ],
       "imgUrl":"https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z3JpbGxlZCUyMGZvY2FjY2lhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
       "name":"Oven Baked Button Mushroom",
       "price":1500,
       "storeItem":[
          "Mushrooms",
          "Olive Oil",
          "Garlic",
          "Chives",
          "Salt",
          "Pepper"
       ],
       "imgUrl":"https://images.unsplash.com/photo-1637401608113-4d17d2dad2f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bXVzaHJvb20lMjBiYWtlZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
       "name":"Quinoa Fitness Salad",
       "price":"550",
       "storeItem":[
          "Quinoa",
          "Chickpeas",
          "Cucumber",
          "Red Bell Pepper",
          "Red Oninon",
          "Parsley",
          "Olive Oil",
          "Lemon",
          "Red Wine Vinegar",
          "Garlic",
          "Salt",
          "Black Pepper"
       ],
       "imgUrl":"https://images.unsplash.com/photo-1547496502-affa22d38842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cXVpbm9hJTIwc2FsYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
       "name":"Japanese Salad",
       "price":1300,
       "storeItem":[
          "Red Onion",
          "Peanut Oil",
          "Ginger",
          "Celery",
          "Soy Sauce",
          "Sugar",
          "Lemon",
          "Garlic",
          "Salt",
          "Black Pepper"
       ],
       "imgUrl":"https://images.unsplash.com/photo-1561466273-c13f88329aa0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8amFwYW5lc2UlMjBzYWxhZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
       "name":"Grilled Salmon Fillet",
       "price":2250,
       "storeItem":[
          "Salmon Fillet",
          "Olive Oil",
          "Kosher Salt",
          "Black Pepper"
       ],
       "imgUrl":"https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JpbGxlZCUyMHNhbG1vbiUyMGZpbGxldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
       "name":"Poached Boneless Chicken Breast",
       "price":550,
       "storeItem":[
          "Chicken Breast",
          "Salt",
          "Garlic",
          "Peppercorn",
          "Ginger",
          "Red Oninon",
          "White Wine"
       ],
       "imgUrl":"https://images.unsplash.com/photo-1642689690500-f429a042cad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNoaWNrZW4lMjBicmVhc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
       "name":"Red Lentil Dahl",
       "price":450,
       "storeItem":[
          "Olive Oil",
          "Yellow Onion",
          "Garlic",
          "Garam Masala",
          "Tumeric",
          "Red Pepper",
          "Red Lentils",
          "Tomatoes",
          "Coconut",
          "Salt",
          "Lemon",
          "Spinach"
       ],
       "imgUrl":"https://images.unsplash.com/photo-1625128726772-ab1d76ef976e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGxlbnRpbCUyMGRoYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    }
  ];

  data.map((item)=>{
    LifeStyle.create(item)
    .then((lifeStyle)=>{
      logger.info(`LifeStyle Menu Items Seeded To The Database: ${JSON.stringify(lifeStyle)}`);
    })
    .catch((e)=>{
      throw e;
    });
  });
  res.status(201).json({message: 'Database successfully seeded'});
}

module.exports.getLifeStyleMenu = (req, res)=>{
  LifeStyle.find({})
  .then((lifeStyle)=>{
    res.status(200).json({message: 'Fetch successful', lifeStyle});
  })
  .catch((e)=>{
    throw e;
  });
}

module.exports.updateLifeStyleMenu = (req, res)=>{
  const toId = mongoose.Types.ObjectId;
  const lifeStyleId = toId(req.params.lifeStyleId);
  const { price } = req.body;
  LifeStyle.findOneAndUpdate({_id: lifeStyleId}, { price })
  .then(()=>{
    res.status(200).json({message: 'Update successful'})
  })
  .catch((e)=>{
    throw e;
  });
}

module.exports.deleteLifeStyleMenu = (req, res)=>{
  const toId = mongoose.Types.ObjectId;
  const lifeStyleId = toId(rq.params.lifeStyleId);
  LifeStyle.findOneAndRemove({_id: lifeStyleId})
  .then((lifeStyle)=>{
    res.status(200).json({message: 'Delete successful', lifeStyle});
  })
  .catch((e)=>{
    throw e;
  });
}
