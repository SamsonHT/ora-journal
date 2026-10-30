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
  const inputBg = isDarkMode 
    ? 'bg-[#1A1A1A] border-[#3D3D3D] text-white focus:border-[#7A1849]' 
    : 'bg-[#FAFAFA] border-gray-200 text-gray-900 focus:border-[#7A1849]';
  
  const labelStyle = `block text-[12px] font-bold mb-1.5 ${textMain}`;

  return (
    <AdminLayout>
      <div className="max-w-[1400px] mx-auto animate-fade-in-up pb-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <p className={`text-[10px] font-bold tracking-[0.1em] uppercase mb-1.5 ${textMuted}`}>WORKSPACE / ADMINISTRATION / ARTICLE TYPE</p>
            <h1 className={`text-[26px] font-bold tracking-tight ${textMain}`}>Add Article Type</h1>
            <p className={`text-[13px] font-medium mt-1 ${textMuted}`}>Create a new Article Type for manuscript classification.</p>
          </div>
          <Link to="/admin/subjects" className={`px-4 py-2 rounded-lg text-[12px] font-bold border transition-colors flex items-center gap-2 ${isDarkMode ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-200 text-gray-700 hover:bg-gray-50 bg-white'}`}>
            <ArrowLeftOutlined /> Back
          </Link>
        </div>

        {/* Form Card */}
        <div className={`rounded-xl border shadow-sm ${bgCard}`}>
          
          {/* Card Header */}
          <div className="p-6 border-b border-gray-100 dark:border-gray-800">
            <h2 className={`text-[16px] font-bold tracking-tight ${textMain}`}>Area Settings</h2>
          </div>

          {/* Form Fields */}
          <div className="p-6 space-y-5">
            
            {/* Article Type Name */}
            <div>
              <label className={labelStyle}>Article Type Name <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                placeholder="e.g. Original Research" 
                className={`w-full px-4 py-2.5 rounded-lg border outline-none text-[13px] font-medium transition-colors ${inputBg}`} 
              />
            </div>

            {/* Description */}
            <div>
              <label className={labelStyle}>Description <span className="text-red-500">*</span></label>
              <textarea 
                rows="4" 
                placeholder="Structure scope details and research areas related to this Article Type ..." 
                className={`w-full px-4 py-3 rounded-lg border outline-none text-[13px] font-medium transition-colors resize-none ${inputBg}`}
              ></textarea>
            </div>

            {/* Status */}
            <div>
              <label className={labelStyle}>Status</label>
              <select className={`w-full max-w-xs px-4 py-2.5 rounded-lg border outline-none text-[13px] font-medium transition-colors cursor-pointer ${inputBg}`}>
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-4">
              <button className="bg-[#7A1849] text-white px-6 py-2.5 rounded-lg text-[13px] font-bold hover:bg-[#5E1136] transition-all shadow-sm">
                Save Article Type
              </button>
              <button className={`px-6 py-2.5 rounded-lg text-[13px] font-bold border transition-colors ${isDarkMode ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-200 text-gray-700 hover:bg-gray-50 bg-white'}`}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}