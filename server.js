const express = require("express");
const cors = require("cors");
require("dotenv").config();

const contactRoutes = require("./routes/contactRoutes");
const consultationRoutes = require("./routes/consultationRoutes");
const whatsappAIRoutes = require("./routes/whatsappAIRoutes");

const connectDB = require("./config/db");
const transporter = require("./config/mail");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoutes);
app.use("/api/consultation", consultationRoutes);
app.use("/api/whatsapp-ai", whatsappAIRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.get("/test-mail", async (req, res) => {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "tharunvedastech1@gmail.com",
      subject: "Render Test Mail",
      text: "Testing email from Render backend",
    });

    console.log("MAIL SENT:", info.response);
    res.send("Mail sent successfully");
  } catch (err) {
    console.log("MAIL ERROR:", err);
    res.status(500).send(err.message);
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});