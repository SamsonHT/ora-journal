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
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
           <div>
             <p className={`text-[10px] font-bold tracking-[0.1em] uppercase text-[#7A1849] mb-1.5`}>WORKSPACE / ASSIGNMENTS / ORA-2026-077</p>
             <h1 className={`text-[26px] font-bold tracking-tight ${textMain}`}>Blind Review</h1>
             <p className={`text-[13px] font-medium mt-1 ${textMuted}`}>Your invitation is accepted. Review the anonymized manuscript and prepare your recommendation.</p>
           </div>
           <button onClick={() => navigate('/reviewer/recommendation')} className="bg-[#7A1849] text-white px-5 py-2 rounded-lg text-[13px] font-bold hover:bg-[#5E1136] shadow-sm flex items-center gap-2 transition-all">
             <CheckCircleFilled /> Submit Review
           </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Main Content Column */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Manuscript Details Card */}
            <div className={`p-8 rounded-xl border shadow-sm ${bgCard}`}>
              <div className="flex justify-between items-center mb-6">
                <p className={`text-[13px] font-mono font-bold text-[#7A1849]`}>ORA-2026-077</p>
                <span className={`text-[11px] font-bold px-3 py-1 rounded-md bg-[#F0FDF4] text-[#15803D]`}>Accepted</span>
              </div>
              
              <h2 className={`text-[24px] font-bold tracking-tight mb-8 ${textMain}`}>Reinforcement learning in autonomous flight paths</h2>
              
              <div className={`grid grid-cols-3 gap-6 mb-8 pb-8 border-b ${borderCol}`}>
                 <div>
                   <p className={`text-[10px] font-bold uppercase tracking-wider mb-1.5 ${textMuted}`}>Subject</p>
                   <p className={`text-[14px] font-bold ${textMain}`}>Artificial Intelligence</p>
                 </div>
                 <div>
                   <p className={`text-[10px] font-bold uppercase tracking-wider mb-1.5 ${textMuted}`}>Assigned</p>
                   <p className={`text-[14px] font-bold ${textMain}`}>Sep 12, 2026</p>
                 </div>
                 <div>
                   <p className={`text-[10px] font-bold uppercase tracking-wider mb-1.5 ${textMuted}`}>Review due</p>
                   <p className={`text-[14px] font-bold text-[#D93025]`}>Sep 27, 2026</p>
                 </div>
              </div>

              <h3 className={`text-[15px] font-bold mb-3 ${textMain}`}>Abstract</h3>
              <p className={`text-[14px] leading-[1.8] mb-8 font-medium ${textMuted}`}>
                Autonomous aerial navigation requires policies that adapt to changing environments while satisfying safety and energy constraints. This study presents a constrained reinforcement learning framework for three-dimensional flight-path planning...
              </p>

              <h3 className={`text-[15px] font-bold mb-3 ${textMain}`}>Keywords</h3>
              <div className="flex flex-wrap gap-2">
                {['Reinforcement learning', 'Autonomous flight', 'Path planning', 'Safe control', 'UAV navigation'].map((k, i) => (
                  <span key={i} className={`text-[11px] px-3 py-1.5 rounded-md border font-bold ${isDarkMode ? 'bg-[#2A2A2A] border-[#3D3D3D] text-gray-300' : 'bg-gray-50 border-gray-200 text-gray-600'}`}>{k}</span>
                ))}
              </div>
            </div>

            {/* PDF Preview Card */}
            <div className={`p-8 rounded-xl border shadow-sm ${bgCard}`}>
               <div className="flex justify-between items-center mb-6">
                  <h3 className={`text-[15px] font-bold tracking-tight ${textMain}`}>Anonymized Manuscript</h3>
                  <button className={`px-4 py-2 rounded-lg border text-[12px] font-bold flex items-center gap-2 transition-colors ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-200 text-gray-700 hover:bg-gray-50 bg-white shadow-sm'}`}>
                    <DownloadOutlined /> Download PDF
                  </button>
               </div>
               
               <div className={`p-12 rounded-xl border text-center ${isDarkMode ? 'bg-[#1A1A1A] border-[#3D3D3D]' : 'bg-[#F9FAFB] border-gray-200'}`}>
                  <h4 className={`text-[22px] font-bold tracking-tight mb-8 ${textMain}`}>Reinforcement learning in autonomous flight paths</h4>
                  <div className="max-w-2xl mx-auto text-left">
                    <p className={`text-[14px] leading-[1.8] font-medium ${textMuted}`}>
                      <strong className={`block text-[15px] mb-3 ${textMain}`}>1. Introduction</strong>
                      Reliable autonomous flight requires planning methods that can respond to uncertainty without compromising safety. Traditional trajectory optimization methods offer explicit constraints but are hard to generalize to dynamic environments...
                    </p>
                  </div>
               </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            <div className={`p-6 rounded-xl border shadow-sm h-fit ${bgCard}`}>
              <h3 className={`text-[15px] font-bold tracking-tight mb-5 ${textMain}`}>Your Review</h3>
              <div className={`space-y-4 text-[13px] pb-6 mb-6 border-b ${borderCol}`}>
                <div className="flex justify-between items-center">
                  <span className={`font-medium ${textMuted}`}>Status</span>
                  <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#F0FDF4] text-[#15803D]`}>Accepted</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`font-medium ${textMuted}`}>Accepted on</span>
                  <span className={`font-bold ${textMain}`}>Sep 14, 2026</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`font-medium ${textMuted}`}>Review due</span>
                  <span className={`font-bold text-[#D93025]`}>Sep 27, 2026</span>
                </div>
              </div>
              
              <button onClick={() => navigate('/reviewer/recommendation')} className="w-full bg-[#7A1849] text-white py-3 rounded-lg font-bold text-[13px] hover:bg-[#5E1136] shadow-sm mb-6 transition-colors">
                Submit Review
              </button>
              
              <div className={`p-5 rounded-lg border text-[12px] leading-[1.7] ${isDarkMode ? 'bg-[#2A2A2A] border-[#3D3D3D] text-gray-300' : 'bg-[#FAFAFA] border-gray-100 text-gray-600'}`}>
                 <strong className={`block text-[13px] mb-2 ${textMain}`}>Review Checklist</strong>
                 <ul className={`list-disc pl-4 space-y-2 font-medium`}>
                   <li>Assess originality and methodological rigor.</li>
                   <li>Verify results, evidence and reproducibility.</li>
                   <li>Provide constructive comments and a clear recommendation.</li>
                 </ul>
              </div>
            </div>

            <div className={`p-6 rounded-xl border shadow-sm ${isDarkMode ? 'bg-[#2A2A2A] border-[#3D3D3D]' : 'bg-[#FCF7F9] border-[#7A1849]/20'}`}>
               <h3 className={`text-[13px] font-bold mb-2 ${textMain}`}>Need more time?</h3>
               <p className={`text-[12px] font-medium leading-relaxed ${textMuted}`}>Contact the editorial office before the deadline to request an extension.</p>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}