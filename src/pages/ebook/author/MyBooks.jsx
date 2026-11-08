import React, { useState, useMemo } from 'react';
import EbookAuthorLayout from '../../../layouts/ebook/EbookAuthorLayout';
import { Link } from 'react-router-dom';

export default function MyBooks() {
  const [activeFilter, setActiveFilter] = useState('All');

  const books = [
    { id: 'EB-2026-108', title: 'Clinical AI: Methods and Applications', subject: 'Medical & Health Sciences', date: 'Sep 14, 2026', status: 'Pending Proof', statusColor: 'bg-[#F3F0FA] text-[#6B46C1]' },
    { id: 'EB-2026-096', title: 'Quantum Computing and Cryptography', subject: 'Computer Science', date: 'Aug 28, 2026', status: 'Major Revision', statusColor: 'bg-[#FEF2F2] text-[#DC2626]' },
    { id: 'EB-2026-082', title: 'Nanomaterials for Clean Water', subject: 'Materials Science', date: 'Jul 15, 2026', status: 'Pending Proof', statusColor: 'bg-[#F3F0FA] text-[#6B46C1]' },
    { id: 'EB-2026-074', title: 'Renewable Energy Systems', subject: 'Energy & Environment', date: 'Jun 02, 2026', status: 'Minor Revision', statusColor: 'bg-[#FFFBEB] text-[#D97706]' },
    { id: 'EB-2026-063', title: 'Rural Development and Public Policy', subject: 'Social Sciences', date: 'May 19, 2026', status: 'Pending Proof', statusColor: 'bg-[#F3F0FA] text-[#6B46C1]' },
    { id: 'EB-2026-059', title: 'Intelligent Transportation Networks', subject: 'Engineering', date: 'May 10, 2026', status: 'Under Review', statusColor: 'bg-[#FFFBEB] text-[#D97706]' },
    { id: 'EB-2026-048', title: 'Resilient Infrastructure Design', subject: 'Civil Engineering', date: 'Apr 29, 2026', status: 'Submitted', statusColor: 'bg-[#EFF6FF] text-[#2563EB]' },
    { id: 'EB-2026-031', title: 'Foundations of Applied Data Science', subject: 'Computer Science', date: 'Mar 12, 2026', status: 'Published', statusColor: 'bg-[#ECFDF5] text-[#059669]' },
    { id: 'Draft', title: 'Responsible AI in Healthcare', subject: 'Medical & Health Sciences', date: 'Sep 25, 2026', status: 'Draft', statusColor: 'bg-gray-100 text-gray-600' },
  ];

  // Dynamically calculate filter counts
  const filterCounts = useMemo(() => {
    const counts = {
      All: books.length,
      Draft: 0,
      Submitted: 0,
      'Under Review': 0,
      'Pending Proof': 0,
      'Minor Revision': 0,
      'Major Revision': 0,
      Published: 0,
    };
    books.forEach((book) => {
      if (counts[book.status] !== undefined) {
        counts[book.status]++;
      }
    });
    return counts;
  }, [books]);

  // Filter logic
  const filteredBooks = useMemo(() => {
    if (activeFilter === 'All') return books;
    return books.filter((book) => book.status === activeFilter);
  }, [activeFilter, books]);

  const filters = [
    { label: 'All' },
    { label: 'Draft' },
    { label: 'Submitted' },
    { label: 'Under Review' },
    { label: 'Pending Proof' },
    { label: 'Minor Revision' },
    { label: 'Major Revision' },
    { label: 'Published' },
  ];

  return (
    <EbookAuthorLayout>
      <div className="max-w-[1300px] mx-auto font-sans pb-12">
        
        {/* Page Title & Actions */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-[28px] font-bold text-gray-900 leading-tight">My Books</h1>
            <p className="text-[14px] text-[#6B7280] mt-1">Manage and monitor the progress of all your book submissions.</p>
          </div>
          <div className="flex gap-3">
            <div className="border border-gray-200 rounded-lg px-4 py-2 text-[13px] font-semibold text-gray-700 bg-white cursor-pointer hover:bg-gray-50 transition-colors">
              Sep 1 – Sep 25, 2026
            </div>
            <Link to="/ebook/author/submit" className="bg-[#7A1849] text-white px-5 py-2 rounded-lg text-[13px] font-semibold hover:bg-[#531324] transition-colors shadow-sm">
              New Submission
            </Link>
          </div>
        </div>

        {/* Main Table Card */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          
          {/* Filters & Search Bar */}
          <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-[#FAFAFA]">
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.label}
                  onClick={() => setActiveFilter(filter.label)}
                  className={`px-3 py-1.5 rounded-md text-[12px] font-semibold transition-all flex items-center gap-2 ${
                    activeFilter === filter.label 
                      ? 'bg-[#7A1849] text-white shadow-sm' 
                      : 'bg-white text-[#4B5563] border border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {filter.label}
                  <span className={`px-1.5 py-0.5 rounded text-[10px] ${
                    activeFilter === filter.label ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {filterCounts[filter.label]}
                  </span>
                </button>
              ))}
            </div>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search book title..." 
                className="pl-3 pr-4 py-2 border border-gray-200 rounded-lg text-[12px] w-[240px] outline-none focus:border-[#7A1849] transition-colors bg-white placeholder-[#9CA3AF]" 
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#7A1849] text-[10px] font-bold text-white uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-3.5 w-[30%]">Book Title</th>
                  <th className="px-6 py-3.5 w-[20%]">Subject</th>
                  <th className="px-6 py-3.5 w-[15%]">Submission Date</th>
                  <th className="px-6 py-3.5 w-[15%]">Status</th>
                  <th className="px-6 py-3.5 w-[20%] text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-[13px]">
                {filteredBooks.length > 0 ? (
                  filteredBooks.map((book, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/50 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="font-bold text-gray-900 text-[13px]">{book.title}</div>
                        <div className="text-[11px] text-gray-400 mt-0.5">{book.id}</div>
                      </td>
                      <td className="px-6 py-4 text-[#6B7280] font-medium">{book.subject}</td>
                      <td className="px-6 py-4 text-[#6B7280]">{book.date}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${book.statusColor}`}>
                          {book.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-[#7A1849] text-[12px] font-bold hover:underline ml-auto block">
                          {book.status === 'Draft' ? 'Edit Draft' : 'View Details'}
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="px-6 py-12 text-center text-gray-500">
                      No books found for this filter.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Footer */}
          <div className="flex justify-between items-center px-6 py-4 border-t border-gray-200 bg-white">
            <p className="text-[12px] text-[#6B7280] font-medium">
              Showing <span className="font-bold text-gray-700">1–{filteredBooks.length}</span> of <span className="font-bold text-gray-700">{filteredBooks.length}</span> books • 8 submitted, 1 draft
            </p>
            <div className="flex items-center gap-1">
              <button className="w-7 h-7 flex items-center justify-center rounded bg-[#7A1849] text-white text-[12px] font-bold shadow-sm">
                1
              </button>
            </div>
          </div>
        </div>
      </div>
    </EbookAuthorLayout>
  );
}