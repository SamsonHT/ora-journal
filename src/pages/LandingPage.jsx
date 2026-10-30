import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  SearchOutlined, ArrowRightOutlined, BookOutlined, 
  GlobalOutlined, SafetyCertificateOutlined, TeamOutlined,
  FileTextOutlined, ReadOutlined, DatabaseOutlined,
  ClockCircleOutlined, DownloadOutlined
} from '@ant-design/icons';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans flex flex-col">
      <Header />

      <main className="flex-grow">
        
        {/* ================= MODERN HERO SECTION ================= */}
        <section className="relative bg-[#2D0A14] overflow-hidden py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
          {/* Animated Mesh Gradient Background */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#7A1C39] rounded-full mix-blend-screen filter blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#E8C5D6] rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Hero Text */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[#E8C5D6] text-[10px] font-bold tracking-widest uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8C5D6] animate-pulse"></span>
                ORA Academic Publishing Platform
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.15] mb-6">
                Welcome to the <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8C5D6] to-[#D4AF37]">
                  Journal of Oromo Research
                </span>
              </h1>
              
              <p className="text-[15px] md:text-[16px] text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
                Researchers and policy-makers need access to contextually-relevant, quality research publications from the Oromo community. We are the publishing platform for rigorous, peer-reviewed Oromo scholarship.
              </p>
              
              {/* Search Bar */}
              <div className="bg-white/10 backdrop-blur-md p-1.5 rounded-xl border border-white/20 flex items-center max-w-xl mx-auto lg:mx-0 shadow-2xl hover:border-[#E8C5D6]/50 transition-colors duration-300">
                <SearchOutlined className="text-[#E8C5D6] text-lg ml-4 mr-3" />
                <input 
                  type="text" 
                  placeholder="Search journals, articles, authors, or keywords..." 
                  className="flex-1 py-2.5 outline-none text-[14px] text-white bg-transparent placeholder-gray-400"
                />
                <button className="bg-[#7A1C39] text-white px-6 py-2.5 rounded-lg text-[13px] font-bold hover:bg-[#531324] transition-colors shadow-sm">
                  Search
                </button>
              </div>
            </div>

            {/* Hero Image (Floating 3D Cover) */}
            <div className="flex-1 relative hidden lg:flex justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#E8C5D6] to-[#D4AF37] rounded-3xl transform rotate-6 blur-xl opacity-20"></div>
              <img 
                src="/jor.png" 
                alt="JOR Cover" 
                className="relative w-[300px] h-[420px] object-cover rounded-2xl shadow-2xl border border-white/10 transform hover:rotate-2 hover:scale-105 transition-all duration-500" 
              />
            </div>
          </div>
        </section>

        {/* ================= IMPACT STATISTICS ================= */}
        <section className="bg-white border-b border-gray-200 py-12 relative z-20 -mt-8 mx-4 sm:mx-6 lg:mx-auto max-w-6xl rounded-2xl shadow-xl">
          <div className="px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-gray-100">
              <div className="group cursor-default">
                <p className="text-3xl md:text-4xl font-bold text-[#7A1C39] group-hover:scale-110 transition-transform duration-300">28</p>
                <p className="text-[12px] font-bold text-gray-500 mt-1 uppercase tracking-wider">Journals</p>
              </div>
              <div className="group cursor-default">
                <p className="text-3xl md:text-4xl font-bold text-[#7A1C39] group-hover:scale-110 transition-transform duration-300">18</p>
                <p className="text-[12px] font-bold text-gray-500 mt-1 uppercase tracking-wider">Open Access</p>
              </div>
              <div className="group cursor-default">
                <p className="text-3xl md:text-4xl font-bold text-[#7A1C39] group-hover:scale-110 transition-transform duration-300">12</p>
                <p className="text-[12px] font-bold text-gray-500 mt-1 uppercase tracking-wider">No Fee OA</p>
              </div>
              <div className="group cursor-default">
                <p className="text-3xl md:text-4xl font-bold text-[#7A1C39] group-hover:scale-110 transition-transform duration-300">214</p>
                <p className="text-[12px] font-bold text-gray-500 mt-1 uppercase tracking-wider">Issues</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-8 pt-8 border-t border-gray-100 divide-x divide-gray-100">
              <div className="group cursor-default">
                <p className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-[#7A1C39] transition-colors">3,201</p>
                <p className="text-[11px] font-medium text-gray-400 mt-1 uppercase tracking-wider">Abstracts</p>
              </div>
              <div className="group cursor-default">
                <p className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-[#7A1C39] transition-colors">2,854</p>
                <p className="text-[11px] font-medium text-gray-400 mt-1 uppercase tracking-wider">Full Text</p>
              </div>
              <div className="group cursor-default">
                <p className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-[#7A1C39] transition-colors">1,842</p>
                <p className="text-[11px] font-medium text-gray-400 mt-1 uppercase tracking-wider">OA Articles</p>
              </div>
              <div className="group cursor-default">
                <p className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-[#7A1C39] transition-colors">1,204</p>
                <p className="text-[11px] font-medium text-gray-400 mt-1 uppercase tracking-wider">No Fee OA</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PROMOTING ACCESS (Features) ================= */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Promoting access to Oromo Research
            </h2>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              For over a decade, ORA has been increasing global access to research published in Oromo journals. We offer a unique assessment system for partner journals and provide free technical training to support ethically sound publishing practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <GlobalOutlined />, title: "Global Access", desc: "Increasing the reach and visibility of Oromo-published research worldwide." },
              { icon: <SafetyCertificateOutlined />, title: "Quality Standards", desc: "Assessing and promoting best practices in scholarly publishing." },
              { icon: <TeamOutlined />, title: "Training & Support", desc: "Offering free technical services and training for Oromo journals." },
              { icon: <ReadOutlined />, title: "Open Access", desc: "Supporting fee-free publication models for equitable research." },
            ].map((feature, i) => (
              <div key={i} className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-[#FCF7F9] flex items-center justify-center mb-6 group-hover:bg-[#7A1C39] transition-colors duration-300">
                  <span className="text-2xl text-[#7A1C39] group-hover:text-white transition-colors duration-300">{feature.icon}</span>
                </div>
                <h4 className="text-[16px] font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-[13px] text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= LATEST ARTICLES ================= */}
        <section className="bg-white py-20 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
              <div>
                <h2 className="text-[26px] font-serif font-bold text-gray-900">Latest Articles</h2>
                <p className="text-[13px] text-gray-500 mt-1">Recently published research from the Journal of Oromo Research.</p>
              </div>
              <Link to="/issues/current" className="text-[#7A1C39] text-[13px] font-bold hover:underline flex items-center gap-1 group">
                View Current Issue <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </Link>
            </div>

            <div className="space-y-4">
              {[
                { id: 'ORA-2026-077', title: 'Reinforcement learning in autonomous flight paths', authors: 'Dr. Rachel Green, Liam Neeson', pages: '1-26', type: 'Research Article' },
                { id: 'ORA-2026-078', title: 'Graphene oxide membranes for water purification', authors: 'Dr. S. Okafor', pages: '27-48', type: 'Research Article' },
                { id: 'ORA-2026-079', title: 'Neural diagnostics with multimodal imaging', authors: 'J. Wallace, M. Patel', pages: '49-72', type: 'Review Article' },
              ].map((art, i) => (
                <div key={i} className="group bg-[#FAF9F6] p-5 rounded-xl border border-gray-200 hover:border-[#7A1C39]/30 hover:shadow-md transition-all duration-300 flex flex-col md:flex-row justify-between md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[10px] font-bold text-[#7A1C39]">{art.id}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                      <span className="text-[10px] font-medium text-gray-500 uppercase tracking-wider">{art.type}</span>
                    </div>
                    <h3 className="text-[15px] font-bold text-gray-900 mb-1 group-hover:text-[#7A1C39] transition-colors leading-snug">{art.title}</h3>
                    <p className="text-[12px] text-gray-500">{art.authors} · Pages {art.pages}</p>
                  </div>
                  <button className="text-[12px] font-bold text-[#7A1C39] border border-[#7A1C39]/20 px-4 py-2 rounded-lg hover:bg-white flex items-center gap-2 shrink-0 transition-colors">
                    <DownloadOutlined /> Read Article
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= AUTHOR CTA ================= */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#7A1C39] rounded-3xl p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row justify-between items-center shadow-2xl">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full mix-blend-overlay filter blur-2xl"></div>

            <div className="relative z-10 md:max-w-xl text-center md:text-left mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 leading-tight">
                Ready to publish your research?
              </h2>
              <p className="text-[15px] text-[#E8C5D6]">
                Join a global network of researchers committed to rigorous, ethical scholarship. Submit your manuscript to the Journal of Oromo Research today.
              </p>
            </div>
            
            <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center w-full md:w-auto">
              <Link to="/author-guide" className="bg-white text-[#7A1C39] px-8 py-3 rounded-lg text-[13px] font-bold hover:bg-gray-100 transition shadow-md hover:-translate-y-0.5 duration-300 w-full sm:w-auto text-center">
                Submit a Manuscript
              </Link>
              <Link to="/editorial" className="border border-white/30 text-white px-8 py-3 rounded-lg text-[13px] font-bold hover:bg-white/10 transition duration-300 w-full sm:w-auto text-center">
                Editorial Board
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}