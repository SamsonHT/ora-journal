import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { CheckCircleFilled, UploadOutlined } from '@ant-design/icons';

export default function RecommendationForm() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-200';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const inputBg = isDarkMode ? 'bg-[#1A1A1A] border-[#3D3D3D] text-white' : 'bg-gray-50 border-gray-200 text-gray-900';
  const borderCol = isDarkMode ? 'border-[#2D2D2D]' : 'border-gray-100';

  const RubricButton = ({ val, selected }) => (
    <button className={`w-10 h-10 rounded-lg text-[13px] font-bold transition-all ${selected ? 'bg-[#7A1849] text-white shadow-md' : (isDarkMode ? 'bg-[#2A2A2A] text-gray-400 hover:bg-[#3D3D3D]' : 'bg-gray-100 text-gray-600 hover:bg-gray-200')}`}>
      {val}
    </button>
  );

  return (
    <AdminLayout>
      <div className="max-w-[1200px] mx-auto animate-fade-in-up">
        
        <div className="mb-6">
           <p className={`text-[11px] font-bold tracking-widest uppercase mb-1.5 ${textMuted}`}>Workspace / Pending Review / Recommendation Form</p>
           <h1 className={`text-2xl font-serif font-bold ${textMain}`}>Submit Recommendation</h1>
           <p className={`text-[13px] ${textMuted}`}>Please complete all scoring rubrics and provide thorough qualitative evaluations.</p>
        </div>

        <div className={`p-6 rounded-2xl border shadow-sm mb-6 ${bgCard}`}>
           <div className="flex justify-between items-center mb-2">
             <p className={`text-[12px] font-mono font-bold text-[#7A1849]`}>ORA-2026-077 (ACTIVE EVALUATION)</p>
             <span className="bg-red-50 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded">Due in 2 days</span>
           </div>
           <h2 className={`text-xl font-serif font-bold mb-2 ${textMain}`}>Reinforcement learning in autonomous flight paths under extreme variance conditions</h2>
           <p className={`text-[12px] mb-4 ${textMuted}`}>Authors: [Author identities removed for blind review]</p>
           
           <div className={`p-4 rounded-xl border mb-4 ${isDarkMode ? 'bg-[#1A1A1A] border-[#3D3D3D]' : 'bg-gray-50 border-gray-200'}`}>
             <p className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${textMuted}`}>Abstract</p>
             <p className={`text-[12px] leading-relaxed ${textMain}`}>This paper presents a scalable reinforcement learning model tailored specifically to unmanned aerial vehicle (UAV) flight vectors under volatile wind conditions. We analyze multi-agent decision matrices...</p>
           </div>
           
           <div className="flex gap-2">
             {['Reinforcement Learning', 'UAV flight paths', 'Control Theory'].map((k, i) => (
                <span key={i} className={`text-[10px] px-2 py-0.5 rounded border ${isDarkMode ? 'border-gray-700 text-gray-300' : 'bg-white border-gray-200 text-gray-600'}`}>{k}</span>
             ))}
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Left: Rubric */}
          <div className={`p-6 md:p-8 rounded-2xl border shadow-sm ${bgCard}`}>
             <h2 className={`text-[16px] font-bold mb-6 ${textMain}`}>Evaluation Rubric</h2>
             
             <div className="mb-8">
                <label className={`block text-[12px] font-bold mb-2 ${textMain}`}>Overall Recommendation</label>
                <select className={`w-full px-4 py-3 rounded-xl border outline-none text-[13px] font-medium ${inputBg}`}>
                  <option>Minor Revision</option>
                  <option>Accept</option>
                  <option>Major Revision</option>
                  <option>Reject</option>
                </select>
             </div>

             {[
               { l: 'Originality', score: '4/5', desc: 'Does this manuscript represent a major novelty?' },
               { l: 'Methodology Quality', score: '5/5', desc: 'Are the experimental framework and models correct?' },
               { l: 'Writing & Clarity', score: '3/5', desc: 'Is the English clear and professional?' },
               { l: 'Significance & Impact', score: '4/5', desc: 'Will this inspire subsequent publications?' },
             ].map((item, i) => (
               <div key={i} className="mb-6">
                 <div className="flex justify-between items-center mb-2">
                   <label className={`text-[13px] font-bold ${textMain}`}>{item.l}</label>
                   <span className={`text-[11px] font-bold text-[#7A1849]`}>Score: {item.score}</span>
                 </div>
                 <div className="flex gap-2">
                   <RubricButton val="1" />
                   <RubricButton val="2" />
                   <RubricButton val="3" />
                   <RubricButton val="4" selected={true} />
                   <RubricButton val="5" />
                 </div>
                 <p className={`text-[11px] mt-2 ${textMuted}`}>{item.desc}</p>
               </div>
             ))}
          </div>

          {/* Right: Written Evaluation */}
          <div className="space-y-6">
            <div className={`p-6 md:p-8 rounded-2xl border shadow-sm ${bgCard}`}>
              <h2 className={`text-[16px] font-bold mb-4 ${textMain}`}>Written Evaluation</h2>
              
              <div className="mb-4">
                <label className={`block text-[12px] font-bold mb-2 ${textMain}`}>Comments to Author</label>
                <textarea rows="4" defaultValue="The simulated control performance looks impressive. However, the author must specify the noise density used during testing. PID comparison is basic; include comparisons against modern adaptive MPC schemes." className={`w-full p-3 rounded-lg border text-[13px] leading-relaxed resize-none ${isDarkMode ? 'bg-[#1A1A1A] border-[#3D3D3D] text-gray-300' : 'bg-gray-50 border-gray-200 text-gray-700'}`}></textarea>
              </div>

              <div>
                <label className={`block text-[12px] font-bold mb-2 ${textMain}`}>Confidential Comments to Editor</label>
                <textarea rows="3" defaultValue="Highly original simulated data, but potential over-fitting on flight track 3. Strongly recommend major revisions before full publication." className={`w-full p-3 rounded-lg border text-[13px] leading-relaxed resize-none ${isDarkMode ? 'bg-[#1A1A1A] border-[#3D3D3D] text-gray-300' : 'bg-gray-50 border-gray-200 text-gray-700'}`}></textarea>
              </div>
            </div>

            <div className={`p-6 md:p-8 rounded-2xl border shadow-sm ${bgCard}`}>
              <h3 className={`text-[14px] font-bold mb-3 ${textMain}`}>Annotated Manuscript PDF</h3>
              <div className={`border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer ${isDarkMode ? 'border-gray-700 hover:bg-[#2A2A2A]' : 'border-gray-300 hover:bg-gray-50'}`}>
                <UploadOutlined className="text-2xl text-[#7A1849] mb-2" />
                <p className={`text-[12px] font-bold ${textMain}`}>Click to upload or drag & drop</p>
                <p className={`text-[10px] ${textMuted}`}>PDF, DOCX up to 25MB with inline notes</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-8 pt-4 border-t ${borderCol}">
          <button onClick={() => navigate('/reviewer/assignments')} className={`px-5 py-2.5 rounded-xl text-[13px] font-bold border ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50 bg-white'}`}>Cancel</button>
          <div className="flex gap-3">
             <button className={`px-5 py-2.5 rounded-xl text-[13px] font-bold border ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50 bg-white'}`}>Save Draft</button>
             <button onClick={() => navigate('/reviewer/assignments')} className="bg-[#7A1849] text-white px-6 py-2.5 rounded-xl font-bold text-[13px] hover:bg-[#5E1136] shadow-md">Submit Recommendation</button>
          </div>
        </div>

      </div>
    </AdminLayout>
  );
}