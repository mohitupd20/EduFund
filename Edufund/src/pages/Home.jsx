import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BookOpen, Users, CreditCard, HandHelping } from "lucide-react";
import Edu from "../assets/Edu.png";

const LandingPage = () => {
  const [activeTab, setActiveTab] = useState("donors");
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.1, 1.8], [1, 2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const featuresData = {
    donors: {
      title: "Empower Students, Transform Lives",
      description:
        "Make a direct impact by supporting promising students in their educational journey.",
      icon: <HandHelping className="w-12 h-12 text-blue-600" />,
      benefits: [
        "Transparent donation tracking",
        "Direct support to students",
        "Blockchain-verified contributions",
      ],
    },
    students: {
      title: "Your Education, Your Opportunity",
      description:
        "Access financial support and unlock your academic potential.",
      icon: <BookOpen className="w-12 h-12 text-green-600" />,
      benefits: [
        "Personalized scholarship matching",
        "Secure fund management",
        "Community support network",
      ],
    },
  };

  const HowItWorksStep = ({ number, title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
      <div className="text-5xl font-bold text-blue-500 mb-4">{number}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );

  if (!isClient) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.div
        className="relative min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 text-white"
        style={{ scale, opacity }}
      >
        <div className="h-130 w-full  flex items-center justify-center rounded-lg">
          <img
            src={Edu}
            alt="Example Image"
            class="w-auto h-full  object-cover rounded-lg"
          />
        </div>

        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-serif  font-bold mb-6 animate-fade-in">
            EduFund: Bridging Dreams and Opportunities
          </h1>
          <p className="text-xl font-serif max-w-2xl mx-auto mb-8">
            A blockchain-powered platform connecting passionate donors with
            ambitious students
          </p>
          <div className="flex justify-center space-x-4">
            <button className="border border-white font-mono px-6 py-3 rounded-full hover:bg-white hover:text-blue-600 cursor-pointer transition">
              Learn More
            </button>
          </div>
        </div>
      </motion.div>

      {/* Rest of the component remains the same as the original */}
      {/* Interactive Tabs Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-serif font-bold text-gray-800 mb-4">
            Who Are You?
          </h2>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setActiveTab("donors")}
              className={`px-6 py-2 rounded-full cursor-pointer font-mono flex items-center space-x-2 ${
                activeTab === "donors"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              <Users /> <span>Donor</span>
            </button>
            <button
              onClick={() => setActiveTab("students")}
              className={`px-6 py-2 rounded-full cursor-pointer font-mono flex items-center space-x-2 ${
                activeTab === "students"
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              <CreditCard /> <span>Student</span>
            </button>
          </div>

          {/* Dynamic Content Based on Tab */}
          <div className="mt-8 bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center space-x-6">
              {featuresData[activeTab].icon}
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-2">
                  {featuresData[activeTab].title}
                </h3>
                <p className="text-gray-600">
                  {featuresData[activeTab].description}
                </p>
                <ul className="mt-4 space-y-2">
                  {featuresData[activeTab].benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <svg
                        className="w-5 h-5 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              <button className="border border-blue-600 text-blue-600 font-mono px-4 py-3 rounded-full hover:bg-blue-300 hover:text-black hover:border-black cursor-pointer transition">
                Continue {"->"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            How EduFund Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <HowItWorksStep
              number="1"
              title="Create Profile"
              description="Students and donors create secure profiles on our platform."
            />
            <HowItWorksStep
              number="2"
              title="Connect & Verify"
              description="Blockchain technology ensures transparency and trust."
            />
            <HowItWorksStep
              number="3"
              title="Support & Grow"
              description="Direct donations empower students' educational journeys."
            />
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
        <p className="text-xl mb-8">
          Join EduFund and be part of a community transforming education
        </p>
        <div className="space-x-4">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition">
            Donate Now
          </button>
          <button className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-blue-600 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
