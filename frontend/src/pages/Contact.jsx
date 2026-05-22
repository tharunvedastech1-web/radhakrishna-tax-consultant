import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
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
  const [serviceOpen, setServiceOpen] = useState(false);

  const premiumInput =
    "w-full p-4 rounded-2xl border border-slate-300 bg-white text-[#1E293B] placeholder:text-slate-400 focus:outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20 transition-all duration-300 shadow-sm hover:border-slate-400";

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
      className="relative py-24 bg-[#F6F4EF] overflow-hidden"
    >
      <div className="absolute top-10 left-20 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#0F172A]/10 rounded-full blur-3xl"></div>
      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-[#D4A017] font-semibold">
            Contact Us
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mt-5 text-[#1E293B] leading-tight">
            Let’s Simplify Your
            <span className="block text-[#D4AF37]">
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

            <div className="bg-white rounded-3xl shadow-2xl p-10 border border-white/60">
              <h3 className="text-3xl font-bold text-[#0B1F5C] mb-8">
                Contact Information
              </h3>

              <div className="space-y-7">

                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-[#334155] flex items-center justify-center shadow-lg">
                    <MapPin className="text-[#D4AF37]" />
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
                  <div className="w-16 h-16 rounded-2xl bg-[#334155] flex items-center justify-center shadow-lg">
                    <Phone className="text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="font-semibold text-xl text-[#0B1F5C]">
                      Phone Support
                    </p>
                    <p className="text-gray-600">+91 98666 54451</p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-[#334155] flex items-center justify-center shadow-lg">
                    <Mail className="text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="font-semibold text-xl text-[#0B1F5C]">
                      Email Support
                    </p>
                    <p className="text-gray-600">rktax988@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-[#334155] flex items-center justify-center shadow-lg">
                    <Clock3 className="text-[#D4AF37]" />
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
              <input
                type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className={premiumInput} required />

              <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange}
                className={premiumInput} required />

              <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange}
                className={premiumInput} required />

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setServiceOpen(!serviceOpen)}
                  className="w-full px-5 py-4 rounded-2xl border border-slate-300 bg-white shadow-sm hover:shadow-lg hover:border-[#D4AF37]/50 transition-all duration-300 flex items-center justify-between cursor-pointer"
                >
                  <div className="flex flex-col items-start">
                    <span className="text-xs uppercase tracking-wider text-slate-400">
                      Service Type
                    </span>

                    <span
                      className={`font-medium ${formData.service ? "text-[#1E293B]" : "text-slate-400"
                        }`}
                    >
                      {formData.service || "Choose your required service"}
                    </span>
                  </div>

                  <ChevronDown
                    size={22}
                    className={`text-black transition-transform duration-300 ${serviceOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                <div
                  className={`absolute top-full left-0 mt-2 w-full bg-white rounded-2xl shadow-xl border border-slate-200 max-h-[280px] overflow-y-auto overflow-hidden z-50 transition-all duration-300 origin-top ${serviceOpen
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                    }`}
                >
                  {[
                    {
                      title: "GST Filing",
                      desc: "GST returns & compliance support",
                    },
                    {
                      title: "Income Tax Filing",
                      desc: "ITR filing & tax assistance",
                    },
                    {
                      title: "Business Registration",
                      desc: "Company, MSME & startup registration",
                    },
                    {
                      title: "Accounting Services",
                      desc: "Bookkeeping & financial management",
                    },
                    {
                      title: "Tax Consultation",
                      desc: "Expert personalized advisory",
                    },
                  ].map((service, index) => (
                    <button
                      key={service.title}
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, service: service.title });
                        setServiceOpen(false);
                      }}
                      className="w-full px-5 py-3 text-left hover:bg-[#D4AF37]/8 transition-all duration-300 border-b last:border-b-0 border-slate-100 group cursor-pointer"
                      style={{
                        transitionDelay: `${index * 40}ms`,
                      }}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-[15px] font-semibold text-[#1E293B] group-hover:text-[#D4AF37] transition">
                            {service.title}
                          </p>
                          <p className="text-xs text-slate-500 mt-0.5">
                            {service.desc}
                          </p>
                        </div>

                        {formData.service === service.title && (
                          <div className="px-3 py-1 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] text-xs font-semibold">
                            Selected
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <textarea name="message" placeholder="Tell us about your requirement..." value={formData.message} onChange={handleChange} className={`${premiumInput} h-36 resize-none`} required />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#D4AF37] text-[#0F172A] py-4 rounded-2xl font-bold text-lg shadow-xl hover:bg-[#C9A227] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
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