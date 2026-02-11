import React from 'react';
import { Globe, Heart, Users, TrendingUp, Shield, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const partners = [
    {
        name: "Plan International",
        logo: <Globe className="h-12 w-12" />,
        tagline: "All Girls Stand Strong",
        description: "Organisation humanitaire et de développement indépendante qui œuvre pour les droits des enfants et l'égalité des filles dans plus de 80 pays.",
        mission: "Améliorer la vie de 200 millions de filles d'ici 2030",
        priorities: [
            { icon: <TrendingUp className="h-5 w-5" />, text: "Double Transition : Action durable et inclusive" },
            { icon: <Users className="h-5 w-5" />, text: "Autonomisation économique des jeunes" },
            { icon: <Heart className="h-5 w-5" />, text: "Égalité des genres et leadership des filles" }
        ],
        color: "primary"
    },
    {
        name: "Affaires mondiales Canada",
        logo: <Shield className="h-12 w-12" />,
        tagline: "Diplomatie, Commerce & Aide Humanitaire",
        description: "Ministère fédéral responsable des relations diplomatiques, du commerce international et de l'aide humanitaire du Canada.",
        mission: "Renforcer la coopération internationale et l'aide au développement",
        priorities: [
            { icon: <Globe className="h-5 w-5" />, text: "Relations diplomatiques (Groenland, Haïti, Inde)" },
            { icon: <Shield className="h-5 w-5" />, text: "Sécurité et lutte contre la criminalité transnationale" },
            { icon: <Heart className="h-5 w-5" />, text: "Aide humanitaire et développement durable" }
        ],
        color: "secondary"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
};

const cardVariants = {
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

const Partners = () => {
    return (
        <section id="partners" className="py-20 md:py-28 bg-dark relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

            <div className="container px-4 md:px-6 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 font-heading">
                        NOS <span className="text-secondary">PARTENAIRES</span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                        Des organisations internationales engagées pour l'égalité, la santé et le développement durable.
                    </p>
                </motion.div>

                {/* Partner Cards */}
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {partners.map((partner, index) => (
                        <motion.div
                            key={index}
                            className="bg-dark-card border border-slate-800 rounded-2xl p-8 md:p-10"
                            variants={cardVariants}
                            whileHover={{
                                borderColor: index === 0 ? "rgba(20, 78, 196, 0.5)" : "rgba(247, 200, 56, 0.5)",
                                boxShadow: index === 0
                                    ? "0 20px 40px rgba(20, 78, 196, 0.2)"
                                    : "0 20px 40px rgba(247, 200, 56, 0.2)",
                                y: -5
                            }}
                        >
                            <div className="flex items-start gap-6 mb-6">
                                <motion.div
                                    className={`p-4 rounded-xl bg-${partner.color}/10 text-${partner.color}`}
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    {partner.logo}
                                </motion.div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold mb-2 font-heading">{partner.name}</h3>
                                    <p className={`text-sm font-semibold text-${partner.color} uppercase tracking-wide`}>
                                        {partner.tagline}
                                    </p>
                                </div>
                            </div>

                            <p className="text-slate-300 leading-relaxed mb-6">
                                {partner.description}
                            </p>

                            <div className={`bg-${partner.color}/5 border border-${partner.color}/20 rounded-lg p-4 mb-6`}>
                                <div className="flex items-center gap-2 mb-2">
                                    <Award className={`h-5 w-5 text-${partner.color}`} />
                                    <span className="font-semibold text-white">Mission 2030</span>
                                </div>
                                <p className="text-sm text-slate-300">{partner.mission}</p>
                            </div>

                            <div className="space-y-3">
                                <h4 className="font-semibold text-white uppercase tracking-wide text-sm mb-4">Priorités 2026</h4>
                                {partner.priorities.map((priority, i) => (
                                    <motion.div
                                        key={i}
                                        className="flex items-start gap-3"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <div className={`mt-0.5 text-${partner.color}`}>
                                            {priority.icon}
                                        </div>
                                        <p className="text-sm text-slate-400 leading-relaxed">{priority.text}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* SHOW Project Section */}
                <motion.div
                    className="max-w-5xl mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="bg-gradient-to-br from-primary/10 via-dark-card to-secondary/10 border-2 border-primary/30 rounded-2xl p-8 md:p-12"
                        whileHover={{
                            borderColor: "rgba(247, 200, 56, 0.5)",
                            boxShadow: "0 25px 50px rgba(20, 78, 196, 0.3)"
                        }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <motion.div
                                className="p-4 bg-gradient-to-br from-primary to-secondary rounded-xl"
                                animate={{
                                    boxShadow: [
                                        "0 0 20px rgba(20, 78, 196, 0.5)",
                                        "0 0 40px rgba(247, 200, 56, 0.5)",
                                        "0 0 20px rgba(20, 78, 196, 0.5)"
                                    ]
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                <Heart className="h-8 w-8 text-white" />
                            </motion.div>
                            <div>
                                <h3 className="text-3xl font-bold font-heading mb-1">
                                    PROJET <span className="text-secondary">SHOW</span>
                                </h3>
                                <p className="text-sm text-slate-400 uppercase tracking-wide">
                                    Strengthening Health Outcomes for Women and Children
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4 mb-8">
                            <p className="text-lg text-slate-200 leading-relaxed">
                                Projet multi-pays mis en œuvre par <strong className="text-primary">Plan International Canada</strong> depuis 2016, financé par <strong className="text-secondary">Affaires mondiales Canada</strong>.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-slate-50 dark:bg-dark/50 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
                                    <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                                        <Globe className="h-5 w-5 text-primary" />
                                        Pays Bénéficiaires
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['Bangladesh', 'Ghana', 'Haïti', 'Nigeria', 'Sénégal'].map((country, i) => (
                                            <motion.span
                                                key={i}
                                                className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary"
                                                initial={{ opacity: 0, scale: 0 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.1 }}
                                                whileHover={{ scale: 1.1 }}
                                            >
                                                {country}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-slate-50 dark:bg-dark/50 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
                                    <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                                        <Heart className="h-5 w-5 text-secondary" />
                                        Objectifs Clés
                                    </h4>
                                    <ul className="space-y-2 text-sm text-slate-300">
                                        <li className="flex items-start gap-2">
                                            <span className="text-secondary mt-1">•</span>
                                            <span>Réduction de la mortalité maternelle et infantile</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-secondary mt-1">•</span>
                                            <span>Autonomisation des femmes et adolescentes</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-secondary mt-1">•</span>
                                            <span>Renforcement des capacités gouvernementales</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <p className="text-slate-400 leading-relaxed italic border-l-4 border-secondary pl-4">
                            "Au-delà de son objectif ultime de contribuer à la réduction de la mortalité, le projet SHOW vise essentiellement l'autonomisation des femmes par une politique d'assistance en santé, touchant principalement les régions isolées et mal desservies."
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Partners;
