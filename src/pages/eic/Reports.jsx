import React, { useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { 
  FilePdfOutlined, FileExcelOutlined, FilterOutlined, 
  BarChartOutlined, TeamOutlined, FileTextOutlined, 
  DownloadOutlined, CalendarOutlined 
} from '@ant-design/icons';

export default function EiCReports() {
  const { isDarkMode } = useTheme();
  const [activeTab, setActiveTab] = useState('Reviewer Reports');
  const [isGenerated, setIsGenerated] = useState(true);

  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-200';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const inputBg = isDarkMode ? 'bg-[#1A1A1A] border-[#3D3D3D] text-white focus:ring-[#7A1849]' : 'bg-gray-50 border-gray-200 text-gray-900 focus:bg-white focus:ring-[#7A1849]';
  const borderCol = isDarkMode ? 'border-[#2D2D2D]' : 'border-gray-100';

  const labelStyle = `block text-[11px] font-bold uppercase tracking-wider mb-2 ${textMuted}`;

  return (
    <AdminLayout>
      <div className="max-w-[1400px] mx-auto animate-fade-in-up">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
            <p className={`text-[11px] font-bold tracking-widest uppercase mb-1.5 ${textMuted}`}>Workspace / Analytics</p>
            <h1 className={`text-3xl font-serif font-bold ${textMain}`}>Journal Reports</h1>
            <p className={`text-[14px] mt-1.5 ${textMuted}`}>Generate detailed reports on reviewer performance and manuscript pipelines.</p>
          </div>
        </div>

        {/* Modern Tabs */}
        <div className={`flex gap-6 border-b mb-6 ${borderCol}`}>
          {[
            { id: 'Reviewer Reports', icon: <TeamOutlined /> },
            { id: 'Manuscript Reports', icon: <FileTextOutlined /> },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 pb-3 text-[14px] font-bold border-b-2 transition-colors ${
                activeTab === tab.id 
                  ? 'text-[#7A1849] border-[#7A1849]' 
                  : `text-gray-500 border-transparent hover:text-gray-700 dark:hover:text-gray-300`
              }`}
            >
              {tab.icon} {tab.id}
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* ================= LEFT PANEL: FILTERS ================= */}
          <div className={`w-full lg:w-[320px] flex-shrink-0 p-6 rounded-2xl border shadow-sm h-fit sticky top-24 ${bgCard}`}>
            <h2 className={`text-[15px] font-bold mb-5 flex items-center gap-2 ${textMain}`}>
              <FilterOutlined className="text-[#7A1849]" /> Report Filters
            </h2>
            
            <div className="space-y-4">
              
              {/* Common Filter: Subject Area */}
              <div>
                <label className={labelStyle}>Subject Area</label>
                <select className={`w-full px-3 py-2.5 rounded-xl border outline-none text-[13px] ${inputBg}`}>
                  <option>All Subject Areas</option>
                  <option>Computer Science</option>
                  <option>Medical Imaging</option>
                  <option>Renewable Energy</option>
                </select>
              </div>

              {/* Common Filter: Status */}
              <div>
                <label className={labelStyle}>Status</label>
                <select className={`w-full px-3 py-2.5 rounded-xl border outline-none text-[13px] ${inputBg}`}>
                  <option>All Statuses</option>
                  <option>Under Review</option>
                  <option>Accepted</option>
                  <option>Rejected</option>
                </select>
              </div>

              {/* Conditional Filter: Manuscript Type */}
              {activeTab === 'Manuscript Reports' && (
                <div>
                  <label className={labelStyle}>Manuscript Type</label>
                  <select className={`w-full px-3 py-2.5 rounded-xl border outline-none text-[13px] ${inputBg}`}>
                    <option>All Types</option>
                    <option>Original Research</option>
                    <option>Review Article</option>
                    <option>Case Study</option>
                  </select>
                </div>
              )}

              {/* Common Filter: Date Range */}
              <div>
                <label className={labelStyle}>Date Range</label>
                <div className="space-y-2">
                  <div className="relative">
                    <CalendarOutlined className="absolute left-3 top-3 text-gray-400 text-[12px]" />
                    <input type="date" className={`w-full pl-8 pr-3 py-2.5 rounded-xl border outline-none text-[12px] ${inputBg}`} />
                  </div>
                  <div className="relative">
                    <CalendarOutlined className="absolute left-3 top-3 text-gray-400 text-[12px]" />
                    <input type="date" className={`w-full pl-8 pr-3 py-2.5 rounded-xl border outline-none text-[12px] ${inputBg}`} />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                <button onClick={() => setIsGenerated(true)} className="w-full bg-[#7A1849] text-white py-3 rounded-xl font-bold text-[13px] hover:bg-[#5E1136] transition-all shadow-md">
                  Generate Report
                </button>
              </div>
            </div>
          </div>

          {/* ================= RIGHT PANEL: REPORT PREVIEW ================= */}
          <div className="flex-1">
            {isGenerated ? (
              <div className={`rounded-2xl border shadow-lg overflow-hidden bg-white ${isDarkMode ? 'dark-report' : ''}`}>
                
                {/* Report Header with Logo */}
                <div className="p-8 border-b border-gray-200 bg-gray-50 flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    <img src="/oralogo.png" alt="ORA" className="h-12 w-auto" onError={(e) => e.target.style.display = 'none'} />
                    <div>
                      <h2 className="text-xl font-serif font-bold text-gray-900">Oromo Research Association</h2>
                      <p className="text-[11px] font-bold text-[#7A1849] uppercase tracking-wider">
                        {activeTab === 'Reviewer Reports' ? 'Reviewer Performance Analytics' : 'Manuscript Pipeline Report'}
                      </p>
                    </div>
                  </div>
                  <div className="text-right text-[12px] text-gray-500">
                    <p>Generated: {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                    <p>Period: Sep 01 - Sep 30, 2026</p>
                  </div>
                </div>

                {/* Report Summary Stats */}
                <div className="p-8 grid grid-cols-3 gap-4 border-b border-gray-100">
                  {activeTab === 'Reviewer Reports' ? (
                    <>
                      <div className="text-center">
                        <p className="text-[10px] font-bold text-gray-500 uppercase">Active Reviewers</p>
                        <p className="text-2xl font-bold text-[#7A1849]">42</p>
                      </div>
                      <div className="text-center border-x border-gray-200">
                        <p className="text-[10px] font-bold text-gray-500 uppercase">Avg. Review Time</p>
                        <p className="text-2xl font-bold text-gray-800">14 Days</p>
                      </div>
                      <div className="text-center">
                        <p className="text-[10px] font-bold text-gray-500 uppercase">Completion Rate</p>
                        <p className="text-2xl font-bold text-green-600">92%</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-center">
                        <p className="text-[10px] font-bold text-gray-500 uppercase">Total Submissions</p>
                        <p className="text-2xl font-bold text-[#7A1849]">82</p>
                      </div>
                      <div className="text-center border-x border-gray-200">
                        <p className="text-[10px] font-bold text-gray-500 uppercase">Decision Time</p>
                        <p className="text-2xl font-bold text-gray-800">21 Days</p>
                      </div>
                      <div className="text-center">
                        <p className="text-[10px] font-bold text-gray-500 uppercase">Acceptance Rate</p>
                        <p className="text-2xl font-bold text-green-600">42%</p>
                      </div>
                    </>
                  )}
                </div>

                {/* Data Table */}
                <div className="p-8">
                  <h3 className="text-[14px] font-bold text-gray-800 mb-4">Detailed Breakdown</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b-2 border-gray-200 text-gray-500 uppercase text-[10px] tracking-wider">
                          {activeTab === 'Reviewer Reports' ? (
                            <>
                              <th className="py-3 px-4">Reviewer Name</th>
                              <th className="py-3 px-4">Assignments</th>
                              <th className="py-3 px-4">Avg. Score Given</th>
                              <th className="py-3 px-4 text-right">Completion Rate</th>
                            </>
                          ) : (
                            <>
                              <th className="py-3 px-4">Manuscript ID</th>
                              <th className="py-3 px-4">Subject Area</th>
                              <th className="py-3 px-4">Status</th>
                              <th className="py-3 px-4 text-right">Time in Pipeline</th>
                            </>
                          )}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 text-gray-800 text-[12px]">
                        {activeTab === 'Reviewer Reports' ? (
                          <>
                            <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-bold">Dr. Rachel Green</td><td className="py-3 px-4">12</td><td className="py-3 px-4">8.5/10</td><td className="py-3 px-4 text-right text-green-600 font-bold">95%</td></tr>
                            <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-bold">Prof. Alan Turing</td><td className="py-3 px-4">8</td><td className="py-3 px-4">7.2/10</td><td className="py-3 px-4 text-right text-amber-600 font-bold">80%</td></tr>
                            <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-bold">Dr. Sarah Chen</td><td className="py-3 px-4">15</td><td className="py-3 px-4">9.1/10</td><td className="py-3 px-4 text-right text-green-600 font-bold">100%</td></tr>
                          </>
                        ) : (
                          <>
                            <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-mono font-bold">MS-2026-010</td><td className="py-3 px-4">Computer Science</td><td className="py-3 px-4 text-green-600 font-bold">Accepted</td><td className="py-3 px-4 text-right">18 Days</td></tr>
                            <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-mono font-bold">MS-2026-012</td><td className="py-3 px-4">Medical Imaging</td><td className="py-3 px-4 text-red-600 font-bold">Rejected</td><td className="py-3 px-4 text-right">22 Days</td></tr>
                            <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-mono font-bold">MS-2026-014</td><td className="py-3 px-4">Renewable Energy</td><td className="py-3 px-4 text-amber-600 font-bold">Under Review</td><td className="py-3 px-4 text-right">12 Days</td></tr>
                          </>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="p-6 bg-gray-50 border-t border-gray-200 flex justify-between items-center">
                  <p className="text-[11px] text-gray-500 font-medium">Generated by Ava Morgan (Editor-in-Chief)</p>
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
            ) : (
              <div className={`h-full min-h-[500px] flex flex-col items-center justify-center rounded-2xl border-2 border-dashed ${isDarkMode ? 'border-gray-700 bg-[#1A1A1A]' : 'border-gray-300 bg-gray-50'}`}>
                <BarChartOutlined className={`text-6xl mb-4 ${isDarkMode ? 'text-gray-600' : 'text-gray-300'}`} />
                <p className={`text-[16px] font-bold ${textMain}`}>No Report Generated</p>
                <p className={`text-[13px] mt-1 ${textMuted}`}>Select your filters on the left and click Generate.</p>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* CSS to ensure the report stays white for printing/exporting even in dark mode */}
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