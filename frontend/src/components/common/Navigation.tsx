import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggleButton from './ThemeToggleButton';
import { APP_CONFIG } from '../../lib/constants';
import { routes, isRouteActive } from '../../lib/routeUtils';

const Navigation: React.FC = () => {
  const location = useLocation();

  // Unified active class check
  const getNavLinkClass = (path: string, isActive: boolean) => {
    const baseClasses = 'px-3 py-2 rounded-md text-sm font-medium transition-colors';
    const activeClasses = 'bg-blue-500 text-white';
    const inactiveClasses = 'text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-dark800';
    
    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  };

  return (
    <nav className="bg-white shadow-md dark:bg-dark900 dark:shadow-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link 
            to={routes.landingPage()} 
            className="text-xl font-bold text-gray-900 dark:text-white"
          >
            {APP_CONFIG.name}
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link
              to={routes.landingPage()}
              className={getNavLinkClass(
                routes.landingPage(), 
                location.pathname === routes.landingPage()
              )}
            >
              Home
            </Link>
            
            <Link
              to={routes.login()}
              className={getNavLinkClass(
                routes.login(), 
                location.pathname === routes.login()
              )}
            >
              Login
            </Link>
            
            <Link
              to={routes.register()}
              className={getNavLinkClass(
                routes.register(), 
                location.pathname === routes.register()
              )}
            >
              Register
            </Link>
            
            <Link
              to={routes.profile()}
              className={getNavLinkClass(
                routes.profile(), 
                location.pathname.startsWith(routes.profile())
              )}
            >
              Profile
            </Link>
            
            <Link
              to={routes.post(1)}
              className={getNavLinkClass(
                routes.post(1), 
                isRouteActive(location.pathname, 'post', { id: 1 })
              )}
            >
              Post
            </Link>
            
            <Link
              to={routes.settings()}
              className={getNavLinkClass(
                routes.settings(), 
                location.pathname === routes.settings()
              )}
            >
              Settings
            </Link>
            
            <ThemeToggleButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;