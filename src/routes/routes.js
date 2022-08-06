const express = require("express");
const router = express.Router();
const API = require("../api/API.controller");

router.get("/", API.sendAll);
router.get("/now", API.sendNow);
router.get("/:id", API.sendMonth);
module.exports = router;
