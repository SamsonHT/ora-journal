// src/pages/ebook/content-manager/CreateIsbn.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DigitalContentManagerLayout from '../../../layouts/ebook/DigitalContentManagerLayout';
import { 
  CheckCircleFilled, 
  InfoCircleOutlined, 
  DownOutlined,
  UploadOutlined,
  WarningOutlined
} from '@ant-design/icons';

export default function CreateIsbn() {
  const navigate = useNavigate();
  const [isVerified, setIsVerified] = useState(false);
  const [isbn, setIsbn] = useState('978-99944-12-42-0');
  const [format, setFormat] = useState('Unassigned / Any Format');
  const [batchRef, setBatchRef] = useState('EALS-2026-Q4');
  const [validationMessage, setValidationMessage] = useState('');
  const [isValid, setIsValid] = useState(null);

  const handleValidate = () => {
    setIsVerified(true);
    const cleanIsbn = isbn.replace(/[-\s]/g, '');
    
    if (cleanIsbn.length !== 13 || !/^\d+$/.test(cleanIsbn)) {
      setIsValid(false);
      setValidationMessage('Invalid length or format. ISBN-13 must be exactly 13 digits.');
      return;
    }

    let sum = 0;
    for (let i = 0; i < 12; i++) {
      sum += parseInt(cleanIsbn[i]) * (i % 2 === 0 ? 1 : 3);
    }
    const checkDigit = (10 - (sum % 10)) % 10;
    
    if (checkDigit !== parseInt(cleanIsbn[12])) {
      setIsValid(false);
      setValidationMessage('Invalid checksum. Please verify the 13-digit number.');
      return;
    }

    const isEthiopian = cleanIsbn.startsWith('97899944') || cleanIsbn.startsWith('97899990');
    
    if (isEthiopian) {
      setIsValid(true);
      setValidationMessage('Valid Ethiopian ISBN (978-99944 or 978-99990 prefix). Check digit correct.');
    } else {
      setIsValid(true);
      setValidationMessage('Valid ISBN checksum. Note: This prefix is not registered under Ethiopian (EALS) groups.');
    }
  };

  return (
    <DigitalContentManagerLayout>
      <div className="w-full max-w-[1400px] mx-auto pb-8 pt-2">
        
        <div className="flex justify-between items-start mb-5">
          <div>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">Workspace / ISBN Management</p>
            <h1 className="text-[28px] font-bold text-[#1F2937] tracking-tight mb-1">Register ISBNs</h1>
            <p className="text-[13px] text-gray-500">Register agency-issued ISBNs from EALS / Wemezeker into the pool before assignment.</p>
          </div>
          <button 
            onClick={() => navigate('/content-manager/isbn')}
            className="bg-white text-gray-700 border border-gray-300 px-5 py-2 rounded-lg text-[12px] font-bold shadow-sm hover:bg-gray-50 transition-colors"
          >
            Back to ISBN pool
          </button>
        </div>

        <div className="flex items-center gap-6 border-b border-gray-200 mb-6">
          <span className="pb-3 text-[13px] font-bold text-[#6B1D3A] border-b-2 border-[#6B1D3A]">Register Single ISBN</span>
          <span className="pb-3 text-[13px] font-bold text-gray-500 border-b-2 border-transparent cursor-pointer hover:text-gray-800 flex items-center gap-2">
            <UploadOutlined /> Bulk Import CSV/Excel
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-[15px] font-bold text-gray-900">ISBN pool details</h3>
                <span className="text-[10px] text-gray-400 font-medium">Required fields marked *</span>
              </div>

              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 mb-1.5">ISBN-13 *</label>
                    <input 
                      type="text" 
                      value={isbn}
                      onChange={(e) => setIsbn(e.target.value)}
                      placeholder="978-99944-12-34-5"
                      className="w-full border border-gray-300 rounded-lg p-2.5 text-[13px] text-gray-900 outline-none focus:border-[#6B1D3A] focus:ring-2 focus:ring-[#6B1D3A]/10" 
                    />
                    <p className="text-[10px] text-gray-500 mt-1">Enter the 13-digit ISBN allocated by EALS / Wemezeker.</p>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Publisher Name *</label>
                    <input 
                      type="text" 
                      defaultValue="ORA eBook"
                      className="w-full border border-gray-300 rounded-lg p-2.5 text-[13px] text-gray-900 outline-none focus:border-[#6B1D3A] bg-gray-50" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Target Digital Format *</label>
                    <div className="relative">
                      <select 
                        value={format}
                        onChange={(e) => setFormat(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg p-2.5 text-[13px] text-gray-900 outline-none focus:border-[#6B1D3A] bg-white appearance-none"
                      >
                        <option>Unassigned / Any Format</option>
                        <option>EPUB</option>
                        <option>PDF</option>
                        <option>Audiobook</option>
                      </select>
                      <DownOutlined className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 mb-1.5">EALS Allocation Batch Reference</label>
                    <input 
                      type="text" 
                      value={batchRef}
                      onChange={(e) => setBatchRef(e.target.value)}
                      placeholder="e.g., EALS-2026-Q4"
                      className="w-full border border-gray-300 rounded-lg p-2.5 text-[13px] text-gray-900 outline-none focus:border-[#6B1D3A]" 
                    />
                    <p className="text-[10px] text-gray-500 mt-1">
                      <strong>Internal label only.</strong> Use a format like <code className="bg-gray-100 px-1 rounded">EALS-YYYY-QX</code> to track which block of numbers came from which agency allocation. Not issued by EALS.
                    </p>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Internal Editorial Note</label>
                  <textarea 
                    rows="2"
                    placeholder="Optional context for editorial or production teams."
                    className="w-full border border-gray-300 rounded-lg p-2.5 text-[13px] text-gray-900 outline-none focus:border-[#6B1D3A] resize-none" 
                  ></textarea>
                </div>

                <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                  <button 
                    type="button" 
                    onClick={handleValidate}
                    className="text-[12px] font-bold text-[#6B1D3A] bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Validate before adding
                  </button>
                  <button 
                    type="button" 
                    onClick={handleValidate}
                    className="text-[12px] font-bold text-[#6B1D3A] flex items-center gap-1 hover:underline"
                  >
                    <CheckCircleFilled /> Validate ISBN
                  </button>
                </div>

                {isVerified && (
                  <div className={`rounded-lg p-3 flex gap-2.5 items-start border ${
                    isValid ? 'bg-[#ECFDF5] border-[#A7F3D0]' : 'bg-[#FEF2F2] border-[#FECACA]'
                  }`}>
                    {isValid ? <CheckCircleFilled className="text-[#059669] mt-0.5" /> : <WarningOutlined className="text-[#DC2626] mt-0.5" />}
                    <div>
                      <p className={`text-[11.5px] font-bold ${isValid ? 'text-[#065F46]' : 'text-[#991B1B]'}`}>
                        {isValid ? 'ISBN validated successfully' : 'Validation failed'}
                      </p>
                      <p className={`text-[10.5px] mt-0.5 ${isValid ? 'text-[#047857]' : 'text-[#B91C1C]'}`}>
                        {validationMessage}
                      </p>
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Live Preview */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-[15px] font-bold text-gray-900 mb-4">Live preview</h3>
              <div className="grid grid-cols-3 gap-4 text-[12px] mb-4">
                <div>
                  <p className="text-gray-500 mb-0.5">ISBN-13</p>
                  <p className="font-bold text-gray-900 font-mono">{isbn || '—'}</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-0.5">Format</p>
                  <p className="font-bold text-gray-900">{format}</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-0.5">Status</p>
                  <p className="font-bold text-[#059669]">Available · Unassigned</p>
                </div>
              </div>
              <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                <button 
                  onClick={() => navigate('/content-manager/isbn')}
                  className="px-5 py-2 rounded-lg text-[12px] font-bold text-gray-600 bg-white border border-gray-300 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button 
                  onClick={() => navigate('/content-manager/isbn')}
                  className="px-5 py-2 rounded-lg text-[12px] font-bold text-white bg-[#6B1D3A] hover:bg-[#531324]"
                >
                  Register to Pool
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar Guidance */}
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <h3 className="text-[15px] font-bold text-gray-900 mb-4">Ethiopian EALS guidance</h3>
              <div className="space-y-4 text-[11.5px] text-gray-600 leading-relaxed">
                <div>
                  <p className="font-bold text-gray-900 mb-1">Issuing Authority</p>
                  <p>ISBNs must be officially allocated by the <strong>Ethiopian Archive and Library Service (Wemezeker)</strong> under Ethiopia's <code className="bg-gray-100 px-1 rounded text-[10px]">978-99944</code> or <code className="bg-gray-100 px-1 rounded text-[10px]">978-99990</code> publisher prefixes.</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">How to Obtain Numbers</p>
                  <p>Registered publishers request an ISBN block from EALS (Addis Ababa) by submitting their business license, TIN, and publisher profile before registering them here.</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Format Rules</p>
                  <p>Assign one ISBN per digital format. EPUB and PDF editions must each have their own unique number.</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Batch Reference</p>
                  <p>Use an internal code like <code className="bg-gray-100 px-1 rounded text-[10px]">EALS-2026-Q4</code> to track which block an ISBN came from. This is for your own records, not from EALS.</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">No Pre-Assignment</p>
                  <p>Identifiers remain <strong>Available</strong> in the pool until Final Publishing, where they are irreversibly locked after editorial and author approval.</p>
                </div>
              </div>
            </div>
            <div className="bg-[#FEF2F2] border border-[#FECACA] rounded-xl p-4 flex gap-2.5 items-start">
              <InfoCircleOutlined className="text-[#DC2626] mt-0.5" />
              <div>
                <p className="text-[11px] font-bold text-[#991B1B]">Never assign before approval</p>
                <p className="text-[10.5px] text-[#B91C1C] mt-0.5 leading-snug">
                  ISBNs are only consumed after both Editorial Screening and Author Proof Approval.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center text-[10px] text-gray-400 pt-6 mt-8 border-t border-gray-200">
          <span>ORA Academic - eBook operations</span>
          <span>All dates in UTC+3</span>
        </div>
      </div>
    </DigitalContentManagerLayout>
  );
}