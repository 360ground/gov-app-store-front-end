/**
 * API URL Configuration
 * Centralized URL management to replace hardcoded localhost URLs
 */

// API Base URLs
export const API_URLS = {
  // Primary backend for user auth, registration, password reset
  BACKEND: process.env.NEXT_PUBLIC_BACKEND_API_URL || 'http://127.0.0.1:8000',
  
  // Alternative backend for app listings and search
  APP_API: process.env.NEXT_PUBLIC_APP_API_URL || 'http://127.0.0.1:8000',
  
  // App submission API
  APP_SUBMISSION: process.env.NEXT_PUBLIC_APP_SUBMISSION_API_URL || 'http://localhost:8000',
  
  // Media files
  MEDIA: process.env.NEXT_PUBLIC_MEDIA_URL || 'http://127.0.0.1:8000',
  
  // Server-side backend (for pages like app-detail)
  SERVER_BACKEND: process.env.BACKEND_URL || 'http://127.0.0.1:8000',
};

// Helper functions to build complete URLs
export const buildBackendUrl = (endpoint: string): string => {
  return `${API_URLS.BACKEND}${endpoint}`;
};

export const buildAppApiUrl = (endpoint: string): string => {
  return `${API_URLS.APP_API}${endpoint}`;
};

export const buildSubmissionUrl = (endpoint: string): string => {
  return `${API_URLS.APP_SUBMISSION}${endpoint}`;
};

export const buildMediaUrl = (path: string, useAlt = false): string => {
  const base = useAlt ? API_URLS.APP_API : API_URLS.MEDIA;
  return `${base}${path}`;
};

export const buildServerBackendUrl = (endpoint: string): string => {
  return `${API_URLS.SERVER_BACKEND}${endpoint}`;
}; 