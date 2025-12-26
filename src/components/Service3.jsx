import React from 'react';
import { motion } from 'framer-motion';

// Asset Imports
import swamiSpeaker from '../assets/ac4b5ff56816c64fab499363f5b3c9fb0b12b2f5.png';

// --- Configuration Data ---

const PRICING_PLANS = [
  {
    badge: "Basic Plan",
    title: "Group Workshop",
    description: "Learn and heal alongside others in a supportive community setting",
    buttonColor: "bg-[#FEB566] hover:bg-[#ffa04d]",
    features: ['6 Group Sessions', 'Group Learning Environment', 'Downloadable Resources', 'Community Access'],
    isFeatured: false,
    checkColor: "black",
    checkOpacity: "0.25"
  },
  {
    badge: "Enhanced",
    title: "Personal Experience",
    description: "One-on-one guidance tailored to your unique journey",
    buttonColor: "bg-[#FF6916] hover:bg-[#ffa04d]",
    features: ['Everything in Basic', 'Personalized Feedback', 'Live Q&A Sessions', 'Actionable daily practices', 'Exclusive Materials'],
    isFeatured: true,
    checkColor: "#FF6916",
    checkOpacity: "1"
  },
  {
    badge: "VIP Immersive",
    title: "VIP Mentorship",
    description: "Complete transformation with 1:1 coaching and ongoing mentorship.",
    buttonColor: "bg-[#FEB566] hover:bg-[#ffa04d]",
    features: ['Everything in Enhanced', '1:1 Coaching Sessions', 'Personal Assessment', 'Community Leadership', 'Advanced CEU Preparation'],
    isFeatured: false,
    checkColor: "black",
    checkOpacity: "0.25"
  }
];

const YOUTUBE_VIDEOS = [
  {
    id: 1,
    title: "Instant Meditation",
    subtitle: "1-min method for anxiety relief.",
    img: "/y3.png"
  },
  {
    id: 2,
    title: "Beginner's Guide",
    subtitle: "How to sit comfortably for 20 mins.",
    img: "/y2.jpg"
  },
  {
    id: 3,
    title: "The Journey Within",
    subtitle: "A cinematic introduction to the path.",
    img: "/y1.png"
  }
];

// --- Sub-components ---

