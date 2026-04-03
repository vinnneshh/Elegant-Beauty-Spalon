/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Star, 
  Menu, 
  X, 
  Scissors, 
  Sparkles, 
  Flower2, 
  Wind,
  Instagram,
  Facebook
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const BUSINESS_NAME = "Elegant Beauty Spalon";
const PHONE = "74164 30102";
const WHATSAPP = "74164 30102";
const ADDRESS = "3rd Floor, 1-60/36, above Dantam Dental Lounge, opp. Maruti suzuki Nexa Showroom, Anjaiah Nagar, Gachibowli, Hyderabad, Telangana 500032";
const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/pweGx19qgtsAPp7k9";

const SERVICES = [
  {
    category: "Massages & Therapies",
    icon: <Flower2 className="w-6 h-6" />,
    items: [
      "Swedish & Deep Tissue",
      "Thai & Balinese Massage",
      "Aromatherapy & Hot Stone",
      "Four-hand & Couple Massage",
      "Traditional Abhyanga",
      "Reflexology"
    ]
  },
  {
    category: "Skin Care & Detox",
    icon: <Sparkles className="w-6 h-6" />,
    items: [
      "Body Scrubs & Exfoliation",
      "Body Polishing (Glow)",
      "Herbal & Detox Wraps",
      "Skin Hydration Treatments",
      "Facials & Clean-ups"
    ]
  },
  {
    category: "Salon Services",
    icon: <Scissors className="w-6 h-6" />,
    items: [
      "Hair Spa & Scalp Care",
      "Styling & Coloring",
      "Manicure & Pedicure",
      "Waxing & Threading",
      "Party & Bridal Makeup"
    ]
  },
  {
    category: "Spa Facilities",
    icon: <Wind className="w-6 h-6" />,
    items: [
      "Steam & Sauna",
      "Hammam (Turkish Bath)",
      "Spa Packages",
      "Couple Packages",
      "Foot Spa"
    ]
  }
];

const TESTIMONIALS = [
  {
    name: "Kamble Nisha",
    rating: 5,
    text: "Amazing service, I like the ambience. All staff is friendly, especially Nazim who gave me a good hair cut and hair spa. I love it, I will visit again and again.",
    services: "Haircut, Hair Spa, Massage"
  },
  {
    name: "Lakshmi Chesetti",
    rating: 5,
    text: "Had an amazing experience! Furkhan did a great job with the haircut. Gracy was very professional and caring. Goldy handled the pedicure, massage, and facial perfectly. Highly recommend visiting around 11 AM.",
    services: "Pedicure, Massage, Facial"
  },
  {
    name: "Meg Jeager",
    rating: 5,
    text: "Been coming here for 4 years. Best services at a very affordable price! Nazim is really good at balayage and Soni made waxing really less painful. Wonderful owners too!",
    services: "Balayage, Waxing, Spa Services"
  }
];

const HOURS = [
  { day: "Mon - Thu", time: "11:00 AM - 10:00 PM" },
  { day: "Fri - Sun", time: "11:00 AM - 10:00 PM" }
];

