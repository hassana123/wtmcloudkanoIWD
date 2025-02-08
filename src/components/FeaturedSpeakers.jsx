import { motion } from 'framer-motion';

const speakers = [
  {
    name: "Sarah Johnson",
    role: "AI Pioneer",
    company: "Tech Innovations Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Michelle Chen",
    role: "Tech Innovator",
    company: "Future Labs",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Angela Martinez",
    role: "Cybersecurity Expert",
    company: "SecureNet",
    image: "https://images.unsplash.com/photo-1594759208462-1d77c3d6d99d?ixid=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
];

function FeaturedSpeakers() {
  return (
    <section className="py-10 bg-gradient-to-r from-primary-light/20 to-secondary-light/20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Featured Speakers
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-navy">{speaker.name}</h3>
                <p className="text-primary-dark">{speaker.role}</p>
                <p className="text-gray-600">{speaker.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedSpeakers;
