import React from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { CheckCircleFilled, ExclamationCircleFilled, PlusOutlined } from '@ant-design/icons';

export default function AddCategory() {
  const { isDarkMode } = useTheme();
  
  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-200';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const inputBg = isDarkMode 
    ? 'bg-[#1A1A1A] border-[#3D3D3D] text-white focus:border-[#7A1849]' 
    : 'bg-white border-gray-300 text-gray-900 focus:border-[#7A1849]';
  
  const labelStyle = `block text-[12px] font-bold mb-1.5 ${textMain}`;

  return (
    <AdminLayout>
      <div className="max-w-[1400px] mx-auto animate-fade-in-up pb-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <p className={`text-[10px] font-bold tracking-[0.1em] uppercase mb-1.5 ${textMuted}`}>WORKSPACE / CATEGORIES</p>
            <h1 className={`text-[26px] font-bold tracking-tight ${textMain}`}>Add new category</h1>
            <p className={`text-[13px] font-medium mt-1 ${textMuted}`}>Create a subject category for manuscript organization and journal discovery.</p>
          </div>
          <Link to="/admin/categories" className={`px-4 py-2 rounded-lg text-[12px] font-bold border transition-colors ${isDarkMode ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-200 text-gray-700 hover:bg-gray-50 bg-white'}`}>
            Back to categories
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Form (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className={`p-6 rounded-xl border shadow-sm ${bgCard}`}>
              
              {/* Form Header with asterisk note */}
              <div className="flex justify-between items-center mb-6">
                <h2 className={`text-[15px] font-bold tracking-tight ${textMain}`}>Category details</h2>
                <p className={`text-[10px] font-medium ${textMuted}`}>Required fields marked *</p>
              </div>
              
              <div className="space-y-5">
                {/* Category Name */}
                <div>
                  <label className={labelStyle}>Category name <span className="text-red-500">*</span></label>
                  <input type="text" defaultValue="Artificial Intelligence" className={`w-full px-3 py-2.5 rounded-lg border outline-none text-[13px] font-medium transition-colors ${inputBg}`} />
                  <p className={`text-[10px] font-medium mt-1.5 ${textMuted}`}>Use a clear, recognizable journal subject name.</p>
                </div>

                {/* URL Slug */}
                <div>
                  <label className={labelStyle}>URL slug <span className="text-red-500">*</span></label>
                  <input type="text" defaultValue="artificial-intelligence" className={`w-full px-3 py-2.5 rounded-lg border outline-none text-[13px] font-medium transition-colors ${inputBg}`} />
                  <p className={`text-[10px] font-medium mt-1.5 text-[#1A56DB]`}>ora.academic/journals/categories/artificial-intelligence</p>
                </div>

                {/* Availability Check */}
                <div className={`p-3 rounded-lg border flex items-center gap-3 ${isDarkMode ? 'bg-[#F0FDF4]/10 border-[#15803D]/30' : 'bg-[#F0FDF4] border-[#DCFCE7]'}`}>
                  <CheckCircleFilled className="text-[#15803D] text-[14px]" />
                  <div>
                    <p className={`text-[11px] font-bold ${isDarkMode ? 'text-green-400' : 'text-[#15803D]'}`}>Name and slug are available</p>
                    <p className={`text-[10px] font-medium ${isDarkMode ? 'text-green-400/70' : 'text-[#15803D]/70'}`}>No existing category uses this name or URL slug.</p>
                  </div>
                </div>

                {/* Parent & Status */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={labelStyle}>Parent category</label>
                    <select className={`w-full px-3 py-2.5 rounded-lg border outline-none text-[13px] font-medium transition-colors cursor-pointer ${inputBg}`}>
                      <option>Computer Science</option>
                      <option>Engineering</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelStyle}>Status <span className="text-red-500">*</span></label>
                    <select className={`w-full px-3 py-2.5 rounded-lg border outline-none text-[13px] font-medium transition-colors cursor-pointer ${inputBg}`}>
                      <option>Active</option>
                      <option>Hidden</option>
                    </select>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className={labelStyle}>Description</label>
                  <textarea rows="3" defaultValue="Research and applied methods in machine learning, intelligent systems, responsible AI and computational decision-making." className={`w-full px-3 py-2.5 rounded-lg border outline-none text-[13px] font-medium transition-colors resize-none ${inputBg}`}></textarea>
                  <p className={`text-[10px] font-medium mt-1.5 ${textMuted}`}>Shown in category discovery and used by editorial teams.</p>
                </div>

                {/* Display Order & Visibility */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={labelStyle}>Display order</label>
                    <input type="number" defaultValue="10" className={`w-full px-3 py-2.5 rounded-lg border outline-none text-[13px] font-medium transition-colors ${inputBg}`} />
                    <p className={`text-[10px] font-medium mt-1 ${textMuted}`}>Lower numbers appear first.</p>
                  </div>
                  <div>
                    <label className={labelStyle}>Journal visibility</label>
                    <select className={`w-full px-3 py-2.5 rounded-lg border outline-none text-[13px] font-medium transition-colors cursor-pointer ${inputBg}`}>
                      <option>Visible</option>
                      <option>Hidden</option>
                    </select>
                  </div>
                </div>

                {/* Checkbox */}
                <label className="flex items-center gap-2 cursor-pointer pt-2">
                  <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#7A1849]" />
                  <span className={`text-[12px] font-bold ${textMain}`}>Make this category available for new and existing manuscripts</span>
                </label>
                <p className={`text-[10px] font-medium ${textMuted}`}>No manuscripts are assigned automatically.</p>
              </div>

              {/* Footer Actions */}
              <div className={`flex justify-end gap-3 mt-8 pt-5 border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-100'}`}>
                <button className={`px-5 py-2.5 rounded-lg text-[12px] font-bold border transition-colors ${isDarkMode ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-200 text-gray-700 hover:bg-gray-50 bg-white'}`}>
                  Cancel
                </button>
                <button className="bg-[#7A1849] text-white px-5 py-2.5 rounded-lg text-[12px] font-bold hover:bg-[#5E1136] transition-colors shadow-sm flex items-center gap-2">
                  <PlusOutlined /> Create category
                </button>
              </div>
            </div>
          </div>

          {/* Right Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Preview */}
            <div className={`p-6 rounded-xl border shadow-sm ${bgCard}`}>
              <p className={`text-[10px] font-bold tracking-[0.1em] uppercase mb-4 ${textMuted}`}>Category preview</p>
              <p className={`text-[11px] font-medium mb-1 ${textMuted}`}>Journals / Computer Science</p>
              <h3 className={`text-[20px] font-bold tracking-tight mb-2 ${textMain}`}>Artificial Intelligence</h3>
              <p className={`text-[12px] font-medium leading-relaxed mb-5 ${textMuted}`}>Research and applied methods in machine learning, intelligent systems, responsible AI and computational decision-making.</p>
              
              <div className={`flex justify-between items-center pt-4 border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-100'}`}>
                <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold ${isDarkMode ? 'bg-green-900/20 text-green-400' : 'bg-[#F0FDF4] text-[#15803D]'}`}>Active</span>
                <p className={`text-[10px] font-medium ${textMuted}`}>0 manuscripts</p>
              </div>
            </div>

            {/* Guidelines */}
            <div className={`p-6 rounded-xl border shadow-sm ${bgCard}`}>
              <h3 className={`text-[14px] font-bold tracking-tight mb-3 ${textMain}`}>Category guidelines</h3>
              <p className={`text-[11px] font-medium leading-relaxed mb-3 ${textMuted}`}>Choose one primary subject and use a parent category to keep the journal hierarchy simple.</p>
              <p className={`text-[11px] font-medium leading-relaxed ${textMuted}`}>Slugs must be unique, lowercase and hyphen-separated. Avoid changing a slug after manuscripts are published.</p>
              
              {/* Selected Parent Info */}
              <div className={`mt-5 p-3 rounded-lg border ${isDarkMode ? 'bg-[#2A2A2A] border-[#3D3D3D]' : 'bg-[#FAFAFA] border-gray-100'}`}>
                <p className={`text-[10px] font-bold mb-0.5 ${textMuted}`}>Selected parent</p>
                <p className={`text-[12px] font-bold ${textMain}`}>Computer Science <span className={`font-medium ${textMuted}`}>· 9 manuscripts</span></p>
              </div>

              {/* Visible Warning */}
              <div className={`p-3 rounded-lg border flex items-start gap-2 mt-4 ${isDarkMode ? 'bg-[#2A1C0F] border-[#4A3018]' : 'bg-[#FFF8EB] border-[#FDE6BA]'}`}>
                <ExclamationCircleFilled className="text-[#B45309] text-[12px] mt-0.5" />
                <div>
                  <p className={`text-[11px] font-bold ${isDarkMode ? 'text-[#FBBF24]' : 'text-[#B45309]'}`}>Visible after creation</p>
                  <p className={`text-[10px] font-medium mt-0.5 ${isDarkMode ? 'text-[#FBBF24]/70' : 'text-[#B45309]/80'}`}>The new category will appear beneath Computer Science in the journal.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer note */}
        <div className={`mt-8 pt-4 border-t flex flex-col md:flex-row justify-between items-center gap-2 text-[10px] font-medium ${isDarkMode ? 'border-gray-800 text-gray-500' : 'border-gray-100 text-gray-400'}`}>
          <p>ORA Academic · Journal operations</p>
          <p>All times in UTC-0</p>
        </div>
      </div>
    </AdminLayout>
  );
}