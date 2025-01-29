// const Product = require('../models/product');
const product1 = require("../models/product-db");
const Cart = require("../models/cart");
const Product = require("../models/product1");
const { where } = require("sequelize");
const Order = require('../models/order')

// exports.getProducts = (req, res, next) => {
//   Product.fetchAll(products => {
//     res.render('shop/product-list', {
//       prods: products,
//       pageTitle: 'All Products',
//       path: '/products'
//     });
//   });
// };

// exports.getProducts = (req, res, next) => {
//   Product.fetchAll().then(([row, filedData])=>{
//     console.log('row', row);
//     console.log('field-data', filedData)
//     res.render('shop/product-list', {
//             prods: row,
//             pageTitle: 'All Products',
//             path: '/products'
//           });

//   }).catch((error)=>{
//     console.log(error)
//   });
// };

exports.getProducts = (req, res, next) => {
  Product.findAll()
    .then((result) => {
      res.render("shop/product-list", {
        prods: result,
        pageTitle: "All Products",
        path: "/products",
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

// exports.getProduct = (req, res, next) => {
//   const prodId = req.params.productId;
//   Product.findById(prodId, product => {
//     res.render('shop/product-detail', {
//       product: product,
//       pageTitle: product.title,
//       path: '/products'
//     });
//   });
// };

// exports.getProduct = (req, res, next) => {
//   const prodId = req.params.productId;
//   Product.findById(prodId).then(([row, fieldContext])=>{
//     console.log('row data', row)
//     res.render('shop/product-detail', {
//             product: row[0],
//             pageTitle: row.title,
//             path: '/products'
//           })
//   }).catch((error)=>{
//     console.log(error)
//   });;
// };

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;

  // used findAll() with where condition
  Product.findAll({ where: { id: prodId } })
    .then((product) => {
      res.render("shop/product-detail", {
        product: product[0],
        pageTitle: product[0].title,
        path: "/products",
      });
    })
    .catch((error) => {
      console.log(error);
    });

  // Product.findByPk(prodId).then((result)=>{
  //   res.render('shop/product-detail', {
  //           product: result,
  //           pageTitle: result.title,
  //           path: '/products'
  //         })
  // }).catch((error)=>{
  //   console.log(error)
  // });;
};

// exports.getIndex = (req, res, next) => {
//   Product.fetchAll(products => {
//     res.render('shop/index', {
//       prods: products,
//       pageTitle: 'Shop',
//       path: '/'
//     });
//   });
// };

// exports.getIndex = (req, res, next) => {
//   Product.fetchAll().then(([row, filedData])=>{
//     console.log('row', row);
//     console.log('field-data', filedData)
//     res.render('shop/index', {
//             prods: row,
//             pageTitle: 'Shop',
//             path: '/'
//           });

//   }).catch((error)=>{
//     console.log(error)
//   });
// }

exports.getIndex = (req, res, next) => {
  Product.findAll()
    .then((result) => {
      console.log(result);
      res.render("shop/index", {
        prods: result,
        pageTitle: "Shop",
        path: "/",
      });
    })
    .catch((error) => {
      console.log(error);
    });
  // Product.fetchAll().then(([row, filedData])=>{
  //   console.log('row', row);
  //   console.log('field-data', filedData)
  //   res.render('shop/index', {
  //           prods: row,
  //           pageTitle: 'Shop',
  //           path: '/'
  //         });

  // }).catch((error)=>{
  //   console.log(error)
  // });
};

// exports.getCart = (req, res, next) => {
//   Cart.getCart(cart => {
//     Product.fetchAll(products => {
//       const cartProducts = [];
//       for (product of products) {
//         const cartProductData = cart.products.find(
//           prod => prod.id === product.id
//         );
//         if (cartProductData) {
//           cartProducts.push({ productData: product, qty: cartProductData.qty });
//         }
//       }
//       res.render('shop/cart', {
//         path: '/cart',
//         pageTitle: 'Your Cart',
//         products: cartProducts
//       });
//     });
//   });
// };

exports.getCart = (req, res, next) => {
  req.user
    .getCart()
    .then((cart) => {
      return cart
        .getProducts()
        .then((products) => {
          res.render("shop/cart", {
            path: "/cart",
            pageTitle: "Your Cart",
            products: products,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      console.log(error);
    });
};

// exports.postCart = (req, res, next) => {
//   const prodId = req.body.productId;
//   Product.findById(prodId, product => {
//     Cart.addProduct(prodId, product.price);
//   });
//   res.redirect('/cart');
// };

exports.postCart = ((req, res, next)=>{
  const prodId= req.body.productId;
  let fetchCart ;
  let newQuantity = 1;
  req.user.getCart().then((cart)=>{
    fetchCart = cart;
    return cart.getProducts({where:{id:prodId}})
  }).then((products)=>{
    let product;
    if(products.length > 0){
      product = products[0]
    }

    
    if(product){
      const oldQuantity = product.cartItem.quantity;
      newQuantity = oldQuantity + 1;
      return product;
    }
    //   return fetchCart.addProduct(product,{through:{
    //     quantity : newQuantity
    //   }})
    // }
    return Product.findByPk(prodId)
    // .then((product)=>{
    //   return fetchCart.addProduct(product,{through:{quantity:newQuantity}})
    // }).catch((error)=>{
    //   console.log(error)
    }).then((product)=>{
      return fetchCart.addProduct(product,{
        through:{quantity:newQuantity}
      });
    // })
    

  }).then(()=>{
    res.redirect('/cart')
  })
  .catch((error)=>{
    console.log(error)
  })
})

// exports.postCartDeleteProduct = (req, res, next) => {
//   const prodId = req.body.productId;
//   Product.findById(prodId, (product) => {
//     Cart.deleteProduct(prodId, product.price);
//     res.redirect("/cart");
//   });
// };


exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
 req.user.getCart().then((cart)=>{
  return cart.getProducts({where:{id:prodId}
  }).then((products)=>{
    const product = products[0];
   return product.cartItem.destroy();

  }).then((result)=>{
    res.redirect('/cart')
  })
 }).catch((error)=>{
  console.log(error)
 })
};


exports.getOrders = (req, res, next) => {
  req.user.getOrders({include:['products']}).then((order)=>{
    res.render("shop/orders", {
      path: "/orders",
      pageTitle: "Your Orders",
      Orders:order
    });

  }).catch((error)=>{
    console.log(error)
  })
 
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    path: "/checkout",
    pageTitle: "Checkout",
  });
};

exports.postOrder = (req, res, next) => {
  let fetchCart ;
  req.user.getCart()
    .then((cart) => {
      fetchCart = cart;
      return cart.getProducts();
    })
    .then((products) => {
     return req.user.createOrder().then((order)=>{
   return   order.addProduct(products.map((product)=>{
        product.orderItem = {
          quantity: product.cartItem.quantity
        }
        return product
      }))
     }).catch((error)=>{
      console.log(error)
     })
      console.log("products for order", products);
    }).then((result)=>{
    return fetchCart.setProducts(null)
     
    }).then((result)=>{
      res.redirect('/orders')
    })
    .catch((error) => {
      console.log(error);
    });
};

