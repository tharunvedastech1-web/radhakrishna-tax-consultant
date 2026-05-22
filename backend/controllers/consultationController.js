const Consultation = require("../models/Consultation");
const transporter = require("../config/mail");

const submitConsultationForm = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      city,
      clientType,
      consultationType,
      preferredDate,
      selectedTime,
      consultationMode,
      description,
    } = req.body;

    const documentUrls = req.files
      ? req.files.map((file) => file.path)
      : [];

    const newConsultation = await Consultation.create({
      fullName,
      email,
      phone,
      city,
      clientType,
      consultationType,
      preferredDate,
      selectedTime,
      consultationMode,
      description,
      documentUrl: documentUrls,
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "tharunvedastech1@gmail.com",
      subject: "New Consultation Booking",
      html: `
        <h2>New Consultation Booking Received</h2>

        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Client Type:</strong> ${clientType}</p>
        <p><strong>Consultation Type:</strong> ${consultationType}</p>
        <p><strong>Preferred Date:</strong> ${preferredDate}</p>
        <p><strong>Selected Time:</strong> ${selectedTime}</p>
        <p><strong>Consultation Mode:</strong> ${consultationMode}</p>
        <p><strong>Description:</strong> ${description}</p>
      `,

      attachments: req.files.map((file) => ({
        filename: file.originalname,
        path: file.path,
      })),
    });

    res.status(201).json({
      success: true,
      message: "Consultation booked successfully",
      data: newConsultation,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

module.exports = { submitConsultationForm };