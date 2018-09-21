const api = require("./controller.js");
const bodyparser = require("body-parser");
module.exports = function (app) {
    app.use(bodyparser.json());
    app.get("/api/products", api.allProducts);
    app.get("/api/products/:id", api.thisProduct);
    app.post("/api/products", api.createProduct);
    app.put("/api/products/:id", api.updateProduct);
    app.delete("/api/products/:id", api.deleteProduct);
    return app;
}