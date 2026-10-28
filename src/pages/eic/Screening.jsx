import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { SearchOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';

export default function EiCScreening() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All');
  const [searchText, setSearchText] = useState('');

  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-200';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const borderCol = isDarkMode ? 'border-[#2D2D2D]' : 'border-gray-100';

  const data = [
    { id: 'ORA-2026-112', title: 'Distributed Consensus Mechanics in Hybrid Clo...', author: 'Dr. Rachel Green', area: 'Computer Science', status: 'New' },
    { id: 'ORA-2026-110', title: 'Graphene oxide synthesized filters for high volt...', author: 'Liam Neeson et al.', area: 'Nanotechnology', status: 'Under Screening' },
    { id: 'ORA-2026-108', title: 'Quantum Key Distribution Under Heavy Thermal...', author: 'Prof. Alan Turing', area: 'Quantum Physics', status: 'Under Screening' },
    { id: 'ORA-2026-104', title: 'Socio-Political impact models in urban redevelop...', author: 'Marcus Aurelius', area: 'Applied Economics', status: 'Desk Rejected' },
    { id: 'ORA-2026-099', title: 'Autonomous vehicle fleet routing optimization p...', author: 'Ava Lovelace', area: 'Logistics Systems', status: 'Sent to Review' },
    { id: 'ORA-2026-095', title: 'Micro-structural analysis of silicon anodes for hi...', author: 'Nikola Tesla', area: 'Materials Science', status: 'Under Screening' },
  ];

  // Dynamic Counts
  const counts = {
    All: data.length,
    New: data.filter(d => d.status === 'New').length,
    'Under Screening': data.filter(d => d.status === 'Under Screening').length,
    'Desk Rejected': data.filter(d => d.status === 'Desk Rejected').length,
    'Sent to Review': data.filter(d => d.status === 'Sent to Review').length,
  };

  const tabs = ['All', 'New', 'Under Screening', 'Desk Rejected', 'Sent to Review'];

  // Status Pill Colors
  const getStatusStyle = (status) => {
    switch (status) {
      case 'New': return 'bg-[#EBF1FA] text-[#1A56DB]';
      case 'Under Screening': return 'bg-[#FFF7ED] text-[#C2410C]';
      case 'Desk Rejected': return 'bg-[#FEF2F2] text-[#B91C1C]';
      case 'Sent to Review': return 'bg-[#F0FDF4] text-[#15803D]';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  // Filter Logic
  const filteredData = data.filter(row => {
    const matchesTab = activeTab === 'All' || row.status === activeTab;
    const matchesSearch = row.title.toLowerCase().includes(searchText.toLowerCase()) || row.id.toLowerCase().includes(searchText.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <AdminLayout>
      <div className="max-w-[1400px] mx-auto animate-fade-in-up">
        
        {/* Header */}
        <div className="mb-6">
          <p className={`text-[10px] font-bold tracking-[0.1em] uppercase mb-1.5 ${textMuted}`}>WORKSPACE / SCREENING</p>
          <h1 className={`text-[26px] font-bold tracking-tight ${textMain}`}>Manuscript Screening</h1>
          <p className={`text-[13px] font-medium mt-1 ${textMuted}`}>Perform initial quality, scope, and plagiarism checks on fresh academic submissions.</p>
        </div>

        {/* Main Table Container */}
        <div className={`rounded-xl border shadow-sm overflow-hidden ${bgCard}`}>
          
          {/* Toolbar: Tabs & Search */}
          <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center p-4 border-b border-gray-100 dark:border-gray-800 gap-4">
            
            {/* Tab Filters with Counts */}
            <div className="flex flex-wrap gap-2">
              {tabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-[12px] font-bold transition-all ${
                    activeTab === tab
                      ? 'bg-[#7A1849] text-white shadow-sm'
                      : `bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 ${isDarkMode ? '!bg-[#1A1A1A] !border-[#3D3D3D] !text-gray-300 hover:!bg-[#2A2A2A]' : ''}`
                  }`}
                >
                  {tab}
                  {counts[tab] > 0 && (
                    <span className={`px-1.5 py-0.5 rounded-md text-[10px] bg-white ${
                      activeTab === tab ? 'text-[#7A1849]' : 'text-[#7A1849]'
                    }`}>
                      {counts[tab]}
                    </span>
                  )}
                </button>
              ))}
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
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider">Subject Area</th>
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isDarkMode ? 'divide-[#2D2D2D]' : 'divide-gray-100'}`}>
                {filteredData.map((row, idx) => (
                  <tr key={idx} className={`${isDarkMode ? 'hover:bg-[#2A2A2A]' : 'hover:bg-gray-50'} transition-colors`}>
                    <td className={`px-6 py-4 text-[12px] font-bold ${textMain}`}>{row.id}</td>
                    <td className={`px-6 py-4 text-[13px] font-bold ${textMain} max-w-[300px]`}>{row.title}</td>
                    <td className={`px-6 py-4 text-[12px] font-medium ${textMuted}`}>{row.author}</td>
                    <td className={`px-6 py-4 text-[12px] font-medium ${textMuted}`}>{row.area}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold ${getStatusStyle(row.status)}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button 
                        onClick={() => navigate(`/eic/screen/${row.id}`)}
                        className="text-[#7A1849] font-bold text-[12px] hover:underline"
                      >
                        Screen
                      </button>
                    </td>
                  </tr>
                ))}
                {filteredData.length === 0 && (
                  <tr>
                    <td colSpan="6" className={`px-6 py-10 text-center text-[13px] font-medium ${textMuted}`}>
                      No manuscripts found matching your criteria.
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