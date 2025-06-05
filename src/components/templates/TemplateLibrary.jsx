import { useState } from "react";
import { Button } from "../ui/Button";
import { Search, Plus, Filter } from "lucide-react";

export const TemplateLibrary = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Templates" },
    { id: "marketing", name: "Marketing" },
    { id: "sales", name: "Sales" },
    { id: "support", name: "Support" },
    { id: "development", name: "Development" },
  ];

  const templates = [
    {
      id: 1,
      name: "Product Description Generator",
      description:
        "Generate compelling product descriptions for your e-commerce store",
      category: "marketing",
      usageCount: 1234,
    },
    {
      id: 2,
      name: "Customer Support Response",
      description: "Professional responses to common customer inquiries",
      category: "support",
      usageCount: 856,
    },
    {
      id: 3,
      name: "Code Documentation",
      description: "Generate clear and concise code documentation",
      category: "development",
      usageCount: 567,
    },
  ];

  const filteredTemplates = templates.filter((template) => {
    const matchesSearch = template.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Template Library</h1>
        <Button variant="primary">
          <Plus className="w-4 h-4 mr-2" />
          New Template
        </Button>
      </div>

      <div className="card p-6">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-field pl-10 w-full"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="secondary">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>

        <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                selectedCategory === category.id
                  ? "bg-primary text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.map((template) => (
            <div key={template.id} className="card p-6">
              <h3 className="text-lg font-semibold mb-2">{template.name}</h3>
              <p className="text-gray-600 mb-4">{template.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  Used {template.usageCount} times
                </span>
                <Button variant="secondary">Use Template</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <div
            key={template.id}
            className="card p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">{template.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {template.description}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {template.category}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Used {template.usageCount} times
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateLibrary;
