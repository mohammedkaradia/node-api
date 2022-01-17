const express = require('express');
const router = express.Router();
const userController = require('../controllers/lead');
const { check } = require('express-validator');
const checkAuth = require('../middleware/check-auth')

router.get('/lead', userController.getUser);

router.get('/lead/:id', userController.getUserById);

router.post('/lead', checkAuth, userController.postNewUser);

module.exports = router
