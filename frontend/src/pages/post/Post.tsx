import React from 'react';
import { useParams } from 'react-router-dom';

const Post: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-dark800 rounded-lg shadow-md dark:shadow-gray-800 p-8">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 font-altar">
                Building a React App with TypeScript
              </h1>
              <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300 mb-6">
                <span>By John Doe</span>
                <span>•</span>
                <span>2 days ago</span>
                <span>•</span>
                <span className="text-neon_pink">15 likes</span>
              </div>
            </div>
            
            <div className="prose max-w-none mb-8">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 font-plex-sans">
                In this comprehensive guide, we'll walk through setting up a modern React application 
                with TypeScript, Vite, and Tailwind CSS. This setup provides excellent developer 
                experience and type safety.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4 font-lobster">Getting Started</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 font-plex-sans">
                First, let's create a new project using Vite with React and TypeScript template:
              </p>
              
              <div className="bg-dark900 text-lime_green p-4 rounded-lg mb-4 overflow-x-auto border border-neon_blue">
                <pre className="text-sm font-fira-code">
                  <code>npm create vite@latest my-app -- --template react-ts</code>
                </pre>
              </div>
              
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4 font-lobster">Installation</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 font-plex-sans">
                Navigate to your project directory and install dependencies:
              </p>
              
              <div className="bg-dark900 text-lime_green p-4 rounded-lg mb-4 overflow-x-auto border border-neon_blue">
                <pre className="text-sm font-fira-code">
                  <code>cd my-app
npm install</code>
                </pre>
              </div>
            </div>
            
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 font-fira-code">Comments</h3>
              <div className="space-y-4">
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-gradient-to-r from-neon_purple/10 to-fashion_pink/10">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-neon_purple rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-white">JD</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white">Jane Smith</span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">1 day ago</span>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 font-plex-sans">Great tutorial! The TypeScript setup really helps with code quality.</p>
                </div>
                
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-gradient-to-r from-orange/10 to-orangered/10">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-white">MS</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white">Mike Johnson</span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">2 days ago</span>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 font-plex-sans">Thanks for sharing! This helped me get started quickly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post; 