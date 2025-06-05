import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { motion } from "framer-motion";
import {
  BarChart,
  LineChart,
  PieChart,
  Download,
  Calendar,
  Filter,
} from "lucide-react";
import { Button } from "../ui/Button";

// Mock data for analytics
const promptStats = {
  total: 1234,
  successful: 1156,
  failed: 78,
  averageResponseTime: "2.3s",
  successRate: "94%",
};

const usageByCategory = [
  { category: "Business", count: 450 },
  { category: "Creative", count: 320 },
  { category: "Technical", count: 280 },
  { category: "Academic", count: 184 },
];

const dailyUsage = [
  { date: "Mon", count: 120 },
  { date: "Tue", count: 145 },
  { date: "Wed", count: 132 },
  { date: "Thu", count: 168 },
  { date: "Fri", count: 190 },
  { date: "Sat", count: 95 },
  { date: "Sun", count: 75 },
];

export const Analytics = () => {
  const { theme } = useTheme();
  const [timeRange, setTimeRange] = useState("week");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <div className="flex items-center justify-between">
        <h2
          className="text-2xl font-bold"
          style={{ color: theme.colors.primary }}
        >
          Analytics
        </h2>
        <div className="flex items-center space-x-2">
          <Button
            variant={timeRange === "week" ? "primary" : "ghost"}
            onClick={() => setTimeRange("week")}
          >
            Week
          </Button>
          <Button
            variant={timeRange === "month" ? "primary" : "ghost"}
            onClick={() => setTimeRange("month")}
          >
            Month
          </Button>
          <Button
            variant={timeRange === "year" ? "primary" : "ghost"}
            onClick={() => setTimeRange("year")}
          >
            Year
          </Button>
          <Button variant="secondary">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button>
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card p-6 bg-white">
          <h3 className="text-lg font-semibold mb-4">Total Prompts</h3>
          <div className="flex items-baseline justify-between">
            <span className="text-3xl font-bold">{promptStats.total}</span>
            <span className="text-sm text-green-500">+12% from last month</span>
          </div>
        </div>

        <div className="card p-6 bg-white">
          <h3 className="text-lg font-semibold mb-4">Success Rate</h3>
          <div className="flex items-baseline justify-between">
            <span className="text-3xl font-bold">
              {promptStats.successRate}
            </span>
            <span className="text-sm text-green-500">+5% from last month</span>
          </div>
        </div>

        <div className="card p-6 bg-white">
          <h3 className="text-lg font-semibold mb-4">Avg. Response Time</h3>
          <div className="flex items-baseline justify-between">
            <span className="text-3xl font-bold">
              {promptStats.averageResponseTime}
            </span>
            <span className="text-sm text-red-500">+0.2s from last month</span>
          </div>
        </div>

        <div className="card p-6 bg-white">
          <h3 className="text-lg font-semibold mb-4">Failed Prompts</h3>
          <div className="flex items-baseline justify-between">
            <span className="text-3xl font-bold">{promptStats.failed}</span>
            <span className="text-sm text-red-500">+3% from last month</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6 bg-white">
          <h3 className="text-lg font-semibold mb-4">Usage by Category</h3>
          <div className="h-64 flex items-center justify-center">
            <PieChart
              className="w-32 h-32"
              style={{ color: theme.colors.primary }}
            />
          </div>
          <div className="mt-4 space-y-2">
            {usageByCategory.map((item) => (
              <div
                key={item.category}
                className="flex items-center justify-between"
              >
                <span className="text-sm">{item.category}</span>
                <span className="text-sm font-medium">{item.count}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6 bg-white">
          <h3 className="text-lg font-semibold mb-4">Daily Usage</h3>
          <div className="h-64 flex items-center justify-center">
            <LineChart
              className="w-full h-full"
              style={{ color: theme.colors.primary }}
            />
          </div>
          <div className="mt-4 grid grid-cols-7 gap-2">
            {dailyUsage.map((item) => (
              <div key={item.date} className="text-center">
                <span className="text-sm font-medium">{item.count}</span>
                <p className="text-xs text-gray-500">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card p-6 bg-white">
        <h3 className="text-lg font-semibold mb-4">Top Performing Templates</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b">
                <th className="pb-4">Template</th>
                <th className="pb-4">Category</th>
                <th className="pb-4">Usage</th>
                <th className="pb-4">Success Rate</th>
                <th className="pb-4">Avg. Response Time</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-4">Market Analysis Report</td>
                <td>Business</td>
                <td>234</td>
                <td>96%</td>
                <td>1.8s</td>
              </tr>
              <tr className="border-b">
                <td className="py-4">Creative Story Generator</td>
                <td>Creative</td>
                <td>189</td>
                <td>92%</td>
                <td>2.1s</td>
              </tr>
              <tr>
                <td className="py-4">Technical Documentation</td>
                <td>Technical</td>
                <td>156</td>
                <td>94%</td>
                <td>2.4s</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};
