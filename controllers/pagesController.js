
// exporta funciones de homepage y about

// controllers/PagesController.js
// Importa el modelo de productos
let ProductModel = require('../models/Product')

// Reglas para la respuesta para la petición "/"
exports.homepage = (req, res) => {
  // Nota que la consulta a los productos utiliza "promesas"
  // conoce más en: 
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise
  ProductModel.all()
    .then((data) => {
      // Guardamos los productos en una variable
      let products = data;
      // Enviamos los datos a la vista
      res.render('pages/homepage', { products: products });
    });
}

exports.showProduct = (req, res) => {
  let id = req.params.id;
  ProductModel.single(id.substring(1))
  .then((data) => {
    let product = data;
    res.render('pages/checkProduct', { product: product });
  })
  .catch(function(e){
    console.log(e);
  })
}

exports.editForm = (req, res) => {  
  let id = req.params.id;
  ProductModel.single(id.substring(1))
  .then((data) => {
    let product = data;
    res.render('pages/editForm', { product: product });
  })
}

exports.editProduct = (req, res) => {
  let id = req.params.id;
  let product = req.body;

  ProductModel.edit(id.substring(1), product)
  .then(() => {
    res.redirect('/');
  }) 
}

exports.addForm = (req, res) => {
  res.render('pages/addForm');
}

exports.addProduct = (req, res) => {
  let product = req.body;
  ProductModel.add(product)
  .then(() => {
    res.redirect('/');
  })
}

exports.deleteProduct = (req, res) => {
  let id = req.params.id;
  ProductModel.delete(id.substring(1))
  .then(() => {
    res.redirect('/');
  })
}

exports.about = (req, res) => {   
    res.render('pages/aboutUs');
}