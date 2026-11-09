// src/pages/ebook/content-manager/Typesetting.jsx
import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DigitalContentManagerLayout from '../../../layouts/ebook/DigitalContentManagerLayout';
import { 
  SearchOutlined, 
  ExportOutlined, 
  InfoCircleOutlined,
  DownOutlined,
  CheckOutlined
} from '@ant-design/icons';

const mockBooks = [
  { id: 'EB-2026-108', title: 'Clinical AI: Methods and Applications', author: 'Leila Hassan', status: 'Changes requested', version: 'v1 · 3 corrections', due: '07 Oct 2026', action: 'Revise proof', color: 'bg-[#FDF2F8] text-[#9D174D]' },
  { id: 'EB-2026-179', title: 'Archives of a Warming World', author: 'Elena Rossi', status: 'Proof not sent', version: 'Draft · Not sent', due: '06 Oct 2026', action: 'Prepare proof', color: 'bg-[#FFFBEB] text-[#D97706]' },
  { id: 'EB-2026-178', title: 'Sustainable Cities in Africa', author: 'A. Tesfaye', status: 'Awaiting verification', version: 'v2 · Sent 01 Oct', due: '08 Oct 2026', action: 'Track proof', color: 'bg-[#EFF6FF] text-[#2563EB]' },
  { id: 'EB-2026-171', title: 'Quantum Computing and Cryptography', author: 'Ravi Shah', status: 'Proof not sent', version: 'No proof uploaded', due: '07 Oct 2026', action: 'Prepare proof', color: 'bg-[#FFFBEB] text-[#D97706]' },
  { id: 'EB-2026-167', title: 'Water, Policy and Society', author: 'Mina Patel', status: 'Awaiting verification', version: 'v1 · Sent 28 Sep', due: '03 Oct · Overdue', action: 'Track proof', color: 'bg-[#EFF6FF] text-[#2563EB]' },
  { id: 'EB-2026-165', title: 'Teaching in a Digital World', author: 'Sofia Martins', status: 'Changes requested', version: 'v2 · 2 corrections', due: '09 Oct 2026', action: 'Revise proof', color: 'bg-[#FDF2F8] text-[#9D174D]' },
];

