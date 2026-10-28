import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { Table, Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

export default function MyAssignments() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');

  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-200';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';

  const data = [
    { key: '1', id: 'ORA-2026-077', title: 'Reinforcement learning in autonomous flight paths', area: 'Artificial Intelligence', date: 'Sep 12, 2026', inv: 'Accepted', status: 'Overdue' },
    { key: '2', id: 'ORA-2026-081', title: 'Micro-structural analysis of silicon anodes', area: 'Material Science', date: 'Sep 14, 2026', inv: 'Accepted', status: 'In Progress' },
    { key: '3', id: 'ORA-2026-092', title: 'Neuro-computational framework for cognitive analysis', area: 'Applied Neuroscience', date: 'Sep 18, 2026', inv: 'Pending', status: 'N/A' },
    { key: '4', id: 'ORA-2026-098', title: 'Anomalous heat variance in micro-reactors', area: 'Thermodynamics', date: 'Sep 20, 2026', inv: 'Accepted', status: 'In Progress' },
    { key: '5', id: 'ORA-2026-102', title: 'Graph-theoretic approaches in social network layouts', area: 'Discrete Mathematics', date: 'Sep 22, 2026', inv: 'Accepted', status: 'In Progress' },
  ];

  // Modern Pill Styles for the table
  const getInvitationStyle = (s) => {
    return s === 'Accepted' ? 'bg-[#F0FDF4] text-[#15803D]' : 'bg-[#FFF7ED] text-[#C2410C]';
  };
  const getReviewStyle = (s) => {
    if (s === 'Completed') return 'bg-[#F0FDF4] text-[#15803D]';
    if (s === 'Overdue') return 'bg-[#FEF2F2] text-[#B91C1C]';
    if (s === 'In Progress') return 'bg-[#EFF6FF] text-[#2563EB]';
    return 'bg-[#F3F4F6] text-[#4B5563]';
  };

  const columns = [
    { 
      title: 'MANUSCRIPT ID', 
      dataIndex: 'id', 
      render: t => <span className={`text-[12px] font-mono font-bold ${textMain}`}>{t}</span> 
    },
    { 
      title: 'TITLE', 
      dataIndex: 'title', 
      render: t => <span className={`text-[13px] font-bold ${textMain} leading-snug`}>{t}</span> 
    },
    { 
      title: 'SUBJECT AREA', 
      dataIndex: 'area', 
      render: t => <span className={`text-[12px] font-medium ${textMuted}`}>{t}</span> 
    },
    { 
      title: 'ASSIGNED DATE', 
      dataIndex: 'date', 
      render: t => <span className={`text-[12px] font-medium ${textMuted}`}>{t}</span> 
    },
    { 
      title: 'INVITATION STATUS', 
      dataIndex: 'inv', 
      render: s => <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold ${getInvitationStyle(s)}`}>{s}</span> 
    },
    { 
      title: 'REVIEW STATUS', 
      dataIndex: 'status', 
      render: s => <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold ${getReviewStyle(s)}`}>{s}</span> 
    },
    { 
      title: 'ACTIONS', 
      align: 'right', 
      render: (_, r) => (
        <Button 
          onClick={() => navigate(r.inv === 'Pending' ? `/reviewer/invitation/${r.key}` : `/reviewer/assignment/${r.key}`)} 
          className={`${r.inv === 'Pending' ? 'bg-white text-[#7A1849] border-[#7A1849]' : 'bg-[#7A1849] text-white border-0'} font-bold text-[11px] rounded-md h-8 px-5 hover:opacity-80`}
        >
          {r.inv === 'Pending' ? 'View Invitation' : 'Continue'}
        </Button>
    )}
  ];

  return (
    <AdminLayout>
      <div className="max-w-[1300px] mx-auto animate-fade-in-up">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <p className={`text-[10px] font-bold tracking-[0.1em] uppercase text-[#7A1849] mb-1.5`}>WORKSPACE / ASSIGNMENTS</p>
            <h1 className={`text-[26px] font-bold tracking-tight ${textMain}`}>My Assignments</h1>
            <p className={`text-[13px] font-medium mt-1 ${textMuted}`}>Manage and track all your peer review invitations.</p>
          </div>
        </div>

        {/* Main Table Container */}
        <div className={`rounded-xl border shadow-sm overflow-hidden ${bgCard}`}>
          <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center p-5 border-b border-gray-100 dark:border-gray-800 gap-4">
            
            {/* Tab Filters */}
            <div className="flex flex-wrap gap-2">
              {['All (8)', 'Active (4)', 'Completed (3)', 'Rejected (1)'].map((tab, i) => (
                <button 
                  key={i} 
                  className={`px-4 py-1.5 rounded-lg text-[12px] font-bold transition-all ${
                    i === 0 
                      ? 'bg-[#7A1849] text-white shadow-sm' 
                      : `bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 ${isDarkMode ? '!bg-[#1A1A1A] !border-[#3D3D3D] !text-gray-300 hover:!bg-[#2A2A2A]' : ''}`
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full xl:w-72 shrink-0">
              <Input 
                placeholder="Search by title or ID..." 
                prefix={<SearchOutlined className="text-gray-400 text-[13px]" />} 
                value={searchText} 
                onChange={(e) => setSearchText(e.target.value)} 
                className={`w-full rounded-lg py-1.5 text-[12px] ${isDarkMode ? 'bg-[#1A1A1A] border-[#3D3D3D] text-white' : 'bg-white border-gray-200'}`} 
              />
            </div>
          </div>

          <Table 
            columns={columns} 
            dataSource={data} 
            pagination={false} 
            className={`ora-table ${isDarkMode ? 'dark-table' : ''}`} 
          />
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .ora-table .ant-table-thead > tr > th { 
          background-color: #7A1849 !important; 
          color: white !important; 
          font-weight: 600 !important; 
          font-size: 10px !important; 
          text-transform: uppercase; 
          letter-spacing: 0.05em;
          border-bottom: none; 
          padding: 12px 16px; 
        }
        .dark-table .ant-table { background: transparent; color: #E5E7EB; }
        .dark-table .ant-table-tbody > tr > td { color: #E5E7EB; border-bottom: 1px solid #2D2D2D; padding: 16px; }
        .ora-table .ant-table-tbody > tr > td { padding: 16px; border-bottom: 1px solid #F3F4F6; }
        .ora-table .ant-table-tbody > tr:hover > td { background-color: ${isDarkMode ? '#2A2A2A' : '#FAFAFA'} !important; }
      `}} />
    </AdminLayout>
  );
}