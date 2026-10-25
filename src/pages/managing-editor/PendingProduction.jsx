import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { Table, Tag, Button, Input, Select } from 'antd';
import { SearchOutlined, ClockCircleOutlined, FileTextOutlined, CheckCircleOutlined } from '@ant-design/icons';

export default function PendingProduction() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');
  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-100';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';

  const data = [
    { key: '1', id: 'ORA-2026-010', title: 'Deep learning approaches in neurological diagnostics', author: 'Ava Morgan', accepted: 'Sep 14, 2026', status: 'Typesetting' },
    { key: '2', id: 'ORA-2026-012', title: 'Micro-structural analysis of silicon anodes', author: 'Mike Patel', accepted: 'Sep 15, 2026', status: 'Awaiting Proof' },
  ];

  const columns = [
    { title: 'ID', dataIndex: 'id', render: t => <span className={`text-[12px] font-mono font-bold ${textMain}`}>{t}</span> },
    { title: 'TITLE', dataIndex: 'title', render: t => <span className={`text-[13px] font-bold ${textMain}`}>{t}</span> },
    { title: 'AUTHOR', dataIndex: 'author', render: t => <span className={`text-[12px] ${textMuted}`}>{t}</span> },
    { title: 'ACCEPTED', dataIndex: 'accepted', render: t => <span className={`text-[12px] ${textMuted}`}>{t}</span> },
    { title: 'STATUS', dataIndex: 'status', render: s => <Tag color={s === 'Typesetting' ? 'processing' : 'warning'} className="border-0 font-bold text-[10px] uppercase">{s}</Tag> },
    { title: 'ACTION', align: 'right', render: (_, r) => <Button onClick={() => navigate(`/managing-editor/production/${r.key}`)} className="bg-[#7A1849] text-white font-bold text-[12px] rounded-lg border-0">Manage</Button> }
  ];

  return (
    <AdminLayout>
      <div className="max-w-[1300px] mx-auto animate-fade-in-up">
        <div className="mb-6">
          <h1 className={`text-2xl font-serif font-bold ${textMain}`}>Pending Production</h1>
          <p className={`text-[13px] ${textMuted}`}>Manage accepted manuscripts through typesetting and proofing.</p>
        </div>

        {/* Short Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {[
            { l: 'In Typesetting', v: '8', c: 'text-blue-500', icon: <FileTextOutlined /> },
            { l: 'Awaiting Proof', v: '4', c: 'text-amber-500', icon: <ClockCircleOutlined /> },
            { l: 'Ready to Publish', v: '6', c: 'text-green-500', icon: <CheckCircleOutlined /> },
          ].map((s, i) => (
            <div key={i} className={`p-4 rounded-xl border shadow-sm flex items-center justify-between ${bgCard}`}>
              <div><p className={`text-[11px] font-bold uppercase tracking-wider ${textMuted}`}>{s.l}</p><h3 className={`text-2xl font-bold mt-1 ${s.c}`}>{s.v}</h3></div>
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-opacity-10 ${s.c.replace('text-','bg-')} ${s.c}`}>{s.icon}</div>
            </div>
          ))}
        </div>

        <div className={`p-6 rounded-2xl border shadow-sm ${bgCard}`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <Input placeholder="Search by title or ID..." prefix={<SearchOutlined />} value={searchText} onChange={(e) => setSearchText(e.target.value)} className={`w-72 rounded-xl ${isDarkMode ? 'bg-[#1A1A1A] border-[#3D3D3D] text-white' : 'bg-gray-50'}`} />
            <Select defaultValue="All Statuses" className="w-40 h-9" options={[{ value: 'All Statuses', label: 'All Statuses' }, { value: 'Typesetting', label: 'Typesetting' }]} />
          </div>
          <Table columns={columns} dataSource={data} pagination={false} className={`ora-table ${isDarkMode ? 'dark-table' : ''}`} />
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `.ora-table .ant-table-thead > tr > th { background-color: #7A1849 !important; color: white !important; text-transform: uppercase; font-size: 11px; font-weight: bold; border-bottom: none; padding: 14px 16px; } .dark-table .ant-table { background: transparent; color: #E5E7EB; } .dark-table .ant-table-tbody > tr > td { color: #E5E7EB; border-bottom: 1px solid #2D2D2D; padding: 14px 16px; }`}} />
    </AdminLayout>
  );
}