import React from 'react';
import { Link } from 'react-router-dom';
import EbookAuthorLayout from '../../../layouts/ebook/EbookAuthorLayout';
import { 
  CloudUploadOutlined, 
  FileTextOutlined, 
  CheckCircleFilled,
  FilePdfOutlined,
  PictureOutlined
} from '@ant-design/icons';

export default function SubmitBook() {
  return (
    <EbookAuthorLayout>
      {/* Tight container with reduced top/left/right padding to match image */}
      <div className="w-full max-w-[1300px] mx-auto px-4 lg:px-6 pt-6 pb-12 font-sans text-[#1F2937]">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
          <div>
            <p className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wider mb-1">
              Workspace / My Books / New Submission
            </p>
            <h1 className="text-[26px] font-bold text-[#111827] leading-tight mb-1">
              New Book Submission
            </h1>
            <p className="text-[13px] text-[#6B7280]">
              Provide the essential book details and manuscript for editorial review.
            </p>
          </div>
          
          <Link 
            to="/ebook/author/my-books" 
            className="text-[12px] font-bold text-[#4B5563] bg-white border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 hover:text-[#7A1849] transition-colors shadow-sm self-start md:mt-2"
          >
            Back to My Books
          </Link>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Form (Main Content) */}
          <div className="lg:col-span-8 space-y-5">
            <form className="space-y-5">
              
              {/* Section 1: Book Details */}
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="text-[16px] font-bold text-[#111827] mb-4">Book details</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-[12px] font-bold text-[#4B5563] mb-1.5">Book title <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      defaultValue="Responsible AI in Healthcare" 
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-[13px] text-gray-800 focus:ring-2 focus:ring-[#7A1849]/20 focus:border-[#7A1849] outline-none transition-all" 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-[12px] font-bold text-[#4B5563] mb-1.5">Subject / category <span className="text-red-500">*</span></label>
                    <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-[13px] text-gray-800 focus:ring-2 focus:ring-[#7A1849]/20 focus:border-[#7A1849] outline-none appearance-none bg-white transition-all">
                      <option>Medical & Health Sciences</option>
                      <option>Computer Science</option>
                      <option>Engineering</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-[12px] font-bold text-[#4B5563] mb-1.5">Short synopsis <span className="text-red-500">*</span></label>
                    <textarea 
                      rows="3" 
                      defaultValue="A practical academic guide to responsible artificial intelligence in healthcare. The book examines clinical applications, privacy, fairness and governance, with case studies that help researchers and practitioners develop trustworthy AI systems."
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-[13px] text-gray-800 focus:ring-2 focus:ring-[#7A1849]/20 focus:border-[#7A1849] outline-none resize-none transition-all"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Section 2: Author Information */}
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="text-[16px] font-bold text-[#111827] mb-4">Author information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-[12px] font-bold text-[#4B5563] mb-1.5">Author name <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      defaultValue="Dr. Ava Morgan" 
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-[13px] text-gray-800 focus:ring-2 focus:ring-[#7A1849]/20 focus:border-[#7A1849] outline-none transition-all" 
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] font-bold text-[#4B5563] mb-1.5">Email address <span className="text-red-500">*</span></label>
                    <input 
                      type="email" 
                      defaultValue="ava.morgan@northstar.edu" 
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-[13px] text-gray-800 focus:ring-2 focus:ring-[#7A1849]/20 focus:border-[#7A1849] outline-none transition-all" 
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-[12px] font-bold text-[#4B5563] mb-1.5">Institution / affiliation <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    defaultValue="Northstar University, Center for Clinical AI" 
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-[13px] text-gray-800 focus:ring-2 focus:ring-[#7A1849]/20 focus:border-[#7A1849] outline-none transition-all" 
                  />
                </div>
              </div>

              {/* Section 3: Book Files */}
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="text-[16px] font-bold text-[#111827] mb-4">Book files</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Manuscript Upload */}
                  <div>
                    <label className="block text-[12px] font-bold text-[#4B5563] mb-1.5">Manuscript <span className="text-red-500">*</span></label>
                    <div className="border-2 border-dashed border-gray-200 bg-[#FAFAFA] rounded-xl p-6 text-center hover:bg-gray-50 cursor-pointer transition-colors">
                      <div className="w-8 h-8 mx-auto bg-[#FDF2F8] rounded-full flex items-center justify-center mb-2">
                        <CloudUploadOutlined className="text-lg text-[#7A1849]" />
                      </div>
                      <p className="text-[12px] font-bold text-[#7A1849] mb-1">Upload manuscript file</p>
                      <p className="text-[10px] text-[#9CA3AF]">DOCX or PDF • Maximum 50 MB</p>
                    </div>
                  </div>

                  {/* Cover Image Upload */}
                  <div>
                    <label className="block text-[12px] font-bold text-[#4B5563] mb-1.5">Cover image (optional)</label>
                    <div className="border-2 border-dashed border-gray-200 bg-[#FAFAFA] rounded-xl p-6 text-center hover:bg-gray-50 cursor-pointer transition-colors">
                      <div className="w-8 h-8 mx-auto bg-[#FDF2F8] rounded-full flex items-center justify-center mb-2">
                        <CloudUploadOutlined className="text-lg text-[#7A1849]" />
                      </div>
                      <p className="text-[12px] font-bold text-[#7A1849] mb-1">Upload cover image</p>
                      <p className="text-[10px] text-[#9CA3AF]">JPG or PNG • Maximum 10 MB</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4: Review and Submit */}
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="text-[16px] font-bold text-[#111827] mb-3">Review and submit</h3>
                
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-[18px] h-[18px] rounded bg-[#7A1849] flex items-center justify-center shrink-0 mt-0.5">
                    <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-white"><path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <p className="text-[12.5px] text-[#4B5563] leading-relaxed">
                    I confirm that this book is original, I have the right to submit it, and the information provided is accurate. I agree to the ORA Academic submission terms.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-100">
                  <p className="text-[10.5px] text-[#9CA3AF]">
                    Draft last saved Sep 25, 2026 at 4:18 PM
                  </p>
                  <div className="flex gap-2 w-full sm:w-auto">
                    <button type="button" className="flex-1 sm:flex-none px-5 py-2 rounded-lg text-[12.5px] font-bold text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 transition-colors">
                      Save Draft
                    </button>
                    <button type="button" className="flex-1 sm:flex-none px-5 py-2 rounded-lg text-[12.5px] font-bold text-white bg-[#7A1849] hover:bg-[#531324] shadow-sm transition-colors">
                      Submit Book
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Right Column: Sidebar (Guidelines & Status) */}
          <div className="lg:col-span-4 space-y-5">
            
            {/* Submission Guidelines */}
            <div>
              <h3 className="text-[15px] font-bold text-[#111827] mb-1">Submission guidelines</h3>
              <p className="text-[12px] text-[#6B7280] mb-4">Helpful context to ensure your book is complete and ready for editorial review.</p>
            </div>

            {/* Before you submit */}
            <div className="bg-white p-4 rounded-xl border border-gray-200">
              <h4 className="text-[13px] font-bold text-[#111827] mb-3">Before you submit</h4>
              <ul className="space-y-3">
                {[
                  'Manuscript uploaded and in the correct format',
                  'Author details and affiliation are complete',
                  'Submission terms have been reviewed'
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircleFilled className="text-[#7A1849] text-[12px] mt-0.5 shrink-0" />
                    <span className="text-[12px] text-[#4B5563] leading-snug">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Upload requirements */}
            <div className="bg-white p-4 rounded-xl border border-gray-200">
              <h4 className="text-[13px] font-bold text-[#111827] mb-3">Upload requirements</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-[#FDF2F8] flex items-center justify-center shrink-0">
                    <FilePdfOutlined className="text-[#7A1849] text-[11px]" />
                  </div>
                  <div>
                    <p className="text-[12px] font-bold text-[#4B5563]">Manuscript</p>
                    <p className="text-[10.5px] text-[#9CA3AF]">DOCX or PDF • Maximum 50 MB</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-[#FDF2F8] flex items-center justify-center shrink-0">
                    <PictureOutlined className="text-[#7A1849] text-[11px]" />
                  </div>
                  <div>
                    <p className="text-[12px] font-bold text-[#4B5563]">Cover image</p>
                    <p className="text-[10.5px] text-[#9CA3AF]">JPG or PNG • Maximum 10 MB</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Current file */}
            <div className="bg-white p-4 rounded-xl border border-gray-200">
              <h4 className="text-[13px] font-bold text-[#111827] mb-3">Current file</h4>
              <div className="flex items-start justify-between border border-gray-100 rounded-lg p-2.5 bg-[#FAFAFA]">
                <div className="flex items-start gap-2.5">
                  <FileTextOutlined className="text-[#7A1849] mt-0.5 text-sm shrink-0" />
                  <div>
                    <p className="text-[11px] font-bold text-[#4B5563] leading-tight mb-1">Responsible_AI_Healthcare.docx</p>
                    <p className="text-[9.5px] text-[#9CA3AF]">8.4 MB • Uploaded just now</p>
                  </div>
                </div>
                <span className="text-[9px] font-bold text-[#059669] bg-[#ECFDF5] px-1.5 py-0.5 rounded shrink-0">Ready</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </EbookAuthorLayout>
  );
}