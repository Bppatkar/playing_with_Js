import React, { useState, useEffect } from 'react';
import CricketSection from '../components/dashboard/CricketSection';
import LoadingSpinner from '../components/common/LoadingSpinner';

const CricketPage = () => {
  const [seriesInfo, setSeriesInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  // You can extend this to fetch series information from the API
  const fetchSeriesInfo = async () => {
    // Implement series API call if needed
    // https://api.cricapi.com/v1/series?apikey=YOUR_API_KEY&offset=0
  };

  useEffect(() => {
    fetchSeriesInfo();
  }, []);

  return (
    <div className="min-h-screen bg-background text-text-primary">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-text-primary mb-4">🏏 Live Cricket Scores</h1>
          <p className="text-text-secondary text-lg">
            Real-time cricket matches from around the world
          </p>
        </div>
        
        <CricketSection expanded={true} />
        
        {/* Additional Cricket Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-surface rounded-xl border border-border p-6 text-center">
            <div className="text-2xl font-bold text-primary mb-2">
              {seriesInfo.length || 12}
            </div>
            <div className="text-text-secondary">Active Series</div>
          </div>
          
          <div className="bg-surface rounded-xl border border-border p-6 text-center">
            <div className="text-2xl font-bold text-primary mb-2">
              {seriesInfo.filter(s => s.type === 'odi').length || 4}
            </div>
            <div className="text-text-secondary">ODI Matches</div>
          </div>
          
          <div className="bg-surface rounded-xl border border-border p-6 text-center">
            <div className="text-2xl font-bold text-primary mb-2">
              {seriesInfo.filter(s => s.type === 't20').length || 6}
            </div>
            <div className="text-text-secondary">T20 Matches</div>
          </div>
          
          <div className="bg-surface rounded-xl border border-border p-6 text-center">
            <div className="text-2xl font-bold text-primary mb-2">
              {seriesInfo.filter(s => s.type === 'test').length || 2}
            </div>
            <div className="text-text-secondary">Test Matches</div>
          </div>
        </div>

        {/* API Information */}
        <div className="mt-8 bg-surface/50 rounded-xl border border-border p-6">
          <h3 className="text-lg font-semibold text-text-primary mb-3">About the Data</h3>
          <p className="text-text-secondary text-sm">
            Live cricket scores provided by CricAPI. Data updates every 30 seconds automatically.
            Click on any match to view detailed information including scores, venue, and match status.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CricketPage;