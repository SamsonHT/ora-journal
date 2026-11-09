import React from 'react';
import { useNavigate } from 'react-router-dom';
import EbookEditorialLayout from '../../../layouts/ebook/EbookEditorialLayout';

export default function ReviewedBooks() {
  const navigate = useNavigate();

  return (
    <EbookEditorialLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-2xl font-serif font-bold text-gray-900">Final Decisions List</h1>
            <p className="text-[13px] text-gray-500 mt-1">Books that have completed peer review and are awaiting a final decision.</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
           <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Awaiting Decision</p>
              <p className="text-2xl font-bold mt-1 text-[#7A1849]">8</p>
           </div>
           <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Decided This Month</p>
              <p className="text-2xl font-bold mt-1 text-gray-900">24</p>
           </div>
           <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Avg. Decision Time</p>
              <p className="text-2xl font-bold mt-1 text-gray-900">4.2 days</p>
           </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#7A1849] text-white text-[11px] uppercase tracking-wider">
                <th className="p-4 font-bold">Book Title</th>
                <th className="p-4 font-bold">Reviewers</th>
                <th className="p-4 font-bold">Status</th>
                <th className="p-4 font-bold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[1, 2, 3].map((item) => (
                <tr key={item} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4">
                    <p className="text-[13px] font-bold text-gray-900">Manuscript Title {item}</p>
                    <p className="text-[11px] text-gray-500">ID: ORAB-2026-00{item}</p>
                  </td>
                  <td className="p-4 text-[13px] text-gray-700">2 Completed</td>
                  <td className="p-4">
                    <span className="text-[10px] font-bold px-2 py-1 rounded bg-orange-100 text-orange-700">Ready for Decision</span>
                  </td>
                  <td className="p-4 text-right">
                    <button onClick={() => navigate('/ebook/editorial/decision')} className="text-[11px] font-bold bg-[#7A1849] text-white px-3 py-1.5 rounded hover:bg-[#531324]">Make Decision</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </EbookEditorialLayout>
  );
}