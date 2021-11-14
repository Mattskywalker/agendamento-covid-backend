const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) => {
    res.status(200).send({
        msg: 'rota get usuarios'
    })
});

router.post('/',(req, res, next) => {

    const user = {
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
    }

    res.status(201).send({
        msg: 'New User Created - 200',
        userCreated: user,
    })
    console.log(user.params);
})

module.exports = router;