const productModel = require("./productModel");

const addProduct = async (request, h) => {
  let productSent = request.payload.product,
    requiredFields = [
      "supplierId",
      "productName",
      "itemQty",
      "unitPrice",
      "uom",
      "packUom",
      "packSize",
      "totalPrice",
      "dateField",
      "comment"
    ];
  // deleteing unneccesary prop
 
  if (productSent) { 
      delete productSent._id;
    // get the product from request body
    requiredFields = requiredFields.filter(function(elem) {
      if (!productSent.hasOwnProperty(elem)) {
        return elem;
      }
    });
    // check if some field is missing or not
    if (requiredFields.length)
      return {
        message:
          "Some of product details is not sent " + requiredFields.join(" "),
        type: "FAILED"
      };
    let res = await productModel.addProductModel(productSent);
    return res
      ? {
          message: "Product successfully uploaded!",
          type: "SUCCESSFUL"
        }
      : {
          message: "Something went wrong!",
          type: "FAILED"
        };
  } else {
    return {
      message: "Product data is not sent!",
      type: "FAILED"
    };
  }
};
// @controller edits the product
const editProduct = async (request, h) => {
  let productSent = request.payload.product,
    requiredFields = [
      "_id",
      "productName",
      "itemQty",
      "unitPrice",
      "uom",
      "packUom",
      "packSize",
      "totalPrice",
      "dateField",
      "comment",
      "harmfulProd"
    ];

  if (productSent) {
    // get the product from request body
    requiredFields = requiredFields.filter(function(elem) {
      if (!productSent.hasOwnProperty(elem)) {
        return elem;
      }
    });

    // check if some field is missing or not
    if (requiredFields.length)
      return {
        message:
          "Some of product detail is not sent " + requiredFields.join(" "),
        type: "FAILED"
      };
    var productId = request.params.productId;
    delete productSent._id;
    let res = await productModel.editProductModel(productSent, productId);
    console.log(res)
    return res
      ? {
          message: "Product successfully edited!",
          type: "SUCCESSFUL",
          updatedDocument: res
        }
      : {
          message: "Something went wrong!",
          type: "FAILED"
        };
  } else {
    return {
      message: "Product data is not sent!",
      type: "FAILED"
    };
  }
};
const getProduct = async (request, h) => {
  let res = await productModel.getProductModel({
    ...(request.params.productId && { _id: request.params.productId }),
    supplierId: request.params.supplierId
  });
  return res
    ? { type: "SUCCESSFUL", response: res }
    : { type: "FAILED", message: "Something went wrong!" };
};
const deleteProduct = async (request, h) => {
  let result = await productModel.deleteProductModel(request.params.productId);
  return result
    ? { message: "Product deleted", type: "SUCCESSFUL" }
    : {
        message: "Unable to delete product",
        type: "FAILED"
      };
};

module.exports = { getProduct, editProduct, addProduct, deleteProduct };
