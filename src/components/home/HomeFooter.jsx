import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookOutlined, TwitterOutlined, LinkedinOutlined } from '@ant-design/icons';

export default function HomeFooter() {
  return (
    <footer className="bg-[#2D0A14] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand + About */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/oralogo.png" alt="ORA" className="h-8 w-auto bg-white rounded-full p-1" onError={(e) => e.target.style.display = 'none'} />
              <div className="flex flex-col">
                <span className="text-[15px] font-bold leading-tight">ORA Academic</span>
                <span className="text-[9px] text-gray-400 tracking-widest uppercase">Research Platform</span>
              </div>
            </div>
            <p className="text-[12px] text-gray-400 leading-relaxed mb-6 max-w-xs">
              The Oromo Research Association is a central hub for open scholarship, preserving Oromo cultural knowledge and supporting academic excellence across six integrated research modules.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition"><FacebookOutlined /></a>
              <a href="#" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition"><TwitterOutlined /></a>
              <a href="#" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition"><LinkedinOutlined /></a>
            </div>
          </div>

          {/* Modules */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider mb-4 text-gray-200">Our Modules</h4>
            <ul className="space-y-2.5 text-[12px] text-gray-400">
              <li><Link to="/journal" className="hover:text-white transition">Journal Management</Link></li>
              <li><Link to="/ebook" className="hover:text-white transition">eBook Platform</Link></li>
              <li><Link to="/library" className="hover:text-white transition">Library System</Link></li>
              <li><Link to="/wiki" className="hover:text-white transition">Oromo Wikipedia</Link></li>
              <li><Link to="/repository" className="hover:text-white transition">Repository</Link></li>
              <li><Link to="/network" className="hover:text-white transition">Researchers Network</Link></li>
            </ul>
          </div>

          {/* General Info */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider mb-4 text-gray-200">About ORA</h4>
            <ul className="space-y-2.5 text-[12px] text-gray-400">
              <li><Link to="/about" className="hover:text-white transition">Our Mission</Link></li>
              <li><Link to="/about" className="hover:text-white transition">Our Team</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact Us</Link></li>
              <li><a href="#be-member" className="hover:text-white transition">Become a Member</a></li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider mb-4 text-gray-200">Address</h4>
            <ul className="space-y-2.5 text-[12px] text-gray-400">
              <li>Oromo Research Association</li>
              <li>Addis Ababa, Ethiopia</li>
              <li>P.O. Box 00000</li>
              <li>info@oraresearch.org</li>
              <li>+251 000 000 000</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700/50 pt-6 flex flex-col md:flex-row justify-between items-center text-[11px] text-gray-500 gap-4">
          <p>© 2026 Oromo Research Association. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-white">Privacy Policy</Link>
            <Link to="#" className="hover:text-white">Terms of Use</Link>
            <Link to="#" className="hover:text-white">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}