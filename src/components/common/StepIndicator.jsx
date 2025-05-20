import React from "react";
import { motion } from "framer-motion";

const StepIndicator = ({ currentStep }) => {
  const steps = [
    { number: 1, label: "Mood" },
    { number: 2, label: "Goal" },
    { number: 3, label: "Refine" },
    { number: 4, label: "AI" },
    { number: 5, label: "Review" },
    { number: 6, label: "Response" },
  ];

  return (
    <div className="flex justify-center my-6">
      <div className="flex items-center space-x-2">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center">
            <motion.div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step.number === currentStep
                  ? "bg-primary-600 text-white"
                  : step.number < currentStep
                  ? "bg-primary-200 text-primary-800"
                  : "bg-gray-200 text-gray-500"
              }`}
              initial={{ scale: 0.8 }}
              animate={{ scale: step.number === currentStep ? 1 : 0.8 }}
              transition={{ duration: 0.3 }}
            >
              {step.number}
            </motion.div>
            {index < steps.length - 1 && (
              <div
                className={`w-6 h-1 ${
                  step.number < currentStep ? "bg-primary-300" : "bg-gray-200"
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepIndicator;
