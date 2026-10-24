import React from 'react';
import AdminLayout, { sidebarPresets } from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { 
  SaveOutlined, BgColorsOutlined, CheckCircleFilled, 
  ClockCircleOutlined, TagsOutlined, SafetyCertificateOutlined 
} from '@ant-design/icons';

export default function ReviewerSettings() {
  const { isDarkMode, sidebarTheme, setSidebarTheme } = useTheme();

  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)]';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const inputBg = isDarkMode ? 'bg-[#1A1A1A] border-[#3D3D3D] text-white' : 'bg-gray-50 border-gray-200 text-gray-900';
  const borderCol = isDarkMode ? 'border-[#2D2D2D]' : 'border-gray-100';

  const labelStyle = `block text-[12px] font-bold mb-2 ${textMain}`;
  const sectionTitle = `text-[17px] font-bold mb-1 flex items-center gap-2 ${textMain}`;
  const sectionDesc = `text-[13px] mb-6 ${textMuted}`;

  return (
    <AdminLayout>
      <div className="max-w-[1300px] mx-auto animate-fade-in-up">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
            <p className={`text-[11px] font-bold tracking-widest uppercase mb-1.5 ${textMuted}`}>Workspace / Reviewer Settings</p>
            <h1 className={`text-3xl font-serif font-bold ${textMain}`}>Preferences</h1>
            <p className={`text-[14px] mt-1.5 ${textMuted}`}>Customize your reviewing environment and notification settings.</p>
          </div>
          <button className="bg-[#7A1849] text-white px-6 py-3 rounded-xl text-[14px] font-bold hover:bg-[#5E1136] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2">
            <SaveOutlined /> Save Preferences
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT COLUMN: DISPLAY & PREFERENCES */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Theme Picker Card */}
            <div className={`p-8 rounded-3xl border ${bgCard}`}>
              <div className="mb-8">
                <h2 className={sectionTitle}><BgColorsOutlined className="text-[#7A1849]" /> Sidebar Theme</h2>
                <p className={sectionDesc}>Choose a visual theme for your navigation sidebar. The selected theme applies immediately in Light Mode.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {Object.entries(sidebarPresets).map(([key, preset]) => {
                  if (key === 'dark') return null;
                  const isSelected = sidebarTheme === key;
                  
                  return (
                    <button
                      key={key}
                      onClick={() => setSidebarTheme(key)}
                      className={`relative text-left p-5 rounded-2xl border-2 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg ${
                        isSelected 
                          ? 'border-[#7A1849] bg-[#FCF7F9] dark:bg-[#7A1849]/10 shadow-md' 
                          : 'border-gray-200 dark:border-gray-700 hover:border-[#7A1849]/50 shadow-sm'
                      }`}
                    >
                      <div className="flex justify-between items-center mb-4">
                        <span className={`text-[15px] font-bold ${textMain}`}>{preset.name}</span>
                        {isSelected && <CheckCircleFilled className="text-[#7A1849] text-xl" />}
                      </div>
                      
                      {/* Live Preview of the Sidebar */}
                      <div className={`w-full h-[100px] rounded-xl overflow-hidden border border-gray-200/20 ${preset.bg} flex shadow-inner`}>
                        <div className="w-1/3 h-full p-3 flex flex-col gap-2 border-r border-white/10">
                          <div className={`w-8 h-2 rounded-full bg-white/30 mb-1`}></div>
                          <div className={`w-full h-2 rounded-full bg-white/20`}></div>
                          <div className={`w-full h-2 rounded-full bg-white/20`}></div>
                          <div className={`w-full h-4 rounded-md mt-1 shadow-sm ${preset.activeBg}`}></div>
                        </div>
                        <div className="flex-1 bg-white/5 p-3 flex flex-col gap-2">
                          <div className={`w-full h-2 rounded-full bg-white/10`}></div>
                          <div className={`w-2/3 h-2 rounded-full bg-white/10`}></div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Reviewer Preferences Card */}
            <div className={`p-8 rounded-3xl border ${bgCard}`}>
              <h2 className={sectionTitle}><TagsOutlined className="text-[#7A1849]" /> Reviewing Preferences</h2>
              <p className={sectionDesc}>Manage your areas of expertise and preferred reviewing load.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className={labelStyle}>Primary Expertise Area</label>
                  <select className={`w-full px-4 py-3 rounded-xl border outline-none text-[14px] ${inputBg}`}>
                    <option>Artificial Intelligence & Machine Learning</option>
                    <option>Neural Networks / Diagnostics</option>
                    <option>Materials Science</option>
                  </select>
                </div>
                <div>
                  <label className={labelStyle}>Max Active Assignments</label>
                  <select className={`w-full px-4 py-3 rounded-xl border outline-none text-[14px] ${inputBg}`}>
                    <option>3 Assignments</option>
                    <option>5 Assignments</option>
                    <option>Unlimited</option>
                  </select>
                </div>
              </div>
              
              <div className="mt-6 space-y-4">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#7A1849] rounded" />
                  <span className={`text-[13px] font-medium ${textMain}`}>Email me when new manuscripts are assigned.</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#7A1849] rounded" />
                  <span className={`text-[13px] font-medium ${textMain}`}>Send me a reminder 3 days before the deadline.</span>
                </label>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: LIVE PREVIEW / INFO */}
          <div className="space-y-6">
            
            {/* Live Preview Card */}
            <div className={`p-6 rounded-2xl border shadow-sm sticky top-24 ${bgCard}`}>
              <h3 className={`text-[14px] font-bold mb-4 pb-3 border-b ${borderCol} ${textMain}`}>Live Theme Preview</h3>
              
              <div className={`w-full rounded-xl overflow-hidden border border-gray-200/20 ${sidebarPresets[sidebarTheme || 'maroon'].bg} p-4 shadow-lg`}>
                <div className="flex items-center gap-2 mb-6">
                   <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[10px] font-bold text-[#7A1849]">O</div>
                   <span className={`text-[13px] font-bold ${sidebarPresets[sidebarTheme || 'maroon'].text}`}>ORA Journal</span>
                </div>
                <div className="space-y-2">
                   <div className={`px-3 py-2 rounded-lg text-[11px] font-bold ${sidebarPresets[sidebarTheme || 'maroon'].activeBg}`}>Dashboard</div>
                   <div className={`px-3 py-2 rounded-lg text-[11px] font-semibold ${sidebarPresets[sidebarTheme || 'maroon'].text}`}>My Assignments</div>
                   <div className={`px-3 py-2 rounded-lg text-[11px] font-semibold ${sidebarPresets[sidebarTheme || 'maroon'].text}`}>Pending Review</div>
                   <div className={`px-3 py-2 rounded-lg text-[11px] font-semibold ${sidebarPresets[sidebarTheme || 'maroon'].text}`}>Settings</div>
                </div>
              </div>
              
              <p className={`text-[11px] text-center mt-6 ${textMuted}`}>
                Notice: Dark Mode automatically overrides this selection with the Midnight theme for optimal contrast.
              </p>
            </div>

            {/* System Status Info */}
            <div className={`p-6 rounded-2xl border shadow-sm ${isDarkMode ? 'bg-[#2A2A2A] border-[#3D3D3D]' : 'bg-blue-50 border-blue-100'}`}>
               <div className="flex items-center gap-2 mb-2">
                 <ClockCircleOutlined className="text-blue-500" />
                 <h3 className={`text-[13px] font-bold ${textMain}`}>System Status</h3>
               </div>
               <p className={`text-[12px] leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-blue-800'}`}>
                 Your workspace preferences are saved to your user profile and will sync across all devices you use to access the ORA platform.
               </p>
            </div>

          </div>

        </div>
      </div>
    </AdminLayout>
  );
}