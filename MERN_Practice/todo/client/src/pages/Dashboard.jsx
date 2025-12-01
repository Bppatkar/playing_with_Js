import React, { useState } from 'react';
import StatsSection from '../components/dashboard/StatsSection.jsx';
import TodoSection from '../components/dashboard/TodoSection.jsx';
import NewsSection from '../components/dashboard/NewsSection.jsx';
import CricketSection from '../components/dashboard/CricketSection.jsx';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-background text-text-primary">
      {/* Add navigation tabs */}
      <div className="container mx-auto px-4 pt-8">
        {activeTab === 'dashboard' && <StatsSection />}
      </div>

      <main className="container mx-auto px-4 pb-8">
        {activeTab === 'dashboard' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <TodoSection />
            </div>
            <div className="space-y-8">
              <NewsSection />
              <CricketSection />
            </div>
          </div>
        )}

        {activeTab === 'todos' && (
          <div className="max-w-6xl mx-auto">
            <TodoSection expanded={true} />
          </div>
        )}

        {activeTab === 'news' && (
          <div className="max-w-6xl mx-auto">
            <NewsSection expanded={true} />
          </div>
        )}

        {activeTab === 'cricket' && (
          <div className="max-w-6xl mx-auto">
            <CricketSection expanded={true} />
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
