const router = require('express').Router();

router.get('/', (req, res) => {
    res.send({
        status:'Succesfully',
        message:'Welcome to Express'
    });
});

router.get('/product', (req, res) => {
    res.send({
        id: 1,
        name: "Bakmi kuah",
        price: 25000
    });
});


module.exports = router;