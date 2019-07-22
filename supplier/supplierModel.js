const supplierCollection = require("./supplierSchema");

const addSupplierModel = async supplierSent => {
  try {
    let res = await supplierCollection.create(supplierSent);
    console.log(res, " --- Collection");
    return res;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const editSupplierModel = async (transactionId, supplier) => {
  try {
    console.log(transactionId)
    let res = await supplierCollection.findByIdAndUpdate(
      {_id: transactionId},
      supplier
    );
    console.log(res,"Result -----")
    return true;
  } catch (error) {
    console.log(error, "=======");
    return false;
  }
};

const getSupplierModel = async supplierId => {
  try {
    let res = await supplierCollection.find({
      ...(supplierId && { _id: supplierId })
    });
    console.log(res, " --- -response ");
    return res;
  } catch (error) {
    return false;
  }
};

const deleteSupplierModel = async supplierId => {
  try {
    await supplierCollection.deleteOne({ _id: supplierId });
    return true;
  } catch (error) {
    return false;
  }
};
module.exports = {
  addSupplierModel,
  editSupplierModel,
  getSupplierModel,
  deleteSupplierModel
};
