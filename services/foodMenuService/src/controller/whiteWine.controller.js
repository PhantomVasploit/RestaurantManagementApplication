const mongoose = require('mongoose');

const WhiteWine = require('../models/whiteWine.model');
const logger = require('../config/winston.config');

module.exports.createWhiteWineMenu = (req, res)=>{
  const data = [
    {name: "Penfold Koonunga Hill Chardonnay, Australia", priceByGlass: 1000, priceByBottle: 5000, storeItem: ["Penfold Koonunga Hill Chardonnay Bottles"], description: "Golden yellow with aromas of ripe citrus fruits with subtle floralnotes and a touch of vanilla made by the oak barrels. On the palate, the wine has flavors of pear and tropical fruits with hints of vanilla", imgUrl: "https://images.unsplash.com/photo-1597905722448-a1df7c00000a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjB3aW5lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {name: "JP Azeitao White 2016, Portugal", priceByGlass: 900, priceByBottle: 4500, storeItem: ["JP Azeitao White 2016 Bottles"], description: "Presents a citrus colour, very floral and fruity aroma with notes of orange blossom, pineapple and citrus", imgUrl: "https://images.unsplash.com/photo-1606767208159-1a5fb0a87841?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2hpdGUlMjB3aW5lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {name: "Zenato Pinot Grigio, Italy", priceByGlass: 1000, priceByBottle: 5000, storeItem: ["Zenato Pinot Grigio Bottles"], description: "Fresh and modern white from one of Italy’s leading producers of quality Pinot Grigio, with delicatte floral and fruity aromas, hint of stone fruit, crisp on palate", imgUrl: "https://images.unsplash.com/photo-1556395676-1925d260d81b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdoaXRlJTIwd2luZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
    {name: "Matua Valley Sauvignon Blanc, New Zealand", priceByGlass: 1000, priceByBottle: 5000, storeItem: ["Matua Valley Sauvignon Blanc Bottles"], description: "A light to medium-bodied Sauvignon Blanc with distinctive primary fruit characters and a sensitive use of oak", imgUrl: "https://images.unsplash.com/photo-1565895405127-481853366cf8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdoaXRlJTIwd2luZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
    {name: "Rietvallei Chenin Blanc, South Africa", priceByGlass: 1000, priceByBottle: 9500, storeItem: ["Rietvallei Chenin Blanc Bottles"], description: "This is a dry but fruity Chenin Blanc with intense aromas of dried apple, fresh citrus and a touch of oak spice", imgUrl: "https://images.unsplash.com/photo-1632840766469-9897a845c514?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHdoaXRlJTIwd2luZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}
  ];

  data.map((item)=>{
    WhiteWine.create(item)
    .then((whiteWine)=>{
      logger.info(`RedWine Menu Items Seeded To The Database: ${JSON.stringify(whiteWine)}`);
    })
    .catch((e)=>{
      throw e;
    });
  });
  res.status(201).json({message: 'Database successfully seeded'});
}

module.exports.getWhiteWineMenu = (req, res)=>{
  WhiteWine.find({})
  .then((whiteWine)=>{
    res.status(200).json({message: 'Fetch successful', whiteWine});
  })
  .catch((e)=>{
    throw e;
  });
}

module.exports.updateWhiteWineMenu = (req, res)=>{
  const toId = mongoose.Types.ObjectId;
  const whiteWineId = toId(req.params.whiteWineId);
  const { price } = req.body;
  WhiteWine.findOneAndUpdate({_id: whiteWineId}, { price })
  .then(()=>{
    res.status(200).json({message: 'Update successful'})
  })
  .catch((e)=>{
    throw e;
  });
}

module.exports.deleteWhiteWineMenu = (req, res)=>{
  const toId = mongoose.Types.ObjectId;
  const whiteWineId = toId(rq.params.whiteWineId);
  WhiteWine.findOneAndRemove({_id: whiteWineId})
  .then((whiteWine)=>{
    res.status(200).json({message: 'Delete successful', whiteWine});
  })
  .catch((e)=>{
    throw e;
  });
}
