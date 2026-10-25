import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { Table, Tag, Button, Input, Select } from 'antd';
import { SearchOutlined, BookOutlined, FileTextOutlined, CalendarOutlined } from '@ant-design/icons';

export default function PublishedManuscripts() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');
  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-100';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';

  const data = [
    { key: '1', id: 'ORA-2026-001', title: 'Neural Networks in Healthcare', type: 'Research Article', area: 'Medical AI', issue: 'Vol 18, Issue 10', date: 'Oct 12, 2026', status: 'Published' },
    { key: '2', id: 'ORA-2026-004', title: 'Quantum Cryptography Advancements', type: 'Review Article', area: 'Quantum Physics', issue: 'Vol 18, Issue 10', date: 'Oct 10, 2026', status: 'Published' },
    { key: '3', id: 'ORA-2026-006', title: 'Coastal Resilience Models', type: 'Case Study', area: 'Climate Science', issue: 'Vol 18, Issue 9', date: 'Sep 28, 2026', status: 'Published' },
  ];

  const columns = [
    { title: 'ID', dataIndex: 'id', render: t => <span className={`text-[12px] font-mono font-bold ${textMain}`}>{t}</span> },
    { title: 'TITLE', dataIndex: 'title', render: t => <span className={`text-[13px] font-bold ${textMain}`}>{t}</span> },
    { title: 'TYPE', dataIndex: 'type', render: t => <span className={`text-[12px] ${textMuted}`}>{t}</span> },
    { title: 'SUBJECT AREA', dataIndex: 'area', render: t => <span className={`text-[12px] ${textMuted}`}>{t}</span> },
    { title: 'ISSUE', dataIndex: 'issue', render: t => <span className={`text-[12px] ${textMuted}`}>{t}</span> },
    { title: 'PUBLISH DATE', dataIndex: 'date', render: t => <span className={`text-[12px] ${textMuted}`}>{t}</span> },
    { title: 'STATUS', dataIndex: 'status', render: s => <Tag color="success" className="border-0 font-bold text-[10px] uppercase">{s}</Tag> },
    { title: 'ACTION', align: 'right', render: (_, r) => <Button onClick={() => navigate(`/managing-editor/published/${r.key}`)} className="bg-[#7A1849] text-white font-bold text-[12px] rounded-lg border-0">View</Button> }
  ];

  return (
    <AdminLayout>
      <div className="max-w-[1400px] mx-auto animate-fade-in-up">
        <div className="mb-6">
          <h1 className={`text-2xl font-serif font-bold ${textMain}`}>Published Manuscripts</h1>
          <p className={`text-[13px] ${textMuted}`}>Archive of all published articles across issues.</p>
        </div>

        {/* Short Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {[
            { l: 'Total Published', v: '142', c: 'text-[#7A1849]', icon: <FileTextOutlined /> },
            { l: 'This Month', v: '14', c: 'text-green-500', icon: <BookOutlined /> },
            { l: 'Open Access Rate', v: '98%', c: 'text-blue-500', icon: <CalendarOutlined /> },
          ].map((s, i) => (
            <div key={i} className={`p-4 rounded-xl border shadow-sm flex items-center justify-between ${bgCard}`}>
              <div><p className={`text-[11px] font-bold uppercase tracking-wider ${textMuted}`}>{s.l}</p><h3 className={`text-2xl font-bold mt-1 ${s.c}`}>{s.v}</h3></div>
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-opacity-10 ${s.c.replace('text-','bg-')} ${s.c}`}>{s.icon}</div>
            </div>
          ))}
        </div>

        <div className={`p-6 rounded-2xl border shadow-sm ${bgCard}`}>
          {/* Filters Toolbar */}
          <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4 mb-6">
            <Input placeholder="Search published articles..." prefix={<SearchOutlined />} value={searchText} onChange={(e) => setSearchText(e.target.value)} className={`w-full xl:w-72 rounded-xl ${isDarkMode ? 'bg-[#1A1A1A] border-[#3D3D3D] text-white' : 'bg-gray-50'}`} />
            
            <div className="flex flex-wrap gap-2 w-full xl:w-auto">
              <Select defaultValue="All Types" className="w-36 h-9" options={[{ value: 'All Types', label: 'All Types' }, { value: 'Research Article', label: 'Research' }]} />
              <Select defaultValue="All Subjects" className="w-36 h-9" options={[{ value: 'All Subjects', label: 'All Subjects' }, { value: 'Medical AI', label: 'Medical AI' }]} />
              <Select defaultValue="All Issues" className="w-36 h-9" options={[{ value: 'All Issues', label: 'All Issues' }, { value: 'Vol 18, Issue 10', label: 'Vol 18, Iss 10' }]} />
              <input type="date" className={`px-3 py-1.5 rounded-lg border text-[12px] outline-none ${isDarkMode ? 'bg-[#1A1A1A] border-[#3D3D3D] text-white' : 'bg-gray-50 border-gray-200'}`} />
            </div>
          </div>

          <Table columns={columns} dataSource={data} pagination={false} className={`ora-table ${isDarkMode ? 'dark-table' : ''}`} />
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `.ora-table .ant-table-thead > tr > th { background-color: #7A1849 !important; color: white !important; text-transform: uppercase; font-size: 11px; font-weight: bold; border-bottom: none; padding: 14px 16px; } .dark-table .ant-table { background: transparent; color: #E5E7EB; } .dark-table .ant-table-tbody > tr > td { color: #E5E7EB; border-bottom: 1px solid #2D2D2D; padding: 14px 16px; }`}} />
    </AdminLayout>
  );
}