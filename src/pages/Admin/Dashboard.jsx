import React, { useState, useEffect } from 'react';
import { Dice5, Lightbulb, Gamepad2, Smartphone, BookOpen, ArrowRight } from 'lucide-react';
import AdminSidebar from './Sidebar';

const AdminDashboard = ({ setIsAdminLoggedIn }) => {
  const [stats, setStats] = useState({
    bettingSites: 0,
    bettingTips: 0,
    cricketBookmakers: 0,
    iplApps: 0,
    blogs: 0,
  });

  useEffect(() => {
    // Simulate fetching stats from localStorage or API
    const sites = JSON.parse(localStorage.getItem('bettingSites') || '[]');
    const tips = JSON.parse(localStorage.getItem('bettingTips') || '[]');
    const bookmakers = JSON.parse(localStorage.getItem('cricketBookmakers') || '[]');
    const apps = JSON.parse(localStorage.getItem('iplBettingApps') || '[]');
    const blogs = JSON.parse(localStorage.getItem('blogs') || '[]');

    setStats({
      bettingSites: sites.length,
      bettingTips: tips.length,
      cricketBookmakers: bookmakers.length,
      iplApps: apps.length,
      blogs: blogs.length,
    });
  }, []);

  const statCards = [
    { title: 'Betting Sites', count: stats.bettingSites, icon: Dice5, color: 'bg-blue-50 text-blue-600', hoverBorder: 'hover:border-blue-200' },
    { title: 'Betting Tips', count: stats.bettingTips, icon: Lightbulb, color: 'bg-yellow-50 text-yellow-600', hoverBorder: 'hover:border-yellow-200' },
    { title: 'Cricket Bookmakers', count: stats.cricketBookmakers, icon: Gamepad2, color: 'bg-green-50 text-green-600', hoverBorder: 'hover:border-green-200' },
    { title: 'IPL Betting Apps', count: stats.iplApps, icon: Smartphone, color: 'bg-purple-50 text-purple-600', hoverBorder: 'hover:border-purple-200' },
    { title: 'Blog Posts', count: stats.blogs, icon: BookOpen, color: 'bg-orange-50 text-orange-600', hoverBorder: 'hover:border-orange-200' },
  ];

  return (
    <div className="flex font-sans bg-[#FFFDF0] min-h-screen">
      <AdminSidebar setIsAdminLoggedIn={setIsAdminLoggedIn} />
      
      <div className="flex-1 ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-[#2D3E50] font-serif mb-2">Dashboard</h1>
            <p className="text-gray-600">Overview of your platform's performance</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {statCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div key={index} className={`bg-white rounded-2xl p-6 shadow-sm border border-transparent ${card.hoverBorder} hover:shadow-xl transition-all duration-300 group`}>
                  <div className={`${card.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-gray-500 text-sm font-medium tracking-wide">{card.title}</h3>
                  <p className="text-3xl font-bold text-[#2D3E50] mt-1 font-serif">{card.count}</p>
                </div>
              );
            })}
          </div>

          {/* Welcome Section */}
          <div className="bg-gradient-to-r from-[#990D13] to-[#FF6916] rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4 font-serif">Welcome to Admin Panel!</h2>
                <p className="text-white/90 text-lg mb-8 max-w-2xl leading-relaxed">
                Manage your betting sites, tips, bookmakers, apps, and blog posts all in one place. Use the sidebar to navigate through the different sections.
                </p>
                <div className="flex gap-4">
                    <a href="/admin/blog" className="bg-white text-[#FF5900] px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-orange-50 transition-all flex items-center gap-2">
                        Manage Blogs
                        <ArrowRight size={18} />
                    </a>
                </div>
            </div>
            
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-72 h-72 bg-black/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;