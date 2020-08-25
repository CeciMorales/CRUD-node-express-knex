let appConfig = require('../configs/app');
const knexfile = require('../knexfile');

const knex = require('knex')(knexfile.development);

module.exports = knex;


/*
migations
export.up = function(knex) {
    return knex.schema
        .createTable('products', (table) => {
            table.increments('id');
            table.string('name, 255').notNullable();
            table.string('description', 512). notNullable();

        });

        exports.down = function(knex) {
            return knex.schema
                .dropTable('products');
        }
}

*/

/*
//seeds
exports.seed = function(knex) {
    // Deletes all existing entries
    return knex('products').del()
        .then(function () {
            {id: 1, name: 'Balón de futbol', description: 'un buen equipo', price: 222}
        });
    });
};
*/