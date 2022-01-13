const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');
const { check } = require('express-validator');
const checkAuth = require('../middleware/check-auth')

router.get('/users', userController.getUser);

router.get('/users/:id', userController.getUserById);

// router.post('/users', checkAuth, [check('quoteemail', "your custom error message").isEmail(),
//                         check('quotetel', "phone number not valid").isLength({ min: 10, max:10 })], userController.postNewUser);

router.post('/users', checkAuth, userController.postNewUser);

module.exports = router
