import React from 'react';
import { motion } from 'framer-motion';

// Asset Imports
import flowerSvg from '../assets/flower.svg';
import meditationRoom from '/card1.png';
import innerResilienceImg from '/innerresilance.png';
import creativeCircleImg from '/creativecircle.png';
import pathwaysBg from '/f313dd5310269f18c4a7c0bf4af4d6a3dab7aa9f.png';

// --- Constants & Data ---
const SERVICES_DATA = [
  {
    id: 1,
    title: "Awakening Presence",
    subtitle: "Cracking The Spiritual Code",
    description: "A transformative journey designed to awaken inner calm and energy. Based on the spiritual principles of presence.",
    image: meditationRoom,
    badgeText: "Online Experience",
    badgeStyles: "bg-[#FFFFFFE5] text-[#1F2A2E]",
    cardBg: "bg-[#FFFCDD]",
    borderColor: "border-[#FFFFFF]",
    features: ["6 guided sessions", "Meditation practices", "Personal reflection exercises", "Community support"],
    ctaText: "Enroll Now",
    delay: 0,
  },
  {
    id: 2,
    title: "Inner Resilience",
    subtitle: "Personal Stories, Actionable Practices",
    description: "Build an unshakeable core. This experience serves as a deep-dive follow-up to the mindset workbook.",
    image: innerResilienceImg,
    badgeText: "Online Experience",
    badgeStyles: "bg-[#E9E0FAE5] text-[#6B21A8]",
    cardBg: "bg-[#FAF7F3]",
    borderColor: "border-[#FFD9B34D]",
    features: ["Guided Sessions", "Actionable daily practices", "Group discussions"],
    ctaText: "Enroll Now",
    delay: 0.15,
  },
  {
    id: 3,
    title: "Creative Story Circle",
    subtitle: "Find Your Gifts — Elevate Your Life",
    description: "A monthly storytelling circle for those who have completed inner healing and are ready to share their voice.",
    image: creativeCircleImg,
    badgeText: "Advanced Integration",
    badgeStyles: "bg-[#CFF6E4E5] text-[#115E59]",
    cardBg: "bg-[#FFFCDD]",
    borderColor: "border-[#FFFFFF]",
    features: ["Creative expression exercises", "Gift discovery sessions", "Story sharing circles", "Personal breakthrough work"],
    ctaText: "Join the Circle",
    delay: 0.3,
  },
];

// --- Sub-components ---

