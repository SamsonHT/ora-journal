import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { ArrowLeftOutlined, UserOutlined, SearchOutlined } from '@ant-design/icons';

export default function AssignReviewerDetail() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-200';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const inputBg = isDarkMode ? 'bg-[#1A1A1A] border-[#3D3D3D] text-white focus:ring-[#7A1849]' : 'bg-white border-gray-300 text-gray-900 focus:ring-[#7A1849]';
  const borderCol = isDarkMode ? 'border-[#2D2D2D]' : 'border-gray-200';

  const reviewers = [
    { name: 'Dr. Rachel Green', expertise: 'Neural Networks / Diagnostics', status: 'Available', avg: '14 days', active: 1 },
    { name: 'Prof. Alan Turing', expertise: 'Quantum Cryptography / Math', status: 'Busy', avg: '18 days', active: 4 },
    { name: 'Dr. Sarah Chen', expertise: 'Medical Imaging / Diagnostics', status: 'Available', avg: '11 days', active: 0 },
    { name: 'Prof. Ada Lovelace', expertise: 'Algorithm Optimization', status: 'Available', avg: '15 days', active: 2 },
  ];

  return (
    <AdminLayout>
      <div className="max-w-[1300px] mx-auto animate-fade-in-up">
        
        {/* Back Link */}
        <button onClick={() => navigate('/eic/assign-reviewers')} className="text-[12px] font-bold text-[#7A1849] hover:underline flex items-center gap-1.5 mb-6">
          <ArrowLeftOutlined /> Back to Manuscript Assignments
        </button>

        {/* Manuscript Header Card */}
        <div className={`p-6 md:p-8 rounded-xl border shadow-sm mb-6 ${bgCard}`}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
            <p className={`text-[11px] font-bold tracking-widest uppercase text-[#7A1849]`}>Manuscript ORA-2026-092</p>
            <span className="bg-gray-100 text-gray-600 text-[11px] font-bold px-3 py-1 rounded-full border border-gray-200">Awaiting Reviewers</span>
          </div>
          <h1 className={`text-xl md:text-2xl font-serif font-bold mb-2 ${textMain}`}>Deep learning approaches in neurological diagnostics via low-field MRI</h1>
          <p className={`text-[13px] mb-4 ${textMuted}`}>Authors: Dr. Ava Morgan, Dr. Marcus Aurelius, Liam Neeson et al.</p>
          <div className={`p-4 rounded-lg text-[13px] leading-relaxed ${isDarkMode ? 'bg-[#2A2A2A] text-gray-300' : 'bg-gray-50 text-gray-700'}`}>
            <strong className="text-gray-900 dark:text-gray-100">Abstract excerpt:</strong> This paper outlines key neural net configurations tested against standard low-field MRI scans. Results demonstrate a 14% improvement in early lesion categorization patterns over standard SVM schemas...
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left: Search & Invite Candidates */}
          <div className={`lg:col-span-2 p-6 md:p-8 rounded-xl border shadow-sm ${bgCard}`}>
            <h2 className={`text-[16px] font-bold mb-4 ${textMain}`}>Search & Invite Candidates</h2>
            
            <div className="relative mb-6">
              <input type="text" placeholder="Filter by expertise area..." className={`w-full pl-10 pr-4 py-2.5 rounded-lg border outline-none ring-offset-2 focus:ring-2 text-[13px] ${inputBg}`} />
              <SearchOutlined className="absolute left-3.5 top-3 text-gray-400" />
            </div>

            <div className="space-y-3">
              {reviewers.map((rev, i) => (
                <div key={i} className={`p-4 rounded-lg border flex flex-col md:flex-row justify-between md:items-center gap-3 ${isDarkMode ? 'bg-[#1A1A1A] border-[#2D2D2D]' : 'bg-white border-gray-200'}`}>
                  <div>
                    <h3 className={`text-[14px] font-bold ${textMain}`}>{rev.name}</h3>
                    <p className={`text-[12px] mb-1.5 ${textMuted}`}>{rev.expertise}</p>
                    <p className={`text-[11px] font-medium ${textMuted}`}>
                      Avg. time: {rev.avg} • Active reviews: {rev.active}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-[11px] font-bold ${rev.status === 'Available' ? 'text-green-600' : 'text-red-500'}`}>{rev.status}</span>
                    <button className={`px-4 py-1.5 rounded text-[12px] font-bold transition-colors ${rev.status === 'Available' ? 'bg-[#7A1849] text-white hover:bg-[#5E1136]' : (isDarkMode ? 'bg-gray-800 text-gray-500' : 'bg-gray-100 text-gray-400')}`} disabled={rev.status !== 'Available'}>
                      Select
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Assignment Parameters */}
          <div className={`p-6 md:p-8 rounded-xl border shadow-sm h-fit ${bgCard}`}>
            <h2 className={`text-[16px] font-bold mb-6 ${textMain}`}>Assignment Parameters</h2>
            
            <div className="space-y-5">
              <div>
                <label className={`block text-[12px] font-bold mb-2 ${textMain}`}>Review Deadline</label>
                <input type="date" defaultValue="2026-10-25" className={`w-full px-3 py-2.5 rounded-lg border outline-none text-[13px] ${inputBg}`} />
              </div>
              
              <div>
                <label className={`block text-[12px] font-bold mb-2 ${textMain}`}>Priority Level</label>
                <div className="flex gap-2">
                  <button className="bg-[#7A1849] text-white px-3 py-1 rounded text-[12px] font-bold">Standard</button>
                  <button className={`px-3 py-1 rounded text-[12px] font-bold border ${isDarkMode ? 'border-gray-700 text-gray-400' : 'border-gray-200 text-gray-500 bg-white'}`}>High</button>
                  <button className={`px-3 py-1 rounded text-[12px] font-bold border ${isDarkMode ? 'border-gray-700 text-gray-400' : 'border-gray-200 text-gray-500 bg-white'}`}>Critical</button>
                </div>
              </div>

              <div>
                <label className={`block text-[12px] font-bold mb-2 ${textMain}`}>Notes to Reviewers</label>
                <textarea rows="4" placeholder="Include notes on specific focus areas, methodology exceptions etc..." className={`w-full p-3 rounded-lg border outline-none ring-offset-2 focus:ring-2 resize-none text-[13px] ${inputBg}`}></textarea>
              </div>

              <div className="pt-4 flex gap-3">
                <button onClick={() => navigate('/eic/assign-reviewers')} className="flex-1 bg-[#7A1849] text-white py-2.5 rounded-lg font-bold text-[13px] hover:bg-[#5E1136] transition-colors">Send invitations</button>
                <button onClick={() => navigate('/eic/assign-reviewers')} className={`flex-1 py-2.5 rounded-lg font-bold text-[13px] border transition-colors ${isDarkMode ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50 bg-white'}`}>Cancel</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </AdminLayout>
  );
}