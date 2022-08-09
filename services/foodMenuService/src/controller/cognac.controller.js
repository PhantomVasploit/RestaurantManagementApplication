const mongoose = require('mongoose');

const Cognac = require('../models/cognac.model');
const logger = require('../config/winston.config');

module.exports.createCognacMenu = (req, res)=>{
  const data = [
    {name: "Hennessy VSOP", price: 1500, storeItem: ["Hennessy VSOP Bottles"], imgUrl: "https://images.unsplash.com/photo-1602984156862-14b9ee0885c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVubmVzc3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
    {name: "Hennessy XO", price: 4000, storeItem: ["Hennessy Xo"], imgUrl: "https://images.unsplash.com/photo-1644175397093-6a33f10cb7be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aGVubmVzc3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
    {name: "Remy Martin VSOP", price: 1000, storeItem: ["Remy Martin VSOP"], imgUrl: "https://images.unsplash.com/photo-1619451050621-83cb7aada2d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVteSUyMG1hcnRpbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
    {name: "Remy Martin XO", price: 4500, storeItem: ["Remy Martin XO"], imgUrl: "https://images.unsplash.com/photo-1616671293442-ea4255128f78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVteSUyMG1hcnRpbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}
  ];

  data.map((item)=>{
    Cognac.create(item)
    .then((cognac)=>{
      logger.info(`Cognac drinks successful seededto the database: ${JSON.stringify(cognac)}`);
    })
    .catch((e)=>{
      throw e;
    });
  });
  res.status(201).json({message: 'Database successfully seeded'});
}


module.exports.getCognacMenu = (req, res)=>{
  Cognac.find({})
  .then((cognac)=>{
    res.status(200).json({message: 'Fetch successful', cognac});
  })
  .catch((e)=>{
    throw e;
  });
}

module.exports.updateCognacMenu = (req ,res)=>{
  const toId = mongoose.Types.ObjectId;
  const cognacId = toId(req.params.cognacId);
  const { price } = req.body;
  Cognac.findOneAndUpdate({ _id: cognacId }, { price })
  .then(()=>{
    res.status(200).json({message: 'Update successful'});
  })
  .catch((e)=>{
    throw e;
  });
}

module.exports.deleteCognacMenu = (req, res)=>{
  const toId = mongoose.Types.ObjectId;
  const cognacId = toId(req.params.cognacId);
  Cognac.findOneAndRemove({_id: cognacId})
  .then((cognac)=>{
    res.status(200).json({message: 'Delete successful'});
  })
  .catch((e)=>{
    throw e;
  });
}
