import { motion } from 'framer-motion';

function Sponsors() {
  const sponsors = [
    {
      name: "Google",
      logo: "https://developers.google.com/community/gdg/images/logo-lockup-gdg-horizontal_720.png",
      tier: "platinum"
    },
    // Add more sponsor logos
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary-light via-white to-secondary-light">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Partners & Sponsors
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className=""
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="w-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sponsors;