import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { Table, Input } from 'antd';
import { SearchOutlined, CalendarOutlined } from '@ant-design/icons';

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

  // Render Deadline Pill with exact colors from screenshot
  const renderDeadline = (date) => {
    const isSep = date.includes('Sep');
    const isOct = date.includes('Oct');
    
    let style = 'bg-gray-50 text-gray-600 border border-gray-100'; 
    if (isSep) style = 'bg-[#FFF7ED] text-[#C2410C]'; // Light Orange
    if (isOct) style = 'bg-[#EFF6FF] text-[#2563EB]'; // Light Blue

    return (
      <span className={`px-2.5 py-1.5 rounded-md text-[11px] font-bold tracking-wide ${style}`}>
        {date}
      </span>
    );
  };

  const columns = [
    { 
      title: 'MANUSCRIPT TITLE', 
      dataIndex: 'title', 
      key: 'title', 
      render: (text, record) => (
        <div className="py-1">
          {/* Exact font weight and color match */}
          <p className={`text-[13px] font-bold ${textMain} leading-tight`}>{text}</p>
          <p className={`text-[11.5px] font-medium mt-1 ${textMuted}`}>{record.journal}</p>
        </div>
      )
    },
    { 
      title: 'VERSION', 
      dataIndex: 'version', 
      key: 'version', 
      render: text => <span className={`text-[12px] font-medium ${textMuted}`}>{text}</span> 
    },
    { 
      title: 'DEADLINE', 
      dataIndex: 'deadline', 
      key: 'deadline', 
      render: text => renderDeadline(text) 
    },
    { 
      title: 'ACTION', 
      key: 'actions', 
      align: 'right', 
      render: (_, record) => (
        <button 
          onClick={() => navigate(`/author/proof/${record.key}`)} 
          className="bg-[#7A1849] text-white font-bold text-[11px] rounded-md px-5 py-1.5 hover:bg-[#5E1136] transition-colors shadow-sm"
        >
          View
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
            <p className="text-[10px] font-bold tracking-[0.1em] uppercase text-[#7A1849] mb-1.5">WORKSPACE / PROOFS</p>
            {/* Removed font-serif to match the image */}
            <h1 className={`text-[26px] font-bold tracking-tight ${textMain}`}>Pending Proofs</h1>
            <p className={`text-[13px] font-medium mt-1 ${textMuted}`}>Review and approve your pre-publication papers here.</p>
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

        {/* Table Container */}
        <div className={`rounded-xl border shadow-sm overflow-hidden ${bgCard}`}>
          
          {/* Header & Search Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-5 border-b border-gray-100 dark:border-gray-800">
             <h2 className={`text-[15px] font-bold tracking-tight ${textMain}`}>Pending Proof Queue</h2>
             
             <div className="flex items-center gap-3 w-full md:w-auto">
                <Input 
                  placeholder="Search title..." 
                  prefix={<SearchOutlined className="text-gray-400 text-[13px]" />}
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className={`w-full md:w-64 rounded-lg py-1.5 text-[12px] ${isDarkMode ? 'bg-[#1A1A1A] border-[#3D3D3D] text-white' : 'bg-white border-gray-200'}`}
                />
                <span className={`text-[11px] font-bold px-2.5 py-1 rounded-md whitespace-nowrap ${isDarkMode ? 'bg-gray-800 text-gray-400' : 'bg-gray-50 text-gray-600 border border-gray-200'}`}>
                  {filteredData.length} Manuscripts
                </span>
             </div>
          </div>

          <Table 
            columns={columns} 
            dataSource={filteredData} 
            pagination={false} 
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
      `}} />
    </AdminLayout>
  );
}