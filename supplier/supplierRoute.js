const supplierController = require("./supplierController");
module.exports = [
  {
    method: "GET",
    path: "/supplier/{supplierId?}",
    handler: supplierController.getSupplier
  },
  {
    method: "POST",
    path: "/supplier",
    handler: supplierController.addSupplier
  },
  {
    method: "PUT",
    path: "/supplier/{supplierId}",
    handler: supplierController.editSupplier
  },
  {
    method: "DELETE",
    path: "/supplier/{supplierId}",
    handler: supplierController.deleteSupplier
  }
];
