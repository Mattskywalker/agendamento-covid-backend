const express = require('express');

const app = express();
const userRoute = require('./routes/user');

const morgan = require('morgan');

app.use(morgan('dev'));

app.use('/users', userRoute);

app.use((req,res,next) => {
    const erro = new Error('Not found');
    erro.status = 404;
    next(erro);
})

app.use((error, req,res,next) => {
    res.status(error.status || 500);
    return res.send({
        error: error.message,
    })
});

module.exports = app;