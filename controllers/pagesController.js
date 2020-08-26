
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
  let id = req.params.id;
  console.log("edit product", id);
  let product = req.body;
  console.log('product todo', product);

  ProductModel.edit(id.substring(1), product)
  .then(() => {
    console.log('todo chido?');
    res.redirect('/');
  }) 
}

exports.addForm = (req, res) => {
  res.render('pages/addForm');

}

exports.addProduct = (req, res) => {
  let product = req.body;
  console.log("new product", product);
  ProductModel.add(product)
  .then(() => {
    console.log("Se agregó bien?");
    res.redirect('/');
  })
}

exports.deleteProduct = (req, res) => {
  let id = req.params.id;
  console.log("a eliminar ", id);
}


exports.about = (req, res) => {   
    res.render('pages/aboutUs');
}