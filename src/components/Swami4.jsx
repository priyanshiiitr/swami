import React from 'react';
import { ArrowUpRight, Award, BookOpen, Heart, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const COLORS = {
  background: '#FFF9F3',
  orangeAccent: '#FF5520',
  textDark: '#1C1C1C',
  textGray: '#5A5A5A',
  cardWhiteBg: '#FFFFFF',
  cardOrangeBg: '#FFF5EC',
  cardBorder: '#FFE4D6',
  iconBg: '#FFF0E5',
  iconBorder: '#FFDBC2',
  tagBg: '#FFF0E5',
  tagText: '#CC451F',
};

const services = [
  {
    type: 'Workshop',
    title: 'Speaking & Workshops',
    subtitle: 'Inspiring Talks That Spark Transformation',
    image: '/3b2a9c5323c23317e9b758dd6b0440bb6d54a3d8.png',
    isAccent: false,
  },
  {
    type: '1-on-1 & Group Readings',
    title: 'Personal Readings for Clarity, Healing & Guidance',
    image: '/36ba4d5c31475327b04115557739ec3393936896.png',
    isAccent: true,
  },
  {
    type: 'Free Call',
    title: 'Discovery Zoom Calls',
    subtitle: 'A Warm Conversation to Begin Your Journey',
    image: '/0c81b1e1328bc17db513b001da625beb02818b53.jpg',
    isAccent: false,
  },
];

const ArrowButton = ({ isAccent }) => (
  <button
    className={`p-2.5 rounded-full border transition-transform duration-200 shadow-sm hover:scale-105 ${isAccent
      ? 'bg-white text-orange-600 border-white'
      : 'bg-white text-orange-500 border-orange-100'
      }`}
    aria-label="View Details"
  >
    <ArrowUpRight size={20} strokeWidth={2.5} />
  </button>
);

const ServicesSection = () => {
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

  return (
    <section className="mb-10">
      <motion.div 
        className="text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={containerVariants}
      >

        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6 border border-orange-200 bg-[#FF59001A] backdrop-blur-sm">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 5.83337V17.5" stroke="#FF5900" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2.50033 15C2.27931 15 2.06735 14.9122 1.91107 14.7559C1.75479 14.5996 1.66699 14.3877 1.66699 14.1667V3.33333C1.66699 3.11232 1.75479 2.90036 1.91107 2.74408C2.06735 2.5878 2.27931 2.5 2.50033 2.5H6.66699C7.55105 2.5 8.39889 2.85119 9.02401 3.47631C9.64914 4.10143 10.0003 4.94928 10.0003 5.83333C10.0003 4.94928 10.3515 4.10143 10.9766 3.47631C11.6018 2.85119 12.4496 2.5 13.3337 2.5H17.5003C17.7213 2.5 17.9333 2.5878 18.0896 2.74408C18.2459 2.90036 18.3337 3.11232 18.3337 3.33333V14.1667C18.3337 14.3877 18.2459 14.5996 18.0896 14.7559C17.9333 14.9122 17.7213 15 17.5003 15H12.5003C11.8373 15 11.2014 15.2634 10.7326 15.7322C10.2637 16.2011 10.0003 16.837 10.0003 17.5C10.0003 16.837 9.73693 16.2011 9.26809 15.7322C8.79925 15.2634 8.16337 15 7.50033 15H2.50033Z" stroke="#FF5900" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <span
            className="text-sm font-semibold tracking-wide uppercase"
            style={{ color: '#FF5900' }}
          >
            Swami Services
            <span className="absolute -top-6 -right-6">
              <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.627346 17.8777C-0.315415 17.8577 -0.21062 15.6986 1.04478 8.67555C2.37853 1.24216 2.94374 -0.348935 3.99917 0.0587486C5.44366 0.637212 2.15284 17.871 0.627346 17.8777Z" fill="#FF5900" />
                <path d="M32.9286 26.409C32.6697 29.2139 32.1548 29.5299 25.8177 30.7878C19.2739 32.0939 18.0317 32.0999 17.6841 30.8957C17.0627 28.7097 18.6841 27.8093 26.6972 25.7908C32.6099 24.305 33.1196 24.3388 32.9286 26.409Z" fill="#FF5900" />
                <path d="M24.6994 10.0065C24.54 12.0258 24.0708 12.7231 21.4563 14.8786C13.6764 21.2428 8.6254 26.4053 9.01456 22.481C9.16248 20.8782 10.4864 19.5461 19.3385 11.7995C24.2522 7.54029 24.8948 7.30352 24.6994 10.0065Z" fill="#FF5900" />
              </svg>
            </span>
          </span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="font-serif-custom text-4xl sm:text-5xl md:text-[3.5rem] font-bold mb-6 leading-tight"
          style={{ color: COLORS.textDark }}
        >
          Pathways to Inner <span className="italic" style={{ color: COLORS.orangeAccent }}>Wisdom</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
          style={{ color: COLORS.textGray }}
        >
          Choose the guidance that resonates with your current journey. Each offering is crafted with love to support your unique path.
        </motion.p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 items-stretch"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {services.map((card, index) => {
          const isReadings = card.isAccent;

          return (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className={`relative w-[387px] h-[476px] rounded-[36px] border-[9px] overflow-hidden transition-shadow duration-300 hover:shadow-2xl group flex flex-col ${isReadings ? 'shadow-lg border-white' : 'shadow-md border-white'
                }`}
              style={{
                backgroundColor: isReadings ? COLORS.orangeAccent : '#FFFCDD',
              }}
            >
              {isReadings ? (
                <>
                  <div className="flex justify-center items-center w-full h-[300px] mt-4">
                    <div
                      className="w-[347px] h-[275px] overflow-hidden"
                      style={{
                        borderTopLeftRadius: '24px',
                        borderTopRightRadius: '24px',
                        borderBottomRightRadius: '25px',
                        borderBottomLeftRadius: '25px',
                      }}
                    >
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="px-8 pb-8 pt-4 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="font-serif-custom font-bold text-2xl mb-2 text-white">
                        {card.type}
                      </h3>
                      <p className="font-sans-custom text-white/90 text-sm leading-relaxed mb-6">
                        {card.title}
                      </p>
                    </div>

                    <div className="flex justify-between items-center -mt-3">
                      <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-white/20 text-white backdrop-blur-md">
                        Sessions
                      </span>
                      <ArrowButton isAccent={true} />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="p-8 flex flex-col h-full relative z-10">

                    <div className="flex justify-between items-start mb-6">
                      <span
                        className="px-4 py-1.5 rounded-full text-xs font-bold border"
                        style={{
                          borderColor: COLORS.orangeAccent,
                          color: COLORS.tagText,
                          backgroundColor: 'transparent',
                        }}
                      >
                        {card.type}
                      </span>

                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowButton isAccent={false} />
                      </div>
                    </div>

                    <div className="mb-4">
                      <h3 className="font-serif-custom font-bold text-2xl mb-2 text-gray-900">
                        {card.title}
                      </h3>
                      <p
                        className="font-sans-custom text-sm font-medium leading-relaxed"
                        style={{ color: COLORS.orangeAccent }}
                      >
                        {card.subtitle}
                      </p>
                    </div>

                    <div className="flex justify-center items-center w-full h-[300px] mt-auto mb-4">
                      <div
                        className="w-[347px] h-[275px] overflow-hidden"
                        style={{
                          borderTopLeftRadius: '24px',
                          borderTopRightRadius: '24px',
                          borderBottomRightRadius: '25px',
                          borderBottomLeftRadius: '25px',
                        }}
                      >
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>

                    <div className="absolute top-8 right-8">
                      <ArrowButton isAccent={false} />
                    </div>
                  </div>
                </>
              )}
            </motion.div>

          );
        })}
      </motion.div>

      <div className="text-center">
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="py-4 px-10 rounded-full font-bold text-lg shadow-lg shadow-orange-200/50 flex items-center gap-2 mx-auto"
          style={{ backgroundColor: COLORS.orangeAccent, color: 'white' }}
        >
          Book a Session <ArrowUpRight size={18} strokeWidth={3} />
        </motion.button>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div
      className="w-full relative pt-20 px-4 sm:px-8 font-sans overflow-hidden"
      style={{
        background: '#FFFCDD',
        backgroundImage:
          'radial-gradient(53.82% 53.82% at 54.61% 46.18%, rgba(255, 89, 0, 0.18) 0%, rgba(255, 0, 0, 0) 100%)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,600&display=swap');

          .font-serif-custom { font-family: 'Playfair Display', serif; }
          .font-sans-custom { font-family: 'Inter', sans-serif; }

          .custom-dashed-line {
            background-image: linear-gradient(to right, #E0E0E0 50%, rgba(255,255,255,0) 0%);
            background-position: bottom;
            background-size: 24px 2px;
            background-repeat: repeat-x;
            height: 2px;
          }
        `}
      </style>

      <div className="max-w-[1200px] mx-auto relative z-10">
        <ServicesSection />
      </div>
    </div>
  );
};

export default App;