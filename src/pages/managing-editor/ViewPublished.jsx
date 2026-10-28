import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { ArrowLeftOutlined, DownloadOutlined, CheckCircleFilled, EyeOutlined, CalendarOutlined, GlobalOutlined } from '@ant-design/icons';

export default function ViewPublished() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  
  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-200';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const borderCol = isDarkMode ? 'border-[#2D2D2D]' : 'border-gray-100';
  const inputBg = isDarkMode ? 'bg-[#1A1A1A] border-[#3D3D3D] text-white' : 'bg-white border-gray-300 text-gray-900';

  return (
    <AdminLayout>
      <div className="max-w-[1400px] mx-auto animate-fade-in-up pb-24">
        
        {/* Header Section - Back button top right as in other pages */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <p className={`text-[10px] font-bold tracking-[0.1em] uppercase mb-1.5 ${textMuted}`}>WORKSPACE / ARCHIVE / ORA-2026-072</p>
            <div className="flex items-center gap-3">
              <h1 className={`text-[26px] font-bold tracking-tight ${textMain}`}>Published Manuscript Details</h1>
              <span className="bg-[#F0FDF4] text-[#15803D] text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-widest border border-[#DCFCE7]">Published</span>
            </div>
            <p className={`text-[13px] font-medium mt-1 ${textMuted}`}>Review the final published record, metadata, and access settings.</p>
          </div>
          
          <button onClick={() => navigate('/managing-editor/published')} className="text-[12px] font-bold text-gray-500 hover:text-[#7A1849] flex items-center gap-2 transition-colors px-4 py-2 border border-gray-200 rounded-lg bg-white shadow-sm">
            <ArrowLeftOutlined /> Back to Published Manuscripts
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Content Column (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Metadata Card */}
            <div className={`p-6 rounded-xl border shadow-sm ${bgCard}`}>
              <div className="flex justify-between items-start mb-4">
                <p className={`text-[10px] font-bold uppercase tracking-widest text-[#7A1849]`}>PUBLISHED MANUSCRIPT</p>
                <span className="text-[11px] font-bold text-[#15803D] bg-white px-2 py-0.5 rounded border border-[#DCFCE7]">Live</span>
              </div>
              <h2 className={`text-[20px] font-bold tracking-tight mb-6 ${textMain}`}>Graphene oxide membranes for water purification</h2>
              
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div><p className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${textMuted}`}>Corresponding Author</p><p className={`text-[13px] font-bold ${textMain}`}>Dr. S. Okafor</p></div>
                <div><p className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${textMuted}`}>Manuscript ID</p><p className={`text-[13px] font-bold text-[#7A1849]`}>ORA-2026-072</p></div>
                <div><p className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${textMuted}`}>Published Issue</p><p className={`text-[13px] font-bold text-[#7A1849]`}>Vol. 18 · Issue 9</p></div>
                <div><p className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${textMuted}`}>Publication Date</p><p className={`text-[13px] font-bold ${textMain}`}>Sep 22, 2026</p></div>
              </div>

              <div className={`border-t pt-6 ${borderCol}`}>
                <h3 className={`text-[15px] font-bold tracking-tight mb-2 ${textMain}`}>Abstract</h3>
                <p className={`text-[13px] leading-[1.8] font-medium ${textMuted}`}>
                  This research explores the deployment of graphene oxide membranes for efficient water purification. By analyzing large-scale water samples, we demonstrate a 94% removal rate of heavy metal contaminants, significantly outperforming traditional filtration methods.
                </p>
              </div>

              <div className={`border-t pt-6 mt-6 ${borderCol}`}>
                <h3 className={`text-[15px] font-bold tracking-tight mb-3 ${textMain}`}>Keywords</h3>
                <div className="flex flex-wrap gap-2">
                  {['Graphene', 'Water Purification', 'Membranes', 'Environmental Engineering'].map((k, i) => (
                    <span key={i} className={`text-[11px] font-bold px-2.5 py-1 rounded-md border ${isDarkMode ? 'bg-[#2A2A2A] border-[#3D3D3D] text-gray-300' : 'bg-gray-50 border-gray-200 text-gray-600'}`}>{k}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Version History */}
            <div className={`p-6 rounded-xl border shadow-sm ${bgCard}`}>
              <h2 className={`text-[15px] font-bold tracking-tight mb-1 ${textMain}`}>Proof Versions</h2>
              <p className={`text-[12px] font-medium mb-4 ${textMuted}`}>Complete version history of the manuscript file.</p>
              
              <div className="space-y-3">
                {[
                  { v: 'v1.0', label: 'Initial Draft', date: 'Aug 20, 2026', isFinal: false },
                  { v: 'v2.0', label: 'Author Revision', date: 'Sep 05, 2026', isFinal: false },
                  { v: 'v3.0', label: 'Final Published Version', date: 'Sep 22, 2026', isFinal: true },
                ].map((version, i) => (
                  <div key={i} className={`p-4 rounded-lg border flex justify-between items-center transition-colors ${version.isFinal ? (isDarkMode ? 'bg-[#F0FDF4]/10 border-[#15803D]/30' : 'bg-[#F0FDF4] border-[#DCFCE7]') : (isDarkMode ? 'bg-[#2A2A2A] border-[#3D3D3D]' : 'bg-[#FAFAFA] border-gray-200')}`}>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <p className={`text-[13px] font-bold ${textMain}`}>{version.v} - {version.label}</p>
                        {version.isFinal && <span className="text-[9px] font-bold bg-[#15803D] text-white px-2 py-0.5 rounded uppercase">Live</span>}
                      </div>
                      <p className={`text-[11px] font-medium ${textMuted}`}>{version.date} · PDF</p>
                    </div>
                    <button className={`p-2 rounded-lg border transition-colors ${isDarkMode ? 'border-gray-600 hover:bg-gray-700' : 'border-gray-200 hover:bg-white shadow-sm'}`}>
                      <DownloadOutlined />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* DOI / Public Link */}
            <div className={`p-6 rounded-xl border shadow-sm ${bgCard}`}>
              <h3 className={`text-[15px] font-bold tracking-tight mb-3 ${textMain}`}>Public DOI URL</h3>
              <div className={`p-3 rounded-lg border flex items-center gap-2 ${isDarkMode ? 'bg-[#2A2A2A] border-[#3D3D3D]' : 'bg-[#FAFAFA] border-gray-200'}`}>
                <GlobalOutlined className="text-[#7A1849]" />
                <p className={`text-[12px] font-mono font-medium truncate ${textMain}`}>https://doi.org/10.1080/ora.2026.072</p>
              </div>
              <button className={`w-full mt-3 py-2.5 rounded-lg text-[12px] font-bold border transition-colors ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-200 text-gray-700 hover:bg-gray-50 bg-white'}`}>
                Copy Link
              </button>
            </div>

            {/* Access Management */}
            <div className={`p-6 rounded-xl border shadow-sm ${bgCard}`}>
              <h3 className={`text-[15px] font-bold tracking-tight mb-3 ${textMain}`}>Access Management</h3>
              
              <div className="space-y-5">
                <div>
                  <label className={`block text-[11px] font-bold mb-2 ${textMuted}`}>Visibility Status</label>
                  <select className={`w-full px-3 py-2.5 rounded-lg border outline-none text-[13px] font-medium ${inputBg}`}>
                    <option>Publicly Visible</option>
                    <option>Hidden / Draft</option>
                    <option>Scheduled Release</option>
                  </select>
                </div>

                <div>
                  <label className={`block text-[11px] font-bold mb-2 ${textMuted}`}>Scheduled Release</label>
                  <div className="relative">
                    <CalendarOutlined className="absolute left-3 top-3 text-gray-400" />
                    <input type="date" defaultValue="2026-10-01" className={`w-full pl-9 pr-3 py-2.5 rounded-lg border outline-none text-[13px] ${inputBg}`} />
                  </div>
                </div>

                <div className={`p-3 rounded-lg border flex items-center justify-between ${isDarkMode ? 'bg-[#2A2A2A] border-[#3D3D3D]' : 'bg-[#FAFAFA] border-gray-200'}`}>
                  <div className="flex items-center gap-2">
                    <EyeOutlined className="text-[#7A1849]" />
                    <span className={`text-[12px] font-bold ${textMain}`}>Search Indexing</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className={`w-9 h-5 rounded-full peer transition-colors ${isDarkMode ? 'bg-gray-600 peer-checked:bg-[#7A1849]' : 'bg-gray-300 peer-checked:bg-[#7A1849]'}`}></div>
                    <div className="absolute left-[2px] top-[2px] bg-white rounded-full h-4 w-4 transition-all peer-checked:translate-x-full"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* Published Info */}
            <div className={`p-6 rounded-xl border shadow-sm ${bgCard}`}>
              <h3 className={`text-[15px] font-bold tracking-tight mb-3 ${textMain}`}>Publish Status</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircleFilled className="text-[#15803D] text-[12px] mt-0.5" />
                  <div>
                    <p className={`text-[12px] font-bold ${textMain}`}>Published in Journal</p>
                    <p className={`text-[11px] font-medium ${textMuted}`}>Appears in Volume 18, Issue 9.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircleFilled className="text-[#15803D] text-[12px] mt-0.5" />
                  <div>
                    <p className={`text-[12px] font-bold ${textMain}`}>DOI Registered</p>
                    <p className={`text-[11px] font-medium ${textMuted}`}>Registered against the public article.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircleFilled className="text-[#15803D] text-[12px] mt-0.5" />
                  <div>
                    <p className={`text-[12px] font-bold ${textMain}`}>Search Indexed</p>
                    <p className={`text-[11px] font-medium ${textMuted}`}>Indexed in ORA Academic discovery.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </AdminLayout>
  );
}