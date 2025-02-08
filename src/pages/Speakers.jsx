import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

function Speakers() {
  const speakers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "AI Pioneer",
      company: "Tech Innovations Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      bio: "Leading AI research and development with over 15 years of experience",
      topic: "The Future of AI in Tech",
      day: "Day 1 - Friday",
      social: {
        twitter: "https://twitter.com/sarah",
        linkedin: "https://linkedin.com/in/sarah",
        github: "https://github.com/sarah"
      }
    },
    // Add more speakers...
  ];

  const [flippedCard, setFlippedCard] = useState(null);

  return (
    <div className="min-h-screen  pt-20 pb-10  bg-gradient-to-br from-primary-light via-white to-secondary-light">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-4">Meet Our Speakers</h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Learn from industry leaders and innovators who are reshaping the future of technology
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker) => (
            <motion.div
              key={speaker.id}
              className="relative h-[400px] perspective-1000"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="w-full h-full relative preserve-3d transition-transform duration-700"
                animate={{ rotateY: flippedCard === speaker.id ? 180 : 0 }}
              >
                {/* Front of card */}
                <div className="absolute w-full backface-hidden">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-navy mb-2">{speaker.name}</h3>
                      <p className="text-primary-dark font-medium">{speaker.role}</p>
                      <p className="text-gray-600 mb-4">{speaker.company}</p>
                      <p className="text-sm text-gray-500">{speaker.day}</p>
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
                    <h3 className="text-xl font-bold text-navy mb-4">{speaker.name}</h3>
                    <p className="text-gray-600 mb-6">{speaker.bio}</p>
                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="font-medium text-primary-dark mb-4">Topic: {speaker.topic}</p>
                      <div className="flex space-x-4">
                        <a href={speaker.social.twitter} target="_blank" rel="noopener noreferrer">
                          <FaTwitter className="w-6 h-6 text-gray-600 hover:text-primary-dark" />
                        </a>
                        <a href={speaker.social.linkedin} target="_blank" rel="noopener noreferrer">
                          <FaLinkedin className="w-6 h-6 text-gray-600 hover:text-primary-dark" />
                        </a>
                        <a href={speaker.social.github} target="_blank" rel="noopener noreferrer">
                          <FaGithub className="w-6 h-6 text-gray-600 hover:text-primary-dark" />
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
      </div>
    </div>
  );
}

export default Speakers;