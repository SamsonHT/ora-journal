import React from 'react';
import DigitalContentManagerLayout from '../../../layouts/ebook/DigitalContentManagerLayout';

export default function ManagerSettings() {
  return (
    <DigitalContentManagerLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Workspace / Settings</p>
          <h1 className="text-[26px] font-bold text-gray-900">Content Manager Settings</h1>
          <p className="text-[13px] text-gray-500 mt-1">Manage your production defaults and team preferences.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
           <h3 className="text-[16px] font-bold text-gray-900 mb-4 pb-4 border-b border-gray-100">Production Defaults</h3>
           <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                 <div>
                    <label className="block text-[11px] font-bold text-gray-700 mb-1.5 uppercase">Default output format</label>
                    <select className="w-full border border-gray-300 rounded-lg p-2.5 text-[13px] outline-none focus:border-[#7A1849]">
                      <option>PDF + ePUB</option>
                      <option>PDF only</option>
                      <option>ePUB only</option>
                    </select>
                 </div>
                 <div>
                    <label className="block text-[11px] font-bold text-gray-700 mb-1.5 uppercase">Proofing deadline buffer</label>
                    <select className="w-full border border-gray-300 rounded-lg p-2.5 text-[13px] outline-none focus:border-[#7A1849]">
                      <option>14 Days</option>
                      <option>21 Days</option>
                      <option>30 Days</option>
                    </select>
                 </div>
              </div>
              <div className="flex items-center gap-2 mt-4">
                 <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#7A1849]" />
                 <span className="text-[13px] font-medium text-gray-700">Automatically assign ISBN upon final proof approval</span>
              </div>
           </div>
           
           <div className="mt-6 flex justify-end">
             <button className="bg-[#7A1849] text-white px-5 py-2 rounded-lg text-[12px] font-bold">Save Settings</button>
           </div>
        </div>
      </div>
    </DigitalContentManagerLayout>
  );
}