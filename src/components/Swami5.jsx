import React from "react";
import {
  BookOpen,
  ArrowRight,
  ExternalLink,
  Video,
  Users,
  Calendar,
  Play,
  Copy,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

const COLORS = {
  background: "#FFFDF7",
  orangeAccent: "#FF6916",
  textDark: "#2E3D4C",
  textGray: "#555555",
  shelfColor: "#FFFFFF",
  shadow: "rgba(0,0,0,0.1)",
  videoBorder: "#FF5520",
  cardYellow: "rgba(255, 247, 165, 0.3)",
  cardMint: "rgba(217, 247, 232, 0.3)",
  cardPink: "rgba(252, 226, 255, 0.3)",
  iconBgYellow: "#FF59001A",
  iconBgMint: "#FF59001A",
  iconBgPink: "#FF59001A",
  iconColor: "#FF5520",
  cardBorder: "#FFFFFF",
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// --- Reusable Books Component (The "Plate" and Books) ---
const BooksDisplay = () => (
  <div className="relative w-full h-[320px] sm:h-[400px] flex items-end justify-center perspective-1000">
    <div className="relative z-10 flex items-end gap-1 mb-4">
      {/* Book 1 */}
      <div className="relative w-[130px] sm:w-[220px] h-[220px] sm:h-[400px] transform rotate-y-12 translate-x-4 z-20 transition-transform duration-500 hover:z-30 hover:-translate-y-2 group">
        <img
          src="/e7ba2131fed86881416b77e4fdf854e364d8299f.png"
          alt="The Ayurveda Encyclopedia"
          className="w-full h-full object-cover rounded-r-md"
        />
      </div>

      {/* Book 2 */}
      <div className="relative ml-6 sm:ml-12 w-[140px] sm:w-[230px] h-[230px] sm:h-[400px] transform -translate-x-8 z-10 transition-transform duration-500 hover:z-30 hover:-translate-y-2">
        <img
          src="/c449ba56f1d781ab9cba0cba8840fc1c2d2beea8.png"
          alt="The Magic of the Blessed Mother's Miracle"
          className="w-full h-full object-cover rounded-r-sm"
        />
      </div>
    </div>

    {/* The Shelf / Plate */}
    <div className="absolute bottom-0 w-[100%] h-6 sm:h-8 bg-white shadow-lg rounded-sm transform -skew-x-12 origin-bottom-left">
      <div className="absolute top-full left-0 w-full h-2 sm:h-3 bg-gray-100 transform skew-x-12 origin-top-left"></div>
    </div>

    {/* Shelf Shadow/Glow */}
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[80%] h-4 bg-black/20 blur-xl rounded-full"></div>
  </div>
);

const BestsellingBooks = () => {
  return (
    <div
      className="w-full relative py-8 lg:py-12 px-4 sm:px-8 font-sans overflow-hidden flex items-center justify-center min-h-[90vh]"
      style={{
        background: "#FFFCDD",
      }}
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Dancing+Script:wght@600&display=swap');
          .font-serif-custom { font-family: 'Playfair Display', serif; }
          .font-sans-custom { font-family: 'Inter', sans-serif; }
          .font-script-custom { font-family: 'Dancing Script', cursive; }
        `}
      </style>

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-8">

          {/* LEFT COLUMN */}
          <motion.div
            className="w-full lg:w-5/12 flex flex-col items-start text-left"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Top Badge */}
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
              <div className="relative w-[250px] h-auto">
                <img
                  src="/name.png"
                  alt="Name Badge"
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h2
              variants={fadeInUp}
              className="font-serif-custom text-4xl sm:text-[3.5rem] font-bold leading-[1.1] mb-6"
              style={{ color: COLORS.textDark }}
            >
              Bestselling Books <br />
              <span className="relative inline-block mt-2">
                Loved
                <span
                  className="italic ml-3 relative block sm:inline sm:ml-3"
                  style={{ color: COLORS.orangeAccent }}
                >
                  Worldwide
                  {/* Sunburst SVG */}
                  <span className="absolute -right-6">
                    <svg
                      width="33"
                      height="32"
                      viewBox="0 0 33 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0.627346 17.8777C-0.315415 17.8577 -0.21062 15.6986 1.04478 8.67555C2.37853 1.24216 2.94374 -0.348935 3.99917 0.0587486C5.44366 0.637212 2.15284 17.871 0.627346 17.8777Z" fill="#FF5900" />
                      <path d="M32.9286 26.409C32.6697 29.2139 32.1548 29.5299 25.8177 30.7878C19.2739 32.0939 18.0317 32.0999 17.6841 30.8957C17.0627 28.7097 18.6841 27.8093 26.6972 25.7908C32.6099 24.305 33.1196 24.3388 32.9286 26.409Z" fill="#FF5900" />
                      <path d="M24.6994 10.0065C24.54 12.0258 24.0708 12.7231 21.4563 14.8786C13.6764 21.2428 8.6254 26.4053 9.01456 22.481C9.16248 20.8782 10.4864 19.5461 19.3385 11.7995C24.2522 7.54029 24.8948 7.30352 24.6994 10.0065Z" fill="#FF5900" />
                    </svg>
                  </span>
                </span>
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p variants={fadeInUp} className="font-sans-custom text-lg text-[#36415399] leading-relaxed mb-6 max-w-md">
              <span className="font-bold ">
                Transform your life
              </span>{" "}
              with wisdom from decades of{" "}
              <span className="italic">
                healing, spirituality,
              </span>{" "}
              and{" "}
              <span className="font-bold ">
                divine storytelling.
              </span>
            </motion.p>

            {/* --- MOBILE ONLY: Books Display (Between Text and Buttons) --- */}
            <motion.div variants={fadeInUp} className="block lg:hidden w-full mb-8">
              <BooksDisplay />
            </motion.div>

            {/* Amazon Badge */}
            <motion.div variants={fadeInUp} className="w-52 h-32 relative hidden sm:block">
              <img
                src="/63186e0befac4ec084fa7e3401c22dc690074402.png"
                alt="Amazon Best Seller Badge"
                className="w-full h-full object-contain drop-shadow-md"
              />
            </motion.div>

            {/* Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <div className="relative inline-block w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-white shadow-lg shadow-orange-200 hover:shadow-orange-300 relative z-10"
                  style={{ backgroundColor: COLORS.orangeAccent }}
                >
                  Buy on Amazon
                </motion.button>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold bg-white border border-orange-200 text-orange-500 hover:bg-orange-50 transition-colors duration-200"
              >
                Explore More Books
              </motion.button>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN - DESKTOP ONLY */}
          <motion.div
            className="hidden lg:flex w-full lg:w-7/12 relative items-end justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <BooksDisplay />
          </motion.div>

        </div>
      </div>
    </div>
  );
};

const Card = ({
  title,
  description,
  stats,
  buttonText,
  bgColor,
  iconBgColor,
  primaryButton = true,
}) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ y: -8, transition: { duration: 0.3 } }}
    className="relative rounded-3xl p-4 flex flex-col justify-between h-full min-h-[350px] transition-shadow duration-300 hover:shadow-2xl overflow-hidden border-4"
    style={{
      backgroundColor: bgColor,
      borderColor: COLORS.cardBorder,
      boxShadow:
        "0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)",
    }}
  >
    <div className="absolute top-0 right-0 w-[150px] h-[150px] opacity-15">
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full transform translate-x-1/4 -translate-y-1/4"
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="#fefce8"
          strokeWidth="5"
          fill="none"
        />
        <path
          d="M50 5L60 50L95 50L60 60L50 95L40 60L5 50L40 40L50 5Z"
          fill="#FFF7CC"
        />
      </svg>
    </div>

    <div>
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center mb-6 relative z-10 border border-[#FF6916] border-1"
        style={{
          backgroundColor: iconBgColor,
          color: COLORS.iconColor,
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        }}
      >
        {title.includes("Storytelling") && (
          <Video size={24} strokeWidth={2.5} />
        )}
        {title.includes("Leadership") && <Users size={24} strokeWidth={2.5} />}
        {title.includes("Wisdom") && <Calendar size={24} strokeWidth={2.5} />}
      </div>
      <h3 className="font-serif-custom font-bold text-2xl mb-4 text-[#2C3844] leading-snug">
        {title}
      </h3>
      <p className="text-[#2C3844B2] text-sm leading-relaxed mb-6 font-sans-custom">
        {description}
      </p>

      <div className="flex gap-4 text-xs font-medium text-[#2C384499] mb-8 font-sans-custom">
        <span
          className="flex items-center gap-1 font-semibold"
          style={{ color: COLORS.textGray }}
        >
          <Users size={14} strokeWidth={1.5} className="text-[#2C384499]" />{" "}
          {stats[0]}
        </span>
        <span
          className="flex items-center gap-1 font-semibold"
          style={{ color: COLORS.textGray }}
        >
          <Calendar size={14} strokeWidth={1.5} className="text-[#2C384499]" />{" "}
          {stats[1]}
        </span>
      </div>
    </div>

    <div
      className="absolute bottom-0 left-0 w-full h-20 pointer-events-none"
      style={{
        background: `linear-gradient(to top, ${bgColor} 50%, transparent)`,
      }}
    ></div>

    {primaryButton ? (
      <button
        className="w-full py-3 rounded-xl font-bold text-white text-sm relative z-20 transition-opacity hover:opacity-90 shadow-md"
        style={{ backgroundColor: COLORS.orangeAccent }}
      >
        {buttonText}
      </button>
    ) : (
      <button
        className="w-full py-3 rounded-xl font-bold text-sm bg-white border-2 relative z-20 transition-colors hover:bg-orange-50"
        style={{ borderColor: COLORS.orangeAccent, color: COLORS.orangeAccent }}
      >
        {buttonText}
      </button>
    )}
  </motion.div>
);

const CoursesAndEvents = () => {
  return (
    <div className="w-full relative py-10  px-4 sm:px-8 font-sans bg-gradient-to-b from-[#FFFCDD] to-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="w-full rounded-[2rem] overflow-hidden shadow-2xl relative border-[4px] mb-20"
          style={{ borderColor: COLORS.orangeAccent }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative w-full aspect-video bg-gray-900 group cursor-pointer">
            <img
              src="/0c81b1e1328bc17db513b001da625beb02818b53.jpg"
              alt="Video Thumbnail"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-50 transition-opacity"
            />

            <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-start z-10">
              <h3 className="text-white/90 text-sm sm:text-lg font-medium drop-shadow-md">
                Swami the Orange Cowboy — Engaging Talks & Transformative
                Training
              </h3>
              <Copy
                className="text-white/80 hover:text-white cursor-pointer"
                size={20}
              />
            </div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-16 h-12 bg-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-red-700 transition-colors"
              >
                <Play fill="white" stroke="none" size={24} className="ml-1" />
              </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 w-full p-6 sm:p-10 flex justify-between items-end z-10">
              <h2 className="font-serif-custom text-4xl sm:text-6xl text-white font-bold drop-shadow-lg">
                The <span style={{ color: COLORS.orangeAccent }}>Orange</span>{" "}
                Cowboy
              </h2>

              <div className="flex items-center gap-1">
                <div className="w-6 h-4 bg-white rounded-sm"></div>
                <span className="text-white font-bold text-sm">YouTube</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeInUp} className="max-w-xl">
            <h2 className="text-4xl sm:text-6xl text-[#2E3D4C] mb-6 font-serif-custom">
              <span className="font-bold">Courses</span>
              <span className="font-script-custom mx-3 font-normal text-6xl text-[#2E3D4C]">
                &
              </span>
              <span
                className="font-bold italic relative"
                style={{ color: COLORS.orangeAccent }}
              >
                Events
                <span className="absolute -right-6">
                  <svg
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.627346 17.8777C-0.315415 17.8577 -0.21062 15.6986 1.04478 8.67555C2.37853 1.24216 2.94374 -0.348935 3.99917 0.0587486C5.44366 0.637212 2.15284 17.871 0.627346 17.8777Z"
                      fill="#FF5900"
                    />
                    <path
                      d="M32.9286 26.409C32.6697 29.2139 32.1548 29.5299 25.8177 30.7878C19.2739 32.0939 18.0317 32.0999 17.6841 30.8957C17.0627 28.7097 18.6841 27.8093 26.6972 25.7908C32.6099 24.305 33.1196 24.3388 32.9286 26.409Z"
                      fill="#FF5900"
                    />
                    <path
                      d="M24.6994 10.0065C24.54 12.0258 24.0708 12.7231 21.4563 14.8786C13.6764 21.2428 8.6254 26.4053 9.01456 22.481C9.16248 20.8782 10.4864 19.5461 19.3385 11.7995C24.2522 7.54029 24.8948 7.30352 24.6994 10.0065Z"
                      fill="#FF5900"
                    />
                  </svg>
                </span>
              </span>
            </h2>
            <p className="text-[#36415399] text-lg leading-relaxed font-sans-custom">
              <span className="font-bold ">
                Explore Swami’s transformative offerings
              </span>{" "}
              —from healing courses to storytelling events. Choose what
              resonates with your journey.
            </p>
          </motion.div>

          <motion.button
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center  gap-2 px-8 py-3.5 rounded-full font-bold text-white shadow-lg transition-transform hover:shadow-orange-200"
            style={{ backgroundColor: COLORS.orangeAccent }}
          >
            Book a Session
            <ArrowUpRight size={20} strokeWidth={2.5} />
          </motion.button>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          

          <Card
            title="Storytelling for Healing"
            description="Learn the art of therapeutic storytelling. Transform your experiences into powerful healing narratives."
            stats={["500+ enrolled", "6 weeks"]}
            buttonText="Join Now"
            bgColor={COLORS.cardYellow}
            iconBgColor={COLORS.iconBgYellow}
            primaryButton={true}
          />

          <Card
            title="Open Mic Leadership"
            description="Master the skills to host transformative open mic events. Create safe spaces for authentic expression."
            stats={["300+ enrolled", "4 weeks"]}
            buttonText="Join Now"
            bgColor={COLORS.cardMint}
            iconBgColor={COLORS.iconBgMint}
            primaryButton={true}
          />

          <Card
            title="Live Wisdom Sessions"
            description="Join our monthly live webinars. Direct access to Swami's teachings and community Q&A."
            stats={["1000+ members", "Monthly"]}
            buttonText="Join Now"
            bgColor={COLORS.cardPink}
            iconBgColor={COLORS.iconBgPink}
            primaryButton={true}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div>
      <BestsellingBooks />
      <CoursesAndEvents />
    </div>
  );
}