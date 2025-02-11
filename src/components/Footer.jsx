import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import logo from "../assets/wtm.png";
import g3w from "../assets/g3w.png";

function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto md:px-4 px-2 py-12">
        {/* About Section */}
        <div className="text-center mb-20 mx-auto">
          <h3 className="text-lg font-semibold mb-4 border-2 border-white/70 inline-block px-6 py-2 rounded-full">About Us</h3>
          <p className="text-white mb-3">
            International Women's Day (IWD) celebrates the achievements of women and calls for accelerated gender parity. The theme "Redefine Possible" challenges the boundaries of technology and reimagines who shapes its future. As AI becomes integral to society, women are leading the charge in revolutionizing its development, breaking conventions, and expanding the horizons of what technology can and should be.
          </p>
          <p className="text-white mb-3">
            <strong>Our Mission:</strong> To inspire and empower women in technology through knowledge sharing, networking, and creating opportunities for growth and innovation.
          </p>
          <p className="text-white mb-6">
            <strong>Our Vision:</strong> To build a more inclusive and diverse tech ecosystem where women are equally represented and empowered to lead technological advancement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Social Media Links */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex space-x-3">
              <img
                src={logo}
                alt="WTM Cloud Kano"
                className="h-8 w-auto mb-4"
              />
              <img
                src={g3w}
                alt="Giggles Glow And Grow"
                className="h-8 w-auto mb-4"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Empowering women in technology to redefine what's possible.
            </p>

            {/* Follow Us Section */}
            <div className="mb-6">
              <h4 className="font-semibold text-lg">Follow Us</h4>
              {/* WTM Links */}
              <p className="mt-2 text-sm">Follow Women Techmakers (WTMCloudKano):</p>
              <div className="flex space-x-4 mb-4">
                <a
                  href="https://x.com/KanoWtm?t=7gjpu8Uc6obmTkVa9ukhFg&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  <FaTwitter className="h-6 w-6" />
                </a>
                {/* <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  <FaLinkedin className="h-6 w-6" />
                </a> */}
                <a
                  href="https://www.instagram.com/kanowtm?igsh=YTNhM2Fsd3FicXlk&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  <FaInstagram className="h-6 w-6" />
                </a>
              </div>

              {/* G3W Links */}
              <p className="mt-2 text-sm">Follow G3Women (G3W):</p>
              <div className="flex space-x-4">
                <a
                  href="https://x.com/g3womenofficial?s=21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  <FaTwitter className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/company/g3womenofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  <FaLinkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://www.instagram.com/g3womenofficial?igsh=MW81bWJiaDdhZTF3eA%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  <FaInstagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faqs" className="text-gray-300 hover:text-primary transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/schedule" className="text-gray-300 hover:text-primary transition-colors">
                  Schedule
                </Link>
              </li>
              <li>
                <Link to="/speakers" className="text-gray-300 hover:text-primary transition-colors">
                  Speakers
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-primary transition-colors">
                  Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-300 mb-2">Email: g3women@gmail.com</p>
            <p className="text-gray-300">Location: Kano, Nigeria</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Women Techmakers Cloud Kano. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