const GALLERY_IMAGES = [
  { id: "1Jx77sdtnKxYeNV-HCY34iDKQfwz22uhC", title: "Styling & Coloring" },
  { id: "1wV0JJp8bHBXL3Ui0h8U6HW2X3wZ9xs9H", title: "Premium Haircare" },
  { id: "1aWGJhJn2ddiU8yv3nTEvYDQ4T1zTEa_b", title: "Modern Hair Styles" },
  { id: "1fpcfGjj7OlZxhqNQ9nvpEC0M6LCcQeAl", title: "Expert Styling" },
  { id: "16mpXXsFmEMpDc4r8onzrJHVNNnEmEXNF", title: "Facial Therapy & Hair Style" },
  { id: "1RMxnMbobFMaYgMLq3M2ezgTzjNFCwugC", title: "Elegant Ambience" },
  { id: "11MpBPd-Nwsu1WaeCRB00sPCAhMWbf8Rq", title: "Relaxing Spa" },
  { id: "1Q1u85pAlW_Efj3YC_06O5PRiQ3OQcr0G", title: "Premium Hair Styling" }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-secondary selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3 shadow-lg' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex flex-col">
            <span className={`text-2xl font-serif font-bold tracking-tight ${scrolled ? 'text-primary-dark' : 'text-white'}`}>
              Elegant Beauty
            </span>
            <span className={`text-[10px] uppercase tracking-[0.3em] font-medium -mt-1 ${scrolled ? 'text-primary-light' : 'text-white/80'}`}>
              Spalon • Unisex
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {['Services', 'About', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium transition-colors hover:text-secondary ${scrolled ? 'text-slate-700' : 'text-white'}`}
              >
                {item}
              </button>
            ))}
            <a
              href={`tel:${PHONE.replace(/\s/g, '')}`}
              className="bg-secondary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-all shadow-lg hover:scale-105 active:scale-95"
            >
              Call Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className={scrolled ? 'text-primary-dark' : 'text-white'} /> : <Menu className={scrolled ? 'text-primary-dark' : 'text-white'} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              {['Services', 'About', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-2xl font-serif text-primary-dark text-left"
                >
                  {item}
                </button>
              ))}
              <div className="pt-6 flex flex-col space-y-4">
                <a
                  href={`tel:${PHONE.replace(/\s/g, '')}`}
                  className="flex items-center justify-center space-x-2 bg-primary-dark text-white py-4 rounded-xl font-bold"
                >
                  <Phone size={20} />
                  <span>Call Now</span>
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP.replace(/\s/g, '')}`}
                  className="flex items-center justify-center space-x-2 bg-green-600 text-white py-4 rounded-xl font-bold"
                >
                  <MessageCircle size={20} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-luxury pt-24 md:pt-0">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=2000"
            alt="Luxury Spa"
            className="w-full h-full object-cover opacity-40 scale-105 animate-slow-zoom"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/60 via-transparent to-primary-dark"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-white text-xs font-bold uppercase tracking-widest">Premium Unisex Spalon</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-serif text-white leading-tight mb-6">
              Elevate Your <br />
              <span className="italic text-accent">Natural Beauty</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl leading-relaxed">
              Experience the ultimate sanctuary of relaxation and grooming in Gachibowli. 
              From traditional Ayurvedic therapies to modern salon excellence.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href={`tel:${PHONE.replace(/\s/g, '')}`}
                className="bg-secondary text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl shadow-secondary/20 hover:scale-105 transition-transform flex items-center justify-center space-x-2"
              >
                <Phone size={20} />
                <span>Book Appointment</span>
              </a>
              <button
                onClick={() => scrollToSection('services')}
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center group"
              >
                <span>View Services</span>
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Floating Info */}
        <div className="absolute bottom-10 right-6 hidden lg:block">
          <div className="glass p-6 rounded-2xl shadow-2xl flex items-center space-x-4">
            <div className="bg-accent/20 p-3 rounded-full">
              <MapPin className="text-accent" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Location</p>
              <p className="text-sm font-semibold text-primary-dark">Gachibowli, Hyderabad</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.3em] mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-primary-dark mb-6">Curated Wellness & Beauty</h3>
            <p className="text-slate-600">Discover our comprehensive range of services designed to rejuvenate your body and soul.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-primary-light/30 transition-all hover:shadow-xl group"
              >
                <div className="w-14 h-14 bg-primary-dark text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h4 className="text-xl font-serif font-bold text-primary-dark mb-6">{service.category}</h4>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center text-slate-600 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=1000"
                  alt="Spa Interior"
                  className="w-full h-[600px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-0"></div>
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary-light/20 rounded-full blur-3xl -z-0"></div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.3em] mb-4">The Spalon Experience</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-primary-dark mb-8">Where Luxury Meets Wellness</h3>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Elegant Beauty Spalon is Gachibowli's premier destination for those seeking a perfect blend of salon excellence and spa tranquility. Located conveniently above Dantam Dental Lounge, we offer a unisex environment that prioritizes your comfort and rejuvenation.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="text-3xl font-serif text-primary-dark mb-2">4+ Years</h4>
                  <p className="text-sm text-slate-500">Of trusted local service</p>
                </div>
                <div>
                  <h4 className="text-3xl font-serif text-primary-dark mb-2">100%</h4>
                  <p className="text-sm text-slate-500">Professional & friendly staff</p>
                </div>
              </div>
              <button 
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center space-x-2 text-primary-dark font-bold border-b-2 border-accent pb-1 hover:text-secondary hover:border-secondary transition-all"
              >
                <span>Learn more about our story</span>
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.3em] mb-4">Visual Journey</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-primary-dark mb-6">Our Elegant Space</h3>
            <p className="text-slate-600">Step into a world of luxury and tranquility. Every corner of our spalon is designed for your comfort.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {GALLERY_IMAGES.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative group overflow-hidden rounded-3xl aspect-[4/5] ${
                  idx === 1 || idx === 6 ? 'lg:row-span-2 lg:aspect-auto' : ''
                }`}
              >
                <img
                  src={`https://lh3.googleusercontent.com/d/${img.id}`}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <p className="text-white font-serif text-xl italic">{img.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.3em] mb-4">Guest Reviews</h2>
            <h3 className="text-4xl font-serif text-primary-dark">What Our Clients Say</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col h-full">
                <div className="flex space-x-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-slate-700 italic mb-8 flex-grow leading-relaxed">"{t.text}"</p>
                <div className="flex items-center space-x-4 pt-6 border-t border-slate-50">
                  <div className="w-12 h-12 rounded-full bg-primary-dark flex items-center justify-center text-white font-bold text-xl">
                    {t.name[0]}
                  </div>
                  <div>
                    <h5 className="font-bold text-primary-dark">{t.name}</h5>
                    <p className="text-xs text-slate-400">{t.services}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section id="contact" className="py-24 bg-primary-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-light/10 skew-x-12 translate-x-1/4"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-sm font-bold text-accent uppercase tracking-[0.3em] mb-4">Get In Touch</h2>
              <h3 className="text-4xl md:text-5xl font-serif mb-10">Visit Our Sanctuary</h3>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-white/10 p-4 rounded-2xl">
                    <MapPin className="text-accent" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-2">Our Address</h5>
                    <p className="text-white/70 max-w-sm leading-relaxed">
                      {ADDRESS}
                    </p>
                    <a 
                      href={GOOGLE_MAPS_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-accent font-bold hover:underline"
                    >
                      Get Directions on Maps
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-white/10 p-4 rounded-2xl">
                    <Clock className="text-accent" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-2">Opening Hours</h5>
                    <div className="space-y-1">
                      {HOURS.map((h, i) => (
                        <p key={i} className="text-white/70 flex justify-between w-64">
                          <span>{h.day}</span>
                          <span>{h.time}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-white/10 p-4 rounded-2xl">
                    <Phone className="text-accent" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-2">Contact Details</h5>
                    <p className="text-white/70">{PHONE}</p>
                    <div className="flex space-x-4 mt-6">
                      <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="bg-secondary p-4 rounded-full hover:scale-110 transition-transform">
                        <Phone size={24} />
                      </a>
                      <a href={`https://wa.me/${WHATSAPP.replace(/\s/g, '')}`} className="bg-green-600 p-4 rounded-full hover:scale-110 transition-transform">
                        <MessageCircle size={24} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-white rounded-3xl p-8 md:p-12 text-slate-900 shadow-2xl">
                <h4 className="text-2xl font-serif font-bold text-primary-dark mb-6">Request a Call Back</h4>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Full Name</label>
                      <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-light" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Phone Number</label>
                      <input type="tel" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-light" placeholder="+91 00000 00000" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Service Interested In</label>
                    <select className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-light">
                      <option>Full Body Massage</option>
                      <option>Skin Care & Detox</option>
                      <option>Salon Services</option>
                      <option>Spa Package</option>
                    </select>
                  </div>
                  <button className="w-full bg-primary-dark text-white py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl">
                    Send Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 text-white border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-2xl font-serif font-bold tracking-tight">Elegant Beauty</span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-white/50">Spalon • Unisex</span>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-white/50 hover:text-accent transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-white/50 hover:text-accent transition-colors"><Facebook size={20} /></a>
            </div>

            <p className="text-white/30 text-sm">
              © {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons (Mobile Only) */}
      <div className="fixed bottom-6 left-6 right-6 md:hidden z-50 flex space-x-4">
        <a 
          href={`tel:${PHONE.replace(/\s/g, '')}`}
          className="flex-1 bg-secondary text-white py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 shadow-2xl"
        >
          <Phone size={20} />
          <span>Call</span>
        </a>
        <a 
          href={`https://wa.me/${WHATSAPP.replace(/\s/g, '')}`}
          className="flex-1 bg-green-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 shadow-2xl"
        >
          <MessageCircle size={20} />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
