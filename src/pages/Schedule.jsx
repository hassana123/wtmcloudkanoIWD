import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

function Schedule() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTrack, setActiveTrack] = useState('all');

  const tracks = [
    { id: 'all', name: 'All Tracks' },
    { id: 'leadership', name: 'Leadership & Innovation' },
    { id: 'technical', name: 'Technical Skills & AI' },
    { id: 'career', name: 'Career Development' },
    { id: 'entrepreneurship', name: 'Entrepreneurship' },
  ];

  const scheduleItems = [
    {
      time: "9:00 AM",
      title: "Registration & Networking",
      track: "general",
      description: "Start your day with networking and registration",
    },
    // Add more schedule items
  ];

  const filteredSchedule = activeTrack === 'all'
    ? scheduleItems
    : scheduleItems.filter(item => item.track === activeTrack);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light via-white to-secondary-light pt-20 bg-gradient-to-br from-primary-light via-white to-secondary-light">
      <motion.section
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-16"
      >
        <h1 className="section-title text-center">Event Schedule</h1>
        <p className="section-subtitle text-center">
          Join us for a day filled with inspiring talks, workshops, and networking opportunities.
        </p>

        {/* Track Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tracks.map((track) => (
            <motion.button
              key={track.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTrack(track.id)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeTrack === track.id
                  ? 'bg-primary-dark text-white'
                  : 'bg-white text-gray-600 hover:bg-primary-light'
              }`}
            >
              {track.name}
            </motion.button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-12">
          {filteredSchedule.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: index * 0.1 }}
              className="mb-6 bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform"
            >
              <div className="flex flex-col md:flex-row items-center p-6">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <span className="text-lg font-bold text-primary-dark">{item.time}</span>
                </div>
                <div className="md:w-1/2 mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold text-navy">{item.title}</h3>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                </div>
                <div className="md:w-1/4 text-right">
                  <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-secondary-light text-secondary-dark">
                    {item.track}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}

export default Schedule;