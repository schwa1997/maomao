'use client'

import { useState, useEffect, useRef, useCallback } from 'react';
import { Tweet } from '../types/type';
import InfoHeader from '../reusable/reusable/InfoHeader';
import QuoteCard from '../reusable/components/quoteCard';
import PinkButton from '../reusable/reusable/PinkButton';
import Container from '../reusable/reusable/Container';

const TWEETS_PER_PAGE = 10;

export default function Home() {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [searchDate, setSearchDate] = useState('');
  const [searchText, setSearchText] = useState('');
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [isShowInfo, setIsShowInfo] = useState(false);
  const popularSearchTerms = ['钱', '权', '自由', '平等', '双标', '😂', '家'];
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const observer = useRef<IntersectionObserver>();
  const lastTweetElementRef = useCallback((node: HTMLDivElement) => {
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
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2">
            {isFilterActive && (
              <Container>
                <div className="flex items-center gap-4 p-2">
                  <input
                    type="date"
                    value={searchDate}
                    onChange={(e) => setSearchDate(e.target.value)}
                    className="p-1 border-b border-gray-200 dark:border-gray-700 bg-transparent text-black dark:text-white focus:outline-none"
                  />
                  <input
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Search..."
                    className="p-1 border-b border-gray-200 dark:border-gray-700 bg-transparent text-black dark:text-white focus:outline-none"
                  />
                  <div className="flex gap-2">
                    {popularSearchTerms.map((term, index) => (
                      <button
                        key={index}
                        onClick={() => setSearchText(term)}
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                      >
                        #{term}
                      </button>
                    ))}
                  </div>
                </div>
              </Container>
            )}
            {isShowInfo &&
              <Container>
                <div className="flex items-center justify-center h-full">
                  <p className="text-center">你可以使用filter或者关键词，查找你想要的话，可以复制粘贴给朋友，或者可以点击下载存为图片</p>
                </div>
              </Container>
            }
          </div>
          <div className="flex gap-4 px-4">
            <PinkButton text={isShowInfo ? '隐藏说明' : '使用说明'} size="small" onClick={() => setIsShowInfo(!isShowInfo)} />
            <PinkButton text={isFilterActive ? '关闭查找' : '查找'} onClick={handleFilterToggle} size="small" />
          </div>
        </div>


      </div>
      <div className="space-y-4">
        {displayedTweets.map((tweet, index) => {
          if (displayedTweets.length === index + 1) {
            return (
              <div ref={lastTweetElementRef} key={index}>
                <QuoteCard
                  text={tweet.full_text}
                  date={tweet.created_at}
                />
              </div>
            );
          } else {
            return (
              <QuoteCard
                key={index}
                text={tweet.full_text}
                date={tweet.created_at}
              />
            );
          }
        })}
      </div>
      {loading && <p className="text-center mt-4 text-black dark:text-white">Loading more tweets...</p>}
    </div>
  );
}
