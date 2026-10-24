import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { Table, Input, Select, Button, Space, Tag } from 'antd';
import { 
  SearchOutlined, MailOutlined, InboxOutlined, 
  CheckCircleOutlined, EyeOutlined, DeleteOutlined, UserOutlined 
} from '@ant-design/icons';

export default function Messages() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');
  const [statusFilter, setStatusFilter] = useState('All messages');

  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-100';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';

  const messages = [
    { key: '1', name: 'Dr. Alemayehu Tadesse', email: 'alemayehu@aau.edu.et', subject: 'Manuscript Submission Inquiry', date: 'Oct 24, 2026', time: '10:42 AM', status: 'Unread' },
    { key: '2', name: 'Sarah Jenkins', email: 's.jenkins@mit.edu', subject: 'Partnership Opportunity - MIT Press', date: 'Oct 23, 2026', time: '02:15 PM', status: 'Unread' },
    { key: '3', name: 'Mulugeta Bekele', email: 'mulugeta.b@gmail.com', subject: 'Technical Support - Cannot Upload PDF', date: 'Oct 22, 2026', time: '09:30 AM', status: 'Read' },
    { key: '4', name: 'Prof. David Miller', email: 'd.miller@london.ac.uk', subject: 'Reviewer Application', date: 'Oct 20, 2026', time: '11:20 AM', status: 'Read' },
    { key: '5', name: 'Fatima Rahman', email: 'fatima.rahman@ucf.ac.uk', subject: 'Copyright Clearance Question', date: 'Oct 19, 2026', time: '03:45 PM', status: 'Archived' },
  ];

  const filteredData = messages.filter(msg => {
    const matchesSearch = msg.name.toLowerCase().includes(searchText.toLowerCase()) || 
                          msg.subject.toLowerCase().includes(searchText.toLowerCase());
    const matchesStatus = statusFilter === 'All messages' || msg.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const columns = [
    { 
      title: <span className="flex items-center gap-2"><UserOutlined /> SENDER</span>, 
      dataIndex: 'name', key: 'name', 
      render: (text, record) => (
        <div className="flex items-center gap-3">
          <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm ${
            record.status === 'Unread' ? 'bg-[#7A1849] text-white' : isDarkMode ? 'bg-[#2A2A2A] text-gray-300' : 'bg-gray-100 text-gray-600'
          }`}>
            {text.charAt(0)}
          </div>
          <div>
            <p className={`text-[13px] font-bold ${record.status === 'Unread' ? 'text-[#7A1849]' : textMain}`}>{text}</p>
            <p className={`text-[11px] ${textMuted}`}>{record.email}</p>
          </div>
        </div>
      )
    },
    { 
      title: <span className="flex items-center gap-2"><MailOutlined /> SUBJECT</span>, 
      dataIndex: 'subject', key: 'subject', 
      render: (text) => <span className={`text-[13px] font-medium ${textMain}`}>{text}</span> 
    },
    { 
      title: 'DATE', 
      dataIndex: 'date', key: 'date', 
      render: (text, record) => (
        <div>
          <p className={`text-[13px] font-medium ${textMain}`}>{text}</p>
          <p className={`text-[11px] ${textMuted}`}>{record.time}</p>
        </div>
      ) 
    },
    { 
      title: 'STATUS', 
      dataIndex: 'status', key: 'status', 
      render: (status) => {
        let color = 'default';
        if (status === 'Unread') color = 'error';
        if (status === 'Read') color = 'success';
        return <Tag color={color} className="rounded-full px-3 py-0.5 font-bold text-[10px] border-0 uppercase">{status}</Tag>;
      }
    },
    {
      title: 'ACTIONS', key: 'actions', align: 'right',
      render: (_, record) => (
        <Space size="small">
          <Button type="text" icon={<EyeOutlined />} onClick={() => navigate(`/admin/messages/${record.key}`)} className="text-[#7A1849] font-bold text-[12px]">Read</Button>
          <Button type="text" danger icon={<DeleteOutlined />} className="text-[12px]" />
        </Space>
      )
    },
  ];

  return (
    <AdminLayout>
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
            <p className={`text-[11px] font-bold tracking-widest uppercase mb-1.5 ${textMuted}`}>Workspace / Communication</p>
            <h1 className={`text-2xl font-serif font-bold ${textMain}`}>Inbox</h1>
            <p className={`text-[13px] mt-1 ${textMuted}`}>Manage inquiries and messages from the Contact Us page.</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {[
            { label: 'Total Messages', value: '124', icon: <InboxOutlined />, color: 'text-blue-500 bg-blue-50' },
            { label: 'Unread', value: '2', icon: <MailOutlined />, color: 'text-red-500 bg-red-50' },
            { label: 'Read', value: '118', icon: <CheckCircleOutlined />, color: 'text-green-500 bg-green-50' },
            { label: 'Archived', value: '4', icon: <InboxOutlined />, color: 'text-gray-500 bg-gray-50' },
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
          {/* Toolbar */}
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
            <Input 
              placeholder="Search by sender or subject..." 
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
                  { value: 'All messages', label: 'All messages' },
                  { value: 'Unread', label: 'Unread' },
                  { value: 'Read', label: 'Read' },
                  { value: 'Archived', label: 'Archived' },
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

      {/* Custom CSS to force the ORA Brand Maroon Header */}
      <style dangerouslySetInnerHTML={{__html: `
        .ora-table .ant-table-thead > tr > th { 
          background-color: #7A1849 !important; 
          color: white !important; 
          font-weight: 700 !important; 
          font-size: 11px !important; 
          text-transform: uppercase; 
          border-bottom: none; 
          padding: 14px 16px; 
        }
        .dark-table .ant-table { background: transparent; color: #E5E7EB; }
        .dark-table .ant-table-tbody > tr > td { color: #E5E7EB; border-bottom: 1px solid #2D2D2D; padding: 14px 16px; }
        .dark-table .ant-pagination-item a { color: #E5E7EB; }
        .dark-select .ant-select-selector { background-color: #1A1A1A !important; border-color: #3D3D3D !important; color: white !important; }
      `}} />
    </AdminLayout>
  );
}