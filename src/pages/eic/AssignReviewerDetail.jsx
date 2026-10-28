import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { ArrowLeftOutlined, SearchOutlined } from '@ant-design/icons';

export default function AssignReviewerDetail() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [priority, setPriority] = useState('Standard');

  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-200';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const inputBg = isDarkMode ? 'bg-[#1A1A1A] border-[#3D3D3D] text-white focus:border-[#7A1849]' : 'bg-white border-gray-200 text-gray-900 focus:border-[#7A1849]';
  const borderCol = isDarkMode ? 'border-[#2D2D2D]' : 'border-gray-200';

  const reviewers = [
    { name: 'Dr. Rachel Green', expertise: 'Neural Networks / Diagnostics', status: 'Available', avg: '14 days', active: 1 },
    { name: 'Prof. Alan Turing', expertise: 'Quantum Cryptography / Math', status: 'Busy', avg: '19 days', active: 4 },
    { name: 'Dr. Sarah Chen', expertise: 'Medical Imaging / Diagnostics', status: 'Available', avg: '11 days', active: 0 },
    { name: 'Prof. Ada Lovelace', expertise: 'Algorithm Optimization', status: 'Available', avg: '15 days', active: 2 },
  ];

  return (
    <AdminLayout>
      <div className="max-w-[1400px] mx-auto animate-fade-in-up">
        
        {/* Back Link */}
        <button onClick={() => navigate('/eic/assign-reviewers')} className="text-[12px] font-bold text-[#7A1849] hover:underline flex items-center gap-1.5 mb-6">
          <ArrowLeftOutlined /> Back to Manuscript Assignments
        </button>

        {/* Manuscript Header Card */}
        <div className={`p-6 md:p-8 rounded-xl border shadow-sm mb-6 ${bgCard}`}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-3">
            <p className={`text-[11px] font-bold tracking-widest uppercase text-[#7A1849]`}>MANUSCRIPT ORA-2026-092</p>
            <span className={`text-[11px] font-bold px-3 py-1 rounded-md ${isDarkMode ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-600'}`}>Awaiting Reviewers</span>
          </div>
          <h1 className={`text-[24px] font-bold tracking-tight mb-2 ${textMain}`}>Deep learning approaches in neurological diagnostics via low-field MRI</h1>
          <p className={`text-[13px] font-medium mb-5 ${textMuted}`}>Authors: Dr. Ava Morgan, Dr. Marcus Aurelius, Liam Neeson et al.</p>
          <div className={`p-4 rounded-lg border text-[13px] leading-[1.8] ${isDarkMode ? 'bg-[#2A2A2A] border-[#3D3D3D] text-gray-300' : 'bg-[#FAFAFA] border-gray-100 text-gray-600'}`}>
            <strong className={`font-bold ${textMain}`}>Abstract excerpt:</strong> This paper outlines key neural net configurations tested against standard low-field MRI scans. Results demonstrate a 14% improvement in early lesion categorization patterns over standard SVM schemas...
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left: Search & Invite Candidates (8 Cols) */}
          <div className={`lg:col-span-8 p-6 rounded-xl border shadow-sm ${bgCard}`}>
            <h2 className={`text-[16px] font-bold tracking-tight mb-5 ${textMain}`}>Search & Invite Candidates</h2>
            
            <div className="relative mb-6">
              <SearchOutlined className="absolute left-3.5 top-3 text-gray-400 text-[13px]" />
              <input 
                type="text" 
                placeholder="Filter by expertise area..." 
                className={`w-full pl-10 pr-4 py-2.5 rounded-lg border outline-none text-[13px] transition-colors ${inputBg}`} 
              />
            </div>

            <div className="space-y-3">
              {reviewers.map((rev, i) => (
                <div key={i} className={`p-5 rounded-lg border flex flex-col md:flex-row justify-between md:items-center gap-4 ${isDarkMode ? 'bg-[#1A1A1A] border-[#2D2D2D]' : 'bg-white border-gray-100'}`}>
                  <div>
                    <h3 className={`text-[14px] font-bold mb-1 ${textMain}`}>{rev.name}</h3>
                    <p className={`text-[12px] font-medium mb-2 ${textMuted}`}>{rev.expertise}</p>
                    <p className={`text-[11px] font-medium ${textMuted}`}>
                      Avg. time: {rev.avg} • Active reviews: {rev.active}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`text-[11px] font-bold ${rev.status === 'Available' ? 'text-green-600' : 'text-red-500'}`}>
                      {rev.status}
                    </span>
                    <button 
                      disabled={rev.status !== 'Available'}
                      className={`px-5 py-2 rounded-md text-[12px] font-bold transition-colors ${
                        rev.status === 'Available' 
                          ? 'bg-[#7A1849] text-white hover:bg-[#5E1136] shadow-sm' 
                          : (isDarkMode ? 'bg-gray-800 text-gray-600' : 'bg-gray-100 text-gray-400')
                      }`}
                    >
                      Select
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Assignment Parameters (4 Cols) */}
          <div className={`lg:col-span-4 p-6 rounded-xl border shadow-sm h-fit ${bgCard}`}>
            <h2 className={`text-[16px] font-bold tracking-tight mb-6 ${textMain}`}>Assignment Parameters</h2>
            
            <div className="space-y-6">
              <div>
                <label className={`block text-[12px] font-bold mb-2 ${textMain}`}>Review Deadline</label>
                <input type="date" defaultValue="2026-10-25" className={`w-full px-3 py-2.5 rounded-lg border outline-none text-[13px] ${inputBg}`} />
              </div>
              
              <div>
                <label className={`block text-[12px] font-bold mb-2 ${textMain}`}>Priority Level</label>
                <div className="flex gap-2">
                  {['Standard', 'High', 'Critical'].map(level => (
                    <button 
                      key={level}
                      onClick={() => setPriority(level)}
                      className={`px-4 py-1.5 rounded-md text-[12px] font-bold transition-colors ${
                        priority === level 
                          ? 'bg-[#7A1849] text-white shadow-sm' 
                          : `border ${isDarkMode ? 'border-gray-700 text-gray-400 hover:bg-gray-800' : 'border-gray-200 text-gray-600 bg-white hover:bg-gray-50'}`
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className={`block text-[12px] font-bold mb-2 ${textMain}`}>Notes to Reviewers</label>
                <textarea 
                  rows="5" 
                  placeholder="Include notes on specific focus areas, methodology exceptions etc..." 
                  className={`w-full p-3 rounded-lg border outline-none resize-none text-[13px] transition-colors ${inputBg}`}
                ></textarea>
              </div>

              <div className="pt-4 flex gap-3">
                <button onClick={() => navigate('/eic/assign-reviewers')} className="flex-1 bg-[#7A1849] text-white py-2.5 rounded-lg font-bold text-[13px] hover:bg-[#5E1136] transition-colors shadow-sm">
                  Send Invitations
                </button>
                <button onClick={() => navigate('/eic/assign-reviewers')} className={`flex-1 py-2.5 rounded-lg font-bold text-[13px] border transition-colors ${isDarkMode ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50 bg-white'}`}>
                  Cancel
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </AdminLayout>
  );
}