import React from 'react';
import { Users, MapPin, Baby, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
    {
        value: "14",
        label: "Écoles des Maris",
        icon: <Users className="h-8 w-8" />,
        description: "Réparties dans tout le pays"
    },
    {
        value: "7",
        label: "Régions Couvertes",
        icon: <MapPin className="h-8 w-8" />,
        description: "Sur les 14 régions du Sénégal"
    },
    {
        value: "2012",
        label: "Année de Lancement",
        icon: <Heart className="h-8 w-8" />,
        description: "Phase pilote à Tambacounda"
    },
    {
        value: "Santé",
        label: "Prioritaire",
        icon: <Baby className="h-8 w-8" />,
        description: "Maternelle, néonatale et infantile"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const Stats = () => {
    return (
        <section id="impact" className="py-20 md:py-28 bg-dark relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

            <div className="container px-4 md:px-6 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 font-heading">
                        NOTRE <span className="text-secondary">IMPACT</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Depuis la phase pilote en 2012 jusqu'à l'expansion nationale, nous mesurons notre succès par l'engagement des hommes et l'amélioration de la santé familiale.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="group relative overflow-hidden rounded-xl bg-dark-card border border-slate-800 p-8 transition-all duration-300"
                            variants={itemVariants}
                            whileHover={{
                                y: -8,
                                borderColor: "rgba(20, 78, 196, 1)",
                                boxShadow: "0 20px 40px rgba(20, 78, 196, 0.2)"
                            }}
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all"></div>

                            <div className="relative z-10">
                                <motion.div
                                    className="mb-6 inline-flex p-4 bg-primary/10 rounded-lg text-primary"
                                    whileHover={{
                                        rotate: [0, -10, 10, -10, 0],
                                        scale: 1.1
                                    }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {stat.icon}
                                </motion.div>
                                <motion.div
                                    className="text-4xl md:text-5xl font-bold text-white mb-2 font-heading"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 10,
                                        delay: index * 0.1
                                    }}
                                >
                                    {stat.value}
                                </motion.div>
                                <div className="text-sm font-semibold text-secondary mb-3 uppercase tracking-wider">{stat.label}</div>
                                <p className="text-sm text-slate-400 leading-relaxed">{stat.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Stats;
