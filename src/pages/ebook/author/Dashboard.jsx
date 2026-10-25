import React from 'react';
import { Link } from 'react-router-dom';
import EbookAuthorLayout from '../../../layouts/ebook/EbookAuthorLayout';

export default function Dashboard() {
  return (
    <EbookAuthorLayout>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Author Portal</p>
            <h1 className="text-2xl font-bold text-gray-900">Good morning, Ava</h1>
            <p className="text-[13px] text-gray-500 mt-1">Here's what's happening with your books and submissions today.</p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 border border-gray-200 rounded-lg text-[13px] font-bold text-gray-700 bg-white hover:bg-gray-50">View all</button>
            <Link to="/ebook/author/submit" className="px-4 py-2 bg-[#7A1849] text-white rounded-lg text-[13px] font-bold hover:bg-[#531324]">New Submission</Link>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">Submitted Books</p>
            <div className="flex items-end justify-between">
              <span className="text-3xl font-bold text-gray-900">8</span>
              <span className="text-[11px] text-gray-400 font-medium">+1 this month</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">Under Review</p>
            <div className="flex items-end justify-between">
              <span className="text-3xl font-bold text-gray-900">1</span>
              <span className="text-[11px] text-gray-400 font-medium">in review</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">Awaiting Proof</p>
            <div className="flex items-end justify-between">
              <span className="text-3xl font-bold text-gray-900">3</span>
              <span className="text-[11px] text-gray-400 font-medium">action required</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-[15px] font-bold text-gray-900">Recent Activity</h3>
              <button className="text-[12px] font-bold text-gray-500 hover:text-[#7A1849]">View all</button>
            </div>
            <div className="space-y-4">
              {[
                { text: 'Proof Approved: Clinical AI Methods and Applications', time: 'Just now', color: 'bg-green-100 text-green-700' },
                { text: 'Major Revision: Quantum Computing and Cryptography', time: '2 hours ago', color: 'bg-amber-100 text-amber-700' },
                { text: 'Reviewer Assignment', time: 'Yesterday', color: 'bg-blue-100 text-blue-700' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className={`w-2 h-2 mt-1.5 rounded-full ${item.color.split(' ')[0]}`}></div>
                  <div>
                    <p className="text-[13px] font-medium text-gray-800">{item.text}</p>
                    <p className="text-[11px] text-gray-400">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
             <h3 className="text-[15px] font-bold text-gray-900 mb-4">Upcoming Deadlines</h3>
             <div className="space-y-4">
               <div className="p-3 bg-red-50 border border-red-100 rounded-lg">
                 <p className="text-[12px] font-bold text-red-700">Revision Due</p>
                 <p className="text-[11px] text-red-600">Clinical AI Methods...</p>
                 <p className="text-[10px] text-red-500 mt-1">Due in 2 days</p>
               </div>
               <div className="p-3 bg-gray-50 border border-gray-100 rounded-lg">
                 <p className="text-[12px] font-bold text-gray-700">Production Due</p>
                 <p className="text-[11px] text-gray-600">Quantum Computing...</p>
                 <p className="text-[10px] text-gray-500 mt-1">Due in 8 days</p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </EbookAuthorLayout>
  );
}