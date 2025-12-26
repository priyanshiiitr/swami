
import React, { useState, useEffect, useRef } from 'react';
import { 
  Plus, Edit2, Trash2, Eye, Image as ImageIcon, Calendar, User, ArrowRight, Upload, X, 
  Bold, Italic, Underline, List, ListOrdered, Link as LinkIcon, 
  AlignLeft, AlignCenter, AlignRight, AlignJustify, Undo, Redo 
} from 'lucide-react';
import AdminSidebar from './Sidebar';
import { db } from '../../firebase'; // Import firestore instance
import { 
  collection, getDocs, addDoc, updateDoc, deleteDoc, doc, serverTimestamp
} from 'firebase/firestore';

const BlogManager = ({ setIsAdminLoggedIn }) => {
  const [blogs, setBlogs] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  const [uploading, setUploading] = useState(false); // Uploading state
  
  const editorRef = useRef(null);

  const [formData, setFormData] = useState({
    title: '',
    shortDescription: '',
    content: '',
    imageUrl: '',
    createdAt: null,
  });

  // Reference to the 'blogs' collection
  const blogsCollectionRef = collection(db, 'blogs');

  // Fetch blogs from Firestore
  const getBlogs = async () => {
    setLoading(true);
    const data = await getDocs(blogsCollectionRef);
    const fetchedBlogs = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    setBlogs(fetchedBlogs);
    setLoading(false);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  useEffect(() => {
    if (showForm && editorRef.current) {
      editorRef.current.innerHTML = formData.content;
    }
  }, [showForm, editId]);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploading(true);
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'swami_unsigned'); 

      try {
        const response = await fetch('https://api.cloudinary.com/v1_1/dn54mfbke/image/upload', { 
          method: 'POST',
          body: formData,
        });
        const data = await response.json();
        setFormData({ ...formData, imageUrl: data.secure_url });
        setImagePreview(data.secure_url);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      // Update existing blog
      const blogDoc = doc(db, 'blogs', editId);
      await updateDoc(blogDoc, { ...formData });
      setEditId(null);
    } else {
      // Add new blog
      await addDoc(blogsCollectionRef, { 
        ...formData, 
        createdAt: serverTimestamp()
      });
    }
    resetForm();
    getBlogs(); // Refresh blogs after submit
  };

  const resetForm = () => {
    setFormData({ title: '', shortDescription: '', content: '', imageUrl: '', createdAt: null });
    setImagePreview(null);
    setShowForm(false);
    setEditId(null);
    if (editorRef.current) editorRef.current.innerHTML = '';
  };

  const handleEdit = (blog) => {
    setFormData(blog);
    setImagePreview(blog.imageUrl);
    setEditId(blog.id);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      const blogDoc = doc(db, 'blogs', id);
      await deleteDoc(blogDoc);
      getBlogs(); // Refresh blogs after delete
    }
  };

  // --- Rich Text Editor Functions ---
  const execCommand = (command, value = null) => {
    document.execCommand(command, false, value);
    if (editorRef.current) {
      editorRef.current.focus();
      setFormData({ ...formData, content: editorRef.current.innerHTML });
    }
  };

  const handleLink = () => {
    const url = prompt('Enter URL:');
    if (url) execCommand('createLink', url);
  };

  const handleImageEmbed = () => {
    const url = prompt('Enter Image URL:');
    if (url) execCommand('insertImage', url);
  };
  
  const ToolbarBtn = ({ onClick, icon: Icon, title }) => (
    <button 
      type="button" 
      onClick={(e) => { e.preventDefault(); onClick(); }}
      className="p-2 text-slate-600 hover:text-orange-600 hover:bg-orange-50 rounded transition-colors"
      title={title}
    >
      <Icon size={18} strokeWidth={2} />
    </button>
  );

  const Divider = () => <div className="w-px h-6 bg-slate-300 mx-1 self-center opacity-50" />;
  

  return (
    <div className="flex font-sans bg-[#FFFDF0] min-h-screen">
      <AdminSidebar setIsAdminLoggedIn={setIsAdminLoggedIn} />
      
      <div className="flex-1 ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="flex justify-between items-center mb-10">
            <div>
              <h1 className="text-4xl font-serif font-bold text-[#2D3E50]">Blog Manager</h1>
              <p className="text-gray-500 mt-2">Create and manage your blog posts</p>
            </div>
            <button
              onClick={() => {
                resetForm();
                setShowForm(!showForm);
              }}
              className="bg-[#FF5900] hover:bg-[#e04f1a] cursor-pointer text-white font-medium py-2.5 px-6 rounded-lg transition-all flex items-center gap-2 shadow-lg shadow-orange-600/20"
            >
              {showForm ? <X size={20} /> : <Plus size={20} />}
              {showForm ? 'Cancel' : 'Add New Blog'}
            </button>
          </div>

          {/* Add/Edit Form */}
          {showForm && (
            <div className="bg-white border border-slate-200 rounded-3xl shadow-xl p-8 mb-12 animate-fade-in ring-1 ring-slate-100">
              <h2 className="text-2xl cursor-pointer font-bold font-serif text-[#1A2E44] mb-6 flex items-center gap-2 border-b border-slate-100 pb-4">
                {editId ? <Edit2 size={24} className="text-[#FF5900]" /> : <Plus size={24} className="text-[#FF5900]" />}
                {editId ? 'Edit Blog' : 'Create Blog'}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-8">
                  
                  {/* Top Section: Image and Basic Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left: Image Upload */}
                    <div>
                        <label className="block text-slate-700 font-semibold text-sm mb-2 font-serif">Blog Image</label>
                        <div className="flex flex-col gap-4">
                            <label className="w-full cursor-pointer bg-slate-50 border-2 border-dashed border-slate-300 hover:border-[#FF5900] rounded-2xl h-48 flex flex-col items-center justify-center gap-2 transition-colors group relative overflow-hidden">
                                {uploading ? (
                                  <p>Uploading...</p>
                                ) : imagePreview ? (
                                    <img src={imagePreview} alt="Preview" className="w-full h-full object-cover absolute inset-0" />
                                ) : (
                                    <>
                                        <div className="p-3 bg-white rounded-full shadow-sm group-hover:shadow-md transition-all">
                                            <Upload size={24} className="text-slate-400 group-hover:text-[#FF5900]" />
                                        </div>
                                        <span className="text-slate-500 group-hover:text-[#FF5900] font-medium text-sm">Click to Upload Cover Image</span>
                                    </>
                                )}
                                <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" disabled={uploading} />
                            </label>
                            {imagePreview && (
                                <button 
                                    type="button" 
                                    onClick={() => { setImagePreview(null); setFormData({ ...formData, imageUrl: '' }); }}
                                    className="self-end text-red-500 text-xs font-semibold hover:underline"
                                >
                                    Remove Image
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Right: Inputs */}
                    <div className="space-y-5">
                      <div>
                        <label className="block text-slate-700 font-semibold text-sm mb-2 font-serif">Blog Name</label>
                        <input
                          type="text"
                          value={formData.title}
                          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                          required
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:border-[#FF5900] focus:ring-1 focus:ring-[#FF5900] placeholder-slate-400"
                          placeholder="Enter blog name..."
                        />
                      </div>

                      <div>
                        <label className="block text-slate-700 font-semibold text-sm mb-2 font-serif">Short Description</label>
                        <textarea
                          value={formData.shortDescription}
                          onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                          required
                          rows={3}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:border-[#FF5900] focus:ring-1 focus:ring-[#FF5900] placeholder-slate-400 resize-none"
                          placeholder="Brief summary shown on the card..."
                        />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Section: Rich Text Editor */}
                  <div>
                    <label className="block text-slate-700 font-semibold text-sm mb-2 font-serif">Long Description (Rich Text)</label>
                    <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden focus-within:ring-1 focus-within:ring-[#FF5900] focus-within:border-[#FF5900]">
                       {/* Toolbar */}
                       <div className="flex flex-wrap items-center p-2 gap-1 border-b border-slate-200 bg-white">
                          <ToolbarBtn onClick={() => execCommand('bold')} icon={Bold} title="Bold" />
                          <ToolbarBtn onClick={() => execCommand('italic')} icon={Italic} title="Italic" />
                          <ToolbarBtn onClick={() => execCommand('underline')} icon={Underline} title="Underline" />
                          <Divider />
                          <ToolbarBtn onClick={() => execCommand('insertUnorderedList')} icon={List} title="Unordered List" />
                          <ToolbarBtn onClick={() => execCommand('insertOrderedList')} icon={ListOrdered} title="Ordered List" />
                          <Divider />
                          <ToolbarBtn onClick={handleImageEmbed} icon={ImageIcon} title="Insert Image" />
                          <ToolbarBtn onClick={handleLink} icon={LinkIcon} title="Insert Link" />
                          <Divider />
                          <ToolbarBtn onClick={() => execCommand('justifyLeft')} icon={AlignLeft} title="Align Left" />
                          <ToolbarBtn onClick={() => execCommand('justifyCenter')} icon={AlignCenter} title="Align Center" />
                          <ToolbarBtn onClick={() => execCommand('justifyRight')} icon={AlignRight} title="Align Right" />
                       </div>

                       {/* Editor */}
                       <div 
                         ref={editorRef}
                         contentEditable
                         onInput={(e) => setFormData({ ...formData, content: e.currentTarget.innerHTML })}
                         className="w-full min-h-[300px] px-4 py-3 bg-white text-slate-800 font-sans text-sm leading-relaxed overflow-y-auto prose prose-slate max-w-none focus:outline-none"
                         placeholder="Write your full blog content here..."
                       />
                    </div>
                  </div>
                </div>

                <div className="pt-6 flex justify-end gap-3 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-6 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 font-medium transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-[#FF5900] cursor-pointer hover:bg-[#e04f1a] text-white font-bold py-2.5 px-8 rounded-xl transition-all shadow-lg shadow-orange-600/20"
                  >
                    {editId ? 'Update Blog' : 'Publish Blog'}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Blog List */}
          {loading ? (
            <div className="col-span-full text-center py-12">
              <p className="text-slate-500">Loading blogs...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.length === 0 ? (
                <div className="col-span-full text-center py-12 bg-white rounded-xl border border-dashed border-slate-300">
                  <p className="text-slate-500">No blog posts added yet. Click 'Add New Blog' to start.</p>
                </div>
              ) : (
                blogs.map((blog) => (
                  <div 
                    key={blog.id} 
                    className="bg-white rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col group relative"
                  >
                      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-30">
                      <button 
                        onClick={() => handleEdit(blog)}
                        className="bg-white text-slate-700 cursor-pointer hover:text-[#FF5900] p-2 rounded-full shadow-lg transition-transform hover:scale-110"
                        title="Edit"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button 
                        onClick={() => handleDelete(blog.id)}
                        className="bg-white text-slate-700 cursor-pointer hover:text-red-600 p-2 rounded-full shadow-lg transition-transform hover:scale-110"
                        title="Delete"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <div className="h-64 overflow-hidden relative bg-slate-100">
                      {blog.imageUrl ? (
                        <img
                            src={blog.imageUrl}
                            alt={blog.title}
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-300">
                            <ImageIcon size={48} />
                        </div>
                      )}
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                        <h2 className="text-2xl font-serif font-bold text-[#1A2E44] leading-tight mb-4 line-clamp-2">
                            {blog.title}
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6 flex-grow line-clamp-3 text-sm">
                            {blog.shortDescription}
                        </p>
                        <button className="text-[#FF5900] font-bold flex items-center hover:text-[#d65d3a] transition-colors gap-2 self-start cursor-pointer">
                            Read Blog
                            <span className="text-xl">→</span>
                        </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogManager;
