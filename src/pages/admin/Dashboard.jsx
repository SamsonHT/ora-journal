import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { DownOutlined, WarningFilled, ClockCircleFilled } from '@ant-design/icons';

export default function Dashboard() {
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
            <div className="flex items-center gap-3">
              <h1 className={`text-[26px] font-bold tracking-tight ${textMain}`}>Good morning, Lena</h1>
              <span className="bg-[#7A1C39] text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-widest">Journal Admin</span>
            </div>
            <p className={`text-[13px] font-medium mt-1 ${textMuted}`}>Here's the current health of ORA Academic and its journal community.</p>
          </div>
          
          <div className="flex items-center gap-3">
            <button className={`px-4 py-2 rounded-lg text-[12px] font-bold border ${isDarkMode ? 'border-gray-700 text-gray-300 bg-[#1E1E1E]' : 'border-gray-200 text-gray-700 bg-white hover:bg-gray-50'}`}>
              Sep 1 – Sep 25, 2026
            </button>
            <button className="bg-[#7A1C39] text-white px-5 py-2 rounded-lg text-[12px] font-bold hover:bg-[#5E1136] transition-all shadow-sm">
              Admin report
            </button>
          </div>
        </div>

        {/* Top Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {[
            { l: 'Active Users', v: '1,284', sub: '+48 this month', c: 'text-[#15803D]' },
            { l: 'New Submissions', v: '86', sub: '+12% vs last month', c: 'text-gray-500' },
            { l: 'Active Editors', v: '64', sub: '7 invited this week', c: 'text-gray-500' },
            { l: 'System Alerts', v: '3', sub: '1 requires action', c: 'text-red-500' },
          ].map((s, i) => (
            <div key={i} className={`p-5 rounded-xl border shadow-sm ${bgCard}`}>
              <p className={`text-[11px] font-bold mb-2 ${textMuted}`}>{s.l}</p>
              <h3 className={`text-[28px] font-bold tracking-tight mb-1 ${s.l === 'Active Users' ? 'text-[#15803D]' : s.l === 'System Alerts' ? 'text-red-500' : textMain}`}>{s.v}</h3>
              <p className={`text-[11px] font-bold ${s.c}`}>{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          
          {/* Chart (8 cols) */}
          <div className={`lg:col-span-8 p-6 rounded-xl border shadow-sm ${bgCard}`}>
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className={`text-[16px] font-bold tracking-tight ${textMain}`}>Submissions overview</h2>
                <p className={`text-[12px] font-medium ${textMuted}`}>Monthly volume by status</p>
              </div>
              <button className="text-[12px] font-bold text-[#7A1C39] hover:underline">Open reports</button>
            </div>
            
            <div className="flex items-end justify-between h-[200px] mb-4 gap-4 px-2">
              {[45, 60, 35, 55, 65, 90].map((height, i) => (
                <div key={i} className="w-full flex flex-col justify-end group">
                  <div className="w-full bg-[#7A1C39] rounded-t-sm hover:bg-[#531324] transition-colors relative" style={{ height: `${height}%` }}>
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-[10px] font-bold bg-gray-800 text-white py-1 px-2 rounded transition-opacity">
                      {Math.floor(height / 3)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className={`flex justify-between text-[11px] font-bold border-t pt-3 px-2 ${textMuted} ${borderCol}`}>
              <span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              <span className="text-[10px] font-bold bg-[#EBF1FA] text-[#1A56DB] px-2.5 py-1 rounded-md">86 New</span>
              <span className="text-[10px] font-bold bg-[#FFF7ED] text-[#C2410C] px-2.5 py-1 rounded-md">142 In review</span>
              <span className="text-[10px] font-bold bg-[#F0FDF4] text-[#15803D] px-2.5 py-1 rounded-md">39 Accepted</span>
              <span className="text-[10px] font-bold bg-[#FEF2F2] text-[#B91C1C] px-2.5 py-1 rounded-md">21 Declined</span>
            </div>
          </div>

          {/* User Activity (4 cols) */}
          <div className={`lg:col-span-4 p-6 rounded-xl border shadow-sm ${bgCard}`}>
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className={`text-[16px] font-bold tracking-tight ${textMain}`}>User activity</h2>
                <p className={`text-[12px] font-medium ${textMuted}`}>Last 30 days</p>
              </div>
              <button className="text-[12px] font-bold text-[#7A1C39] hover:underline">Manage users</button>
            </div>

            <div className="space-y-3">
              {[
                { role: 'Authors', users: '892 active users', pct: '69%', bg: 'bg-[#FCF7F9]', text: 'text-[#7A1C39]' },
                { role: 'Reviewers', users: '238 active users', pct: '19%', bg: 'bg-gray-50', text: 'text-gray-500' },
                { role: 'Editors', users: '64 active users', pct: '5%', bg: 'bg-gray-50', text: 'text-gray-500' },
                { role: 'Readers', users: '90 active users', pct: '7%', bg: 'bg-gray-50', text: 'text-gray-500' },
              ].map((item, i) => (
                <div key={i} className={`flex justify-between items-center p-3 rounded-lg border ${isDarkMode ? 'bg-[#2A2A2A] border-[#3D3D3D]' : 'bg-white border-gray-100'}`}>
                  <div>
                    <p className={`text-[12px] font-bold ${textMain}`}>{item.role}</p>
                    <p className={`text-[10px] font-medium mt-0.5 ${textMuted}`}>{item.users}</p>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-md ${item.bg} ${item.text}`}>
                    {item.pct}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Alerts */}
          <div className={`p-6 rounded-xl border shadow-sm ${bgCard}`}>
             <div className="flex justify-between items-center mb-5">
              <h2 className={`text-[16px] font-bold tracking-tight ${textMain}`}>Alerts</h2>
              <button className="text-[12px] font-bold text-[#7A1C39] hover:underline">View all</button>
            </div>
            <div className="space-y-3">
              <div className={`border rounded-lg p-4 flex justify-between items-center ${isDarkMode ? 'bg-[#2A1215] border-[#4A1D24]' : 'bg-[#FFF4F4] border-[#FCD9D9]'}`}>
                <div>
                  <h3 className={`text-[12px] font-bold mb-1 flex items-center gap-1.5 ${isDarkMode ? 'text-red-400' : 'text-red-700'}`}>
                    <WarningFilled /> Crossref deposit retry required
                  </h3>
                  <p className={`text-[11px] font-medium ${isDarkMode ? 'text-red-300' : 'text-red-500'}`}>Two DOI records failed schema validation.</p>
                </div>
                <span className={`text-[10px] font-bold px-2 py-1 rounded-md border bg-white ${isDarkMode ? 'text-red-400 border-red-900/50' : 'text-red-600 border-red-200'}`}>Critical</span>
              </div>
              <div className={`border rounded-lg p-4 flex justify-between items-center ${isDarkMode ? 'bg-[#2A1C0F] border-[#4A3018]' : 'bg-[#FFF8EB] border-[#FDE6BA]'}`}>
                <div>
                  <h3 className={`text-[12px] font-bold mb-1 flex items-center gap-1.5 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-700'}`}>
                    <ClockCircleFilled /> Editorial coverage gap
                  </h3>
                  <p className={`text-[11px] font-medium ${isDarkMode ? 'text-yellow-300' : 'text-yellow-600'}`}>Climate Policy has no editor assigned next week.</p>
                </div>
                <span className={`text-[10px] font-bold px-2 py-1 rounded-md border bg-white ${isDarkMode ? 'text-yellow-400 border-yellow-900/50' : 'text-yellow-600 border-yellow-200'}`}>Review</span>
              </div>
            </div>
          </div>

          {/* Recent Admin Activity */}
          <div className={`p-6 rounded-xl border shadow-sm ${bgCard}`}>
            <div className="flex justify-between items-center mb-5">
              <h2 className={`text-[16px] font-bold tracking-tight ${textMain}`}>Recent admin activity</h2>
              <button className="text-[12px] font-bold text-[#7A1C39] hover:underline">Audit log</button>
            </div>
            <div className={`relative border-l-2 ml-2 space-y-6 ${borderCol}`}>
              {[
                { title: 'New Associate Editor invited', desc: 'Dr. Simone Keller invited to Materials Science.', time: '24 minutes ago', color: 'bg-[#7A1C39]' },
                { title: 'Category permissions updated', desc: 'Production access granted to two section editors.', time: '2 hours ago', color: 'bg-[#15803D]' },
                { title: 'Submission template revised', desc: 'Conflict of interest field is now required.', time: 'Yesterday', color: 'bg-[#7A1C39]' },
              ].map((item, i) => (
                <div key={i} className="ml-5 relative">
                  <span className={`absolute -left-[27px] top-1 w-2.5 h-2.5 rounded-full border-2 ${isDarkMode ? 'border-[#1E1E1E]' : 'border-white'} ${item.color}`}></span>
                  <h3 className={`text-[13px] font-bold mb-1 ${textMain}`}>{item.title}</h3>
                  <p className={`text-[11px] font-medium mb-1 ${textMuted}`}>{item.desc}</p>
                  <p className="text-[10px] font-bold text-gray-400">{item.time}</p>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </AdminLayout>
  );
}