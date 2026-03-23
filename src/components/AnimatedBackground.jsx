import React from 'react';

const AnimatedBackground = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Animated orbs - adapt opacity for light mode */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 dark:bg-primary/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/15 dark:bg-secondary/15 rounded-full blur-3xl animate-float-delayed"></div>
            <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/10 dark:bg-primary/10 rounded-full blur-3xl animate-float-slow"></div>

            {/* Grid pattern - visible in both modes */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(100,116,139,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(100,116,139,.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]"></div>
        </div>
    );
};

export default AnimatedBackground;
