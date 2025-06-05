import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { motion } from "framer-motion";
import { Search, Filter, X } from "lucide-react";
import { TemplateCard } from "./TemplateCard";
import { Button } from "../ui/Button";

// Mock data for templates
const mockTemplates = [
  {
    id: 1,
    title: "Market Analysis Report",
    description:
      "Generate a comprehensive market analysis report with key insights and trends.",
    category: "Business",
    difficulty: "intermediate",
    estimatedTime: "15-20 min",
    usageCount: 1234,
    rating: 4.5,
    tags: ["business", "analysis", "report"],
  },
  {
    id: 2,
    title: "Creative Story Generator",
    description:
      "Create engaging stories with customizable characters and plot elements.",
    category: "Creative",
    difficulty: "beginner",
    estimatedTime: "5-10 min",
    usageCount: 2345,
    rating: 4.8,
    tags: ["creative", "story", "writing"],
  },
  {
    id: 3,
    title: "Technical Documentation",
    description:
      "Generate detailed technical documentation for software projects.",
    category: "Technical",
    difficulty: "advanced",
    estimatedTime: "20-30 min",
    usageCount: 876,
    rating: 4.2,
    tags: ["technical", "documentation", "code"],
  },
];

export function TemplateLibrary() {
  const { theme } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");

  const categories = ["all", "business", "creative", "technical", "academic"];
  const difficulties = [
    "all",
    "beginner",
    "intermediate",
    "advanced",
    "expert",
  ];

  const filteredTemplates = mockTemplates.filter((template) => {
    const matchesSearch =
      template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" ||
      template.category.toLowerCase() === selectedCategory;
    const matchesDifficulty =
      selectedDifficulty === "all" ||
      template.difficulty === selectedDifficulty;
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h2
          className="text-2xl font-bold"
          style={{ color: theme.colors.primary }}
        >
          Template Library
        </h2>
        <Button>
          <Filter className="w-4 h-4 mr-2" />
          Advanced Filters
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search templates..."
            className="input-field pl-10"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
          )}
        </div>

        <div className="flex gap-2">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="input-field"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>

          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="input-field"
          >
            {difficulties.map((difficulty) => (
              <option key={difficulty} value={difficulty}>
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTemplates.map((template) => (
          <TemplateCard
            key={template.id}
            {...template}
            onSelect={() => console.log("Selected template:", template.id)}
          />
        ))}
      </div>

      {filteredTemplates.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">
            No templates found matching your criteria.
          </p>
          <Button
            variant="secondary"
            className="mt-4"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
              setSelectedDifficulty("all");
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}
    </motion.div>
  );
}
