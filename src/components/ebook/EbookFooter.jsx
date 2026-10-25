import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FacebookFilled, 
  TwitterOutlined, 
  LinkedinFilled, 
  GlobalOutlined 
} from '@ant-design/icons';

export default function EbookFooter() {
  return (
    <footer className="bg-[#2D0A14] text-white pt-20 pb-10 border-t border-[#7A1849]/30">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Description (Takes up more space) */}
          <div className="lg:col-span-4 pr-4">
            <Link to="/ebook" className="flex items-center gap-3 mb-6">
              <img 
                src="/oralogo.png" 
                alt="ORA" 
                className="h-10 w-auto bg-white rounded-full p-1" 
                onError={(e) => e.target.style.display = 'none'} 
              />
              <div className="flex flex-col">
                <span className="text-[18px] font-bold leading-tight font-serif tracking-wide text-white">ORA eBooks</span>
                <span className="text-[10px] text-gray-400 tracking-[0.2em] uppercase mt-1">Open Access Scholarly Books</span>
              </div>
            </Link>
            <p className="text-[13px] text-gray-400 leading-relaxed mb-8 max-w-sm">
              Independent, open scholarly publishing committed to rigorous review, accessible knowledge, and responsible research practice.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#7A1849] hover:border-[#7A1849] transition-all duration-300">
                <FacebookFilled className="text-[14px]" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#7A1849] hover:border-[#7A1849] transition-all duration-300">
                <TwitterOutlined className="text-[14px]" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#7A1849] hover:border-[#7A1849] transition-all duration-300">
                <LinkedinFilled className="text-[14px]" />
              </a>
            </div>
          </div>

          {/* Publishing */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] mb-6 text-gray-200">Publishing</h4>
            <ul className="space-y-3.5 text-[13px] text-gray-400">
              <li><Link to="/ebook/submit" className="hover:text-white hover:underline transition-all duration-200">Submit a book proposal</Link></li>
              <li><Link to="/ebook/author-guide" className="hover:text-white hover:underline transition-all duration-200">Author guidelines</Link></li>
              <li><Link to="/ebook/review-process" className="hover:text-white hover:underline transition-all duration-200">Peer review process</Link></li>
              <li><Link to="/ebook/open-access" className="hover:text-white hover:underline transition-all duration-200">Open access</Link></li>
              <li><Link to="/ebook/fees" className="hover:text-white hover:underline transition-all duration-200">Publishing fees</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] mb-6 text-gray-200">Resources</h4>
            <ul className="space-y-3.5 text-[13px] text-gray-400">
              <li><Link to="/ebook/catalogue" className="hover:text-white hover:underline transition-all duration-200">Browse ebooks</Link></li>
              <li><Link to="/ebook/read-online" className="hover:text-white hover:underline transition-all duration-200">Read online · EPUB · PDF</Link></li>
              <li><Link to="/ebook/subjects" className="hover:text-white hover:underline transition-all duration-200">Subjects</Link></li>
              <li><Link to="/ebook/for-reviewers" className="hover:text-white hover:underline transition-all duration-200">For reviewers</Link></li>
              <li><Link to="/ebook/for-institutions" className="hover:text-white hover:underline transition-all duration-200">For institutions</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] mb-6 text-gray-200">Policies</h4>
            <ul className="space-y-3.5 text-[13px] text-gray-400">
              <li><Link to="/ebook/ethics" className="hover:text-white hover:underline transition-all duration-200">Publication ethics</Link></li>
              <li><Link to="/ebook/editorial-policies" className="hover:text-white hover:underline transition-all duration-200">Editorial policies</Link></li>
              <li><Link to="/ebook/corrections" className="hover:text-white hover:underline transition-all duration-200">Corrections & retractions</Link></li>
              <li><Link to="/ebook/accessibility" className="hover:text-white hover:underline transition-all duration-200">Accessibility</Link></li>
              <li><Link to="/ebook/privacy" className="hover:text-white hover:underline transition-all duration-200">Privacy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] mb-6 text-gray-200">Contact</h4>
            <ul className="space-y-3.5 text-[13px] text-gray-400">
              <li><Link to="/ebook/editorial-office" className="hover:text-white hover:underline transition-all duration-200">Editorial office</Link></li>
              <li><Link to="/ebook/support" className="hover:text-white hover:underline transition-all duration-200">Support centre</Link></li>
              <li><Link to="/ebook/media" className="hover:text-white hover:underline transition-all duration-200">Media enquiries</Link></li>
              <li><Link to="/ebook/partnerships" className="hover:text-white hover:underline transition-all duration-200">Partnerships</Link></li>
              <li><Link to="/ebook/contact" className="hover:text-white hover:underline transition-all duration-200">Contact us</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-gray-500">
            © 2026 ORA eBooks. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[12px] text-gray-500">
            <Link to="/ebook/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link to="/ebook/cookies" className="hover:text-white transition-colors">Cookies</Link>
            <Link to="/ebook/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
            <Link to="/ebook/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}