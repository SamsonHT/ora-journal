import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { 
  FileTextOutlined, ClockCircleOutlined, TeamOutlined, 
  CheckCircleOutlined, BookOutlined, ArrowRightOutlined,
  BellOutlined 
} from '@ant-design/icons';

export default function EiCDashboard() {
  const { isDarkMode } = useTheme();
  
  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-100';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const borderCol = isDarkMode ? 'border-[#2D2D2D]' : 'border-gray-100';

  return (
    <AdminLayout>
      <div className="max-w-[1300px] mx-auto animate-fade-in-up">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
            <p className={`text-[11px] font-bold tracking-widest uppercase mb-1.5 ${textMuted}`}>Workspace / Dashboard</p>
            <h1 className={`text-2xl font-serif font-bold flex items-center gap-3 ${textMain}`}>
              Good morning, Ava 
              <span className="text-[10px] bg-[#7A1849] text-white px-2.5 py-1 rounded-md font-bold uppercase tracking-wider">Editor-in-Chief</span>
            </h1>
            <p className={`text-[13px] mt-1 ${textMuted}`}>Here's what's happening across your academic workspace today.</p>
          </div>
          <div className="flex gap-3">
            <button className={`px-4 py-2 rounded-lg text-[12px] font-bold border ${isDarkMode ? 'border-gray-700 text-gray-300' : 'border-gray-300 text-gray-700 bg-white'}`}>Sep 1 – Sep 25, 2026</button>
          </div>
        </div>

        {/* Short Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {[
            { l: 'New Submissions', v: '38', sub: '+5 today', c: 'text-[#7A1849]', icon: <FileTextOutlined /> },
            { l: 'Under Screening', v: '12', sub: 'Awaiting desk decision', c: 'text-blue-500', icon: <ClockCircleOutlined /> },
            { l: 'Assigned for Review', v: '24', sub: 'Currently with peer reviewers', c: 'text-amber-500', icon: <TeamOutlined /> },
            { l: 'Pending Decision', v: '8', sub: '3 require urgent final action', c: 'text-red-500', icon: <CheckCircleOutlined /> },
            { l: 'Published This Month', v: '14', sub: '+2 vs target goal', c: 'text-green-500', icon: <BookOutlined /> },
          ].map((s, i) => (
            <div key={i} className={`p-4 rounded-xl border shadow-sm flex flex-col justify-between ${bgCard}`}>
              <div className="flex justify-between items-start mb-2">
                <p className={`text-[11px] font-bold uppercase tracking-wider ${textMuted}`}>{s.l}</p>
                <span className={`${s.c} opacity-60`}>{s.icon}</span>
              </div>
              <h3 className={`text-2xl font-bold ${s.c}`}>{s.v}</h3>
              <p className={`text-[10px] font-bold mt-1 ${s.c}`}>{s.sub}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column: Activity & Chart */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Activity Feed */}
            <div className={`p-6 rounded-2xl border shadow-sm ${bgCard}`}>
              <div className="flex justify-between items-center mb-6">
                <h2 className={`text-[16px] font-bold ${textMain}`}>Recent EIC Activity Feed</h2>
                <button className="text-[12px] font-bold text-[#7A1849] hover:underline">View all logs</button>
              </div>
              
              <div className="space-y-6">
                {[
                  { title: 'Review Submitted for ORA-2026-089', desc: 'Reviewer Dr. Claire Vance recommended Major Revision', time: '25 mins ago', color: 'bg-red-500' },
                  { title: 'Desk Rejected ORA-2026-104', desc: 'Out of scope for ORA Journal (Socio-Political impact models)', time: '2 hours ago', color: 'bg-red-400' },
                  { title: 'New Submission received', desc: '"A Comprehensive Study of Nanotube Filters" by J. Wu', time: '3 hours ago', color: 'bg-red-500' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1.5"><span className={`block w-2 h-2 rounded-full ${item.color}`}></span></div>
                    <div>
                      <h3 className={`text-[13px] font-bold mb-0.5 ${textMain}`}>{item.title}</h3>
                      <p className={`text-[12px] mb-1 ${textMuted}`}>{item.desc}</p>
                      <p className="text-[10px] font-bold text-gray-400">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Submission Trend Chart */}
            <div className={`p-6 rounded-2xl border shadow-sm ${bgCard}`}>
              <h2 className={`text-[16px] font-bold mb-6 ${textMain}`}>Submission trend <span className={`text-[12px] font-normal ${textMuted}`}>· Illustrative</span></h2>
              
              <div className="flex items-end justify-between h-48 gap-4 px-2">
                {[
                  { m: 'Jan', h: 40 }, { m: 'Feb', h: 55 }, { m: 'Mar', h: 65 }, 
                  { m: 'Apr', h: 70 }, { m: 'May', h: 80 }, { m: 'Jun', h: 95 }
                ].map((bar, i) => (
                  <div key={i} className="flex flex-col items-center flex-1">
                    <div className="w-full relative group flex justify-center items-end h-full">
                      <div className="w-10 bg-[#7A1849] rounded-t-sm hover:bg-[#5E1136] transition-colors" style={{ height: `${bar.h}%` }}>
                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-[10px] py-1 px-2 rounded transition-opacity">
                          {Math.floor(bar.h / 2)}
                        </span>
                      </div>
                    </div>
                    <span className={`text-[11px] font-bold mt-3 ${textMuted}`}>{bar.m}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Alerts & Pipeline */}
          <div className="space-y-6">
            
            {/* Requires EIC Attention */}
            <div className={`p-6 rounded-2xl border shadow-sm ${bgCard}`}>
              <h2 className={`text-[16px] font-bold mb-4 ${textMain}`}>Requires EIC Attention</h2>
              
              <div className="space-y-3">
                <div className={`p-4 rounded-xl border ${isDarkMode ? 'bg-red-900/10 border-red-900/30' : 'bg-red-50 border-red-100'}`}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] font-bold text-red-600 bg-white dark:bg-transparent px-2 py-0.5 rounded">ORA-2026-077</span>
                    <span className="text-[10px] font-bold text-red-500 uppercase">Urgent Action</span>
                  </div>
                  <p className={`text-[13px] font-bold mb-1 ${textMain}`}>Reinforcement learning in autonomous flight paths</p>
                  <p className="text-[11px] font-medium text-red-500">All 3 reviewer deadlines expired</p>
                </div>

                <div className={`p-4 rounded-xl border ${isDarkMode ? 'bg-amber-900/10 border-amber-900/30' : 'bg-amber-50 border-amber-100'}`}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] font-bold text-amber-600 bg-white dark:bg-transparent px-2 py-0.5 rounded">ORA-2026-081</span>
                    <span className="text-[10px] font-bold text-amber-600 uppercase">Needs Decision</span>
                  </div>
                  <p className={`text-[13px] font-bold mb-1 ${textMain}`}>Micro-structural analysis of silicon anodes</p>
                  <p className="text-[11px] font-medium text-amber-600">Discrepancy in reviews (Accept vs Reject)</p>
                </div>
              </div>
            </div>

            {/* Editorial Pipeline */}
            <div className={`p-6 rounded-2xl border shadow-sm ${bgCard}`}>
              <h2 className={`text-[16px] font-bold mb-6 ${textMain}`}>Editorial pipeline</h2>
              
              <div className="space-y-5">
                {[
                  { l: 'Screening', v: 12, total: 38, c: 'bg-[#7A1849]' },
                  { l: 'In review', v: 24, total: 38, c: 'bg-[#7A1849]' },
                  { l: 'Decision', v: 8, total: 38, c: 'bg-[#7A1849]' },
                  { l: 'Published', v: 14, total: 38, c: 'bg-[#7A1849]' },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className={`text-[12px] font-bold ${textMain}`}>{item.l}</span>
                      <span className={`text-[12px] font-bold ${textMuted}`}>{item.v}</span>
                    </div>
                    <div className={`w-full h-2.5 rounded-full overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                      <div className={`h-full rounded-full ${item.c}`} style={{ width: `${(item.v / item.total) * 100}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </AdminLayout>
  );
}