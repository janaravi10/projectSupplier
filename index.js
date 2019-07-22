const Hapi = require("@hapi/hapi"),
  Path = require("path"),
  Inert = require("@hapi/inert"),
  productRoutes = require("./product/productRoute"),
  supplierRoutes = require("./supplier/supplierRoute");
require("./db_connection/db");
const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 5000,
    routes: {
      files: {
        relativeTo: Path.join(__dirname, "public")
      },
      cors: true
    }
  });
  await server.register(Inert);

  server.route(productRoutes);
  server.route(supplierRoutes);
  server.route({
    method: "GET",
    path: "/{param*}",
    handler: {
      directory: {
        path: "."
      }
    }
  });

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});

init();
