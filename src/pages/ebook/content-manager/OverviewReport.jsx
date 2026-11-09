import React from 'react';
import DigitalContentManagerLayout from '../../../layouts/ebook/DigitalContentManagerLayout';

export default function OverviewReport() {
  return (
    <DigitalContentManagerLayout>
      <div className="space-y-6">
        <div>
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Workspace / Reports</p>
          <h1 className="text-[26px] font-bold text-gray-900">Overview report</h1>
          <p className="text-[13px] text-gray-500 mt-1">Summary of production performance and catalog statistics.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
             <h3 className="text-[15px] font-bold text-gray-900">Production Summary (YTD)</h3>
             <button className="text-[12px] font-bold text-[#7A1849] border border-[#7A1849]/20 bg-[#FCF7F9] px-3 py-1.5 rounded hover:bg-[#7A1849]/10 transition-colors">Export CSV</button>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-8">
             {[
               { label: 'Books Published', value: '142' },
               { label: 'Avg. Time to Publish', value: '34 Days' },
               { label: 'Proofs Returned Late', value: '12%' },
               { label: 'Active Titles', value: '386' },
             ].map((stat, i) => (
                <div key={i} className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                   <p className="text-[11px] font-bold text-gray-500 uppercase mb-1">{stat.label}</p>
                   <p className="text-[20px] font-bold text-gray-900">{stat.value}</p>
                </div>
             ))}
          </div>

          <table className="w-full text-left">
            <thead className="border-b border-gray-200 text-[10px] font-bold text-gray-500 uppercase tracking-wider">
              <tr>
                <th className="pb-3 pr-4">Month</th>
                <th className="pb-3 pr-4">Submitted</th>
                <th className="pb-3 pr-4">Published</th>
                <th className="pb-3 text-right">Avg. Turnaround</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-[13px]">
              {[
                { month: 'October 2026', sub: 12, pub: 8, turn: '28 Days' },
                { month: 'September 2026', sub: 15, pub: 14, turn: '31 Days' },
                { month: 'August 2026', sub: 10, pub: 11, turn: '35 Days' },
              ].map((row, i) => (
                <tr key={i}>
                  <td className="py-3 pr-4 font-bold text-gray-900">{row.month}</td>
                  <td className="py-3 pr-4 text-gray-600">{row.sub}</td>
                  <td className="py-3 pr-4 text-gray-600">{row.pub}</td>
                  <td className="py-3 text-right text-gray-600">{row.turn}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DigitalContentManagerLayout>
  );
}