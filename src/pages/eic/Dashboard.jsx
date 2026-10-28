import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';

export default function EiCDashboard() {
  const { isDarkMode } = useTheme();
  
  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-200';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const borderCol = isDarkMode ? 'border-[#2D2D2D]' : 'border-gray-100';

  return (
    <AdminLayout>
      <div className="max-w-[1400px] mx-auto animate-fade-in-up">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <p className={`text-[10px] font-bold tracking-[0.1em] uppercase mb-1.5 ${textMuted}`}>WORKSPACE / DASHBOARD</p>
            <div className="flex items-center gap-3 mb-1">
              <h1 className={`text-[26px] font-bold tracking-tight ${textMain}`}>Good morning, Ava</h1>
              <span className="text-[9px] bg-[#7A1849] text-white px-2 py-0.5 rounded font-bold uppercase tracking-widest">Editor-in-Chief</span>
            </div>
            <p className={`text-[13px] font-medium ${textMuted}`}>Here's what's happening across your academic workspace today.</p>
          </div>
          <div className="flex gap-3">
            <button className={`px-4 py-2 rounded-lg text-[12px] font-bold border ${isDarkMode ? 'border-gray-700 text-gray-300 bg-[#1E1E1E]' : 'border-gray-200 text-gray-700 bg-white hover:bg-gray-50'}`}>
              Sep 1 – Sep 25, 2026
            </button>
          </div>
        </div>

        {/* Stats Cards (5 columns) */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
          {[
            { l: 'New Submissions', v: '38', sub: '+5 today', c: 'text-[#7A1849]' },
            { l: 'Under Screening', v: '12', sub: 'Awaiting desk decision', c: 'text-blue-600' },
            { l: 'Assigned for Review', v: '24', sub: 'Currently with peer reviewers', c: 'text-amber-600' },
            { l: 'Pending Decision', v: '8', sub: '3 require urgent final action', c: 'text-red-600' },
            { l: 'Published This Month', v: '14', sub: '+2 vs target goal', c: 'text-green-600' },
          ].map((s, i) => (
            <div key={i} className={`p-5 rounded-lg border shadow-sm flex flex-col justify-between ${bgCard}`}>
              <p className={`text-[11px] font-bold mb-3 ${textMuted}`}>{s.l}</p>
              <div>
                <h3 className={`text-[28px] font-bold tracking-tight mb-1 ${textMain}`}>{s.v}</h3>
                <p className={`text-[11px] font-bold ${s.c}`}>{s.sub}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column (8/12) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Recent EIC Activity Feed */}
            <div className={`p-6 rounded-xl border shadow-sm ${bgCard}`}>
              <div className="flex justify-between items-center mb-6">
                <h2 className={`text-[16px] font-bold tracking-tight ${textMain}`}>Recent EIC Activity Feed</h2>
                <button className="text-[12px] font-bold text-[#7A1849] hover:underline">View all logs</button>
              </div>
              
              <div className="space-y-5">
                {[
                  { title: 'Review Submitted for ORA-2026-089', desc: 'Reviewer Dr. Claire Vance recommended Major Revision', time: '25 mins ago' },
                  { title: 'Desk Rejected ORA-2026-104', desc: 'Out of scope for ORA Journal (Socio-Political impact models)', time: '2 hours ago' },
                  { title: 'New Submission received', desc: '"A Comprehensive Study of Nanotube Filters" by J. Wu', time: '3 hours ago' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="mt-1.5"><span className="block w-2 h-2 rounded-full bg-[#7A1849]"></span></div>
                    <div>
                      <h3 className={`text-[13px] font-bold mb-0.5 ${textMain}`}>{item.title}</h3>
                      <p className={`text-[12px] mb-0.5 ${textMuted}`}>{item.desc}</p>
                      <p className="text-[10px] font-medium text-gray-400">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Submission Trend Chart */}
            <div className={`p-6 rounded-xl border shadow-sm ${bgCard}`}>
              <h2 className={`text-[16px] font-bold tracking-tight mb-8 ${textMain}`}>Submission trend <span className={`text-[12px] font-normal ${textMuted}`}>· Illustrative</span></h2>
              
              <div className="flex items-end justify-between h-40 gap-2 px-4">
                {[
                  { m: 'Jan', h: 40, val: 12 }, { m: 'Feb', h: 55, val: 15 }, { m: 'Mar', h: 65, val: 18 }, 
                  { m: 'Apr', h: 70, val: 20 }, { m: 'May', h: 80, val: 22 }, { m: 'Jun', h: 95, val: 25 }
                ].map((bar, i) => (
                  <div key={i} className="flex flex-col items-center flex-1 group">
                    <div className="w-full relative flex justify-center items-end h-full mb-2">
                      <span className="absolute -top-5 text-[11px] font-bold text-gray-500">{bar.val}</span>
                      <div className="w-10 bg-[#7A1849] hover:bg-[#5E1136] transition-colors rounded-t-sm" style={{ height: `${bar.h}%` }}></div>
                    </div>
                    <span className={`text-[11px] font-medium ${textMuted}`}>{bar.m}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column (4/12) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Requires EIC Attention */}
            <div className={`p-6 rounded-xl border shadow-sm ${bgCard}`}>
              <h2 className={`text-[16px] font-bold tracking-tight mb-5 ${textMain}`}>Requires EIC Attention</h2>
              
              <div className="space-y-3">
                <div className={`p-4 rounded-lg border ${isDarkMode ? 'bg-[#2A1215] border-[#4A1D24]' : 'bg-[#FFF4F4] border-[#FCD9D9]'}`}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className={`text-[10px] font-bold ${isDarkMode ? 'text-[#F87171]' : 'text-[#B91C1C]'}`}>ORA-2026-077</span>
                    <span className={`text-[10px] font-bold uppercase ${isDarkMode ? 'text-[#F87171]' : 'text-[#B91C1C]'}`}>Urgent Action</span>
                  </div>
                  <p className={`text-[13px] font-bold mb-1 ${textMain}`}>Reinforcement learning in autonomous flight paths</p>
                  <p className={`text-[11px] font-medium ${isDarkMode ? 'text-[#F87171]' : 'text-[#B91C1C]'}`}>All 3 reviewer deadlines expired</p>
                </div>

                <div className={`p-4 rounded-lg border ${isDarkMode ? 'bg-[#2A1C0F] border-[#4A3018]' : 'bg-[#FFF8EB] border-[#FDE6BA]'}`}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className={`text-[10px] font-bold ${isDarkMode ? 'text-[#FBBF24]' : 'text-[#B45309]'}`}>ORA-2026-081</span>
                    <span className={`text-[10px] font-bold uppercase ${isDarkMode ? 'text-[#FBBF24]' : 'text-[#B45309]'}`}>Needs Decision</span>
                  </div>
                  <p className={`text-[13px] font-bold mb-1 ${textMain}`}>Micro-structural analysis of silicon anodes</p>
                  <p className={`text-[11px] font-medium ${isDarkMode ? 'text-[#FBBF24]' : 'text-[#B45309]'}`}>Discrepancy in reviews (Accept vs Reject)</p>
                </div>
              </div>
            </div>

            {/* Editorial Pipeline */}
            <div className={`p-6 rounded-xl border shadow-sm ${bgCard}`}>
              <h2 className={`text-[16px] font-bold tracking-tight mb-6 ${textMain}`}>Editorial pipeline</h2>
              
              <div className="space-y-5">
                {[
                  { l: 'Screening', v: 12, total: 38, c: 'bg-[#7A1849]' },
                  { l: 'In review', v: 24, total: 38, c: 'bg-[#7A1849]' },
                  { l: 'Decision', v: 8, total: 38, c: 'bg-[#7A1849]' },
                  { l: 'Published', v: 14, total: 38, c: 'bg-[#7A1849]' },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <span className={`text-[12px] font-medium ${textMuted}`}>{item.l}</span>
                      <span className={`text-[12px] font-bold ${textMain}`}>{item.v}</span>
                    </div>
                    <div className={`w-full h-2 rounded-full overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
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