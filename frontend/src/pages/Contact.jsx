import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Clock3,
  Send,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      setSuccessMessage(data.message);

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      setTimeout(() => setSuccessMessage(""), 4000);
    } catch {
      setSuccessMessage("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-br from-white via-slate-50 to-blue-50 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-[#D4A017] font-semibold">
            Contact Us
          </p>

          <h2 className="text-5xl md:text-6xl font-extrabold mt-5 text-[#0B1F5C] leading-tight">
            Let’s Simplify Your
            <span className="block bg-gradient-to-r from-[#0B1F5C] to-blue-500 bg-clip-text text-transparent">
              Financial Journey
            </span>
          </h2>

          <p className="text-gray-600 mt-6 text-lg max-w-3xl mx-auto">
            Trusted tax consultancy for GST filing, income tax, registrations,
            compliance, and business financial solutions.
          </p>
        </div>

        {successMessage && (
          <div className="max-w-xl mx-auto mb-8 bg-green-100 border border-green-300 text-green-700 px-6 py-4 rounded-2xl text-center shadow-lg">
            {successMessage}
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left */}
          <div className="space-y-8">

            <div className="bg-white/80 backdrop-blur-2xl border border-white rounded-3xl p-10 shadow-2xl">
              <h3 className="text-3xl font-bold text-[#0B1F5C] mb-8">
                Contact Information
              </h3>

              <div className="space-y-7">

                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#D4A017] to-orange-400 flex items-center justify-center shadow-lg">
                    <MapPin className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-xl text-[#0B1F5C]">
                      Office Location
                    </p>
                    <p className="text-gray-600">
                      #19-05-166, Ashoknagar, Godavarikhani, Peddapalli, Telangana, India - 505209
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg">
                    <Phone className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-xl text-[#0B1F5C]">
                      Phone Support
                    </p>
                    <p className="text-gray-600">+91 98666 54451</p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center shadow-lg">
                    <Mail className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-xl text-[#0B1F5C]">
                      Email Support
                    </p>
                    <p className="text-gray-600">rktax988@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-400 flex items-center justify-center shadow-lg">
                    <Clock3 className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-xl text-[#0B1F5C]">
                      Working Hours
                    </p>
                    <p className="text-gray-600">
                      Mon - Sat | 10:00 AM - 7:00 PM
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="bg-white rounded-2xl p-6 shadow-xl text-center">
                <ShieldCheck className="mx-auto text-[#D4A017] mb-3" size={32} />
                <p className="font-semibold text-[#0B1F5C]">Trusted Advisory</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-xl text-center">
                <ShieldCheck className="mx-auto text-blue-500 mb-3" size={32} />
                <p className="font-semibold text-[#0B1F5C]">Secure Consultation</p>
              </div>
            </div>

          </div>

          {/* Right */}
          <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100">
            <h3 className="text-3xl font-bold text-[#0B1F5C] mb-8">
              Send Enquiry
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-200 p-4 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none" required />

              <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-200 p-4 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none" required />

              <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-200 p-4 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none" required />

              <select name="service" value={formData.service} onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-200 p-4 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none" required>
                <option value="">Select Service</option>
                <option>GST Filing</option>
                <option>Income Tax Filing</option>
                <option>Business Registration</option>
                <option>Accounting Services</option>
                <option>Tax Consultation</option>
              </select>

              <textarea name="message" placeholder="Tell us about your requirement..." value={formData.message}
                onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-200 p-4 rounded-2xl h-36 focus:ring-2 focus:ring-blue-500 outline-none"
                required />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#0B1F5C] to-blue-600 text-white py-4 rounded-2xl font-bold text-lg shadow-xl hover:scale-[1.02] transition flex items-center justify-center gap-2"
              >
                <Send size={18} />
                {loading ? "Submitting..." : "Submit Enquiry"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;