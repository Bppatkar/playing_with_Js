import React, { useState, useEffect, useRef } from 'react';

const SearchBar = ({
  searchQuery,
  setSearchQuery,
  placeholder = 'Search...',
}) => {
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);

  const mockSuggestions = [
    'Complete project proposal',
    'Buy groceries',
    'Morning workout',
    'India vs Pakistan match',
    'Latest tech news',
    'Stock market updates',
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filtered = mockSuggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5));
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [searchQuery]);

  return (
    <div ref={searchRef} className="relative w-full lg:w-96">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
          <svg
            className="w-5 h-5 text-text-secondary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder={placeholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => searchQuery && setShowSuggestions(true)}
          className="w-full pl-10 pr-4 py-3 bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-text-primary placeholder-text-secondary transition-all duration-300 relative z-20"
        />
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-surface border border-border rounded-lg shadow-2xl shadow-black/50 backdrop-blur-sm">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              onClick={() => {
                setSearchQuery(suggestion);
                setShowSuggestions(false);
              }}
              className="px-4 py-3 hover:bg-surface/80 cursor-pointer border-b border-border last:border-b-0 transition-colors duration-200 group bg-surface"
            >
              <div className="flex items-center space-x-3">
                <svg
                  className="w-4 h-4 text-text-secondary group-hover:text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <span className="text-text-primary group-hover:text-primary">
                  {suggestion}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;