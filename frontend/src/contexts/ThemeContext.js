import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('vitascan-theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Save theme preference to localStorage
    localStorage.setItem('vitascan-theme', isDarkMode ? 'dark' : 'light');
    
    // Apply theme to document root
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const theme = {
    isDarkMode,
    toggleTheme,
    colors: {
      // Light mode colors
      light: {
        primary: '#0f766e',
        secondary: '#14b8a6',
        accent: '#2563eb',
        background: '#f8fafc',
        surface: '#ffffff',
        surfaceVariant: '#f0fdfa',
        text: {
          primary: '#0f172a',
          secondary: '#475569',
          accent: '#0f766e'
        },
        border: '#dbe4ea',
        shadow: 'rgba(15, 23, 42, 0.08)',
        gradient: 'linear-gradient(135deg, #f8fafc 0%, #ecfeff 45%, #eef2ff 100%)'
      },
      // Dark mode colors
      dark: {
        primary: '#2dd4bf',
        secondary: '#60a5fa',
        accent: '#a78bfa',
        background: '#0b1220',
        surface: '#111827',
        surfaceVariant: '#172033',
        text: {
          primary: '#f8fafc',
          secondary: '#cbd5e1',
          accent: '#2dd4bf'
        },
        border: '#243244',
        shadow: 'rgba(0, 0, 0, 0.35)',
        gradient: 'linear-gradient(135deg, #0b1220 0%, #111827 45%, #172033 100%)'
      }
    }
  };

  const currentColors = isDarkMode ? theme.colors.dark : theme.colors.light;

  return (
    <ThemeContext.Provider value={{ ...theme, currentColors }}>
      {children}
    </ThemeContext.Provider>
  );
};