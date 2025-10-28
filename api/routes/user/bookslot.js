const express = require("express");
const router = express.Router();
const bookingController = require("../../controller/user/bookslot");

router.post("/", bookingController.bookSlot);

module.exports = router;
