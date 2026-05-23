import ScheduleConsultationPage from "../components/ScheduleConsultationPage";

import React, { useEffect, useState, useRef } from "react";
import {
  FileText,
  Building2,
  ArrowRight,
  Users,
  Landmark,
  CheckCircle2,
  PhoneCall,
  Calculator,
  ClipboardCheck,
  TrendingUp,
  Mail,
  MapPin,
  Phone,
  Plus,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";


const Home = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const [showConsultation, setShowConsultation] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const servicesRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const consultationSectionRef = useRef(null);
  const scheduleButtonRef = useRef(null);
  const heroSlides = [
    {
      badge: "Trusted Financial Consultancy",
      title: "Expert Tax Filing & Compliance Services",
      desc: "Simplify income tax filing, GST compliance, and documentation with trusted professional guidance for individuals and businesses.",
      button: "Book Consultation",
      buttonLink: "#consultation",
      learnMoreLink: "#tax-details",
      stats: ["500+ Tax Filings", "98% Client Satisfaction", "24/7 Support"],
      icon: <Calculator size={42} />,
    },
    {
      badge: "Business Registration Experts",
      title: "Launch & Grow Your Business Confidently",
      desc: "From startup registration to GST, MSME, and compliance support — we help you establish your business with confidence.",
      button: "Start Registration",
      buttonLink: "#consultation",
      learnMoreLink: "#registration-details",
      stats: ["100+ Registrations", "Fast Documentation", "Expert Guidance"],
      icon: <Building2 size={42} />,
    },
    {
      badge: "Strategic Financial Advisory",
      title: "Accounting & Financial Growth Support",
      desc: "Professional bookkeeping, accounting, and business financial advisory services designed for long-term success.",
      button: "Talk To Expert",
      buttonLink: "#contact",
      learnMoreLink: "#advisory-details",
      stats: ["Reliable Advisory", "Growth Planning", "Dedicated Support"],
      icon: <TrendingUp size={42} />,
    },
  ];

  const services = [
    {
      icon: <FileText size={24} />,
      title: "GST Filing & Compliance",
      desc: "Timely GST returns, registration, and compliance support for businesses.",
      stat: 40000,
      suffix: "+",
      label: "GST Returns Filed",
    },
    {
      icon: <Calculator size={24} />,
      title: "Income Tax Filing",
      desc: "Professional tax filing services for salaried employees, freelancers, and businesses.",
      stat: 15000,
      suffix: "+",
      label: "Tax Filings Completed",
    },
    {
      icon: <Building2 size={24} />,
      title: "Business Registration",
      desc: "Fast startup, MSME, GST, and company registration assistance.",
      stat: 500,
      suffix: "+",
      label: "Businesses Registered",
    },
    {
      icon: <ClipboardCheck size={24} />,
      title: "Accounting Support",
      desc: "Accurate bookkeeping, documentation, and financial records management.",
      stat: 98,
      suffix: "%",
      label: "Client Satisfaction",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((prev) => (prev === 2 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          services.forEach((service, index) => {
            let start = 0;
            const end = service.stat;
            const duration = 1800;
            const increment = end / 60;

            const timer = setInterval(() => {
              start += increment;

              if (start >= end) {
                start = end;
                clearInterval(timer);
              }

              setCounts((prev) => {
                const updated = [...prev];
                updated[index] = Math.floor(start);
                return updated;
              });
            }, duration / 60);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);


  const scrollToScheduleButton = () => {
    const button = scheduleButtonRef.current;

    if (button) {
      const rect = button.getBoundingClientRect();
      const absoluteTop = rect.top + window.scrollY;

      window.scrollTo({
        top: absoluteTop - 120,
        behavior: "smooth",
      });
    }
  };
  // useEffect(() => {
  //   if (window.location.hash === "#consultation") {
  //     setTimeout(() => {
  //       const button = scheduleButtonRef.current;

  //       if (button) {
  //         const y =
  //           button.getBoundingClientRect().top +
  //           window.pageYOffset -
  //           100;

  //         window.scrollTo({
  //           top: y,
  //           behavior: "smooth",
  //         });
  //       }
  //     }, 300);
  //   }
  // }, []);


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

  const testimonials = [
    {
      name: "Rahul S.",
      role: "Business Owner",
      review: "Excellent GST support. Fast processing and very professional guidance.",
      avatar: "RS",
      rating: 4.5,
    },
    {
      name: "Priya K.",
      role: "Freelancer",
      review: "Income tax filing became completely stress-free. Very smooth process.",
      avatar: "PK",
      rating: 5,
    },
    {
      name: "Arjun M.",
      role: "Startup Founder",
      review: "Business registration was completed quickly with proper documentation.",
      avatar: "AM",
      rating: 4,
    },
    {
      name: "Sneha R.",
      role: "Entrepreneur",
      review: "Very reliable accounting support. Professional communication throughout.",
      avatar: "SR",
      rating: 4.5,
    },
    {
      name: "Kiran P.",
      role: "Consultant",
      review: "Clear tax guidance and excellent support team. Highly recommended.",
      avatar: "KP",
      rating: 5,
    },
    {
      name: "Meena D.",
      role: "Small Business Owner",
      review: "Their compliance handling saved us a lot of time and confusion.",
      avatar: "MD",
      rating: 4,
    },
    {
      name: "Vikram T.",
      role: "Retail Business Owner",
      review: "Quick response and excellent GST filing assistance every single time.",
      avatar: "VT",
      rating: 4.5,
    },
    {
      name: "Anjali N.",
      role: "Working Professional",
      review: "Tax filing process was effortless. Great support and timely updates.",
      avatar: "AN",
      rating: 5,
    },
    {
      name: "Ramesh C.",
      role: "Startup Co-Founder",
      review: "Professional team with accurate accounting and registration guidance.",
      avatar: "RC",
      rating: 4.5,
    },
  ];

  const faqs = [
    {
      q: "What documents are needed for GST filing?",
      a: "Basic business registration details, invoices, GST login credentials, and purchase records are generally required.",
    },
    {
      q: "Do you provide online consultation?",
      a: "Yes, we provide complete online consultation and support for tax filing, GST compliance, and business registration.",
    },
    {
      q: "How long does company registration take?",
      a: "Depending on documentation and approval timelines, registration usually takes a few working days.",
    },
    {
      q: "Do you help with income tax filing for salaried employees?",
      a: "Yes, we assist salaried employees, freelancers, and business owners with accurate income tax filing.",
    },
    {
      q: "Is my financial information secure?",
      a: "Absolutely. All your financial documents and information are handled securely and confidentially.",
    },
    {
      q: "Do you provide accounting support for businesses?",
      a: "Yes, we offer bookkeeping, accounting assistance, compliance documentation, and financial support for businesses.",
    },
  ];

  if (showConsultation) {
    return (
      <ScheduleConsultationPage
        onBack={() => setShowConsultation(false)}
      />
    );
  }

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
                    <button
                      ref={scheduleButtonRef}
                      onClick={() => setShowConsultation(true)}
                      className="px-8 py-4 bg-[#D4AF37] text-black font-bold rounded-xl inline-flex items-center justify-center"
                    >
                      {slide.button}
                    </button>

                    <a
                      href={slide.learnMoreLink}
                      className="px-8 py-4 border border-white/30 rounded-xl flex items-center gap-3 hover:bg-white/10 transition"
                    >
                      Learn More
                      <ArrowRight />
                    </a>
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
              className={`transition-all ${currentSlide === index
                ? "w-10 h-3 bg-[#D4AF37] rounded-full"
                : "w-3 h-3 bg-white/40 rounded-full"
                }`}
            />
          ))}
        </div>
      </section>

      {/* LEARN MORE DETAILS */}
      <section className="py-20 bg-[#F6F4EF]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
              Learn More
            </p>
            <h2 className="text-5xl font-bold mt-4">
              Explore Our Expertise
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Tax */}
            <div
              id="tax-details"
              className="bg-white rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#334155] text-white flex items-center justify-center mb-6">
                <Calculator size={28} />
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Tax Filing & Compliance
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Complete support for income tax filing, GST compliance,
                document verification, and accurate submissions handled
                by experienced professionals.
              </p>
            </div>

            {/* Registration */}
            <div
              id="registration-details"
              className="bg-white rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#334155] text-white flex items-center justify-center mb-6">
                <Building2 size={28} />
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Business Registration
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Fast startup registration, MSME setup, GST registration,
                and complete documentation support to launch your business
                confidently.
              </p>
            </div>

            {/* Advisory */}
            <div
              id="advisory-details"
              className="bg-white rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#334155] text-white flex items-center justify-center mb-6">
                <TrendingUp size={28} />
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Financial Advisory
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Strategic accounting support, bookkeeping, financial
                planning, and expert advisory services for long-term
                business growth.
              </p>
            </div>

          </div>
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
      <section className="py-20" ref={servicesRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
              Our Services
            </p>

            <h2 className="text-5xl font-bold mt-4">
              Professional Financial Services
            </h2>

            <p className="mt-5 text-gray-600 max-w-2xl mx-auto text-lg">
              Trusted financial solutions for individuals, startups, and businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6"
              >
                {/* TOP SECTION */}
                <div className="flex items-start justify-between mb-5">
                  {/* ICON */}
                  <div className="w-14 h-14 rounded-2xl bg-[#334155] text-white flex items-center justify-center shrink-0">
                    {service.icon}
                  </div>

                  {/* COUNTER */}
                  <div className="text-right">
                    <h3 className="text-3xl md:text-4xl font-bold text-[#D4AF37] leading-none">
                      {counts[i].toLocaleString()}
                      {service.suffix}
                    </h3>

                    <p className="text-sm text-gray-500 mt-2 font-medium">
                      {service.label}
                    </p>
                  </div>
                </div>

                {/* CONTENT */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#1E293B]">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULTATION SECTION */}
      <section
        id="consultation"
        ref={consultationSectionRef}
        className="py-20 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] text-white"
      >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Side */}
          <div>
            <p className="uppercase tracking-[0.3em] text-[#D4AF37] font-semibold mb-4">
              Expert Consultation
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Professional Financial Consultation Tailored For You
            </h2>

            <p className="mt-6 text-lg text-slate-200 leading-relaxed">
              Get personalized guidance from experienced financial consultants for
              tax planning, GST compliance, business registration, accounting
              support, and financial growth strategies. Whether you're an
              individual, freelancer, startup, or business owner, we help you make
              informed financial decisions with confidence.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                "One-on-One Expert Guidance",
                "Tax Saving Strategies",
                "Business Compliance Support",
                "Quick & Reliable Solutions",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-md p-4 rounded-2xl font-medium"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="bg-white text-[#1E293B] rounded-3xl p-10 shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-[#334155] text-[#D4AF37] flex items-center justify-center mb-6">
              <PhoneCall size={34} />
            </div>

            <h3 className="text-3xl font-bold mb-4">
              Book Your Consultation Today
            </h3>

            <p className="text-gray-600 leading-relaxed mb-8">
              Speak directly with our financial experts and get practical solutions
              for your tax, accounting, or business needs.
            </p>

            <div className="space-y-4">
              <div className="bg-[#F8FAFC] p-4 rounded-2xl">
                GST & Tax Consultation
              </div>

              <div className="bg-[#F8FAFC] p-4 rounded-2xl">
                Business Registration Guidance
              </div>

              <div className="bg-[#F8FAFC] p-4 rounded-2xl">
                Financial Planning Support
              </div>
            </div>

            <button
              ref={scheduleButtonRef}
              onClick={() => setShowConsultation(true)}
              className="mt-8 w-full px-8 py-4 bg-[#D4AF37] text-black font-bold rounded-2xl hover:scale-[1.02] transition flex items-center justify-center gap-3 cursor-pointer"
            >
              Schedule Consultation
              <ArrowRight />
            </button>
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

      {/* TESTIMONIALS */}
      <section className="py-20 bg-[#F6F4EF]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
              Client Reviews
            </p>

            <h2 className="text-5xl font-bold mt-4 text-[#1E293B]">
              What Our Clients Say
            </h2>
          </div>

          <div className="overflow-hidden relative">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${testimonialIndex * 100}%)`,
              }}
            >
              {[0, 1, 2].map((slide) => (
                <div key={slide} className="min-w-full grid md:grid-cols-3 gap-6">
                  {testimonials
                    .slice(slide * 3, slide * 3 + 3)
                    .map((testimonial, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition"
                      >
                        <div className="flex items-center gap-4 mb-5">
                          <div className="w-14 h-14 rounded-full bg-[#334155] text-white font-bold flex items-center justify-center">
                            {testimonial.avatar}
                          </div>

                          <div>
                            <h3 className="font-bold text-lg">
                              {testimonial.name}
                            </h3>

                            <p className="text-sm text-gray-500">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-1 mb-4 text-[#D4AF37] text-lg">
                          {[1, 2, 3, 4, 5].map((star) => {
                            if (testimonial.rating >= star) {
                              return <FaStar key={star} />;
                            }

                            if (testimonial.rating >= star - 0.5) {
                              return <FaStarHalfAlt key={star} />;
                            }

                            return <FaRegStar key={star} className="text-gray-300" />;
                          })}
                          
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          "{testimonial.review}"
                        </p>
                      </div>
                    ))}
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-3 mt-10">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIndex(i)}
                  className={`transition-all ${testimonialIndex === i
                    ? "w-10 h-3 bg-[#D4AF37] rounded-full"
                    : "w-3 h-3 bg-gray-400 rounded-full"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-14 text-[#1E293B]">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;

              return (
                <div
                  key={i}
                  className="bg-[#F8FAFC] rounded-3xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between px-8 py-7 text-left cursor-pointer"
                  >
                    <span className="text-lg md:text-xl font-bold text-[#1E293B]">
                      {faq.q}
                    </span>

                    <div
                      className={`transition-transform duration-300 ${isOpen ? "rotate-45" : ""
                        }`}
                    >
                      <Plus
                        size={32}
                        className="text-[#334155]"
                        strokeWidth={1.8}
                      />
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-500 ease-in-out ${isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                      }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-8 pb-8 text-gray-600 leading-relaxed text-base">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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