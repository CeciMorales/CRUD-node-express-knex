let express = require('express');

let bodyParser = require('body-parser');
let app = express();



let webroutes = require('./routes/web');

let appConfigs = require('./configs/app');



app.use('/', webroutes);
//Parsear el body usando body parser
//app.use(bodyParser.json()); // body en formato json
app.use(bodyParser.urlencoded({ extended: true })); //body formulario


// configurar handlebars
let exphbs = require('express-handlebars');
const extNameHbs = 'hbs';
let hbs = exphbs.create({extname: extNameHbs});
app.engine(extNameHbs, hbs.engine);
app.set('view engine', extNameHbs);

app.listen(appConfigs.express_port, function () {
    console.log('The app is running on port ' + appConfigs.express_port)
});