import React from 'react'
import Blog1 from '../components/Blog1'
import Footer from '../components/Footer'
import Blog2 from '../components/Blog2'

const Blog = () => {
  return (
    <div>
        <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@0,600;0,700;1,500;1,600&display=swap');
                    .font-serif-custom { font-family: 'Playfair Display', serif; }
                    .font-sans-custom { font-family: 'Inter', sans-serif; }
                `}
            </style>
        <Blog1 />
        <Blog2 />
        <Footer />
    </div>
  )
}

export default Blog
