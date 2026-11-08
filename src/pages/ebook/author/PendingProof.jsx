import React from 'react';
import EbookAuthorLayout from '../../../layouts/ebook/EbookAuthorLayout';
import { Link } from 'react-router-dom';

export default function PendingProof() {
  const proofs = [
    {
      id: '1',
      title: 'Clinical AI: Methods and Applications',
      subject: 'Medical & Health Sciences',
      manuscriptId: 'EB-2026-108',
      pages: '248 pages',
      version: 'Version v2.0',
      type: 'Immediate Review',
      typeColor: 'bg-[#FDF2F8] text-[#9D174D]',
      deadline: 'Sep 27, 2026 (2 days left)',
      isUrgent: true,
      borderClass: 'border-[#7A1849]',
    },
    {
      id: '2',
      title: 'Nanomaterials for Clean Water',
      subject: 'Materials Science',
      manuscriptId: 'EB-2026-082',
      pages: '216 pages',
      version: 'Version v1.1',
      type: 'Standard Review',
      typeColor: 'bg-[#EFF6FF] text-[#1D4ED8]',
      deadline: 'Oct 05, 2026 (10 days left)',
      isUrgent: false,
      borderClass: 'border-gray-200',
    },
    {
      id: '3',
      title: 'Rural Development and Public Policy',
      subject: 'Social Sciences',
      manuscriptId: 'EB-2026-063',
      pages: '284 pages',
      version: 'Version v3.0 – Final',
      type: 'Standard Review',
      typeColor: 'bg-[#EFF6FF] text-[#1D4ED8]',
      deadline: 'Oct 12, 2026 (17 days left)',
      isUrgent: false,
      borderClass: 'border-gray-200',
    },
  ];

  return (
    <EbookAuthorLayout>
      <div className="max-w-[1300px] mx-auto font-sans pb-12">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <p className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wider mb-1">
              Workspace / Pending Proof
            </p>
            <h1 className="text-[26px] font-bold text-[#111827] leading-tight mb-1">
              Pending Proofs
            </h1>
            <p className="text-[13px] text-[#6B7280]">
              Review and approve your typeset books before online publication.
            </p>
          </div>
          
          <div className="flex items-center gap-3 self-start md:self-end">
            <div className="border border-gray-200 rounded-lg px-4 py-2 text-[12px] font-semibold text-gray-700 bg-white cursor-pointer hover:bg-gray-50 transition-colors shadow-sm">
              Sep 1 – Sep 25, 2026
            </div>
            <Link 
              to="/ebook/author/submit" 
              className="bg-[#7A1849] text-white px-5 py-2 rounded-lg text-[12px] font-bold hover:bg-[#531324] transition-colors shadow-sm"
            >
              New Submission
            </Link>
          </div>
        </div>

        {/* Proof Cards List */}
        <div className="space-y-4">
          {proofs.map((proof) => (
            <div 
              key={proof.id} 
              className={`bg-white rounded-xl border ${proof.borderClass} p-6 shadow-sm flex flex-col gap-4 transition-all hover:shadow-md`}
            >
              {/* Card Top Row: Badges & Deadline */}
              <div className="flex justify-between items-start w-full">
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold tracking-wide uppercase ${proof.typeColor}`}>
                    {proof.type}
                  </span>
                  <span className="text-[11px] text-gray-400 font-medium">{proof.version}</span>
                </div>
                <span className={`text-[11px] font-bold ${proof.isUrgent ? 'text-[#DC2626]' : 'text-gray-400'}`}>
                  Deadline: {proof.deadline}
                </span>
              </div>

              {/* Card Middle Row: Title & Metadata */}
              <div>
                <h3 className="text-[17px] font-bold text-[#111827] mb-1.5">{proof.title}</h3>
                <p className="text-[12.5px] text-[#6B7280]">
                  {proof.subject} <span className="mx-1 text-gray-300">•</span> {proof.manuscriptId} <span className="mx-1 text-gray-300">•</span> {proof.pages}
                </p>
              </div>

              {/* Divider */}
              <hr className="border-gray-100 my-1" />

              {/* Card Bottom Row: Description & Actions */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <p className="text-[13px] text-[#6B7280]">
                  Typeset book PDF and editorial queries are ready for review.
                </p>
                <div className="flex gap-2.5 shrink-0 w-full sm:w-auto">
                  <button className="flex-1 sm:flex-none px-4 py-2 border border-gray-200 text-gray-700 rounded-lg text-[12px] font-bold hover:bg-gray-50 transition-colors">
                    Request Changes
                  </button>
                  <button className="flex-1 sm:flex-none px-4 py-2 border border-gray-200 text-gray-700 rounded-lg text-[12px] font-bold hover:bg-gray-50 transition-colors">
                    Download PDF
                  </button>
                  <button className="flex-1 sm:flex-none px-5 py-2 bg-[#7A1849] text-white rounded-lg text-[12px] font-bold hover:bg-[#531324] shadow-sm transition-colors">
                    Approve Proof
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </EbookAuthorLayout>
  );
}