import { motion } from "framer-motion";
import { useState } from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { speakers } from "../data/Speakers";

function FeaturedSpeakers() {
  const [flippedCard, setFlippedCard] = useState(null);

  return (
    <section className="py-10 pb-20 bg-gradient-to-br from-primary-light via-white to-secondary-light">
      <div className="container mx-auto ">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:text-5xl text-4xl font-bold text-center mb-4 text-navy"
        >
          Featured Speakers
        </motion.h2>

        <p className="text-center text-dark max-w-2xl mx-auto mb-10">
          Meet some of the incredible minds shaping the future of technology.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto mb-10">
          {speakers.slice(0,3).map((speaker) => (
            <motion.div
              key={speaker.id}
              className="relative h-[400px] md:mb-0 mb-[55px] perspective-1000"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <motion.div
                className="w-full h-full relative preserve-3d transition-transform duration-700"
                animate={{ rotateY: flippedCard === speaker.id ? 180 : 0 }}
              >
                {/* Front of card */}
                <div className="absolute w-full   backface-hidden">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
                    <div className="aspect-w-16  ] aspect-h-fit-content">
                      <img
                      loading="lazy"
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <h3 className="text-lg font-semibold text-navy mb-2">
                        {speaker.name}
                      </h3>
                      <p className="text-primary-dark mb-2 font-medium">
                        {speaker.role}
                      </p>
                      <p className="text-dark text-md mb-2">{speaker.topic}</p>
                      
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
                <div className="absolute w-full h-full backface-hidden rotate-y-180">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full p-6">
                    <h3 className="text-xl font-bold text-navy mb-4">
                      {speaker.name}
                    </h3>
                    <p className="text-gray-600 mb-6">{speaker.bio}</p>
                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="font-medium text-primary-dark mb-4">
                        Topic: {speaker.topic}
                      </p>
                      <div className="flex space-x-4">
                        <a
                          href={speaker.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaTwitter className="w-6 h-6 text-primary hover:text-primary-dark" />
                        </a>
                        <a
                          href={speaker.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaLinkedin className="w-6 h-6 text-primary-dark hover:text-primary" />
                        </a>
                        <a
                          href={speaker.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub className="w-6 h-6 text-dark hover:text-dark/60" />
                        </a>
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
           {/* Buttons */}
           <div className="mt-[120px] flex flex-col sm:flex-row justify-center gap-6">
          <motion.a
            href="https://sessionize.com/IWDKANO25"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 text-center py-4 bg-primary-dark hover:bg-navy transition-all rounded-full text-lg font-semibold text-white shadow-md hover:shadow-blue-500/25 border border-transparent hover:border-white"
          >
        Apply To Speak
          </motion.a>

          <motion.a
            href="/speakers"
            className="px-8 text-center  py-4 bg-white hover:bg-primary  rounded-full text-lg font-semibold text-dark transition-all border border-primary/90 hover:border-navy-dark"
          >
            View All Speakers
          </motion.a>
        </div>

      </div>
    </section>
  );
}

export default FeaturedSpeakers;
