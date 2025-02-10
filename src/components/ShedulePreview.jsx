import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { scheduleItems } from '../data/Shedule';

function SchedulePreview() {
  // We are limiting the schedule to 2 events for the preview
  const previewSchedule = scheduleItems.slice(3,4);

  return (
    <div className="bg-gradient-to-br from-primary-light via-white to-secondary-light py-12">
      <div className="container mx-auto ">
        <h2 className="section-title text-center">Upcoming Events</h2>
        <p className="section-subtitle text-center mb-8">
          Check out some of the exciting sessions lined up for the event.
        </p>

        <div className="md:w-[80%] mx-auto">
          {previewSchedule.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-6 bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform"
            >
              <div className="flex flex-col md:flex-row items-center px-5 py-3">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <span className="text-lg font-bold text-primary-dark">{item.time}</span>
                </div>
                <div className="md:w-1/2 mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold text-navy">{item.title}</h3>
                  <p className="text-dark mt-2">{item.description}</p>
                </div>
                <div className="md:w-1/4 text-right">
                  <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-secondary-light text-secondary-dark">
                    {item.track}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}

          {/* View Schedule Button */}
          <div className="text-center">
            <Link
              to="/schedule"  // Link to the actual schedule page
              className="px-6 py-3 mt-6 bg-primary-dark text-white font-semibold rounded-full hover:bg-primary-light transition-colors"
            >
              View Full Schedule
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SchedulePreview;
