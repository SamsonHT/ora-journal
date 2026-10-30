import React from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';

export default function SubjectAreas() {
  const { isDarkMode } = useTheme();
  
  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-200';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const borderCol = isDarkMode ? 'border-[#2D2D2D]' : 'border-gray-100';

  // Exact Article Types as requested
  const data = [
    { name: 'Original Research', desc: 'Full-length reports of original empirical research.', count: '124', status: 'Active' },
    { name: 'Review Article', desc: 'Comprehensive summaries of recent developments in a field.', count: '68', status: 'Active' },
    { name: 'Systematic Review & Meta-Analysis', desc: 'Rigorous synthesis of existing studies using standardized methods.', count: '42', status: 'Active' },
    { name: 'Case Report / Case Study', desc: 'Detailed reports of specific instances or events.', count: '31', status: 'Active' },
    { name: 'Book Review', desc: 'Critical evaluation of recently published books.', count: '18', status: 'Active' },
    { name: 'Short Communication', desc: 'Brief reports of significant preliminary findings.', count: '9', status: 'Inactive' },
  ];

  const getStatusStyle = (status) => {
    return status === 'Active' 
      ? 'bg-[#F0FDF4] text-[#15803D]' 
      : 'bg-[#F3F4F6] text-[#4B5563]';
  };

  return (
    <AdminLayout>
      <div className="max-w-[1400px] mx-auto animate-fade-in-up">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <p className={`text-[10px] font-bold tracking-[0.1em] uppercase mb-1.5 ${textMuted}`}>WORKSPACE / ADMINISTRATION</p>
            <h1 className={`text-[26px] font-bold tracking-tight ${textMain}`}>Article Type</h1>
            <p className={`text-[13px] font-medium mt-1 ${textMuted}`}>Define and manage article types for manuscript classification.</p>
          </div>
          <Link to="/admin/subjects/add" className="bg-[#7A1849] text-white px-5 py-2 rounded-lg text-[12px] font-bold hover:bg-[#5E1136] transition-all shadow-sm flex items-center gap-2">
            <PlusOutlined /> New Article Type
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {[
            { l: 'Active Types', v: '15' },
            { l: 'Assigned Manuscripts', v: '342' },
            { l: 'Unassigned', v: '8' },
          ].map((s, i) => (
            <div key={i} className={`p-5 rounded-xl border shadow-sm ${bgCard}`}>
              <h3 className={`text-[28px] font-bold tracking-tight mb-1 ${textMain}`}>{s.v}</h3>
              <p className={`text-[11px] font-bold ${textMuted}`}>{s.l}</p>
            </div>
          ))}
        </div>

        {/* Main Table Container */}
        <div className={`rounded-xl border shadow-sm overflow-hidden ${bgCard}`}>
          
          {/* Toolbar: Tabs & Search */}
          <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center p-4 border-b border-gray-100 dark:border-gray-800 gap-4">
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-1.5 rounded-lg text-[12px] font-bold bg-[#7A1849] text-white shadow-sm">
                All Areas
              </button>
              <button className={`px-4 py-1.5 rounded-lg text-[12px] font-bold transition-all bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 ${isDarkMode ? '!bg-[#1A1A1A] !border-[#3D3D3D] !text-gray-300 hover:!bg-[#2A2A2A]' : ''}`}>
                Active 14
              </button>
            </div>
            <div className="relative w-full xl:w-64 shrink-0">
              <SearchOutlined className="absolute left-3 top-2.5 text-gray-400 text-[13px]" />
              <input 
                type="text" 
                placeholder="Search article types..." 
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
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider">Article Type</th>
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider">Manuscripts</th>
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isDarkMode ? 'divide-[#2D2D2D]' : 'divide-gray-100'}`}>
                {data.map((row, i) => (
                  <tr key={i} className={`${isDarkMode ? 'hover:bg-[#2A2A2A]' : 'hover:bg-gray-50'} transition-colors`}>
                    <td className={`px-6 py-4 text-[13px] font-bold ${textMain}`}>{row.name}</td>
                    <td className={`px-6 py-4 text-[12px] font-medium ${textMuted}`}>{row.desc}</td>
                    <td className={`px-6 py-4 text-[12px] font-bold ${textMain}`}>{row.count} manuscripts</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold ${getStatusStyle(row.status)}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-4">
                        <button className="text-[#7A1849] font-bold text-[12px] hover:underline">Edit</button>
                        <button className="text-[#B91C1C] font-bold text-[12px] hover:underline">Delete</button>
                      </div>
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