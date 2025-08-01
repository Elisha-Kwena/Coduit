import { ROUTE_PATHS } from './constants';

/**
 * Generate a route path with parameters
 * @param route - The route key from ROUTE_PATHS
 * @param params - Parameters to replace in the route
 * @returns The generated route path
 */
export const generateRoute = (route: keyof typeof ROUTE_PATHS, params?: Record<string, string | number>): string => {
  let path: string = ROUTE_PATHS[route];
  
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      path = path.replace(`:${key}`, String(value));
    });
  }
  
  return path;
};

/**
 * Check if a route is active
 * @param currentPath - Current location pathname
 * @param route - The route to check
 * @param params - Parameters for the route
 * @returns Whether the route is active
 */
export const isRouteActive = (
  currentPath: string, 
  route: keyof typeof ROUTE_PATHS, 
  params?: Record<string, string | number>
): boolean => {
  const routePath = generateRoute(route, params);
  return currentPath === routePath;
};

/**
 * Get route path without parameters
 * @param route - The route key from ROUTE_PATHS
 * @returns The route path
 */
export const getRoutePath = (route: keyof typeof ROUTE_PATHS): string => {
  return ROUTE_PATHS[route];
};

// Common route generators
export const routes = {
  post: (id: string | number) => generateRoute('post', { id }),
  profile: () => getRoutePath('profile'),
  settings: () => getRoutePath('settings'),
  login: () => getRoutePath('login'),
  register: () => getRoutePath('register'),
  home: () => getRoutePath('home'),
  landingPage: () => getRoutePath('landingPage'),
  verifyemail: () => getRoutePath('VerifyEmail'),
  verifyemailsent: () => getRoutePath('VerifyEmailSent'),
  passwordReset: () => getRoutePath('passwordReset'),
  passwordResetConfirm: () => getRoutePath('passwordResetConfirm')
} as const; 