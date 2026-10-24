import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { Table, Tag, Button } from 'antd';

export default function PendingReview() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-100';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';

  const data = [
    { key: '1', id: 'ORA-2026-077', title: 'Reinforcement learning in autonomous flight paths', area: 'Artificial Intelligence', priority: 'URGENT', due: '2 days remaining' },
    { key: '2', id: 'ORA-2026-081', title: 'Micro-structural analysis of silicon anodes', area: 'Material Science', priority: 'NORMAL', due: '12 days remaining' },
    { key: '3', id: 'ORA-2026-098', title: 'Anomalous heat variance in micro-reactors', area: 'Thermodynamics', priority: 'NORMAL', due: '20 days remaining' },
    { key: '4', id: 'ORA-2026-102', title: 'Graph-theoretic approaches in highly clustered networks', area: 'Discrete Mathematics', priority: 'LOW', due: '25 days remaining' },
  ];

  const columns = [
    { title: 'ID', dataIndex: 'id', render: t => <span className={`text-[12px] font-mono font-bold ${textMain}`}>{t}</span> },
    { title: 'TITLE', dataIndex: 'title', render: t => <span className={`text-[13px] font-bold ${textMain}`}>{t}</span> },
    { title: 'SUBJECT AREA', dataIndex: 'area', render: t => <span className={`text-[12px] ${textMuted}`}>{t}</span> },
    { title: 'PRIORITY', dataIndex: 'priority', render: p => <Tag color={p === 'URGENT' ? 'error' : p === 'NORMAL' ? 'warning' : 'default'} className="border-0 font-bold text-[10px]">{p}</Tag> },
    { title: 'DEADLINE', dataIndex: 'due', render: t => <span className="text-[12px] font-bold text-red-500">{t}</span> },
    { title: 'ACTION', align: 'right', render: (_, r) => <Button onClick={() => navigate(`/reviewer/assignment/${r.key}`)} className="bg-[#7A1849] text-white font-bold text-[12px] rounded-lg border-0 hover:bg-[#5E1136]">Start Review</Button> }
  ];

  return (
    <AdminLayout>
      <div className="max-w-[1300px] mx-auto animate-fade-in-up">
        <div className="mb-6">
          <h1 className={`text-2xl font-serif font-bold ${textMain}`}>Pending Reviews</h1>
          <p className={`text-[13px] text-gray-500`}>Manuscripts currently awaiting your evaluation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {[
            { l: 'Total Pending', v: '4', sub: 'Manuscripts awaiting evaluation', tag: 'URGENT', color: 'text-red-500', tagColor: 'bg-red-50 text-red-600' },
            { l: 'Due Today', v: '1', sub: 'Requires immediate attention', tag: '1', color: 'text-amber-500', tagColor: 'bg-amber-50 text-amber-600' },
            { l: 'Average Time', v: '14', sub: 'Average days remaining across queue', tag: '14 DAYS', color: 'text-[#7A1849]', tagColor: 'bg-[#FCF7F9] text-[#7A1849]' },
          ].map((s, i) => (
            <div key={i} className={`p-5 rounded-xl border shadow-sm flex flex-col justify-between ${bgCard}`}>
              <div className="flex justify-between items-start mb-2">
                <p className={`text-[12px] font-bold ${textMuted}`}>{s.l}</p>
                <span className={`text-[9px] font-bold px-2 py-0.5 rounded uppercase ${s.tagColor}`}>{s.tag}</span>
              </div>
              <h3 className={`text-3xl font-bold mb-1 ${s.color}`}>{s.v}</h3>
              <p className={`text-[10px] ${textMuted}`}>{s.sub}</p>
            </div>
          ))}
        </div>

        <div className={`rounded-2xl border shadow-sm p-6 ${bgCard}`}>
           <div className="flex gap-3 mb-6">
              <div className={`px-3 py-1.5 rounded-lg text-[12px] font-medium border ${isDarkMode ? 'bg-[#2A2A2A] border-[#3D3D3D] text-gray-300' : 'bg-gray-50 border-gray-200 text-gray-500'}`}>Status: All</div>
              <div className={`px-3 py-1.5 rounded-lg text-[12px] font-medium border ${isDarkMode ? 'bg-[#2A2A2A] border-[#3D3D3D] text-gray-300' : 'bg-gray-50 border-gray-200 text-gray-500'}`}>Priority: All</div>
              <div className={`px-3 py-1.5 rounded-lg text-[12px] font-medium border ${isDarkMode ? 'bg-[#2A2A2A] border-[#3D3D3D] text-gray-300' : 'bg-gray-50 border-gray-200 text-gray-500'}`}>Subject: All</div>
           </div>
           <Table columns={columns} dataSource={data} pagination={false} className={`ora-table ${isDarkMode ? 'dark-table' : ''}`} />
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `.ora-table .ant-table-thead > tr > th { background-color: #7A1849 !important; color: white !important; text-transform: uppercase; font-size: 11px; font-weight: bold; border-bottom: none; padding: 14px 16px; } .dark-table .ant-table { background: transparent; color: #E5E7EB; } .dark-table .ant-table-tbody > tr > td { color: #E5E7EB; border-bottom: 1px solid #2D2D2D; padding: 14px 16px; }`}} />
    </AdminLayout>
  );
}