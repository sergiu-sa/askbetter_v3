import { useState } from "react";
import { Button } from "../ui/Button";

export const PromptHistory = () => {
  const [selectedPrompt, setSelectedPrompt] = useState(null);
  const [filter, setFilter] = useState("all");

  // Mock data - replace with actual data from your backend
  const history = [
    {
      id: 1,
      prompt: "Write a blog post about AI ethics",
      model: "gpt-4",
      timestamp: "2024-03-20T10:30:00Z",
      tokens: 150,
      success: true,
    },
    {
      id: 2,
      prompt: "Generate a marketing email",
      model: "gpt-3.5-turbo",
      timestamp: "2024-03-20T09:15:00Z",
      tokens: 80,
      success: true,
    },
    {
      id: 3,
      prompt: "Create a product description",
      model: "claude-3-opus",
      timestamp: "2024-03-19T15:45:00Z",
      tokens: 120,
      success: false,
    },
  ];

  const filteredHistory = history.filter((item) => {
    if (filter === "all") return true;
    if (filter === "success") return item.success;
    if (filter === "failed") return !item.success;
    return true;
  });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Prompt History</h2>
        <div className="flex gap-2">
          <Button
            variant={filter === "all" ? "primary" : "secondary"}
            onClick={() => setFilter("all")}
          >
            All
          </Button>
          <Button
            variant={filter === "success" ? "primary" : "secondary"}
            onClick={() => setFilter("success")}
          >
            Successful
          </Button>
          <Button
            variant={filter === "failed" ? "primary" : "secondary"}
            onClick={() => setFilter("failed")}
          >
            Failed
          </Button>
        </div>
      </div>

      <div className="bg-base-200 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-base-300">
                <th className="px-6 py-3 text-left text-sm font-medium">
                  Prompt
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium">
                  Model
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium">
                  Tokens
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-base-300">
              {filteredHistory.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-base-300/50 cursor-pointer"
                  onClick={() => setSelectedPrompt(item)}
                >
                  <td className="px-6 py-4">
                    <div className="max-w-md truncate">{item.prompt}</div>
                  </td>
                  <td className="px-6 py-4">{item.model}</td>
                  <td className="px-6 py-4">{formatDate(item.timestamp)}</td>
                  <td className="px-6 py-4">{item.tokens}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        item.success
                          ? "bg-success/20 text-success"
                          : "bg-error/20 text-error"
                      }`}
                    >
                      {item.success ? "Success" : "Failed"}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <Button variant="ghost" size="sm">
                      View Details
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedPrompt && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-base-200 rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold">Prompt Details</h3>
              <Button variant="ghost" onClick={() => setSelectedPrompt(null)}>
                Close
              </Button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Prompt</label>
                <div className="p-4 bg-base-300 rounded-lg whitespace-pre-wrap">
                  {selectedPrompt.prompt}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Model
                  </label>
                  <div className="p-2 bg-base-300 rounded-lg">
                    {selectedPrompt.model}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Date</label>
                  <div className="p-2 bg-base-300 rounded-lg">
                    {formatDate(selectedPrompt.timestamp)}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Tokens
                  </label>
                  <div className="p-2 bg-base-300 rounded-lg">
                    {selectedPrompt.tokens}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Status
                  </label>
                  <div className="p-2 bg-base-300 rounded-lg">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        selectedPrompt.success
                          ? "bg-success/20 text-success"
                          : "bg-error/20 text-error"
                      }`}
                    >
                      {selectedPrompt.success ? "Success" : "Failed"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
