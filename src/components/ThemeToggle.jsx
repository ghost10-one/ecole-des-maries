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
            className="fixed bottom-8 right-8 z-50 flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-primary to-primary-light shadow-lg hover:shadow-2xl transition-all duration-300 group"
            aria-label="Toggle theme"
        >
            {/* Toggle Track */}
            <div className="relative w-14 h-7 bg-white/20 rounded-full transition-all duration-300">
                {/* Toggle Slider */}
                <div
                    className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-all duration-300 ease-in-out ${isDark ? 'left-0.5' : 'left-7'
                        }`}
                >
                    {/* Icon inside slider */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        {isDark ? (
                            <Moon className="h-4 w-4 text-primary" />
                        ) : (
                            <Sun className="h-4 w-4 text-secondary" />
                        )}
                    </div>
                </div>
            </div>

            {/* Label Text */}
            <span className="text-white text-sm font-medium pr-1">
                {isDark ? 'Sombre' : 'Clair'}
            </span>
        </button>
    );
};

export default ThemeToggle;
