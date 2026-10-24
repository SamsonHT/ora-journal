import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowRightOutlined, FileTextOutlined } from '@ant-design/icons';

export default function Issues() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero */}
        <section className="relative py-20 bg-[#531324]">
          <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#531324] to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
            <p className="text-[11px] font-bold tracking-[0.2em] text-[#C59B4B] uppercase mb-3">Archive</p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Journal Issues</h1>
            <p className="text-[15px] text-gray-200 max-w-2xl mx-auto">Browse all published volumes and issues across the ORA Academic portfolio.</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 max-w-5xl mx-auto px-4">
          <div className="space-y-6">
            {[
              { vol: 'Volume 18', issue: 'Issue 10', date: 'October 2026', articles: 12, cover: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
              { vol: 'Volume 18', issue: 'Issue 9', date: 'September 2026', articles: 14, cover: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
              { vol: 'Volume 18', issue: 'Issue 8', date: 'August 2026', articles: 10, cover: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row items-center gap-6 hover:shadow-md transition-shadow">
                <img src={item.cover} alt="Cover" className="w-32 h-40 object-cover rounded-lg shadow-md" />
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-2xl font-serif font-bold text-gray-900 mb-1">{item.vol}, {item.issue}</h2>
                  <p className="text-[13px] font-medium text-[#7A1849] mb-3">{item.date}</p>
                  <p className="text-[14px] text-gray-500 mb-4">This issue features {item.articles} peer-reviewed articles covering recent advances in the field.</p>
                  <button className="text-[#7A1849] font-bold text-[13px] hover:underline flex items-center gap-1 justify-center md:justify-start">
                    View Table of Contents <ArrowRightOutlined className="text-[10px]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}