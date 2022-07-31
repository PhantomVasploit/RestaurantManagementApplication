const express = require('express');

const router = express.Router();
const { createMainCourseMenu, getMainCourseMenu } = require('../controller/mainCourse.controller');
const { createApperitifMenu, getApperitifMenu } = require('../controller/apperitif.controller');

router.post('/main-course', createMainCourseMenu);
router.get('/main-course', getMainCourseMenu);

router.post('/apperitif', createApperitifMenu);
router.get('/apperitif', getApperitifMenu);

module.exports = router;
