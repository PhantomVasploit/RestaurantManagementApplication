const mongoose = require('mongoose')
const Stock = require('../models/stock.model')
const StockQuantityAndDate = require('../models/stock.quantity.model')

const toId = mongoose.Types.ObjectId

module.exports.seedStock = (req, res)=>{
    const data = [
        {itemName: 'Martini Rosso Bottles', itemPrice: 150, quantityPurchased: 0},
        {itemName: 'Martini Bianco Bottles', itemPrice: 150, quantityPurchased: 0},
        {itemName: 'Martini Extra Dry Bottles', itemPrice: 150, quantityPurchased: 0},
        {itemName: 'Milano Rosso Bottles', itemPrice: 150, quantityPurchased: 0},
        {itemName: 'Milano Bianco Bottles', itemPrice: 150, quantityPurchased: 0},
        {itemName: 'Milano Extra Dry Bottles', itemPrice: 150, quantityPurchased: 0},
        {itemName: 'Campari Bottles', itemPrice: 150, quantityPurchased: 0},
        {itemName: 'Pernod Bottles', itemPrice: 200, quantityPurchased: 0},
        {itemName: 'Ricard Bottle', itemPrice: 200, quantityPurchased: 0},
        {itemName: 'Pims No.1 Bottles', itemPrice: 200, quantityPurchased: 0},
        {itemName: 'Tusker Lager Bottles', itemPrice: 300, quantityPurchased: 0},
        {itemName: 'Tusker Malt Bottles', itemPrice: 300, quantityPurchased: 0},
        {itemName: 'Tusker Lite Bottles', itemPrice: 300, quantityPurchased: 0},
        {itemName: 'White Cap Lager Bottles', itemPrice: 300, quantityPurchased: 0},
        {itemName: 'White Cap Light Bottles', itemPrice: 300, quantityPurchased: 0},
        {itemName: 'Guinness Bottles', itemPrice: 400, quantityPurchased: 0},
        {itemName: 'Heineken Bottles', itemPrice: 400, quantityPurchased: 0},
        {itemName: "Marker's Mark Bottles", itemPrice: 750, quantityPurchased: 0},
        {itemName: "Gentleman's Jack Bottles", itemPrice: 750, quantityPurchased: 0},
        {itemName: 'Oats', itemPrice: 700, quantityPurchased: 0},
        {itemName: 'Wheat Germ', itemPrice: 960, quantityPurchased: 0},
        {itemName: 'Almonds', itemPrice: 2180, quantityPurchased: 0},
        {itemName: 'Sunflower Seed', itemPrice: 55, quantityPurchased: 0},
        {itemName: 'Cranberries', itemPrice: 2500, quantityPurchased: 0},
        {itemName: 'Dates', itemPrice: 125, quantityPurchased: 0},
        {itemName: 'Eggs', itemPrice: 360, quantityPurchased: 0},
        {itemName: 'Milk', itemPrice: 160, quantityPurchased: 0},
        {itemName: 'Wheat Flour', itemPrice: 200, quantityPurchased: 0},
        {itemName: 'Butter', itemPrice: 470, quantityPurchased: 0},
        {itemName: 'Salt', itemPrice: 32, quantityPurchased: 0},
        {itemName: 'Baking Powder', itemPrice: 35, quantityPurchased: 0},
        {itemName: 'Sugar', itemPrice: 115, quantityPurchased: 0},
        {itemName: 'Beef', itemPrice: 850, quantityPurchased: 0},
        {itemName: 'Onion', itemPrice: 90, quantityPurchased: 0},
        {itemName: 'Cheddar Cheese', itemPrice: 4100, quantityPurchased: 0},
        {itemName: 'Spinach', itemPrice: 40, quantityPurchased: 0},
        {itemName: 'Bread', itemPrice: 300, quantityPurchased: 0},
        {itemName: 'Ham', itemPrice: 250, quantityPurchased: 0},
        {itemName: 'Pork Sausages', itemPrice: 670, quantityPurchased: 0},
        {itemName: 'Beans', itemPrice: 260, quantityPurchased: 0},
        {itemName: 'Mushrooms', itemPrice: 610, quantityPurchased: 0},
        {itemName: 'Tomatoes', itemPrice: 10000, quantityPurchased: 0},
        {itemName: 'Potatoes', itemPrice: 40, quantityPurchased: 0},
        {itemName: 'Veuve Clicquot Brut Bottles', itemPrice: 1800, quantityPurchased: 0},
        {itemName: 'Smirnoff Ice Red Bottles', itemPrice: 350, quantityPurchased: 0},
        {itemName: 'Smirnoff Ice Black', itemPrice: 350, quantityPurchased: 0},
        {itemName: "Redd's Bottles", itemPrice: 350, quantityPurchased: 0},
        {itemName: 'Oettinger Pils Bottles', itemPrice: 350, quantityPurchased: 0},
        {itemName: 'Oettinger Weissbier Bottles', itemPrice: 350, quantityPurchased: 0},
        {itemName: 'Veuve Clicquot Rose Bottles', itemPrice: 2100, quantityPurchased: 0},
        {itemName: 'Hennessy VSOP Bottles', itemPrice: 1300, quantityPurchased: 0},
        {itemName: 'Hennessy Xo', itemPrice: 3800, quantityPurchased: 0},
        {itemName: 'Remy Martin VSOP', itemPrice: 850, quantityPurchased: 0},
        {itemName: 'Remy Martin XO', itemPrice: 4300, quantityPurchased: 0},
        {itemName: 'Bombay Sapphire Bottles', itemPrice: 350, quantityPurchased: 0},
        {itemName: 'Tanqueray Bottles', itemPrice: 450, quantityPurchased: 0},
        {itemName: "Hendrick's Bottles", itemPrice: 800, quantityPurchased: 0},
        {itemName: "Coffee", itemPrice: 250, quantityPurchased: 0},
        {itemName: "Lemon", itemPrice: 275, quantityPurchased: 0},
        {itemName: "Drinking Chocolate", itemPrice: 180, quantityPurchased: 0},
        {itemName: "Tea Leaves", itemPrice: 55, quantityPurchased: 0},
        {itemName: "Cardamom", itemPrice: 500, quantityPurchased: 0},
        {itemName: "Black Pepper", itemPrice: 210, quantityPurchased: 0},
        {itemName: "Ginger", itemPrice: 520, quantityPurchased: 0},
        {itemName: "Oranges", itemPrice: 85, quantityPurchased: 0},
        {itemName: "Berries", itemPrice: 300, quantityPurchased: 0},
        {itemName: "Mint Leaves", itemPrice: 20, quantityPurchased: 0},
        {itemName: "Mangoes", itemPrice: 125, quantityPurchased: 0},
        {itemName: "Pineapple", itemPrice: 220, quantityPurchased: 0},
        {itemName: "Passion", itemPrice: 120, quantityPurchased: 0},
        {itemName: "Apples", itemPrice: 90, quantityPurchased: 0},
        {itemName: "Grapes", itemPrice: 400, quantityPurchased: 0},
        {itemName: "Bacon", itemPrice: 840, quantityPurchased: 0},
        {itemName: "Swiss Cheese", itemPrice: 510, quantityPurchased: 0},
        {itemName: "Feta", itemPrice: 410, quantityPurchased: 0},
        {itemName: "Cucumber", itemPrice: 720, quantityPurchased: 0},
        {itemName: "Olive", itemPrice: 250, quantityPurchased: 0},
        {itemName: "Olive Oil", itemPrice: 400, quantityPurchased: 0},
        {itemName: "Bell Pepper", itemPrice: 260, quantityPurchased: 0},
        {itemName: "Oregano", itemPrice: 720, quantityPurchased: 0},
        {itemName: "Kalamata Olive", itemPrice: 2520, quantityPurchased: 0},
        {itemName: "Red Onion", itemPrice: 1040, quantityPurchased: 0},
        {itemName: "Red Wine Vinegar", itemPrice: 325, quantityPurchased: 0},
        {itemName: "Deli Pepperoni", itemPrice: 2520, quantityPurchased: 0},
        {itemName: "Green Beans", itemPrice: 300, quantityPurchased: 0},
        {itemName: "Thyme Leaves", itemPrice: 80, quantityPurchased: 0},
        {itemName: "Red Pepper", itemPrice: 400, quantityPurchased: 0},
        {itemName: "Garlic", itemPrice: 300, quantityPurchased: 0},
        {itemName: "Chickpeas", itemPrice: 250, quantityPurchased: 0},
        {itemName: "Parsley", itemPrice: 85, quantityPurchased: 0},
        {itemName: "Peanut Oil", itemPrice: 1060, quantityPurchased: 0},
        {itemName: "Celery", itemPrice: 150, quantityPurchased: 0},
        {itemName: "Salmon Fillet", itemPrice: 430, quantityPurchased: 0},
        {itemName: "Kosher Salt", itemPrice: 360, quantityPurchased: 0},
        {itemName: "Chicken", itemPrice: 1000, quantityPurchased: 0},
        {itemName: "Peppercorn", itemPrice: 300, quantityPurchased: 0},
        {itemName: "Garam Masala", itemPrice: 570, quantityPurchased: 0},
        {itemName: "Yellow Onion", itemPrice: 150, quantityPurchased: 0},
        {itemName: "Tumeric", itemPrice: 360, quantityPurchased: 0},
        {itemName: "Red Lentils", itemPrice: 370, quantityPurchased: 0},
        {itemName: "Coconut", itemPrice: 119, quantityPurchased: 0},
        {itemName: "Cloves", itemPrice: 195, quantityPurchased: 0},
        {itemName: "Rosemary", itemPrice: 900, quantityPurchased: 0},
        {itemName: "Thyme", itemPrice: 80, quantityPurchased: 0},
        {itemName: "Oil", itemPrice: 370, quantityPurchased: 0},
        {itemName: "Yoghurt", itemPrice: 235, quantityPurchased: 0},
        {itemName: "Ground Cumin", itemPrice: 225, quantityPurchased: 0},
        {itemName: "Paprika", itemPrice: 80, quantityPurchased: 0},
        {itemName: "Tilapia Fillet", itemPrice: 250, quantityPurchased: 0},
        {itemName: "All-Purpose Flour", itemPrice: 200, quantityPurchased: 0},
        {itemName: "Pork Mince", itemPrice: 500, quantityPurchased: 0},
        {itemName: "Carrots", itemPrice: 70, quantityPurchased: 0},
        {itemName: "Cabbage", itemPrice: 100, quantityPurchased: 0},
        {itemName: "Cornflour", itemPrice: 100, quantityPurchased: 0},
        {itemName: "Oyster Sauce", itemPrice: 230, quantityPurchased: 0},
        {itemName: "Soy Sauce", itemPrice: 150, quantityPurchased: 0},
        {itemName: "Wheat Flour", itemPrice: 188, quantityPurchased: 0},
        {itemName: "Hummus", itemPrice: 445, quantityPurchased: 0},
        {itemName: "Edamame", itemPrice: 1200, quantityPurchased: 0},
        {itemName: "Avocados", itemPrice: 480, quantityPurchased: 0},
        {itemName: "Bay leaf", itemPrice: 80, quantityPurchased: 0},
        {itemName: "Eschallots", itemPrice: 360, quantityPurchased: 0},
        {itemName: "Brioche Slider Buns", itemPrice: 240, quantityPurchased: 0},
        {itemName: "Cornichons", itemPrice: 13389, quantityPurchased: 0},
        {itemName: "Rocket Leaves", itemPrice: 9900, quantityPurchased: 0},
        {itemName: "Cayenne Pepper", itemPrice: 664, quantityPurchased: 0},
        {itemName: "Jalapeño", itemPrice: 350, quantityPurchased: 0},
        {itemName: "Coriander", itemPrice: 20, quantityPurchased: 0},
        {itemName: "Scallions", itemPrice: 250, quantityPurchased: 0},
        {itemName: "Peas", itemPrice: 500, quantityPurchased: 0},
        {itemName: "Cilantro", itemPrice: 20, quantityPurchased: 0},
        {itemName: "Parmesan Shavings", itemPrice: 450, quantityPurchased: 0},
        {itemName: "Cavit Principato Pinot Noir Bottles", itemPrice: 650, quantityPurchased: 0},
        {itemName: "JP Azeitao Red 2016 Bottles", itemPrice: 700, quantityPurchased: 0},
        {itemName: "Zenato Valpolicella, Italy Bottles", itemPrice: 800, quantityPurchased: 0},
        {itemName: "Kanonkop Kadette Pinotage, South Africa Bottles", itemPrice: 800, quantityPurchased: 0},
        {itemName: "Penfold Koonunga Hill Shiraz-Carbernet Australia Bottles", itemPrice: 800, quantityPurchased: 0},
        {itemName: "Bacardi Oak Heart Bottles", itemPrice: 250, quantityPurchased: 0},
        {itemName: "Captain Morgan Spiced Bottles", itemPrice: 300, quantityPurchased: 0},
        {itemName: "Malibu Bottles", itemPrice: 300, quantityPurchased: 0},
        {itemName: "Penfold Koonunga Hill Chardonnay Bottles", itemPrice: 850, quantityPurchased: 0},
        {itemName: "JP Azeitao White 2016 Bottles", itemPrice: 750, quantityPurchased: 0},
        {itemName: "Zenato Pinot Grigio Bottles", itemPrice: 850, quantityPurchased: 0},
        {itemName: "Matua Valley Sauvignon Blanc Bottles", itemPrice: 850, quantityPurchased: 0},
        {itemName: "Rietvallei Chenin Blanc Bottles", itemPrice: 850, quantityPurchased: 0},
    ]

    data.map((item)=>{
        Stock.create(item)
        .then((stock)=>{
            StockQuantityAndDate.create({itemName: item.itemName, quantityPurchased: item.quantityPurchased, itemPrice: item.itemPrice})
            .then(()=>{})
            .catch((e)=>{
                throw e
            })
        })
        .catch((e)=>{
            throw e
        })
    })
    res.status(200).json({message: 'Database seeded successfully'})
}

