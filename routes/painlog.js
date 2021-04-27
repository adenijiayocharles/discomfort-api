"use strict";
const express = require("express");
const router = express.Router();
const recordController = require("../controllers/RecordController");
const authMiddlware = require("../middleware/auth");

router.get("/:record_id", authMiddlware, recordController.one);
router.get("/", authMiddlware, recordController.all);
router.post("/", authMiddlware, recordController.create);
router.delete("/:record_id", authMiddlware, recordController.deleteRecord);

module.exports = router;
