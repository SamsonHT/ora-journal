import React, { useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { FilePdfOutlined, FileExcelOutlined, FilterOutlined } from '@ant-design/icons';

export default function Reports() {
  const { isDarkMode } = useTheme();
  const [isGenerated, setIsGenerated] = useState(false);

  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-100';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const inputBg = isDarkMode ? 'bg-[#1A1A1A] border-[#3D3D3D] text-white focus:ring-[#7A1849]' : 'bg-gray-50 border-gray-200 text-gray-900 focus:ring-[#7A1849]';

  return (
    <AdminLayout>
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-8">
          <p className={`text-[11px] font-bold tracking-widest uppercase mb-1.5 ${textMuted}`}>Workspace / Reports</p>
          <h1 className={`text-3xl font-serif font-bold ${textMain}`}>Generate Reports</h1>
          <p className={`text-[14px] mt-1.5 ${textMuted}`}>Export system data by filtering roles, dates, and statuses.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Filters Panel */}
          <div className={`lg:col-span-1 p-6 rounded-2xl border shadow-sm h-fit ${bgCard}`}>
            <h2 className={`text-[15px] font-bold mb-5 flex items-center gap-2 ${textMain}`}><FilterOutlined /> Filters</h2>
            
            <div className="space-y-5">
              <div>
                <label className={`block text-[12px] font-bold mb-1.5 ${textMain}`}>Report Type</label>
                <select className={`w-full px-4 py-2.5 rounded-xl border outline-none ${inputBg}`}>
                  <option>User Activity Report</option>
                  <option>Submission Pipeline Report</option>
                  <option>Revenue & Payments Report</option>
                </select>
              </div>

              <div>
                <label className={`block text-[12px] font-bold mb-1.5 ${textMain}`}>Date Range</label>
                <div className="grid grid-cols-2 gap-2">
                  <input type="date" className={`w-full px-3 py-2.5 rounded-xl border outline-none text-[12px] ${inputBg}`} />
                  <input type="date" className={`w-full px-3 py-2.5 rounded-xl border outline-none text-[12px] ${inputBg}`} />
                </div>
              </div>

              <div>
                <label className={`block text-[12px] font-bold mb-1.5 ${textMain}`}>User Role</label>
                <select className={`w-full px-4 py-2.5 rounded-xl border outline-none ${inputBg}`}>
                  <option>All Roles</option>
                  <option>Author</option>
                  <option>Reviewer</option>
                  <option>Editor</option>
                </select>
              </div>

              <div>
                <label className={`block text-[12px] font-bold mb-1.5 ${textMain}`}>Account Status</label>
                <select className={`w-full px-4 py-2.5 rounded-xl border outline-none ${inputBg}`}>
                  <option>All Statuses</option>
                  <option>Active</option>
                  <option>Suspended</option>
                  <option>Pending</option>
                </select>
              </div>

              <button onClick={() => setIsGenerated(true)} className="w-full bg-[#7A1849] text-white py-3 rounded-xl text-[13px] font-bold hover:bg-[#5E1136] transition-all shadow-md mt-4">
                Generate Report
              </button>
            </div>
          </div>

          {/* Report Preview Area */}
          <div className="lg:col-span-2">
            {isGenerated ? (
              <div className={`p-10 rounded-2xl border shadow-sm bg-white ${isDarkMode ? 'dark-pdf' : ''}`}>
                {/* Report Header with Logo */}
                <div className="flex justify-between items-start border-b pb-6 mb-6">
                  <div className="flex items-center gap-4">
                    <img src="/oralogo.png" alt="ORA" className="h-12 w-auto" onError={(e) => e.target.style.display = 'none'} />
                    <div>
                      <h2 className="text-2xl font-serif font-bold text-gray-900">ORA Academic Journals</h2>
                      <p className="text-[12px] text-gray-500 uppercase tracking-widest">System Report</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[14px] font-bold text-[#7A1849]">User Activity Report</p>
                    <p className="text-[12px] text-gray-500">Generated: Oct 24, 2026</p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-[13px] text-gray-600 leading-relaxed">
                    This report outlines user engagement, registration volume, and active roles over the selected date range. Data is filtered by Active status and includes all roles.
                  </p>
                </div>

                {/* Simple Summary Table */}
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-3 text-[12px] font-bold text-gray-700">Role</th>
                      <th className="p-3 text-[12px] font-bold text-gray-700">Total Users</th>
                      <th className="p-3 text-[12px] font-bold text-gray-700">Active (Period)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr><td className="p-3 text-[13px]">Authors</td><td className="p-3 text-[13px] font-bold">892</td><td className="p-3 text-[13px] text-green-600">+124</td></tr>
                    <tr><td className="p-3 text-[13px]">Reviewers</td><td className="p-3 text-[13px] font-bold">238</td><td className="p-3 text-[13px] text-green-600">+18</td></tr>
                    <tr><td className="p-3 text-[13px]">Editors</td><td className="p-3 text-[13px] font-bold">64</td><td className="p-3 text-[13px] text-gray-500">0</td></tr>
                  </tbody>
                </table>

                <div className="mt-8 pt-6 border-t flex justify-end gap-3">
                  <button className="px-4 py-2 border rounded-lg text-[12px] font-bold text-gray-700 hover:bg-gray-50 flex items-center gap-2"><FilePdfOutlined /> Download PDF</button>
                  <button className="px-4 py-2 border rounded-lg text-[12px] font-bold text-gray-700 hover:bg-gray-50 flex items-center gap-2"><FileExcelOutlined /> Export Excel</button>
                </div>
              </div>
            ) : (
              <div className={`h-full min-h-[400px] flex flex-col items-center justify-center rounded-2xl border border-dashed ${isDarkMode ? 'border-gray-700 bg-[#1A1A1A]' : 'border-gray-300 bg-gray-50'}`}>
                <FilePdfOutlined className={`text-5xl mb-4 ${isDarkMode ? 'text-gray-600' : 'text-gray-300'}`} />
                <p className={`text-[14px] font-medium ${textMuted}`}>Select filters and click Generate to view report</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}