import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import vibes from "../assets/16.jpeg";

const FollowUsSection = () => {
  return (
    <section className="bg-gradient-to-bl from-primary to-navy text-white py-10">
      <div className="lg:container  lg:mx-auto mx-3 grid md:grid-cols-2 items-center justify-between space-y-8 md:space-y-0">
       
        <div className='px-2 md:px-0'>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Follow Us</h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            Women Techmakers x G3Women
          </h3>
          <p className="mb-6">
            Stay connected with our inspiring community. Follow us on social media to be part of our journey and join the conversations that matter.
          </p>

          

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
