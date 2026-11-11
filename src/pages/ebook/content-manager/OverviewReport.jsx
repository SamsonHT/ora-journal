// src/pages/ebook/content-manager/OverviewReport.jsx
import React, { useState, useRef, useEffect } from 'react';
import DigitalContentManagerLayout from '../../../layouts/ebook/DigitalContentManagerLayout';
import { useTheme } from '../../../context/ThemeContext';
import { 
  DownOutlined, BarChartOutlined, FileExcelOutlined, FilePdfOutlined, CheckOutlined 
} from '@ant-design/icons';

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
            ? 'bg-[#1A1A1A] border-[#3D3D3D] text-gray-300 hover:border-[#6B1D3A]/50' 
            : 'bg-white border-gray-200 text-gray-700 hover:border-[#6B1D3A]/50'
        } ${isOpen ? 'border-[#6B1D3A] ring-1 ring-[#6B1D3A]/20' : ''}`}
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
                  isDarkMode ? 'text-gray-300 hover:bg-[#6B1D3A]/20 hover:text-white' : 'text-gray-700 hover:bg-[#FCF7F9] hover:text-[#6B1D3A]'
                }`}
              >
                <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors ${
                  selected.includes(option) 
                    ? 'bg-[#6B1D3A] border-[#6B1D3A] text-white' 
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
export default function OverviewReport() {
  const { isDarkMode } = useTheme();

  // State for filters
  const [dateRange, setDateRange] = useState(['Sep 1 – Sep 25, 2026']);
  const [category, setCategory] = useState([]);
  const [production, setProduction] = useState([]);
  const [publication, setPublication] = useState([]);

  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-200';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const borderCol = isDarkMode ? 'border-[#2D2D2D]' : 'border-gray-100';

  const tableData = [
    { book: 'The Civic Algorithm', bookId: 'EB-2026-184', category: 'Social Sciences', production: 'In progress', publication: 'Not published', doiIsbn: 'Pending assignment' },
    { book: 'Clinical AI', bookId: 'EB-2026-108', category: 'Medical & Health', production: 'In progress', publication: 'Not published', doiIsbn: 'Pending assignment' },
    { book: 'Research Ethics & Open Science', bookId: 'EB-2026-154', category: 'Research Methods', production: 'Completed', publication: '02 Oct 2026', doiIsbn: '10.54321/ora.ebook.2026.154\n978-1-4028-9462-0 (PDF)' },
    { book: 'Public Health Systems', bookId: 'EB-2026-148', category: 'Medical & Health', production: 'Completed', publication: '01 Oct 2026', doiIsbn: '10.54321/ora.ebook.2026.148\n978-1-4028-9458-9 (PDF)' },
  ];

  const totals = tableData.reduce((acc, row) => ({
    completed: acc.completed + (row.production === 'Completed' ? 1 : 0),
  }), { completed: 0 });

  return (
    <DigitalContentManagerLayout>
      <div className="max-w-[1400px] mx-auto animate-fade-in-up">
        
        {/* Header */}
        <div className="mb-8">
          <p className={`text-[10px] font-bold tracking-[0.1em] uppercase mb-1.5 ${textMuted}`}>WORKSPACE / REPORT / GENERAL</p>
          <h1 className={`text-[26px] font-bold tracking-tight ${textMain}`}>General report</h1>
          <p className={`text-[13px] font-medium mt-1 ${textMuted}`}>Generate a consolidated view of ebook production, verification and publication.</p>
        </div>

        {/* Filter Bar */}
        <div className={`rounded-xl border shadow-sm mb-6 p-6 ${bgCard}`}>
          <div className="flex justify-between items-center mb-6">
            <h2 className={`text-[15px] font-bold tracking-tight ${textMain}`}>Report filters</h2>
            <button 
              onClick={() => { setDateRange(['Sep 1 – Sep 25, 2026']); setCategory([]); setProduction([]); setPublication([]); }}
              className="text-[12px] font-bold text-[#6B1D3A] hover:underline"
            >
              Reset filters
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Date Range */}
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

            {/* Category */}
            <div>
              <label className={`block text-[11px] font-bold mb-2 ${textMain}`}>Category</label>
              <MultiSelectDropdown 
                label="Category"
                options={['Social Sciences', 'Medical & Health', 'Computer Science', 'Research Methods', 'Engineering']}
                selected={category}
                onChange={setCategory}
                isDarkMode={isDarkMode}
              />
            </div>

            {/* Production Status */}
            <div>
              <label className={`block text-[11px] font-bold mb-2 ${textMain}`}>Production status</label>
              <MultiSelectDropdown 
                label="Production status"
                options={['In progress', 'Completed', 'Pending']}
                selected={production}
                onChange={setProduction}
                isDarkMode={isDarkMode}
              />
            </div>

            {/* Publication Status */}
            <div>
              <label className={`block text-[11px] font-bold mb-2 ${textMain}`}>Publication status</label>
              <MultiSelectDropdown 
                label="Publication status"
                options={['Published', 'Not published']}
                selected={publication}
                onChange={setPublication}
                isDarkMode={isDarkMode}
              />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <p className={`text-[11px] font-medium ${textMuted}`}>Date range is inclusive · All times in UTC</p>
            <button className="bg-[#6B1D3A] text-white px-5 py-2.5 rounded-lg font-bold text-[13px] hover:bg-[#531324] transition-colors shadow-sm flex items-center gap-2">
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
                <h2 className={`text-[16px] font-bold tracking-tight ${textMain}`}>Production summary</h2>
                <p className={`text-[12px] font-medium mt-0.5 ${textMuted}`}>Sep 1 – Sep 25, 2026 · All categories · All statuses</p>
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
                <tr className="bg-[#6B1D3A] text-[10px] font-bold text-white uppercase tracking-wider">
                  <th className="px-6 py-3.5">Book / Identifier</th>
                  <th className="px-6 py-3.5">Category</th>
                  <th className="px-6 py-3.5">Production status</th>
                  <th className="px-6 py-3.5">Publication</th>
                  <th className="px-6 py-3.5 text-right">DOI / ISBN</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isDarkMode ? 'divide-[#2D2D2D]' : 'divide-gray-100'}`}>
                {tableData.map((row, idx) => (
                  <tr key={idx} className={`${isDarkMode ? 'hover:bg-[#2A2A2A]' : 'hover:bg-gray-50'} transition-colors`}>
                    <td className={`px-6 py-4 text-[13px] ${textMain}`}>
                      <p className="font-bold">{row.book}</p>
                      <p className={`text-[11px] ${textMuted}`}>{row.bookId}</p>
                    </td>
                    <td className={`px-6 py-4 text-[12px] ${textMain}`}>{row.category}</td>
                    <td className={`px-6 py-4 text-[12px] font-bold ${row.production === 'Completed' ? 'text-[#059669]' : 'text-[#2563EB]'}`}>
                      {row.production}
                    </td>
                    <td className={`px-6 py-4 text-[12px] ${textMain}`}>{row.publication}</td>
                    <td className={`px-6 py-4 text-[11px] font-mono whitespace-pre-line leading-relaxed ${textMain}`}>{row.doiIsbn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer Stats */}
          <div className={`px-6 py-4 border-t flex justify-between items-center ${borderCol}`}>
            <p className={`text-[12px] font-medium ${textMuted}`}>
              Previewing {tableData.length} of 52 records · {totals.completed} completed · Exports include all matching books
            </p>
            <div className="flex gap-2">
              <button className={`px-3 py-1.5 border rounded-md text-[11px] font-bold ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-200 text-gray-600 hover:bg-gray-50 bg-white'}`}>Previous</button>
              <button className="px-3 py-1.5 border border-[#6B1D3A] bg-[#FCF7F9] rounded-md text-[11px] font-bold text-[#6B1D3A]">1</button>
              <button className={`px-3 py-1.5 border rounded-md text-[11px] font-bold ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-200 text-gray-600 hover:bg-gray-50 bg-white'}`}>Next</button>
            </div>
          </div>

        </div>

        {/* Method Note */}
        <p className={`text-[11px] font-medium mt-4 ${textMuted}`}>
          Methodology: report data is aggregated from production, publishing and ISBN logs. Date range applies to last workflow activity.
        </p>

      </div>
    </DigitalContentManagerLayout>
  );
}