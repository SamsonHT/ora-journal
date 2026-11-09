import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EbookEditorialLayout from '../../../layouts/ebook/EbookEditorialLayout';
import { 
  SearchOutlined, 
  TeamOutlined,
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

// Mock Data
const MOCK_REVIEW_BOOKS = [
  { id: 'EBK-2026-181', title: 'Listening to the City', subtitle: 'Screening passed · standard priority', author: 'Dr. Amara Bell', category: 'Urban studies', status: 'Unassigned', assignBy: '09 Oct 2026' },
  { id: 'EBK-2026-180', title: 'Data After Dark', subtitle: 'Screening passed · standard priority', author: 'Prof. Ji-won Park', category: 'Media studies', status: '1 of 2 assigned', assignBy: '08 Oct 2026' },
  { id: 'EBK-2026-178', title: 'Sovereign Ecologies', subtitle: 'Screening passed · standard priority', author: 'Dr. Mateo Silva', category: 'Environment', status: 'Invites pending', assignBy: '07 Oct 2026' },
  { id: 'EBK-2026-173', title: 'Borderless Classrooms', subtitle: 'Screening passed · standard priority', author: 'Dr. Sofia Mendes', category: 'Education', status: 'Unassigned', assignBy: '10 Oct 2026' },
  { id: 'EBK-2026-169', title: 'Machine Reading Culture', subtitle: 'Screening passed · standard priority', author: 'Prof. Anna Kovács', category: 'Digital humanities', status: '1 decline · replace', assignBy: 'Overdue' },
];

export default function AssignReviewer() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  
  // Dropdown States
  const [assignmentFilter, setAssignmentFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [deadlineFilter, setDeadlineFilter] = useState('all');

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Unassigned': return 'bg-[#FFF8E6] text-[#D48806]'; // Yellow
      case '1 of 2 assigned': return 'bg-[#F0F5FF] text-[#2F54EB]'; // Blue
      case 'Invites pending': return 'bg-[#F9F0FF] text-[#722ED1]'; // Purple
      case '1 decline · replace': return 'bg-[#FFF2E8] text-[#FA541C]'; // Orange/Red
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <EbookEditorialLayout>
      <div className="max-w-[1400px] mx-auto pb-10">
        
        {/* --- HEADER SECTION --- */}
        <div className="flex justify-between items-end mb-6">
          <div>
            <p className="text-[10px] font-bold text-[#7A1849] uppercase tracking-wider mb-1">
              Peer Review
            </p>
            <h1 className="text-[28px] font-bold text-gray-900 tracking-tight leading-none mb-1.5">
              Assign reviewers
            </h1>
            <p className="text-[13px] text-gray-500">
              Screened books ready for expert review. Invite at least two independent reviewers per title.
            </p>
          </div>
          <button className="flex items-center gap-2 border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-[12px] font-semibold transition-colors shadow-sm">
            <TeamOutlined className="text-[14px]" /> Reviewer directory
          </button>
        </div>

        {/* --- STATS ROW --- */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
            <p className="text-[12px] font-medium text-gray-500 mb-1">Ready to assign</p>
            <p className="text-[28px] font-bold text-gray-900 leading-none mb-2">12</p>
            <p className="text-[11px] font-medium text-[#F5222D]">4 due this week</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
            <p className="text-[12px] font-medium text-gray-500 mb-1">Invitations pending</p>
            <p className="text-[28px] font-bold text-gray-900 leading-none mb-2">21</p>
            <p className="text-[11px] font-medium text-[#7A1849]">7 need follow-up</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
            <p className="text-[12px] font-medium text-gray-500 mb-1">Fully assigned</p>
            <p className="text-[28px] font-bold text-gray-900 leading-none mb-2">34</p>
            <p className="text-[11px] font-medium text-gray-400">Across 19 titles</p>
          </div>
        </div>

        {/* --- SEARCH & FILTERS --- */}
        <div className="flex gap-3 mb-6 items-center">
          <div className="relative flex-1">
            <SearchOutlined className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search screened books..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-gray-300 rounded-md text-[12px] outline-none focus:border-[#7A1849] focus:ring-1 focus:ring-[#7A1849] transition-all" 
            />
          </div>
          
          <div className="w-[150px]">
            <FilterDropdown 
              options={[
                { label: 'Assignment: All', value: 'all' },
                { label: 'Unassigned', value: 'unassigned' },
                { label: 'Pending', value: 'pending' }
              ]}
              value={assignmentFilter}
              onChange={setAssignmentFilter}
            />
          </div>

          <div className="w-[140px]">
            <FilterDropdown 
              options={[
                { label: 'Category: All', value: 'all' },
                { label: 'Urban studies', value: 'urban' },
                { label: 'Environment', value: 'environment' }
              ]}
              value={categoryFilter}
              onChange={setCategoryFilter}
            />
          </div>

          <div className="w-[130px]">
            <FilterDropdown 
              options={[
                { label: 'Deadline', value: 'all' },
                { label: 'Due this week', value: 'week' },
                { label: 'Overdue', value: 'overdue' }
              ]}
              value={deadlineFilter}
              onChange={setDeadlineFilter}
            />
          </div>
        </div>

        {/* --- DATA TABLE CARD --- */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#7A1849] text-white text-[11px] uppercase tracking-wider">
                  <th className="px-5 py-3 font-bold w-[130px]">ID</th>
                  <th className="px-5 py-3 font-bold">Book</th>
                  <th className="px-5 py-3 font-bold">Author</th>
                  <th className="px-5 py-3 font-bold">Category</th>
                  <th className="px-5 py-3 font-bold">Assignment status</th>
                  <th className="px-5 py-3 font-bold">Assign by</th>
                  <th className="px-5 py-3 font-bold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {MOCK_REVIEW_BOOKS.map((book) => (
                  <tr key={book.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-3.5 text-[12px] font-bold text-gray-700">{book.id}</td>
                    <td className="px-5 py-3.5">
                      <p className="text-[12px] font-bold text-gray-900">{book.title}</p>
                      <p className="text-[10px] text-gray-500 mt-0.5">{book.subtitle}</p>
                    </td>
                    <td className="px-5 py-3.5 text-[12px] text-gray-600">{book.author}</td>
                    <td className="px-5 py-3.5 text-[12px] text-gray-600">{book.category}</td>
                    <td className="px-5 py-3.5">
                      <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold ${getStatusStyle(book.status)}`}>
                        {book.status}
                      </span>
                    </td>
                    <td className={`px-5 py-3.5 text-[12px] ${book.assignBy === 'Overdue' ? 'text-[#F5222D] font-bold' : 'text-gray-600'}`}>
                      {book.assignBy}
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex justify-end gap-2">
                        <button 
                          onClick={() => navigate('/ebook/editorial/book-details')} 
                          className="px-3 py-1.5 border border-gray-300 text-gray-700 rounded text-[11px] font-bold hover:bg-gray-50 transition-colors"
                        >
                          View
                        </button>
                        <button 
                          onClick={() => navigate('/ebook/editorial/reviewers/assign')} 
                          className="px-3 py-1.5 bg-[#7A1849] text-white rounded text-[11px] font-bold hover:bg-[#531324] transition-colors shadow-sm"
                        >
                          Assign
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* --- PAGINATION --- */}
          <div className="flex justify-between items-center px-5 py-3 border-t border-gray-100 bg-white">
            <p className="text-[11px] text-gray-500">
              Showing <span className="font-bold text-gray-900">1-5</span> of 12 screened books
            </p>
            <div className="flex items-center gap-1">
              <button className="w-6 h-6 flex items-center justify-center rounded border border-gray-200 text-gray-400 hover:bg-gray-50 disabled:opacity-50" disabled>
                <LeftOutlined className="text-[9px]" />
              </button>
              <button className="w-6 h-6 flex items-center justify-center rounded bg-[#7A1849] text-white text-[10px] font-bold shadow-sm">
                1
              </button>
              <button className="w-6 h-6 flex items-center justify-center rounded border border-gray-200 text-gray-700 text-[10px] font-medium hover:bg-gray-50">
                2
              </button>
              <button className="w-6 h-6 flex items-center justify-center rounded border border-gray-200 text-gray-700 text-[10px] font-medium hover:bg-gray-50">
                3
              </button>
              <span className="px-1 text-gray-400 text-[10px]">...</span>
              <button className="w-6 h-6 flex items-center justify-center rounded border border-gray-200 text-gray-700 text-[10px] font-medium hover:bg-gray-50">
                8
              </button>
              <button className="w-6 h-6 flex items-center justify-center rounded border border-gray-200 text-gray-700 hover:bg-gray-50">
                <RightOutlined className="text-[9px]" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </EbookEditorialLayout>
  );
}