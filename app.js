var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const model = require('./models/index');
const port = 4200;
const sequelize = require('./utils/database');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//ROUTES 
const userRoutes = require('./routes/user');
app.use(userRoutes);



// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   console.log(err);
//   res.status(err.status || 500)
//     .send('error');
// });

sequelize
  .sync({
	// force:true
  })
  .then(result=> {
    //  app.listen(port);
  })
  .catch((err) => console.log(err));

module.exports = app;
