import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Users, Megaphone, Palette, Smile } from "lucide-react";
import { useNavigate } from "react-router-dom";
import supabase from "../../superbaseConfig";

const VolunteerApplication = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    areaOfInterest: "",
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
      const { data, error } = await supabase.from("volunteers").insert([
        {
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          area_of_interest: formData.areaOfInterest,
          reason: formData.reason,
        },
      ]);

      if (error) throw error;

      setSubmissionStatus({
        success: true,
        message: "Application submitted successfully!",
      });

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        areaOfInterest: "",
        reason: "",
      });
    } catch (error) {
      setSubmissionStatus({
        success: false,
        message: error.message || "Submission failed.",
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
      {/* Left Section - Volunteer Opportunities Content */}
      <div className="w-full lg:w-[45%] h-full items-center justify-center text-center px-3 md:p-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary to-secondary p-8 rounded-lg shadow-lg text-white transition-transform transform hover:scale-105"
        >
          <h2 className="text-4xl font-bold mb-6">
            <Smile className="inline-block w-8 h-8 mr-2 text-accent-gold" />
            Volunteer Opportunities
          </h2>
          <p className="text-lg mb-6">
            We are looking for passionate volunteers to join our team and help
            make International Women’s Day 2025 a success!
          </p>
          <ul className="space-y-4 mb-6 text-left">
            <li className="flex items-center">
              <Megaphone className="w-6 h-6 text-accent-gold mr-3" />
              <span>Marketing Volunteer</span>
            </li>
            <li className="flex items-center">
              <Palette className="w-6 h-6 text-accent-teal mr-3" />
              <span>Graphics Design Volunteer</span>
            </li>
            <li className="flex items-center">
              <Users className="w-6 h-6 text-navy mr-3" />
              <span>Community Outreach Volunteer</span>
            </li>
          </ul>
          <motion.img
          loading="lazy"
            src="https://assets.umso.co/1/women_day_2m89.svg" // Replace with your illustration URL
            alt="Illustration"
            className="w-48 h-auto ml-auto mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          />
          <button
            className="lg:hidden px-6 py-3 bg-white text-primary-dark font-semibold rounded-lg hover:bg-navy hover:border-navy hover:text-white transition border-2 border-primary"
            onClick={scrollToForm}
          >
            Apply as a Volunteer
          </button>
        </motion.div>
      </div>

      {/* Right Section - Volunteer Application Form */}
      <div
        ref={formRef}
        className="mt-6 w-[95%] md:w-[60%] mx-auto lg:w-[45%]"
      >
        <h3 className="text-center text-2xl bg-forest-dark  text-white px-5 py-3 rounded-t-xl">Volunteer Application</h3>
        <div className="bg-white  mx-auto p-5 rounded-b-xl shadow-xl">
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
                className="mt-6 px-4 py-2 bg-forest-dark font-medium text-white rounded-lg hover:bg-forest transition"
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
                  Areas of Interest
                </label>
                <select
                  name="areaOfInterest"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  value={formData.areaOfInterest}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select an option</option>
                  <option>Event Management</option>
                  <option>Technical Support</option>
                  <option>Social Media</option>
                  <option>Workshop Facilitation</option>
                  <option>Community Outreach</option>
                  <option>Fundraising</option>
                  <option>Logistics & Operations</option>
                </select>
                {errors.areaOfInterest && (
                  <p className="text-red-600">{errors.areaOfInterest}</p>
                )}
              </div>
              <div>
                <label className="block font-medium text-gray-700">
                  Why do you want to volunteer?
                </label>
                <textarea
                  name="reason"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  rows="4"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                ></textarea>
                {errors.reason && (
                  <p className="text-red-600">{errors.reason}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-navy text-white py-3 rounded-lg hover:bg-navy-dark transition"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Submit Application"}
              </button>
            </motion.form>
          )}
        </div>
      </div>
    </div>
  );
};

export default VolunteerApplication;
