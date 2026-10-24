import React from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { ArrowLeftOutlined } from '@ant-design/icons';

export default function AddSubjectArea() {
  const { isDarkMode } = useTheme();
  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-200';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const inputBg = isDarkMode ? 'bg-[#2A2A2A] border-[#3D3D3D] text-white focus:ring-[#7A1849]' : 'bg-gray-50 border-gray-200 text-gray-900 focus:ring-[#7A1849]';

  return (
    <AdminLayout>
      <div className="max-w-[1000px] mx-auto">
        <div className="flex justify-between items-end mb-8">
          <div>
            <p className={`text-[11px] font-bold tracking-widest uppercase mb-1.5 ${textMuted}`}>Workspace / Subject Areas / Add</p>
            <h1 className={`text-3xl font-serif font-bold ${textMain}`}>Add Subject Area</h1>
            <p className={`text-[14px] mt-1.5 ${textMuted}`}>Create a new subject area for manuscript classification.</p>
          </div>
          <Link to="/admin/subjects" className={`px-5 py-2.5 rounded-xl text-[13px] font-bold border transition-all flex items-center gap-2 ${isDarkMode ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50 bg-white'}`}>
            <ArrowLeftOutlined /> Back
          </Link>
        </div>

        <div className={`p-8 rounded-2xl border shadow-sm ${bgCard}`}>
          <h2 className={`text-[16px] font-bold mb-6 ${textMain}`}>Area Settings</h2>
          
          <div className="space-y-6">
            <div>
              <label className={`block text-[12px] font-bold mb-2 ${textMain}`}>Subject Area Name <span className="text-red-500">*</span></label>
              <input type="text" placeholder="e.g. Biomedical Systems" className={`w-full px-4 py-3 rounded-xl border outline-none ring-offset-2 focus:ring-2 ${inputBg}`} />
            </div>
            
            <div>
              <label className={`block text-[12px] font-bold mb-2 ${textMain}`}>Description <span className="text-red-500">*</span></label>
              <textarea rows="4" placeholder="Structure scope details and research areas related to this subject area..." className={`w-full px-4 py-3 rounded-xl border outline-none ring-offset-2 focus:ring-2 resize-none ${inputBg}`}></textarea>
            </div>
            
            <div>
              <label className={`block text-[12px] font-bold mb-2 ${textMain}`}>Status</label>
              <select className={`w-full max-w-xs px-4 py-3 rounded-xl border outline-none ring-offset-2 focus:ring-2 ${inputBg}`}>
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>

            <div className="flex gap-3 pt-4">
              <button className="bg-[#7A1849] text-white px-6 py-2.5 rounded-xl text-[13px] font-bold hover:bg-[#5E1136] transition-all shadow-md">Save Subject Area</button>
              <button className={`px-6 py-2.5 rounded-xl text-[13px] font-bold border transition-colors ${isDarkMode ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50 bg-white'}`}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}