import React from 'react';
import { useLocation } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext'; // Import Context
import { WarningOutlined, ClockCircleOutlined } from '@ant-design/icons';

export default function Dashboard() {
  // Grab the theme directly from Context
  const { isDarkMode } = useTheme();
  
  const location = useLocation();
  const isAuthor = location.pathname.includes('author');
  const roleName = isAuthor ? 'Author' : 'Journal Admin';
  const userName = isAuthor ? 'Abebe' : 'Lena';

  // Apply the theme classes dynamically
  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-200';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const borderCol = isDarkMode ? 'border-[#2D2D2D]' : 'border-gray-200';

  return (
    <AdminLayout>
      <div className="max-w-[1300px] mx-auto">
        
        {/* Page Header */}
        <div className="flex justify-between items-end mb-6">
          <div>
            <p className={`text-[10px] font-bold tracking-widest uppercase mb-1 ${textMuted}`}>Workspace / Dashboard</p>
            <h1 className={`text-[28px] font-bold flex items-center gap-3 ${textMain}`}>
              Good morning, {userName}
              <span className="text-[9px] bg-[#FCF7F9] text-[#7A1C39] px-2 py-0.5 rounded font-bold uppercase tracking-wider border border-[#7A1C39]/20">
                {roleName}
              </span>
            </h1>
            <p className={`text-[13px] mt-1 ${textMuted}`}>Here's the current health of ORA Academic and its journal community.</p>
          </div>
          <div className="flex gap-3">
            <button className={`px-4 py-2 rounded-lg text-[13px] font-semibold border transition-colors ${isDarkMode ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}>
              Sep 1 – Sep 25, 2026
            </button>
            <button className="bg-[#7A1C39] text-white px-4 py-2 rounded-lg text-[13px] font-semibold hover:bg-[#531324] transition-colors shadow-sm">
              Admin report
            </button>
          </div>
        </div>

        {/* Top Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {[
            { title: 'Active Users', value: '1,284', sub: '+48 this month', color: 'text-green-500' },
            { title: 'New Submissions', value: '86', sub: '+12% vs last month', color: 'text-gray-500' },
            { title: 'Active Editors', value: '64', sub: '7 invited this week', color: 'text-gray-500' },
            { title: 'System Alerts', value: '3', sub: '1 requires action', color: 'text-red-500' },
          ].map((stat, i) => (
            <div key={i} className={`p-5 rounded-xl border shadow-sm transition-colors ${bgCard}`}>
              <p className={`text-[12px] font-bold mb-2 ${textMuted}`}>{stat.title}</p>
              <h3 className={`text-3xl font-bold mb-1 ${textMain}`}>{stat.value}</h3>
              <p className={`text-[11px] font-medium ${stat.color}`}>{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          
          {/* Chart */}
          <div className={`lg:col-span-2 p-6 rounded-xl border shadow-sm transition-colors ${bgCard}`}>
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className={`text-[16px] font-bold ${textMain}`}>Submissions overview</h2>
                <p className={`text-[12px] ${textMuted}`}>Monthly volume by status</p>
              </div>
              <a href="#" className="text-[12px] font-bold text-[#7A1C39] hover:underline">Open reports</a>
            </div>
            
            <div className="flex items-end justify-between h-[180px] mb-4 gap-4 px-2">
              {[45, 60, 35, 55, 65, 90].map((height, i) => (
                <div key={i} className="w-full flex flex-col justify-end">
                  <div className="w-full bg-[#7A1C39] rounded-t-sm hover:bg-[#531324] transition-colors" style={{ height: `${height}%` }}></div>
                </div>
              ))}
            </div>
            <div className={`flex justify-between text-[11px] font-medium border-t pt-3 px-2 transition-colors ${textMuted} ${borderCol}`}>
              <span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              <span className="text-[10px] font-bold bg-[#E1EFFE] text-[#1E429F] px-2.5 py-1 rounded">86 New</span>
              <span className="text-[10px] font-bold bg-[#FDF6B2] text-[#723B13] px-2.5 py-1 rounded">142 In review</span>
              <span className="text-[10px] font-bold bg-[#DEF7EC] text-[#03543F] px-2.5 py-1 rounded">39 Accepted</span>
              <span className="text-[10px] font-bold bg-[#FDE8E8] text-[#9B1C1C] px-2.5 py-1 rounded">21 Declined</span>
            </div>
          </div>

          {/* User Activity */}
          <div className={`p-6 rounded-xl border shadow-sm transition-colors ${bgCard}`}>
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className={`text-[16px] font-bold ${textMain}`}>User activity</h2>
                <p className={`text-[12px] ${textMuted}`}>Last 30 days</p>
              </div>
              <a href="#" className="text-[12px] font-bold text-[#7A1C39] hover:underline">Manage users</a>
            </div>

            <div className="space-y-3">
              {[
                { role: 'Authors', users: '892 active users', pct: '69%', bg: 'bg-[#FCF7F9]', text: 'text-[#7A1C39]' },
                { role: 'Reviewers', users: '238 active users', pct: '19%', bg: isDarkMode ? 'bg-[#2A2A2A]' : 'bg-gray-50', text: textMuted },
                { role: 'Editors', users: '64 active users', pct: '5%', bg: isDarkMode ? 'bg-[#2A2A2A]' : 'bg-gray-50', text: textMuted },
                { role: 'Readers', users: '90 active users', pct: '7%', bg: isDarkMode ? 'bg-[#2A2A2A]' : 'bg-gray-50', text: textMuted },
              ].map((item, i) => (
                <div key={i} className={`flex justify-between items-center p-3 rounded-lg border shadow-sm transition-colors ${isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-100'}`}>
                  <div>
                    <p className={`text-[12px] font-bold ${textMain}`}>{item.role}</p>
                    <p className={`text-[10px] ${textMuted}`}>{item.users}</p>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-1 rounded ${item.bg} ${item.text}`}>
                    {item.pct}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className={`p-6 rounded-xl border shadow-sm transition-colors ${bgCard}`}>
             <div className="flex justify-between items-center mb-5">
              <h2 className={`text-[16px] font-bold ${textMain}`}>Alerts</h2>
              <a href="#" className="text-[12px] font-bold text-[#7A1C39] hover:underline">View all</a>
            </div>
            <div className="space-y-3">
              <div className={`border rounded-lg p-3 flex justify-between items-center transition-colors ${isDarkMode ? 'bg-red-900/10 border-red-900/30' : 'bg-[#FDF2F2] border-red-100'}`}>
                <div>
                  <h3 className={`text-[12px] font-bold mb-0.5 flex items-center gap-1.5 ${isDarkMode ? 'text-red-400' : 'text-red-700'}`}>
                    <WarningOutlined /> Crossref deposit retry required
                  </h3>
                  <p className={`text-[11px] ${isDarkMode ? 'text-red-300' : 'text-red-500'}`}>Two DOI records failed schema validation.</p>
                </div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${isDarkMode ? 'bg-white text-red-600 border-red-200' : 'bg-white text-red-600 border-red-200'}`}>Critical</span>
              </div>
              <div className={`border rounded-lg p-3 flex justify-between items-center transition-colors ${isDarkMode ? 'bg-yellow-900/10 border-yellow-900/30' : 'bg-[#FDF8E8] border-yellow-100'}`}>
                <div>
                  <h3 className={`text-[12px] font-bold mb-0.5 flex items-center gap-1.5 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-700'}`}>
                    <ClockCircleOutlined /> Editorial coverage gap
                  </h3>
                  <p className={`text-[11px] ${isDarkMode ? 'text-yellow-300' : 'text-yellow-600'}`}>Climate Policy has no editor assigned next week.</p>
                </div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${isDarkMode ? 'bg-white text-yellow-600 border-yellow-200' : 'bg-white text-yellow-600 border-yellow-200'}`}>Review</span>
              </div>
            </div>
          </div>

          <div className={`p-6 rounded-xl border shadow-sm transition-colors ${bgCard}`}>
            <div className="flex justify-between items-center mb-5">
              <h2 className={`text-[16px] font-bold ${textMain}`}>Recent admin activity</h2>
              <a href="#" className="text-[12px] font-bold text-[#7A1C39] hover:underline">Audit log</a>
            </div>
            <div className={`relative border-l-2 ml-2 space-y-5 ${borderCol}`}>
              {[
                { title: 'New Associate Editor invited', desc: 'Dr. Simone Keller invited to Materials Science.', time: '24 minutes ago', color: 'bg-[#7A1C39]' },
                { title: 'Category permissions updated', desc: 'Production access granted to two section editors.', time: '2 hours ago', color: 'bg-green-500' },
                { title: 'Submission template revised', desc: 'Conflict of interest field is now required.', time: 'Yesterday', color: 'bg-[#7A1C39]' },
              ].map((item, i) => (
                <div key={i} className="ml-5 relative">
                  <span className={`absolute -left-[27px] top-1 w-2.5 h-2.5 rounded-full border-2 transition-colors ${isDarkMode ? 'border-[#1E1E1E]' : 'border-white'} ${item.color}`}></span>
                  <h3 className={`text-[13px] font-bold mb-0.5 ${textMain}`}>{item.title}</h3>
                  <p className={`text-[11px] mb-1 ${textMuted}`}>{item.desc}</p>
                  <p className="text-[10px] font-medium text-gray-400">{item.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}