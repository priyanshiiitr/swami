import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

// --- Styling Constants ---
const COLORS = {
  background: '#FFF8DC',    // Matching the warm cream background
  orangeAccent: '#FF5520',  // Vibrant brand orange
  textDark: '#1C1C1C',      // Dark text
  textGray: '#4B5563',      // Body text gray
  cardBorder: '#FF7F50',    // Slightly lighter orange for card borders
  starYellow: '#FBBF24',    // Star color
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

const cardVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

const CommunityReviews = () => {
  const scrollRef = useRef(null);

  // Dummy data for the reviews
  const reviews = [
    {
      name: "Rone wayite",
      image: "/Photo (2).jpg",
      text: "\"Swamiji's storytelling transformed my understanding of healing. His wisdom helped me find joy in the darkest moments of my life.\"",
    },
    {
      name: "Rone wayite",
      image: "/Photo (2).jpg",
      text: "\"The Joy Activation Workshop changed everything for me. I learned to reconnect with my authentic self and discovered a peace I never knew existed.\"",
    },
    {
      name: "Mary Meehan",
      image: "/Photo (2).jpg",
      text: "\"Every Thursday, the Live Wisdom sessions ground me. Being connected to this community has been the greatest blessing.\"",
    },
    {
      name: "John Doe",
      image: "/Photo (2).jpg",
      text: "\"The community support here is unlike anything I've experienced. It feels like coming home every time I log in.\"",
    },
    {
      name: "Sarah Smith",
      image: "/Photo (2).jpg",
      text: "\"A truly transformative experience. I highly recommend these workshops to anyone looking for deeper meaning.\"",
    }
  ];

  // Scroll handler
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400; // Adjust scroll distance as needed
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      className="w-full relative pt-10 px-4 sm:px-8 font-sans overflow-hidden"
      style={{ 
        backgroundColor: COLORS.background,
        backgroundImage: 'radial-gradient(53.82% 53.82% at 54.61% 46.18%, rgba(255, 89, 0, 0.09) 0%, rgba(255, 0, 0, 0) 100%)'
      }}
    >
      {/* Font Injection */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Dancing+Script:wght@600&display=swap');
          
          .font-serif-custom { font-family: 'Playfair Display', serif; }
          .font-sans-custom { font-family: 'Inter', sans-serif; }
          .font-script-custom { font-family: 'Dancing Script', cursive; }
          
          /* Hide scrollbar for Chrome, Safari and Opera */
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          /* Hide scrollbar for IE, Edge and Firefox */
          .no-scrollbar {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-12 gap-6">

          {/* Title Area */}
          <motion.div 
            className="flex items-start gap-2 sm:gap-4 w-full md:w-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {/* Large Quote Icon */}
            <div
              className="transform  sm:block flex-shrink-0"
              style={{ marginTop: "-5px" }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 68 47"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: COLORS.orangeAccent }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.6281 10.587C13.7116 10.3252 14.8191 10.1933 15.93 10.194C24.7275 10.194 31.8572 18.342 31.8572 28.389C31.8572 38.439 24.7275 46.587 15.93 46.587C7.1325 46.587 0 38.442 0 28.389C0 28.095 0.005625 27.798 0.0196875 27.504H0C0 12.339 10.8 0 24.075 0V6.108C19.7691 6.108 15.7978 7.782 12.6281 10.587ZM48.2738 10.587C49.3369 10.329 50.4394 10.194 51.57 10.194C60.3675 10.194 67.5 18.342 67.5 28.389C67.5 38.439 60.3675 46.587 51.57 46.587C42.7725 46.587 35.6428 38.442 35.6428 28.389C35.6428 28.095 35.6484 27.798 35.6625 27.504H35.6428C35.6428 12.339 46.4428 0 59.7178 0V6.108C55.4091 6.108 51.4434 7.782 48.2738 10.587Z"
                />
              </svg>
            </div>


            <h2 className="text-3xl sm:text-5xl md:text-6xl text-gray-800 font-serif-custom leading-tight">
              <span className="font-bold">Community</span>
              <span className="italic font-bold ml-2 sm:ml-4 relative inline-block" style={{ color: COLORS.orangeAccent }}>
                Word's
                {/* Sunburst Decoration on "Word's" */}
                <span className="absolute -right-6 sm:-right-10 top-0 w-8 h-5 sm:w-12 sm:h-8">
                  <svg className="w-full h-full" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.627346 17.8777C-0.315415 17.8577 -0.21062 15.6986 1.04478 8.67555C2.37853 1.24216 2.94374 -0.348935 3.99917 0.0587486C5.44366 0.637212 2.15284 17.871 0.627346 17.8777Z" fill="#FF5900" />
                    <path d="M32.9286 26.409C32.6697 29.2139 32.1548 29.5299 25.8177 30.7878C19.2739 32.0939 18.0317 32.0999 17.6841 30.8957C17.0627 28.7097 18.6841 27.8093 26.6972 25.7908C32.6099 24.305 33.1196 24.3388 32.9286 26.409Z" fill="#FF5900" />
                    <path d="M24.6994 10.0065C24.54 12.0258 24.0708 12.7231 21.4563 14.8786C13.6764 21.2428 8.6254 26.4053 9.01456 22.481C9.16248 20.8782 10.4864 19.5461 19.3385 11.7995C24.2522 7.54029 24.8948 7.30352 24.6994 10.0065Z" fill="#FF5900" />
                  </svg>
                </span>
              </span>
            </h2>
          </motion.div>

          {/* Navigation Buttons */}
          <motion.div 
            className="flex gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-orange-200 flex items-center justify-center bg-amber-100 hover:bg-orange-50 transition-colors text-orange-400 cursor-pointer active:scale-95"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full flex items-center justify-center text-white transition-transform hover:scale-105 cursor-pointer active:scale-95"
              style={{ backgroundColor: COLORS.orangeAccent }}
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        </div>


        {/* ================= CARDS SCROLLER SECTION ================= */}
        <div
          ref={scrollRef}
          className="flex gap-8 pt-12 overflow-x-auto no-scrollbar scroll-smooth pb-8"
        >

          {reviews.map((review, index) => (
            <motion.div 
              key={index} 
              className="relative mt-8 max-w-[350px] md:min-w-[400px] flex-shrink-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariant}
            >

              {/* Profile Image (Absolute positioned to overlap top) */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-24 h-24 rounded-full  overflow-hidden shadow-sm">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Decorative "Sparkles" on Top Border */}
              <div className="absolute top-0 left-1/2 transform -translate-x-24 -translate-y-1/2 z-20 text-orange-500">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" />
                </svg>
              </div>
              <div className="absolute top-0 right-1/2 transform translate-x-24 -translate-y-1/2 z-20 text-orange-500">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" />
                </svg>
              </div>


              {/* Card Container */}
              <motion.div
                className="rounded-3xl border-2 flex flex-col items-center h-full relative bg-[#FFF8DC] hover:shadow-lg transition-shadow duration-300"
                style={{ borderColor: COLORS.orangeAccent }}
                whileHover={{ y: -5 }}
              >
                {/* Content Area */}
                <div className="px-8 pb-8 pt-16 text-center flex-grow flex flex-col justify-center">
                  <h3 className="font-serif-custom font-bold italic text-xl text-gray-800 mb-6">
                    {review.name}
                  </h3>
                  <p className="font-sans-custom text-gray-600 italic leading-relaxed text-lg">
                    {review.text}
                  </p>
                </div>

                {/* Footer Divider Line */}
                <div className="w-full h-[1px] bg-orange-200/50 w-[90%] mx-auto"></div>

                {/* Stars Footer */}
                <div className="py-6 flex gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={24}
                      fill={COLORS.starYellow}
                      color={COLORS.starYellow}
                      className="drop-shadow-sm"
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default CommunityReviews;