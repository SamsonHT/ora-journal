import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EbookHeader from '../../../components/ebook/EbookHeader';
import EbookFooter from '../../../components/ebook/EbookFooter';
import { SearchOutlined, ArrowRightOutlined, BookOutlined } from '@ant-design/icons';

export default function EbookLanding() {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animations on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const featuredBooks = [
    { title: 'Rivers of Evidence', desc: 'Water, memory, and the politics of belonging in the Oromo highlands.', color: 'from-[#4A1229] to-[#7A1849]', textColor: 'text-[#E8C5D6]', tag: 'History' },
    { title: 'The Civic Algorithm', desc: 'How digital systems shape public participation and everyday life.', color: 'from-[#1C3F3A] to-[#2D6A60]', textColor: 'text-[#B8E6D8]', tag: 'Politics' },
    { title: 'After the Monsoon', desc: 'Climate, migration, and the future of the Ethiopian lowlands.', color: 'from-[#5C4E32] to-[#8C7A55]', textColor: 'text-[#F2E3C6]', tag: 'Environment' },
    { title: 'Margins of Translation', desc: 'Language, power, and the politics of publishing in Afaan Oromo.', color: 'from-[#3F1D3D] to-[#6B3369]', textColor: 'text-[#E8C5E6]', tag: 'Literature' },
  ];

  const categories = [
    { name: 'History & Archive', icon: '📜', count: 12 },
    { name: 'Politics & Society', icon: '🏛️', count: 8 },
    { name: 'Environment', icon: '🌿', count: 15 },
    { name: 'Literature & Language', icon: '📚', count: 24 },
    { name: 'Education', icon: '🎓', count: 9 },
    { name: 'Digital Humanities', icon: '💻', count: 6 },
  ];

  const processSteps = [
    { title: 'Peer review', desc: 'Independent scholars read and assess every manuscript.', img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { title: 'Editorial development', desc: 'Our team works with authors to refine structure and argument.', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { title: 'Production', desc: 'Copyediting, typesetting, and accessible ePub and PDF files.', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { title: 'Open publication', desc: 'Free to read, download, and share for research and teaching.', img: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-[#7A1849] selection:text-white overflow-x-hidden">
      
      {/* Global CSS for custom animations */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-fade-up { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
      `}</style>

      <EbookHeader />

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-white pt-20 pb-24 border-b border-gray-100 overflow-hidden">
        {/* Modern Animated Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#7A1849]/5 via-white to-white"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#7A1849]/10 rounded-full filter blur-3xl animate-float"></div>

        <div className={`max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16 relative z-10 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCF7F9] border border-[#7A1849]/20 text-[#7A1849] text-[11px] font-bold tracking-widest uppercase mb-6 shadow-sm hover:shadow-md transition-shadow cursor-default">
              <span className="w-2 h-2 rounded-full bg-[#7A1849] animate-pulse"></span>
              Open Access Scholarly Books
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-gray-900 leading-[1.05] mb-6 tracking-tight">
              Welcome to <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7A1849] to-[#B84A7A]">ORA eBooks</span>
            </h1>
            <p className="text-[16px] text-gray-600 mb-8 max-w-lg leading-relaxed">
              Discover peer-reviewed, open-access scholarship across the humanities, social sciences, and interdisciplinary fields.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <Link to="/ebook/catalogue" className="group bg-[#7A1849] text-white px-8 py-3.5 rounded-xl text-[14px] font-bold hover:bg-[#531324] hover:shadow-xl hover:shadow-[#7A1849]/30 transition-all duration-300 flex items-center gap-2">
                Browse Catalogue
                <ArrowRightOutlined className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/ebook/apply" className="bg-white text-gray-700 border border-gray-200 px-8 py-3.5 rounded-xl text-[14px] font-bold hover:bg-gray-50 hover:border-gray-300 hover:shadow-md transition-all duration-300">
                Publish Your Book
              </Link>
            </div>
            
            {/* Modern Search Bar */}
            <div className="relative max-w-lg group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#7A1849]/20 to-purple-600/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative">
                <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                  <SearchOutlined className="text-gray-400 group-focus-within:text-[#7A1849] transition-colors text-lg" />
                </div>
                <input 
                  type="text" 
                  placeholder="Search by title, author, ISBN, or keyword" 
                  className="w-full pl-14 pr-36 py-4 bg-white border border-gray-200 rounded-xl text-[14px] shadow-sm outline-none focus:border-[#7A1849]/50 focus:ring-4 focus:ring-[#7A1849]/10 transition-all" 
                />
                <button className="absolute right-2 top-2 bottom-2 bg-[#7A1849] text-white px-8 rounded-lg text-[13px] font-bold hover:bg-[#531324] transition-colors shadow-md">
                  Search
                </button>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative lg:-mt-10">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#7A1849]/30 to-purple-500/20 rounded-3xl transform translate-x-6 translate-y-6 -z-10 blur-sm"></div>
            <img 
              src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Library" 
              className="rounded-3xl shadow-2xl object-cover h-[450px] w-full border-4 border-white" 
            />
            {/* Floating Element */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-float border border-gray-100">
              <div className="w-12 h-12 bg-[#FCF7F9] rounded-full flex items-center justify-center">
                <BookOutlined className="text-[#7A1849] text-xl" />
              </div>
              <div>
                <p className="text-[14px] font-bold text-gray-900">500+ Titles</p>
                <p className="text-[11px] text-gray-500 font-medium">Openly accessible</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MODERN FILTER BAR ================= */}
      <section className="bg-white/80 backdrop-blur-xl py-4 border-b border-gray-200 sticky top-[72px] z-40 shadow-sm transition-all duration-300">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap items-center gap-3">
            
            <div className="flex items-center gap-2 mr-2 text-gray-500 border-r border-gray-300 pr-4">
              <span className="text-lg">⚙️</span>
              <span className="text-[11px] font-bold uppercase tracking-wider">Filter By</span>
            </div>

            <div className="flex flex-wrap gap-3 flex-1">
              {/* Subject */}
              <select className="appearance-none bg-white border border-gray-200 text-gray-700 text-[13px] font-medium rounded-lg px-4 py-2.5 pr-10 hover:border-[#7A1849]/40 focus:outline-none focus:ring-2 focus:ring-[#7A1849]/20 transition-all cursor-pointer shadow-sm bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%236B7280%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:10px_10px] bg-[right_12px_center] bg-no-repeat">
                <option value="">All Subjects</option>
                <option value="history">History & Archive</option>
                <option value="politics">Politics & Society</option>
                <option value="environment">Environment</option>
                <option value="literature">Literature & Language</option>
              </select>

              {/* Year */}
              <select className="appearance-none bg-white border border-gray-200 text-gray-700 text-[13px] font-medium rounded-lg px-4 py-2.5 pr-10 hover:border-[#7A1849]/40 focus:outline-none focus:ring-2 focus:ring-[#7A1849]/20 transition-all cursor-pointer shadow-sm bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%236B7280%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:10px_10px] bg-[right_12px_center] bg-no-repeat">
                <option value="">All Years</option>
                <option value="2026">2026</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
              </select>

              {/* Language */}
              <select className="appearance-none bg-white border border-gray-200 text-gray-700 text-[13px] font-medium rounded-lg px-4 py-2.5 pr-10 hover:border-[#7A1849]/40 focus:outline-none focus:ring-2 focus:ring-[#7A1849]/20 transition-all cursor-pointer shadow-sm bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%236B7280%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:10px_10px] bg-[right_12px_center] bg-no-repeat">
                <option value="">Language</option>
                <option value="om">Afaan Oromo</option>
                <option value="en">English</option>
              </select>

              {/* Access */}
              <select className="appearance-none bg-white border border-gray-200 text-gray-700 text-[13px] font-medium rounded-lg px-4 py-2.5 pr-10 hover:border-[#7A1849]/40 focus:outline-none focus:ring-2 focus:ring-[#7A1849]/20 transition-all cursor-pointer shadow-sm bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%236B7280%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:10px_10px] bg-[right_12px_center] bg-no-repeat">
                <option value="">Access Type</option>
                <option value="open">Open Access</option>
                <option value="restricted">Restricted</option>
              </select>
            </div>

            <button className="text-[12px] font-bold text-gray-500 hover:text-[#7A1849] hover:bg-[#FCF7F9] px-4 py-2.5 rounded-lg border border-transparent transition-all ml-auto flex items-center gap-2">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              Clear All
            </button>
          </div>
        </div>
      </section>

      {/* ================= FEATURED BOOKS ================= */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 lg:px-12 bg-white relative">
        <div className="flex justify-between items-end mb-12 border-b border-gray-100 pb-6">
          <div>
            <p className="text-[11px] font-bold tracking-[0.2em] text-[#7A1849] uppercase mb-2">Curated Selection</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">Featured open-access ebooks</h2>
            <p className="text-[14px] text-gray-500 mt-2">New research selected by our editors for originality and clarity.</p>
          </div>
          <Link to="/ebook/catalogue" className="hidden md:flex text-[#7A1849] font-bold text-[13px] hover:underline items-center gap-1 group">
            View all ebooks <ArrowRightOutlined className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredBooks.map((book, idx) => (
            <div key={idx} className="group flex flex-col cursor-pointer">
              {/* Book Cover Mockup with 3D effect */}
              <div className={`relative h-72 bg-gradient-to-br ${book.color} rounded-2xl p-6 flex flex-col justify-between shadow-lg group-hover:-translate-y-3 group-hover:rotate-1 group-hover:shadow-2xl transition-all duration-500 ease-out overflow-hidden border border-white/10`}>
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                <div className="relative z-10 flex justify-between items-start">
                  <span className="text-[9px] font-bold text-white/60 uppercase tracking-widest border border-white/20 px-2 py-1 rounded">ORA eBooks</span>
                  <span className="text-[10px] text-white/50">2025</span>
                </div>
                <div className="relative z-10">
                  <h3 className={`text-white font-serif font-bold text-2xl leading-tight mb-2 ${book.textColor}`}>{book.title}</h3>
                  <p className="text-white/70 text-[11px] font-medium">Edited by ORA Academic</p>
                </div>
              </div>
              
              {/* Book Details */}
              <div className="pt-6 flex-1 flex flex-col">
                <p className="text-[13px] text-gray-600 mb-4 flex-1 leading-relaxed">{book.desc}</p>
                <div className="flex items-center gap-2 mb-5">
                  <span className="bg-gray-50 text-gray-600 border border-gray-100 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">{book.tag}</span>
                  <span className="bg-green-50 text-green-700 border border-green-100 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">Open Access</span>
                </div>
                <div className="flex justify-between items-center border-t border-gray-100 pt-4 group-hover:border-[#7A1849]/20 transition-colors">
                  <span className="text-[12px] font-bold text-gray-900">Read Online</span>
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#7A1849] group-hover:text-white transition-colors duration-300">
                    <ArrowRightOutlined />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= BROWSE BY SUBJECT ================= */}
      <section className="bg-[#FCF7F9] py-24 border-y border-[#7A1849]/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#7A1849]/5 rounded-full -ml-20 -mt-20 blur-3xl"></div>
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-[11px] font-bold tracking-[0.2em] text-[#7A1849] uppercase mb-2">Categories</p>
              <h2 className="text-3xl font-serif font-bold text-gray-900">Browse by subject</h2>
            </div>
            <Link to="/ebook/catalogue" className="flex items-center gap-1 text-[#7A1849] font-bold text-[13px] hover:underline group">
              All subjects <ArrowRightOutlined className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {categories.map((cat, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#7A1849]/30 hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center text-center group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#FCF7F9] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="text-4xl mb-3 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300 relative z-10">{cat.icon}</span>
                <h3 className="text-[13px] font-bold text-gray-900 mb-1 relative z-10">{cat.name}</h3>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider relative z-10">{cat.count} Titles</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EDITORIAL PROCESS ================= */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 lg:px-12 bg-white">
        <div className="flex justify-between items-end mb-14">
          <div>
            <p className="text-[11px] font-bold tracking-[0.2em] text-[#7A1849] uppercase mb-2">How it works</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">Clear standards. Thoughtful review.</h2>
            <p className="text-[14px] text-gray-500 mt-2">Every ORA ebook follows a transparent path from submission to open access.</p>
          </div>
          <Link to="/ebook/editorial" className="hidden md:flex text-[#7A1849] font-bold text-[13px] hover:underline items-center gap-1 group">
            Editorial standards <ArrowRightOutlined className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6 shadow-md group-hover:shadow-2xl transition-all duration-500">
                <img src={step.img} alt={step.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent group-hover:from-black/40 transition-colors duration-500"></div>
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md text-[#7A1849] font-bold flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  {idx + 1}
                </div>
              </div>
              <h3 className="text-[18px] font-bold text-gray-900 mb-2 group-hover:text-[#7A1849] transition-colors">{step.title}</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= DARK CTA BANNER ================= */}
      <section className="py-16 px-6 lg:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto bg-[#2D0A14] rounded-[2rem] overflow-hidden relative shadow-2xl group">
          {/* Contained Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
              alt="Background" 
              className="w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#2D0A14] via-[#2D0A14]/90 to-[#7A1849]/40"></div>
          </div>
          
          <div className="relative z-10 p-10 md:p-16 lg:p-24 flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight mb-6">
                Research with lasting reach.
              </h2>
              <p className="text-[16px] text-gray-300 leading-relaxed max-w-xl">
                Publish your next book with ORA eBooks. We support open, peer-reviewed scholarship from proposal to publication.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
              <Link to="/ebook/apply" className="bg-white text-[#7A1849] px-8 py-4 rounded-xl font-bold text-[14px] hover:bg-gray-100 hover:scale-105 transition-all text-center shadow-lg shadow-black/20">
                Publish with ORA
              </Link>
              <Link to="/ebook/author-guide" className="border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-[14px] hover:bg-white/10 transition-all text-center">
                Author guidelines
              </Link>
            </div>
          </div>
        </div>
      </section>

      <EbookFooter />
    </div>
  );
}