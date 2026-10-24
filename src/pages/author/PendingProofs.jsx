import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { Table, Tag, Button, Input } from 'antd';
import { 
  SearchOutlined, 
  FileTextOutlined, 
  ClockCircleOutlined, 
  CheckCircleOutlined // <--- THIS WAS MISSING
} from '@ant-design/icons';

export default function PendingProofs() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');

  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-100';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';

  const data = [
    { key: '1', title: 'Deep learning approaches in neurological diagnostics', journal: 'Medical Imaging & Systems', version: 'v2.0', deadline: 'Sep 27, 2026' },
    { key: '2', title: 'Quantum computing limits on cryptographic schemas', journal: 'Journal of Advanced Physics', version: 'v1.1', deadline: 'Oct 05, 2026' },
    { key: '3', title: 'Graphene oxide synthesized filters for purification', journal: 'Nanotechnology Letters', version: 'v3.0 - Final', deadline: 'Oct 12, 2026' },
  ];

  const filteredData = data.filter(item => 
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const columns = [
    { title: 'MANUSCRIPT TITLE', dataIndex: 'title', key: 'title', render: (text, record) => (
        <div>
          <p className={`text-[13px] font-bold ${textMain}`}>{text}</p>
          <p className={`text-[11px] ${textMuted}`}>{record.journal}</p>
        </div>
    )},
    { title: 'VERSION', dataIndex: 'version', key: 'version', render: text => <span className={`text-[12px] ${textMuted}`}>{text}</span> },
    { title: 'DEADLINE', dataIndex: 'deadline', key: 'deadline', render: text => <span className={`text-[12px] font-bold text-amber-600`}>{text}</span> },
    { title: 'ACTION', key: 'actions', align: 'right', render: (_, record) => (
        <Button onClick={() => navigate(`/author/proof/${record.key}`)} className="bg-[#7A1849] text-white font-bold text-[12px] rounded-lg border-0 hover:bg-[#5E1136]">View Proof</Button>
    )}
  ];

  return (
    <AdminLayout>
      <div className="max-w-[1300px] mx-auto animate-fade-in-up">
        <div className="mb-8">
          <p className={`text-[11px] font-bold tracking-widest uppercase mb-1.5 ${textMuted}`}>Workspace / Proofs</p>
          <h1 className={`text-2xl font-serif font-bold ${textMain}`}>Pending Proofs</h1>
          <p className={`text-[13px] mt-1 ${textMuted}`}>Review and approve your pre-publication papers here.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {[
            { label: 'Pending Approval', value: '3', icon: <FileTextOutlined />, color: 'text-amber-500 bg-amber-50' },
            { label: 'Approved', value: '12', icon: <CheckCircleOutlined />, color: 'text-green-500 bg-green-50' },
            { label: 'Action Required', value: '1', icon: <ClockCircleOutlined />, color: 'text-red-500 bg-red-50' },
          ].map((stat, i) => (
            <div key={i} className={`p-5 rounded-2xl border shadow-sm transition-all hover:shadow-md ${bgCard}`}>
              <div className="flex justify-between items-start mb-2">
                <p className={`text-[12px] font-bold ${textMuted}`}>{stat.label}</p>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${stat.color}`}>{stat.icon}</div>
              </div>
              <h3 className={`text-2xl font-bold ${textMain}`}>{stat.value}</h3>
            </div>
          ))}
        </div>

        <div className={`rounded-2xl border shadow-sm p-6 ${bgCard}`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
             <h2 className={`text-[16px] font-bold ${textMain}`}>Pending Proof Queue</h2>
             <Input 
              placeholder="Search by title..." 
              prefix={<SearchOutlined className="text-gray-400" />}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className={`w-full md:w-72 rounded-xl py-2 ${isDarkMode ? 'bg-[#1A1A1A] border-[#3D3D3D] text-white' : 'bg-gray-50 border-gray-200'}`}
            />
          </div>
          <Table columns={columns} dataSource={filteredData} pagination={false} className={`ora-table ${isDarkMode ? 'dark-table' : ''}`} />
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .ora-table .ant-table-thead > tr > th { background-color: #7A1849 !important; color: white !important; font-weight: 700 !important; font-size: 11px !important; text-transform: uppercase; border-bottom: none; padding: 14px 16px; }
        .dark-table .ant-table { background: transparent; color: #E5E7EB; }
        .dark-table .ant-table-tbody > tr > td { color: #E5E7EB; border-bottom: 1px solid #2D2D2D; padding: 14px 16px; }
      `}} />
    </AdminLayout>
  );
}