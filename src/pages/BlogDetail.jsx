import React from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogDetail = () => {
    const { id } = useParams();

    return (
        <div className="bg-[#FFFCDD] min-h-screen py-16 px-4">
            <article className="max-w-7xl mx-auto bg-white rounded-[2rem] shadow-sm p-8 md:p-10 mt-10">
                <Link to="/blog" className="text-[#F37048] font-medium mb-8 inline-block hover:underline">
                    ← Back to Blog
                </Link>

                <img
                    src="88db6de979260af2e2e714a2fb8c1e5464ff21b0.png"
                    alt="Vata Dosha Healing"
                    className="w-full h-auto rounded-2xl mb-8 object-cover max-h-[500px]"
                />

                {/* Title and Introduction */}
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1A2E44] mb-6 leading-tight">
                    Air - Vata Story: Michael's "Bone-Creak Startup"
                </h1>

                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                    <p className="mb-6 text-xl text-[#2D3E50]">
                        By age 31, Michael was dealing with Vata dosha imbalance, bone pain, and anxiety. Despite looking healthy on paper, he was facing quiet burnout.
                    </p>

                    {/* The Story Section */}
                    <div className="bg-gray-50 p-6 rounded-2xl mb-8 border-l-4 border-[#F37048]">
                        <p className="italic">
                            "I'm too young to sound like bubble wrap," Michael told his practitioner.
                            His knees cracked when he stood, and his fingers felt stiff every morning.
                        </p>
                    </div>

                    <h3 className="text-2xl font-serif font-bold text-[#1A2E44] mt-8 mb-4">Understanding Vata Excess</h3>
                    <p className="mb-4">
                        Vata is characterized by wind and movement—it is cold, dry, light, and mobile.
                        When we overload our systems with constant stimulation, irregular meals, and late nights, we build too much "air" in the body.
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li><strong>Physical Signs:</strong> Gas, bloating, cracking joints, and dry skin.</li>
                        <li><strong>Mental Signs:</strong> Anxiety and a scattered "air-head" feeling.</li>
                    </ul>

                    {/* Healing Steps Section */}
                    <h3 className="text-2xl font-serif font-bold text-[#1A2E44] mt-8 mb-4">The Ayurvedic Path to Balance</h3>
                    <p className="mb-4">To fix a Vata imbalance, you must "warm and moisten the wind":</p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="border border-gray-100 p-6 rounded-2xl shadow-sm">
                            <h4 className="font-bold text-[#F37048] mb-2">Grounding Nutrition</h4>
                            <p className="text-sm text-gray-600">Swap cold smoothies for warm soups, stews, kitchari, and root vegetables with ghee or olive oil.</p>
                        </div>
                        <div className="border border-gray-100 p-6 rounded-2xl shadow-sm">
                            <h4 className="font-bold text-[#F37048] mb-2">Daily Rituals</h4>
                            <p className="text-sm text-gray-600">Daily warm oil massage (Abhyanga) on the spine and joints, followed by a warm shower.</p>
                        </div>
                    </div>

                    <h3 className="text-2xl font-serif font-bold text-[#1A2E44] mt-8 mb-4">Scientific Backing</h3>
                    <p className="mb-6">
                        Simple practices aren't unscientific. Yoga and breathing increase heart rate variability (HRV) and vagal tone, while ashwagandha has shown significant reductions in stress and cortisol in randomized trials.
                    </p>

                    <blockquote className="border-l-4 border-[#F37048] pl-4 italic my-8 text-xl text-gray-600">
                        "When you treat Vata dosha imbalance with warmth, moisture, and rhythm, your bones start feeling like home again."
                    </blockquote>

                    {/* Research References */}
                    <div className="bg-[#FFFDF0] p-6 rounded-2xl mt-12 text-sm border border-orange-100">
                        <h4 className="font-bold mb-4 text-[#1A2E44]">Evidence-Based Research:</h4>
                        <ul className="space-y-2 text-gray-500">
                            <li>• Link between Yoga and Heart Rate Variability (PMCID: PMC11495300) </li>
                            <li>• Randomized Double-Blind study of Ashwagandha (PMCID: PMC3573577) </li>
                            <li>• Clinical study on Sandhigata Vata w.s.r. to Osteoarthritis </li>
                        </ul>
                    </div>
                </div>

                {/* Author Bio Footer */}
                <div className="mt-12 pt-10 border-t border-gray-100 flex flex-col md:flex-row items-center gap-6">
                    <div className="w-24 h-24 bg-orange-100 rounded-full flex-shrink-0 flex items-center justify-center">
                        <img src="/user.png" alt="User icon" className="w-14 h-14 object-contain" />
                    </div>

                    <div>
                        <h4 className="text-xl font-bold text-[#1A2E44]">About the Author: Swami</h4>
                        <p className="text-gray-600 text-sm mt-2">
                            Bestselling author and speaker with over 50 years of expertise in holistic wellness.
                            Founder of the Radiant Light Academy, blending ancient wisdom with cutting-edge calm.
                        </p>
                    </div>
                </div>

                <div className="mt-8 flex justify-center">
                    <button className="bg-[#F37048] text-white px-10 py-4 rounded-full font-bold hover:bg-[#d65d3a] transition-all shadow-lg hover:shadow-orange-200">
                        Join the Community at OrangeCowboy.com
                    </button>
                </div>
            </article>

            {/* Legal Disclaimer */}
            <footer className="max-w-7xl mx-auto mt-6 px-4 text-center">
                <p className="text-xs text-gray-400 italic">
                    Disclaimer: This story is for educational purposes only and is not meant to treat, diagnose, or heal any condition. Consult your wellness professional.
                </p>
            </footer>
        </div>
    );
};

export default BlogDetail;