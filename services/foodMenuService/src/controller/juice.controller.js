const mongoose = require('mongoose');

const Juice = require('../models/juice.model');
const logger = require('../config/winston.config');

module.exports.createJuiceMenu = (req, res)=>{
  const data = [
    {name: "Mango", price: 800, storeItem: ["Mangoes"], imgUrl: "https://images.unsplash.com/photo-1546173159-315724a31696?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFuZ28lMjBqdWljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
    {name: "Orange", price: 800, storeItem: ["Oranges"], imgUrl: "https://images.unsplash.com/photo-1613478223719-2ab802602423?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8b3JhbmdlJTIwanVpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
    {name: "Pineapple", price: 800, storeItem: ["Pineapple"], imgUrl: "https://images.unsplash.com/photo-1633531138911-1dffbaa8d65d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGluZWFwcGxlJTIwanVpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
    {name: "Tomato", price: 800, storeItem: ["Tomatoes"], imgUrl: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRvbWF0b2VzJTIwanVpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
    {name: "Passion Fruit", price: 800, storeItem: ["Passion"], imgUrl: "https://images.unsplash.com/photo-1606673993554-a5f993a16e0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBhc3Npb24lMjBqdWljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
    {name: "Tropical Blend", price: 800, storeItem: ["Apple", "Pineapple", "Orange", "Grape", "Passion Fruit"], imgUrl: "https://images.unsplash.com/photo-1483918793747-5adbf82956c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJvcGljYWwlMjBtaXglMjAlMjBqdWljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}
  ]

  data.map((item)=>{
    Juice.create(item)
    .then((juice)=>{
      logger.info(`Juice Menu Items Seeded To The Database: ${JSON.stringify(juice)}`);
    })
    .catch((e)=>{
      throw e;
    });
  });
  res.status(201).json({message: 'Database successfully seeded'});
}

module.exports.getJuiceMenu = (req, res)=>{
  Juice.find({})
  .then((juice)=>{
    res.status(200).json({message: 'Fetch successful', juice});
  })
  .catch((e)=>{
    throw e;
  });
}

module.exports.updateJuiceMenu = (req, res)=>{
  const toId = mongoose.Types.ObjectId;
  const juiceId = toId(req.params.juiceId);
  const { price } = req.body;
  Juice.findOneAndUpdate({_id: juiceId}, { price })
  .then(()=>{
    res.status(200).json({message: 'Update successful'})
  })
  .catch((e)=>{
    throw e;
  });
}

module.exports.deleteJuiceMenu = (req, res)=>{
  const toId = mongoose.Types.ObjectId;
  const juiceId = toId(rq.params.juiceId);
  Juice.findOneAndRemove({_id: juiceId})
  .then((juice)=>{
    res.status(200).json({message: 'Delete successful', juice});
  })
  .catch((e)=>{
    throw e;
  });
}
