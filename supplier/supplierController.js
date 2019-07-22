const supplierModel = require("./supplierModel");
const productCollection = require("../product/productSchema");
const addSupplier = async (request, h) => {
  let supplierSent = request.payload.supplier,
    requiredFields = ["poReference", "billOfEntryDate", "transactionDate"];
  // get the product from request body
  if (supplierSent) {
    requiredFields = requiredFields.filter(
      elem => !supplierSent.hasOwnProperty(elem) && elem
    );
    // check if some field is missing or not
    if (requiredFields.length)
      return {
        message:
          "Some of supplier detail is not sent " + requiredFields.join(" "),
        type: "FAILED"
      };

    supplierSent.importCountry &&
      (supplierSent = {
        ...supplierSent,
        importCountry:
          typeof supplierSent.importCountry === "string"
            ? supplierSent.importCountry
            : supplierSent.importCountry.value || ""
      });

    supplierSent.countryOfOrigin &&
      (supplierSent = {
        ...supplierSent,
        countryOfOrigin:
          typeof supplierSent.countryOfOrigin === "string"
            ? supplierSent.countryOfOrigin
            : supplierSent.countryOfOrigin.value || ""
      });

    let res = await supplierModel.addSupplierModel(supplierSent);
    console.log(res);
    return res
      ? {
          message: "supplier successfully added!",
          type: "SUCCESSFUL"
        }
      : { message: "Something went wrong!", type: "FAILED" };
  } else {
    return { message: "supplier data is not sent!", type: "FAILED" };
  }
};
// @controller edits the product
const editSupplier = async (request, h) => {
  let supplierSent = request.payload.supplier,supplierId= request.params.supplierId
    requiredFields = ["poReference", "billOfEntryDate", "transactionDate"];
  // get the product from request body
  if (supplierSent) {
    requiredFields = requiredFields.filter(
      elem => !supplierSent.hasOwnProperty(elem) && elem
    );
    // check if some field is missing or not
    if (requiredFields.length)
      return {
        message:
          "Some of supplier detail is not sent " + requiredFields.join(" "),
        type: "FAILED"
      };

    supplierSent.importCountry &&
      (supplierSent = {
        ...supplierSent,
        importCountry:
          typeof supplierSent.importCountry === "string"
            ? supplierSent.importCountry
            : supplierSent.importCountry.value || ""
      });
    supplierSent.countryOfOrigin &&
      (supplierSent = {
        ...supplierSent,
        countryOfOrigin:
          typeof supplierSent.countryOfOrigin === "string"
            ? supplierSent.countryOfOrigin
            : supplierSent.countryOfOrigin.value || ""
      });
    return (await supplierModel.editSupplierModel(supplierId, supplierSent))
      ? {
          message: "Supplier successfully edited",
          type: "SUCCESSFUL"
        }
      : { message: "Something went wrong!", type: "FAILED" };
  } else {
    return { message: "supplier data is not sent!", type: "FAILED" };
  }
};
// get all suppliers
const getSupplier = async (request, h) => {
  let result = await supplierModel.getSupplierModel(request.params.supplierId);
  return result
    ? { type: "SUCCESSFUL", response: result }
    : { type: "FAILED", message: "Something went wrong!" };
};
// delete the suppliers
const deleteSupplier = async (request, h) => {
  let supplierId = request.params.supplierId;
  let result = await supplierModel.deleteSupplierModel(supplierId);
  if (result) {
    let prodDeleteRes = await productCollection.deleteMany({ supplierId });
    return prodDeleteRes
      ? {
          message: "Supplier deleted",
          type: "SUCCESSFUL"
        }
      : { message: "Unable to delete supplier", type: "FAILED" };
  } else {
    return { message: "Unable to delete supplier", type: "FAILED" };
  }
};

module.exports = { addSupplier, editSupplier, getSupplier, deleteSupplier };
