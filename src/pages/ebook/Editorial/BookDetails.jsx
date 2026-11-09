import React from 'react';
import { useNavigate } from 'react-router-dom';
import EbookEditorialLayout from '../../../layouts/ebook/EbookEditorialLayout';
import { 
  ArrowLeftOutlined, DownloadOutlined, FilePdfOutlined, 
  FileImageOutlined, FileTextOutlined, MoreOutlined
} from '@ant-design/icons';

export default function BookDetails() {
  const navigate = useNavigate();

  return (
    <EbookEditorialLayout>
      {/* 1400px max-width to match the image's wider layout */}
      <div className="max-w-[1400px] mx-auto pb-10">
        
        {/* BREADCRUMB - smaller font */}
        <button 
          onClick={() => navigate('/ebook/editorial/books')}
          className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-500 hover:text-[#7A1849] transition-colors mb-4"
        >
          <ArrowLeftOutlined className="text-[10px]" /> Back to All Books
        </button>

        {/* HERO HEADER CARD - tighter padding */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm mb-4 flex gap-5 relative">
          
          <div className="absolute top-5 right-5">
            <span className="inline-block px-2.5 py-0.5 bg-[#FFF8E6] text-[#D48806] text-[11px] font-bold rounded-md">
              Awaiting screening
            </span>
          </div>

          {/* BOOK COVER - smaller, matching image */}
          <div className="w-[100px] h-[145px] rounded shadow-md overflow-hidden shrink-0 bg-gradient-to-br from-[#521530] to-[#7A1849] flex flex-col justify-between p-3 relative">
            <div className="text-[7px] font-bold text-white/70 uppercase tracking-widest border-b border-white/20 pb-1 mb-2">ORA EDITIONS</div>
            <div>
              <p className="text-white font-serif font-bold text-[13px] leading-tight mb-1">Rivers of Evidence</p>
              <p className="text-white/60 text-[9px]">Leila Hassan</p>
            </div>
          </div>

          {/* BOOK DETAILS */}
          <div className="flex-1 pr-28 pt-0.5">
            <p className="text-[11px] font-bold text-[#7A1849] tracking-wide mb-1.5">EBOOK EBK-2026-184</p>
            <h1 className="text-[26px] font-bold text-gray-900 leading-tight mb-1.5">
              Rivers of Evidence: Water, Memory, and the Colonial Archive
            </h1>
            <p className="text-[13px] font-medium text-gray-600 mb-2">
              Dr. Leila Hassan · Institute for Historical Inquiry, University of Cape Town
            </p>
            <p className="text-[12px] text-gray-500 leading-relaxed mb-5 max-w-4xl">
              A digital humanities monograph tracing how river surveys, oral testimony, and administrative records shaped environmental knowledge across the nineteenth-century Indian Ocean.
            </p>
            
            <div className="flex gap-2.5">
              <button 
                onClick={() => navigate('/ebook/editorial/screening')}
                className="px-4 py-1.5 bg-[#7A1849] hover:bg-[#531324] text-white rounded-md text-[11px] font-bold transition-colors flex items-center gap-1.5"
              >
                Begin screening
              </button>
              <button className="px-3.5 py-1.5 border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 rounded-md text-[11px] font-bold transition-colors flex items-center gap-1.5">
                <DownloadOutlined /> Download package
              </button>
              <button className="px-3.5 py-1.5 border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 rounded-md text-[11px] font-bold transition-colors flex items-center gap-1.5">
                <MoreOutlined /> More actions
              </button>
            </div>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 space-y-4">
            
            {/* METADATA */}
            <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-[13px] font-bold text-gray-900">Book metadata</h2>
                <span className="text-[10px] text-gray-400">Submission version 1.0</span>
              </div>
              <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-[11px]">
                <div>
                  <p className="text-gray-500 mb-0.5">Primary category</p>
                  <p className="font-medium text-gray-900">History & Digital Humanities</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-0.5">Submitted</p>
                  <p className="font-medium text-gray-900">04 October 2026, 09:42 UTC</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-0.5">Keywords</p>
                  <p className="font-medium text-gray-900">archives, water history, colonial science</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-0.5">Proposed series</p>
                  <p className="font-medium text-gray-900">Histories in Motion</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-0.5">Language</p>
                  <p className="font-medium text-gray-900">English (UK)</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-0.5">Open access</p>
                  <p className="font-medium text-gray-900">Requested · CC BY-NC</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-0.5">Word count</p>
                  <p className="font-medium text-gray-900">86,420 words</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-0.5">Funding</p>
                  <p className="font-medium text-gray-900">Mellon Humanities Initiative</p>
                </div>
              </div>
            </div>

            {/* ABSTRACT */}
            <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-[13px] font-bold text-gray-900">Abstract & editorial summary</h2>
                <span className="text-[10px] text-gray-400">1,126 words</span>
              </div>
              <p className="text-[12px] text-gray-600 leading-[1.6] mb-3">
                This book reconstructs the evidentiary worlds created around three river systems between 1840 and 1920. Combining geographical analysis with oral histories and close reading of survey records, it argues that water was not simply measured by colonial institutions; it became an active medium through which authority was negotiated. The manuscript offers a significant methodological bridge between environmental history, archival studies, and public humanities.
              </p>
              <div className="bg-[#FCF7F9] border border-[#F0E1E7] rounded p-2.5 text-[11px] text-[#7A1849] font-medium italic">
                Editorial fit appears strong for the Histories in Motion series. Confirm permissions for maps reproduced in chapters 3 and 5 during screening.
              </div>
            </div>

            {/* FILES */}
            <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-[13px] font-bold text-gray-900">Submission files</h2>
                <span className="text-[10px] text-gray-400">4 files · 38.6 MB</span>
              </div>
              <div className="space-y-2">
                
                <div className="flex items-center justify-between p-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-white border border-gray-200 flex items-center justify-center text-red-500 shrink-0 shadow-sm">
                      <FilePdfOutlined className="text-[13px]" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-gray-900">Manuscript_Rivers_of_Evidence_v1.docx</p>
                      <p className="text-[10px] text-gray-500">DOCX · 12.4 MB · Primary manuscript</p>
                    </div>
                  </div>
                  <button className="px-3 py-1 border border-gray-300 rounded text-[10px] font-bold text-gray-700 hover:bg-gray-100 transition-colors">
                    Download
                  </button>
                </div>

                <div className="flex items-center justify-between p-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-white border border-gray-200 flex items-center justify-center text-blue-500 shrink-0 shadow-sm">
                      <FileImageOutlined className="text-[13px]" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-gray-900">Figures_and_maps.zip</p>
                      <p className="text-[10px] text-gray-500">ZIP · 24.8 MB · 18 figures</p>
                    </div>
                  </div>
                  <button className="px-3 py-1 border border-gray-300 rounded text-[10px] font-bold text-gray-700 hover:bg-gray-100 transition-colors">
                    Download
                  </button>
                </div>

                <div className="flex items-center justify-between p-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-white border border-gray-200 flex items-center justify-center text-gray-500 shrink-0 shadow-sm">
                      <FileTextOutlined className="text-[13px]" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-gray-900">Author_cover_letter.pdf</p>
                      <p className="text-[10px] text-gray-500">PDF · 1.3 MB · Cover letter</p>
                    </div>
                  </div>
                  <button className="px-3 py-1 border border-gray-300 rounded text-[10px] font-bold text-gray-700 hover:bg-gray-100 transition-colors">
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-4">
            
            {/* AUTHOR INFO */}
            <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
              <h2 className="text-[13px] font-bold text-gray-900 mb-3">Author information</h2>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#FCF7F9] border border-[#F0E1E7] flex items-center justify-center text-[#7A1849] font-bold text-[11px]">
                  LH
                </div>
                <div>
                  <p className="text-[11px] font-bold text-gray-900">Dr. Leila Hassan</p>
                  <p className="text-[10px] text-gray-500">Associate Professor of History</p>
                </div>
              </div>
              <div className="space-y-2.5 text-[11px]">
                <div>
                  <p className="text-gray-500 mb-0.5">Email</p>
                  <a href="mailto:leila.hassan@uct.ac.za" className="text-gray-900 font-medium hover:text-[#7A1849] hover:underline">leila.hassan@uct.ac.za</a>
                </div>
                <div>
                  <p className="text-gray-500 mb-0.5">ORCID</p>
                  <p className="font-medium text-gray-900">0000-0002-1847-2216</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-0.5">Corresponding author</p>
                  <p className="font-medium text-gray-900">Yes</p>
                </div>
              </div>
            </div>

            {/* TIMELINE */}
            <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
              <h2 className="text-[13px] font-bold text-gray-900 mb-3">Submission timeline</h2>
              <div className="relative border-l border-gray-200 ml-1.5 space-y-4 pb-1">
                
                <div className="relative pl-4">
                  <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-[#7A1849]"></div>
                  <p className="text-[11px] font-bold text-gray-900">Submission received</p>
                  <p className="text-[10px] text-gray-500 mt-0.5">04 Oct · 09:42</p>
                </div>

                <div className="relative pl-4">
                  <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-[#7A1849]"></div>
                  <p className="text-[11px] font-bold text-gray-900">Files validated</p>
                  <p className="text-[10px] text-gray-500 mt-0.5">04 Oct · 09:47</p>
                </div>

                <div className="relative pl-4">
                  <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-[#7A1849]"></div>
                  <p className="text-[11px] font-bold text-gray-900">Editorial officer assigned</p>
                  <p className="text-[10px] text-gray-500 mt-0.5">04 Oct · 10:15</p>
                </div>

                <div className="relative pl-4">
                  <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-white border-2 border-gray-300"></div>
                  <p className="text-[11px] font-medium text-gray-400">Initial screening</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">Due 07 Oct</p>
                </div>

                <div className="relative pl-4">
                  <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-white border-2 border-gray-300"></div>
                  <p className="text-[11px] font-medium text-gray-400">Reviewer assignment</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">Not started</p>
                </div>

              </div>
            </div>

            {/* NOTES */}
            <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-[13px] font-bold text-gray-900">Editorial notes</h2>
                <span className="text-[10px] text-gray-400">Internal</span>
              </div>
              <textarea 
                className="w-full bg-white border border-gray-200 rounded p-2.5 text-[11px] outline-none focus:border-[#7A1849] min-h-[80px] resize-y mb-2.5 text-gray-700 leading-relaxed" 
                placeholder="Add note"
              ></textarea>
              <button className="px-3 py-1 border border-gray-300 rounded text-[10px] font-bold text-gray-700 hover:bg-gray-50 transition-colors">
                Save note
              </button>
            </div>

          </div>
        </div>

        {/* BOTTOM CUTOFF SECTION (Screening Decision) */}
        <div className="mt-4 bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
          <h2 className="text-[13px] font-bold text-gray-900 mb-1">Screening Decision</h2>
          <p className="text-[12px] text-gray-500">
            Select your screening decision to either proceed this submission to formal review or desk reject it immediately.
          </p>
        </div>

      </div>
    </EbookEditorialLayout>
  );
}