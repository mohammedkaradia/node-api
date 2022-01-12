const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');
const { check } = require('express-validator');

router.get('/users', userController.getUser);

router.get('/users/:id', userController.getUserById);

router.post('/users',  [check('email', "your custom error message").isEmail(),
                        check('number', "phone number not valid").isLength({ min: 10, max:10 })], userController.postNewUser);

module.exports = router
