import React from "react";
import { Heart } from "lucide-react";

const Header = ({ showPersonalization, setShowPersonalization }) => {
  return (
    <div className="flex items-center justify-between w-full p-4 border-b bg-white">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold">
          A
        </div>
        <h1 className="text-xl font-bold">AskBetter V3</h1>
      </div>
      <div className="flex items-center">
        <div className="text-sm text-gray-500 mr-3">
          A more human way to use AI
        </div>

        <button
          className={`p-2 rounded-full transition-colors ${
            showPersonalization
              ? "bg-primary-100 text-primary-600"
              : "text-gray-400 hover:text-gray-600"
          }`}
          onClick={() => setShowPersonalization(!showPersonalization)}
          aria-label="Toggle personalization"
        >
          <Heart size={18} />
        </button>
      </div>
    </div>
  );
};

export default Header;
