const express = require("express");
const router = express.Router();

const { fetchAllProducts } = require("../Controllers/products.controller");

router.get("/products", fetchAllProducts);

module.exports = router;
