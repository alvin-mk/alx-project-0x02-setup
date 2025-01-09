import React from 'react';
import { type CardProps }
interface CardProps {
  title: string;
  content: string;
  userId: number;
}

const Card: React.FC<CardProps> = ({ title, content, userId }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{content}</p>
      <div className="text-sm text-gray-500">User ID: {userId}</div>
    </div>
  );
};

export default Card;
