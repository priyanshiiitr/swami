import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const blogPosts = [
    {
        id: 1,
        title: `Air - Vata Story: Michael's "Bone-Creak Startup"`,
        description: "By 31, Michael was dealing with Vata dosha imbalance, bone pain, and anxiety despite looking healthy.",
        image: "88db6de979260af2e2e714a2fb8c1e5464ff21b0.png",
    },
    {
        id: 2,
        title: "Emotional, Modern & Relatable",
        description: "Life can feel overwhelming — but small moments of guidance can open big doors. Explore Swamiji's...",
        image: "fdb5c7755ee90cd83858ebb0c0590a60006afed3.png",
    },
    {
        id: 3,
        title: "Calm, Healing & Storytelling Focus",
        description: "Gentle insights, uplifting stories, and simple spiritual wisdom to help you heal, grow, and reconnect with yo...",
        image: "0c81b1e1328bc17db513b001da625beb02818b53.jpg",
    },
];

// Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Delay between each card's animation
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    },
};

const Blog2 = () => {
    return (
        <div className="bg-[#FFFDF0] p-8 ">
            <motion.div
                className="max-w-7xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }} // Animates when 10% of the container is visible
                variants={containerVariants}
            >
                <motion.h1
                    className="text-4xl font-serif font-bold text-[#2D3E50] mb-12 text-center"
                    variants={cardVariants}
                >
                    Our Blog
                </motion.h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <motion.div
                            key={post.id}
                            variants={cardVariants}
                            whileHover={{ y: -10 }} // Subtle lift on hover
                            className="bg-white rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
                        >
                            <div className="h-64 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h2 className="text-2xl font-serif font-bold text-[#1A2E44] leading-tight mb-4">
                                    {post.title}
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                                    {post.description}
                                </p>
                                <Link
                                    to={`/blog-detail`}
                                    className="text-[#FF5900] font-bold flex items-center hover:text-[#d65d3a] transition-colors group"
                                >
                                    Read Blog
                                    <motion.span
                                        className="ml-2 text-xl"
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ repeat: Infinity, duration: 1.5 }}
                                    >
                                        →
                                    </motion.span>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Blog2;