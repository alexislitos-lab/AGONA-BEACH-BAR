/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useRef } from 'react';
import Lenis from 'lenis';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'motion/react';
import { Menu, X, Facebook, Instagram, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Menu', href: '#menu' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#footer' }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[60] px-4 md:px-6 transition-all duration-500 flex justify-between items-center ${
      isScrolled 
        ? 'bg-offwhite/90 backdrop-blur-md py-4 shadow-sm text-ocean border-b border-ocean/5' 
        : 'bg-transparent py-4 md:py-8 text-white'
    }`}>
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-lg md:text-2xl font-serif tracking-[0.2em] md:tracking-[0.3em] font-bold cursor-pointer"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        AGONA
      </motion.div>

      <div className="flex space-x-3 md:space-x-12">
        {menuItems.map((item) => (
          <a 
            key={item.name} 
            href={item.href}
            className="text-[9px] md:text-sm uppercase tracking-[0.1em] md:tracking-[0.2em] hover:italic transition-all"
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

const MenuSection = () => {
  const menuCategories = [
    {
      name: "Coffee",
      items: [
        { name: "Americano", price: "4" },
        { name: "Double Espresso", price: "4" },
        { name: "Freddo Espresso", price: "4.4" },
        { name: "Freddo Cappuccino", price: "4.6" },
        { name: "Iced Latte", price: "4" },
        { name: "Frappe", price: "3.9" },
        { name: "Nescafe", price: "3.9" },
        { name: "Single Greek Coffee", price: "2.5" },
        { name: "Double Greek Coffee", price: "3.5" },
        { name: "Single Espresso", price: "2.2" },
        { name: "Espresso Lungo", price: "2.4" },
        { name: "Espresso Macchiato", price: "2.5" },
        { name: "Single Cappuccino", price: "4.3" },
        { name: "Double Cappuccino", price: "4.8" },
        { name: "Hot Latte", price: "4.8" }
      ]
    },
    {
      name: "Juices & Beverages",
      items: [
        { name: "Blueberry Banana Ginger", price: "4" },
        { name: "Smooth Ginger Purple", price: "6" },
        { name: "Amita Pineapple", price: "3.2" },
        { name: "Amita Motion", price: "3.2" },
        { name: "Banana Cherry Oat", price: "4" },
        { name: "Strawberry Cherry Chia", price: "4" },
        { name: "Fresh Mixed Juice", price: "4.5" },
        { name: "Fresh Orange Juice", price: "4" },
        { name: "Freddocino", price: "4.7" },
        { name: "Lacta Chocolate", price: "4.5" },
        { name: "Chillingo Oreo", price: "4.5" },
        { name: "Strawberry Granita", price: "3.7" }
      ]
    },
    {
      name: "Beers",
      items: [
        { name: "Erdinger", price: "6" },
        { name: "Fischer", price: "4.5" },
        { name: "Heineken 0%", price: "4" },
        { name: "Sol", price: "5" },
        { name: "Beer Pitcher", price: "13" },
        { name: "Bud", price: "5" },
        { name: "Alfa", price: "4" },
        { name: "Mamos", price: "4" },
        { name: "Heineken", price: "4" },
        { name: "Draft Alfa (Glass)", price: "3.5" },
        { name: "Draft Mamos (Glass)", price: "3.5" },
        { name: "Watermelon Breezer", price: "4" },
        { name: "Lemon Breezer", price: "4" }
      ]
    }
  ];

  return (
    <section id="menu" className="py-32 bg-offwhite px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-8xl font-serif mb-6">The Menu</h2>
          <p className="text-xl font-light tracking-widest uppercase opacity-60">A taste of AGONA</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 lg:gap-x-16 gap-y-24">
          {menuCategories.map((category, catIdx) => (
            <motion.div 
              key={catIdx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.2 }}
              className="space-y-12 relative lg:after:content-[''] lg:after:absolute lg:after:right-[-32px] lg:after:top-0 lg:after:bottom-0 lg:after:w-[1px] lg:after:bg-ocean/5 last:after:hidden"
            >
              <h3 className="text-3xl font-serif italic border-b border-ocean/10 pb-4">{category.name}</h3>
              <div className="space-y-10">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="group cursor-default">
                    <div className="flex justify-between items-baseline">
                      <h4 className="text-xl font-normal group-hover:text-coral transition-colors">{item.name}</h4>
                      <span className="text-sm font-light opacity-40">€{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <img 
          src="https://i.ibb.co/YFWbHLFJ/AGGONA-Nero-AI-Image-Upscaler-Photo-Face.jpg" 
          alt="Agona Beach" 
          className="w-full h-full object-cover brightness-75"
          referrerPolicy="no-referrer"
        />
      </motion.div>
      
      <div className="relative z-10 text-center text-white px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-9xl font-serif tracking-tighter mb-4"
        >
          AGONA
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-2xl font-light tracking-widest uppercase"
        >
          Beach Bar - Agioi Apostoloi, Kalamos
        </motion.p>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white opacity-50"
      >
        <div className="w-[1px] h-16 bg-white mx-auto"></div>
      </motion.div>
    </section>
  );
};

const Experience = () => {
  const features = [
    { 
      title: "Ice-Cold Drinks & Summer Beats", 
      description: "Sip on our signature cocktails while the best summer tracks set the mood for your perfect beach day.",
      img: "https://i.ibb.co/VcR5GdWT/drink.jpg",
      className: "rounded-[60px] md:rounded-[120px]",
      delay: 0
    },
    { 
      title: "Bites & Good Times", 
      description: "Delicious food made by us, using only the freshest local ingredients to bring you the true taste of the coast.",
      img: "https://i.ibb.co/rRrFpm1J/food.jpg",
      className: "rounded-[40px] md:rounded-[80px]",
      delay: 0.1
    },
    { 
      title: "Beach Volley & Non-Stop Action", 
      description: "Join the game on our professional courts. Whether you're a pro or just having fun, the energy is unmatched.",
      img: "https://i.ibb.co/LXFwhCrs/beach.jpg",
      className: "rounded-[60px] md:rounded-[120px]",
      delay: 0.2
    },
    { 
      title: "Beach Parties & Zero Stress", 
      description: "From daytime vibes to late-night energy, our parties are where the best memories are made. Unforgettable moments under the sky.",
      img: "https://i.ibb.co/qMVwhQXz/mat.jpg",
      className: "rounded-[40px] md:rounded-[80px]",
      delay: 0.3
    }
  ];

  return (
    <section id="experience" className="py-32 bg-offwhite overflow-hidden">
      <div className="px-6 md:px-24 mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-8xl font-serif mb-4"
        >
          The Experience
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xs uppercase tracking-[0.3em] text-ocean/60 mb-8"
        >
          THERE'S NO STRONGER SUNSCREEN THAN SITTING IN THE BAR
        </motion.p>
        <div className="w-32 h-[2px] bg-coral"></div>
      </div>

      <div className="px-6 md:px-24 space-y-32">
        {features.map((feature, idx) => (
          <div 
            key={idx}
            className={`group flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}
          >
            <motion.div 
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 1, 
                ease: [0.22, 1, 0.36, 1]
              }}
              className={`relative w-full md:w-1/2 aspect-[4/3] overflow-hidden select-none pointer-events-none transition-all duration-700 group-hover:scale-105 group-hover:z-10 will-change-transform ${feature.className}`}
            >
              <img 
                src={feature.img} 
                alt={feature.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-ocean/5 group-hover:bg-ocean/20 transition-colors duration-500"></div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: idx % 2 === 0 ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="w-full md:w-1/3"
            >
              <span className="text-xs uppercase tracking-widest mb-4 block text-coral font-bold">0{idx + 1}</span>
              <motion.h3 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl md:text-4xl font-serif italic mb-6 leading-tight text-ocean"
              >
                {feature.title}
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-ocean/70 leading-relaxed font-light text-lg"
              >
                {feature.description}
              </motion.p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => {
  const [isLegalOpen, setIsLegalOpen] = useState(false);

  return (
    <footer id="footer" className="bg-ocean text-offwhite py-24 px-6 md:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif tracking-widest">AGONA</h2>
          <p className="opacity-70 font-light max-w-xs">
            Refined summer living on the shores of Agioi Apostoloi, Kalamos. Join us for an unforgettable AGONA experience.
          </p>
          <div className="flex space-x-6">
            <a href="https://www.facebook.com/agonabeachbar/photos?locale=el_GR" target="_blank" rel="noopener noreferrer" className="hover:text-coral transition-colors">
              <Facebook size={24} />
            </a>
            <a href="https://www.instagram.com/agonabeachbar/" target="_blank" rel="noopener noreferrer" className="hover:text-coral transition-colors">
              <Instagram size={24} />
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-medium uppercase tracking-widest text-coral">Location</h4>
          <div className="space-y-4 opacity-70 font-light">
            <div className="flex items-start space-x-3">
              <MapPin size={20} className="mt-1 flex-shrink-0" />
              <a 
                href="https://www.google.com/maps/place/Agona+Beach+Bar/@38.2894035,23.9267419,17z/data=!3m1!4b1!4m6!3m5!1s0x14a16fc0065fb2a3:0xedabbe430e2e334b!8m2!3d38.2893993!4d23.9293168!16s%2Fg%2F11c1l771hq?authuser=0&entry=ttu&g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-coral transition-colors"
              >
                Γ. Μπιθικώτση, Άγιοι Απόστολοι 190 14
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-medium uppercase tracking-widest text-coral">Contact</h4>
          <div className="space-y-4 opacity-70 font-light">
            <div className="flex items-center space-x-3">
              <Phone size={20} className="flex-shrink-0" />
              <a href="tel:2295080422" className="hover:text-coral transition-colors">2295080422</a>
            </div>
            <div className="flex items-center space-x-3">
              <Mail size={20} className="flex-shrink-0" />
              <span>hello@agonabeachbar.gr</span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-medium uppercase tracking-widest text-coral">Booking</h4>
          <div className="space-y-4 opacity-70 font-light">
            <p>For reservations and table bookings:</p>
            <div className="flex items-center space-x-3">
              <Phone size={20} className="flex-shrink-0" />
              <a href="tel:2295080422" className="text-xl font-medium hover:text-coral transition-colors">2295080422</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-24 pt-8 border-t border-offwhite/10 flex flex-col md:flex-row justify-between items-start md:items-center opacity-60 text-sm">
        <div className="space-y-1">
          <p>© 2026 AGONA BEACH Ε.Ε.</p>
        </div>
        <div className="flex space-x-8 mt-6 md:mt-0">
          <button 
            onClick={() => setIsLegalOpen(true)}
            className="hover:text-coral transition-colors cursor-pointer uppercase tracking-widest text-[10px]"
          >
            Legal Info
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isLegalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-ocean/90 backdrop-blur-sm"
            onClick={() => setIsLegalOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-offwhite text-ocean p-8 md:p-12 max-w-2xl w-full rounded-2xl relative max-h-[85vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsLegalOpen(false)}
                className="absolute top-6 right-6 hover:text-coral transition-colors z-10"
              >
                <X size={24} />
              </button>
              
              <div className="overflow-y-auto pr-4 custom-scrollbar">
                <h3 className="text-3xl font-serif mb-8 italic">Legal Information</h3>
                
                <div className="space-y-10">
                  <section className="space-y-4">
                    <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-coral">Privacy Policy</h4>
                    <div className="space-y-4 text-sm font-light leading-relaxed opacity-80">
                      <p>Agona Beach Bar complies with the General Data Protection Regulation (GDPR). We are committed to protecting your privacy while you visit our website.</p>
                      <p><strong>Data Collection:</strong> We do not collect personal information (such as names, emails, or phone numbers) through this website. Our servers automatically collect standard log files, including IP addresses and browser types, for security and technical optimization purposes only.</p>
                      <p><strong>User Rights:</strong> Under GDPR, you have the right to access, rectify, or request the erasure of any data collected. Given our minimal data collection, these rights primarily apply to server logs.</p>
                      <p><strong>Cookies:</strong> This website does not use tracking or marketing cookies.</p>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-coral">Terms of Use</h4>
                    <div className="space-y-4 text-sm font-light leading-relaxed opacity-80">
                      <p><strong>Bookings:</strong> All reservations for tables or beach volley courts are handled strictly via phone at <a href="tel:2295080422" className="font-medium underline hover:text-coral transition-colors">2295080422</a>.</p>
                      <p><strong>Liability:</strong> Agona Beach Bar management is not responsible for any lost, stolen, or damaged personal items on the beach, the bar area, or the sports courts.</p>
                      <p><strong>House Rules:</strong> The use of beach volley courts and bar facilities is subject to our house rules, aimed at ensuring a safe and pleasant experience for all guests.</p>
                    </div>
                  </section>

                  <section className="space-y-4 pt-8 border-t border-ocean/10">
                    <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-coral">Business Transparency</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-light opacity-80">
                      <div>
                        <p className="font-bold uppercase tracking-tighter text-[9px] opacity-50 mb-1">Legal Entity Name</p>
                        <p>AGONA BEACH Ε.Ε.</p>
                      </div>
                      <div>
                        <p className="font-bold uppercase tracking-tighter text-[9px] opacity-50 mb-1">VAT (ΑΦΜ)</p>
                        <p>802815524</p>
                      </div>
                      <div>
                        <p className="font-bold uppercase tracking-tighter text-[9px] opacity-50 mb-1">GEMI Number</p>
                        <p>183295003000</p>
                      </div>
                    </div>
                  </section>
                </div>

                <div className="mt-12 pt-8 border-t border-ocean/10">
                  <p className="text-[10px] opacity-40 uppercase tracking-widest mb-4">Immediate Assistance</p>
                  <a href="tel:2295080422" className="text-2xl font-serif hover:text-coral transition-colors flex items-center gap-3">
                    <Phone size={20} />
                    2295080422
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  
  return (
    <div ref={containerRef} className="relative selection:bg-coral selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <MenuSection />
      </main>
      <Footer />
    </div>
  );
}
