import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { Wand2, Copy, Save, Share2, Settings, Sparkles } from "lucide-react";
import PromptTester from "./PromptTester";

export function PromptBuilder() {
  const { theme } = useTheme();
  const [prompt, setPrompt] = useState("");
  const [context, setContext] = useState("");
  const [tone, setTone] = useState("professional");
  const [outputFormat, setOutputFormat] = useState("text");
  const [variables, setVariables] = useState([]);
  const [newVariable, setNewVariable] = useState({ name: "", description: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle prompt submission
    console.log({ prompt, context, tone, outputFormat });
  };

  const handleAddVariable = () => {
    if (newVariable.name && newVariable.description) {
      setVariables([...variables, newVariable]);
      setNewVariable({ name: "", description: "" });
    }
  };

  const handleRemoveVariable = (index) => {
    setVariables(variables.filter((_, i) => i !== index));
  };

  const handleSaveTemplate = () => {
    // TODO: Implement template saving functionality
    console.log("Saving template:", { prompt, variables });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h2
          className="text-2xl font-bold"
          style={{ color: theme.colors.primary }}
        >
          Create New Prompt
        </h2>
        <div className="flex items-center space-x-2">
          <Button variant="secondary" size="sm">
            <Save className="w-4 h-4 mr-2" />
            Save Draft
          </Button>
          <Button size="sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Optimize
          </Button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Main Prompt
            </label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="input-field min-h-[150px]"
              placeholder="Enter your main prompt here..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Context</label>
            <textarea
              value={context}
              onChange={(e) => setContext(e.target.value)}
              className="input-field min-h-[100px]"
              placeholder="Add any relevant context or background information..."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Tone</label>
              <select
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="input-field"
              >
                <option value="professional">Professional</option>
                <option value="casual">Casual</option>
                <option value="friendly">Friendly</option>
                <option value="formal">Formal</option>
                <option value="technical">Technical</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Output Format
              </label>
              <select
                value={outputFormat}
                onChange={(e) => setOutputFormat(e.target.value)}
                className="input-field"
              >
                <option value="text">Text</option>
                <option value="list">List</option>
                <option value="table">Table</option>
                <option value="json">JSON</option>
                <option value="markdown">Markdown</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex items-center space-x-2">
            <Button variant="secondary" type="button">
              <Settings className="w-4 h-4 mr-2" />
              Advanced Settings
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="secondary" type="button">
              <Copy className="w-4 h-4 mr-2" />
              Copy
            </Button>
            <Button variant="secondary" type="button">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button type="submit">
              <Wand2 className="w-4 h-4 mr-2" />
              Generate
            </Button>
          </div>
        </div>
      </form>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Variables</label>
            <div className="space-y-4">
              {variables.map((variable, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-base-300 rounded-lg"
                >
                  <div className="flex-1">
                    <div className="font-medium">{variable.name}</div>
                    <div className="text-sm opacity-70">
                      {variable.description}
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    onClick={() => handleRemoveVariable(index)}
                  >
                    Remove
                  </Button>
                </div>
              ))}

              <div className="p-4 bg-base-300 rounded-lg">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Variable Name
                    </label>
                    <input
                      type="text"
                      value={newVariable.name}
                      onChange={(e) =>
                        setNewVariable({ ...newVariable, name: e.target.value })
                      }
                      className="w-full p-2 bg-base-200 rounded-lg"
                      placeholder="e.g., topic"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Description
                    </label>
                    <input
                      type="text"
                      value={newVariable.description}
                      onChange={(e) =>
                        setNewVariable({
                          ...newVariable,
                          description: e.target.value,
                        })
                      }
                      className="w-full p-2 bg-base-200 rounded-lg"
                      placeholder="e.g., The main topic of the content"
                    />
                  </div>
                </div>
                <Button onClick={handleAddVariable}>Add Variable</Button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <PromptTester prompt={prompt} />
        </div>
      </div>
    </motion.div>
  );
}
