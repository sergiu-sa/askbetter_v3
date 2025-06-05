import { useState } from "react";
import { Button } from "../ui/Button";

export const Dashboard = () => {
  const [stats] = useState({
    totalPrompts: 150,
    successfulPrompts: 120,
    averageTokens: 250,
    templatesCreated: 15,
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="card p-6">
          <h3 className="text-lg font-semibold mb-2">Total Prompts</h3>
          <p className="text-3xl font-bold text-primary">
            {stats.totalPrompts}
          </p>
        </div>
        <div className="card p-6">
          <h3 className="text-lg font-semibold mb-2">Successful Prompts</h3>
          <p className="text-3xl font-bold text-success">
            {stats.successfulPrompts}
          </p>
        </div>
        <div className="card p-6">
          <h3 className="text-lg font-semibold mb-2">Average Tokens</h3>
          <p className="text-3xl font-bold text-secondary">
            {stats.averageTokens}
          </p>
        </div>
        <div className="card p-6">
          <h3 className="text-lg font-semibold mb-2">Templates Created</h3>
          <p className="text-3xl font-bold text-primary">
            {stats.templatesCreated}
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Recent Activity</h2>
        <Button variant="primary">View All</Button>
      </div>

      <div className="card p-6">
        <p className="text-gray-500 dark:text-gray-400">
          No recent activity to show.
        </p>
      </div>
    </div>
  );
};
