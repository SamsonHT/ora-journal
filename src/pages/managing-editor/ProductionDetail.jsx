import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { ArrowLeftOutlined, DownloadOutlined, CheckCircleFilled, InfoCircleOutlined } from '@ant-design/icons';

export default function ProductionDetail() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  
  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-200';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const borderCol = isDarkMode ? 'border-[#2D2D2D]' : 'border-gray-100';
  const inputBg = isDarkMode ? 'bg-[#1A1A1A] border-[#3D3D3D] text-white' : 'bg-gray-50 border-gray-200 text-gray-900';

  return (
    <AdminLayout>
      <div className="max-w-[1300px] mx-auto animate-fade-in-up">
        <button onClick={() => navigate('/managing-editor/pending-production')} className="text-[12px] font-bold text-[#7A1849] hover:underline flex items-center gap-2 mb-4">
          <ArrowLeftOutlined /> Back to Pending Production
        </button>

        <div className="flex justify-between items-end mb-6">
          <div>
            <p className={`text-[11px] font-bold tracking-widest uppercase mb-1 ${textMuted}`}>Workspace / Production / ORA-2026-010</p>
            <h1 className={`text-2xl font-serif font-bold flex items-center gap-3 ${textMain}`}>
              Send Author Proof
              <span className="bg-amber-50 text-amber-600 text-[10px] font-bold px-2 py-1 rounded border border-amber-100 uppercase">Awaiting Author</span>
            </h1>
            <p className={`text-[13px] mt-1 ${textMuted}`}>Prepare and send the final production proof to the corresponding author for review.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Accepted Manuscript Info Banner */}
            <div className={`p-6 rounded-2xl border shadow-sm ${bgCard}`}>
              <p className={`text-[11px] font-bold uppercase tracking-wider mb-2 text-[#7A1849]`}>Accepted Manuscript</p>
              <h2 className={`text-xl font-serif font-bold mb-4 ${textMain}`}>Adaptive models for coastal resilience under compound climate hazards</h2>
              
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div><p className={`text-[10px] font-bold uppercase ${textMuted}`}>Author</p><p className={`text-[12px] font-bold ${textMain}`}>Dr. L. Chen</p></div>
                <div><p className={`text-[10px] font-bold uppercase ${textMuted}`}>Manuscript ID</p><p className={`text-[12px] font-bold ${textMain}`}>ORA-2026-092</p></div>
                <div><p className={`text-[10px] font-bold uppercase ${textMuted}`}>Manuscript Type</p><p className={`text-[12px] font-bold ${textMain}`}>Case Study</p></div>
                <div><p className={`text-[10px] font-bold uppercase ${textMuted}`}>Final Decision</p><p className={`text-[12px] font-bold text-green-600`}>Accepted</p></div>
              </div>
              
              <div className={`p-3 rounded-lg border flex items-center gap-3 ${isDarkMode ? 'bg-green-900/10 border-green-900/30' : 'bg-green-50 border-green-200'}`}>
                <CheckCircleFilled className="text-green-500" />
                <p className={`text-[12px] font-medium ${isDarkMode ? 'text-green-400' : 'text-green-800'}`}>Final acceptance recorded by Editor-in-Chief on Sept 22, 2026. The manuscript is ready for author proofing.</p>
              </div>
            </div>

            {/* Source and final files */}
            <div className={`p-6 rounded-2xl border shadow-sm ${bgCard}`}>
              <h2 className={`text-[16px] font-bold mb-4 ${textMain}`}>Source and final files</h2>
              <p className={`text-[12px] mb-4 ${textMuted}`}>Reference the accepted source package and production-ready files before uploading the author proof.</p>
              
              <div className="space-y-3">
                {[
                  { l: 'Manuscript.docx', s: 'Accepted version · 1.7 MB', d: 'Feb 12, 2026' },
                  { l: 'Final_Figures.zip', s: 'High resolution · 24 MB', d: 'Feb 12, 2026' },
                  { l: 'Typeset_v1.pdf', s: 'Initial typeset · 1.8 MB', d: 'Feb 12, 2026' },
                ].map((f, i) => (
                  <div key={i} className={`p-3 rounded-lg border flex justify-between items-center ${isDarkMode ? 'bg-[#2A2A2A] border-[#3D3D3D]' : 'bg-gray-50 border-gray-200'}`}>
                    <div>
                      <p className={`text-[13px] font-bold ${textMain}`}>{f.l}</p>
                      <p className={`text-[11px] ${textMuted}`}>{f.s} • {f.d}</p>
                    </div>
                    <button className={`text-[12px] font-bold text-[#7A1849] hover:underline`}>Download</button>
                  </div>
                ))}
              </div>
            </div>

            {/* Proof Document */}
            <div className={`p-6 rounded-2xl border shadow-sm ${bgCard}`}>
              <h2 className={`text-[16px] font-bold mb-1 ${textMain}`}>Proof document</h2>
              <p className={`text-[12px] mb-4 ${textMuted}`}>Upload the final PDF the author will review. This file will be visible in the author's Pending Proof workspace.</p>
              
              <div className={`border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center text-center mb-4 cursor-pointer ${isDarkMode ? 'border-gray-700 hover:bg-[#2A2A2A]' : 'border-gray-300 hover:bg-gray-50'}`}>
                <InfoCircleOutlined className="text-2xl text-gray-400 mb-2" />
                <p className={`text-[13px] font-bold ${textMain}`}>Drop proof PDF here or browse files</p>
                <p className={`text-[11px] ${textMuted}`}>PDF only - Maximum 50MB. We will validate page size and author markers.</p>
              </div>

              <div className={`p-3 rounded-lg border flex justify-between items-center mb-6 ${isDarkMode ? 'bg-[#2A2A2A] border-[#3D3D3D]' : 'bg-gray-50 border-gray-200'}`}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-red-100 text-red-500 flex items-center justify-center text-[10px] font-bold">PDF</div>
                  <p className={`text-[13px] font-bold ${textMain}`}>ORA-2026-092_Author_Proof_v1.pdf</p>
                </div>
                <button className={`text-[12px] font-bold text-[#7A1849] hover:underline`}>Download</button>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className={`block text-[12px] font-bold mb-1 ${textMain}`}>Proof version</label>
                  <input type="text" defaultValue="Version 1" className={`w-full px-3 py-2 rounded-lg border text-[13px] ${inputBg}`} />
                </div>
                <div>
                  <label className={`block text-[12px] font-bold mb-1 ${textMain}`}>Response due date *</label>
                  <input type="date" defaultValue="2026-10-03" className={`w-full px-3 py-2 rounded-lg border text-[13px] ${inputBg}`} />
                </div>
              </div>
            </div>

            {/* Message to Author */}
            <div className={`p-6 rounded-2xl border shadow-sm ${bgCard}`}>
              <h2 className={`text-[16px] font-bold mb-1 ${textMain}`}>Message to Author</h2>
              <p className={`text-[12px] mb-4 ${textMuted}`}>This message is included in the proof notification email and author workspace.</p>
              
              <div className="mb-4">
                <label className={`block text-[12px] font-bold mb-1 ${textMain}`}>Message *</label>
                <textarea rows="4" defaultValue="Dear Dr. Chen, please review the attached proof carefully, including author names, affiliations, figures, tables, and the highlighted production queries. Kindly submit corrections directly in the PDF and return your response by October 3, 2026. Please avoid introducing new substantive changes at this stage." className={`w-full p-3 rounded-lg border text-[13px] leading-relaxed resize-none ${inputBg}`}></textarea>
              </div>

              <div>
                <label className={`block text-[12px] font-bold mb-1 ${textMain}`}>Optional production instructions (internal notes)</label>
                <textarea rows="2" placeholder="Add notes for the production team. These notes are not visible to the author." className={`w-full p-3 rounded-lg border text-[13px] resize-none ${inputBg}`}></textarea>
              </div>
            </div>

            <div className={`p-4 rounded-xl border flex items-center gap-3 ${isDarkMode ? 'bg-[#2A2A2A] border-[#3D3D3D]' : 'bg-blue-50 border-blue-100'}`}>
              <InfoCircleOutlined className="text-blue-500" />
              <p className={`text-[11px] font-medium ${isDarkMode ? 'text-gray-300' : 'text-blue-800'}`}>Sending changes the status to Proof sent. The author will be notified by email and in their portal. This action will be logged.</p>
            </div>
          </div>

          {/* Right Sidebar: Production Status */}
          <div className="space-y-6">
            <div className={`p-6 rounded-2xl border shadow-sm ${bgCard}`}>
              <h3 className={`text-[14px] font-bold mb-4 ${textMain}`}>Production status</h3>
              <p className={`text-[11px] mb-4 ${textMuted}`}>Current production history</p>
              
              <div className={`relative border-l-2 ml-2 space-y-6 ${borderCol}`}>
                {[
                  { t: 'Final decision accepted', d: 'Editor-in-Chief · Dr. R. Chen', time: 'Sep 22, 2026', active: true },
                  { t: 'Production files prepared', d: 'Typesetting and final figure checks finalized.', time: 'Sep 24, 2026', active: true },
                  { t: 'Awaiting proof', d: 'Upload and send the final author proof.', time: 'Sep 24, 2026', active: true, current: true },
                  { t: 'Proof sent', d: 'Author reviews and returns deadline details.', time: 'Pending' },
                  { t: 'Corrections requested', d: 'Author requests changes for proof approval.', time: 'Pending' },
                  { t: 'Accepted', d: 'Proof approved for final quality check.', time: 'Pending' },
                ].map((step, i) => (
                  <div key={i} className="ml-5 relative">
                    <span className={`absolute -left-[27px] top-1 w-3 h-3 rounded-full border-2 ${step.current ? 'bg-[#7A1849] border-[#7A1849]' : step.active ? 'bg-green-500 border-green-500' : 'bg-gray-200 border-gray-300 dark:bg-gray-700 dark:border-gray-600'}`}></span>
                    <p className={`text-[13px] font-bold ${step.current ? 'text-[#7A1849]' : textMain}`}>{step.t}</p>
                    <p className={`text-[11px] ${textMuted}`}>{step.d}</p>
                    <p className={`text-[10px] font-medium mt-0.5 ${step.current ? 'text-[#7A1849]' : 'text-gray-400'}`}>{step.time}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={`p-6 rounded-2xl border shadow-sm ${bgCard}`}>
              <h3 className={`text-[14px] font-bold mb-4 ${textMain}`}>Ready to send</h3>
              <div className="space-y-3 mb-6">
                {['Proof PDF uploaded', 'Version assigned', 'Response due date set', 'Author message reviewed'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircleFilled className="text-green-500 text-[14px]" />
                    <span className={`text-[12px] font-medium ${textMain}`}>{item}</span>
                  </div>
                ))}
              </div>
              <div className={`pt-4 border-t ${borderCol}`}>
                <p className={`text-[10px] font-bold uppercase ${textMuted}`}>Corresponding author</p>
                <p className={`text-[13px] font-bold ${textMain}`}>Dr. L. Chen</p>
                <p className={`text-[11px] ${textMuted}`}>l.chen@coastal-research.edu</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Footer */}
        <div className={`fixed bottom-0 left-0 right-0 lg:left-[250px] p-4 border-t z-40 flex justify-end items-center gap-3 transition-colors duration-300 backdrop-blur-md ${isDarkMode ? 'bg-[#1E1E1E]/90 border-[#2D2D2D]' : 'bg-white/90 border-gray-200'}`}>
          <button className={`px-5 py-2.5 rounded-xl text-[13px] font-bold border transition-colors ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50 bg-white'}`}>Save as Draft</button>
          <button onClick={() => navigate('/managing-editor/pending-production')} className="bg-[#7A1849] text-white px-6 py-2.5 rounded-xl font-bold text-[13px] hover:bg-[#5E1136] shadow-md flex items-center gap-2">Send Proof to Author</button>
        </div>
      </div>
    </AdminLayout>
  );
}