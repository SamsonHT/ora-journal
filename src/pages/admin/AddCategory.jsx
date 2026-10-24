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
  const inputBg = isDarkMode ? 'bg-[#2A2A2A] border-[#3D3D3D] text-white' : 'bg-white border-gray-300 text-gray-900';

  return (
    <AdminLayout>
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-6">
          <div>
            <p className={`text-[10px] font-bold tracking-widest uppercase mb-1 ${textMuted}`}>Workspace / Categories</p>
            <h1 className={`text-[28px] font-bold ${textMain}`}>Add new category</h1>
            <p className={`text-[13px] mt-1 ${textMuted}`}>Create a subject category for manuscript organization and journal discovery.</p>
          </div>
          <Link to="/admin/categories" className={`px-4 py-2 rounded-lg text-[13px] font-semibold border transition-colors ${isDarkMode ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50 bg-white'}`}>
            Back to categories
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Left Form */}
          <div className={`flex-1 p-6 rounded-xl border shadow-sm ${bgCard}`}>
            <h2 className={`text-[15px] font-bold mb-6 ${textMain}`}>Category details</h2>
            
            <div className="space-y-5">
              <div>
                <label className={`block text-[12px] font-bold mb-1.5 ${textMain}`}>Category name <span className="text-red-500">*</span></label>
                <input type="text" defaultValue="Artificial Intelligence" className={`w-full px-3 py-2.5 rounded-lg border outline-none text-[13px] transition-colors ${inputBg}`} />
                <p className={`text-[10px] mt-1.5 ${textMuted}`}>Use a clear, recognizable journal subject name.</p>
              </div>

              <div>
                <label className={`block text-[12px] font-bold mb-1.5 ${textMain}`}>URL slug <span className="text-red-500">*</span></label>
                <input type="text" defaultValue="artificial-intelligence" className={`w-full px-3 py-2.5 rounded-lg border outline-none text-[13px] transition-colors ${inputBg}`} />
                <p className={`text-[10px] mt-1.5 text-blue-500`}>ora.academic/journals/categories/artificial-intelligence</p>
              </div>

              <div className={`p-3 rounded-lg border flex items-center gap-3 ${isDarkMode ? 'bg-green-900/10 border-green-900/30' : 'bg-[#F2FAF5] border-green-200'}`}>
                <CheckCircleFilled className="text-green-500" />
                <div>
                  <p className={`text-[11px] font-bold ${isDarkMode ? 'text-green-400' : 'text-green-700'}`}>Name and slug are available</p>
                  <p className={`text-[10px] ${isDarkMode ? 'text-green-500/70' : 'text-green-600'}`}>No existing category uses this name or URL slug.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={`block text-[12px] font-bold mb-1.5 ${textMain}`}>Parent category</label>
                  <select className={`w-full px-3 py-2.5 rounded-lg border outline-none text-[13px] transition-colors ${inputBg}`}>
                    <option>Computer Science</option>
                    <option>Engineering</option>
                  </select>
                </div>
                <div>
                  <label className={`block text-[12px] font-bold mb-1.5 ${textMain}`}>Status <span className="text-red-500">*</span></label>
                  <select className={`w-full px-3 py-2.5 rounded-lg border outline-none text-[13px] transition-colors ${inputBg}`}>
                    <option>Active</option>
                    <option>Hidden</option>
                  </select>
                </div>
              </div>

              <div>
                <label className={`block text-[12px] font-bold mb-1.5 ${textMain}`}>Description</label>
                <textarea rows="3" defaultValue="Research and applied methods in machine learning, intelligent systems, responsible AI and computational decision-making." className={`w-full px-3 py-2.5 rounded-lg border outline-none text-[13px] transition-colors resize-none ${inputBg}`}></textarea>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={`block text-[12px] font-bold mb-1.5 ${textMain}`}>Display order</label>
                  <input type="number" defaultValue="10" className={`w-full px-3 py-2.5 rounded-lg border outline-none text-[13px] transition-colors ${inputBg}`} />
                  <p className={`text-[10px] mt-1 ${textMuted}`}>Lower numbers appear first.</p>
                </div>
                <div>
                  <label className={`block text-[12px] font-bold mb-1.5 ${textMain}`}>Journal visibility</label>
                  <select className={`w-full px-3 py-2.5 rounded-lg border outline-none text-[13px] transition-colors ${inputBg}`}>
                    <option>Visible</option>
                    <option>Hidden</option>
                  </select>
                </div>
              </div>

              <label className="flex items-center gap-2 cursor-pointer pt-2">
                <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#7A1C39]" />
                <span className={`text-[12px] font-semibold ${textMain}`}>Make this category available for new and existing manuscripts</span>
              </label>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
              <button className={`px-5 py-2.5 rounded-lg text-[13px] font-bold border transition-colors ${isDarkMode ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50 bg-white'}`}>Cancel</button>
              <button className="bg-[#7A1C39] text-white px-5 py-2.5 rounded-lg text-[13px] font-bold hover:bg-[#531324] transition-colors shadow-sm flex items-center gap-2">
                <PlusOutlined /> Create category
              </button>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-[320px] space-y-6">
            {/* Preview */}
            <div className={`p-6 rounded-xl border shadow-sm ${bgCard}`}>
              <p className={`text-[10px] font-bold tracking-widest uppercase mb-4 ${textMuted}`}>Category preview</p>
              <p className={`text-[12px] mb-1 ${textMuted}`}>Journals / Computer Science</p>
              <h3 className={`text-[20px] font-serif font-bold mb-2 ${textMain}`}>Artificial Intelligence</h3>
              <p className={`text-[12px] leading-relaxed mb-4 ${textMuted}`}>Research and applied methods in machine learning, intelligent systems, responsible AI and computational decision-making.</p>
              <div className="flex justify-between items-center">
                <span className="bg-[#DEF7EC] text-[#03543F] px-2 py-1 rounded text-[10px] font-bold">Active</span>
                <p className={`text-[10px] ${textMuted}`}>0 manuscripts</p>
              </div>
            </div>

            {/* Guidelines */}
            <div className={`p-6 rounded-xl border shadow-sm ${bgCard}`}>
              <h3 className={`text-[13px] font-bold mb-3 ${textMain}`}>Category guidelines</h3>
              <p className={`text-[11px] leading-relaxed mb-4 ${textMuted}`}>Choose one primary subject and use a parent category to keep the journal hierarchy simple.</p>
              <p className={`text-[11px] leading-relaxed mb-4 ${textMuted}`}>Slugs must be unique, lowercase and hyphen-separated. Avoid changing a slug after manuscripts are published.</p>
              
              <div className={`p-3 rounded-lg border flex items-start gap-2 mt-4 ${isDarkMode ? 'bg-yellow-900/10 border-yellow-900/30' : 'bg-[#FDF8E8] border-yellow-200'}`}>
                <ExclamationCircleFilled className="text-yellow-500 mt-0.5" />
                <div>
                  <p className={`text-[11px] font-bold ${isDarkMode ? 'text-yellow-400' : 'text-yellow-800'}`}>Visible after creation</p>
                  <p className={`text-[10px] ${isDarkMode ? 'text-yellow-500/70' : 'text-yellow-700'}`}>The new category will appear beneath Computer Science in the journal.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </AdminLayout>
  );
}