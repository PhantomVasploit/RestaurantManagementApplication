const mongoose = require('mongoose');

const Champagne = require('../models/champagne.model');
const logger = require('../config/winston.config');

module.exports.createChampagneMenu = (req, res)=>{
  const data = [
    {name: "Veuve Clicquot Brut", priceByBottle: 12500, priceByGlass: 2100,  storeItem: ["Veuve Clicquot Brut Bottles"], imgUrl: "https://images.unsplash.com/photo-1630771496884-46ce7c270a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmV1dmUlMjBjbGljcXVvdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
    {name: "Veuve Clicquot Rose", priceByBottle: 13900, priceByGlass: 2400, storeItem: ["Veuve Clicquot Rose Bottles"], imgUrl: "https://images.unsplash.com/photo-1592341687356-7a83335fc8ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHZldXZlJTIwY2xpY3F1b3QlMjBicnV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}
  ];

  data.map((item)=>{
    Champagne.create(item)
    .then((champagne)=>{
      logger.info(`Champagne menu items seeded into the database: ${JSON.stringify(champagne)}`);
    })
    .catch((e)=>{
      throw e;
    });
  });
  res.status(201).json({message: `Database successfully seeded`});
}

module.exports.getChampagneMenu = (req, res)=>{
  Champagne.find({})
  .then((champagne)=>{
    res.status(200).json({message: `Fetch successful`, champagne});
  })
  .catch((e)=>{
    throw e;
  })
}

module.exports.updateChampagneMenu = (req, res)=>{
  const toId = mongoose.Types.ObjectId;
  const champagneId = toId(req.params.champagneId);
  const { priceByGlass, priceByBottle } = req.body;
  Champagne.findOneAndUpdate({_id: champagneId}, { priceByGlass, priceByBottle })
  .then(()=>{
    res.status(200).json({message: 'Update successful'});
  })
  .catch((e)=>{
    throw e;
  });
}

module.exports.deleteChampagneMenu = (req, res)=>{
  const toId = mongoose.Types.ObjectId;
  const champagneId = toId(req.params.champagneId);
  Champagne.findOneAndRemove({_id: champagneId})
  .then((champagne)=>{
    res.status(200).json({message: 'Delete successful', champagne});
  })
  .catch((e)=>{
    throw e;
  });
}
