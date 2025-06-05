import { NavLink } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { ThemeSelector } from "../ui/ThemeSelector";
import {
  Home,
  MessageSquare,
  FileText,
  History,
  BarChart2,
  Settings,
} from "lucide-react";

export const Sidebar = () => {
  const { theme } = useTheme();

  const navItems = [
    { path: "/", icon: Home, label: "Dashboard" },
    { path: "/prompt-builder", icon: MessageSquare, label: "Prompt Builder" },
    { path: "/templates", icon: FileText, label: "Templates" },
    { path: "/history", icon: History, label: "History" },
    { path: "/analytics", icon: BarChart2, label: "Analytics" },
    { path: "/settings", icon: Settings, label: "Settings" },
  ];

  return (
    <div className="w-64 h-screen bg-base-100 border-r border-base-200 flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-primary">AskBetter</h1>
      </div>

      <nav className="flex-1 px-4">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                isActive
                  ? "bg-primary text-white"
                  : "text-base-content hover:bg-base-200"
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto">
        <ThemeSelector />
      </div>
    </div>
  );
};
