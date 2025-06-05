/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3B82F6",
          content: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#6B7280",
          content: "#FFFFFF",
        },
        base: {
          100: "#FFFFFF",
          200: "#F3F4F6",
          300: "#E5E7EB",
          content: "#1F2937",
        },
        success: "#10B981",
        error: "#EF4444",
      },
    },
  },
  plugins: [],
};
