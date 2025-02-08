import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <img
              src="/logo.svg"
              alt="WTM Cloud Kano"
              className="h-8 w-auto mb-4"
            />
            <p className="text-gray-300 mb-4">
              Empowering women in technology to redefine what's possible.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <FaTwitter className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition-colors">
                  About
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