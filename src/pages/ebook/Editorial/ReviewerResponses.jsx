import React from 'react';
import { useNavigate } from 'react-router-dom';
import EbookEditorialLayout from '../../../layouts/ebook/EbookEditorialLayout';
import { ArrowLeftOutlined, CheckCircleFilled } from '@ant-design/icons';

const REVIEWERS = [
  { id: 1, name: 'Dr. Anika Rao', uni: 'University of Edinburgh · Colonial archives · Environmental history', status: 'Accepted', statusColor: 'text-[#52C41A]', invite: 'Sent 29 Sep', due: '20 Oct 2026', progress: 'Reading · 35%', progressColor: 'text-gray-900', conflicts: 'None declared', note: 'Will focus on archival method and chapter 4 evidence.' },
  { id: 2, name: 'Prof. Julian Mercer', uni: 'King’s College London · Digital humanities · Historical GIS', status: 'Accepted', statusColor: 'text-[#52C41A]', invite: 'Sent 29 Sep', due: '20 Oct 2026', progress: 'Not started', progressColor: 'text-gray-900', conflicts: 'None declared', note: 'Asked whether map files can be supplied at print resolution.' },
  { id: 3, name: 'Dr. Nandi Okafor', uni: 'University of Lagos · Indian Ocean history · Oral history', status: 'Awaiting response', statusColor: 'text-[#D97706]', invite: 'Sent 01 Oct', due: '22 Oct 2026', progress: 'Invitation open', progressColor: 'text-gray-500', conflicts: 'Pending declaration', note: 'Reminder scheduled for 07 October.' },
  { id: 4, name: 'Prof. Mark Ellison', uni: 'University of Toronto · History of science', status: 'Declined', statusColor: 'text-[#F5222D]', invite: 'Sent 29 Sep', due: '—', progress: 'Closed', progressColor: 'text-gray-500', conflicts: 'Recent co-authorship', note: 'Declared a collaboration with the author within three years.' },
];

