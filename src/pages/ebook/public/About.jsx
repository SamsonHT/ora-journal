import React from 'react';
import { Link } from 'react-router-dom';
import EbookHeader from '../../../components/ebook/EbookHeader';
import EbookFooter from '../../../components/ebook/EbookFooter';

export default function About() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans">
      <EbookHeader />

      {/* Hero */}
      <section className="bg-[#2D0A14] py-24 px-6 lg:px-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#7A1849]/40 to-transparent"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-[11px] font-bold tracking-[0.2em] text-[#E8C5D6] uppercase mb-4">About ORA eBooks</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
            Knowledge should be open, rigorous, and accessible to all.
          </h1>
          <p className="text-[16px] text-gray-300 leading-relaxed">
            ORA eBooks is a scholarly publishing platform dedicated to the humanities, social sciences, and interdisciplinary research, with a special focus on Oromo and African scholarship.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 max-w-[1000px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-4">
              We believe that scholarly knowledge should not be locked behind paywalls. Our mission is to publish high-quality, peer-reviewed books that are freely available to read, download, and share.
            </p>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              By removing barriers to access, we aim to democratise knowledge and ensure that research from and about the Oromo community reaches a global audience.
            </p>
          </div>
          <div className="bg-[#FCF7F9] p-8 rounded-2xl border border-[#7A1849]/10">
             <h3 className="text-xl font-bold text-gray-900 mb-4">Our Core Values</h3>
             <ul className="space-y-4 text-[14px] text-gray-700">
               <li className="flex gap-3"><span className="text-[#7A1849] font-bold">✓</span> <strong>Open Access:</strong> Every book is free to read and share.</li>
               <li className="flex gap-3"><span className="text-[#7A1849] font-bold">✓</span> <strong>Rigorous Review:</strong> All manuscripts undergo double-blind peer review.</li>
               <li className="flex gap-3"><span className="text-[#7A1849] font-bold">✓</span> <strong>Inclusivity:</strong> Amplifying underrepresented voices and languages.</li>
               <li className="flex gap-3"><span className="text-[#7A1849] font-bold">✓</span> <strong>Preservation:</strong> Ensuring long-term digital access for future generations.</li>
             </ul>
          </div>
        </div>

        <div className="text-center bg-white p-12 rounded-3xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Join the ORA eBooks Community</h2>
          <p className="text-[14px] text-gray-500 mb-6 max-w-xl mx-auto">Whether you are an author, reviewer, or reader, there is a place for you here.</p>
          <div className="flex justify-center gap-4">
            <Link to="/ebook/apply" className="bg-[#7A1849] text-white px-6 py-2.5 rounded font-bold text-[13px] hover:bg-[#531324]">Publish with us</Link>
            <Link to="/ebook/register" className="border border-gray-300 text-gray-700 px-6 py-2.5 rounded font-bold text-[13px] hover:bg-gray-50">Create an account</Link>
          </div>
        </div>
      </section>

      <EbookFooter />
    </div>
  );
}