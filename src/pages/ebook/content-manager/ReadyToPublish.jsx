// src/pages/ebook/content-manager/ReadyToPublish.jsx
import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import DigitalContentManagerLayout from '../../../layouts/ebook/DigitalContentManagerLayout';
import { 
  SearchOutlined, ExportOutlined, DownOutlined, CheckCircleFilled
} from '@ant-design/icons';

const pendingBooks = [
  { id: 'EB-2026-184', title: 'The Civic Algorithm', author: 'Naomi Brooks', category: 'Social Sciences', status: 'Proof accepted', version: 'v3 · 05 Oct 2026' },
  { id: 'EB-2026-162', title: 'Digital Heritage and Memory', author: 'Maya Chen', category: 'Arts & Humanities', status: 'Proof accepted', version: 'v2 · 04 Oct 2026' },
  { id: 'EB-2026-159', title: 'Foundations of Data Ethics', author: 'James Wilson', category: 'Computer Science', status: 'Proof accepted', version: 'v2 · 04 Oct 2026' },
  { id: 'EB-2026-156', title: 'Coastal Resilience', author: 'Mina Patel', category: 'Environment', status: 'Proof accepted', version: 'v1 · 03 Oct 2026' },
  { id: 'EB-2026-152', title: 'Inclusive Learning Design', author: 'Aisha Mohammed', category: 'Education', status: 'Proof accepted', version: 'v2 · 03 Oct 2026' },
  { id: 'EB-2026-149', title: 'Applied Materials Science', author: 'David Kim', category: 'Engineering', status: 'Proof accepted', version: 'v3 · 02 Oct 2026' },
];

const publishedBooks = [
  { id: 'EB-2026-140', title: 'Data Governance in Practice', author: 'Lena Fischer', category: 'Computer Science', publishedOn: '12 Sep 2026', isbns: 'PDF 978-99944-12-21-2 · EPUB 978-99944-12-22-9' },
  { id: 'EB-2026-138', title: 'Archives of a Warming World', author: 'Elena Rossi', category: 'Environment', publishedOn: '08 Sep 2026', isbns: 'PDF 978-99944-12-18-0 · EPUB 978-99944-12-19-7' },
  { id: 'EB-2026-131', title: 'Language and Identity in Ethiopia', author: 'Tesfaye Bekele', category: 'Social Sciences', publishedOn: '28 Aug 2026', isbns: 'PDF 978-99944-12-14-3' },
];