export default function ReviewerResponses() {
  const navigate = useNavigate();

  return (
    <EbookEditorialLayout>
      <div className="max-w-[1250px] mx-auto pb-10">
        
        <button onClick={() => navigate('/ebook/editorial/reviewers')} className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-500 hover:text-[#7A1849] mb-4">
          <ArrowLeftOutlined className="text-[10px]" /> Back to screened books
        </button>

        {/* HEADER CARD */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm mb-4">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-[10px] font-bold text-[#7A1849] tracking-wide mb-1 uppercase">EBK-2026-178 · REVIEWER RESPONSES</p>
              <h1 className="text-[22px] font-bold text-gray-900 leading-tight mb-1">
                Sovereign Ecologies: Land, Law, and Conservation after Empire
              </h1>
              <p className="text-[12px] font-medium text-gray-600">
                Dr. Mateo Silva · Environment & political ecology
              </p>
            </div>
            <div className="text-right">
              <p className="text-[11px] font-bold text-[#2F54EB]">2 accepted · 1 pending</p>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-4 border-t border-gray-100 pt-3">
            <div>
              <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Invited</p>
              <p className="text-[18px] font-bold text-gray-900">4</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Accepted</p>
              <p className="text-[18px] font-bold text-gray-900">2</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Awaiting response</p>
              <p className="text-[18px] font-bold text-gray-900">1</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Declined</p>
              <p className="text-[18px] font-bold text-gray-900">1</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Reviews due</p>
              <p className="text-[18px] font-bold text-gray-900">20 Oct</p>
            </div>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          
          {/* LEFT COLUMN - REVIEWERS */}
          <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-5 shadow-sm space-y-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-[14px] font-bold text-gray-900">Invited reviewers</h2>
              <span className="text-[10px] text-gray-400">Double-anonymous review</span>
            </div>

            {REVIEWERS.map(rev => (
              <div key={rev.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="text-[13px] font-bold text-gray-900">{rev.name}</p>
                    <p className="text-[11px] text-gray-500">{rev.uni}</p>
                  </div>
                  <span className={`text-[10px] font-bold ${rev.statusColor}`}>{rev.status}</span>
                </div>

                <div className="grid grid-cols-4 gap-2 mb-3 bg-gray-50 p-2.5 rounded">
                  <div>
                    <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-0.5">Invitation</p>
                    <p className="text-[11px] font-medium text-gray-900">{rev.invite}</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-0.5">Due date</p>
                    <p className="text-[11px] font-medium text-gray-900">{rev.due}</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-0.5">Review progress</p>
                    <p className={`text-[11px] font-medium ${rev.progressColor}`}>{rev.progress}</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-0.5">Conflicts</p>
                    <p className={`text-[11px] font-medium ${rev.conflicts === 'None declared' ? 'text-gray-900' : 'text-[#F5222D]'}`}>{rev.conflicts}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3.5 h-3.5 border border-gray-300 rounded-sm bg-white"></div>
                  <span className="text-[11px] text-gray-600">{rev.note}</span>
                </div>

                <div className="flex gap-2">
                  {rev.status === 'Awaiting response' && (
                    <button className="px-3 py-1.5 bg-white border border-gray-300 text-gray-700 rounded text-[10px] font-bold hover:bg-gray-50 transition-colors">Send reminder</button>
                  )}
                  {rev.status === 'Declined' && (
                    <button onClick={() => navigate('/ebook/editorial/reviewers/assign')} className="px-3 py-1.5 bg-[#7A1849] text-white rounded text-[10px] font-bold hover:bg-[#531324] transition-colors">Find replacement</button>
                  )}
                  <button className="px-3 py-1.5 bg-white border border-gray-300 text-gray-700 rounded text-[10px] font-bold hover:bg-gray-50 transition-colors">View profile</button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
              <h2 className="text-[14px] font-bold text-gray-900 mb-3">Assignment health</h2>
              <div className="bg-[#FFF8E6] border border-[#FDE68A] rounded-md p-3 text-[11px] text-[#D97706] font-medium mb-4">
                One additional acceptance recommended to protect the review schedule.
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between border-b border-gray-100 pb-1.5">
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Required reviewers</span>
                  <span className="text-[11px] font-bold text-gray-900">2</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-1.5">
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Accepted reviewers</span>
                  <span className="text-[11px] font-bold text-gray-900">2</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-1.5">
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Target return date</span>
                  <span className="text-[11px] font-bold text-gray-900">20 October 2026</span>
                </div>
              </div>

              <button onClick={() => navigate('/ebook/editorial/reviewers/assign')} className="w-full py-2 bg-[#7A1849] hover:bg-[#531324] text-white rounded-md text-[11px] font-bold transition-colors flex items-center justify-center gap-2">
                Find another reviewer
              </button>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-[14px] font-bold text-gray-900">Editorial notes</h2>
                <span className="text-[10px] font-bold text-gray-400">Internal</span>
              </div>
              <textarea className="w-full bg-white border border-gray-200 rounded-md p-2.5 text-[11px] outline-none focus:border-[#7A1849] min-h-[80px] resize-y mb-2.5 text-gray-700 leading-relaxed" defaultValue="Prioritize a scholar based in the Global South for the replacement invitation."></textarea>
              <button className="px-3 py-1 border border-gray-300 rounded text-[10px] font-bold text-gray-700 hover:bg-gray-50 transition-colors">Save note</button>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
              <h2 className="text-[14px] font-bold text-gray-900 mb-3">Communication log</h2>
              <div className="space-y-2 text-[11px]">
                <div>
                  <p className="font-bold text-gray-900">Invitation batch sent</p>
                  <p className="text-gray-500 text-[10px]">29 Sep · 14:08</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Follow-up to N. Okafor</p>
                  <p className="text-gray-500 text-[10px]">03 Oct · 09:12</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Files shared with J. Mercer</p>
                  <p className="text-gray-500 text-[10px]">04 Oct · 11:30</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </EbookEditorialLayout>
  );
}