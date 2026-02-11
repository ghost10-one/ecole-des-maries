import React from 'react';
import { Home, HeartPulse, ShieldCheck, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const pillars = [
    {
        icon: <Home className="h-10 w-10" />,
        title: "Partage des Tâches",
        description: "Encourager les hommes à participer aux travaux domestiques pour soulager leurs épouses et renforcer la cohésion du foyer."
    },
    {
        icon: <HeartPulse className="h-10 w-10" />,
        title: "Santé Familiale",
        description: "Impliquer activement les maris dans le suivi de la santé maternelle, néonatale, infantile et la santé sexuelle reproductive."
    },
    {
        icon: <ShieldCheck className="h-10 w-10" />,
        title: "Lutte contre les Violences",
        description: "Se dresser en rempart contre toutes formes de violences faites aux femmes et aux enfants au sein de la communauté."
    },
    {
        icon: <Users className="h-10 w-10" />,
        title: "Dialogue Conjugal",
        description: "Promouvoir une communication saine et bienveillante dans le couple pour désamorcer les conflits et cultiver l'harmonie."
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
        opacity: 1,
        scale: 1,
        rotateY: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const Pillars = () => {
    return (
        <section className="py-20 md:py-28 bg-dark-card relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

            <div className="container px-4 md:px-6 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 font-heading">
                        NOS DOMAINES <span className="text-secondary">D'ACTION</span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                        Nous transformons les mentalités pour bâtir une société plus juste et équilibrée.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            className="group relative overflow-hidden rounded-xl border border-slate-800 bg-dark p-8"
                            variants={cardVariants}
                            whileHover={{
                                y: -12,
                                borderColor: "rgba(247, 200, 56, 1)",
                                boxShadow: "0 20px 40px rgba(247, 200, 56, 0.2)",
                                transition: { duration: 0.3 }
                            }}
                        >
                            <motion.div
                                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100"
                                initial={{ scale: 0 }}
                                whileHover={{ scale: 1 }}
                                transition={{ duration: 0.4 }}
                            />

                            <div className="relative z-10">
                                <motion.div
                                    className="mb-6 inline-flex items-center justify-center rounded-lg bg-primary/10 p-4 text-primary group-hover:bg-secondary/10 group-hover:text-secondary"
                                    whileHover={{
                                        rotate: [0, -5, 5, -5, 0],
                                        scale: 1.1
                                    }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {pillar.icon}
                                </motion.div>
                                <h3 className="text-xl font-bold mb-4 font-heading uppercase tracking-wide">{pillar.title}</h3>
                                <p className="text-slate-400 leading-relaxed mb-6">
                                    {pillar.description}
                                </p>
                                <motion.a
                                    href="#"
                                    className="inline-flex items-center text-sm font-medium text-secondary hover:text-secondary/80 transition-colors uppercase tracking-wide"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Pillars;
