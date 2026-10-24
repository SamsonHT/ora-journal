import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { 
  UploadOutlined, FileTextOutlined, TeamOutlined, 
  CheckCircleFilled, PlusOutlined, CloseCircleOutlined,
  InfoCircleOutlined, SafetyCertificateOutlined
} from '@ant-design/icons';

export default function SubmitManuscript() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  
  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-200';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const inputBg = isDarkMode ? 'bg-[#1A1A1A] border-[#3D3D3D] text-white focus:ring-[#7A1849]' : 'bg-gray-50/50 border-gray-200 text-gray-900 focus:bg-white focus:ring-[#7A1849]';
  const borderCol = isDarkMode ? 'border-[#2D2D2D]' : 'border-gray-100';
  
  const labelStyle = `block text-[12px] font-bold mb-1.5 ${textMain}`;
  const sectionTitle = `text-[16px] font-bold mb-6 flex items-center gap-2 ${textMain}`;
  const numCircle = "w-6 h-6 rounded-full bg-[#FCF7F9] text-[#7A1849] flex items-center justify-center text-[11px] font-bold border border-[#7A1849]/10";

  return (
    <AdminLayout>
      <div className="max-w-[1300px] mx-auto animate-fade-in-up">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
            <p className={`text-[11px] font-bold tracking-widest uppercase mb-1.5 ${textMuted}`}>Workspace / New Submission</p>
            <h1 className={`text-2xl font-serif font-bold flex items-center gap-3 ${textMain}`}>
              Submit Manuscript
              <span className="text-[10px] bg-[#FCF7F9] text-[#7A1849] px-2.5 py-1 rounded-md font-bold uppercase tracking-wider border border-[#7A1849]/20">Draft</span>
            </h1>
            <p className={`text-[13px] mt-1 ${textMuted}`}>Complete all required fields to submit your research.</p>
          </div>
          <div className="flex gap-3">
            <button className={`px-5 py-2.5 rounded-xl text-[13px] font-bold border transition-colors hover:bg-gray-50 ${isDarkMode ? 'border-gray-700 text-gray-300 hover:bg-[#2A2A2A]' : 'border-gray-300 text-gray-700'}`}>
              Save Draft
            </button>
            <button onClick={() => navigate('/author/submissions')} className="bg-[#7A1849] text-white px-6 py-2.5 rounded-xl text-[13px] font-bold hover:bg-[#5E1136] transition-all shadow-md">
              Submit
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* ================= MAIN FORM COLUMN ================= */}
          <div className="flex-1 space-y-6">
            
            {/* SECTION 1: Manuscript Details */}
            <div className={`p-8 rounded-2xl border shadow-sm ${bgCard}`}>
              <h2 className={sectionTitle}><span className={numCircle}>1</span> Manuscript Details</h2>
              
              <div className="space-y-5">
                <div>
                  <label className={labelStyle}>Manuscript Title <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="Enter the full title of your paper" className={`w-full px-4 py-3 rounded-xl border outline-none transition-all ring-offset-2 focus:ring-2 text-[14px] ${inputBg}`} />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className={labelStyle}>Category / Subject Area <span className="text-red-500">*</span></label>
                    <select className={`w-full px-4 py-3 rounded-xl border outline-none transition-all ring-offset-2 focus:ring-2 text-[14px] ${inputBg}`}>
                      <option>Medical Imaging & AI</option>
                      <option>Quantum Computing</option>
                      <option>Renewable Energy</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelStyle}>Article Type <span className="text-red-500">*</span></label>
                    <select className={`w-full px-4 py-3 rounded-xl border outline-none transition-all ring-offset-2 focus:ring-2 text-[14px] ${inputBg}`}>
                      <option>Original Research</option>
                      <option>Review Article</option>
                      <option>Case Study</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelStyle}>Abstract <span className="text-red-500">*</span></label>
                  <textarea rows="4" placeholder="Paste your abstract here..." className={`w-full px-4 py-3 rounded-xl border outline-none transition-all ring-offset-2 focus:ring-2 text-[14px] resize-none ${inputBg}`}></textarea>
                  <p className={`text-[11px] mt-1.5 ${textMuted}`}>Maximum 300 words.</p>
                </div>

                <div>
                  <label className={labelStyle}>Keywords <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="e.g. Federated learning, clinical imaging (comma separated)" className={`w-full px-4 py-3 rounded-xl border outline-none transition-all ring-offset-2 focus:ring-2 text-[14px] ${inputBg}`} />
                </div>
              </div>
            </div>

            {/* SECTION 2: Authors */}
            <div className={`p-8 rounded-2xl border shadow-sm ${bgCard}`}>
              <h2 className={sectionTitle}><span className={numCircle}>2</span> Authors & Contributors</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className={labelStyle}>Corresponding Author</label>
                  <input type="text" defaultValue="Dr. Ava Morgan" disabled className={`w-full px-4 py-3 rounded-xl border text-[14px] opacity-70 cursor-not-allowed ${isDarkMode ? 'bg-[#1A1A1A]' : 'bg-gray-100'} border-gray-200`} />
                </div>
                <div>
                  <label className={labelStyle}>Email Address</label>
                  <input type="email" defaultValue="ava.morgan@northstar.edu" disabled className={`w-full px-4 py-3 rounded-xl border text-[14px] opacity-70 cursor-not-allowed ${isDarkMode ? 'bg-[#1A1A1A]' : 'bg-gray-100'} border-gray-200`} />
                </div>
                <div>
                  <label className={labelStyle}>Institution / Affiliation</label>
                  <input type="text" defaultValue="Northstar Labs, Boston, MA" className={`w-full px-4 py-3 rounded-xl border outline-none transition-all ring-offset-2 focus:ring-2 text-[14px] ${inputBg}`} />
                </div>
                <div>
                  <label className={labelStyle}>ORCID iD</label>
                  <input type="text" defaultValue="0000-0002-1825-0097" className={`w-full px-4 py-3 rounded-xl border outline-none transition-all ring-offset-2 focus:ring-2 text-[14px] ${inputBg}`} />
                </div>
              </div>

              <div className={`p-4 rounded-xl border mb-4 flex justify-between items-center ${isDarkMode ? 'bg-[#2A2A2A] border-[#3D3D3D]' : 'bg-gray-50 border-gray-200'}`}>
                <div>
                  <p className={`text-[13px] font-bold ${textMain}`}>Dr. Mike Patel (Co-Author)</p>
                  <p className={`text-[11px] ${textMuted}`}>Johns Hopkins • mike.patel@jhu.edu</p>
                </div>
                <button className="text-gray-400 hover:text-red-500 transition-colors"><CloseCircleOutlined /></button>
              </div>

              <button className="text-[12px] font-bold text-[#7A1849] border border-[#7A1849]/30 px-4 py-2 rounded-lg hover:bg-[#FCF7F9] transition-colors flex items-center gap-2">
                <PlusOutlined /> Add Co-author
              </button>
            </div>

            {/* SECTION 3: Files */}
            <div className={`p-8 rounded-2xl border shadow-sm ${bgCard}`}>
              <h2 className={sectionTitle}><span className={numCircle}>3</span> Manuscript Files</h2>
              
              <div className="space-y-6">
                <div>
                  <label className={labelStyle}>Manuscript File <span className="text-red-500">*</span></label>
                  <div className={`border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-colors ${isDarkMode ? 'border-gray-700 hover:bg-[#2A2A2A]' : 'border-gray-300 hover:bg-[#FCF7F9]'}`}>
                    <UploadOutlined className="text-3xl text-[#7A1849] mb-3" />
                    <p className={`text-[13px] font-bold ${textMain}`}>Upload manuscript file</p>
                    <p className={`text-[11px] ${textMuted}`}>PDF, DOCX accepted (Max 10MB)</p>
                  </div>
                  <div className={`mt-3 p-3 rounded-lg border flex justify-between items-center ${isDarkMode ? 'bg-[#2A2A2A] border-[#3D3D3D]' : 'bg-white border-gray-200 shadow-sm'}`}>
                    <div className="flex items-center gap-3">
                      <FileTextOutlined className="text-[#7A1849] text-lg" />
                      <div>
                        <p className={`text-[13px] font-bold ${textMain}`}>Version_2_full_final_REVISED.docx</p>
                        <p className={`text-[11px] ${textMuted}`}>800 KB • Uploaded just now</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-green-600">Ready</span>
                  </div>
                </div>

                <div>
                  <label className={labelStyle}>Supplementary Files</label>
                  <div className={`border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-colors ${isDarkMode ? 'border-gray-700 hover:bg-[#2A2A2A]' : 'border-gray-300 hover:bg-[#FCF7F9]'}`}>
                    <UploadOutlined className="text-2xl text-gray-400 mb-2" />
                    <p className={`text-[12px] font-bold ${textMain}`}>Upload supplementary material</p>
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 4: Cover Letter */}
            <div className={`p-8 rounded-2xl border shadow-sm ${bgCard}`}>
              <h2 className={sectionTitle}><span className={numCircle}>4</span> Cover Letter</h2>
              <div>
                <label className={labelStyle}>Letter to the Editor (Optional)</label>
                <textarea rows="3" placeholder="Briefly explain the significance of your work..." className={`w-full px-4 py-3 rounded-xl border outline-none transition-all ring-offset-2 focus:ring-2 text-[14px] resize-none ${inputBg}`}></textarea>
              </div>
            </div>

            {/* SECTION 5: Declarations */}
            <div className={`p-8 rounded-2xl border shadow-sm ${bgCard}`}>
              <h2 className={sectionTitle}><span className={numCircle}>5</span> Declarations, Ethics, and Conflicts</h2>
              
              <div className="space-y-4">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" defaultChecked className="mt-1 w-4 h-4 rounded border-gray-300 accent-[#7A1849] cursor-pointer" />
                  <span className={`text-[13px] leading-relaxed group-hover:text-[#7A1849] transition-colors ${textMain}`}>This manuscript represents original work and has not been published or submitted elsewhere.</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" defaultChecked className="mt-1 w-4 h-4 rounded border-gray-300 accent-[#7A1849] cursor-pointer" />
                  <span className={`text-[13px] leading-relaxed group-hover:text-[#7A1849] transition-colors ${textMain}`}>All authors have approved the submitted version and agree to its submission.</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" defaultChecked className="mt-1 w-4 h-4 rounded border-gray-300 accent-[#7A1849] cursor-pointer" />
                  <span className={`text-[13px] leading-relaxed group-hover:text-[#7A1849] transition-colors ${textMain}`}>The research complies with ethical guidelines for human/animal subjects (if applicable).</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" defaultChecked className="mt-1 w-4 h-4 rounded border-gray-300 accent-[#7A1849] cursor-pointer" />
                  <span className={`text-[13px] leading-relaxed group-hover:text-[#7A1849] transition-colors ${textMain}`}>There are no conflicts of interest to declare.</span>
                </label>
              </div>
            </div>
            
            {/* Mobile Submit Button */}
            <div className="lg:hidden flex justify-end pt-4">
               <button onClick={() => navigate('/author/submissions')} className="w-full bg-[#7A1849] text-white px-8 py-3 rounded-xl text-[14px] font-bold hover:bg-[#5E1136] transition-all shadow-md">
                  Submit Manuscript
               </button>
            </div>
          </div>

          {/* ================= RIGHT SIDEBAR ================= */}
          <div className="w-full lg:w-[320px]">
            <div className={`p-6 rounded-2xl border shadow-sm sticky top-24 transition-colors ${isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-200'}`}>
              
              <div className="mb-6 pb-6 border-b border-gray-100 dark:border-gray-800">
                <h3 className={`text-[14px] font-bold mb-3 flex items-center gap-2 ${textMain}`}><InfoCircleOutlined className="text-[#7A1849]" /> Submission Guidelines</h3>
                <ul className={`text-[12px] space-y-2 ${textMuted}`}>
                  <li>• Ensure all authors meet the ICMJE criteria.</li>
                  <li>• Figures must be at least 300 DPI.</li>
                  <li>• Double-blind review is enforced.</li>
                  <li>• Max 10MB for the main document.</li>
                </ul>
              </div>

              <div className="mb-6 pb-6 border-b border-gray-100 dark:border-gray-800">
                <h3 className={`text-[14px] font-bold mb-3 flex items-center gap-2 ${textMain}`}><SafetyCertificateOutlined className="text-[#7A1849]" /> Data Availability</h3>
                <p className={`text-[12px] leading-relaxed mb-3 ${textMuted}`}>ORA requires a data availability statement for all research articles.</p>
                <select className={`w-full px-3 py-2 rounded-lg border outline-none text-[12px] ${inputBg}`}>
                  <option>Data available on request</option>
                  <option>Data is fully open access</option>
                  <option>Data restricted for privacy</option>
                </select>
              </div>

              <div>
                <h3 className={`text-[14px] font-bold mb-4 ${textMain}`}>Ready to Submit?</h3>
                <p className={`text-[11px] font-medium mb-4 ${textMuted}`}>By submitting, you agree to the ORA Academic submission policies.</p>
                <button onClick={() => navigate('/author/submissions')} className="w-full bg-[#7A1849] text-white py-3 rounded-xl text-[13px] font-bold hover:bg-[#5E1136] transition-all shadow-md">
                  Confirm & Submit
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </AdminLayout>
  );
}