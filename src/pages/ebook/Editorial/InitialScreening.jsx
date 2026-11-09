import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EbookEditorialLayout from '../../../layouts/ebook/EbookEditorialLayout';
import { 
  ArrowLeftOutlined, 
  DownloadOutlined, 
  FilePdfOutlined, 
  FileImageOutlined, 
  FileExcelOutlined,
  FileTextOutlined,
  CheckOutlined,
  LockOutlined,
  DownOutlined
} from '@ant-design/icons';

// --- LOCAL CUSTOM DROPDOWN COMPONENT ---
function EvaluationDropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between bg-white border ${
          isOpen ? 'border-[#7A1849] ring-1 ring-[#7A1849]' : 'border-gray-300'
        } rounded-md px-3 py-2 text-[12px] text-gray-800 outline-none transition-all text-left`}
      >
        <span className="truncate pr-4">{value}</span>
        <DownOutlined className={`text-[10px] text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto py-1">
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => {
                onChange(opt);
                setIsOpen(false);
              }}
              className={`w-full text-left px-3 py-2 text-[12px] flex items-center justify-between transition-colors ${
                value === opt 
                  ? 'bg-[#FCF7F9] text-[#7A1849] font-bold' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {opt}
              {value === opt && <CheckOutlined className="text-[10px]" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

const CHECKLIST_ITEMS = [
  { id: 1, title: 'Submission completeness', desc: 'Title page, abstract, chapter list, bibliography, and author details are present.', status: 'Complete' },
  { id: 2, title: 'Scope and series fit', desc: 'Strong fit for Histories in Motion and the press’s digital humanities list.', status: 'Complete' },
  { id: 3, title: 'Originality and plagiarism', desc: 'Similarity report: 7% overall; no substantive matching passages flagged.', status: 'Complete' },
  { id: 4, title: 'Formatting and structure', desc: 'House template followed; chapter hierarchy and references are consistent.', status: 'Complete' },
  { id: 5, title: 'Ethics and research integrity', desc: 'Oral-history consent statement and data management note included.', status: 'Complete' },
  { id: 6, title: 'Permissions and third-party material', desc: 'Two archival maps require confirmed reproduction permission.', status: 'Review' },
  { id: 7, title: 'File and technical integrity', desc: 'Primary manuscript opens correctly; all 18 figure links resolve.', status: 'Complete' },
];

export default function InitialScreening() {
  const navigate = useNavigate();
  const [outcome, setOutcome] = useState('pass');

  // Dropdown states
  const [scopeFit, setScopeFit] = useState('Strong fit');
  const [contribution, setContribution] = useState('Significant');
  const [readiness, setReadiness] = useState('Minor issue');

  return (
    <EbookEditorialLayout>
      <div className="max-w-[1300px] mx-auto pb-10">
        
        <button 
          onClick={() => navigate('/ebook/editorial/book-details')}
          className="flex items-center gap-2 text-[12px] font-bold text-gray-500 hover:text-[#7A1849] transition-colors mb-4"
        >
          <ArrowLeftOutlined className="text-[11px]" /> Back to book details
        </button>

        {/* HERO HEADER CARD */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm mb-4 relative">
          <div className="absolute top-6 right-6">
            <span className="text-[11px] font-bold text-[#D97706]">Due 07 Oct</span>
          </div>
          
          <p className="text-[10px] font-bold text-[#7A1849] uppercase tracking-wider mb-1">EBK-2026-184 · INITIAL SCREENING</p>
          <h1 className="text-[22px] font-bold text-gray-900 leading-tight mb-1.5">
            Rivers of Evidence: Water, Memory, and the Colonial Archive
          </h1>
          <p className="text-[12px] text-gray-500 mb-6">
            Dr. Leila Hassan · History & Digital Humanities · 86,420 words
          </p>

          {/* Progress Bar */}
          <div className="flex items-center gap-4">
            <span className="text-[12px] font-bold text-gray-800 shrink-0">Screening progress</span>
            <div className="flex-1 h-[6px] bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-[#7A1849] rounded-full" style={{ width: '85%' }}></div>
            </div>
            <span className="text-[12px] font-bold text-[#7A1849] shrink-0">6 of 7</span>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 space-y-4">
            
            {/* Checklist */}
            <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-[14px] font-bold text-gray-900">Editorial screening checklist</h2>
                <span className="text-[11px] text-gray-400">Autosaved 1 minute ago</span>
              </div>

              <div className="space-y-2.5">
                {CHECKLIST_ITEMS.map((item) => (
                  <div 
                    key={item.id} 
                    className={`flex items-start justify-between p-3 rounded-lg border ${
                      item.status === 'Review' 
                        ? 'border-[#FDE68A] bg-[#FFFBEB]' 
                        : 'border-gray-200 bg-white'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-[18px] h-[18px] rounded-[4px] flex items-center justify-center mt-0.5 shrink-0 ${
                        item.status === 'Complete' ? 'bg-[#7A1849] text-white' : 'border border-gray-300 bg-white'
                      }`}>
                        {item.status === 'Complete' && <CheckOutlined className="text-[10px]" />}
                      </div>
                      <div>
                        <p className={`text-[12px] font-bold ${item.status === 'Review' ? 'text-[#B45309]' : 'text-gray-900'}`}>
                          {item.title}
                        </p>
                        <p className={`text-[11px] mt-0.5 ${item.status === 'Review' ? 'text-[#D97706]' : 'text-gray-500'}`}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    <span className={`text-[11px] font-medium shrink-0 ${
                      item.status === 'Review' ? 'text-[#D97706]' : 'text-[#52C41A]'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Editorial Evaluation */}
            <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-[14px] font-bold text-gray-900">Editorial evaluation</h2>
                <span className="text-[11px] text-gray-400">Required before outcome</span>
              </div>
              
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Scope fit</label>
                  <EvaluationDropdown 
                    options={['Strong fit', 'Marginal fit', 'Out of scope']} 
                    value={scopeFit} 
                    onChange={setScopeFit} 
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Scholarly contribution</label>
                  <EvaluationDropdown 
                    options={['Significant', 'Incremental', 'Insufficient']} 
                    value={contribution} 
                    onChange={setContribution} 
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Readiness for review</label>
                  <EvaluationDropdown 
                    options={['Minor issue', 'Ready', 'Major issue']} 
                    value={readiness} 
                    onChange={setReadiness} 
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Screening notes</label>
                <textarea 
                  className="w-full border border-gray-300 rounded-md p-3 text-[12px] outline-none focus:border-[#7A1849] focus:ring-1 focus:ring-[#7A1849] min-h-[80px] resize-y text-gray-700 leading-relaxed" 
                  defaultValue="The manuscript is complete, original, and methodologically clear. Proceed once the author supplies written permission for the two Survey Office maps reproduced in chapters 3 and 5."
                ></textarea>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-4">
            
            {/* Files */}
            <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-[14px] font-bold text-gray-900">Files</h2>
                <span className="text-[11px] text-gray-400">4 files</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0 group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <FileTextOutlined className="text-gray-400" />
                    <div>
                      <p className="text-[12px] font-bold text-gray-900 group-hover:text-[#7A1849]">Manuscript v1</p>
                      <p className="text-[10px] text-gray-500">DOCX · 12.4 MB</p>
                    </div>
                  </div>
                  <DownloadOutlined className="text-gray-400 group-hover:text-[#7A1849]" />
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0 group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <FileImageOutlined className="text-gray-400" />
                    <div>
                      <p className="text-[12px] font-bold text-gray-900 group-hover:text-[#7A1849]">Figures and maps</p>
                      <p className="text-[10px] text-gray-500">ZIP · 24.8 MB</p>
                    </div>
                  </div>
                  <DownloadOutlined className="text-gray-400 group-hover:text-[#7A1849]" />
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0 group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <FileExcelOutlined className="text-gray-400" />
                    <div>
                      <p className="text-[12px] font-bold text-gray-900 group-hover:text-[#7A1849]">Permissions log</p>
                      <p className="text-[10px] text-gray-500">XLSX · 86 KB</p>
                    </div>
                  </div>
                  <DownloadOutlined className="text-gray-400 group-hover:text-[#7A1849]" />
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0 group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <FilePdfOutlined className="text-gray-400" />
                    <div>
                      <p className="text-[12px] font-bold text-gray-900 group-hover:text-[#7A1849]">Cover letter</p>
                      <p className="text-[10px] text-gray-500">PDF · 1.3 MB</p>
                    </div>
                  </div>
                  <DownloadOutlined className="text-gray-400 group-hover:text-[#7A1849]" />
                </div>
              </div>
            </div>

            {/* Originality Report */}
            <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
              <h2 className="text-[14px] font-bold text-gray-900 mb-4">Originality report</h2>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-11 h-11 rounded-full bg-[#F6FFED] border border-[#B7EB8F] flex items-center justify-center text-[#52C41A] font-bold text-[14px]">
                  7%
                </div>
                <div>
                  <p className="text-[12px] font-bold text-gray-900">Low similarity</p>
                  <p className="text-[10px] text-gray-500 leading-snug">Bibliography and cited archival descriptions account for most matches.</p>
                </div>
              </div>
              <button className="px-3 py-2 border border-gray-300 rounded-md text-[11px] font-bold text-gray-700 hover:bg-gray-50 w-full text-center transition-colors">
                Open full report
              </button>
            </div>

            {/* Screening Outcome */}
            <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
              <h2 className="text-[14px] font-bold text-gray-900 mb-4">Screening outcome</h2>
              
              <div className="space-y-2 mb-5">
                <label className={`flex items-center gap-3 p-2.5 rounded-md border cursor-pointer transition-colors ${outcome === 'pass' ? 'border-[#7A1849] bg-[#FCF7F9]' : 'border-gray-200 hover:bg-gray-50'}`}>
                  <input type="radio" name="outcome" checked={outcome === 'pass'} onChange={() => setOutcome('pass')} className="accent-[#7A1849] w-3.5 h-3.5" />
                  <span className={`text-[11px] font-bold ${outcome === 'pass' ? 'text-[#7A1849]' : 'text-gray-900'}`}>Pass to reviewer assignment</span>
                </label>
                <label className={`flex items-center gap-3 p-2.5 rounded-md border cursor-pointer transition-colors ${outcome === 'return' ? 'border-[#7A1849] bg-[#FCF7F9]' : 'border-gray-200 hover:bg-gray-50'}`}>
                  <input type="radio" name="outcome" checked={outcome === 'return'} onChange={() => setOutcome('return')} className="accent-[#7A1849] w-3.5 h-3.5" />
                  <span className={`text-[11px] font-bold ${outcome === 'return' ? 'text-[#7A1849]' : 'text-gray-900'}`}>Return for information</span>
                </label>
                <label className={`flex items-center gap-3 p-2.5 rounded-md border cursor-pointer transition-colors ${outcome === 'decline' ? 'border-[#7A1849] bg-[#FCF7F9]' : 'border-gray-200 hover:bg-gray-50'}`}>
                  <input type="radio" name="outcome" checked={outcome === 'decline'} onChange={() => setOutcome('decline')} className="accent-[#7A1849] w-3.5 h-3.5" />
                  <span className={`text-[11px] font-bold ${outcome === 'decline' ? 'text-[#7A1849]' : 'text-gray-900'}`}>Decline at screening</span>
                </label>
              </div>

              <button className="w-full py-2.5 bg-[#7A1849] hover:bg-[#531324] text-white rounded-md text-[11px] font-bold transition-colors flex items-center justify-center gap-2 mb-2 shadow-sm">
                <CheckOutlined /> Complete screening
              </button>
              <button className="w-full py-2.5 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-md text-[11px] font-bold transition-colors flex items-center justify-center gap-2">
                <LockOutlined /> Save draft
              </button>
            </div>

          </div>
        </div>
      </div>
    </EbookEditorialLayout>
  );
}