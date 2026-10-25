import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // <--- IMPORTED useNavigate
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { Table, Button, Input } from 'antd';
import { SearchOutlined, PlusOutlined, FilterOutlined } from '@ant-design/icons';

export default function Issues() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate(); // <--- INITIALIZED navigate
  const [searchText, setSearchText] = useState('');
  const [activeTab, setActiveTab] = useState('All Issues');

  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-100';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const borderCol = isDarkMode ? 'border-[#2D2D2D]' : 'border-gray-200';

  const data = [
    { key: '1', title: 'Quantum Computing & Sensor Arrays', vol: 'Vol. 12', issue: 'Issue 3', date: 'Sep 15, 2026', status: 'Published', articles: 18 },
    { key: '2', title: 'Coastal Resilience & Ecological Models', vol: 'Vol. 12', issue: 'Issue 2', date: 'Jun 10, 2026', status: 'Published', articles: 14 },
    { key: '3', title: 'Nanomaterials & Graphene Membranes', vol: 'Vol. 12', issue: 'Issue 1', date: 'Mar 05, 2026', status: 'Published', articles: 16 },
    { key: '4', title: 'Autonomous Vehicular Logistics Systems', vol: 'Vol. 11', issue: 'Issue 4', date: 'Dec 20, 2025', status: 'Published', articles: 20 },
    { key: '5', title: 'Renewable Integration in Hybrid Microgrids', vol: 'Vol. 13', issue: 'Issue 1', date: 'Mar 15, 2027', status: 'Scheduled', articles: 12 },
    { key: '6', title: 'Distributed Cryptographic Protocols', vol: 'Vol. 13', issue: 'Issue 2', date: 'Jun 18, 2027', status: 'Draft', articles: 0 },
    { key: '7', title: 'Thermal Drift in Quantum Computing', vol: 'Vol. 12', issue: 'Issue 4', date: 'Dec 15, 2026', status: 'Scheduled', articles: 8 },
  ];

  const columns = [
    { title: 'ISSUE TITLE', dataIndex: 'title', render: t => <span className={`text-[13px] font-bold ${textMain}`}>{t}</span> },
    { title: 'VOLUME', dataIndex: 'vol', render: t => <span className={`text-[12px] ${textMuted}`}>{t}</span> },
    { title: 'ISSUE NO.', dataIndex: 'issue', render: t => <span className={`text-[12px] ${textMuted}`}>{t}</span> },
    { title: 'PUBLICATION DATE', dataIndex: 'date', render: t => <span className={`text-[12px] ${textMuted}`}>{t}</span> },
    { 
      title: 'STATUS', 
      dataIndex: 'status', 
      render: s => {
        return <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
          s === 'Published' ? 'bg-green-50 text-green-600 border-green-200' : 
          s === 'Scheduled' ? 'bg-blue-50 text-blue-600 border-blue-200' : 
          'bg-amber-50 text-amber-600 border-amber-200'
        }`}>{s}</span>;
      } 
    },
    { title: 'NO. OF ARTICLES', dataIndex: 'articles', render: t => <span className={`text-[12px] font-medium ${textMain}`}>{t} articles</span> },
    { 
      title: 'ACTIONS', 
      align: 'right', 
      render: () => (
        <div className="flex gap-4 justify-end">
          <button className="text-[#7A1849] text-[12px] font-bold hover:underline">Edit</button>
          <button className="text-red-500 text-[12px] font-bold hover:underline">Delete</button>
        </div>
      ) 
    }
  ];

  return (
    <AdminLayout>
      <div className="max-w-[1400px] mx-auto animate-fade-in-up">
        <div className="flex justify-between items-end mb-6">
          <div>
            <p className={`text-[11px] font-bold tracking-widest uppercase mb-1.5 ${textMuted}`}>Workspace / Issues</p>
            <h1 className={`text-2xl font-serif font-bold ${textMain}`}>Manage Issues</h1>
            <p className={`text-[13px] ${textMuted}`}>Configure volumes, release tracks, and compilation order for accepted manuscripts.</p>
          </div>
          {/* FIXED BUTTON ROUTING */}
          <button 
            onClick={() => navigate('/managing-editor/issues/add')} 
            className="bg-[#7A1849] text-white px-5 py-2.5 rounded-xl text-[13px] font-bold hover:bg-[#5E1136] shadow-md flex items-center gap-2 transition-all"
          >
            <PlusOutlined /> Add New Issue
          </button>
        </div>

        <div className={`rounded-2xl border shadow-sm ${bgCard}`}>
          
          {/* Toolbar */}
          <div className={`p-4 border-b flex flex-col md:flex-row justify-between items-center gap-4 ${borderCol}`}>
            <div className="flex gap-2">
              {['All Issues (12)', 'Published', 'Scheduled', 'Drafts'].map((tab) => (
                <button 
                  key={tab} 
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-[12px] font-bold transition-colors ${
                    activeTab === tab 
                      ? 'bg-[#7A1849] text-white shadow-sm' 
                      : isDarkMode ? 'text-gray-400 hover:bg-[#2A2A2A]' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            <div className="flex gap-3 w-full md:w-auto">
              <Input 
                placeholder="Search issues..." 
                prefix={<SearchOutlined className="text-gray-400" />} 
                value={searchText} 
                onChange={(e) => setSearchText(e.target.value)} 
                className={`w-full md:w-64 rounded-lg ${isDarkMode ? 'bg-[#1A1A1A] border-[#3D3D3D] text-white' : 'bg-gray-50 border-gray-200'}`} 
              />
              <button className={`px-4 py-2 rounded-lg border text-[13px] font-bold flex items-center gap-2 transition-colors ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50 bg-white'}`}>
                <FilterOutlined /> Filters
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="p-2">
            <Table 
              columns={columns} 
              dataSource={data} 
              pagination={{ pageSize: 7, showSizeChanger: false, position: ['bottomLeft'] }} 
              className={`ora-table ${isDarkMode ? 'dark-table' : ''}`} 
            />
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .ora-table .ant-table-thead > tr > th { 
          background-color: #F3F4F6 !important; 
          color: #6B7280 !important; 
          font-weight: 700 !important; 
          font-size: 10px !important; 
          text-transform: uppercase; 
          border-bottom: 1px solid #E5E7EB; 
          padding: 12px 16px; 
        } 
        .dark-table .ant-table { background: transparent; color: #E5E7EB; }
        .dark-table .ant-table-thead > tr > th { background-color: #2A2A2A !important; color: #9CA3AF !important; border-bottom: 1px solid #3D3D3D; }
        .dark-table .ant-table-tbody > tr > td { color: #E5E7EB; border-bottom: 1px solid #2D2D2D; padding: 14px 16px; }
        .ora-table .ant-table-tbody > tr > td { padding: 14px 16px; border-bottom: 1px solid #F3F4F6; }
        .ant-pagination-item-active { border-color: #7A1849 !important; }
        .ant-pagination-item-active a { color: #7A1849 !important; }
      `}} />
    </AdminLayout>
  );
}