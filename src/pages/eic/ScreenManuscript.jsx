import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { ArrowLeftOutlined, DownloadOutlined } from '@ant-design/icons';

export default function ScreenManuscript() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-200';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const inputBg = isDarkMode ? 'bg-[#1A1A1A] border-[#3D3D3D] text-white focus:ring-[#7A1849]' : 'bg-white border-gray-200 text-gray-900 focus:border-[#7A1849] focus:ring-1 focus:ring-[#7A1849]';
  
  return (
    <AdminLayout>
      <div className="max-w-[1200px] mx-auto animate-fade-in-up">
        
        {/* Header */}
        <div className="mb-6">
          <button onClick={() => navigate('/eic/screening')} className="text-[12px] font-bold text-gray-500 hover:text-[#7A1849] flex items-center gap-1.5 mb-4 transition-colors">
            <ArrowLeftOutlined /> Back to Screening Queue
          </button>
          <p className={`text-[10px] font-bold tracking-[0.1em] uppercase mb-1.5 ${textMuted}`}>WORKSPACE / SCREENING / MANUSCRIPT DETAILS</p>
          <div className="flex items-center gap-3">
            <h1 className={`text-[26px] font-bold tracking-tight ${textMain}`}>Screen Manuscript</h1>
            <span className="text-[10px] bg-[#7A1849] text-white px-2 py-0.5 rounded font-bold uppercase tracking-widest">ORA-2026-112</span>
          </div>
          <p className={`text-[13px] font-medium mt-1 ${textMuted}`}>Review manuscript details and make a screening decision.</p>
        </div>

        <div className="space-y-6">
          
          {/* Metadata & Abstract Card */}
          <div className={`p-6 md:p-8 rounded-xl border shadow-sm ${bgCard}`}>
            <h2 className={`text-[15px] font-bold mb-6 pb-4 border-b ${isDarkMode ? 'border-[#2D2D2D]' : 'border-gray-100'} ${textMain}`}>Metadata & Abstract</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-6">
              <div>
                <p className={`text-[11px] font-medium mb-1 ${textMuted}`}>Subject Area</p>
                <p className={`text-[13px] font-medium ${textMain}`}>Computer Science</p>
              </div>
              <div>
                <p className={`text-[11px] font-medium mb-1 ${textMuted}`}>Keywords</p>
                <p className={`text-[13px] font-medium ${textMain}`}>distributed systems, consensus, cloud computing, hybrid architecture</p>
              </div>
              <div>
                <p className={`text-[11px] font-medium mb-1 ${textMuted}`}>Author(s)</p>
                <p className={`text-[13px] font-medium ${textMain}`}>Dr. Rachel Green</p>
              </div>
              <div>
                <p className={`text-[11px] font-medium mb-1 ${textMuted}`}>Manuscript File</p>
                <button className={`px-3 py-1.5 rounded-md border text-[11px] font-bold flex items-center gap-2 transition-colors ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-[#7A1849]/30 text-[#7A1849] bg-white hover:bg-[#FCF7F9]'}`}>
                  <DownloadOutlined /> Download Manuscript (PDF)
                </button>
              </div>
            </div>

            <div className={`border-t pt-6 ${isDarkMode ? 'border-[#2D2D2D]' : 'border-gray-100'}`}>
              <p className={`text-[11px] font-medium mb-1 ${textMuted}`}>Paper Title</p>
              <h3 className={`text-[15px] font-bold mb-5 ${textMain}`}>Distributed Consensus Mechanisms in Hybrid Cloud Environments</h3>
              
              <p className={`text-[11px] font-medium mb-2 ${textMuted}`}>Abstract</p>
              <p className={`text-[13px] leading-[1.8] ${textMain}`}>
                Hybrid cloud networks present unique challenges for maintaining system-wide consensus across heterogeneous computing nodes. This research introduces a novel, lightweight consensus engine optimized specifically for hybrid architectures. By combining localized proof-of-authority clusters with a global gossip protocol fallback mechanism, we demonstrate a 34% reduction in consensus verification overhead. Simulated stress tests indicate robust Byzantine fault tolerance and minimal latency variance even under severe regional packet loss.
              </p>
            </div>
          </div>

          {/* Screening Decision Card */}
          <div className={`p-6 md:p-8 rounded-xl border shadow-sm ${bgCard}`}>
            <h2 className={`text-[15px] font-bold mb-2 ${textMain}`}>Screening Decision</h2>
            <p className={`text-[13px] mb-6 ${textMuted}`}>Select your screening decision to either proceed this submission to formal review or desk reject it immediately.</p>
            
            <div className="mb-6">
              <label className={`block text-[12px] font-bold mb-2 ${textMain}`}>Reason <span className="text-gray-400">*</span></label>
              <textarea 
                rows="5" 
                placeholder="Enter the reason for your screening decision..." 
                className={`w-full p-4 rounded-lg border outline-none resize-none text-[13px] transition-all ${inputBg}`}
              ></textarea>
              <p className={`text-[11px] font-medium mt-2 ${textMuted}`}>Required for both Proceed to Review (approve) and Reject.</p>
            </div>
            
            <div className="flex gap-3">
              <button onClick={() => navigate('/eic/assign-reviewers')} className="bg-[#7A1849] text-white px-6 py-2.5 rounded-lg text-[13px] font-bold hover:bg-[#5E1136] transition-all shadow-sm">
                Proceed to Review
              </button>
              <button onClick={() => navigate('/eic/screening')} className={`px-6 py-2.5 rounded-lg text-[13px] font-bold border transition-colors ${isDarkMode ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'}`}>
                Reject
              </button>
            </div>
          </div>

        </div>
      </div>
    </AdminLayout>
  );
}