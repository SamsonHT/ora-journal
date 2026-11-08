import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import EbookAuthorLayout from '../../../layouts/ebook/EbookAuthorLayout';

export default function Revisions() {
  const [activeFilter, setActiveFilter] = useState('All');

  const revisions = [
    {
      id: 'EB-2026-096',
      round: 'Round 1',
      title: 'Quantum Computing and Cryptography',
      feedback: 'Expand security analysis and update Chapters 4–6',
      status: 'Major Revision',
      statusColor: 'bg-[#FEF2F2] text-[#DC2626]',
      requested: 'Sep 24, 2026',
      deadline: 'Oct 7, 2026',
      daysLeft: '12 days left',
    },
    {
      id: 'EB-2026-074',
      round: 'Round 1',
      title: 'Renewable Energy Systems',
      feedback: 'Clarify figure captions and update references',
      status: 'Minor Revision',
      statusColor: 'bg-[#FFFBEB] text-[#D97706]',
      requested: 'Sep 22, 2026',
      deadline: 'Oct 2, 2026',
      daysLeft: '7 days left',
    },
  ];

  // Dynamically calculate filter counts
  const filterCounts = useMemo(() => {
    const counts = {
      All: revisions.length,
      'Major Revision': 0,
      'Minor Revision': 0,
    };
    revisions.forEach((rev) => {
      if (counts[rev.status] !== undefined) {
        counts[rev.status]++;
      }
    });
    return counts;
  }, [revisions]);

  // Filter logic
  const filteredRevisions = useMemo(() => {
    if (activeFilter === 'All') return revisions;
    return revisions.filter((rev) => rev.status === activeFilter);
  }, [activeFilter, revisions]);

  const filters = [
    { label: 'All' },
    { label: 'Major Revision' },
    { label: 'Minor Revision' },
  ];

  return (
    <EbookAuthorLayout>
      <div className="max-w-[1300px] mx-auto font-sans pb-12">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <p className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wider mb-1">
              Workspace / Revisions
            </p>
            <h1 className="text-[26px] font-bold text-[#111827] leading-tight mb-1">
              Revisions
            </h1>
            <p className="text-[13px] text-[#6B7280]">
              Review editorial feedback and submit revised book manuscripts before the deadline.
            </p>
          </div>
          
          <div className="flex items-center gap-3 self-start md:self-end">
            <div className="border border-gray-200 rounded-lg px-4 py-2 text-[12px] font-semibold text-gray-700 bg-white cursor-pointer hover:bg-gray-50 transition-colors shadow-sm">
              Sep 1 – Sep 25, 2026
            </div>
            <Link 
              to="/ebook/author/submit" 
              className="bg-[#7A1849] text-white px-5 py-2 rounded-lg text-[12px] font-bold hover:bg-[#531324] transition-colors shadow-sm"
            >
              New Submission
            </Link>
          </div>
        </div>

        {/* Main Table Card */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
          
          {/* Filters & Info Bar */}
          <div className="px-5 py-3.5 flex justify-between items-center border-b border-gray-200">
            <div className="flex gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.label}
                  onClick={() => setActiveFilter(filter.label)}
                  className={`px-3.5 py-1.5 rounded-md text-[11.5px] font-bold transition-all flex items-center gap-1.5 ${
                    activeFilter === filter.label 
                      ? 'bg-[#7A1849] text-white shadow-sm' 
                      : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {filter.label}
                  <span className={`px-1.5 py-0.5 rounded text-[10px] ${
                    activeFilter === filter.label ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                  }`}>
                    ({filterCounts[filter.label]})
                  </span>
                </button>
              ))}
            </div>
            <span className="text-[11.5px] text-[#6B7280] font-medium hidden sm:block">
              {revisions.length} revisions awaiting submission
            </span>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#7A1849] text-[10px] font-bold text-white uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-3 w-[40%]">Book Title</th>
                  <th className="px-6 py-3 w-[15%]">Revision Status</th>
                  <th className="px-6 py-3 w-[15%]">Requested</th>
                  <th className="px-6 py-3 w-[15%]">Deadline</th>
                  <th className="px-6 py-3 w-[15%] text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-[13px]">
                {filteredRevisions.length > 0 ? (
                  filteredRevisions.map((rev, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/50 transition-colors group">
                      {/* Title Column with Sub-text */}
                      <td className="px-6 py-4">
                        <div className="font-bold text-[#111827] text-[13px] mb-0.5">{rev.title}</div>
                        <div className="text-[11px] text-[#6B7280] font-medium mb-1">
                          {rev.id} • {rev.round}
                        </div>
                        <div className="text-[11.5px] text-[#6B7280]">
                          {rev.feedback}
                        </div>
                      </td>

                      {/* Revision Status */}
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-1 rounded-md text-[10.5px] font-bold ${rev.statusColor}`}>
                          {rev.status}
                        </span>
                      </td>

                      {/* Requested Date */}
                      <td className="px-6 py-4 text-[#6B7280]">
                        {rev.requested}
                      </td>

                      {/* Deadline */}
                      <td className="px-6 py-4">
                        <div className="text-[#111827] text-[12px]">{rev.deadline}</div>
                        <div className="text-[10.5px] font-bold text-[#DC2626] mt-0.5">{rev.daysLeft}</div>
                      </td>

                      {/* Action Button */}
                      <td className="px-6 py-4 text-right">
                        <button className="bg-[#7A1849] text-white px-4 py-1.5 rounded-md text-[11.5px] font-bold hover:bg-[#531324] shadow-sm transition-colors">
                          Submit Revision
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="px-6 py-12 text-center text-gray-500">
                      No revisions found for this filter.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Footer */}
          <div className="flex justify-between items-center px-5 py-3.5 border-t border-gray-200 bg-white">
            <p className="text-[12px] text-[#6B7280] font-medium">
              Showing <span className="font-bold text-gray-700">1–{filteredRevisions.length}</span> of <span className="font-bold text-gray-700">{filteredRevisions.length}</span> books requiring revision
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