const ServiceCard = ({ data }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: data.delay, ease: "easeOut" }}
    whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
    className={`rounded-[36px] ${data.cardBg} overflow-hidden border-[9px] ${data.borderColor} shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col w-full max-w-md mx-auto`}
  >
    {/* Image Section */}
    <div className="relative">
      <img src={data.image} alt={data.title} className="w-full h-64 object-cover" />
      <div className="absolute top-6 left-6">
        <span className={`inline-block px-5 py-1.5 rounded-full text-sm font-bold shadow-md ${data.badgeStyles}`}>
          {data.badgeText}
        </span>
      </div>
    </div>

    {/* Content Section */}
    <div className="p-8 md:p-6 flex flex-col h-full">
      <h3 className="text-[28px] font-serif-custom font-bold text-[#2E3D4C] leading-[32px] mb-1">
        {data.title}
      </h3>
      <p className="text-[20px] text-[#F08B2D] mb-3">{data.subtitle}</p>
      <p className="text-base text-[#6B6B6B] mb-5 leading-relaxed">{data.description}</p>

      {/* Features */}
      <div className="space-y-3 mb-6">
        {data.features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <svg width="20" height="18" viewBox="0 0 20 18" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M17.9536 0.653894C16.8042 1.44607 16.2349 1.91271 14.817 3.22576C13.6031 4.3435 13.6246 4.33264 13.2809 3.97454C12.572 3.20406 9.97235 2.50954 9.23117 2.91106C8.87664 3.09554 8.91969 3.4645 9.29564 3.4645C10.3161 3.47535 11.2614 3.95283 12.0671 4.63649C12.7867 5.25504 12.7867 5.22248 11.7663 6.24251C10.6706 7.32768 9.11302 9.11822 8.24288 10.2793L7.57688 11.1692L7.01831 10.3337C5.69706 8.33689 4.2684 7.34942 3.38757 7.816C3.0653 7.98966 3.11901 8.09819 4.08578 9.12914C4.9344 10.0298 5.81523 11.3103 6.43827 12.5582C6.94312 13.5675 8.18921 13.5675 9.03783 12.1134C9.65016 11.0607 11.2292 9.05318 12.5289 7.68582L13.6891 6.45956L13.9683 7.08898C16.4605 12.7211 10.3805 19.2429 5.2674 16.4215C0.0468195 13.535 1.22843 4.27838 6.92169 3.45365C8.03883 3.29088 8.06026 2.91105 6.95384 2.76999C4.0965 2.37932 0.444276 5.79758 0.0575628 9.2051C-0.672893 15.7053 5.67561 19.9374 11.8844 17.1051C15.6549 15.3905 17.4165 9.22675 15.0855 5.97124C14.9137 5.73254 14.774 5.50466 14.774 5.45035C14.774 5.22248 16.6968 3.4862 18.7378 1.90184C21.0365 0.11131 19.8442 -0.648318 17.9536 0.653894Z" fill="#FF6916" />
            </svg>
            <span className="text-base text-[#6B6B6B]">{feature}</span>
          </div>
        ))}
      </div>

      {/* Tools Badge */}
      <div className="mt-auto">
        <div className="flex justify-center w-full mb-6">
          <div className="flex items-center justify-center w-full bg-[#FFF9DB] border border-[#FF823733] rounded-tl-[24px] rounded-br-[24px] gap-[8px] px-4 py-2 hover:bg-orange-50 transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M7.34496 1.87605" stroke="#FF5900" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[#FF5900] font-semibold text-sm">On-the-Go Meditation Tools</span>
          </div>
        </div>
        <hr className="border-[#E5E7EB] mb-6" />
        <button className="flex w-fit mx-auto bg-[#FF5722] text-white py-3 px-10 rounded-full text-lg font-bold hover:bg-[#E64A19] transition-all duration-300 shadow-lg hover:shadow-xl">
          {data.ctaText}
        </button>
      </div>
    </div>
  </motion.div>
);

// --- Main Component ---

