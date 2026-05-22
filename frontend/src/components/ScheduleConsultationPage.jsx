import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDropzone } from "react-dropzone";
import {
  ArrowLeft,
  CheckCircle2,
  Phone,
  Calendar,
  Clock3,
  Video,
  Building,
  MessageCircle,
  ShieldCheck,
  Briefcase,
  Users,
  ArrowRight,
  Upload,
  FileText,
  Star,
  Sparkles,
  ChevronDown,
} from "lucide-react";

const steps = [
  "Personal",
  "Consultation",
  "Schedule",
  "Documents",
  "Review",
];

const ScheduleConsultationPage = ({ onBack }) => {
  const premiumInput =
    "w-full p-4 rounded-2xl border border-slate-300 bg-white text-[#1E293B] placeholder:text-slate-400 focus:outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20 transition-all duration-300 shadow-sm hover:border-slate-400 cursor-text"
  useEffect(() => {
    setTimeout(() => {
      detailsSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }, []);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedMode, setSelectedMode] = useState("Phone Call");
  const [selectedTime, setSelectedTime] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [clientTypeOpen, setClientTypeOpen] = useState(false);
  const [consultationTypeOpen, setConsultationTypeOpen] = useState(false);

  const detailsSectionRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: "",
    clientType: "",
    consultationType: "",
    preferredDate: "",
    description: "",
  });

  const consultationModes = [
    {
      name: "Phone Call",
      icon: <Phone size={18} />,
    },
    {
      name: "Video Call",
      icon: <Video size={18} />,
    },
    {
      name: "In-Person Meeting",
      icon: <Building size={18} />,
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle size={18} />,
    },
  ];

  const timeSlots = [
    "10:00 AM",
    "11:30 AM",
    "2:00 PM",
    "4:00 PM",
    "5:30 PM",
    "7:00 PM",
  ];

  const onDrop = useCallback((acceptedFiles) => {
    setUploadedFiles(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: true,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      alert("Please enter full name");
      return;
    }

    if (!formData.email.trim()) {
      alert("Please enter email");
      return;
    }

    if (!formData.mobile.trim()) {
      alert("Please enter mobile number");
      return;
    }

    if (!formData.city.trim()) {
      alert("Please enter city");
      return;
    }

    if (!formData.clientType) {
      alert("Please select client type");
      return;
    }

    if (!formData.consultationType) {
      alert("Please select consultation type");
      return;
    }

    if (!formData.description.trim()) {
      alert("Please enter description");
      return;
    }

    if (!formData.preferredDate) {
      alert("Please select preferred date");
      return;
    }

    if (!selectedTime) {
      alert("Please select time slot");
      return;
    }

    try {
      const formPayload = new FormData();

      formPayload.append("fullName", formData.fullName);
      formPayload.append("email", formData.email);
      formPayload.append("phone", formData.mobile);
      formPayload.append("city", formData.city);
      formPayload.append("clientType", formData.clientType);
      formPayload.append("consultationType", formData.consultationType);
      formPayload.append("preferredDate", formData.preferredDate);
      formPayload.append("selectedTime", selectedTime);
      formPayload.append("consultationMode", selectedMode);
      formPayload.append("description", formData.description);

      uploadedFiles.forEach((file) => {
        formPayload.append("documents", file);
      });

      const response = await fetch(
        "http://localhost:5000/api/consultation",
        {
          method: "POST",
          body: formPayload,
        }
      );

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
      } else {
        alert("Submission failed");
      }

    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#F6F4EF] flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl shadow-2xl p-12 max-w-2xl text-center"
        >
          <div className="w-20 h-20 rounded-full bg-[#D4AF37] flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={42} className="text-black" />
          </div>

          <h1 className="text-5xl font-bold mb-6">
            Consultation Request Received
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            Thank you for scheduling your consultation. Our financial expert
            team will review your request and contact you shortly.
          </p>

          <button
            onClick={onBack}
            className="px-10 py-4 bg-[#D4AF37] rounded-2xl font-bold hover:scale-105 transition"
          >
            Back To Home
          </button>
        </motion.div>
      </div>
    );
  }

  const clientTypes = [
    "Individual",
    "Salaried Employee",
    "Freelancer",
    "Business Owner",
    "Startup Founder",
    "Company",
  ];

  const consultationTypes = [
    "Income Tax Consultation",
    "GST Consultation",
    "Business Registration Consultation",
    "Tax Saving Consultation",
    "Startup Registration Consultation",
    "Compliance Consultation",
    "Accounting Consultation",
  ];

  return (
    <div className="min-h-screen bg-[#F6F4EF] text-[#1E293B] overflow-hidden">

      {/* PREMIUM CONCIERGE HERO */}
      <section className="relative bg-gradient-to-br from-[#0B1324] via-[#14213D] to-[#1E2E45] text-white px-6 py-16 overflow-hidden">
        {/* Luxury ambient glows */}
        <div className="absolute top-10 left-20 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto">
          {/* Back */}
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white/90 hover:text-white transition mb-12"
          >
            <ArrowLeft size={20} />
            Back to Home
          </button>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* LEFT CONTENT */}
            <div>
              {/* Premium badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/10 px-5 py-2 rounded-full mb-8">
                <Sparkles size={16} className="text-[#D4AF37]" />
                <span className="uppercase tracking-[0.2em] text-xs font-semibold text-[#D4AF37]">
                  Private Financial Concierge
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Book Your
                <span className="block text-[#D4AF37] mt-2">
                  Expert Consultation
                </span>
              </h1>

              {/* Subtext */}
              <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl">
                Personalized tax and financial advisory sessions for individuals,
                startups, business owners, and companies seeking expert guidance.
              </p>

              {/* Trust Pills */}
              <div className="flex flex-wrap gap-4 mt-8">
                {[
                  "Certified Experts",
                  "100% Confidential",
                  "Fast Response",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/10 backdrop-blur-xl border border-white/10 px-5 py-3 rounded-2xl text-sm font-medium"
                  >
                    ✓ {item}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT PREMIUM CARD */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ y: -8 }}
              className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl"
            >
              <div className="mb-8">
                <p className="uppercase tracking-[0.2em] text-xs text-[#D4AF37] font-semibold mb-3">
                  Exclusive Consultation Offer
                </p>

                <h3 className="text-3xl font-bold leading-tight">
                  Free 15-Minute Premium Consultation
                </h3>
              </div>

              <div className="space-y-5">
                {[
                  "Dedicated Expert Consultant",
                  "Priority Booking Access",
                  "Private & Confidential Discussion",
                  "Fast Appointment Confirmation",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2
                      className="text-[#D4AF37]"
                      size={20}
                    />
                    <span className="text-slate-200">{item}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-10">
                {[
                  { title: "5000+", sub: "Clients" },
                  { title: "98%", sub: "Success" },
                  { title: "24/7", sub: "Support" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/10 rounded-2xl p-4 text-center"
                  >
                    <h4 className="text-xl font-bold text-[#D4AF37]">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-300 mt-1">
                      {item.sub}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section
        ref={detailsSectionRef}
        className="px-6 py-20 -mt-10 relative z-10"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.15fr] gap-10">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            {/* Trust */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-white/60">
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="text-[#D4AF37]" />
                <h2 className="text-2xl font-bold">Why Clients Choose Us</h2>
              </div>

              <div className="space-y-5">
                {[
                  "Certified Tax & Financial Experts",
                  "100% Confidential Consultation",
                  "Fast Appointment Confirmation",
                  "Personalized Strategic Advice",
                  "Dedicated Premium Support",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-[#D4AF37]" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Journey */}
            <div className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] rounded-3xl shadow-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-8">Consultation Journey</h2>

              <div className="space-y-6">
                {[
                  "Book Your Preferred Slot",
                  "Get Instant Confirmation",
                  "Meet Our Expert Consultant",
                  "Receive Personalized Guidance",
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#D4AF37] text-black flex items-center justify-center font-bold shrink-0">
                      {i + 1}
                    </div>
                    <p className="pt-2 text-slate-200">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Concierge */}
            <div className="bg-[#D4AF37] rounded-3xl shadow-2xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <Phone />
                <h2 className="text-2xl font-bold">Need Immediate Help?</h2>
              </div>

              <p className="mb-5 text-black/80">
                Speak directly with our concierge support team for urgent
                assistance.
              </p>

              <div className="text-2xl font-bold">+91 9866654451</div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white p-10 sticky top-6">
            {/* Progress */}
            <div className="mb-10">
              <div className="flex justify-between gap-2 flex-wrap">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center flex-1 min-w-[70px]"
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition ${currentStep >= index + 1
                        ? "bg-[#D4AF37] text-black"
                        : "bg-gray-200 text-gray-500"
                        }`}
                    >
                      {index + 1}
                    </div>

                    <p className="text-xs mt-3 font-medium text-center">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-5 min-h-[520px]"
                >
                  {/* STEP 1 */}
                  {currentStep === 1 && (
                    <>
                      <h2 className="text-3xl font-bold mb-6">
                        Personal Information
                      </h2>

                      <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={premiumInput}
                      />

                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        className={premiumInput}
                      />

                      <input
                        type="tel"
                        name="mobile"
                        placeholder="Mobile Number"
                        value={formData.mobile}
                        onChange={handleChange}
                        className={premiumInput}
                      />

                      <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleChange}
                        className={premiumInput}
                      />

                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setClientTypeOpen(!clientTypeOpen)}
                          className="w-full px-5 py-4 rounded-2xl border border-slate-300 bg-white shadow-sm hover:border-[#D4AF37]/50 transition-all duration-300 flex items-center justify-between cursor-pointer"
                        >
                          <span
                            className={`font-medium ${formData.clientType ? "text-[#1E293B]" : "text-slate-400"
                              }`}
                          >
                            {formData.clientType || "Select Client Type"}
                          </span>

                          <ChevronDown
                            size={22}
                            className={`text-black transition-transform duration-300 ${clientTypeOpen ? "rotate-180" : ""
                              }`}
                          />
                        </button>

                        <div
                          className={`absolute top-full left-0 mt-2 w-full bg-white rounded-2xl shadow-xl border border-slate-200 max-h-[280px] overflow-y-auto z-50 transition-all duration-300 origin-top ${clientTypeOpen
                            ? "opacity-100 scale-100 translate-y-0"
                            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                            }`}
                        >
                          {clientTypes.map((type) => (
                            <button
                              key={type}
                              type="button"
                              onClick={() => {
                                setFormData({ ...formData, clientType: type });
                                setClientTypeOpen(false);
                              }}
                              className="w-full px-5 py-3 text-left hover:bg-[#D4AF37]/10 border-b border-slate-100 last:border-b-0 cursor-pointer"
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {/* STEP 2 */}
                  {currentStep === 2 && (
                    <>
                      <h2 className="text-3xl font-bold mb-6">
                        Consultation Details
                      </h2>

                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setConsultationTypeOpen(!consultationTypeOpen)}
                          className="w-full px-5 py-4 rounded-2xl border border-slate-300 bg-white shadow-sm hover:border-[#D4AF37]/50 transition-all duration-300 flex items-center justify-between"
                        >
                          <span
                            className={`font-medium ${formData.consultationType
                              ? "text-[#1E293B]"
                              : "text-slate-400"
                              }`}
                          >
                            {formData.consultationType || "Select Consultation Type"}
                          </span>

                          <ChevronDown
                            size={22}
                            className={`text-black transition-transform duration-300 ${consultationTypeOpen ? "rotate-180" : ""
                              }`}
                          />
                        </button>

                        <div
                          className={`absolute top-full left-0 mt-2 w-full bg-white rounded-2xl shadow-xl border border-slate-200 max-h-[280px] overflow-y-auto z-50 transition-all duration-300 origin-top ${consultationTypeOpen
                            ? "opacity-100 scale-100 translate-y-0"
                            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                            }`}
                        >
                          {consultationTypes.map((type) => (
                            <button
                              key={type}
                              type="button"
                              onClick={() => {
                                setFormData({
                                  ...formData,
                                  consultationType: type,
                                });
                                setConsultationTypeOpen(false);
                              }}
                              className="w-full px-5 py-3 text-left hover:bg-[#D4AF37]/10 border-b border-slate-100 last:border-b-0"
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="font-semibold text-lg mb-4">
                          Consultation Mode
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                          {consultationModes.map((mode) => (
                            <button
                              key={mode.name}
                              type="button"
                              onClick={() => setSelectedMode(mode.name)}
                              className={`rounded-2xl p-4 border flex items-center gap-3 transition ${selectedMode === mode.name
                                ? "bg-[#0F172A] text-white border-[#0F172A]"
                                : "bg-white border-gray-300 hover:border-[#D4AF37]"
                                }`}
                            >
                              {mode.icon}
                              <span className="font-medium">{mode.name}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <textarea
                        rows="6"
                        name="description"
                        placeholder="Briefly describe your requirement..."
                        value={formData.description}
                        onChange={handleChange}
                        className={premiumInput}
                      />
                    </>
                  )}

                  {/* STEP 3 */}
                  {currentStep === 3 && (
                    <>
                      <h2 className="text-3xl font-bold mb-6">
                        Choose Schedule
                      </h2>

                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className={premiumInput}
                      />

                      <div>
                        <p className="font-semibold text-lg mb-4">
                          Select Time Slot
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                          {timeSlots.map((time) => (
                            <button
                              key={time}
                              type="button"
                              onClick={() => setSelectedTime(time)}
                              className={`rounded-2xl p-4 border font-medium transition ${selectedTime === time
                                ? "bg-[#D4AF37] text-black border-[#D4AF37]"
                                : "border-gray-300 hover:border-[#D4AF37]"
                                }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {/* STEP 4 */}
                  {currentStep === 4 && (
                    <>
                      <h2 className="text-3xl font-bold mb-6">
                        Upload Documents
                      </h2>

                      <div
                        {...getRootProps()}
                        className="border-2 border-dashed border-[#D4AF37] rounded-3xl p-10 text-center cursor-pointer hover:bg-[#FFF9E8] transition"
                      >
                        <input {...getInputProps()} />
                        <Upload
                          className="mx-auto mb-4 text-[#D4AF37]"
                          size={40}
                        />

                        <p className="text-xl font-semibold">
                          Drag & Drop Documents
                        </p>

                        <p className="text-gray-500 mt-2">
                          PAN / Aadhaar / GST / Form16 / Bank Statements
                        </p>
                      </div>

                      {uploadedFiles.length > 0 && (
                        <div className="space-y-3">
                          {uploadedFiles.map((file, i) => (
                            <div
                              key={i}
                              className="bg-[#F8FAFC] rounded-2xl p-4 flex items-center gap-3"
                            >
                              <FileText className="text-[#D4AF37]" />
                              <span>{file.name}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  )}

                  {/* STEP 5 */}
                  {currentStep === 5 && (
                    <>
                      <h2 className="text-3xl font-bold mb-6">
                        Review & Confirm
                      </h2>

                      <div className="space-y-4">
                        {[
                          ["Name", formData.fullName],
                          ["Email", formData.email],
                          ["Phone", formData.mobile],
                          ["City", formData.city],
                          ["Client Type", formData.clientType],
                          ["Consultation", formData.consultationType],
                          ["Mode", selectedMode],
                          ["Date", formData.preferredDate],
                          ["Time", selectedTime],
                        ].map(([label, value], i) => (
                          <div
                            key={i}
                            className="bg-[#F8FAFC] rounded-2xl p-4 flex justify-between"
                          >
                            <span className="font-medium">{label}</span>
                            <span>{value || "-"}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Buttons */}
              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="px-6 py-3 rounded-2xl border disabled:opacity-40 cursor-pointer"
                >
                  Previous
                </button>

                {currentStep < 5 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-8 py-3 rounded-2xl bg-[#D4AF37] font-bold flex items-center gap-2 cursor-pointer"
                  >
                    Next
                    <ArrowRight size={18} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-8 py-3 rounded-2xl bg-[#D4AF37] font-bold flex items-center gap-2"
                  >
                    Confirm Booking
                    <ArrowRight size={18} />
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScheduleConsultationPage;
