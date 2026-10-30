import React from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { ArrowLeftOutlined, InfoCircleOutlined, CheckCircleFilled, SearchOutlined, CloseOutlined } from '@ant-design/icons';

export default function AddUser() {
  const { isDarkMode } = useTheme();
  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-200';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const inputBg = isDarkMode ? 'bg-[#2A2A2A] border-[#3D3D3D] text-white focus:ring-[#7A1849]' : 'bg-gray-50 border-gray-200 text-gray-900 focus:bg-white focus:ring-[#7A1849]';
  
  const labelStyle = `block text-[12px] font-bold mb-1.5 ${textMain}`;
  const sectionTitle = `text-[15px] font-bold mb-5 flex items-center gap-2 ${textMain}`;
  const numCircle = "w-6 h-6 rounded-full bg-[#FCF7F9] text-[#7A1849] flex items-center justify-center text-[11px] font-bold";

  return (
    <AdminLayout>
      <div className="max-w-[1300px] mx-auto">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <p className={`text-[10px] font-bold tracking-[0.1em] uppercase mb-1.5 ${textMuted}`}>Workspace / Users / Add</p>
            <h1 className={`text-[26px] font-bold tracking-tight flex items-center gap-3 ${textMain}`}>
              Create New User
              <span className="text-[9px] bg-[#FCF7F9] text-[#7A1849] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider border border-[#7A1849]/20">Admin Action</span>
            </h1>
            <p className={`text-[13px] font-medium mt-1 ${textMuted}`}>Create a journal account and assign role-based access securely.</p>
          </div>
          <Link to="/admin/users" className={`px-5 py-2.5 rounded-xl text-[13px] font-bold border transition-all flex items-center gap-2 ${isDarkMode ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50 bg-white'}`}>
            <ArrowLeftOutlined /> Back to Users
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Form Area */}
          <div className="flex-1 space-y-6">
            
            {/* Banner */}
            <div className={`p-4 rounded-xl border flex justify-between items-center ${isDarkMode ? 'bg-[#7A1849]/10 border-[#7A1849]/30' : 'bg-[#FCF7F9] border-[#7A1849]/20'}`}>
              <div className="flex items-center gap-3">
                <InfoCircleOutlined className="text-[#7A1849] text-lg" />
                <p className={`text-[13px] font-bold ${textMain}`}>Direct account creation</p>
              </div>
              <p className={`text-[12px] ${textMuted}`}>Creates account instantly with the selected status.</p>
            </div>

            {/* SECTION 1: Personal Details */}
            <div className={`p-7 rounded-2xl border shadow-sm ${bgCard}`}>
              <h2 className={sectionTitle}><span className={numCircle}>1</span> Personal details</h2>
              
              {/* Two columns per row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className={labelStyle}>Title</label>
                  <select className={`w-full px-4 py-2.5 rounded-xl border outline-none transition-all ring-offset-2 focus:ring-2 ${inputBg}`}>
                    <option>Dr.</option><option>Prof.</option><option>Mr.</option><option>Ms.</option>
                  </select>
                </div>
                <div>
                  <label className={labelStyle}>First name <span className="text-red-500">*</span></label>
                  <input type="text" defaultValue="Sofia" className={`w-full px-4 py-2.5 rounded-xl border outline-none transition-all ring-offset-2 focus:ring-2 ${inputBg}`} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className={labelStyle}>Middle name</label>
                  <input type="text" placeholder="Optional" className={`w-full px-4 py-2.5 rounded-xl border outline-none transition-all ring-offset-2 focus:ring-2 ${inputBg}`} />
                </div>
                <div>
                  <label className={labelStyle}>Last name <span className="text-red-500">*</span></label>
                  <input type="text" defaultValue="Alvarez" className={`w-full px-4 py-2.5 rounded-xl border outline-none transition-all ring-offset-2 focus:ring-2 ${inputBg}`} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className={labelStyle}>Email address <span className="text-red-500">*</span></label>
                  <input type="email" defaultValue="sofia.alvarez@uab.es" className={`w-full px-4 py-2.5 rounded-xl border outline-none transition-all ring-offset-2 focus:ring-2 ${inputBg}`} />
                </div>
                <div>
                  <label className={labelStyle}>Phone number</label>
                  <input type="tel" placeholder="+34 600 000 000" className={`w-full px-4 py-2.5 rounded-xl border outline-none transition-all ring-offset-2 focus:ring-2 ${inputBg}`} />
                </div>
              </div>
            </div>

            {/* SECTION 2: Role & Security */}
            <div className={`p-7 rounded-2xl border shadow-sm ${bgCard}`}>
              <h2 className={sectionTitle}><span className={numCircle}>2</span> Role & Security</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className={labelStyle}>Institution / Affiliation <span className="text-red-500">*</span></label>
                  <input type="text" defaultValue="Universitat Autònoma de Barcelona" className={`w-full px-4 py-2.5 rounded-xl border outline-none transition-all ring-offset-2 focus:ring-2 ${inputBg}`} />
                </div>
                <div>
                  <label className={labelStyle}>ORCID iD</label>
                  <input type="text" placeholder="0000-0000-0000-0000" className={`w-full px-4 py-2.5 rounded-xl border outline-none transition-all ring-offset-2 focus:ring-2 ${inputBg}`} />
                </div>
                <div>
                  <label className={labelStyle}>Journal role <span className="text-red-500">*</span></label>
                  <select className={`w-full px-4 py-2.5 rounded-xl border outline-none transition-all ring-offset-2 focus:ring-2 ${inputBg}`}>
                    <option>Section Editor</option><option>Reviewer</option><option>Author</option>
                  </select>
                </div>
                <div>
                  <label className={labelStyle}>Account status <span className="text-red-500">*</span></label>
                  <select className={`w-full px-4 py-2.5 rounded-xl border outline-none transition-all ring-offset-2 focus:ring-2 ${inputBg}`}>
                    <option>Active</option><option>Pending</option><option>Suspended</option>
                  </select>
                </div>
                <div>
                  <label className={labelStyle}>Username <span className="text-red-500">*</span></label>
                  <input type="text" defaultValue="sofia.alvarez" className={`w-full px-4 py-2.5 rounded-xl border outline-none transition-all ring-offset-2 focus:ring-2 ${inputBg}`} />
                </div>
                <div>
                  <label className={labelStyle}>Default password <span className="text-red-500">*</span></label>
                  <input type="password" defaultValue="••••••••" className={`w-full px-4 py-2.5 rounded-xl border outline-none transition-all ring-offset-2 focus:ring-2 ${inputBg}`} />
                </div>
              </div>

              <div className={`p-4 rounded-xl border flex items-center gap-3 ${isDarkMode ? 'bg-green-900/10 border-green-900/30' : 'bg-green-50 border-green-200'}`}>
                <CheckCircleFilled className="text-green-500 text-lg" />
                <p className={`text-[12px] font-medium ${isDarkMode ? 'text-green-400' : 'text-green-800'}`}>Role-based default password generated. You can edit this before saving.</p>
              </div>
            </div>

            {/* SECTION 3: Category Assignments */}
            <div className={`p-7 rounded-2xl border shadow-sm ${bgCard}`}>
              <h2 className={sectionTitle}><span className={numCircle}>3</span> Category & subject assignments</h2>
              
              <div>
                <label className={labelStyle}>Assign categories or subject areas</label>
                <div className={`flex items-center px-4 py-2.5 rounded-xl border mb-4 transition-all ring-offset-2 focus-within:ring-2 ${inputBg}`}>
                  <SearchOutlined className="text-gray-400 mr-3" />
                  <input type="text" placeholder="Search categories and subjects..." className="w-full outline-none bg-transparent text-[13px]" />
                </div>
                
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-[#FCF7F9] text-[#7A1849] border border-[#7A1849]/20 px-3 py-1.5 rounded-lg text-[12px] font-bold flex items-center gap-2 cursor-pointer hover:bg-[#7A1849] hover:text-white transition-colors group">
                    Climate Adaptation <CloseOutlined className="text-[10px] text-[#7A1849] group-hover:text-white" />
                  </span>
                  <span className="bg-[#FCF7F9] text-[#7A1849] border border-[#7A1849]/20 px-3 py-1.5 rounded-lg text-[12px] font-bold flex items-center gap-2 cursor-pointer hover:bg-[#7A1849] hover:text-white transition-colors group">
                    Environmental Policy <CloseOutlined className="text-[10px] text-[#7A1849] group-hover:text-white" />
                  </span>
                  <span className="bg-[#FCF7F9] text-[#7A1849] border border-[#7A1849]/20 px-3 py-1.5 rounded-lg text-[12px] font-bold flex items-center gap-2 cursor-pointer hover:bg-[#7A1849] hover:text-white transition-colors group">
                    Coastal Systems <CloseOutlined className="text-[10px] text-[#7A1849] group-hover:text-white" />
                  </span>
                </div>
                <p className={`text-[11px] ${textMuted}`}>Selected assignments are shown above. This user will only manage manuscripts within these categories.</p>
              </div>
            </div>

            {/* Footer Actions */}
            <div className={`p-5 rounded-2xl border flex justify-between items-center shadow-sm ${bgCard}`}>
              <p className={`text-[13px] font-medium ${textMuted}`}>Ready to create this journal user.</p>
              <div className="flex gap-3">
                <button className={`px-5 py-2.5 rounded-xl text-[13px] font-bold border transition-colors ${isDarkMode ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50 bg-white'}`}>Cancel</button>
                <button className="bg-[#7A1849] text-white px-6 py-2.5 rounded-xl text-[13px] font-bold hover:bg-[#5E1136] transition-all shadow-md">Create User</button>
              </div>
            </div>
          </div>

          {/* Right Sidebar Preview */}
          <div className="w-full lg:w-[320px]">
            <div className={`p-6 rounded-2xl border shadow-sm sticky top-24 ${bgCard}`}>
              <h3 className={`text-[12px] font-bold uppercase tracking-wider mb-5 ${textMuted}`}>User Preview</h3>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-[#FCF7F9] text-[#7A1849] flex items-center justify-center font-bold text-lg border border-[#7A1849]/20">SA</div>
                <div>
                  <h4 className={`text-[15px] font-bold ${textMain}`}>Dr. Sofia Alvarez</h4>
                  <p className={`text-[12px] ${textMuted}`}>sofia.alvarez@uab.es</p>
                </div>
              </div>
              <div className={`space-y-4 text-[13px] pt-5 border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-100'}`}>
                <div className="flex justify-between"><span className={textMuted}>Role</span><span className="font-bold text-[#7A1849]">Section Editor</span></div>
                <div className="flex justify-between"><span className={textMuted}>Status</span><span className="font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">Active</span></div>
                <div className="flex justify-between"><span className={textMuted}>Username</span><span className="font-medium">sofia.alvarez</span></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </AdminLayout>
  );
}