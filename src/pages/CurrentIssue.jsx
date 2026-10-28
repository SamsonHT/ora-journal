import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { DownloadOutlined, ArrowLeftOutlined, GlobalOutlined, FileTextOutlined, TeamOutlined, EyeOutlined } from '@ant-design/icons';

export default function CurrentIssue() {
  const articles = [
    { id: 'ORA-2026-077', title: 'Reinforcement learning in autonomous flight paths', authors: 'Dr. Rachel Green, Liam Neeson', pages: '1-26', doi: '10.1080/ora.2026.077' },
    { id: 'ORA-2026-078', title: 'Graphene oxide membranes for water purification', authors: 'Dr. S. Okafor', pages: '27-48', doi: '10.1080/ora.2026.078' },
    { id: 'ORA-2026-079', title: 'Neural diagnostics with multimodal imaging', authors: 'J. Wallace, M. Patel', pages: '49-72', doi: '10.1080/ora.2026.079' },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans flex flex-col">
      <Header />
      
      {/* ================= MODERN HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-[#2D0A14] py-16 px-4 sm:px-6 lg:px-8">
        {/* Animated Mesh Gradient Background */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#7A1C39] rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#E8C5D6] rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[#E8C5D6] text-[10px] font-bold tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8C5D6] animate-pulse"></span>
              Current Issue
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-3 tracking-tight">
              Journal of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8C5D6] to-[#D4AF37]">Oromo Research</span>
            </h1>
            <p className="text-[14px] text-gray-300 max-w-xl leading-relaxed font-medium mb-6">
              Volume 12 · Issue 1 · June 2026 · ISSN 2049-3630. A curated selection of research on quantum computing, sensor arrays, and autonomous systems.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button className="bg-white text-[#7A1C39] px-5 py-2.5 rounded-lg text-[13px] font-bold hover:bg-gray-100 hover:scale-105 transition-all shadow-lg flex items-center gap-2">
                <DownloadOutlined /> Download Full Issue
              </button>
              <Link to="/journals" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2.5 rounded-lg text-[13px] font-bold hover:bg-white/20 transition-all flex items-center gap-2">
                <ArrowLeftOutlined /> Back to Journals
              </Link>
            </div>
          </div>
          
          {/* Floating Cover Image */}
          <div className="hidden md:block relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#E8C5D6] to-[#D4AF37] rounded-xl transform rotate-3 blur-sm opacity-30"></div>
            <img src="/jor.png" alt="JOR Cover" className="relative w-[180px] h-[250px] object-cover rounded-xl shadow-2xl transform rotate-0 hover:rotate-3 transition-transform duration-500" />
          </div>
        </div>
      </section>

      <main className="flex-grow max-w-7xl mx-auto px-4 py-10 w-full">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Content (Left) */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-[20px] font-bold text-gray-900">Articles in this Issue</h2>
              <span className="text-[12px] font-bold text-gray-400 bg-gray-100 px-2.5 py-1 rounded-md">3 Articles</span>
            </div>
            <div className="space-y-3">
              {articles.map((art, i) => (
                <div key={i} className="group bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#7A1C39]/20 transition-all duration-300 flex flex-col md:flex-row justify-between md:items-center gap-4 relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#7A1C39] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div>
                    <p className="text-[10px] font-bold text-[#7A1C39] mb-1.5 tracking-wider">{art.id}</p>
                    <h3 className="text-[15px] font-bold text-gray-900 mb-1 leading-snug group-hover:text-[#7A1C39] transition-colors">{art.title}</h3>
                    <p className="text-[12px] text-gray-500 mb-1">{art.authors} · Pages {art.pages}</p>
                    <p className="text-[11px] text-blue-600 font-medium">DOI: {art.doi}</p>
                  </div>
                  <button className="text-[11px] font-bold text-[#7A1C39] border border-[#7A1C39]/20 px-4 py-2 rounded-lg hover:bg-[#FCF7F9] flex items-center gap-2 shrink-0 transition-colors">
                    <DownloadOutlined /> Download PDF
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar (Info) */}
          <div className="w-full lg:w-[320px] space-y-5">
            
            {/* Issue Summary (Glassmorphism Card) */}
            <div className="bg-white/60 backdrop-blur-md p-5 rounded-xl border border-white/50 shadow-sm">
              <h3 className="text-[14px] font-bold text-gray-900 mb-4">Issue Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-gray-600 text-[12px]"><FileTextOutlined /> Total Articles</div>
                  <span className="text-[12px] font-bold text-gray-900">18</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-gray-600 text-[12px]"><FileTextOutlined /> Total Pages</div>
                  <span className="text-[12px] font-bold text-gray-900">482</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-gray-600 text-[12px]"><EyeOutlined /> Downloads</div>
                  <span className="text-[12px] font-bold text-[#15803D]">1,204</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-gray-600 text-[12px]"><TeamOutlined /> Citations</div>
                  <span className="text-[12px] font-bold text-gray-900">42</span>
                </div>
              </div>
            </div>

            {/* Share Link */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-[14px] font-bold text-gray-900 mb-3">Share this Issue</h3>
              <div className="p-2.5 rounded-lg border border-gray-200 bg-gray-50 flex items-center gap-2 mb-2">
                <GlobalOutlined className="text-[#7A1C39]" />
                <p className="text-[10px] font-mono text-gray-600 truncate">https://ora.org/journal/vol12-issue1</p>
              </div>
              <button className="w-full py-2 rounded-lg text-[11px] font-bold bg-[#7A1C39] text-white hover:bg-[#531324] transition-colors shadow-sm">
                Copy Link
              </button>
            </div>

            {/* Related Issues */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-[14px] font-bold text-gray-900 mb-3">Related Issues</h3>
              <div className="space-y-1">
                {['Volume 11, Issue 4', 'Volume 11, Issue 3', 'Volume 11, Issue 2'].map((item, i) => (
                  <Link key={i} to="/journals" className="block py-2 text-[12px] font-medium text-gray-600 hover:text-[#7A1C39] hover:translate-x-1 transition-all border-b border-gray-100 last:border-0">
                    {item} <span className="float-right">&rarr;</span>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}