let router = require('express').Router();
let PagesController = require('../controllers/pagesController');


router.get('/', PagesController.homepage);

router.get('/about-us', PagesController.about);

router.get('/single/:id', PagesController.single);

router.get('/editForm/:id', PagesController.editForm);

router.post('/editProduct', PagesController.editProduct);

module.exports = router;