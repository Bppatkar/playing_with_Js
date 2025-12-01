import React, { useState, useEffect } from 'react';
import LoadingSpinner from '../common/LoadingSpinner.jsx';

const NewsSection = ({ expanded = false }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [usingDemo, setUsingDemo] = useState(false);

  const fetchNews = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const apiKey = import.meta.env.VITE_GNEWS_API_KEY;
      
      if (!apiKey) {
        throw new Error('API key not found');
      }

      // Using search endpoint with current topics
      const query = 'technology OR business OR sports OR india';
      const response = await fetch(
        `https://gnews.io/api/v4/search?q=${encodeURIComponent(query)}&lang=en&max=10&apikey=${apiKey}`
      );
      
      if (!response.ok) {
        throw new Error(`Failed to fetch news: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Check if we got actual articles
      if (data.articles && data.articles.length > 0) {
        setNews(data.articles);
        setUsingDemo(false);
        setError(null);
      } else {
        throw new Error('No articles received from API');
      }
      
    } catch (err) {
      console.error('Error fetching news:', err);
      setError(err.message);
      setUsingDemo(true);
      setNews(getDemoNews());
    } finally {
      setLoading(false);
    }
  };

  const getDemoNews = () => {
    const currentTime = new Date().toISOString();
    return [
      {
        title: 'India Launches New Communication Satellite',
        description: 'ISRO successfully places GSAT-24 satellite into orbit, boosting communication capabilities across the country.',
        source: { name: 'Times of India' },
        publishedAt: currentTime,
        url: '#',
        image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=300&h=200&fit=crop'
      },
      {
        title: 'Stock Market: Sensex Crosses 75,000 Mark',
        description: 'Indian stock markets reach new highs as Sensex crosses 75,000 for the first time in history.',
        source: { name: 'Economic Times' },
        publishedAt: currentTime,
        url: '#',
        image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=300&h=200&fit=crop'
      },
      {
        title: 'India Wins Cricket Series Against Australia',
        description: 'Team India clinches the ODI series 3-2 in a thrilling final match at Mumbai.',
        source: { name: 'Sports Today' },
        publishedAt: currentTime,
        url: '#',
        image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=300&h=200&fit=crop'
      },
      {
        title: 'Tech Giants Expand Operations in India',
        description: 'Major technology companies announce new investments and hiring plans for Indian market.',
        source: { name: 'Tech News India' },
        publishedAt: currentTime,
        url: '#',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop'
      },
      {
        title: 'Healthcare Innovation Summit in Delhi',
        description: 'Medical experts gather to discuss latest advancements in healthcare technology and treatments.',
        source: { name: 'Health Digest' },
        publishedAt: currentTime,
        url: '#',
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop'
      }
    ];
  };

  useEffect(() => {
    fetchNews();
    
    // Refresh news every 10 minutes
    const interval = setInterval(fetchNews, 600000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (dateString) => {
    try {
      const date = new Date(dateString);
      const now = new Date();
      const diffInMinutes = Math.floor((now - date) / (1000 * 60));
      
      if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
      if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
      return `${Math.floor(diffInMinutes / 1440)}d ago`;
    } catch {
      return 'Just now';
    }
  };

  const handleImageError = (e) => {
    e.target.src = 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=300&h=200&fit=crop';
  };

  if (loading) {
    return <LoadingSpinner message="Loading latest news..." />;
  }

  return (
    <div className={`bg-surface rounded-xl border border-border p-6 ${expanded ? '' : 'h-96 overflow-hidden'}`}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-text-primary">Live News</h2>
        <div className="flex items-center space-x-2">
          <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-medium animate-pulse">
            LIVE
          </span>
          {usingDemo && (
            <span className="bg-yellow-500 text-black px-2 py-1 rounded text-xs font-medium">
              DEMO
            </span>
          )}
        </div>
      </div>

      {error && !usingDemo && (
        <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg">
          <p className="text-red-300 text-sm text-center">
            {error}
          </p>
        </div>
      )}

      <div className={`space-y-4 ${!expanded ? 'max-h-80 overflow-y-auto pr-2' : ''}`}>
        {news.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-text-secondary">No news available</p>
          </div>
        ) : (
          news.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-surface/50 rounded-lg border border-border hover:border-primary transition-all duration-200 cursor-pointer group hover:shadow-lg"
            >
              <div className="flex space-x-4">
                <div className="flex-shrink-0 w-20 h-16 bg-surface rounded-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    onError={handleImageError}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-text-primary mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary mb-2 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center text-xs text-text-muted">
                    <span className="truncate max-w-[120px]">{item.source?.name}</span>
                    <span>{formatTime(item.publishedAt)}</span>
                  </div>
                </div>
              </div>
            </a>
          ))
        )}
      </div>

      <div className="mt-4 text-center">
        <button
          onClick={fetchNews}
          disabled={loading}
          className="text-sm text-primary hover:text-primary/80 transition-colors flex items-center justify-center gap-2 mx-auto"
        >
          <svg className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          {loading ? 'Refreshing...' : 'Refresh News'}
        </button>
      </div>
    </div>
  );
};

export default NewsSection;