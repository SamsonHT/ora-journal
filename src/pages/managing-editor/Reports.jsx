import React, { useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { 
  FilePdfOutlined, FileExcelOutlined, FilterOutlined, 
  FileTextOutlined, CheckCircleOutlined, ClockCircleOutlined, 
  CalendarOutlined, GlobalOutlined 
} from '@ant-design/icons';

export default function MEReports() {
  const { isDarkMode } = useTheme();
  const [isGenerated, setIsGenerated] = useState(true); // Default true to show preview

  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-200';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const inputBg = isDarkMode ? 'bg-[#1A1A1A] border-[#3D3D3D] text-white focus:ring-[#7A1849]' : 'bg-gray-50 border-gray-200 text-gray-900 focus:bg-white focus:ring-[#7A1849]';
  const labelStyle = `block text-[11px] font-bold uppercase tracking-wider mb-2 ${textMuted}`;

  return (
    <AdminLayout>
      <div className="max-w-[1400px] mx-auto animate-fade-in-up">
        
        {/* Header */}
        <div className="mb-6">
          <p className={`text-[11px] font-bold tracking-widest uppercase mb-1.5 ${textMuted}`}>Workspace / Reports</p>
          <h1 className={`text-2xl font-serif font-bold ${textMain}`}>Publication Reports</h1>
          <p className={`text-[13px] mt-1 ${textMuted}`}>Generate analytics for manuscript pipeline and publishing volume.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* LEFT PANEL: FILTERS */}
          <div className={`w-full lg:w-[300px] flex-shrink-0 p-6 rounded-2xl border shadow-sm h-fit sticky top-24 ${bgCard}`}>
            <h2 className={`text-[15px] font-bold mb-5 flex items-center gap-2 ${textMain}`}>
              <FilterOutlined className="text-[#7A1849]" /> Report Filters
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className={labelStyle}>Manuscript Status</label>
                <select className={`w-full px-3 py-2.5 rounded-xl border outline-none text-[13px] font-medium cursor-pointer ${inputBg}`}>
                  <option>All Statuses</option>
                  <option>Published</option>
                  <option>Screening Stage</option>
                  <option>Under Review</option>
                  <option>In Production</option>
                </select>
              </div>

              <div>
                <label className={labelStyle}>Date Range From</label>
                <div className="relative">
                  <CalendarOutlined className="absolute left-3 top-3 text-gray-400 text-[12px]" />
                  <input type="date" className={`w-full pl-8 pr-3 py-2.5 rounded-xl border outline-none text-[12px] ${inputBg}`} />
                </div>
              </div>

              <div>
                <label className={labelStyle}>Date Range To</label>
                <div className="relative">
                  <CalendarOutlined className="absolute left-3 top-3 text-gray-400 text-[12px]" />
                  <input type="date" className={`w-full pl-8 pr-3 py-2.5 rounded-xl border outline-none text-[12px] ${inputBg}`} />
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                <button onClick={() => setIsGenerated(true)} className="w-full bg-[#7A1849] text-white py-3 rounded-xl font-bold text-[13px] hover:bg-[#5E1136] transition-all shadow-md">
                  Generate Report
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: REPORT PREVIEW */}
          <div className="flex-1">
            {isGenerated && (
              <div className={`rounded-2xl border shadow-lg overflow-hidden bg-white ${isDarkMode ? 'dark-report' : ''}`}>
                
                {/* Report Header */}
                <div className="p-8 border-b border-gray-200 bg-gray-50 flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    <img src="/oralogo.png" alt="ORA" className="h-12 w-auto" onError={(e) => e.target.style.display = 'none'} />
                    <div>
                      <h2 className="text-xl font-serif font-bold text-gray-900">Oromo Research Association</h2>
                      <p className="text-[11px] font-bold text-[#7A1849] uppercase tracking-wider">Manuscript Status Report</p>
                    </div>
                  </div>
                  <div className="text-right text-[12px] text-gray-500">
                    <p>Generated: Oct 24, 2026</p>
                    <p>Period: Sep 01 - Sep 30, 2026</p>
                  </div>
                </div>

                {/* Report Stats Cards */}
                <div className="p-8 grid grid-cols-4 gap-4 border-b border-gray-100">
                   <div className="p-4 rounded-xl border border-gray-100 bg-gray-50">
                     <p className="text-[10px] font-bold text-gray-500 uppercase mb-1">Published</p>
                     <p className="text-2xl font-bold text-[#7A1849]">142</p>
                   </div>
                   <div className="p-4 rounded-xl border border-gray-100 bg-gray-50">
                     <p className="text-[10px] font-bold text-gray-500 uppercase mb-1">Screening</p>
                     <p className="text-2xl font-bold text-blue-600">38</p>
                   </div>
                   <div className="p-4 rounded-xl border border-gray-100 bg-gray-50">
                     <p className="text-[10px] font-bold text-gray-500 uppercase mb-1">Under Review</p>
                     <p className="text-2xl font-bold text-amber-500">24</p>
                   </div>
                   <div className="p-4 rounded-xl border border-gray-100 bg-gray-50">
                     <p className="text-[10px] font-bold text-gray-500 uppercase mb-1">In Production</p>
                     <p className="text-2xl font-bold text-green-600">12</p>
                   </div>
                </div>

                {/* Data Table */}
                <div className="p-8">
                  <h3 className="text-[14px] font-bold text-gray-800 mb-4">Manuscripts in Pipeline</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b-2 border-gray-200 text-gray-500 uppercase text-[10px] tracking-wider">
                          <th className="py-3 px-4">Manuscript ID</th>
                          <th className="py-3 px-4">Title</th>
                          <th className="py-3 px-4">Status</th>
                          <th className="py-3 px-4">Date Added</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 text-gray-800 text-[12px]">
                        <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-mono font-bold">ORA-2026-010</td><td className="py-3 px-4">Neural Networks in Healthcare</td><td className="py-3 px-4"><span className="text-green-600 font-bold">Published</span></td><td className="py-3 px-4">Sep 14, 2026</td></tr>
                        <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-mono font-bold">ORA-2026-012</td><td className="py-3 px-4">Micro-structural analysis of silicon</td><td className="py-3 px-4"><span className="text-green-600 font-bold">Published</span></td><td className="py-3 px-4">Sep 15, 2026</td></tr>
                        <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-mono font-bold">ORA-2026-092</td><td className="py-3 px-4">Adaptive models for coastal resilience</td><td className="py-3 px-4"><span className="text-amber-500 font-bold">Under Review</span></td><td className="py-3 px-4">Sep 22, 2026</td></tr>
                        <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-mono font-bold">ORA-2026-098</td><td className="py-3 px-4">Quantum Computing & Sensor Arrays</td><td className="py-3 px-4"><span className="text-blue-600 font-bold">Screening</span></td><td className="py-3 px-4">Sep 28, 2026</td></tr>
                        <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-mono font-bold">ORA-2026-102</td><td className="py-3 px-4">Thermal Drift in Quantum Systems</td><td className="py-3 px-4"><span className="text-green-600 font-bold">In Production</span></td><td className="py-3 px-4">Oct 02, 2026</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="p-6 bg-gray-50 border-t border-gray-200 flex justify-between items-center">
                  <p className="text-[11px] text-gray-500 font-medium">Generated by Ava Morgan (Managing Editor)</p>
                  <div className="flex gap-3">
                    <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-[12px] font-bold text-gray-700 hover:bg-gray-100 flex items-center gap-2 transition-colors shadow-sm">
                      <FileExcelOutlined className="text-green-600" /> Export Excel
                    </button>
                    <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-[12px] font-bold text-gray-700 hover:bg-gray-100 flex items-center gap-2 transition-colors shadow-sm">
                      <FilePdfOutlined className="text-red-500" /> Download PDF
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .dark-report { background-color: #ffffff !important; }
        .dark-report .bg-gray-50 { background-color: #F9FAFB !important; }
        .dark-report .text-gray-900 { color: #111827 !important; }
        .dark-report .text-gray-800 { color: #1F2937 !important; }
        .dark-report .text-gray-500 { color: #6B7280 !important; }
        .dark-report .border-gray-200 { border-color: #E5E7EB !important; }
        .dark-report .border-gray-100 { border-color: #F3F4F6 !important; }
      `}} />
    </AdminLayout>
  );
}