import React from 'react';
import EbookAuthorLayout from '../../../layouts/ebook/EbookAuthorLayout';
import { EyeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export default function MyBooks() {
  const books = [
    { title: 'Clinical AI Methods and Applications', category: 'Health & Medical Sciences', date: 'Jul 10, 2026', status: 'Proofing', statusColor: 'bg-purple-100 text-purple-700' },
    { title: 'Quantum Computing and Cryptography', category: 'Computer Science', date: 'Jul 02, 2026', status: 'Major Revision', statusColor: 'bg-amber-100 text-amber-700' },
    { title: 'Nanomaterials for Clean Water', category: 'Materials Science', date: 'Jun 18, 2026', status: 'Under Review', statusColor: 'bg-blue-100 text-blue-700' },
    { title: 'Renewable Energy Systems', category: 'Energy & Sustainability', date: 'Jun 05, 2026', status: 'Draft', statusColor: 'bg-gray-100 text-gray-700' },
  ];

  return (
    <EbookAuthorLayout>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">My Books</h1>
            <p className="text-[13px] text-gray-500 mt-1">Track the status and progress of all your book submissions.</p>
          </div>
          <div className="flex gap-2">
            <select className="border border-gray-200 rounded-lg px-3 py-2 text-[12px] font-bold text-gray-700 bg-white outline-none">
              <option>All Statuses</option>
            </select>
            <Link to="/ebook/author/submit" className="bg-[#7A1849] text-white px-4 py-2 rounded-lg text-[13px] font-bold hover:bg-[#531324]">New Submission</Link>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-200 text-[11px] font-bold text-gray-500 uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4">Book Title</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-[13px]">
              {books.map((book, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-bold text-gray-900">{book.title}</td>
                  <td className="px-6 py-4 text-gray-500">{book.category}</td>
                  <td className="px-6 py-4 text-gray-500">{book.date}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold ${book.statusColor}`}>{book.status}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-[#7A1849] font-bold hover:underline flex items-center justify-end gap-1 ml-auto"><EyeOutlined /> View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </EbookAuthorLayout>
  );
}