// Custom Dropdown Component
function CustomSelect({ label, options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef]);

  return (
    <div className="relative w-[160px]" ref={wrapperRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-white border border-gray-200 text-gray-700 px-4 py-2.5 rounded-lg text-[12px] font-bold flex items-center justify-between w-full hover:bg-gray-50 transition-colors ${isOpen ? 'border-[#7A1849] ring-1 ring-[#7A1849]/20' : ''}`}
      >
        <span className="truncate">{value}</span>
        <DownOutlined className={`text-[10px] text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute z-50 top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg py-1">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-[12px] flex items-center justify-between hover:bg-[#FCF7F9] transition-colors ${value === option ? 'text-[#7A1849] font-bold bg-[#FCF7F9]' : 'text-gray-600'}`}
            >
              {option}
              {value === option && <CheckOutlined className="text-[10px]" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Typesetting() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All pending');
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All categories');
  const [dueDate, setDueDate] = useState('All due dates');

  const tabs = [
    { label: 'All pending', count: 18 },
    { label: 'Proof not sent', count: 8 },
    { label: 'Awaiting verification', count: 7 },
    { label: 'Changes requested', count: 3 },
  ];

  const filteredBooks = useMemo(() => {
    let result = mockBooks;
    if (activeTab !== 'All pending') {
      result = result.filter(b => b.status === activeTab);
    }
    if (search) {
      const lowerSearch = search.toLowerCase();
      result = result.filter(b => 
        b.title.toLowerCase().includes(lowerSearch) || 
        b.author.toLowerCase().includes(lowerSearch) ||
        b.id.toLowerCase().includes(lowerSearch)
      );
    }
    return result;
  }, [activeTab, search]);

  return (
    <DigitalContentManagerLayout>
      <div className="space-y-5 pb-10">
        
        {/* Page Header */}
        <div className="flex justify-between items-start pt-2">
          <div>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">Workspace / Pending Production</p>
            <h1 className="text-[28px] font-bold text-[#1F2937] tracking-tight mb-1">Pending production</h1>
            <p className="text-[13px] text-gray-500">Prepare proofs, send them to authors and track verification until acceptance.</p>
          </div>
          <button className="bg-white text-gray-700 border border-gray-300 px-5 py-2.5 rounded-lg text-[12px] font-bold shadow-sm hover:bg-gray-50 transition-colors flex items-center gap-2">
            <ExportOutlined className="text-[12px]" /> Export queue
          </button>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-6 border-b border-gray-200 pt-2">
          {tabs.map(tab => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              className={`pb-3 text-[13px] font-bold border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === tab.label ? 'text-[#7A1849] border-[#7A1849]' : 'text-gray-500 border-transparent hover:text-gray-800'
              }`}
            >
              {tab.label}
              <span className={`px-2 py-0.5 rounded-full text-[10px] ${activeTab === tab.label ? 'bg-[#FCF7F9] text-[#7A1849]' : 'bg-gray-100 text-gray-500'}`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Search and Custom Filters */}
        <div className="flex gap-3 py-1">
          <div className="relative flex-1">
            <SearchOutlined className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search pending books" 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-[13px] focus:outline-none focus:border-[#7A1849] transition-colors" 
            />
          </div>
          
          <CustomSelect 
            options={['All categories', 'Health & Medical', 'Computer Science', 'Engineering', 'Social Sciences']}
            value={category}
            onChange={setCategory}
          />
          
          <CustomSelect 
            options={['All due dates', 'Overdue', 'Next 7 days', 'Next 30 days']}
            value={dueDate}
            onChange={setDueDate}
          />
        </div>

        {/* Table */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#7A1849] text-[10px] font-bold text-white uppercase tracking-wider">
              <tr>
                <th className="px-6 py-3.5 w-[35%]">Book / Author</th>
                <th className="px-6 py-3.5 w-[15%]">Proof status</th>
                <th className="px-6 py-3.5 w-[20%]">Version / Delivery</th>
                <th className="px-6 py-3.5 w-[15%]">Due date</th>
                <th className="px-6 py-3.5 w-[15%]">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-[13px]">
              {filteredBooks.length === 0 ? (
                <tr>
                  <td colSpan="5" className="px-6 py-10 text-center text-gray-400">
                    No pending books found for the selected filter.
                  </td>
                </tr>
              ) : (
                filteredBooks.map((book) => (
                  <tr 
                    key={book.id} 
                    className="hover:bg-gray-50/50 transition-colors cursor-pointer"
                    onClick={() => navigate('/content-manager/typeset/prepare')}
                  >
                    <td className="px-6 py-4">
                      <p className="font-bold text-[13px] text-gray-900 mb-0.5">{book.title}</p>
                      <p className="text-[11px] text-gray-400">{book.id} · {book.author}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold inline-block ${book.color}`}>
                        {book.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-[12px] text-gray-600">
                      {book.version}
                    </td>
                    <td className="px-6 py-4 text-[12px] text-gray-600">
                      {book.due}
                    </td>
                    <td className="px-6 py-4">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent row click from firing twice
                          navigate('/content-manager/typeset/prepare');
                        }}
                        className="bg-white border border-gray-300 text-gray-700 px-4 py-1.5 rounded-md text-[11px] font-bold hover:bg-gray-50 transition-colors shadow-sm"
                      >
                        Open
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center py-2">
          <p className="text-[11px] text-gray-500 font-medium">
            Showing 1–{filteredBooks.length} of {filteredBooks.length} pending books
          </p>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 border border-gray-200 rounded-md text-[11px] font-bold text-gray-600 hover:bg-gray-50 bg-white shadow-sm disabled:opacity-50">Previous</button>
            <button className="px-3 py-1.5 border border-[#7A1849] bg-[#FCF7F9] rounded-md text-[11px] font-bold text-[#7A1849]">1</button>
            <button className="px-3 py-1.5 border border-gray-200 rounded-md text-[11px] font-bold text-gray-600 hover:bg-gray-50 bg-white shadow-sm">Next</button>
          </div>
        </div>

        {/* Info Alert Footer */}
        <div className="bg-transparent rounded-lg py-2 flex gap-3 items-start max-w-2xl mt-4">
          <InfoCircleOutlined className="text-gray-400 mt-0.5" />
          <div>
            <p className="text-[11px] font-bold text-gray-700 mb-0.5">Author-accepted proofs are not in this queue</p>
            <p className="text-[11px] text-gray-500 leading-relaxed">
              Once accepted, a proof moves to Publication → Ready to Publish. Published titles appear as Completed in All Books.
            </p>
          </div>
        </div>

        {/* Page Footer */}
        <div className="flex justify-between items-center text-[10px] text-gray-400 pt-6 mt-4 border-t border-gray-200">
          <span>ORA Academic - eBook operations</span>
          <span>All dates in UTC+3</span>
        </div>
      </div>
    </DigitalContentManagerLayout>
  );
}