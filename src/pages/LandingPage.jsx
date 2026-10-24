import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  SearchOutlined, EnvironmentOutlined, 
  MedicineBoxOutlined, ExperimentOutlined, BulbOutlined, 
  TeamOutlined, BankOutlined, LockOutlined, SafetyCertificateOutlined, 
  MessageOutlined, ArrowRightOutlined, BarChartOutlined 
} from '@ant-design/icons';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans flex flex-col">
      
      {/* 1. Independent Header */}
      <Header />

      <main className="flex-grow">
        
        {/* ================= HERO SECTION ================= */}
        <section className="relative w-full py-24 lg:py-32 overflow-hidden bg-white">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
          ></div>
          
          {/* White Fade-in Left Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent w-full lg:w-3/4"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-[11px] font-bold tracking-[0.2em] text-[#7A1C39] uppercase mb-4 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#7A1C39]"></span>
                Open Knowledge, Rigorously Published
              </p>
              
              <h1 className="text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-[1.15] mb-6">
                Welcome to ORA Journal Platform
              </h1>
              
              <p className="text-[16px] text-gray-700 mb-10 leading-relaxed max-w-lg">
                Discover peer-reviewed, open-access scholarship across science, health, technology, society, and the environment.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-10">
                <Link to="/journals" className="bg-[#7A1C39] text-white px-7 py-3 rounded-lg text-[14px] font-semibold hover:bg-[#531324] transition-all shadow-lg hover:shadow-2xl hover:-translate-y-0.5 flex items-center gap-2">
                  Browse all journals <ArrowRightOutlined className="text-[12px]" />
                </Link>
                <Link to="/subjects" className="bg-white/80 backdrop-blur-sm text-gray-800 border border-gray-200 px-7 py-3 rounded-lg text-[14px] font-semibold hover:bg-white transition-all shadow-sm flex items-center gap-2">
                  Explore subjects <BarChartOutlined className="text-[14px]" />
                </Link>
              </div>

              {/* Modern Floating Search Bar */}
              <div className="bg-white p-2 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center max-w-xl group hover:shadow-[0_8px_30px_rgba(122,28,57,0.15)] transition-shadow duration-300">
                <SearchOutlined className="text-gray-400 text-lg ml-4 mr-3" />
                <input 
                  type="text" 
                  placeholder="Search by title, author, DOI, or keyword..." 
                  className="flex-1 py-2 outline-none text-[14px] text-gray-700 bg-transparent placeholder-gray-400"
                />
                <button className="bg-[#7A1C39] text-white px-8 py-3 rounded-lg text-[14px] font-semibold hover:bg-[#531324] transition-colors">
                  Search
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FILTER SECTION ================= */}
        <section className="bg-white border-b border-gray-200 py-6 relative z-20 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-[14px] font-bold text-gray-800">Refine your search</h3>
              <button className="text-[12px] font-medium text-[#7A1C39] hover:underline">Clear all</button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">Subject</label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-[13px] text-gray-700 outline-none focus:border-[#7A1C39] bg-white cursor-pointer hover:border-gray-400 transition-colors shadow-sm">
                  <option>All subjects</option>
                  <option>Health Sciences</option>
                  <option>Engineering</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">Journal</label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-[13px] text-gray-700 outline-none focus:border-[#7A1C39] bg-white cursor-pointer hover:border-gray-400 transition-colors shadow-sm">
                  <option>All journals</option>
                  <option>ORA Climate</option>
                  <option>ORA Materials</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">Article Type</label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-[13px] text-gray-700 outline-none focus:border-[#7A1C39] bg-white cursor-pointer hover:border-gray-400 transition-colors shadow-sm">
                  <option>All article types</option>
                  <option>Research Article</option>
                  <option>Review</option>
                  <option>Dataset</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">Year</label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-[13px] text-gray-700 outline-none focus:border-[#7A1C39] bg-white cursor-pointer hover:border-gray-400 transition-colors shadow-sm">
                  <option>2026</option>
                  <option>2025</option>
                  <option>2024</option>
                </select>
              </div>
              <div>
                <button className="w-full bg-[#7A1C39] text-white px-6 py-2.5 rounded-lg text-[13px] font-bold hover:bg-[#531324] transition shadow-md h-[42px]">
                  Apply filters
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ================= LATEST JOURNALS ================= */}
        <section className="pt-20 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8 border-b border-gray-200 pb-4">
            <div>
              <p className="text-[10px] font-bold tracking-[0.15em] text-[#7A1C39] uppercase mb-2">Recently Published</p>
              <h2 className="text-[28px] font-serif font-bold text-gray-900">Latest journals</h2>
            </div>
            <Link to="/journals" className="text-[#7A1C39] text-[13px] font-bold hover:underline flex items-center gap-1 group">
              View all journals <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="w-full lg:w-[260px] flex-shrink-0">
              <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-[#FAF9F6] px-5 py-4 border-b border-gray-200 flex justify-between items-center">
                  <h3 className="text-[14px] font-bold text-gray-900">Refine journals</h3>
                  <button className="text-[11px] font-semibold text-[#7A1C39] hover:underline">Clear all</button>
                </div>
                <div className="p-5 space-y-6">
                  <div>
                    <h4 className="text-[12px] font-bold text-gray-800 mb-3 flex justify-between items-center">
                      Subject area <span className="text-gray-400 text-[10px]">&#9650;</span>
                    </h4>
                    <div className="space-y-2.5 text-[13px] text-gray-600">
                      <label className="flex items-center gap-2.5 cursor-pointer hover:text-[#7A1C39] transition-colors"><input type="checkbox" className="accent-[#7A1C39] w-4 h-4 rounded border-gray-300"/> Environment (6)</label>
                      <label className="flex items-center gap-2.5 cursor-pointer hover:text-[#7A1C39] transition-colors"><input type="checkbox" className="accent-[#7A1C39] w-4 h-4 rounded border-gray-300"/> Physical Sciences (5)</label>
                      <label className="flex items-center gap-2.5 cursor-pointer hover:text-[#7A1C39] transition-colors"><input type="checkbox" className="accent-[#7A1C39] w-4 h-4 rounded border-gray-300"/> Health & Medicine (7)</label>
                      <label className="flex items-center gap-2.5 cursor-pointer hover:text-[#7A1C39] transition-colors"><input type="checkbox" className="accent-[#7A1C39] w-4 h-4 rounded border-gray-300"/> Computing (4)</label>
                      <label className="flex items-center gap-2.5 cursor-pointer hover:text-[#7A1C39] transition-colors"><input type="checkbox" className="accent-[#7A1C39] w-4 h-4 rounded border-gray-300"/> Social Sciences (6)</label>
                    </div>
                  </div>
                 
                 
                  <button className="w-full bg-[#7A1C39] text-white py-2.5 rounded-md text-[13px] font-bold hover:bg-[#531324] transition shadow-sm mt-2">
                    Apply filters
                  </button>
                </div>
              </div>
            </aside>

            {/* Cards */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group cursor-pointer">
                <div className="h-[180px] overflow-hidden bg-gray-200 relative">
                  <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Journal Cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-[9px] font-bold text-[#7A1C39] uppercase tracking-wider mb-2">Earth & Environmental Science</p>
                  <h3 className="text-[17px] font-serif font-bold text-gray-900 mb-2 leading-tight group-hover:text-[#7A1C39] transition-colors">ORA Climate & Resilience</h3>
                  <p className="text-[12px] text-gray-500 mb-5 flex-1 leading-relaxed">Evidence and methods for understanding climate risk, adaptation, and resilient communities.</p>
                  <div className="pt-4 border-t border-gray-100 flex justify-between items-center text-[11px] text-gray-500">
                    <span><strong>DOI</strong> 10.1234/ora.climate.26</span>
                    <Link to="#" className="text-[#7A1C39] font-bold hover:underline flex items-center gap-1">View <span className="group-hover:translate-x-1 transition-transform">&rarr;</span></Link>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group cursor-pointer">
                <div className="h-[180px] overflow-hidden bg-gray-200 relative">
                  <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Journal Cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-[9px] font-bold text-[#7A1C39] uppercase tracking-wider mb-2">Bioengineering & Materials</p>
                  <h3 className="text-[17px] font-serif font-bold text-gray-900 mb-2 leading-tight group-hover:text-[#7A1C39] transition-colors">ORA Materials & Systems</h3>
                  <p className="text-[12px] text-gray-500 mb-5 flex-1 leading-relaxed">Open research on material discovery, scalable systems, infrastructure, and applied engineering.</p>
                  <div className="pt-4 border-t border-gray-100 flex justify-between items-center text-[11px] text-gray-500">
                    <span><strong>DOI</strong> 10.1234/ora.mater.26</span>
                    <Link to="#" className="text-[#7A1C39] font-bold hover:underline flex items-center gap-1">View <span className="group-hover:translate-x-1 transition-transform">&rarr;</span></Link>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group cursor-pointer">
                <div className="h-[180px] overflow-hidden bg-gray-200 relative">
                  <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Journal Cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-[9px] font-bold text-[#7A1C39] uppercase tracking-wider mb-2">Health & Life Sciences</p>
                  <h3 className="text-[17px] font-serif font-bold text-gray-900 mb-2 leading-tight group-hover:text-[#7A1C39] transition-colors">ORA Health Data Review</h3>
                  <p className="text-[12px] text-gray-500 mb-5 flex-1 leading-relaxed">Transparent approaches to clinical evidence, health informatics, and reproducible data practice.</p>
                  <div className="pt-4 border-t border-gray-100 flex justify-between items-center text-[11px] text-gray-500">
                    <span><strong>DOI</strong> 10.1234/ora.health.26</span>
                    <Link to="#" className="text-[#7A1C39] font-bold hover:underline flex items-center gap-1">View <span className="group-hover:translate-x-1 transition-transform">&rarr;</span></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FEATURES STRIP ================= */}
        <section className="bg-white border-y border-gray-200 py-8">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left divide-x divide-gray-200">
            <div className="px-4 flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 group">
              <div className="w-12 h-12 rounded-full bg-[#FAF9F6] flex items-center justify-center shadow-sm group-hover:bg-[#7A1C39] transition-colors duration-300"><LockOutlined className="text-xl text-[#7A1C39] group-hover:text-white transition-colors duration-300" /></div>
              <div><p className="text-[14px] font-bold text-gray-800">Open Access</p><p className="text-[12px] text-gray-500">Freely accessible</p></div>
            </div>
            <div className="px-4 flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 group">
              <div className="w-12 h-12 rounded-full bg-[#FAF9F6] flex items-center justify-center shadow-sm group-hover:bg-[#7A1C39] transition-colors duration-300"><TeamOutlined className="text-xl text-[#7A1C39] group-hover:text-white transition-colors duration-300" /></div>
              <div><p className="text-[14px] font-bold text-gray-800">Peer Review</p><p className="text-[12px] text-gray-500">Double-blind, expert-led</p></div>
            </div>
            <div className="px-4 flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 group">
              <div className="w-12 h-12 rounded-full bg-[#FAF9F6] flex items-center justify-center shadow-sm group-hover:bg-[#7A1C39] transition-colors duration-300"><SafetyCertificateOutlined className="text-xl text-[#7A1C39] group-hover:text-white transition-colors duration-300" /></div>
              <div><p className="text-[14px] font-bold text-gray-800">Ethics</p><p className="text-[12px] text-gray-500">COPE aligned</p></div>
            </div>
            <div className="px-4 flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 group">
              <div className="w-12 h-12 rounded-full bg-[#FAF9F6] flex items-center justify-center shadow-sm group-hover:bg-[#7A1C39] transition-colors duration-300"><MessageOutlined className="text-xl text-[#7A1C39] group-hover:text-white transition-colors duration-300" /></div>
              <div><p className="text-[14px] font-bold text-gray-800">Transparent</p><p className="text-[12px] text-gray-500">Clear timelines</p></div>
            </div>
          </div>
        </section>

        {/* ================= BROWSE BY SUBJECT ================= */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-[26px] font-serif font-bold text-gray-900">Browse by subject</h2>
              <p className="text-[13px] text-gray-500 mt-1">Find journals aligned to your field or research topic.</p>
            </div>
            <Link to="/journals" className="text-[#7A1C39] text-[13px] font-bold hover:underline group">All subjects <span className="group-hover:translate-x-1 inline-block transition-transform">&rarr;</span></Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: <EnvironmentOutlined />, name: "Environment", count: "6", active: true },
              { icon: <ExperimentOutlined />, name: "Physical Sciences", count: "5" },
              { icon: <MedicineBoxOutlined />, name: "Health", count: "7" },
              { icon: <BulbOutlined />, name: "Computing", count: "4" },
              { icon: <TeamOutlined />, name: "Social Sciences", count: "5" },
              { icon: <BankOutlined />, name: "Engineering", count: "3" },
            ].map((sub, i) => (
              <div key={i} className={`p-6 rounded-xl border text-center cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${sub.active ? 'border-[#7A1C39] bg-white shadow-md' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
                <div className={`text-[28px] mb-3 ${sub.active ? 'text-[#7A1C39]' : 'text-gray-400'}`}>{sub.icon}</div>
                <h3 className={`text-[14px] font-bold mb-1 ${sub.active ? 'text-[#7A1C39]' : 'text-gray-800'}`}>{sub.name}</h3>
                <p className="text-[11px] text-gray-500">{sub.count} journals</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= EDITORIAL BOARD ================= */}
        <section className="py-20 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="text-[26px] font-serif font-bold text-gray-900">Editorial Board</h2>
                <p className="text-[13px] text-gray-500 max-w-2xl mt-1">Our editors are active researchers and ethical stewards of the scholarly record, committed to fair and rigorous review.</p>
              </div>
              <Link to="/editorial" className="text-[#7A1C39] text-[13px] font-bold hover:underline group">View full board <span className="group-hover:translate-x-1 inline-block transition-transform">&rarr;</span></Link>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              <aside className="w-full lg:w-[260px] flex-shrink-0">
                <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
                  <div className="bg-[#FAF9F6] text-gray-900 border-b border-gray-200 px-5 py-4 text-[14px] font-bold uppercase tracking-wider">Editorial Board</div>
                  <div className="text-[13px] text-gray-600 flex flex-col">
                    <button className="text-left px-5 py-3.5 border-b border-gray-100 hover:bg-[#FCF7F9] hover:text-[#7A1C39] transition-colors font-medium">Editors-in-Chief</button>
                    <button className="text-left px-5 py-3.5 border-b border-gray-100 hover:bg-[#FCF7F9] hover:text-[#7A1C39] transition-colors font-medium">Associate Editors</button>
                    <button className="text-left px-5 py-3.5 border-b border-gray-100 hover:bg-[#FCF7F9] hover:text-[#7A1C39] transition-colors font-medium">Reviewer Pool</button>
                    <button className="text-left px-5 py-3.5 border-b border-gray-100 hover:bg-[#FCF7F9] hover:text-[#7A1C39] transition-colors font-medium">Ethics Committee</button>
                  </div>
                </div>
              </aside>

              <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { name: "Prof. Bonsa Bonsa", role: "Editor-in-Chief", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
                  { name: "Dr. Samuel Tesfaye", role: "Associate Editor", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
                  { name: "Dr. Lensa Mekonnen", role: "Associate Editor", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
                ].map((editor, i) => (
                  <div key={i} className="bg-white rounded-xl overflow-hidden border border-gray-200 text-center pb-6 hover:shadow-lg transition-shadow group">
                    <div className="overflow-hidden h-[240px] mb-4 bg-gray-100">
                       <img src={editor.img} alt={editor.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-[16px]">{editor.name}</h3>
                    <p className="text-[11px] text-[#7A1C39] font-bold uppercase tracking-wider mt-1 mb-2">{editor.role}</p>
                    <p className="text-[12px] text-gray-500">ORA Academic</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= CTA SECTION ================= */}
        <section className="px-4 py-16 max-w-7xl mx-auto w-full">
          <div className="bg-[#531324] rounded-2xl p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row justify-between items-center shadow-2xl">
            <div className="absolute inset-0 opacity-[0.08] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            
            <div className="relative z-10 md:max-w-xl text-center md:text-left mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 leading-tight">
                Clear standards. Thoughtful review.<br/>Research with lasting reach.
              </h2>
              <p className="text-[14px] text-gray-300">
                Publish with ORA Academic Journals and join a global network of researchers committed to rigorous, ethical scholarship.
              </p>
            </div>
            
            <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center w-full md:w-auto">
              <button className="bg-white text-[#531324] px-8 py-3 rounded-lg text-[13px] font-bold hover:bg-gray-100 transition shadow-md hover:-translate-y-0.5 duration-300 w-full sm:w-auto">
                Submit a manuscript &rarr;
              </button>
              <button className="border border-white/40 text-white px-8 py-3 rounded-lg text-[13px] font-bold hover:bg-white/10 transition duration-300 w-full sm:w-auto">
                Author guidelines
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* 2. Independent Footer */}
      <Footer />
    </div>
  );
}