import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { Layout } from "./components/layout/Layout";
import { Dashboard } from "./components/dashboard/Dashboard";
import { PromptBuilder } from "./components/prompt/PromptBuilder";
import { TemplateLibrary } from "./components/templates/TemplateLibrary";
import { Analytics } from "./components/analytics/Analytics";
import { Settings } from "./components/settings/Settings";
import { PromptHistory } from "./components/prompt/PromptHistory";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="prompt-builder" element={<PromptBuilder />} />
            <Route path="templates" element={<TemplateLibrary />} />
            <Route path="history" element={<PromptHistory />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
