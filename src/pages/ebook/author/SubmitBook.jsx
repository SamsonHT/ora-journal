import React from 'react';
import EbookAuthorLayout from '../../../layouts/ebook/EbookAuthorLayout';
import { UploadOutlined } from '@ant-design/icons';

export default function SubmitBook() {
  return (
    <EbookAuthorLayout>
      <div className="max-w-[900px] mx-auto">
        <div className="mb-8">
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">eBook Author</p>
          <h1 className="text-2xl font-bold text-gray-900">New Book Submission</h1>
        </div>

        <div className="bg-[#FCF7F9] border border-[#7A1849]/20 rounded-lg p-4 mb-8 flex items-start gap-3">
          <span className="text-[#7A1849] mt-0.5">ℹ️</span>
          <p className="text-[13px] text-[#7A1849] font-medium">
            <strong>Before you submit:</strong> Submissions are checked for completeness. Use "Save Draft" if you'd rather finish your draft on your own.
          </p>
        </div>

        <form className="space-y-8">
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-[16px] font-bold text-gray-900 mb-6 border-b border-gray-100 pb-2">Book Details</h3>
            <div className="space-y-5">
              <div>
                <label className="block text-[12px] font-bold text-gray-700 mb-2">Book Title</label>
                <input type="text" placeholder="e.g., AI and Human Cognition" className="w-full border border-gray-300 rounded-lg p-3 text-[13px] focus:ring-2 focus:ring-[#7A1849]/20 outline-none" />
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-[12px] font-bold text-gray-700 mb-2">Category</label>
                  <select className="w-full border border-gray-300 rounded-lg p-3 text-[13px] outline-none bg-white">
                    <option>Select a category...</option>
                    <option>Computer Science</option>
                    <option>Health & Medical Sciences</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[12px] font-bold text-gray-700 mb-2">Subcategory</label>
                  <select className="w-full border border-gray-300 rounded-lg p-3 text-[13px] outline-none bg-white">
                    <option>Select a subcategory...</option>
                    <option>Artificial Intelligence</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-[12px] font-bold text-gray-700 mb-2">Abstract</label>
                <textarea rows="4" placeholder="Provide a comprehensive abstract..." className="w-full border border-gray-300 rounded-lg p-3 text-[13px] outline-none resize-none"></textarea>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-[16px] font-bold text-gray-900 mb-6 border-b border-gray-100 pb-2">Author Information</h3>
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="block text-[12px] font-bold text-gray-700 mb-2">Full Name</label>
                <input type="text" defaultValue="Ava Morgan" className="w-full border border-gray-300 rounded-lg p-3 text-[13px] outline-none" />
              </div>
              <div>
                <label className="block text-[12px] font-bold text-gray-700 mb-2">Email Address</label>
                <input type="email" defaultValue="ava.morgan@example.edu" className="w-full border border-gray-300 rounded-lg p-3 text-[13px] outline-none" />
              </div>
            </div>
            <div className="mt-5">
              <label className="block text-[12px] font-bold text-gray-700 mb-2">Affiliation</label>
              <input type="text" defaultValue="Stanford University" className="w-full border border-gray-300 rounded-lg p-3 text-[13px] outline-none" />
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-[16px] font-bold text-gray-900 mb-6 border-b border-gray-100 pb-2">Book Files</h3>
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="block text-[12px] font-bold text-gray-700 mb-2">Manuscript File</label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:bg-gray-50 cursor-pointer transition-colors">
                  <UploadOutlined className="text-2xl text-gray-400 mb-2" />
                  <p className="text-[12px] font-bold text-[#7A1849]">Upload manuscript</p>
                  <p className="text-[10px] text-gray-400 mt-1">PDF, DOCX up to 50MB</p>
                </div>
              </div>
              <div>
                <label className="block text-[12px] font-bold text-gray-700 mb-2">Cover Image (optional)</label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:bg-gray-50 cursor-pointer transition-colors">
                  <UploadOutlined className="text-2xl text-gray-400 mb-2" />
                  <p className="text-[12px] font-bold text-[#7A1849]">Upload cover image</p>
                  <p className="text-[10px] text-gray-400 mt-1">JPG, PNG up to 5MB</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
            <button type="button" className="px-6 py-2.5 rounded-lg text-[13px] font-bold text-gray-600 bg-gray-100 hover:bg-gray-200">Save Draft</button>
            <button type="button" className="px-6 py-2.5 rounded-lg text-[13px] font-bold text-white bg-[#7A1849] hover:bg-[#531324] shadow-md">Submit Book</button>
          </div>
        </form>
      </div>
    </EbookAuthorLayout>
  );
}