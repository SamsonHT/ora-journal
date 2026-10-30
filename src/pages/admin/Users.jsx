import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';

export default function Users() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');
  const [activeTab, setActiveTab] = useState('All users');

  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-200';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const borderCol = isDarkMode ? 'border-[#2D2D2D]' : 'border-gray-100';

  const data = [
    { id: '1', name: 'Dr. Amara Okafor', email: 'amara.okafor@uni.edu', role: 'Editor', status: 'Active', joined: 'Sep 18, 2024', last: '12 min ago', initials: 'AO', color: 'bg-purple-100 text-purple-700' },
    { id: '2', name: 'Milo Peterson', email: 'milo.peterson@research.org', role: 'Reviewer', status: 'Active', joined: 'Jan 12, 2025', last: '1 hour ago', initials: 'MP', color: 'bg-blue-100 text-blue-700' },
    { id: '3', name: 'Prof. Elena Rossi', email: 'elena.rossi@polimi.it', role: 'Author', status: 'Active', joined: 'Mar 04, 2025', last: 'Yesterday', initials: 'ER', color: 'bg-amber-100 text-amber-700' },
    { id: '4', name: 'Noah Williams', email: 'noah.williams@ora.org', role: 'Managing Editor', status: 'Active', joined: 'Jul 21, 2023', last: '2 days ago', initials: 'NW', color: 'bg-teal-100 text-teal-700' },
    { id: '5', name: 'Dr. Jia Chen', email: 'jia.chen@nus.edu.sg', role: 'Reviewer', status: 'Pending', joined: 'Sep 23, 2026', last: 'Invitation sent', initials: 'JC', color: 'bg-rose-100 text-rose-700' },
    { id: '6', name: 'Fatima Rahman', email: 'fatima.rahman@ucf.ac.uk', role: 'Author', status: 'Suspended', joined: 'Nov 15, 2024', last: 'Aug 02, 2026', initials: 'FR', color: 'bg-orange-100 text-orange-700' },
    { id: '7', name: 'Lucas Meyer', email: 'lucas.meyer@ethz.ch', role: 'Section Editor', status: 'Active', joined: 'May 28, 2024', last: '4 hours ago', initials: 'LM', color: 'bg-green-100 text-green-700' },
  ];

  const tabs = ['All users', 'Editors', 'Reviewers', 'Authors', 'Pending'];

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Active': return 'bg-[#F0FDF4] text-[#15803D]';
      case 'Pending': return 'bg-[#FFF7ED] text-[#C2410C]';
      case 'Suspended': return 'bg-[#FEF2F2] text-[#B91C1C]';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <AdminLayout>
      <div className="max-w-[1400px] mx-auto animate-fade-in-up">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <p className={`text-[10px] font-bold tracking-[0.1em] uppercase mb-1.5 ${textMuted}`}>WORKSPACE / ADMINISTRATION</p>
            <h1 className={`text-[26px] font-bold tracking-tight ${textMain}`}>Users</h1>
            <p className={`text-[13px] font-medium mt-1 ${textMuted}`}>Manage access, roles, invitations, and account status across the journal.</p>
          </div>
          
          <div className="flex items-center gap-3">
            <button className={`px-4 py-2 rounded-lg text-[12px] font-bold border ${isDarkMode ? 'border-gray-700 text-gray-300 bg-[#1E1E1E]' : 'border-gray-200 text-gray-700 bg-white hover:bg-gray-50'}`}>
              Import users
            </button>
            <Link to="/admin/users/add" className="bg-[#7A1849] text-white px-5 py-2 rounded-lg text-[12px] font-bold hover:bg-[#5E1136] transition-all shadow-sm flex items-center gap-2">
              <PlusOutlined /> Add User
            </Link>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {[
            { l: 'Total users', v: '1,284' },
            { l: 'Editors', v: '64' },
            { l: 'Reviewers', v: '238' },
            { l: 'Pending Invites', v: '18' },
          ].map((s, i) => (
            <div key={i} className={`p-5 rounded-xl border shadow-sm ${bgCard}`}>
              <p className={`text-[11px] font-bold mb-2 ${textMuted}`}>{s.l}</p>
              <h3 className={`text-[28px] font-bold tracking-tight ${textMain}`}>{s.v}</h3>
            </div>
          ))}
        </div>

        {/* Main Table Container */}
        <div className={`rounded-xl border shadow-sm overflow-hidden ${bgCard}`}>
          
          {/* Toolbar: Tabs & Search */}
          <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center p-4 border-b border-gray-100 dark:border-gray-800 gap-4">
            <div className="flex flex-wrap gap-2">
              {tabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1.5 rounded-lg text-[12px] font-bold transition-all ${
                    activeTab === tab
                      ? 'bg-[#7A1849] text-white shadow-sm'
                      : `bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 ${isDarkMode ? '!bg-[#1A1A1A] !border-[#3D3D3D] !text-gray-300 hover:!bg-[#2A2A2A]' : ''}`
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="flex gap-2 w-full xl:w-auto shrink-0">
              <div className="relative flex-1 xl:w-64">
                <SearchOutlined className="absolute left-3 top-2.5 text-gray-400 text-[13px]" />
                <input 
                  type="text" 
                  placeholder="Search name or email..." 
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className={`w-full pl-9 pr-3 py-2 rounded-lg border text-[12px] font-medium outline-none focus:ring-2 focus:ring-[#7A1849]/20 transition-all ${
                    isDarkMode 
                      ? 'bg-[#1A1A1A] border-[#3D3D3D] text-white focus:border-[#7A1849]' 
                      : 'bg-white border-gray-200 text-gray-600 focus:border-[#7A1849]'
                  }`}
                />
              </div>
              <button className="bg-[#7A1849] text-white px-4 py-2 rounded-lg text-[12px] font-bold flex items-center gap-2 hover:bg-[#5E1136] transition-colors shadow-sm">
                Role & status
              </button>
            </div>
          </div>

          {/* Custom Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#7A1849] text-white">
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider">User</th>
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider">Role</th>
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider">Joined</th>
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider">Last Activity</th>
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isDarkMode ? 'divide-[#2D2D2D]' : 'divide-gray-100'}`}>
                {data.map((row) => (
                  <tr key={row.id} className={`${isDarkMode ? 'hover:bg-[#2A2A2A]' : 'hover:bg-gray-50'} transition-colors`}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold ${row.color}`}>
                          {row.initials}
                        </div>
                        <div>
                          <p className={`text-[13px] font-bold ${textMain}`}>{row.name}</p>
                          <p className={`text-[11px] font-medium ${textMuted}`}>{row.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className={`px-6 py-4 text-[12px] font-medium ${textMain}`}>{row.role}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${getStatusStyle(row.status)}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className={`px-6 py-4 text-[12px] font-medium ${textMuted}`}>{row.joined}</td>
                    <td className={`px-6 py-4 text-[12px] font-medium ${textMuted}`}>{row.last}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-3">
                        <button onClick={() => navigate(`/admin/users/view/${row.id}`)} className="text-[#7A1849] font-bold text-[12px] hover:underline">Edit</button>
                        <button className="text-gray-400 font-bold text-[14px] hover:text-gray-700">•••</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className={`px-6 py-4 border-t flex flex-col md:flex-row justify-between items-center gap-4 ${borderCol}`}>
            <p className={`text-[12px] font-medium ${textMuted}`}>
              Showing 1–7 of 1,284 users
            </p>
            <div className="flex items-center gap-1.5">
              <button className="w-7 h-7 flex items-center justify-center rounded-md bg-[#FCF7F9] text-[#7A1849] text-[11px] font-bold">1</button>
              <button className={`w-7 h-7 flex items-center justify-center rounded-md border text-[11px] font-bold transition-colors ${isDarkMode ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}>2</button>
            </div>
          </div>

        </div>
      </div>
    </AdminLayout>
  );
}