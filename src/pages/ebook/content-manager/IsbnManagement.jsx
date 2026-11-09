import React from 'react';
import DigitalContentManagerLayout from '../../../layouts/ebook/DigitalContentManagerLayout';
import { Link } from 'react-router-dom';

export default function IsbnManagement() {
  return (
    <DigitalContentManagerLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-end">
          <div>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Workspace / ISBN Management</p>
            <h1 className="text-[26px] font-bold text-gray-900">ISBN management</h1>
            <p className="text-[13px] text-gray-500 mt-1">Assign and track International Standard Book Numbers.</p>
          </div>
          <Link to="/content-manager/isbn/create" className="bg-[#7A1849] text-white px-5 py-2 rounded-lg text-[12px] font-bold shadow-sm hover:bg-[#531324]">
            + Assign New ISBN
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
           <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
              <p className="text-[12px] font-medium text-gray-500 mb-1">Total ISBNs Assigned</p>
              <p className="text-[24px] font-bold text-gray-900">142</p>
           </div>
           <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
              <p className="text-[12px] font-medium text-gray-500 mb-1">Available in pool</p>
              <p className="text-[24px] font-bold text-emerald-600">358</p>
           </div>
           <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
              <p className="text-[12px] font-medium text-gray-500 mb-1">Pending assignment</p>
              <p className="text-[24px] font-bold text-amber-600">7</p>
           </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[15px] font-bold text-gray-900">Recent ISBN Assignments</h3>
            <button className="text-[12px] font-bold text-[#7A1849] hover:underline">View Registry</button>
          </div>
          <table className="w-full text-left">
            <thead className="border-b border-gray-100 text-[10px] font-bold text-gray-500 uppercase tracking-wider">
              <tr>
                <th className="pb-3 pr-4">Book Title</th>
                <th className="pb-3 pr-4">ISBN-13</th>
                <th className="pb-3 pr-4">Format</th>
                <th className="pb-3 text-right">Assigned Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-[13px]">
              <tr>
                <td className="py-3 pr-4 font-bold text-gray-900">Clinical AI: Methods and Applications</td>
                <td className="py-3 pr-4 text-gray-600 font-mono">978-1-2345-6789-0</td>
                <td className="py-3 pr-4"><span className="text-[10px] font-bold bg-gray-100 px-2 py-1 rounded">ePUB</span></td>
                <td className="py-3 text-right text-gray-500">Oct 12, 2026</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-bold text-gray-900">Nanomaterials for Clean Water</td>
                <td className="py-3 pr-4 text-gray-600 font-mono">978-1-2345-6789-1</td>
                <td className="py-3 pr-4"><span className="text-[10px] font-bold bg-gray-100 px-2 py-1 rounded">PDF</span></td>
                <td className="py-3 text-right text-gray-500">Oct 10, 2026</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </DigitalContentManagerLayout>
  );
}