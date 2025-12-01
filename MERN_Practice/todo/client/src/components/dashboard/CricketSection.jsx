import React, { useState, useEffect } from 'react';
import LoadingSpinner from '../common/LoadingSpinner.jsx';

const CricketSection = ({ expanded = false }) => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMatch, setSelectedMatch] = useState(null);

  const fetchCricketScores = async () => {
    try {
      setLoading(true);
      setError(null);

      const API_KEY = import.meta.env.VITE_CRICKET_API_KEY;
      
      if (!API_KEY) {
        throw new Error('Cricket API key not found');
      }

      const response = await fetch(
        `https://api.cricapi.com/v1/currentMatches?apikey=${API_KEY}&offset=0`
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.status === "success" && data.data) {
        // Filter out matches that are not relevant (like domestic matches if you want)
        const relevantMatches = data.data.filter(match => 
          match.matchType && ['odi', 't20', 'test'].includes(match.matchType.toLowerCase())
        );
        setMatches(relevantMatches);
      } else {
        throw new Error(data.message || 'No match data received');
      }
      
    } catch (err) {
      console.error('Error fetching cricket scores:', err);
      setError(err.message || 'Failed to load live scores');
      // Fallback to empty array instead of mock data to see real errors
      setMatches([]);
    } finally {
      setLoading(false);
    }
  };

  const getMatchStatus = (match) => {
    const status = match.status?.toLowerCase() || '';
    
    if (status.includes('live') || status.includes('in progress')) {
      return { text: 'LIVE', color: 'bg-red-500', textColor: 'text-red-500' };
    } else if (status.includes('completed') || status.includes('finished')) {
      return { text: 'COMPLETED', color: 'bg-green-500', textColor: 'text-green-500' };
    } else if (status.includes('scheduled') || status.includes('upcoming')) {
      return { text: 'UPCOMING', color: 'bg-blue-500', textColor: 'text-blue-500' };
    } else {
      return { text: status.toUpperCase(), color: 'bg-gray-500', textColor: 'text-gray-500' };
    }
  };

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });
    } catch {
      return 'Date not available';
    }
  };

  const formatTime = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return 'Time not available';
    }
  };

  const getTeamScore = (match, teamName) => {
    if (!match.score || !Array.isArray(match.score)) return null;
    
    return match.score.find(inning => 
      inning.inning && inning.inning.toLowerCase().includes(teamName.toLowerCase())
    );
  };

  const getTeamShortName = (teamName) => {
    const teamMap = {
      'india': 'IND',
      'australia': 'AUS',
      'england': 'ENG',
      'new zealand': 'NZ',
      'pakistan': 'PAK',
      'south africa': 'SA',
      'sri lanka': 'SL',
      'bangladesh': 'BAN',
      'west indies': 'WI',
      'afghanistan': 'AFG'
    };
    
    return teamMap[teamName.toLowerCase()] || teamName.substring(0, 3).toUpperCase();
  };

  const getTeamFlag = (teamName) => {
    const flagMap = {
      'india': '🇮🇳',
      'australia': '🇦🇺',
      'england': '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
      'new zealand': '🇳🇿',
      'pakistan': '🇵🇰',
      'south africa': '🇿🇦',
      'sri lanka': '🇱🇰',
      'bangladesh': '🇧🇩',
      'west indies': '🌴',
      'afghanistan': '🇦🇫'
    };
    
    return flagMap[teamName.toLowerCase()] || '🏏';
  };

  useEffect(() => {
    fetchCricketScores();
    
    // Refresh every 30 seconds for live matches
    const interval = setInterval(fetchCricketScores, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <LoadingSpinner message="Loading live cricket scores..." />;
  }

  return (
    <div className={`bg-surface rounded-xl border border-border p-6 ${expanded ? '' : 'h-96 overflow-hidden'}`}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-text-primary">Live Cricket</h2>
        <div className="flex items-center space-x-2">
          <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-medium animate-pulse">
            LIVE
          </span>
          <span className="text-xs text-text-secondary">
            {matches.length} matches
          </span>
        </div>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg">
          <p className="text-red-300 text-sm text-center">
            {error}
          </p>
        </div>
      )}

      <div className={`space-y-4 ${!expanded ? 'max-h-80 overflow-y-auto pr-2 custom-scrollbar' : ''}`}>
        {matches.length === 0 ? (
          <div className="text-center py-8">
            <div className="text-4xl mb-4">🏏</div>
            <p className="text-text-secondary">No current matches available</p>
            <p className="text-text-muted text-sm mt-2">Check back later for live matches</p>
          </div>
        ) : (
          matches.map((match) => {
            const status = getMatchStatus(match);
            
            return (
              <div
                key={match.id}
                className="bg-surface/50 rounded-lg border border-border p-4 hover:border-primary transition-all duration-200 cursor-pointer hover:shadow-lg"
                onClick={() => setSelectedMatch(match)}
              >
                {/* Match Status and Date */}
                <div className="flex justify-between items-center mb-3">
                  <span className={`text-xs font-semibold ${status.textColor} flex items-center gap-1`}>
                    {status.text}
                    {status.text === 'LIVE' && (
                      <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                    )}
                  </span>
                  <span className="text-xs text-text-secondary">
                    {formatDate(match.date)}
                  </span>
                </div>

                {/* Match Name */}
                <div className="mb-3">
                  <h3 className="font-semibold text-text-primary text-sm line-clamp-2">
                    {match.name}
                  </h3>
                  <p className="text-xs text-text-secondary mt-1">
                    {match.venue}
                  </p>
                </div>

                {/* Teams and Scores */}
                <div className="space-y-3">
                  {match.teams && match.teams.map((team, index) => {
                    const teamScore = getTeamScore(match, team);
                    
                    return (
                      <div key={team} className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm">{getTeamFlag(team)}</span>
                          <span className="font-medium text-text-primary text-sm">
                            {getTeamShortName(team)}
                          </span>
                        </div>
                        
                        {teamScore ? (
                          <div className="text-right">
                            <div className="font-bold text-text-primary text-sm">
                              {teamScore.r || '0'}/{teamScore.w || '0'}
                            </div>
                            {teamScore.o && (
                              <div className="text-xs text-text-secondary">
                                ({teamScore.o} ov)
                              </div>
                            )}
                          </div>
                        ) : (
                          <span className="text-text-secondary text-sm">
                            {status.text === 'UPCOMING' ? formatTime(match.dateTimeGMT) : 'Yet to bat'}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Match Status Text */}
                {match.status && (
                  <div className="mt-3 pt-3 border-t border-border">
                    <p className="text-xs text-text-secondary text-center">
                      {match.status}
                    </p>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Refresh Button */}
      <div className="mt-4 text-center">
        <button
          onClick={fetchCricketScores}
          disabled={loading}
          className="text-sm text-primary hover:text-primary/80 transition-colors flex items-center justify-center gap-2 mx-auto disabled:opacity-50"
        >
          <svg className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          {loading ? 'Refreshing...' : 'Refresh Scores'}
        </button>
      </div>

      {/* Match Detail Modal */}
      {selectedMatch && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-surface rounded-xl border border-border p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-text-primary">Match Details</h3>
              <button
                onClick={() => setSelectedMatch(null)}
                className="text-text-secondary hover:text-text-primary transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="text-center">
                <p className="text-lg font-semibold text-text-primary">{selectedMatch.name}</p>
                <p className="text-text-secondary">{selectedMatch.venue}</p>
                <p className="text-text-secondary">
                  {formatDate(selectedMatch.date)} • {formatTime(selectedMatch.dateTimeGMT)} GMT
                </p>
              </div>

              <div className="bg-surface/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-3">Match Information</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Match Type:</span>
                    <span className="text-text-primary font-medium capitalize">
                      {selectedMatch.matchType}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Status:</span>
                    <span className="text-text-primary font-medium">
                      {selectedMatch.status}
                    </span>
                  </div>
                  {selectedMatch.tossWinner && (
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Toss Winner:</span>
                      <span className="text-text-primary font-medium">
                        {selectedMatch.tossWinner}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {selectedMatch.score && selectedMatch.score.length > 0 && (
                <div className="bg-surface/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-text-primary mb-3">Scorecard</h4>
                  <div className="space-y-3">
                    {selectedMatch.score.map((inning, index) => (
                      <div key={index} className="flex justify-between items-center p-2 bg-surface rounded">
                        <span className="text-text-primary font-medium">
                          {inning.inning}
                        </span>
                        <span className="text-text-primary font-bold">
                          {inning.r || '0'}/{inning.w || '0'} 
                          {inning.o && ` (${inning.o} ov)`}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="text-center">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                  getMatchStatus(selectedMatch).color
                } text-white`}>
                  {getMatchStatus(selectedMatch).text}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CricketSection;