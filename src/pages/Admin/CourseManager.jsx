import React, { useState, useEffect, useRef } from 'react';
import {
  Plus, Edit2, Trash2, Image as ImageIcon, User, Upload, X,
  Bold, Italic, Underline, List, ListOrdered, Link as LinkIcon,
  AlignLeft, AlignCenter, AlignRight, AlignJustify, Undo, Redo,
  Clock, BookOpen, Star, Video, Users, Calendar
} from 'lucide-react';
import AdminSidebar from './Sidebar';

const CourseManager = ({ setIsAdminLoggedIn }) => {
  const [courses, setCourses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const editorRef = useRef(null);

  const [formData, setFormData] = useState({
    title: '',
    description: '', 
    category: 'Sanskrit',
    level: 'Beginner',
    duration: '',
    students: 0,
    rating: 0,
    lessons: 0,
    price: '',
    imageUrl: '',
  });

  // Helper to assign background colors based on index (matches your image variety)
  const getBgColor = (index) => {
    const colors = ['bg-[#FFFBEB]', 'bg-[#F0FDF4]', 'bg-[#FAF5FF]'];
    return colors[index % colors.length];
  };

  // Helper to pick icons like the image
  const getHeaderIcon = (index) => {
    const icons = [
      <Video className="w-6 h-6 text-orange-600" />,
      <Users className="w-6 h-6 text-orange-600" />,
      <Calendar className="w-6 h-6 text-orange-600" />
    ];
    return icons[index % icons.length];
  };

  const sampleData = [
    { id: 1, title: "Storytelling for Healing", description: "Learn the art of therapeutic storytelling. Transform your experiences into powerful healing narratives.", duration: "6 weeks", students: "500+", price: "Free", category: "Therapy", level: "Beginner", lessons: 12, rating: 4.8 },
    { id: 2, title: "Open Mic Leadership", description: "Master the skills to host transformative open mic events. Create safe spaces for authentic expression.", duration: "4 weeks", students: "300+", price: "Free", category: "Leadership", level: "Intermediate", lessons: 8, rating: 4.9 },
    { id: 3, title: "Live Wisdom Sessions", description: "Join our monthly live webinars. Direct access to Swami's teachings and community Q&A.", duration: "Monthly", students: "1000+", price: "Subscription", category: "Wisdom", level: "All", lessons: 1, rating: 5.0 },
  ];

  useEffect(() => {
    const saved = localStorage.getItem('courses');
    if (saved) {
      const parsedData = JSON.parse(saved);
      setCourses(parsedData.length > 0 ? parsedData : sampleData);
    } else {
      setCourses(sampleData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('courses', JSON.stringify(courses));
  }, [courses]);

  useEffect(() => {
    if (showForm && editorRef.current) {
      editorRef.current.innerHTML = formData.description;
    }
  }, [showForm, editId]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, imageUrl: reader.result });
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalDescription = editorRef.current ? editorRef.current.innerHTML : formData.description;
    const courseData = { ...formData, description: finalDescription };

    if (editId) {
      setCourses(courses.map(c => c.id === editId ? { ...courseData, id: editId } : c));
    } else {
      setCourses([...courses, { ...courseData, id: Date.now() }]);
    }
    resetForm();
  };

  const resetForm = () => {
    setFormData({ title: '', description: '', category: 'Sanskrit', level: 'Beginner', duration: '', students: 0, rating: 0, lessons: 0, price: '', imageUrl: '' });
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

  const handleDelete = (id) => {
    if (window.confirm('Delete this course?')) {
      setCourses(courses.filter(c => c.id !== id));
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
              <h1 className="text-4xl font-serif font-bold text-[#561C24]">Course Management</h1>
              <p className="text-slate-500 mt-2 text-lg">Create and manage your transformative offerings</p>
            </div>
            <button
              onClick={() => { resetForm(); setShowForm(!showForm); }}
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-orange-200 cursor-pointer"
            >
              {showForm ? <X size={22} /> : <Plus size={22} />}
              {showForm ? 'Cancel' : 'Add New Course'}
            </button>
          </div>

          {/* Form remains standard but styled to match */}
          {showForm && (
            <div className="bg-white border border-slate-200 rounded-3xl shadow-xl p-8 mb-12 animate-in fade-in duration-500">
               <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                {editId ? 'Edit Course Details' : 'Course Information'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <input type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" placeholder="Course Title" required />
                    <div className="grid grid-cols-2 gap-4">
                        <input type="text" value={formData.duration} onChange={(e) => setFormData({ ...formData, duration: e.target.value })} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl" placeholder="Duration (e.g. 6 weeks)" />
                        <input type="text" value={formData.students} onChange={(e) => setFormData({ ...formData, students: e.target.value })} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl" placeholder="Enrolled (e.g. 500+)" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden">
                        <div className="flex p-2 bg-slate-100 border-b border-slate-200 gap-1">
                            <ToolbarBtn onClick={() => execCommand('bold')} icon={Bold} />
                            <ToolbarBtn onClick={() => execCommand('italic')} icon={Italic} />
                            <ToolbarBtn onClick={() => execCommand('insertUnorderedList')} icon={List} />
                        </div>
                        <div ref={editorRef} contentEditable onInput={(e) => setFormData({ ...formData, description: e.currentTarget.innerHTML })} className="p-4 min-h-[120px] outline-none bg-white" />
                    </div>
                  </div>
                </div>
                <button type="submit" className="w-full bg-orange-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-700 transition-colors cursor-pointer">
                    {editId ? 'Save Changes' : 'Publish Course'}
                </button>
              </form>
            </div>
          )}

          {/* Course Grid - Replaced to match your Image exactly */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={course.id}
                className={`${getBgColor(index)} border border-transparent hover:border-orange-200 rounded-[2.5rem] p-8 transition-all duration-300 flex flex-col h-full relative group shadow-sm hover:shadow-xl`}
              >
                {/* Admin Actions Overlay */}
                <div className="absolute top-6 right-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <button onClick={() => handleEdit(course)} className="bg-white p-2.5 rounded-full shadow-md text-slate-600 hover:text-blue-600 cursor-pointer transition-colors"><Edit2 size={18} /></button>
                  <button onClick={() => handleDelete(course.id)} className="bg-white p-2.5 rounded-full shadow-md text-slate-600 hover:text-red-600 cursor-pointer transition-colors"><Trash2 size={18} /></button>
                </div>

                {/* Circle Icon Section */}
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border border-orange-50 mb-8 shadow-sm">
                  {getHeaderIcon(index)}
                </div>

                {/* Content */}
                <h3 className="text-3xl font-serif font-bold text-slate-800 mb-4 leading-tight">
                  {course.title}
                </h3>
                
                <div className="text-slate-500 text-lg leading-relaxed mb-8 flex-grow">
                   <div dangerouslySetInnerHTML={{ __html: course.description }} className="line-clamp-3" />
                </div>

                {/* Stats Row */}
                <div className="flex gap-6 text-sm font-bold text-slate-500 mb-8 items-center">
                  <div className="flex items-center gap-2">
                    <Users size={18} className="text-slate-400" />
                    <span>{course.students} enrolled</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-slate-400" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-2xl font-bold text-xl transition-transform active:scale-95 cursor-pointer shadow-lg shadow-orange-200">
                  Join Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseManager;