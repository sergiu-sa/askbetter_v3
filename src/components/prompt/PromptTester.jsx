import { useState } from "react";
import { Button } from "../ui/Button";

const PromptTester = ({ prompt }) => {
  const [selectedModel, setSelectedModel] = useState("gpt-4");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const models = [
    { id: "gpt-4", name: "GPT-4", description: "Most capable model" },
    {
      id: "gpt-3.5-turbo",
      name: "GPT-3.5 Turbo",
      description: "Fast and efficient",
    },
    {
      id: "claude-3-opus",
      name: "Claude 3 Opus",
      description: "Advanced reasoning",
    },
    {
      id: "claude-3-sonnet",
      name: "Claude 3 Sonnet",
      description: "Balanced performance",
    },
  ];

  const handleTest = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // TODO: Implement actual API call
      // This is a mock response for now
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setResponse(
        "This is a mock response. In a real implementation, this would be the AI model's response to your prompt."
      );
    } catch (err) {
      setError("Failed to get response from AI model");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-base-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Test Prompt</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Select AI Model
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {models.map((model) => (
                <div
                  key={model.id}
                  className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                    selectedModel === model.id
                      ? "border-primary bg-primary/10"
                      : "border-base-300 hover:border-primary/50"
                  }`}
                  onClick={() => setSelectedModel(model.id)}
                >
                  <div className="font-medium">{model.name}</div>
                  <div className="text-sm opacity-70">{model.description}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Prompt Preview
            </label>
            <div className="p-4 bg-base-300 rounded-lg whitespace-pre-wrap">
              {prompt}
            </div>
          </div>

          <Button onClick={handleTest} disabled={isLoading} className="w-full">
            {isLoading ? "Testing..." : "Test Prompt"}
          </Button>
        </div>
      </div>

      {error && (
        <div className="bg-error/10 text-error p-4 rounded-lg">{error}</div>
      )}

      {response && (
        <div className="bg-base-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Response</h3>
          <div className="p-4 bg-base-300 rounded-lg whitespace-pre-wrap">
            {response}
          </div>
        </div>
      )}
    </div>
  );
};

export default PromptTester;
