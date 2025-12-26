import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === '/') return 'Home';
    if (path === '/services') return 'Services';
    if (path === '/books') return 'Books';
    if (path === '/blog') return 'Blogs';
    return 'Home';
  };
  
  const [activeLink, setActiveLink] = useState(getCurrentPage());

  // Sync active link with location changes
  useEffect(() => {
    setActiveLink(getCurrentPage());
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Books', path: '/books' },
    { name: 'Bookings', path: '#' },
    { name: 'Blogs', path: '/blog' },
  ];
  
  const handleNavClick = (link) => {
    setActiveLink(link.name);
    if (link.path !== '#') {
      navigate(link.path);
    }
  };

  const navbarVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0, y: -10 },
    visible: { 
      opacity: 1, 
      height: "auto", 
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      height: 0, 
      y: -10,
      transition: { duration: 0.2, ease: "easeIn" }
    }
  };

  return (
    /* Changed bg-[#FFFCDD] to bg-transparent and set to absolute */
    <div className="absolute top-0 left-0 w-full z-50 bg-transparent flex items-start justify-center pt-5 px-4 font-sans">
      
      <motion.nav 
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-[1400px] bg-white rounded-full shadow-lg shadow-orange-100/50 py-3 px-4 md:px-8 flex items-center justify-between relative"
      >
        <motion.div 
          className="flex items-center flex-shrink-0 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/')}
        >
          <img 
            src="/00b11a585015d6fa85fb93d146ad1fee5b8b1963.png" 
            alt="Logo" 
            className="h-10 w-auto object-contain"
            onError={(e) => {
              e.target.onerror = null; 
              e.target.parentNode.innerHTML = '<div class="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center text-xs text-gray-500">Logo</div>'; 
            }}
          />
        </motion.div>

        <div className="hidden md:flex items-center gap-2 lg:gap-8 absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map((link) => (
            <motion.button
              key={link.name}
              onClick={() => handleNavClick(link)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                px-6 py-2.5 rounded-full text-[15px] font-medium transition-all duration-200
                ${activeLink === link.name 
                  ? 'bg-[#FF5A1F] text-white shadow-md shadow-orange-200' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-orange-50' 
                }
              `}
            >
              {link.name}
            </motion.button>
          ))}
        </div>

        <div className="hidden md:block flex-shrink-0">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#FF5A1F] hover:bg-[#e04f1a] text-white text-[15px] font-semibold px-8 py-2.5 rounded-full shadow-md shadow-orange-200 transition-colors duration-200"
          >
            Connect
          </motion.button>
        </div>

        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-slate-600 focus:outline-none p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute top-full left-0 right-0 mt-3 bg-white rounded-2xl shadow-xl p-4 flex flex-col gap-2 md:hidden overflow-hidden border border-orange-50"
            >
               {navLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => {
                    handleNavClick(link);
                    setIsMobileMenuOpen(false);
                  }}
                  whileTap={{ scale: 0.98 }}
                  className={`
                    w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors
                    ${activeLink === link.name 
                      ? 'bg-[#FF5A1F] text-white' 
                      : 'text-slate-600 hover:bg-orange-50'
                    }
                  `}
                >
                  {link.name}
                </motion.button>
              ))}
              <div className="h-px bg-gray-100 my-1"></div>
              <motion.button 
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#FF5A1F] text-white text-sm font-semibold py-3 rounded-xl shadow-md shadow-orange-200"
              >
                Connect
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navbar;