
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

exports.single = (req, res) => {
  let id = req.params.id;
  ProductModel.single(id.substring(1))
  .then((data) => {
    let product = data;
    console.log("product to see:", product);
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
    console.log("product to edit:", product);
    res.render('pages/editForm', { product: product });
  })
}

exports.editProduct = (req, res) => {
  console.log(res.body);



}
exports.about = (req, res) => {   
    res.render('pages/aboutUs');
}