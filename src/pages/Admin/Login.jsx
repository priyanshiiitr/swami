import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, Loader, ArrowRight } from 'lucide-react';

const AdminLogin = ({ setIsAdminLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Default credentials
  const ADMIN_EMAIL = 'admin@gmail.com';
  const ADMIN_PASSWORD = 'Admin123!';

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        setIsAdminLoggedIn(true);
        localStorage.setItem('adminToken', 'token_' + Date.now());
        navigate('/admin/blog');
      } else {
        setError('Invalid email or password');
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center font-sans relative overflow-hidden">
      {/* Background Gradient matching Footer */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(90deg, #990D13 0%, #FF6916 100%)'
        }}
      />

      <div className="relative z-10 bg-[#FFFDF0] rounded-2xl shadow-2xl p-10 w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-500 mx-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4 shadow-inner">
             <Lock className="w-8 h-8 text-[#FF5900]" />
          </div>
          <h1 className="text-3xl font-bold text-[#2D3E50] mb-2 font-serif">Admin Portal</h1>
          <p className="text-gray-600 text-sm">Welcome back to swami-website</p>
        </div>

        <form onSubmit={handleLogin} className="mb-6 space-y-5">
          <div>
            <label htmlFor="email" className="block text-[#2D3E50] font-semibold text-sm mb-2 font-serif">
              Email Address
            </label>
            <div className="relative group">
              <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400 group-focus-within:text-[#FF5900] transition-colors" />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full pl-10 pr-4 py-3 bg-white border-2 border-orange-100 rounded-xl text-sm focus:outline-none focus:border-[#FF5900] focus:ring-4 focus:ring-orange-50 transition-all text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-[#2D3E50] font-semibold text-sm mb-2 font-serif">
              Password
            </label>
            <div className="relative group">
              <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-400 group-focus-within:text-[#FF5900] transition-colors" />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="w-full pl-10 pr-4 py-3 bg-white border-2 border-orange-100 rounded-xl text-sm focus:outline-none focus:border-[#FF5900] focus:ring-4 focus:ring-orange-50 transition-all text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>

          {error && (
            <div className="p-3 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm rounded">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-[#FF5900] text-white font-bold rounded-xl hover:bg-[#e04f1a] hover:shadow-lg hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
          >
            {loading ? (
              <>
                <Loader className="w-5 h-5 animate-spin" />
                Logging in...
              </>
            ) : (
              <>
                Login to Dashboard
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>

        <div className="bg-orange-50 p-4 rounded-xl text-center border border-orange-100">
          <p className="text-[#2D3E50] font-semibold text-sm mb-2 font-serif">Demo Credentials</p>
          <div className="flex justify-center gap-4 text-xs font-mono text-gray-600">
             <span>admin@gmail.com</span>
             <span>•</span>
             <span>Admin123!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;