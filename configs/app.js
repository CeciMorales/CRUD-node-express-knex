// mandar a llamar variables de ambiente

const dotenv = require('dotenv');

// cargar archivo que corresponde
dotenv.config();


// crear objeto de configuraciones
// lo lo que tiene en node env y express port y lo guarda en variables
const appConfig = {
    env: process.env.NODE_ENV,
    express_port: process.env.EXPRESS_PORT
}

module.exports = appConfig;