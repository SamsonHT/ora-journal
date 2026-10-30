import React from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { SearchOutlined, PlusOutlined, DownOutlined } from '@ant-design/icons';

export default function Categories() {
  const { isDarkMode } = useTheme();
  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-200';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const borderCol = isDarkMode ? 'border-[#2D2D2D]' : 'border-gray-200';
  const inputBg = isDarkMode ? 'bg-[#2A2A2A] border-[#3D3D3D] text-white' : 'bg-white border-gray-300 text-gray-900';

  return (
    <AdminLayout>
      <div className="max-w-[1400px] mx-auto animate-fade-in-up">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <p className={`text-[10px] font-bold tracking-[0.1em] uppercase mb-1.5 ${textMuted}`}>WORKSPACE / ADMINISTRATION</p>
            <h1 className={`text-[26px] font-bold tracking-tight ${textMain}`}>Categories / Subject Area</h1>
            <p className={`text-[13px] font-medium mt-1 ${textMuted}`}>Structure journal subject areas and maintain editorial ownership.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className={`px-4 py-2 rounded-lg text-[12px] font-bold border transition-colors ${isDarkMode ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-200 text-gray-700 hover:bg-gray-50 bg-white'}`}>
              Reorder categories
            </button>
            <Link to="/admin/categories/add" className="bg-[#7A1849] text-white px-5 py-2 rounded-lg text-[12px] font-bold hover:bg-[#5E1136] transition-all shadow-sm flex items-center gap-2">
              <PlusOutlined /> Add Category
            </Link>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {[
            { label: 'Active categories', value: '24' },
            { label: 'Assigned editors', value: '18' },
            { label: 'Coverage gaps', value: '2' },
          ].map((stat, i) => (
            <div key={i} className={`p-5 rounded-xl border shadow-sm ${bgCard}`}>
              <h3 className={`text-[28px] font-bold tracking-tight mb-1 ${textMain}`}>{stat.value}</h3>
              <p className={`text-[11px] font-bold ${textMuted}`}>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className={`p-4 rounded-t-xl border-t border-x flex flex-col md:flex-row justify-between gap-4 ${bgCard}`}>
          <div className="relative w-full md:w-96">
            <SearchOutlined className="absolute left-3 top-2.5 text-gray-400 text-[13px]" />
            <input 
              type="text" 
              placeholder="Search category name or slug" 
              className={`w-full pl-9 pr-4 py-2 rounded-lg text-[12px] font-medium outline-none border ${inputBg} focus:border-[#7A1849] transition-all`} 
            />
          </div>
          <div className="flex gap-3">
            <button className={`px-4 py-2 rounded-lg text-[12px] font-bold border flex items-center justify-between w-36 ${isDarkMode ? 'border-gray-700 text-gray-300 bg-[#1E1E1E]' : 'border-gray-200 text-gray-700 bg-white'}`}>
              All statuses <DownOutlined className="text-[10px]" />
            </button>
            <button className={`px-4 py-2 rounded-lg text-[12px] font-bold border flex items-center justify-between w-44 ${isDarkMode ? 'border-gray-700 text-gray-300 bg-[#1E1E1E]' : 'border-gray-200 text-gray-700 bg-white'}`}>
              All parent categories <DownOutlined className="text-[10px]" />
            </button>
          </div>
        </div>

        {/* Table */}
        <div className={`rounded-b-xl border shadow-sm overflow-hidden ${bgCard}`}>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#7A1849] text-white">
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider">Category name</th>
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider">Slug</th>
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider">Parent category</th>
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider">Articles</th>
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider">Updated</th>
                  <th className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider text-right">Action</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${borderCol}`}>
                {[
                  { name: 'Artificial Intelligence', slug: 'artificial-intelligence', parent: '—', count: '186', status: 'Active', updated: '04 Oct 2026' },
                  { name: 'Materials Science', slug: 'materials-science', parent: '—', count: '142', status: 'Active', updated: '03 Oct 2026' },
                  { name: 'Climate & Energy', slug: 'climate-energy', parent: '—', count: '119', status: 'Active', updated: '02 Oct 2026' },
                  { name: 'Biomedical Systems', slug: 'biomedical-systems', parent: '—', count: '98', status: 'Active', updated: '01 Oct 2026' },
                  { name: 'Quantum Science', slug: 'quantum-science', parent: '—', count: '74', status: 'Active', updated: '30 Sep 2026' },
                  { name: 'Urban Policy', slug: 'urban-policy', parent: '—', count: '52', status: 'Needs editor', updated: '28 Sep 2026' },
                ].map((cat, i) => (
                  <tr key={i} className={`transition-colors ${isDarkMode ? 'hover:bg-[#2A2A2A]' : 'hover:bg-gray-50'}`}>
                    <td className={`px-6 py-4 text-[13px] font-bold ${textMain}`}>{cat.name}</td>
                    <td className={`px-6 py-4 text-[12px] font-medium ${textMuted}`}>{cat.slug}</td>
                    <td className={`px-6 py-4 text-[12px] font-medium ${textMuted}`}>{cat.parent}</td>
                    <td className={`px-6 py-4 text-[12px] font-bold ${textMain}`}>{cat.count}</td>
                    <td className="px-6 py-4">
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md ${
                        cat.status === 'Active' ? 'bg-[#F0FDF4] text-[#15803D]' : 'bg-[#FFF7ED] text-[#C2410C]'
                      }`}>
                        {cat.status}
                      </span>
                    </td>
                    <td className={`px-6 py-4 text-[12px] font-medium ${textMuted}`}>{cat.updated}</td>
                    <td className="px-6 py-4 text-right">
                      <button className={`px-4 py-1.5 rounded-md border text-[11px] font-bold transition-colors ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-200 text-gray-700 hover:bg-gray-50 bg-white shadow-sm'}`}>
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className={`p-4 border-t flex flex-col md:flex-row justify-between items-center gap-4 ${borderCol}`}>
            <p className={`text-[12px] font-medium ${textMuted}`}>Showing 6 of 24 categories</p>
            <div className="flex gap-2">
              <button className={`px-4 py-1.5 rounded-md border text-[11px] font-bold ${isDarkMode ? 'border-gray-700 text-gray-400' : 'border-gray-200 text-gray-500 bg-white'}`}>Previous</button>
              <button className="px-3 py-1.5 rounded-md border border-[#7A1849] text-[#7A1849] bg-white text-[11px] font-bold">1</button>
              <button className={`px-4 py-1.5 rounded-md border text-[11px] font-bold ${isDarkMode ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-200 text-gray-700 hover:bg-gray-50 bg-white'}`}>Next</button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}