import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Download } from 'lucide-react';
import spiritualBg from '../assets/spiritual-bg.svg';
import bookPreview from '../assets/Screenshot 2025-12-22 204253.png';

const COLORS = {
  background: '#FFF5F0',
  orangeAccent: '#FF5520',
  textDark: '#2E3D4C',
  textGray: '#555555',
  white: '#FFFFFF',
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

const BookChapterSection = () => {
  return (
    <section 
      className="relative py-20 px-6 overflow-hidden"
      style={{ 
        backgroundColor: '#FFFFFF'
      }}
    >
      {/* Grey SVG Background - Peeking from top center */}
      <div 
        className="absolute left-1/2 -translate-x-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          top: '-300px',
          backgroundImage: `url(${spiritualBg})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'grayscale(100%)',
          opacity: 0.12
        }}
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-12"
        >
          {/* Chapter Badge */}
          <motion.div 
            variants={fadeInUp}
            className="flex justify-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-orange-500 bg-orange-50">
              <BookOpen size={18} color={COLORS.orangeAccent} />
              <span className="text-sm font-semibold" style={{ color: COLORS.orangeAccent }}>
                Chapter 1
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div 
            variants={fadeInUp}
            className="text-center space-y-4"
          >
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight"
              style={{ color: COLORS.textDark }}
            >
              The Childhood Moments That Sparked{' '}
              <span className="italic relative" style={{ color: COLORS.orangeAccent }}>
                a Spiritual Revolution.
                {/* Decorative SVG */}
                <svg 
                  className="absolute -top-6 -right-8 w-8 h-8 hidden md:block" 
                  width="34" 
                  height="32" 
                  viewBox="0 0 34 32" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.2913 30.9612C17.1422 31.8924 15.0179 31.4926 8.23319 29.2863C1.05281 26.9462 -0.445791 26.1682 0.102719 25.1787C0.87373 23.8271 17.4937 29.4492 17.2913 30.9612Z" fill="#FF5900" />
                  <path d="M30.1698 0.134384C32.9127 0.775266 33.1552 1.32868 33.5325 7.77832C33.9293 14.4395 33.7649 15.6707 32.5245 15.85C30.274 16.1659 29.6043 14.4363 28.7033 6.22218C28.042 0.161575 28.1453 -0.338657 30.1698 0.134384Z" fill="#FF5900" />
                  <path d="M12.7941 6.03748C14.7725 6.47215 15.3989 7.03254 17.1756 9.91777C22.4133 18.4966 26.8347 24.2076 23.0008 23.2842C21.4334 22.918 20.2954 21.4239 13.8353 11.5935C10.2899 6.14232 10.1434 5.47334 12.7941 6.03748Z" fill="#FF5900" />
                </svg>
              </span>
            </h2>
            
            {/* Subtitle */}
            <p 
              className="text-base md:text-lg max-w-3xl mx-auto"
              style={{ color: COLORS.textGray }}
            >
              <span className="italic">Swamiji shares the childhood moments</span> — of protection, intuition, and wonder—that
              quietly revealed the <strong>Divine was already walking beside him.</strong>
            </p>
          </motion.div>

          {/* Book Preview Card */}
          <motion.div 
            variants={fadeInUp}
            className="flex justify-center"
          >
            <div className="relative max-w-2xl w-full">
              <img 
                src={bookPreview} 
                alt="Chapter 1: The Invisible Hand - The Beginning"
                className="w-full h-auto rounded-2xl shadow-2xl"
                style={{ display: 'block', backgroundColor: '#f0f0f0' }}
                onError={(e) => {
                  console.error('Image failed to load:', e);
                  e.target.style.border = '2px solid red';
                }}
              />
            </div>
          </motion.div>

          {/* Download PDF Button */}
          <motion.div 
            variants={fadeInUp}
            className="flex justify-center"
          >
            <button 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 transition-all hover:shadow-lg hover:scale-105"
              style={{ 
                borderColor: COLORS.orangeAccent,
                color: COLORS.orangeAccent,
                backgroundColor: 'transparent'
              }}
            >
              <span className="font-semibold">Download PDF</span>
              <Download size={20} />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookChapterSection;
