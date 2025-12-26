import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export default function Footer() {
  return (
    <div className="w-full text-white font-sans relative overflow-hidden">
      {/* Angular Gradient Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(90deg, #990D13 0%, #FF6916 100%)'
        }}
      />

      <motion.div 
        className="relative z-10 max-w-8xl mx-auto px-6 pt-16 pb-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        
        {/* Main Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12 relative">
          
          {/* Column 1: Brand & Bio */}
          <motion.div variants={itemVariants} className="flex flex-col space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-12 h-12 relative">
                <img 
                  src='/00b11a585015d6fa85fb93d146ad1fee5b8b1963.png'
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <p className="text-white/90 text-[15px] leading-relaxed max-w-[280px]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Spiritual training • Mind-Body healing • Storytelling for transformation
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3 pt-2">
              {[<Facebook size={20} />, <Instagram size={20} />, <Youtube size={20} />].map((icon, i) => (
                <motion.a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors backdrop-blur-sm"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl mb-6 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>Quick Links</h3>
            <ul className="space-y-3 text-white/90 text-[15px]" style={{ fontFamily: 'Playfair Display, serif' }}>
              {['Home', 'Books', 'Products', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Support & Legal */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl mb-6 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>Support & Legal</h3>
            <ul className="space-y-3 text-white/90 text-[15px]" style={{ fontFamily: 'Playfair Display, serif' }}>
              {['Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Stay Connected */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-xl text-white" style={{ fontFamily: 'Playfair Display, serif' }}>Stay Connected</h3>
              <span className="text-lg">🌿</span>
            </div>
            
            <p className="text-white/80 text-[13px] leading-relaxed mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Receive insights and updates from Radiant Light Academy.
            </p>

            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-2.5 text-sm placeholder:text-white/60 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all"
                style={{ fontFamily: 'Playfair Display, serif' }}
              />
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2.5 rounded-lg shadow-lg transition-all"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>

        </div>

        {/* Divider */}
        <motion.div 
          variants={itemVariants} 
          className="h-px w-full bg-white/20 mb-6" 
        />

        {/* Bottom Bar */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-between items-center text-xs text-white/70 gap-4"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          <p>© 2025 Orange Cowboy. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </motion.div>

      </motion.div>

      {/* Font imports */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&display=swap');
      `}</style>
    </div>
  );
}
