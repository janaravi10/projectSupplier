const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// defining schema
const SupplierSchema = new Schema({
  transactionDate: {
    type: Date,
    required: true
  },
  billOfEntryDate: {
    type: Date,
    required: true
  },
  importCountry: {
    type: String
  },
  countryOfOrigin: {
    type: String
  },
  supplierInvoice: {
    type: Number
  },
  poReference: {
    type: String,
    required: true
  },
  billOfEntry: { type: String }
});

// exporting model
module.exports = mongoose.model("suppliers", SupplierSchema);
