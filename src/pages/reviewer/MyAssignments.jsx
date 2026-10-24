import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { Table, Tag, Button, Input, Select } from 'antd';
import { SearchOutlined, FileTextOutlined, ClockCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';

export default function MyAssignments() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');

  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-100';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';

  const data = [
    { key: '1', id: 'ORA-2026-077', title: 'Reinforcement learning in autonomous flight paths', area: 'Artificial Intelligence', date: 'Sep 12, 2026', inv: 'Accepted', status: 'Overdue' },
    { key: '2', id: 'ORA-2026-081', title: 'Micro-structural analysis of silicon anodes', area: 'Material Science', date: 'Sep 14, 2026', inv: 'Accepted', status: 'In Progress' },
    // New Pending Invitation row
    { key: '3', id: 'ORA-2026-092', title: 'Neuro-computational framework for cognitive analysis', area: 'Applied Neuroscience', date: 'Sep 18, 2026', inv: 'Pending', status: 'N/A' },
    { key: '4', id: 'ORA-2026-098', title: 'Anomalous heat variance in micro-reactors', area: 'Thermodynamics', date: 'Sep 20, 2026', inv: 'Accepted', status: 'In Progress' },
    { key: '5', id: 'ORA-2026-102', title: 'Graph-theoretic approaches in social network layouts', area: 'Discrete Mathematics', date: 'Sep 22, 2026', inv: 'Accepted', status: 'In Progress' },
  ];

  const columns = [
    { title: 'MANUSCRIPT ID', dataIndex: 'id', render: t => <span className={`text-[12px] font-mono font-bold ${textMain}`}>{t}</span> },
    { title: 'TITLE', dataIndex: 'title', render: t => <span className={`text-[13px] font-bold ${textMain}`}>{t}</span> },
    { title: 'SUBJECT AREA', dataIndex: 'area', render: t => <span className={`text-[12px] ${textMuted}`}>{t}</span> },
    { title: 'ASSIGNED DATE', dataIndex: 'date', render: t => <span className={`text-[12px] ${textMuted}`}>{t}</span> },
    { title: 'INVITATION STATUS', dataIndex: 'inv', render: s => <Tag color={s === 'Accepted' ? 'success' : 'warning'} className="border-0 font-bold text-[10px]">{s}</Tag> },
    { title: 'REVIEW STATUS', dataIndex: 'status', render: s => <Tag color={s === 'Completed' ? 'success' : s === 'Overdue' ? 'error' : s === 'N/A' ? 'default' : 'warning'} className="border-0 font-bold text-[10px]">{s}</Tag> },
    { title: 'ACTIONS', align: 'right', render: (_, r) => (
        // If invitation is Pending, go to Accept/Reject page. If Accepted, go to Submit Review page.
        <Button 
          onClick={() => navigate(r.inv === 'Pending' ? `/reviewer/invitation/${r.key}` : `/reviewer/assignment/${r.key}`)} 
          className={`${r.inv === 'Pending' ? 'bg-white text-[#7A1849] border-[#7A1849]' : 'bg-[#7A1849] text-white border-0'} font-bold text-[12px] rounded-lg hover:opacity-80`}
        >
          {r.inv === 'Pending' ? 'View Invitation' : 'Continue'}
        </Button>
    )}
  ];

  return (
    <AdminLayout>
      <div className="max-w-[1300px] mx-auto animate-fade-in-up">
        <div className="mb-6">
          <h1 className={`text-2xl font-serif font-bold ${textMain}`}>My Assignments</h1>
          <p className={`text-[13px] text-gray-500`}>Manage and track all your peer review invitations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {[
            { l: 'Total Assigned', v: '8', c: 'text-[#7A1849]', icon: <FileTextOutlined /> },
            { l: 'In Progress', v: '4', c: 'text-amber-500', icon: <ClockCircleOutlined /> },
            { l: 'Completed', v: '3', c: 'text-green-500', icon: <CheckCircleOutlined /> },
          ].map((s, i) => (
            <div key={i} className={`p-4 rounded-xl border shadow-sm flex items-center justify-between ${bgCard}`}>
              <div><p className={`text-[11px] font-bold uppercase tracking-wider ${textMuted}`}>{s.l}</p><h3 className={`text-2xl font-bold mt-1 ${s.c}`}>{s.v}</h3></div>
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-opacity-10 ${s.c.replace('text-','bg-')} ${s.c}`}>{s.icon}</div>
            </div>
          ))}
        </div>

        <div className={`rounded-2xl border shadow-sm p-6 ${bgCard}`}>
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-2">
              {['All (8)', 'Active (4)', 'Completed (3)', 'Rejected (1)'].map((tab, i) => (
                <button key={i} className={`px-4 py-1.5 rounded-lg text-[12px] font-bold transition-colors ${i === 0 ? 'bg-[#7A1849] text-white' : (isDarkMode ? 'text-gray-300 hover:bg-[#2A2A2A]' : 'text-gray-600 hover:bg-gray-100')}`}>
                  {tab}
                </button>
              ))}
            </div>
            <Input placeholder="Search by title or ID..." prefix={<SearchOutlined />} value={searchText} onChange={(e) => setSearchText(e.target.value)} className={`w-64 rounded-xl ${isDarkMode ? 'bg-[#1A1A1A] border-[#3D3D3D] text-white' : 'bg-gray-50'}`} />
          </div>
          <Table columns={columns} dataSource={data} pagination={false} className={`ora-table ${isDarkMode ? 'dark-table' : ''}`} />
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `.ora-table .ant-table-thead > tr > th { background-color: #7A1849 !important; color: white !important; text-transform: uppercase; font-size: 11px; font-weight: bold; border-bottom: none; padding: 14px 16px; } .dark-table .ant-table { background: transparent; color: #E5E7EB; } .dark-table .ant-table-tbody > tr > td { color: #E5E7EB; border-bottom: 1px solid #2D2D2D; padding: 14px 16px; }`}} />
    </AdminLayout>
  );
}