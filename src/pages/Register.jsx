import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Calendar, Users, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import supabase from "../../superbaseConfig";
import ilt from "../assets/ilt.png"
const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    ticketType: "Standard", // Default ticket type
    reason: "",
  });
  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null); // Reference for smooth scrolling to the form
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmissionStatus(null);

    try {
      const { data, error } = await supabase.from("registrations").insert([{
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        ticket_type: formData.ticketType,
        reason: formData.reason,
      }]);

      if (error) throw error;

      setSubmissionStatus({
        success: true,
        message: "Registration completed successfully!",
      });

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        ticketType: "Standard",
        reason: "",
      });
    } catch (error) {
      setSubmissionStatus({
        success: false,
        message: error.message || "Registration failed.",
      });
      setErrors(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative space-y-3 py-20 mx-auto lg:flex justify-between items-center bg-gradient-to-br from-primary-light via-white to-secondary-light">
      {/* Left Section - Event Details Content */}
      <div className="w-full lg:w-[45%] h-full items-center justify-center text-center px-3 md:p-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary to-secondary p-8 rounded-lg shadow-lg text-white transition-transform transform hover:scale-105"
        >
          <h2 className="text-4xl font-bold mb-6">
            <Calendar className="inline-block w-8 h-8 mr-2 text-accent-gold" />
            Register for IWD 2025
          </h2>
          <p className="text-lg mb-6">
            Join us in celebrating innovation and empowerment at International Women’s Day 2025.
          </p>
          <ul className="space-y-4 mb-6 text-left">
            <li className="flex items-center">
              <MapPin className="w-6 h-6 text-accent-gold mr-3" />
              <span>TBD</span>
            </li>
            <li className="flex items-center">
              <Calendar className="w-6 h-6 text-accent-teal mr-3" />
              <span>March 8th, 2025</span>
            </li>
            <li className="flex items-center">
              <Users className="w-6 h-6 text-navy mr-3" />
              <span>Open to Everyone</span>
            </li>
          </ul>
          <motion.img
            src={ilt} 
            alt="Illustration"
            className="w-48 h-auto ml-auto mb-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          />
          <button
            className="lg:hidden px-6 py-3 bg-white text-primary-dark font-semibold rounded-lg hover:bg-navy hover:border-navy hover:text-white transition border-2 border-primary"
            onClick={scrollToForm}
          >
            Register Now
          </button>
        </motion.div>
      </div>

      {/* Right Section - Registration Form */}
      <div
        ref={formRef}
        className="mt-6 w-[95%] md:w-[60%] mx-auto lg:w-[45%]"
      >
        <h3 className="text-center text-2xl bg-forest-dark text-white px-5 py-3 rounded-t-xl">
          Registration Form
        </h3>
        <div className="bg-white mx-auto p-5 rounded-b-xl shadow-xl">
          {submissionStatus && submissionStatus.success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
              <p className="text-xl text-green-600 mt-4">
                {submissionStatus.message}
              </p>
              <button
                className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                onClick={() => navigate("/")}
              >
                Back to Home
              </button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label className="block font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  name="fullName"
                  type="text"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
                {errors.fullName && (
                  <p className="text-red-600">{errors.fullName}</p>
                )}
              </div>
              <div>
                <label className="block font-medium text-gray-700">Email</label>
                <input
                  name="email"
                  type="email"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && (
                  <p className="text-red-600">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="block font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="tel"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                {errors.phone && (
                  <p className="text-red-600">{errors.phone}</p>
                )}
              </div>
              <div>
                <label className="block font-medium text-gray-700">
                  Why do you want to attend?
                </label>
                <textarea
                  name="reason"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  rows="4"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-navy text-white py-3 rounded-lg hover:bg-navy-dark transition"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Register Now"}
              </button>
            </motion.form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
