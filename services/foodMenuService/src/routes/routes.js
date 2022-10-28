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
const { requireAuth } = require('../middleware/auth.middleware')

router.post('/main-course', requireAuth, createMainCourseMenu);
router.get('/main-course', getMainCourseMenu);
router.put('/main-course/:mainCourseId', requireAuth, updateMainCourseMenu);
router.delete('/main-course/:mainCourseId', requireAuth, deleteMainCourseMenu);

router.post('/apperitif', requireAuth, createApperitifMenu);
router.get('/apperitif', getApperitifMenu);
router.put('/apperitif/:apperitifId', requireAuth, updateApperitifMenu);
router.delete('/apperitif/:apperitifId', requireAuth, deleteApperitifMenu);

router.post('/beer', requireAuth, createBeerMenu);
router.get('/beer', getBeerMenu);
router.put('/beer/:beerId', requireAuth, updateBeerMenu);
router.delete('/beer/:beerId', requireAuth, deleteBeerMenu);

router.post('/bourbon', requireAuth, createBourbonMenu);
router.get('/bourbon', getBourbonMenu);
router.put('/bourbon/:bourbonId', requireAuth, updateBourbonMenu);
router.delete('/bourbon/:bourbonId', requireAuth, deleteBourbonMenu);

router.post('/breakfast-bites', requireAuth, createBreakfastBiteMenu);
router.get('/breakfast-bites', getBreakfastBites);
router.put('/breakfast-bites/:breakfastBiteId', requireAuth, updateBreakfastBitesMenu);
router.delete('/breakfast-bites/:breakfastBiteId', requireAuth, deleteBreakfastBitesMenu);

router.post('/champagne', requireAuth, createChampagneMenu);
router.get('/champagne', getChampagneMenu);
router.put('/champagne/:champagneId', requireAuth, updateChampagneMenu);
router.delete('/champagne/:champagneId', requireAuth, deleteChampagneMenu);

router.post('/cider', requireAuth, createCiderMenu);
router.get('/cider', getCiderMenu);
router.put('/cider/:ciderId', requireAuth, updateCiderMenu);
router.delete('/cider/:ciderId', requireAuth, deleteCiderMenu);

router.post('/cognac', requireAuth, createCognacMenu);
router.get('/cognac', getCognacMenu);
router.put('/cognac/:cognacId', requireAuth, updateCognacMenu);
router.delete('/cognac/:cognacId', requireAuth, deleteCognacMenu);

router.post('/gin', requireAuth, createGinMenu);
router.get('/gin', getGinMenu);
router.put('/gin/:ginId', requireAuth, updateGinMenu);
router.delete('/gin/:ginId', requireAuth, deleteGinMenu);

router.post('/hot-beverage', requireAuth, createHotBeverageMenu);
router.get('/hot-beverage', getHotBeverageMenu);
router.put('/hot-beverage/:hotBeverageId', requireAuth, updateHotBeverageMenu);
router.delete('/hot-beverage/:hotBeverageId', requireAuth, deleteHotBeverageMenu);

router.post('/juice', requireAuth, createJuiceMenu);
router.get('/juice', getJuiceMenu);
router.put('/juice/:juiceId', requireAuth, updateJuiceMenu);
router.delete('/juice/:juiceId', requireAuth, deleteJuiceMenu);

router.post('/life-style', requireAuth, createLifeStyleMenu);
router.get('/life-style', getLifeStyleMenu);
router.put('/life-style/:lifeStyleId', requireAuth, updateLifeStyleMenu);
router.delete('/life-style/:lifeStyleId', requireAuth, deleteLifeStyleMenu);

router.post('/mineral-water', requireAuth, createMineralWaterMenu);
router.get('/mineral-water', getMineralWaterMenu);
router.put('/mineral-water/:mineralWaterId', requireAuth, updateMineralWaterMenu);
router.delete('/mineral-water/:mineralWaterId', requireAuth, deleteMineralWaterMenu);

router.post('/premium-bites', requireAuth, createPremiumBitesMenu);
router.get('/premium-bites', getPremiumBitesMenu);
router.put('/premium-bites/:premiumBiteId', requireAuth, updatePremiumBitesMenu);
router.delete('/premium-bites/:premiumBiteId', requireAuth, deletePremiumBitesMenu);

router.post('/red-wine', requireAuth, createRedWineMenu);
router.get('/red-wine', getRedWineMenu);
router.put('/red-wine/:redWineId', requireAuth, updateRedWineMenu);
router.delete('/red-wine/:redWineId', requireAuth, deleteRedWineMenu);

router.post('/white-wine', requireAuth, createWhiteWineMenu);
router.get('/white-wine', getWhiteWineMenu);
router.put('/white-wine/:redWineId', requireAuth, updateWhiteWineMenu);
router.delete('/white-wine/:redWineId', requireAuth, deleteWhiteWineMenu);

router.post('/rum', requireAuth, createRumMenu);
router.get('/rum', getRumMenu);
router.put('/rum/:rumId', requireAuth, updateRumMenu);
router.delete('/rum/:rumId', requireAuth, deleteRumMenu);

module.exports = router;
