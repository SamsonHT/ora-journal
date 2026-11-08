import React from 'react';
import EbookAuthorLayout from '../../../layouts/ebook/EbookAuthorLayout';
import { Link } from 'react-router-dom';

export default function PublishingFee() {
  const invoices = [
    {
      id: '#BPC-2026-108',
      title: 'Clinical AI: Methods and Applications',
      type: 'Book publication',
      amount: '1,850.00 Birr',
      status: 'Pending',
      statusColor: 'bg-[#FEF3C7] text-[#D97706]',
      date: 'Due Oct 14, 2026',
      action: 'Pay Invoice',
      actionColor: 'text-[#7A1849] hover:underline',
    },
    {
      id: '#PRD-2026-082',
      title: 'Nanomaterials for Clean Water',
      type: 'Color production',
      amount: '450.00 Birr',
      status: 'Overdue',
      statusColor: 'bg-[#FEE2E2] text-[#DC2626]',
      date: 'Due Sep 01, 2026',
      action: 'Pay Invoice',
      actionColor: 'text-[#DC2626] hover:underline',
    },
    {
      id: '#BPC-2026-082',
      title: 'Nanomaterials for Clean Water',
      type: 'Book publication',
      amount: '2,100.00 Birr',
      status: 'Paid',
      statusColor: 'bg-[#ECFDF5] text-[#059669]',
      date: 'Paid Sep 10, 2026',
      action: 'Download Receipt',
      actionColor: 'text-[#4B5563] hover:underline',
    },
    {
      id: '#BPC-2026-063',
      title: 'Rural Development and Public Policy',
      type: 'Book publication',
      amount: '1,200.00 Birr',
      status: 'Paid',
      statusColor: 'bg-[#ECFDF5] text-[#059669]',
      date: 'Paid Jul 15, 2026',
      action: 'Download Receipt',
      actionColor: 'text-[#4B5563] hover:underline',
    },
    {
      id: '#BPC-2026-031',
      title: 'Foundations of Applied Data Science',
      type: 'Book publication',
      amount: '1,550.00 Birr',
      status: 'Paid',
      statusColor: 'bg-[#ECFDF5] text-[#059669]',
      date: 'Paid May 24, 2026',
      action: 'Download Receipt',
      actionColor: 'text-[#4B5563] hover:underline',
    },
  ];

  return (
    <EbookAuthorLayout>
      <div className="max-w-[1300px] mx-auto font-sans pb-12">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <p className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wider mb-1">
              Workspace / Publishing Fee
            </p>
            <h1 className="text-[26px] font-bold text-[#111827] leading-tight mb-1">
              Publishing Fees
            </h1>
            <p className="text-[13px] text-[#6B7280]">
              Review book publication charges, production fees and invoicing statements.
            </p>
          </div>
          
          <div className="flex items-center gap-3 self-start md:self-end">
            <div className="border border-gray-200 rounded-lg px-4 py-2 text-[12px] font-semibold text-gray-700 bg-white cursor-pointer hover:bg-gray-50 transition-colors shadow-sm">
              Sep 1 – Sep 25, 2026
            </div>
            <Link 
              to="/ebook/author/submit" 
              className="bg-[#7A1849] text-white px-5 py-2 rounded-lg text-[12px] font-bold hover:bg-[#531324] transition-colors shadow-sm"
            >
              New Submission
            </Link>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {/* Pending Invoices */}
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-[12px] font-medium text-[#6B7280] mb-2">Pending Invoices</p>
            <h2 className="text-[24px] font-bold text-[#111827] mb-2">2,300.00 Birr</h2>
            <p className="text-[11px] font-bold text-[#DC2626]">2 payments outstanding</p>
          </div>

          {/* Total Paid */}
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-[12px] font-medium text-[#6B7280] mb-2">Total Paid (YTD)</p>
            <h2 className="text-[24px] font-bold text-[#111827] mb-2">4,850.00 Birr</h2>
            <p className="text-[11px] font-bold text-[#059669]">3 book publication invoices settled</p>
          </div>

          {/* Current Billing Account */}
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-[12px] font-medium text-[#6B7280] mb-1">Current Billing Account</p>
            <h2 className="text-[14px] font-bold text-[#111827] mb-1">Northstar Labs Group Account</h2>
            <p className="text-[11px] text-[#2563EB] font-medium">Institutional rate applied • All amounts in Birr</p>
          </div>
        </div>

        {/* Invoice Statements Table Card */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
          {/* Card Header */}
          <div className="px-6 py-4 flex justify-between items-center border-b border-gray-200">
            <h3 className="text-[16px] font-bold text-[#111827]">Invoice Statements</h3>
            <span className="text-[11px] text-[#6B7280] font-medium">Currency: Ethiopian Birr (ETB)</span>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#7A1849] text-[10px] font-bold text-white uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-3.5 w-[35%]">Book Title / Invoice</th>
                  <th className="px-6 py-3.5 w-[15%]">Fee Type</th>
                  <th className="px-6 py-3.5 w-[15%]">Amount</th>
                  <th className="px-6 py-3.5 w-[15%]">Status</th>
                  <th className="px-6 py-3.5 w-[20%] text-right">Billing Date / Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-[13px]">
                {invoices.map((inv, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="font-bold text-[#111827] text-[13.5px] mb-0.5">{inv.title}</div>
                      <div className="text-[11px] text-[#6B7280] font-medium">{inv.id}</div>
                    </td>
                    <td className="px-6 py-4 text-[#4B5563]">{inv.type}</td>
                    <td className="px-6 py-4 font-bold text-[#111827]">{inv.amount}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold ${inv.statusColor}`}>
                        {inv.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex flex-col items-end">
                        <span className="text-[11px] text-[#6B7280] mb-0.5">{inv.date}</span>
                        <button className={`text-[11px] font-bold ${inv.actionColor}`}>
                          {inv.action}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Footer */}
          <div className="flex justify-between items-center px-6 py-4 border-t border-gray-200 bg-white">
            <p className="text-[12px] text-[#6B7280] font-medium">
              Showing <span className="font-bold text-gray-700">1–5</span> of <span className="font-bold text-gray-700">5</span> invoices
            </p>
            <div className="flex items-center gap-1">
              <button className="w-7 h-7 flex items-center justify-center rounded bg-[#7A1849] text-white text-[12px] font-bold shadow-sm">
                1
              </button>
            </div>
          </div>
        </div>
      </div>
    </EbookAuthorLayout>
  );
}