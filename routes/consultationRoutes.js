const express = require("express");
const router = express.Router();

const upload = require("../middleware/multer");

const {
  submitConsultationForm,
} = require("../controllers/consultationController");

router.post("/", upload.array("documents"), submitConsultationForm);

module.exports = router;