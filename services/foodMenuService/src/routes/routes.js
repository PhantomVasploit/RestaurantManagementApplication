const express = require('express');

const router = express.Router();
const { createMainCourseMenu, getMainCourseMenu, updateMainCourseMenu, deleteMainCourseMenu } = require('../controller/mainCourse.controller');
const { createApperitifMenu, getApperitifMenu, updateApperitifMenu, deleteApperitifMenu } = require('../controller/apperitif.controller');
const { createBeerMenu, getBeerMenu, updateBeerMenu, deleteBeerMenu } = require('../controller/beer.controller');
const { createBourbonMenu, getBourbonMenu, updateBourbonMenu, deleteBourbonMenu } = require('../controller/bourbon.controller');
const { createBreakfastBiteMenu, getBreakfastBites, updateBreakfastBitesMenu, deleteBreakfastBitesMenu } = require('../controller/breakfastBites.controller');
const { createChampagneMenu, getChampagneMenu, updateChampagneMenu, deleteChampagneMenu } = require('../controller/champagne.controller');
const { createCiderMenu, getCiderMenu, updateCiderMenu, deleteCiderMenu } = require('../controller/cider.controller');
const { createCognacMenu, getCognacMenu, updateCognacMenu, deleteCognacMenu } = require('../controller/cognac.controller');
const { createGinMenu, getGinMenu, updateGinMenu, deleteGinMenu } = require('../controller/gin.controller');
const { createHotBeverageMenu, getHotBeverageMenu, updateHotBeverageMenu, deleteHotBeverageMenu } = require('../controller/hotBeverage.controller');
const { createJuiceMenu, getJuiceMenu, updateJuiceMenu, deleteJuiceMenu } = require('../controller/juice.controller');
const { createLifeStyleMenu, getLifeStyleMenu, updateLifeStyleMenu, deleteLifeStyleMenu } = require('../controller/lifeStyle.controller');
const { createMineralWaterMenu, getMineralWaterMenu, updateMineralWaterMenu, deleteMineralWaterMenu } = require('../controller/mineralWater.controller');
const { createPremiumBitesMenu, getPremiumBitesMenu, updatePremiumBitesMenu, deletePremiumBitesMenu } = require('../controller/premiumBites.controller');
const { createRedWineMenu, getRedWineMenu, updateRedWineMenu, deleteRedWineMenu } = require('../controller/redWine.controller');
const { createWhiteWineMenu, getWhiteWineMenu, updateWhiteWineMenu, deleteWhiteWineMenu } = require('../controller/whiteWine.controller');
const { createRumMenu, getRumMenu, updateRumMenu, deleteRumMenu } = require('../controller/rum.controller');

router.post('/main-course', createMainCourseMenu);
router.get('/main-course', getMainCourseMenu);
router.put('/main-course/:mainCourseId', updateMainCourseMenu);
router.delete('/main-course/:mainCourseId', deleteMainCourseMenu);

router.post('/apperitif', createApperitifMenu);
router.get('/apperitif', getApperitifMenu);
router.put('/apperitif/:apperitifId', updateApperitifMenu);
router.delete('/apperitif/:apperitifId', deleteApperitifMenu);

router.post('/beer', createBeerMenu);
router.get('/beer', getBeerMenu);
router.put('/beer/:beerId', updateBeerMenu);
router.delete('/beer/:beerId', deleteBeerMenu);

router.post('/bourbon', createBourbonMenu);
router.get('/bourbon', getBourbonMenu);
router.put('/bourbon/:bourbonId', updateBourbonMenu);
router.delete('/bourbon/:bourbonId', deleteBourbonMenu);

router.post('/breakfast-bites', createBreakfastBiteMenu);
router.get('/breakfast-bites', getBreakfastBites);
router.put('/breakfast-bites/:breakfastBiteId', updateBreakfastBitesMenu);
router.delete('/breakfast-bites/:breakfastBiteId', deleteBreakfastBitesMenu);

router.post('/champagne', createChampagneMenu);
router.get('/champagne', getChampagneMenu);
router.put('/champagne/:champagneId', updateChampagneMenu);
router.delete('/champagne/:champagneId', deleteChampagneMenu);

router.post('/cider', createCiderMenu);
router.get('/cider', getCiderMenu);
router.put('/cider/:ciderId', updateCiderMenu);
router.delete('/cider/:ciderId', deleteCiderMenu);

router.post('/cognac', createCognacMenu);
router.get('/cognac', getCognacMenu);
router.put('/cognac/:cognacId', updateCognacMenu);
router.delete('/cognac/:cognacId', deleteCognacMenu);

router.post('/gin', createGinMenu);
router.get('/gin', getGinMenu);
router.put('/gin/:ginId', updateGinMenu);
router.delete('/gin/:ginId', deleteGinMenu);

router.post('/hot-beverage', createHotBeverageMenu);
router.get('/hot-beverage', getHotBeverageMenu);
router.put('/hot-beverage/:hotBeverageId', updateHotBeverageMenu);
router.delete('/hot-beverage/:hotBeverageId', deleteHotBeverageMenu);

router.post('/juice', createJuiceMenu);
router.get('/juice', getJuiceMenu);
router.put('/juice/:juiceId', updateJuiceMenu);
router.delete('/juice/:juiceId', deleteJuiceMenu);

router.post('/life-style', createLifeStyleMenu);
router.get('/life-style', getLifeStyleMenu);
router.put('/life-style/:lifeStyleId', updateLifeStyleMenu);
router.delete('/life-style/:lifeStyleId', deleteLifeStyleMenu);

router.post('/mineral-water', createMineralWaterMenu);
router.get('/mineral-water', getMineralWaterMenu);
router.put('/mineral-water/:mineralWaterId', updateMineralWaterMenu);
router.delete('/mineral-water/:mineralWaterId', deleteMineralWaterMenu);

router.post('/premium-bites', createPremiumBitesMenu);
router.get('/premium-bites', getPremiumBitesMenu);
router.put('/premium-bites/:premiumBiteId', updatePremiumBitesMenu);
router.delete('/premium-bites/:premiumBiteId', deletePremiumBitesMenu);

router.post('/red-wine', createRedWineMenu);
router.get('/red-wine', getRedWineMenu);
router.put('/red-wine/:redWineId', updateRedWineMenu);
router.delete('/red-wine/:redWineId', deleteRedWineMenu);

router.post('/white-wine', createWhiteWineMenu);
router.get('/white-wine', getWhiteWineMenu);
router.put('/white-wine/:redWineId', updateWhiteWineMenu);
router.delete('/white-wine/:redWineId', deleteWhiteWineMenu);

router.post('/rum', createRumMenu);
router.get('/rum', getRumMenu);
router.put('/rum/:rumId', updateRumMenu);
router.delete('/rum/:rumId', deleteRumMenu);

module.exports = router;
