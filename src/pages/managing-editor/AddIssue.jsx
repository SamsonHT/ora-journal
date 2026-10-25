import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { ArrowLeftOutlined, UploadOutlined, CheckCircleFilled, InfoCircleOutlined } from '@ant-design/icons';

export default function AddIssue() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-200';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const inputBg = isDarkMode ? 'bg-[#1A1A1A] border-[#3D3D3D] text-white focus:ring-[#7A1849]' : 'bg-gray-50 border-gray-200 text-gray-900 focus:bg-white focus:ring-[#7A1849]';
  const borderCol = isDarkMode ? 'border-[#2D2D2D]' : 'border-gray-100';

  const labelStyle = `block text-[12px] font-bold mb-2 ${textMain}`;
  const sectionTitle = `text-[16px] font-bold mb-5 flex items-center gap-2 ${textMain}`;

  return (
    <AdminLayout>
      <div className="max-w-[1300px] mx-auto animate-fade-in-up pb-12">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <button onClick={() => navigate('/managing-editor/issues')} className="text-[12px] font-bold text-[#7A1849] hover:underline flex items-center gap-2 mb-3">
              <ArrowLeftOutlined /> Back to Issues
            </button>
            <p className={`text-[11px] font-bold tracking-widest uppercase mb-1 ${textMuted}`}>Workspace / Issues / Add New</p>
            <h1 className={`text-3xl font-serif font-bold ${textMain}`}>Create New Issue</h1>
            <p className={`text-[14px] mt-1 ${textMuted}`}>Establish a new compilation volume and bundle accepted manuscripts.</p>
          </div>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT COLUMN: Main Form */}
          <div className="lg:col-span-2 space-y-6">
            
            <div className={`p-8 rounded-2xl border shadow-sm ${bgCard}`}>
              <h2 className={sectionTitle}><InfoCircleOutlined className="text-[#7A1849]" /> Issue Information</h2>
              
              <div className="space-y-6">
                <div>
                  <label className={labelStyle}>Issue Title <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="e.g., Quantum Computing & Sensor Arrays" className={`w-full px-4 py-3 rounded-xl border outline-none transition-all ring-offset-2 focus:ring-2 text-[14px] ${inputBg}`} />
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className={labelStyle}>Volume Number <span className="text-red-500">*</span></label>
                    <input type="number" placeholder="e.g., 13" className={`w-full px-4 py-3 rounded-xl border outline-none transition-all ring-offset-2 focus:ring-2 text-[14px] ${inputBg}`} />
                  </div>
                  <div>
                    <label className={labelStyle}>Issue Number <span className="text-red-500">*</span></label>
                    <input type="number" placeholder="e.g., 2" className={`w-full px-4 py-3 rounded-xl border outline-none transition-all ring-offset-2 focus:ring-2 text-[14px] ${inputBg}`} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className={labelStyle}>Publication Date <span className="text-red-500">*</span></label>
                    <input type="date" className={`w-full px-4 py-3 rounded-xl border outline-none transition-all ring-offset-2 focus:ring-2 text-[14px] ${inputBg}`} />
                  </div>
                  <div>
                    <label className={labelStyle}>ISSN</label>
                    <input type="text" placeholder="e.g., 2049-3630" className={`w-full px-4 py-3 rounded-xl border outline-none transition-all ring-offset-2 focus:ring-2 text-[14px] ${inputBg}`} />
                  </div>
                </div>

                <div>
                  <label className={labelStyle}>Description / Editorial Note</label>
                  <textarea rows="4" placeholder="Write a brief summary of the issue focus, key contributors, or target topics..." className={`w-full px-4 py-3 rounded-xl border outline-none transition-all ring-offset-2 focus:ring-2 text-[14px] resize-none ${inputBg}`}></textarea>
                  <p className={`text-[11px] mt-2 ${textMuted}`}>This will be visible on the public issue landing page.</p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Sidebar (Upload & Status) */}
          <div className="space-y-6">
            
            {/* Cover Image & Status */}
            <div className={`p-6 rounded-2xl border shadow-sm ${bgCard}`}>
              <h2 className={`text-[15px] font-bold mb-4 ${textMain}`}>Issue Settings</h2>
              
              <div className="mb-6">
                <label className={labelStyle}>Publishing Status</label>
                <select className={`w-full px-4 py-2.5 rounded-xl border outline-none text-[13px] font-medium cursor-pointer ${inputBg}`}>
                  <option>Draft</option>
                  <option>Scheduled</option>
                  <option>Published</option>
                </select>
              </div>

              <div>
                <label className={labelStyle}>Cover Image</label>
                <div className={`border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-colors ${isDarkMode ? 'border-gray-700 hover:bg-[#2A2A2A]' : 'border-gray-300 hover:bg-[#FCF7F9]'}`}>
                  <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-3">
                    <UploadOutlined className="text-[#7A1849] text-lg" />
                  </div>
                  <p className={`text-[13px] font-bold ${textMain}`}>Click to upload cover</p>
                  <p className={`text-[11px] mt-1 ${textMuted}`}>PNG, JPG up to 5MB</p>
                </div>
              </div>
            </div>

            {/* Checklist Card */}
            <div className={`p-6 rounded-2xl border shadow-sm ${isDarkMode ? 'bg-[#2A2A2A] border-[#3D3D3D]' : 'bg-blue-50 border-blue-100'}`}>
               <h3 className={`text-[13px] font-bold mb-3 flex items-center gap-2 ${textMain}`}><CheckCircleFilled className="text-blue-500" /> Before Publishing</h3>
               <ul className={`text-[12px] space-y-2 ${textMuted}`}>
                 <li>• Ensure all manuscripts are assigned.</li>
                 <li>• Confirm the publication date.</li>
                 <li>• Verify the ISSN matches the journal.</li>
                 <li>• Upload a high-resolution cover.</li>
               </ul>
            </div>

          </div>
        </div>

        {/* Footer Actions */}
        <div className={`flex justify-end gap-3 mt-8 pt-6 border-t ${borderCol}`}>
          <button type="button" onClick={() => navigate('/managing-editor/issues')} className={`px-6 py-3 rounded-xl text-[13px] font-bold border transition-colors ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50 bg-white'}`}>
            Cancel
          </button>
          <button type="button" onClick={() => navigate('/managing-editor/issues')} className="bg-[#7A1849] text-white px-8 py-3 rounded-xl text-[14px] font-bold hover:bg-[#5E1136] transition-all shadow-md">
            Save & Create Issue
          </button>
        </div>

      </div>
    </AdminLayout>
  );
}