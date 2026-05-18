import React, { useEffect, useState } from "react";
import {
  FileText,
  Building2,
  ArrowRight,
  Users,
  Landmark,
  CheckCircle2,
  Star,
  PhoneCall,
  Calculator,
  ClipboardCheck,
  TrendingUp,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";


const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      badge: "Trusted Financial Consultancy",
      title: "Expert Tax Filing & Compliance Services",
      desc: "Simplify income tax filing, GST compliance, and documentation with trusted professional guidance for individuals and businesses.",
      button: "Book Consultation",
      stats: ["500+ Tax Filings", "98% Client Satisfaction", "24/7 Support"],
      icon: <Calculator size={42} />,
    },
    {
      badge: "Business Registration Experts",
      title: "Launch & Grow Your Business Confidently",
      desc: "From startup registration to GST, MSME, and compliance support — we help you establish your business with confidence.",
      button: "Start Registration",
      stats: ["100+ Registrations", "Fast Documentation", "Expert Guidance"],
      icon: <Building2 size={42} />,
    },
    {
      badge: "Strategic Financial Advisory",
      title: "Accounting & Financial Growth Support",
      desc: "Professional bookkeeping, accounting, and business financial advisory services designed for long-term success.",
      button: "Talk To Expert",
      stats: ["Reliable Advisory", "Growth Planning", "Dedicated Support"],
      icon: <TrendingUp size={42} />,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      icon: <FileText size={28} />,
      title: "GST Filing & Compliance",
      desc: "Timely GST returns, registration, and compliance support for businesses.",
    },
    {
      icon: <Calculator size={28} />,
      title: "Income Tax Filing",
      desc: "Professional tax filing services for salaried employees, freelancers, and businesses.",
    },
    {
      icon: <Building2 size={28} />,
      title: "Business Registration",
      desc: "Fast startup, MSME, GST, and company registration assistance.",
    },
    {
      icon: <ClipboardCheck size={28} />,
      title: "Accounting Support",
      desc: "Accurate bookkeeping, documentation, and financial records management.",
    },
  ];

  const whoWeHelp = [
    "Salaried Professionals",
    "Freelancers",
    "Startups",
    "Small Businesses",
    "Growing Companies",
  ];

  const process = [
    "Book Consultation",
    "Share Documents",
    "Expert Review",
    "Filing / Registration",
    "Confirmation & Support",
  ];

  const faqs = [
    {
      q: "What documents are needed for GST filing?",
      a: "Basic business registration details, invoices, and purchase records.",
    },
    {
      q: "Do you offer online consultation?",
      a: "Yes, we provide complete online support and consultation.",
    },
    {
      q: "How long does company registration take?",
      a: "Depending on requirements, registration usually takes a few working days.",
    },
  ];

  return (
    <div className="bg-[#F6F4EF] text-[#1E293B]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0F172A] text-white">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155]"
            >
              <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center min-h-[650px]">
                <div>
                  <p className="uppercase tracking-[0.3em] text-[#D4AF37] font-semibold mb-4">
                    {slide.badge}
                  </p>

                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    {slide.title}
                  </h1>

                  <p className="mt-6 text-lg text-slate-200 leading-relaxed max-w-xl">
                    {slide.desc}
                  </p>

                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <button className="px-8 py-4 bg-[#D4AF37] text-black font-bold rounded-xl">
                      {slide.button}
                    </button>

                    <button className="px-8 py-4 border border-white/30 rounded-xl flex items-center gap-3 hover:bg-white/10 transition">
                      Learn More
                      <ArrowRight />
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mt-10">
                    {slide.stats.map((stat, i) => (
                      <div
                        key={i}
                        className="bg-white/10 backdrop-blur-md p-4 rounded-xl text-center"
                      >
                        <p className="text-sm font-medium">{stat}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="bg-white text-[#1E293B] rounded-3xl p-8 shadow-2xl w-full max-w-md">
                    <div className="w-16 h-16 rounded-2xl bg-[#334155] text-[#D4AF37] flex items-center justify-center mb-6">
                      {slide.icon}
                    </div>

                    <h3 className="text-2xl font-bold mb-6">
                      Professional Financial Support
                    </h3>

                    <div className="space-y-4">
                      {[
                        "Accurate Documentation",
                        "Quick Processing",
                        "Expert Guidance",
                        "Dedicated Support",
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="bg-[#F8FAFC] p-4 rounded-xl font-medium"
                        >
                          {item}
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 bg-[#334155] text-white p-5 rounded-2xl">
                      <p className="font-semibold">Need Immediate Assistance?</p>
                      <div className="flex items-center gap-3 mt-3">
                        <PhoneCall />
                        <span>Talk to our expert today</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DOTS */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all ${
                currentSlide === index
                  ? "w-10 h-3 bg-[#D4AF37] rounded-full"
                  : "w-3 h-3 bg-white/40 rounded-full"
              }`}
            />
          ))}
        </div>
      </section>

      {/* WHO WE HELP */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
              Who We Help
            </p>
            <h2 className="text-5xl font-bold mt-4">
              Solutions Designed For Everyone
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {whoWeHelp.map((item, i) => (
              <div
                key={i}
                className="bg-[#F8FAFC] p-8 rounded-3xl shadow-lg text-center hover:-translate-y-2 transition"
              >
                <Users className="mx-auto mb-4 text-[#334155]" />
                <h3 className="font-bold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
              Our Services
            </p>
            <h2 className="text-5xl font-bold mt-4">
              Professional Financial Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#334155] text-white flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-14">Our Process</h2>

          <div className="grid md:grid-cols-5 gap-6">
            {process.map((step, i) => (
              <div
                key={i}
                className="bg-[#F8FAFC] rounded-3xl p-8 shadow-lg text-center"
              >
                <div className="w-12 h-12 rounded-full bg-[#334155] text-white mx-auto flex items-center justify-center font-bold mb-4">
                  {i + 1}
                </div>
                <h3 className="font-bold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-[#1E293B] text-white rounded-3xl p-12 text-center shadow-2xl">
            <div className="flex justify-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill="currentColor" className="text-[#D4AF37]" />
              ))}
            </div>
            <p className="text-2xl leading-relaxed">
              “Professional, responsive, and highly reliable financial support.
              Filing taxes has never been this simple.”
            </p>
            <p className="mt-6 font-semibold">Happy Client</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-14">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-[#F8FAFC] p-8 rounded-3xl shadow-lg"
              >
                <h3 className="text-xl font-bold mb-3">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0F172A] text-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <Landmark className="text-[#D4AF37] mb-6" size={60} />
            <h2 className="text-5xl font-bold leading-tight">
              Need Financial Guidance?
            </h2>

            <p className="mt-6 text-lg text-slate-200 leading-relaxed max-w-xl">
              Whether you're an individual taxpayer, startup founder,
              freelancer, or business owner, our expert team provides reliable
              financial consultancy.
            </p>
          </div>

          <div className="bg-white text-[#1E293B] rounded-3xl p-10 shadow-2xl">
            <h3 className="text-3xl font-bold mb-8">Why Partner With Us?</h3>

            <div className="space-y-5">
              {[
                "Trusted Professional Financial Consultancy",
                "GST, Tax & Registration Expertise",
                "Secure Documentation Handling",
                "Affordable Transparent Pricing",
                "Dedicated Client Support",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-[#F8FAFC] p-4 rounded-2xl"
                >
                  <CheckCircle2 className="text-[#D4AF37]" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button className="mt-8 w-full px-10 py-5 bg-[#334155] text-white font-bold rounded-2xl shadow-xl hover:scale-[1.02] transition flex items-center justify-center gap-3">
              Contact Us
              <ArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#020617] text-white">
  <div className="max-w-7xl mx-auto px-6 py-20">
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

      <div>
        <h2 className="text-3xl font-bold text-[#D4AF37] mb-5">
          FinConsult
        </h2>

        <p className="text-slate-300 leading-relaxed">
          Trusted financial consultancy offering expert GST filing, income tax
          solutions, accounting support, and business registration services.
        </p>

        <div className="flex gap-4 mt-8">
          {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
            <button
              key={i}
              className="w-11 h-11 rounded-xl bg-white/10 hover:bg-[#D4AF37] hover:text-black transition-all duration-300 flex items-center justify-center"
            >
              <Icon size={18} />
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-6 text-[#D4AF37]">
          Quick Links
        </h3>

        <div className="space-y-4 text-slate-300">
          {["Home", "About Us", "Services", "FAQ", "Contact"].map((item) => (
            <p
              key={item}
              className="hover:text-white cursor-pointer transition"
            >
              {item}
            </p>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-6 text-[#D4AF37]">
          Our Services
        </h3>

        <div className="space-y-4 text-slate-300">
          {[
            "GST Filing",
            "Income Tax Filing",
            "Business Registration",
            "Accounting Support",
          ].map((item) => (
            <p
              key={item}
              className="hover:text-white cursor-pointer transition"
            >
              {item}
            </p>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-6 text-[#D4AF37]">
          Contact Info
        </h3>

        <div className="space-y-5 text-slate-300">
          <div className="flex gap-4 items-start">
            <MapPin className="text-[#D4AF37] mt-1" size={20} />
            <p>Hyderabad, India</p>
          </div>

          <div className="flex gap-4 items-center">
            <Phone className="text-[#D4AF37]" size={20} />
            <p>+91 98765 43210</p>
          </div>

          <div className="flex gap-4 items-center">
            <Mail className="text-[#D4AF37]" size={20} />
            <p>support@finconsult.com</p>
          </div>
        </div>
      </div>

    </div>

    <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
      <p>© 2026 FinConsult. All rights reserved.</p>

      <div className="flex gap-6">
        <p className="hover:text-white cursor-pointer transition">
          Privacy Policy
        </p>
        <p className="hover:text-white cursor-pointer transition">
          Terms & Conditions
        </p>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
};

export default Home;