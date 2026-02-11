import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        // Check localStorage or default to dark
        const savedTheme = localStorage.getItem('theme') || 'dark';
        setIsDark(savedTheme === 'dark');
        document.documentElement.classList.toggle('light', savedTheme === 'light');
    }, []);

    const toggleTheme = () => {
        const newTheme = isDark ? 'light' : 'dark';
        setIsDark(!isDark);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('light', newTheme === 'light');
    };

    return (
        <button
            onClick={toggleTheme}
            className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
            aria-label="Toggle theme"
        >
            {isDark ? (
                <Sun className="h-6 w-6 group-hover:rotate-180 transition-transform duration-500" />
            ) : (
                <Moon className="h-6 w-6 group-hover:-rotate-12 transition-transform duration-500" />
            )}
        </button>
    );
};

export default ThemeToggle;
