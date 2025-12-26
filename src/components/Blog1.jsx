import React from 'react';
import { motion } from 'framer-motion';
import leftArrow from '../assets/Left arrow design.png';
import rightArrow from '../assets/Right arrow design.png';

const Blog1 = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        },
    };

    return (
        <section className="relative pt-34 pb-20 overflow-hidden bg-[#FFFCDD]">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-5%] w-[30%] h-[50%] bg-orange-200/40 blur-[100px] rounded-full mix-blend-multiply" />
                <div className="absolute top-[10%] right-[-5%] w-[30%] h-[50%] bg-orange-300/30 blur-[100px] rounded-full mix-blend-multiply" />

                <motion.img
                    src={leftArrow}
                    alt="Left decoration"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="absolute -left-20 top-[20%] -translate-y-1/2 w-[350px] md:w-[450px] lg:w-[550px] h-auto opacity-90"
                />

                <motion.img
                    src={rightArrow}
                    alt="Right decoration"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="absolute -right-20 top-[20%] -translate-y-1/2 w-[350px] md:w-[450px] lg:w-[550px] h-auto opacity-90"
                />
            </div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="relative z-10 max-w-7xl mx-auto px-6 text-center"
            >
                <motion.div variants={itemVariants} className="flex justify-center mb-8">
                    <span className="inline-flex items-center gap-2 px-8 py-2 rounded-full border border-orange-300 text-orange-500 font-medium bg-white/50 backdrop-blur-sm shadow-sm">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M7.34496 1.876C7.37353 1.72307 7.45468 1.58495 7.57436 1.48555C7.69404 1.38615 7.84472 1.33174 8.00029 1.33174C8.15587 1.33174 8.30655 1.38615 8.42623 1.48555C8.54591 1.58495 8.62706 1.72307 8.65563 1.876L9.35629 5.58134C9.40606 5.84477 9.53408 6.08708 9.72365 6.27665C9.91322 6.46622 10.1555 6.59424 10.419 6.644L14.1243 7.34467C14.2772 7.37324 14.4154 7.45439 14.5147 7.57407C14.6141 7.69375 14.6686 7.84443 14.6686 8C14.6686 8.15558 14.6141 8.30626 14.5147 8.42594C14.4154 8.54562 14.2772 8.62677 14.1243 8.65534L10.419 9.356C10.1555 9.40577 9.91322 9.53379 9.72365 9.72336C9.53408 9.91293 9.40606 10.1552 9.35629 10.4187L8.65563 14.124C8.62706 14.2769 8.54591 14.4151 8.42623 14.5145C8.30655 14.6139 8.15587 14.6683 8.00029 14.6683C7.84472 14.6683 7.69404 14.6139 7.57436 14.5145C7.45468 14.4151 7.37353 14.2769 7.34496 14.124L6.64429 10.4187C6.59453 10.1552 6.46651 9.91293 6.27694 9.72336C6.08737 9.53379 5.84506 9.40577 5.58163 9.356L1.87629 8.65534C1.72336 8.62677 1.58524 8.54562 1.48584 8.42594C1.38644 8.30626 1.33203 8.15558 1.33203 8C1.33203 7.84443 1.38644 7.69375 1.48584 7.57407C1.58524 7.45439 1.72336 7.37324 1.87629 7.34467L5.58163 6.644C5.84506 6.59424 6.08737 6.46622 6.27694 6.27665C6.46651 6.08708 6.59453 5.84477 6.64429 5.58134L7.34496 1.876Z" stroke="#FF5900" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Featured Insights & Articles
                    </span>
                </motion.div>

                <motion.h1 variants={itemVariants} className="text-4xl font-serif-custom md:text-6xl lg:text-7xl text-[#1a3c40] mb-6 leading-tight">
                    Stories That Inspire & <br />
                    <span className="text-[#FF5900] italic relative inline-block">
                        Ideas That Matter
                        <span className="relative inline-block">
                           <svg width="32" height="28" viewBox="0 0 36 30" fill="none" className="absolute left-[40px] lg:left-[66px] -translate-x-1/2 -top-1 lg:top-[10px]">
                                <path d="M18.8876 29.4199C19.1408 30.3282 21.2065 29.6914 27.699 26.734C34.5696 23.5989 35.9709 22.6568 35.3143 21.7354C34.3957 20.4795 18.5159 27.9403 18.8876 29.4199Z" fill="#FF5900" />
                                <path d="M2.61418 0.242371C-0.0389177 1.18854 -0.217382 1.76577 0.135139 8.21682C0.492269 14.8802 0.794415 16.085 2.04718 16.1233C4.31898 16.1833 4.78927 14.3892 4.75806 6.1259C4.73155 0.0293754 4.73155 -0.456004 2.61418 0.242371Z" fill="#FF5900" />
                                <path d="M20.5449 4.14792C18.6282 4.80296 18.0689 5.43043 16.629 8.49765C12.3923 17.6125 8.64335 23.7858 12.3486 22.4358C13.8647 21.8952 14.827 20.2823 20.137 9.78594C23.0449 3.96963 23.115 3.28839 20.5449 4.14792Z" fill="#FF5900" />
                            </svg>
                            m
                        </span>
                    </span>
                </motion.h1>

                <motion.p variants={itemVariants} className="font-sans-custom text-[#36415399] max-w-2xl mx-auto text-lg leading-relaxed">
                    Explore a curated collection of blogs featuring personal journeys, technical innovations, cultural insights, and meaningful perspectives designed to educate, inspire, and spark new thinking.
                </motion.p>
            </motion.div>
        </section>
    );
};

export default Blog1;
