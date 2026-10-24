import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { 
  FileTextOutlined, CheckCircleOutlined, ClockCircleOutlined, 
  BookOutlined, ArrowRightOutlined, BulbOutlined 
} from '@ant-design/icons';

export default function ReviewerDashboard() {
  const { isDarkMode } = useTheme();
  
  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-100';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const borderCol = isDarkMode ? 'border-[#2D2D2D]' : 'border-gray-100';

  return (
    <AdminLayout>
      <div className="max-w-[1300px] mx-auto animate-fade-in-up">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-4">
          <div>
            <p className={`text-[11px] font-bold tracking-widest uppercase mb-1.5 ${textMuted}`}>Workspace / Reviewer Dashboard</p>
            <h1 className={`text-3xl font-serif font-bold ${textMain}`}>Good morning, Ava</h1>
            <p className={`text-[13px] mt-1 ${textMuted}`}>You have 4 manuscripts requiring evaluation. 1 has an urgent deadline.</p>
          </div>
          <div className="flex gap-3">
            <button className={`px-4 py-2 rounded-lg text-[12px] font-bold border ${isDarkMode ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50 bg-white'}`}>
              Sep 1 – Sep 25, 2026
            </button>
          </div>
        </div>

        {/* Short Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { l: 'Active Assignments', v: '4', sub: '+2 assigned this week', c: 'text-[#7A1849]', bg: 'bg-[#FCF7F9]', icon: <FileTextOutlined /> },
            { l: 'Completed Reviews', v: '18', sub: 'All time academic record', c: 'text-green-500', bg: 'bg-green-50', icon: <CheckCircleOutlined /> },
            { l: 'Pending Recommendation', v: '1', sub: 'Requires evaluation today', c: 'text-red-500', bg: 'bg-red-50', icon: <ClockCircleOutlined /> },
            { l: 'Avg. Review Time', v: '12 Days', sub: '3 days faster than avg', c: 'text-blue-500', bg: 'bg-blue-50', icon: <BookOutlined /> },
          ].map((stat, i) => (
            <div key={i} className={`p-5 rounded-2xl border shadow-sm flex flex-col justify-between transition-all hover:-translate-y-0.5 hover:shadow-md ${bgCard}`}>
              <div className="flex justify-between items-start mb-2">
                <p className={`text-[12px] font-bold ${textMuted}`}>{stat.l}</p>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${stat.bg} ${stat.c}`}>{stat.icon}</div>
              </div>
              <div>
                <h3 className={`text-3xl font-bold mb-1 ${textMain}`}>{stat.v}</h3>
                <p className={`text-[11px] font-bold ${stat.c}`}>{stat.sub}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column: Timeline & Chart */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Recent Activity Timeline */}
            <div className={`p-6 rounded-2xl border shadow-sm ${bgCard}`}>
              <div className="flex justify-between items-center mb-6">
                <h2 className={`text-[16px] font-bold ${textMain}`}>Recent Activity Timeline</h2>
                <button className="text-[12px] font-bold text-[#7A1849] hover:underline">View all history</button>
              </div>
              
              <div className={`relative border-l-2 ml-3 space-y-6 ${borderCol}`}>
                {[
                  { title: 'Recommendation Submitted: "Neuro-computational framework for cognitive analysis"', time: '2 hours ago', meta: 'Accept with Minor Revision • ORA-2026-092', color: 'bg-[#7A1849]' },
                  { title: 'New Review Invitation Accepted', time: 'Yesterday', meta: '"Anomalous heat variance in micro-reactors" • due Oct 15', color: 'bg-blue-500' },
                  { title: 'Manuscript Declined: "Global scale socioeconomic projections"', time: '3 days ago', meta: 'Conflict of interest declared • Assigned by EIC Ava Morgan', color: 'bg-gray-400' },
                ].map((item, i) => (
                  <div key={i} className="ml-6 relative">
                    <span className={`absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-white dark:border-[#1E1E1E] ${item.color} shadow-sm`}></span>
                    <h3 className={`text-[13px] font-bold mb-0.5 leading-snug ${textMain}`}>{item.title}</h3>
                    <p className={`text-[11px] mb-1 ${textMuted}`}>{item.time} • {item.meta}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Historical Performance Chart */}
            <div className={`p-6 rounded-2xl border shadow-sm ${bgCard}`}>
              <div className="flex justify-between items-center mb-6">
                <h2 className={`text-[16px] font-bold ${textMain}`}>Monthly Manuscript Volume</h2>
                <span className={`text-[11px] font-medium ${textMuted}`}>Illustrative data</span>
              </div>
              
              <div className="flex items-end justify-between h-40 gap-4 px-2">
                {[
                  { m: 'Jan', h: 40, val: 12 }, { m: 'Feb', h: 55, val: 15 }, { m: 'Mar', h: 65, val: 18 }, 
                  { m: 'Apr', h: 70, val: 20 }, { m: 'May', h: 80, val: 22 }, { m: 'Jun', h: 95, val: 25 }
                ].map((bar, i) => (
                  <div key={i} className="flex flex-col items-center flex-1 group">
                    <div className="w-full relative flex justify-center items-end h-full mb-3">
                      <span className="absolute -top-5 text-[11px] font-bold text-gray-400 group-hover:text-[#7A1849] transition-colors">{bar.val}</span>
                      <div className="w-10 bg-[#7A1849] rounded-t-sm hover:bg-[#5E1136] transition-colors" style={{ height: `${bar.h}%` }}></div>
                    </div>
                    <span className={`text-[11px] font-bold ${textMuted}`}>{bar.m}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Deadlines & Tips */}
          <div className="space-y-6">
            
            {/* Upcoming Deadlines */}
            <div className={`p-6 rounded-2xl border shadow-sm ${bgCard}`}>
              <h2 className={`text-[16px] font-bold mb-5 ${textMain}`}>Upcoming Review Deadlines</h2>
              
              <div className="space-y-4">
                {/* Urgent Deadline */}
                <div className={`p-4 rounded-xl border transition-colors ${isDarkMode ? 'bg-red-900/10 border-red-900/30' : 'bg-red-50 border-red-100'}`}>
                  <div className="flex justify-between items-start mb-1.5">
                    <span className="text-[9px] font-bold text-red-600 uppercase tracking-wider bg-white dark:bg-transparent px-1.5 py-0.5 rounded border border-red-200">Urgent Evaluation Required</span>
                  </div>
                  <p className={`text-[13px] font-bold mb-1 ${textMain}`}>Deep learning approaches in neurological diagnostics</p>
                  <p className="text-[11px] text-red-600 font-bold">Due in 2 days (Sep 27, 2026)</p>
                </div>

                {/* Normal Deadline */}
                <div className={`p-4 rounded-xl border transition-colors ${isDarkMode ? 'bg-amber-900/10 border-amber-900/30' : 'bg-amber-50 border-amber-100'}`}>
                  <div className="flex justify-between items-start mb-1.5">
                    <span className="text-[9px] font-bold text-amber-600 uppercase tracking-wider bg-white dark:bg-transparent px-1.5 py-0.5 rounded border border-amber-200">Pending Review</span>
                  </div>
                  <p className={`text-[13px] font-bold mb-1 ${textMain}`}>Quantum computing limits on cryptographic schemas</p>
                  <p className="text-[11px] text-amber-600 font-bold">Due in 12 days (Oct 7, 2026)</p>
                </div>
              </div>
            </div>

            {/* Reviewer Tips Card */}
            <div className={`p-6 rounded-2xl border shadow-sm ${bgCard}`}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#FCF7F9] flex items-center justify-center"><BulbOutlined className="text-[#7A1849]" /></div>
                <h3 className={`text-[14px] font-bold ${textMain}`}>Reviewer Guidelines</h3>
              </div>
              <p className={`text-[12px] leading-relaxed mb-4 ${textMuted}`}>
                Ensure your feedback is constructive, professional, and directly addresses the manuscript's methodology and originality. 
              </p>
              <ul className={`text-[11px] space-y-1.5 ${textMuted}`}>
                <li>• Maintain blind review confidentiality.</li>
                <li>• Justify your recommendation score.</li>
                <li>• Submit before the deadline.</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </AdminLayout>
  );
}