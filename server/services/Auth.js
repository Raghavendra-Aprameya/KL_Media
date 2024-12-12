const jwt = require("jsonwebtoken");

exports.userOnly = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  // console.log(token);
  const decoded = jwt.verify(token, "Aprameya and ayush s dbms project ");
  req.userid = decoded.data.userid;
  next();
};

exports.checkAdmin = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt.verify(token, "Aprameya and ayush s dbms project ");
  const role = decoded.data.role;
  if (role === "admin") {
    next();
  } else {
    res.status(403).json({ message: "unauthorized" });
  }
};
