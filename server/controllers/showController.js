const db = require("../models");
const Show = db.shows;
const Booking = db.bookings;

async function updateTicket(ticket, showid) {
  console.log(ticket, showid);
  db.sequelize.query(`CALL updateTotalTicket(:ticket,:showid)`, {
    replacements: { ticket: ticket, showid: showid },
    type: db.sequelize.QueryTypes.RAW,
  });
}

const addEvent = async (req, res) => {
  try {
    const data = await Show.create(req.body);
    res.status(201).json({ status: "success", message: data });
  } catch (err) {
    res.status(500).json({ status: "fail", message: err });
  }
};

const removeEvent = async (req, res) => {
  try {
    const showid = req.params.showid;
    const data = await Show.destroy({ where: { showid: showid } });
    res
      .status(200)
      .json({ status: "success", message: "deleted successfully" });
  } catch (err) {
    res.status(500).json({ status: "fail", message: err });
  }
};
const showAllevent = async (req, res) => {
  try {
    const showid = req.params.showid;
    const data = await Show.findOne({ where: { showid: showid } });
    console.log(data.dataValues);
    res.status(200).json({ status: "success", data: data.dataValues });
  } catch (err) {
    console.log(err);
  }
};

const bookTicket = async (req, res) => {
  try {
    const showid = req.body.showid;
    const userid = req.userid;
    const noTicket = req.body.noTicket;

    // Find the show by showid
    const show = await Show.findOne({ where: { showid: showid } });

    if (!show) {
      return res.status(404).json({ error: "Show not found" });
    }
    const result = await Booking.create({
      numTicket: noTicket,
      showDate: show.showdate,
      time: show.time,
      showId: showid,
      userId: userid,
    });
    console.log("Before update:", show.ticketrem);

    let remTicket = show.ticketrem;
    updateTicket(noTicket, showid);
    // remTicket = remTicket - noTicket;
    console.log("After update:", remTicket);
    if (remTicket < 0) {
      res.status(500).json({ status: "fail", message: "Housefull" });
    }
    show.ticketrem = remTicket;

    // Save the changes to the database
    await show.save();

    res.status(201).json({
      status: "success",
      message: "Ticket Booked Successfully",
    });
  } catch (err) {
    res.status(500).json({ status: "fail", message: err });
  }
};
const showAlleventdisplay = async (req, res) => {
  try {
    const data = await Show.findAll({});
    // console.log(data);

    // Map the show objects to extract their names
    const allShows = [];
    data.map((show) => {
      allShows.push({
        name: show.showname,
        img: show.posterurl,
        showid: show.showid,
      });
    });
    // const images = data.map((url) => url.posterurl);

    res.status(200).json({
      status: "success",
      shows: allShows, // Sending an array of show names
    });
  } catch (err) {
    res.status(500).json({ status: "fail", message: err.message });
  }
};

module.exports = {
  addEvent,
  removeEvent,
  showAllevent,
  bookTicket,
  showAlleventdisplay,
};
