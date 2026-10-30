import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { 
  ArrowLeftOutlined, SendOutlined, DeleteOutlined, 
  UserOutlined, MailOutlined, PhoneOutlined, GlobalOutlined,
  HistoryOutlined, CheckCircleFilled
} from '@ant-design/icons';

export default function MessageDetail() {
  const { isDarkMode } = useTheme();
  const [replyText, setReplyText] = useState('');

  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-200';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const borderCol = isDarkMode ? 'border-[#2D2D2D]' : 'border-gray-100';
  const inputBg = isDarkMode 
    ? 'bg-[#1A1A1A] border-[#3D3D3D] text-white focus:border-[#7A1849]' 
    : 'bg-white border-gray-200 text-gray-900 focus:border-[#7A1849]';

  const conversationHistory = [
    { id: 1, subject: 'Re: Manuscript Submission Inquiry', date: 'Oct 24, 2026', time: '10:42 AM', preview: 'I am writing to inquire about the specific...', status: 'Unread', isCurrent: true },
    { id: 2, subject: 'Re: Manuscript Submission Inquiry', date: 'Oct 20, 2026', time: '02:15 PM', preview: 'Thank you for your previous response regarding...', status: 'Read', isCurrent: false },
    { id: 3, subject: 'Manuscript Submission Inquiry', date: 'Oct 15, 2026', time: '09:30 AM', preview: 'Dear ORA Editorial Team, I am writing to...', status: 'Read', isCurrent: false },
  ];

  return (
    <AdminLayout>
      <div className="max-w-[1400px] mx-auto animate-fade-in-up pb-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <p className={`text-[10px] font-bold tracking-[0.1em] uppercase mb-1.5 ${textMuted}`}>WORKSPACE / MESSAGES / VIEW</p>
            <h1 className={`text-[26px] font-bold tracking-tight ${textMain}`}>Message Details</h1>
          </div>
          <Link to="/admin/messages" className={`px-4 py-2 rounded-lg text-[12px] font-bold border transition-colors flex items-center gap-2 ${isDarkMode ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-200 text-gray-700 hover:bg-gray-50 bg-white'}`}>
            <ArrowLeftOutlined /> Back to Inbox
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Content (8 cols) */}
          <div className="lg:col-span-8">
            <div className={`rounded-xl border shadow-sm overflow-hidden ${bgCard}`}>
              
              {/* Message Header */}
              <div className={`p-6 border-b ${borderCol}`}>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-5">
                  <h2 className={`text-[18px] font-bold tracking-tight ${textMain}`}>Manuscript Submission Inquiry</h2>
                  <span className={`text-[11px] font-bold text-gray-400`}>Oct 24, 2026 at 10:42 AM</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#7A1849] text-white flex items-center justify-center font-bold text-[13px]">
                    A
                  </div>
                  <div>
                    <p className={`text-[14px] font-bold ${textMain}`}>
                      Dr. Alemayehu Tadesse <span className={`text-[12px] font-medium ${textMuted}`}>&lt;alemayehu@aau.edu.et&gt;</span>
                    </p>
                    <p className={`text-[11px] font-medium ${textMuted}`}>to ORA Editorial Office</p>
                  </div>
                </div>
              </div>

              {/* Message Body */}
              <div className="p-8">
                <p className={`text-[14px] leading-[1.8] font-medium mb-4 ${textMain}`}>Dear ORA Editorial Team,</p>
                <p className={`text-[14px] leading-[1.8] font-medium mb-4 ${textMain}`}>
                  I am writing to inquire about the specific formatting requirements for submitting a manuscript to the <strong className="font-bold">ORA Climate & Resilience</strong> journal.
                </p>
                <p className={`text-[14px] leading-[1.8] font-medium mb-4 ${textMain}`}>
                  I have prepared a study on indigenous soil conservation practices in the Bale Zone, and I want to ensure the metadata and reference formatting align perfectly with your platform's standards before I submit.
                </p>
                <p className={`text-[14px] leading-[1.8] font-medium mb-8 ${textMain}`}>
                  Could you please share the latest LaTeX template or the Word document guidelines?
                </p>
                <p className={`text-[14px] leading-[1.8] font-medium ${textMain}`}>
                  Best regards,<br/>
                  Dr. Alemayehu Tadesse<br/>
                  Addis Ababa University
                </p>
              </div>

              {/* Reply Section */}
              <div className={`p-6 border-t ${borderCol} ${isDarkMode ? 'bg-[#252525]' : 'bg-[#FAFAFA]'}`}>
                <h3 className={`text-[14px] font-bold tracking-tight mb-3 ${textMain}`}>Reply to this message</h3>
                
                <div className="relative">
                  <textarea 
                    rows="4"
                    placeholder="Type your reply here..."
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border outline-none text-[13px] font-medium resize-none transition-colors ${inputBg}`}
                  ></textarea>
                  
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 mt-4">
                    <button className="text-[#B91C1C] hover:text-[#991B1B] text-[12px] font-bold flex items-center gap-1 transition-colors">
                      <DeleteOutlined /> Delete Message
                    </button>
                    <button 
                      onClick={() => { alert("Reply sent!"); setReplyText(""); }}
                      className="bg-[#7A1849] text-white px-6 py-2.5 rounded-lg font-bold text-[12px] hover:bg-[#5E1136] transition-all shadow-sm flex items-center gap-2"
                    >
                      <SendOutlined /> Send Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Sender Info */}
            <div className={`p-6 rounded-xl border shadow-sm ${bgCard}`}>
              <h3 className={`text-[13px] font-bold tracking-tight mb-4 ${textMain}`}>Sender Information</h3>
              
              <div className="flex items-center gap-3 mb-5">
                <div className="w-14 h-14 rounded-full bg-[#FCF7F9] text-[#7A1849] flex items-center justify-center font-bold text-[16px] border border-[#7A1849]/20">A</div>
                <div>
                  <h4 className={`text-[14px] font-bold ${textMain}`}>Dr. Alemayehu Tadesse</h4>
                  <p className={`text-[11px] font-medium ${textMuted}`}>Addis Ababa University</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[12px]">
                  <MailOutlined className="text-gray-400" />
                  <span className={`font-medium ${textMuted}`}>alemayehu@aau.edu.et</span>
                </div>
                <div className="flex items-center gap-2 text-[12px]">
                  <PhoneOutlined className="text-gray-400" />
                  <span className={`font-medium ${textMuted}`}>+251 911 234 567</span>
                </div>
                <div className="flex items-center gap-2 text-[12px]">
                  <GlobalOutlined className="text-gray-400" />
                  <span className={`font-medium ${textMuted}`}>Addis Ababa, Ethiopia</span>
                </div>
              </div>
            </div>

            {/* Conversation History */}
            <div className={`p-6 rounded-xl border shadow-sm ${bgCard}`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className={`text-[13px] font-bold tracking-tight ${textMain}`}>Conversation History</h3>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${isDarkMode ? 'bg-[#2A2A2A] text-gray-400' : 'bg-gray-50 text-gray-500 border border-gray-200'}`}>{conversationHistory.length} Messages</span>
              </div>
              
              <div className={`relative border-l-2 ml-2 space-y-5 ${borderCol}`}>
                {conversationHistory.map((msg) => (
                  <div key={msg.id} className="ml-4 relative">
                    <span className={`absolute -left-[23px] top-1 w-2.5 h-2.5 rounded-full border-2 ${isDarkMode ? 'border-[#1E1E1E]' : 'border-white'} ${msg.isCurrent ? 'bg-[#7A1849]' : 'bg-gray-300'}`}></span>
                    <div className={`p-3 rounded-lg border ${msg.isCurrent ? (isDarkMode ? 'bg-[#7A1849]/10 border-[#7A1849]/30' : 'bg-[#FCF7F9] border-[#7A1849]/20') : (isDarkMode ? 'bg-[#2A2A2A] border-[#3D3D3D]' : 'bg-gray-50 border-gray-100')}`}>
                      <p className={`text-[12px] font-bold mb-0.5 ${msg.isCurrent ? 'text-[#7A1849]' : textMain}`}>{msg.subject}</p>
                      <p className={`text-[10px] font-medium mb-1.5 ${textMuted}`}>{msg.date} · {msg.time}</p>
                      <p className={`text-[11px] font-medium leading-relaxed ${textMuted}`}>{msg.preview}</p>
                      {msg.isCurrent && (
                        <span className="inline-block mt-2 text-[9px] font-bold text-[#7A1849] bg-white px-2 py-0.5 rounded border border-[#7A1849]/20">Current Message</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className={`p-6 rounded-xl border shadow-sm ${bgCard}`}>
              <h3 className={`text-[13px] font-bold tracking-tight mb-3 ${textMain}`}>Quick Actions</h3>
              <div className="space-y-2">
                <button className={`w-full py-2 rounded-lg text-[12px] font-bold border transition-colors text-left px-4 ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-200 text-gray-700 hover:bg-gray-50 bg-white'}`}>
                  Mark as Unread
                </button>
                <button className={`w-full py-2 rounded-lg text-[12px] font-bold border transition-colors text-left px-4 ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-200 text-gray-700 hover:bg-gray-50 bg-white'}`}>
                  Archive Message
                </button>
                <button className={`w-full py-2 rounded-lg text-[12px] font-bold border transition-colors text-left px-4 ${isDarkMode ? 'border-gray-600 text-red-400 hover:bg-red-900/20' : 'border-gray-200 text-red-600 hover:bg-red-50 bg-white'}`}>
                  Delete Conversation
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </AdminLayout>
  );
}