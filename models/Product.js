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

exports.edit = (id, product) => {
  return knex('products')
    .update(product)
    .update({name: product.name, 
            description: product.description, 
            price: product.price})
    .where('id', id);

}

exports.add = (product) => {
  return knex('products').
  insert({ name: product.name, 
          description: product.description, 
          price: product.price });
}

exports.delete = (id) => {
  return knex('products')
  .delete()
  .where('id', id);

}