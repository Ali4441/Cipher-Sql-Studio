const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth-Controller");

router.get("/assignments", authController.getAssignments);
router.post("/query", authController.getResult);

module.exports = router;