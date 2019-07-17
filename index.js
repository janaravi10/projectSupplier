const express = require("express");
const app = express(),
  path = require("path");
require("./db_connection/db");
const cors = require("cors"),
  corsOption = {
    origin: "http://localhost:3000",
    credentials: true
  };
const bodyParser = require("body-parser");
const productRoute = require("./routes/productRoute");
const supplierRoute = require("./routes/supplierRoute");
// const projectRoute = require("./routes/projectRoute");
// @port for server



const port = process.env.PORT || 5000;
// disabling cors
app.use(cors(corsOption));
// use middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
// // routes for uploading product
app.use("/product", productRoute);
// // routes for supplier data
app.use("/supplier", supplierRoute);
// //routes for uploading project
// app.use("/project", projectRoute);// ... other app.use middleware
app.use(express.static(path.join(__dirname, "public")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname,"public", "index.html"));
});
app.listen(port, () => console.log("Server started on " + port));
