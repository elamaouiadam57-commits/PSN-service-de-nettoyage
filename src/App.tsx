import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  CheckCircle2, 
  Star, 
  Quote, 
  Sparkles, 
  Home, 
  Briefcase, 
  ShieldCheck, 
  Menu, 
  X,
  ArrowRight,
  ThumbsUp,
  Users,
  Leaf,
  Clock,
  Settings,
  ChevronDown,
  ChevronUp,
  Mail,
  MapPin,
  Building,
  Droplets,
  Hammer,
  Bug,
  Hexagon
} from 'lucide-react';

const Logo = ({ className = "h-12 w-auto", textColor = "#334155" }: { className?: string, textColor?: string }) => (
  <svg viewBox="0 0 220 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* PNS Text */}
    <path d="M 10 55 V 25 H 40 V 40 H 10" stroke={textColor} strokeWidth="7" strokeLinecap="square" strokeLinejoin="miter" />
    <path d="M 55 55 V 25 H 85 V 55" stroke={textColor} strokeWidth="7" strokeLinecap="square" strokeLinejoin="miter" />
    <path d="M 130 25 H 100 V 40 H 130 V 55 H 100" stroke={textColor} strokeWidth="7" strokeLinecap="square" strokeLinejoin="miter" />
    
    {/* Hexagons */}
    <g transform="translate(125, 15) scale(0.8)">
      {/* Center - Lime */}
      <polygon points="15,0 45,0 60,26 45,52 15,52 0,26" fill="#84cc16" />
      {/* Top Right - Light Green */}
      <polygon points="60,-26 90,-26 105,0 90,26 60,26 45,0" fill="#bef264" />
      {/* Bottom Right - Pale Green */}
      <polygon points="60,26 90,26 105,52 90,78 60,78 45,52" fill="#b2c29d" />
      {/* Left - Outlined */}
      <polygon points="-30,26 0,26 15,52 0,78 -30,78 -45,52" fill="none" stroke="#d4af37" strokeWidth="2" />
      {/* Bottom - Outlined */}
      <polygon points="15,52 45,52 60,78 45,104 15,104 0,78" fill="none" stroke="#d4af37" strokeWidth="2" />
    </g>
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-6 py-4 lg:px-12 lg:py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#accueil" className="flex items-center gap-2 text-white font-bold text-3xl tracking-tighter hover:opacity-90 transition-opacity">
          <Logo textColor="#ffffff" className="h-10 sm:h-12 w-auto" />
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 text-white/90 font-medium">
          <a href="#accueil" className="hover:text-white transition-colors">Accueil</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#temoignages" className="hover:text-white transition-colors">Témoignages</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white border border-white/20 hover:bg-white/20 transition-colors">
            <Phone className="w-4 h-4 text-lime-400" />
            <span className="font-semibold">+212 668 31 19 25</span>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-slate-900 shadow-xl p-6 flex flex-col gap-4 lg:hidden"
          >
            <a href="#accueil" className="text-white font-medium" onClick={() => setIsOpen(false)}>Accueil</a>
            <a href="#services" className="text-white font-medium" onClick={() => setIsOpen(false)}>Services</a>
            <a href="#temoignages" className="text-white font-medium" onClick={() => setIsOpen(false)}>Témoignages</a>
            <a href="#contact" className="text-white font-medium" onClick={() => setIsOpen(false)}>Contact</a>
            <div className="flex items-center gap-2 text-white mt-4">
              <Phone className="w-4 h-4" />
              <span className="font-semibold">+212 668 31 19 25</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onOpenModal }: { onOpenModal: () => void }) => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Decorative Bubbles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-lime-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-lime-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-slate-700/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="inline-flex items-center gap-2 text-sm font-medium bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6">
              <CheckCircle2 className="w-4 h-4 text-lime-400" />
              <span>Espaces impeccables, vie sans stress</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
              Société de Nettoyage Professionnel à Casablanca
            </h1>
            
            <p className="text-lg lg:text-xl text-white/80 mb-8 max-w-xl leading-relaxed">
              PNS Nettoyage met à votre disposition une large gamme de services professionnels, parfaitement adaptés à vos besoins. Découvrez nos prestations sur mesure et de qualité.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button onClick={onOpenModal} className="bg-lime-500 text-slate-900 px-8 py-4 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(132,204,22,0.3)] hover:shadow-[0_0_30px_rgba(132,204,22,0.5)] hover:scale-105 transition-all duration-300 flex items-center gap-2">
                Demander gratuitement devis
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-4">
                <div>
                  <div className="flex items-center gap-1 text-yellow-300">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                    <span className="text-white font-bold ml-2 text-lg">5.0</span>
                  </div>
                  <p className="text-sm text-white/80 mt-1">Noté meilleur sur 15k+ avis</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1000&auto=format&fit=crop" 
                alt="Professionnel du nettoyage" 
                className="w-full h-[600px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-4 animate-bounce">
              <div className="bg-green-100 p-3 rounded-full">
                <ShieldCheck className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Garantie</p>
                <p className="font-bold text-gray-900">100% Satisfait</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "Satisfaction garantie + Devis gratuit"
    },
    {
      icon: Users,
      title: "Équipe professionnelle et expérimentée"
    },
    {
      icon: Leaf,
      title: "Produits écologiques et respectueux de l'environnement"
    },
    {
      icon: Clock,
      title: "Intervention rapide et ponctuelle"
    },
    {
      icon: Settings,
      title: "Service sur mesure adapté à vos besoins"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Pourquoi choisir PNS Société de Nettoyage à Casablanca ?</h2>
          <div className="w-24 h-1 bg-lime-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="group flex flex-col items-center text-center p-6 rounded-2xl hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-gray-100 cursor-pointer">
              <div className="w-20 h-20 bg-lime-50 group-hover:bg-lime-500 rounded-full flex items-center justify-center mb-4 border-2 border-lime-100 group-hover:border-lime-500 transition-colors duration-300">
                <reason.icon className="w-8 h-8 text-lime-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-gray-900 group-hover:text-lime-600 transition-colors duration-300">{reason.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: Briefcase,
      title: "Nettoyage Bureau",
      description: "Un service complet pour bureaux et locaux professionnels, adapté à vos besoins.",
      image: "/bureau.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1612965607446-25e1332775ae?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: Home,
      title: "Nettoyage Maison",
      description: "Un entretien approfondi pour garder votre maison propre et agréable au quotidien.",
      image: "/maison.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: Building,
      title: "Nettoyage Appartement",
      description: "Un nettoyage minutieux pour appartements, assurant un espace sain et bien entretenu.",
      image: "/appartement.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1527515637-ed011c107292?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: Droplets,
      title: "Nettoyage Vitres",
      description: "Des vitres impeccables pour plus de lumière et une visibilité parfaite.",
      image: "/vitres.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: Hammer,
      title: "Nettoyage Fin de Chantier",
      description: "Spécialistes dans le nettoyage après travaux pour particuliers et entreprises.",
      image: "/chantier.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: Bug,
      title: "Désinsectisation anti rat",
      description: "Un traitement combiné et efficace pour éliminer insectes nuisibles et rats.",
      image: "/desinsectisation.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Services de PNS Société de Nettoyage à Casablanca</h2>
          <p className="text-lg text-gray-600">Notre société de nettoyage à Casablanca met à votre disposition une large gamme de services professionnels, parfaitement adaptés à vos besoins.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group bg-white rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 cursor-pointer overflow-hidden flex flex-col"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to Unsplash if the local image is not uploaded yet
                    e.currentTarget.src = feature.fallbackImage;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8 flex-grow flex flex-col relative">
                <div className="absolute -top-10 right-8 w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center border border-gray-50 group-hover:bg-lime-50 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-lime-600 group-hover:text-lime-700 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-lime-600 mb-3 transition-colors duration-300 mt-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      text: "Entreprise attentive, contact fiable, prestation régulière de nettoyage impeccable.",
      highlight: "nettoyage impeccable",
      name: "Maria Farouk",
      handle: "Client vérifié"
    },
    {
      text: "Très bon service, équipe efficace, ponctuelle et bienveillante. Je recommande vivement.",
      highlight: "équipe efficace",
      name: "Yahia Benyassine",
      handle: "Client vérifié"
    },
    {
      text: "Sol brillant et cristallisé, résultat parfait. Merci à toute l'équipe.",
      highlight: "résultat parfait",
      name: "Abdelrahim Oussania",
      handle: "Client vérifié"
    }
  ];

  // Helper to render text with highlight
  const renderText = (text: string, highlight: string) => {
    const parts = text.split(highlight);
    if (parts.length === 1) return text;
    return (
      <>
        {parts[0]}
        <span className="text-lime-600 font-semibold">{highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section id="temoignages" className="py-24 bg-gradient-to-b from-white to-lime-50/30 relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-lime-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-green-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block border border-lime-200 text-lime-600 text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full mb-6 bg-white">
            Témoignages
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            Ce que disent nos clients de PNS Société de Nettoyage à Casablanca
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 flex flex-col h-full hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <Quote className="w-10 h-10 text-lime-100 group-hover:text-lime-200 transition-colors mb-6" fill="currentColor" />
              <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                {renderText(testimonial.text, testimonial.highlight)}
              </p>
              <div className="mt-auto pt-6 border-t border-gray-50">
                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-400">{testimonial.handle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Fournissez-vous les produits et le matériel de nettoyage ?",
      answer: "Oui, nos équipes interviennent avec tout le matériel professionnel et les produits écologiques nécessaires pour réaliser une prestation de haute qualité."
    },
    {
      question: "Comment obtenir un devis pour vos services ?",
      answer: "Vous pouvez nous contacter par téléphone, WhatsApp ou via notre formulaire en ligne. Nous vous fournirons un devis gratuit et personnalisé dans les plus brefs délais."
    },
    {
      question: "Vos équipes sont-elles formées et assurées ?",
      answer: "Absolument. Tout notre personnel est rigoureusement sélectionné, formé aux meilleures techniques de nettoyage et couvert par une assurance responsabilité civile."
    },
    {
      question: "Intervenez-vous en dehors de Casablanca ?",
      answer: "Notre zone d'intervention principale est Casablanca et ses environs. N'hésitez pas à nous contacter pour vérifier si nous pouvons intervenir dans votre secteur."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Questions Fréquentes</h2>
          <p className="text-gray-600">Tout ce que vous devez savoir sur nos services de nettoyage.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button 
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-lime-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StickyCTA = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 w-full z-50 p-4 lg:p-6 pointer-events-none"
        >
          <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-xl shadow-2xl rounded-2xl p-4 lg:p-6 border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 pointer-events-auto">
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Prêt pour un espace impeccable ?</h3>
              <p className="text-gray-600 text-sm">Réservez en moins de 2 minutes.</p>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a 
                href="https://wa.me/212668311925" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none bg-[#25D366] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#20bd5a] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/30"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </a>
              <button onClick={onOpenModal} className="flex-1 sm:flex-none bg-lime-500 text-slate-900 px-6 py-3 rounded-xl font-semibold hover:bg-lime-400 transition-colors shadow-lg shadow-lime-200">
                Devis Gratuit
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-4 gap-8">
        <div className="col-span-2">
          <div className="flex items-center gap-2 text-white font-bold text-3xl tracking-tighter mb-4">
            <Logo textColor="#ffffff" className="h-14 w-auto" />
          </div>
          <p className="max-w-sm mt-6">PNS Nettoyage est une société de nettoyage à Casablanca destinée aux professionnels et particuliers. Qualité, confiance et brillance garanties.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Liens Rapides</h4>
          <ul className="space-y-2">
            <li><a href="#accueil" className="hover:text-white transition-colors">Accueil</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#temoignages" className="hover:text-white transition-colors">Témoignages</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-lime-500 flex-shrink-0 mt-0.5" />
              <div>
                <p>+212 668 31 19 25</p>
                <p>+212 606 38 38 58</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-lime-500 flex-shrink-0" />
              <span>pnsmaroc@gmail.com</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-lime-500 flex-shrink-0 mt-0.5" />
              <span>46, BD zerktouni Etage 6<br/>Casablanca Maroc</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-12 pt-8 border-t border-gray-800 text-sm text-center">
        © {new Date().getFullYear()} PNS Nettoyage. Tous droits réservés.
      </div>
    </footer>
  );
};

const QuoteModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 4000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 sm:p-6"
          onClick={onClose}
        >
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            <div className="p-6 sm:p-8 border-b border-gray-100 flex justify-between items-center bg-slate-50 shrink-0">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Demande de devis gratuit</h3>
                <p className="text-slate-500 text-sm mt-1">Remplissez ce formulaire pour estimer le coût de votre prestation.</p>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors">
                <X className="w-6 h-6 text-slate-500" />
              </button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-20 h-20 bg-lime-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-lime-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">Demande envoyée !</h4>
                  <p className="text-slate-600 max-w-md">
                    Merci pour votre demande. Vos informations ont été envoyées à <span className="font-semibold text-lime-600">pnsmaroc@gmail.com</span>. Notre équipe vous contactera très prochainement.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Nom complet *</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-lime-500 focus:ring-2 focus:ring-lime-200 outline-none transition-all" placeholder="Votre nom" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Téléphone *</label>
                      <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-lime-500 focus:ring-2 focus:ring-lime-200 outline-none transition-all" placeholder="+212 6XX XX XX XX" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Email *</label>
                      <input required type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-lime-500 focus:ring-2 focus:ring-lime-200 outline-none transition-all" placeholder="votre@email.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Type de service *</label>
                      <select required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-lime-500 focus:ring-2 focus:ring-lime-200 outline-none transition-all bg-white">
                        <option value="">Sélectionnez un service</option>
                        <option value="bureau">Nettoyage Bureau</option>
                        <option value="maison">Nettoyage Maison</option>
                        <option value="appartement">Nettoyage Appartement</option>
                        <option value="vitres">Nettoyage Vitres</option>
                        <option value="chantier">Fin de Chantier</option>
                        <option value="desinsectisation">Désinsectisation</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Superficie estimée (m²) *</label>
                      <input required type="number" min="1" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-lime-500 focus:ring-2 focus:ring-lime-200 outline-none transition-all" placeholder="Ex: 100" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Date souhaitée</label>
                      <input type="date" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-lime-500 focus:ring-2 focus:ring-lime-200 outline-none transition-all" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Détails supplémentaires</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-lime-500 focus:ring-2 focus:ring-lime-200 outline-none transition-all resize-none" placeholder="Décrivez vos besoins spécifiques..."></textarea>
                  </div>

                  <button type="submit" className="w-full bg-lime-500 text-slate-900 py-4 rounded-xl font-bold text-lg hover:bg-lime-400 transition-colors shadow-lg shadow-lime-200 flex items-center justify-center gap-2">
                    Envoyer la demande
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-lime-200 selection:text-slate-900">
      <Navbar />
      <main>
        <Hero onOpenModal={() => setIsModalOpen(true)} />
        <WhyChooseUs />
        <Features />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <StickyCTA onOpenModal={() => setIsModalOpen(true)} />
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
