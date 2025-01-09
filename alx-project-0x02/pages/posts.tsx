import React from 'react';
import Header from '@/components/layout/Header';

const Posts: React.FC = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Posts</h1>
        <p>Read our latest posts and updates here.</p>
      </main>
    </>
  );
};

export default Posts;
