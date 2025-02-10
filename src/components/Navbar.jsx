import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/wtm.png";
import g3w from "../assets/g3w.png";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "FAQs", path: "/faqs" },
    { name: "Schedule", path: "/schedule" },
    { name: "Speakers", path: "/speakers" },
    { name: "Team", path: "/team" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className=" mx-auto px-4  lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <img className="h-10 w-auto" src={logo} alt="WTM Cloud Kano" />
              <span className="text-2xl font-bold text-navy">×</span>
              <img className="h-10 w-auto" src={g3w} alt="G3W" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center space-x-3 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`lg:text-md md:text-sm font-semibold transition-colors duration-300 ${
                  location.pathname === link.path
                    ? "text-primary-dark border-b-2 border-primary-dark"
                    : "text-accent hover:text-primary-dark hover:border-b-2 border-transparent"
                } px-3 py-2 ${isScrolled ? "" : "text-dark"} `}
              >
                {link.name}
              </Link>
            ))}
          </div>

         {location.pathname ==="/register"?"":   <motion.a
              href="https://gdg.community.dev/events/details/google-gdg-cloud-kano-presents-international-womens-day-kano-2025-building-breaking-leading/"
              target="_blank"
              rel="noopener noreferrer"
              className="md:block hidden btn-primary md:px-3 lg:px-5 py-[5px] rounded-xl lg:text-lg md:text-sm font-semibold shadow-md hover:shadow-lg transition"
            >
              Register Now
            </motion.a>}

          {/* Mobile menu button */}
          <div className={`md:hidden flex items-center1 `}>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-dark"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMobileMenuOpen ? "hidden" : "block"} h-8 w-8 ${
                  isScrolled ? "" : "text-dark"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMobileMenuOpen ? "block" : "hidden"} h-8 w-8`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          y: isMobileMenuOpen ? 0 : -20,
        }}
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:hidden bg-white shadow-lg`}
      >
        <div className="px-4 pt-4 pb-6 space-y-3  mb-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block  px-4 py-2 rounded-md text-lg font-medium transition-all ${
                location.pathname === link.path
                  ? "text-primary-dark bg-primary-light shadow-md"
                  : "text-gray-700 hover:text-primary-dark hover:bg-gray-100"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        {location.pathname ==="/register"?"":   <motion.a
              href="https://gdg.community.dev/events/details/google-gdg-cloud-kano-presents-international-womens-day-kano-2025-building-breaking-leading/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block btn-primary mt-4 py-3 rounded-lg text-lg font-semibold shadow-md hover:shadow-lg transition"
            >
              Register Now
            </motion.a>}
        </div>
      </motion.div>
    </motion.nav>
  );
}

export default Navbar;
