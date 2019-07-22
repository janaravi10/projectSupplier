const productCollection = require("./productSchema");

const addProductModel = async data => {
  try {
    await productCollection.create(data);
    return true;
  } catch (error) {
    return false;
  }
};

const editProductModel = async (productSent, productId) => {
  try {
    let res =  await productCollection.findOneAndUpdate({_id: productId}, productSent, {
      new: true
    });  
    return res;
  } catch (error) {
    return false;
  }
};

const getProductModel = async queryMatch => {
  try {
    return await productCollection.find(queryMatch);
  } catch (error) {
    return false;
  }
};

const deleteProductModel = async productIdToDelete => {
  try {
    return await productCollection.deleteMany({
      _id: productIdToDelete
    });
  } catch (error) {
    return false;
  }
};
module.exports = {
  addProductModel,
  editProductModel,
  getProductModel,
  deleteProductModel
};
