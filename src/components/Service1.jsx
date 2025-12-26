import React from 'react'
import { motion } from 'framer-motion';
import servicesIcon from '/SVG.png';
import leftArrow from '../assets/Left arrow design.png';
import rightArrow from '../assets/Right arrow design.png';


const Service1 = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center justify-center px-6 md:px-8 pt-32 -mb-7 relative bg-[#FFFCDD]"
        style={{
          background: "#FFF8E1",
          backgroundImage: "linear-gradient(0deg, rgba(254,181,102,0.15) 0%, rgba(255,126,29,0.15) 100%)",
        }}
      >

        <style>
          {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@0,600;0,700;1,500;1,600&display=swap');
          .font-serif-custom { font-family: 'Playfair Display', serif; }
          .font-sans-custom { font-family: 'Inter', sans-serif; }
        `}
        </style>
        {/* Background Decor Container - matches Books page */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {/* Gradient blobs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="absolute top-20 left-10 w-32 h-32 bg-orange-300 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="absolute bottom-20 right-10 w-40 h-40 bg-orange-200 rounded-full blur-3xl"
          />

          {/* Left Arrow Design */}
          <motion.img
            src={leftArrow}
            alt="Left decoration"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute -left-20 top-[20%] -translate-y-1/2 w-[350px] md:w-[450px] lg:w-[550px] h-auto opacity-90"
          />

          {/* Right Arrow Design */}
          <motion.img
            src={rightArrow}
            alt="Right decoration"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute -right-20 top-[20%] -translate-y-1/2 w-[350px] md:w-[450px] lg:w-[550px] h-auto opacity-90"
          />
        </div>

        <div className="w-full max-w-[1400px] text-center relative">

          {/* Services Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center mb-6 md:mb-8"
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-white border-1 border-[#FF5900] rounded-full shadow-md">
              <img src={servicesIcon} alt="Services" className="w-5 h-5" />
              <span className="text-[#FF5900] font-semibold text-base">Services</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="mb-8 md:mb-1"
          >
            <h1 className="text-[48px] leading-[65px] font-medium italic text-center" style={{ fontFamily: 'Playfair Display' }}>
              <span className="text-[#2E3D4C] drop-shadow-sm">60 Days </span>
              <span className="text-[#2E3D4C4D]">of</span>
            </h1>
            {/* SVG at left-top corner */}
            <svg
              width="36"
              height="30"
              viewBox="0 0 36 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-32 left-16 md:top-34 md:left-112"
            >
              <path d="M16.5723 29.4199C16.3192 30.3282 14.2535 29.6914 7.76096 26.734C0.890349 23.5989 -0.510937 22.6568 0.145691 21.7354C1.06423 20.4795 16.944 27.9403 16.5723 29.4199Z" fill="#FF5900" />
              <path d="M32.8458 0.242371C35.4989 1.18854 35.6773 1.76577 35.3248 8.21682C34.9677 14.8802 34.6655 16.085 33.4128 16.1233C31.141 16.1833 30.6707 14.3892 30.7019 6.1259C30.7284 0.029375 30.8875 -0.456004 32.8458 0.242371Z" fill="#FF5900" />
              <path d="M14.9151 4.14792C16.8318 4.80296 17.3911 5.43043 18.831 8.49765C23.0676 17.6125 26.8166 23.7858 23.1113 22.4358C21.5953 21.8952 20.633 20.2823 15.323 9.78594C12.415 3.96963 12.345 3.28839 14.9151 4.14792Z" fill="#FF5900" />
            </svg>

            <h2 className="text-[48px] leading-[65px] font-bold italic text-center text-[#FF5900] drop-shadow-md" style={{ fontFamily: 'Playfair Display' }}>
              1-Minute Meditations
            </h2>

          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-[#36415399] text-base md:text-lg max-w-3xl mx-auto font-normal"
          >
            Explore Swami's transformative offerings—from healing courses to storytelling events.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="text-[#36415399] text-base md:text-lg  max-w-3xl mx-auto mb-16 md:mb-14 font-medium"
          >
            Choose what resonates with your journey.
          </motion.p>
        </div>
      </motion.div>
    </>
  )
}

export default Service1
