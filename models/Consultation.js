const mongoose = require("mongoose");

const consultationSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    clientType: {
      type: String,
      required: true,
    },

    consultationType: {
      type: String,
      required: true,
    },

    preferredDate: {
      type: String,
      required: true,
    },

    selectedTime: {
      type: String,
      required: true,
    },

    consultationMode: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    documentUrl: [String],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Consultation", consultationSchema);