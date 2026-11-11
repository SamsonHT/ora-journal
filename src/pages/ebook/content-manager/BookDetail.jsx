// src/pages/ebook/content-manager/BookDetail.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import DigitalContentManagerLayout from '../../../layouts/ebook/DigitalContentManagerLayout';
import { 
  CheckCircleFilled, 
  DownloadOutlined, 
  FileTextOutlined,
  InfoCircleOutlined,
  ArrowRightOutlined
} from '@ant-design/icons';

export default function BookDetail() {
  const navigate = useNavigate();

  return (
    <DigitalContentManagerLayout>
      <div className="w-full max-w-[1400px] mx-auto pb-8 pt-2">
        
        {/* Header */}
        <div className="flex justify-between items-start mb-5">
          <div>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
              Workspace / All Books
            </p>
            <h1 className="text-[28px] font-bold text-[#1F2937] tracking-tight mb-1">
              The Civic Algorithm
            </h1>
            <p className="text-[13px] text-gray-500">
              EB-2026-184 · Governance and public life in the age of AI
            </p>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => navigate('/content-manager/books')} 
              className="bg-white text-gray-700 border border-gray-300 px-5 py-2 rounded-lg text-[12px] font-bold shadow-sm hover:bg-gray-50 transition-colors"
            >
              Back to all books
            </button>
            <button 
              onClick={() => navigate('/content-manager/publish')}
              className="bg-[#7A1849] text-white px-5 py-2 rounded-lg text-[12px] font-bold shadow-sm hover:bg-[#531324] transition-colors flex items-center gap-2"
            >
              Open publication <ArrowRightOutlined className="text-[10px]" />
            </button>
          </div>
        </div>

        {/* Alert Banner */}
        <div className="bg-[#ECFDF5] border border-[#A7F3D0] rounded-lg p-4 flex gap-3 items-start mb-6">
          <CheckCircleFilled className="text-[#059669] mt-0.5 text-sm" />
          <div>
            <p className="text-[12px] font-bold text-[#065F46]">Author proof accepted · Ready for publication</p>
            <p className="text-[11px] text-[#047857] mt-0.5">
              Naomi Brooks accepted final proof v3 on 5 October 2026. This book has moved out of Pending Production.
            </p>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column (Main Content) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Book Information Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-[15px] font-bold text-gray-900 mb-5">Book information</h3>
              
              <div className="flex gap-6">
                {/* Book Cover Mockup */}
                <div className="w-[130px] h-[180px] bg-[#6D1A3E] rounded shadow-sm flex flex-col justify-between p-3 shrink-0 relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#7A1849] to-[#4A1229] opacity-90"></div>
                   <div className="relative z-10">
                     <p className="text-[8px] text-white/70 font-bold uppercase tracking-widest">ORA Editions</p>
                     <div className="w-6 h-[1px] bg-white/30 mt-1 mb-2"></div>
                     <h3 className="text-white font-serif font-bold text-[15px] leading-tight">The Civic<br/>Algorithm</h3>
                   </div>
                   <div className="relative z-10">
                     <p className="text-[9px] text-white/80 font-medium">Naomi Brooks</p>
                   </div>
                </div>

                {/* Book Details Grid */}
                <div className="flex-1 grid grid-cols-2 gap-y-5 gap-x-6 content-start pt-1">
                  <div>
                    <p className="text-[10.5px] text-gray-500 mb-1">Author</p>
                    <p className="text-[13px] font-bold text-gray-900">Prof. Naomi Brooks</p>
                  </div>
                  <div>
                    <p className="text-[10.5px] text-gray-500 mb-1">Category</p>
                    <p className="text-[13px] font-bold text-gray-900">Social Sciences</p>
                  </div>
                  <div>
                    <p className="text-[10.5px] text-gray-500 mb-1">Edition / Language</p>
                    <p className="text-[13px] font-bold text-gray-900">First edition · English</p>
                  </div>
                  <div>
                    <p className="text-[10.5px] text-gray-500 mb-1">Extent</p>
                    <p className="text-[13px] font-bold text-gray-900">248 pages · 12 chapters</p>
                  </div>
                  <div>
                    <p className="text-[10.5px] text-gray-500 mb-1">Editorial acceptance</p>
                    <p className="text-[13px] font-bold text-gray-900">24 Sep 2026</p>
                  </div>
                  <div>
                    <p className="text-[10.5px] text-gray-500 mb-1">Production manager</p>
                    <p className="text-[13px] font-bold text-gray-900">Ava Morgan</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-gray-100">
                <p className="text-[12.5px] text-gray-600 leading-relaxed">
                  An interdisciplinary account of how algorithmic systems shape civic participation, public institutions and accountable governance.
                </p>
              </div>
            </div>

            {/* Production Files Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-[15px] font-bold text-gray-900">Production files</h3>
                <span className="text-[10.5px] text-gray-400 font-medium">Final verified versions</span>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3.5 border border-gray-200 rounded-lg bg-[#F8F9FA]">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-white text-red-500 flex items-center justify-center border border-gray-200 shadow-sm">
                      <FileTextOutlined />
                    </div>
                    <div>
                      <p className="text-[12.5px] font-bold text-gray-900">civic-algorithm_final-proof_v3.pdf</p>
                      <p className="text-[10.5px] text-gray-500">PDF · 8.4 MB · Author accepted 05 Oct 2026</p>
                    </div>
                  </div>
                  <button className="text-[#7A1849] text-[11.5px] font-bold hover:underline flex items-center gap-1">
                    <DownloadOutlined /> Download
                  </button>
                </div>

                <div className="flex items-center justify-between p-3.5 border border-gray-200 rounded-lg bg-[#F8F9FA]">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-white text-gray-500 flex items-center justify-center border border-gray-200 shadow-sm">
                      <FileTextOutlined />
                    </div>
                    <div>
                      <p className="text-[12.5px] font-bold text-gray-900">civic-algorithm_source.zip</p>
                      <p className="text-[10.5px] text-gray-500">DOCX + figures · 24.8 MB · Uploaded 24 Sep 2026</p>
                    </div>
                  </div>
                  <button className="text-[#7A1849] text-[11.5px] font-bold hover:underline flex items-center gap-1">
                    <DownloadOutlined /> Download
                  </button>
                </div>
              </div>
            </div>

            {/* Publication Metadata Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-[15px] font-bold text-gray-900 mb-5">Publication metadata</h3>
              
              <div className="grid grid-cols-3 gap-6 mb-5">
                <div>
                  <p className="text-[10.5px] text-gray-500 mb-1">DOI</p>
                  <p className="text-[12.5px] font-bold text-gray-900">Not registered yet</p>
                </div>
                <div>
                  <p className="text-[10.5px] text-gray-500 mb-1">ISBN</p>
                  <p className="text-[12.5px] font-bold text-gray-900">Not assigned</p>
                </div>
                <div>
                  <p className="text-[10.5px] text-gray-500 mb-1">Access rights</p>
                  <p className="text-[12.5px] font-bold text-gray-900">To be configured</p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <p className="text-[11.5px] text-gray-500">
                  Identifiers and access settings will be finalized in the publishing workspace.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column (Sidebar) */}
          <div className="space-y-6">
            
            {/* Production Status Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-[15px] font-bold text-gray-900 mb-3">Production status</h3>
              
              <div className="mb-5">
                <span className="text-[#2563EB] bg-[#EFF6FF] px-2 py-1 rounded text-[10px] font-bold">
                  In progress
                </span>
              </div>
              
              <div className="space-y-5 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
                {[
                  { title: 'Editorial handoff', desc: '24 Sep · All source files received', status: 'completed' },
                  { title: 'Proof prepared', desc: '28 Sep · Version 1 uploaded', status: 'completed' },
                  { title: 'Corrections resolved', desc: '03 Oct · Version 3 finalized', status: 'completed' },
                  { title: 'Author proof accepted', desc: '05 Oct · Naomi Brooks confirmed', status: 'completed' },
                  { title: 'Publication', desc: 'Next · Assign ISBN and generate DOI', status: 'pending' },
                ].map((step, i) => (
                  <div key={i} className="relative flex items-start gap-4">
                    <div className={`w-[22px] h-[22px] rounded-full flex items-center justify-center shrink-0 z-10 ${
                      step.status === 'completed' ? 'bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0]' : 'bg-white text-gray-300 border border-gray-200'
                    }`}>
                      {step.status === 'completed' ? <CheckCircleFilled className="text-[10px]" /> : <div className="w-1.5 h-1.5 bg-gray-200 rounded-full"></div>}
                    </div>
                    <div className="pt-0.5">
                      <p className={`text-[12.5px] font-bold ${step.status === 'completed' ? 'text-gray-900' : 'text-gray-400'}`}>
                        {step.title}
                      </p>
                      <p className={`text-[10.5px] mt-0.5 leading-snug ${step.status === 'completed' ? 'text-gray-500' : 'text-gray-400'}`}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-[#FEF2F2] border border-[#FECACA] rounded-lg p-3.5 flex gap-2.5 items-start">
                <InfoCircleOutlined className="text-[#DC2626] mt-0.5" />
                <div>
                  <p className="text-[11.5px] font-bold text-[#991B1B]">Not published</p>
                  <p className="text-[10.5px] text-[#B91C1C] mt-0.5 leading-snug">
                    The author has accepted the proof. Complete the publication checklist to release this title.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center text-[10px] text-gray-400 pt-6 mt-8 border-t border-gray-200">
          <span>ORA Academic - eBook operations</span>
          <span>All dates in UTC+3</span>
        </div>

      </div>
    </DigitalContentManagerLayout>
  );
}