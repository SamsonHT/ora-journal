import React, { useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { Table, Tag, Button, Select, Modal } from 'antd';
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

  const columns = [
    { 
      title: 'PAPER TITLE', 
      dataIndex: 'title', 
      key: 'title', 
      render: (text, record) => (
        <div>
          <p className={`text-[13px] font-bold ${textMain}`}>{text}</p>
          <p className={`text-[11px] ${textMuted}`}>{record.journal}</p>
        </div>
      )
    },
    { 
      title: 'FEE TYPE', 
      dataIndex: 'type', 
      key: 'type', 
      render: text => <span className={`text-[12px] ${textMuted}`}>{text}</span> 
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
      render: status => {
        let color = 'default';
        if (status === 'Paid') color = 'success';
        if (status === 'Overdue') color = 'error';
        if (status === 'Pending') color = 'warning';
        return <Tag color={color} className="rounded-full px-3 py-0.5 font-bold text-[10px] border-0 uppercase">{status}</Tag>;
      }
    },
    { 
      title: 'BILLING DATE', 
      dataIndex: 'date', 
      key: 'date', 
      render: text => <span className={`text-[12px] ${textMuted}`}>{text}</span> 
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
              ? (isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600') 
              : 'bg-[#7A1849] text-white hover:bg-[#5E1136]'
          } font-bold text-[12px] rounded-lg border-0 px-4`}
        >
          {record.status === 'Paid' ? 'View Receipt' : 'Pay Now'}
        </Button>
      )
    }
  ];

  return (
    <AdminLayout>
      <div className="max-w-[1300px] mx-auto animate-fade-in-up">
        <div className="mb-8">
          <p className={`text-[11px] font-bold tracking-widest uppercase mb-1.5 ${textMuted}`}>Workspace / Fees</p>
          <h1 className={`text-2xl font-serif font-bold ${textMain}`}>Publishing Fees</h1>
          <p className={`text-[13px] mt-1 ${textMuted}`}>Review Article Processing Charges (APCs) and manage your payments.</p>
        </div>

        {/* Reduced Height Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className={`p-4 rounded-xl border shadow-sm flex items-center gap-4 ${bgCard}`}>
            <div className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center flex-shrink-0"><FileTextOutlined /></div>
            <div>
              <p className={`text-[11px] font-bold uppercase tracking-wider ${textMuted}`}>Pending Invoices</p>
              <div className="flex items-end gap-2">
                <h3 className={`text-xl font-bold ${textMain}`}>2,300.00 Birr</h3>
                <span className="text-[10px] font-bold text-red-500 mb-1">2 outstanding</span>
              </div>
            </div>
          </div>
          
          <div className={`p-4 rounded-xl border shadow-sm flex items-center gap-4 ${bgCard}`}>
            <div className="w-10 h-10 rounded-full bg-green-50 text-green-500 flex items-center justify-center flex-shrink-0"><CheckCircleOutlined /></div>
            <div>
              <p className={`text-[11px] font-bold uppercase tracking-wider ${textMuted}`}>Total Paid (YTD)</p>
              <div className="flex items-end gap-2">
                <h3 className={`text-xl font-bold ${textMain}`}>4,850.00 Birr</h3>
                <span className="text-[10px] font-bold text-green-500 mb-1">3 settled</span>
              </div>
            </div>
          </div>

          <div className={`p-4 rounded-xl border shadow-sm flex items-center gap-4 ${bgCard}`}>
            <div className="w-10 h-10 rounded-full bg-[#FCF7F9] text-[#7A1849] flex items-center justify-center flex-shrink-0"><DollarOutlined /></div>
            <div>
              <p className={`text-[11px] font-bold uppercase tracking-wider ${textMuted}`}>Billing Account</p>
              <div className="flex items-end gap-2">
                <h3 className={`text-[14px] font-bold ${textMain}`}>Northstar Labs Group</h3>
              </div>
            </div>
          </div>
        </div>

        <div className={`rounded-2xl border shadow-sm p-6 ${bgCard}`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <h2 className={`text-[16px] font-bold ${textMain}`}>Invoice Statements</h2>
            <Select 
              value={statusFilter} 
              onChange={setStatusFilter}
              className={`w-40 h-9 ${isDarkMode ? 'dark-select' : ''}`}
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
          <h2 className={`text-xl font-serif font-bold mb-1 ${textMain}`}>Complete Payment</h2>
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
        .ora-table .ant-table-thead > tr > th { background-color: #7A1849 !important; color: white !important; font-weight: 700 !important; font-size: 11px !important; text-transform: uppercase; border-bottom: none; padding: 14px 16px; }
        .dark-table .ant-table { background: transparent; color: #E5E7EB; }
        .dark-table .ant-table-tbody > tr > td { color: #E5E7EB; border-bottom: 1px solid #2D2D2D; padding: 14px 16px; }
        .dark-select .ant-select-selector { background-color: #1A1A1A !important; border-color: #3D3D3D !important; color: white !important; }
        
        /* Modal customizations */
        .ora-modal .ant-modal-content { border-radius: 24px !important; padding: 24px !important; }
        .dark-modal .ant-modal-content { background-color: #1E1E1E !important; border: 1px solid #2D2D2D; }
      `}} />
    </AdminLayout>
  );
}