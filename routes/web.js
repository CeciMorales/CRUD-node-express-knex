let router = require('express').Router();
let PagesController = require('../controllers/pagesController');


router.get('/', PagesController.homepage);

router.get('/about-us', PagesController.about);

router.get('/single', PagesController.single);

module.exports = router;