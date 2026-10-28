import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SearchOutlined, LockOutlined, ArrowRightOutlined, DownOutlined, BookOutlined } from '@ant-design/icons';

export default function JournalsPage() {
  const navigate = useNavigate();

  const journals = [
    { id: 1, title: "Journal of Oromo Research", desc: "Evidence and methods for understanding climate risk, adaptation, and resilient communities.", eissn: "2049-3630", articles: "148", volume: "12", issue: "1", date: "June 2026", issn: "2049-3630" },
    { id: 2, title: "Journal of Oromo Research", desc: "Open research on material discovery, scalable systems, infrastructure, and applied engineering.", eissn: "2049-3630", articles: "86", volume: "12", issue: "1", date: "June 2026", issn: "2049-3630" },
    { id: 3, title: "Journal of Oromo Research", desc: "Transparent approaches to clinical evidence, health informatics, and reproducible data practice.", eissn: "2049-3630", articles: "112", volume: "12", issue: "1", date: "June 2026", issn: "2049-3630" }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-white border-b border-gray-200 pt-8 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-[11px] text-gray-400 font-medium mb-6 flex gap-2">
              <Link to="/" className="hover:text-[#7A1C39]">Home</Link> / 
              <Link to="/journals" className="hover:text-[#7A1C39]">Journals</Link> / 
              <span className="text-gray-800">Search journals</span>
            </div>
            <p className="text-[10px] font-bold tracking-[0.15em] text-[#7A1C39] uppercase mb-3">The ORA Academic Portfolio</p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Find a journal for your research</h1>
            <p className="text-[15px] text-gray-600 mb-8 max-w-3xl">Explore peer-reviewed, open-access journals. Discover their scope, latest issues, and submission information.</p>
            <div className="flex items-center bg-white border border-gray-300 rounded-lg p-1.5 max-w-4xl shadow-sm hover:border-[#7A1C39] transition-colors">
              <SearchOutlined className="text-gray-400 text-lg ml-4 mr-3" />
              <input type="text" placeholder="Search by journal title, subject, keyword, or ISSN" className="flex-1 py-2 outline-none text-[14px] text-gray-700 bg-transparent" />
              <button className="bg-[#7A1C39] text-white px-8 py-2.5 rounded-md text-[13px] font-semibold hover:bg-[#531324] transition flex items-center gap-2">Search journals <ArrowRightOutlined className="text-[10px]" /></button>
            </div>
            <div className="flex justify-between items-center mt-4 max-w-4xl text-[12px] text-gray-500">
              <p>Searching journals only. Looking for a specific paper?</p>
              <Link to="#" className="text-[#7A1C39] font-semibold hover:underline flex items-center gap-1">Go to article search <ArrowRightOutlined className="text-[10px]" /></Link>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="w-full lg:w-[280px] flex-shrink-0">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm mb-6">
                <div className="px-5 py-4 border-b border-gray-100 flex justify-between items-center">
                  <h3 className="text-[14px] font-bold text-gray-900">Refine journals</h3>
                  <button className="text-[11px] font-semibold text-[#7A1C39] hover:underline">Clear all</button>
                </div>
                <div className="p-5 space-y-6">
                  <div>
                    <h4 className="text-[12px] font-bold text-gray-800 mb-3 flex justify-between items-center cursor-pointer">Access type <span className="text-gray-400 text-[10px]">&#9650;</span></h4>
                    <div className="space-y-2.5 text-[12px] text-gray-600">
                      <label className="flex items-center gap-2.5 cursor-pointer hover:text-[#7A1C39]"><input type="checkbox" className="accent-[#7A1C39] w-4 h-4"/> Open Access (28)</label>
                      <label className="flex items-center gap-2.5 cursor-pointer hover:text-[#7A1C39]"><input type="checkbox" className="accent-[#7A1C39] w-4 h-4"/> Hybrid (4)</label>
                      <label className="flex items-center gap-2.5 cursor-pointer hover:text-[#7A1C39]"><input type="checkbox" className="accent-[#7A1C39] w-4 h-4"/> Subscription (2)</label>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[12px] font-bold text-gray-800 mb-3 flex justify-between items-center border-t pt-4 cursor-pointer">Language <span className="text-gray-400 text-[10px]">&#9650;</span></h4>
                    <div className="space-y-2.5 text-[12px] text-gray-600">
                      <label className="flex items-center gap-2.5 cursor-pointer hover:text-[#7A1C39]"><input type="checkbox" className="accent-[#7A1C39] w-4 h-4"/> English (24)</label>
                      <label className="flex items-center gap-2.5 cursor-pointer hover:text-[#7A1C39]"><input type="checkbox" className="accent-[#7A1C39] w-4 h-4"/> Afaan Oromo (18)</label>
                      <label className="flex items-center gap-2.5 cursor-pointer hover:text-[#7A1C39]"><input type="checkbox" className="accent-[#7A1C39] w-4 h-4"/> Amharic (6)</label>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[12px] font-bold text-gray-800 mb-3 flex justify-between items-center border-t pt-4 cursor-pointer">Publication year <span className="text-gray-400 text-[10px]">&#9650;</span></h4>
                    <div className="space-y-2.5 text-[12px] text-gray-600">
                      <label className="flex items-center gap-2.5 cursor-pointer hover:text-[#7A1C39]"><input type="checkbox" className="accent-[#7A1C39] w-4 h-4"/> 2026 (12)</label>
                      <label className="flex items-center gap-2.5 cursor-pointer hover:text-[#7A1C39]"><input type="checkbox" className="accent-[#7A1C39] w-4 h-4"/> 2025 (10)</label>
                      <label className="flex items-center gap-2.5 cursor-pointer hover:text-[#7A1C39]"><input type="checkbox" className="accent-[#7A1C39] w-4 h-4"/> 2024 (6)</label>
                    </div>
                  </div>
                  <button className="w-full bg-[#7A1C39] text-white py-2.5 rounded-md text-[13px] font-bold hover:bg-[#531324] transition shadow-sm mt-2">Apply filters</button>
                </div>
              </div>
              <div className="bg-[#FCF7F9] border border-[#F3E4EA] rounded-xl p-5">
                <div className="text-[#7A1C39] mb-2"><BookOutlined className="text-lg" /></div>
                <h4 className="text-[13px] font-bold text-gray-900 mb-2">Finding the right fit?</h4>
                <p className="text-[12px] text-gray-600 mb-4 leading-relaxed">Review a journal's aims and scope before preparing your manuscript.</p>
                <Link to="#" className="text-[12px] font-bold text-[#7A1C39] hover:underline">Read the author guide &rarr;</Link>
              </div>
            </aside>

            {/* Journal List */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-[20px] font-bold text-gray-900">All journals <span className="text-gray-500 font-normal text-[14px] ml-1">(28)</span></h2>
                  <p className="text-[12px] text-gray-500 mt-1">Showing 1-3 of 28 journals</p>
                </div>
                <div className="flex items-center gap-2 text-[12px] text-gray-500">
                  <span>Sort by</span>
                  <div className="border border-gray-300 rounded px-3 py-1.5 bg-white font-medium text-gray-700 cursor-pointer flex items-center gap-2">Recently updated <DownOutlined className="text-[10px]" /></div>
                </div>
              </div>

              <div className="space-y-4">
                {journals.map((journal) => (
                  <div key={journal.id} className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col sm:flex-row gap-6 hover:shadow-md transition-shadow group">
                    <div className="w-full sm:w-[160px] h-[200px] flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                      <img src="/jor.png" alt={journal.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-1">
                        <p className="text-[10px] font-bold text-gray-500 tracking-wider uppercase">JOR</p>
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#7A1C39] bg-[#FCF7F9] px-2 py-1 rounded"><LockOutlined className="text-[10px]" /> Open access</span>
                      </div>
                      <h3 className="text-[22px] font-serif font-bold text-gray-900 mb-2 leading-tight group-hover:text-[#7A1C39] transition-colors">{journal.title}</h3>
                      <p className="text-[12px] font-bold text-[#7A1C39] mb-2">Vol. {journal.volume} · Issue {journal.issue} · {journal.date} · ISSN {journal.issn}</p>
                      <p className="text-[13px] text-gray-600 mb-5">{journal.desc}</p>
                      <div className="grid grid-cols-3 gap-4 mb-5">
                        <div><p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">eISSN</p><p className="text-[13px] font-medium text-gray-800">{journal.eissn}</p></div>
                        <div><p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Issue Date</p><p className="text-[13px] font-medium text-gray-800">{journal.date}</p></div>
                        <div><p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Published articles</p><p className="text-[13px] font-medium text-gray-800">{journal.articles}</p></div>
                      </div>
                      <div className="mt-auto pt-4 border-t border-gray-100 flex justify-end">
                        <button 
                          onClick={() => navigate(`/issues/${journal.id}`)}
                          className="bg-[#7A1C39] text-white px-4 py-1.5 rounded text-[12px] font-semibold hover:bg-[#531324] transition flex items-center justify-center gap-1"
                        >
                          View journal <ArrowRightOutlined className="text-[10px]" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center mt-10 pt-6 border-t border-gray-200 text-[13px]">
                <button className="text-gray-400 hover:text-[#7A1C39] transition flex items-center gap-1 font-medium">&larr; Previous</button>
                <div className="flex gap-1">
                  <button className="w-8 h-8 rounded bg-[#7A1C39] text-white font-bold flex items-center justify-center">1</button>
                  <button className="w-8 h-8 rounded text-gray-600 hover:bg-gray-200 font-medium flex items-center justify-center">2</button>
                  <button className="w-8 h-8 rounded text-gray-600 hover:bg-gray-200 font-medium flex items-center justify-center">3</button>
                  <span className="w-8 h-8 flex items-center justify-center text-gray-400">...</span>
                  <button className="w-8 h-8 rounded text-gray-600 hover:bg-gray-200 font-medium flex items-center justify-center">10</button>
                </div>
                <button className="text-[#7A1C39] font-bold hover:underline transition flex items-center gap-1">Next &rarr;</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}