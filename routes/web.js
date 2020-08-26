
let bodyParser = require('body-parser');
let router = require('express').Router();
let PagesController = require('../controllers/pagesController');

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', PagesController.homepage);

router.get('/about-us', PagesController.about);

router.get('/showProduct/:id', PagesController.showProduct);

router.get('/editForm/:id', PagesController.editForm);

// para usar body dentro de request
router.post('/editProduct/:id', urlencodedParser, PagesController.editProduct);

router.get('/addForm', PagesController.addForm);

router.post('/addProduct', urlencodedParser, PagesController.addProduct);

router.get('/deleteProduct/:id', PagesController.deleteProduct);

module.exports = router;