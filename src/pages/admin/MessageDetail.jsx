import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { ArrowLeftOutlined, SendOutlined, DeleteOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';

export default function MessageDetail() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [replyText, setReplyText] = useState('');

  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-100';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const borderCol = isDarkMode ? 'border-[#2D2D2D]' : 'border-gray-100';
  const inputBg = isDarkMode ? 'bg-[#1A1A1A] border-[#3D3D3D] text-white focus:ring-[#7A1849]' : 'bg-gray-50 border-gray-200 text-gray-900 focus:bg-white focus:ring-[#7A1849]';

  return (
    <AdminLayout>
      <div className="max-w-[1000px] mx-auto">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-6">
          <div>
            <p className={`text-[11px] font-bold tracking-widest uppercase mb-1.5 ${textMuted}`}>Workspace / Messages / View</p>
            <h1 className={`text-2xl font-serif font-bold flex items-center gap-3 ${textMain}`}>
              Message Details
            </h1>
          </div>
          <Link to="/admin/messages" className={`px-4 py-2 rounded-lg text-[13px] font-bold border transition-all flex items-center gap-2 ${isDarkMode ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50 bg-white'}`}>
            <ArrowLeftOutlined /> Back to Inbox
          </Link>
        </div>

        <div className={`rounded-2xl border shadow-sm overflow-hidden ${bgCard}`}>
          
          {/* Message Header */}
          <div className={`p-6 border-b ${borderCol}`}>
            <div className="flex justify-between items-start mb-4">
              <h2 className={`text-xl font-bold ${textMain}`}>Manuscript Submission Inquiry</h2>
              <span className={`text-[12px] ${textMuted}`}>Oct 24, 2026 at 10:42 AM</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#7A1849] text-white flex items-center justify-center font-bold">
                A
              </div>
              <div>
                <p className={`text-[14px] font-bold ${textMain}`}>Dr. Alemayehu Tadesse <span className={`text-[12px] font-normal ${textMuted}`}>&lt;alemayehu@aau.edu.et&gt;</span></p>
                <p className={`text-[12px] ${textMuted}`}>to ORA Editorial Office</p>
              </div>
            </div>
          </div>

          {/* Message Body */}
          <div className="p-8">
            <p className={`text-[14px] leading-relaxed mb-4 ${textMain}`}>Dear ORA Editorial Team,</p>
            <p className={`text-[14px] leading-relaxed mb-4 ${textMain}`}>
              I am writing to inquire about the specific formatting requirements for submitting a manuscript to the <strong>ORA Climate & Resilience</strong> journal. 
            </p>
            <p className={`text-[14px] leading-relaxed mb-4 ${textMain}`}>
              I have prepared a study on indigenous soil conservation practices in the Bale Zone, and I want to ensure the metadata and reference formatting align perfectly with your platform's standards before I submit.
            </p>
            <p className={`text-[14px] leading-relaxed mb-8 ${textMain}`}>
              Could you please share the latest LaTeX template or the Word document guidelines?
            </p>
            <p className={`text-[14px] leading-relaxed ${textMain}`}>
              Best regards,<br/>
              Dr. Alemayehu Tadesse<br/>
              Addis Ababa University
            </p>
          </div>

          {/* Reply Section */}
          <div className={`p-6 border-t ${borderCol} ${isDarkMode ? 'bg-[#252525]' : 'bg-gray-50'}`}>
            <h3 className={`text-[14px] font-bold mb-3 ${textMain}`}>Reply to this message</h3>
            
            <div className="relative">
              <textarea 
                rows="4"
                placeholder="Type your reply here..."
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border outline-none ring-offset-2 focus:ring-2 resize-none text-[14px] transition-all ${inputBg}`}
              ></textarea>
              
              <div className="flex justify-between items-center mt-4">
                <button className="text-red-500 hover:text-red-700 text-[13px] font-bold flex items-center gap-1 transition-colors">
                  <DeleteOutlined /> Delete Message
                </button>
                <button 
                  onClick={() => { alert("Reply sent!"); setReplyText(""); }}
                  className="bg-[#7A1849] text-white px-6 py-2.5 rounded-xl font-bold text-[13px] hover:bg-[#5E1136] transition-all shadow-md flex items-center gap-2"
                >
                  <SendOutlined /> Send Reply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}