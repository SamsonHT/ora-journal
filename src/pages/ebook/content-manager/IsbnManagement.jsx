// src/pages/ebook/content-manager/IsbnManagement.jsx
import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DigitalContentManagerLayout from '../../../layouts/ebook/DigitalContentManagerLayout';
import { 
  SearchOutlined, ExportOutlined, UploadOutlined, PlusOutlined,
  DownOutlined, CheckOutlined, WarningOutlined, CloseOutlined,
  FileExcelOutlined, CheckCircleFilled
} from '@ant-design/icons';

// --- Mock Data (no coverImage — ISBNs are identifiers, not books) ---
const initialIsbns = [
  { id: 1, isbn: '978-99944-12-34-5', format: 'PDF', status: 'Assigned', book: 'Clinical AI: Methods and Applications', author: 'Leila Hassan', batch: 'EALS-2026-Q2', assignedDate: '05 Oct 2026', reported: true },
  { id: 2, isbn: '978-99944-12-35-2', format: 'EPUB', status: 'Assigned', book: 'Clinical AI: Methods and Applications', author: 'Leila Hassan', batch: 'EALS-2026-Q2', assignedDate: '05 Oct 2026', reported: true },
  { id: 3, isbn: '978-99944-12-36-9', format: 'PDF', status: 'Available', book: '—', author: '—', batch: 'EALS-2026-Q3', assignedDate: '—', reported: false },
  { id: 4, isbn: '978-99944-12-37-6', format: 'EPUB', status: 'Available', book: '—', author: '—', batch: 'EALS-2026-Q3', assignedDate: '—', reported: false },
  { id: 5, isbn: '978-99944-12-38-3', format: 'Audiobook', status: 'Available', book: '—', author: '—', batch: 'EALS-2026-Q3', assignedDate: '—', reported: false },
  { id: 6, isbn: '978-99944-12-39-0', format: 'PDF', status: 'Assigned', book: 'The Civic Algorithm', author: 'Naomi Brooks', batch: 'EALS-2026-Q2', assignedDate: '05 Oct 2026', reported: false },
  { id: 7, isbn: '978-99944-12-40-6', format: 'EPUB', status: 'Assigned', book: 'The Civic Algorithm', author: 'Naomi Brooks', batch: 'EALS-2026-Q2', assignedDate: '05 Oct 2026', reported: false },
  { id: 8, isbn: '978-99944-12-41-3', format: 'PDF', status: 'Voided', book: '—', author: '—', batch: 'EALS-2026-Q1', assignedDate: '—', reported: false },
];

