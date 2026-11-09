// src/pages/ebook/content-manager/ProductionOverview.jsx
import React, { useState } from 'react';
import DigitalContentManagerLayout from '../../../layouts/ebook/DigitalContentManagerLayout';
import { ArrowRightOutlined, CheckCircleFilled, WarningOutlined } from '@ant-design/icons';

export default function ProductionOverview() {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <DigitalContentManagerLayout>
      <div className="space-y-5 pb-10">
        
        {/* Page Header */}
        <div className="flex justify-between items-start">
          <div>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">Workspace / Dashboard</p>
            <h1 className="text-[26px] font-bold text-[#1F2937] tracking-tight mb-1">Production overview</h1>
            <p className="text-[13px] text-gray-500">Monday, 5 October 2026 · Keep accepted books moving from proof to publication.</p>
          </div>
          <button className="bg-[#7A1849] text-white px-5 py-2.5 rounded-lg text-[12px] font-bold shadow-sm hover:bg-[#531324] transition-colors flex items-center gap-2">
            <ArrowRightOutlined className="text-[10px]" /> Open production queue
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 border-b border-gray-200 pt-2">
          {['Overview', 'Production Queue', 'Recent Activity'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-[13px] font-bold border-b-2 transition-colors ${
                activeTab === tab ? 'text-[#7A1849] border-[#7A1849]' : 'text-gray-500 border-transparent hover:text-gray-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Stat Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Pending production', value: '18', sub: '8 proofs not yet sent', color: 'text-gray-900', subColor: 'text-red-500' },
            { label: 'Awaiting verification', value: '7', sub: '2 responses overdue', color: 'text-[#7A1849]', subColor: 'text-amber-600' },
            { label: 'Ready to publish', value: '6', sub: 'Author proofs accepted', color: 'text-[#7A1849]', subColor: 'text-emerald-600' },
            { label: 'Published this month', value: '4', sub: '+2 vs prior month to date', color: 'text-[#7A1849]', subColor: 'text-emerald-600' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
              <p className="text-[12px] font-medium text-gray-500 mb-2">{stat.label}</p>
              <p className={`text-[32px] font-bold leading-none mb-2 ${stat.color}`}>{stat.value}</p>
              <p className={`text-[11px] font-bold ${stat.subColor}`}>{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Middle Grid: Queue & Workload */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          
          {/* Production Queue (Left 2/3) */}
          <div className="lg:col-span-2 bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col">
            <div className="p-5 flex justify-between items-center border-b border-gray-100">
              <h3 className="text-[15px] font-bold text-gray-900">Production queue</h3>
              <button className="text-[12px] font-bold text-gray-500 hover:text-[#7A1849]">Priority titles</button>
            </div>
            
            <div className="p-4 flex-1">
              <table className="w-full text-left border-collapse">
                <thead className="text-[10px] font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100">
                  <tr>
                    <th className="pb-3 px-2">Book</th>
                    <th className="pb-3 px-2 text-center">Proof status</th>
                    <th className="pb-3 px-2 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {/* Row 1 */}
                  <tr className="hover:bg-gray-50/50">
                    <td className="py-4 px-2">
                      <p className="font-bold text-[13px] text-gray-900">Clinical AI: Methods and Applications</p>
                      <p className="text-[11px] text-gray-400 mt-0.5">EB-2026-108 · Leila Hassan</p>
                    </td>
                    <td className="py-4 px-2 text-center">
                      <span className="bg-[#FDF2F8] text-[#9D174D] px-3 py-1 rounded-full text-[10px] font-bold">Changes requested</span>
                    </td>
                    <td className="py-4 px-2 text-right">
                      <button className="text-[#7A1849] text-[12px] font-bold hover:underline">Revise proof</button>
                    </td>
                  </tr>
                  {/* Row 2 */}
                  <tr className="hover:bg-gray-50/50">
                    <td className="py-4 px-2">
                      <p className="font-bold text-[13px] text-gray-900">Archives of a Warming World</p>
                      <p className="text-[11px] text-gray-400 mt-0.5">EB-2026-179 · Elena Rossi</p>
                    </td>
                    <td className="py-4 px-2 text-center">
                      <span className="bg-[#FFFBEB] text-[#D97706] px-3 py-1 rounded-full text-[10px] font-bold">Proof not sent</span>
                    </td>
                    <td className="py-4 px-2 text-right">
                      <button className="text-[#7A1849] text-[12px] font-bold hover:underline">Prepare proof</button>
                    </td>
                  </tr>
                  {/* Row 3 */}
                  <tr className="hover:bg-gray-50/50">
                    <td className="py-4 px-2">
                      <p className="font-bold text-[13px] text-gray-900">Sustainable Cities in Africa</p>
                      <p className="text-[11px] text-gray-400 mt-0.5">EB-2026-178 · A. Tesfaye</p>
                    </td>
                    <td className="py-4 px-2 text-center">
                      <span className="bg-[#EFF6FF] text-[#2563EB] px-3 py-1 rounded-full text-[10px] font-bold">Awaiting author</span>
                    </td>
                    <td className="py-4 px-2 text-right">
                      <button className="text-[#7A1849] text-[12px] font-bold hover:underline">Track proof</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Custom Footer Pagination */}
            <div className="p-4 border-t border-gray-100 flex justify-between items-center bg-white rounded-b-xl">
               <p className="text-[11px] text-gray-400 font-medium">3 priority books · 18 in queue</p>
               <div className="flex gap-2">
                 <button className="px-3 py-1.5 border border-gray-200 rounded-md text-[11px] font-bold text-gray-600 hover:bg-gray-50">Previous</button>
                 <button className="px-3 py-1.5 border border-[#7A1849] bg-[#FCF7F9] rounded-md text-[11px] font-bold text-[#7A1849]">1</button>
                 <button className="px-3 py-1.5 border border-gray-200 rounded-md text-[11px] font-bold text-gray-600 hover:bg-gray-50">Next</button>
               </div>
            </div>
          </div>

          {/* Pipeline Workload (Right 1/3) */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[15px] font-bold text-gray-900">Pipeline workload</h3>
              <span className="text-[10px] font-bold text-gray-400">32 active books</span>
            </div>
            
            <div className="space-y-4 flex-1">
              {[
                { label: 'Ready for production', val: 8, color: 'bg-[#7A1849]' },
                { label: 'Proof not sent', val: 8, color: 'bg-[#D97706]' },
                { label: 'Awaiting verification', val: 7, color: 'bg-[#2563EB]' },
                { label: 'Changes requested', val: 3, color: 'bg-[#DC2626]' },
                { label: 'Ready to publish', val: 6, color: 'bg-[#059669]' },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between items-end mb-1.5">
                    <span className="text-[11px] font-medium text-gray-600">{item.label}</span>
                    <span className="text-[11px] font-bold text-gray-900">{item.val}</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5">
                    <div className={`h-1.5 rounded-full ${item.color}`} style={{ width: `${(item.val / 10) * 100}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Grid: Recent Activity & Requires Attention */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          
          {/* Recent Activity (Left 2/3) */}
          <div className="lg:col-span-2 bg-white border border-gray-200 rounded-xl shadow-sm p-5">
             <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-100">
               <h3 className="text-[15px] font-bold text-gray-900">Recent activity</h3>
               <span className="text-[10px] font-bold text-gray-400">Today</span>
             </div>
             
             <div className="space-y-5 mt-4">
               {[
                 { type: 'success', title: 'Author proof accepted for The Civic Algorithm', meta: 'EB-2026-184 · Naomi Brooks · 18 min ago' },
                 { type: 'info', title: 'Second proof prepared for Clinical AI', meta: 'EB-2026-108 · Ava Morgan · 42 min ago' },
                 { type: 'success', title: 'ISBN assigned to Research Ethics & Open Science', meta: 'EB-2026-154 · Published · 1 hr ago' },
               ].map((act, i) => (
                 <div key={i} className="flex gap-4 items-start">
                   <div className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${act.type === 'success' ? 'bg-emerald-500' : 'bg-[#7A1849]'}`}></div>
                   <div>
                     <p className="text-[12px] font-bold text-gray-900">{act.title}</p>
                     <p className="text-[10px] text-gray-400 mt-0.5">{act.meta}</p>
                   </div>
                 </div>
               ))}
             </div>
          </div>

          {/* Requires Attention (Right 1/3) */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5">
             <div className="flex justify-between items-center mb-4">
               <h3 className="text-[15px] font-bold text-gray-900">Requires attention</h3>
               <span className="text-[10px] font-bold text-gray-400">2 priorities</span>
             </div>
             
             <div className="space-y-3">
               <div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-lg p-3 flex gap-3 items-start cursor-pointer hover:bg-amber-100 transition-colors">
                 <WarningOutlined className="text-[#D97706] mt-0.5" />
                 <div>
                   <p className="text-[11px] font-bold text-[#92400E]">2 author responses overdue</p>
                   <p className="text-[10px] text-[#B45309] mt-0.5">Send reminders before the verification window closes.</p>
                 </div>
               </div>
               
               <div className="bg-[#ECFDF5] border border-[#A7F3D0] rounded-lg p-3 flex gap-3 items-start cursor-pointer hover:bg-emerald-100 transition-colors">
                 <CheckCircleFilled className="text-[#059669] mt-0.5" />
                 <div>
                   <p className="text-[11px] font-bold text-[#065F46]">6 accepted proofs ready</p>
                   <p className="text-[10px] text-[#047857] mt-0.5">Complete identifiers and access rights to publish.</p>
                 </div>
               </div>
             </div>
          </div>

        </div>
      </div>
    </DigitalContentManagerLayout>
  );
}