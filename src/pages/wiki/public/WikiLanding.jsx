import React from 'react';
import GlobalHeader from '../../../components/GlobalHeader';
import { SearchOutlined, EditOutlined, GlobalOutlined, FileTextOutlined, CheckCircleFilled } from '@ant-design/icons';

export default function WikiLanding() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans text-gray-900">
      <GlobalHeader />
      
      {/* Wiki Sub-nav */}
      <div className="bg-white border-b border-gray-200 py-3 px-4">
        <div className="max-w-7xl mx-auto flex gap-6 text-[12px] font-bold text-gray-600">
          <a href="#" className="text-[#7A1849] border-b-2 border-[#7A1849] pb-3 -mb-3">Home</a>
          <a href="#" className="hover:text-gray-900">Subjects</a>
          <a href="#" className="hover:text-gray-900">Browse articles</a>
          <a href="#" className="hover:text-gray-900">Community</a>
          <a href="#" className="hover:text-gray-900">About</a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT SIDEBAR */}
        <div className="space-y-6">
           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h1 className="text-3xl font-serif font-bold text-[#7A1849] mb-2">ORA Wiki</h1>
              <p className="text-[12px] text-gray-600 mb-4">The free Afaan Oromo encyclopedia that anyone can edit. Reliable knowledge, neutral point of view, and open access for every reader.</p>
              <div className="bg-gray-50 p-2 rounded border flex items-center">
                <SearchOutlined className="text-gray-400 mx-2" />
                <input type="text" placeholder="Search Afaan Oromo articles" className="bg-transparent outline-none text-[13px] w-full" />
              </div>
           </div>

           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-[14px] font-bold mb-4">Portal statistics</h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div><p className="text-2xl font-bold text-[#7A1849]">1,248</p><p className="text-[10px] text-gray-500 uppercase">Articles</p></div>
                <div><p className="text-2xl font-bold text-[#7A1849]">186</p><p className="text-[10px] text-gray-500 uppercase">Active editors</p></div>
                <div><p className="text-2xl font-bold text-[#7A1849]">6</p><p className="text-[10px] text-gray-500 uppercase">Featured articles</p></div>
                <div><p className="text-2xl font-bold text-[#7A1849]">52k</p><p className="text-[10px] text-gray-500 uppercase">Monthly views</p></div>
              </div>
           </div>

           <div className="bg-[#7A1849] p-6 rounded-xl shadow-md text-white text-center">
              <h3 className="text-[15px] font-bold mb-2">Every thoughtful contribution makes the encyclopedia better.</h3>
              <p className="text-[11px] text-white/80 mb-4">Improve an article, add a reliable source, or help shape our community policies.</p>
              <button className="bg-white text-[#7A1849] px-4 py-2 rounded text-[12px] font-bold">Start contributing →</button>
           </div>
        </div>

        {/* CENTER / RIGHT MAIN CONTENT */}
        <div className="lg:col-span-2 space-y-6">
           {/* Featured Article */}
           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h2 className="text-[14px] font-bold text-gray-500 mb-3 uppercase">Featured article</h2>
              <div className="flex gap-4">
                 <div className="w-1/3 h-32 bg-gray-200 rounded-lg"></div> {/* Image Placeholder */}
                 <div className="w-2/3">
                    <h3 className="text-2xl font-serif font-bold text-[#7A1849] mb-2">Sirna Gadaa</h3>
                    <p className="text-[12px] text-gray-600 line-clamp-3">Sirna Gadaa keenya (Afaan Oromoo: Sirna Gadaa) is a traditional system of governance of the Oromo people in Ethiopia and northern Kenya...</p>
                    <a href="#" className="text-[11px] font-bold text-[#7A1849] block mt-2 hover:underline">Read article →</a>
                 </div>
              </div>
           </div>

           {/* Did You Know */}
           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h2 className="text-[14px] font-bold text-gray-500 mb-4 uppercase">Did you know...</h2>
              <ul className="space-y-4">
                 <li className="text-[13px] text-gray-700">• <strong>Afaan Oromoo</strong> is the most widely spoken language in Ethiopia.</li>
                 <li className="text-[13px] text-gray-700">• <strong>Jogroofii</strong> is a traditional Oromo sport similar to hockey.</li>
              </ul>
           </div>
        </div>
      </div>
    </div>
  );
}