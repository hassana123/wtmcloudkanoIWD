import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Calendar, Users, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import supabase from "../../superbaseConfig";
import ilt from "../assets/ilt.png";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    reason: "",
    eventSource: "",
    breakoutRoom: "",
  });
  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    else if (!/^[\w.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email))
      newErrors.email = "Invalid email format.";
    if (!formData.phone) newErrors.phone = "Phone number is required.";
    else if (!/^\d{10,15}$/.test(formData.phone))
      newErrors.phone = "Phone number must be between 10-15 digits.";
    if (!formData.reason) newErrors.reason = "Reason for attending is required.";
    if (!formData.eventSource)
      newErrors.eventSource = "Please select how you learned about the event.";
    if (!formData.breakoutRoom)
      newErrors.breakoutRoom = "Please select a breakout room.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmissionStatus(null);

    if (!validateForm()) {
      setIsLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase.from("attendees").insert([
        {
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          reason: formData.reason,
          event_source: formData.eventSource,
          breakout_room: formData.breakoutRoom,
        },
      ]);

      if (error) throw error;

      setSubmissionStatus({
        success: true,
        message: "Registration completed successfully!",
      });

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        reason: "",
        eventSource: "",
        breakoutRoom: "",
      });
    } catch (error) {
      setSubmissionStatus({
        success: false,
        message: error.message || "Registration failed.",
      });
      setErrors({ general: error.message });
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
              <span>Baba Ahmad University</span>
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
            loading="lazy"
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
              <CheckCircle className="h-16 w-16 text-forest-dark mx-auto" />
              <p className="text-xl text-accent-teal mt-4">
                {submissionStatus.message}
              </p>
              <button
                className="mt-6 px-4 py-2 bg-forest-dark text-white font-medium rounded-lg hover:bg-blue-600 transition"
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
              {errors.general && (
                <p className="text-red-600 text-center">{errors.general}</p>
              )}
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
                  How did you learn about this event?
                </label>
                <select
                  name="eventSource"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  value={formData.eventSource}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select an option</option>
                  <option value="social_media">Social Media</option>
                  <option value="community_notification">Notified by this community</option>
                  <option value="meetup">Women TechMakers Group</option>
                  <option value="friend_recommendation">Recommended by a friend or peer</option>
                  <option value="other">Other</option>
                </select>
                {errors.eventSource && (
                  <p className="text-red-600">{errors.eventSource}</p>
                )}
              </div>
              <div>
                <label className="block font-medium text-gray-700">
                  Select Breakout Room
                </label>
                <select
                  name="breakoutRoom"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  value={formData.breakoutRoom}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a breakout room</option>
                  <option value="resume_building">Resume Building </option>
                  <option value="codewars">Code War Rooms(DSA)</option>
                  <option value="cloud_devops">Cloud & DevOps Hands-on Workshop</option>
                  <option value="soft_skills">Soft Skills for Career Growth</option>
                </select>
                {errors.breakoutRoom && (
                  <p className="text-red-600">{errors.breakoutRoom}</p>
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
