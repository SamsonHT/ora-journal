import React, { useState, useRef, useEffect } from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { DownOutlined, BarChartOutlined, FileExcelOutlined, FilePdfOutlined, CheckOutlined } from '@ant-design/icons';

// ==================== CUSTOM MULTI-SELECT DROPDOWN ====================
const MultiSelectDropdown = ({ label, options, selected, onChange, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleOption = (option) => {
    if (selected.includes(option)) {
      onChange(selected.filter(item => item !== option));
    } else {
      onChange([...selected, option]);
    }
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
        className={`w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-lg border text-[13px] font-medium transition-colors ${
          isDarkMode 
            ? 'bg-[#1A1A1A] border-[#3D3D3D] text-gray-300 hover:border-[#7A1849]/50' 
            : 'bg-white border-gray-200 text-gray-700 hover:border-[#7A1849]/50'
        } ${isOpen ? 'border-[#7A1849] ring-1 ring-[#7A1849]/20' : ''}`}
      >
        <span className="truncate text-left">{displayText}</span>
        <DownOutlined className={`text-[10px] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
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
                  selected.includes(option) 
                    ? 'bg-[#7A1849] border-[#7A1849] text-white' 
                    : isDarkMode ? 'border-gray-600' : 'border-gray-300'
                }`}>
                  {selected.includes(option) && <CheckOutlined className="text-[10px]" />}
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
export default function MEReports() {
  const { isDarkMode } = useTheme();

  // State for filters
  const [dateRange, setDateRange] = useState(['Sep 1 – Sep 25, 2026']);
  const [status, setStatus] = useState([]);
  const [subject, setSubject] = useState([]);
  const [decision, setDecision] = useState([]);

  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-200';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const borderCol = isDarkMode ? 'border-[#2D2D2D]' : 'border-gray-100';

  const tableData = [
    { status: 'Published', count: 142, percentage: 66, medianDays: 28 },
    { status: 'Screening Stage', count: 38, percentage: 18, medianDays: 3 },
    { status: 'Under Review', count: 24, percentage: 11, medianDays: 21 },
    { status: 'In Production', count: 12, percentage: 5, medianDays: 15 },
  ];

  const totals = tableData.reduce((acc, row) => ({
    count: acc.count + row.count,
  }), { count: 0 });

  return (
    <AdminLayout>
      <div className="max-w-[1400px] mx-auto animate-fade-in-up">
        
        {/* Header */}
        <div className="mb-8">
          <p className={`text-[10px] font-bold tracking-[0.1em] uppercase mb-1.5 ${textMuted}`}>WORKSPACE / REPORT / PUBLICATION</p>
          <h1 className={`text-[26px] font-bold tracking-tight ${textMain}`}>Publication Reports</h1>
          <p className={`text-[13px] font-medium mt-1 ${textMuted}`}>Generate analytics for manuscript pipeline and publishing volume.</p>
        </div>

        {/* Filter Bar */}
        <div className={`rounded-xl border shadow-sm mb-6 p-6 ${bgCard}`}>
          <div className="flex justify-between items-center mb-6">
            <h2 className={`text-[15px] font-bold tracking-tight ${textMain}`}>Report filters</h2>
            <button 
              onClick={() => { setDateRange(['Sep 1 – Sep 25, 2026']); setStatus([]); setSubject([]); setDecision([]); }}
              className="text-[12px] font-bold text-[#7A1849] hover:underline"
            >
              Reset filters
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div>
              <label className={`block text-[11px] font-bold mb-2 ${textMain}`}>Date range</label>
              <MultiSelectDropdown 
                label="Date range"
                options={['Sep 1 – Sep 25, 2026', 'Oct 1 – Oct 31, 2026', 'Nov 1 – Nov 30, 2026']}
                selected={dateRange}
                onChange={setDateRange}
                isDarkMode={isDarkMode}
              />
            </div>

            <div>
              <label className={`block text-[11px] font-bold mb-2 ${textMain}`}>Manuscript status</label>
              <MultiSelectDropdown 
                label="Status"
                options={['Published', 'Screening Stage', 'Under Review', 'In Production']}
                selected={status}
                onChange={setStatus}
                isDarkMode={isDarkMode}
              />
            </div>

            <div>
              <label className={`block text-[11px] font-bold mb-2 ${textMain}`}>Categories / subject</label>
              <MultiSelectDropdown 
                label="Subject"
                options={['Computer Science', 'Medical Systems', 'Physics', 'Materials Science']}
                selected={subject}
                onChange={setSubject}
                isDarkMode={isDarkMode}
              />
            </div>

            <div>
              <label className={`block text-[11px] font-bold mb-2 ${textMain}`}>Decision</label>
              <MultiSelectDropdown 
                label="Decision"
                options={['Accept', 'Minor Revision', 'Major Revision', 'Reject']}
                selected={decision}
                onChange={setDecision}
                isDarkMode={isDarkMode}
              />
            </div>
          </div>

          <div className="flex justify-between items-center">
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
                <h2 className={`text-[16px] font-bold tracking-tight ${textMain}`}>Manuscript pipeline by status</h2>
                <p className={`text-[12px] font-medium mt-0.5 ${textMuted}`}>Sep 1 – Sep 25, 2026 · All reviewers · All decisions</p>
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

          {/* Data Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className={`text-[10px] font-bold uppercase tracking-wider ${isDarkMode ? 'bg-[#2A2A2A] text-gray-300' : 'bg-[#FAFAFA] text-gray-500'}`}>
                  <th className="px-6 py-3.5 font-bold">Manuscript Status</th>
                  <th className="px-6 py-3.5 font-bold">Total Count</th>
                  <th className="px-6 py-3.5 font-bold">Percentage</th>
                  <th className="px-6 py-3.5 font-bold text-right">Median Days</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isDarkMode ? 'divide-[#2D2D2D]' : 'divide-gray-100'}`}>
                {tableData.map((row, idx) => (
                  <tr key={idx} className={`${isDarkMode ? 'hover:bg-[#2A2A2A]' : 'hover:bg-gray-50'} transition-colors`}>
                    <td className={`px-6 py-4 text-[13px] font-bold ${textMain}`}>{row.status}</td>
                    <td className={`px-6 py-4 text-[13px] font-medium ${textMain}`}>{row.count}</td>
                    <td className={`px-6 py-4 text-[13px] font-medium ${textMain}`}>{row.percentage}%</td>
                    <td className={`px-6 py-4 text-[13px] font-medium text-right ${textMain}`}>{row.medianDays} days</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer Stats */}
          <div className={`px-6 py-4 border-t flex justify-between items-center ${borderCol}`}>
            <p className={`text-[12px] font-medium ${textMuted}`}>
              {tableData.length} status categories · {totals.count} total manuscripts
            </p>
            <p className={`text-[12px] font-medium ${textMuted}`}>
              Page 1 of 1
            </p>
          </div>

        </div>

        {/* Method Note */}
        <p className={`text-[11px] font-medium mt-4 ${textMuted}`}>
          Methodology: pipeline counts represent active manuscripts in each stage as of the selected period. Median days represent the average time spent in each stage.
        </p>

      </div>
    </AdminLayout>
  );
}