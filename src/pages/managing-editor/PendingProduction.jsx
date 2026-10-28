import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { SearchOutlined, FilterOutlined } from '@ant-design/icons';

export default function PendingProduction() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All');
  const [searchText, setSearchText] = useState('');

  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-200';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const borderCol = isDarkMode ? 'border-[#2D2D2D]' : 'border-gray-100';

  // Updated Data with the correct statuses
  const data = [
    { id: 'ORA-2026-112', title: 'Distributed consensus mechanics in hy...', author: 'N. Ibrahim', type: 'Research Article', due: 'Sep 26', status: 'Awaiting proof' },
    { id: 'ORA-2026-108', title: 'Quantum key distribution under therma...', author: 'M. Patel', type: 'Research Article', due: 'Sep 27', status: 'Proof sent' },
    { id: 'ORA-2026-101', title: 'Neural diagnostics with multimodal ima...', author: 'J. Wallace', type: 'Review Article', due: 'Sep 25', status: 'Comment received' },
    { id: 'ORA-2026-097', title: 'Adaptive models for coastal resilience', author: 'R. Chen', type: 'Case Study', due: 'Sep 28', status: 'Proof accepted' },
    { id: 'ORA-2026-094', title: 'Graphene membranes for water purific...', author: 'S. Okafor', type: 'Short Report', due: 'Sep 30', status: 'Proof sent' },
    { id: 'ORA-2026-089', title: 'Micro-structural analysis of silicon ano...', author: 'M. Patel', type: 'Research Article', due: 'Oct 01', status: 'Proof accepted' },
    { id: 'ORA-2026-084', title: 'Autonomous routing for mixed vehicle f...', author: 'A. Reed', type: 'Perspective', due: 'Oct 03', status: 'Awaiting proof' },
  ];

  const tabs = [
    { label: 'All', count: 42 },
    { label: 'Awaiting proof', count: 6 },
    { label: 'Proof sent', count: 14 },
    { label: 'Comment received', count: 9 },
    { label: 'Proof accepted', count: 10 },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Awaiting proof': return 'bg-[#FEF2F2] text-[#B91C1C]';
      case 'Proof sent': return 'bg-[#EBF1FA] text-[#1A56DB]';
      case 'Comment received': return 'bg-[#FFF7ED] text-[#C2410C]';
      case 'Proof accepted': return 'bg-[#F0FDF4] text-[#15803D]';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  const getTypeStyle = (type) => {
    if (type === 'Research Article') return 'bg-[#FCF7F9] text-[#7A1849]';
    if (type === 'Case Study') return 'bg-[#FCF7F9] text-[#7A1849]';
    if (type === 'Short Report') return 'bg-[#FCF7F9] text-[#7A1849]';
    return 'bg-[#FCF7F9] text-[#7A1849]';
  };

  // DYNAMIC ROUTING LOGIC
  const handleOpenClick = (row) => {
    if (row.status === 'Proof accepted') {
      // Author has approved proof -> go to Publish Page
      navigate(`/managing-editor/publish/${row.id}`); 
    } else {
      // Otherwise, go to Send Proof Page
      navigate(`/managing-editor/production/${row.id}`); 
    }
  };

  return (
    <AdminLayout>
      <div className="max-w-[1400px] mx-auto animate-fade-in-up">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <p className={`text-[10px] font-bold tracking-[0.1em] uppercase mb-1.5 ${textMuted}`}>WORKSPACE / PRODUCTION</p>
            <h1 className={`text-[26px] font-bold tracking-tight ${textMain}`}>Pending Production</h1>
            <p className={`text-[13px] font-medium mt-1 ${textMuted}`}>Track accepted manuscripts from handoff through publication readiness.</p>
          </div>
          <button className={`px-4 py-2 rounded-lg text-[12px] font-bold border ${isDarkMode ? 'border-gray-700 text-gray-300 bg-[#1E1E1E]' : 'border-gray-200 text-gray-700 bg-white hover:bg-gray-50'}`}>
            Sep 2026
          </button>
        </div>

        <div className={`rounded-xl border shadow-sm overflow-hidden ${bgCard}`}>
          <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center p-4 border-b border-gray-100 dark:border-gray-800 gap-4">
            <div className="flex flex-wrap gap-2">
              {tabs.map(tab => (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(tab.label)}
                  className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-[12px] font-bold transition-all ${
                    activeTab === tab.label
                      ? 'bg-[#7A1849] text-white shadow-sm'
                      : `bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 ${isDarkMode ? '!bg-[#1A1A1A] !border-[#3D3D3D] !text-gray-300 hover:!bg-[#2A2A2A]' : ''}`
                  }`}
                >
                  {tab.label} {tab.count}
                </button>
              ))}
            </div>
            <div className="flex gap-2 w-full xl:w-auto shrink-0">
              <div className="relative flex-1 xl:w-64">
                <SearchOutlined className="absolute left-3 top-2.5 text-gray-400 text-[13px]" />
                <input 
                  type="text" 
                  placeholder="Search title or manuscript ID..." 
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
                <FilterOutlined /> Filters
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#7A1849] text-white">
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider">Manuscript</th>
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider">Author Name</th>
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider">Manuscript ID</th>
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider">Manuscript Type</th>
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider">Due Date</th>
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isDarkMode ? 'divide-[#2D2D2D]' : 'divide-gray-100'}`}>
                {data.map((row, idx) => (
                  <tr key={idx} className={`${isDarkMode ? 'hover:bg-[#2A2A2A]' : 'hover:bg-gray-50'} transition-colors`}>
                    <td className={`px-6 py-4 text-[13px] font-bold ${textMain} max-w-[250px]`}>{row.title}</td>
                    <td className={`px-6 py-4 text-[13px] font-medium ${textMain}`}>{row.author}</td>
                    <td className={`px-6 py-4 text-[12px] font-bold text-[#7A1849]`}>{row.id}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold ${getTypeStyle(row.type)}`}>
                        {row.type}
                      </span>
                    </td>
                    <td className={`px-6 py-4 text-[12px] font-medium ${textMuted}`}>{row.due}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold ${getStatusStyle(row.status)}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className={`px-6 py-4 text-right`}>
                      <button 
                        onClick={() => handleOpenClick(row)}
                        className="text-[#7A1849] font-bold text-[12px] hover:underline"
                      >
                        Open
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={`px-6 py-4 border-t flex flex-col md:flex-row justify-between items-center gap-4 ${borderCol}`}>
            <p className={`text-[12px] font-medium ${textMuted}`}>
              Showing 1–7 of 42 manuscripts
            </p>
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