let express = require('express');
let app = express();

let webroutes = require('./routes/web');

let appConfigs = require('./configs/app');

app.use('/', webroutes);

// configurar handlebars
let exphbs = require('express-handlebars');
const extNameHbs = 'hbs';
let hbs = exphbs.create({extname: extNameHbs});
app.engine(extNameHbs, hbs.engine);
app.set('view engine', extNameHbs);

app.listen(appConfigs.express_port, function () {
    console.log('The app is running on port ' + appConfigs.express_port)
});