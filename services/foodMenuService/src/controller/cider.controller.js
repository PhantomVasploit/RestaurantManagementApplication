const mongoose = require('mongoose');

const Cider = require('../models/cider.model');
const logger = require('../config/winston.config');

module.exports.createCiderMenu = (req, res)=>{
  const data = [
    {name: "Smirnoff Ice Red", price: 600, storeItem: ["Smirnoff Ice Red Bottles"], imgUrl: "https://images.unsplash.com/photo-1550985543-f47f38aeee65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c21pcm5vZmZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
    {name: "Smirnoff Ice Black", price: 600, storeItem: ["Smirnoff Ice Black"], imgUrl: "https://images.unsplash.com/photo-1550985543-f47f38aeee65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c21pcm5vZmZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
    {name: "Redd’s", price: 600, storeItem: ["Redd's Bottles"], imgUrl: "https://images.unsplash.com/photo-1509459423522-c1b58365f2a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2lkZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {name: "Oettinger Pils", price: 600, storeItem: ["Oettinger Pils Bottles"], imgUrl: "https://images.unsplash.com/photo-1510630093590-b7d7fabbb5ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2lkZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {name: "Oettinger Weissbier", price: 600, storeItem: ["Oettinger Weissbier Bottles"], imgUrl: "https://images.unsplash.com/photo-1515723959262-56195aae7cdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNpZGVyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}
  ];

  data.map((item)=>{
    Cider.create(item)
    then((cider)=>{
      logger.info(`Cider menu items successfully seeded to the database: ${JSON.stringify(cider)}`);
    })
    .catch((e)=>{
      throw e;
    });
  });
  res.status(201).json({message: `Database successfully seeded`});
}


module.exports.getCiderMenu = (req, res)=>{
  Cider.find({})
  .then((cider)=>{
    res.status(200).json({message: 'Fetch successful'});
  })
  .catch((e)=>{
    throw e;
  })
}

module.exports.updateCiderMenu = (req, res)=>{
  const toId = mongoose.Types.ObjectId;
  const ciderId = toId(req.params.ciderId);
  const { price } = req.body;
  Cider.findOneAndUpdate({_id: ciderId}, {price})
  .then(()=>{
    res.status(200).json({message: 'Update successful'})
  })
  .catch((e)=>{
    throw e;
  });
}

module.exports.deleteCiderMenu = (req, res)=>{
  const toId = mongoose.Types.ObjectId;
  const ciderId =  toId(req.params.ciderId);
  Cider.findOneAndRemove({_id: ciderId})
  .then((cider)=>{
    res.status(200).json({message: 'Delete successful', cider});
  })
  .catch((e)=>{
    throw e;
  })
}
