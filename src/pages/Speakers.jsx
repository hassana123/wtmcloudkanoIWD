import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaTwitter, FaLinkedin, FaMailchimp, FaMailBulk, FaInstagram } from 'react-icons/fa';
import {speakers} from "../data/Speakers"
function Speakers() {
  
  const [flippedCard, setFlippedCard] = useState(null);

  return (
    <div className="h-full pt-10 pb-10 bg-gradient-to-br from-primary-light via-white to-secondary-light">
      <div className="container mx-auto  py-10">
        <h1 className="text-5xl font-bold text-center mb-4">Meet Our Speakers</h1>
        <p className="text-xl text-gray-600 text-center mb-6 max-w-2xl mx-auto">
          Learn from industry leaders and innovators who are reshaping the future of technology
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {speakers.map((speaker) => (
            <motion.div
              key={speaker.id}
              className="relative h-[400px] mb-[85px] perspective-1000 "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="w-full h-full relative   preserve-3d transition-transform duration-700"
                animate={{ rotateY: flippedCard === speaker.id ? 180 : 0 }}
              >
                {/* Front of card */}
                <div className="absolute w-full   backface-hidden">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
                    <div className="aspect-w-16 aspect-h-fit-content">
                      <img
                      loading="lazy"
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-navy mb-2">{speaker.name}</h3>
                      <p className="text-primary-dark mb-2 font-medium text-sm">{speaker.role}</p>
                      <p className="text-dark mb-2 text-sm">{speaker.topic}</p>
                    
                      <button
                        onClick={() => setFlippedCard(speaker.id)}
                        className="mt-4 px-6 py-2 bg-primary-dark text-white rounded-full hover:bg-primary transition-colors"
                      >
                        View Bio
                      </button>
                    </div>
                  </div>
                </div>

                {/* Back of card */}
                <div className=" w-full h-full backface-hidden rotate-y-180">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full p-6">
                    <h3 className="text-lg font-semibold text-navy mb-4">{speaker.name}</h3>
                    <p className="text-dark mb-6">{speaker.bio}</p>
                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="font-medium text-primary-dark mb-4">Topic: {speaker.topic}</p>
                      <div className="flex space-x-4">
  {speaker.social.linkedin && (
    <a href={speaker.social.linkedin} target="_blank" rel="noopener noreferrer">
      <FaLinkedin className="text-blue-700 text-2xl hover:text-blue-900 transition" />
    </a>
  )}
  {speaker.social.twitter && (
    <a href={speaker.social.twitter} target="_blank" rel="noopener noreferrer">
      <FaTwitter className="text-blue-500 text-2xl hover:text-blue-700 transition" />
    </a>
  )}
  {speaker.social.instagram && (
    <a href={speaker.social.instagram} target="_blank" rel="noopener noreferrer">
      <FaInstagram className="text-pink-600 text-2xl hover:text-pink-800 transition" />
    </a>
  )}
  {speaker.social.email && (
    <a href={`mailto:${speaker.social.email}`} target="_blank" rel="noopener noreferrer">
      <FaMailBulk className="text-gray-700 text-2xl hover:text-gray-900 transition" />
    </a>
  )}
</div>
                      <button
                        onClick={() => setFlippedCard(null)}
                        className="mt-4 px-6 py-2 bg-primary-dark text-white rounded-full hover:bg-primary transition-colors"
                      >
                        Back to Card
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Speakers;