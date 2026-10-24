import React from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { Table, Tag, Button, Input, Space } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';

export default function SubjectAreas() {
  const { isDarkMode } = useTheme();
  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-100';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';

  const data = [
    { key: '1', name: 'Computer Science', desc: 'AI, hybrid networks, and distributed systems.', count: '86', status: 'Active' },
    { key: '2', name: 'Nanotechnology', desc: 'High volume purification filters and graphene synthesis.', count: '54', status: 'Active' },
    { key: '3', name: 'Quantum Physics', desc: 'Quantum cryptography and thermal fluctuations.', count: '41', status: 'Active' },
    { key: '4', name: 'Applied Economics', desc: 'Urban redevelopment plans and socio-political modeling.', count: '33', status: 'Active' },
    { key: '5', name: 'Materials Science', desc: 'Micro-structural composites and high-capacity battery silicon anodes.', count: '29', status: 'Active' },
    { key: '6', name: 'Logistics Systems', desc: 'Autonomous vehicle routing optimization and network planning.', count: '12', status: 'Inactive' },
  ];

  const columns = [
    { title: 'SUBJECT AREA NAME', dataIndex: 'name', key: 'name', render: text => <span className={`text-[13px] font-bold ${textMain}`}>{text}</span> },
    { title: 'DESCRIPTION', dataIndex: 'desc', key: 'desc', render: text => <span className={`text-[13px] ${textMuted}`}>{text}</span> },
    { title: 'MANUSCRIPTS', dataIndex: 'count', key: 'count', render: text => <span className={`text-[13px] font-medium ${textMain}`}>{text} manuscripts</span> },
    { title: 'STATUS', dataIndex: 'status', key: 'status', render: status => <Tag color={status === 'Active' ? 'success' : 'default'} className="rounded-full px-3 py-1 font-bold text-[11px] border-0">{status.toUpperCase()}</Tag> },
    { title: 'ACTIONS', key: 'actions', align: 'right', render: () => <Space><Button type="text" className="text-[#7A1849] font-bold text-[12px]">Edit</Button><Button type="text" danger className="font-bold text-[12px]">Delete</Button></Space> },
  ];

  return (
    <AdminLayout>
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
            <p className={`text-[11px] font-bold tracking-widest uppercase mb-1.5 ${textMuted}`}>Workspace / Administration</p>
            <h1 className={`text-3xl font-serif font-bold ${textMain}`}>Subject Areas</h1>
            <p className={`text-[14px] mt-1.5 ${textMuted}`}>Define and manage subject areas for manuscript classification.</p>
          </div>
          <Link to="/admin/subjects/add" className="bg-[#7A1849] text-white px-5 py-2.5 rounded-xl text-[13px] font-bold hover:bg-[#5E1136] transition-all shadow-md flex items-center gap-2">
            <PlusOutlined /> New subject area
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {[{ l: 'Active Areas', v: '15' }, { l: 'Assigned Manuscripts', v: '342' }, { l: 'Unassigned', v: '8' }].map((s, i) => (
            <div key={i} className={`p-6 rounded-2xl border shadow-sm ${bgCard}`}>
              <p className={`text-[12px] font-bold mb-1 ${textMuted}`}>{s.l}</p>
              <h3 className={`text-3xl font-bold ${textMain}`}>{s.v}</h3>
            </div>
          ))}
        </div>

        <div className={`rounded-2xl border shadow-sm p-6 ${bgCard}`}>
          <div className="flex justify-between items-center mb-6">
            <h2 className={`text-[16px] font-bold ${textMain}`}>Academic Taxonomy</h2>
            <Input placeholder="Search subject areas..." prefix={<SearchOutlined />} className={`w-64 rounded-xl ${isDarkMode ? 'bg-[#1A1A1A] border-[#3D3D3D] text-white' : 'bg-gray-50'}`} />
          </div>
          <Table columns={columns} dataSource={data} pagination={false} className={`ora-table ${isDarkMode ? 'dark-table' : ''}`} />
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .ora-table .ant-table-thead > tr > th { background-color: #7A1849 !important; color: white !important; font-weight: 700 !important; font-size: 11px !important; text-transform: uppercase; border-bottom: none; }
        .dark-table .ant-table { background: transparent; color: #E5E7EB; }
        .dark-table .ant-table-tbody > tr > td { color: #E5E7EB; border-bottom: 1px solid #2D2D2D; }
      `}} />
    </AdminLayout>
  );
}