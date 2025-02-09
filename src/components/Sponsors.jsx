import { motion } from "framer-motion";

function Sponsors() {
  const sponsors = [
    {
      name: "Google",
      logo: "https://developers.google.com/community/gdg/images/logo-lockup-gdg-horizontal_720.png",
      tier: "platinum",
    },
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png",
      tier: "gold",
    },
    {
      name: "GitHub",
      logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png",
      tier: "silver",
    },
    {
      name: "IBM",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      tier: "bronze",
    },
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-primary-light via-white to-secondary-light">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-dark mb-8"
        >
          Our Partners & Sponsors
        </motion.h2>

        <p className="text-center text-dark max-w-2xl mx-auto mb-12">
          A special thanks to our sponsors who make this event possible.
        </p>

        {/* Sponsor Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 justify-center items-center">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.08 }}
              className="flex items-center justify-center bg-white/70 backdrop-blur-lg rounded-xl p-4 shadow-md border border-dark/20 hover:shadow-lg hover:border-primary-dark transition-all"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="w-[120px] md:w-[150px] object-contain"
              />
            </motion.div>
          ))}
        </div>

        {/* Sponsor Us Button */}
        <div className="mt-16 flex justify-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="px-8 py-4 bg-primary-dark hover:bg-navy transition-all rounded-full text-lg font-semibold text-white shadow-md hover:shadow-blue-500/25 border border-transparent hover:border-white"
          >
            Sponsor Us
          </motion.a>
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
