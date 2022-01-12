const { User } = require('../models')
const { body } = require('express-validator/check')
const { validationResult } = require('express-validator');


/* GET users listing. */
exports.getUser = async (req,res,next) => {
  User.findAll()
  .then(usersData => {
    res.send(usersData);
  })
  .catch(err => {
    res.send(err);
  })
}

exports.getUserById = async (req, res, next) => {
  console.log('Hit')
    await User.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(userData => {
    res.send(userData);
  })
  .catch(err => {
    res.send(err)
  })  
}

exports.postNewUser = async (req,res,next) => {

  console.log('test', req.body)

  const validationError = validationResult(req);
  if(!validationError.isEmpty()) {
    return res.json('check your input detail');
  }

  await User.create({
    name: req.body.name,
    email: req.body.email,
    number: req.body.number,
    utmSource: req.body.utmSource,
    utmTerm: req.body.utmTerm,
    utmMedium: req.body.utmMedium,
    utmCampaign: req.body.utmCampaign,
    utmDevice: req.body.utmDevice,
    utmLocation: req.body.utmLocation,
  })
  .then(userData => {
    console.log(userData);
    res.send(userData);
  })
  .catch(err => {
    console.log(err);
    res.send(err);
  })
} 
