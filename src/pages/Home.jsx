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
import HeroMobile from "../assets/herobm.png";

function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
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
      <section className="relative h-screen  px-3 lg:px-16 overflow-hidden">
        {/* Background with overlay */}
        <div
          className="absolute inset-0  bg-cover bg-center"
          style={{
            backgroundImage: `url(${isMobile ? HeroMobile : Hero})`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/50" />
        </div>

        {/* Main Content */}
        <div className="relative sm:mt-[] md:mt-[200px] mt-[80px]   text-white">
          <div className="flex md:flex-row flex-col-reverse md:w-[90%] mx-auto  justify-between">
            <div className="md:w-[70%] rp mt-20 md:mt-0">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl lg:text-7xl font-bold mb-3 md:mb-6"
              >
                Redefine
                <span className="text-primary-dark block">Possible</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl lg:text-2xl md:mb-8 mb-2 text-navy "
              >
                International Women's Day 2025
              </motion.p>
              <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-primary-dark hover:bg-navy rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-blue-500/25 md:mx-0 mx-auto"
                >
                  Register Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mx-auto md:mx-0 md:px-8 px-3 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-lg font-semibold transition-all border border-white/30 hover:border-navy-dark"
                >
                  Apply as a Volunteer
                </motion.button>
              </div>
            </div>
            <div>
              {/* Event Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-3 text-lg md:mt-0 mt-3 font-medium bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 text-white"
                >
                  <MapPin className="w-6 h-6 text-accent-gold" />
                  <span>Landmark Event Center</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 text-white"
                >
                  <Calendar className="w-6 h-6 text-primary" />
                  <span>8th March 2025</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 text-white"
                >
                  <Users className="w-6 h-6 text-secondary" />
                  <span>Open to Everyone</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Countdown Section with Enhanced Decorative Lines */}
        <div className="absolute bottom-[0%] md:right-[20%] right-[50%] transform translate-x-1/2">
          {/* Decorative Lines */}
          <div className="relative hidden md:block ">
            {/* Main Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-32 bg-gradient-to-b from-blue-500/0 via-blue-500 to-blue-500">
              {/* Dots on Main Line */}
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full" />
              <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full" />
              <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full" />

              {/* Branch Lines */}
              <div className="absolute top-1/4 left-0 w-8 h-[2px] bg-gradient-to-l from-blue-500 to-blue-500/0">
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full" />
              </div>
              <div className="absolute top-1/2 right-0 w-8 h-[2px] bg-gradient-to-r from-blue-500 to-blue-500/0">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full" />
              </div>
              <div className="absolute top-3/4 left-0 w-12 h-[2px] bg-gradient-to-l from-blue-500 to-blue-500/0">
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full" />
              </div>
            </div>
          </div>

          {/* Countdown Box */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative mt-32 bg-white/10 backdrop-blur-md rounded-2xl md:p-6 p-3 border border-white/20 shadow-2xl"
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
