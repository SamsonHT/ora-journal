import React, { useState } from 'react';
import AdminLayout, { sidebarPresets } from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { 
  SaveOutlined, DollarOutlined, BellOutlined, 
  BookOutlined, FileTextOutlined, 
  BgColorsOutlined, CheckCircleFilled, 
  LockOutlined, GlobalOutlined, SafetyCertificateOutlined,
  InfoCircleOutlined
} from '@ant-design/icons';

export default function Settings() {
  const { isDarkMode, sidebarTheme, setSidebarTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('Display');

  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-200';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const borderCol = isDarkMode ? 'border-[#2D2D2D]' : 'border-gray-100';
  const inputBg = isDarkMode 
    ? 'bg-[#1A1A1A] border-[#3D3D3D] text-white focus:border-[#7A1849]' 
    : 'bg-gray-50/50 border-gray-200 text-gray-900 focus:bg-white focus:border-[#7A1849]';
  
  const labelStyle = `block text-[12px] font-bold mb-2 ${textMain}`;
  const sectionTitle = `text-[18px] font-bold tracking-tight mb-1 ${textMain}`;
  const sectionDesc = `text-[13px] font-medium mb-6 ${textMuted}`;

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
      <div className="max-w-[1400px] mx-auto animate-fade-in-up pb-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <p className={`text-[10px] font-bold tracking-[0.1em] uppercase mb-1.5 ${textMuted}`}>WORKSPACE / JOURNAL ADMIN / SETTINGS</p>
            <h1 className={`text-[26px] font-bold tracking-tight ${textMain}`}>Journal Settings</h1>
            <p className={`text-[13px] font-medium mt-1 ${textMuted}`}>Manage appearance, publication fees, and review rules for ORA Academic.</p>
          </div>
          <button className="bg-[#7A1849] text-white px-6 py-2.5 rounded-lg text-[13px] font-bold hover:bg-[#5E1136] transition-all shadow-sm flex items-center gap-2">
            <SaveOutlined /> Save Settings
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Tabs & Content (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Tabs - ORA Brand Background */}
            <div className={`flex gap-1 overflow-x-auto p-1.5 rounded-xl bg-[#7A1849] shadow-sm`}>
              {[
                { id: 'Display', icon: <BgColorsOutlined />, label: 'Display' },
                { id: 'Journal Identity', icon: <BookOutlined />, label: 'Identity' },
                { id: 'Submission & Review', icon: <FileTextOutlined />, label: 'Submission' },
                { id: 'Publication Fees', icon: <DollarOutlined />, label: 'Fees' },
                { id: 'Notifications', icon: <BellOutlined />, label: 'Alerts' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-[12px] font-bold transition-all whitespace-nowrap ${
                    activeTab === tab.id 
                      ? 'bg-white text-[#7A1849] shadow-sm' 
                      : 'text-[#E8C5D6] hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {tab.icon} {tab.label}
                </button>
              ))}
            </div>

            {/* ================= TAB: DISPLAY ================= */}
            {activeTab === 'Display' && (
              <div className="space-y-6 animate-fade-in">
                <div className={`p-6 rounded-xl border shadow-sm ${bgCard}`}>
                  <h2 className={sectionTitle}>Sidebar Appearance</h2>
                  <p className={sectionDesc}>Choose a visual theme for the main navigation. (Applies in Light Mode only)</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {Object.entries(sidebarPresets).map(([key, preset]) => {
                      if (key === 'dark') return null;
                      const isSelected = sidebarTheme === key;
                      
                      return (
                        <button
                          key={key}
                          onClick={() => setSidebarTheme(key)}
                          className={`relative text-left p-4 rounded-xl border-2 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg ${
                            isSelected 
                              ? 'border-[#7A1849] bg-[#FCF7F9] dark:bg-[#7A1849]/10 shadow-md' 
                              : 'border-gray-200 dark:border-gray-700 hover:border-[#7A1849]/50 shadow-sm'
                          }`}
                        >
                          <div className="flex justify-between items-center mb-3">
                            <span className={`text-[13px] font-bold ${textMain}`}>{preset.name}</span>
                            {isSelected && <CheckCircleFilled className="text-[#7A1849] text-base" />}
                          </div>
                          
                          <div className={`w-full h-[70px] rounded-lg overflow-hidden border border-gray-200/20 ${preset.bg} flex shadow-inner`}>
                            <div className="w-1/3 h-full p-2 flex flex-col gap-1.5 border-r border-white/10">
                              <div className={`w-6 h-1.5 rounded-full bg-white/30 mb-0.5`}></div>
                              <div className={`w-full h-1.5 rounded-full bg-white/20`}></div>
                              <div className={`w-full h-2.5 rounded mt-1 ${preset.activeBg}`}></div>
                            </div>
                            <div className="flex-1 bg-white/5 p-2 flex flex-col gap-1.5">
                              <div className={`w-full h-1.5 rounded-full bg-white/10`}></div>
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
              <div className={`p-6 rounded-xl border shadow-sm animate-fade-in ${bgCard}`}>
                <h2 className={sectionTitle}>Journal Details</h2>
                <p className={sectionDesc}>Public information shown on the journal homepage.</p>
                
                <div className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className={labelStyle}>Journal Name <span className="text-red-500">*</span></label>
                      <input type="text" defaultValue="ORA Academic Journal" className={`w-full px-4 py-2.5 rounded-lg border outline-none text-[13px] font-medium transition-all ${inputBg}`} />
                    </div>
                    <div>
                      <label className={labelStyle}>Abbreviated Title</label>
                      <input type="text" defaultValue="ORA Acad. J." className={`w-full px-4 py-2.5 rounded-lg border outline-none text-[13px] font-medium transition-all ${inputBg}`} />
                    </div>
                  </div>
                  
                  <div>
                    <label className={labelStyle}>Aims and Scope</label>
                    <textarea rows="4" defaultValue="Interdisciplinary research advancing responsible science, engineering, and public impact." className={`w-full px-4 py-3 rounded-lg border outline-none text-[13px] font-medium transition-all resize-none ${inputBg}`}></textarea>
                  </div>

                  <div>
                    <label className={labelStyle}>ISSN</label>
                    <input type="text" defaultValue="2049-3630" className={`w-full max-w-xs px-4 py-2.5 rounded-lg border outline-none text-[13px] font-medium transition-all ${inputBg}`} />
                  </div>
                </div>
              </div>
            )}

            {/* ================= TAB: SUBMISSION & REVIEW ================= */}
            {activeTab === 'Submission & Review' && (
              <div className={`p-6 rounded-xl border shadow-sm animate-fade-in ${bgCard}`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-lg"><FileTextOutlined /></div>
                  <div>
                    <h2 className={sectionTitle}>Submission Policies</h2>
                    <p className={`text-[12px] font-medium ${textMuted}`}>Rules applied to all authors submitting to this journal.</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className={`flex justify-between items-center p-4 rounded-lg border ${borderCol}`}>
                    <div>
                      <p className={`text-[13px] font-bold ${textMain}`}>Require ORCID iD</p>
                      <p className={`text-[11px] font-medium mt-0.5 ${textMuted}`}>Authors must link their verified ORCID profile to submit.</p>
                    </div>
                    <Toggle defaultChecked />
                  </div>
                  <div className={`flex justify-between items-center p-4 rounded-lg border ${borderCol}`}>
                    <div>
                      <p className={`text-[13px] font-bold ${textMain}`}>Conflict of Interest Statement</p>
                      <p className={`text-[11px] font-medium mt-0.5 ${textMuted}`}>Require a COI statement before final submission.</p>
                    </div>
                    <Toggle defaultChecked />
                  </div>
                  <div className={`flex justify-between items-center p-4 rounded-lg border ${borderCol}`}>
                    <div>
                      <p className={`text-[13px] font-bold ${textMain}`}>Double-Blind Review</p>
                      <p className={`text-[11px] font-medium mt-0.5 ${textMuted}`}>Hide author and reviewer identities during the review process.</p>
                    </div>
                    <Toggle defaultChecked />
                  </div>
                </div>
              </div>
            )}

            {/* ================= TAB: PUBLICATION FEES ================= */}
            {activeTab === 'Publication Fees' && (
              <div className={`p-6 rounded-xl border shadow-sm animate-fade-in ${bgCard}`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center text-lg"><DollarOutlined /></div>
                  <div>
                    <h2 className={sectionTitle}>Article Processing Charges (APC)</h2>
                    <p className={`text-[12px] font-medium ${textMuted}`}>Fees required from authors upon acceptance.</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className={labelStyle}>Standard APC (USD)</label>
                    <div className="relative">
                      <span className="absolute left-4 top-3 text-gray-500 font-bold text-[13px]">$</span>
                      <input type="number" defaultValue="250.00" className={`w-full pl-9 pr-4 py-2.5 rounded-lg border outline-none text-[13px] font-bold transition-all ${inputBg}`} />
                    </div>
                  </div>
                  <div>
                    <label className={labelStyle}>Waiver Policy</label>
                    <select className={`w-full px-4 py-2.5 rounded-lg border outline-none text-[13px] font-medium transition-all cursor-pointer ${inputBg}`}>
                      <option>No waivers</option>
                      <option>Case-by-case review</option>
                      <option>Automatic for low-income countries</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* ================= TAB: NOTIFICATIONS ================= */}
            {activeTab === 'Notifications' && (
              <div className={`p-6 rounded-xl border shadow-sm animate-fade-in ${bgCard}`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-lg"><BellOutlined /></div>
                  <div>
                    <h2 className={sectionTitle}>Journal Alerts</h2>
                    <p className={`text-[12px] font-medium ${textMuted}`}>Manage which events trigger email notifications to the editorial team.</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    { title: 'New user registrations', desc: 'Daily summary for newly verified users.', checked: true },
                    { title: 'Integration failures', desc: 'Immediate email for DOI or email failures.', checked: true },
                    { title: 'Reviewer deadlines', desc: 'Notify editors when a reviewer misses a deadline.', checked: true },
                    { title: 'New submissions', desc: 'Instant notification for every new manuscript.', checked: false },
                  ].map((item, i) => (
                    <div key={i} className={`flex justify-between items-center ${i !== 0 ? `border-t pt-4 ${borderCol}` : ''}`}>
                      <div>
                        <p className={`text-[13px] font-bold ${textMain}`}>{item.title}</p>
                        <p className={`text-[11px] font-medium mt-0.5 ${textMuted}`}>{item.desc}</p>
                      </div>
                      <Toggle defaultChecked={item.checked} />
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Admin Context & Help (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Settings Context Card */}
            <div className={`p-6 rounded-xl border shadow-sm ${bgCard}`}>
              <h3 className={`text-[13px] font-bold tracking-tight mb-3 flex items-center gap-2 ${textMain}`}>
                <InfoCircleOutlined className="text-[#7A1849]" /> About Settings
              </h3>
              <p className={`text-[12px] font-medium leading-relaxed mb-4 ${textMuted}`}>
                These settings control the global behavior of ORA Academic. Changes apply immediately across all modules and are visible to authors, reviewers, and editors.
              </p>
              <div className={`p-3 rounded-lg border flex items-start gap-2 ${isDarkMode ? 'bg-[#2A1C0F] border-[#4A3018]' : 'bg-[#FFF8EB] border-[#FDE6BA]'}`}>
                <SafetyCertificateOutlined className="text-[#B45309] text-[14px] mt-0.5" />
                <p className={`text-[11px] font-medium ${isDarkMode ? 'text-[#FBBF24]' : 'text-[#B45309]'}`}>
                  All changes are logged in the audit trail for compliance.
                </p>
              </div>
            </div>

            {/* Security Quick Access */}
            <div className={`p-6 rounded-xl border shadow-sm ${bgCard}`}>
              <h3 className={`text-[13px] font-bold tracking-tight mb-3 flex items-center gap-2 ${textMain}`}>
                <LockOutlined className="text-[#7A1849]" /> Security & Access
              </h3>
              <div className="space-y-2">
                <button className={`w-full py-2.5 rounded-lg text-[12px] font-bold border text-left px-4 transition-colors ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-200 text-gray-700 hover:bg-gray-50 bg-white'}`}>
                  Change Admin Password
                </button>
                <button className={`w-full py-2.5 rounded-lg text-[12px] font-bold border text-left px-4 transition-colors ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-200 text-gray-700 hover:bg-gray-50 bg-white'}`}>
                  Manage API Keys
                </button>
                <button className={`w-full py-2.5 rounded-lg text-[12px] font-bold border text-left px-4 transition-colors ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-200 text-gray-700 hover:bg-gray-50 bg-white'}`}>
                  View Audit Log
                </button>
              </div>
            </div>

            {/* System Status */}
            <div className={`p-6 rounded-xl border shadow-sm ${isDarkMode ? 'bg-[#F0FDF4]/10 border-[#15803D]/30' : 'bg-[#F0FDF4] border-[#DCFCE7]'}`}>
              <h3 className={`text-[13px] font-bold tracking-tight mb-3 flex items-center gap-2 ${isDarkMode ? 'text-green-400' : 'text-[#15803D]'}`}>
                <CheckCircleFilled /> System Health
              </h3>
              <div className="space-y-2 text-[12px] font-medium">
                <div className="flex justify-between items-center">
                  <span className={isDarkMode ? 'text-green-400/80' : 'text-[#15803D]/80'}>API Status</span>
                  <span className={`font-bold ${isDarkMode ? 'text-green-400' : 'text-[#15803D]'}`}>Operational</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={isDarkMode ? 'text-green-400/80' : 'text-[#15803D]/80'}>Storage</span>
                  <span className={`font-bold ${isDarkMode ? 'text-green-400' : 'text-[#15803D]'}`}>82% Free</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={isDarkMode ? 'text-green-400/80' : 'text-[#15803D]/80'}>Uptime</span>
                  <span className={`font-bold ${isDarkMode ? 'text-green-400' : 'text-[#15803D]'}`}>99.9%</span>
                </div>
              </div>
            </div>

            {/* Public Destination */}
            <div className={`p-6 rounded-xl border shadow-sm ${bgCard}`}>
              <h3 className={`text-[13px] font-bold tracking-tight mb-3 flex items-center gap-2 ${textMain}`}>
                <GlobalOutlined className="text-[#7A1849]" /> Public Portal
              </h3>
              <p className={`text-[11px] font-medium mb-3 ${textMuted}`}>These settings control the public journal portal at oraresearch.org.</p>
              <button className={`text-[11px] font-bold text-[#7A1849] hover:underline flex items-center gap-1`}>
                Preview public site &rarr;
              </button>
            </div>

          </div>
        </div>
      </div>
    </AdminLayout>
  );
}