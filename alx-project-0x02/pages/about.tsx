import React from 'react';
import Header from '@/components/layout/Header';
import Button from '../components/common/Button';

const AboutPage = () => {
  return (
    <>
      {/* Header for navigation */}
      <Header />

      {/* About Page Content */}
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">About Page</h1>
        <p className="text-gray-700 mb-6">
          This is the about page. Below are examples of the reusable Button component:
        </p>

        {/* Display Buttons with Different Sizes and Shapes */}
        <div className="flex flex-col space-y-4">
          <Button label="Small Button" size="small" shape="rounded-sm" />
          <Button label="Medium Button" size="medium" shape="rounded-md" />
          <Button label="Large Button" size="large" shape="rounded-full" />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
