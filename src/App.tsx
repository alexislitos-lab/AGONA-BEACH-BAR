/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useRef } from 'react';
import Lenis from 'lenis';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'motion/react';
import { Menu, X, Facebook, Instagram, MapPin, Phone, Mail, ArrowRight, ChevronRight } from 'lucide-react';

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
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  const menuCategories = [
    {
      name: "Coffee",
      items: [
        { name: "Greek Coffee", price: "2.50" },
        { name: "Double Greek", price: "3.00" },
        { name: "Espresso", price: "3.00" },
        { name: "Double Espresso", price: "3.50" },
        { name: "Freddo Espresso", price: "4.50" },
        { name: "Freddo Cappuccino", price: "4.50" },
        { name: "Cappuccino", price: "4.00" },
        { name: "Double Cappuccino", price: "5.00" },
        { name: "Latte Hot / Cold", price: "5.00" },
        { name: "Frappe / Nes", price: "3.50" }
      ]
    },
    {
      name: "Juices & Frozen",
      items: [
        { name: "Fresh Orange Juice", price: "4.00" },
        { name: "Oreo Vanilla & Biscuit Frozen", price: "4.50" },
        { name: "Lacta Chocolate Frozen", price: "4.50" },
        { name: "Strawberry Ice Pops", price: "3.50" }
      ]
    },
    {
      name: "Refreshments & Energy",
      items: [
        { name: "Iced Tea Lemon/Peach", price: "3.00" },
        { name: "Coca Cola / Zero", price: "3.50" },
        { name: "Fanta Orange/Blue/Lemon", price: "3.50" },
        { name: "Sprite", price: "3.50" },
        { name: "Schweppes Pink Grapefruit", price: "3.50" },
        { name: "Schweppes Tropical Fusion", price: "3.50" },
        { name: "Schweppes Pomegranate", price: "3.50" },
        { name: "Schweppes Lemonade/Orange", price: "3.50" },
        { name: "Three Cents (Cherry/Pink/Mandarin)", price: "5.00" },
        { name: "Red Bull", price: "5.00 / 6.00" },
        { name: "Monster Flavours", price: "5.00" },
        { name: "Powerade", price: "5.00" }
      ]
    },
    {
      name: "Beers",
      items: [
        { name: "Alpha", price: "4.00" },
        { name: "Mamos", price: "4.50" },
        { name: "Heineken", price: "5.00" },
        { name: "Bud", price: "5.50" },
        { name: "Sol", price: "5.50" },
        { name: "Erdinger", price: "6.00" },
        { name: "Heineken 0.0%", price: "5.00" },
        { name: "Fisher", price: "5.50" }
      ]
    },
    {
      name: "Kitchen Selection",
      sections: [
        {
          title: "Snacks & Sandwiches",
          items: [
            { name: "Toast (Turkey/Ham & Cheese)", price: "3.00" },
            { name: "Turkey Tortilla", price: "3.50", description: "Turkey, cheese, mayo, iceberg, tomato" },
            { name: "Chicken Tortilla", price: "4.00", description: "Tricolor peppers, cheddar sauce, chicken" },
            { name: "Classic Club Sandwich", price: "8.50", description: "Turkey, cheese, mayo, tomato, iceberg, bacon" },
            { name: "Chicken Club Sandwich", price: "9.50", description: "Cheese, bacon, tomato, iceberg, chicken, mayo" },
            { name: "Caesar Salad", price: "8.00" }
          ]
        },
        {
          title: "French Fries & Plates",
          items: [
            { name: "Classic Fries (Salt & Oregano)", price: "3.00" },
            { name: "Cheddar Sauce Fries", price: "4.00" },
            { name: "Cheddar & Bacon Fries", price: "5.00" },
            { name: "Pork Gyros Plate", price: "7.50", description: "Fries, pork gyros, tomatoes, yogurt" },
            { name: "Chicken Gyros Plate", price: "8.50", description: "Fries, chicken gyros, yellow sauce, parmesan" }
          ]
        }
      ]
    },
    {
      name: "Spirits",
      sections: [
        {
          title: "Vodka",
          items: [
            { name: "Serkova", price: "6.00" },
            { name: "42 Below", price: "7.00" },
            { name: "Grey Goose", price: "10.00" }
          ]
        },
        {
          title: "Gin",
          items: [
            { name: "Beefeater", price: "6.00" },
            { name: "Bombay Sapphire", price: "7.00" },
            { name: "Hendrick's", price: "9.00" }
          ]
        },
        {
          title: "Rum",
          items: [
            { name: "Bacardi Carta Blanca", price: "6.00" },
            { name: "Havana Club", price: "6.00" },
            { name: "Plantaray Original", price: "7.00" },
            { name: "Havana Club Anejo Esp.", price: "8.00" },
            { name: "Bacardi Reserva Ocho", price: "9.00" }
          ]
        },
        {
          title: "Whiskey",
          items: [
            { name: "Dewar's", price: "6.00" },
            { name: "Jack Daniel's", price: "7.00" },
            { name: "Chivas Regal 12Y", price: "9.00" }
          ]
        },
        {
          title: "Tequila & Mezcal",
          items: [
            { name: "Olmeca Choco Fusion", price: "6.00" },
            { name: "Cazadores Bianco / Reposado", price: "8.00" },
            { name: "Gusano Rojo", price: "9.00" },
            { name: "Del Maguey Vida", price: "10.00" }
          ]
        },
        {
          title: "Liquers",
          items: [
            { name: "Baileys", price: "6.00" },
            { name: "Malibu", price: "6.00" },
            { name: "Skinos Mastiqua", price: "6.00" },
            { name: "Disaronno Amaretto", price: "6.00" },
            { name: "Sambuca Ramazzotti / Black", price: "6.00 / 7.00" }
          ]
        }
      ]
    },
    {
      name: "Local Spirits & Bar Options",
      sections: [
        {
          title: "Local Spirits",
          items: [
            { name: "Ouzo Plomari 50ml", price: "4.00" },
            { name: "Tsipouro Tsilili 50ml", price: "4.00" },
            { name: "Ouzo Plomari 200ml", price: "11.00" },
            { name: "Tsipouro Tsilili 200ml", price: "13.00" }
          ]
        },
        {
          title: "Bar Options",
          items: [
            { name: "Shot (Simple / Premium)", price: "2.50 / 3.50" },
            { name: "Sunken Shot on Beer", price: "4.00" },
            { name: "Cocktail Jug", price: "25.00" },
            { name: "Sunken Shots Basket", price: "60.00" },
            { name: "Bottle (Standard / Special)", price: "70 / 90" },
            { name: "Bottle Premium", price: "120 / 140" }
          ]
        }
      ]
    }
  ];

  const toggleCategory = (idx: number) => {
    setExpandedIdx(expandedIdx === idx ? null : idx);
  };

  return (
    <section id="menu" className="py-32 bg-offwhite px-6 md:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-8xl font-serif mb-6">The Menu</h2>
          <p className="text-xl font-light tracking-widest uppercase opacity-60">A taste of AGONA</p>
        </motion.div>

        <div className="space-y-6">
          {menuCategories.map((category, catIdx) => {
            const isOpen = expandedIdx === catIdx;
            return (
              <motion.div 
                key={catIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIdx * 0.05 }}
                className="border-b border-ocean/10 overflow-hidden"
              >
                <button 
                  onClick={() => toggleCategory(catIdx)}
                  className="w-full flex justify-between items-center py-8 group hover:bg-ocean/[0.02] transition-colors px-4 rounded-xl"
                >
                  <span className={`text-3xl md:text-4xl font-serif italic transition-all duration-500 ${isOpen ? 'text-coral scale-105 origin-left' : 'text-ocean opacity-80'}`}>
                    {category.name}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className={`transition-colors ${isOpen ? 'text-coral' : 'text-ocean opacity-30 group-hover:opacity-100'}`}
                  >
                    <ChevronRight size={32} strokeWidth={1} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="pb-12 px-6 pt-6 space-y-12">
                        {"sections" in category ? (
                          category.sections.map((section: any, sIdx: number) => (
                            <div key={sIdx} className="space-y-6">
                              <h5 className="text-xs uppercase tracking-[0.2em] font-bold text-coral/80 border-l-2 border-coral pl-4">
                                {section.title}
                              </h5>
                              <div className={`grid grid-cols-1 ${category.name === 'Kitchen Selection' ? 'md:grid-cols-2 gap-x-12' : ''} gap-y-8`}>
                                {section.items.map((item: any, itemIdx: number) => (
                                  <motion.div 
                                    key={itemIdx}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: itemIdx * 0.03 }}
                                    className="group cursor-default flex flex-col"
                                  >
                                    <div className="flex justify-between items-baseline mb-1">
                                      <h4 className="text-xl font-normal group-hover:text-coral transition-colors">{item.name}</h4>
                                      <div className="flex-grow mx-4 border-b border-ocean/5 border-dotted"></div>
                                      <span className="text-sm font-light opacity-60 italic whitespace-nowrap">€{item.price}</span>
                                    </div>
                                    {'description' in item && (
                                      <p className="text-xs font-light opacity-50 italic leading-relaxed">{item.description}</p>
                                    )}
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className={`grid grid-cols-1 ${category.name === 'Kitchen Selection' ? 'md:grid-cols-2 gap-x-12' : ''} gap-y-8`}>
                            {category.items?.map((item: any, itemIdx: number) => (
                              <motion.div 
                                key={itemIdx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: itemIdx * 0.03 }}
                                className="group cursor-default flex flex-col"
                              >
                                <div className="flex justify-between items-baseline mb-1">
                                  <h4 className="text-xl font-normal group-hover:text-coral transition-colors">{item.name}</h4>
                                  <div className="flex-grow mx-4 border-b border-ocean/5 border-dotted"></div>
                                  <span className="text-sm font-light opacity-60 italic whitespace-nowrap">€{item.price}</span>
                                </div>
                                {'description' in item && (
                                  <p className="text-xs font-light opacity-50 italic leading-relaxed">{item.description}</p>
                                )}
                              </motion.div>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
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
      delay: 0
    },
    { 
      title: "Bites & Good Times", 
      description: "Delicious food made by us, using only the freshest local ingredients to bring you the true taste of the coast.",
      delay: 0.1
    },
    { 
      title: "Beach Volley & Non-Stop Action", 
      description: "Join the game on our professional courts. Whether you're a pro or just having fun, the energy is unmatched.",
      delay: 0.2
    },
    { 
      title: "Beach Parties & Zero Stress", 
      description: "From daytime vibes to late-night energy, our parties are where the best memories are made. Unforgettable moments under the sky.",
      delay: 0.3
    }
  ];

  return (
    <section id="experience" className="py-32 bg-offwhite overflow-hidden">
      <div className="px-6 md:px-24 mb-24">
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

      <div className="px-6 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-24">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 1, 
                delay: feature.delay,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="relative pl-12 border-l border-ocean/10 py-4 group"
            >
              <span className="absolute left-[-8px] top-4 text-xs font-serif italic text-coral bg-offwhite px-2">0{idx + 1}</span>
              <h3 className="text-3xl md:text-4xl font-serif italic mb-6 leading-tight text-ocean transition-colors group-hover:text-coral duration-500">
                {feature.title}
              </h3>
              <p className="text-ocean/70 leading-relaxed font-light text-lg">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
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
              <a href="mailto:agonabeachbar@gmail.com" className="hover:text-coral transition-colors">agonabeachbar@gmail.com</a>
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
