import React from 'react';
import AdminLayout, { sidebarPresets } from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { SaveOutlined, BgColorsOutlined, CheckCircleFilled } from '@ant-design/icons';

export default function AuthorSettings() {
  const { isDarkMode, sidebarTheme, setSidebarTheme } = useTheme();
  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)]';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  
  const sectionTitle = `text-[17px] font-bold mb-1 ${textMain}`;
  const sectionDesc = `text-[13px] mb-6 ${textMuted}`;

  return (
    <AdminLayout>
      <div className="max-w-[1000px] mx-auto">
        <div className="flex justify-between items-end mb-8">
          <div>
            <p className={`text-[11px] font-bold tracking-widest uppercase mb-1.5 ${textMuted}`}>Workspace / Author / Settings</p>
            <h1 className={`text-2xl font-serif font-bold ${textMain}`}>Appearance</h1>
            <p className={`text-[13px] mt-1 ${textMuted}`}>Customize how your workspace looks.</p>
          </div>
        </div>

        <div className={`p-8 rounded-3xl border ${bgCard}`}>
          <div className="mb-8">
            <h2 className={sectionTitle}>Sidebar Theme</h2>
            <p className={sectionDesc}>Choose a visual theme for your navigation. (Applies in Light Mode only)</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Object.entries(sidebarPresets).map(([key, preset]) => {
              if (key === 'dark') return null;
              const isSelected = sidebarTheme === key;
              
              return (
                <button
                  key={key}
                  onClick={() => setSidebarTheme(key)}
                  className={`relative text-left p-4 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                    isSelected 
                      ? 'border-[#7A1849] bg-[#FCF7F9] dark:bg-[#7A1849]/10 shadow-md' 
                      : 'border-gray-200 dark:border-gray-700 hover:border-[#7A1849]/50 shadow-sm'
                  }`}
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className={`text-[14px] font-bold ${textMain}`}>{preset.name}</span>
                    {isSelected && <CheckCircleFilled className="text-[#7A1849] text-lg" />}
                  </div>
                  
                  <div className={`w-full h-[80px] rounded-xl overflow-hidden border border-gray-200/20 ${preset.bg} flex shadow-inner`}>
                    <div className="w-1/3 h-full p-2.5 flex flex-col gap-1.5 border-r border-white/10">
                      <div className={`w-6 h-1.5 rounded-full bg-white/30 mb-1`}></div>
                      <div className={`w-full h-1.5 rounded-full bg-white/20`}></div>
                      <div className={`w-full h-3 rounded-md mt-1 shadow-sm ${preset.activeBg}`}></div>
                    </div>
                    <div className="flex-1 bg-white/5 p-2.5 flex flex-col gap-2">
                      <div className={`w-full h-2 rounded-full bg-white/10`}></div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}