const express = require("express");
const router = express.Router();
const { whatsappAIReply } = require("../controllers/whatsappAIController");

router.post("/", express.urlencoded({ extended: false }), whatsappAIReply);

module.exports = router;