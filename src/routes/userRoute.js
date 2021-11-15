const express = require('express');
const UserController = require('../controllers/UserController');
const router = express.Router();

router.get('/',(req,res,next) => {
    res.status(200).send({
        msg: 'rota get usuarios'
    })
});

router.post('/',UserController.store);

module.exports = router;