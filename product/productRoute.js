const productController = require("./productController");
module.exports = [
  {
    method: "GET",
    path: "/product/{supplierId}/{productId?}",
    handler: productController.getProduct
  },
  {
    method: "POST",
    path: "/product/{supplierId}",
    handler: productController.addProduct
  },
  {
    method: "PUT",
    path: "/product/{productId}",
    handler: productController.editProduct
  },
  {
    method: "DELETE",
    path: "/product/{productId}",
    handler: productController.deleteProduct
  }
];
