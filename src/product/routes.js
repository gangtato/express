const router = require('express').Router();
const productController = require('./controller');
const multer = require('multer');
const upload = multer({dest:"uploads"})

router.get('/product', productController.index);
router.get('/product/:id', productController.view);
router.post('/product/', upload.single('image'), productController.store);
router.put('/product/:id', upload.single('image'), productController.update);
router.delete('/product/:id', productController.destroy);


module.exports = router;