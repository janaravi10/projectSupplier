const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// defining schema
const ProductUploadSchema = new Schema({
  supplierId: {
    type: String,
    required: true
  },
  productName: {
    type: String,
    required: true,unique: false
  },
  itemQty: {
    type: Number,
    required: true
  },
  unitPrice: {
    type: Number,
    required: true
  },
  uom: {
    type: String,
    required: true
  },
  packUom: {
    type: String,
    required: true
  },
  packSize: {
    type: Number,
    required: true
  },
  totalPrice: { type: Number, required: true }
});

// exporting model
module.exports = mongoose.model("products", ProductUploadSchema);