const Service2 = () => {
  return (
    <div className="min-h-screen px-6 md:px-8 pt-32 md:pt-40 pb-20 md:pb-28 relative overflow-hidden" style={{ background: '#FFFFFF' }}>
      
      {/* Flower Decoration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        whileInView={{ opacity: 0.2, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-132 md:h-132 z-10"
      >
        <img src={flowerSvg} alt="Flower decoration" className="w-full h-full grayscale opacity-10" />
      </motion.div>

      <div className="w-full max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16 md:mb-20 -mt-26"
        >
          <h2 style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: '48px', lineHeight: '65px', textAlign: 'center' }}>
            <span className="text-[#2C3844]">Experiential</span> <span className="text-[#FF5A1F]" style={{ fontStyle: 'italic' }}>Service</span>
          </h2>
          <p style={{ fontFamily: 'SF Pro, sans-serif', fontWeight: 700, fontStyle: 'italic', fontSize: '20px', lineHeight: '25px', textAlign: 'center' }} className="mt-3">
            <span className="text-[#2C3844]">Limited seats</span> <span className="text-[#64748B] font-normal">available for more personal interaction.</span>
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-20 md:mb-28">
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.id} data={service} />
          ))}
        </div>

        {/* Advanced Pathways Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[36px] p-10 md:p-10 relative overflow-hidden shadow-lg border-[9px] border-white"
          style={{
            backgroundImage: `url(${pathwaysBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <h2 className="text-4xl md:text-5xl text-center text-[#1F2A2E] mb-12 md:mb-16 leading-tight" style={{ fontFamily: 'Playfair Display' }}>
            <span className="font-bold">Advanced</span> <span className="text-[#FF6916] italic">Pathways</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
            {/* Advanced CEU Trainings */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-15 h-15 bg-white rounded-full flex items-center justify-center shadow-md">
                  <svg width="23" height="19" viewBox="0 0 23 19" fill="none">
                    <path d="M8.73 1.21892C7.03641 0.410328 4.66922 0.014234 1.5 0.000171524C1.20111 -0.00388921 0.908088 0.0832662 0.660002 0.250015C0.456372 0.387654 0.289683 0.573222 0.174597 0.790397C0.0595116 1.00757 -0.000444544 1.2497 2.4815e-06 1.49548V14.9064C2.4815e-06 15.813 0.645002 16.4969 1.5 16.4969C4.83141 16.4969 8.17313 16.8081 10.1747 18.7C10.2021 18.726 10.2365 18.7434 10.2737 18.75C10.3108 18.7566 10.3491 18.7521 10.3838 18.7371C10.4185 18.7222 10.4479 18.6973 10.4686 18.6657C10.4893 18.6341 10.5002 18.5971 10.5 18.5594V2.75736C10.5001 2.65075 10.4772 2.54537 10.4331 2.44833C10.3889 2.3513 10.3245 2.26486 10.2441 2.19486C9.78559 1.80291 9.2763 1.47463 8.73 1.21892ZM21.84 0.248609C21.5918 0.0822749 21.2988 -0.00439389 21 0.000171524C17.8308 0.014234 15.4636 0.408453 13.77 1.21892C13.2237 1.47416 12.7143 1.80179 12.2555 2.19298C12.1752 2.26309 12.1109 2.34955 12.0668 2.44657C12.0228 2.5436 12 2.64893 12 2.75548V18.5585C12 18.5947 12.0107 18.6302 12.0307 18.6604C12.0508 18.6907 12.0793 18.7143 12.1128 18.7284C12.1462 18.7424 12.1831 18.7463 12.2187 18.7395C12.2544 18.7327 12.2872 18.7156 12.3131 18.6902C13.5164 17.4949 15.6281 16.4955 21.0019 16.496C21.3997 16.496 21.7812 16.3379 22.0625 16.0566C22.3438 15.7753 22.5019 15.3938 22.5019 14.996V1.49595C22.5024 1.24968 22.4423 1.00707 22.3269 0.789526C22.2115 0.571985 22.0442 0.386212 21.84 0.248609Z" fill="#FF6916" />
                  </svg>
                </div>
              </div>
              <h3 className="text-[20px] md:text-[24px] font-bold text-[#2E3D4C] mb-3" style={{ fontFamily: 'Playfair Display' }}>Advanced CEU Trainings</h3>
              <p className="text-[#FF6916] font-semibold text-lg">Coming soon</p>
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#FF6916] transform -translate-x-1/2"></div>

            {/* Certification Programs */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-15 h-15 bg-white rounded-full flex items-center justify-center shadow-md">
                  <svg width="21" height="18" viewBox="0 0 21 18" fill="none">
                    <path d="M1.5 0C1.10218 0 0.720644 0.158035 0.43934 0.43934C0.158035 0.720644 0 1.10218 0 1.5V12C0 12.3978 0.158035 12.7794 0.43934 13.0607C0.720644 13.342 1.10218 13.5 1.5 13.5H10.5V18L13.5 16.125L16.5 18V13.5H19.5C19.8978 13.5 20.2794 13.342 20.5607 13.0607C20.842 12.7794 21 12.3978 21 12V1.5C21 1.10218 20.842 0.720644 20.5607 0.43934C20.2794 0.158035 19.8978 0 19.5 0H1.5ZM1.5 1.5H7.5V3H1.5V1.5ZM10.5 1.5L13.5 3.375L16.5 1.5V5.25L19.5 6.75L16.5 8.25V12L13.5 10.125L10.5 12V8.25L7.5 6.75L10.5 5.25V1.5ZM1.5 4.5H6V6H1.5V4.5ZM1.5 7.5H6V9H1.5V7.5ZM1.5 10.5H7.5V12H1.5V10.5Z" fill="#FF5722" />
                  </svg>
                </div>
              </div>
              <h3 className="text-[20px] md:text-[24px] font-bold text-[#2E3D4C] mb-3" style={{ fontFamily: 'Playfair Display' }}>Certification Programs</h3>
              <p className="text-[#FF6916] font-semibold text-lg">Coming soon</p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Service2;