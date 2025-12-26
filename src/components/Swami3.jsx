import React from 'react';
import { Award, BookOpen, Heart, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const StatsAndFeatures = () => {
  const COLORS = {
    background: '#FFF9F3',
    orange: '#FF5900',
    textDark: '#2C3844',
    textGray: '#5A5A5A',
    textLightGray: '#2C3844B2',
    cardBgWhite: '#FFFFFF',
    cardBgOrange: 'rgba(255, 211, 165, 0.3)',
    cardBorder: '#FFD1A3',
    iconBg: '#FF59001A',
    iconBorder: '#FF6916',
  };

  const stats = [
    { value: '5', label: 'Healing Sessions' },
    { value: '15+', label: 'Courses' },
    { value: '500+', label: 'Stories Shared' },
  ];

  const featureCards = [
    {
      icon: Award,
      title: 'White House Commission',
      description: 'Recognized expert in alternative medicine',
      isOrange: false,
    },
    {
      icon: BookOpen,
      title: '#1 Bestselling Author',
      description: 'Amazon bestseller in spiritual healing',
      isOrange: true,
    },
    {
      icon: Heart,
      title: '50 Years Experience',
      description: 'Five decades of natural healing wisdom',
      isOrange: false,
    },
    {
      icon: Users,
      title: 'Age of Joy Mission',
      description: 'Leading the storytelling revolution',
      isOrange: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const MandalaPlaceholder = ({ className, opacity = 1, src = '/ac4b5ff56816c64fab499363f5b3c9fb0b12b2f5.png', isBackground = false }) => (
    <div className={`pointer-events-none select-none ${className}`} style={{ opacity }}>
      <img
        src={src}
        alt="Mandala Flower"
        className={`w-full h-full object-contain ${isBackground ? 'filter invert sepia-100 saturate-0 hue-rotate-15 brightness-200 contrast-100' : ''}`}
      />
    </div>
  );

  const MandalaPlaceholder1 = ({ className, opacity = 1, src = '/ac4b5ff56816c64fab499363f5b3c9fb0b12b2f5.png', isBackground = false }) => (
    <div className={`pointer-events-none select-none ${className}`} style={{ opacity }}>
      <img
        src={src}
        alt="Mandala Flower"
        className={`w-full h-[532px] object-contain ${isBackground ? 'filter invert sepia-100 saturate-0 hue-rotate-15 brightness-200 contrast-100' : ''}`}
      />
    </div>
  );

  return (
    <div className='bg-[#FFFBEB] '>
      <div
        className="w-full border-black-[0px] rounded-tl-[36px] rounded-tr-[36px] relative py-14 px-4 sm:px-8 font-sans overflow-hidden"
        style={{ backgroundColor: 'white' }}
      >
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,600&display=swap');

            .font-serif-custom { font-family: 'Playfair Display', serif; }
            .font-sans-custom { font-family: 'Inter', sans-serif; }

            .custom-dashed-line {
              background-image: linear-gradient(to right, #AD6C2836 50%, rgba(255,255,255,0) 0%);
              background-position: bottom;
              background-size: 24px 2px;
              background-repeat: repeat-x;
              height: 2px;
            }
          `}
        </style>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[40%] w-[800px] h-[800px] z-0"
        >
          <MandalaPlaceholder1
            opacity={0.1}
            src="/040ff7694f7f60e8861845ec6b82d9f4bfc61371.png"
            isBackground={true}
          />
        </motion.div>

        <div className="max-w-[1200px] mx-auto relative z-10">

          <motion.div 
            className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-12 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >

            <div className="flex flex-row gap-12 sm:gap-16 lg:gap-24">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeInUp}
                  className="flex flex-col items-start"
                >
                  <span
                    className="font-serif-custom italic text-[3.5rem] sm:text-[4rem] leading-none mb-3 font-medium"
                    style={{ color: COLORS.orange }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="font-sans-custom font-medium text-lg tracking-tight"
                    style={{ color: '#2E3D4CCC' }}
                  >
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="max-w-[550px] text-left lg:text-right mt-2">
              <p className="text-lg sm:text-[1.25rem] leading-[1.6] text-gray-500 font-sans-custom">
                <span className="font-bold italic text-gray-500">Join Swami on a journey of wisdom</span>, joy, and authentic storytelling. Five decades of natural healing expertise meeting the <span className="font-bold italic text-gray-500">power of shared stories.</span>
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "100%", opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-full custom-dashed-line mb-16 opacity-60"
          ></motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {featureCards.map((card, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="relative p-8 rounded-[12px] border border-[1px] transition-shadow duration-300 hover:shadow-xl group overflow-hidden flex flex-col items-start"
                style={{
                  width: "100%", 
                  minHeight: "231.2px",
                  backgroundColor: card.isOrange ? COLORS.cardBgOrange : COLORS.cardBgWhite,
                  borderColor: COLORS.cardBorder,
                }}
              >

                {(!card.isOrange) && (
                  <div className="absolute -top-6 -right-16 w-32 h-32 pointer-events-none">
                    <MandalaPlaceholder
                      opacity={0.2}
                      src="/040ff7694f7f60e8861845ec6b82d9f4bfc61371.png"
                      isBackground={true}
                    />
                  </div>
                )}

                <div
                  className="w-[54px] h-[54px] rounded-full flex items-center justify-center mb-6 relative z-10"
                  style={{ backgroundColor: COLORS.iconBg }}
                >
                  <div
                    className="w-full h-full rounded-full border-[1px] flex items-center justify-center"
                    style={{ borderColor: COLORS.iconBorder }}
                  >
                    <card.icon size={28} color={COLORS.orange} strokeWidth={1.5} />
                  </div>
                </div>

                <h3
                  className="font-serif-custom font-bold text-[18px] leading-tight mb-3 relative z-10"
                  style={{ color: COLORS.textDark }}
                >
                  {card.title}
                </h3>

                <p
                  className="font-sans-custom text-[14px] leading-relaxed relative z-10"
                  style={{ color: COLORS.textLightGray }}
                >
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default StatsAndFeatures;