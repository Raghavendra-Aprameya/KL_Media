const userController = require("../controllers/usersController");
const { userOnly, checkAdmin } = require("../services/Auth.js");
const router = require("express").Router();
router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.get("/profile", userOnly, userController.profile);
router.get("/booked", userOnly, userController.bookedshows);

// router.get('/getData', userController.findData)
module.exports = router;