module.exports.getAllStock = (req, res)=>{
    Stock.find({})
    .then((stock)=>{
        res.status(200).json({message: 'Fetch successful', stock})
    })
    .catch((e)=>{
        throw e
    })
}

module.exports.getStock = (req, res)=>{
    const stockId = toId(req.params.stockId)
    Stock.findById(stockId)
    .then((stock)=>{
        res.status(200).json({message:'Fetch successful', stock})
    })
    .catch((e)=>{
        throw e
    })
}

module.exports.getStockAndDate = (req, res)=>{
    const itemName = req.params.itemName
    StockQuantityAndDate.find({itemName})
    .then((stock)=>{
        res.status(200).json({message: 'Fetch successful', stock})
    })
    .catch((e)=>{
        throw e
    })
}

module.exports.addQuantityPurchased = (req, res)=>{
    const data = req.body.body
    const { itemName } = req.body.body
    StockQuantityAndDate.create({...data})
    .then((stock)=>{
        res.status(200).json({message: 'Stock purcahse added'})
        Stock.findOneAndUpdate({itemName}, {$inc: {'quantityPurchased': data.quantityPurchased}})
        .then(()=>{})
        .catch((e)=>{
            throw e
        })
        
    })
    .catch((e)=>{
        throw e
    })
}

module.exports.updateStock = (req, res)=>{
    const stockId = toId(req.params.stockId)
    const data = req.body
    Stock.findOneAndUpdate({_id: stockId}, {...data})
    .then((stock)=>{
        res.status(200).json({message: 'Stock updated successfully'})
    })
    .catch((e)=>{
        throw e
    })
}

module.exports.deleteStock = (req, res)=>{
    const stockId = toId(req.params.stockId)
    Stock.findByIdAndDelete({_id: stockId})
    .then((stock)=>{
        res.status(200).json({message: 'Stock item deleted'})
    })
    .catch((e)=>{
        throw e
    })
}