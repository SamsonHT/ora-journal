import React from 'react';
import EbookAuthorLayout from '../../../layouts/ebook/EbookAuthorLayout';

export default function PublishingFee() {
  return (
    <EbookAuthorLayout>
      <div className="max-w-[1000px] mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Publishing Fees</h1>
          <p className="text-[13px] text-gray-500 mt-1">Manage your Article Processing Charges (APCs) and book processing fees.</p>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">Current Balance</p>
            <span className="text-2xl font-bold text-gray-900">2,300.00 Birr</span>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">Total Paid</p>
            <span className="text-2xl font-bold text-green-600">4,850.00 Birr</span>
          </div>
          <div className="bg-[#FCF7F9] p-6 rounded-xl border border-[#7A1849]/20 shadow-sm flex flex-col justify-between">
            <p className="text-[11px] font-bold text-[#7A1849] uppercase tracking-widest mb-2">Payment Method</p>
            <p className="text-[14px] font-bold text-gray-900">Telebirr / CBE Birr</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
           <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
             <h3 className="text-[15px] font-bold text-gray-900">Invoice Statements</h3>
             <button className="text-[12px] font-bold text-gray-500 hover:text-[#7A1849]">Download All</button>
           </div>
           <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-200 text-[11px] font-bold text-gray-500 uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4">Book Title</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-[13px]">
               <tr className="hover:bg-gray-50">
                 <td className="px-6 py-4 font-bold text-gray-900">Clinical AI Methods...</td>
                 <td className="px-6 py-4 font-medium">1,000.00 Birr</td>
                 <td className="px-6 py-4"><span className="bg-amber-100 text-amber-700 px-2 py-1 rounded text-[10px] font-bold">Pending</span></td>
                 <td className="px-6 py-4 text-gray-500">Jul 08, 2026</td>
                 <td className="px-6 py-4 text-right"><button className="text-[#7A1849] font-bold hover:underline">Pay Now</button></td>
               </tr>
               <tr className="hover:bg-gray-50">
                 <td className="px-6 py-4 font-bold text-gray-900">Quantum Computing...</td>
                 <td className="px-6 py-4 font-medium">1,300.00 Birr</td>
                 <td className="px-6 py-4"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-[10px] font-bold">Paid</span></td>
                 <td className="px-6 py-4 text-gray-500">Jul 02, 2026</td>
                 <td className="px-6 py-4 text-right"><button className="text-gray-400 font-bold hover:underline">Receipt</button></td>
               </tr>
            </tbody>
           </table>
        </div>
      </div>
    </EbookAuthorLayout>
  );
}