const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    console.log(req.headers)
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, "longsecretkeylongsecretkeylongsecretkey", {algorithms:['HS256']}, );
    next();
  } catch (error) {
    console.log(error)
    res.status(401).json({ message: "Auth failed!" });
  }
};
