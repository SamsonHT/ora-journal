import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { SearchOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';

export default function FinalDecisions() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All');
  const [searchText, setSearchText] = useState('');

  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-200';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const borderCol = isDarkMode ? 'border-[#2D2D2D]' : 'border-gray-100';

  const data = [
    { id: 'ORA-2026-077', title: 'Reinforcement learning in autonomous flight pat...', author: 'Dr. Rachel Green', acc: 3, min: 0, maj: 0, rej: 0, date: 'Sep 24, 2026' },
    { id: 'ORA-2026-068', title: 'Micro-structural analysis of silicon anodes for hi...', author: 'Liam Neeson et al.', acc: 1, min: 1, maj: 0, rej: 0, date: 'Sep 22, 2026' },
    { id: 'ORA-2026-059', title: 'Socio-economic impact of rural grid electrificati...', author: 'Marcus Aurelius', acc: 0, min: 0, maj: 1, rej: 2, date: 'Sep 15, 2026' },
    { id: 'ORA-2026-054', title: 'Predictive structural analysis of historical bridge...', author: 'Nikola Tesla', acc: 0, min: 2, maj: 1, rej: 0, date: 'Sep 08, 2026' },
  ];

  const filteredData = data.filter(row => {
    return row.title.toLowerCase().includes(searchText.toLowerCase()) || row.id.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <AdminLayout>
      <div className="max-w-[1400px] mx-auto animate-fade-in-up">
        
        {/* Header */}
        <div className="mb-6">
          <p className={`text-[10px] font-bold tracking-[0.1em] uppercase mb-1.5 ${textMuted}`}>WORKSPACE / DECISIONS</p>
          <h1 className={`text-[26px] font-bold tracking-tight ${textMain}`}>Final Decisions</h1>
          <p className={`text-[13px] font-medium mt-1 ${textMuted}`}>Review consensus peer metrics and output final accepted or rejected academic drafts.</p>
        </div>

        {/* Main Table Container */}
        <div className={`rounded-xl border shadow-sm overflow-hidden ${bgCard}`}>
          
          {/* Toolbar: Tabs & Search */}
          <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center p-4 border-b border-gray-100 dark:border-gray-800 gap-4">
            
            {/* Tab Filters with Count */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTab('All')}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-[12px] font-bold transition-all bg-[#7A1849] text-white shadow-sm`}
              >
                All
                <span className="px-1.5 py-0.5 rounded-md text-[10px] bg-white text-[#7A1849]">
                  {data.length}
                </span>
              </button>
            </div>

            {/* Search Bar */}
            <div className="relative w-full xl:w-72 shrink-0">
              <SearchOutlined className="absolute left-3 top-2.5 text-gray-400 text-[13px]" />
              <input 
                type="text" 
                placeholder="Search papers by title or author..." 
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className={`w-full pl-9 pr-3 py-2 rounded-lg border text-[12px] font-medium outline-none focus:ring-2 focus:ring-[#7A1849]/20 transition-all ${
                  isDarkMode 
                    ? 'bg-[#1A1A1A] border-[#3D3D3D] text-white focus:border-[#7A1849]' 
                    : 'bg-white border-gray-200 text-gray-600 focus:border-[#7A1849]'
                }`}
              />
            </div>
          </div>

          {/* Custom Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#7A1849] text-white">
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider">Manuscript ID</th>
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider">Paper Title</th>
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider">Author(s)</th>
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider">Peer Recommendations</th>
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider">Reviews Finished</th>
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isDarkMode ? 'divide-[#2D2D2D]' : 'divide-gray-100'}`}>
                {filteredData.map((row, idx) => (
                  <tr key={idx} className={`${isDarkMode ? 'hover:bg-[#2A2A2A]' : 'hover:bg-gray-50'} transition-colors`}>
                    <td className={`px-6 py-4 text-[12px] font-bold ${textMain}`}>{row.id}</td>
                    <td className={`px-6 py-4 text-[13px] font-bold ${textMain} max-w-[280px]`}>{row.title}</td>
                    <td className={`px-6 py-4 text-[12px] font-medium ${textMuted}`}>{row.author}</td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <span className="text-[11px] font-bold text-green-600">{row.acc} Acc</span>
                        <span className="text-[11px] font-bold text-blue-600">{row.min} Min</span>
                        <span className="text-[11px] font-bold text-amber-600">{row.maj} Maj</span>
                        <span className="text-[11px] font-bold text-red-600">{row.rej} Rej</span>
                      </div>
                    </td>
                    <td className={`px-6 py-4 text-[12px] font-medium ${textMuted}`}>{row.date}</td>
                    <td className="px-6 py-4 text-right">
                      <button 
                        onClick={() => navigate(`/eic/decide/${row.id}`)}
                        className="bg-[#7A1849] text-white px-4 py-1.5 rounded-md text-[11px] font-bold hover:bg-[#5E1136] transition-colors shadow-sm"
                      >
                        Decide
                      </button>
                    </td>
                  </tr>
                ))}
                {filteredData.length === 0 && (
                  <tr>
                    <td colSpan="6" className={`px-6 py-10 text-center text-[13px] font-medium ${textMuted}`}>
                      No manuscripts found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className={`px-6 py-4 border-t flex flex-col md:flex-row justify-between items-center gap-4 ${borderCol}`}>
            <p className={`text-[12px] font-medium ${textMuted}`}>
              Showing <span className={`font-bold ${textMain}`}>1–{filteredData.length}</span> of <span className={`font-bold ${textMain}`}>{filteredData.length}</span> manuscripts
            </p>
            <div className="flex items-center gap-1.5">
              <button className={`w-8 h-8 flex items-center justify-center rounded-md border text-[12px] font-bold transition-colors ${isDarkMode ? 'border-gray-700 text-gray-500 hover:bg-gray-800' : 'border-gray-200 text-gray-400 hover:bg-gray-50'}`}>
                <LeftOutlined className="text-[10px]" />
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-md bg-[#7A1849] text-white text-[12px] font-bold shadow-sm">1</button>
              <button className={`w-8 h-8 flex items-center justify-center rounded-md border text-[12px] font-bold transition-colors ${isDarkMode ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}>2</button>
              <button className={`w-8 h-8 flex items-center justify-center rounded-md border text-[12px] font-bold transition-colors ${isDarkMode ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}>3</button>
              <span className={`px-1 ${textMuted}`}>...</span>
              <button className={`w-8 h-8 flex items-center justify-center rounded-md border text-[12px] font-bold transition-colors ${isDarkMode ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}>8</button>
              <button className={`w-8 h-8 flex items-center justify-center rounded-md border text-[12px] font-bold transition-colors ${isDarkMode ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
                <RightOutlined className="text-[10px]" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </AdminLayout>
  );
}