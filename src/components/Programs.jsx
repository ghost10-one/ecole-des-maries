import React from 'react';
import { Clock, Users, CheckCircle, GraduationCap, Heart, Home, Shield, Baby, Briefcase, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const programs = [
    {
        id: 1,
        title: 'Formation à la Masculinité Positive',
        description: 'Un programme complet pour déconstruire les stéréotypes de genre et promouvoir une vision équilibrée de la masculinité.',
        duration: '3 mois',
        participants: '15-20 hommes',
        features: [
            'Sessions hebdomadaires de discussion',
            'Ateliers pratiques sur les tâches domestiques',
            'Témoignages et partages d\'expériences',
            'Accompagnement personnalisé',
        ],
        icon: <TrendingUp className="h-8 w-8" />,
        color: 'primary',
    },
    {
        id: 2,
        title: 'Santé Maternelle et Néonatale',
        description: 'Impliquer les hommes dans la santé de leurs épouses pendant la grossesse et après l\'accouchement.',
        duration: '2 mois',
        participants: 'Couples',
        features: [
            'Accompagnement aux visites prénatales',
            'Formation sur les signes de danger',
            'Préparation à la naissance',
            'Soins au nouveau-né',
        ],
        icon: <Baby className="h-8 w-8" />,
        color: 'secondary',
    },
    {
        id: 3,
        title: 'Santé Sexuelle et Reproductive',
        description: 'Éducation complète sur la planification familiale et la santé reproductive pour les couples.',
        duration: '1 mois',
        participants: 'Hommes et couples',
        features: [
            'Planification familiale',
            'Communication conjugale',
            'Prévention des IST',
            'Droits reproductifs',
        ],
        icon: <Heart className="h-8 w-8" />,
        color: 'primary',
    },
    {
        id: 4,
        title: 'Lutte contre les Violences',
        description: 'Sensibilisation et formation pour prévenir et lutter contre les violences faites aux femmes.',
        duration: 'Continu',
        participants: 'Communauté',
        features: [
            'Identification des formes de violence',
            'Gestion non-violente des conflits',
            'Devenir un allié actif',
            'Signalement et accompagnement',
        ],
        icon: <Shield className="h-8 w-8" />,
        color: 'secondary',
    },
    {
        id: 5,
        title: 'Formation de Relais Communautaires',
        description: 'Former des hommes pour devenir des ambassadeurs du changement dans leurs communautés.',
        duration: '6 mois',
        participants: '10 hommes sélectionnés',
        features: [
            'Techniques de facilitation',
            'Plaidoyer communautaire',
            'Création de groupes locaux',
            'Suivi et évaluation',
        ],
        icon: <GraduationCap className="h-8 w-8" />,
        color: 'primary',
    },
    {
        id: 6,
        title: 'Travaux Domestiques Partagés',
        description: 'Ateliers pratiques pour apprendre et partager les tâches ménagères au quotidien.',
        duration: '1 mois',
        participants: 'Hommes mariés',
        features: [
            'Cuisine et préparation des repas',
            'Entretien de la maison',
            'Soins aux enfants',
            'Organisation familiale',
        ],
        icon: <Home className="h-8 w-8" />,
        color: 'secondary',
    },
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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

const Programs = () => {
    return (
        <section id="programs" className="py-20 md:py-28 bg-dark-card relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

            <div className="container px-4 md:px-6 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 font-heading">
                        NOS <span className="text-secondary">PROGRAMMES</span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                        Des formations complètes pour transformer les mentalités et renforcer l'engagement des hommes dans la vie familiale.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {programs.map((program, index) => (
                        <motion.div
                            key={program.id}
                            className="group bg-dark border border-slate-800 rounded-2xl overflow-hidden"
                            variants={cardVariants}
                            whileHover={{
                                y: -8,
                                borderColor: program.color === 'primary' ? "rgba(20, 78, 196, 0.5)" : "rgba(247, 200, 56, 0.5)",
                                boxShadow: program.color === 'primary'
                                    ? "0 20px 40px rgba(20, 78, 196, 0.2)"
                                    : "0 20px 40px rgba(247, 200, 56, 0.2)"
                            }}
                        >
                            {/* Header with Icon */}
                            <div className={`relative p-6 bg-gradient-to-br ${program.color === 'primary' ? 'from-primary/10 to-primary/5' : 'from-secondary/10 to-secondary/5'}`}>
                                <motion.div
                                    className={`inline-flex p-4 rounded-xl bg-${program.color}/10 text-${program.color} mb-4`}
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    {program.icon}
                                </motion.div>
                                <h3 className="text-xl font-bold mb-2 font-heading">{program.title}</h3>
                                <p className="text-sm text-slate-400 leading-relaxed">{program.description}</p>
                            </div>

                            {/* Details */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2 text-slate-300">
                                        <Clock className="h-4 w-4 text-primary" />
                                        <span className="font-medium">{program.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-300">
                                        <Users className="h-4 w-4 text-secondary" />
                                        <span className="font-medium">{program.participants}</span>
                                    </div>
                                </div>

                                <div className="border-t border-slate-800 pt-4">
                                    <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">Contenu du programme</h4>
                                    <ul className="space-y-2">
                                        {program.features.map((feature, i) => (
                                            <motion.li
                                                key={i}
                                                className="flex items-start gap-2 text-sm text-slate-400"
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.05 }}
                                            >
                                                <CheckCircle className={`h-4 w-4 mt-0.5 flex-shrink-0 text-${program.color}`} />
                                                <span>{feature}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>

                                <motion.button
                                    className={`w-full mt-4 py-3 px-4 rounded-lg bg-${program.color}/10 border border-${program.color}/30 text-${program.color} font-medium text-sm uppercase tracking-wide transition-all`}
                                    whileHover={{
                                        scale: 1.02,
                                        backgroundColor: program.color === 'primary' ? 'rgba(20, 78, 196, 0.2)' : 'rgba(247, 200, 56, 0.2)'
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    En savoir plus
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <p className="text-lg text-slate-300 mb-6">
                        Intéressé par l'un de nos programmes ?
                    </p>
                    <motion.a
                        href="#contact"
                        className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold uppercase tracking-wide"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 20px 40px rgba(20, 78, 196, 0.4)"
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Rejoindre le mouvement
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Programs;
