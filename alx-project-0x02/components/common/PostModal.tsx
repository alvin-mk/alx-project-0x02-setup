import React from 'react';

interface PostModalProps {
  title: string;
  content: string;
  userId: number;
  onClose: () => void;
}

const PostModal: React.FC<PostModalProps> = ({ title, content, userId, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <p className="text-gray-700 mb-4">{content}</p>
        <div className="text-sm text-gray-500">User ID: {userId}</div>
        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PostModal;
