const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) => {
    res.status(200).send({
        msg: 'rota get usuarios'
    })
});

router.post('/',(req, res, next) => {
    res.status(201).send({
        msg: 'rota post usuarios'
    })
    console.log(req.params);
})

module.exports = router;