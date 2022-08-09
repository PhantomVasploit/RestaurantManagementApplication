const mongoose = require('mongoose');

const PremiumBite = require('../models/premiumBites.model');
const logger = require('../config/winston.config');

module.exports.createPremiumBitesMenu = (req, res)=>{
  const data = [
    {name: "Spring rolls", price: 500, storeItem: ["Olive Oil", "Garlic", "Pork Mince", "Mushrooms", "Carrots", "Beans", "Cabbage", "Cornflour", "Oyster Sauce", "Soy Sauce", "Spring Rolls Wrapper", "Apple Cider Vinegar"], imgUrl: "https://images.unsplash.com/photo-1613135373494-d1f6a77d159b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNwcmluZyUyMHJvbGxzJTIwZm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
    {name: "Vegetarian Warp", price: 1100, storeItem: ["Wheat Flour", "Hummus", "Edamame", "Spinach", "Avocados", "Carrots", "Cucumber", "Black Pepper", "Olive Oil"], imgUrl: "https://images.unsplash.com/photo-1600850056064-a8b380df8395?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3ByaW5nJTIwcm9sbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
    {name: "Beef Tenderloin Tips", price: 1000, storeItem: ["Beef Tenderloin Tips", "Butter", "Bay leaf", "Bell Pepper", "Carrots", "Peanut Oil", "Red Onion", "All Purpose Flour", "Mushrooms", "Lemon", "Salt"], imgUrl: "https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVlZiUyMHNpcmxvaW4lMjBzdGVhayUyMHNhbmR3aWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {name: "Mini Beef Burger Sliders", price: 900, storeItem: ["Beef", "Eschallots", "Olive Oil", "Cheese", "Brioche Slider Buns", "Mayonnaise", "Cornichons", "Rocket Leaves", "Tomatoes"], imgUrl: "https://images.unsplash.com/photo-1508737027454-e6454ef45afd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWluaSUyMGJlZWYlMjBidXJnZXIlMjBzbGlkZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {name: "Buffalo Chicken Wings", price: 850, storeItem: ["All Purpose Flour", "Paprika", "Cayenne Pepper", "Salt", "Chicken Wings", "Olive Oil", "Butter", "Black Pepper", "Garlic"], imgUrl: "https://images.unsplash.com/photo-1631897788978-da06ec45adcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnVmZmFsbyUyMGNoaWNrZW4lMjB3aW5nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
    {name: "Samosas", price: 1750, storeItem: ["Olive Oil", "Beef", "Red Onion", "Garlic", "Jalapeño", "Salt", "Pepper", "Coriander", "Cumin", "Scallions", "Peas", "Cilantro"], imgUrl: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2Ftb3Nhc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
    {name: "Truffle & Chips", price: 900, storeItem: ["Potatoes", "Parmesan Shavings", "Truffle Oil", "Salt"], imgUrl: "https://images.unsplash.com/photo-1580218863909-d882fbb62d7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHRydWZmbGUlMjAlMjYlMjBjaGlwc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}
  ];

  data.map((item)=>{
    PremiumBite.create(item)
    .then((premiumBite)=>{
      logger.info(`Premium Bite Menu Items Seeded To The Database: ${JSON.stringify(premiumBite)}`);
    })
    .catch((e)=>{
      throw e;
    });
  });
  res.status(201).json({message: 'Database successfully seeded'});
}

module.exports.getPremiumBitesMenu = (req, res)=>{
  PremiumBite.find({})
  .then((premiumBites)=>{
    res.status(200).json({message: 'Fetch successful', premiumBites});
  })
  .catch((e)=>{
    throw e;
  });
}

module.exports.updatePremiumBitesMenu = (req, res)=>{
  const toId = mongoose.Types.ObjectId;
  const premiumBiteId = toId(req.params.premiumBiteId);
  const { price } = req.body;
  PremiumBite.findOneAndUpdate({_id: premiumBiteId}, { price })
  .then(()=>{
    res.status(200).json({message: 'Update successful'})
  })
  .catch((e)=>{
    throw e;
  });
}

module.exports.deletePremiumBitesMenu = (req, res)=>{
  const toId = mongoose.Types.ObjectId;
  const premiumBiteId = toId(rq.params.premiumBiteId);
  PremiumBite.findOneAndRemove({_id: premiumBiteId})
  .then((premiumBiteId)=>{
    res.status(200).json({message: 'Delete successful', premiumBiteId});
  })
  .catch((e)=>{
    throw e;
  });
}
