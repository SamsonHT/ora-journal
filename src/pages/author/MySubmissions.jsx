import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { Table, Tag, Input, Select } from 'antd';
import { SearchOutlined, FileTextOutlined, ClockCircleOutlined, CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

export default function MySubmissions() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-100';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';

  const data = [
    { key: '1', title: 'Deep learning approaches in neurological diagnostics', journal: 'Medical Imaging & Systems', date: 'Sep 14, 2026', status: 'Under Review' },
    { key: '2', title: 'Quantum computing limits on cryptographic schemas', journal: 'Journal of Advanced Physics', date: 'Aug 28, 2026', status: 'Under Review' },
    { key: '3', title: 'Graphene oxide synthesized filters for purification', journal: 'Nanotechnology Letters', date: 'Jul 15, 2026', status: 'Accepted' },
    { key: '4', title: 'Hybrid deep convolutional neural nets for solar forecasting', journal: 'Renewable Energy Research', date: 'Jun 02, 2026', status: 'Accepted' },
    { key: '5', title: 'Socio-economic impact of rural grid electrification', journal: 'Applied Policy & Econ', date: 'May 19, 2026', status: 'Rejected' },
    { key: '6', title: 'Autonomous vehicle fleet routing optimization patterns', journal: 'Transportation Science', date: 'May 10, 2026', status: 'Draft' },
  ];

  const filteredData = data.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchText.toLowerCase());
    const matchesStatus = statusFilter === 'All' || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const columns = [
    { title: 'PAPER TITLE', dataIndex: 'title', key: 'title', render: text => <span className={`text-[13px] font-bold ${textMain}`}>{text}</span> },
    { title: 'JOURNAL', dataIndex: 'journal', key: 'journal', render: text => <span className={`text-[12px] ${textMuted}`}>{text}</span> },
    { title: 'SUBMISSION DATE', dataIndex: 'date', key: 'date', render: text => <span className={`text-[12px] ${textMuted}`}>{text}</span> },
    { 
      title: 'STATUS', dataIndex: 'status', key: 'status', 
      render: status => {
        let color = 'default';
        if (status === 'Accepted') color = 'success';
        if (status === 'Rejected') color = 'error';
        if (status === 'Under Review') color = 'warning';
        return <Tag color={color} className="rounded-full px-3 py-0.5 font-bold text-[10px] border-0 uppercase">{status}</Tag>;
      }
    },
    { 
      title: 'ACTIONS', key: 'actions', align: 'right', 
      render: () => (
        <button onClick={() => navigate('/author/submissions/1')} className="text-[#7A1849] font-bold text-[12px] hover:underline">
          View Details
        </button>
      ) 
    }
  ];

  return (
    <AdminLayout>
      <div className="max-w-[1300px] mx-auto animate-fade-in-up">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
            <p className={`text-[11px] font-bold tracking-widest uppercase mb-1.5 ${textMuted}`}>Workspace / Submissions</p>
            <h1 className={`text-2xl font-serif font-bold ${textMain}`}>My Submissions</h1>
            <p className={`text-[13px] mt-1 ${textMuted}`}>Manage and monitor the progress of all your journal submissions.</p>
          </div>
          <button onClick={() => navigate('/author/submit')} className="bg-[#7A1849] text-white px-5 py-2.5 rounded-xl text-[13px] font-bold hover:bg-[#5E1136] transition-all shadow-md">
            New Submission
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {[
            { label: 'Total Papers', value: '14', icon: <FileTextOutlined />, color: 'text-blue-500 bg-blue-50' },
            { label: 'Under Review', value: '4', icon: <ClockCircleOutlined />, color: 'text-amber-500 bg-amber-50' },
            { label: 'Accepted', value: '8', icon: <CheckCircleOutlined />, color: 'text-green-500 bg-green-50' },
            { label: 'Rejected', value: '2', icon: <CloseCircleOutlined />, color: 'text-red-500 bg-red-50' },
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

        {/* Table Container */}
        <div className={`rounded-2xl border shadow-sm p-6 ${bgCard}`}>
          {/* Filter Toolbar */}
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
            <Input 
              placeholder="Search paper title..." 
              prefix={<SearchOutlined className="text-gray-400" />}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className={`w-full md:w-80 rounded-xl py-2 ${isDarkMode ? 'bg-[#1A1A1A] border-[#3D3D3D] text-white' : 'bg-gray-50 border-gray-200'}`}
            />
            <div className="flex gap-3">
              <Select 
                value={statusFilter} 
                onChange={setStatusFilter}
                className={`w-40 h-9 ${isDarkMode ? 'dark-select' : ''}`}
                options={[
                  { value: 'All', label: 'All Statuses' },
                  { value: 'Draft', label: 'Draft' },
                  { value: 'Under Review', label: 'Under Review' },
                  { value: 'Accepted', label: 'Accepted' },
                  { value: 'Rejected', label: 'Rejected' },
                ]}
              />
            </div>
          </div>

          <Table 
            columns={columns} 
            dataSource={filteredData} 
            pagination={{ pageSize: 10 }} 
            className={`ora-table ${isDarkMode ? 'dark-table' : ''}`} 
          />
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .ora-table .ant-table-thead > tr > th { background-color: #7A1849 !important; color: white !important; font-weight: 700 !important; font-size: 11px !important; text-transform: uppercase; border-bottom: none; padding: 14px 16px; }
        .dark-table .ant-table { background: transparent; color: #E5E7EB; }
        .dark-table .ant-table-tbody > tr > td { color: #E5E7EB; border-bottom: 1px solid #2D2D2D; padding: 14px 16px; }
        .dark-select .ant-select-selector { background-color: #1A1A1A !important; border-color: #3D3D3D !important; color: white !important; }
      `}} />
    </AdminLayout>
  );
}