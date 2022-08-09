const mongoose = require('mongoose');

const Bourbon = require('../models/bourbon.model');
const logger = require('../config/winston.config');

module.exports.createBourbonMenu = (req, res)=>{
  const data = [
    {name: "Makers Mark", price: 800, storeItem: ["Marker's Mark Bottles"], imgUrl: "https://images.unsplash.com/photo-1615553186013-06b13fe822e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJvdXJib258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
    {name: "Gentleman’s Jack", price: 850, storeItem: ["Gentleman's Jack Bottles"], imgUrl: "https://images.unsplash.com/photo-1583873583364-dcecd8292a3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJvdXJib258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"}
  ];
  data.map((drink)=>{
    Bourbon.create(drink)
    .then((item)=>{
      logger.info(`Bourbon drink added to database: ${JSON.stringify(item)}`)
    })
    .catch((e)=>{
      throw e;
    });
  });
  res.status(201).json({message: `Bourbon drink seeded to database`})
}

module.exports.getBourbonMenu = (req, res)=>{
  Bourbon.find({})
  .then((bourbonDrinks)=>{
    res.status(200).json({message: 'Fetch successful', bourbonDrinks});
  })
  .catch((e)=>{
    throw e;
  });
}

module.exports.updateBourbonMenu = (req, res)=>{
  const toId = mongoose.Types.ObjectId;
  const bourbonId = toId(req.params.bourbonId);
  const { price } = req.body;
  Bourbon.findOneAndUpdate({_id: bourbonId}, { price })
  .then(()=>{
    res.status(200).json({message: 'Update successful'});
  })
  .catch((e)=>{
    throw e;
  });
}


module.exports.deleteBourbonMenu = (req, res)=>{
  const toId = mongoose.Types.ObjectId;
  const bourbonId = toId(req.params.bourbonId);
  Bourbon.findOneAndRemove({_id: bourbonId})
  .then((bourbon)=>{
    res.status(200).json({message: 'Delete successful', bourbon});
  })
  .catch((e)=>{
    throw e;
  });
}
