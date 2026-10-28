import React, { useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { Table, Button, Select, Modal } from 'antd';
import { 
  DollarOutlined, 
  FileTextOutlined, 
  CheckCircleOutlined, 
  CloseCircleOutlined, 
  MobileOutlined, 
  BankOutlined, 
  LockOutlined 
} from '@ant-design/icons';

export default function PublishingFees() {
  const { isDarkMode } = useTheme();
  const [statusFilter, setStatusFilter] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('telebirr');

  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-100';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';

  const data = [
    { key: '1', title: 'Deep learning approaches in neurological diagnostics', journal: 'Medical Imaging & Systems', type: 'APC (Gold Open Access)', amount: '$1,850.00', status: 'Pending', date: 'Due by Oct 14, 2026' },
    { key: '2', title: 'Quantum computing limits on cryptographic schemas', journal: 'Journal of Advanced Physics', type: 'Page & Color Charges', amount: '$450.00', status: 'Overdue', date: 'Due by Sep 01, 2026' },
    { key: '3', title: 'Graphene oxide synthesized filters for purification', journal: 'Nanotechnology Letters', type: 'APC (Gold Open Access)', amount: '$2,100.00', status: 'Paid', date: 'Paid on Sep 10, 2026' },
  ];

  const filteredData = data.filter(item => statusFilter === 'All' || item.status === statusFilter);

  const handlePayClick = (record) => {
    setSelectedInvoice(record);
    setIsModalOpen(true);
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Paid': return 'bg-[#F0FDF4] text-[#15803D]';
      case 'Pending': return 'bg-[#FFF7ED] text-[#C2410C]';
      case 'Overdue': return 'bg-[#FEF2F2] text-[#B91C1C]';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  const columns = [
    { 
      title: 'PAPER TITLE', 
      dataIndex: 'title', 
      key: 'title', 
      render: (text, record) => (
        <div>
          <p className={`text-[13px] font-bold ${textMain} leading-tight`}>{text}</p>
          <p className={`text-[11.5px] font-medium mt-1 ${textMuted}`}>{record.journal}</p>
        </div>
      )
    },
    { 
      title: 'FEE TYPE', 
      dataIndex: 'type', 
      key: 'type', 
      render: text => <span className={`text-[12px] font-medium ${textMuted}`}>{text}</span> 
    },
    { 
      title: 'AMOUNT', 
      dataIndex: 'amount', 
      key: 'amount', 
      render: text => <span className={`text-[13px] font-bold ${textMain}`}>{text}</span> 
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
      title: 'BILLING DATE / INFO', 
      dataIndex: 'date', 
      key: 'date', 
      render: text => <span className={`text-[12px] font-medium ${textMuted}`}>{text}</span> 
    },
    { 
      title: 'ACTIONS', 
      key: 'actions', 
      align: 'right', 
      render: (_, record) => (
        <Button 
          onClick={() => record.status !== 'Paid' && handlePayClick(record)}
          className={`${
            record.status === 'Paid' 
              ? (isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-50 text-gray-600 border border-gray-200') 
              : 'bg-[#7A1849] text-white hover:bg-[#5E1136]'
          } font-bold text-[11px] rounded-md border-0 px-5 h-8`}
        >
          {record.status === 'Paid' ? 'View Receipt' : 'Pay'}
        </Button>
      )
    }
  ];

  return (
    <AdminLayout>
      <div className="max-w-[1300px] mx-auto animate-fade-in-up">
        
        {/* Header */}
        <div className="mb-8">
          <p className={`text-[10px] font-bold tracking-[0.1em] uppercase mb-1.5 ${textMuted}`}>WORKSPACE / FEES</p>
          <h1 className={`text-[26px] font-bold tracking-tight ${textMain}`}>Publishing Fees</h1>
          <p className={`text-[13px] font-medium mt-1 ${textMuted}`}>Review Article Processing Charges (APCs) and invoicing statements.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className={`p-5 rounded-xl border shadow-sm ${bgCard}`}>
            <p className={`text-[11px] font-bold text-gray-400 mb-1`}>Pending Invoices</p>
            <h3 className={`text-[22px] font-bold tracking-tight ${textMain}`}>2,300.00 Birr</h3>
            <p className="text-[11px] font-medium text-[#D93025] mt-2">2 payments outstanding</p>
          </div>
          
          <div className={`p-5 rounded-xl border shadow-sm ${bgCard}`}>
            <p className={`text-[11px] font-bold text-gray-400 mb-1`}>Total Paid (YTD)</p>
            <h3 className={`text-[22px] font-bold tracking-tight ${textMain}`}>4,850.00 Birr</h3>
            <p className="text-[11px] font-medium text-[#15803D] mt-2">3 publications settled</p>
          </div>

          <div className={`p-5 rounded-xl border shadow-sm ${bgCard}`}>
            <p className={`text-[11px] font-bold text-gray-400 mb-1`}>Current Billing Account</p>
            <h3 className={`text-[16px] font-bold tracking-tight ${textMain}`}>Northstar Labs Group Account</h3>
            <p className="text-[11px] font-medium text-[#1A56DB] mt-2">Subsidized Institutional Rate (10% off)</p>
          </div>
        </div>

        {/* Table Container */}
        <div className={`rounded-xl border shadow-sm overflow-hidden ${bgCard}`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-5 border-b border-gray-100 dark:border-gray-800">
            <h2 className={`text-[15px] font-bold tracking-tight ${textMain}`}>Invoice Statements</h2>
            <Select 
              value={statusFilter} 
              onChange={setStatusFilter}
              className={`w-36 h-8 ${isDarkMode ? 'dark-select' : ''}`}
              options={[
                { value: 'All', label: 'All Statuses' },
                { value: 'Paid', label: 'Paid' },
                { value: 'Pending', label: 'Pending' },
                { value: 'Overdue', label: 'Overdue' },
              ]}
            />
          </div>
          <Table columns={columns} dataSource={filteredData} pagination={false} className={`ora-table ${isDarkMode ? 'dark-table' : ''}`} />
        </div>

        {/* Payment Methods Row */}
        <div className={`mt-6 p-5 rounded-xl border shadow-sm flex flex-col md:flex-row gap-4 ${bgCard}`}>
          <div className="flex-1 border border-gray-200 rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-[#4A1229] text-white px-2 py-1 rounded text-[10px] font-bold">Telebirr</div>
              <div>
                <p className={`text-[13px] font-bold ${textMain}`}>Telebirr</p>
                <p className={`text-[11px] ${textMuted}`}>Pay securely with your Telebirr wallet</p>
              </div>
            </div>
            <button className="text-[12px] font-bold text-[#7A1849] hover:underline">Edit</button>
          </div>
          
          <div className="flex-1 border border-gray-200 rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-[#7A1849] text-white px-2 py-1 rounded text-[10px] font-bold">CBEbirr</div>
              <div>
                <p className={`text-[13px] font-bold ${textMain}`}>CBEbirr</p>
                <p className={`text-[11px] ${textMuted}`}>Pay securely with your CBEbirr wallet</p>
              </div>
            </div>
            <button className="text-[12px] font-bold text-[#7A1849] hover:underline">Manage</button>
          </div>
        </div>
      </div>

      {/* PAYMENT MODAL */}
      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        width={480}
        centered
        className={`ora-modal ${isDarkMode ? 'dark-modal' : ''}`}
        closeIcon={<CloseCircleOutlined className="text-gray-400 hover:text-gray-600" />}
      >
        <div className="pt-4 pb-2">
          <h2 className={`text-xl font-bold mb-1 ${textMain}`}>Complete Payment</h2>
          <p className={`text-[13px] mb-6 ${textMuted}`}>Select a payment method to settle your invoice of <strong className="text-[#7A1849]">{selectedInvoice?.amount}</strong>.</p>

          <div className="space-y-3 mb-8">
            {/* Telebirr Option */}
            <label 
              onClick={() => setPaymentMethod('telebirr')}
              className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                paymentMethod === 'telebirr' 
                  ? 'border-[#7A1849] bg-[#FCF7F9]' 
                  : `border-gray-200 ${isDarkMode ? 'hover:border-gray-600' : 'hover:border-gray-300'}`
              }`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${paymentMethod === 'telebirr' ? 'bg-[#7A1849] text-white' : 'bg-gray-100 text-gray-500'}`}>
                <MobileOutlined />
              </div>
              <div className="flex-1">
                <p className={`text-[14px] font-bold ${textMain}`}>Telebirr</p>
                <p className={`text-[11px] ${textMuted}`}>Pay securely with your Telebirr mobile wallet.</p>
              </div>
              {paymentMethod === 'telebirr' && <CheckCircleOutlined className="text-[#7A1849] text-lg" />}
            </label>

            {/* CBEbirr Option */}
            <label 
              onClick={() => setPaymentMethod('cbebirr')}
              className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                paymentMethod === 'cbebirr' 
                  ? 'border-[#7A1849] bg-[#FCF7F9]' 
                  : `border-gray-200 ${isDarkMode ? 'hover:border-gray-600' : 'hover:border-gray-300'}`
              }`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${paymentMethod === 'cbebirr' ? 'bg-[#7A1849] text-white' : 'bg-gray-100 text-gray-500'}`}>
                <BankOutlined />
              </div>
              <div className="flex-1">
                <p className={`text-[14px] font-bold ${textMain}`}>CBEbirr</p>
                <p className={`text-[11px] ${textMuted}`}>Pay directly from your Commercial Bank of Ethiopia account.</p>
              </div>
              {paymentMethod === 'cbebirr' && <CheckCircleOutlined className="text-[#7A1849] text-lg" />}
            </label>
          </div>

          <button 
            onClick={() => { alert("Redirecting to payment gateway..."); setIsModalOpen(false); }}
            className="w-full bg-[#7A1849] text-white py-3.5 rounded-xl font-bold hover:bg-[#5E1136] transition-all shadow-md flex items-center justify-center gap-2"
          >
            <LockOutlined /> Pay Securely {selectedInvoice?.amount}
          </button>
          
          <p className={`text-center text-[11px] mt-4 flex items-center justify-center gap-1 ${textMuted}`}>
            <LockOutlined /> 256-bit SSL Encrypted Transaction
          </p>
        </div>
      </Modal>

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
        .ora-modal .ant-modal-content { border-radius: 20px !important; padding: 24px !important; }
        .dark-modal .ant-modal-content { background-color: #1E1E1E !important; border: 1px solid #2D2D2D; }
      `}} />
    </AdminLayout>
  );
}