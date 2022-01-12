//#region IMPORTS
const express = require("express");
const model = require("./models/index");
//#endregion

//#region APP
const app = express();
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
