import React from 'react';
import DigitalContentManagerLayout from '../../../layouts/ebook/DigitalContentManagerLayout';
import { Link } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';

export default function CreateIsbn() {
  return (
    <DigitalContentManagerLayout>
      <div className="max-w-[800px] mx-auto space-y-6">
        <div className="flex items-center gap-3">
          <Link to="/content-manager/isbn" className="text-gray-400 hover:text-gray-600"><ArrowLeftOutlined /></Link>
          <div>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Workspace / ISBN / Create</p>
            <h1 className="text-[26px] font-bold text-gray-900">Create ISBN</h1>
            <p className="text-[13px] text-gray-500 mt-1">Assign a new International Standard Book Number to a manuscript.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
          <form className="space-y-5">
            <div>
              <label className="block text-[11px] font-bold text-gray-700 mb-1.5 uppercase">Select Book</label>
              <select className="w-full border border-gray-300 rounded-lg p-2.5 text-[13px] outline-none focus:border-[#7A1849]">
                <option>Select a book awaiting ISBN...</option>
                <option>Rural Development and Public Policy</option>
                <option>New Unassigned Manuscript</option>
              </select>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5 uppercase">Format</label>
                <select className="w-full border border-gray-300 rounded-lg p-2.5 text-[13px] outline-none focus:border-[#7A1849]">
                  <option>ePUB</option>
                  <option>PDF</option>
                  <option>Paperback</option>
                  <option>Hardcover</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5 uppercase">Available ISBN</label>
                <select className="w-full border border-gray-300 rounded-lg p-2.5 text-[13px] outline-none focus:border-[#7A1849] bg-gray-50">
                  <option>978-1-2345-6790-1 (Auto-assigned)</option>
                  <option>978-1-2345-6790-2</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-6 border-t border-gray-100 mt-6">
              <Link to="/content-manager/isbn" className="px-5 py-2 rounded-lg text-[12px] font-bold text-gray-600 bg-white border border-gray-300 hover:bg-gray-50">Cancel</Link>
              <button type="button" className="px-5 py-2 rounded-lg text-[12px] font-bold text-white bg-[#7A1849] hover:bg-[#531324]">Assign ISBN</button>
            </div>
          </form>
        </div>
      </div>
    </DigitalContentManagerLayout>
  );
}