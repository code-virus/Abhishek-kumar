import React, { useState } from 'react';
import './index.css'; // Ensure Tailwind is imported

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark'); // Ensure the 'dark' class toggles on <html>
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 dark:text-white transition-all duration-300">
      <h1 className="text-4xl font-bold mb-6">Tailwind Dark Mode</h1>
      <button
        onClick={toggleDarkMode}
        className="px-6 py-3 rounded-lg bg-blue-500 dark:bg-blue-700 text-white hover:bg-blue-600 dark:hover:bg-blue-800 transition-all duration-300"
      >
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
};

export default DarkModeToggle;
