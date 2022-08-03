const express = require('express');

const router = express.Router();
const { createMainCourseMenu, getMainCourseMenu } = require('../controller/mainCourse.controller');
const { createApperitifMenu, getApperitifMenu } = require('../controller/apperitif.controller');
const { createBeerMenu, getBeerMenu } = require('../controller/beer.controller');
const { createBourbonMenu, getBourbonMenu } = require('../controller/bourbon.controller');
const { createBreakfastBiteMenu, getBreakfastBites } = require('../controller/breakfastBites.controller');

router.post('/main-course', createMainCourseMenu);
router.get('/main-course', getMainCourseMenu);

router.post('/apperitif', createApperitifMenu);
router.get('/apperitif', getApperitifMenu);

router.post('/beer', createBeerMenu);
router.get('/beer', getBeerMenu);

router.post('/bourbon', createBourbonMenu);
router.get('/bourbon', getBourbonMenu);

router.post('/breakfast-bites', createBreakfastBiteMenu);
router.get('/breakfast-bites', getBreakfastBites);

module.exports = router;
