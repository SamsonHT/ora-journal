import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { ArrowLeftOutlined, DownloadOutlined, CheckCircleFilled } from '@ant-design/icons';

export default function AcceptedAssignment() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  
  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-200';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const borderCol = isDarkMode ? 'border-[#2D2D2D]' : 'border-gray-100';

  return (
    <AdminLayout>
      {/* WIDENED TO FULL SCREEN WIDTH */}
      <div className="max-w-[1400px] mx-auto animate-fade-in-up">
        
        <button onClick={() => navigate('/reviewer/assignments')} className="text-[12px] font-bold text-[#7A1849] hover:underline flex items-center gap-2 mb-4">
          <ArrowLeftOutlined /> Back to My Assignments
        </button>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-4">
           <div>
             <h1 className={`text-2xl font-serif font-bold ${textMain}`}>Blind Review</h1>
             <p className={`text-[13px] mt-1 ${textMuted}`}>Your invitation is accepted. Review the anonymized manuscript and prepare your recommendation.</p>
           </div>
           <button onClick={() => navigate('/reviewer/recommendation')} className="bg-[#7A1849] text-white px-6 py-3 rounded-xl text-[13px] font-bold hover:bg-[#5E1136] shadow-md flex items-center gap-2 transition-all hover:-translate-y-0.5">
             <CheckCircleFilled /> Submit Review
           </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Main Content Column */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Manuscript Details Card */}
            <div className={`p-8 rounded-2xl border shadow-sm ${bgCard}`}>
              <div className="flex justify-between items-center mb-6">
                <p className={`text-[13px] font-mono font-bold text-[#7A1849]`}>ORA-2026-077</p>
                <span className={`text-[11px] font-bold px-3 py-1 rounded bg-green-50 text-green-600 border border-green-100`}>Accepted</span>
              </div>
              
              <h2 className={`text-2xl font-serif font-bold mb-6 ${textMain}`}>Reinforcement learning in autonomous flight paths</h2>
              
              <div className={`grid grid-cols-3 gap-6 mb-8 pb-8 border-b ${borderCol}`}>
                 <div><p className={`text-[11px] font-bold uppercase tracking-wider mb-1 ${textMuted}`}>Subject</p><p className={`text-[14px] font-bold ${textMain}`}>Artificial Intelligence</p></div>
                 <div><p className={`text-[11px] font-bold uppercase tracking-wider mb-1 ${textMuted}`}>Assigned</p><p className={`text-[14px] font-bold ${textMain}`}>Sep 12, 2026</p></div>
                 <div><p className={`text-[11px] font-bold uppercase tracking-wider mb-1 ${textMuted}`}>Review due</p><p className={`text-[14px] font-bold text-red-500`}>Sep 27, 2026</p></div>
              </div>

              <h3 className={`text-[16px] font-bold mb-3 ${textMain}`}>Abstract</h3>
              <p className={`text-[14px] leading-relaxed mb-8 ${textMain}`}>
                Autonomous aerial navigation requires policies that adapt to changing environments while satisfying safety and energy constraints. This study presents a constrained reinforcement learning framework for three-dimensional flight-path planning...
              </p>

              {/* ADDED KEYWORDS */}
              <h3 className={`text-[16px] font-bold mb-3 ${textMain}`}>Keywords</h3>
              <div className="flex flex-wrap gap-2">
                {['Reinforcement learning', 'Autonomous flight', 'Path planning', 'Safe control', 'UAV navigation'].map((k, i) => (
                  <span key={i} className={`text-[12px] px-3 py-1.5 rounded-lg border font-medium ${isDarkMode ? 'bg-[#2A2A2A] border-[#3D3D3D] text-gray-300' : 'bg-gray-50 border-gray-200 text-gray-600'}`}>{k}</span>
                ))}
              </div>
            </div>

            {/* PDF Preview Card */}
            <div className={`p-8 rounded-2xl border shadow-sm ${bgCard}`}>
               <div className="flex justify-between items-center mb-6">
                  <h3 className={`text-[16px] font-bold ${textMain}`}>Anonymized Manuscript</h3>
                  <button className={`px-4 py-2 rounded-lg border text-[12px] font-bold flex items-center gap-2 transition-colors ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}>
                    <DownloadOutlined /> Download PDF
                  </button>
               </div>
               
               <div className={`p-10 rounded-xl border text-center ${isDarkMode ? 'bg-[#1A1A1A] border-[#3D3D3D]' : 'bg-gray-50 border-gray-200'}`}>
                  <h4 className={`text-[20px] font-serif font-bold mb-8 ${textMain}`}>Reinforcement learning in autonomous flight paths</h4>
                  <div className="max-w-2xl mx-auto">
                    <p className={`text-[14px] text-left leading-relaxed ${textMain}`}>
                      <strong className="block mb-2">1. Introduction</strong>
                      Reliable autonomous flight requires planning methods that can respond to uncertainty without compromising safety. Traditional trajectory optimization methods offer explicit constraints but are hard to generalize to dynamic environments...
                    </p>
                  </div>
               </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            <div className={`p-6 rounded-2xl border shadow-sm h-fit ${bgCard}`}>
              <h3 className={`text-[16px] font-bold mb-4 ${textMain}`}>Your Review</h3>
              <div className={`space-y-4 text-[13px] pb-6 mb-6 border-b ${borderCol}`}>
                <div className="flex justify-between"><span className={textMuted}>Status</span><span className="font-bold text-green-500">Accepted</span></div>
                <div className="flex justify-between"><span className={textMuted}>Accepted on</span><span className={textMain}>Sep 14, 2026</span></div>
                <div className="flex justify-between"><span className={textMuted}>Review due</span><span className="font-bold text-red-500">Sep 27, 2026</span></div>
              </div>
              <button onClick={() => navigate('/reviewer/recommendation')} className="w-full bg-[#7A1849] text-white py-3 rounded-xl font-bold text-[14px] hover:bg-[#5E1136] shadow-md mb-6 transition-colors">
                Submit Review
              </button>
              
              <div className={`p-5 rounded-xl border text-[12px] leading-relaxed ${isDarkMode ? 'bg-[#2A2A2A] border-[#3D3D3D] text-gray-300' : 'bg-gray-50 border-gray-200 text-gray-600'}`}>
                 <strong className={`block text-[13px] mb-2 ${textMain}`}>Review Checklist</strong>
                 <ul className={`list-disc pl-4 space-y-2 ${textMuted}`}>
                   <li>Assess originality and methodological rigor.</li>
                   <li>Verify results, evidence and reproducibility.</li>
                   <li>Provide constructive comments and a clear recommendation.</li>
                 </ul>
              </div>
            </div>

            <div className={`p-6 rounded-2xl border shadow-sm ${isDarkMode ? 'bg-[#2A2A2A] border-[#3D3D3D]' : 'bg-[#FCF7F9] border-[#7A1849]/20'}`}>
               <h3 className={`text-[13px] font-bold mb-2 ${textMain}`}>Need more time?</h3>
               <p className={`text-[12px] leading-relaxed ${textMuted}`}>Contact the editorial office before the deadline to request an extension.</p>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}