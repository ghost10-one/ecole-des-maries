import React, { useState, useEffect } from 'react';
import { Menu, X, HeartHandshake } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    const headerBackground = useTransform(
        scrollY,
        [0, 100],
        ['rgba(15, 23, 42, 0.8)', 'rgba(15, 23, 42, 0.95)']
    );

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <motion.header
            className="sticky top-0 z-50 w-full border-b border-slate-800 backdrop-blur supports-[backdrop-filter]:bg-dark/80"
            style={{ backgroundColor: headerBackground }}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="container flex h-20 max-w-screen-2xl items-center justify-between px-6">
                <motion.a
                    href="/"
                    className="flex items-center gap-3"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.div
                        className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-white"
                        animate={{
                            boxShadow: isScrolled
                                ? "0 0 20px rgba(20, 78, 196, 0.5)"
                                : "0 0 0px rgba(20, 78, 196, 0)"
                        }}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                    >
                        <HeartHandshake className="h-6 w-6" />
                    </motion.div>
                    <span className="font-heading text-lg tracking-wider">
                        ÉCOLE DES <span className="text-secondary">MARIS</span>
                    </span>
                </motion.a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wide">
                    {[
                        { label: 'Accueil', href: '#' },
                        { label: 'Notre Histoire', href: '#about' },
                        { label: 'Impact', href: '#impact' },
                        { label: 'Programmes', href: '#programs' },
                        { label: 'Partenaires', href: '#partners' }
                    ].map((item, i) => (
                        <motion.a
                            key={item.label}
                            href={item.href}
                            className="transition-colors hover:text-secondary text-slate-300 relative"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -2 }}
                        >
                            {item.label}
                            <motion.span
                                className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary"
                                whileHover={{ width: "100%" }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.a>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <motion.a
                        href="#join"
                        className="hidden md:inline-flex items-center justify-center rounded-md text-sm font-medium uppercase tracking-wide bg-primary text-white h-11 px-6"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 20px rgba(20, 78, 196, 0.6)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        Rejoindre
                    </motion.a>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className="md:hidden inline-flex items-center justify-center rounded-md text-white hover:bg-slate-800 transition-colors h-10 w-10"
                        onClick={toggleMenu}
                        whileTap={{ scale: 0.9 }}
                    >
                        <motion.div
                            animate={{ rotate: isMenuOpen ? 90 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </motion.div>
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={false}
                animate={{
                    height: isMenuOpen ? "auto" : 0,
                    opacity: isMenuOpen ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden border-t border-slate-800 bg-dark-card"
            >
                <nav className="flex flex-col gap-4 p-6">
                    {[
                        { label: 'Accueil', href: '#' },
                        { label: 'Notre Histoire', href: '#about' },
                        { label: 'Impact', href: '#impact' },
                        { label: 'Programmes', href: '#programs' },
                        { label: 'Partenaires', href: '#partners' },
                        { label: 'Rejoindre le mouvement', href: '#join' }
                    ].map((item, i) => (
                        <motion.a
                            key={item.label}
                            href={item.href}
                            className="text-sm font-medium uppercase hover:text-secondary transition-colors"
                            onClick={toggleMenu}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
                            transition={{ delay: i * 0.05 }}
                        >
                            {item.label}
                        </motion.a>
                    ))}
                </nav>
            </motion.div>
        </motion.header>
    );
};

export default Header;
