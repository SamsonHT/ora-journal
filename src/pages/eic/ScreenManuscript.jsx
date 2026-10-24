import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { 
  ArrowLeftOutlined, DownloadOutlined, CheckCircleOutlined, 
  FileTextOutlined, UserOutlined, SafetyCertificateOutlined 
} from '@ant-design/icons';

export default function ScreenManuscript() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-200';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const inputBg = isDarkMode ? 'bg-[#1A1A1A] border-[#3D3D3D] text-white focus:ring-[#7A1849]' : 'bg-gray-50 border-gray-200 text-gray-900 focus:bg-white focus:ring-[#7A1849]';
  const borderCol = isDarkMode ? 'border-[#2D2D2D]' : 'border-gray-100';

  return (
    <AdminLayout>
      <div className="max-w-[1300px] mx-auto animate-fade-in-up">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-4">
          <div>
            <button onClick={() => navigate('/eic/screening')} className="text-[12px] font-bold text-[#7A1849] hover:underline flex items-center gap-1.5 mb-3">
              <ArrowLeftOutlined /> Back to Screening Queue
            </button>
            <h1 className={`text-2xl font-serif font-bold flex items-center gap-3 ${textMain}`}>
              Screen Manuscript
              <span className="text-[10px] bg-[#FCF7F9] text-[#7A1849] px-2.5 py-1 rounded-md font-bold uppercase tracking-wider border border-[#7A1849]/20">ORA-2026-112</span>
            </h1>
            <p className={`text-[13px] mt-1 ${textMuted}`}>Review manuscript details and make a screening decision.</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* ================= MAIN CONTENT COLUMN ================= */}
          <div className="flex-1 space-y-6">
            
            {/* Metadata & Abstract Card */}
            <div className={`p-6 md:p-8 rounded-2xl border shadow-sm ${bgCard}`}>
              <h2 className={`text-[16px] font-bold mb-6 pb-4 border-b ${borderCol} ${textMain}`}>Metadata & Abstract</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className={`text-[11px] font-bold uppercase tracking-wider mb-1 ${textMuted}`}>Subject Area</p>
                  <p className={`text-[13px] font-medium ${textMain}`}>Computer Science / Distributed Systems</p>
                </div>
                <div>
                  <p className={`text-[11px] font-bold uppercase tracking-wider mb-1 ${textMuted}`}>Keywords</p>
                  <p className={`text-[13px] font-medium ${textMain}`}>distributed systems, consensus, cloud computing, hybrid architecture</p>
                </div>
                <div>
                  <p className={`text-[11px] font-bold uppercase tracking-wider mb-1 ${textMuted}`}>Author(s)</p>
                  <p className={`text-[13px] font-medium ${textMain}`}>Dr. Rachel Green</p>
                </div>
                <div>
                  <p className={`text-[11px] font-bold uppercase tracking-wider mb-1 ${textMuted}`}>Submitted On</p>
                  <p className={`text-[13px] font-medium ${textMain}`}>Sep 14, 2026</p>
                </div>
              </div>

              <div className={`border-t pt-6 ${borderCol}`}>
                <p className={`text-[11px] font-bold uppercase tracking-wider mb-2 ${textMuted}`}>Paper Title</p>
                <h3 className={`text-[18px] font-serif font-bold mb-4 ${textMain}`}>Distributed Consensus Mechanisms in Hybrid Cloud Environments</h3>
                
                <p className={`text-[11px] font-bold uppercase tracking-wider mb-2 ${textMuted}`}>Abstract</p>
                <p className={`text-[14px] leading-relaxed ${textMain}`}>
                  Hybrid cloud networks present unique challenges for maintaining system-wide consensus across heterogeneous computing nodes. This research introduces a novel, lightweight consensus engine optimized specifically for hybrid architectures. By combining localized proof-of-authority clusters with a global gossip protocol fallback mechanism, we demonstrate a 34% reduction in consensus verification overhead. Simulated stress tests indicate robust Byzantine fault tolerance and minimal latency variance even under severe regional packet loss.
                </p>
              </div>
            </div>

            {/* Screening Decision Card */}
            <div className={`p-6 md:p-8 rounded-2xl border shadow-sm ${bgCard}`}>
              <h2 className={`text-[16px] font-bold mb-2 ${textMain}`}>Screening Decision</h2>
              <p className={`text-[13px] mb-6 ${textMuted}`}>Select your screening decision to either proceed this submission to formal review or desk reject it immediately.</p>
              
              <div className="mb-6">
                <label className={`block text-[12px] font-bold mb-2 ${textMain}`}>Reason <span className="text-red-500">*</span></label>
                <textarea 
                  rows="4" 
                  placeholder="Enter the reason for your screening decision..." 
                  className={`w-full p-4 rounded-xl border outline-none ring-offset-2 focus:ring-2 resize-none text-[14px] ${inputBg}`}
                ></textarea>
                <p className={`text-[11px] mt-2 ${textMuted}`}>Required for both Proceed to Review (approve) and Reject.</p>
              </div>
              
              <div className="flex gap-3">
                <button onClick={() => navigate('/eic/assign-reviewers')} className="bg-[#7A1849] text-white px-6 py-3 rounded-xl text-[13px] font-bold hover:bg-[#5E1136] transition-all shadow-md">
                  Proceed to Review
                </button>
                <button onClick={() => navigate('/eic/screening')} className={`px-6 py-3 rounded-xl text-[13px] font-bold border transition-colors ${isDarkMode ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-red-600 hover:bg-red-50 bg-white'}`}>
                  Desk Reject
                </button>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDEBAR ================= */}
          <div className="w-full lg:w-[340px] space-y-6">
            
            {/* File Download Card */}
            <div className={`p-6 rounded-2xl border shadow-sm ${bgCard}`}>
              <h3 className={`text-[13px] font-bold mb-4 uppercase tracking-wider ${textMuted}`}>Manuscript File</h3>
              <div className={`p-4 rounded-xl border flex items-center justify-between ${isDarkMode ? 'bg-[#2A2A2A] border-[#3D3D3D]' : 'bg-gray-50 border-gray-200'}`}>
                <div className="flex items-center gap-3">
                  <FileTextOutlined className="text-[#7A1849] text-lg" />
                  <div>
                    <p className={`text-[12px] font-bold ${textMain}`}>Manuscript.pdf</p>
                    <p className={`text-[10px] ${textMuted}`}>2.4 MB</p>
                  </div>
                </div>
                <button className={`p-2 rounded-lg border transition-colors ${isDarkMode ? 'border-gray-600 hover:bg-gray-700' : 'border-gray-300 hover:bg-white bg-gray-100'}`}>
                  <DownloadOutlined />
                </button>
              </div>
            </div>

            {/* Checklist Card */}
            <div className={`p-6 rounded-2xl border shadow-sm ${bgCard}`}>
              <h3 className={`text-[13px] font-bold mb-4 uppercase tracking-wider ${textMuted}`}>Screening Checklist</h3>
              <div className="space-y-4">
                {[
                  { l: 'Scope aligns with Journal', c: true },
                  { l: 'Formatting is correct', c: true },
                  { l: 'Ethics statement provided', c: true },
                  { l: 'Plagiarism check passed', c: true },
                  { l: 'Word count within limits', c: false },
                ].map((item, i) => (
                  <label key={i} className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" defaultChecked={item.c} className="w-4 h-4 rounded border-gray-300 accent-[#7A1849]" />
                    <span className={`text-[13px] font-medium ${textMain}`}>{item.l}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Editorial Team Card */}
            <div className={`p-6 rounded-2xl border shadow-sm ${bgCard}`}>
              <h3 className={`text-[13px] font-bold mb-4 uppercase tracking-wider ${textMuted}`}>Editorial Team</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FCF7F9] text-[#7A1849] flex items-center justify-center"><UserOutlined /></div>
                  <div>
                    <p className={`text-[12px] font-bold ${textMain}`}>Ava Morgan</p>
                    <p className={`text-[10px] ${textMuted}`}>Editor-in-Chief</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center"><UserOutlined /></div>
                  <div>
                    <p className={`text-[12px] font-bold ${textMain}`}>Dr. S. Tesfaye</p>
                    <p className={`text-[10px] ${textMuted}`}>Associate Editor</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Guideline Tip */}
            <div className={`p-5 rounded-2xl border shadow-sm ${isDarkMode ? 'bg-[#7A1849]/10 border-[#7A1849]/30' : 'bg-[#FCF7F9] border-[#7A1849]/20'}`}>
              <div className="flex items-center gap-2 mb-2">
                <SafetyCertificateOutlined className="text-[#7A1849] text-lg" />
                <h3 className={`text-[13px] font-bold ${textMain}`}>Screening Policy</h3>
              </div>
              <p className={`text-[11px] leading-relaxed ${textMuted}`}>Desk rejections must be justified in the "Reason" field. Authors will receive a formal notification and the manuscript will not proceed to peer review.</p>
            </div>

          </div>
        </div>
      </div>
    </AdminLayout>
  );
}