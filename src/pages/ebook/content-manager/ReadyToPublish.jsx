import React from 'react';
import DigitalContentManagerLayout from '../../../layouts/ebook/DigitalContentManagerLayout';
import { CheckCircleFilled, ClockCircleFilled } from '@ant-design/icons';

export default function ReadyToPublish() {
  return (
    <DigitalContentManagerLayout>
      <div className="space-y-6">
        <div>
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Workspace / Ready to publish</p>
          <h1 className="text-[26px] font-bold text-gray-900">Ready to publish</h1>
          <p className="text-[13px] text-gray-500 mt-1">Final review before making books live on the ORA platform.</p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
           <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center"><CheckCircleFilled /></div>
              <div>
                <p className="text-[20px] font-bold text-gray-900">8</p>
                <p className="text-[11px] text-gray-500 font-medium">Books ready to publish</p>
              </div>
           </div>
           <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center"><ClockCircleFilled /></div>
              <div>
                <p className="text-[20px] font-bold text-gray-900">2</p>
                <p className="text-[11px] text-gray-500 font-medium">Awaiting final check</p>
              </div>
           </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#7A1849] text-[10px] font-bold text-white uppercase tracking-wider">
              <tr>
                <th className="px-6 py-3.5">Book Title</th>
                <th className="px-6 py-3.5">ISBN</th>
                <th className="px-6 py-3.5">Format Ready</th>
                <th className="px-6 py-3.5 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-[13px]">
              <tr className="hover:bg-gray-50/50">
                <td className="px-6 py-4 font-bold text-gray-900">Quantum Computing and Cryptography</td>
                <td className="px-6 py-4 font-mono text-gray-600">978-1-2345-6789-3</td>
                <td className="px-6 py-4">
                  <span className="text-[10px] font-bold bg-emerald-50 text-emerald-700 px-2 py-1 rounded">PDF & ePUB</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="bg-[#7A1849] text-white px-4 py-1.5 rounded-md text-[11px] font-bold hover:bg-[#531324]">Publish Now</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </DigitalContentManagerLayout>
  );
}