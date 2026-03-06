const ProductsURL = "https://dummyjson.com/products";

const fetchAllProducts = async (req, res) => {
    const allProducts = await fetch(ProductsURL);
    const Products = await allProducts.json();
    res.json(Products);
};

module.exports = {
    fetchAllProducts,
};
