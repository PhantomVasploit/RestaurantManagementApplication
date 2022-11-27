const mongoose = require('mongoose');

const Rum = require('../models/rum.model');
const logger = require('../config/winston.config');

module.exports.createRumMenu = (req, res)=>{
  const data = [
    {name: "Bacardi Oak Heart", price: 450, storeItem: ["Bacardi Oak Heart Bottles"], imgUrl: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cnVtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {name: "Captain Morgan Spiced", price: 500, storeItem: ["Captain Morgan Spiced Bottles"], imgUrl: "https://images.unsplash.com/photo-1500217052183-bc01eee1a74e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJ1bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
    {name: "Malibu", price: 500, storeItem: ["Malibu Bottles"], imgUrl: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cnVtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}
  ];

  data.map((item)=>{
    Rum.create(item)
    .then((rum)=>{
      logger.info(`Rum Menu Items Seeded To The Database: ${JSON.stringify(rum)}`);
    })
    .catch((e)=>{
      throw e;
    });
  });
  res.status(201).json({message: 'Database successfully seeded'});
}

module.exports.getRumMenu = (req, res)=>{
  Rum.find({})
  .then((rum)=>{
    res.status(200).json({message: 'Fetch successful', rum});
  })
  .catch((e)=>{
    throw e;
  });
}

module.exports.updateRumMenu = (req, res)=>{
  const toId = mongoose.Types.ObjectId;
  const rumId = toId(req.params.rumId);
  const { price } = req.body;
  Rum.findOneAndUpdate({_id: rumId}, { price })
  .then(()=>{
    res.status(200).json({message: 'Update successful'})
  })
  .catch((e)=>{
    throw e;
  });
}

module.exports.deleteRumMenu = (req, res)=>{
  const toId = mongoose.Types.ObjectId;
  const rumId = toId(rq.params.rumId);
  Rum.findOneAndRemove({_id: rumId})
  .then((rum)=>{
    res.status(200).json({message: 'Delete successful', rum});
  })
  .catch((e)=>{
    throw e;
  });
}
