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

  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-200';
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

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Unread': return 'bg-[#FEF2F2] text-[#B91C1C]';
      case 'Read': return 'bg-[#F0FDF4] text-[#15803D]';
      case 'Archived': return 'bg-[#F3F4F6] text-[#4B5563]';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  const columns = [
    { 
      title: <span className="flex items-center gap-2"><UserOutlined /> Sender</span>, 
      dataIndex: 'name', key: 'name', 
      render: (text, record) => (
        <div className="flex items-center gap-3">
          <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-[13px] ${
            record.status === 'Unread' ? 'bg-[#7A1849] text-white' : isDarkMode ? 'bg-[#2A2A2A] text-gray-300' : 'bg-gray-100 text-gray-600'
          }`}>
            {text.charAt(0)}
          </div>
          <div>
            <p className={`text-[13px] font-bold ${record.status === 'Unread' ? 'text-[#7A1849]' : textMain}`}>{text}</p>
            <p className={`text-[11px] font-medium ${textMuted}`}>{record.email}</p>
          </div>
        </div>
      )
    },
    { 
      title: <span className="flex items-center gap-2"><MailOutlined /> Subject</span>, 
      dataIndex: 'subject', key: 'subject', 
      render: (text) => <span className={`text-[13px] font-medium ${textMain}`}>{text}</span> 
    },
    { 
      title: 'Date', 
      dataIndex: 'date', key: 'date', 
      render: (text, record) => (
        <div>
          <p className={`text-[12px] font-bold ${textMain}`}>{text}</p>
          <p className={`text-[11px] font-medium ${textMuted}`}>{record.time}</p>
        </div>
      ) 
    },
    { 
      title: 'Status', 
      dataIndex: 'status', key: 'status', 
      render: (status) => (
        <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${getStatusStyle(status)}`}>
          {status}
        </span>
      )
    },
    {
      title: 'Actions', key: 'actions', align: 'right',
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
      <div className="max-w-[1400px] mx-auto animate-fade-in-up">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <p className={`text-[10px] font-bold tracking-[0.1em] uppercase mb-1.5 ${textMuted}`}>WORKSPACE / COMMUNICATION</p>
            <h1 className={`text-[26px] font-bold tracking-tight ${textMain}`}>Inbox</h1>
            <p className={`text-[13px] font-medium mt-1 ${textMuted}`}>Manage inquiries and messages from the Contact Us page.</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {[
            { label: 'Total Messages', value: '124', icon: <InboxOutlined />, color: 'text-blue-600 bg-blue-50' },
            { label: 'Unread', value: '2', icon: <MailOutlined />, color: 'text-red-600 bg-red-50' },
            { label: 'Read', value: '118', icon: <CheckCircleOutlined />, color: 'text-green-600 bg-green-50' },
            { label: 'Archived', value: '4', icon: <InboxOutlined />, color: 'text-gray-600 bg-gray-50' },
          ].map((stat, i) => (
            <div key={i} className={`p-5 rounded-xl border shadow-sm ${bgCard}`}>
              <div className="flex justify-between items-start mb-2">
                <p className={`text-[11px] font-bold ${textMuted}`}>{stat.label}</p>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${stat.color}`}>{stat.icon}</div>
              </div>
              <h3 className={`text-[28px] font-bold tracking-tight ${textMain}`}>{stat.value}</h3>
            </div>
          ))}
        </div>

        {/* Table Container */}
        <div className={`rounded-xl border shadow-sm p-6 ${bgCard}`}>
          {/* Toolbar */}
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
            <div className="relative w-full md:w-80">
              <Input 
                placeholder="Search by sender or subject..." 
                prefix={<SearchOutlined className="text-gray-400 text-[13px]" />}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className={`w-full rounded-lg py-2 text-[12px] ${isDarkMode ? 'bg-[#1A1A1A] border-[#3D3D3D] text-white' : 'bg-white border-gray-200'}`}
              />
            </div>
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
        .dark-select .ant-select-selector { background-color: #1A1A1A !important; border-color: #3D3D3D !important; color: white !important; }
      `}} />
    </AdminLayout>
  );
}