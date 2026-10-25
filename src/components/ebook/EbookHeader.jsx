import React from 'react';
import { Link } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';

export default function EbookHeader() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-[72px]">
          
          {/* Brand */}
          <Link to="/ebook" className="flex items-center gap-3">
            <img src="/oralogo.png" alt="ORA" className="h-10 w-auto" onError={(e) => e.target.style.display = 'none'} />
            <div className="flex flex-col">
              <span className="text-[16px] font-bold text-gray-900 leading-tight">ORA eBooks</span>
              <span className="text-[9px] text-gray-500 tracking-widest uppercase">Open access scholarly books</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-[11px] font-bold uppercase tracking-wider text-gray-500">
            <Link to="/ebook" className="text-[#7A1849]">Home</Link>
            <Link to="/ebook/about" className="hover:text-[#7A1849] transition">About</Link>
            <Link to="/ebook/catalogue" className="hover:text-[#7A1849] transition">Catalogue</Link>
            
            <Link to="/ebook/author-guide" className="hover:text-[#7A1849] transition">Author Guide</Link>
            <Link to="/ebook/editorial" className="hover:text-[#7A1849] transition">Editorial Team</Link>
            <Link to="/ebook/contact" className="hover:text-[#7A1849] transition">Contact</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <SearchOutlined className="text-gray-500 text-lg cursor-pointer hover:text-[#7A1849]" />
            <Link to="/ebook/login" className="text-[12px] font-bold text-gray-700 hover:text-[#7A1849]">Login</Link>
           
          </div>
        </div>
      </div>
    </header>
  );
}