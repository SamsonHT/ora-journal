import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { ArrowLeftOutlined, DownloadOutlined, CheckCircleFilled, EyeOutlined, EyeInvisibleOutlined, CalendarOutlined, GlobalOutlined } from '@ant-design/icons';

export default function ViewPublished() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  
  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-200';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const borderCol = isDarkMode ? 'border-[#2D2D2D]' : 'border-gray-100';
  const inputBg = isDarkMode ? 'bg-[#1A1A1A] border-[#3D3D3D] text-white' : 'bg-gray-50 border-gray-200';

  return (
    <AdminLayout>
      <div className="max-w-[1400px] mx-auto animate-fade-in-up pb-12">
        <button onClick={() => navigate('/managing-editor/published')} className="text-[12px] font-bold text-[#7A1849] hover:underline flex items-center gap-2 mb-4">
          <ArrowLeftOutlined /> Back to Published Manuscripts
        </button>

        <div className="flex justify-between items-end mb-6">
          <div>
            <p className={`text-[11px] font-bold tracking-widest uppercase mb-1 ${textMuted}`}>Workspace / Published / ORA-2026-001</p>
            <h1 className={`text-2xl font-serif font-bold flex items-center gap-3 ${textMain}`}>
              Neural Networks in Healthcare
              <span className="bg-green-50 text-green-600 text-[10px] font-bold px-2 py-1 rounded border border-green-100 uppercase">Published</span>
            </h1>
          </div>
          <button className={`px-5 py-2.5 rounded-xl text-[13px] font-bold border transition-colors ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50 bg-white'}`}>Download PDF</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Metadata Card */}
            <div className={`p-6 md:p-8 rounded-2xl border shadow-sm ${bgCard}`}>
              <h2 className={`text-[16px] font-bold mb-6 pb-4 border-b ${borderCol} ${textMain}`}>Manuscript Details</h2>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div><p className={`text-[11px] font-bold uppercase tracking-wider mb-1 ${textMuted}`}>Manuscript Type</p><p className={`text-[13px] font-bold ${textMain}`}>Research Article</p></div>
                <div><p className={`text-[11px] font-bold uppercase tracking-wider mb-1 ${textMuted}`}>Subject Area</p><p className={`text-[13px] font-bold ${textMain}`}>Medical AI</p></div>
                <div><p className={`text-[11px] font-bold uppercase tracking-wider mb-1 ${textMuted}`}>Published Issue</p><p className={`text-[13px] font-bold text-[#7A1849]`}>Vol 18, Issue 10</p></div>
              </div>

              <h3 className={`text-[14px] font-bold mb-2 ${textMain}`}>Abstract</h3>
              <p className={`text-[13px] leading-relaxed mb-6 ${textMain}`}>
                This research explores the deployment of deep neural networks for early disease detection in clinical settings. By analyzing large-scale Electronic Health Records (EHR), we demonstrate a 94% accuracy rate in predicting patient readmission risks, significantly outperforming traditional logistic regression models.
              </p>

              <h3 className={`text-[14px] font-bold mb-2 ${textMain}`}>Keywords</h3>
              <div className="flex flex-wrap gap-2">
                {['Neural Networks', 'Healthcare AI', 'EHR', 'Clinical Diagnosis', 'Predictive Modeling'].map((k, i) => (
                  <span key={i} className={`text-[11px] px-2 py-1 rounded border font-medium ${isDarkMode ? 'bg-[#2A2A2A] border-[#3D3D3D] text-gray-300' : 'bg-gray-50 border-gray-200 text-gray-600'}`}>{k}</span>
                ))}
              </div>
            </div>

            {/* Version History */}
            <div className={`p-6 md:p-8 rounded-2xl border shadow-sm ${bgCard}`}>
              <h2 className={`text-[16px] font-bold mb-4 ${textMain}`}>Proof Versions</h2>
              <div className="space-y-3">
                {[
                  { v: 'v1.0', label: 'Initial Draft', date: 'Sep 20, 2026', isFinal: false },
                  { v: 'v2.0', label: 'Author Revision', date: 'Sep 28, 2026', isFinal: false },
                  { v: 'v3.0', label: 'Final Published Version', date: 'Oct 12, 2026', isFinal: true },
                ].map((version, i) => (
                  <div key={i} className={`p-4 rounded-xl border flex justify-between items-center transition-colors ${version.isFinal ? (isDarkMode ? 'bg-green-900/10 border-green-900/30' : 'bg-green-50 border-green-200') : (isDarkMode ? 'bg-[#2A2A2A] border-[#3D3D3D]' : 'bg-gray-50 border-gray-200')}`}>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <p className={`text-[13px] font-bold ${textMain}`}>{version.v} - {version.label}</p>
                        {version.isFinal && <span className="text-[9px] font-bold bg-green-500 text-white px-2 py-0.5 rounded uppercase">Live</span>}
                      </div>
                      <p className={`text-[11px] ${textMuted}`}>{version.date} • PDF</p>
                    </div>
                    <button className={`p-2 rounded-lg border transition-colors ${isDarkMode ? 'border-gray-600 hover:bg-gray-700' : 'border-gray-300 hover:bg-white'}`}>
                      <DownloadOutlined />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar: Access Management */}
          <div className="space-y-6">
            <div className={`p-6 rounded-2xl border shadow-sm ${bgCard}`}>
              <h3 className={`text-[15px] font-bold mb-4 pb-3 border-b ${borderCol} ${textMain}`}>Access Management</h3>
              
              <div className="space-y-5">
                <div>
                  <label className={`block text-[12px] font-bold mb-2 ${textMain}`}>Visibility Status</label>
                  <select className={`w-full px-3 py-2.5 rounded-lg border outline-none text-[13px] font-medium ${inputBg}`}>
                    <option>Publicly Visible</option>
                    <option>Hidden / Draft</option>
                    <option>Scheduled Release</option>
                  </select>
                </div>

                <div>
                  <label className={`block text-[12px] font-bold mb-2 ${textMain}`}>Schedule Release Date</label>
                  <div className="relative">
                    <CalendarOutlined className="absolute left-3 top-3 text-gray-400" />
                    <input type="date" className={`w-full pl-9 pr-3 py-2.5 rounded-lg border outline-none text-[13px] ${inputBg}`} />
                  </div>
                </div>

                <div className={`p-3 rounded-lg border flex items-center justify-between ${isDarkMode ? 'bg-[#2A2A2A] border-[#3D3D3D]' : 'bg-gray-50 border-gray-200'}`}>
                  <div className="flex items-center gap-2">
                    <EyeOutlined className="text-[#7A1849]" />
                    <span className={`text-[12px] font-bold ${textMain}`}>Public Search Indexing</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className={`w-9 h-5 rounded-full peer transition-colors ${isDarkMode ? 'bg-gray-600 peer-checked:bg-[#7A1849]' : 'bg-gray-300 peer-checked:bg-[#7A1849]'}`}></div>
                    <div className="absolute left-[2px] top-[2px] bg-white rounded-full h-4 w-4 transition-all peer-checked:translate-x-full"></div>
                  </label>
                </div>

                <button className="w-full bg-[#7A1849] text-white py-2.5 rounded-xl font-bold text-[13px] hover:bg-[#5E1136] shadow-md mt-2">Save Access Settings</button>
              </div>
            </div>

            <div className={`p-6 rounded-2xl border shadow-sm ${isDarkMode ? 'bg-[#2A2A2A] border-[#3D3D3D]' : 'bg-blue-50 border-blue-100'}`}>
               <div className="flex items-center gap-2 mb-2">
                 <GlobalOutlined className="text-blue-500" />
                 <h3 className={`text-[13px] font-bold ${textMain}`}>Public DOI URL</h3>
               </div>
               <p className={`text-[12px] font-mono break-all ${isDarkMode ? 'text-gray-300' : 'text-blue-800'}`}>
                 https://doi.org/10.1234/ora.medai.2026.10
               </p>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}