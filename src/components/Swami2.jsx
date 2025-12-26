import React from 'react';
import { Sparkles, BookOpen, Mic } from 'lucide-react';
import { motion } from 'framer-motion';
import EllipseLeft from '../assets/ellipse_left.png';
import EllipseRight from '../assets/ellipse_right.png';

const HeroSection = () => {
  const THEME = {
    orange: '#FF5900',
    cream: '#FFFCDD',
    darkText: '#1A2E35',
    bodyText: '#64748B',
    softOrangeCircle: '#FFDDC1',
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delays each child by 0.2s
        delayChildren: 0.1,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  const popIn = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { type: "spring", stiffness: 260, damping: 20, delay: 1 } 
    },
  };

  return (
    <div className="w-full relative z-1 overflow-hidden font-sans" style={{ backgroundColor: THEME.cream }}>
      {/* Background Elements */}
      <img 
        src={EllipseLeft} 
        alt="" 
        className="absolute left-0 top-0 z-0 pointer-events-none block w-1/2 md:w-auto opacity-100" 
      />
      <img 
        src={EllipseRight} 
        alt="" 
        className="absolute right-0 top-0 z-0 pointer-events-none block w-1/2 md:w-auto opacity-100" 
      />
      
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@0,600;0,700;1,500;1,600&display=swap');
          .font-serif-custom { font-family: 'Playfair Display', serif; }
          .font-sans-custom { font-family: 'Inter', sans-serif; }
        `}
      </style>

      <div className="w-full max-w-8xl mx-auto px-6 md:px-12 py-10 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-20">

          {/* LEFT CONTENT - Staggered Text Animation */}
          <motion.div 
            className="space-y-8 relative z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Triggers when 20% is visible
          >

            {/* Tagline Pill */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#FF5900] bg-white/60 backdrop-blur-sm shadow-sm mt-12">
              <Sparkles size={16} color={THEME.orange} fill={THEME.orange} />
              <span className="text-sm font-medium text-[#FF5900] tracking-wide">
                Storytelling That Awakens the Soul
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={fadeInUp} className="space-y-2 mt-6">
              <h2 className="font-serif-custom text-4xl md:text-5xl lg:text-[56px] leading-tight text-[#2E3D4C]">
                <span className="italic font-medium">Meet Swami</span>
                <span className="ml-4 text-[#2E3D4C] font-light">—</span>
              </h2>

              <div className="relative inline-block">
                {/* SVG positioned above the S */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute -top-3 left-96"
                >
                  <svg width="34" height="32" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.2913 30.9612C17.1422 31.8924 15.0179 31.4926 8.23319 29.2863C1.05281 26.9462 -0.445791 26.1682 0.102719 25.1787C0.87373 23.8271 17.4937 29.4492 17.2913 30.9612Z" fill="#FF5900" />
                    <path d="M30.1698 0.134384C32.9127 0.775266 33.1552 1.32868 33.5325 7.77832C33.9293 14.4395 33.7649 15.6707 32.5245 15.85C30.274 16.1659 29.6043 14.4363 28.7033 6.22218C28.042 0.161575 28.1453 -0.338657 30.1698 0.134384Z" fill="#FF5900" />
                    <path d="M12.7941 6.03748C14.7725 6.47215 15.3989 7.03254 17.1756 9.91777C22.4133 18.4966 26.8347 24.2076 23.0008 23.2842C21.4334 22.918 20.2954 21.4239 13.8353 11.5935C10.2899 6.14232 10.1434 5.47334 12.7941 6.03748Z" fill="#FF5900" />
                  </svg>
                </motion.div>

                {/* Heading Text */}
                <h1 className="font-serif-custom text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight text-[#FF5900] relative">
                  Author, Healer, <span className="relative">Storyteller</span>
                </h1>
              </div>

            </motion.div>

            {/* Body Text */}
            <motion.p variants={fadeInUp} className="font-sans-custom text-[17px] leading-relaxed text-[#36415399] max-w-xl">
              For over 50 years, <strong className="text-[#364153] font-bold">Swamiji has guided people to experience joy</strong>, healing,
              and spiritual reconnection through the <strong className="text-[#364153] font-bold">magic of storytelling</strong>. Step into a
              <strong className="text-[#364153] font-bold italic"> world where stories uplift</strong>, open hearts, and help us rediscover our purpose.
            </motion.p>

            {/* Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-2">
              <button
                className="px-10 py-2 cursor-pointer rounded-full text-white font-semibold shadow-lg shadow-orange-200 hover:shadow-xl hover:translate-y-[-1px] transition-all duration-200"
                style={{ backgroundColor: THEME.orange }}
              >
                Connect
              </button>

              <button
                className="px-10 py-2 cursor-pointer rounded-full bg-white border-2 text-orange-500 font-bold hover:bg-orange-50 transition-colors duration-200"
                style={{ borderColor: '#FFDEC7', color: THEME.orange }}
              >
                Explore Courses
              </button>
            </motion.div>

            {/* Stats Footer */}
            <motion.div variants={fadeInUp} className="flex items-center gap-10 pb-10">
              {/* Stat 1 */}
              <div className="flex items-start gap-3">
                <div className="">
                  <div className="bg-white/10 backdrop-blur-md p-2 rounded-xl border border-white/30 shadow-md">
                    <BookOpen size={24} color={THEME.orange} strokeWidth={2} />
                  </div>
                </div>

                <div className="flex flex-col leading-snug">
                  <span className="font-bold text-[#101828] text-[15px]">2 Bestselling</span>
                  <span className="text-[#FF5900] font-medium text-sm">Books</span>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-start gap-3">
                <div className="">
                  <div className="bg-white/10 backdrop-blur-md p-2 rounded-xl border border-white/30 shadow-md">
                    <Mic size={24} color={THEME.orange} strokeWidth={2} />
                  </div>
                </div>
                <div className="flex flex-col leading-snug">
                  <span className="font-bold text-[#101828] text-[15px]">Weekly</span>
                  <span className="text-[#FF5900] font-medium text-sm">Open Mic</span>
                </div>
              </div>
            </motion.div>

          </motion.div>

          {/* RIGHT CONTENT (Image) - Slide from Right */}
          <motion.div 
            className="relative flex justify-center lg:justify-end lg:mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Image Container */}
            <motion.div variants={fadeInRight} className="relative w-full h-auto max-w-[600px] z-10 overflow-hidden">
              <img
                src="/swami.png"
                alt="Swami Portrait"
                className="w-full h-full object-cover object-top"
              />

              {/* 50+ Years Badge - Pop In Effect */}
              <motion.div 
                variants={popIn}
                className="absolute bottom-8 right-[-10px] md:right-[-20px] bg-white rounded-2xl mr-5 p-5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-orange-100 flex flex-col items-start justify-center w-[160px] h-[70px] text-left z-30"
              >
                <span className="font-serif-custom text-4xl font-bold text-[#FF5900] leading-none">
                  50+
                </span>
                <span className="text-[#2C3844] text-xs font-semibold mt-1 tracking-wide">
                  Years of Wisdom
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;