import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">
          <Link href="/">
            <a>ALX Project</a>
          </Link>
        </h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/home">
                <a className="hover:underline">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="hover:underline">About</a>
              </Link>
            </li>
            <li>
              <Link href="/posts">
                <a className="hover:underline">Posts</a>
              </Link>
            </li>
            <li>
              <Link href="/users">
                <a className="hover:underline">Users</a>
              </Link>
            </li>
            <li>
              <Link href="/custom-cards">
                <a className="hover:underline">Custom Cards</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
