import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, LogOut, BookOpen,  Book, MessageSquareQuote } from 'lucide-react';

const AdminSidebar = ({ setIsAdminLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { path: '/admin/blog', label: 'Blog', icon: BookOpen },
    { path: '/admin/course', label: 'Course', icon: Book },
    { path: '/admin/testimonial', label: 'Testimonials', icon: MessageSquareQuote},
  ];

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setIsAdminLoggedIn(false);
    navigate('/admin');
  };

  return (
    <div 
      className={`fixed left-0 top-0 h-screen text-white transition-all duration-300 z-50 ${isOpen ? 'w-64' : 'w-20'} shadow-2xl flex flex-col font-sans`}
      style={{
        background: 'linear-gradient(180deg, #990D13 0%, #FF6916 100%)'
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-white/10">
        {isOpen && <h2 className="text-xl font-bold font-serif tracking-wide">Admin Panel</h2>}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-1.5 cursor-pointer hover:bg-white/10 rounded-lg transition-colors text-white/90 hover:text-white"
          aria-label="Toggle sidebar"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 group ${
                isActive
                  ? 'bg-white text-[#FF5900] shadow-lg font-semibold transform scale-105'
                  : 'text-white/80 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Icon size={20} className={`flex-shrink-0 ${isActive ? 'text-[#FF5900]' : 'text-white/80 group-hover:text-white'}`} />
              {isOpen && <span className="whitespace-nowrap overflow-hidden text-ellipsis">{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-5 border-t border-white/10 bg-black/10">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white/10 cursor-pointer hover:bg-red-950/30 border border-white/10 rounded-xl font-medium text-sm transition-all hover:border-white/30"
        >
          <LogOut size={18} />
          {isOpen && <span>Sign Out</span>}
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;