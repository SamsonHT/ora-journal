// src/pages/ebook/content-manager/AllBooks.jsx
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import DigitalContentManagerLayout from '../../../layouts/ebook/DigitalContentManagerLayout';

const mockBooks = [
  { id: '1', title: 'Clinical AI: Methods and Applications', isbn: '978-1-2345-6789-0', status: 'Typesetting', date: 'Oct 12, 2026', author: 'Dr. Ava Morgan' },
  { id: '2', title: 'Nanomaterials for Clean Water', isbn: '978-1-2345-6789-1', status: 'Pre-press', date: 'Oct 10, 2026', author: 'Dr. K. Tesfaye' },
  { id: '3', title: 'Rural Development and Public Policy', isbn: 'Pending', status: 'ISBN Assignment', date: 'Oct 08, 2026', author: 'Prof. L. Bekele' },
  { id: '4', title: 'Quantum Computing and Cryptography', isbn: '978-1-2345-6789-3', status: 'Ready to Publish', date: 'Oct 05, 2026', author: 'Dr. S. Chen' },
  { id: '5', title: 'Renewable Energy Systems', isbn: '978-1-2345-6789-4', status: 'Published', date: 'Sep 28, 2026', author: 'Dr. M. Tadesse' },
];

const StatusBadge = ({ status }) => {
  const styles = {
    'Typesetting': 'bg-blue-50 text-blue-700',
    'Pre-press': 'bg-purple-50 text-purple-700',
    'ISBN Assignment': 'bg-amber-50 text-amber-700',
    'Ready to Publish': 'bg-emerald-50 text-emerald-700',
    'Published': 'bg-gray-100 text-gray-600',
  };
  return <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold ${styles[status] || 'bg-gray-100'}`}>{status}</span>;
};

export default function AllBooks() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filterOptions = ['All', 'Typesetting', 'Pre-press', 'ISBN Assignment', 'Ready to Publish', 'Published'];

  const filtered = useMemo(() => {
    return mockBooks.filter((b) => {
      const matchFilter = activeFilter === 'All' || b.status === activeFilter;
      const matchSearch =
        b.title.toLowerCase().includes(search.toLowerCase()) ||
        b.isbn.toLowerCase().includes(search.toLowerCase());
      return matchFilter && matchSearch;
    });
  }, [activeFilter, search]);

  return (
    <DigitalContentManagerLayout>
      <div className="space-y-6">
        <div>
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Workspace / All Books</p>
          <h1 className="text-[26px] font-bold text-gray-900">All books</h1>
          <p className="text-[13px] text-gray-500 mt-1">Manage the full catalog of books across all production stages.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <div className="p-4 border-b border-gray-200 flex flex-wrap justify-between items-center gap-3">
            <div className="flex flex-wrap gap-2">
              {filterOptions.map((f) => {
                const count = f === 'All' ? mockBooks.length : mockBooks.filter((b) => b.status === f).length;
                return (
                  <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    className={`px-3 py-1.5 rounded-md text-[12px] font-bold transition-colors ${
                      activeFilter === f
                        ? 'bg-[#7A1849] text-white'
                        : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {f} ({count})
                  </button>
                );
              })}
            </div>
            <div className="relative">
              <SearchOutlined className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search by title or ISBN..."
                className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-[12px] w-[280px] focus:outline-none focus:border-[#7A1849]"
              />
            </div>
          </div>

          <table className="w-full text-left border-collapse">
            <thead className="bg-[#7A1849] text-[10px] font-bold text-white uppercase tracking-wider">
              <tr>
                <th className="px-6 py-3.5">Book Title</th>
                <th className="px-6 py-3.5">ISBN</th>
                <th className="px-6 py-3.5">Status</th>
                <th className="px-6 py-3.5">Last Updated</th>
                <th className="px-6 py-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-[13px]">
              {filtered.length === 0 && (
                <tr>
                  <td colSpan="5" className="px-6 py-10 text-center text-gray-400 text-[13px]">
                    No books match your search or filter.
                  </td>
                </tr>
              )}
              {filtered.map((book) => (
                <tr key={book.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-bold text-gray-900">{book.title}</div>
                    <div className="text-[11px] text-gray-500">{book.author}</div>
                  </td>
                  <td className="px-6 py-4 text-gray-600 font-mono text-[12px]">{book.isbn}</td>
                  <td className="px-6 py-4"><StatusBadge status={book.status} /></td>
                  <td className="px-6 py-4 text-gray-500">{book.date}</td>
                  <td className="px-6 py-4 text-right">
                    <Link to={`/content-manager/books/${book.id}`} className="text-[#7A1849] text-[12px] font-bold hover:underline">
                      Manage
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DigitalContentManagerLayout>
  );
}