import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SearchOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';

export default function EbookHeader() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  // Matched to Journal header structure
  const navLinks = [
    { name: 'Home', path: '/ebook' },
    { name: 'About', path: '/ebook/about' },
    { name: 'Catalogue', path: '/ebook/catalogue' },
    { name: 'Author Guide', path: '/ebook/author-guide' },
    { name: 'Editorial Team', path: '/ebook/editorial' },
    { name: 'Contact', path: '/ebook/contact' },
  ];

  const handleLinkClick = () => setIsMobileMenuOpen(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 w-full shadow-sm">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-[72px] sm:h-[80px] relative">
          
          {/* Logo & Brand (Matched to Journal style) */}
          <Link to="/ebook" className="flex items-center gap-3 shrink-0 z-10" onClick={handleLinkClick}>
            <img 
              src="/oralogo.png" 
              alt="ORA Logo" 
              className="h-9 sm:h-10 w-auto object-contain" 
              onError={(e) => { 
                e.target.style.display = 'none'; 
                e.target.nextSibling.style.display = 'flex'; 
              }} 
            />
            <div className="hidden w-9 h-9 sm:w-10 sm:h-10 border-2 border-[#7A1C39] rounded-full items-center justify-center text-[#7A1C39] font-bold text-xs">
              ORA
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-[16px] sm:text-[17px] font-serif font-bold text-gray-900 leading-tight">
                ORA eBooks
              </span>
              <span className="text-[8px] sm:text-[9px] text-gray-500 tracking-[0.2em] uppercase font-semibold mt-0.5">
                Scholarly Books
              </span>
            </div>
          </Link>

          {/* Desktop Nav (Centered with active underline indicator) */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-8 absolute left-1/2 top-0 -translate-x-1/2 h-full">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group h-full flex items-center">
                <Link 
                  to={link.path} 
                  className={`text-[11px] uppercase tracking-wider font-bold whitespace-nowrap transition-colors duration-200 relative flex items-center h-full pt-1 ${
                    isActive(link.path) ? 'text-[#7A1C39]' : 'text-gray-500 hover:text-[#7A1C39]'
                  }`}
                >
                  {link.name}
                  <span 
                    className={`absolute bottom-0 left-0 w-full h-[3px] bg-[#7A1C39] transition-transform duration-300 origin-left ${
                      isActive(link.path) ? 'scale-x-100' : 'scale-x-0 hover:scale-x-100'
                    }`}
                  ></span>
                </Link>
              </div>
            ))}
          </nav>

          {/* Right Side Actions (Aligned with Journal style) */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0 z-10">
            <button className="hidden sm:flex w-9 h-9 rounded-full items-center justify-center text-gray-500 hover:text-[#7A1C39] hover:bg-gray-50 transition-all">
              <SearchOutlined className="text-[18px]" />
            </button>
            
            <div className="hidden sm:block h-5 w-px bg-gray-200"></div>
            
            {/* Main and Sign In grouped together */}
            <Link 
              to="/" 
              className="hidden md:block text-[13px] font-bold text-gray-700 hover:text-[#7A1C39] transition-colors whitespace-nowrap"
            >
              Main
            </Link>
            <Link 
              to="/ebook/login" 
              className="hidden md:block text-[13px] font-bold text-gray-700 hover:text-[#7A1C39] transition-colors whitespace-nowrap"
            >
              Sign In
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="xl:hidden w-10 h-10 flex items-center justify-center text-gray-700 hover:text-[#7A1C39] transition-colors focus:outline-none"
            >
              {isMobileMenuOpen ? <CloseOutlined className="text-xl" /> : <MenuOutlined className="text-xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`xl:hidden absolute top-[72px] sm:top-[80px] left-0 w-full bg-white border-b border-gray-200 shadow-lg transition-all duration-300 ease-in-out origin-top overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              onClick={handleLinkClick} 
              className={`block px-4 py-3 rounded-lg text-[13px] uppercase tracking-wider font-bold transition-colors ${
                isActive(link.path) ? 'bg-[#FCF7F9] text-[#7A1C39]' : 'text-gray-600 hover:bg-gray-50 hover:text-[#7A1C39]'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="pt-4 mt-2 border-t border-gray-100 flex flex-col gap-3">
            <button className="w-full flex items-center justify-center gap-2 py-3 bg-gray-50 rounded-lg text-gray-700 font-bold text-[14px]">
              <SearchOutlined /> Search
            </button>
            <div className="flex gap-3">
              <Link 
                to="/" 
                onClick={handleLinkClick} 
                className="flex-1 text-center py-3 border border-gray-300 rounded-lg text-gray-700 font-bold text-[14px] hover:bg-gray-50"
              >
                Main
              </Link>
              <Link 
                to="/ebook/login" 
                onClick={handleLinkClick} 
                className="flex-1 text-center py-3 bg-[#7A1C39] rounded-lg text-white font-bold text-[14px] hover:bg-[#60142e]"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}