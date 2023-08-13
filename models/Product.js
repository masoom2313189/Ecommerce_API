const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        quantity: {
            type: Number,
            required: true
        }
    }
);


module.exports = mongoose.model("Product", ProductSchema);