import React from 'react';
import { Quote } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <section id="about" className="py-20 md:py-28 bg-dark relative overflow-hidden">
            {/* Background glow */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"
                style={{ y }}
            />

            <div className="container px-4 md:px-6 relative z-10">
                {/* Main Story Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight font-heading">
                            L'HISTOIRE DE <span className="text-secondary">ECOLE DES MARIS</span>
                        </h2>
                        <motion.div
                            className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: 96 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        />

                        <motion.p
                            className="text-lg text-slate-300 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            L'École des Maris de Pikine, mise en place dans le cadre du projet <strong className="text-secondary">SHOW</strong> porté par <strong className="text-primary">Plan International</strong> et financé par <strong className="text-secondary">Affaires mondiales Canada</strong>. Cette initiative vise à améliorer la santé maternelle, néonatale et infantile, ainsi que la santé reproductive en y impliquant activement les hommes.
                        </motion.p>

                        <motion.p
                            className="text-slate-400 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            Implantée à <strong className="text-secondary">Djeddah Thiaroye Kao</strong> dans le département de Pikine, l'école compte quinze membres dans la banlieue dakaroise. Ils s'évertuent à modifier la donne consistant à laisser les femmes endosser de lourdes charges pendant que les hommes se la coulent douce sous un manguier ou dans un douillet canapé.
                        </motion.p>

                        <motion.p
                            className="text-slate-400 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            L'École des maris modèles estime que les réalités doivent être autres en ce XXIᵉ siècle. Ils initient les hommes aux <strong className="text-white">travaux domestiques</strong>, organisent des sessions sur la <strong className="text-white">santé néonatale</strong>, la <strong className="text-white">santé sexuelle</strong>, et se dressent en rempart contre les <strong className="text-white">violences</strong> dont les femmes sont victimes.
                        </motion.p>

                        {/* <motion.div
                            className="pt-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <h3 className="font-semibold text-lg mb-4 text-white uppercase tracking-wide">Nos Partenaires</h3>
                            <div className="flex flex-wrap gap-3">
                                {['Plan International', 'Affaires mondiales Canada', 'Projet Show'].map((partner, i) => (
                                    <motion.span
                                        key={i}
                                        className="px-4 py-2 bg-dark-card border border-slate-700 rounded-lg text-sm font-medium text-slate-300 hover:border-primary hover:text-primary transition-colors cursor-pointer"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.7 + i * 0.1 }}
                                    >
                                        {partner}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div> */}
                    </motion.div>

                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="absolute -top-6 -left-6 text-primary/10">
                            <Quote size={120} strokeWidth={1} />
                        </div>
                        <motion.blockquote
                            className="relative bg-dark-card rounded-2xl p-8 md:p-10 border border-slate-800 shadow-2xl"
                            whileHover={{
                                borderColor: "rgba(20, 78, 196, 0.5)",
                                boxShadow: "0 25px 50px rgba(20, 78, 196, 0.2)"
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.div
                                className="mb-6 text-primary"
                                animate={{ rotate: [0, 5, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                <Quote size={48} />
                            </motion.div>
                            <p className="text-xl md:text-2xl font-medium italic text-slate-200 mb-8 leading-relaxed">
                                "Nous ne comprenons pas pourquoi on doit nous enseigner la façon dont nous devons préserver nos rapports sociaux à cette époque. Cela devrait être spontané. L'islam établit un équilibre à respecter"
                            </p>
                            <footer className="flex items-center gap-4 border-t border-slate-700 pt-6">
                                <motion.div
                                    className="h-14 w-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                    MS
                                </motion.div>
                                <div>
                                    <div className="font-bold text-white text-lg">El Hadji Malick Sarr</div>
                                    <div className="text-sm text-slate-400">Coach, École des Maris de Pikine</div>
                                </div>
                            </footer>
                        </motion.blockquote>
                    </motion.div>
                </div>

                {/* Mission & Vision Section */}
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="bg-dark-card border border-slate-800 rounded-2xl p-8"
                        whileHover={{
                            borderColor: "rgba(20, 78, 196, 0.5)",
                            y: -5
                        }}
                    >
                        <h3 className="text-2xl font-bold mb-4 font-heading text-secondary">NOTRE MISSION</h3>
                        <p className="text-slate-300 leading-relaxed mb-4">
                            « On s'est rendu compte, avec l'expérience, que la plupart des Sénégalais agissent avec maladresse par méconnaissance. Ceux qu'on a réussi à enrôler tiennent tous le même discours : ils évoquent leur ignorance. »
                        </p>
                        <p className="text-slate-400 leading-relaxed">
                            Ils ont été formatés dans un esprit de domination de la femme, considérée presque comme une esclave au service exclusif du mari. Nous développons la <strong className="text-white">masculinité positive</strong> et formons des relais pour contribuer à un changement d'attitudes.
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-dark-card border border-slate-800 rounded-2xl p-8"
                        whileHover={{
                            borderColor: "rgba(20, 78, 196, 0.5)",
                            y: -5
                        }}
                    >
                        <h3 className="text-2xl font-bold mb-4 font-heading text-secondary">CHRONOLOGIE</h3>
                        <div className="space-y-4">
                            {[
                                { year: '2012', title: 'Phase Pilote', desc: 'Districts sanitaires de Koumpentoum et Macacolibantang, Tambacounda', color: 'primary' },
                                { year: '2018', title: 'Lancement à Pikine', desc: 'Djeddah Thiaroye Kao - Curiosité initiale puis adoption croissante', color: 'secondary' },
                                { year: '2019', title: 'Stratégie Nationale', desc: 'L\'État sénégalais adopte une stratégie pour l\'implication des hommes', color: 'primary' }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="flex gap-4"
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.2 }}
                                >
                                    <motion.div
                                        className={`flex-shrink-0 w-20 h-20 rounded-full bg-${item.color}/10 border-2 border-${item.color} flex items-center justify-center`}
                                        whileHover={{ scale: 1.1, rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <span className={`font-bold text-${item.color}`}>{item.year}</span>
                                    </motion.div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                                        <p className="text-sm text-slate-400">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Video Section */}
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h3 className="text-3xl font-bold text-center mb-8 font-heading">
                        DÉCOUVREZ NOTRE <span className="text-secondary">HISTOIRE</span>
                    </h3>
                    <motion.div
                        className="relative rounded-2xl overflow-hidden border-2 border-slate-800 group"
                        whileHover={{
                            borderColor: "rgba(20, 78, 196, 0.5)",
                            boxShadow: "0 25px 50px rgba(20, 78, 196, 0.3)"
                        }}
                    >
                        <div className="aspect-video">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/6jsr2TFhP24?start=66"
                                title="École des Maris - Vidéo de présentation"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
