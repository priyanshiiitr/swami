import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import leftBook1 from '../assets/left book1 .png';
import leftBook2 from '../assets/left book 2.png';
import rightBook1 from '../assets/right book 1.png';
import rightBook2 from '../assets/right book 2.png';

const Book2 = () => {
    return (
        <section className="py-10 bg-white relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <svg width="93" height="18" viewBox="0 0 93 18" fill="none">
                            <path d="M21.7891 8.27051H92.4841" stroke="#FF6916" strokeWidth="0.832404" />
                            <path d="M10.5961 0.416209L10.9741 0.24187C10.9242 0.13373 10.8304 0.0521401 10.7163 0.0177442C10.6023 -0.0166516 10.479 -0.000557959 10.3777 0.0619531L10.5961 0.416209ZM22.1706 8.2705L22.2344 8.68178C22.4372 8.65032 22.5868 8.47572 22.5868 8.2705C22.5868 8.06527 22.4372 7.89068 22.2344 7.85921L22.1706 8.2705ZM10.5573 16.6936L10.3376 17.0471C10.4401 17.1107 10.5652 17.1268 10.6804 17.0911C10.7957 17.0554 10.8897 16.9715 10.9383 16.861L10.5573 16.6936ZM0.416443 8.36058L0.132944 8.05587C-0.0348678 8.21199 -0.0448632 8.47441 0.110586 8.64285L0.416443 8.36058ZM10.5961 0.416209L10.2182 0.590549C12.7803 6.14467 18.9724 8.19552 22.1068 8.68178L22.1706 8.2705L22.2344 7.85921C19.1872 7.38648 13.3574 5.40836 10.9741 0.24187L10.5961 0.416209ZM22.1706 8.2705L22.1068 7.85921C20.5013 8.10828 18.1576 8.84001 15.8998 10.2192C13.6398 11.5998 11.4434 13.6435 10.1763 16.5261L10.5573 16.6936L10.9383 16.861C12.1192 14.1746 14.1759 12.2478 16.3338 10.9296C18.4938 9.61005 20.7327 8.91475 22.2344 8.68178L22.1706 8.2705ZM10.5573 16.6936L10.7769 16.34C6.99677 13.9911 3.73127 11.3387 0.722299 8.07831L0.416443 8.36058L0.110586 8.64285C3.17356 11.9618 6.49798 14.6612 10.3376 17.0471L10.5573 16.6936ZM0.416443 8.36058L0.699941 8.6653C4.29354 5.32194 7.31307 2.92981 10.8146 0.770466L10.5961 0.416209L10.3777 0.0619531C6.81774 2.25731 3.75481 4.68621 0.132944 8.05587L0.416443 8.36058Z" fill="#FF6916" />
                        </svg>
                        <h2 className="text-[#FF5900] font-bold text-[24px]">Amazon #1 Bestselling Books</h2>
                        <svg width="93" height="18" viewBox="0 0 93 18" fill="none">
                            <path d="M70.6948 8.27039H-0.000166744" stroke="#FF6916" strokeWidth="0.832404" />
                            <path d="M81.888 0.416222L81.51 0.241877C81.5599 0.133738 81.6537 0.0521501 81.7678 0.0177556C81.8818 -0.0166389 82.0051 -0.000544459 82.1064 0.0619667L81.888 0.416222ZM70.3136 8.27035L70.2498 8.68164C70.047 8.65017 69.8974 8.47558 69.8974 8.27035C69.8974 8.06513 70.047 7.89053 70.2498 7.85907L70.3136 8.27035ZM81.9268 16.6933L82.1465 17.0468C82.044 17.1105 81.919 17.1265 81.8037 17.0909C81.6885 17.0552 81.5944 16.9712 81.5458 16.8608L81.9268 16.6933ZM92.0674 8.36046L92.3509 8.05574C92.5188 8.21187 92.5287 8.47429 92.3733 8.64273L92.0674 8.36046ZM81.888 0.416222L82.2659 0.590567C79.7037 6.14456 73.5117 8.19538 70.3774 8.68164L70.3136 8.27035L70.2498 7.85907C73.2969 7.38634 79.1267 5.40826 81.51 0.241877L81.888 0.416222ZM70.3136 8.27035L70.3774 7.85907C71.9828 8.10813 74.3265 8.83985 76.5843 10.2191C78.8443 11.5997 81.0407 13.6433 82.3079 16.5258L81.9268 16.6933L81.5458 16.8608C80.3649 14.1744 78.3082 12.2476 76.1504 10.9294C73.9903 9.60989 71.7514 8.9146 70.2498 8.68164L70.3136 8.27035ZM81.9268 16.6933L81.7072 16.3398C85.4873 13.9909 88.7527 11.3385 91.7616 8.07819L92.0674 8.36046L92.3733 8.64273C89.3104 11.9616 85.986 14.6609 82.1465 17.0468L81.9268 16.6933ZM92.0674 8.36046L91.7839 8.66518C88.1904 5.32189 85.1709 2.92978 81.6695 0.770477L81.888 0.416222L82.1064 0.0619667C85.6663 2.25729 88.7292 4.68616 92.3509 8.05574L92.0674 8.36046Z" fill="#FF6916" />
                        </svg>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left Card */}
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="bg-[#FFFCDD] rounded-[36px] p-8 md:p-12 relative group shadow-2xl border-9 border-white">
                        <div className="absolute top-0 right-0 bg-white/90 backdrop-blur text-[#FF5900] px-4 py-1.5 rounded-full text-sm font-semibold border border-orange-100 z-20">Amazon Bestseller</div>
                        <div className="relative mb-10 h-[300px] flex justify-center items-center transform group-hover:scale-105 transition-transform duration-500">
                            <img src={leftBook1} className="absolute w-1/2 h-auto object-contain z-10 -translate-x-12 rotate-[-5deg] group-hover:rotate-[-8deg] transition-transform duration-500" />
                            <img src={leftBook2} className="absolute w-1/2 h-auto object-contain z-20 translate-x-8 rotate-[5deg] group-hover:rotate-[8deg] transition-transform duration-500" />
                        </div>
                        <div className="text-center pt-4">
                            <h3 className="text-left text-3xl font-serif-custom text-[#1F2A2E] font-bold mb-4">The Ayurveda Encyclopedia</h3>
                            <p className="text-[#6B6B6B] mb-8 text-left">Natural secrets to healing, prevention & longevity. A comprehensive guide to the ancient wisdom of Ayurveda.</p>
                            <hr className="mb-6 border-[#E5E7EB]" />
                            <button className="bg-[#FF6916] hover:bg-[#E04510] text-white px-8 py-3 rounded-full flex items-center gap-2 mx-auto">
                                <ShoppingCart size={20} /> Buy on Amazon
                            </button>
                        </div>
                    </motion.div>

                    {/* Right Card */}
                    <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="bg-[#FAF7F3] rounded-[36px] p-8 md:p-12 relative group shadow-2xl border-9 border-white">
                        <div className="absolute top-0 right-0 bg-white/90 backdrop-blur text-[#FF5900] px-4 py-1.5 rounded-full text-sm font-semibold border border-orange-100 z-20">Amazon Bestseller</div>
                        <div className="relative mb-10 h-[300px] flex justify-center items-center transform group-hover:scale-105 transition-transform duration-500">
                            <img src={rightBook1} className="absolute w-1/2 h-auto object-contain z-10 -translate-x-12 rotate-[-5deg] group-hover:rotate-[-8deg] transition-transform duration-500" />
                            <img src={rightBook2} className="absolute w-1/2 h-auto object-contain z-20 translate-x-8 rotate-[5deg] group-hover:rotate-[8deg] transition-transform duration-500" />
                        </div>
                        <div className="text-center pt-4">
                            <h3 className="text-3xl font-serif-custom text-[#1F2A2E] font-bold mb-4 text-left">The Magic of the Blessed mother's miracle</h3>
                            <p className="text-[#6B6B6B] mb-4 text-left">Natural secrets to healing, prevention & longevity. Discover the profound impact of spiritual connection.</p>
                            <hr className="mb-6 border-[#E5E7EB]" />
                            <button className="bg-[#FF6916] hover:bg-[#E04510] text-white px-8 py-3 rounded-full flex items-center gap-2 mx-auto">
                                <ShoppingCart size={20} /> Buy on Amazon
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Book2;