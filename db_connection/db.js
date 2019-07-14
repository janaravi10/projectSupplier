// database
const mongoose = require("mongoose");
const mongoUrl = require("../config/key").mongoURI;
console.log(mongoUrl);
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    dbName: "projectSupplier",
    useCreateIndex: true
  })
  .then(() => {
    console.log("connected");
  })
  .catch(err => {
    console.log(err);
  });
