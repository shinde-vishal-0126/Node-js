// const Product = require('../models/product');
const Product = require('../models/product1')

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

// exports.postAddProduct = (req, res, next) => {
//   const title = req.body.title;
//   const imageUrl = req.body.imageUrl;
//   const price = req.body.price;
//   const description = req.body.description;
//   const product = new Product(null, title, imageUrl, description, price);
//   product.save().then(()=>{
//     res.redirect('/');
//   }).catch((error)=>{
//     console.log(error)
//   });
// };


exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    req.user.createProduct({
      title: title,
      price: price,
      imageUrl: imageUrl,
      description: description
    })
    .then((result) => {
      console.log('Created new product');
      res.redirect('/');
    })
    .catch((error) => {
      console.log(error);
    });
   
   
  };


 


// exports.getEditProduct = (req, res, next) => {
//   const editMode = req.query.edit;
//   if (!editMode) {
//     return res.redirect('/');
//   }
//   const prodId = req.params.productId;
//   Product.findById(prodId, product => {
//     if (!product) {
//       return res.redirect('/');
//     }
//     res.render('admin/edit-product', {
//       pageTitle: 'Edit Product',
//       path: '/admin/edit-product',
//       editing: editMode,
//       product: product
//     });
//   });
// };


exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  // Product.findByPk(prodId).then((product)=>{
    req.user.getProducts({where:{id:prodId}}).then((products)=>{
      const product = products[0];
      if(!product){
        res.redirect('/')
      }
      res.render('admin/edit-product', {
              pageTitle: 'Edit Product',
              path: '/admin/edit-product',
              editing: editMode,
              product: product
            });
  
    }).catch((error)=>{
      console.log(error)
    });  
};

// exports.postEditProduct = (req, res, next) => {
//   const prodId = req.body.productId;
//   const updatedTitle = req.body.title;
//   const updatedPrice = req.body.price;
//   const updatedImageUrl = req.body.imageUrl;
//   const updatedDesc = req.body.description;
//   const updatedProduct = new Product(
//     prodId,
//     updatedTitle,
//     updatedImageUrl,
//     updatedDesc,
//     updatedPrice
//   );
//   updatedProduct.save();
//   res.redirect('/admin/products');
// };


exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
 Product.findByPk(prodId).then((product)=>{
  product.title = updatedTitle;
  product.price = updatedPrice;
  product.imageUrl = updatedImageUrl;
  product.description = updatedDesc;
 return product.save();
 }).then((result)=>{
  console.log('updated result ', result)
  res.redirect('/admin/products')
 }).catch((error)=>{
  console.log(error)
 })

};

// exports.getProducts = (req, res, next) => {
//   Product.fetchAll(products => {
//     res.render('admin/products', {
//       prods: products,
//       pageTitle: 'Admin Products',
//       path: '/admin/products'
//     });
//   });
// };


exports.getProducts = (req, res, next) => {
  // Product.fetchAll(products => {
  //   res.render('admin/products', {
  //     prods: products,
  //     pageTitle: 'Admin Products',
  //     path: '/admin/products'
  //   });
  // });
  //  Product.findAll().then((result)=>{
    req.user.getProducts().then((products)=>{
      res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products'
      });

}).catch((error)=>{
console.log(error)
});

    
};

// exports.postDeleteProduct = (req, res, next) => {
//   const prodId = req.body.productId;
//   Product.deleteById(prodId);
//   res.redirect('/admin/products');
// };

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findByPk(prodId).then((result)=>{
    return result.destroy();
  }).then((result)=>{
    console.log('destroy successfully');
    res.redirect('/admin/products');
  }).catch((error)=>{
    console.log(error)
  });
 
};
