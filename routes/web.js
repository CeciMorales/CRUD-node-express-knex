let router = require('express').Router();
let PagesController = require('../controllers/pagesController');


router.get('/', PagesController.homepage);

router.get('/about-us', PagesController.about);

module.exports = router;