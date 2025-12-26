import './App.css'
import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Books from './pages/Books.jsx'
import Navbar from './components/Navbar.jsx'
import Blog from './pages/Blog.jsx'
import BlogDetail from './pages/BlogDetail.jsx'

// Admin Components
import AdminLogin from './pages/Admin/Login.jsx'
import AdminDashboard from './pages/Admin/Dashboard.jsx'
import BlogManager from './pages/Admin/Blog.jsx'
import CourseManager from './pages/Admin/CourseManager.jsx'
import ProtectedRoute from './pages/Admin/ProtectedRoute.jsx'
import TestimonialAdmin from './pages/Admin/Testimonial.jsx'



function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const location = useLocation();

  // Check login status on mount
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      setIsAdminLoggedIn(true);
    }
  }, []);

  // Check if current path is an admin path
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      <div className="App">
        {/* Only show public Navbar if NOT on an admin page */}
        {!isAdminRoute && <Navbar />}
        
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/books" element={<Books />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-detail" element={<BlogDetail />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLogin setIsAdminLoggedIn={setIsAdminLoggedIn} />} />
          
          <Route 
            path="/admin/dashboard" 
            element={
              <ProtectedRoute isLoggedIn={isAdminLoggedIn}>
                <AdminDashboard setIsAdminLoggedIn={setIsAdminLoggedIn} />
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/admin/blog" 
            element={
              <ProtectedRoute isLoggedIn={isAdminLoggedIn}>
                <BlogManager setIsAdminLoggedIn={setIsAdminLoggedIn} />
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/admin/course" 
            element={
              <ProtectedRoute isLoggedIn={isAdminLoggedIn}>
                <CourseManager setIsAdminLoggedIn={setIsAdminLoggedIn} />
              </ProtectedRoute>
            } 
          />

          <Route 
            path="/admin/testimonial" 
            element={
              <ProtectedRoute isLoggedIn={isAdminLoggedIn}>
                <TestimonialAdmin setIsAdminLoggedIn={setIsAdminLoggedIn} />
              </ProtectedRoute>
            } 
          />

        </Routes>
      </div>
    </>
  )
}

export default App
