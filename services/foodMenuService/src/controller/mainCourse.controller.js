const mongoose = require('mongoose');

const MainCourse = require('../models/mainCourse.model');
const logger = require('../config/winston.config');


module.exports.createMainCourseMenu = (req, res)=>{
    const data = [
      {name: "Beef Fillet Steak 'Café de Paris'", price: 2800, storeItem: ["Butter", "Garlic", "Cloves", "Rosemary", "Thyme", "Oil", "Salt", "Pepper"], imgUrl: "https://images.unsplash.com/photo-1625937329935-287441889bce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVlZiUyMGZpbGxldCUyMHN0ZWFrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" },
      {name: "Chicken Tikka", price: 1700, "storeItem": ["Chicken", "Yoghurt", "Lemon", "Garlic", "Cloves", "Ginger", "Salt", "Ground Cumin", "Garam Masala", "Paprika", "Onions", "Tumeric", ], imgUrl: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2hpY2tlbiUyMHRpa2thfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
      {name: "Tilapia Fish 'Signature Dish'", price: 2100, storeItem: ["Tilapia Fillet", "All-Purpose Flour", "Olive Oil", "Black Pepper", "Butter", "Lemon", "Thyme"], imgUrl: "https://images.unsplash.com/photo-1613626630502-182579c0432c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJpZWQlMjBmaXNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}
    ];
    data.map((item)=>{
      MainCourse.create(item)
      .then((mainCourse)=>{
        logger.info(`Item added successfully to database: ${JSON.stringify(item)}`)
      })
      .catch((e)=>{
        res.status(400).json({message: `Failed creating food menu item: ${e.message}`});
        throw e;
      });
    });
    res.status(201).json({message: `Item added to the database successfully`});
}

module.exports.getMainCourseMenu = (req, res)=>{
  MainCourse.find({})
  .then((mainCourseMeals)=>{
    res.status(200).json({message: 'Fetch successful', mainCourseMeals})
  })
  .catch((e)=>{
    throw e;
  });
}

module.exports.updateMainCourseMenu = (req, res)=>{
  const toId = mongoose.Types.ObjectId;
  const mainCourseId = toId(req.params.mainCourseId);
  const { price } = req.body;
  MainCourse.findOneAndUpdate({_id: mainCourseId}, { price })
  .then(()=>{
    res.status(200).json({message: 'Update successful'});
  })
  .catch((e)=>{
    throw e;
  });
}

module.exports.deleteMainCourseMenu = (req, res)=>{
  const toId = mongoose.Types.ObjectId;
  const mainCourseId = toId(req.params.mainCourseId);
  MainCourse.findOneAndRemove({_id: mainCourseId})
  .then((mainCourse)=>{
    res.status(200).json({message: 'Delete successful', mainCourse});
  })
  .catch((e)=>{
    throw e;
  });
}
