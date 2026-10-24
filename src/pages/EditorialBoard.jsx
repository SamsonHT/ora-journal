import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MailOutlined, GlobalOutlined } from '@ant-design/icons';

export default function EditorialBoard() {
  const editors = [
    { name: "Prof. Bonsa Bonsa", role: "Editor-in-Chief", uni: "Addis Ababa University", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Dr. Samuel Tesfaye", role: "Associate Editor", uni: "Haramaya University", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Dr. Lensa Mekonnen", role: "Associate Editor", uni: "Jimma University", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Prof. David Miller", role: "Section Editor", uni: "University of London", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Dr. Sarah Jenkins", role: "Section Editor", uni: "MIT", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Dr. Ahmed Ali", role: "Ethics Committee", uni: "Cairo University", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative py-20 bg-[#531324]">
          <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#531324] to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
            <p className="text-[11px] font-bold tracking-[0.2em] text-[#C59B4B] uppercase mb-3">Leadership</p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Editorial Board</h1>
            <p className="text-[15px] text-gray-200 max-w-2xl mx-auto">Meet the researchers and scholars guiding the academic direction of ORA.</p>
          </div>
        </section>

        <section className="py-20 max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {editors.map((editor, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all group">
                <div className="h-64 overflow-hidden">
                  <img src={editor.img} alt={editor.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-1">{editor.name}</h3>
                  <p className="text-[12px] font-bold text-[#7A1849] uppercase tracking-wider mb-2">{editor.role}</p>
                  <p className="text-[13px] text-gray-500 mb-4">{editor.uni}</p>
                  <div className="flex justify-center gap-3 text-gray-400">
                    <a href="#" className="hover:text-[#7A1849]"><MailOutlined /></a>
                    <a href="#" className="hover:text-[#7A1849]"><GlobalOutlined /></a>
                  </div>
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