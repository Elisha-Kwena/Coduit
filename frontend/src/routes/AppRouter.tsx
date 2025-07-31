import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import { ROUTE_PATHS } from '../lib/constants';

// Lazy load components for better performance
const LandingPage = lazy(() => import('../pages/landing/LandinpPage'));
const Home = lazy(() => import('../pages/home/Home'));
const Login = lazy(() => import('../pages/auth/Login'));
const Register = lazy(() => import('../pages/auth/Register'));
const Profile = lazy(() => import('../pages/profile/Profile'));
const Post = lazy(() => import('../pages/post/Post'));
const Settings = lazy(() => import('../pages/settings/Settings'));

function AppRouter() {
  return ( 
      <Suspense fallback={<LoadingSpinner fullScreen size="lg" />}>
        <Routes>
          {/* Public routes */}
          <Route path={ROUTE_PATHS.landingPage} element={<LandingPage />} />
          <Route path={ROUTE_PATHS.login} element={<Login />} />
          <Route path={ROUTE_PATHS.register} element={<Register />} />
          
          {/* Protected routes */}
          <Route path={ROUTE_PATHS.profile} element={<Profile />} />
          <Route path={ROUTE_PATHS.post} element={<Post />} />
          <Route path={ROUTE_PATHS.settings} element={<Settings />} />
          <Route path={ROUTE_PATHS.home} element={<Home />} />
          
          {/* Catch all route */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
  );
}

export default AppRouter;
