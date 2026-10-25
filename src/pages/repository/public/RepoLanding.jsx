import React from 'react';
import GlobalHeader from '../../../components/GlobalHeader';
import { SearchOutlined, FileTextOutlined, GlobalOutlined, CheckCircleFilled } from '@ant-design/icons';

export default function RepoLanding() {
  return (
    <div className="min-h-screen bg-[#FCF7F9] font-sans text-gray-900">
      <GlobalHeader />

      {/* Sub-nav */}
      <div className="bg-white border-b border-gray-200 py-3 px-4">
        <div className="max-w-7xl mx-auto flex gap-6 text-[12px] font-bold text-gray-600">
          <a href="#" className="text-[#7A1849] border-b-2 border-[#7A1849] pb-3 -mb-3">Explore</a>
          <a href="#" className="hover:text-gray-900">Collections</a>
          <a href="#" className="hover:text-gray-900">Communities</a>
          <a href="#" className="hover:text-gray-900">Recent additions</a>
          <a href="#" className="hover:text-gray-900">About ORA</a>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 px-4 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2">
           <p className="text-[10px] font-bold tracking-widest text-[#7A1849] uppercase mb-3">The ORA Knowledge Commons</p>
           <h1 className="text-5xl font-serif font-bold leading-[1.1] mb-6">Welcome to a world of open knowledge.</h1>
           <p className="text-[15px] text-gray-600 mb-8">
             Explore the ideas, discoveries and stories of our research community. Free to read. Open to everyone.
           </p>
           <div className="bg-white border border-gray-300 rounded-lg p-2 flex items-center shadow-sm">
             <SearchOutlined className="text-gray-400 text-lg mx-3" />
             <input type="text" placeholder="Search research, authors or keywords" className="flex-1 outline-none text-[14px]" />
             <button className="bg-[#7A1849] text-white px-6 py-2.5 rounded-md font-bold text-[13px]">Search ORA</button>
           </div>
        </div>
        <div className="md:w-1/2">
           <img src="https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Library" className="rounded-xl shadow-xl w-full h-[350px] object-cover" />
        </div>
      </section>

      {/* Discover something meaningful */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
           <h2 className="text-2xl font-serif font-bold mb-8">Discover something meaningful</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { tag: 'FEATURED COLLECTION', title: 'Climate, place & possibility', desc: 'Research for a more resilient world, from urban heat to coastal ecosystems.', link: '1,284 open-access items' },
                { tag: 'LATEST RESEARCH', title: 'Urban heat and community resilience', desc: 'Anirita Rahman · Environmental sciences · 2026', link: 'Research article · Published 20 Oct' },
                { tag: 'EXPLORE THE ARCHIVE', title: 'The stories that connect us', desc: 'Discover oral histories, cultural records and the work of our communities.', link: '542 items in Arts & Humanities' },
              ].map((card, i) => (
                <div key={i} className="border border-gray-200 p-6 rounded-xl hover:shadow-md transition">
                   <p className="text-[9px] font-bold text-[#7A1849] uppercase mb-2 flex items-center gap-1"><GlobalOutlined /> {card.tag}</p>
                   <h3 className="text-[18px] font-bold mb-2">{card.title}</h3>
                   <p className="text-[13px] text-gray-600 mb-4 line-clamp-2">{card.desc}</p>
                   <p className="text-[11px] font-bold text-gray-400">{card.link}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[#FCF7F9]">
         <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div><p className="text-4xl font-serif font-bold text-[#7A1849]">24,680</p><p className="text-[11px] font-bold text-gray-500 mt-1">Open-access items</p></div>
            <div><p className="text-4xl font-serif font-bold text-[#7A1849]">86</p><p className="text-[11px] font-bold text-gray-500 mt-1">Research collections</p></div>
            <div><p className="text-4xl font-serif font-bold text-[#7A1849]">4,120</p><p className="text-[11px] font-bold text-gray-500 mt-1">Contributing researchers</p></div>
            <div><p className="text-[14px] font-medium text-gray-500 mt-3">Preserved for tomorrow.<br/>Available today.</p></div>
         </div>
      </section>
    </div>
  );
}