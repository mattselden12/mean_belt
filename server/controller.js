const Product = require("./models.js");
module.exports = {
    allProducts: (req, res) => Product
                                .find({})
                                // .sort('field aname')
                                .then(data => res.json(
                                    { status: "good", content: data }
                                ))
                                .catch(errs => res.json(
                                    { status: "bad", content: errs }
                                )),
    thisProduct: (req, res) => Product
                                .findById(req.params.id)
                                .then(data => res.json(
                                    { status: "good", content: data }
                                ))
                                .catch(errs => res.json(
                                    { status: "bad", content: errs }
                                )),
    createProduct: (req, res) => Product
                                .create(req.body)
                                .then(data => console.log("createProduct route worked") || res.json(
                                    { status: "good", content: data }
                                ))
                                .catch(errs => console.log("createProduct route error") || res.json(
                                    { status: "bad", content: errs }
                                )),
    updateProduct: (req, res) => Product
                                .findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
                                .then(data => res.json(
                                    { status: "good", content: data }
                                ))
                                .catch(errs => res.json(
                                    { status: "bad", content: errs }
                                )),
    deleteProduct: (req, res) => Product
                                .findByIdAndRemove(req.params.id)
                                .then(data => res.json(
                                    { status: "good", content: data }
                                ))
                                .catch(errs => res.json(
                                    { status: "bad", content: errs }
                                ))
}
