import React, { useState, useRef, useEffect } from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { 
  BarChartOutlined, FileExcelOutlined, FilePdfOutlined, 
  CheckOutlined, DownOutlined, FilterOutlined 
} from '@ant-design/icons';

// ==================== CUSTOM MULTI-SELECT DROPDOWN ====================
const MultiSelectDropdown = ({ label, options, selected, onChange, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleOption = (option) => {
    if (selected.includes(option)) onChange(selected.filter(item => item !== option));
    else onChange([...selected, option]);
  };

  const displayText = selected.length === 0 
    ? `Select ${label.toLowerCase()}...` 
    : selected.length === 1 
      ? selected[0] 
      : `${selected[0]} +${selected.length - 1} more`;

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-lg border text-[12px] font-bold transition-colors ${
          isDarkMode 
            ? 'bg-[#1A1A1A] border-[#3D3D3D] text-gray-300 hover:border-[#7A1849]/50' 
            : 'bg-white border-gray-200 text-gray-700 hover:border-[#7A1849]/50'
        } ${isOpen ? 'border-[#7A1849] ring-1 ring-[#7A1849]/20' : ''}`}
      >
        <span className="truncate text-left">{displayText}</span>
        <DownOutlined className={`text-[9px] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className={`absolute top-full left-0 mt-2 w-full rounded-xl shadow-xl border z-50 overflow-hidden ${
          isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-100'
        }`}>
          <div className="max-h-60 overflow-y-auto py-1">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => toggleOption(option)}
                className={`w-full text-left px-4 py-2.5 text-[12px] font-medium transition-colors flex items-center gap-3 ${
                  isDarkMode ? 'text-gray-300 hover:bg-[#7A1849]/20 hover:text-white' : 'text-gray-700 hover:bg-[#FCF7F9] hover:text-[#7A1849]'
                }`}
              >
                <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors ${
                  selected.includes(option) ? 'bg-[#7A1849] border-[#7A1849] text-white' : isDarkMode ? 'border-gray-600' : 'border-gray-300'
                }`}>
                  {selected.includes(option) && <CheckOutlined className="text-[9px]" />}
                </div>
                <span className="truncate">{option}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// ==================== MAIN PAGE COMPONENT ====================
export default function Reports() {
  const { isDarkMode } = useTheme();

  // Main Report Type state
  const [reportType, setReportType] = useState('Users Report');
  
  // Dynamic Filters State
  const [userFilters, setUserFilters] = useState({ role: [], status: [], dateFrom: '', dateTo: '' });
  const [manuscriptFilters, setManuscriptFilters] = useState({ articleType: [], status: [], dateFrom: '', dateTo: '' });

  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-200';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const borderCol = isDarkMode ? 'border-[#2D2D2D]' : 'border-gray-100';

  // Mock Data
  const userTableData = [
    { role: 'Authors', total: 892, active: '+124' },
    { role: 'Reviewers', total: 238, active: '+18' },
    { role: 'Editors', total: 64, active: '0' },
  ];

  const manuscriptTableData = [
    { type: 'Original Research', count: 124, published: 98 },
    { type: 'Review Article', count: 68, published: 54 },
    { type: 'Systematic Review', count: 42, published: 31 },
    { type: 'Case Study', count: 31, published: 22 },
  ];

  return (
    <AdminLayout>
      <div className="max-w-[1400px] mx-auto animate-fade-in-up">
        
        {/* Header */}
        <div className="mb-8">
          <p className={`text-[10px] font-bold tracking-[0.1em] uppercase mb-1.5 ${textMuted}`}>WORKSPACE / REPORT</p>
          <h1 className={`text-[26px] font-bold tracking-tight ${textMain}`}>Generate Reports</h1>
          <p className={`text-[13px] font-medium mt-1 ${textMuted}`}>Export system data by filtering roles, dates, and statuses.</p>
        </div>

        {/* Top Filter Bar */}
        <div className={`rounded-xl border shadow-sm mb-6 p-6 ${bgCard}`}>
          
          <div className="flex justify-between items-center mb-5">
            <h2 className={`text-[15px] font-bold tracking-tight ${textMain}`}>Report filters</h2>
            <button 
              onClick={() => { 
                setReportType('Users Report');
                setUserFilters({ role: [], status: [], dateFrom: '', dateTo: '' });
                setManuscriptFilters({ articleType: [], status: [], dateFrom: '', dateTo: '' });
              }}
              className="text-[12px] font-bold text-[#7A1849] hover:underline"
            >
              Reset filters
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Report Type (Always first) */}
            <div>
              <label className={`block text-[11px] font-bold mb-2 ${textMain}`}>Report Type</label>
              <div className="relative">
                <select 
                  value={reportType}
                  onChange={(e) => setReportType(e.target.value)}
                  className={`w-full px-3 py-2.5 rounded-lg border text-[12px] font-bold outline-none cursor-pointer appearance-none ${
                    isDarkMode ? 'bg-[#1A1A1A] border-[#3D3D3D] text-white' : 'bg-white border-gray-200 text-gray-700'
                  }`}
                >
                  <option value="Users Report">Users Report</option>
                  <option value="Manuscript Report">Manuscript Report</option>
                </select>
                <DownOutlined className="absolute right-3 top-3 text-[10px] text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Dynamic Filters based on Report Type */}
            {reportType === 'Users Report' ? (
              <>
                <div>
                  <label className={`block text-[11px] font-bold mb-2 ${textMain}`}>User Role</label>
                  <MultiSelectDropdown 
                    label="Roles" 
                    options={['Author', 'Reviewer', 'Editor', 'Admin']} 
                    selected={userFilters.role} 
                    onChange={(val) => setUserFilters({...userFilters, role: val})} 
                    isDarkMode={isDarkMode} 
                  />
                </div>
                <div>
                  <label className={`block text-[11px] font-bold mb-2 ${textMain}`}>Account Status</label>
                  <MultiSelectDropdown 
                    label="Status" 
                    options={['Active', 'Inactive', 'Pending', 'Suspended']} 
                    selected={userFilters.status} 
                    onChange={(val) => setUserFilters({...userFilters, status: val})} 
                    isDarkMode={isDarkMode} 
                  />
                </div>
                <div>
                  <label className={`block text-[11px] font-bold mb-2 ${textMain}`}>Date Range</label>
                  <div className="flex gap-2">
                    <input 
                      type="date" 
                      value={userFilters.dateFrom}
                      onChange={(e) => setUserFilters({...userFilters, dateFrom: e.target.value})}
                      className={`w-full px-2 py-2.5 rounded-lg border text-[11px] font-medium outline-none ${isDarkMode ? 'bg-[#1A1A1A] border-[#3D3D3D] text-white' : 'bg-white border-gray-200'}`} 
                    />
                    <input 
                      type="date" 
                      value={userFilters.dateTo}
                      onChange={(e) => setUserFilters({...userFilters, dateTo: e.target.value})}
                      className={`w-full px-2 py-2.5 rounded-lg border text-[11px] font-medium outline-none ${isDarkMode ? 'bg-[#1A1A1A] border-[#3D3D3D] text-white' : 'bg-white border-gray-200'}`} 
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div>
                  <label className={`block text-[11px] font-bold mb-2 ${textMain}`}>Article Type</label>
                  <MultiSelectDropdown 
                    label="Article Type" 
                    options={['Original Research', 'Review Article', 'Systematic Review', 'Case Study', 'Book Review']} 
                    selected={manuscriptFilters.articleType} 
                    onChange={(val) => setManuscriptFilters({...manuscriptFilters, articleType: val})} 
                    isDarkMode={isDarkMode} 
                  />
                </div>
                <div>
                  <label className={`block text-[11px] font-bold mb-2 ${textMain}`}>Manuscript Status</label>
                  <MultiSelectDropdown 
                    label="Status" 
                    options={['Submitted', 'Under Review', 'Accepted', 'Published', 'Rejected']} 
                    selected={manuscriptFilters.status} 
                    onChange={(val) => setManuscriptFilters({...manuscriptFilters, status: val})} 
                    isDarkMode={isDarkMode} 
                  />
                </div>
                <div>
                  <label className={`block text-[11px] font-bold mb-2 ${textMain}`}>Date Range</label>
                  <div className="flex gap-2">
                    <input 
                      type="date" 
                      value={manuscriptFilters.dateFrom}
                      onChange={(e) => setManuscriptFilters({...manuscriptFilters, dateFrom: e.target.value})}
                      className={`w-full px-2 py-2.5 rounded-lg border text-[11px] font-medium outline-none ${isDarkMode ? 'bg-[#1A1A1A] border-[#3D3D3D] text-white' : 'bg-white border-gray-200'}`} 
                    />
                    <input 
                      type="date" 
                      value={manuscriptFilters.dateTo}
                      onChange={(e) => setManuscriptFilters({...manuscriptFilters, dateTo: e.target.value})}
                      className={`w-full px-2 py-2.5 rounded-lg border text-[11px] font-medium outline-none ${isDarkMode ? 'bg-[#1A1A1A] border-[#3D3D3D] text-white' : 'bg-white border-gray-200'}`} 
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="flex justify-between items-center mt-6">
            <p className={`text-[11px] font-medium ${textMuted}`}>Date range is inclusive · All times in UTC</p>
            <button className="bg-[#7A1849] text-white px-5 py-2.5 rounded-lg font-bold text-[13px] hover:bg-[#5E1136] transition-colors shadow-sm flex items-center gap-2">
              <BarChartOutlined /> Generate Report
            </button>
          </div>
        </div>

        {/* Report Table Section */}
        <div className={`rounded-xl border shadow-sm overflow-hidden ${bgCard}`}>
          
          {/* Table Header Info */}
          <div className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-4">
              <img src="/oralogo.png" alt="ORA" className="h-8 w-auto" onError={(e) => e.target.style.display = 'none'} />
              <div>
                <h2 className={`text-[16px] font-bold tracking-tight ${textMain}`}>
                  {reportType === 'Users Report' ? 'User Activity Report' : 'Manuscript Classification Report'}
                </h2>
                <p className={`text-[12px] font-medium mt-0.5 ${textMuted}`}>Oct 1 – Oct 31, 2026 · All statuses</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-[12px] font-bold transition-colors ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-200 text-gray-700 bg-white hover:bg-gray-50'}`}>
                <FileExcelOutlined className="text-green-600" /> CSV
              </button>
              <button className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-[12px] font-bold transition-colors ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-200 text-gray-700 bg-white hover:bg-gray-50'}`}>
                <FilePdfOutlined className="text-red-500" /> PDF
              </button>
            </div>
          </div>

          {/* Data Table (Dynamic based on report type) */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className={`text-[10px] font-bold uppercase tracking-wider ${isDarkMode ? 'bg-[#2A2A2A] text-gray-300' : 'bg-[#FAFAFA] text-gray-500'}`}>
                  {reportType === 'Users Report' ? (
                    <>
                      <th className="px-6 py-3.5 font-bold">Role</th>
                      <th className="px-6 py-3.5 font-bold">Total Users</th>
                      <th className="px-6 py-3.5 font-bold text-right">Active (Period)</th>
                    </>
                  ) : (
                    <>
                      <th className="px-6 py-3.5 font-bold">Article Type</th>
                      <th className="px-6 py-3.5 font-bold">Total Submitted</th>
                      <th className="px-6 py-3.5 font-bold text-right">Published</th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody className={`divide-y ${isDarkMode ? 'divide-[#2D2D2D]' : 'divide-gray-100'}`}>
                {reportType === 'Users Report' ? (
                  userTableData.map((row, idx) => (
                    <tr key={idx} className={`${isDarkMode ? 'hover:bg-[#2A2A2A]' : 'hover:bg-gray-50'} transition-colors`}>
                      <td className={`px-6 py-4 text-[13px] font-bold ${textMain}`}>{row.role}</td>
                      <td className={`px-6 py-4 text-[13px] font-medium ${textMain}`}>{row.total}</td>
                      <td className={`px-6 py-4 text-[13px] font-bold text-right ${row.active.includes('+') ? 'text-[#15803D]' : textMuted}`}>{row.active}</td>
                    </tr>
                  ))
                ) : (
                  manuscriptTableData.map((row, idx) => (
                    <tr key={idx} className={`${isDarkMode ? 'hover:bg-[#2A2A2A]' : 'hover:bg-gray-50'} transition-colors`}>
                      <td className={`px-6 py-4 text-[13px] font-bold ${textMain}`}>{row.type}</td>
                      <td className={`px-6 py-4 text-[13px] font-medium ${textMain}`}>{row.count}</td>
                      <td className={`px-6 py-4 text-[13px] font-bold text-right text-[#15803D]`}>{row.published}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Footer Stats */}
          <div className={`px-6 py-4 border-t flex justify-between items-center ${borderCol}`}>
            <p className={`text-[12px] font-medium ${textMuted}`}>
              {reportType === 'Users Report' ? '3 role categories · 1,194 total users' : '4 article types · 265 total manuscripts'}
            </p>
            <p className={`text-[12px] font-medium ${textMuted}`}>Page 1 of 1</p>
          </div>

        </div>

        {/* Method Note */}
        <p className={`text-[11px] font-medium mt-4 ${textMuted}`}>
          Methodology: {reportType === 'Users Report' 
            ? 'active users are those who logged in or performed an action during the selected period.' 
            : 'published counts reflect manuscripts that have been formally accepted and released.'}
        </p>

      </div>
    </AdminLayout>
  );
}