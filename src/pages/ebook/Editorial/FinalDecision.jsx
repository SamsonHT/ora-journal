import React from 'react';
import EbookEditorialLayout from '../../../layouts/ebook/EbookEditorialLayout';

export default function FinalDecision() {
  return (
    <EbookEditorialLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-[10px] font-bold uppercase text-gray-400">Final Decision Workspace</span>
            <h1 className="text-xl font-serif font-bold text-gray-900 mt-1">Margins of Tomorrow: Literature Across the South Sea</h1>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 border border-red-200 text-red-600 rounded-lg text-[13px] font-bold hover:bg-red-50">Reject</button>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-[13px] font-bold hover:bg-gray-50">Major Revision</button>
            <button className="px-4 py-2 bg-green-600 rounded-lg text-[13px] font-bold text-white hover:bg-green-700">Accept Book</button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-6">
            <div>
              <h2 className="font-bold text-gray-900 text-sm mb-2">Reviewer 1</h2>
              <p className="text-[13px] text-gray-600 bg-gray-50 p-3 rounded">Recommendation: <strong className="text-green-600">Accept</strong>. The manuscript provides a compelling analysis...</p>
            </div>
            <div>
              <h2 className="font-bold text-gray-900 text-sm mb-2">Reviewer 2</h2>
              <p className="text-[13px] text-gray-600 bg-gray-50 p-3 rounded">Recommendation: <strong className="text-orange-500">Minor Revisions</strong>. Needs clearer citations in chapter 3...</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="font-bold text-gray-900 text-sm mb-4">Internal Notes</h2>
            <textarea className="w-full h-32 border border-gray-300 rounded-lg p-3 text-[13px] outline-none focus:border-[#7A1849]" placeholder="Add decision rationale..."></textarea>
          </div>
        </div>
      </div>
    </EbookEditorialLayout>
  );
}