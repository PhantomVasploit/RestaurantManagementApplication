const mongoose = require('mongoose');

const Gin = require('../models/gin.model');
const logger = require('../config/winston.config');

module.exports.createGinMenu = (req, res)=>{
  const data = [
    {name: "Bombay Sapphire", price: 550, storeItem: ["Bombay Sapphire Bottles"], imgUrl: "https://images.unsplash.com/photo-1520935443738-cdd39913a9e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9tYmF5JTIwc2FwcGhpcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
    {name: "Tanqueray", price: 650, storeItem: ["Tanqueray Bottles"], imgUrl: "https://images.unsplash.com/photo-1633219663580-47cd03228ec7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGFucXVlcmF5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {name: "Hendrick’s", price: 1000, storeItem: ["Hendrick's Bottles"], imgUrl: "https://images.unsplash.com/photo-1607190345101-031b3e4080fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhlbmRyaWNrJUUyJTgwJTk5c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}
  ]

  data.map((item)=>{
    Gin.create(item)
    .then((gin)=>{
      logger.info(`Gin Menu Items Seeded To The Database: ${JSON.stringify(gin)}`);
    })
    .catch((e)=>{
      throw e;
    });
  });
  res.status(201).json({message: 'Database successfully seeded'});
}

module.exports.getGinMenu = (req, res)=>{
  Gin.find({})
  .then((gin)=>{
    res.status(200).json({message: 'Fetch successful', gin});
  })
  .catch((e)=>{
    throw e;
  });
}

module.exports.updateGinMenu = (req, res)=>{
  const toId = mongoose.Types.ObjectId;
  const ginId = toId(req.params.ginId);
  const { price } = req.body;
  Gin.findOneAndUpdate({_id: ginId}, { price })
  .then(()=>{
    res.status(200).json({message: 'Update successful'})
  })
  .catch((e)=>{
    throw e;
  });
}

module.exports.deleteGinMenu = (req, res)=>{
  const toId = mongoose.Types.ObjectId;
  const ginId = toId(rq.params.ginId);
  Gin.findOneAndRemove({_id: ginId})
  .then((gin)=>{
    res.status(200).json({message: 'Delete successful', gin});
  })
  .catch((e)=>{
    throw e;
  });
}
