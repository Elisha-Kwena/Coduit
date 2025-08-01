// src/App.tsx
import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router ,useLocation} from 'react-router-dom';
import { ThemeProvider } from './components/ui/ThemeProvider';
import AppRouter from './routes/AppRouter';
import Navigation from './components/common/Navigation';
import ErrorBoundary from './components/ui/ErrorBoundary';
import {ROUTE_PATHS} from './lib/constants';
import LoadingSpinner from './components/ui/LoadingSpinner';


const AppLayout:React.FC = () => {
  const location = useLocation();
  const noNavbarRoutes: Array<typeof ROUTE_PATHS[keyof typeof ROUTE_PATHS]> = [
    ROUTE_PATHS.landingPage,
    ROUTE_PATHS.login,
    ROUTE_PATHS.login,
    ROUTE_PATHS.register,
    ROUTE_PATHS.VerifyEmail,
    ROUTE_PATHS.VerifyEmailSent
  ];
  return (
    <>
      {!noNavbarRoutes.includes(location.pathname as typeof ROUTE_PATHS[keyof typeof ROUTE_PATHS]) && <Navigation />}
      <AppRouter />
    </>
  );
}

// No need for AppLayout component since Navigation handles its own visibility
function App() {
  const[isLoading,setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if(isLoading) return <LoadingSpinner fullScreen size="lg" />;

  return (
    <ThemeProvider>
      <ErrorBoundary>
      <Router>
        {/* <Navigation /> */}
        <AppRouter />
      </Router>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;