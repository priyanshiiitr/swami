import React from 'react';
import Book1 from '../components/Book1';
import Book2 from '../components/Book2';
import Book3 from '../components/Book3';
import Book4 from '../components/Book4';
import Footer from '../components/Footer';

const Books = () => {
    return (
        <div className="min-h-screen bg-[#FFFCDD] selection:bg-orange-200">
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@0,600;0,700;1,500;1,600&display=swap');
                    .font-serif-custom { font-family: 'Playfair Display', serif; }
                    .font-sans-custom { font-family: 'Inter', sans-serif; }
                `}
            </style>
            
            <Book1 />
            <Book2 />
            <Book3 />
            <Book4 />
            
            <Footer />
        </div>
    );
};

export default Books;