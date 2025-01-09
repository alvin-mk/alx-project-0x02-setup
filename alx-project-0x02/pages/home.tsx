import Header from '../components/layout/Header';
import PostModal from '../components/common/PostModal';
import { useState } from 'react';

const HomePage = () => {
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);

  const handleSavePost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };

  return (
    <>
      <Header />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Home Page</h1>
        <PostModal onSave={handleSavePost} />
        <div className="mt-4">
          {posts.map((post, index) => (
            <div key={index} className="border rounded p-4 my-2">
              <h2 className="text-lg font-bold">{post.title}</h2>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
