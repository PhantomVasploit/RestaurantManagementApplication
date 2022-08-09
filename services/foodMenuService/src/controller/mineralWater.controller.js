const mongoose = require('mongoose');

const MineralWater = require('../models/mineralWater.model');
const logger = require('../config/winston.config');

module.exports.createMineralWaterMenu = (req, res)=>{
  const data = [
    {name: "Aquamist Still Classic 375 ml", price: 500, storeItem: ["Aquamist Still Classic 375 ml Bottles"]},
    {name: "Aquamist Still Classic 750 ml", price: 700, storeItem: ["Aquamist Still Classic 750 ml Bottles"]},
    {name: "Aquamist Sparkling Classic 375 ml", price: 500, storeItem: ["Aquamist Sparkling Classic 375 ml Bottles"]},
    {name: "Aquamist Sparkling Classic 750 ml", price: 700, storeItem: ["Aquamist Sparkling Classic 750 ml Bottles"]},
    {name: "San Pellegrino 750 ml", price: 900, storeItem: ["San Pellegrino 750 ml Bottles"]},
    {name: "Mayers Still Small", price: 500, storeItem: ["Mayers Still Small Bottles"]},
    {name: "Mayers Still Large", price: 700, storeItem: ["Mayers Still Large Bottles"]},
    {name: "Mayers Sparkling Small", price: 500, storeItem: ["Mayers Sparkling Small Bottles"]},
    {name: "Mayers Sparkling Large", price: 700, storeItem: ["Mayers Sparkling Large Bottles"]}
  ];

  data.map((item)=>{
    MineralWater.create(item)
    .then((mineralWater)=>{
      logger.info(`Mineral Water Menu Items Seeded To The Database: ${JSON.stringify(mineralWater)}`);
    })
    .catch((e)=>{
      throw e;
    });
  });
  res.status(201).json({message: 'Database successfully seeded'});
}

module.exports.getMineralWaterMenu = (req, res)=>{
  MineralWater.find({})
  .then((mineralWater)=>{
    res.status(200).json({message: 'Fetch successful', mineralWater});
  })
  .catch((e)=>{
    throw e;
  });
}

module.exports.updateMineralWaterMenu = (req, res)=>{
  const toId = mongoose.Types.ObjectId;
  const mineralWaterId = toId(req.params.mineralWaterId);
  const { price } = req.body;
  MineralWater.findOneAndUpdate({_id: mineralWaterId}, { price })
  .then(()=>{
    res.status(200).json({message: 'Update successful'})
  })
  .catch((e)=>{
    throw e;
  });
}

module.exports.deleteMineralWaterMenu = (req, res)=>{
  const toId = mongoose.Types.ObjectId;
  const mineralWaterId = toId(rq.params.mineralWaterId);
  MineralWater.findOneAndRemove({_id: mineralWaterId})
  .then((mineralWater)=>{
    res.status(200).json({message: 'Delete successful', mineralWater});
  })
  .catch((e)=>{
    throw e;
  });
}
