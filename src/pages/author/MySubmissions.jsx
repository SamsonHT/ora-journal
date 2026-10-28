import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { Table, Input } from 'antd';
import { SearchOutlined, CalendarOutlined } from '@ant-design/icons';

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
    { key: '7', title: 'Predictive structural analysis of bridge pillars via lidar', journal: 'Civil & Infra Journal', date: 'Apr 29, 2026', status: 'Submitted' },
  ];

  // Calculate dynamic counts for the tabs
  const counts = {
    All: data.length,
    Draft: data.filter(d => d.status === 'Draft').length,
    Submitted: data.filter(d => d.status === 'Submitted').length,
    'Under Review': data.filter(d => d.status === 'Under Review').length,
    Accepted: data.filter(d => d.status === 'Accepted').length,
    Rejected: data.filter(d => d.status === 'Rejected').length,
  };

  const tabs = ['All', 'Draft', 'Submitted', 'Under Review', 'Accepted', 'Rejected'];

  const filteredData = data.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchText.toLowerCase());
    const matchesStatus = statusFilter === 'All' || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Custom Status Badge colors matching the screenshot
  const getStatusStyle = (status) => {
    switch (status) {
      case 'Accepted': return 'bg-[#F3E8F2] text-[#7A1849]';
      case 'Rejected': return 'bg-[#FDE8E8] text-[#D93025]';
      case 'Under Review': return 'bg-[#FDF2E9] text-[#B36B00]';
      case 'Submitted': return 'bg-[#EBF1FA] text-[#1A56DB]';
      case 'Draft': return 'bg-[#F3F4F6] text-[#4B5563]';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  const columns = [
    { 
      title: 'PAPER TITLE', 
      dataIndex: 'title', 
      key: 'title', 
      render: text => <span className={`text-[13px] font-bold ${textMain} tracking-tight`}>{text}</span> 
    },
    { 
      title: 'JOURNAL', 
      dataIndex: 'journal', 
      key: 'journal', 
      render: text => <span className={`text-[12px] font-medium ${textMuted}`}>{text}</span> 
    },
    { 
      title: 'SUBMISSION DATE', 
      dataIndex: 'date', 
      key: 'date', 
      render: text => <span className={`text-[12px] font-medium ${textMuted}`}>{text}</span> 
    },
    { 
      title: 'STATUS', 
      dataIndex: 'status', 
      key: 'status', 
      render: status => (
        <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold ${getStatusStyle(status)}`}>
          {status}
        </span>
      )
    },
    { 
      title: 'ACTIONS', 
      key: 'actions', 
      align: 'right', 
      render: () => (
        <button 
          onClick={() => navigate('/author/submissions/1')} 
          className="text-[#7A1849] font-bold text-[12px] hover:underline"
        >
          View Details
        </button>
      ) 
    }
  ];

  return (
    <AdminLayout>
      <div className="max-w-[1300px] mx-auto animate-fade-in-up">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <p className="text-[10px] font-bold tracking-[0.1em] uppercase text-[#7A1849] mb-1.5">WORKSPACE / SUBMISSIONS</p>
            {/* Removed font-serif to match the image */}
            <h1 className={`text-[26px] font-bold tracking-tight ${textMain}`}>My Submissions</h1>
            <p className={`text-[13px] font-medium mt-1 ${textMuted}`}>Manage and monitor progress of all your journal submissions.</p>
          </div>
          
          <div className="flex items-center gap-3">
            <button className={`flex items-center gap-2 px-4 py-2 border rounded-lg text-[13px] font-medium ${isDarkMode ? 'border-gray-700 text-gray-300 bg-[#1E1E1E]' : 'border-gray-200 text-gray-700 bg-white hover:bg-gray-50'}`}>
              <CalendarOutlined className="text-gray-400" />
              Sep 1 – Sep 25, 2026
            </button>
            <button 
              onClick={() => navigate('/author/submit')} 
              className="bg-[#7A1849] text-white px-5 py-2 rounded-lg text-[13px] font-bold hover:bg-[#5E1136] transition-all shadow-sm"
            >
              New Submission
            </button>
          </div>
        </div>

        {/* Main Table Container */}
        <div className={`rounded-xl border shadow-sm overflow-hidden ${bgCard}`}>
          
          {/* Toolbar: Tabs & Search */}
          <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center p-5 gap-4 border-b border-gray-100 dark:border-gray-800">
            
            {/* Tab Filters */}
            <div className="flex flex-wrap gap-2">
              {tabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => setStatusFilter(tab)}
                  className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-[12px] font-bold transition-all ${
                    statusFilter === tab
                      ? 'bg-[#7A1849] text-white shadow-sm'
                      : `bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 ${isDarkMode ? '!bg-[#1A1A1A] !border-[#3D3D3D] !text-gray-300 hover:!bg-[#2A2A2A]' : ''}`
                  }`}
                >
                  {tab}
                  {counts[tab] > 0 && (
                    <span className={`px-1.5 py-0.5 rounded-md text-[10px] bg-white ${
                      statusFilter === tab ? 'text-[#7A1849]' : 'text-gray-500'
                    }`}>
                      {counts[tab]}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full xl:w-64 shrink-0">
              <Input 
                placeholder="Search paper title..." 
                prefix={<SearchOutlined className="text-gray-400 text-[13px]" />}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className={`w-full rounded-lg py-1.5 text-[12px] ${isDarkMode ? 'bg-[#1A1A1A] border-[#3D3D3D] text-white' : 'bg-white border-gray-200'}`}
              />
            </div>
          </div>

          {/* Ant Design Table (Logic Untouched) */}
          <Table 
            columns={columns} 
            dataSource={filteredData} 
            pagination={{ pageSize: 10 }} 
            className={`ora-table ${isDarkMode ? 'dark-table' : ''}`} 
          />
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        /* Exact Table Header Styling */
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
        
        /* Table Body Styling */
        .dark-table .ant-table { background: transparent; color: #E5E7EB; }
        .dark-table .ant-table-tbody > tr > td { color: #E5E7EB; border-bottom: 1px solid #2D2D2D; padding: 16px; }
        .ora-table .ant-table-tbody > tr > td { padding: 16px; border-bottom: 1px solid #F3F4F6; }
        .ora-table .ant-table-tbody > tr:hover > td { background-color: ${isDarkMode ? '#2A2A2A' : '#FAFAFA'} !important; }
        
        /* Pagination Styling */
        .ora-table .ant-pagination { padding: 16px 24px; }
        .dark-table .ant-pagination-item { background-color: #1E1E1E; border-color: #3D3D3D; }
        .dark-table .ant-pagination-item a { color: #E5E7EB; }
      `}} />
    </AdminLayout>
  );
}