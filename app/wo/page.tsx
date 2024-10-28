'use client'

import { useState, useEffect } from 'react';
import { profile } from '../data/data';
import { Tweet, Comment } from '../types/type';
import Timeline from './components/component';

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
    <div className="container mx-auto px-4 py-8">
      {/* Profile Section */}
      <details className="mb-8" open>
        <summary className="text-2xl font-bold mb-4 cursor-pointer hover:text-green-600">介绍</summary>
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-3xl font-bold mb-2">{profile.name}</h1>
          <p className="text-lg mb-4">{profile.description}</p>
        </div>
      </details>

      {/* Timeline Section */}
      <details className="mb-8" open>
        <summary className="text-2xl font-bold mb-4 cursor-pointer hover:text-green-600">我的时间线</summary>
        <div className="overflow-x-auto">
          <div className="min-w-max">
            <div className="relative flex items-center">
              {/* Horizontal line */}
            

              <div className="flex">
                <Timeline events={profile.timeline} />
              </div>
            </div>
          </div>
        </div>
      </details>

      {/* Inspiration Section */}
      <details className="mb-8" open>
        <summary className="text-2xl font-bold mb-4 cursor-pointer hover:text-green-600">学习先锋</summary>
        <div className="grid gap-6 md:grid-cols-2">
          {profile.roleModels.map((roleModel, index) => (
            <div key={index} className="bg-green-100 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">{roleModel.name}</h3>
              <p className="text-gray-700 mb-4">{roleModel.description}</p>
              <a href={roleModel.twitterUrl} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800">
                Twitter Profile
              </a>
            </div>
          ))}
        </div>
      </details>

      {/* Tweets & Comments Section */}
      <details open>
        <summary className="text-2xl font-bold mb-6 cursor-pointer hover:text-green-600">我受到的启发</summary>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tweets.map((tweet) => (
            <div key={tweet.id} className="bg-white shadow rounded-lg p-6">
              <p className="text-gray-800 mb-4">"{tweet.full_text}"</p>
              <p className="text-gray-600 text-sm mb-4">- {new Date(tweet.created_at).toLocaleString()}</p>

              {/* Comments Display */}
              <div className="mb-4">
                <h4 className="text-gray-800 font-semibold mb-2">我的笔记：</h4>
                {comments
                  .filter(c => c.tweet_id === tweet.id)
                  .map((comment, index) => (
                    <div key={index} className="bg-gray-100 p-3 rounded-lg mb-2">
                      <p className="text-gray-700 text-sm">{comment.comment}</p>
                    </div>
                  ))
                }
              </div>

              {/* Comment Input Form */}
              {selectedTweetId === tweet.id ? (
                <div>
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="w-full p-2 border rounded mb-2"
                    placeholder="Add a comment..."
                  />
                  <button
                    onClick={() => handleCommentSubmit(tweet.id)}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                  >
                    Submit Comment
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setSelectedTweetId(tweet.id)}
                  className="text-green-600 hover:text-green-800"
                >
                  Add Comment
                </button>
              )}
            </div>
          ))}
        </div>
      </details>
    </div>
  );
}
