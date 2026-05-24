const Contact = require("../models/Contact");
const transporter = require("../config/mail");

const submitContactForm = async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;

    const newContact = await Contact.create({
      name,
      email,
      phone,
      service,
      message,
    });

    transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "tharunvedastech1@gmail.com",
      subject: "New Contact Form Enquiry",
      html: `
    <h2>New Enquiry Received</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Service:</strong> ${service}</p>
    <p><strong>Message:</strong> ${message}</p>
  `,
    }).catch(err => console.log("Mail error:", err));


    res.status(201).json({
      success: true,
      message: "Contact form submitted successfully",
      data: newContact,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

module.exports = { submitContactForm };