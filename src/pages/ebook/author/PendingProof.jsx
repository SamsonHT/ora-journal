import React from 'react';
import EbookAuthorLayout from '../../../layouts/ebook/EbookAuthorLayout';

export default function PendingProof() {
  return (
    <EbookAuthorLayout>
      <div className="max-w-[1000px] mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Pending Proofs</h1>
          <p className="text-[13px] text-gray-500 mt-1">Review and approve the final proof before publication.</p>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6 flex items-start gap-3">
           <span className="text-blue-600 mt-0.5">ℹ️</span>
           <p className="text-[12px] text-blue-800 font-medium">
             <strong>What to check in your proof?</strong> Review the typeset PDF for typos, tables, and figures. Look for errors in layout and formatting.
           </p>
        </div>

        <div className="space-y-4">
          {[
            { title: 'Clinical AI Methods and Applications', version: 'Version 1.2', date: 'Jul 09, 2026', deadline: 'Jul 12, 2026', type: 'Revision' },
            { title: 'Nanomaterials for Clean Water', version: 'Version 1.0', date: 'Jul 05, 2026', deadline: 'Jul 10, 2026', type: 'First Proof' },
          ].map((proof, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#7A1849] bg-[#FCF7F9] px-2 py-0.5 rounded">{proof.type}</span>
                  <span className="text-[11px] text-gray-400">{proof.version}</span>
                </div>
                <h3 className="text-[16px] font-bold text-gray-900 mb-1">{proof.title}</h3>
                <p className="text-[12px] text-gray-500">Submitted: {proof.date} · Deadline: <span className="text-red-500 font-bold">{proof.deadline}</span></p>
              </div>
              <div className="flex gap-2 shrink-0">
                <button className="px-4 py-2 border border-gray-200 text-gray-700 rounded-lg text-[12px] font-bold hover:bg-gray-50">Download PDF</button>
                <button className="px-4 py-2 bg-[#7A1849] text-white rounded-lg text-[12px] font-bold hover:bg-[#531324]">Review Proof</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </EbookAuthorLayout>
  );
}