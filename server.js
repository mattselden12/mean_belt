const express = require("express");
const router = require("./server/routes.js");
const app = router(express());
const path = require("path");

app.use(express.static(__dirname + '/public/dist/public'));
router(app);

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(8000, (errs) => console.log(errs ? errs : "server is solid, listening on port 8000"));