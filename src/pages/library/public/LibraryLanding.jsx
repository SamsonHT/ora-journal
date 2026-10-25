import React from 'react';
import GlobalHeader from '../../../components/GlobalHeader';
import { SearchOutlined, CheckCircleFilled, BookOutlined, GlobalOutlined } from '@ant-design/icons';

export default function LibraryLanding() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <GlobalHeader />
      
      {/* Navigation Strip */}
      <div className="border-b border-gray-200 py-3 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex gap-6 text-[12px] font-bold text-gray-500 uppercase tracking-wider">
          <a href="#" className="text-[#7A1849]">Home</a>
          <a href="#" className="hover:text-gray-800">Search catalog</a>
          <a href="#" className="hover:text-gray-800">Branches</a>
          <a href="#" className="hover:text-gray-800">Borrowing guide</a>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-24 px-4 bg-gray-900">
        <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Library" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="relative max-w-7xl mx-auto text-white">
          <p className="text-[11px] font-bold tracking-widest uppercase mb-4 text-gray-300">Explore the ORA Collection</p>
          <h1 className="text-5xl font-serif font-bold leading-tight mb-6 max-w-2xl">Welcome to ORA LMS</h1>
          <p className="text-[16px] text-gray-200 mb-8 max-w-xl">
            Discover local texts, digital files, and branch resources across language, culture, history, and knowledge.
          </p>
          <div className="flex gap-4 mb-8">
             <button className="bg-[#7A1849] text-white px-6 py-3 rounded-md font-bold">Browse catalog</button>
             <button className="bg-white text-gray-900 px-6 py-3 rounded-md font-bold">Find a branch</button>
          </div>
          <div className="bg-white rounded-md p-2 flex items-center max-w-2xl shadow-lg">
            <SearchOutlined className="text-gray-400 text-lg mx-3" />
            <input type="text" placeholder="Search by title, author, subject, or ISBN..." className="flex-1 outline-none text-[14px] text-gray-900" />
            <button className="bg-[#7A1849] text-white px-6 py-2 rounded font-bold text-[13px]">Search</button>
          </div>
        </div>
      </section>

      {/* Curated For You */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-serif font-bold mb-6">Curated for you</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
           {[
            { t: 'Alaan Qoosaa: A Reference', c: 'bg-[#4A1325]' },
            { t: 'Oromo Cultural Heritage', c: 'bg-[#531324]' },
            { t: 'Language & Identity', c: 'bg-[#7C2D12]' },
            { t: 'Reading Oromia', c: 'bg-[#064E3B]' }
          ].map((book, i) => (
            <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
              <div className={`h-56 ${book.c} p-4 flex flex-col justify-between text-white`}>
                 <span className="text-[9px] font-bold uppercase text-white/50">ORA LMS</span>
                 <h3 className="text-xl font-serif font-bold">{book.t}</h3>
              </div>
              <div className="p-4 bg-white">
                <span className="text-[10px] font-bold text-[#7A1849] bg-[#FCF7F9] px-2 py-1 rounded block w-max mb-3">Physical Book</span>
                <h4 className="text-[14px] font-bold mb-1">{book.t}</h4>
                <p className="text-[11px] text-gray-500 mb-3">Location: Branch 04</p>
                <button className="w-full py-2 border border-gray-300 rounded text-[12px] font-bold hover:bg-gray-50">View details</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Library at a glance */}
      <section className="bg-[#F8F9FA] py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-serif font-bold mb-8">Library at a glance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
             {[
               { v: '12,480', l: 'Books & documents' },
               { v: '3,200+', l: 'Digital resources' },
               { v: '2,100', l: 'Registered members' },
               { v: '8', l: 'Branches across Oromia' }
             ].map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <p className="text-3xl font-serif font-bold text-[#7A1849] mb-1">{stat.v}</p>
                  <p className="text-[12px] font-bold text-gray-500">{stat.l}</p>
                </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}