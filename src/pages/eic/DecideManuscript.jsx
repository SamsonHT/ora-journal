import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { ArrowLeftOutlined, DownOutlined } from '@ant-design/icons';

export default function DecideManuscript() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-200';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const inputBg = isDarkMode ? 'bg-[#1A1A1A] border-[#3D3D3D] text-white focus:ring-[#7A1849]' : 'bg-white border-gray-300 text-gray-900 focus:ring-[#7A1849]';
  const borderCol = isDarkMode ? 'border-[#2D2D2D]' : 'border-gray-200';

  const reviews = [
    { reviewer: 'Reviewer 1', score: '9/10', rec: 'Accept', recColor: 'text-red-500 bg-red-50', comment: '"Highly thorough analysis. The sample sizes are adequate and conclusion valid."' },
    { reviewer: 'Reviewer 2', score: '9/10', rec: 'Minor Revision', recColor: 'text-gray-500 bg-gray-100', comment: '"Minor typos in Figure 3 legend. Please clarify thermal boundary conditions."' },
    { reviewer: 'Reviewer 3', score: '9/10', rec: 'Accept', recColor: 'text-red-500 bg-red-50', comment: '"Strong addition to the state of art. Fits the journal\'s focus perfectly."' },
  ];

  return (
    <AdminLayout>
      <div className="max-w-[1300px] mx-auto animate-fade-in-up">
        
        {/* Back Link */}
        <button onClick={() => navigate('/eic/final-decisions')} className="text-[12px] font-bold text-[#7A1849] hover:underline flex items-center gap-1.5 mb-6">
          <ArrowLeftOutlined /> Back to Final Decisions List
        </button>

        {/* Manuscript Header Card */}
        <div className={`p-6 md:p-8 rounded-xl border shadow-sm mb-6 ${bgCard}`}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
            <p className={`text-[11px] font-bold tracking-widest uppercase text-[#7A1849]`}>Decision Form ORA-2026-077</p>
            <span className="bg-red-50 text-red-600 text-[11px] font-bold px-3 py-1 rounded-full border border-red-100">Needs Decision</span>
          </div>
          <h1 className={`text-xl md:text-2xl font-serif font-bold mb-2 ${textMain}`}>Reinforcement learning in autonomous flight paths</h1>
          <p className={`text-[13px] ${textMuted}`}>Authors: Dr. Rachel Green, Liam Neeson et al.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left: Peer Reviews Received */}
          <div className={`lg:col-span-2 p-6 md:p-8 rounded-xl border shadow-sm ${bgCard}`}>
            <h2 className={`text-[16px] font-bold mb-6 ${textMain}`}>Peer Reviews Received</h2>
            
            <div className="space-y-4">
              {reviews.map((rev, i) => (
                <div key={i} className={`p-4 rounded-lg border ${isDarkMode ? 'bg-[#1A1A1A] border-[#2D2D2D]' : 'bg-white border-gray-200'}`}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-3">
                      <h3 className={`text-[13px] font-bold ${textMain}`}>{rev.reviewer}</h3>
                      <span className={`text-[12px] ${textMuted}`}>Score: {rev.score}</span>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${rev.recColor}`}>{rev.rec}</span>
                  </div>
                  <p className={`text-[13px] italic leading-relaxed ${textMain}`}>{rev.comment}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Final Decision Parameters */}
          <div className={`p-6 md:p-8 rounded-xl border shadow-sm h-fit ${bgCard}`}>
            <h2 className={`text-[16px] font-bold mb-6 ${textMain}`}>Final Decision Parameters</h2>
            
            <div className="space-y-5">
              <div>
                <label className={`block text-[12px] font-bold mb-2 ${textMain}`}>Final EIC Decision</label>
                <div className="relative">
                  <select className={`w-full px-3 py-2.5 rounded-lg border outline-none appearance-none text-[13px] cursor-pointer ${inputBg}`}>
                    <option>Accept Paper</option>
                    <option>Minor Revision</option>
                    <option>Major Revision</option>
                    <option>Reject Paper</option>
                  </select>
                  <DownOutlined className="absolute right-3 top-3 text-gray-400 text-[10px] pointer-events-none" />
                </div>
              </div>

              <div>
                <label className={`block text-[12px] font-bold mb-2 ${textMain}`}>Comments & Feedback for Author</label>
                <textarea rows="4" placeholder="Provide detailed editorial instructions, revisions list, and overall remarks..." className={`w-full p-3 rounded-lg border outline-none ring-offset-2 focus:ring-2 resize-none text-[13px] ${inputBg}`}></textarea>
              </div>

              <div>
                <label className={`block text-[12px] font-bold mb-2 ${textMain}`}>Internal Notes (Editorial Board)</label>
                <textarea rows="3" placeholder="Internal-only discussion logs..." className={`w-full p-3 rounded-lg border outline-none ring-offset-2 focus:ring-2 resize-none text-[13px] ${inputBg}`}></textarea>
              </div>

              <div className="pt-4 flex gap-3">
                <button onClick={() => navigate('/eic/final-decisions')} className="flex-1 bg-[#7A1849] text-white py-2.5 rounded-lg font-bold text-[13px] hover:bg-[#5E1136] transition-colors">Submit Decision</button>
                <button onClick={() => navigate('/eic/final-decisions')} className={`flex-1 py-2.5 rounded-lg font-bold text-[13px] border transition-colors ${isDarkMode ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50 bg-white'}`}>Cancel</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </AdminLayout>
  );
}