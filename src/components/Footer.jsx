import React from 'react';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin, HeartHandshake } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-dark-card border-t border-slate-200 dark:border-slate-800 py-16 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

            <div className="container px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2 space-y-6">
                        <div className="flex items-center gap-3">
                            <HeartHandshake className="h-8 w-8 text-primary" />
                            <span className="font-heading text-xl tracking-wider">
                                ÉCOLE DES <span className="text-secondary">MARIS</span>
                            </span>
                        </div>
                        <p className="text-slate-400 max-w-md leading-relaxed">
                            Une initiative communautaire pour promouvoir la masculinité positive, améliorer la santé maternelle et renforcer l'harmonie familiale au Sénégal.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-6 uppercase tracking-wide text-sm">Liens Rapides</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="text-slate-400 hover:text-secondary transition-colors">Accueil</a></li>
                            <li><a href="#about" className="text-slate-400 hover:text-secondary transition-colors">Notre Histoire</a></li>
                            <li><a href="#impact" className="text-slate-400 hover:text-secondary transition-colors">Notre Impact</a></li>
                            <li><a href="#join" className="text-slate-400 hover:text-secondary transition-colors">Nous Rejoindre</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-6 uppercase tracking-wide text-sm">Contact</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-slate-400">Pikine, Dakar, Sénégal</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail size={18} className="text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-slate-400">contact@ecoledesmaris.sn</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone size={18} className="text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-slate-400">+221 33 800 00 00</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm text-slate-500">
                        &copy; {new Date().getFullYear()} École des Maris Modèles. Tous droits réservés.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all hover:scale-110">
                            <Facebook size={20} />
                        </a>
                        <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all hover:scale-110">
                            <Twitter size={20} />
                        </a>
                        <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all hover:scale-110">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
