import React, { useState } from 'react';

const Settings: React.FC = () => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    darkMode: false,
    publicProfile: true
  });

  const handleToggle = (key: keyof typeof settings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-dark800 rounded-lg shadow-md dark:shadow-gray-800 p-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 font-altar bg-gradient-to-r from-neon_purple to-fashion_pink bg-clip-text text-transparent">
              Settings
            </h1>
            
            <div className="space-y-6">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 font-lobster text-neon_blue">Notifications</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white font-plex-sans">Email Notifications</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 font-plex-sans">Receive notifications via email</p>
                    </div>
                    <button
                      onClick={() => handleToggle('emailNotifications')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.emailNotifications ? 'bg-neon_purple' : 'bg-gray-200 dark:bg-gray-700'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings.emailNotifications ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white font-plex-sans">Push Notifications</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 font-plex-sans">Receive push notifications in browser</p>
                    </div>
                    <button
                      onClick={() => handleToggle('pushNotifications')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.pushNotifications ? 'bg-fashion_pink' : 'bg-gray-200 dark:bg-gray-700'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings.pushNotifications ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 font-lobster text-orange">Appearance</h2>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white font-plex-sans">Dark Mode</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 font-plex-sans">Switch to dark theme</p>
                  </div>
                  <button
                    onClick={() => handleToggle('darkMode')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.darkMode ? 'bg-orange' : 'bg-gray-200 dark:bg-gray-700'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.darkMode ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
              
              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 font-lobster text-lime_green">Privacy</h2>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white font-plex-sans">Public Profile</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 font-plex-sans">Allow others to view your profile</p>
                  </div>
                  <button
                    onClick={() => handleToggle('publicProfile')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.publicProfile ? 'bg-lime_green' : 'bg-gray-200 dark:bg-gray-700'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.publicProfile ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
              
              <div className="pt-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 font-lobster text-orangered">Account</h2>
                <div className="space-y-3">
                  <button className="w-full text-left px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-dark700 transition-colors bg-gradient-to-r from-neon_purple/5 to-fashion_pink/5">
                    <h3 className="font-medium text-gray-900 dark:text-white font-altar">Change Password</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 font-plex-sans">Update your account password</p>
                  </button>
                  
                  <button className="w-full text-left px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-dark700 transition-colors bg-gradient-to-r from-orange/5 to-orangered/5">
                    <h3 className="font-medium text-gray-900 dark:text-white font-altar">Delete Account</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 font-plex-sans">Permanently delete your account</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings; 