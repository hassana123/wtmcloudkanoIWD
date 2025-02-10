import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen pt-10 bg-gradient-to-br from-primary-light via-white to-secondary-light">
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-16"
      >
        <h1 className="section-title text-center">About the Event</h1>
        <div className="max-w-4xl mx-auto">
          {/* Introduction to the Event */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-700 mb-8"
          >
            We stand at a pivotal moment where AI is transforming our world—bringing unprecedented opportunities but also risking the amplification of gender biases and systemic barriers. Join us this International Women's Day as we bring together Nigeria's brightest minds to redefine what's possible in technology.
          </motion.p>

          {/* What is IWD? */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-700 mb-8"
          >
            International Women's Day (IWD) is a global celebration of the social, economic, cultural, and political achievements of women. It is also a call to action to accelerate gender parity and inspire individuals to challenge stereotypes and biases.
          </motion.p>

          {/* Theme */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 }}
            className="bg-primary-light rounded-lg p-6 mb-12"
          >
            <h3 className="text-xl font-bold text-navy mb-4">Theme: <span className="bg-white/60 px-5 py-3 rounded-3xl">Redefine Possible</span> </h3>
            <p className="text-gray-700">
              The theme "Redefine Possible" challenges the boundaries of what technology can achieve and reimagines who shapes its future. We are at a pivotal moment where AI is transforming our world—bringing unprecedented opportunities but also risking the amplification of gender biases and systemic barriers. As artificial intelligence becomes woven into society, women are not just participating in its development—they're revolutionizing it, breaking conventions, and expanding the horizons of what technology can and should be.
            </p>
            <ul className="mt-4 text-gray-700 list-disc pl-5">
              <li>Breaking old rules about what's possible in technology and creating new paths forward.</li>
              <li>Putting women in the driver's seat of technology's future, not just along for the ride.</li>
              <li>Bringing different viewpoints together to create better technology for everyone.</li>
              <li>Building technology that helps everyone and thinks about tomorrow, not just today.</li>
              <li>Taking control of technology's future instead of waiting for others to shape it.</li>
            </ul>
          </motion.div>

          {/* Mission & Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
          >
            <div className="bg-primary-light rounded-lg p-6">
              <h3 className="text-xl font-bold text-navy mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To inspire and empower women in technology through knowledge sharing, networking, and creating opportunities for growth and innovation.
              </p>
            </div>

            <div className="bg-secondary-light rounded-lg p-6">
              <h3 className="text-xl font-bold text-navy mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To build a more inclusive and diverse tech ecosystem where women are equally represented and empowered to lead technological advancement.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default About;
