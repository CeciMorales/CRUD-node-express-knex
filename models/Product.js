// models/Product.js
// Obtiene la conexión con la base de datos
const knex = require('../database/connection');

// Crea un nuevo Producto (pero no lo almacena en la base)
exports.factory = (name, description, price) => {
  return {
    name: name,
    description: description,
    price: price
  }
}

// Obtiene todos los productos en la base
exports.all = () => {
  // Realiza la consulta dentro de knex
  return knex
    .select('*')
    .from('products');
}

// Obtiene un solo producto
exports.single = (id) => {
  // consulta
  return knex
    .select('*')
    .from('products')
    .where('id', id);
}

exports.editForm = () =>  {
  return knex
  .select('*')
  .from('products')
  .where('id', '1');
}
