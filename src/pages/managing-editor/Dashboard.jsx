import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';

export default function MEDashboard() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

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
              <span className="text-[9px] bg-[#7A1849] text-white px-2 py-0.5 rounded font-bold uppercase tracking-widest">Managing Editor</span>
            </div>
            <p className={`text-[13px] font-medium ${textMuted}`}>Keep every accepted manuscript moving smoothly toward publication.</p>
          </div>
          
          <div className="flex items-center gap-3">
            <button className={`px-4 py-2 rounded-lg text-[12px] font-bold border ${isDarkMode ? 'border-gray-700 text-gray-300 bg-[#1E1E1E]' : 'border-gray-200 text-gray-700 bg-white hover:bg-gray-50'}`}>
              Sep 1 – Sep 25, 2026
            </button>
            <button className="bg-[#7A1849] text-white px-5 py-2 rounded-lg text-[12px] font-bold hover:bg-[#5E1136] transition-all shadow-sm">
              Export report
            </button>
          </div>
        </div>

        {/* Stats Cards - Updated Colors */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className={`p-5 rounded-xl border shadow-sm ${bgCard}`}>
            <p className={`text-[11px] font-bold mb-2 ${textMuted}`}>In Production</p>
            <h3 className={`text-[32px] font-bold tracking-tight mb-1 text-[#7A1849]`}>42</h3>
            <p className={`text-[11px] font-bold text-gray-500`}>6 entered this week</p>
          </div>
          
          <div className={`p-5 rounded-xl border shadow-sm ${bgCard}`}>
            <p className={`text-[11px] font-bold mb-2 ${textMuted}`}>Awaiting Author</p>
            <h3 className={`text-[32px] font-bold tracking-tight mb-1 text-[#7A1849]`}>9</h3>
            <p className={`text-[11px] font-bold text-gray-500`}>3 overdue responses</p>
          </div>

          <div className={`p-5 rounded-xl border shadow-sm ${bgCard}`}>
            <p className={`text-[11px] font-bold mb-2 ${textMuted}`}>Proofs Ready</p>
            <h3 className={`text-[32px] font-bold tracking-tight mb-1 text-[#7A1849]`}>12</h3>
            <p className={`text-[11px] font-bold text-gray-500`}>5 due in 48 hours</p>
          </div>

          <div className={`p-5 rounded-xl border shadow-sm ${bgCard}`}>
            <p className={`text-[11px] font-bold mb-2 ${textMuted}`}>Published This Month</p>
            <h3 className={`text-[32px] font-bold tracking-tight mb-1 text-[#7A1849]`}>28</h3>
            <p className={`text-[11px] font-bold text-gray-500`}>+16% vs last month</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          
          {/* Left Column - Production Pipeline */}
          <div className={`p-6 rounded-xl border shadow-sm ${bgCard}`}>
            <div className="flex justify-between items-center mb-6">
              <h2 className={`text-[16px] font-bold tracking-tight ${textMain}`}>Production pipeline</h2>
              <button className="text-[12px] font-bold text-[#7A1849] hover:underline">View pipeline</button>
            </div>
            <p className={`text-[12px] font-medium mb-5 ${textMuted}`}>42 active manuscripts across five stages</p>

            <div className="space-y-5">
              {[
                { l: 'Copyediting', v: 14, total: 42, c: 'bg-[#7A1849]' },
                { l: 'Typesetting', v: 10, total: 42, c: 'bg-[#2563EB]' },
                { l: 'Author proof', v: 9, total: 42, c: 'bg-[#D97706]' },
                { l: 'Final quality check', v: 6, total: 42, c: 'bg-[#2563EB]' },
                { l: 'Scheduled', v: 3, total: 42, c: 'bg-[#15803D]' },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className={`text-[13px] font-medium ${textMain}`}>{item.l}</span>
                    <span className={`text-[12px] font-bold ${textMuted}`}>{item.v} manuscripts</span>
                  </div>
                  <div className={`w-full h-2 rounded-full overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    <div className={`h-full rounded-full ${item.c}`} style={{ width: `${(item.v / item.total) * 100}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Deadlines */}
          <div className={`p-6 rounded-xl border shadow-sm ${bgCard}`}>
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className={`text-[16px] font-bold tracking-tight ${textMain}`}>Deadlines</h2>
                <p className={`text-[11px] font-medium mt-0.5 ${textMuted}`}>Next 7 days</p>
              </div>
              <button className="text-[12px] font-bold text-[#7A1849] hover:underline">Open calendar</button>
            </div>

            <div className={`divide-y ${borderCol}`}>
              {[
                { id: 'ORA-2026-089', title: 'Author proof closes', date: 'Today · 4:00 PM', dateColor: 'text-red-500' },
                { id: 'ORA-2026-076', title: 'Final files to Crossref', date: 'Sep 27', dateColor: 'text-amber-600' },
                { id: 'ORA-2026-101', title: 'Copyedit completion', date: 'Sep 29', dateColor: 'text-blue-600' },
                { id: 'ORA-2026-094', title: 'Issue 12 release', date: 'Oct 01', dateColor: 'text-green-600' },
              ].map((item, i) => (
                <div key={i} className="py-3 flex justify-between items-center">
                  <div>
                    <p className={`text-[10px] font-bold text-[#7A1849] mb-0.5`}>{item.id}</p>
                    <p className={`text-[13px] font-bold ${textMain}`}>{item.title}</p>
                  </div>
                  <span className={`text-[11px] font-bold ${item.dateColor}`}>{item.date}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Recent Production Activity */}
          <div className={`p-6 rounded-xl border shadow-sm ${bgCard}`}>
            <div className="flex justify-between items-center mb-6">
              <h2 className={`text-[16px] font-bold tracking-tight ${textMain}`}>Recent production activity</h2>
              <button className="text-[12px] font-bold text-[#7A1849] hover:underline">View all activity</button>
            </div>

            <div className="space-y-4">
              {[
                { title: 'Typeset proof uploaded for ORA-2026-089', desc: 'Maria Rossi moved the manuscript to Author Proof.', time: '18 minutes ago' },
                { title: 'DOI registered for ORA-2026-072', desc: 'Crossref deposit completed successfully.', time: '1 hour ago' },
                { title: 'Copyedit returned with queries', desc: '7 author queries added to ORA-2026-101.', time: '3 hours ago' },
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div className="mt-1.5"><span className="block w-1.5 h-1.5 rounded-full bg-[#7A1849]"></span></div>
                  <div>
                    <h3 className={`text-[13px] font-bold mb-0.5 ${textMain}`}>{item.title}</h3>
                    <p className={`text-[12px] font-medium mb-0.5 ${textMuted}`}>{item.desc}</p>
                    <p className="text-[10px] font-medium text-gray-400">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Requires Attention */}
          <div className={`p-6 rounded-xl border shadow-sm ${bgCard}`}>
            <div className="flex justify-between items-center mb-6">
              <h2 className={`text-[16px] font-bold tracking-tight ${textMain}`}>Requires attention</h2>
              <button className="text-[12px] font-bold text-[#7A1849] hover:underline">Resolve queue</button>
            </div>

            <div className="space-y-3">
              <div className={`p-4 rounded-lg border ${isDarkMode ? 'bg-[#2A1215] border-[#4A1D24]' : 'bg-[#FFF4F4] border-[#FCD9D9]'}`}>
                <div className="flex justify-between items-center mb-1.5">
                  <span className={`text-[10px] font-bold ${isDarkMode ? 'text-[#F87171]' : 'text-[#B91C1C]'}`}>ORA-2026-083</span>
                  <span className={`text-[10px] font-bold uppercase ${isDarkMode ? 'text-[#F87171]' : 'text-[#B91C1C]'}`}>2 days overdue</span>
                </div>
                <p className={`text-[13px] font-bold mb-0.5 ${textMain}`}>Thermal drift in quantum sensor arrays</p>
                <p className={`text-[11px] font-medium ${isDarkMode ? 'text-[#F87171]/80' : 'text-[#B91C1C]/80'}`}>Author has not approved the second proof</p>
              </div>

              <div className={`p-4 rounded-lg border ${isDarkMode ? 'bg-[#2A1C0F] border-[#4A3018]' : 'bg-[#FFF8EB] border-[#FDE6BA]'}`}>
                <div className="flex justify-between items-center mb-1.5">
                  <span className={`text-[10px] font-bold ${isDarkMode ? 'text-[#FBBF24]' : 'text-[#B45309]'}`}>ORA-2026-097</span>
                  <span className={`text-[10px] font-bold uppercase ${isDarkMode ? 'text-[#FBBF24]' : 'text-[#B45309]'}`}>Missing file</span>
                </div>
                <p className={`text-[13px] font-bold mb-0.5 ${textMain}`}>Adaptive models for coastal resilience</p>
                <p className={`text-[11px] font-medium ${isDarkMode ? 'text-[#FBBF24]/80' : 'text-[#B45309]/80'}`}>High-resolution Figure 4 is required</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </AdminLayout>
  );
}