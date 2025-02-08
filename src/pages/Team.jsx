import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { team } from "../data/Organizers";
import { Twitter, Linkedin } from "lucide-react";

const filters = [
  { label: "All", value: "all" },
  { label: "Organizers", value: "organizer" },
  { label: "Content", value: "content" },
  { label: "Product", value: "product" },
  { label: "Developers", value: "devs" },
  { label: "Designers", value: "designers" },
];

function Team() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const filteredTeam =
    selectedFilter === "all"
      ? team
      : team.filter((member) => member.tags.includes(selectedFilter));

  return (
    <div className="min-h-screen pt-10 bg-gradient-to-br from-primary-light via-navy to-secondary-dark text-white">
      <motion.section
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="container mx-auto px-6 py-16"
      >
        <h1 className="text-center text-4xl md:text-5xl font-bold mb-4">
          Meet Our Team
        </h1>
        <p className="text-center text-lg text-dark">
          The dedicated individuals working behind the scenes to make this event possible.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {filters.map((filter) => (
            <button
              key={filter.value}
              className={`px-5 py-2 rounded-full text-sm font-semibold border ${
                selectedFilter === filter.value
                  ? "bg-primary-dark text-white border-transparent"
                  : "bg-transparent border-white text-gray-300 hover:bg-primary hover:text-white"
              } transition-all`}
              onClick={() => setSelectedFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {filteredTeam.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 overflow-hidden text-center hover:scale-105 transition-transform duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover rounded-t-2xl hover:opacity-80 transition duration-300"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-accent-gold font-medium">{member.role}</p>
                <p className="text-gray-300 italic mt-3">{member.quote}</p>
                
                {/* Social Media Icons */}
                <div className="mt-4 flex justify-center space-x-4">
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 hover:border-primary-dark hover:bg-primary-dark transition-all"
                  >
                    <Twitter className="w-5 h-5 text-gray-300 hover:text-white transition-all" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 hover:border-primary-dark hover:bg-primary-dark transition-all"
                  >
                    <Linkedin className="w-5 h-5 text-gray-300 hover:text-white transition-all" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}

export default Team;
