import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { SearchOutlined, FilterOutlined } from '@ant-design/icons';

export default function PublishedManuscripts() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All');
  const [searchText, setSearchText] = useState('');

  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-200';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const borderCol = isDarkMode ? 'border-[#2D2D2D]' : 'border-gray-100';

  const data = [
    { id: 'ORA-2026-072', title: 'Graphene oxide membranes for water purification', issue: 'Vol. 18 · Issue 9', date: 'Sep 22, 2026', doi: '10.1080/ora.2026.072', status: 'Published' },
    { id: 'ORA-2026-068', title: 'Hybrid learning for solar energy forecasting', issue: 'Vol. 18 · Issue 9', date: 'Sep 20, 2026', doi: '10.1080/ora.2026.068', status: 'Indexed' },
    { id: 'ORA-2026-063', title: 'Urban heat islands under rapid redevelopment', issue: 'Vol. 18 · Issue 9', date: 'Sep 15, 2026', doi: '10.1080/ora.2026.063', status: 'Published' },
    { id: 'ORA-2026-059', title: 'Lidar assessment of aging bridge pillars', issue: 'Vol. 18 · Issue 8', date: 'Aug 29, 2026', doi: '10.1080/ora.2026.059', status: 'Indexed' },
    { id: 'ORA-2026-051', title: 'Predictive maintenance in maritime logistics', issue: 'Vol. 18 · Issue 8', date: 'Aug 24, 2026', doi: '10.1080/ora.2026.051', status: 'Published' },
    { id: 'ORA-2026-047', title: 'Silicon anodes for high-capacity batteries', issue: 'Vol. 18 · Issue 8', date: 'Aug 18, 2026', doi: '10.1080/ora.2026.047', status: 'Correction' },
    { id: 'ORA-2026-041', title: 'Secure consensus for federated cloud systems', issue: 'Vol. 18 · Issue 7', date: 'Jul 30, 2026', doi: '10.1080/ora.2026.041', status: 'Indexed' },
  ];

  const tabs = ['All', 'Current issue', 'Early access', 'Corrections'];

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Published': return 'bg-[#F0FDF4] text-[#15803D]';
      case 'Indexed': return 'bg-[#F0FDF4] text-[#15803D]';
      case 'Correction': return 'bg-[#FFF7ED] text-[#C2410C]';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <AdminLayout>
      <div className="max-w-[1400px] mx-auto animate-fade-in-up">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <p className={`text-[10px] font-bold tracking-[0.1em] uppercase mb-1.5 ${textMuted}`}>WORKSPACE / ARCHIVE</p>
            <h1 className={`text-[26px] font-bold tracking-tight ${textMain}`}>Published Manuscripts</h1>
            <p className={`text-[13px] font-medium mt-1 ${textMuted}`}>Search the complete publication record and manage post-publication metadata.</p>
          </div>
          
          <div className="flex items-center gap-3">
            <button className={`px-4 py-2 rounded-lg text-[12px] font-bold border ${isDarkMode ? 'border-gray-700 text-gray-300 bg-[#1E1E1E]' : 'border-gray-200 text-gray-700 bg-white hover:bg-gray-50'}`}>
              2026 archive
            </button>
            <button className="bg-[#7A1849] text-white px-5 py-2 rounded-lg text-[12px] font-bold hover:bg-[#5E1136] transition-all shadow-sm">
              Export CSV
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className={`p-6 rounded-xl border shadow-sm ${bgCard}`}>
            <h3 className={`text-[32px] font-bold tracking-tight mb-1 text-[#7A1849]`}>214</h3>
            <p className={`text-[12px] font-medium text-gray-500`}>Published in 2026</p>
          </div>
          <div className={`p-6 rounded-xl border shadow-sm ${bgCard}`}>
            <h3 className={`text-[32px] font-bold tracking-tight mb-1 text-[#7A1849]`}>18</h3>
            <p className={`text-[12px] font-medium text-gray-500`}>Issues released</p>
          </div>
          <div className={`p-6 rounded-xl border shadow-sm ${bgCard}`}>
            <h3 className={`text-[32px] font-bold tracking-tight mb-1 text-[#15803D]`}>98.6%</h3>
            <p className={`text-[12px] font-medium text-gray-500`}>Successfully indexed</p>
          </div>
        </div>

        {/* Main Table Container */}
        <div className={`rounded-xl border shadow-sm overflow-hidden ${bgCard}`}>
          <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center p-4 border-b border-gray-100 dark:border-gray-800 gap-4">
            {/* Tab Filters */}
            <div className="flex flex-wrap gap-2">
              {tabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1.5 rounded-lg text-[12px] font-bold transition-all ${
                    activeTab === tab
                      ? 'bg-[#7A1849] text-white shadow-sm'
                      : `bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 ${isDarkMode ? '!bg-[#1A1A1A] !border-[#3D3D3D] !text-gray-300 hover:!bg-[#2A2A2A]' : ''}`
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Search Bar & Filter Button */}
            <div className="flex gap-2 w-full xl:w-auto shrink-0">
              <div className="relative flex-1 xl:w-64">
                <SearchOutlined className="absolute left-3 top-2.5 text-gray-400 text-[13px]" />
                <input 
                  type="text" 
                  placeholder="Search title, DOI, author..." 
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className={`w-full pl-9 pr-3 py-2 rounded-lg border text-[12px] font-medium outline-none focus:ring-2 focus:ring-[#7A1849]/20 transition-all ${
                    isDarkMode 
                      ? 'bg-[#1A1A1A] border-[#3D3D3D] text-white focus:border-[#7A1849]' 
                      : 'bg-white border-gray-200 text-gray-600 focus:border-[#7A1849]'
                  }`}
                />
              </div>
              <button className="bg-[#7A1849] text-white px-4 py-2 rounded-lg text-[12px] font-bold flex items-center gap-2 hover:bg-[#5E1136] transition-colors shadow-sm">
                <FilterOutlined /> More filters
              </button>
            </div>
          </div>

          {/* Custom Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#7A1849] text-white">
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider">Manuscript</th>
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider">Issue</th>
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider">Publication Date</th>
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider">DOI / Status</th>
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isDarkMode ? 'divide-[#2D2D2D]' : 'divide-gray-100'}`}>
                {data.map((row, idx) => (
                  <tr key={idx} className={`${isDarkMode ? 'hover:bg-[#2A2A2A]' : 'hover:bg-gray-50'} transition-colors`}>
                    <td className="px-6 py-4 max-w-[350px]">
                      <p className={`text-[13px] font-bold ${textMain} leading-snug`}>{row.title}</p>
                      <p className={`text-[11px] font-bold text-[#7A1849] mt-0.5`}>{row.id}</p>
                    </td>
                    <td className={`px-6 py-4 text-[12px] font-medium ${textMuted}`}>{row.issue}</td>
                    <td className={`px-6 py-4 text-[12px] font-medium ${textMuted}`}>{row.date}</td>
                    <td className="px-6 py-4">
                      <p className={`text-[12px] font-medium text-[#1A56DB] mb-1`}>{row.doi}</p>
                      <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold ${getStatusStyle(row.status)}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-4">
                        {/* FIXED: View button now navigates to ViewPublished page */}
                        <button 
                          onClick={() => navigate(`/managing-editor/published/${row.id}`)}
                          className="text-[#7A1849] font-bold text-[12px] hover:underline"
                        >
                          View
                        </button>
                        <button className="text-[#7A1849] font-bold text-[12px] hover:underline">PDF</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className={`px-6 py-4 border-t flex flex-col md:flex-row justify-between items-center gap-4 ${borderCol}`}>
            <p className={`text-[12px] font-medium ${textMuted}`}>
              Showing 1–7 of 214 manuscripts
            </p>
            <div className="flex items-center gap-1.5">
              <button className={`w-7 h-7 flex items-center justify-center rounded-md bg-[#FCF7F9] text-[#7A1849] text-[11px] font-bold`}>1</button>
              <button className={`w-7 h-7 flex items-center justify-center rounded-md border text-[11px] font-bold transition-colors ${isDarkMode ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}>2</button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}