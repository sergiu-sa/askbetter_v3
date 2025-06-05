import { useTheme } from "../../context/ThemeContext";
import { motion } from "framer-motion";
import { Star, Clock, Users, ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";

export function TemplateCard({
  title,
  description,
  category,
  difficulty,
  estimatedTime,
  usageCount,
  rating,
  tags,
  onSelect,
}) {
  const { theme } = useTheme();

  const difficultyColors = {
    beginner: "#10B981",
    intermediate: "#F59E0B",
    advanced: "#EF4444",
    expert: "#7C3AED",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="card p-6 bg-white"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        <div
          className="px-2 py-1 rounded-full text-xs font-medium"
          style={{
            background: difficultyColors[difficulty] + "20",
            color: difficultyColors[difficulty],
          }}
        >
          {difficulty}
        </div>
      </div>

      <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          {estimatedTime}
        </div>
        <div className="flex items-center">
          <Users className="w-4 h-4 mr-1" />
          {usageCount} uses
        </div>
        <div className="flex items-center">
          <Star className="w-4 h-4 mr-1" />
          {rating.toFixed(1)}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 rounded-full text-xs"
            style={{
              background: theme.colors.primary + "10",
              color: theme.colors.primary,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <Button variant="secondary" className="w-full" onClick={onSelect}>
        Use Template
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </motion.div>
  );
}
