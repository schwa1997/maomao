'use client'

import { useState, useEffect } from 'react';
import { profile } from '../data/data';
import { Tweet, Comment } from '../types/type';
import Timeline from '../reusable/components/timeline';
import SectionContainer from '../reusable/components/sectionContainer';

export default function Collection() {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>('');
  const [selectedTweetId, setSelectedTweetId] = useState<number | null>(null);

  useEffect(() => {
    async function fetchTweets() {
      try {
        const response = await fetch('/tweets.json');
        if (!response.ok) {
          throw new Error('Failed to fetch tweets');
        }
        const allTweets = await response.json();
        const filteredTweets = allTweets.filter((tweet: Tweet) =>
          profile.notes.some(note => note.tweet_id === tweet.id)
        );
        setTweets(filteredTweets);
      } catch (error) {
        console.error('Error fetching tweets:', error);
      }
    }

    fetchTweets();
    setComments(profile.notes);
  }, []);

  const handleCommentSubmit = (tweetId: number) => {
    if (newComment.trim()) {
      const comment: Comment = {
        tweet_id: tweetId,
        comment: newComment.trim()
      };
      setComments(prevComments => [...prevComments, comment]);
      setNewComment('');
      setSelectedTweetId(null);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 space-y-16">
      <SectionContainer title="介绍">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-light mb-4 text-black dark:text-white">{profile.name}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">{profile.description}</p>
        </div>
      </SectionContainer>

      <SectionContainer title="我的时间线">
        <Timeline events={profile.timeline} />
      </SectionContainer>

      <SectionContainer title="学习先锋">
        <div className="grid gap-8 md:grid-cols-2">
          {profile.roleModels.map((roleModel, index) => (
            <div key={index} className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-light mb-4 text-black dark:text-white">{roleModel.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{roleModel.description}</p>
              <a href={roleModel.twitterUrl} target="_blank" rel="noopener noreferrer" 
                className="inline-block text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors">
                Twitter Profile →
              </a>
            </div>
          ))}
        </div>
      </SectionContainer>


      <SectionContainer title="我受到的启发">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tweets.map((tweet) => (
            <div key={tweet.id} className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-md transition-shadow">
              <p className="text-black dark:text-white mb-4 italic">"{tweet.full_text}"</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">- {new Date(tweet.created_at).toLocaleString()}</p>

              <div className="mb-6">
                <h4 className="text-lg font-light mb-4 text-black dark:text-white">我的笔记：</h4>
                {comments
                  .filter(c => c.tweet_id === tweet.id)
                  .map((comment, index) => (
                    <div key={index} className="border-l-2 border-gray-200 dark:border-gray-700 pl-4 mb-4">
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{comment.comment}</p>
                    </div>
                  ))
                }
              </div>

              {selectedTweetId === tweet.id ? (
                <div>
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="w-full p-4 rounded-lg border border-gray-200 dark:border-gray-700 mb-4 focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 bg-white dark:bg-black text-black dark:text-white"
                    placeholder="Add a comment..."
                  />
                  <button
                    onClick={() => handleCommentSubmit(tweet.id)}
                    className="bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Submit
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setSelectedTweetId(tweet.id)}
                  className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  Add Comment →
                </button>
              )}
            </div>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
