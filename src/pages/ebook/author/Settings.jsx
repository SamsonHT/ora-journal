import React, { useState } from 'react';
import EbookAuthorLayout from '../../../layouts/ebook/EbookAuthorLayout';
import { 
  SaveOutlined, BgColorsOutlined, CheckCircleFilled, 
  UserOutlined, BellOutlined, CameraOutlined, 
  FilePdfOutlined, LockOutlined, UploadOutlined,
  CloseOutlined
} from '@ant-design/icons';
import { Modal } from 'antd';
import { useTheme } from '../../../context/ThemeContext';

import { sidebarPresets } from '../../../layouts/ebook/EbookAuthorLayout';

export default function Settings() {
  const { isDarkMode, sidebarTheme, setSidebarTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('Profile');
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);

  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-200 shadow-sm';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const inputBg = isDarkMode ? 'bg-[#1A1A1A] border-[#3D3D3D] text-white focus:border-[#7A1849] focus:ring-1 focus:ring-[#7A1849]' : 'bg-gray-50/50 border-gray-300 text-gray-900 focus:bg-white focus:border-[#7A1849] focus:ring-1 focus:ring-[#7A1849]';
  const borderCol = isDarkMode ? 'border-[#2D2D2D]' : 'border-gray-200';

  const sectionTitle = `text-[15px] font-bold ${textMain}`;
  const sectionDesc = `text-[12px] mt-1 ${textMuted}`;
  const labelStyle = `block text-[11.5px] font-bold text-[#4B5563] mb-1.5 ${isDarkMode ? 'text-gray-300' : ''}`;

  return (
    <EbookAuthorLayout>
      {/* Exactly matches the max-width and padding of My Books */}
      <div className="w-full max-w-[1300px] mx-auto px-4 lg:px-6 pt-6 pb-12 font-sans text-[#1F2937]">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-4">
          <div>
            <p className={`text-[10px] font-bold text-[#6B7280] uppercase tracking-wider mb-1 ${isDarkMode ? 'text-gray-400' : ''}`}>
              Workspace / Settings
            </p>
            <h1 className={`text-[26px] font-bold text-[#111827] leading-tight mb-1 ${textMain}`}>
              Profile & Preferences
            </h1>
            <p className={`text-[13px] text-[#6B7280] ${textMuted}`}>
              Manage your author profile, account security, and workspace appearance.
            </p>
          </div>
          <button className="bg-[#7A1849] text-white px-5 py-2 rounded-lg text-[12px] font-bold hover:bg-[#531324] transition-colors shadow-sm flex items-center gap-2 shrink-0">
            <SaveOutlined /> Save Changes
          </button>
        </div>

        {/* Tabs */}
        <div className={`flex gap-6 border-b mb-6 ${borderCol}`}>
          {[
            { id: 'Profile', icon: <UserOutlined />, label: 'Profile' },
            { id: 'Display', icon: <BgColorsOutlined />, label: 'Display' },
            { id: 'Notifications', icon: <BellOutlined />, label: 'Notifications' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 pb-3 text-[12.5px] font-bold border-b-2 transition-colors ${
                activeTab === tab.id 
                  ? 'text-[#7A1849] border-[#7A1849]' 
                  : `text-gray-500 border-transparent hover:text-gray-800 dark:hover:text-gray-200`
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          
          {/* LEFT COLUMN: CONTENT */}
          <div className="lg:col-span-2 space-y-5">
            
            {/* PROFILE TAB */}
            {activeTab === 'Profile' && (
              <>
                {/* Personal Details Card */}
                <div className={`p-5 lg:p-6 rounded-xl border ${bgCard}`}>
                  <div className={`mb-5 pb-3 border-b ${borderCol}`}>
                    <h2 className={sectionTitle}>Personal Information</h2>
                    <p className={sectionDesc}>Update your personal details and public profile.</p>
                  </div>
                  
                  {/* Profile Image Upload */}
                  <div className="flex items-center gap-5 mb-6">
                    <div className="relative group">
                      <div className="w-16 h-16 rounded-full bg-[#FCF7F9] text-[#7A1849] flex items-center justify-center font-bold text-xl border-2 border-white shadow-sm overflow-hidden">
                        AM
                      </div>
                      <button className="absolute bottom-0 right-0 w-6 h-6 bg-[#7A1849] text-white rounded-full flex items-center justify-center shadow-md hover:bg-[#531324] transition-colors border-2 border-white">
                        <CameraOutlined className="text-[10px]" />
                      </button>
                    </div>
                    <div>
                      <h3 className={`text-[13px] font-bold ${textMain}`}>Profile Photo</h3>
                      <p className={`text-[11px] mb-2 ${textMuted}`}>JPG, PNG or GIF. Max size 2MB.</p>
                      <div className="flex gap-2">
                        <button className={`px-3 py-1.5 rounded-md border text-[11.5px] font-bold transition-colors ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50 bg-white'}`}>Upload New</button>
                        <button className={`px-3 py-1.5 rounded-md border text-[11.5px] font-bold text-red-500 transition-colors ${isDarkMode ? 'border-gray-600 hover:bg-gray-800' : 'border-gray-300 hover:bg-red-50 bg-white'}`}>Remove</button>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className={labelStyle}>Full Name</label>
                      <input type="text" defaultValue="Ava Morgan" className={`w-full px-3 py-2 rounded-lg border outline-none text-[13px] transition-all ${inputBg}`} />
                    </div>
                    <div>
                      <label className={labelStyle}>Professional Title</label>
                      <input type="text" defaultValue="Associate Professor" className={`w-full px-3 py-2 rounded-lg border outline-none text-[13px] transition-all ${inputBg}`} />
                    </div>
                    <div>
                      <label className={labelStyle}>Email Address <span className="text-[10px] text-gray-400 font-normal">(Cannot be changed)</span></label>
                      <input type="email" defaultValue="ava.morgan@ora.org" disabled className={`w-full px-3 py-2 rounded-lg border outline-none text-[13px] opacity-60 cursor-not-allowed ${isDarkMode ? 'bg-[#1A1A1A] border-[#3D3D3D]' : 'bg-gray-100 border-gray-200'}`} />
                    </div>
                    <div>
                      <label className={labelStyle}>ORCID iD</label>
                      <input type="text" placeholder="0000-0000-0000-0000" className={`w-full px-3 py-2 rounded-lg border outline-none text-[13px] transition-all ${inputBg}`} />
                    </div>
                  </div>
                </div>

                {/* Address & Institution Card */}
                <div className={`p-5 lg:p-6 rounded-xl border ${bgCard}`}>
                  <div className={`mb-5 pb-3 border-b ${borderCol}`}>
                    <h2 className={sectionTitle}>Address & Affiliation</h2>
                    <p className={sectionDesc}>Where you are based and your institutional ties.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className={labelStyle}>Institution / University</label>
                      <input type="text" defaultValue="Northstar Labs" className={`w-full px-3 py-2 rounded-lg border outline-none text-[13px] transition-all ${inputBg}`} />
                    </div>
                    <div>
                      <label className={labelStyle}>Department</label>
                      <input type="text" defaultValue="Department of Computer Science" className={`w-full px-3 py-2 rounded-lg border outline-none text-[13px] transition-all ${inputBg}`} />
                    </div>
                    <div className="md:col-span-2">
                      <label className={labelStyle}>Street Address</label>
                      <input type="text" defaultValue="123 Academic Way, Suite 400" className={`w-full px-3 py-2 rounded-lg border outline-none text-[13px] transition-all ${inputBg}`} />
                    </div>
                    <div>
                      <label className={labelStyle}>City</label>
                      <input type="text" defaultValue="Boston" className={`w-full px-3 py-2 rounded-lg border outline-none text-[13px] transition-all ${inputBg}`} />
                    </div>
                    <div>
                      <label className={labelStyle}>Country</label>
                      <select className={`w-full px-3 py-2 rounded-lg border outline-none text-[13px] transition-all appearance-none ${inputBg}`}>
                        <option>United States</option>
                        <option>Ethiopia</option>
                        <option>United Kingdom</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* CV Upload Card */}
                <div className={`p-5 lg:p-6 rounded-xl border ${bgCard}`}>
                  <div className="mb-4">
                    <h2 className={sectionTitle}>Curriculum Vitae (CV)</h2>
                    <p className={sectionDesc}>Upload your latest CV for reviewers and editorial board members to view.</p>
                  </div>
                  
                  <div className={`flex items-center justify-between p-3 rounded-lg border mb-4 ${isDarkMode ? 'bg-[#2A2A2A] border-[#3D3D3D]' : 'bg-gray-50 border-gray-200'}`}>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-red-50 text-red-500 flex items-center justify-center"><FilePdfOutlined /></div>
                      <div>
                        <p className={`text-[12px] font-bold ${textMain}`}>Ava_Morgan_CV_2026.pdf</p>
                        <p className={`text-[10px] ${textMuted}`}>Updated Oct 12, 2026 • 1.2 MB</p>
                      </div>
                    </div>
                    <button className="text-[11px] font-bold text-red-500 hover:underline">Remove</button>
                  </div>
                  
                  <div className={`border-2 border-dashed rounded-xl p-5 flex flex-col items-center justify-center text-center cursor-pointer transition-colors ${isDarkMode ? 'border-gray-700 hover:bg-[#2A2A2A]' : 'border-gray-300 hover:bg-[#FCF7F9]'}`}>
                    <UploadOutlined className="text-xl text-[#7A1849] mb-2" />
                    <p className={`text-[12px] font-bold ${textMain}`}>Click to upload new CV</p>
                    <p className={`text-[10px] mt-1 ${textMuted}`}>PDF or DOCX up to 10MB</p>
                  </div>
                </div>
              </>
            )}

            {/* DISPLAY TAB */}
            {activeTab === 'Display' && (
              <div className={`p-5 lg:p-6 rounded-xl border ${bgCard}`}>
                <div className={`mb-5 pb-3 border-b ${borderCol}`}>
                  <h2 className={sectionTitle}>Sidebar Theme</h2>
                  <p className={sectionDesc}>Choose a visual theme. Applies immediately in Light Mode.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {Object.entries(sidebarPresets).map(([key, preset]) => {
                    if (key === 'dark') return null;
                    const isSelected = sidebarTheme === key;
                    
                    return (
                      <button
                        key={key}
                        onClick={() => setSidebarTheme(key)}
                        className={`relative text-left p-4 rounded-xl border-2 transition-all duration-300 group hover:-translate-y-0.5 hover:shadow-md ${
                          isSelected 
                            ? 'border-[#7A1849] bg-[#FCF7F9] dark:bg-[#7A1849]/10 shadow-sm' 
                            : 'border-gray-200 dark:border-gray-700 hover:border-[#7A1849]/50'
                        }`}
                      >
                        <div className="flex justify-between items-center mb-3">
                          <span className={`text-[13px] font-bold ${textMain}`}>{preset.name}</span>
                          {isSelected && <CheckCircleFilled className="text-[#7A1849] text-base" />}
                        </div>
                        <div className={`w-full h-[60px] rounded-lg overflow-hidden border border-gray-200/20 ${preset.bg} flex shadow-inner`}>
                          <div className="w-1/3 h-full p-2 flex flex-col gap-1.5 border-r border-white/10">
                            <div className={`w-6 h-1.5 rounded-full bg-white/30 mb-0.5`}></div>
                            <div className={`w-full h-1.5 rounded-full bg-white/20`}></div>
                            <div className={`w-full h-2.5 rounded mt-0.5 ${preset.activeBg}`}></div>
                          </div>
                          <div className="flex-1 bg-white/5 p-2 flex flex-col gap-1.5">
                            <div className={`w-full h-1.5 rounded-full bg-white/10`}></div>
                            <div className={`w-2/3 h-1.5 rounded-full bg-white/10`}></div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* NOTIFICATIONS TAB */}
            {activeTab === 'Notifications' && (
              <div className={`p-5 lg:p-6 rounded-xl border ${bgCard}`}>
                <div className={`mb-5 pb-3 border-b ${borderCol}`}>
                  <h2 className={sectionTitle}>Email Notifications</h2>
                  <p className={sectionDesc}>Control which alerts you receive in your inbox.</p>
                </div>
                
                <div className="space-y-5">
                  {[
                    { t: 'Book Status Updates', d: 'Notify me when my book moves to a new production stage (e.g., Proofing, Published).', c: true },
                    { t: 'Deadline Reminders', d: 'Send a reminder 48 hours before a proof or revision deadline.', c: true },
                    { t: 'System Updates', d: 'Receive emails about platform maintenance and new features.', c: false },
                  ].map((item, i) => (
                    <div key={i} className={`flex justify-between items-center ${i !== 0 ? 'border-t border-gray-100 dark:border-gray-800 pt-5' : ''}`}>
                      <div>
                        <p className={`text-[13px] font-bold ${textMain}`}>{item.t}</p>
                        <p className={`text-[11px] ${textMuted}`}>{item.d}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer shrink-0 ml-4">
                        <input type="checkbox" className="sr-only peer" defaultChecked={item.c} />
                        <div className={`w-10 h-5 rounded-full peer transition-colors duration-300 ${isDarkMode ? 'bg-gray-600 peer-checked:bg-[#7A1849]' : 'bg-gray-200 peer-checked:bg-[#7A1849]'}`}></div>
                        <div className="absolute left-[2px] top-[2px] bg-white border border-gray-300 rounded-full h-4 w-4 transition-all duration-300 peer-checked:translate-x-full peer-checked:border-white"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* RIGHT COLUMN: SECURITY & INFO */}
          <div className="space-y-5">
            
            {/* Security / Password Card */}
            <div className={`p-5 rounded-xl border ${bgCard}`}>
              <h3 className={`text-[13.5px] font-bold mb-1.5 flex items-center gap-2 ${textMain}`}><LockOutlined className="text-[#7A1849]" /> Account Security</h3>
              <p className={`text-[11.5px] mb-4 ${textMuted}`}>Manage your password and security settings.</p>
              
              <div className={`p-3 rounded-lg border flex justify-between items-center mb-4 ${isDarkMode ? 'bg-[#2A2A2A] border-[#3D3D3D]' : 'bg-gray-50 border-gray-200'}`}>
                <span className={`text-[12px] font-bold ${textMain}`}>Password</span>
                <span className={`text-[12px] tracking-widest ${textMuted}`}>••••••••</span>
              </div>
              
              <button 
                onClick={() => setIsPasswordModalOpen(true)}
                className={`w-full py-2.5 rounded-lg border text-[12px] font-bold transition-colors ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50 bg-white'}`}
              >
                Change Password
              </button>
            </div>

            {/* Live Theme Preview */}
            <div className={`p-5 rounded-xl border sticky top-24 ${bgCard}`}>
              <h3 className={`text-[13.5px] font-bold mb-3 pb-2 border-b ${borderCol} ${textMain}`}>Live Preview</h3>
              <div className={`w-full rounded-lg overflow-hidden border border-gray-200/20 ${sidebarPresets[sidebarTheme || 'maroon'].bg} p-3 shadow-inner`}>
                <div className="flex items-center gap-2 mb-3">
                   <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[9px] font-bold text-[#7A1849]">O</div>
                   <span className={`text-[11px] font-bold ${sidebarPresets[sidebarTheme || 'maroon'].text}`}>ORA eBooks</span>
                </div>
                <div className="space-y-1">
                   <div className={`px-2 py-1.5 rounded text-[10px] font-bold ${sidebarPresets[sidebarTheme || 'maroon'].activeBg}`}>Dashboard</div>
                   <div className={`px-2 py-1.5 rounded text-[10px] font-semibold ${sidebarPresets[sidebarTheme || 'maroon'].text} opacity-80`}>Settings</div>
                </div>
              </div>
              <p className={`text-[10.5px] text-center mt-4 ${textMuted} leading-relaxed`}>
                Dark Mode automatically overrides this selection with the Midnight theme.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* CHANGE PASSWORD MODAL */}
      <Modal
        open={isPasswordModalOpen}
        onCancel={() => setIsPasswordModalOpen(false)}
        footer={null}
        width={400}
        centered
        closeIcon={<CloseOutlined className="text-gray-400 hover:text-gray-600" />}
        className={`ora-modal ${isDarkMode ? 'dark-modal' : ''}`}
      >
        <div className="pt-2 pb-2">
          <h2 className={`text-lg font-bold mb-1.5 ${textMain}`}>Change Password</h2>
          <p className={`text-[12.5px] mb-5 ${textMuted}`}>Your new password must be different from previous used passwords.</p>
          
          <div className="space-y-4 mb-7">
            <div>
              <label className={labelStyle}>Current Password</label>
              <input type="password" placeholder="Enter current password" className={`w-full px-3 py-2 rounded-lg border outline-none text-[13px] transition-all ${inputBg}`} />
            </div>
            <div>
              <label className={labelStyle}>New Password</label>
              <input type="password" placeholder="Enter new password" className={`w-full px-3 py-2 rounded-lg border outline-none text-[13px] transition-all ${inputBg}`} />
            </div>
            <div>
              <label className={labelStyle}>Confirm New Password</label>
              <input type="password" placeholder="Confirm new password" className={`w-full px-3 py-2 rounded-lg border outline-none text-[13px] transition-all ${inputBg}`} />
            </div>
          </div>

          <div className="flex gap-3 justify-end">
            <button onClick={() => setIsPasswordModalOpen(false)} className={`px-4 py-2 rounded-lg text-[12.5px] font-bold border transition-colors ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50 bg-white'}`}>Cancel</button>
            <button onClick={() => setIsPasswordModalOpen(false)} className="bg-[#7A1849] text-white px-5 py-2 rounded-lg font-bold text-[12.5px] hover:bg-[#531324] shadow-md transition-colors">Update Password</button>
          </div>
        </div>
      </Modal>

      <style dangerouslySetInnerHTML={{__html: `
        .ora-modal .ant-modal-content { border-radius: 16px !important; padding: 24px !important; }
        .dark-modal .ant-modal-content { background-color: #1E1E1E !important; border: 1px solid #2D2D2D; }
      `}} />
    </EbookAuthorLayout>
  );
}