const { ObjectId } = require('bson');
const db = require('../config/mongodb');
const fs = require('fs');
const path = require('path');

const index = (req, res) => {
    db.collection('products').find()
    .toArray()
    .then(result => res.send(result))
    .catch(err => res.send(err))
}

const view = (req, res) => {
    const { id } = req.params;
    db.collection('products').findOne({ _id: ObjectId(id)})
    .then(result => res.send(result))
    .catch(err => res.send(err))
}

const store = (req, res) => {
    const { name, price, stock, status, description } = req.body;
    const image = req.file;
    if(image){
        const target = path.join(__dirname, "../../uploads", image.originalname);
        fs.renameSync(image.path, target);
        db.collection('products').insertOne({name, price, stock, status, description, image_url:`http://45.86.68.155:3000/public/${image.originalname}`})
          .then(result => res.send(result))
          .catch(err => res.send(err))
    }  
}

const update = (req, res) => {
    const { name, price, stock, status, description } = req.body;
    const image = req.file;
    if(image){
        const target = path.join(__dirname, "../../uploads", image.originalname);
        fs.renameSync(image.path, target);
        try{
           
           const result = db.collection('products').updateOne({_id: req.params.id }, {
               $set: { name, price, stock, status, description }
           });

           res.send(result)
        }catch(err){
           res.send(err);
        }
    } 
}

const destroy = (req, res) => {
    try{
        let data = db.collection('products').deleteOne({_id: req.params.id});
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