import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import ayurvedaEncyclopedia from '../assets/ayurveda encyclopedia img.png';
import ayurvedaPrimer from '../assets/ayurveda primer.png';
import bhagavadGita from '../assets/bhagavad gita for modern times.png';
import daysOfJoy from '../assets/21 days of joy.png';
import stressFreeCollege from '../assets/stress free college.png';
import magicOfBlessed from '../assets/magic of blessed.png';

const Book3 = () => {
    const moreBooks = [
        { title: "Encyclopedia of Ayurveda", subtitle: "Secretos naturales de curación, prevención y longevidad (Spanish Edition)", img: ayurvedaEncyclopedia },
        { title: "Ayurveda Primer: The A, B, C's of Ayurvedic Medicine", subtitle: "Natural secrets to healing, prevention & longevity", img: ayurvedaPrimer },
        { title: "Bhagavad Gita for Modern Times:", subtitle: "Swami Tirtha offers a completely fresh and accessible interpretation...", img: bhagavadGita },
        { title: "21 Days of Joy: Embracing our Essence", subtitle: "We thrive on love & joy yet we rarely have time to do things", img: daysOfJoy },
        { title: "The Stress-Free College Student: Natural Tips", subtitle: "Natural secrets to healing, prevention & longevity", img: stressFreeCollege },
        { title: "The Magic of the Blessed mother's miracle", subtitle: "Natural secrets to healing, prevention & longevity", img: magicOfBlessed }
    ];

    return (
        <section className="py-10 relative bg-[#FFFCDD]">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif-custom text-[#2E3D4C] mb-4">
                        <span className='font-bold'>More Books by Swami</span> <span className="text-[#FF6916] italic">Books</span>
                    </h2>
                    <p className="text-[#36415399]">Award-winning books loved by readers worldwide</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {moreBooks.map((book, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="rounded-[36px] border-9 border-white flex flex-col h-full p-4"
                            style={{ background: index % 2 === 0 ? "#FFFCDD" : "#FAF7F3" }}
                        >
                            <div className="h-64 mb-2 flex justify-center items-center w-full -mt-6">
                                <img src={book.img} alt={book.title} className="max-h-full max-w-full object-contain drop-shadow-lg" />
                            </div>
                            <div className="text-left w-full px-2 flex-grow">
                                <h3 className="font-serif-custom text-[24px] font-bold text-[#1F2A2E]">{book.title}</h3>
                                <p className="text-[14px] text-[#6B6B6B] mt-2">{book.subtitle}</p>
                                <hr className='mt-6 border-[#E5E7EB]' />
                            </div>
                            <div className="flex justify-center w-full pb-2 mt-4">
                                <button className="bg-[#FF6916] text-white px-6 py-2 rounded-full text-sm font-semibold w-full max-w-[200px] flex items-center justify-center gap-2">
                                    <ShoppingCart size={16} /> Buy on Amazon
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="flex justify-center mt-22">
                    <img src="/dec.png" alt="divider" className="w-124 h-auto object-contain" />
                </div>
            </div>
        </section>
    );
};

export default Book3;