import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { ArrowLeftOutlined, CheckCircleFilled, CloseCircleOutlined } from '@ant-design/icons';

export default function ViewInvitation() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [isAccepted, setIsAccepted] = useState(false); 

  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-200';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const inputBg = isDarkMode ? 'bg-[#1A1A1A] border-[#3D3D3D] text-white' : 'bg-gray-50 border-gray-200 text-gray-900';
  const borderCol = isDarkMode ? 'border-[#2D2D2D]' : 'border-gray-100';

  return (
    <AdminLayout>
      <div className="max-w-[1400px] mx-auto animate-fade-in-up">
        
        <button onClick={() => navigate('/reviewer/assignments')} className="text-[12px] font-bold text-[#7A1849] hover:underline flex items-center gap-2 mb-4">
          <ArrowLeftOutlined /> Back to My Assignments
        </button>

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <p className={`text-[10px] font-bold tracking-[0.1em] uppercase text-[#7A1849] mb-1.5`}>WORKSPACE / ASSIGNMENTS / INVITATION</p>
            <h1 className={`text-[26px] font-bold tracking-tight ${textMain}`}>View Assignment</h1>
            <p className={`text-[13px] font-medium mt-1 ${textMuted}`}>Review the study details before responding to this invitation.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Column: Manuscript Details (Takes up 3/4 width) */}
          <div className="lg:col-span-3 space-y-6">
            <div className={`p-8 rounded-xl border shadow-sm ${bgCard}`}>
              <div className="flex justify-between items-center mb-6">
                <p className={`text-[13px] font-mono font-bold text-[#7A1849]`}>ORA-2026-077</p>
                <span className={`text-[11px] font-bold px-3 py-1 rounded-md ${isAccepted ? 'bg-[#F0FDF4] text-[#15803D]' : 'bg-[#FFF7ED] text-[#C2410C]'}`}>
                  {isAccepted ? 'Accepted' : 'Invitation Pending'}
                </span>
              </div>

              <h2 className={`text-[24px] font-bold tracking-tight mb-6 ${textMain}`}>Reinforcement learning in autonomous flight paths</h2>
              
              <div className={`grid grid-cols-3 gap-6 mb-8 pb-8 border-b ${borderCol}`}>
                 <div>
                   <p className={`text-[10px] font-bold uppercase tracking-wider mb-1.5 ${textMuted}`}>Subject area</p>
                   <p className={`text-[14px] font-bold ${textMain}`}>Artificial Intelligence</p>
                 </div>
                 <div>
                   <p className={`text-[10px] font-bold uppercase tracking-wider mb-1.5 ${textMuted}`}>Assigned date</p>
                   <p className={`text-[14px] font-bold ${textMain}`}>Sep 12, 2026</p>
                 </div>
                 <div>
                   <p className={`text-[10px] font-bold uppercase tracking-wider mb-1.5 ${textMuted}`}>Review due</p>
                   <p className={`text-[14px] font-bold text-[#D93025]`}>Sep 27, 2026</p>
                 </div>
              </div>

              <h3 className={`text-[15px] font-bold mb-3 ${textMain}`}>Abstract</h3>
              <p className={`text-[14px] leading-[1.8] mb-8 font-medium ${textMuted}`}>
                Autonomous aerial navigation requires policies that adapt to changing environments while satisfying safety and energy constraints. This study presents a constrained reinforcement learning framework for three-dimensional flight-path planning in dynamic, obstacle-rich environments. A proximal policy optimization agent is trained with a composite reward that balances trajectory efficiency, collision avoidance and energy consumption. A safety layer projects proposed actions onto a feasible control set before execution. Evaluation across 1,200 simulated missions and a hardware-in-the-loop testbed compares the framework with rapidly exploring random trees, model predictive control and an unconstrained learning baseline. The proposed approach achieves a 96.4% mission success rate, reduces average path length by 18.7% and lowers energy consumption by 12.3% relative to the strongest baseline. Ablation experiments indicate that the safety layer substantially improves robustness under wind disturbances and sensor noise.
              </p>
              
              <h3 className={`text-[15px] font-bold mb-3 ${textMain}`}>Keywords</h3>
              <div className="flex flex-wrap gap-2">
                {['Reinforcement learning', 'Autonomous flight', 'Path planning', 'Safe control', 'UAV navigation'].map((k, i) => (
                  <span key={i} className={`text-[11px] px-3 py-1.5 rounded-md border font-bold ${isDarkMode ? 'bg-[#2A2A2A] border-[#3D3D3D] text-gray-300' : 'bg-gray-50 border-gray-200 text-gray-600'}`}>{k}</span>
                ))}
              </div>
            </div>

            {/* If Accepted, show the PDF Download block here */}
            {isAccepted && (
              <div className={`p-8 rounded-xl border shadow-sm ${bgCard}`}>
                 <h3 className={`text-[15px] font-bold tracking-tight mb-4 ${textMain}`}>Manuscript File</h3>
                 <div className={`p-5 rounded-lg border flex justify-between items-center ${isDarkMode ? 'bg-[#2A2A2A] border-[#3D3D3D]' : 'bg-gray-50 border-gray-200'}`}>
                   <div>
                     <p className={`text-[14px] font-bold ${textMain}`}>ORA-2026-077_manuscript.pdf</p>
                     <p className={`text-[12px] font-medium ${textMuted}`}>1.8 MB</p>
                   </div>
                   <button className={`px-5 py-2 rounded-lg border text-[12px] font-bold transition-colors ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-200 hover:bg-gray-100 bg-white shadow-sm'}`}>Download PDF</button>
                 </div>
              </div>
            )}
          </div>

          {/* Right Sidebar: Action Panel (Takes up 1/4 width) */}
          <div className={`p-6 rounded-xl border shadow-sm h-fit ${bgCard}`}>
            
            {!isAccepted ? (
              <>
                <h3 className={`text-[16px] font-bold tracking-tight mb-2 ${textMain}`}>Respond to invitation</h3>
                <p className={`text-[13px] font-medium mb-6 ${textMuted}`}>Please confirm your availability and expertise.</p>
                
                <div className={`flex justify-between items-center mb-6 pb-4 border-b ${borderCol}`}>
                  <span className={`text-[13px] font-medium ${textMuted}`}>Respond by</span>
                  <span className={`text-[13px] font-bold text-[#D93025]`}>Sep 16, 2026</span>
                </div>

                <div className="mb-6">
                  <label className={`block text-[12px] font-bold mb-2 ${textMain}`}>Reason</label>
                  <textarea rows="4" placeholder="Add a note about your availability or your reason for declining..." className={`w-full p-3 rounded-lg border text-[13px] resize-none ${inputBg}`}></textarea>
                  <p className={`text-[11px] font-medium mt-2 ${textMuted}`}>Required when rejecting. Your note is visible only to the editorial team.</p>
                </div>
                
                <div className="flex gap-3">
                  <button className={`flex-1 py-2.5 rounded-lg border text-[12px] font-bold flex items-center justify-center gap-2 transition-colors ${isDarkMode ? 'border-red-900 text-red-400 hover:bg-red-900/20' : 'border-red-200 text-red-500 hover:bg-red-50'}`}>
                    <CloseCircleOutlined /> Reject
                  </button>
                  <button onClick={() => setIsAccepted(true)} className="flex-1 py-2.5 rounded-lg bg-[#7A1849] text-white font-bold text-[12px] hover:bg-[#5E1136] flex items-center justify-center gap-2 shadow-sm transition-colors">
                    <CheckCircleFilled /> Accept
                  </button>
                </div>
              </>
            ) : (
              <>
                <h3 className={`text-[16px] font-bold tracking-tight mb-4 ${textMain}`}>Your Review</h3>
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
                <button onClick={() => navigate('/reviewer/recommendation')} className="w-full py-3 rounded-lg bg-[#7A1849] text-white font-bold text-[13px] hover:bg-[#5E1136] flex items-center justify-center gap-2 shadow-sm mb-6 transition-colors">
                  Submit Review
                </button>
              </>
            )}

            <div className={`mt-2 p-5 rounded-lg border text-[12px] leading-[1.7] ${isDarkMode ? 'bg-[#2A2A2A] border-[#3D3D3D] text-gray-300' : 'bg-[#FAFAFA] border-gray-100 text-gray-600'}`}>
               <strong className={`block text-[13px] mb-2 ${textMain}`}>Before you accept</strong>
               <ol className={`list-decimal pl-4 space-y-2 font-medium`}>
                 <li>Confirm the topic is within your expertise.</li>
                 <li>Declare any potential conflict of interest.</li>
                 <li>Allow time to complete your review by Sep 27.</li>
               </ol>
            </div>
          </div>

        </div>
      </div>
    </AdminLayout>
  );
}