import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { SearchOutlined, DownOutlined, CheckOutlined } from '@ant-design/icons';

// Custom Subject Dropdown Component
const SubjectDropdown = ({ isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('All');
  const dropdownRef = useRef(null);

  const options = ['All', 'Artificial Intelligence', 'Material Science', 'Thermodynamics', 'Discrete Mathematics'];

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between gap-3 px-3 py-2 rounded-lg text-[12px] font-bold border transition-colors ${
          isDarkMode 
            ? 'bg-[#1A1A1A] border-[#3D3D3D] text-gray-300' 
            : 'bg-white border-gray-200 text-gray-700'
        } hover:border-[#7A1849]/50`}
      >
        <span>Subject: {selected}</span>
        <DownOutlined className={`text-[10px] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className={`absolute top-full left-0 mt-2 w-56 rounded-xl shadow-xl border z-50 overflow-hidden ${
          isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-100'
        }`}>
          {options.map((option) => (
            <button
              key={option}
              onClick={() => { setSelected(option); setIsOpen(false); }}
              className={`w-full text-left px-4 py-2.5 text-[12px] font-medium transition-colors flex justify-between items-center ${
                selected === option 
                  ? 'bg-[#7A1849] text-white' 
                  : isDarkMode 
                    ? 'text-gray-300 hover:bg-[#7A1849]/20 hover:text-white' 
                    : 'text-gray-700 hover:bg-[#FCF7F9] hover:text-[#7A1849]'
              }`}
            >
              {option}
              {selected === option && <CheckOutlined className="text-[10px]" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default function PendingReview() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  
  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-200';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';

  const data = [
    { id: 'ORA-2026-077', title: 'Reinforcement learning in autonomous flight paths', area: 'Artificial Intelligence', priority: 'URGENT', due: '2 days remaining', action: 'Continue' },
    { id: 'ORA-2026-081', title: 'Micro-structural analysis of silicon anodes in solid-state batteries', area: 'Material Science', priority: 'NORMAL', due: '12 days remaining', action: 'Start Review' },
    { id: 'ORA-2026-098', title: 'Anomalous heat variance in pressurized micro-reactors', area: 'Thermodynamics', priority: 'NORMAL', due: '20 days remaining', action: 'Start Review' },
    { id: 'ORA-2026-102', title: 'Graph-theoretic approaches in highly clustered social networks', area: 'Discrete Mathematics', priority: 'LOW', due: '25 days remaining', action: 'Start Review' },
  ];

  const getPriorityStyle = (p) => {
    if (p === 'URGENT') return 'text-[#D93025]';
    if (p === 'NORMAL') return 'text-[#B36B00]';
    return 'text-[#4B5563] bg-[#F3F4F6] px-2 py-0.5 rounded';
  };

  return (
    <AdminLayout>
      <div className="max-w-[1300px] mx-auto animate-fade-in-up">
        
        {/* Header */}
        <div className="mb-6">
          <p className={`text-[10px] font-bold tracking-[0.1em] uppercase text-[#7A1849] mb-1.5`}>WORKSPACE / PENDING REVIEW</p>
          <h1 className={`text-[26px] font-bold tracking-tight ${textMain}`}>Pending Review</h1>
          <p className={`text-[13px] font-medium mt-1 ${textMuted}`}>Please complete evaluations before due dates. Click on Start Review to load recommendation panel.</p>
        </div>

        {/* Filter Bar */}
        <div className={`rounded-xl border mb-6 p-5 ${bgCard}`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className={`text-[14px] font-bold ${textMain}`}>Filters</h2>
            <button className="text-[12px] font-bold text-[#7A1849] hover:underline">Clear all</button>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            
            {/* Custom Subject Dropdown */}
            <SubjectDropdown isDarkMode={isDarkMode} />

            {/* Reduced Search Input */}
            <div className="relative w-[220px]">
              <SearchOutlined className="absolute left-3 top-2.5 text-gray-400 text-[13px]" />
              <input 
                type="text" 
                placeholder="Search: ID/Title" 
                className={`w-full pl-9 pr-3 py-2 rounded-lg border text-[12px] font-medium outline-none focus:ring-2 focus:ring-[#7A1849]/20 transition-all ${
                  isDarkMode 
                    ? 'bg-[#1A1A1A] border-[#3D3D3D] text-white focus:border-[#7A1849]' 
                    : 'bg-white border-gray-200 text-gray-600 focus:border-[#7A1849]'
                }`}
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className={`rounded-xl border shadow-sm overflow-hidden ${bgCard}`}>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#7A1849] text-white">
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider">Title</th>
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider">Subject Area</th>
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider">Priority</th>
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider">Deadline</th>
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider text-right">Action</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isDarkMode ? 'divide-[#2D2D2D]' : 'divide-gray-100'}`}>
                {data.map((row, idx) => (
                  <tr key={idx} className={`${isDarkMode ? 'hover:bg-[#2A2A2A]' : 'hover:bg-gray-50'} transition-colors`}>
                    <td className={`px-6 py-5 text-[12px] font-bold ${textMain}`}>{row.id}</td>
                    <td className={`px-6 py-5 text-[13px] font-bold ${textMain} max-w-[300px]`}>{row.title}</td>
                    <td className="px-6 py-5">
                      <span className={`text-[11px] font-bold px-2.5 py-1 rounded-md ${isDarkMode ? 'bg-[#2A2A2A] text-gray-300' : 'bg-[#FCF7F9] text-[#7A1849]'}`}>
                        {row.area}
                      </span>
                    </td>
                    <td className={`px-6 py-5 text-[11px] font-bold ${getPriorityStyle(row.priority)}`}>
                      {row.priority}
                    </td>
                    <td className={`px-6 py-5 text-[12px] font-medium ${row.priority === 'URGENT' ? 'text-[#D93025]' : textMuted}`}>
                      {row.due}
                    </td>
                    <td className="px-6 py-5 text-right">
                      <button 
                        onClick={() => navigate(`/reviewer/assignment/1`)}
                        className="bg-[#7A1849] text-white px-4 py-1.5 rounded-md text-[11px] font-bold hover:bg-[#5E1136] transition-colors shadow-sm"
                      >
                        {row.action}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </AdminLayout>
  );
}