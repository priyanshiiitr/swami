import React from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

// --- Styling Constants ---
const COLORS = {
  background: '#FFFDF7',
  orangeAccent: '#FF5520',
  textDark: '#1C1C1C',
  textGray: '#4B5563',
  offWhiteBg: '#FBF8F0',
  cardBg: '#FFFFFF',
  ctaBg: '#FFFCDD',
};

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.7, ease: "easeOut" } 
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const LatestBlogs = () => {
  return (
    <div 
      className="w-full relative font-sans overflow-x-hidden"
      style={{ backgroundColor: COLORS.ctaBg }}
    >
      {/* Font Injection */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap');
          
          .font-serif-custom { font-family: 'Playfair Display', serif; }
          .font-sans-custom { font-family: 'Inter', sans-serif; }
        `}
      </style>

      <section className="max-w-7xl mx-auto pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-16 relative">
        
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(300px,500px)_1fr] gap-8 lg:gap-12 items-start">
          
          {/* Left Large Card */}
          <motion.div 
            className="relative rounded-2xl lg:rounded-[2rem] overflow-hidden h-[400px] sm:h-[500px] lg:h-[560px] shadow-xl w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideInLeft}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
              style={{ 
                backgroundImage: "url('/88db6de979260af2e2e714a2fb8c1e5464ff21b0.png')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            </div>
            
            {/* Content */}
            <div className="relative h-full flex flex-col justify-end p-6 sm:p-8 lg:p-10 pointer-events-none">
              <motion.h3 
                className="text-white text-3xl sm:text-4xl lg:text-[2.75rem] font-serif-custom leading-[1.1] mb-4 sm:mb-6"
                variants={fadeInUp}
              >
                Heal Your Spirit<br />
                Through <span className="font-bold">the Power<br />
                of Story</span>
              </motion.h3>
              <motion.button 
                className="bg-white font-sans-custom font-medium py-2.5 sm:py-3 px-8 sm:px-10 rounded-full shadow-md hover:bg-gray-50 transition-colors self-start text-sm sm:text-base pointer-events-auto"
                style={{ color: COLORS.orangeAccent }}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Connect
              </motion.button>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Header + Cards + Navigation */}
          <motion.div 
            className="flex flex-col w-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            
            {/* Header Section - Title, Description, and Navigation */}
            <div className="mb-6 sm:mb-8">
              {/* Top Row: Title and Navigation */}
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                <motion.h2 
                  className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-gray-900 font-serif-custom leading-[1.05]"
                  variants={fadeInUp}
                >
                  Our Latest <span className="italic" style={{ color: COLORS.orangeAccent }}>Blogs</span>
                </motion.h2>
                
                {/* Navigation Controls */}
                <motion.div 
                  className="flex items-center gap-3 flex-shrink-0"
                  variants={fadeInUp}
                >
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 flex items-center justify-center hover:bg-orange-50 transition-colors"
                    style={{ borderColor: '#FFE4D6', color: COLORS.orangeAccent }}
                  >
                    <ChevronLeft size={18} className="sm:hidden" strokeWidth={2.5} />
                    <ChevronLeft size={20} className="hidden sm:block" strokeWidth={2.5} />
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white transition-transform hover:scale-105"
                    style={{ backgroundColor: COLORS.orangeAccent }}
                  >
                    <ChevronRight size={18} className="sm:hidden" strokeWidth={2.5} />
                    <ChevronRight size={20} className="hidden sm:block" strokeWidth={2.5} />
                  </motion.button>
                </motion.div>
              </div>

              {/* Description and Explore More Link */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3">
                <motion.p 
                  className="text-sm sm:text-base text-gray-500 font-sans-custom leading-relaxed max-w-xl"
                  variants={fadeInUp}
                >
                  Your journey doesn't end here — it evolves. Discover more insights to awaken <span className="font-semibold text-gray-700">compassion, stillness, and purpose within.</span>
                </motion.p>
                <motion.a 
                  href="#" 
                  className="flex items-center font-sans-custom text-sm font-medium whitespace-nowrap hover:underline flex-shrink-0" 
                  style={{ color: COLORS.orangeAccent }}
                  variants={fadeInUp}
                  whileHover={{ x: 5 }}
                >
                  Explore more <ArrowRight size={16} className="ml-1" />
                </motion.a>
              </div>
            </div>

            {/* Two Blog Cards Side by Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              
              {/* Small Card 1 */}
              <motion.div 
                className="bg-white rounded-xl lg:rounded-[1.25rem] overflow-hidden shadow-md hover:shadow-xl transition-shadow group cursor-pointer"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="overflow-hidden h-[160px] sm:h-[180px]">
                  <img 
                    src="/0c81b1e1328bc17db513b001da625beb02818b53.jpg" 
                    alt="Calm, Healing & Storytelling Focus" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h4 className="text-base sm:text-lg font-serif-custom font-semibold text-gray-900 mb-2 sm:mb-3 leading-snug group-hover:text-orange-600 transition-colors">
                    Calm, Healing & Storytelling Focus
                  </h4>
                  <p className="text-xs sm:text-sm font-sans-custom text-gray-600 mb-4 sm:mb-5 leading-relaxed line-clamp-3">
                    Gentle insights, uplifting stories, and simple spiritual wisdom to help you heal, grow, and reconnect with your true self.
                  </p>
                  <span 
                    className="flex items-center text-xs sm:text-sm font-medium group-hover:underline" 
                    style={{ color: COLORS.orangeAccent }}
                  >
                    Read Blog <ArrowRight size={14} className="sm:hidden ml-1.5" />
                    <ArrowRight size={16} className="hidden sm:block ml-2" />
                  </span>
                </div>
              </motion.div>

              {/* Small Card 2 */}
              <motion.div 
                className="bg-white rounded-xl lg:rounded-[1.25rem] overflow-hidden shadow-md hover:shadow-xl transition-shadow group cursor-pointer"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="overflow-hidden h-[160px] sm:h-[180px]">
                  <img 
                    src="/fdb5c7755ee90cd83858ebb0c0590a60006afed3.png" 
                    alt="Emotional, Modern & Relatable" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h4 className="text-base sm:text-lg font-serif-custom font-semibold text-gray-900 mb-2 sm:mb-3 leading-snug group-hover:text-orange-600 transition-colors">
                    Emotional, Modern & Relatable
                  </h4>
                  <p className="text-xs sm:text-sm font-sans-custom text-gray-600 mb-4 sm:mb-5 leading-relaxed line-clamp-3">
                    Life can feel overwhelming — but small moments of guidance can open big doors. Explore Swamiji's reflections on healing, intuition, and finding balance.
                  </p>
                  <span 
                    className="flex items-center text-xs sm:text-sm font-medium group-hover:underline" 
                    style={{ color: COLORS.orangeAccent }}
                  >
                    Read Blog <ArrowRight size={14} className="sm:hidden ml-1.5" />
                    <ArrowRight size={16} className="hidden sm:block ml-2" />
                  </span>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>
      
      {/* ============== CTA SECTION ============== */}
      <motion.section 
        className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden" 
        style={{ backgroundColor: COLORS.ctaBg }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        {/* Soft Background Blobs */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.4, 0.3] 
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="absolute top-5 sm:top-10 left-5 sm:left-10 w-40 sm:w-64 h-40 sm:h-64 rounded-full bg-orange-200 opacity-30 blur-3xl"
          ></motion.div>
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.5, 0.4] 
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1 
            }}
            className="absolute bottom-5 sm:bottom-10 right-5 sm:right-10 w-48 sm:w-80 h-48 sm:h-80 rounded-full bg-orange-100 opacity-40 blur-3xl"
          ></motion.div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-[3rem] text-gray-900 font-bold font-serif-custom leading-tight mb-2"
          >
            Ready to Dive Deeper? 
            <span className="block sm:inline italic font-bold sm:ml-2 mt-1 sm:mt-0" style={{ color: COLORS.orangeAccent }}>
              Let's Talk!
            </span>
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-base sm:text-lg lg:text-2xl font-sans-custom text-gray-600 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4"
          >
            The Mandala Within isn't just a path — it's a conversation waiting to happen. Let's explore what's unfolding for you.
          </motion.p>
          
          <motion.button 
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-sans-custom text-white font-medium py-3 sm:py-4 px-8 sm:px-10 rounded-full shadow-lg text-sm sm:text-base w-full sm:w-auto"
            style={{ backgroundColor: COLORS.orangeAccent }}
          >
            Book Complimentary 1:1 Session
          </motion.button>

          <motion.p 
            variants={fadeInUp}
            className="text-xs text-gray-500 font-sans-custom mt-3"
          >
            No cost. Just presence.
          </motion.p>
        </div>
      </motion.section>
    </div>
  );
};

export default LatestBlogs;