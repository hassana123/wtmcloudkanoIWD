import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import Countdown from "../components/Countdown";
import PastHighlights from "../components/PastHighlights";
import Sponsors from "../components/Sponsors";
import FeaturedSpeakers from "../components/FeaturedSpeakers";
import { MapPin, Calendar, Users, ChevronDown, Globe, Twitter, Instagram } from "lucide-react";
import hero from "../assets/herob.png";
import wtm from "../assets/wtm.png"
import g3w from "../assets/g3w.png"
import google from "../assets/google.png"
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
      <section className="relative h-screen overflow-hidden ">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center "
          style={{
            backgroundImage: `url(${hero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
          }}
        />

        {/* Main Content */}
        <div className="relative mx-auto ">
         
          <div className="flex flex-col md:flex-row items-start ">
           
            {/* Right Content - Event Details (moved to right to avoid overlap) */}
            <div className="w-full md:w-[50%] md:ml-auto md:mr-5 mt-[50px]  h-[70vh] pt-[60px] bg-gradient-to-br from-primary/20 via-white/5 to-secondary/50 backdrop-blur-sm rounded-xl px-5 ">
            <div className="md:hidden block">
          <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl text-navy  font-bold mb-6"
              >
                Redefine
                <span className="text-primary-dark block md:mt-0 mt-3 md:ml-0 ml-[45%]">Possible</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-2xl  mb-8  text-dark "
              >
                International Women's Day 2025
              </motion.p>
          </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all shadow-lg"
                  >
                    Register Now
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white/80 backdrop-blur-sm text-blue-500 rounded-full hover:bg-white/90 transition-all border-2 border-blue-500"
                  >
                    Apply as a Volunteer
                  </motion.button>
                </div>

                {/* Event Details Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-4 bg-white/90 inline-block w-fit-content backdrop-blur-sm p-6 rounded-2xl shadow-lg"
                >
                   <span className="text-sm font-bold text-navy ">
                  Celebrating Women in Tech <span className="bg-navy mx-2 py-2 px-3 rounded-xl text-white">IWD 2024</span>
                </span>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-3"
                  >
                    <MapPin className="w-6 h-6 text-accent-gold" />
                    <span className="text-dark">Landmark Event Center</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-3"
                  >
                    <Calendar className="w-6 h-6 text-accent-teal" />
                    <span className="text-dark">8th March 2025</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-3"
                  >
                    <Users className="w-6 h-6 text-primary" />
                    <span className="text-dark">Open to Everyone</span>
                  </motion.div>
                </motion.div>

                {/* Countdown */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-navy/70 backdrop-blur-sm py-4 mx-auto rounded-2xl shadow-lg w-fit-content"
                >
                  <Countdown targetDate="2025-03-08" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

      {/* footer organizers */}
      <div className="absolute bottom-0 w-full h-16 overflow-hidden bg-navy/80">
        <div className="marquee-container flex w-full items-center h-full overflow-hidden relative">
          {/* Scrolling Content */}
          <div className="flex animate-scroll whitespace-nowrap">
            {/* First Set of Items */}
            <div className="flex items-center justify-center px-8 space-x-12">
              <div className="flex items-center justify-center font-semibold text-sm text-white">
                <img src={wtm} alt="Women Techmakers" className="h-8 mr-2" />
                Women Techmakers
              </div>
              <div className="flex items-center justify-center font-semibold text-sm text-white">
                <img src={g3w} alt="G3women" className="h-8 mr-2" />
                G3women
              </div>
              <div className="flex items-center justify-center font-semibold text-sm text-white">
                <img src={google} alt="Grow with Google" className="h-8 mr-2" />
                Grow with Google
              </div>
            </div>

            {/* Second Set of Items (Duplicate for Infinite Loop) */}
            <div className="flex items-center justify-center px-8 space-x-12">
              <div className="flex items-center justify-center font-semibold text-sm text-white">
                <img src={wtm} alt="Women Techmakers" className="h-8 mr-2" />
                Women Techmakers
              </div>
              <div className="flex items-center justify-center font-semibold text-sm text-white">
                <img src={g3w} alt="G3women" className="h-8 mr-2" />
                G3women
              </div>
              <div className="flex items-center justify-center font-semibold text-sm text-white">
                <img src={google} alt="Grow with Google" className="h-8 mr-2" />
                Grow with Google
              </div>
            </div>
          </div>
        </div>
        </div>

       {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-blue-500"
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
        className="py-10 bg-gradient-to-b from-black to-blue-950 text-white"
      >
        <div className="container mx-auto md:text-left text-center px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
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
              duration={5}
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
              duration={5}
              className="text-4xl font-bold text-blue-400"
            />
            <span className="text-4xl font-bold text-blue-400">+</span>
          </motion.div>
        </div>
      </motion.section>

      <FeaturedSpeakers />
      <PastHighlights />
      <Sponsors />
    </div>
  );
}

export default Home;