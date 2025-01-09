import { useState } from 'react';

const PostModal = ({ onSave }: { onSave: (title: string, content: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    onSave(title, content);
    setTitle('');
    setContent('');
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Post
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl mb-4">Add Post</h2>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border p-2 w-full mb-2"
            />
            <textarea
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="border p-2 w-full mb-4"
            />
            <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded mr-2">
              Save
            </button>
            <button onClick={() => setIsOpen(false)} className="bg-red-500 text-white px-4 py-2 rounded">
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PostModal;
