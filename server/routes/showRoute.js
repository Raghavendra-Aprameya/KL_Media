const showController = require("../controllers/showController.js");
const { userOnly, checkAdmin } = require("../services/Auth.js");
const router = require("express").Router();

router.post("/addEvent", checkAdmin, showController.addEvent);
router.delete("/:showid", checkAdmin, showController.removeEvent);
router.patch("/bookTicket", userOnly, showController.bookTicket);
router.get("/showAllEvents/:showid", showController.showAllevent);
router.get("/showAllEventsDisplay", showController.showAlleventdisplay);

module.exports = router;
