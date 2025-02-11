import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import vibes from "../assets/16.jpeg";

const FollowUsSection = () => {
  return (
    <section className="bg-gradient-to-bl from-primary to-navy text-white py-10">
      <div className="lg:container  lg:mx-auto mx-3 grid md:grid-cols-2 items-center justify-between space-y-8 md:space-y-0">
        {/* Left Side */}
        <div className='px-2 md:px-0'>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Follow Us</h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            Women Techmakers x G3Women
          </h3>
          <p className="mb-6">
            Stay connected with our inspiring community. Follow us on social media to be part of our journey and join the conversations that matter.
          </p>

          {/* Social Media Links - WTM */}
          <div className="md:flex gap-4 mb-6 items-center">
         <div>
         <span className=" text-sm block mb-3 text-center  ">Women Techmakers:</span>
         </div>

           <div className='flex gap-4 justify-center'>
             {/* Facebook */}
             {/* <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-blue-600 hover:text-blue-800 hover:shadow-md transition"
            >
              <Facebook className="w-6 h-6" />
            </a> */}
            {/* Twitter */}
            <a
              href="https://x.com/KanoWtm?t=7gjpu8Uc6obmTkVa9ukhFg&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-blue-400 hover:text-blue-600 hover:shadow-md transition"
            >
              <Twitter className="w-6 h-6" />
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/kanowtm?igsh=YTNhM2Fsd3FicXlk&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 text-white hover:text-white/80 hover:shadow-md transition"
            >
              <Instagram className="w-6 h-6" />
            </a>
            {/* LinkedIn */}
            {/* <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-blue-700 hover:text-blue-900 hover:shadow-md transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          */}
            </div> 
            </div>

          {/* Social Media Links - G3Women */}
          
          <div className="md:flex gap-4  mb-8 ">
         <div className='mb-3'>
             <span className=" text-sm block text-center">G3Women:</span>
         </div>
            <div className='flex gap-3 justify-center'>
                {/* Facebook */}
            {/* <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-blue-600 hover:text-blue-800 hover:shadow-md transition"
            >
              <Facebook className="w-6 h-6" />
            </a> */}
            {/* Twitter */}
            <a
              href="https://x.com/g3womenofficial?s=21"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-blue-400 hover:text-blue-600 hover:shadow-md transition"
            >
              <Twitter className="w-6 h-6" />
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/g3womenofficial?igsh=MW81bWJiaDdhZTF3eA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 text-white hover:text-white/80 hover:shadow-md transition"
            >
              <Instagram className="w-6 h-6" />
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/g3womenofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-blue-700 hover:text-blue-900 hover:shadow-md transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            </div>
          </div>

          {/* Button - G3Women */}
          <button
            onClick={() => window.open('https://join.slack.com/t/g3women/shared_invite/zt-2zm5m7ysz-AIzLlwGup4aaSIhvjY6ytg')}
            className="bg-white block text-navy-dark font-medium border-2 border-navy-dark/50 px-6 py-3 hover:text-white rounded-lg shadow-lg hover:bg-navy-dark transition lg::w-[30%] mx-auto"
          >
            Let's go →
          </button>
        </div>

        {/* Right Side */}
        <div>
          <img
            src={vibes}
            alt="WTM and G3Women"
            className="rounded-xl md:mx-0 mx-auto lg:w-[80vh] md:ml-auto h-[55vh] md:w-[80%] w-[90%]  shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default FollowUsSection;
