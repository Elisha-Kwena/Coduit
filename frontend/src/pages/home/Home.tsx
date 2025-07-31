import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../lib/routeUtils';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark900">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 font-altar bg-gradient-to-r from-neon_purple to-fashion_pink bg-clip-text text-transparent">
          Welcome to Coduit
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 font-plex-sans">
          Your platform for developers to share code, discuss ideas, and collaborate.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-dark800 p-6 rounded-lg shadow-md dark:shadow-gray-800 border-l-4 border-neon_blue hover:border-neon_purple transition-colors">
            <h3 className="text-xl font-semibold mb-3 dark:text-white font-lobster text-neon_blue">Share Code</h3>
            <p className="text-gray-600 dark:text-gray-300 font-plex-sans">Upload and share your code snippets with the community.</p>
            <Link to={routes.post(1)} className="text-neon_blue hover:text-neon_purple font-plex-sans mt-4 inline-block">
              View Example Post →
            </Link>
          </div>
          <div className="bg-white dark:bg-dark800 p-6 rounded-lg shadow-md dark:shadow-gray-800 border-l-4 border-fashion_pink hover:border-neon_purple transition-colors">
            <h3 className="text-xl font-semibold mb-3 dark:text-white font-lobster text-fashion_pink">Discuss</h3>
            <p className="text-gray-600 dark:text-gray-300 font-plex-sans">Join discussions about programming topics and best practices.</p>
            <Link to={routes.login()} className="text-fashion_pink hover:text-neon_purple font-plex-sans mt-4 inline-block">
              Join Discussion →
            </Link>
          </div>
          <div className="bg-white dark:bg-dark800 p-6 rounded-lg shadow-md dark:shadow-gray-800 border-l-4 border-orange hover:border-orangered transition-colors">
            <h3 className="text-xl font-semibold mb-3 dark:text-white font-lobster text-orange">Collaborate</h3>
            <p className="text-gray-600 dark:text-gray-300 font-plex-sans">Work together with other developers on projects.</p>
            <Link to={routes.register()} className="text-orange hover:text-orangered font-plex-sans mt-4 inline-block">
              Start Collaborating →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 