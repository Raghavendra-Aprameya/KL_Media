const db = require("../models");
const User = db.users;
const jwt = require("jsonwebtoken");
const signup = async (req, res) => {
  try {
    const data = await User.create(req.body);
    const token = jwt.sign(
      { data: data },
      "Aprameya and ayush s dbms project ",
      { expiresIn: "90d" }
    );
    res.status(201).json({ status: "success", token: token });
  } catch (err) {
    res.status(500).json({ status: "fail", message: err });
  }
};

const login = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const data = await User.findOne({ where: { email: email } });
    console.log(data);

    if (data) {
      if (password === data.password) {
        const token = jwt.sign(
          { data: data },
          "Aprameya and ayush s dbms project ",
          { expiresIn: "90d" }
        );
        res
          .status(200)
          .json({ status: "success", token: token, role: data.role });
      } else {
        res.status(200).json({ status: "fail", message: "Incorrect Password" });
      }
    } else {
      res.status(500).json({ status: "fail", message: "No user found" });
    }
  } catch (err) {
    // }
    res.status(500).json({ status: "fail", message: err });
  }
};
const profile = async (req, res) => {
  try {
    const data = await User.findOne({ where: { userid: req.userid } });
    console.log(data);
    res.status(200).json({ status: "success", data: data });
  } catch (err) { }
};
const bookedshows = async (req, res) => {
  try {
    const data = await User.findone({
      where: {
        userid: req.userid
      }
    });
    console.log(data);
    res.status(200).json({ status: "success", data: data });
  } catch (err) { }
};
module.exports = { signup, login, profile, bookedshows };
// include: [{
//   model: booking,
//   as: "userBookings"
// }],