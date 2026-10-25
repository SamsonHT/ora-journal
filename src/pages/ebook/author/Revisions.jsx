import React from 'react';
import EbookAuthorLayout from '../../../layouts/ebook/EbookAuthorLayout';

export default function Revisions() {
  return (
    <EbookAuthorLayout>
      <div className="max-w-[1100px] mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Revisions</h1>
          <p className="text-[13px] text-gray-500 mt-1">Manage your book revisions and submit responses to peer review.</p>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6 flex items-start gap-3">
           <span className="text-blue-600 mt-0.5">ℹ️</span>
           <p className="text-[12px] text-blue-800 font-medium">
             <strong>Revision in progress:</strong> Download the referees' feedback and submit a response with your revised manuscript.
           </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-200 text-[11px] font-bold text-gray-500 uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4">Book Title</th>
                <th className="px-6 py-4">Version</th>
                <th className="px-6 py-4">Decision</th>
                <th className="px-6 py-4">Deadline</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-[13px]">
               <tr className="hover:bg-gray-50">
                 <td className="px-6 py-4 font-bold text-gray-900">Quantum Computing and Cryptography</td>
                 <td className="px-6 py-4 text-gray-500">V1.0</td>
                 <td className="px-6 py-4"><span className="bg-amber-100 text-amber-700 px-2 py-1 rounded text-[10px] font-bold">Major Revision</span></td>
                 <td className="px-6 py-4 text-red-500 font-bold">Jul 20, 2026</td>
                 <td className="px-6 py-4 text-right"><button className="bg-[#7A1849] text-white px-3 py-1.5 rounded text-[11px] font-bold hover:bg-[#531324]">Submit Revision</button></td>
               </tr>
               <tr className="hover:bg-gray-50">
                 <td className="px-6 py-4 font-bold text-gray-900">Renewable Energy Systems</td>
                 <td className="px-6 py-4 text-gray-500">V2.0</td>
                 <td className="px-6 py-4"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-[10px] font-bold">Accepted</span></td>
                 <td className="px-6 py-4 text-gray-400">—</td>
                 <td className="px-6 py-4 text-right"><button className="text-gray-400 font-bold">View</button></td>
               </tr>
            </tbody>
          </table>
        </div>
      </div>
    </EbookAuthorLayout>
  );
}