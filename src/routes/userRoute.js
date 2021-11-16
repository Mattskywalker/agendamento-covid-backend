const express = require('express');
const UserController = require('../controllers/UserController');
const router = express.Router();

router.get('/all', UserController.index)

router.post('/',UserController.store);

module.exports = router;