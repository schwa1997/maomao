'use client'

import { useState, useEffect } from 'react';
import { user } from '../data/data';
import { Tweet, Comment } from '../types/type';

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
          user.notes.some(note => note.tweet_id === tweet.id)
        );
        setTweets(filteredTweets);
      } catch (error) {
        console.error('Error fetching tweets:', error);
      }
    }

    fetchTweets();
    setComments(user.notes);
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
      <div className="flex flex-col items-center mb-6">
        <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
        <p className="text-lg mb-4">{user.description}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">我的神</h2>
        <div className="bg-purple-100 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-2">{user.maomao.name}</h3>
          <p className="text-gray-700 mb-4">{user.maomao.description}</p>
          <a href={user.maomao.twitterUrl} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800">
            Twitter Profile
          </a>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6">我受到的启发：</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tweets.map((tweet) => (
          <div key={tweet.id} className="bg-white shadow rounded-lg p-6">
            <p className="text-gray-800 mb-4">"{tweet.full_text}"</p>
            <p className="text-gray-600 text-sm mb-4">- {new Date(tweet.created_at).toLocaleString()}</p>
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
                  className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
                >
                  Submit Comment
                </button>
              </div>
            ) : (
              <button
                onClick={() => setSelectedTweetId(tweet.id)}
                className="text-purple-600 hover:text-purple-800"
              >
                Add Comment
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
