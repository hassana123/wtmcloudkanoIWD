import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import Countdown from "../components/Countdown";
import PastHighlights from "../components/PastHighlights";
import Sponsors from "../components/Sponsors";
import FeaturedSpeakers from "../components/FeaturedSpeakers";
import { MapPin, Calendar, Users, ChevronDown } from "lucide-react";
import Hero from "../assets/herob.png";

function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-between px-8 lg:px-16">
        {/* Background with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${Hero})`,
            backgroundPosition: "center 35%"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-2xl ml-10 mt-20 text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-7xl font-bold mb-6"
          >
            Redefine
            <span className="text-blue-400 block">Possible</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl mb-8 text-gray-200"
          >
            International Women's Day 2025
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-blue-500/25"
            >
              Register Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-lg font-semibold transition-all border border-white/30"
            >
              Apply as a Volunteer
            </motion.button>
          </div>
        </div>

        {/* Countdown Section */}
        <div className="absolute bottom-0 right-[20%] transform translate-x-1/2">
          {/* Decorative Line */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-32 bg-gradient-to-b from-blue-500/0 via-blue-500 to-blue-500">
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full" />
            </div>
          </div>

          {/* Countdown Box */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative mt-32 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl"
          >
            <Countdown targetDate="2025-03-08" />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* Statistics Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-b from-black to-blue-950 text-white"
      >
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-blue-500/50 transition-all"
          >
            <h3 className="text-2xl font-bold mb-2">Attendees</h3>
            <CountUp
              end={500}
              duration={5}
              className="text-4xl font-bold text-blue-400"
            />
            <span className="text-4xl font-bold text-blue-400">+</span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-blue-500/50 transition-all"
          >
            <h3 className="text-2xl font-bold mb-2">Speakers</h3>
            <CountUp
              end={20}
              duration={4}
              className="text-4xl font-bold text-blue-400"
            />
            <span className="text-4xl font-bold text-blue-400">+</span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-blue-500/50 transition-all"
          >
            <h3 className="text-2xl font-bold mb-2">Interactive Sessions</h3>
            <CountUp
              end={10}
              duration={4}
              className="text-4xl font-bold text-blue-400"
            />
            <span className="text-4xl font-bold text-blue-400">+</span>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Speakers Section */}
      <FeaturedSpeakers />
      <PastHighlights />
      <Sponsors />
    </div>
  );
}

export default Home;