function CustomSelect({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) setIsOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef]);

  return (
    <div className="relative" ref={wrapperRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-[12px] font-bold flex items-center justify-between min-w-[130px] hover:bg-gray-50 transition-colors ${isOpen ? 'border-[#6B1D3A] ring-1 ring-[#6B1D3A]/20' : ''}`}
      >
        <span className="truncate">{value}</span>
        <DownOutlined className={`text-[10px] text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="absolute z-50 top-full right-0 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg py-1 min-w-[150px]">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => { onChange(option); setIsOpen(false); }}
              className={`w-full text-left px-4 py-2 text-[12px] flex items-center justify-between hover:bg-[#FCF7F9] transition-colors ${value === option ? 'text-[#6B1D3A] font-bold bg-[#FCF7F9]' : 'text-gray-600'}`}
            >
              {option}
              {value === option && <CheckOutlined className="text-[10px]" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function IsbnManagement() {
  const navigate = useNavigate();
  const [isbns, setIsbns] = useState(initialIsbns);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Statuses');
  const [formatFilter, setFormatFilter] = useState('All Formats');
  const [reportFilter, setReportFilter] = useState('All Report Statuses');
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);

  const available = isbns.filter(b => b.status === 'Available').length;
  const assigned = isbns.filter(b => b.status === 'Assigned').length;
  const pendingReport = isbns.filter(b => b.status === 'Assigned' && !b.reported).length;
  const pendingList = isbns.filter(b => b.status === 'Assigned' && !b.reported);

  const filtered = useMemo(() => {
    return isbns.filter(b => {
      const matchSearch = b.isbn.toLowerCase().includes(search.toLowerCase()) || 
                          (b.book !== '—' && b.book.toLowerCase().includes(search.toLowerCase())) ||
                          (b.author !== '—' && b.author.toLowerCase().includes(search.toLowerCase()));
      const matchStatus = statusFilter === 'All Statuses' || b.status === statusFilter;
      const matchFormat = formatFilter === 'All Formats' || b.format === formatFilter;
      const matchReport = reportFilter === 'All Report Statuses' || 
                          (reportFilter === 'Reported' && b.reported) || 
                          (reportFilter === 'Unreported' && !b.reported);
      return matchSearch && matchStatus && matchFormat && matchReport;
    });
  }, [isbns, search, statusFilter, formatFilter, reportFilter]);

  const handleExport = () => {
    if (pendingList.length === 0) return;
    const csvContent = "data:text/csv;charset=utf-8," 
      + "ISBN-13,Book Title,Author(s),Publisher,Publication Date,Format,Language,Edition\n"
      + pendingList.map(row => 
          `${row.isbn},"${row.book}","${row.author}",ORA eBook,2026-10-05,${row.format},eng,1`
        ).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `EALS_Report_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsbns(prev => prev.map(b => 
      b.status === 'Assigned' && !b.reported ? { ...b, reported: true } : b
    ));
    setIsReportModalOpen(false);
  };

  return (
    <DigitalContentManagerLayout>
      <div className="space-y-5 pb-10">
        
        <div className="flex justify-between items-start pt-2">
          <div>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">Workspace / ISBN Management</p>
            <h1 className="text-[28px] font-bold text-[#1F2937] tracking-tight mb-1">ISBN Management</h1>
            <p className="text-[13px] text-gray-500">Manage Ethiopian (EALS) ISBN allocations, assignments, and reporting.</p>
          </div>
          <div className="flex gap-2">
            <button className="bg-white text-gray-700 border border-gray-300 px-4 py-2.5 rounded-lg text-[12px] font-bold shadow-sm hover:bg-gray-50 transition-colors flex items-center gap-2">
              <UploadOutlined className="text-[12px]" /> Bulk Import CSV
            </button>
            <button 
              onClick={() => setIsReportModalOpen(true)}
              className="bg-white text-gray-700 border border-gray-300 px-4 py-2.5 rounded-lg text-[12px] font-bold shadow-sm hover:bg-gray-50 transition-colors flex items-center gap-2"
            >
              <ExportOutlined className="text-[12px]" /> Export EALS Report
            </button>
            <button 
              onClick={() => navigate('/content-manager/isbn/create')}
              className="bg-[#6B1D3A] text-white px-5 py-2.5 rounded-lg text-[12px] font-bold shadow-sm hover:bg-[#531324] transition-colors flex items-center gap-2"
            >
              <PlusOutlined className="text-[12px]" /> Register ISBNs
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-[12px] font-medium text-gray-500 mb-2">Available in Pool</p>
            <p className="text-[32px] font-bold text-gray-900 leading-none mb-2">{available}</p>
            {available < 10 ? (
              <p className="text-[11px] font-bold text-[#DC2626] flex items-center gap-1"><WarningOutlined /> Low stock — order more from EALS</p>
            ) : (
              <p className="text-[11px] font-bold text-[#059669]">Sufficient stock</p>
            )}
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-[12px] font-medium text-gray-500 mb-2">Assigned & Published</p>
            <p className="text-[32px] font-bold text-gray-900 leading-none mb-2">{assigned}</p>
            <p className="text-[11px] font-bold text-gray-400">Locked to live ORA ebooks</p>
          </div>
          <div 
            onClick={() => setReportFilter('Unreported')}
            className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm cursor-pointer hover:border-[#6B1D3A]/30 transition-colors"
          >
            <div className="flex justify-between items-start">
              <p className="text-[12px] font-medium text-gray-500 mb-2">Pending EALS Report</p>
              {pendingReport > 0 && <span className="bg-[#FEF2F2] text-[#DC2626] px-2 py-0.5 rounded text-[9.5px] font-bold">Action needed</span>}
            </div>
            <p className="text-[32px] font-bold text-gray-900 leading-none mb-2">{pendingReport}</p>
            <p className={`text-[11px] font-bold ${pendingReport > 0 ? 'text-[#D97706]' : 'text-[#059669]'}`}>
              {pendingReport > 0 ? 'Requires export to Wemezeker' : 'All assigned ISBNs reported'}
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-[12px] font-medium text-gray-500 mb-2">Active Ethiopian Prefix</p>
            <p className="text-[24px] font-bold text-gray-900 leading-none mb-2 mt-1">978-99944-12</p>
            <p className="text-[11px] font-bold text-gray-400">Issued by Wemezeker / EALS</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 items-center pt-2">
          <div className="relative flex-1 min-w-[280px]">
            <SearchOutlined className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search by ISBN, book title, or author..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-[13px] focus:outline-none focus:border-[#6B1D3A] transition-colors" 
            />
          </div>
          <CustomSelect options={['All Statuses', 'Available', 'Assigned', 'Voided']} value={statusFilter} onChange={setStatusFilter} />
          <CustomSelect options={['All Formats', 'EPUB', 'PDF', 'Audiobook']} value={formatFilter} onChange={setFormatFilter} />
          <CustomSelect options={['All Report Statuses', 'Unreported', 'Reported']} value={reportFilter} onChange={setReportFilter} />
        </div>

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#6B1D3A] text-[10px] font-bold text-white uppercase tracking-wider">
              <tr>
                <th className="px-6 py-3.5 w-[18%]">ISBN-13</th>
                <th className="px-6 py-3.5 w-[8%]">Format</th>
                <th className="px-6 py-3.5 w-[10%]">Status</th>
                <th className="px-6 py-3.5 w-[28%]">Assigned Book & Author</th>
                <th className="px-6 py-3.5 w-[12%]">EALS Batch</th>
                <th className="px-6 py-3.5 w-[12%]">Assigned Date</th>
                <th className="px-6 py-3.5 w-[12%]">EALS Reported</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-[13px]">
              {filtered.length === 0 ? (
                <tr><td colSpan="7" className="px-6 py-10 text-center text-gray-400">No ISBNs match your search or filters.</td></tr>
              ) : (
                filtered.map((row) => (
                  <tr key={row.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 font-mono text-[12px] text-gray-900 font-bold">{row.isbn}</td>
                    <td className="px-6 py-4"><span className="text-[10px] font-bold bg-gray-100 text-gray-700 px-2 py-0.5 rounded">{row.format}</span></td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold ${
                        row.status === 'Available' ? 'bg-[#ECFDF5] text-[#059669]' 
                        : row.status === 'Assigned' ? 'bg-[#FCF7F9] text-[#6B1D3A]' 
                        : 'bg-gray-100 text-gray-500'
                      }`}>{row.status}</span>
                    </td>
                    <td className="px-6 py-4">
                      {row.status === 'Assigned' ? (
                        <div>
                          <p className="text-[12px] font-bold text-gray-900">{row.book}</p>
                          <p className="text-[11px] text-gray-500">{row.author}</p>
                        </div>
                      ) : <span className="text-gray-400">—</span>}
                    </td>
                    <td className="px-6 py-4 text-[12px] text-gray-600">{row.batch}</td>
                    <td className="px-6 py-4 text-[12px] text-gray-500">{row.assignedDate}</td>
                    <td className="px-6 py-4">
                      {row.status === 'Assigned' ? (
                        <span className={`flex items-center gap-1 text-[11px] font-bold ${row.reported ? 'text-[#059669]' : 'text-[#D97706]'}`}>
                          {row.reported ? <><CheckOutlined /> Reported</> : <><WarningOutlined /> Unreported</>}
                        </span>
                      ) : <span className="text-gray-400 text-[11px]">—</span>}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center py-2">
          <p className="text-[11px] text-gray-500 font-medium">Showing 1–{filtered.length} of {filtered.length} ISBNs</p>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 border border-gray-200 rounded-md text-[11px] font-bold text-gray-600 hover:bg-gray-50 bg-white shadow-sm disabled:opacity-50">Previous</button>
            <button className="px-3 py-1.5 border border-[#6B1D3A] bg-[#FCF7F9] rounded-md text-[11px] font-bold text-[#6B1D3A]">1</button>
            <button className="px-3 py-1.5 border border-gray-200 rounded-md text-[11px] font-bold text-gray-600 hover:bg-gray-50 bg-white shadow-sm">Next</button>
          </div>
        </div>

        <div className="flex justify-between items-center text-[10px] text-gray-400 pt-6 mt-4 border-t border-gray-200">
          <span>ORA Academic - eBook operations</span>
          <span>All dates in UTC+3</span>
        </div>
      </div>

      {isReportModalOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl flex flex-col overflow-hidden">
            <div className="p-5 border-b border-gray-200 flex justify-between items-center bg-[#F8F9FA]">
              <div>
                <h2 className="text-[16px] font-bold text-gray-900">Export EALS Report</h2>
                <p className="text-[12px] text-gray-500 mt-0.5">Generate the official CSV for the Ethiopian Archive and Library Service.</p>
              </div>
              <button onClick={() => setIsReportModalOpen(false)} className="text-gray-400 hover:text-gray-700"><CloseOutlined /></button>
            </div>
            <div className="p-5 overflow-y-auto max-h-[60vh]">
              {pendingList.length === 0 ? (
                <div className="text-center py-8">
                  <CheckCircleFilled className="text-4xl text-[#059669] mb-3" />
                  <p className="text-[14px] font-bold text-gray-900 mb-1">All caught up!</p>
                  <p className="text-[12px] text-gray-500">Every assigned ISBN has already been reported to EALS.</p>
                </div>
              ) : (
                <>
                  <div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-lg p-3 flex gap-2.5 items-start mb-4">
                    <WarningOutlined className="text-[#D97706] mt-0.5" />
                    <div>
                      <p className="text-[12px] font-bold text-[#92400E]">{pendingList.length} ISBNs pending report</p>
                      <p className="text-[11px] text-[#B45309] mt-0.5">These ISBNs have been assigned to books but not yet reported to the national agency.</p>
                    </div>
                  </div>
                  <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">Preview of exported data</p>
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <table className="w-full text-left text-[11px]">
                      <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                          <th className="px-3 py-2 font-bold text-gray-600">ISBN-13</th>
                          <th className="px-3 py-2 font-bold text-gray-600">Book Title</th>
                          <th className="px-3 py-2 font-bold text-gray-600">Author</th>
                          <th className="px-3 py-2 font-bold text-gray-600">Format</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {pendingList.map(row => (
                          <tr key={row.id}>
                            <td className="px-3 py-2 font-mono text-[10.5px]">{row.isbn}</td>
                            <td className="px-3 py-2 font-bold text-gray-900">{row.book}</td>
                            <td className="px-3 py-2 text-gray-600">{row.author}</td>
                            <td className="px-3 py-2 text-gray-600">{row.format}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </div>
            <div className="p-4 border-t border-gray-200 bg-gray-50 flex justify-end gap-3">
              <button onClick={() => setIsReportModalOpen(false)} className="px-4 py-2 rounded-lg text-[12px] font-bold text-gray-700 bg-white border border-gray-300 hover:bg-gray-50">Cancel</button>
              <button onClick={handleExport} disabled={pendingList.length === 0}
                className={`px-5 py-2 rounded-lg text-[12px] font-bold text-white flex items-center gap-2 ${pendingList.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#6B1D3A] hover:bg-[#531324]'}`}>
                <FileExcelOutlined /> Download CSV & Mark Reported
              </button>
            </div>
          </div>
        </div>
      )}
    </DigitalContentManagerLayout>
  );
}