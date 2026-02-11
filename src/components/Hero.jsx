import React from 'react';
import { ArrowRight, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    const [isDark, setIsDark] = useState(true); // Default to dark, will be updated by useEffect

    useEffect(() => {
        // Observer for theme changes (class 'light')
        const observer = new MutationObserver(() => {
            const theme = document.documentElement.classList.contains('light') ? 'light' : 'dark';
            setIsDark(theme === 'dark');
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

        // Initial check for theme
        const initialTheme = document.documentElement.classList.contains('light') ? 'light' : 'dark';
        setIsDark(initialTheme === 'dark');

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section className={`relative overflow-hidden ${isDark ? 'bg-dark' : 'bg-white'} pt-24 md:pt-32 lg:pt-40 pb-20 md:pb-28`}>
            {/* Background Glow Effects */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl opacity-10 dark:opacity-20 translate-z-0"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl opacity-10 dark:opacity-15 translate-z-0"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.15, 0.25, 0.15],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            />

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(100,116,139,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(100,116,139,.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]"></div>

            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center space-y-6 text-center max-w-4xl mx-auto">
                    <motion.div
                        className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Heart className="mr-2 h-4 w-4 fill-secondary text-secondary animate-pulse" />
                        <span className="uppercase tracking-wide">Initiative pour une masculinité positive</span>
                    </motion.div>

                    <motion.h1
                        className={`text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-heading ${isDark ? 'text-white' : 'text-gray-900'}`}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        L'ÉCOLE DES <br className="hidden md:inline" />
                        <motion.span
                            className="text-gradient"
                            animate={{
                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        >
                            MARIS MODÈLES
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        className={`text-xl md:text-2xl ${isDark ? 'text-slate-400' : 'text-gray-600'} max-w-3xl leading-relaxed`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Cultiver la bienveillance au foyer et transformer les normes sociales pour un partage équitable des responsabilités.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 pt-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <motion.a
                            href="#about"
                            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium uppercase tracking-wide text-white transition-all"
                            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(20, 78, 196, 0.5)" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Découvrir notre approche
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </motion.a>
                        <motion.a
                            href="#impact"
                            className="inline-flex h-12 items-center justify-center rounded-md border-2 border-secondary bg-transparent px-8 text-sm font-medium uppercase tracking-wide text-secondary transition-all"
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "rgba(247, 200, 56, 1)",
                                color: "#0f172a"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Voir notre impact
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
