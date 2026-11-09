import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EbookEditorialLayout from '../../../layouts/ebook/EbookEditorialLayout';
import { 
  SearchOutlined, 
  DownloadOutlined, 
  LeftOutlined, 
  RightOutlined,
  DownOutlined,
  CheckOutlined
} from '@ant-design/icons';

// --- LOCAL CUSTOM DROPDOWN COMPONENT ---
function FilterDropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find(opt => opt.value === value) || options[0];

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between bg-white border ${
          isOpen ? 'border-[#7A1849] ring-1 ring-[#7A1849]' : 'border-gray-300'
        } rounded-md px-3 py-2 text-[12px] text-gray-700 outline-none transition-all text-left font-medium`}
      >
        <span className="truncate pr-4">{selectedOption.label}</span>
        <DownOutlined className={`text-[10px] text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto py-1">
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => {
                onChange(opt.value);
                setIsOpen(false);
              }}
              className={`w-full text-left px-3 py-2 text-[12px] flex items-center justify-between transition-colors ${
                value === opt.value 
                  ? 'bg-[#FCF7F9] text-[#7A1849] font-bold' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {opt.label}
              {value === opt.value && <CheckOutlined className="text-[10px]" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// Mock data
const MOCK_BOOKS = [
  { id: 'EBK-2026-184', title: 'Rivers of Evidence', subtitle: 'Digital humanities monograph', author: 'Dr. Leila Hassan', submitted: '04 Oct 2026', category: 'History', status: 'Awaiting screening' },
  { id: 'EBK-2026-183', title: 'The Civic Algorithm', subtitle: 'Governance and computation', author: 'Prof. Elias North', submitted: '02 Oct 2026', category: 'Politics', status: 'Reviewer assignment' },
  { id: 'EBK-2026-179', title: 'After the Monsoon', subtitle: 'Climate adaptation studies', author: 'Dr. Priya Raman', submitted: '29 Sep 2026', category: 'Environment', status: 'Under review' },
  { id: 'EBK-2026-176', title: 'Margins of Translation', subtitle: 'World literature and translation', author: 'Mara Okafor', submitted: '27 Sep 2026', category: 'Literature', status: 'Reviews complete' },
  { id: 'EBK-2026-168', title: 'Learning in Public', subtitle: 'Open pedagogy research', author: 'Dr. Sofia Mendes', submitted: '19 Sep 2026', category: 'Education', status: 'Revision requested' },
  { id: 'EBK-2026-154', title: 'The Material Archive', subtitle: 'Museum and heritage studies', author: 'Prof. Owen Hart', submitted: '08 Sep 2026', category: 'Culture', status: 'Accepted' },
];

export default function AllBooksList() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  
  // Dropdown States
  const [stageFilter, setStageFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('newest');

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Awaiting screening': return 'bg-[#FFF8E6] text-[#D48806]';
      case 'Reviewer assignment': return 'bg-[#F0F5FF] text-[#2F54EB]';
      case 'Under review': return 'bg-[#F9F0FF] text-[#722ED1]';
      case 'Reviews complete': return 'bg-[#F6FFED] text-[#52C41A]';
      case 'Revision requested': return 'bg-[#FFF2E8] text-[#FA541C]';
      case 'Accepted': return 'bg-[#E6F7FF] text-[#1890FF]';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <EbookEditorialLayout>
      <div className="max-w-[1400px] mx-auto pb-10">
        
        {/* HEADER */}
        <div className="flex justify-between items-end mb-6">
          <div>
            <p className="text-[11px] font-bold text-[#7A1849] uppercase tracking-wider mb-1">Editorial Library</p>
            <h1 className="text-[32px] font-bold text-gray-900 tracking-tight leading-none mb-2">All books</h1>
            <p className="text-[13px] text-gray-500">Search, filter, and manage every ebook submission across the editorial workflow.</p>
          </div>
          <button className="flex items-center gap-2 border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-[13px] font-semibold transition-colors shadow-sm">
            <DownloadOutlined className="text-[14px]" /> Export CSV
          </button>
        </div>

        {/* SEARCH & FILTERS */}
        <div className="flex gap-3 mb-6 items-center">
          <div className="relative flex-1">
            <SearchOutlined className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search by title, author, or book ID..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-gray-300 rounded-md text-[12px] outline-none focus:border-[#7A1849] focus:ring-1 focus:ring-[#7A1849] transition-all" 
            />
          </div>
          
          <div className="w-[140px]">
            <FilterDropdown 
              options={[
                { label: 'Stage: All', value: 'all' },
                { label: 'Awaiting screening', value: 'screening' },
                { label: 'Under review', value: 'review' }
              ]}
              value={stageFilter}
              onChange={setStageFilter}
            />
          </div>

          <div className="w-[140px]">
            <FilterDropdown 
              options={[
                { label: 'Category: All', value: 'all' },
                { label: 'History', value: 'history' },
                { label: 'Literature', value: 'literature' }
              ]}
              value={categoryFilter}
              onChange={setCategoryFilter}
            />
          </div>

          <div className="w-[150px]">
            <FilterDropdown 
              options={[
                { label: 'Submitted date', value: 'newest' },
                { label: 'Oldest first', value: 'oldest' }
              ]}
              value={dateFilter}
              onChange={setDateFilter}
            />
          </div>
        </div>

        {/* DATA TABLE CARD */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="flex justify-between items-center px-5 py-4 border-b border-gray-100 bg-[#FAFAFA]">
            <div>
              <p className="text-[14px] font-bold text-gray-900">148 submissions</p>
              <p className="text-[11px] text-gray-500 mt-0.5">Updated 3 minutes ago</p>
            </div>
            <button className="text-[11px] font-bold text-[#7A1849] bg-[#FCF7F9] border border-[#E8D5DF] px-3 py-1.5 rounded-md">Editorial master view</button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#7A1849] text-white text-[11px] uppercase tracking-wider">
                  <th className="px-5 py-3 font-bold w-[130px]">ID</th>
                  <th className="px-5 py-3 font-bold">Book</th>
                  <th className="px-5 py-3 font-bold">Author</th>
                  <th className="px-5 py-3 font-bold">Submitted</th>
                  <th className="px-5 py-3 font-bold">Category</th>
                  <th className="px-5 py-3 font-bold">Stage / Status</th>
                  <th className="px-5 py-3 font-bold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {MOCK_BOOKS.map((book) => (
                  <tr key={book.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-4 text-[12px] font-bold text-gray-700">{book.id}</td>
                    <td className="px-5 py-4">
                      <p className="text-[13px] font-bold text-gray-900">{book.title}</p>
                      <p className="text-[11px] text-gray-500 mt-0.5">{book.subtitle}</p>
                    </td>
                    <td className="px-5 py-4 text-[12px] text-gray-600">{book.author}</td>
                    <td className="px-5 py-4 text-[12px] text-gray-600">{book.submitted}</td>
                    <td className="px-5 py-4 text-[12px] text-gray-600">{book.category}</td>
                    <td className="px-5 py-4">
                      <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold ${getStatusStyle(book.status)}`}>
                        {book.status}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex justify-end gap-2">
                        <button onClick={() => navigate('/ebook/editorial/book-details')} className="px-3 py-1.5 border border-gray-300 text-gray-700 rounded text-[11px] font-bold hover:bg-gray-50 transition-colors">View</button>
                        <button onClick={() => navigate('/ebook/editorial/screening')} className="px-3 py-1.5 bg-[#7A1849] text-white rounded text-[11px] font-bold hover:bg-[#531324] transition-colors shadow-sm">Screen</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* PAGINATION */}
          <div className="flex justify-between items-center px-5 py-4 border-t border-gray-100 bg-white">
            <p className="text-[12px] text-gray-500">Showing <span className="font-bold text-gray-900">1-6</span> of 48 books</p>
            <div className="flex items-center gap-1">
              <button className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-gray-400 hover:bg-gray-50 disabled:opacity-50" disabled><LeftOutlined className="text-[10px]" /></button>
              <button className="w-7 h-7 flex items-center justify-center rounded bg-[#7A1849] text-white text-[11px] font-bold shadow-sm">1</button>
              <button className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-gray-700 text-[11px] font-medium hover:bg-gray-50">2</button>
              <button className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-gray-700 text-[11px] font-medium hover:bg-gray-50">3</button>
              <span className="px-1 text-gray-400 text-[11px]">...</span>
              <button className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-gray-700 text-[11px] font-medium hover:bg-gray-50">8</button>
              <button className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-gray-700 hover:bg-gray-50"><RightOutlined className="text-[10px]" /></button>
            </div>
          </div>
        </div>
      </div>
    </EbookEditorialLayout>
  );
}