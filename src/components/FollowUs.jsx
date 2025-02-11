import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import vibes from "../assets/16.jpeg";

const FollowUsSection = () => {
  return (
    <section className="bg-gradient-to-bl from-primary to-navy text-white py-10">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-between">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Follow Us</h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            Women Techmakers x G3Women
          </h3>
          <p className="mb-6">
            Stay connected with our inspiring community. Follow us on social media to be part of our journey and join the conversations that matter.
          </p>
          {/* Social Media Links */}
          <div className="flex gap-4 mb-6">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-blue-600 hover:text-blue-800 hover:shadow-md transition"
            >
              <Facebook className="w-6 h-6" />
            </a>
            {/* Twitter */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-blue-400 hover:text-blue-600 hover:shadow-md transition"
            >
              <Twitter className="w-6 h-6" />
            </a>
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 text-white hover:shadow-md transition"
            >
              <Instagram className="w-6 h-6" />
            </a>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-blue-700 hover:text-blue-900 hover:shadow-md transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          {/* Button */}
          <button
onClick={() => window.open('https://wtmcloudkano.com', '_blank')}
className="bg-white block text-navy-dark font-medium border-2  border-navy-dark/50 px-6 py-3 hover:text-white rounded-lg shadow-lg hover:bg-navy-dark transition w-[30%] mx-auto"
>
Let's go →
</button>
        </div>

        {/* Right Side */}
        <div>
          <img
            src={vibes}
            alt="WTM and G3Women"
            className="rounded-xl md:w-[80vh] ml-auto h-[55vh] shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default FollowUsSection;
