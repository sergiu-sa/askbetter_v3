import { useTheme } from "../../context/ThemeContext";
import { Button } from "./Button";
import { Sun, Moon } from "lucide-react";

export const ThemeSelector = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex gap-2 p-4">
      <Button
        variant={theme === "light" ? "primary" : "ghost"}
        onClick={() => setTheme("light")}
        className="flex-1"
      >
        <Sun className="w-4 h-4 mr-2" />
        Light
      </Button>
      <Button
        variant={theme === "dark" ? "primary" : "ghost"}
        onClick={() => setTheme("dark")}
        className="flex-1"
      >
        <Moon className="w-4 h-4 mr-2" />
        Dark
      </Button>
    </div>
  );
};
