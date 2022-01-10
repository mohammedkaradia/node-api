var express = require('express');
var router = express.Router();
const { User } = require('../models')

/* GET users listing. */
router.get('/', async function(req, res, next) {
 try {
   const usersdata = await User.findAll()
   res.send(usersdata)
 } catch (error) {
   next(error)
 }
});

/* GET users by ID. */
router.get('/:id', async function(req, res, next) {
  try {
    const {id} = req.params;
    const userData = await User.findOne({where: {id:id}})
    res.send(userData);
  } catch (error) {
    next(error)
  }
 });

 /* POST users listing. */
router.post('/addUser', async function(req, res, next) {
  try {
    const {body} = req;
    const responseAdded = await User.create(body)
    res.send(responseAdded)
  } catch (error) {
    next(error)
  }
 });


module.exports = router;
