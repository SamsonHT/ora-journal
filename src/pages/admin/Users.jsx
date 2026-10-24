import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Added useNavigate
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { Table, Tag, Button, Input, Space } from 'antd';
import { SearchOutlined, PlusOutlined, EditOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons'; // Added EyeOutlined

export default function Users() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate(); // Initialize navigate
  const [searchText, setSearchText] = useState('');

  // Theme classes
  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-100';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';

  // Mock Data
  const data = [
    { key: '1', name: 'Dr. Amara Okafor', email: 'amara.okafor@ora.es', role: 'Editor', status: 'Active', joined: 'Sep 18, 2024', last: '12 min ago', initials: 'AO', color: 'bg-purple-100 text-purple-700' },
    { key: '2', name: 'Milo Peterson', email: 'milo.peterson@research.org', role: 'Reviewer', status: 'Active', joined: 'Jan 12, 2025', last: '1 hour ago', initials: 'MP', color: 'bg-blue-100 text-blue-700' },
    { key: '3', name: 'Prof. Elena Rossi', email: 'elena.rossi@polimi.it', role: 'Author', status: 'Active', joined: 'Mar 04, 2025', last: 'Yesterday', initials: 'ER', color: 'bg-amber-100 text-amber-700' },
    { key: '4', name: 'Dr. Jia Chen', email: 'jia.chen@nus.edu.sg', role: 'Reviewer', status: 'Pending', joined: 'Sep 23, 2026', last: 'Invitation sent', initials: 'JC', color: 'bg-teal-100 text-teal-700' },
    { key: '5', name: 'Fatima Rahman', email: 'fatima.rahman@ucf.ac.uk', role: 'Author', status: 'Suspended', joined: 'Nov 15, 2024', last: 'Aug 02, 2026', initials: 'FR', color: 'bg-rose-100 text-rose-700' },
  ];

  // Ant Design Table Columns
  const columns = [
    {
      title: 'USER',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
      render: (text, record) => (
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-[12px] font-bold ${record.color}`}>
            {record.initials}
          </div>
          <div>
            <p className={`text-[14px] font-bold ${textMain}`}>{record.name}</p>
            <p className={`text-[12px] ${textMuted}`}>{record.email}</p>
          </div>
        </div>
      ),
    },
    {
      title: 'ROLE',
      dataIndex: 'role',
      key: 'role',
      sorter: (a, b) => a.role.localeCompare(b.role),
      filters: [
        { text: 'Editor', value: 'Editor' },
        { text: 'Reviewer', value: 'Reviewer' },
        { text: 'Author', value: 'Author' },
      ],
      onFilter: (value, record) => record.role.indexOf(value) === 0,
      render: (text) => <span className={`text-[13px] font-medium ${textMain}`}>{text}</span>,
    },
    {
      title: 'STATUS',
      dataIndex: 'status',
      key: 'status',
      filters: [
        { text: 'Active', value: 'Active' },
        { text: 'Pending', value: 'Pending' },
        { text: 'Suspended', value: 'Suspended' },
      ],
      onFilter: (value, record) => record.status.indexOf(value) === 0,
      render: (status) => (
        <Tag 
          color={status === 'Active' ? 'success' : status === 'Pending' ? 'warning' : 'error'}
          className="rounded-full px-3 py-1 font-bold text-[11px] border-0"
        >
          {status.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: 'JOINED',
      dataIndex: 'joined',
      key: 'joined',
      sorter: (a, b) => new Date(a.joined) - new Date(b.joined),
      render: (text) => <span className={`text-[13px] ${textMuted}`}>{text}</span>,
    },
    {
      title: 'LAST ACTIVITY',
      dataIndex: 'last',
      key: 'last',
      render: (text) => <span className={`text-[13px] ${textMuted}`}>{text}</span>,
    },
    {
      title: 'ACTIONS',
      key: 'actions',
      align: 'right',
      render: (_, record) => (
        <Space size="small">
          {/* NEW VIEW BUTTON */}
          <Button 
            type="text" 
            icon={<EyeOutlined />} 
            onClick={() => navigate(`/admin/users/view/${record.key}`)}
            className="text-gray-500 hover:text-[#7A1849] hover:bg-[#FCF7F9] font-bold text-[13px]"
          >
            View
          </Button>
          <Button type="text" icon={<EditOutlined />} className="text-[#7A1849] hover:bg-[#FCF7F9] font-bold text-[13px]">
            Edit
          </Button>
          <Button type="text" danger icon={<DeleteOutlined />} className="text-[13px]" />
        </Space>
      ),
    },
  ];

  return (
    <AdminLayout>
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
            <p className={`text-[11px] font-bold tracking-widest uppercase mb-1.5 ${textMuted}`}>Workspace / Administration</p>
            <h1 className={`text-3xl font-serif font-bold ${textMain}`}>Users Directory</h1>
            <p className={`text-[14px] mt-1.5 ${textMuted}`}>Manage access, roles, invitations, and account status across the journal.</p>
          </div>
          <div className="flex gap-3">
            <Link to="/admin/users/add" className="bg-[#7A1849] text-white px-5 py-2.5 rounded-xl text-[13px] font-bold hover:bg-[#5E1136] transition-all hover:-translate-y-0.5 shadow-md shadow-[#7A1849]/20 flex items-center gap-2">
              <PlusOutlined /> Add User
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {[
            { label: 'Total users', value: '1,284', trend: '+12%' },
            { label: 'Active Editors', value: '64', trend: '+4' },
            { label: 'Active Reviewers', value: '238', trend: '+18' },
            { label: 'Pending Invites', value: '18', trend: '-2' },
          ].map((stat, i) => (
            <div key={i} className={`p-6 rounded-2xl border shadow-sm transition-all hover:shadow-md ${bgCard}`}>
              <p className={`text-[12px] font-bold mb-1 ${textMuted}`}>{stat.label}</p>
              <div className="flex justify-between items-end">
                <h3 className={`text-3xl font-bold ${textMain}`}>{stat.value}</h3>
                <span className="text-[11px] font-bold text-green-500 bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded-md">{stat.trend}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Ant Design Table Container */}
        <div className={`rounded-2xl border shadow-sm p-6 ${bgCard}`}>
          
          <div className="flex justify-between items-center mb-6">
            <Input 
              placeholder="Search by name or email..." 
              prefix={<SearchOutlined className="text-gray-400" />}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className={`w-72 rounded-xl py-2 ${isDarkMode ? 'bg-[#1A1A1A] border-[#3D3D3D] text-white' : 'bg-gray-50 border-gray-200'}`}
            />
            <div className={`text-[13px] font-medium ${textMuted}`}>
              Showing {data.length} active users
            </div>
          </div>

          {/* The Data Grid */}
          <Table 
            columns={columns} 
            dataSource={data} 
            pagination={{ pageSize: 5 }}
            className={`ora-table ${isDarkMode ? 'dark-table' : ''}`}
            scroll={{ x: 1000 }}
          />
        </div>
      </div>

      {/* Custom CSS to override Ant Design Table Colors to match ORA Brand */}
      <style dangerouslySetInnerHTML={{__html: `
        .ora-table .ant-table-thead > tr > th {
          background-color: #7A1849 !important;
          color: white !important;
          font-weight: 700 !important;
          font-size: 11px !important;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-bottom: none;
          padding: 16px 24px;
        }
        .ora-table .ant-table-tbody > tr > td {
          padding: 16px 24px;
          border-bottom: 1px solid ${isDarkMode ? '#2D2D2D' : '#F3F4F6'};
        }
        .ora-table .ant-table-tbody > tr:hover > td {
          background-color: ${isDarkMode ? '#2A2A2A' : '#F9FAFB'} !important;
        }
        
        /* Dark Mode Overrides for AntD */
        .dark-table .ant-table {
          background: transparent;
          color: #E5E7EB;
        }
        .dark-table .ant-table-tbody > tr > td {
          color: #E5E7EB;
        }
        .dark-table .ant-pagination-item a {
          color: #E5E7EB;
        }
        .dark-table .ant-pagination-item-active {
          border-color: #7A1849;
        }
        .dark-table .ant-pagination-item-active a {
          color: #7A1849;
        }
      `}} />
    </AdminLayout>
  );
}