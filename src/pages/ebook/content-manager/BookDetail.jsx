import React from 'react';
import DigitalContentManagerLayout from '../../../layouts/ebook/DigitalContentManagerLayout';
import { Link } from 'react-router-dom';
import { ArrowLeftOutlined, CheckCircleFilled, ClockCircleOutlined, FileTextOutlined } from '@ant-design/icons';

export default function BookDetail() {
  return (
    <DigitalContentManagerLayout>
      <div className="space-y-6 max-w-5xl">
        <div className="flex items-center gap-3 mb-2">
          <Link to="/content-manager/books" className="text-gray-400 hover:text-gray-600 transition-colors"><ArrowLeftOutlined /></Link>
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Workspace / Books / Detail</p>
        </div>
        
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-[26px] font-bold text-gray-900">Clinical AI: Methods and Applications</h1>
            <p className="text-[13px] text-gray-500 mt-1">ISBN: 978-1-2345-6789-0 • Author: Dr. Ava Morgan</p>
          </div>
          <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-md text-[11px] font-bold">Typesetting</span>
        </div>

        <div className="grid grid-cols-3 gap-6">
           <div className="col-span-2 space-y-6">
             <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
                <h3 className="text-[15px] font-bold text-gray-900 mb-4 border-b pb-3">Production Checklist</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Manuscript received', status: 'completed', date: 'Oct 01, 2026' },
                    { label: 'Copyediting', status: 'completed', date: 'Oct 05, 2026' },
                    { label: 'Typesetting & Formatting', status: 'active', date: 'In progress' },
                    { label: 'Final Proofing', status: 'pending', date: 'Pending' },
                    { label: 'Publish', status: 'pending', date: 'Pending' },
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${step.status === 'completed' ? 'bg-emerald-100 text-emerald-600' : step.status === 'active' ? 'bg-[#7A1849] text-white' : 'bg-gray-100 text-gray-400'}`}>
                        {step.status === 'completed' ? <CheckCircleFilled className="text-[10px]" /> : <span className="text-[10px] font-bold">{i+1}</span>}
                      </div>
                      <div className="flex-1 pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                        <p className={`text-[13px] font-bold ${step.status === 'pending' ? 'text-gray-400' : 'text-gray-900'}`}>{step.label}</p>
                        <p className="text-[11px] text-gray-500">{step.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
           </div>

           <div className="space-y-6">
             <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
                <h3 className="text-[14px] font-bold text-gray-900 mb-4">Book Files</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors">
                    <FileTextOutlined className="text-gray-400" />
                    <div>
                      <p className="text-[12px] font-bold text-gray-900">Final_Manuscript.docx</p>
                      <p className="text-[10px] text-gray-500">4.2 MB</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors">
                    <FileTextOutlined className="text-gray-400" />
                    <div>
                      <p className="text-[12px] font-bold text-gray-900">Typeset_Proof_v2.pdf</p>
                      <p className="text-[10px] text-gray-500">12.8 MB</p>
                    </div>
                  </div>
                </div>
             </div>
           </div>
        </div>
      </div>
    </DigitalContentManagerLayout>
  );
}