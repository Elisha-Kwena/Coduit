import React from 'react';

const Profile: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-dark800 rounded-lg shadow-md dark:shadow-gray-800 p-8">
            <div className="flex items-center space-x-6 mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-neon_purple to-fashion_pink rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white font-altar">JD</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white font-fira-code">John Doe</h1>
                <p className="text-gray-600 dark:text-gray-300 font-plex-sans">@johndoe</p>
                <p className="text-gray-500 dark:text-gray-400 mt-2 font-plex-sans">Full-stack developer passionate about React and TypeScript</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 dark:bg-dark700 p-6 rounded-lg border border-neon_blue/20">
                <h3 className="text-lg font-semibold mb-4 font-lobster text-neon_blue">Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300 font-plex-sans">Posts</span>
                    <span className="font-semibold text-fashion_pink">24</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300 font-plex-sans">Followers</span>
                    <span className="font-semibold text-orange">156</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300 font-plex-sans">Following</span>
                    <span className="font-semibold text-lime_green">89</span>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <h3 className="text-lg font-semibold mb-4 font-lobster text-neon_purple">Recent Posts</h3>
                <div className="space-y-4">
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-gradient-to-r from-neon_purple/5 to-fashion_pink/5">
                    <h4 className="font-semibold text-gray-900 dark:text-white font-altar">Building a React App with TypeScript</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 font-plex-sans">A comprehensive guide to setting up a modern React application...</p>
                    <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500 dark:text-gray-400">
                      <span>2 days ago</span>
                      <span>•</span>
                      <span className="text-neon_pink">15 likes</span>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-gradient-to-r from-orange/5 to-orangered/5">
                    <h4 className="font-semibold text-gray-900 dark:text-white font-altar">Tailwind CSS Best Practices</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 font-plex-sans">Tips and tricks for writing maintainable Tailwind CSS...</p>
                    <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500 dark:text-gray-400">
                      <span>1 week ago</span>
                      <span>•</span>
                      <span className="text-orange">32 likes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 