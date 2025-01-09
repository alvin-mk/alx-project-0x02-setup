import React, { useEffect, useState } from 'react';
import Card from", "@/components/common/Card
import Header from '../components/layout/Header';
import PostCard from '../components/common/PostCard';
import { PostProps } from '../interfaces';

const Home: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch posts data from the API (JSONPlaceholder)
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <Header />
      <main className="p-6">
        <h2 className="text-3xl font-bold mb-6">Welcome to the Home Page</h2>

        {/* Loading state */}
        {loading ? (
          <div className="text-center">Loading posts...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Display each post */}
            {posts.map((post) => (
              <PostCard
                key={post.id}
                title={post.title}
                content={post.body}
                userId={post.userId}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
