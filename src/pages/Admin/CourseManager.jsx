
import React, { useState, useEffect, useRef } from 'react';
import {
  Plus, Edit2, Trash2, Image as ImageIcon, User, Upload, X,
  Bold, Italic, Underline, List, ListOrdered, Link as LinkIcon,
  AlignLeft, AlignCenter, AlignRight, AlignJustify, Undo, Redo,
  Clock, BookOpen, Star, Video, Users, Calendar
} from 'lucide-react';
import AdminSidebar from './Sidebar';
import { db } from '../../firebase'; // Import firestore instance
import { 
  collection, getDocs, addDoc, updateDoc, deleteDoc, doc, serverTimestamp
} from 'firebase/firestore';

const CourseManager = ({ setIsAdminLoggedIn }) => {
  const [courses, setCourses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const editorRef = useRef(null);

  const [formData, setFormData] = useState({
    title: '',
    description: '', 
    link: '', // Added link for online session
    date: '', // Added date for online session
    imageUrl: '',
  });

  // Reference to the 'courses' collection
  const coursesCollectionRef = collection(db, 'courses');

  // Fetch courses from Firestore
  const getCourses = async () => {
    setLoading(true);
    const data = await getDocs(coursesCollectionRef);
    const fetchedCourses = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    setCourses(fetchedCourses);
    setLoading(false);
  };

  useEffect(() => {
    getCourses();
  }, []);

  useEffect(() => {
    if (showForm && editorRef.current) {
      editorRef.current.innerHTML = formData.description;
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
    const finalDescription = editorRef.current ? editorRef.current.innerHTML : formData.description;
    const courseData = { ...formData, description: finalDescription };

    if (editId) {
      const courseDoc = doc(db, 'courses', editId);
      await updateDoc(courseDoc, courseData);
    } else {
      await addDoc(coursesCollectionRef, { ...courseData, createdAt: serverTimestamp() });
    }
    resetForm();
    getCourses();
  };

  const resetForm = () => {
    setFormData({ title: '', description: '', link: '', date: '', imageUrl: '' });
    setImagePreview(null);
    setShowForm(false);
    setEditId(null);
  };

  const handleEdit = (course) => {
    setFormData(course);
    setImagePreview(course.imageUrl);
    setEditId(course.id);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this course?')) {
      const courseDoc = doc(db, 'courses', id);
      await deleteDoc(courseDoc);
      getCourses();
    }
  };

  const execCommand = (command, value = null) => {
    document.execCommand(command, false, value);
    if (editorRef.current) {
      editorRef.current.focus();
      setFormData({ ...formData, description: editorRef.current.innerHTML });
    }
  };

  const ToolbarBtn = ({ onClick, icon: Icon, title }) => (
    <button type="button" onClick={onClick} className="p-2 text-slate-500 hover:bg-slate-200 rounded cursor-pointer" title={title}><Icon size={18} /></button>
  );

  return (
    <div className="flex font-sans bg-[#FDFBF7] min-h-screen">
      <AdminSidebar setIsAdminLoggedIn={setIsAdminLoggedIn} />

      <div className="flex-1 ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-12">
            <div>
              <h1 className="text-4xl font-serif font-bold text-[#561C24]">Online Sessions</h1>
              <p className="text-slate-500 mt-2 text-lg">Create and manage your online sessions</p>
            </div>
            <button
              onClick={() => { resetForm(); setShowForm(!showForm); }}
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-orange-200 cursor-pointer"
            >
              {showForm ? <X size={22} /> : <Plus size={22} />}
              {showForm ? 'Cancel' : 'Add New Session'}
            </button>
          </div>

          {/* Form */}
          {showForm && (
            <div className="bg-white border border-slate-200 rounded-3xl shadow-xl p-8 mb-12 animate-in fade-in duration-500">
               <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                {editId ? 'Edit Session Details' : 'Session Information'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <input type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" placeholder="Session Title" required />
                    <input type="text" value={formData.link} onChange={(e) => setFormData({ ...formData, link: e.target.value })} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" placeholder="Session Link" required />
                    <input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" required />
                    <div>
                        <label className="block text-slate-700 font-semibold text-sm mb-2 font-serif">Session Image</label>
                        <div className="flex flex-col gap-4">
                            <label className="w-full cursor-pointer bg-slate-50 border-2 border-dashed border-slate-300 hover:border-orange-500 rounded-2xl h-48 flex flex-col items-center justify-center gap-2 transition-colors group relative overflow-hidden">
                                {uploading ? (
                                  <p>Uploading...</p>
                                ) : imagePreview ? (
                                    <img src={imagePreview} alt="Preview" className="w-full h-full object-cover absolute inset-0" />
                                ) : (
                                    <>
                                        <div className="p-3 bg-white rounded-full shadow-sm group-hover:shadow-md transition-all">
                                            <Upload size={24} className="text-slate-400 group-hover:text-orange-500" />
                                        </div>
                                        <span className="text-slate-500 group-hover:text-orange-500 font-medium text-sm">Click to Upload Cover Image</span>
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
                  </div>
                  <div className="space-y-4">
                    <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden">
                        <div className="flex p-2 bg-slate-100 border-b border-slate-200 gap-1">
                            <ToolbarBtn onClick={() => execCommand('bold')} icon={Bold} />
                            <ToolbarBtn onClick={() => execCommand('italic')} icon={Italic} />
                            <ToolbarBtn onClick={() => execCommand('insertUnorderedList')} icon={List} />
                        </div>
                        <div ref={editorRef} contentEditable onInput={(e) => setFormData({ ...formData, description: e.currentTarget.innerHTML })} className="p-4 min-h-[120px] outline-none bg-white" placeholder="Session description..." />
                    </div>
                  </div>
                </div>
                <button type="submit" className="w-full bg-orange-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-700 transition-colors cursor-pointer">
                    {editId ? 'Save Changes' : 'Publish Session'}
                </button>
              </form>
            </div>
          )}

          {/* Sessions Grid */}
          {loading ? (
            <div className="col-span-full text-center py-12">
              <p className="text-slate-500">Loading sessions...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.length === 0 ? (
                <div className="col-span-full text-center py-12 bg-white rounded-xl border border-dashed border-slate-300">
                  <p className="text-slate-500">No sessions added yet. Click 'Add New Session' to start.</p>
                </div>
              ) : (
                courses.map((course, index) => (
                  <div
                    key={course.id}
                    className={`bg-white border border-transparent hover:border-orange-200 rounded-[2.5rem] p-8 transition-all duration-300 flex flex-col h-full relative group shadow-sm hover:shadow-xl`}
                  >
                    <div className="absolute top-6 right-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      <button onClick={() => handleEdit(course)} className="bg-white p-2.5 rounded-full shadow-md text-slate-600 hover:text-blue-600 cursor-pointer transition-colors"><Edit2 size={18} /></button>
                      <button onClick={() => handleDelete(course.id)} className="bg-white p-2.5 rounded-full shadow-md text-slate-600 hover:text-red-600 cursor-pointer transition-colors"><Trash2 size={18} /></button>
                    </div>

                    {course.imageUrl && (
                      <div className="h-64 overflow-hidden relative bg-slate-100 mb-8 rounded-2xl">
                        <img
                            src={course.imageUrl}
                            alt={course.title}
                            className="w-full h-full object-cover"
                        />
                      </div>
                    )}

                    <h3 className="text-3xl font-serif font-bold text-slate-800 mb-4 leading-tight">
                      {course.title}
                    </h3>
                    
                    <div className="text-slate-500 text-lg leading-relaxed mb-8 flex-grow">
                       <div dangerouslySetInnerHTML={{ __html: course.description }} className="line-clamp-3" />
                    </div>

                    <div className="flex flex-col gap-2 text-sm font-bold text-slate-500 mb-8">
                        <div className="flex items-center gap-2">
                            <Calendar size={18} className="text-slate-400" />
                            <span>{course.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <LinkIcon size={18} className="text-slate-400" />
                            <a href={course.link} target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">Session Link</a>
                        </div>
                    </div>

                    <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-2xl font-bold text-xl transition-transform active:scale-95 cursor-pointer shadow-lg shadow-orange-200">
                      View Session
                    </button>
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

export default CourseManager;
