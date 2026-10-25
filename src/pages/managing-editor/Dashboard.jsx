import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { FileTextOutlined, CheckCircleOutlined, TagsOutlined, ClockCircleOutlined } from '@ant-design/icons';

export default function MEDashboard() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-100';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';

  return (
    <AdminLayout>
      <div className="max-w-[1300px] mx-auto animate-fade-in-up">
        <div className="flex justify-between items-end mb-6">
          <div>
            <p className={`text-[11px] font-bold tracking-widest uppercase mb-1.5 ${textMuted}`}>Workspace / Managing Editor</p>
            <h1 className={`text-2xl font-serif font-bold ${textMain}`}>Good morning, Ava</h1>
            <p className={`text-[13px] mt-1 ${textMuted}`}>Here is your production and publishing overview.</p>
          </div>
          <button onClick={() => navigate('/managing-editor/pending-production')} className="bg-[#7A1849] text-white px-5 py-2.5 rounded-xl text-[13px] font-bold hover:bg-[#5E1136] shadow-md">
            Production Queue
          </button>
        </div>

        {/* Short Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { l: 'Pending Production', v: '12', c: 'text-amber-500', icon: <ClockCircleOutlined /> },
            { l: 'In Typesetting', v: '8', c: 'text-blue-500', icon: <FileTextOutlined /> },
            { l: 'Awaiting Proof', v: '4', c: 'text-[#7A1849]', icon: <CheckCircleOutlined /> },
            { l: 'Published This Month', v: '14', c: 'text-green-500', icon: <TagsOutlined /> },
          ].map((s, i) => (
            <div key={i} className={`p-4 rounded-xl border shadow-sm flex items-center justify-between ${bgCard}`}>
              <div><p className={`text-[11px] font-bold uppercase tracking-wider ${textMuted}`}>{s.l}</p><h3 className={`text-2xl font-bold mt-1 ${s.c}`}>{s.v}</h3></div>
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-opacity-10 ${s.c.replace('text-','bg-')} ${s.c}`}>{s.icon}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className={`p-6 rounded-2xl border shadow-sm ${bgCard}`}>
            <h2 className={`text-[16px] font-bold mb-4 ${textMain}`}>Recent Activity</h2>
            <div className="space-y-4">
              {[
                { t: 'Proof Approved: "Neural Networks in Healthcare"', d: 'Ready for final publication', time: '2 hours ago' },
                { t: 'Typesetting Completed: "Silicon Anodes"', d: 'Sent to author for proofing', time: '5 hours ago' },
                { t: 'New Issue Created: Vol 18, Issue 10', d: 'Assigned 4 articles', time: 'Yesterday' },
              ].map((item, i) => (
                <div key={i} className={`p-3 rounded-lg border ${isDarkMode ? 'bg-[#2A2A2A] border-[#3D3D3D]' : 'bg-gray-50'}`}>
                  <p className={`text-[13px] font-bold ${textMain}`}>{item.t}</p>
                  <p className={`text-[11px] ${textMuted}`}>{item.d} • {item.time}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`p-6 rounded-2xl border shadow-sm ${bgCard}`}>
             <h2 className={`text-[16px] font-bold mb-4 ${textMain}`}>Upcoming Deadlines</h2>
             <div className={`p-4 rounded-xl border ${isDarkMode ? 'bg-red-900/10 border-red-900/30' : 'bg-red-50 border-red-100'}`}>
                <p className={`text-[13px] font-bold text-red-600 mb-1`}>Author Proof Overdue</p>
                <p className={`text-[13px] font-bold ${textMain}`}>Quantum Computing Limits</p>
                <p className={`text-[11px] text-red-500 mt-1`}>Due 2 days ago. Send reminder.</p>
             </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}