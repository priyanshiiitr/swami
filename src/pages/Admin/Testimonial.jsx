import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Plus, Trash2, Edit3, Bold, Italic, List, X, Upload } from 'lucide-react';
import AdminSidebar from './Sidebar';

const COLORS = {
  orangeAccent: "#FF4D00",
  starYellow: "#FFB800",
};

// Animation variant for the cards
const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Testimonial = ({ setIsAdminLoggedIn }) => {
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const fileInputRef = useRef(null);

  const [reviews, setReviews] = useState([
    { id: 1, name: "Rone wayite", text: "Swamiji's storytelling transformed my understanding of healing. His wisdom helped me find joy in the darkest moments.", image: "https://i.pravatar.cc/150?u=1", rating: 5 },
    { id: 2, name: "Mary Meehan", text: "Every Thursday, the Live Wisdom sessions ground me. Being connected to this community has been the greatest blessing.", image: "https://i.pravatar.cc/150?u=3", rating: 5 },
  ]);

  const [formData, setFormData] = useState({ name: '', text: '', image: null, rating: 5 });

  // --- Handlers ---
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setFormData({ ...formData, image: URL.createObjectURL(file) });
  };

  const handlePublish = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.text) return;

    if (editingId) {
      setReviews(reviews.map(r => r.id === editingId ? { ...formData, id: editingId } : r));
    } else {
      setReviews([{ ...formData, id: Date.now() }, ...reviews]);
    }
    resetForm();
  };

  const startEdit = (review) => {
    setFormData({ name: review.name, text: review.text, image: review.image, rating: review.rating });
    setEditingId(review.id);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetForm = () => {
    setFormData({ name: '', text: '', image: null, rating: 5 });
    setEditingId(null);
    setShowForm(false);
  };

  return (
    <div className="flex min-h-screen bg-[#FFFDF5]">
      {/* Sidebar - Included with fixed width assumed in pl-[260px] */}
      <AdminSidebar setIsAdminLoggedIn={setIsAdminLoggedIn} />

      {/* Main Content Area */}
      <main className="flex-grow pl-[260px] p-10 overflow-y-auto">
        
        {/* Page Header */}
        <div className="max-w-6xl mx-auto flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-serif font-bold text-[#4A1D1F]">Testimonial Management</h1>
            <p className="text-gray-500 mt-2">Create and manage your transformative offerings</p>
          </div>
          <button 
            onClick={() => (showForm ? resetForm() : setShowForm(true))}
            className="bg-[#FF4D00] text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg hover:bg-[#E64500] transition-all"
          >
            {showForm ? <><X size={20} /> Cancel</> : <><Plus size={20} /> Add Testimonial</>}
          </button>
        </div>

        {/* --- FORM SECTION --- */}
        <AnimatePresence>
          {showForm && (
            <motion.section 
              initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              className="max-w-6xl mx-auto bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm mb-16"
            >
              <h2 className="text-2xl font-serif font-bold text-[#1a2b4b] mb-6">Testimonial Information</h2>
              <form onSubmit={handlePublish} className="space-y-6">
                
                {/* Upload Image Section */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 font-sans">Cover Image</label>
                  <div 
                    onClick={() => fileInputRef.current.click()}
                    className="border-2 border-dashed border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <input type="file" ref={fileInputRef} hidden onChange={handleImageChange} accept="image/*" />
                    {formData.image ? (
                      <img src={formData.image} className="h-24 w-24 rounded-full object-cover border-2 border-[#FF4D00]" alt="Preview" />
                    ) : (
                      <div className="flex items-center gap-2 text-gray-400 font-sans">
                        <Upload size={20} /> <span>Upload Image</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <input 
                      type="text" placeholder="Student Name"
                      className="w-full bg-[#f8fafc] border border-gray-100 rounded-xl px-6 py-4 outline-none focus:border-[#FF4D00] font-sans"
                      value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                    
                    {/* Rating Selector */}
                    <div className="bg-[#f8fafc] border border-gray-100 rounded-xl px-6 py-4 flex items-center justify-between">
                      <span className="text-gray-400 font-sans">Rating out of 5</span>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star key={s} size={20} className="cursor-pointer" onClick={() => setFormData({...formData, rating: s})}
                            fill={s <= formData.rating ? COLORS.starYellow : "transparent"} color={s <= formData.rating ? COLORS.starYellow : "#cbd5e1"} />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Description Box */}
                  <div className="border border-gray-200 rounded-2xl overflow-hidden flex flex-col bg-white">
                    <div className="bg-[#f8fafc] border-b border-gray-200 p-3 flex gap-6 text-gray-400">
                      <Bold size={18} /> <Italic size={18} /> <List size={18} />
                    </div>
                    <textarea 
                      placeholder="Write the student story here..."
                      className="w-full p-4 h-32 outline-none resize-none text-gray-600 font-sans"
                      value={formData.text} onChange={(e) => setFormData({...formData, text: e.target.value})}
                    />
                  </div>
                </div>

                <button type="submit" className="w-full bg-[#FF4D00] text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-[#E64500] transition-all">
                  {editingId ? "Update Testimonial" : "Publish Testimonial"}
                </button>
              </form>
            </motion.section>
          )}
        </AnimatePresence>

        {/* --- GRID DISPLAY: Exact Card Design --- */}
        <div className="max-w-6xl mx-auto flex flex-wrap gap-10 justify-center lg:justify-start pb-10">
          {reviews.map((review, index) => (
            <motion.div 
              key={review.id} 
              className="relative mt-12 max-w-[350px] md:min-w-[400px] flex-shrink-0 group"
              initial="hidden"
              whileInView="visible"
              variants={cardVariant}
            >
              {/* TOP RIGHT ICONS: Edit & Delete (Hover only) */}
              <div className="absolute top-4 right-4 z-40 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button 
                  onClick={() => startEdit(review)}
                  className="p-2 bg-white rounded-full shadow-md text-gray-400 hover:text-[#FF4D00] transition-colors"
                >
                  <Edit3 size={18} />
                </button>
                <button 
                  onClick={() => setReviews(reviews.filter(r => r.id !== review.id))}
                  className="p-2 bg-white rounded-full shadow-md text-gray-400 hover:text-red-500 transition-colors"
                >
                  <Trash2 size={18} />
                </button>
              </div>

              {/* Profile Image (Absolute positioned to overlap top) */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-24 h-24 rounded-full overflow-hidden shadow-sm border-4 border-white">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Decorative "Sparkles" */}
              <div className="absolute top-0 left-1/2 transform -translate-x-24 -translate-y-1/2 z-20 text-[#FF4D00]">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" />
                </svg>
              </div>
              <div className="absolute top-0 right-1/2 transform translate-x-24 -translate-y-1/2 z-20 text-[#FF4D00]">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" />
                </svg>
              </div>

              {/* Card Container */}
              <motion.div
                className="rounded-3xl border-2 flex flex-col items-center h-full relative bg-[#FFF9E5] hover:shadow-lg transition-shadow duration-300"
                style={{ borderColor: COLORS.orangeAccent }}
              >
                {/* Content Area */}
                <div className="px-8 pb-8 pt-16 text-center flex-grow flex flex-col justify-center">
                  <h3 className="font-serif italic font-bold text-xl text-gray-800 mb-6 uppercase tracking-wider">
                    {review.name}
                  </h3>
                  <p className="font-sans text-gray-600 italic leading-relaxed text-lg">
                    "{review.text}"
                  </p>
                </div>

                {/* Footer Divider Line */}
                <div className="w-full h-[1px] bg-orange-200/50 w-[90%] mx-auto"></div>

                {/* Stars Footer */}
                <div className="py-6 flex gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={24}
                      fill={i < review.rating ? COLORS.starYellow : "transparent"}
                      color={i < review.rating ? COLORS.starYellow : "#cbd5e1"}
                      className="drop-shadow-sm"
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Testimonial;