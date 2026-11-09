import React from 'react';
import DigitalContentManagerLayout from '../../../layouts/ebook/DigitalContentManagerLayout';
import { CheckCircleFilled } from '@ant-design/icons';

export default function FinalProofing() {
  return (
    <DigitalContentManagerLayout>
      <div className="max-w-[1000px] mx-auto space-y-6">
        <div>
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Workspace / Typeset / Final Proofing</p>
          <h1 className="text-[26px] font-bold text-gray-900">Final proofing</h1>
          <p className="text-[13px] text-gray-500 mt-1">Review final pages before publishing.</p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 bg-white border border-gray-200 rounded-xl shadow-sm p-6">
            <h3 className="text-[15px] font-bold text-gray-900 mb-4 border-b pb-3">Clinical AI: Methods and Applications</h3>
            
            <div className="flex justify-between items-center mb-6">
              <div>
                <p className="text-[12px] text-gray-500 mb-1">Version</p>
                <p className="text-[13px] font-bold text-gray-900">Final v2.0</p>
              </div>
              <div>
                <p className="text-[12px] text-gray-500 mb-1">Pages</p>
                <p className="text-[13px] font-bold text-gray-900">248</p>
              </div>
              <div>
                <p className="text-[12px] text-gray-500 mb-1">Generated</p>
                <p className="text-[13px] font-bold text-gray-900">Oct 12, 2026</p>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-4 flex items-start gap-3 mb-6">
              <CheckCircleFilled className="text-emerald-600 mt-0.5" />
              <p className="text-[12px] text-emerald-800 font-medium">
                <strong>Automated checks passed.</strong> No missing fonts, broken links, or invalid metadata detected.
              </p>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 bg-white border border-gray-300 text-gray-700 py-2.5 rounded-lg text-[12px] font-bold hover:bg-gray-50">Download PDF</button>
              <button className="flex-1 bg-[#7A1849] text-white py-2.5 rounded-lg text-[12px] font-bold hover:bg-[#531324] shadow-sm">Approve & Proceed</button>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
            <h3 className="text-[14px] font-bold text-gray-900 mb-4">Checklist</h3>
            <div className="space-y-3">
              {['Cover design approved', 'Copyright page correct', 'Table of contents linked', 'Author bio included', 'ISBN assigned correctly'].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-emerald-100 text-emerald-600 flex items-center justify-center"><CheckCircleFilled className="text-[10px]" /></div>
                  <span className="text-[12px] text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DigitalContentManagerLayout>
  );
}