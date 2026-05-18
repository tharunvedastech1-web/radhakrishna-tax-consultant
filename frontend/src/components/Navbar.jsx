import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Menu,
  X,
  Calendar,
  ChevronDown,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navClass = ({ isActive }) =>
    isActive
      ? "text-[#D4A017] border-b border-[#D4A017] pb-1"
      : "hover:text-[#D4A017] transition pb-1";

  return (
    <header className="w-full shadow-sm">
      {/* TOP HEADER */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={logo}
              alt="RadhaKrishna Tax Consultant"
              className="h-18 lg:h-22 object-contain"
            />
          </div>

          <div className="hidden lg:flex items-center gap-5">
            <div className="flex items-center gap-2">
              <MapPin className="text-[#0B1F5C]" size={18} />
              <div>
                <p className="font-medium text-sm text-gray-800">
                  #19-05-166, Ashoknagar, Godavarikhani, <br /> Peddapalli, Telangana, India - 505209
                </p>
                <p className="text-xs text-gray-500">India - 505209</p>
              </div>
            </div>

            <div className="w-px h-8 bg-gray-300" />

            <div className="flex items-center gap-2">
              <Phone className="text-[#0B1F5C]" size={18} />
              <div>
                <p className="font-medium text-sm text-gray-800">
                  +91 98666 54451
                </p>
                <p className="text-xs text-gray-500">
                  Mon - Sat: 10AM - 7PM
                </p>
              </div>
            </div>

            <div className="w-px h-8 bg-gray-300" />

            <div className="flex items-center gap-2">
              <Mail className="text-[#0B1F5C]" size={18} />
              <div>
                <p className="font-medium text-sm text-gray-800">
                  rktax988@gmail.com
                </p>
                <p className="text-xs text-gray-500">Reply within 24 hrs</p>
              </div>
            </div>

            <div className="w-px h-8 bg-gray-300" />

            <a
              href="https://wa.me/919866654451"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2 rounded-xl border border-green-200 bg-white hover:shadow-md hover:border-green-400 transition duration-300"
            >
              <div className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center shadow-sm">
                <FaWhatsapp className="text-white text-lg" />
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-800">
                  WhatsApp Support
                </p>
                <p className="text-xs text-gray-500">Quick Assistance</p>
              </div>
            </a>
          </div>

          <button
            className="lg:hidden text-[#0B1F5C]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav className="bg-[#0B1F5C] text-white border-b-2 border-[#D4A017]">
        <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-between">
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <NavLink to="/" className={navClass}>
              Home
            </NavLink>

            <a href="/#about" className="hover:text-[#D4A017] transition">
              About Us
            </a>

            <a
              href="/#services"
              className="flex items-center gap-1 hover:text-[#D4A017] transition"
            >
              Services <ChevronDown size={14} />
            </a>

            <a href="/#why" className="hover:text-[#D4A017] transition">
              Why Choose Us
            </a>

            <a href="/#faq" className="hover:text-[#D4A017] transition">
              FAQ
            </a>

            <NavLink to="/contact" className={navClass}>
              Contact Us
            </NavLink>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919866654451"
              className="flex items-center gap-2 border border-[#D4A017] px-4 py-2 rounded-lg hover:bg-[#D4A017] hover:text-black transition"
            >
              <Phone size={16} />
              <span className="text-sm font-medium">Call Us</span>
            </a>

            <button className="flex items-center gap-2 bg-[#D4A017] text-black font-medium px-4 py-2 rounded-lg hover:scale-105 transition">
              <Calendar size={16} />
              <span className="text-sm">Consultation</span>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden px-6 pb-4 flex flex-col gap-3 bg-[#0B1F5C] text-sm">
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>

            <a href="/#about">About Us</a>
            <a href="/#services">Services</a>
            <a href="/#why">Why Choose Us</a>
            <a href="/#faq">FAQ</a>

            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
              Contact Us
            </NavLink>

            <a
              href="tel:+919866654451"
              className="bg-[#D4A017] text-black px-4 py-2 rounded-lg text-center font-medium"
            >
              Call Now
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;