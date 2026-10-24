import React, { useState } from 'react';
import AdminLayout, { sidebarPresets } from '../../layouts/AdminLayout'; // Import presets
import { useTheme } from '../../context/ThemeContext';
import { 
  SaveOutlined, DollarOutlined, BellOutlined, 
  MailOutlined, BookOutlined, FileTextOutlined, 
  BgColorsOutlined, CheckCircleFilled 
} from '@ant-design/icons';

export default function Settings() {
  const { isDarkMode, sidebarTheme, setSidebarTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('Display'); // Default to Display

  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)]';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const borderCol = isDarkMode ? 'border-[#2D2D2D]' : 'border-gray-100';
  const inputBg = isDarkMode ? 'bg-[#1A1A1A] border-[#3D3D3D] text-white focus:ring-[#7A1849]' : 'bg-gray-50/50 border-gray-200 text-gray-900 focus:bg-white focus:ring-[#7A1849]';
  
  const labelStyle = `block text-[12px] font-bold mb-2 ${textMain}`;
  const sectionTitle = `text-[17px] font-bold mb-1 ${textMain}`;
  const sectionDesc = `text-[13px] mb-6 ${textMuted}`;

  const Toggle = ({ defaultChecked }) => (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" className="sr-only peer" defaultChecked={defaultChecked} />
      <div className={`w-11 h-6 rounded-full peer transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-600 peer-checked:bg-[#7A1849]' : 'bg-gray-200 peer-checked:bg-[#7A1849]'
      }`}></div>
      <div className="absolute left-[2px] top-[2px] bg-white border border-gray-300 rounded-full h-5 w-5 transition-all duration-300 peer-checked:translate-x-full peer-checked:border-white shadow-sm"></div>
    </label>
  );

  return (
    <AdminLayout>
      <div className="max-w-[1200px] mx-auto animate-fade-in-up">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
            <p className={`text-[11px] font-bold tracking-widest uppercase mb-1.5 ${textMuted}`}>Workspace / Journal Admin / Settings</p>
            <h1 className={`text-3xl font-serif font-bold ${textMain}`}>Journal Settings</h1>
            <p className={`text-[14px] mt-1.5 ${textMuted}`}>Manage appearance, publication fees, and review rules.</p>
          </div>
          <button className="bg-[#7A1849] text-white px-6 py-3 rounded-xl text-[14px] font-bold hover:bg-[#5E1136] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2">
            <SaveOutlined /> Save Settings
          </button>
        </div>

        {/* Tabs */}
        <div className={`flex gap-2 border-b mb-8 pb-px overflow-x-auto ${borderCol}`}>
          {[
            { id: 'Display', icon: <BgColorsOutlined />, label: 'Display' },
            { id: 'Journal Identity', icon: <BookOutlined />, label: 'Identity' },
            { id: 'Submission & Review', icon: <FileTextOutlined />, label: 'Submission' },
            { id: 'Publication Fees', icon: <DollarOutlined />, label: 'Fees' },
            { id: 'Notifications', icon: <BellOutlined />, label: 'Notifications' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 text-[14px] font-bold transition-all border-b-2 whitespace-nowrap ${
                activeTab === tab.id 
                  ? 'text-[#7A1849] border-[#7A1849]' 
                  : `text-gray-500 border-transparent hover:text-gray-700 dark:hover:text-gray-300`
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* ================= TAB: DISPLAY ================= */}
        {activeTab === 'Display' && (
          <div className="space-y-6 animate-fade-in">
            <div className={`p-8 rounded-3xl border ${bgCard}`}>
              <div className="mb-8">
                <h2 className={sectionTitle}>Sidebar Appearance</h2>
                <p className={sectionDesc}>Choose a visual theme for the main navigation. (Applies in Light Mode only)</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {Object.entries(sidebarPresets).map(([key, preset]) => {
                  if (key === 'dark') return null; // Hide dark from picker
                  const isSelected = sidebarTheme === key;
                  
                  return (
                    <button
                      key={key}
                      onClick={() => setSidebarTheme(key)}
                      // FIXED: Removed dark hover backgrounds. Now uses subtle scale/opacity on hover.
                      className={`relative text-left p-4 rounded-2xl border-2 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg ${
                        isSelected 
                          ? 'border-[#7A1849] bg-[#FCF7F9] dark:bg-[#7A1849]/10 shadow-md' 
                          : 'border-gray-200 dark:border-gray-700 hover:border-[#7A1849]/50 shadow-sm'
                      }`}
                    >
                      <div className="flex justify-between items-center mb-3">
                        <span className={`text-[14px] font-bold ${textMain}`}>{preset.name}</span>
                        {isSelected && <CheckCircleFilled className="text-[#7A1849] text-lg" />}
                      </div>
                      
                      {/* Mini Preview */}
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
        )}

        {/* ================= TAB: JOURNAL IDENTITY ================= */}
        {activeTab === 'Journal Identity' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in">
            <div className="lg:col-span-2 space-y-6">
              <div className={`p-8 rounded-3xl border ${bgCard}`}>
                <h2 className={sectionTitle}>Journal Details</h2>
                <p className={sectionDesc}>Public information shown on the journal homepage.</p>
                
                <div className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelStyle}>Journal Name <span className="text-red-500">*</span></label>
                      <input type="text" defaultValue="ORA Academic Journal" className={`w-full px-4 py-3 rounded-xl border outline-none text-[14px] transition-all ring-offset-2 focus:ring-2 ${inputBg}`} />
                    </div>
                    <div>
                      <label className={labelStyle}>Abbreviated Title</label>
                      <input type="text" defaultValue="ORA Acad. J." className={`w-full px-4 py-3 rounded-xl border outline-none text-[14px] transition-all ring-offset-2 focus:ring-2 ${inputBg}`} />
                    </div>
                  </div>
                  <div>
                    <label className={labelStyle}>Aims and Scope</label>
                    <textarea rows="3" defaultValue="Interdisciplinary research advancing responsible science, engineering, and public impact." className={`w-full px-4 py-3 rounded-xl border outline-none text-[14px] transition-all ring-offset-2 focus:ring-2 resize-none ${inputBg}`}></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB: SUBMISSION & REVIEW ================= */}
        {activeTab === 'Submission & Review' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in">
             <div className="lg:col-span-2 space-y-6">
              <div className={`p-8 rounded-3xl border ${bgCard}`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-lg"><FileTextOutlined /></div>
                  <div>
                    <h2 className={sectionTitle}>Submission Policies</h2>
                    <p className={`text-[12px] ${textMuted}`}>Rules applied to all authors submitting to this journal.</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className={`flex justify-between items-center p-4 rounded-xl border ${borderCol}`}>
                    <div>
                      <p className={`text-[14px] font-bold ${textMain}`}>Require ORCID iD</p>
                      <p className={`text-[12px] mt-0.5 ${textMuted}`}>Authors must link their verified ORCID profile to submit.</p>
                    </div>
                    <Toggle defaultChecked />
                  </div>
                  <div className={`flex justify-between items-center p-4 rounded-xl border ${borderCol}`}>
                    <div>
                      <p className={`text-[14px] font-bold ${textMain}`}>Conflict of Interest Statement</p>
                      <p className={`text-[12px] mt-0.5 ${textMuted}`}>Require a COI statement before final submission.</p>
                    </div>
                    <Toggle defaultChecked />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB: PUBLICATION FEES ================= */}
        {activeTab === 'Publication Fees' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in">
             <div className="lg:col-span-2 space-y-6">
              <div className={`p-8 rounded-3xl border ${bgCard}`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center text-lg"><DollarOutlined /></div>
                  <div>
                    <h2 className={sectionTitle}>Article Processing Charges (APC)</h2>
                    <p className={`text-[12px] ${textMuted}`}>Fees required from authors upon acceptance.</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={labelStyle}>Standard APC</label>
                    <div className="relative">
                      <span className="absolute left-4 top-3 text-gray-500 font-bold">$</span>
                      <input type="number" defaultValue="250.00" className={`w-full pl-9 pr-4 py-3 rounded-xl border outline-none text-[14px] font-bold transition-all ${inputBg}`} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB: NOTIFICATIONS ================= */}
        {activeTab === 'Notifications' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in">
            <div className="lg:col-span-2 space-y-6">
              <div className={`p-8 rounded-3xl border ${bgCard}`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-lg"><BellOutlined /></div>
                  <div>
                    <h2 className={sectionTitle}>Journal Alerts</h2>
                    <p className={`text-[12px] ${textMuted}`}>Manage which events trigger email notifications to the editorial team.</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {[
                    { title: 'New user registrations', desc: 'Daily summary for newly verified users.', checked: true },
                    { title: 'Integration failures', desc: 'Immediate email for DOI or email failures.', checked: true },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <div>
                        <p className={`text-[14px] font-bold ${textMain}`}>{item.title}</p>
                        <p className={`text-[12px] mt-0.5 ${textMuted}`}>{item.desc}</p>
                      </div>
                      <Toggle defaultChecked={item.checked} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </AdminLayout>
  );
}