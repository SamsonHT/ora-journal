import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EbookEditorialLayout from '../../../layouts/ebook/EbookEditorialLayout';
import { ArrowLeftOutlined, CheckOutlined, EditOutlined } from '@ant-design/icons';

export default function DecisionWorkspace() {
  const navigate = useNavigate();
  const [decision, setDecision] = useState('minor');

  return (
    <EbookEditorialLayout>
      <div className="max-w-[1300px] mx-auto pb-10">
        
        <button onClick={() => navigate('/ebook/editorial/reviews-list')} className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-500 hover:text-[#7A1849] mb-4">
          <ArrowLeftOutlined className="text-[10px]" /> Back to final decisions
        </button>

        {/* HEADER */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm mb-4 relative">
          <div className="absolute top-5 right-5">
            <span className="text-[10px] font-bold text-[#D97706]">Decision due today</span>
          </div>
          <p className="text-[10px] font-bold text-[#7A1849] tracking-wide mb-1 uppercase">EBK-2026-176 · FINAL DECISION</p>
          <h1 className="text-[22px] font-bold text-gray-900 leading-tight mb-1">
            Margins of Translation: Literature Across the Swahili Sea
          </h1>
          <p className="text-[12px] font-medium text-gray-600 mb-4">
            Mara Okafor · Comparative literature · 78,240 words
          </p>

          <div className="grid grid-cols-5 gap-4 border-t border-gray-100 pt-3">
            <div>
              <p className="text-[9px] text-gray-500 uppercase tracking-wider mb-0.5">Review round</p>
              <p className="text-[12px] font-bold text-gray-900">Round 1</p>
            </div>
            <div>
              <p className="text-[9px] text-gray-500 uppercase tracking-wider mb-0.5">Reviews received</p>
              <p className="text-[12px] font-bold text-gray-900">2 of 2</p>
            </div>
            <div>
              <p className="text-[9px] text-gray-500 uppercase tracking-wider mb-0.5">Average recommendation</p>
              <p className="text-[12px] font-bold text-gray-900">Minor revisions</p>
            </div>
            <div>
              <p className="text-[9px] text-gray-500 uppercase tracking-wider mb-0.5">Review completed</p>
              <p className="text-[12px] font-bold text-gray-900">05 Oct 2026</p>
            </div>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 space-y-4">
            
            {/* RECOMMENDATIONS */}
            <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-[13px] font-bold text-gray-900">Reviewer recommendations</h2>
                <span className="text-[10px] text-gray-400">2 confidential reports</span>
              </div>

              <div className="border border-gray-200 rounded-lg p-4 mb-3">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-[12px] font-bold text-gray-900">Reviewer A · Environmental literature</p>
                  <span className="text-[10px] font-bold text-[#52C41A]">Accept with minor revisions</span>
                </div>
                <p className="text-[11px] text-gray-600 mb-3 leading-relaxed">
                  A compelling and original study with a persuasive multilingual archive. The central concept of 'littoral translation' should be signposted earlier, and the conclusion could state the comparative contribution more directly.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="bg-[#F6FFED] rounded p-2">
                    <p className="text-[9px] font-bold text-[#52C41A] uppercase mb-1">Strengths</p>
                    <p className="text-[10px] text-gray-600">Original archive; lucid prose; meaningful intervention across African and Indian Ocean literary studies.</p>
                  </div>
                  <div className="bg-[#FFF2E8] rounded p-2">
                    <p className="text-[9px] font-bold text-[#FA541C] uppercase mb-1">Requested changes</p>
                    <p className="text-[10px] text-gray-600">Chapter 2 needs clearer chronology; translation choices should be standardized; permissions for three poem extracts remain outstanding.</p>
                  </div>
                </div>
                <button className="text-[10px] font-bold text-[#7A1849] hover:underline flex items-center gap-1">Read full confidential report →</button>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-[12px] font-bold text-gray-900">Reviewer B · Translation studies</p>
                  <span className="text-[10px] font-bold text-[#D97706]">Minor revisions</span>
                </div>
                <p className="text-[11px] text-gray-600 mb-3 leading-relaxed">
                  The manuscript is publishable and will be widely read. Its method is strongest when textual comparison remains close; two sections drift into contextual summary and would benefit from condensation.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="bg-[#F6FFED] rounded p-2">
                    <p className="text-[9px] font-bold text-[#52C41A] uppercase mb-1">Strengths</p>
                    <p className="text-[10px] text-gray-600">Excellent comparative readings; strong pedagogy potential; careful treatment of multilingual sources.</p>
                  </div>
                  <div className="bg-[#FFF2E8] rounded p-2">
                    <p className="text-[9px] font-bold text-[#FA541C] uppercase mb-1">Requested changes</p>
                    <p className="text-[10px] text-gray-600">Clarify selection criteria for the corpus; shorten chapter 5 by 10-15%; add recent work on untranslatability.</p>
                  </div>
                </div>
                <button className="text-[10px] font-bold text-[#7A1849] hover:underline flex items-center gap-1">Read full confidential report →</button>
              </div>
            </div>

            {/* DECISION LETTER */}
            <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-[13px] font-bold text-gray-900">Decision letter to author</h2>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-gray-400">Visible to author</span>
                  <button className="text-[10px] font-bold text-[#7A1849] flex items-center gap-1 hover:underline"><EditOutlined /> Insert template</button>
                </div>
              </div>
              
              <div className="mb-3">
                <p className="text-[10px] text-gray-500 mb-1">Subject</p>
                <input type="text" className="w-full border border-gray-200 rounded px-2.5 py-1.5 text-[11px] font-medium text-gray-800 outline-none focus:border-[#7A1849]" defaultValue="Decision on EBK-2026-176 — Margins of Translation" />
              </div>

              <div className="border border-gray-200 rounded p-3 text-[11px] text-gray-700 leading-relaxed bg-[#FAFAFA]">
                <p>Dear Mara Okafor,</p>
                <br/>
                <p>Thank you for submitting Margins of Translation: Literature Across the Swahili Sea to ORA Editions. We have now received two specialist reports and completed our editorial assessment.</p>
                <br/>
                <p>We are pleased to invite a minor revision. Both reviewers recognize the manuscript's originality, archival depth, and significant contribution to comparative literature. Please address the chapter chronology, corpus selection, translation consistency, and permissions points detailed in the attached reports.</p>
                <br/>
                <p>Please return your revised manuscript and response document by 16 November 2026. We expect to assess the revision editorially without a further full review round.</p>
                <br/>
                <p>With best wishes,</p>
                <p>Dr. Eleanor Price · Senior Acquisitions Editor</p>
              </div>
              <p className="text-[9px] text-gray-400 mt-2">228 words · Autosaved just now</p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-4">
            
            {/* EDITORIAL ASSESSMENT */}
            <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-[13px] font-bold text-gray-900">Editorial assessment</h2>
                <span className="text-[10px] text-gray-400">Internal</span>
              </div>
              <div className="space-y-2 mb-3">
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 mb-1">Scholarly contribution</label>
                  <input type="text" className="w-full border border-gray-200 rounded px-2 py-1 text-[11px] text-gray-800 outline-none" defaultValue="Strong" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 mb-1">Review convergence</label>
                  <input type="text" className="w-full border border-gray-200 rounded px-2 py-1 text-[11px] text-gray-800 outline-none" defaultValue="High" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 mb-1">Market and list fit</label>
                  <input type="text" className="w-full border border-gray-200 rounded px-2 py-1 text-[11px] text-gray-800 outline-none" defaultValue="Strong series fit" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-500 mb-1">Editorial assessment</label>
                <textarea className="w-full border border-gray-200 rounded p-2 text-[10px] text-gray-700 outline-none min-h-[60px] resize-none focus:border-[#7A1849]" defaultValue="The reports are aligned and the requested work is bounded. Recommend minor revisions with editorial re-check; no second external round needed."></textarea>
              </div>
            </div>

            {/* FINAL DECISION */}
            <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
              <h2 className="text-[13px] font-bold text-gray-900 mb-3">Final decision</h2>
              
              <div className="space-y-1.5 mb-4">
                <label className={`flex flex-col p-2 rounded-md border cursor-pointer transition-colors ${decision === 'accept' ? 'border-[#7A1849] bg-[#FCF7F9]' : 'border-gray-200 hover:bg-gray-50'}`}>
                  <div className="flex items-center gap-2">
                    <input type="radio" name="decision" checked={decision === 'accept'} onChange={() => setDecision('accept')} className="accent-[#7A1849] w-3.5 h-3.5" />
                    <span className="text-[11px] font-bold text-gray-900">Accept</span>
                  </div>
                  <span className="text-[9px] text-gray-500 ml-5.5 mt-0.5">Proceed to production</span>
                </label>
                
                <label className={`flex flex-col p-2 rounded-md border cursor-pointer transition-colors ${decision === 'minor' ? 'border-[#7A1849] bg-[#FCF7F9]' : 'border-gray-200 hover:bg-gray-50'}`}>
                  <div className="flex items-center gap-2">
                    <input type="radio" name="decision" checked={decision === 'minor'} onChange={() => setDecision('minor')} className="accent-[#7A1849] w-3.5 h-3.5" />
                    <span className="text-[11px] font-bold text-gray-900">Minor revisions</span>
                  </div>
                  <span className="text-[9px] text-[#7A1849] ml-5.5 mt-0.5 font-medium">Editorial re-check</span>
                </label>

                <label className={`flex flex-col p-2 rounded-md border cursor-pointer transition-colors ${decision === 'major' ? 'border-[#7A1849] bg-[#FCF7F9]' : 'border-gray-200 hover:bg-gray-50'}`}>
                  <div className="flex items-center gap-2">
                    <input type="radio" name="decision" checked={decision === 'major'} onChange={() => setDecision('major')} className="accent-[#7A1849] w-3.5 h-3.5" />
                    <span className="text-[11px] font-bold text-gray-900">Major revisions</span>
                  </div>
                  <span className="text-[9px] text-gray-500 ml-5.5 mt-0.5">New review round likely</span>
                </label>

                <label className={`flex flex-col p-2 rounded-md border cursor-pointer transition-colors ${decision === 'decline' ? 'border-[#7A1849] bg-[#FCF7F9]' : 'border-gray-200 hover:bg-gray-50'}`}>
                  <div className="flex items-center gap-2">
                    <input type="radio" name="decision" checked={decision === 'decline'} onChange={() => setDecision('decline')} className="accent-[#7A1849] w-3.5 h-3.5" />
                    <span className="text-[11px] font-bold text-gray-900">Decline</span>
                  </div>
                  <span className="text-[9px] text-gray-500 ml-5.5 mt-0.5">Close submission</span>
                </label>
              </div>

              <div className="mb-4">
                <label className="block text-[10px] font-bold text-gray-500 mb-1">Revision due date</label>
                <input type="text" className="w-full border border-gray-200 rounded px-2 py-1.5 text-[11px] text-gray-800 outline-none" defaultValue="16 November 2026" />
              </div>
            </div>

            {/* INTERNAL NOTES */}
            <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-[13px] font-bold text-gray-900">Internal notes</h2>
                <span className="text-[9px] text-gray-400">Not shared</span>
              </div>
              <textarea className="w-full border border-gray-200 rounded p-2 text-[10px] text-gray-700 outline-none min-h-[80px] resize-none focus:border-[#7A1849] mb-3" defaultValue="Strong acquisition candidate for the Translation & World Literature list. Confirm poem permissions before acceptance."></textarea>
              
              <div className="flex items-center gap-1.5 mb-3 text-[9px] text-[#52C41A] font-medium">
                <CheckOutlined /> Decision letter complete, due date set, and confidential notes recorded.
              </div>

              <button className="w-full py-2 bg-[#7A1849] hover:bg-[#531324] text-white rounded-md text-[11px] font-bold transition-colors flex items-center justify-center gap-2 mb-2">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg> Submit final decision
              </button>
              <button className="w-full py-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-md text-[11px] font-bold transition-colors mb-2">Save as draft</button>
              
              <p className="text-[8px] text-gray-400 text-center leading-tight">Submitting immediately emails the author and records the decision in the audit log.</p>
            </div>

          </div>
        </div>
      </div>
    </EbookEditorialLayout>
  );
}