const PricingCard = ({ plan }) => (
  <div className={`bg-white rounded-[28px] flex flex-col overflow-hidden p-4 ${plan.isFeatured ? 'shadow-2xl relative' : 'shadow-lg'}`}>
    {plan.isFeatured && (
      <div className="absolute top-0 right-0 z-20">
        <div className="bg-[#2D2D2D] text-white px-6 py-2.5 rounded-bl-[1.5rem] text-[11px] font-bold shadow-lg">
          Best choice
        </div>
      </div>
    )}

    <div className={`${plan.isFeatured ? 'bg-[#FF6916]' : 'bg-[#F2F2F2]'} p-8 pb-12 rounded-[21px] relative`}>
      <div className="mb-6">
        <span className="inline-block px-4 py-1.5 bg-white rounded-full text-[10px] font-bold text-gray-500 uppercase tracking-widest shadow-sm">
          {plan.badge}
        </span>
      </div>
      <h3 className={`font-sans font-semibold text-[28px] md:text-[2rem] leading-none ${plan.isFeatured ? 'text-[#444]' : 'text-[#444]'}`}>
        {plan.title}
      </h3>
    </div>

    <div className="p-2 pt-4 flex flex-col flex-grow">
      <p className="font-sans font-medium text-[14px] leading-[19.95px] text-[#111827B2] mb-4">
        {plan.description}
      </p>
      {plan.isFeatured && <br />}
      
      <button className={`w-full ${plan.buttonColor} text-white py-3 rounded-full font-bold text-lg transition-all mb-6 shadow-md`}>
        Book a Session
      </button>

      <div className="space-y-4">
        {plan.features.map((item) => (
          <div key={item} className="flex items-center gap-3">
            <svg width="20" height="18" viewBox="0 0 20 18" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M17.9536 0.653894C16.8042 1.44607 16.2349 1.91271 14.817 3.22576C13.6031 4.3435 13.6246 4.33264 13.2809 3.97454C12.572 3.20406 9.97235 2.50954 9.23117 2.91106C8.87664 3.09554 8.91969 3.4645 9.29564 3.4645C10.3161 3.47535 11.2614 3.95283 12.0671 4.63649C12.7867 5.25504 12.7867 5.22248 11.7663 6.24251C10.6706 7.32768 9.11302 9.11822 8.24288 10.2793L7.57688 11.1692L7.01831 10.3337C5.69706 8.33689 4.2684 7.34942 3.38757 7.816C3.0653 7.98966 3.11901 8.09819 4.08578 9.12914C4.9344 10.0298 5.81523 11.3103 6.43827 12.5582C6.94312 13.5675 8.18921 13.5675 9.03783 12.1134C9.65016 11.0607 11.2292 9.05318 12.5289 7.68582L13.6891 6.45956L13.9683 7.08898C16.4605 12.7211 10.3805 19.2429 5.2674 16.4215C0.0468195 13.535 1.22843 4.27838 6.92169 3.45365C8.03883 3.29088 8.06026 2.91105 6.95384 2.76999C4.0965 2.37932 0.444276 5.79758 0.0575628 9.2051C-0.672893 15.7053 5.67561 19.9374 11.8844 17.1051C15.6549 15.3905 17.4165 9.22675 15.0855 5.97124C14.9137 5.73254 14.774 5.50466 14.774 5.45035C14.774 5.22248 16.6968 3.4862 18.7378 1.90184C21.0365 0.11131 19.8442 -0.648318 17.9536 0.653894Z" 
                fill={plan.checkColor} fillOpacity={plan.checkOpacity} />
            </svg>
            <span className="text-gray-600 font-medium text-sm">{item}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const VideoCard = ({ video }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
    whileHover={{ y: -5, transition: { duration: 0.3 } }}
    className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
  >
    <div className="p-5 pb-8">
      <div className="relative mb-6">
        <img src={video.img} alt={video.title} className="w-full h-auto rounded-2xl object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-8 h-8 text-red-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </div>
        </div>
      </div>
      <h4 className="text-[20px] font-serif font-bold text-[#1F2A2E] leading-[24px] mb-1">
        {video.title}
      </h4>
      <p className="text-base text-[#6B6B6B] mb-6">{video.subtitle}</p>
      <button className="w-full flex items-center justify-center gap-3 border-2 border-[#FFD9B3] rounded-full py-4 px-6 text-slate-800 font-semibold text-base hover:bg-orange-50 transition-all duration-300">
        <svg className="w-6 h-6 text-red-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
        <span>Watch On Youtube</span>
      </button>
    </div>
  </motion.div>
);

// --- Main Component ---

const Service3 = () => {
  return (
    <div className="bg-[#FFFCDD] px-6 md:px-8 py-10">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center mb-10 md:mb-4"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-[#FF5900] rounded-full shadow-md">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M7.34496 1.87605C7.37353 1.72312 7.45468 1.58499 7.57436 1.4856C7.69404 1.3862 7.84472 1.33179 8.00029 1.33179C8.15587 1.33179 8.30655 1.3862 8.42623 1.4856C8.54591 1.58499 8.62706 1.72312 8.65563 1.87605L9.35629 5.58138C9.40606 5.84482 9.53408 6.08713 9.72365 6.2767C9.91322 6.46627 10.1555 6.59429 10.419 6.64405L14.1243 7.34472C14.2772 7.37328 14.4154 7.45443 14.5147 7.57412C14.6141 7.6938 14.6686 7.84447 14.6686 8.00005C14.6686 8.15563 14.6141 8.3063 14.5147 8.42599C14.4154 8.54567 14.2772 8.62682 14.1243 8.65538L10.419 9.35605C10.1555 9.40581 9.91322 9.53383 9.72365 9.7234C9.53408 9.91297 9.40606 10.1553 9.35629 10.4187L8.65563 14.1241C8.62706 14.277 8.54591 14.4151 8.42623 14.5145C8.30655 14.6139 8.15587 14.6683 8.00029 14.6683C7.84472 14.6683 7.69404 14.6139 7.57436 14.5145C7.45468 14.4151 7.37353 14.277 7.34496 14.1241L6.64429 10.4187C6.59453 10.1553 6.46651 9.91297 6.27694 9.7234C6.08737 9.53383 5.84506 9.40581 5.58163 9.35605L1.87629 8.65538C1.72336 8.62682 1.58524 8.54567 1.48584 8.42599C1.38644 8.3063 1.33203 8.15563 1.33203 8.00005C1.33203 7.84447 1.38644 7.6938 1.48584 7.57412C1.58524 7.45443 1.72336 7.37328 1.87629 7.34472L5.58163 6.64405C5.84506 6.59429 6.08737 6.46627 6.27694 6.2767C6.46651 6.08713 6.59453 5.84482 6.64429 5.58138L7.34496 1.87605Z" stroke="#FF5900" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[#FF5900] font-semibold text-sm">Investment in Your Growth</span>
          </div>
        </motion.div>

        {/* Heading & Subheading */}
        <div className="text-center mb-14 md:mb-16 max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="mb-4"
            style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: '48px', lineHeight: '100%' }}
          >
            <span className="text-[#2E3D4C]">Choose Your</span> <span className="text-[#FF6916] italic">Path</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-[#36415399] mb-1" style={{ fontFamily: 'SF Pro, sans-serif', fontSize: '16px', lineHeight: '25px' }}>
              Select the experience level that resonates with your spiritual journey.
            </p>
            <p className="text-[#364153D1]" style={{ fontFamily: 'SF Pro, sans-serif', fontWeight: 858, fontSize: '16px' }}>
              Programs range from <span className="text-[#FF5900]">$200 - $1,400</span> • Flexible options available
            </p>
          </motion.div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 max-w-7xl mx-auto">
          {PRICING_PLANS.map((plan, idx) => (
            <PricingCard key={idx} plan={plan} />
          ))}
        </div>

        {/* Watch Swami Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-20 md:mb-28 max-w-7xl mx-auto"
        >
          <div className="flex justify-between items-start mb-8 md:mb-10">
            <div>
              <h2 style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: '48px', lineHeight: '100%' }}>
                <span className="text-[#2E3D4C]">Watch</span> <span className="text-[#FF6916] italic">Swami</span>
              </h2>
              <p className="text-slate-600 text-sm">Previews of the teaching style and free wisdom.</p>
            </div>
            <a href="#" className="text-[#F08B2D] font-sans font-semibold text-[1.5rem] hover:underline hidden md:flex items-center gap-2 mt-4">
              Visit Youtube Channel <span>→</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {YOUTUBE_VIDEOS.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </motion.div>

        {/* Charities & Wellness Section */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="rounded-[36px] pl-8 pt-5 pb-0 shadow-xl border-[9px] border-white"
          style={{ background: '#FFFCDD' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-1 items-center">
            <div className='mb-5'>
              <span className="inline-block text-xs font-bold text-[#D55E1B] mb-6 rounded-full bg-[#F08B2D1A] py-2 px-4 uppercase tracking-widest">
                INVITE SWAMI TO SPEAK
              </span>
              <h3 className="text-4xl md:text-[30px] font-bold text-[#1F2A2E] mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                Schools, Charities & Wellness Associations
              </h3>
              <p className="text-[#1F2A2ECC] text-base md:text-lg mb-8 leading-relaxed">
                Bring the wisdom of <span className="italic text-[#D55E1B] font-medium">Radiant Light Academy</span> to your organization. Inspiring talks on mindfulness, spiritual resilience, and discovering one's higher purpose.
              </p>
              <button className="bg-[#FF6916] text-white py-4 px-12 rounded-full font-bold hover:bg-[#FF5A1F] transition-all duration-300 shadow-lg hover:shadow-xl">
                Request Speaking
              </button>
            </div>
            
            <div className="flex justify-center md:justify-end lg:-mr-20 -mb-6 lg:mb-0">
              <img src={swamiSpeaker} alt="Wellness Speaker" className="w-full max-w-lg h-[346px] object-contain" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Service3;