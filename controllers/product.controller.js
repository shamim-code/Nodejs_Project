'use strict';

const { json } = require('body-parser');
let products = require('../models/db');
const { v4: uuidv4 } = require('uuid');



const getAllProducts=(req,res)=>{
    res.status(200).json({products});
}

const createProduct= (req,res)=>{

    const id = uuidv4();
    const name = req.body.productName;
    const price = req.body.productPrice;
    const image = req.body.productImage;

    const newProduct={id:id,name:name,price:price,image:image};
    products.push(newProduct);
    res.send({
        message: "Successfully created !!"
    });
}


const updateProduct= (req,res)=>{
    const id = req.params.id;
    const name = req.body.name;
    const price = req.body.price;
    const image = req.body.image;

    products.
    filter((product) => product.id === id)
    .map((selected) => {

    selected.productName = name;
    selected.productPrice = price;
    selected.productImage = image;

    }
    );

    res.send({
        message: "Product Info Updated !!"
    });

}


const deleteProduct = (req, res) => {

    const userId = req.params.id;

    products =products.filter((product) => product.id != userId);

    res.send({
        message: "Product deleted successfully !!"
    });
}

module.exports = {getAllProducts,createProduct,updateProduct,deleteProduct};