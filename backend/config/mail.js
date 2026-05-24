app.get("/test-mail", async (req, res) => {
  console.log("TEST MAIL ROUTE HIT");

  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "tharunvedastech1@gmail.com",
      subject: "Render Test Mail",
      text: "Testing email from Render backend",
    });

    console.log("MAIL SENT:", info);
    res.send("Mail sent successfully");
  } catch (err) {
    console.log("MAIL ERROR FULL:", err);
    res.status(500).send(err.message);
  }
});