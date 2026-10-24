import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { 
  ArrowLeftOutlined, CheckCircleFilled, StopOutlined, 
  CloseCircleOutlined, SaveOutlined, UserOutlined, 
  MailOutlined, PhoneOutlined, BankOutlined, GlobalOutlined,
  CalendarOutlined, ClockCircleOutlined, SafetyCertificateOutlined,
  FileTextOutlined, LockOutlined, EditOutlined
} from '@ant-design/icons';

export default function ViewUser() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  
  const [showSuspendModal, setShowSuspendModal] = useState(false);
  const [userStatus, setUserStatus] = useState('Pending'); // 'Pending', 'Active', 'Suspended'
  const [rejectReason, setRejectReason] = useState('');

  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-100';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const inputBg = isDarkMode ? 'bg-[#1A1A1A] border-[#3D3D3D] text-white focus:ring-[#7A1849]' : 'bg-gray-50 border-gray-200 text-gray-900 focus:bg-white focus:ring-[#7A1849]';
  const sectionTitle = `text-[15px] font-bold mb-5 flex items-center gap-2 ${textMain}`;

  const handleApprove = () => setUserStatus('Active');
  const handleReject = () => {
    if (!rejectReason) return alert("Please provide a reason for rejection.");
    setUserStatus('Suspended');
  };
  const handleSuspend = () => {
    setUserStatus('Suspended');
    setShowSuspendModal(false);
  };

  return (
    <AdminLayout>
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
            <p className={`text-[11px] font-bold tracking-widest uppercase mb-1.5 ${textMuted}`}>Workspace / Users / View</p>
            <h1 className={`text-3xl font-serif font-bold ${textMain}`}>User Profile</h1>
          </div>
          <div className="flex gap-3">
            {/* SUSPEND BUTTON ON TOP */}
            {userStatus !== 'Suspended' && (
              <button onClick={() => setShowSuspendModal(true)} className="px-5 py-2.5 rounded-xl text-[13px] font-bold text-red-600 bg-red-50 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400 border border-red-100 dark:border-red-900/30 transition-all flex items-center gap-2 shadow-sm">
                <StopOutlined /> Suspend Account
              </button>
            )}
            <Link to="/admin/users" className={`px-5 py-2.5 rounded-xl text-[13px] font-bold border transition-all flex items-center gap-2 ${isDarkMode ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50 bg-white'}`}>
              <ArrowLeftOutlined /> Back
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT COLUMN: Detailed Info (Spans 2 columns if no approval needed, 1 if approval panel is open) */}
          <div className={`space-y-6 ${userStatus === 'Pending' ? 'lg:col-span-2' : 'lg:col-span-3'}`}>
            
            {/* Main Profile Card */}
            <div className={`p-8 rounded-2xl border shadow-sm ${bgCard}`}>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8 border-b pb-8 dark:border-gray-800">
                <div className="w-24 h-24 rounded-full bg-[#FCF7F9] text-[#7A1849] flex items-center justify-center font-bold text-3xl border-4 border-white dark:border-[#2D2D2D] shadow-md">
                  JC
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h2 className={`text-3xl font-bold ${textMain}`}>Dr. Jia Chen</h2>
                    <span className="bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider">Reviewer</span>
                  </div>
                  <p className={`text-[14px] font-medium flex items-center gap-2 ${textMuted}`}>
                    <MailOutlined /> jia.chen@nus.edu.sg
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <span className={`px-4 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-wider ${
                    userStatus === 'Active' ? 'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400' : 
                    userStatus === 'Pending' ? 'bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400' : 
                    'bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400'
                  }`}>
                    Status: {userStatus}
                  </span>
                </div>
              </div>

              {/* ALL INFORMATION GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
                
                {/* Personal Details */}
                <div>
                  <h3 className={sectionTitle}><UserOutlined className="text-[#7A1849]" /> Personal Details</h3>
                  <div className="space-y-4">
                    <div className="flex flex-col"><span className={`text-[11px] font-bold uppercase tracking-wider ${textMuted}`}>Full Name</span><span className={`text-[14px] font-medium ${textMain}`}>Dr. Jia Chen</span></div>
                    <div className="flex flex-col"><span className={`text-[11px] font-bold uppercase tracking-wider ${textMuted}`}>Email</span><span className={`text-[14px] font-medium ${textMain}`}>jia.chen@nus.edu.sg</span></div>
                    <div className="flex flex-col"><span className={`text-[11px] font-bold uppercase tracking-wider ${textMuted}`}>Phone</span><span className={`text-[14px] font-medium ${textMain}`}>+65 9123 4567</span></div>
                    <div className="flex flex-col"><span className={`text-[11px] font-bold uppercase tracking-wider ${textMuted}`}>ORCID iD</span><span className={`text-[14px] font-medium text-blue-500`}>0000-0002-1825-0097</span></div>
                  </div>
                </div>

                {/* Academic Info */}
                <div>
                  <h3 className={sectionTitle}><BankOutlined className="text-[#7A1849]" /> Academic & Affiliation</h3>
                  <div className="space-y-4">
                    <div className="flex flex-col"><span className={`text-[11px] font-bold uppercase tracking-wider ${textMuted}`}>Institution</span><span className={`text-[14px] font-medium ${textMain}`}>National University of Singapore</span></div>
                    <div className="flex flex-col"><span className={`text-[11px] font-bold uppercase tracking-wider ${textMuted}`}>Department</span><span className={`text-[14px] font-medium ${textMain}`}>Department of Computer Science</span></div>
                    <div className="flex flex-col"><span className={`text-[11px] font-bold uppercase tracking-wider ${textMuted}`}>Country</span><span className={`text-[14px] font-medium ${textMain}`}>Singapore</span></div>
                    <div className="flex flex-col"><span className={`text-[11px] font-bold uppercase tracking-wider ${textMuted}`}>Research Interests</span><span className={`text-[14px] font-medium ${textMain}`}>Machine Learning, NLP</span></div>
                  </div>
                </div>

                {/* Account & Security */}
                <div>
                  <h3 className={sectionTitle}><SafetyCertificateOutlined className="text-[#7A1849]" /> Account & Security</h3>
                  <div className="space-y-4">
                    <div className="flex flex-col"><span className={`text-[11px] font-bold uppercase tracking-wider ${textMuted}`}>Username</span><span className={`text-[14px] font-medium ${textMain}`}>jia.chen</span></div>
                    <div className="flex flex-col"><span className={`text-[11px] font-bold uppercase tracking-wider ${textMuted}`}>Registration Date</span><span className={`text-[14px] font-medium ${textMain}`}>Sep 23, 2026</span></div>
                    <div className="flex flex-col"><span className={`text-[11px] font-bold uppercase tracking-wider ${textMuted}`}>Last Login</span><span className={`text-[14px] font-medium ${textMain}`}>Today, 09:42 AM</span></div>
                    <div className="flex flex-col"><span className={`text-[11px] font-bold uppercase tracking-wider ${textMuted}`}>Two-Factor Auth</span><span className={`text-[14px] font-bold text-green-500`}>Enabled</span></div>
                  </div>
                </div>

                {/* System Information */}
                <div>
                  <h3 className={sectionTitle}><FileTextOutlined className="text-[#7A1849]" /> System Information</h3>
                  <div className="space-y-4">
                    <div className="flex flex-col"><span className={`text-[11px] font-bold uppercase tracking-wider ${textMuted}`}>User ID</span><span className={`text-[14px] font-mono ${textMain}`}>USR-2026-0923-JC</span></div>
                    <div className="flex flex-col"><span className={`text-[11px] font-bold uppercase tracking-wider ${textMuted}`}>Registered From</span><span className={`text-[14px] font-medium ${textMain}`}>Public Portal</span></div>
                    <div className="flex flex-col"><span className={`text-[11px] font-bold uppercase tracking-wider ${textMuted}`}>Role Assignment</span><span className={`text-[14px] font-medium ${textMain}`}>Reviewer</span></div>
                    <div className="flex flex-col"><span className={`text-[11px] font-bold uppercase tracking-wider ${textMuted}`}>Assigned Manuscripts</span><span className={`text-[14px] font-medium ${textMain}`}>0 (Pending Approval)</span></div>
                  </div>
                </div>

              </div>

              {/* Edit Profile Action */}
              <div className="mt-10 pt-6 border-t dark:border-gray-800 flex justify-end gap-3">
                <button className={`px-5 py-2.5 rounded-xl text-[13px] font-bold border transition-colors flex items-center gap-2 ${isDarkMode ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50 bg-white'}`}>
                  <EditOutlined /> Edit Profile
                </button>
                <button className="bg-[#7A1849] text-white px-6 py-2.5 rounded-xl text-[13px] font-bold hover:bg-[#5E1136] transition-all shadow-md flex items-center gap-2">
                  <SaveOutlined /> Save Changes
                </button>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: PENDING APPROVAL PANEL */}
          {userStatus === 'Pending' && (
            <div className="w-full lg:col-span-1">
              <div className={`p-6 rounded-2xl border shadow-lg sticky top-24 ${isDarkMode ? 'bg-[#1E1E1E] border-amber-900/50' : 'bg-white border-amber-200'}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                    <ClockCircleOutlined className="text-amber-600 dark:text-amber-400 text-lg" />
                  </div>
                  <h3 className={`text-[16px] font-bold ${textMain}`}>Approval Required</h3>
                </div>
                
                <p className={`text-[13px] leading-relaxed mb-6 ${textMuted}`}>
                  This user registered via the public portal as a **Reviewer**. They cannot access the review dashboard or be assigned manuscripts until you approve them.
                </p>

                <div className="mb-6">
                  <label className={`block text-[12px] font-bold mb-2 ${textMain}`}>Rejection Reason (Required for reject)</label>
                  <textarea 
                    rows="3" 
                    placeholder="Explain why this reviewer is being rejected..."
                    value={rejectReason}
                    onChange={(e) => setRejectReason(e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border outline-none ring-offset-2 focus:ring-2 resize-none text-[13px] transition-all ${inputBg}`}
                  ></textarea>
                </div>

                <div className="flex flex-col gap-3">
                  <button onClick={handleApprove} className="w-full bg-green-600 text-white px-5 py-3 rounded-xl font-bold text-[14px] hover:bg-green-700 transition-all shadow-md flex items-center justify-center gap-2">
                    <CheckCircleFilled /> Approve Reviewer
                  </button>
                  <button onClick={handleReject} className="w-full bg-white dark:bg-transparent border border-red-200 dark:border-red-900/50 text-red-600 dark:text-red-400 px-5 py-3 rounded-xl font-bold text-[14px] hover:bg-red-50 dark:hover:bg-red-900/20 transition-all flex items-center justify-center gap-2">
                    <CloseCircleOutlined /> Reject Application
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* SUSPEND MODAL */}
      {showSuspendModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className={`w-full max-w-md rounded-2xl shadow-2xl overflow-hidden ${isDarkMode ? 'bg-[#1E1E1E]' : 'bg-white'}`}>
            
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-4">
                <StopOutlined className="text-red-600 dark:text-red-400 text-xl" />
              </div>
              <h3 className={`text-xl font-bold mb-2 ${textMain}`}>Suspend Account?</h3>
              <p className={`text-[14px] leading-relaxed ${textMuted}`}>
                Are you sure you want to suspend Dr. Jia Chen? They will immediately lose access to the journal platform, and any active review assignments will be reverted.
              </p>
            </div>

            <div className={`p-4 border-t flex justify-end gap-3 ${isDarkMode ? 'border-gray-800 bg-[#252525]' : 'border-gray-100 bg-gray-50'}`}>
              <button onClick={() => setShowSuspendModal(false)} className={`px-5 py-2 rounded-lg text-[13px] font-bold border transition-colors ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-white bg-gray-100'}`}>
                Cancel
              </button>
              <button onClick={handleSuspend} className="px-5 py-2 rounded-lg text-[13px] font-bold text-white bg-red-600 hover:bg-red-700 transition-colors shadow-sm">
                Yes, Suspend
              </button>
            </div>

          </div>
        </div>
      )}
    </AdminLayout>
  );
}