import React from 'react';
import { motion } from 'framer-motion';
import honoredRecognition from '../assets/honored recognition img.png';

const Book4 = () => {
    return (
        <section className="py-10 relative overflow-hidden bg-[#FFFCDD]">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-[#FFFCDD] rounded-[36px] p-8 md:p-5 border-9 border-white shadow-xl relative"
                >
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-[40px] font-serif-custom text-[#2E3D4C] leading-tight">
                                <span className='font-bold'>Honored Recognition from</span> <br />
                                <span className="text-[#FF6916] italic">India's Top Scholar</span>
                            </h2>
                            <p className="text-[#36415399] text-[16px] leading-relaxed">
                                In New Delhi, Swami ji had the honor of gifting his bestselling book,<br />
                                <span className="font-bold italic text-[#FF6916]">"The Ayurveda Encyclopedia", to Shankarachara Ji</span>,<br />
                                India's highest spiritual scholar, in a sacred, respectful ceremony.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="rounded-3xl overflow-hidden border-4 border-white shadow-lg relative z-10">
                                <img
                                    src={honoredRecognition}
                                    alt="Honored Recognition Ceremony"
                                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Book4;