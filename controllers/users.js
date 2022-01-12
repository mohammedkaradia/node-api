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
    console.log(err);
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
  // console.log(req.query)

  const validationError = validationResult(req);
  if(!validationError.isEmpty()) {
    console.log(validationError);
    return res.json('check your input detail');
  }

  await User.create({
    name: req.body.quotename,
    email: req.body.quoteemail,
    number: req.body.quotetel,
    utmSource: req.body.utm_source,
    utmTerm: req.body.utm_term,
    utmMedium: req.body.utm_medium,
    utmCampaign: req.body.utm_campaign,
    utmDevice: req.body.utm_device,
    utmLocation: req.body.utm_loc,
  })
  .then(userData => {
    res.send(userData);
  })
  .catch(err => {
    console.log(err);
    res.send(err);
  })
} 
