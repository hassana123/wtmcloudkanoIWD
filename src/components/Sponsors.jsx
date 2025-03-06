import { motion } from "framer-motion";
import g3w from "../assets/g3w.png";
import wtm from "../assets/wtm.png";
import google from "../assets/google.png";
import baba from "../assets/baba.png";
// import { div } from "framer-motion/client";
import shamrock from "../assets/partner1.jpg";
import hostspace from "../assets/partner.png";
import ridot from "../assets/ridot.png";
import thezango from "../assets/zango.png";
function Sponsors() {
  const sponsors = [
    { name: "Google", logo: google, tier: "platinum" },
    { name: "Women TechMakers Cloud Kano", logo: wtm, tier: "gold" },
    { name: "Giggles Glow and Grow Women", logo: g3w, tier: "silver" },
    { name: "Baba Ahmed University", logo: baba, tier: "silver" },
    { name: "The Zango", logo: thezango, tier: "media partner" },
    { name: "Shamrock Innovations", logo: shamrock, tier: "partner" },
    { name: "HostSpace Cloud Solutions", logo: hostspace, tier: "sponsor" },
    { name: "Ridot Software Academy", logo: ridot, tier: "partner" },
  ];


  return (
    <section className="py-10 bg-gradient-to-br from-primary-light via-white to-secondary-light">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-navy mb-8"
        >
          Our Partners & Sponsors
        </motion.h2>

        <p className="text-center text-dark max-w-2xl mx-auto mb-12">
          A special thanks to our sponsors who make this event possible.
        </p>

        {/* Sponsor Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 justify-center items-center">
          {sponsors.map((sponsor, index) => (
            <div>
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.08 }}
                className="flex items-center justify-center bg-white/70 backdrop-blur-lg rounded-xl p-4 shadow-md border border-dark/20 hover:shadow-lg hover:border-primary-dark transition-all"
              >
                <div>
                  <img
                    loading="lazy"
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="w-[150px] md:w-[200px] object-cover"
                  />
                  <span className="text-center block text-dark text-sm my-2">
                    {sponsor.name}
                  </span>
                </div>{" "}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Sponsor Us Button */}
        <div className="mt-16 flex justify-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://docs.google.com/presentation/d/1_gmYS6eMM2on6OGJdf3VLL1gnw5QnmEZ0tWMx_-k2_k/edit?usp=sharing"
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
