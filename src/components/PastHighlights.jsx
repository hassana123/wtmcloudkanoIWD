import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

function PastHighlights() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const highlights = [
    {
      image: "https://example.com/past-event-1.jpg",
      title: "IWD 2024",
      description: "A memorable celebration of women in technology"
    },
    // Add more past event images
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % highlights.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-navy text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Past Highlights
        </motion.h2>

        <div className="relative overflow-hidden rounded-xl">
          <motion.div
            animate={{ x: `${-currentSlide * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="flex"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="min-w-full"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="w-full h-[600px] object-cover rounded-xl"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-2xl font-bold mb-2">{highlight.title}</h3>
                  <p>{highlight.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {highlights.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PastHighlights;