"use strict";
const express = require("express");
const router = express.Router();
const recordController = require("../controllers/RecordController");
const authMiddlware = require("../middleware/auth");

//router.get("/:record_id", authMiddlware, recordController.post);
router.get("/", authMiddlware, recordController.all);
router.post("/", authMiddlware, recordController.create);
//router.delete("/:record_id", authMiddlware, recordController.post);
//router.put("/:record_id", authMiddlware, recordController.post);

module.exports = router;
