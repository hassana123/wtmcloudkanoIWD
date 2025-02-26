import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // Import Lucide icons

function FAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const faqs = [
    {
      question: "What is this event about?",
      answer: "This event celebrates International Women's Day by bringing together Nigeria's brightest minds to discuss the role of women in shaping the future of technology, particularly in AI. We aim to inspire, educate, and create opportunities for women in tech.",
    },
    {
      question: "What is the theme of the event?",
      answer: "The theme, 'Redefine Possible,' challenges traditional boundaries in technology and encourages women to take charge of shaping AI and the tech industry’s future.",
    },
    {
      question: "When and where will the event take place?",
      answer: "The event will be physical, on the 8th of March 2025 At Baba Ahmed University, Phase 1, No 306, sharada, kano 700234, Kano",
    },
    {
      question: "Who can attend this event?",
      answer: "This event is open to women in tech, aspiring technologists, industry professionals, students, and allies who support gender diversity in technology.",
    },
    {
      question: "Can men attend this event?",
      answer: "This event is designed as a dedicated space for women in technology, fostering a supportive and empowering environment.",
    },
    {
      question: "How do I register for the event?",
      answer: (
        <span>
          You can register online via this{" "}
          <a
            href="https://gdg.community.dev/events/details/google-gdg-cloud-kano-presents-international-womens-day-kano-2025-building-breaking-leading/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            link
          </a>
          . We encourage early registration as slots may be limited.
        </span>
      ),
    },
    {
      question: "Is there a registration fee?",
      answer: "No, the event is free to attend, but prior registration is required.",
    },
    {
      question: "Will there be networking opportunities?",
      answer: "Yes! We have networking sessions designed to connect attendees with industry leaders, mentors, and peers.",
    },
    {
      question: "How can I become a sponsor or partner for the event?",
      answer: (
        <span>
          If you’re interested in sponsoring or supporting the event, please{" "}
          <a
            href="https://docs.google.com/presentation/d/1_gmYS6eMM2on6OGJdf3VLL1gnw5QnmEZ0tWMx_-k2_k/edit#slide=id.g2d817b25dee_4_4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            contact us here
          </a>
          .
        </span>
      ),
    },
    {
      question: "Who do I contact for further inquiries?",
      answer: "For any additional questions, reach out to us at g3womenofficial@gmail.com.",
    },
    {
      question: "Will there be prayer sections?",
      answer: "Designated prayer areas shall be provided.",
    },
  ];

  // State to track which FAQ is open
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index); // Toggle open/close
  };

  return (
    <div className="pt-10 bg-gradient-to-br from-primary-light via-white to-secondary-light">
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="container md:w-[70%] mx-auto px-4 py-16"
      >
        <h1 className="text-center text-dark md:text-5xl text-3xl font-bold mb-4">Questions We Get Asked</h1>
        <p className="text-center text-lg text-dark mb-8">Find answers to some of the most commonly asked questions about our upcoming International Women's Day event. Get all the details you need to attend and participate!</p>

        <div className=" ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-dark mb-8"
          >
            {/* Looping through the FAQ array */}
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4 rounded-lg border-2 bg-white/20 shadow-lg backdrop-blur-xl  border-navy/50 py-2 px-3">
                <div
                  className="flex items-center justify-between cursor-pointer   transition-all"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="font-medium text-lg text-dark">{index + 1}. {faq.question}</h3>
                  <span
                    className={`transform transition-all text-dark ${openFAQIndex === index ? "rotate-180" : ""}`}
                    style={{ fontSize: "20px", color: "" }}
                  >
                    {openFAQIndex === index ? <ChevronUp className="text" /> : <ChevronDown />} {/* Lucide arrow icon */}
                  </span>
                </div>
                {openFAQIndex === index && <p className="p-4 text-gray-700">{faq.answer}</p>} {/* Display answer when open */}
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default FAQ;
