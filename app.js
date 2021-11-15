const express = require('express');

const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const userRoute = require('./src/routes/userRoute')

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Acces-Control-Allow-Origin', 'http://localhost:3000');
    res.header(
        'Acces-Control-Allow-Header',
        'Origin, X-Requrested-With, Content-Type, Accept, Authorization');
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Origin', 'PUT, POST,PATCH, DELETE, GET');
        return res.status(200).send({});
    }
    next();
})

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