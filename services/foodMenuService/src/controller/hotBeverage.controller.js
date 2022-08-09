const mongoose = require('mongoose');

const HotBeverage = require('../models/hotBeverage.model');
const logger = require('../config/winston.config');

module.exports.createHotBeverageMenu = (req ,res)=>{
  const data = [
    {name: "Espresso", price: 400, storeItem: ["Coffee", "Lemon"], imgUrl: "https://images.unsplash.com/photo-1596952953996-8f85c385e8d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZXhwcmVzc298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
    {name: "Double Espresso", price: 500, storeItem: ["Coffee", "Lemon"], imgUrl: "https://images.unsplash.com/photo-1618207186905-1477bb282b68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGVzcHJlc3NvJTIwY29mZmVlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {name: "Americano", price: 500, storeItem: ["Coffee"], imgUrl: "https://images.unsplash.com/photo-1551030173-122aabc4489c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW1lcmljYW5vfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {name: "Cappuccino", price: 500, storeItem: ["Coffee", "Milk", "Sugar"], imgUrl: "https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FwcHVjY2lub3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
    {name: "Café Latte", price: 500, storeItem: ["Coffee", "Milk", "Sugar"], imgUrl: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhZiVDMyVBOSUyMGxhdHRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {name: "Hot Chocolate", price: 500, storeItem: ["Drinking Chocolate", "Milk", "Sugar"], imgUrl: "https://images.unsplash.com/photo-1607196707151-2db8b71294ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG90JTIwY2hvY29sYXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {name: "Masala Chai", price: 500, storeItem: ["Tea Leaves", "Milk", "Sugar", "Cardamom", "Black Pepper", "Ginger"], imgUrl: "https://images.unsplash.com/photo-1595993240635-e52637dd6d77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFzYWxhJTIwY2hhaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
    {name: "Selection of local teas and infusion", price: 500, storeItem: ["Tea Leaves", "Oranges", "Berries", "Ginger", "Mint Leaves"], imgUrl: "https://images.unsplash.com/38/QoR8Bv1S2SEqH6UcSJCA_Tea.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGluZnVzaW9uJTIwdGVhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}
  ];
  data.map((item)=>{
    HotBeverage.create(item)
    .then((hotBeverage)=>{
      logger.info(`HotBeverage Menu Items Successfully Seeded To The Database: ${JSON.stringify(hotBeverage)}`);
    })
    .catch((e)=>{
      throw e;
    });
  });
  res.status(201).json({message: 'Database successfully seeded'});
}

module.exports.getHotBeverageMenu = (req, res)=>{
  HotBeverage.find({})
  .then((hotBeverage)=>{
    res.status(200).json({message: 'Fetch successful', hotBeverage});
  })
  .catch((e)=>{
    throw e;
  });
}

module.exports.updateHotBeverageMenu = (req, res)=>{
  const toId = mongoose.Types.ObjectId;
  const hotBeverageId = toId(req.params.hotBeverageId);
  const { price } = req.body;
  HotBeverage.findOneAndUpdate({_id: hotBeverageId}, { price })
  .then(()=>{
    res.status(200).json({message: 'Upadte successful'});
  })
  .catch((e)=>{
    throw e;
  });
}

module.exports.deleteHotBeverageMenu = (req, res)=>{
  const toId = mongoose.Types.ObjectId;
  const hotBeverageId = toId(req.params.hotBeverageId);
  HotBeverage.findOneAndRemove({_id: hotBeverageId})
  .then((hotBeverage)=>{
    res.status(200).json({message: 'Delete successful', hotBeverage});
  })
  .catch((e)=>{
    throw e;
  });
}
