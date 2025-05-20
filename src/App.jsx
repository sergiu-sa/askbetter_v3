import { useState } from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Smile,
  Frown,
  Clock,
  PencilRuler,
  Meh,
  Star,
} from "lucide-react";
import Header from "./components/common/Header";
import StepIndicator from "./components/common/StepIndicator";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showPersonalization, setShowPersonalization] = useState(false);

  // Example mood data
  const moods = [
    {
      id: "curious",
      name: "Curious",
      icon: <Brain size={24} />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: "happy",
      name: "Happy",
      icon: <Smile size={24} />,
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      id: "focused",
      name: "Focused",
      icon: <PencilRuler size={24} />,
      color: "bg-violet-100 text-violet-600",
    },
    {
      id: "urgent",
      name: "Urgent",
      icon: <Clock size={24} />,
      color: "bg-red-100 text-red-600",
    },
    {
      id: "confused",
      name: "Confused",
      icon: <Meh size={24} />,
      color: "bg-orange-100 text-orange-600",
    },
    {
      id: "frustrated",
      name: "Frustrated",
      icon: <Frown size={24} />,
      color: "bg-rose-100 text-rose-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        showPersonalization={showPersonalization}
        setShowPersonalization={setShowPersonalization}
      />

      <StepIndicator currentStep={currentStep} />

      <div className="container mx-auto px-4 pb-10">
        <div className="w-full max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-6">
            How are you feeling today?
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Your mood helps me understand how to help you better
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {moods.map((mood) => (
              <motion.div
                key={mood.id}
                className="mood-card bg-white border hover:shadow"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`mood-icon ${mood.color}`}>{mood.icon}</div>
                <span className="font-medium">{mood.name}</span>

                {mood.id === "curious" && (
                  <span className="text-xs text-primary-600 mt-1 flex items-center">
                    <Star size={10} className="mr-1" /> Frequent choice
                  </span>
                )}
              </motion.div>
            ))}
          </div>

          <div className="flex justify-end mt-12">
            <button
              className="btn btn-primary flex items-center"
              onClick={() =>
                setCurrentStep((prev) => (prev < 6 ? prev + 1 : prev))
              }
            >
              Continue
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
