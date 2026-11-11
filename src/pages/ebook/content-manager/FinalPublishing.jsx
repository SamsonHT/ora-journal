// src/pages/ebook/content-manager/FinalPublishing.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DigitalContentManagerLayout from '../../../layouts/ebook/DigitalContentManagerLayout';
import { 
  CheckCircleFilled, 
  InfoCircleOutlined, 
  DownOutlined,
  FileTextOutlined,
  ArrowRightOutlined
} from '@ant-design/icons';

export default function FinalPublishing() {
  const navigate = useNavigate();
  
  // Form State
  const [accessType, setAccessType] = useState('open');
  const [license, setLicense] = useState('CC BY 4.0');
  const [embargo, setEmbargo] = useState('No embargo · Release immediately');
  const [pubDate, setPubDate] = useState('05 Oct 2026');
  
  const [pdfIsbn, setPdfIsbn] = useState('978-1-4028-9462-8');
  const [epubIsbn, setEpubIsbn] = useState('978-1-4028-9463-5');
  const [isAcknowledged, setIsAcknowledged] = useState(false);

  const handlePublish = () => {
    if (!isAcknowledged || !pdfIsbn || !epubIsbn) return;
    alert('Book successfully published! Assigned ISBNs and generated DOI.');
    navigate('/content-manager/publish');
  };

  return (
    <DigitalContentManagerLayout>
      <div className="w-full max-w-[1400px] mx-auto pb-8 pt-2">
        
        {/* Header */}
        <div className="flex justify-between items-start mb-5">
          <div>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
              Workspace / Publication
            </p>
            <h1 className="text-[28px] font-bold text-[#1F2937] tracking-tight mb-1">
              Final publishing
            </h1>
            <p className="text-[13px] text-gray-500">
              The Civic Algorithm · EB-2026-184 · Prof. Naomi Brooks
            </p>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => navigate('/content-manager/publish')}
              className="bg-white text-gray-700 border border-gray-300 px-5 py-2 rounded-lg text-[12px] font-bold shadow-sm hover:bg-gray-50 transition-colors"
            >
              Back to ready books
            </button>
            <button className="bg-white text-gray-700 border border-gray-300 px-5 py-2 rounded-lg text-[12px] font-bold shadow-sm hover:bg-gray-50 transition-colors">
              Save draft
            </button>
          </div>
        </div>

        {/* Alert */}
        <div className="bg-[#ECFDF5] border border-[#A7F3D0] rounded-lg p-4 flex gap-3 items-start mb-6">
          <CheckCircleFilled className="text-[#059669] mt-0.5" />
          <div>
            <p className="text-[12px] font-bold text-[#065F46]">Author accepted final proof v3</p>
            <p className="text-[11px] text-[#047857] mt-0.5">
              Accepted 05 Oct 2026, 09:18 · All corrections resolved · The book is not yet published.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column (Main Content) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Set access rights & embargo */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <h3 className="text-[15px] font-bold text-gray-900 mb-4">Set access rights & embargo</h3>
              
              <div className="grid grid-cols-2 gap-3 mb-5">
                <button 
                  onClick={() => setAccessType('open')}
                  className={`text-left p-3 border rounded-lg transition-colors ${accessType === 'open' ? 'border-[#6B1D3A] bg-[#FCF7F9] ring-1 ring-[#6B1D3A]/10' : 'border-gray-200 hover:bg-gray-50'}`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className={`w-3 h-3 rounded-full border ${accessType === 'open' ? 'border-[#6B1D3A] bg-[#6B1D3A]' : 'border-gray-300'}`}></div>
                    <p className="text-[12px] font-bold text-gray-900">Open access</p>
                  </div>
                  <p className="text-[10.5px] text-gray-500 pl-5">Free to read and download</p>
                </button>
                <button 
                  onClick={() => setAccessType('restricted')}
                  className={`text-left p-3 border rounded-lg transition-colors ${accessType === 'restricted' ? 'border-[#6B1D3A] bg-[#FCF7F9] ring-1 ring-[#6B1D3A]/10' : 'border-gray-200 hover:bg-gray-50'}`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className={`w-3 h-3 rounded-full border ${accessType === 'restricted' ? 'border-[#6B1D3A] bg-[#6B1D3A]' : 'border-gray-300'}`}></div>
                    <p className="text-[12px] font-bold text-gray-900">Restricted access</p>
                  </div>
                  <p className="text-[10.5px] text-gray-500 pl-5">Purchase or paid access</p>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">License *</label>
                  <div className="relative">
                    <select value={license} onChange={(e) => setLicense(e.target.value)} className="w-full border border-gray-300 rounded-lg p-2.5 text-[12.5px] text-gray-900 outline-none focus:border-[#6B1D3A] appearance-none bg-white">
                      <option>CC BY 4.0</option>
                      <option>CC BY-NC 4.0</option>
                      <option>All Rights Reserved</option>
                    </select>
                    <DownOutlined className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-gray-400 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Embargo</label>
                  <div className="relative">
                    <select value={embargo} onChange={(e) => setEmbargo(e.target.value)} className="w-full border border-gray-300 rounded-lg p-2.5 text-[12.5px] text-gray-900 outline-none focus:border-[#6B1D3A] appearance-none bg-white">
                      <option>No embargo · Release immediately</option>
                      <option>6 month embargo</option>
                      <option>12 month embargo</option>
                    </select>
                    <DownOutlined className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>
              <p className="text-[10.5px] text-gray-500 mb-5">An embargo can delay public downloads until a release date. No embargo is applied to this ebook.</p>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Publication date *</label>
                  <input type="text" value={pubDate} onChange={(e) => setPubDate(e.target.value)} className="w-full border border-gray-300 rounded-lg p-2.5 text-[12.5px] text-gray-900 outline-none focus:border-[#6B1D3A]" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Embargo end date</label>
                  <input type="text" defaultValue="Not applicable" disabled className="w-full border border-gray-200 bg-gray-50 rounded-lg p-2.5 text-[12.5px] text-gray-500 cursor-not-allowed" />
                </div>
              </div>
            </div>

            {/* DOI Auto generation */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <h3 className="text-[15px] font-bold text-gray-900 mb-4">DOI · Auto generation</h3>
              <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Generated DOI</label>
              <div className="flex gap-2 mb-2">
                <input type="text" defaultValue="10.5437/ora-ebook-2026-184" className="flex-1 border border-gray-300 bg-gray-50 rounded-lg p-2.5 text-[12.5px] text-gray-700 outline-none" readOnly />
                <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-[12px] font-bold hover:bg-gray-50 transition-colors">Regenerate</button>
              </div>
              <p className="text-[10.5px] text-gray-500 mb-4">Generated from the ORA prefix and permanent book ID.</p>
              <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-lg p-3 flex gap-2 items-start">
                <InfoCircleOutlined className="text-[#2563EB] mt-0.5" />
                <div>
                  <p className="text-[11.5px] font-bold text-[#1E40AF]">DOI ready for registration</p>
                  <p className="text-[10.5px] text-[#1D4ED8] mt-0.5">Unique identifier checked. Crossref registration will be submitted when you publish.</p>
                </div>
              </div>
            </div>

            {/* Format Conversion */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-[15px] font-bold text-gray-900">Format conversion</h3>
                <span className="text-[10px] text-gray-500 font-medium">PDF / EPUB</span>
              </div>
              <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg mb-4 bg-gray-50/50">
                <div className="flex items-center gap-3">
                  <FileTextOutlined className="text-gray-400 text-lg" />
                  <p className="text-[12.5px] font-bold text-gray-900">civic-algorithm_final-proof_v3.pdf</p>
                </div>
                <button className="text-[#6B1D3A] text-[11.5px] font-bold hover:underline">Preview</button>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-5">
                <div className="border border-gray-200 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircleFilled className="text-[#059669]" />
                    <span className="text-[12px] font-bold text-gray-900">PDF</span>
                    <span className="ml-auto bg-[#ECFDF5] text-[#059669] px-2 py-0.5 rounded text-[9.5px] font-bold">Ready</span>
                  </div>
                  <p className="text-[10.5px] text-gray-500 mb-1">8.4 MB · 248 pages</p>
                  <div className="flex gap-2">
                    <span className="text-[9.5px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">Fonts embedded</span>
                    <span className="text-[9.5px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">Bookmarks verified</span>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircleFilled className="text-[#059669]" />
                    <span className="text-[12px] font-bold text-gray-900">EPUB</span>
                    <span className="ml-auto bg-[#ECFDF5] text-[#059669] px-2 py-0.5 rounded text-[9.5px] font-bold">Ready</span>
                  </div>
                  <p className="text-[10.5px] text-gray-500 mb-1">3.6 MB · Reflowable text</p>
                  <div className="flex gap-2">
                    <span className="text-[9.5px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">EPUBCheck passed</span>
                    <span className="text-[9.5px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">Accessible navigation</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <p className="text-[10.5px] text-gray-500">Converted today at 10:12 · Version 3</p>
                <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-[11.5px] font-bold hover:bg-gray-50 transition-colors flex items-center gap-2">
                  <ArrowRightOutlined className="text-[10px]" /> Convert formats
                </button>
              </div>
            </div>

            {/* Assign ISBN from Pool */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-[15px] font-bold text-gray-900">Assign ISBN from pool</h3>
                <span className="text-[10px] text-gray-500 font-medium">24 available identifiers</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-3">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">PDF ISBN *</label>
                  <div className="relative">
                    <select value={pdfIsbn} onChange={(e) => setPdfIsbn(e.target.value)} className="w-full border border-gray-300 rounded-lg p-2.5 text-[12.5px] text-gray-900 outline-none focus:border-[#6B1D3A] appearance-none bg-white">
                      <option value="978-1-4028-9462-8">978-1-4028-9462-8</option>
                    </select>
                    <DownOutlined className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-gray-400 pointer-events-none" />
                  </div>
                  <p className="text-[10.5px] text-gray-500 mt-1">Available · Validated · PDF</p>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">EPUB ISBN *</label>
                  <div className="relative">
                    <select value={epubIsbn} onChange={(e) => setEpubIsbn(e.target.value)} className="w-full border border-gray-300 rounded-lg p-2.5 text-[12.5px] text-gray-900 outline-none focus:border-[#6B1D3A] appearance-none bg-white">
                      <option value="978-1-4028-9463-5">978-1-4028-9463-5</option>
                    </select>
                    <DownOutlined className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-gray-400 pointer-events-none" />
                  </div>
                  <p className="text-[10.5px] text-gray-500 mt-1">Available · Validated · EPUB</p>
                </div>
              </div>
              <p className="text-[10.5px] text-gray-500">Selected identifiers will become Assigned when the ebook is published. Each format has a distinct ISBN.</p>
            </div>

          </div>

          {/* Right Column (Sidebar) */}
          <div className="space-y-6">
            
            {/* Publication Summary */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <h3 className="text-[15px] font-bold text-gray-900 mb-4">Publication summary</h3>
              <div className="space-y-3 text-[11.5px]">
                <div>
                  <p className="text-gray-500">Book</p>
                  <p className="font-bold text-gray-900">The Civic Algorithm</p>
                </div>
                <div>
                  <p className="text-gray-500">Author / Category</p>
                  <p className="font-bold text-gray-900">Naomi Brooks · Social Sciences</p>
                </div>
                <div>
                  <p className="text-gray-500">Proof</p>
                  <p className="font-bold text-gray-900">Version 3 · Author accepted</p>
                </div>
                <div>
                  <p className="text-gray-500">Release</p>
                  <p className="font-bold text-gray-900">05 Oct 2026 · No embargo</p>
                </div>
                <div>
                  <p className="text-gray-500">Access & license</p>
                  <p className="font-bold text-gray-900">Open access · CC BY 4.0</p>
                </div>
                <div>
                  <p className="text-gray-500">Formats</p>
                  <p className="font-bold text-gray-900">PDF + EPUB</p>
                </div>
              </div>
            </div>

            {/* Pre-publication Checklist */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <h3 className="text-[15px] font-bold text-gray-900 mb-4">Pre-publication checklist</h3>
              <div className="space-y-3 mb-4">
                {[
                  'Author proof acceptance verified',
                  'Book metadata complete',
                  'Access rights and license set',
                  'DOI generated and unique',
                  'PDF / EPUB quality checks passed',
                  '2 valid ISBNs selected'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircleFilled className="text-[#059669] text-[11px]" />
                    <span className="text-[11.5px] text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-[#ECFDF5] rounded-lg p-2.5 text-center">
                <p className="text-[11px] font-bold text-[#065F46]">6 of 6 checks complete</p>
              </div>
            </div>

            {/* Publish Ebook Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <h3 className="text-[15px] font-bold text-gray-900 mb-4">Publish ebook</h3>
              
              <div className="flex items-start gap-2 mb-5">
                <input 
                  type="checkbox" 
                  id="acknowledge"
                  checked={isAcknowledged}
                  onChange={(e) => setIsAcknowledged(e.target.checked)}
                  className="mt-0.5 w-4 h-4 accent-[#6B1D3A] cursor-pointer" 
                />
                <label htmlFor="acknowledge" className="text-[11.5px] text-gray-600 leading-snug cursor-pointer">
                  I confirm the final files and publication settings are accurate and approved for release.
                </label>
              </div>

              <div className="bg-[#FEF2F2] border border-[#FECACA] rounded-lg p-3 flex gap-2.5 items-start mb-5">
                <InfoCircleOutlined className="text-[#DC2626] mt-0.5" />
                <div>
                  <p className="text-[11px] font-bold text-[#991B1B]">Ready for immediate release</p>
                  <p className="text-[10.5px] text-[#B91C1C] mt-0.5 leading-snug">
                    Publishing will register the 2 selected ISBNs, notify the author and move the book to Completed.
                  </p>
                </div>
              </div>

              <button 
                onClick={handlePublish}
                disabled={!isAcknowledged}
                className={`w-full text-white px-5 py-3 rounded-lg text-[13px] font-bold shadow-sm transition-colors flex items-center justify-center gap-2 ${
                  isAcknowledged ? 'bg-[#6B1D3A] hover:bg-[#531324]' : 'bg-gray-400 cursor-not-allowed'
                }`}
              >
                Publish ebook
              </button>
              
              <p className="text-[10.5px] text-gray-400 text-center mt-3">
                The ebook will appear in the ORA Editions catalogue.
              </p>
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