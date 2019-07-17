const express = require("express");
const router = express.Router();
// importing supplier model
const SupplierModel = require("../schema/supplierSchema");
const ProductModel = require("../schema/product");
router.post("/add", function(req, res) {
  let supplierSent = req.body.supplier,
    requiredFields = ["poReference", "billOfEntryDate", "transactionDate"];
  // get the product from request body
  if (supplierSent) {
    requiredFields = requiredFields.filter(function(elem) {
      if (!supplierSent.hasOwnProperty(elem)) {
        return elem;
      }
    });
    // check if some field is missing or not
    if (requiredFields.length) {
      return res.send({
        message:
          "Some of supplier detail is not sent " + requiredFields.join(" "),
        type: "FAILED"
      });
    }
    if (supplierSent.importCountry) {
      supplierSent = {
        ...supplierSent,
        importCountry:
          typeof supplierSent.importCountry === "string"
            ? supplierSent.importCountry
            : supplierSent.importCountry.value || ""
      };
    }
    if (supplierSent.countryOfOrigin) {
      supplierSent = {
        ...supplierSent,
        countryOfOrigin:
          typeof supplierSent.countryOfOrigin === "string"
            ? supplierSent.countryOfOrigin
            : supplierSent.countryOfOrigin.value || ""
      };
    }
    let supplier = new SupplierModel(supplierSent);
    supplier.save(function(err) {
      if (err) {
        console.log(err);
        res.send({ message: "Something went wrong!", type: "FAILED" });
      } else {
        res.send({
          message: "supplier successfully added!",
          type: "SUCCESSFUL"
        });
      }
    });
  } else {
    res.send({ message: "supplier data is not sent!", type: "FAILED" });
  }
});

router.post("/edit", function(req, res) {
  let supplierSent = req.body.supplier,
    requiredFields = ["poReference", "billOfEntryDate", "transactionDate"];
  // get the product from request body
  if (supplierSent) {
    requiredFields = requiredFields.filter(function(elem) {
      if (!supplierSent.hasOwnProperty(elem)) {
        return elem;
      }
    });
    // check if some field is missing or not
    if (requiredFields.length) {
      return res.send({
        message:
          "Some of supplier detail is not sent " + requiredFields.join(" "),
        type: "FAILED"
      });
    }
    // check if the body has transaction ID
    if (!supplierSent.transactionId) {
      return res.send({
        message: "Please provide transaction id",
        type: "FAILED"
      });
    }
    if (supplierSent.importCountry) {
      supplierSent = {
        ...supplierSent,
        importCountry:
          typeof supplierSent.importCountry === "string"
            ? supplierSent.importCountry
            : supplierSent.importCountry.value || ""
      };
    }
    if (supplierSent.countryOfOrigin) {
      supplierSent = {
        ...supplierSent,
        countryOfOrigin:
          typeof supplierSent.countryOfOrigin === "string"
            ? supplierSent.countryOfOrigin
            : supplierSent.countryOfOrigin.value || ""
      };
    }
    SupplierModel.findByIdAndUpdate(
      supplierSent.transactionId,
      supplierSent,
      function(err, updatedDoc) {
        if (err) {
          console.log(err);
          res.send({ message: "Something went wrong!", type: "FAILED" });
        } else {
          res.send({
            message: "Supplier successfully edited",
            type: "SUCCESSFUL"
          });
        }
      }
    );
  } else {
    res.send({ message: "supplier data is not sent!", type: "FAILED" });
  }
});

// Router for getting list of products

router.get("/get", function(req, res) {
  SupplierModel.find({}, function(err, doc) {
    if (!err) {
      res.send({ type: "SUCCESSFUL", response: doc });
    } else {
      res.send({ type: "FAILED", message: "Something went wrong!" });
    }
  });
});

// @route /supplier/delete
// @method get
// route to delete the suppliers

router.post("/delete", function(req, res) {
  let supplierId = req.body.supplierId;
  // check if product id is sent or not
  if (!supplierId) {
    return res.send({
      message: "No supplier id",
      type: "FAILED"
    });
  }
  SupplierModel.deleteOne({ _id: supplierId }, function(err) {
    if (!err) {
      ProductModel.deleteMany({ supplierId: supplierId }, function(err) {
        if (!err) {
          res.send({
            message: "Supplier deleted",
            type: "SUCCESSFUL"
          });
        } else {
          res.send({
            message: "Unable to delete",
            type: "FAILED"
          });
        }
      });
    } else {
      res.send({ message: "Unable to delete supplier", type: "FAILED" });
    }
  });
});
module.exports = router;
