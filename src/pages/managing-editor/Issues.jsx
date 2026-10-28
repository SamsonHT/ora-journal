import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { SearchOutlined, PlusOutlined, FilterOutlined, WarningFilled } from '@ant-design/icons';

export default function Issues() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate(); 
  const [searchText, setSearchText] = useState('');
  const [activeTab, setActiveTab] = useState('All Issues');
  
  const data = [
    { id: 'ORA-2026-012', vol: 'Vol. 12', issue: 'Issue 3', date: 'Sep 15, 2026', status: 'Published', articles: 18 },
    { id: 'ORA-2026-011', vol: 'Vol. 12', issue: 'Issue 2', date: 'Jun 10, 2026', status: 'Published', articles: 14 },
    { id: 'ORA-2026-010', vol: 'Vol. 12', issue: 'Issue 1', date: 'Mar 05, 2026', status: 'Published', articles: 16 },
    { id: 'ORA-2027-001', vol: 'Vol. 13', issue: 'Issue 1', date: 'Mar 15, 2027', status: 'Scheduled', articles: 12 },
    { id: 'ORA-2027-002', vol: 'Vol. 13', issue: 'Issue 2', date: 'Jun 18, 2027', status: 'Draft', articles: 0 },
    { id: 'ORA-2026-013', vol: 'Vol. 12', issue: 'Issue 4', date: 'Dec 15, 2026', status: 'Scheduled', articles: 8 },
  ];

  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-200';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const borderCol = isDarkMode ? 'border-[#2D2D2D]' : 'border-gray-100';

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Published': return 'bg-[#F0FDF4] text-[#15803D]';
      case 'Scheduled': return 'bg-[#EBF1FA] text-[#1A56DB]';
      case 'Draft': return 'bg-[#FFF7ED] text-[#C2410C]';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <AdminLayout>
      <div className="max-w-[1400px] mx-auto animate-fade-in-up">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <p className={`text-[10px] font-bold tracking-[0.1em] uppercase mb-1.5 ${textMuted}`}>WORKSPACE / ISSUES</p>
            <h1 className={`text-[26px] font-bold tracking-tight ${textMain}`}>Manage Issues</h1>
            <p className={`text-[13px] font-medium mt-1 ${textMuted}`}>Journal of Oromo Research · Configure volumes, releases, and compilation order.</p>
          </div>
          <button 
            onClick={() => navigate('/managing-editor/issues/add')} 
            className="bg-[#7A1849] text-white px-5 py-2 rounded-lg text-[12px] font-bold hover:bg-[#5E1136] transition-all shadow-sm flex items-center gap-2"
          >
            <PlusOutlined /> Add New Issue
          </button>
        </div>

        {/* Main Table Container */}
        <div className={`rounded-xl border shadow-sm overflow-hidden ${bgCard}`}>
          
          {/* Toolbar */}
          <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center p-4 border-b border-gray-100 dark:border-gray-800 gap-4">
            <div className="flex flex-wrap gap-2">
              {['All Issues', 'Published', 'Scheduled', 'Drafts'].map((tab) => (
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
            <div className="flex gap-2 w-full xl:w-auto shrink-0">
              <div className="relative flex-1 xl:w-64">
                <SearchOutlined className="absolute left-3 top-2.5 text-gray-400 text-[13px]" />
                <input 
                  type="text" 
                  placeholder="Search issues..." 
                  value={searchText} 
                  onChange={(e) => setSearchText(e.target.value)} 
                  className={`w-full pl-9 pr-3 py-2 rounded-lg border text-[12px] font-medium outline-none focus:ring-2 focus:ring-[#7A1849]/20 transition-all ${
                    isDarkMode 
                      ? 'bg-[#1A1A1A] border-[#3D3D3D] text-white focus:border-[#7A1849]' 
                      : 'bg-white border-gray-200 text-gray-600 focus:border-[#7A1849]'
                  }`} 
                />
              </div>
              <button className="bg-white text-gray-700 border border-gray-200 px-4 py-2 rounded-lg text-[12px] font-bold flex items-center gap-2 hover:bg-gray-50 transition-colors shadow-sm">
                <FilterOutlined /> Filters
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#7A1849] text-white">
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider">Issue Title</th>
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider">Volume</th>
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider">Issue No.</th>
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider">Publication Date</th>
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider">No. of Articles</th>
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isDarkMode ? 'divide-[#2D2D2D]' : 'divide-gray-100'}`}>
                {data.map((row) => (
                  <tr key={row.id} className={`${isDarkMode ? 'hover:bg-[#2A2A2A]' : 'hover:bg-gray-50'} transition-colors`}>
                    <td className={`px-6 py-4 text-[13px] font-bold ${textMain} max-w-[280px]`}>Journal of Oromo Research</td>
                    <td className={`px-6 py-4 text-[12px] font-medium ${textMuted}`}>{row.vol}</td>
                    <td className={`px-6 py-4 text-[12px] font-medium ${textMuted}`}>{row.issue}</td>
                    <td className={`px-6 py-4 text-[12px] font-medium ${textMuted}`}>{row.date}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold ${getStatusStyle(row.status)}`}>{row.status}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5">
                        <span className={`text-[12px] font-bold ${row.articles < 6 ? 'text-red-500' : textMain}`}>{row.articles} articles</span>
                        {row.articles < 6 && <WarningFilled className="text-red-400 text-[10px]" title="Need more than 5 articles to publish" />}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-3">
                        {/* VIEW BUTTON */}
                        <button 
                          onClick={() => navigate(`/managing-editor/issues/view/${row.id}`)} 
                          className="text-[#7A1849] font-bold text-[12px] hover:underline"
                        >
                          View
                        </button>
                        
                        {/* EDIT BUTTON (FIXED) */}
                        <button 
                          onClick={() => navigate(`/managing-editor/issues/edit/${row.id}`)} 
                          className="text-gray-500 font-bold text-[12px] hover:underline"
                        >
                          Edit
                        </button>
                        
                        {/* DELETE BUTTON */}
                        <button 
                          className="text-red-500 font-bold text-[12px] hover:underline"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className={`px-6 py-4 border-t flex flex-col md:flex-row justify-between items-center gap-4 ${borderCol}`}>
            <p className={`text-[12px] font-medium ${textMuted}`}>Showing 1–7 of 12 issues</p>
            <div className="flex items-center gap-1.5">
              <button className="w-7 h-7 flex items-center justify-center rounded-md bg-[#FCF7F9] text-[#7A1849] text-[11px] font-bold">1</button>
              <button className={`w-7 h-7 flex items-center justify-center rounded-md border text-[11px] font-bold transition-colors ${isDarkMode ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}>2</button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}