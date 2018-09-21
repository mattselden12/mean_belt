const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    prodid: {
        type: Number,
        required: [true, "Must include Product ID"]
    },
    prodname: {
        type: String,
        required: [true, "Your product must have a name."],
        minlength: [3, "Products must contain a name at least three characters long."]
    },
    prodquantity: {
        type: Number,
        required: [true,"You must give a quantity for the product."],
        min: [0, "Product quantity must be a number greater than or equal to 0."]
    },
    prodprice: {
        type: Number,
        required: [true, "You must give a product's price"],
        min: [0, "Product price must be a number greater than or equal to 0."]
    }
}, { timestamps: true })

mongoose.connect("mongodb://localhost:27017/meanbeltdb", { useNewUrlParser: true }, (errs) => console.log(errs ? errs : "db is lookin good"));

module.exports = mongoose.model("Product", ProductSchema)