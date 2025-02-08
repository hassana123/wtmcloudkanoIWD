import { motion } from "framer-motion";

const speakers = [
  {
    name: "Sarah Johnson",
    role: "AI Pioneer",
    company: "Tech Innovations Inc.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Michelle Chen",
    role: "Tech Innovator",
    company: "Future Labs",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Angela Martinez",
    role: "Cybersecurity Expert",
    company: "SecureNet",
    image:
      "https://images.unsplash.com/photo-1594759208462-1d77c3d6d99d?ixid=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
];

function FeaturedSpeakers() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:text-5xl text-4xl font-bold text-center mb-4"
        >
          Featured Speakers
        </motion.h2>

        <p className="text-center text-dark max-w-2xl mx-auto mb-10">
          Meet some of the incredible minds shaping the future of technology.
        </p>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 overflow-hidden hover:shadow-lg hover:border-primary-dark transition-all"
            >
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-64 object-cover rounded-t-2xl hover:opacity-80 transition duration-300"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-2">
                  {speaker.name}
                </h3>
                <p className="text-accent-gold font-medium">{speaker.role}</p>
                <p className="text-gray-300">{speaker.company}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
          <motion.a
            href="https://sessionize.com/IWDKANO25"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 text-center py-4 bg-primary-dark hover:bg-navy transition-all rounded-full text-lg font-semibold text-white shadow-md hover:shadow-blue-500/25 border border-transparent hover:border-white"
          >
            Call for Speakers
          </motion.a>

          <motion.a
            href="/speakers"
            className="px-8 text-center  py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-lg font-semibold text-white transition-all border border-white/30 hover:border-navy-dark"
          >
            View All Speakers
          </motion.a>
        </div>
      </div>
    </section>
  );
}

export default FeaturedSpeakers;
