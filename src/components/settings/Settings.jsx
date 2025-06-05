import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { motion } from "framer-motion";
import { User, Bell, Lock, Globe, Palette, Save } from "lucide-react";
import { Button } from "../ui/Button";

const settingsSections = [
  {
    id: "profile",
    title: "Profile Settings",
    icon: User,
    fields: [
      { name: "name", label: "Full Name", type: "text" },
      { name: "email", label: "Email", type: "email" },
      { name: "role", label: "Role", type: "text" },
    ],
  },
  {
    id: "notifications",
    title: "Notification Preferences",
    icon: Bell,
    fields: [
      {
        name: "email_notifications",
        label: "Email Notifications",
        type: "checkbox",
      },
      { name: "prompt_updates", label: "Prompt Updates", type: "checkbox" },
      { name: "template_updates", label: "Template Updates", type: "checkbox" },
    ],
  },
  {
    id: "security",
    title: "Security Settings",
    icon: Lock,
    fields: [
      { name: "current_password", label: "Current Password", type: "password" },
      { name: "new_password", label: "New Password", type: "password" },
      { name: "confirm_password", label: "Confirm Password", type: "password" },
    ],
  },
  {
    id: "appearance",
    title: "Appearance",
    icon: Palette,
    fields: [
      {
        name: "theme",
        label: "Theme",
        type: "select",
        options: ["light", "dark", "system"],
      },
      {
        name: "font_size",
        label: "Font Size",
        type: "select",
        options: ["small", "medium", "large"],
      },
      { name: "animations", label: "Enable Animations", type: "checkbox" },
    ],
  },
  {
    id: "language",
    title: "Language & Region",
    icon: Globe,
    fields: [
      {
        name: "language",
        label: "Language",
        type: "select",
        options: ["English", "Spanish", "French", "German"],
      },
      {
        name: "timezone",
        label: "Timezone",
        type: "select",
        options: ["UTC", "EST", "PST", "GMT"],
      },
      {
        name: "date_format",
        label: "Date Format",
        type: "select",
        options: ["MM/DD/YYYY", "DD/MM/YYYY", "YYYY-MM-DD"],
      },
    ],
  },
];

export const Settings = () => {
  const { theme } = useTheme();
  const [activeSection, setActiveSection] = useState("profile");
  const [formData, setFormData] = useState({});
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: true,
    autoSave: true,
    language: "en",
  });

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    // Handle form submission
  };

  const currentSection = settingsSections.find(
    (section) => section.id === activeSection
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      <div className="card p-6">
        <h2 className="text-xl font-semibold mb-4">General Settings</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Notifications</h3>
              <p className="text-sm text-gray-500">
                Receive notifications about your prompts
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={settings.notifications}
                onChange={(e) =>
                  setSettings({ ...settings, notifications: e.target.checked })
                }
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Dark Mode</h3>
              <p className="text-sm text-gray-500">
                Enable dark mode for the application
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={settings.darkMode}
                onChange={(e) =>
                  setSettings({ ...settings, darkMode: e.target.checked })
                }
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Auto Save</h3>
              <p className="text-sm text-gray-500">
                Automatically save your prompts
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={settings.autoSave}
                onChange={(e) =>
                  setSettings({ ...settings, autoSave: e.target.checked })
                }
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <Button variant="primary">Save Changes</Button>
      </div>
    </div>
  );
};
