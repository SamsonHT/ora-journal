import React from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { ArrowLeftOutlined, DownloadOutlined, CheckCircleFilled } from '@ant-design/icons';

export default function ViewProof() {
  const { isDarkMode } = useTheme();
  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-200';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const borderCol = isDarkMode ? 'border-[#2D2D2D]' : 'border-gray-100';

  return (
    <AdminLayout>
      <div className="max-w-[1300px] mx-auto">
        <div className="flex justify-between items-end mb-8">
          <div>
            <Link to="/author/pending-proofs" className={`text-[12px] font-bold text-[#7A1849] hover:underline flex items-center gap-2 mb-4`}>
              <ArrowLeftOutlined /> Back to Pending Proofs
            </Link>
            <p className={`text-[11px] font-bold tracking-widest uppercase mb-1.5 ${textMuted}`}>Workspace / Proofs / View Proof</p>
            <h1 className={`text-3xl font-serif font-bold ${textMain}`}>View Proof</h1>
            <p className={`text-[14px] mt-1.5 ${textMuted}`}>Review your typeset article and respond to the editorial team.</p>
          </div>
          <button className={`px-5 py-2.5 rounded-xl text-[13px] font-bold border flex items-center gap-2 ${isDarkMode ? 'border-gray-700 text-gray-300' : 'border-gray-300 text-gray-700 bg-white'}`}>
             <DownloadOutlined /> Download Proof
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Main Document Area */}
          <div className="lg:col-span-8 flex-1">
            <div className={`p-4 rounded-xl border shadow-sm mb-6 flex justify-between items-center ${bgCard}`}>
              <div>
                <h2 className={`text-[16px] font-bold ${textMain}`}>Deep learning approaches in neurological diagnostics</h2>
                <p className={`text-[12px] ${textMuted}`}>Medical Imaging & Systems • Vol 18, Issue 4</p>
              </div>
              <div className="flex gap-6 text-right">
                <div><p className={`text-[10px] uppercase font-bold ${textMuted}`}>Version</p><p className={`text-[13px] font-bold ${textMain}`}>v2.0</p></div>
                <div><p className={`text-[10px] uppercase font-bold ${textMuted}`}>Deadline</p><p className={`text-[13px] font-bold text-red-500`}>Sep 27, 2026</p></div>
              </div>
            </div>

            {/* Simulated PDF Page */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden min-h-[600px] p-12 border border-gray-200">
               {/* Placeholder for the actual PDF content */}
               <div className="text-center mb-12">
                 <p className="text-[12px] font-bold text-[#7A1849] tracking-widest uppercase">Medical Imaging & Systems</p>
                 <h1 className="text-4xl font-serif font-bold text-gray-900 mt-4 mb-2">Deep learning approaches in neurological diagnostics</h1>
                 <p className="text-sm text-gray-500">Ava Morgan, John Doe • Northstar Labs</p>
               </div>
               
               <div className="space-y-4 text-gray-800 text-sm leading-relaxed">
                 <h3 className="font-bold text-lg mt-8 mb-2">Abstract</h3>
                 <p>Early detection of neurological disorders requires robust interpretation of high-dimensional imaging data. We evaluate a multimodal deep learning framework...</p>
                 
                 <h3 className="font-bold text-lg mt-8 mb-2">1. Introduction</h3>
                 <p>Neurological diagnosis depends on the timely identification of subtle changes in brain structure. Conventional imaging workflows rely on expert assessment...</p>
               </div>
            </div>
          </div>

          {/* Right Sidebar - Editorial Queries */}
          <div className="w-full lg:w-[350px] space-y-6">
            <div className={`p-6 rounded-xl border shadow-sm ${bgCard}`}>
              <h3 className={`text-[15px] font-bold mb-4 border-b pb-3 ${borderCol} ${textMain}`}>Editorial Queries</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-[11px] font-bold text-[#7A1849] mb-1">AQ1 - Page 2, line 38</p>
                  <p className={`text-[12px] ${textMain}`}>Confirm that all abbreviations are defined at first use.</p>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-[#7A1849] mb-1">AQ2 - Page 4, Table 1</p>
                  <p className={`text-[12px] ${textMain}`}>Please verify the sensitivity values and decimal precision.</p>
                </div>
              </div>
            </div>

            <div className={`p-6 rounded-xl border shadow-sm ${bgCard}`}>
              <h3 className={`text-[15px] font-bold mb-4 border-b pb-3 ${borderCol} ${textMain}`}>Your Response</h3>
              <textarea rows="4" placeholder="Address the queries here..." className={`w-full p-3 rounded-lg border text-[13px] resize-none mb-4 ${isDarkMode ? 'bg-[#1A1A1A] border-[#3D3D3D] text-white' : 'bg-gray-50 border-gray-200 text-gray-900'}`}></textarea>
              
              <div className="flex gap-3">
                <button className={`flex-1 py-2.5 rounded-lg text-[13px] font-bold border ${isDarkMode ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50 bg-white'}`}>Request Changes</button>
                <button className="flex-1 py-2.5 rounded-lg text-[13px] font-bold text-white bg-[#7A1849] hover:bg-[#5E1136] shadow-md flex items-center justify-center gap-2">
                  <CheckCircleFilled /> Approve
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}