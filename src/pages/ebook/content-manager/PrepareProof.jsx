// src/pages/ebook/content-manager/PrepareProof.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import DigitalContentManagerLayout from '../../../layouts/ebook/DigitalContentManagerLayout';
import { 
  InfoCircleOutlined, 
  DownloadOutlined, 
  FileTextOutlined, 
  CheckOutlined,
  SendOutlined,
  DownOutlined,
  UploadOutlined
} from '@ant-design/icons';

export default function PrepareProof() {
  const navigate = useNavigate();

  return (
    <DigitalContentManagerLayout>
      {/* Wider container to fill the screen, normal padding */}
      <div className="w-full max-w-[1400px] mx-auto pb-8 pt-2">
        
        {/* Header */}
        <div className="flex justify-between items-start mb-5">
          <div>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
              Workspace / Pending Production
            </p>
            <h1 className="text-[28px] font-bold text-[#1F2937] tracking-tight mb-1">
              Prepare & send proof
            </h1>
            <p className="text-[13px] text-gray-500">
              Clinical AI: Methods and Applications · EB-2026-108 · Dr. Leila Hassan
            </p>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => navigate('/content-manager/typeset')} 
              className="bg-white text-gray-700 border border-gray-300 px-5 py-2.5 rounded-lg text-[12px] font-bold shadow-sm hover:bg-gray-50 transition-colors"
            >
              Back to queue
            </button>
            <button className="bg-white text-gray-700 border border-gray-300 px-5 py-2.5 rounded-lg text-[12px] font-bold shadow-sm hover:bg-gray-50 transition-colors">
              Save draft
            </button>
          </div>
        </div>

        {/* Alert Banner */}
        <div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-lg p-4 flex gap-3 items-start mb-6">
          <InfoCircleOutlined className="text-[#D97706] mt-0.5" />
          <div>
            <p className="text-[12px] font-bold text-[#92400E]">Author requested changes to proof v1</p>
            <p className="text-[11px] text-[#B45309] mt-0.5">
              Three corrections have been resolved in v2. Send the revised proof for author verification; acceptance is still pending.
            </p>
          </div>
        </div>

        {/* Main Grid - Using wider columns to fill space */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column (Main Content) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Download Book Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-3">
                <h3 className="text-[14px] font-bold text-gray-900">Download book</h3>
                <span className="text-[10px] text-gray-400 font-medium">Editorial source package</span>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3.5 border border-gray-200 rounded-lg bg-[#F8F9FA]">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded bg-white text-red-500 flex items-center justify-center border border-gray-200">
                      <FileTextOutlined />
                    </div>
                    <div>
                      <p className="text-[12.5px] font-bold text-gray-900">clinical-ai_accepted-manuscript.docx</p>
                      <p className="text-[10.5px] text-gray-500">DOCX · 2.8 MB · Accepted 22 Sep 2026</p>
                    </div>
                  </div>
                  <button className="text-[#7A1849] text-[11.5px] font-bold hover:underline flex items-center gap-1">
                    <DownloadOutlined /> Download
                  </button>
                </div>
                
                <div className="flex items-center justify-between p-3.5 border border-gray-200 rounded-lg bg-[#F8F9FA]">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded bg-white text-purple-600 flex items-center justify-center border border-gray-200">
                      <FileTextOutlined />
                    </div>
                    <div>
                      <p className="text-[12.5px] font-bold text-gray-900">clinical-ai_figures-and-tables.zip</p>
                      <p className="text-[10.5px] text-gray-500">ZIP · 18.6 MB · 24 figures, 12 tables</p>
                    </div>
                  </div>
                  <button className="text-[#7A1849] text-[11.5px] font-bold hover:underline flex items-center gap-1">
                    <DownloadOutlined /> Download
                  </button>
                </div>
              </div>
            </div>

            {/* Prepare Proof Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-[14px] font-bold text-gray-900">Prepare proof</h3>
                <span className="text-[10px] text-gray-500 font-medium">Revised proof · Version 2</span>
              </div>
              
              {/* Upload Zone */}
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 transition-colors mb-4">
                <UploadOutlined className="text-2xl text-[#7A1849] mb-2" />
                <p className="text-[13px] font-bold text-[#7A1849] mb-1">Upload proof or drag and drop</p>
                <p className="text-[11px] text-gray-500">PDF only · Maximum 50 MB · Preserve chapter bookmarks</p>
              </div>

              {/* Uploaded File */}
              <div className="flex items-center justify-between p-3.5 border border-gray-200 rounded-lg bg-[#F8F9FA] mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded bg-white text-red-500 flex items-center justify-center border border-gray-200">
                    <FileTextOutlined />
                  </div>
                  <div>
                    <p className="text-[12.5px] font-bold text-gray-900">clinical-ai_proof_v2.pdf</p>
                    <p className="text-[10.5px] text-gray-500">PDF · 9.2 MB · Uploaded today, 09:42 · Ava Morgan</p>
                  </div>
                </div>
                <button className="text-[#7A1849] text-[11.5px] font-bold hover:underline">Preview</button>
              </div>

              {/* Checklist */}
              <div className="space-y-2">
                {[
                  'Page numbers, references and figures checked',
                  'Author corrections incorporated (3 of 3)',
                  'Fonts embedded and accessibility tags verified'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-[11.5px] text-gray-600">
                    <CheckOutlined className="text-[#059669] text-[10px]" /> {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Send Proof Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <h3 className="text-[14px] font-bold text-gray-900 mb-4">Send proof to author</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[11.5px] font-bold text-gray-700 mb-1.5">Recipient</label>
                  <input 
                    type="text" 
                    defaultValue="leila.hassan@northstar.edu" 
                    className="w-full border border-gray-300 rounded-lg p-2.5 text-[12.5px] text-gray-900 outline-none focus:border-[#7A1849]" 
                  />
                </div>
                <div>
                  <label className="block text-[11.5px] font-bold text-gray-700 mb-1.5">Verification due date</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      defaultValue="12 Oct 2026" 
                      className="w-full border border-gray-300 rounded-lg p-2.5 text-[12.5px] text-gray-900 outline-none focus:border-[#7A1849] pr-8" 
                    />
                    <DownOutlined className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-[11.5px] font-bold text-gray-700 mb-1.5">Message to author</label>
                <textarea 
                  rows="3" 
                  defaultValue="Dear Dr. Hassan, your requested corrections have been incorporated in proof v2. Please review the attached proof and confirm acceptance or submit any remaining corrections by 12 October."
                  className="w-full border border-gray-300 rounded-lg p-2.5 text-[12.5px] text-gray-900 outline-none resize-none focus:border-[#7A1849]"
                ></textarea>
              </div>

              <div className="flex items-center gap-2 mb-6 text-[11.5px] text-gray-600">
                <CheckOutlined className="text-[#059669]" /> Notify author by email and in the eBook Author workspace
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <p className="text-[11.5px] text-gray-500">Revised proof will replace v1 for verification.</p>
                <button className="bg-[#7A1849] text-white px-5 py-2.5 rounded-lg text-[12.5px] font-bold shadow-sm hover:bg-[#531324] transition-colors flex items-center gap-2">
                  <SendOutlined /> Send Proof to Author
                </button>
              </div>
            </div>

          </div>

          {/* Right Column (Sidebar) */}
          <div className="space-y-6">
            
            {/* Track Verification Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <h3 className="text-[14px] font-bold text-gray-900 mb-3">Track verification</h3>
              
              <div className="mb-4">
                <span className="bg-[#FDF2F8] text-[#9D174D] px-2.5 py-1 rounded text-[10px] font-bold">
                  Changes requested
                </span>
              </div>
              
              <div className="space-y-3 text-[11.5px] mb-5">
                <div>
                  <p className="text-gray-500">Latest author response</p>
                  <p className="font-bold text-gray-900 mt-0.5">03 Oct 2026 · 14:20</p>
                </div>
                <div>
                  <p className="text-gray-500">Current delivery</p>
                  <p className="font-bold text-gray-900 mt-0.5">v1 sent · v2 prepared, not sent</p>
                </div>
              </div>

              <div className="bg-[#F8F9FA] rounded-lg p-3.5 flex gap-2.5 border border-gray-100">
                <InfoCircleOutlined className="text-gray-400 mt-0.5" />
                <div>
                  <p className="text-[11.5px] font-bold text-gray-800">Awaiting author acceptance</p>
                  <p className="text-[10.5px] text-gray-500 leading-snug mt-0.5">
                    The book stays in Pending Production until the author accepts the proof.
                  </p>
                </div>
              </div>
            </div>

            {/* Author Corrections Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-[14px] font-bold text-gray-900">Author corrections</h3>
                <span className="text-[10px] text-gray-400">3 resolved</span>
              </div>
              
              <div className="space-y-4">
                {[
                  { title: 'Page 42 · Figure 3', desc: 'Caption updated to match data.' },
                  { title: 'Page 118 · Reference 27', desc: 'DOI corrected and link verified.' },
                  { title: 'Page 206 · Author affiliation', desc: 'Northstar Labs affiliation updated.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-2.5 items-start">
                    <CheckOutlined className="text-[#059669] text-[10px] mt-1" />
                    <div>
                      <p className="text-[11.5px] font-bold text-gray-900">{item.title}</p>
                      <p className="text-[10.5px] text-gray-500 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Verification History Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <h3 className="text-[14px] font-bold text-gray-900 mb-4">Verification history</h3>
              
              <div className="space-y-4">
                {[
                  { date: '05 Oct · 09:42', title: 'Proof v2 prepared', desc: 'Ava Morgan uploaded revised proof.' },
                  { date: '03 Oct · 14:20', title: 'Changes requested', desc: 'Leila Hassan submitted 3 corrections.' },
                  { date: '28 Sep · 10:05', title: 'Proof v1 sent', desc: 'Author notified, due 05 October.' },
                  { date: '26 Sep · 16:30', title: 'Proof v1 prepared', desc: 'Initial production check completed.' }
                ].map((item, i) => (
                  <div key={i} className="text-[11.5px]">
                    <p className="text-gray-400 font-medium">{item.date}</p>
                    <p className="font-bold text-gray-900 mt-0.5">{item.title}</p>
                    <p className="text-gray-500 mt-0.5 leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center text-[10px] text-gray-400 pt-6 mt-6 border-t border-gray-200">
          <span>ORA Academic - eBook operations</span>
          <span>All dates in UTC+3</span>
        </div>

      </div>
    </DigitalContentManagerLayout>
  );
}