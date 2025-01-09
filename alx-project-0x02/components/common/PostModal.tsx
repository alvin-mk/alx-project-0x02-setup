import React, { useState } from 'react';

interface PostModalProps {
  title: string;
  content: string;
  userId: number;
  onClose: () => void;
  onSave: (updatedTitle: string, updatedContent: string) => void;
}

const PostModal: React.FC<PostModalProps> = ({ title, content, userId, onClose, onSave }) => {
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedContent, setUpdatedContent] = useState(content);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(updatedTitle, updatedContent);
    onClose(); // Close the modal after saving
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-4">Edit Post</h2>

        <form onSubmit={handleSave}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={updatedTitle}
              onChange={(e) => setUpdatedTitle(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="content">
              Content
            </label>
            <textarea
              id="content"
              rows={4}
              className="w-full p-2 border border-gray-300 rounded-md"
              value={updatedContent}
              onChange={(e) => setUpdatedContent(e.target.value)}
            />
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
