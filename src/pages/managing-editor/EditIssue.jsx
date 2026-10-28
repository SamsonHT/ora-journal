import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { UploadOutlined } from '@ant-design/icons';

export default function EditIssue() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const { id } = useParams();

  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-200';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const inputBg = isDarkMode ? 'bg-[#1A1A1A] border-[#3D3D3D] text-white focus:border-[#7A1849]' : 'bg-white border-gray-200 text-gray-900 focus:border-[#7A1849]';
  const labelStyle = `block text-[12px] font-bold mb-2 ${textMain}`;

  return (
    <AdminLayout>
      <div className="max-w-[1300px] mx-auto animate-fade-in-up pb-12">
        
        <div className="mb-6">
          <p className={`text-[10px] font-bold tracking-[0.1em] uppercase mb-1.5 ${textMuted}`}>WORKSPACE / ISSUES / EDIT / {id}</p>
          <h1 className={`text-[26px] font-bold tracking-tight ${textMain}`}>Edit Issue</h1>
          <p className={`text-[13px] font-medium mt-1 ${textMuted}`}>Update the metadata and settings for this issue.</p>
        </div>

        <div className={`rounded-xl border shadow-sm ${bgCard}`}>
          <div className="p-6">
            <h2 className={`text-[16px] font-bold tracking-tight mb-4 ${textMain}`}>Issue Information</h2>
            <p className={`text-[12px] font-medium ${textMuted}`}>Modify the details of this compilation volume.</p>
          </div>

          <div className="px-6 pb-6 space-y-5">
            <div>
              <label className={labelStyle}>Issue Title <span className="text-red-500">*</span></label>
              <input type="text" defaultValue="Journal of Oromo Research" className={`w-full px-4 py-2.5 rounded-lg border outline-none text-[13px] font-medium transition-all ${inputBg}`} />
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div><label className={labelStyle}>Volume Number <span className="text-red-500">*</span></label><input type="number" defaultValue="12" className={`w-full px-4 py-2.5 rounded-lg border outline-none text-[13px] font-medium transition-all ${inputBg}`} /></div>
              <div><label className={labelStyle}>Issue Number <span className="text-red-500">*</span></label><input type="number" defaultValue="3" className={`w-full px-4 py-2.5 rounded-lg border outline-none text-[13px] font-medium transition-all ${inputBg}`} /></div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div><label className={labelStyle}>Publication Date <span className="text-red-500">*</span></label><input type="date" defaultValue="2026-09-15" className={`w-full px-4 py-2.5 rounded-lg border outline-none text-[13px] font-medium transition-all ${inputBg}`} /></div>
              <div><label className={labelStyle}>ISSN</label><input type="text" defaultValue="2049-3630" className={`w-full px-4 py-2.5 rounded-lg border outline-none text-[13px] font-medium transition-all ${inputBg}`} /></div>
            </div>

            <div>
              <label className={labelStyle}>Status</label>
              <select defaultValue="Published" className={`w-full px-4 py-2.5 rounded-lg border outline-none text-[13px] font-medium cursor-pointer ${inputBg}`}>
                <option>Scheduled</option>
                <option>Draft</option>
                <option>Published</option>
              </select>
            </div>

            <div>
              <label className={labelStyle}>Cover Image</label>
              <div className={`border-2 border-dashed rounded-xl p-10 flex flex-col items-center justify-center text-center cursor-pointer transition-colors ${isDarkMode ? 'border-gray-700 hover:bg-[#2A2A2A]' : 'border-gray-200 hover:bg-gray-50'}`}>
                <div className="w-10 h-10 rounded-full bg-[#FCF7F9] flex items-center justify-center mb-3"><UploadOutlined className="text-[#7A1849] text-lg" /></div>
                <p className={`text-[13px] font-bold ${textMain}`}>Click to replace current cover</p>
                <p className={`text-[11px] font-medium mt-1 ${textMuted}`}>PNG, JPG or JPEG up to 5MB (Recomm. ratio 4:3)</p>
              </div>
            </div>

            <div>
              <label className={labelStyle}>Description / Editorial Note</label>
              <textarea rows="4" defaultValue="This issue features a curated selection of articles exploring the intersection of quantum computing, advanced sensor arrays, and autonomous control systems." className={`w-full px-4 py-3 rounded-lg border outline-none text-[13px] font-medium resize-none transition-all ${inputBg}`}></textarea>
            </div>
          </div>

          <div className="flex justify-end gap-3 p-6">
            <button type="button" onClick={() => navigate('/managing-editor/issues')} className={`px-6 py-2.5 rounded-lg text-[13px] font-bold border transition-colors ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-200 text-gray-700 hover:bg-gray-50 bg-white'}`}>
              Cancel
            </button>
            <button type="button" onClick={() => navigate('/managing-editor/issues')} className="bg-[#7A1849] text-white px-6 py-2.5 rounded-lg text-[13px] font-bold hover:bg-[#5E1136] transition-all shadow-sm">
              Save Changes
            </button>
          </div>
        </div>

      </div>
    </AdminLayout>
  );
}