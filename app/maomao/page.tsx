'use client'

import { useState, useEffect, useRef, useCallback } from 'react';
import { user, highlights } from '../data/data';
import { Tweet } from '../types/type';

const TWEETS_PER_PAGE = 10; // Number of tweets to load per page

export default function Home() {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [currentUser, setCurrentUser] = useState(user);
  const [searchDate, setSearchDate] = useState('');
  const [searchText, setSearchText] = useState('');
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [highlightedQuotes, setHighlightedQuotes] = useState(highlights);
  const popularSearchTerms = ['钱', '权', '自由', '平等', '双标', '😂','家'];
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);
  const lastTweetElementRef = useCallback((node: HTMLDivElement | null) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setCurrentPage(prevPage => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  useEffect(() => {
    fetchTweets();
  }, []);

  useEffect(() => {
    if (currentPage > 1) {
      loadMoreTweets();
    }
  }, [currentPage]);

  const fetchTweets = async () => {
    try {
      const response = await fetch('/tweets.json');
      if (!response.ok) {
        throw new Error('Failed to fetch tweets');
      }
      const data = await response.json();
      const sortedTweets = data.sort((a: Tweet, b: Tweet) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
      setTweets(sortedTweets);
    } catch (error) {
      console.error('Error fetching tweets:', error);
    }
  };

  const isFavorite = (tweetId: number) => currentUser.notes.some((fav) => fav.tweet_id === tweetId);

  const handleFavorite = (tweet: Tweet) => {
    const updatedUser = { ...currentUser };
    const favoriteIndex = updatedUser.notes.findIndex((fav) => fav.tweet_id === tweet.id);

    if (favoriteIndex !== -1) {
      // Remove from favorites
      updatedUser.notes.splice(favoriteIndex, 1);
    } else {
      // Add to favorites
      updatedUser.notes.push({ tweet_id: tweet.id, comment: '' });
    }

    setCurrentUser(updatedUser);
  };

  const getTimeTag = (date: string) => {
    const tweetDate = new Date(date);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - tweetDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 1) return 'Today';
    if (diffDays < 7) return 'This Week';
    if (diffDays < 30) return 'This Month';
    if (diffDays < 365) return 'This Year';
    return 'Older';
  };

  const filteredTweets = tweets.filter(tweet => {
    const matchesDate = !isFilterActive || !searchDate || new Date(tweet.created_at).toDateString() === new Date(searchDate).toDateString();
    const matchesText = !searchText || tweet.full_text.toLowerCase().includes(searchText.toLowerCase());
    return matchesDate && matchesText;
  });

  const handleFilterToggle = () => {
    setIsFilterActive(!isFilterActive);
    if (isFilterActive) {
      setSearchDate('');
      setSearchText('');
    }
    setCurrentPage(1);
  };

  const highlightText = (text: string, highlight: string) => {
    if (!highlight.trim()) {
      return text;
    }
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === highlight.toLowerCase() ?
        <span key={i} className="bg-yellow-200">{part}</span> : part
    );
  };

  const handleHighlight = (tweet: Tweet) => {
    const newHighlight = { text: tweet.full_text };
    console.log(newHighlight);
    setHighlightedQuotes([...highlightedQuotes, newHighlight]);
  };

  const loadMoreTweets = () => {
    setLoading(true);
    setTimeout(() => {
      const newDisplayedTweets = filteredTweets.slice(0, currentPage * TWEETS_PER_PAGE);
      setHasMore(newDisplayedTweets.length < filteredTweets.length);
      setLoading(false);
    }, 500);
  };

  const displayedTweets = filteredTweets.slice(0, currentPage * TWEETS_PER_PAGE);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <div className="flex justify-end mb-4">
          <button
            onClick={handleFilterToggle}
            className={`px-4 py-2 rounded ${isFilterActive ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-800'
              }`}
          >
            {isFilterActive ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>

        {isFilterActive && (
          <div className="bg-gray-100 p-4 rounded-lg mt-2">
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Filter by Date</h3>
              <input
                type="date"
                value={searchDate}
                onChange={(e) => setSearchDate(e.target.value)}
                className="border rounded p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Search Tweets</h3>
              <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Enter keywords..."
                className="border rounded p-2 w-full"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Popular Search Terms</h3>
              <div className="flex flex-wrap">
                {popularSearchTerms.map((term, index) => (
                  <button
                    key={index}
                    onClick={() => setSearchText(term)}
                    className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm mr-2 mb-2 hover:bg-gray-200 transition-colors duration-200"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="space-y-4">
        {displayedTweets.map((tweet, index) => (
          <div 
            key={tweet.id} 
            className="bg-white shadow rounded-lg p-4"
            ref={index === displayedTweets.length - 1 ? lastTweetElementRef : null}
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="text-gray-600 text-sm">{new Date(tweet.created_at).toLocaleString()}</p>
                <span className="text-xs bg-gray-200 rounded-full px-2 py-1 mt-1 inline-block">
                  {getTimeTag(tweet.created_at)}
                </span>
              </div>
              <div>
                <button
                  onClick={() => handleFavorite(tweet)}
                  className={`text-2xl transition-transform duration-200 mr-2 ${isFavorite(tweet.id) ? 'text-yellow-500 transform scale-125' : 'text-gray-400'
                    }`}
                >
                  ★
                </button>
                <button
                  onClick={() => handleHighlight(tweet)}
                  className="text-2xl text-purple-500 hover:text-purple-600 transition-colors duration-200"
                >
                  ✨
                </button>
              </div>
            </div>
            <p className="text-gray-800">{highlightText(tweet.full_text, searchText)}</p>
          </div>
        ))}
      </div>
      {loading && <p className="text-center mt-4">Loading more tweets...</p>}
    </div>
  );
}
