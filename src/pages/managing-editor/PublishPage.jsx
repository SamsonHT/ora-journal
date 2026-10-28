import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { ArrowLeftOutlined, CheckCircleFilled, GlobalOutlined, EyeOutlined } from '@ant-design/icons';

export default function PublishPage() {
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
        
        {/* Header Section - Back button moved to top right */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <p className={`text-[10px] font-bold tracking-[0.1em] uppercase mb-1.5 ${textMuted}`}>WORKSPACE / PRODUCTION / ORA-2026-097</p>
            <div className="flex items-center gap-3">
              <h1 className={`text-[26px] font-bold tracking-tight ${textMain}`}>Accepted Proof to Publish</h1>
              <span className="bg-[#7A1849] text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-widest">Managing Editor</span>
            </div>
            <p className={`text-[13px] font-medium mt-1 ${textMuted}`}>Complete final publication details and release the accepted article to the public journal.</p>
          </div>
          
          <button onClick={() => navigate('/managing-editor/pending-production')} className="text-[12px] font-bold text-gray-500 hover:text-[#7A1849] flex items-center gap-2 transition-colors px-4 py-2 border border-gray-200 rounded-lg bg-white shadow-sm">
            <ArrowLeftOutlined /> Back to Pending Production
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 space-y-6">
            
            {/* Accepted Author Proof Info */}
            <div className={`p-6 rounded-xl border shadow-sm ${bgCard}`}>
              <div className="flex justify-between items-start mb-4">
                <p className={`text-[10px] font-bold uppercase tracking-widest text-[#7A1849]`}>ACCEPTED AUTHOR PROOF</p>
                <span className="bg-[#F0FDF4] text-[#15803D] text-[10px] font-bold px-2.5 py-1 rounded-md">Ready to publish</span>
              </div>
              <h2 className={`text-[20px] font-bold tracking-tight mb-6 ${textMain}`}>Adaptive models for coastal resilience under compound climate hazards</h2>
              
              <div className="grid grid-cols-5 gap-4 mb-6">
                <div><p className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${textMuted}`}>Corresponding Author</p><p className={`text-[13px] font-bold ${textMain}`}>Dr. Rui Chen</p></div>
                <div><p className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${textMuted}`}>Manuscript ID</p><p className={`text-[13px] font-bold text-[#7A1849]`}>ORA-2026-097</p></div>
                <div><p className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${textMuted}`}>Article Type</p><p className={`text-[13px] font-bold ${textMain}`}>Case Study</p></div>
                <div><p className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${textMuted}`}>Proof Version</p><p className={`text-[13px] font-bold ${textMain}`}>Version 2 · accepted</p></div>
                <div><p className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${textMuted}`}>Accepted On</p><p className={`text-[13px] font-bold ${textMain}`}>Sep 27, 2026</p></div>
              </div>
              
              <div className={`p-3 rounded-lg border flex items-center justify-between ${isDarkMode ? 'bg-[#F0FDF4]/10 border-[#15803D]/30' : 'bg-[#F0FDF4] border-[#DCFCE7]'}`}>
                <div className="flex items-center gap-3">
                  <CheckCircleFilled className="text-[#15803D]" />
                  <p className={`text-[12px] font-medium ${isDarkMode ? 'text-green-400' : 'text-[#15803D]'}`}>Author approval is recorded. All production files pass validation, and no unresolved production queries remain.</p>
                </div>
                <span className="text-[11px] font-bold text-[#15803D] bg-white px-2 py-0.5 rounded border border-[#DCFCE7]">Checked 4 min ago</span>
              </div>
            </div>

            {/* DOI Input */}
            <div className={`p-6 rounded-xl border shadow-sm ${bgCard}`}>
              <h3 className={`text-[15px] font-bold tracking-tight mb-1 ${textMain}`}>Digital Object Identifier (DOI)</h3>
              <p className={`text-[12px] font-medium mb-4 ${textMuted}`}>Register the permanent identifier before publication. ORA will automatically generate the suffix from the manuscript record.</p>
              <div className="flex items-center gap-3">
                <span className="text-[14px] font-bold text-gray-500 bg-gray-50 px-3 py-2.5 rounded-lg border border-gray-200">DOI *</span>
                <input type="text" defaultValue="10.1080/ora.2026.097" className={`flex-1 px-4 py-2.5 rounded-lg border text-[14px] font-medium outline-none ${inputBg}`} />
                <button className="bg-[#7A1849] text-white px-5 py-2.5 rounded-lg font-bold text-[13px] hover:bg-[#5E1136] transition-colors shadow-sm flex items-center gap-2">
                  <GlobalOutlined /> Prepare DOI
                </button>
              </div>
              <p className={`text-[11px] font-medium mt-2 ${textMuted}`}>Editable before registration. The DOI becomes permanent when the article is published.</p>
            </div>

            {/* Publication Metadata */}
            <div className={`p-6 rounded-xl border shadow-sm ${bgCard}`}>
              <h3 className={`text-[15px] font-bold tracking-tight mb-1 ${textMain}`}>Publication metadata</h3>
              <p className={`text-[12px] font-medium mb-6 ${textMuted}`}>Confirm how the article will appear in the journal issue and public discovery records.</p>
              <div className="grid grid-cols-4 gap-4">
                <div><label className={`block text-[11px] font-medium mb-1.5 ${textMuted}`}>Volume</label><input type="text" defaultValue="18" className={`w-full px-3 py-2 rounded-lg border text-[13px] font-bold outline-none ${inputBg}`} /></div>
                <div><label className={`block text-[11px] font-medium mb-1.5 ${textMuted}`}>Issue</label><input type="text" defaultValue="10" className={`w-full px-3 py-2 rounded-lg border text-[13px] font-bold outline-none ${inputBg}`} /></div>
                <div><label className={`block text-[11px] font-medium mb-1.5 ${textMuted}`}>Article number</label><input type="text" defaultValue="097" className={`w-full px-3 py-2 rounded-lg border text-[13px] font-bold outline-none ${inputBg}`} /></div>
                <div><label className={`block text-[11px] font-medium mb-1.5 ${textMuted}`}>Page number</label><input type="text" defaultValue="1-26" className={`w-full px-3 py-2 rounded-lg border text-[13px] font-bold outline-none ${inputBg}`} /></div>
              </div>
            </div>
                   {/* Sticky Footer */}
        <div className={`fixed bottom-0 left-0 right-0 p-4 border-t z-40 flex justify-between items-center gap-4 transition-colors duration-300 backdrop-blur-md ${isDarkMode ? 'bg-[#1E1E1E]/90 border-[#2D2D2D]' : 'bg-white/90 border-gray-200'}`}>
          <p className={`text-[11px] font-medium ${textMuted}`}>Publishing makes the article immediately available on the public journal issue page. The DOI will be registered against the public article.</p>
          <div className="flex gap-3 shrink-0">
            <button className={`px-5 py-2.5 rounded-lg text-[13px] font-bold border transition-colors flex items-center gap-2 ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-200 text-gray-700 hover:bg-gray-50 bg-white'}`}>
              <EyeOutlined /> Preview article
            </button>
            <button onClick={() => navigate('/managing-editor/published')} className="bg-[#7A1849] text-white px-6 py-2.5 rounded-lg font-bold text-[13px] hover:bg-[#5E1136] shadow-sm flex items-center gap-2 transition-colors">
              Publish to Journal
            </button>
          </div>
        </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className={`p-6 rounded-xl border shadow-sm ${bgCard}`}>
              <h3 className={`text-[15px] font-bold tracking-tight mb-1 ${textMain}`}>Ready to publish</h3>
              <p className={`text-[11px] font-medium mb-4 ${textMuted}`}>All final checks are complete.</p>
              <div className="space-y-3 mb-6">
                {[
                  { t: 'Author proof accepted', d: 'Dr. Rui Chen approved proof v2 on Sep 27, 2026.' },
                  { t: 'Production files complete', d: 'PDF, XML, figures, and supplementary data validated.' },
                  { t: 'Journal assignment confirmed', d: 'ORA Volume 18, Issue 10.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircleFilled className="text-[#15803D] text-[12px] mt-0.5" />
                    <div>
                      <p className={`text-[12px] font-bold ${textMain}`}>{item.t}</p>
                      <p className={`text-[11px] font-medium ${textMuted}`}>{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className={`pt-4 border-t ${borderCol}`}>
                <div className="flex justify-between items-center mb-1">
                  <span className={`text-[12px] font-medium ${textMuted}`}>Publication readiness</span>
                  <span className={`text-[12px] font-bold text-[#15803D]`}>100%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
                  <div className="h-full bg-[#15803D] rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
            </div>

            <div className={`p-6 rounded-xl border shadow-sm ${bgCard}`}>
              <h3 className={`text-[14px] font-bold tracking-tight mb-3 ${textMain}`}>Public destination</h3>
              <p className={`text-[11px] font-medium mb-4 ${textMuted}`}>The article will appear in the journal issue and ORA Academic discovery index.</p>
              <button className={`text-[12px] font-bold text-[#7A1849] hover:underline flex items-center gap-2`}>
                <GlobalOutlined /> Preview public article page
              </button>
            </div>
          </div>
        </div>

 
      </div>
    </AdminLayout>
  );
}