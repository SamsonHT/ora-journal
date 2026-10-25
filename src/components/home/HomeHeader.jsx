import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';

export default function HomeHeader() {
  const [showModules, setShowModules] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const modules = [
    { name: 'Journal Management', path: '/journal' },
    { name: 'eBook Platform', path: '/ebook' },
    { name: 'Library System', path: '/library' },
    { name: 'Oromo Wikipedia', path: '/wiki' },
    { name: 'Repository', path: '/repository' },
    { name: 'Researchers Network', path: '/network' },
  ];

  // Scroll to section on same page, or go home then scroll
  const handleAnchor = (id) => (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[72px]">
          
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3">
            <img src="/oralogo.png" alt="ORA" className="h-10 w-auto" onError={(e) => e.target.style.display = 'none'} />
            <div className="flex flex-col">
              <span className="text-[16px] font-bold text-gray-900 leading-tight">ORA Academic</span>
              <span className="text-[9px] text-gray-500 tracking-widest uppercase">Research Platform</span>
            </div>
          </Link>

          {/* Navigation — Public only */}
          <nav className="hidden lg:flex items-center gap-8 text-[11px] font-bold uppercase tracking-wider text-gray-500">
            <Link to="/" className="text-[#7A1849]">Home</Link>
            <a href="#about" onClick={handleAnchor('about')} className="hover:text-[#7A1849] transition">About Us</a>
            
            {/* Module Dropdown */}
            <div className="relative" onMouseEnter={() => setShowModules(true)} onMouseLeave={() => setShowModules(false)}>
              <button className="flex items-center gap-1 hover:text-[#7A1849] transition-colors h-[72px]">
                Modules <DownOutlined className="text-[9px]" />
              </button>
              {showModules && (
                <div className="absolute top-[72px] left-0 w-56 bg-white border border-gray-100 shadow-xl rounded-b-lg py-2">
                  {modules.map(mod => (
                    <Link key={mod.name} to={mod.path} className="block px-5 py-3 text-[12px] text-gray-700 hover:bg-[#FCF7F9] hover:text-[#7A1849] font-bold transition-colors border-b border-gray-50 last:border-0">
                      {mod.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a href="#services" onClick={handleAnchor('services')} className="hover:text-[#7A1849] transition">Services</a>
            <a href="#contact" onClick={handleAnchor('contact')} className="hover:text-[#7A1849] transition">Contact Us</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link to="/login" className="text-[12px] font-bold text-gray-700 hover:text-[#7A1849]">Sign In</Link>
            <a
              href="#be-member"
              onClick={handleAnchor('be-member')}
              className="text-[11px] font-bold bg-[#7A1849] text-white px-4 py-2 rounded hover:bg-[#5E1136] transition"
            >
              Be Member
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}