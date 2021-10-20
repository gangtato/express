const { ObjectId } = require('bson');
const db = require('../config/mongodb');
const fs = require('fs');
const path = require('path');
const Product = './model';

const index = (req, res) => {
    let product = Product.find();
    try{
        res.send(product);
    }catch(err){
        res.send(err);
    }
}

const view = (req, res) => {
    const { id } = req.params;
    let product = Product.findById(id);
    try{
       res.send(product);
    }catch(err){
       res.send(err);
    }
}

const store = (req, res) => {
    const { name, price, stock, status, description } = req.body;
    const image = req.file;
    if(image){
        const target = path.join(__dirname, "../../uploads", image.originalname);
        fs.renameSync(image.path, target);
        let product = Product.create({name, price, stock, status, description, image_url:`http://45.86.68.155:3000/public/${image.originalname}`});
        res.send(product)
    }  
}

const update = (req, res) => {
    const { name, price, stock, status, description } = req.body;
    const image = req.file;
    if(image){
        const target = path.join(__dirname, "../../uploads", image.originalname);
        fs.renameSync(image.path, target);
        try{ 
           const result = Product.updateOne({_id: req.params.id },{ name, price, stock, status, description });
           res.send(result)
        }catch(err){
           res.send(err);
        }
    } 
}

const destroy = (req, res) => {
    try{
        let data = Product.deleteOne({_id: req.params.id});
        res.send(data);
    }catch(err){
        res.send(err);
    }  
}

module.exports = {
    index,
    view,
    store,
    update,
    destroy
}