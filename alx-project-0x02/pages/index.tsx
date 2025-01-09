import React from 'react';
import Link from 'next/link';

const IndexPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to the ALX Project</h1>
      <p className="text-lg mb-6">
        This project demonstrates various Next.js features, including navigation, reusable components, API integration, and TypeScript typing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/home">
          <a className="block border rounded-lg p-4 text-center shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">Home</h2>
            <p className="text-gray-600">Visit the Home page to see the header in action.</p>
          </a>
        </Link>
        <Link href="/about">
          <a className="block border rounded-lg p-4 text-center shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">About</h2>
            <p className="text-gray-600">Learn more about the project on the About page.</p>
          </a>
        </Link>
        <Link href="/posts">
          <a className="block border rounded-lg p-4 text-center shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">Posts</h2>
            <p className="text-gray-600">View dynamic posts fetched from an API.</p>
          </a>
        </Link>
        <Link href="/users">
          <a className="block border rounded-lg p-4 text-center shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">Users</h2>
            <p className="text-gray-600">Explore user profiles with dynamic UserCard components.</p>
          </a>
        </Link>
        <Link href="/custom-cards">
          <a className="block border rounded-lg p-4 text-center shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">Custom Cards</h2>
            <p className="text-gray-600">See custom Card and Pill components with props.</p>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default IndexPage;
