const express = require("express");
const router = express.Router();

// importing product model
const ProductModel = require("../schema/product");

// Router to edit the product
router.post("/add", function(req, res) {
  let productSent = req.body.product,
    requiredFields = [
      "supplierId",
      "productName",
      "itemQty",
      "unitPrice",
      "uom",
      "packUom",
      "packSize",
      "totalPrice"
    ];

  // deleteing unneccesary prop
  delete productSent._id;
  if (productSent) {
    // get the product from request body
    if (productSent) {
      requiredFields = requiredFields.filter(function(elem) {
        if (!productSent.hasOwnProperty(elem)) {
          return elem;
        }
      });
    }
    // check if some field is missing or not
    if (requiredFields.length) {
      return res.send({
        message:
          "Some of product detail is not sent " + requiredFields.join(" "),
        type: "FAILED"
      });
    }
    let product = new ProductModel(productSent);
    product.save(function(err) {
      if (err) {
        console.log(err);
        res.send({
          message: "Something went wrong!",
          type: "FAILED"
        });
      } else {
        res.send({
          message: "Product successfully uploaded!",
          type: "SUCCESSFUL"
        });
      }
    });
  } else {
    console.log(productSent);
    res.send({
      message: "Product data is not sent!",
      type: "FAILED"
    });
  }
});
// Router to edit the product
router.post("/edit", function(req, res) {
  let productSent = req.body.product,
    requiredFields = [
      "_id",
      "productName",
      "itemQty",
      "unitPrice",
      "uom",
      "packUom",
      "packSize",
      "totalPrice"
    ];

  if (productSent) {
    // get the product from request body
    if (productSent) {
      requiredFields = requiredFields.filter(function(elem) {
        if (!productSent.hasOwnProperty(elem)) {
          return elem;
        }
      });
    }
    // check if some field is missing or not
    if (requiredFields.length) {
      return res.send({
        message:
          "Some of product detail is not sent " + requiredFields.join(" "),
        type: "FAILED"
      });
    }
    var productId = productSent._id;
    delete productSent._id;
    ProductModel.findByIdAndUpdate(
      productId,
      productSent,
      { new: true },
      function(err, updatedDoc) {
        if (err) {
          console.log(err);
          res.send({
            message: "Something went wrong!",
            type: "FAILED"
          });
        } else {
          res.send({
            message: "Product successfully edited!",
            type: "SUCCESSFUL",
            updatedDocument: updatedDoc
          });
        }
      }
    );
  } else {
    console.log(productSent);
    res.send({
      message: "Product data is not sent!",
      type: "FAILED"
    });
  }
});

// Router for removing product
router.post("/delete", function(req, res) {
  let productIdToDelete = req.body.productId,
    supplierId = req.body.supplierId;
  // check if product id is sent or not
  if (!productIdToDelete) {
    return res.send({ message: "No product id is available", type: "FAILED" });
  }
  ProductModel.deleteMany(
    { supplierId: supplierId, _id: productIdToDelete },
    function(err) {
      if (!err) {
        res.send({ message: "Product deleted", type: "SUCCESSFUL" });
      } else {
        res.send({ message: "Unable to delete product", type: "FAILED" });
      }
    }
  );
});
// Router for getting list of products

router.post("/get", function(req, res) {
  let supplierId = req.body.supplierId;
  if (!supplierId) {
    console.log(supplierId);
    return res.send({
      type: "FAILED",
      message: "Please provide supplier id"
    });
  }
  ProductModel.find({ supplierId: req.body.supplierId }, function(err, doc) {
    if (!err) {
      res.send({ type: "SUCCESSFUL", response: doc });
    } else {
      res.send({ type: "FAILED", message: "Something went wrong!" });
    }
  });
});

module.exports = router;
