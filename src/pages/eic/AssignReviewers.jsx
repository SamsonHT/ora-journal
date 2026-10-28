import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { SearchOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';

export default function AssignReviewers() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All');
  const [searchText, setSearchText] = useState('');

  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-200';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const borderCol = isDarkMode ? 'border-[#2D2D2D]' : 'border-gray-100';

  const data = [
    { id: 'ORA-2026-092', title: 'Deep learning approaches in neurological diagnostics via low-field MRI', area: 'Medicine / AI', reviewers: '1 / 3', deadline: 'Oct 12, 2026', status: 'Awaiting Reviewers' },
    { id: 'ORA-2026-088', title: 'Quantum computing limits on traditional cryptographic schemas', area: 'Security / Crypto', reviewers: '2 / 2', deadline: 'Oct 05, 2026', status: 'Review in Progress' },
    { id: 'ORA-2026-085', title: 'Socio-economic impact of rural grid electrification programs', area: 'Econ / Energy Policy', reviewers: '0 / 3', deadline: 'Oct 24, 2026', status: 'Needs Reviewers' },
    { id: 'ORA-2026-081', title: 'Predictive structural analysis of historical bridge pillars via lidar', area: 'Civil / Infrastructure', reviewers: '1 / 2', deadline: 'Sep 30, 2026', status: 'Awaiting Reviewers' },
  ];

  // Dynamic Counts
  const counts = {
    All: data.length,
    'Awaiting Reviewers': data.filter(d => d.status === 'Awaiting Reviewers').length,
    'Review in Progress': data.filter(d => d.status === 'Review in Progress').length,
    'Needs Reviewers': data.filter(d => d.status === 'Needs Reviewers').length,
  };

  const tabs = ['All', 'Awaiting Reviewers', 'Review in Progress', 'Needs Reviewers'];

  // Status Pill Colors
  const getStatusStyle = (status) => {
    switch (status) {
      case 'Awaiting Reviewers': return 'bg-[#F3F4F6] text-[#4B5563]';
      case 'Review in Progress': return 'bg-[#F3F4F6] text-[#4B5563]';
      case 'Needs Reviewers': return 'bg-[#F3F4F6] text-[#4B5563]';
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
          <p className={`text-[10px] font-bold tracking-[0.1em] uppercase mb-1.5 ${textMuted}`}>WORKSPACE / ASSIGNMENTS</p>
          <h1 className={`text-[26px] font-bold tracking-tight ${textMain}`}>Assign Reviewers</h1>
          <p className={`text-[13px] font-medium mt-1 ${textMuted}`}>Delegate manuscripts to peer experts. Manage review cycles and responses.</p>
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
                    <span className={`px-1.5 py-0.5 rounded-md text-[10px] bg-white text-[#7A1849]`}>
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
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider">Subject Area</th>
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider">Assigned / Req.</th>
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider">Deadline</th>
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isDarkMode ? 'divide-[#2D2D2D]' : 'divide-gray-100'}`}>
                {filteredData.map((row, idx) => (
                  <tr key={idx} className={`${isDarkMode ? 'hover:bg-[#2A2A2A]' : 'hover:bg-gray-50'} transition-colors`}>
                    <td className={`px-6 py-4 text-[12px] font-bold ${textMain}`}>{row.id}</td>
                    <td className={`px-6 py-4 text-[13px] font-bold ${textMain} max-w-[280px]`}>{row.title}</td>
                    <td className={`px-6 py-4 text-[12px] font-medium ${textMuted}`}>{row.area}</td>
                    <td className={`px-6 py-4 text-[12px] font-bold ${row.reviewers.startsWith('0') ? 'text-red-500' : textMain}`}>{row.reviewers}</td>
                    <td className={`px-6 py-4 text-[12px] font-medium ${textMuted}`}>{row.deadline}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold ${getStatusStyle(row.status)}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button 
                        onClick={() => navigate(`/eic/assign/${row.id}`)}
                        className="bg-[#7A1849] text-white px-4 py-1.5 rounded-md text-[11px] font-bold hover:bg-[#5E1136] transition-colors shadow-sm"
                      >
                        Assign
                      </button>
                    </td>
                  </tr>
                ))}
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