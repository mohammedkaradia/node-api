//#region IMPORTS
const express = require("express");
const model = require("./models/index");
//#endregion

//#region APP
const app = express();

app.use(function (req, res, next) {
  const allowedDomains = [
      'https://pre-launch.in',
      'http://localhost/exampleSite'
  ];
  const origin = req.headers.origin;
  if (allowedDomains.indexOf(origin) > -1) {
      res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//#endregion

//#region ROUTE
const userRoutes = require("./routes/user");
app.use(userRoutes);
//#endregion

//#region Sync
const sequelize = require("./utils/database");
const port = 4200;
sequelize
  .sync({
    // force:true
  })
  .then((result) => {
    app.listen(port);
  })
  .catch((err) => console.log(err));
//#endregion
