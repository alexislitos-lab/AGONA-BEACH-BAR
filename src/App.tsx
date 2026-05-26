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
  const [activeTab, setActiveTab] = useState<'drinks' | 'food'>('drinks');

  const menuCategories = [
    {
      name: "Coffee, Fresh Juices & Smoothies",
      sections: [
        {
          title: "Coffee",
          items: [
            { name: "Greek Coffee", price: "2.50" },
            { name: "Greek Coffee double", price: "3.00" },
            { name: "Espresso", price: "3.00" },
            { name: "Espresso double", price: "3.50" },
            { name: "Frape", price: "3.50" },
            { name: "Nes", price: "3.50" },
            { name: "Cappuccino", price: "4.00" },
            { name: "Cappuccino double", price: "5.00" },
            { name: "Espresso freddo", price: "4.50" },
            { name: "Cappuccino freddo", price: "4.50" },
            { name: "Latte hot/cold", price: "5.00" }
          ]
        },
        {
          title: "Fresh Juices",
          items: [
            { name: "Homemade Lemonade", price: "4.00" },
            { name: "Fresh Orange Juice", price: "4.00" },
            { name: "Fresh Mixed Juice", price: "5.50", description: "Seasonal fruits" },
            { name: "Ginger Berry Boost", price: "6.00", description: "Blueberries, banana, ginger" },
            { name: "Cherry Oat Blender", price: "6.00", description: "Banana, sour cherry, oat" },
            { name: "Chia Strawberry Fusion", price: "6.00", description: "Cherries, chia, strawberries" }
          ]
        },
        {
          title: "Frozen Delights",
          items: [
            { name: "Strawberry Ice Pops", price: "3.50" },
            { name: "Oreo Vanilla & Biscuit", price: "4.50" },
            { name: "Lacta Chocolate", price: "4.50" },
            { name: "Freddoccino", price: "5.00" }
          ]
        },
        {
          title: "Smoothies",
          items: [
            { name: "Red Rum", price: "7.00", description: "Strawberries, cherries, chia, vanilla ice cream" },
            { name: "Ginger Purple", price: "7.00", description: "Blueberries, ginger, banana, yogurt" }
          ]
        }
      ]
    },
    {
      name: "Refreshments & Energy Drinks",
      sections: [
        {
          title: "Refreshments",
          items: [
            { name: "Iced Tea (Glass) Lemon/Peach", price: "3.00" },
            { name: "Coca Cola Zero/Light (250ml)", price: "3.50" },
            { name: "Fanta Orange/Blue/Lemon (250ml)", price: "3.50" },
            { name: "Sprite (250ml)", price: "3.50" },
            { name: "Schweppes (330ml)", price: "3.50", description: "Pink Grapefruit / Tropical Fusion / Pomegrenade / Lemonade Bergamont / Orange Blossom" },
            { name: "Perrier (330ml)", price: "4.00" },
            { name: "Arizona (450ml)", price: "5.00", description: "Green Tea & Honey / Pomegrenade / Blueberry / Green Tea Zero Sugar" },
            { name: "Fuze Lemon/Peach/Passion Fruit Zero (500ml)", price: "5.00" },
            { name: "Three Cents Cherry Soda (200ml)", price: "5.00", description: "Cherry Soda / Pink Grapefruit / Aegean Tonic / Mandarin & Bergamont" }
          ]
        },
        {
          title: "Energy Drinks",
          items: [
            { name: "Red Bull (250ml)", price: "5.00" },
            { name: "Red Bull (355ml)", price: "6.00" },
            { name: "Powerade Orange/Raspberry (500ml)", price: "5.00" },
            { name: "Monster (500ml)", price: "5.00", description: "Energy / Absolut Zero / Ultra / Fiesta Mango / Full Throttle / Pipeline Punch / Juiced Mango" }
          ]
        }
      ]
    },
    {
      name: "Beers & Low-Alcohol",
      sections: [
        {
          title: "Draught",
          items: [
            { name: "ΑΛΦΑ (300ml) Lager 5% alc.", price: "3.00" },
            { name: "ΜΑΜΟΣ (300ml) Pilsner 5% alc.", price: "3.50" },
            { name: "ERDINGER (300ml) Weiss 5.3% alc.", price: "5.00" }
          ]
        },
        {
          title: "Local Craft",
          items: [
            { name: "ΑΛΦΑ (330ml) Lager 5% alc.", price: "4.00" },
            { name: "ΜΑΜΟΣ (330ml) Pilsner 5% alc.", price: "4.50" }
          ]
        },
        {
          title: "Internationals",
          items: [
            { name: "Heineken (330ml) Lager 5% alc.", price: "5.00" },
            { name: "Fisher (330ml) Pilsner 5% alc.", price: "5.00" },
            { name: "Sol (330ml) Lager 4.5% alc.", price: "5.50" },
            { name: "Bud (330ml) Lager 5% alc.", price: "5.50" },
            { name: "Erdinger (330ml) Weiss 5.3% alc.", price: "6.00" },
            { name: "Septem 8th Day (330ml) IPA 7% alc.", price: "7.00" }
          ]
        },
        {
          title: "Low-Zero Zone",
          items: [
            { name: "Amstel Redler (330ml) Radler 2% alc.", price: "4.00" },
            { name: "Μηλοκλέφτης 4.5% alc.", price: "4.00" },
            { name: "Heineken 0% (330ml) Non alcohol", price: "5.00" },
            { name: "Smirnoff Ice 4.5% alc.", price: "5.50" },
            { name: "Bacardi Breezer 4.5% alc.", price: "5.50", description: "Watermelon / Orange / Lemon" }
          ]
        }
      ]
    },
    {
      name: "Cocktails",
      sections: [
        {
          title: "Spritz & Zero",
          items: [
            { name: "Aperol Spritz", price: "8.00", description: "Aperol, Prosecco, Soda" },
            { name: "ST Germain Spritz", price: "8.50", description: "ST Germain Elderflower liqueur, Prosecco, Soda" },
            { name: "Blue Pulse", price: "9.00", description: "Blueberries, Mint leaves, Isotonic, Red bull" },
            { name: "Caribbean Spritz", price: "8.50", description: "Aperol, Prosecco, Melon liqueur, Mango liqueur, Lime juice" },
            { name: "Still Jazz", price: "8.50", description: "Mastique, Moscato d'asti, Jasmin syrup, Lime juice" },
            { name: "Island Zero", price: "9.00", description: "Tanqueray 0.0, Lime juice, Almond, Cucumber slices, Pineapple cubes, Ginger beer" },
            { name: "Summer Mirage", price: "8.50", description: "Aperol, Mastique, Pink grapefruit soda, Lime juice, Strawberry liqueur" }
          ]
        },
        {
          title: "Signature",
          items: [
            { name: "Scarlet Kiss", price: "11.00", description: "Vodka, Agave syrup, Strawberry, Strawberry puree, Lime juice, Basil leaves" },
            { name: "Tizzy Mezcal", price: "12.00", description: "Tequila bianco, Mezcal, Lime juice, Cucumber syrup, Chili syrup, Mango liqueur" },
            { name: "Salted Desire", price: "12.00", description: "Infused butter Tequila, Grapefruit foam, Lime juice, Sugar syrup, Soda" },
            { name: "Dark Matter", price: "11.00", description: "Rum, Sambuca black, Lychee liqueur, Lime juice, Sugar syrup" },
            { name: "Banana Punch", price: "12.00", description: "Infused Tequila, Banana & strawberry flavors, Lime juice, Sugar syrup, Milk" },
            { name: "Hendrick's Verde", price: "12.00", description: "Hendrick's Gin, Cucumber, Sugar syrup, Lime, Ginger, Mint, Soda" }
          ]
        },
        {
          title: "Classics",
          items: [
            { name: "Espresso Martini", price: "9.00", description: "Vodka, Kahlua, Espresso, Sugar syrup" },
            { name: "Mojito", price: "10.00", description: "Rum, Lime wedges, Brown sugar, Mint, Soda" },
            { name: "Pornstar Martini", price: "10.00", description: "Vodka, Passion fruit puree, Passion liqueur, Vanilla, Lime juice" },
            { name: "Negroni", price: "9.00", description: "Gin, Bitters, Red vermouth" },
            { name: "Mai Tai", price: "10.00", description: "Rum, Almond, Lime, Orange liqueur" },
            { name: "Bramble", price: "10.00", description: "Gin, Crème de mûre liqueur, Sugar syrup, Lemon juice" },
            { name: "Margarita", price: "9.00", description: "Tequila, Orange liqueur, Lime" },
            { name: "Daiquiri Strawberry", price: "10.00", description: "Rum, Strawberry liqueur, Strawberry puree, Sugar syrup" },
            { name: "Paloma", price: "10.00", description: "Tequila, Lime juice, Agave syrup, Pink grapefruit soda" },
            { name: "Caipirinia", price: "9.00", description: "Cachaça, Lime wedges, Brown sugar" },
            { name: "Long Island", price: "10.00", description: "Vodka, Rum, Gin, Orange liqueur, Lime juice, Sugar syrup, Cola" },
            { name: "Zombie", price: "12.00", description: "Blended Rum, Falernum liqueur, Cinnamon syrup, Lime juice, Grapefruit juice, Passion fruit puree, Pineapple puree" }
          ]
        }
      ]
    },
    {
      name: "Spirits & Liqueurs",
      sections: [
        {
          title: "Vodka",
          items: [
            { name: "Serkova", price: "7.00" },
            { name: "42 Below", price: "8.00" },
            { name: "Stoli", price: "8.00" },
            { name: "Grey Goose", price: "12.00" }
          ]
        },
        {
          title: "Gin",
          items: [
            { name: "Beefeater", price: "8.00" },
            { name: "Bombay Dry", price: "8.00" },
            { name: "Bombay Sapphire", price: "9.00" },
            { name: "Hendrick's", price: "10.00" }
          ]
        },
        {
          title: "Whiskey",
          items: [
            { name: "Dewar's", price: "7.00" },
            { name: "Johnnie Walker Red Label", price: "7.00" },
            { name: "Jack Daniel's", price: "8.00" },
            { name: "Chivas Regal 12y", price: "10.00" },
            { name: "Johnnie Walker Black Label 12y", price: "10.00" }
          ]
        },
        {
          title: "Rum",
          items: [
            { name: "Bacardi Carta Blanca 2y", price: "7.00" },
            { name: "Havana Club 3y", price: "7.00" }
          ]
        },
        {
          title: "Golden - Aged - Dark (Rum)",
          items: [
            { name: "Bacardi Carta Negra", price: "8.00" },
            { name: "Plantaray Original Rhum Dark 3y", price: "8.00" },
            { name: "Havana Club Anejo Especial 7y", price: "8.00" },
            { name: "Bacardi Reserva Ocho 8y Dark", price: "10.00" }
          ]
        },
        {
          title: "Tequila",
          items: [
            { name: "Olmeca Choco Fusion", price: "7.00" },
            { name: "Cazadores Bianco", price: "8.00" },
            { name: "Cazadores Reposado", price: "8.00" }
          ]
        },
        {
          title: "Mezcal",
          items: [
            { name: "Gusano Rojo", price: "10.00" },
            { name: "Del Maguey Vida", price: "12.00" }
          ]
        },
        {
          title: "Liquers",
          items: [
            { name: "Baileys", price: "7.00" },
            { name: "Disaronno Amaretto", price: "7.00" },
            { name: "Malibu", price: "7.00" },
            { name: "Scinos Mastique", price: "7.00" },
            { name: "Sambuca Ramazzotti", price: "7.00" },
            { name: "Sambuca Ramazzotti Black", price: "8.00" }
          ]
        },
        {
          title: "Greek Spirits",
          items: [
            { name: "Ouzo Plomari (50ml)", price: "4.00", description: "Product from Lesbos, 40% alc." },
            { name: "Tsipouro Tsilili (50ml)", price: "4.00", description: "Product from Thessaly, Anise-free, 41% alc." },
            { name: "Tsipouro Hdoniko (50ml)", price: "4.50", description: "Product from Drama, Anise-free, 41% alc." },
            { name: "Ouzo Hdoniko (200ml)", price: "10.00", description: "Product from Drama, 40% alc." },
            { name: "Ouzo Plomari (200ml)", price: "11.00", description: "Product from Lesbos, 40% alc." },
            { name: "Tsipouro Tsilili (200ml)", price: "13.00", description: "Product from Thessaly, Anise-free, 41% alc." },
            { name: "Tsipouro Hdoniko (200ml)", price: "14.00", description: "Product from Drama, Anise-free, 41% alc." }
          ]
        }
      ]
    },
    {
      name: "Wine, Sparkling & Champagnes",
      sections: [
        {
          title: "Wines",
          items: [
            { name: "Semeli Oreinos Hlios (187ml) (White/Red)", price: "8.50" },
            { name: "Cavalieri Lazaridi (White)", price: "55.00", description: "Dry, Sauvignon Blanc, Ugni Blanc, Asyrtiko" },
            { name: "Idylle d'achinos (Rose)", price: "55.00", description: "Dry, Grenache, Syrah, Agiorgitiko" },
            { name: "Biblia Chora (Red)", price: "55.00", description: "Dry, Merlot, Cabernet Sauvignon, Agiorgitiko" }
          ]
        },
        {
          title: "Sparkling Wines",
          items: [
            { name: "Moscato d'Asti Bianconero (200ml)", price: "10.00", description: "Sparkling, 7.5% alc." },
            { name: "Moscato d'Asti Miravento (750ml)", price: "30.00", description: "Sparkling, 5.5% alc." },
            { name: "Prosecco Miravento (750ml)", price: "25.00", description: "Sparkling, 11% alc." }
          ]
        },
        {
          title: "Champagnes",
          items: [
            { name: "Luc Belaire Luxe", price: "120.00", description: "Chardonnay" },
            { name: "Luc Belaire Rose", price: "120.00", description: "Syrah, Cinsault, Grenache rouge" },
            { name: "Moet & Chandon Ice", price: "210.00", description: "Pinot noir, Chardonnay, Pinot meunier" },
            { name: "Moet & Chandon Ice Rose", price: "210.00", description: "Chardonnay, Pinot meunier, Pinot noir" }
          ]
        }
      ]
    },
    {
      name: "Bar List & Special Offers",
      sections: [
        {
          title: "Bar List",
          items: [
            { name: "Shot", price: "3.00" },
            { name: "Sunken Shot on Beer", price: "4.50" },
            { name: "Cocktail Jug", price: "25.00" },
            { name: "Sunken Shots on Beer Basket", price: "60.00" },
            { name: "Bottle", price: "70.00" },
            { name: "Bottle Special", price: "85.00" },
            { name: "Bottle Premium", price: "120.00 / 140.00" }
          ]
        },
        {
          title: "Special Offers: Pitcher Draught",
          items: [
            { name: "Pitcher Draught ΑΛΦΑ 1.5L", price: "12.00" },
            { name: "Pitcher Draught ΜΑΜΟΣ 1.5L", price: "14.00" },
            { name: "Pitcher Draught ERDINGER 1.5L", price: "20.00" }
          ]
        },
        {
          title: "Special Offers: Beer Buckets",
          items: [
            { name: "ΑΛΦΑ Bucket (4x330ml)", price: "14.00" },
            { name: "ΜΑΜΟΣ Bucket (4x330ml)", price: "16.00" },
            { name: "Heineken Bucket (4x330ml)", price: "18.00" },
            { name: "Fisher Bucket (4x330ml)", price: "18.00", description: "With extra alcohol +5.00" },
            { name: "Sol Bucket (4x330ml)", price: "20.00" },
            { name: "Bud Bucket (4x330ml)", price: "20.00" },
            { name: "Erdinger Bucket (4x330ml)", price: "22.00" }
          ]
        }
      ]
    },
    {
      name: "Food Menu: Snacks & Light Meals",
      sections: [
        {
          title: "Snacks & More",
          items: [
            { name: "Toast", price: "3.50", description: "Ψωμί του τοστ, γαλόπουλα, gouda και τομάτα" },
            { name: "Hot Dog", price: "3.50", description: "Ψωμί αφράτο, λουκάνικο, κέτσαπ, μουστάρδα" },
            { name: "Crispy Fries", price: "4.00", description: "Μερίδα πατάτες τηγανιτές" },
            { name: "Cheddar Bacon Fries", price: "5.00", description: "Μερίδα πατάτες τηγανιτές με cheddar & bacon" },
            { name: "Chicken Nuggets", price: "7.50", description: "Τραγανά φιλέτα από παναρισμένο στήθος κοτόπουλο, πατάτες τηγανητές & chicken σως" }
          ]
        },
        {
          title: "Tortilla Wraps",
          items: [
            { name: "Classic Wrap", price: "4.50", description: "Πίτα tortilla με γαλόπουλα, gouda, μαρούλι, τομάτα & μαγιονέζα" },
            { name: "Garden Vegie Wrap", price: "5.00", description: "Πίτα tortilla με μανιτάρια, πιπεριές tricolor, κρεμμύδι σοτέ, σκόρδο & μαϊντανό" },
            { name: "Chicken Cheddar Wrap", price: "5.50", description: "Πίτα tortilla με κοτόπουλο ψητό, gouda, πιπεριές σοτέ & cheddar σως" },
            { name: "Tacos (3pcs)", price: "7.50", description: "Chili Beef Tacos / Chicken Tacos / Veggie Tacos" }
          ]
        },
        {
          title: "Sandwiches",
          items: [
            { name: "Classic Sandwich", price: "4.50", description: "Μπαγκέτα λεύκη με γαλόπουλα, gouda, μαρούλι, τομάτα & μαγιονέζα" },
            { name: "Chicken Sandwich", price: "5.50", description: "Μπαγκέτα λεύκη με κοτόπουλο ψητό, gouda, μαρούλι, τομάτα & chicken σως" },
            { name: "Nugget Sandwich", price: "6.00", description: "Ψωμί brioche με φιλέτα από παναρισμένο στήθος κοτόπουλο, flakes παρμεζάνας, iceberg, τομάτα & chicken σως" }
          ]
        }
      ]
    },
    {
      name: "Food Menu: Main Plates & Salads",
      sections: [
        {
          title: "Salads",
          items: [
            { name: "Greek Dakos", price: "7.50", description: "Παξιμάδι χαρουπιού με φέτα, ελιά, τομάτα, πιπεριά & κάπαρη" },
            { name: "Pear & Orange", price: "8.00", description: "Ανάμεικτη σαλάτα με φιλέτα πορτοκαλιού, πίκλες από αχλάδι, flakes αμυγδάλου & vinegret εσπεριδοειδών" },
            { name: "Caesar's", price: "8.50", description: "Κοτόπουλο ψητό με παρμεζάνα, μαρούλι, iceberg, κρουτόν & σως caesar" },
            { name: "Quinoa", price: "9.00", description: "Κινόα με αβοκάντο, πορτοκάλι, κάσιους, κράνμπερις, αγγουράκι & vinaigrette εσπεριδοειδών" }
          ]
        },
        {
          title: "Omelettes",
          items: [
            { name: "Scrambled Omelette", price: "7.00", description: "Ψωμάκι ζυμωτό με αυγά scrambled και σχινόπρασο, συνοδευόμενο από πράσινη σαλάτα & τοματίνια" },
            { name: "Big Breakfast Omelette", price: "8.00", description: "Ψωμάκι ζυμωτό με αυγά scrambled, smash avocado, flakes παρμεζάνας και σχινόπρασο, συνοδευόμενο από πράσινη σαλάτα & τοματίνια" }
          ]
        },
        {
          title: "Club Sandwiches",
          items: [
            { name: "Club Sandwich", price: "8.50", description: "Ψωμί του τοστ με γαλοπούλα, τυρί gouda, μπέικον, μαρούλι, τομάτα, μαγιονέζα & πατάτες τηγανιτές" },
            { name: "Chicken Club Sandwich", price: "9.50", description: "Ψωμί του τοστ με φιλέτο από κοτόπουλο στη σχάρα, τυρί gouda, μπέικον, μαρούλι, τομάτα, μαγιονέζα και πατάτες τηγανιτές" }
          ]
        },
        {
          title: "Burgers",
          items: [
            { name: "Cheese", price: "8.00", description: "Ψωμί brioche με μπιφτέκι 100% μοσχαρίσιο (160gr), τυρί gouda, κέτσαπ, μαγιονέζα, μουστάρδα & πατάτες τηγανιτές" },
            { name: "Crispy Chicken", price: "10.00", description: "Ψωμί brioche με φιλέτο από παναρισμένο στήθος κοτόπουλο, flakes παρμεζάνας, μαρούλι, τομάτα, iceberg & chicken σως" },
            { name: "Big House", price: "12.00", description: "Ψωμί brioche με μπιφτέκι 100% μοσχαρίσιο (160gr), αυγό, τυρί cheddar, καραμελωμένα κρεμμύδια, μαρούλι, τομάτα, iceberg, & πατάτες τηγανιτές" }
          ]
        },
        {
          title: "Pizza",
          items: [
            { name: "Margherita", price: "10.00", description: "Σάλτσα τομάτας, mozzarella & φρέσκος βασιλικός" },
            { name: "Greca", price: "11.50", description: "Φέτα, τομάτα, κρεμμύδι, πράσινη πιπεριά, ελιές & ρίγανη" },
            { name: "Special", price: "12.50", description: "Σάλτσα τομάτας, mozzarella, ζαμπόν, μπέικον, πράσινη πιπεριά & μανιτάρια" },
            { name: "Bianca", price: "13.50", description: "Κρέμα γάλακτος, mozzarella, φιλέτο κοτόπουλο, μπέικον & μανιτάρια" }
          ]
        },
        {
          title: "Pasta",
          items: [
            { name: "Fusilli Pesto", price: "9.00", description: "Pasta fusilli με flakes παρμεζάνας, σάλτσα πέστο, ρόκα, τοματίνια & αρωματισμένο ελαιόλαδο" },
            { name: "Fusilli Chef", price: "9.50", description: "Pasta fusilli με τριμένο αυγό, gouda, ζαμπόν, τομάτα, αγγούρι και pink σως" },
            { name: "Fusilli Caesar's", price: "10.00", description: "Pasta fusilli με μπέικον, flakes παρμεζάνας, καλαμπόκι, caesar σως & αρωματισμένο ελαιόλαδο" }
          ]
        },
        {
          title: "Meat Meals",
          items: [
            { name: "Greek Gyros Bowl (Pork)", price: "8.50", description: "Γύρος χοιρινός με τομάτα, κρεμμύδι, σχινόπρασο, μυρωδικά & σως γιαουρτιού" },
            { name: "Greek Gyros Bowl (Chicken)", price: "9.50", description: "Γύρος κοτόπουλο με τομάτα, κρεμμύδι, σχινόπρασο, μυρωδικά & σως γιαουρτιού" },
            { name: "Beef Patties", price: "13.00", description: "Δύο μοσχαρίσια μπιφτέκια των 200gr, σερβιριζόμενα με ανάμεικτη σαλάτα ή πατάτες τηγανιτές" },
            { name: "Mix Grill", price: "18.00", description: "Φιλέτο κοτόπουλο σχάρας, λουκάνικο, μπιφτέκι, γύρος χοιρινός, γύρος κοτόπουλο, πιτούλες & πατάτες τηγανιτές" }
          ]
        }
      ]
    },
    {
      name: "Desserts & Fruits",
      sections: [
        {
          title: "Fruit Salads",
          items: [
            { name: "Fruit Salad Bowl", price: "6.00", description: "Μπανάνα, καρπούζι, πεπόνι, σταφύλι" },
            { name: "Oat & Yogurt Energy Bowl", price: "8.00", description: "Μπανάνα, μήλο, ανανά, μέλι, ταχίνι, mousse γιαουρτιού αρωματισμένη με λεμόνι & βρώσιμα άνθη" },
            { name: "Fruit Salad Plate", price: "18.00", description: "Καρπούζι, πεπόνι, σταφύλι, ανανάς, κεράσια, ακτινίδιο, passion fruit" }
          ]
        },
        {
          title: "Desserts",
          items: [
            { name: "Greek Orange Pie", price: "4.00", description: "Extra ice cream + 1.50" },
            { name: "Yogart Cheesecake", price: "4.50" }
          ]
        }
      ]
    }
  ];

  const toggleCategory = (idx: number) => {
    setExpandedIdx(expandedIdx === idx ? null : idx);
  };

  const drinksCategories = [
    menuCategories[0],
    menuCategories[1],
    menuCategories[2],
    menuCategories[3],
    menuCategories[4],
    menuCategories[5],
    menuCategories[6]
  ];

  const foodCategories = [
    { ...menuCategories[7], name: "Snacks & Light Meals" },
    { ...menuCategories[8], name: "Main Plates & Salads" },
    menuCategories[9]
  ];

  const currentCategories = activeTab === 'drinks' ? drinksCategories : foodCategories;

  return (
    <section id="menu" className="py-32 bg-offwhite px-6 md:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-8xl font-serif mb-6">The Menu</h2>
          <p className="text-xl font-light tracking-widest uppercase opacity-60">A taste of AGONA</p>
        </motion.div>

        {/* Tab Selector */}
        <div className="flex items-center justify-center mb-16 border-b border-ocean/10 max-w-md mx-auto relative px-2 sm:px-4">
          <button 
            onClick={() => { setActiveTab('drinks'); setExpandedIdx(null); }}
            className={`flex-1 pb-4 text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-bold text-center relative transition-colors duration-300 cursor-pointer ${activeTab === 'drinks' ? 'text-coral' : 'text-ocean/40 hover:text-ocean'}`}
          >
            Drinks & Spirits
            {activeTab === 'drinks' && (
              <motion.div 
                layoutId="tabUnderline" 
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-coral"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
          </button>
          
          {/* Subtle vertical separator centered with the text */}
          <div className="h-4 w-[1px] bg-ocean/20 mb-4 self-end" />

          <button 
            onClick={() => { setActiveTab('food'); setExpandedIdx(null); }}
            className={`flex-1 pb-4 text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-bold text-center relative transition-colors duration-300 cursor-pointer ${activeTab === 'food' ? 'text-coral' : 'text-ocean/40 hover:text-ocean'}`}
          >
            Food & Desserts
            {activeTab === 'food' && (
              <motion.div 
                layoutId="tabUnderline" 
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-coral"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
          </button>
        </div>

        <div className="space-y-6">
          {currentCategories.map((category, catIdx) => {
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
                  className="w-full flex justify-between items-center py-8 group hover:bg-ocean/[0.02] transition-colors px-4 rounded-xl text-left"
                >
                  <span className={`text-2xl sm:text-3xl md:text-4xl font-serif italic transition-all duration-500 pr-4 ${isOpen ? 'text-coral scale-105 origin-left' : 'text-ocean opacity-80'}`}>
                    {category.name}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className={`flex-shrink-0 transition-colors ${isOpen ? 'text-coral' : 'text-ocean opacity-30 group-hover:opacity-100'}`}
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
                        {category.sections.map((section: any, sIdx: number) => (
                          <div key={sIdx} className="space-y-6">
                            <h5 className="text-xs uppercase tracking-[0.2em] font-bold text-coral/80 border-l-2 border-coral pl-4">
                              {section.title}
                            </h5>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
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
                                  {item.description && (
                                    <p className="text-xs font-light opacity-50 italic leading-relaxed">{item.description}</p>
                                  )}
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        ))}
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
