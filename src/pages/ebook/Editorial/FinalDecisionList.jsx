import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EbookEditorialLayout from '../../../layouts/ebook/EbookEditorialLayout';
import { SearchOutlined, ReadOutlined, DownOutlined, CheckOutlined } from '@ant-design/icons';

// Custom Dropdown Component
function FilterDropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selected = options.find(o => o.value === value) || options[0];

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between bg-white border border-gray-300 rounded-md px-3 py-1.5 text-[11px] text-gray-700 outline-none text-left font-medium">
        {selected.label}
        <DownOutlined className={`text-[9px] text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg py-1">
          {options.map(opt => (
            <button key={opt.value} onClick={() => { onChange(opt.value); setIsOpen(false); }} className={`w-full text-left px-3 py-1.5 text-[11px] flex justify-between ${value === opt.value ? 'bg-[#FCF7F9] text-[#7A1849] font-bold' : 'hover:bg-gray-50'}`}>
              {opt.label}
              {value === opt.value && <CheckOutlined className="text-[9px]" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

const MOCK_DECISIONS = [
  { id: 'EBK-2026-176', title: 'Margins of Translation', sub: 'Full manuscript · standard track', author: 'Mara Okafor', reviews: '2 / 2 complete', summary: 'Accept · Minor revisions', sumColor: 'text-[#52C41A]', status: 'Awaiting decision', statColor: 'text-[#D97706]', completed: '05 Oct 2026' },
  { id: 'EBK-2026-171', title: 'Common Ground', sub: 'Full manuscript · standard track', author: 'Prof. Helena Wu', reviews: '3 / 3 complete', summary: 'Major revisions', sumColor: 'text-[#FA8C16]', status: 'Awaiting decision', statColor: 'text-[#D97706]', completed: '04 Oct 2026' },
  { id: 'EBK-2026-166', title: 'The Open Seminar', sub: 'Full manuscript · standard track', author: 'Dr. Noura Saleh', reviews: '2 / 2 complete', summary: 'Accept', sumColor: 'text-[#52C41A]', status: 'Decision drafted', statColor: 'text-[#2F54EB]', completed: '02 Oct 2026' },
  { id: 'EBK-2026-159', title: 'Archives of a Warming World', sub: 'Full manuscript · standard track', author: 'Dr. Imani Cole', reviews: '2 / 2 complete', summary: 'Split recommendation', sumColor: 'text-gray-600', status: 'Editor assessment', statColor: 'text-[#722ED1]', completed: '30 Sep 2026' },
  { id: 'EBK-2026-151', title: 'Publics in Practice', sub: 'Full manuscript · standard track', author: 'Prof. Leon Vargas', reviews: '3 / 3 complete', summary: 'Decline', sumColor: 'text-[#F5222D]', status: 'Decision issued', statColor: 'text-[#52C41A]', completed: '27 Sep 2026' },
];

export default function FinalDecisionList() {
  const navigate = useNavigate();
  const [decisionFilter, setDecisionFilter] = useState('all');
  const [recommendationFilter, setRecommendationFilter] = useState('all');
  const [reviewFilter, setReviewFilter] = useState('all');

  return (
    <EbookEditorialLayout>
      <div className="max-w-[1400px] mx-auto pb-10">
        
        {/* HEADER */}
        <div className="flex justify-between items-end mb-6">
          <div>
            <p className="text-[10px] font-bold text-[#7A1849] uppercase tracking-wider mb-1">Decision Desk</p>
            <h1 className="text-[28px] font-bold text-gray-900 tracking-tight leading-none mb-1.5">Final decisions</h1>
            <p className="text-[13px] text-gray-500">Review-complete ebooks awaiting editorial assessment or holding a recorded final decision.</p>
          </div>
          <button className="flex items-center gap-2 border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-[12px] font-semibold transition-colors shadow-sm">
            <ReadOutlined className="text-[14px]" /> Decision policy
          </button>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
            <p className="text-[11px] font-medium text-gray-500 mb-1">Awaiting decision</p>
            <p className="text-[24px] font-bold text-gray-900 leading-none mb-1">9</p>
            <p className="text-[10px] text-gray-400">3 due today</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
            <p className="text-[11px] font-medium text-gray-500 mb-1">Decision drafted</p>
            <p className="text-[24px] font-bold text-gray-900 leading-none mb-1">4</p>
            <p className="text-[10px] text-gray-400">Awaiting approval</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
            <p className="text-[11px] font-medium text-gray-500 mb-1">Issued this month</p>
            <p className="text-[24px] font-bold text-gray-900 leading-none mb-1">18</p>
            <p className="text-[10px] text-gray-400">61% accept / revise</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
            <p className="text-[11px] font-medium text-gray-500 mb-1">Median decision time</p>
            <p className="text-[24px] font-bold text-gray-900 leading-none mb-1">4.2 days</p>
            <p className="text-[10px] text-gray-400">-0.8 vs last month</p>
          </div>
        </div>

        {/* FILTERS */}
        <div className="flex gap-3 mb-4 items-center">
          <div className="relative flex-1">
            <SearchOutlined className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[12px]" />
            <input type="text" placeholder="Search review-complete books..." className="w-full pl-8 pr-3 py-1.5 bg-white border border-gray-300 rounded-md text-[11px] outline-none focus:border-[#7A1849]" />
          </div>
          <div className="w-[130px]">
            <FilterDropdown options={[{ label: 'Decision: All', value: 'all' }, { label: 'Awaiting decision', value: 'awaiting' }]} value={decisionFilter} onChange={setDecisionFilter} />
          </div>
          <div className="w-[150px]">
            <FilterDropdown options={[{ label: 'Recommendation', value: 'all' }, { label: 'Accept', value: 'accept' }]} value={recommendationFilter} onChange={setRecommendationFilter} />
          </div>
          <div className="w-[140px]">
            <FilterDropdown options={[{ label: 'Review completed', value: 'all' }, { label: 'This week', value: 'week' }]} value={reviewFilter} onChange={setReviewFilter} />
          </div>
        </div>

        {/* TABLE */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#7A1849] text-white text-[10px] uppercase tracking-wider">
                <th className="px-4 py-2.5 font-bold w-[120px]">ID</th>
                <th className="px-4 py-2.5 font-bold">Book</th>
                <th className="px-4 py-2.5 font-bold">Author</th>
                <th className="px-4 py-2.5 font-bold">Reviews</th>
                <th className="px-4 py-2.5 font-bold">Review summary</th>
                <th className="px-4 py-2.5 font-bold">Decision status</th>
                <th className="px-4 py-2.5 font-bold">Completed</th>
                <th className="px-4 py-2.5 font-bold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {MOCK_DECISIONS.map((book, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 text-[11px] font-bold text-gray-700">{book.id}</td>
                  <td className="px-4 py-3">
                    <p className="text-[11px] font-bold text-gray-900">{book.title}</p>
                    <p className="text-[9px] text-gray-500 mt-0.5">{book.sub}</p>
                  </td>
                  <td className="px-4 py-3 text-[11px] text-gray-600">{book.author}</td>
                  <td className="px-4 py-3 text-[11px] text-gray-600">{book.reviews}</td>
                  <td className="px-4 py-3">
                    <p className={`text-[10px] font-bold ${book.sumColor}`}>{book.summary}</p>
                    <div className="flex gap-1 mt-1">
                      <div className="h-1 w-6 bg-[#52C41A] rounded"></div>
                      <div className="h-1 w-6 bg-[#FA8C16] rounded"></div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`inline-block px-2 py-0.5 rounded text-[9px] font-bold bg-[#FCF7F9] ${book.statColor}`}>
                      {book.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-[11px] text-gray-600">{book.completed}</td>
                  <td className="px-4 py-3 text-right">
                    <button onClick={() => navigate('/ebook/editorial/decision-workspace')} className="px-3 py-1 bg-[#7A1849] text-white rounded text-[10px] font-bold hover:bg-[#531324] transition-colors">
                      Decide
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center px-4 py-3 border-t border-gray-100">
            <p className="text-[10px] text-gray-500">Showing 1-5 of 13 review-complete books</p>
          </div>
        </div>
      </div>
    </EbookEditorialLayout>
  );
}