export default function ReadyToPublish() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Ready to Publish');
  const [search, setSearch] = useState('');

  const filteredPending = useMemo(() => {
    return pendingBooks.filter(b => 
      b.title.toLowerCase().includes(search.toLowerCase()) || 
      b.author.toLowerCase().includes(search.toLowerCase()) ||
      b.id.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const filteredPublished = useMemo(() => {
    return publishedBooks.filter(b => 
      b.title.toLowerCase().includes(search.toLowerCase()) || 
      b.author.toLowerCase().includes(search.toLowerCase()) ||
      b.id.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <DigitalContentManagerLayout>
      <div className="space-y-5 pb-10">
        
        {/* Page Header */}
        <div className="flex justify-between items-start pt-2">
          <div>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">Workspace / Publication</p>
            <h1 className="text-[28px] font-bold text-[#1F2937] tracking-tight mb-1">Ready to publish</h1>
            <p className="text-[13px] text-gray-500">Finalize access rights, formats and identifiers for author-accepted proofs.</p>
          </div>
          <button className="bg-white text-gray-700 border border-gray-300 px-5 py-2 rounded-lg text-[12px] font-bold shadow-sm hover:bg-gray-50 transition-colors flex items-center gap-2">
            <ExportOutlined className="text-[12px]" /> Publication report
          </button>
        </div>

        {/* Tabs — Publication checklist replaced with Published books */}
        <div className="flex items-center gap-6 border-b border-gray-200 pt-2 mb-4">
          <button 
            onClick={() => setActiveTab('Ready to Publish')}
            className={`pb-3 text-[13px] font-bold border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'Ready to Publish' ? 'text-[#6B1D3A] border-[#6B1D3A]' : 'text-gray-500 border-transparent hover:text-gray-800'
            }`}
          >
            Ready to Publish <span className="bg-[#FCF7F9] text-[#6B1D3A] px-2 py-0.5 rounded text-[10px]">{pendingBooks.length}</span>
          </button>
          <button 
            onClick={() => setActiveTab('Published books')}
            className={`pb-3 text-[13px] font-bold border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'Published books' ? 'text-[#6B1D3A] border-[#6B1D3A]' : 'text-gray-500 border-transparent hover:text-gray-800'
            }`}
          >
            Published books <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-[10px]">{publishedBooks.length}</span>
          </button>
        </div>

        {/* ====== TAB: READY TO PUBLISH ====== */}
        {activeTab === 'Ready to Publish' && (
          <>
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                <p className="text-[12px] font-medium text-gray-500 mb-2">Accepted proofs</p>
                <p className="text-[32px] font-bold text-gray-900 leading-none mb-2">6</p>
                <p className="text-[11px] font-bold text-[#059669]">All awaiting publication</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                <p className="text-[12px] font-medium text-gray-500 mb-2">Identifiers to assign</p>
                <p className="text-[32px] font-bold text-gray-900 leading-none mb-2">12</p>
                <p className="text-[11px] font-bold text-[#D97706]">PDF and EPUB editions</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                <p className="text-[12px] font-medium text-gray-500 mb-2">Available ISBNs</p>
                <p className="text-[32px] font-bold text-gray-900 leading-none mb-2">24</p>
                <p className="text-[11px] font-bold text-[#059669]">Enough for 12 dual-format books</p>
              </div>
            </div>

            {/* Alert */}
            <div className="bg-[#ECFDF5] border border-[#A7F3D0] rounded-lg p-4 flex gap-3 items-start mb-2">
              <CheckCircleFilled className="text-[#059669] mt-0.5 text-sm" />
              <div>
                <p className="text-[12px] font-bold text-[#065F46]">Only author-accepted, unpublished books are shown</p>
                <p className="text-[11px] text-[#047857] mt-0.5">
                  Books awaiting proof acceptance remain in Pending Production. A published ebook moves to the Published books tab.
                </p>
              </div>
            </div>

            {/* Search */}
            <div className="flex gap-3 py-1">
              <div className="relative flex-1">
                <SearchOutlined className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search books ready for publication" 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-[13px] focus:outline-none focus:border-[#6B1D3A] transition-colors" 
                />
              </div>
              <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2.5 rounded-lg text-[12px] font-bold flex items-center gap-2 hover:bg-gray-50 w-[140px] justify-between">
                All categories <DownOutlined className="text-[10px] text-gray-400" />
              </button>
              <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2.5 rounded-lg text-[12px] font-bold flex items-center gap-2 hover:bg-gray-50 w-[140px] justify-between">
                Acceptance date <DownOutlined className="text-[10px] text-gray-400" />
              </button>
            </div>

            {/* Table */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead className="bg-[#6B1D3A] text-[10px] font-bold text-white uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-3.5 w-[35%]">Book / Author</th>
                    <th className="px-6 py-3.5 w-[15%]">Category</th>
                    <th className="px-6 py-3.5 w-[20%]">Author acceptance</th>
                    <th className="px-6 py-3.5 w-[15%]">ISBN status</th>
                    <th className="px-6 py-3.5 w-[15%]">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-[13px]">
                  {filteredPending.map((book) => (
                    <tr key={book.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <p className="font-bold text-[13px] text-gray-900 mb-0.5">{book.title}</p>
                        <p className="text-[11px] text-gray-400">{book.id} · {book.author}</p>
                      </td>
                      <td className="px-6 py-4 text-[12px] text-gray-600">{book.category}</td>
                      <td className="px-6 py-4">
                        <span className="bg-[#ECFDF5] text-[#059669] px-2.5 py-1 rounded-md text-[10px] font-bold inline-block mb-1">
                          {book.status}
                        </span>
                        <p className="text-[10.5px] text-gray-400">{book.version}</p>
                      </td>
                      <td className="px-6 py-4 text-[12px] text-gray-500">Not assigned</td>
                      <td className="px-6 py-4">
                        <button 
                          onClick={() => navigate(`/content-manager/publish/setup/${book.id}`)}
                          className="bg-white border border-gray-300 text-gray-700 px-4 py-1.5 rounded-md text-[11px] font-bold hover:bg-gray-50 transition-colors shadow-sm"
                        >
                          Publish setup
                        </button>
                      </td>
                    </tr>
                  ))}
                  {filteredPending.length === 0 && (
                    <tr><td colSpan="5" className="px-6 py-10 text-center text-gray-400">No books match your search.</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* ====== TAB: PUBLISHED BOOKS ====== */}
        {activeTab === 'Published books' && (
          <>
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
              <p className="text-[12px] font-medium text-gray-500 mb-2">Total published</p>
              <p className="text-[32px] font-bold text-gray-900 leading-none mb-2">{publishedBooks.length}</p>
              <p className="text-[11px] font-bold text-[#059669]">Live on ORA catalog</p>
            </div>

            <div className="flex gap-3 py-1">
              <div className="relative flex-1">
                <SearchOutlined className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search published books" 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-[13px] focus:outline-none focus:border-[#6B1D3A] transition-colors" 
                />
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead className="bg-[#6B1D3A] text-[10px] font-bold text-white uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-3.5 w-[30%]">Book / Author</th>
                    <th className="px-6 py-3.5 w-[15%]">Category</th>
                    <th className="px-6 py-3.5 w-[15%]">Published on</th>
                    <th className="px-6 py-3.5 w-[30%]">Assigned ISBNs</th>
                    <th className="px-6 py-3.5 w-[10%]">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-[13px]">
                  {filteredPublished.map((book) => (
                    <tr key={book.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <p className="font-bold text-[13px] text-gray-900 mb-0.5">{book.title}</p>
                        <p className="text-[11px] text-gray-400">{book.id} · {book.author}</p>
                      </td>
                      <td className="px-6 py-4 text-[12px] text-gray-600">{book.category}</td>
                      <td className="px-6 py-4 text-[12px] text-gray-600">{book.publishedOn}</td>
                      <td className="px-6 py-4 text-[11px] font-mono text-gray-600">{book.isbns}</td>
                      <td className="px-6 py-4">
                        <button 
                          onClick={() => navigate(`/content-manager/books/${book.id}`)}
                          className="bg-white border border-gray-300 text-gray-700 px-4 py-1.5 rounded-md text-[11px] font-bold hover:bg-gray-50 transition-colors shadow-sm"
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                  {filteredPublished.length === 0 && (
                    <tr><td colSpan="5" className="px-6 py-10 text-center text-gray-400">No published books match your search.</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* Footer */}
        <div className="flex justify-between items-center text-[10px] text-gray-400 pt-6 mt-4 border-t border-gray-200">
          <span>ORA Academic - eBook operations</span>
          <span>All dates in UTC+3</span>
        </div>
      </div>
    </DigitalContentManagerLayout>
  );
}