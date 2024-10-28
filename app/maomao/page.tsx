'use client'

import { useState, useEffect, useRef, useCallback } from 'react';
import { Tweet } from '../types/type';
import InfoHeader from '../reusable/InfoHeader';

const TWEETS_PER_PAGE = 10; // Number of tweets to load per page

export default function Home() {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [searchDate, setSearchDate] = useState('');
  const [searchText, setSearchText] = useState('');
  const [isFilterActive, setIsFilterActive] = useState(false);
  const popularSearchTerms = ['钱', '权', '自由', '平等', '双标', '😂', '家'];
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

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('Quote copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const downloadAsImage = (text: string, date: string) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Calculate text dimensions and required canvas height
    ctx.font = '20px Arial';
    const maxWidth = 750;
    const lineHeight = 30;
    const padding = 40;

    // Split text into paragraphs
    const paragraphs = text.split('\n\n');
    let lines: string[] = [];
    let totalHeight = padding * 2; // Top and bottom padding

    // Calculate lines and total height needed
    paragraphs.forEach(paragraph => {
      // Handle each paragraph
      let currentLine = '';
      const words = paragraph.split('');

      words.forEach(char => {
        const testLine = currentLine + char;
        const metrics = ctx.measureText(testLine);

        if (metrics.width > maxWidth) {
          lines.push(currentLine);
          currentLine = char;
          totalHeight += lineHeight;
        } else {
          currentLine = testLine;
        }
      });

      if (currentLine) {
        lines.push(currentLine);
        totalHeight += lineHeight;
      }

      // Add extra line between paragraphs
      lines.push('');
      totalHeight += lineHeight;
    });

    // Set canvas dimensions based on content
    canvas.width = 800;
    canvas.height = totalHeight + 50; // Extra space for date

    // Draw solid background
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add some visual style
    ctx.fillStyle = '#F3F4F6'; // Light gray background
    ctx.fillRect(20, 20, canvas.width - 40, canvas.height - 40);

    // Draw text
    ctx.fillStyle = '#000000';
    ctx.font = '20px Arial';
    let y = padding;
    lines.forEach(line => {
      ctx.fillText(line, padding, y);
      y += lineHeight;
    });

    // Add date at bottom
    ctx.font = '16px Arial';
    ctx.fillText(new Date(date).toLocaleDateString(), padding, canvas.height - padding);



    try {
      // Create download link
      const link = document.createElement('a');
      link.download = 'quote.png';
      link.href = canvas.toDataURL();
      link.click();
    } catch (err) {
      console.error('Failed to download image:', err);
      alert('Failed to download image. Please try again.');
    }
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
      <InfoHeader title="林毛毛语录" description="简中互联网的神，你可以使用filter或者关键词，查找你想要的话，可以复制粘贴给朋友，或者可以点击下载存为图片" />
      <div className="mb-4">
        <div className="flex justify-end mb-4">
          <button
            onClick={handleFilterToggle}
            className={`px-4 py-2 rounded ${isFilterActive ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-800'}`}
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
              <div className="flex space-x-2">
                <button
                  onClick={() => copyToClipboard(tweet.full_text)}
                  className="text-green-600 hover:text-green-800 p-2"
                  title="Copy Quote"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
                <button
                  onClick={() => downloadAsImage(tweet.full_text, tweet.created_at)}
                  className="text-green-600 hover:text-green-800 p-2"
                  title="Download as Image"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
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
