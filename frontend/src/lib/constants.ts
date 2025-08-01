

// Centralized route paths for the app
export const ROUTE_PATHS = {
  landingPage: '/',
  home: '/home',
  play: '/play',
  login: '/login',
  dashboard: '/dashboard',
  profile: '/profile',
  post: '/post/:id',
  settings: '/settings',
  register: '/register',
  VerifyEmail:'/verify-email',
  VerifyEmailSent:'/verify-email-sent',


  passwordReset:'/password-reset',
  passwordResetConfirm:'/password-reset-confirm'
} as const;

// App constants
export const APP_CONFIG = {
  name: 'Coduit',
  description: 'Developer Community Platform',
  version: '1.0.0',
} as const;

// API endpoints
export const API_ENDPOINTS = {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    logout: '/auth/logout',
    refresh: '/auth/refresh',
  },
  users: {
    profile: '/users/profile',
    update: '/users/update',
  },
  posts: {
    list: '/posts',
    create: '/posts',
    detail: '/posts/:id',
    update: '/posts/:id',
    delete: '/posts/:id',
  },
} as const;

// Theme constants
export const THEME_CONFIG = {
  light: 'light',
  dark: 'dark',
  localStorageKey: 'theme',
} as const;

export default ROUTE_PATHS; 