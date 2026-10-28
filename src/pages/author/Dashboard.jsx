import React from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { 
  FileTextOutlined, ClockCircleOutlined, CheckCircleOutlined, 
  ArrowRightOutlined, CalendarOutlined, BellOutlined,
  EyeOutlined
} from '@ant-design/icons';

export default function AuthorDashboard() {
  const { isDarkMode } = useTheme();
  
  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-100';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const borderCol = isDarkMode ? 'border-[#2D2D2D]' : 'border-gray-100';

  return (
    <AdminLayout>
      <div className="max-w-[1300px] mx-auto animate-fade-in-up">
        
        {/* ================= HEADER BANNER ================= */}
        <div className={`relative overflow-hidden rounded-xl mb-6 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-sm ${isDarkMode ? 'bg-[#1E1E1E] border border-[#2D2D2D]' : 'bg-white border border-gray-100'}`}>
          
          <div className="relative z-10">
            <p className={`text-[10px] font-bold tracking-[0.1em] uppercase text-[#7A1849] mb-1.5`}>WORKSPACE / DASHBOARD</p>
            {/* Removed font-serif to match screenshot */}
            <h1 className={`text-[26px] font-bold tracking-tight mb-1 flex items-center gap-2 ${textMain}`}>
              Good morning, Ava
            </h1>
            <p className={`text-[13px] font-medium ${textMuted}`}>
              Here's what's happening with your research today.
            </p>
          </div>
          
          <div className="relative z-10 flex gap-3 w-full md:w-auto">
            <button className={`flex-1 md:flex-none px-4 py-2 rounded-lg text-[12px] font-bold border transition-colors flex items-center justify-center gap-2 ${isDarkMode ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-200 text-gray-700 hover:bg-gray-50 bg-white'}`}>
              <CalendarOutlined /> Sep 1 – Sep 25
            </button>
            <Link to="/author/submit" className="flex-1 md:flex-none bg-[#7A1849] text-white px-4 py-2 rounded-lg text-[12px] font-bold hover:bg-[#5E1136] transition-all shadow-sm flex items-center justify-center gap-2">
              New Submission
            </Link>
          </div>
        </div>

        {/* ================= STATS CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {[
            { label: 'Submitted Papers', value: '14', sub: '+2 this month', icon: <FileTextOutlined />, color: 'text-blue-600 bg-blue-50', trendColor: 'text-green-500' },
            { label: 'Under Review', value: '4', sub: 'Awaiting decision', icon: <ClockCircleOutlined />, color: 'text-amber-600 bg-amber-50', trendColor: 'text-amber-500' },
            { label: 'Awaiting Proof', value: '3', sub: 'Action required', icon: <CheckCircleOutlined />, color: 'text-[#7A1849] bg-[#FCF7F9]', trendColor: 'text-red-500' },
          ].map((stat, i) => (
            <div key={i} className={`p-4 rounded-xl border shadow-sm flex items-center justify-between transition-all hover:-translate-y-0.5 hover:shadow-md ${bgCard}`}>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.color}`}>
                  {stat.icon}
                </div>
                <div>
                  <p className={`text-[11px] font-bold text-gray-400 uppercase tracking-wider`}>{stat.label}</p>
                  {/* Changed value to bold sans-serif */}
                  <h3 className={`text-[24px] font-bold tracking-tight ${textMain}`}>{stat.value}</h3>
                </div>
              </div>
              <div className="text-right">
                <p className={`text-[11px] font-bold ${stat.trendColor}`}>{stat.sub}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* ================= RECENT ACTIVITY ================= */}
          <div className={`lg:col-span-2 p-6 rounded-xl border shadow-sm ${bgCard}`}>
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className={`text-[15px] font-bold tracking-tight ${textMain}`}>Recent Activity</h2>
                <p className={`text-[11px] font-medium mt-0.5 ${textMuted}`}>Latest updates on your submitted work.</p>
              </div>
              <button className="text-[12px] font-bold text-[#7A1849] hover:underline flex items-center gap-1">View all <ArrowRightOutlined className="text-[10px]" /></button>
            </div>
            
            <div className={`relative border-l-2 ml-3 space-y-6 ${borderCol}`}>
              {[
                { title: 'Proof Approved', desc: '"Deep learning approaches in neurological diagnostics"', time: '2 hours ago', journal: 'Applied Science Journal', color: 'bg-[#7A1849]' },
                { title: 'Peer Review Received', desc: '"Quantum computing limits on cryptographic schemas"', time: 'Yesterday', journal: 'Journal of Advanced Physics', color: 'bg-blue-500' },
                { title: 'Invoice Generated', desc: '#APC-2026-982 ($1,850.00)', time: '3 days ago', journal: 'Medical Imaging & Systems', color: 'bg-amber-500' },
                { title: 'Manuscript Submitted', desc: '"Graphene oxide synthesized filters for purification"', time: '1 week ago', journal: 'Nanotechnology Letters', color: 'bg-green-500' },
              ].map((item, i) => (
                <div key={i} className="ml-5 relative">
                  <span className={`absolute -left-[27px] top-1.5 w-3 h-3 rounded-full border-2 border-white dark:border-[#1E1E1E] ${item.color} shadow-sm`}></span>
                  <div className={`p-3.5 rounded-xl border transition-colors ${isDarkMode ? 'bg-[#2A2A2A] border-[#3D3D3D] hover:bg-[#333]' : 'bg-gray-50 border-gray-100 hover:bg-white'}`}>
                    <div className="flex justify-between items-start mb-0.5">
                      <h3 className={`text-[13px] font-bold ${textMain}`}>{item.title}</h3>
                      <span className={`text-[10px] font-medium ${textMuted}`}>{item.time}</span>
                    </div>
                    <p className={`text-[12px] mb-1 ${textMuted}`}>{item.desc}</p>
                    <p className={`text-[10px] font-bold text-[#7A1849]`}>{item.journal}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= UPCOMING DEADLINES ================= */}
          <div className="space-y-6">
            <div className={`p-6 rounded-xl border shadow-sm ${bgCard}`}>
              <h2 className={`text-[15px] font-bold tracking-tight mb-5 flex items-center gap-2 ${textMain}`}>
                <BellOutlined className="text-[#7A1849]" /> Action Required
              </h2>
              
              <div className="space-y-4">
                <div className={`p-4 rounded-xl border-l-4 border-l-red-500 border-y border-r transition-colors ${isDarkMode ? 'bg-red-900/10 border-red-900/30' : 'bg-red-50 border-red-100'}`}>
                  <div className="flex justify-between items-start mb-1.5">
                    <span className="text-[9px] font-bold text-red-600 uppercase tracking-wider bg-white dark:bg-transparent px-1.5 py-0.5 rounded border border-red-200">Due in 2 days</span>
                    <CalendarOutlined className="text-red-400 text-[12px]" />
                  </div>
                  <p className={`text-[12px] font-bold mb-1 ${textMain}`}>Author Proof Verification</p>
                  <p className={`text-[11px] text-red-600/80 mb-2 truncate`}>Deep learning approaches in neurological diagnostics</p>
                  <Link to="/author/pending-proof" className="text-[11px] font-bold text-red-600 hover:underline">Review Proof →</Link>
                </div>

                <div className={`p-4 rounded-xl border-l-4 border-l-amber-500 border-y border-r transition-colors ${isDarkMode ? 'bg-amber-900/10 border-amber-900/30' : 'bg-amber-50 border-amber-100'}`}>
                  <div className="flex justify-between items-start mb-1.5">
                    <span className="text-[9px] font-bold text-amber-600 uppercase tracking-wider bg-white dark:bg-transparent px-1.5 py-0.5 rounded border border-amber-200">Due in 12 days</span>
                    <CalendarOutlined className="text-amber-400 text-[12px]" />
                  </div>
                  <p className={`text-[12px] font-bold mb-1 ${textMain}`}>Revision Submission</p>
                  <p className={`text-[11px] text-amber-600/80 mb-2 truncate`}>Quantum computing limits on cryptographic schemas</p>
                  <button className="text-[11px] font-bold text-amber-600 hover:underline">Upload Revision →</button>
                </div>
              </div>
            </div>

            {/* Helpful Tip Card */}
            <div className={`p-5 rounded-xl border shadow-sm ${bgCard}`}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-[#FCF7F9] flex items-center justify-center"><EyeOutlined className="text-[#7A1849]" /></div>
                <h3 className={`text-[13px] font-bold ${textMain}`}>Increase Visibility</h3>
              </div>
              <p className={`text-[11px] leading-relaxed mb-3 ${textMuted}`}>Link your ORCID iD to automatically sync your published articles with your public researcher profile.</p>
              <button className="text-[11px] font-bold text-[#7A1849] hover:underline">Link ORCID →</button>
            </div>
          </div>

        </div>
      </div>
    </AdminLayout>
  );
}