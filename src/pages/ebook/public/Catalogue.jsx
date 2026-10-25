import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EbookHeader from '../../../components/ebook/EbookHeader';
import EbookFooter from '../../../components/ebook/EbookFooter';
import { SearchOutlined, ArrowRightOutlined, DownloadOutlined, HeartOutlined } from '@ant-design/icons';

export default function Catalogue() {
  const [searchQuery, setSearchQuery] = useState('');

  const books = [
    { title: 'Rivers of Evidence', author: 'Lelia Hassan', desc: 'Water, memory, and the colonial archive across the Indian Ocean.', color: 'from-[#4A1229] to-[#7A1849]', textColor: 'text-[#E8C5D6]', tag: 'History', year: '2026', pages: 312, formats: ['EPUB', 'PDF'] },
    { title: 'The Civic Algorithm', author: 'Elias North', desc: 'How automated systems are remaking public institutions.', color: 'from-[#1C3F3A] to-[#2D6A60]', textColor: 'text-[#B8E6D8]', tag: 'Politics', year: '2025', pages: 248, formats: ['EPUB', 'PDF'] },
    { title: 'After the Monsoon', author: 'Priya Raman', desc: 'Climate adaptation and the futures of coastal cities.', color: 'from-[#5C4E32] to-[#8C7A55]', textColor: 'text-[#F2E3C6]', tag: 'Environment', year: '2025', pages: 310, formats: ['EPUB', 'PDF'] },
    { title: 'Margins of Translation', author: 'Maria Okoro', desc: 'Literature, language, and exchange across the Swahili Sea.', color: 'from-[#3F1D3D] to-[#6B3369]', textColor: 'text-[#E8C5E6]', tag: 'Literature', year: '2026', pages: 288, formats: ['EPUB', 'PDF'] },
    { title: 'The Archive of Memory', author: 'Tewodros A.', desc: 'Oral histories and the politics of preservation in East Africa.', color: 'from-[#293B4A] to-[#4A6580]', textColor: 'text-[#C5DCE8]', tag: 'History', year: '2024', pages: 340, formats: ['EPUB', 'PDF'] },
    { title: 'Digital Sovereignty', author: 'Sarah Jenkins', desc: 'Data, power, and the future of the nation-state in the digital age.', color: 'from-[#4A1249] to-[#7A1878]', textColor: 'text-[#EAC5E8]', tag: 'Politics', year: '2026', pages: 290, formats: ['EPUB', 'PDF'] },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-[#7A1849] selection:text-white">
      <EbookHeader />

      {/* ================= MODERN HERO ================= */}
      <section className="bg-[#FAF9F6] py-16 px-6 lg:px-12 border-b border-gray-200 relative overflow-hidden">
        {/* Decorative blur */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#7A1849]/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex items-center gap-2 text-[12px] font-bold text-gray-400 mb-4">
            <Link to="/ebook" className="hover:text-[#7A1849] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-700">Catalogue</span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4 leading-tight">
                Search Books
              </h1>
              <p className="text-[16px] text-gray-600 leading-relaxed">
                Find your next perspective. Explore peer-reviewed, open-access ebooks across disciplines.
              </p>
            </div>
            
            {/* Modern Search Bar */}
            <div className="w-full md:w-96 shrink-0 relative group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <SearchOutlined className="text-gray-400 group-focus-within:text-[#7A1849] transition-colors text-lg" />
              </div>
              <input 
                type="text" 
                placeholder="Search by title, author, DOI..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl text-[14px] shadow-sm outline-none focus:border-[#7A1849]/50 focus:ring-4 focus:ring-[#7A1849]/10 transition-all" 
              />
            </div>
          </div>
          
          {/* Quick Tags */}
          <div className="flex flex-wrap items-center gap-2 mt-6">
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mr-2">Popular:</span>
            {['Indian Ocean', 'Climate adaptation', 'Digital society', 'Translation'].map(tag => (
              <button key={tag} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-[11px] font-bold text-gray-600 hover:border-[#7A1849]/40 hover:text-[#7A1849] hover:bg-[#FCF7F9] transition-all">
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="py-12 max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-10">
        
        {/* --- MODERN SIDEBAR FILTERS --- */}
        <aside className="w-full lg:w-72 shrink-0">
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
            <h3 className="text-[15px] font-bold text-gray-900 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
              Refine results
            </h3>
            <button className="text-[11px] font-bold text-gray-400 hover:text-[#7A1849] transition-colors">Clear all</button>
          </div>

          {/* Filter Accordions */}
          <div className="space-y-6">
            {/* Subject */}
            <div>
              <div className="flex justify-between items-center mb-3 cursor-pointer group">
                <h4 className="text-[12px] font-bold text-gray-800 uppercase tracking-wider group-hover:text-[#7A1849] transition-colors">Subject</h4>
                <span className="text-gray-400 text-[10px]">▲</span>
              </div>
              <div className="space-y-2.5">
                {['History & archives (86)', 'Politics & society (72)', 'Environment (58)', 'Literature & language (64)', 'Education (51)', 'Digital humanities (39)'].map((item) => (
                  <label key={item} className="flex items-center gap-3 text-[13px] text-gray-600 cursor-pointer hover:text-[#7A1849] transition-colors group">
                    <div className="relative flex items-center justify-center w-4 h-4 border border-gray-300 rounded bg-white group-hover:border-[#7A1849] transition-colors">
                      <input type="checkbox" className="appearance-none peer absolute inset-0 cursor-pointer" />
                      <svg className="w-3 h-3 text-white hidden peer-checked:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                      <div className="absolute inset-0 bg-[#7A1849] rounded opacity-0 peer-checked:opacity-100 transition-opacity -z-10"></div>
                    </div>
                    {item}
                  </label>
                ))}
              </div>
            </div>

            {/* Publication Year */}
            <div>
              <div className="flex justify-between items-center mb-3 cursor-pointer group">
                <h4 className="text-[12px] font-bold text-gray-800 uppercase tracking-wider group-hover:text-[#7A1849] transition-colors">Publication year</h4>
                <span className="text-gray-400 text-[10px]">▲</span>
              </div>
              <div className="space-y-2.5">
                {['2026 (48)', '2025 (96)', '2024 (82)', '2023 and earlier (144)'].map((item) => (
                  <label key={item} className="flex items-center gap-3 text-[13px] text-gray-600 cursor-pointer hover:text-[#7A1849] transition-colors group">
                    <div className="relative flex items-center justify-center w-4 h-4 border border-gray-300 rounded-full bg-white group-hover:border-[#7A1849] transition-colors">
                      <input type="radio" name="year" className="appearance-none peer absolute inset-0 cursor-pointer" />
                      <div className="w-2 h-2 bg-[#7A1849] rounded-full opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                    </div>
                    {item}
                  </label>
                ))}
              </div>
            </div>

            {/* Format */}
            <div>
              <div className="flex justify-between items-center mb-3 cursor-pointer group">
                <h4 className="text-[12px] font-bold text-gray-800 uppercase tracking-wider group-hover:text-[#7A1849] transition-colors">Format</h4>
                <span className="text-gray-400 text-[10px]">▲</span>
              </div>
              <div className="space-y-2.5">
                {['EPUB (342)', 'PDF (370)', 'Read online (370)'].map((item) => (
                  <label key={item} className="flex items-center gap-3 text-[13px] text-gray-600 cursor-pointer hover:text-[#7A1849] transition-colors group">
                    <div className="relative flex items-center justify-center w-4 h-4 border border-gray-300 rounded bg-white group-hover:border-[#7A1849] transition-colors">
                      <input type="checkbox" className="appearance-none peer absolute inset-0 cursor-pointer" />
                      <svg className="w-3 h-3 text-white hidden peer-checked:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                      <div className="absolute inset-0 bg-[#7A1849] rounded opacity-0 peer-checked:opacity-100 transition-opacity -z-10"></div>
                    </div>
                    {item}
                  </label>
                ))}
              </div>
            </div>
          </div>

          <button className="w-full bg-[#7A1849] text-white py-3 rounded-lg text-[13px] font-bold hover:bg-[#531324] transition-all shadow-md hover:shadow-lg mt-8">
            Apply Filters
          </button>
          <p className="text-[11px] text-gray-400 mt-4 text-center leading-relaxed">All ORA eBooks are open access and free to read.</p>
        </aside>

        {/* --- BOOK LIST --- */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <h2 className="text-2xl font-serif font-bold text-gray-900">All ebooks <span className="text-gray-400 text-lg font-sans font-normal ml-2">(370)</span></h2>
            <div className="flex items-center gap-3">
              <span className="text-[12px] text-gray-500 hidden md:inline">Showing 1-10 of 370</span>
              <select className="border border-gray-200 rounded-lg px-3 py-2 bg-white text-[12px] font-bold text-gray-700 outline-none cursor-pointer hover:border-[#7A1849]/40 transition-colors">
                <option>Sort by: Newest first</option>
                <option>Sort by: Oldest first</option>
                <option>Sort by: Title (A-Z)</option>
              </select>
            </div>
          </div>

          <div className="space-y-6">
            {books.map((book, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col md:flex-row gap-8 shadow-sm hover:shadow-xl hover:border-[#7A1849]/20 transition-all duration-300 group">
                
                {/* Modern 3D Book Cover */}
                <div className={`w-full md:w-44 h-64 shrink-0 bg-gradient-to-br ${book.color} rounded-xl p-5 flex flex-col justify-between shadow-lg relative overflow-hidden group-hover:-translate-y-1 group-hover:shadow-xl transition-all duration-500`}>
                   <div className="absolute inset-0 bg-black/10"></div>
                   <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-8 -mt-8 blur-xl"></div>
                   <div className="relative z-10 flex justify-between items-start">
                     <span className="text-[8px] font-bold text-white/60 uppercase tracking-widest">ORA eBooks</span>
                   </div>
                   <div className="relative z-10">
                     <h3 className={`text-white font-serif font-bold text-lg leading-tight mb-1 ${book.textColor}`}>{book.title}</h3>
                     <p className="text-white/60 text-[9px] font-bold">{book.author}</p>
                   </div>
                </div>
                
                {/* Book Info */}
                <div className="flex-1 flex flex-col py-2">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-bold text-[#7A1849] bg-[#FCF7F9] px-2 py-1 rounded-md uppercase tracking-widest border border-[#7A1849]/10">{book.tag}</span>
                    <span className="text-[10px] font-bold text-green-700 bg-green-50 px-2 py-1 rounded-md uppercase tracking-widest border border-green-100">Open Access</span>
                  </div>
                  
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-1 group-hover:text-[#7A1849] transition-colors cursor-pointer">{book.title}</h3>
                  <p className="text-[14px] font-medium text-gray-600 mb-3">{book.author}</p>
                  <p className="text-[14px] text-gray-500 mb-5 max-w-2xl leading-relaxed">{book.desc}</p>
                  
                  {/* Meta info */}
                  <div className="flex flex-wrap items-center gap-3 text-[12px] font-medium text-gray-400 mb-6">
                    <span>{book.year}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span>{book.pages} pages</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span>{book.formats.join(' · ')}</span>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-4 mt-auto">
                    <button className="bg-[#7A1849] text-white px-5 py-2.5 rounded-lg text-[12px] font-bold hover:bg-[#531324] transition-colors shadow-sm flex items-center gap-2">
                      Read Ebook <ArrowRightOutlined />
                    </button>
                    <button className="text-[12px] font-bold text-gray-600 hover:text-[#7A1849] transition-colors flex items-center gap-2 px-2">
                      <DownloadOutlined /> Download
                    </button>
                    <button className="text-[12px] font-bold text-gray-600 hover:text-[#7A1849] transition-colors flex items-center gap-2 px-2 ml-auto md:ml-0">
                      <HeartOutlined /> Save to Library
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modern Pagination */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-200 gap-4">
            <span className="text-[13px] text-gray-500">Showing 1-10 of 370 books</span>
            <div className="flex items-center gap-1.5">
              <button className="px-3 py-2 text-[12px] font-bold text-gray-400 hover:text-gray-700 transition-colors disabled:opacity-50" disabled>Previous</button>
              <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#7A1849] text-white text-[13px] font-bold shadow-md">1</button>
              <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-white border border-gray-200 text-gray-700 text-[13px] font-bold hover:bg-gray-50 hover:border-gray-300 transition-colors">2</button>
              <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-white border border-gray-200 text-gray-700 text-[13px] font-bold hover:bg-gray-50 hover:border-gray-300 transition-colors">3</button>
              <span className="px-1 text-gray-400 font-bold">...</span>
              <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-white border border-gray-200 text-gray-700 text-[13px] font-bold hover:bg-gray-50 hover:border-gray-300 transition-colors">37</button>
              <button className="px-3 py-2 text-[12px] font-bold text-gray-700 hover:text-[#7A1849] transition-colors flex items-center gap-1">Next <ArrowRightOutlined className="text-[10px]" /></button>
            </div>
          </div>
        </div>
      </section>
      
      <EbookFooter />
    </div>
  );
}