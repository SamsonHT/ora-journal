import React from 'react';
import GlobalHeader from '../../../components/GlobalHeader';
import { MailOutlined, LockOutlined, CheckCircleFilled } from '@ant-design/icons';

export default function NetworkLogin() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <GlobalHeader />
      <div className="max-w-5xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-16">
        
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Sign in</h1>
          <p className="text-gray-600 mb-8">Stay connected to your research community.</p>
          <form className="space-y-5 bg-white p-8 rounded-2xl shadow-sm border">
            <div>
              <label className="block text-[12px] font-bold mb-2">Email address</label>
              <div className="relative">
                <input type="email" placeholder="you@example.com" className="w-full pl-10 pr-4 py-3 rounded-xl border bg-gray-50" />
                <MailOutlined className="absolute left-3.5 top-3.5 text-gray-400" />
              </div>
            </div>
            <div>
              <label className="block text-[12px] font-bold mb-2">Password</label>
              <div className="relative">
                <input type="password" placeholder="Enter your password" className="w-full pl-10 pr-4 py-3 rounded-xl border bg-gray-50" />
                <LockOutlined className="absolute left-3.5 top-3.5 text-gray-400" />
              </div>
            </div>
            <button className="w-full bg-[#7A1849] text-white py-3.5 rounded-xl font-bold mt-2 hover:bg-[#5E1136] transition">Sign in</button>
          </form>
        </div>

        <div className="w-full md:w-1/2 bg-white p-10 rounded-2xl shadow-lg border border-[#7A1849]/10">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Welcome to ORA Academic</h2>
          <p className="text-gray-500 mb-6 text-[14px]">Join the global network of researchers and start publishing today.</p>
          <ul className="space-y-4">
            {['Access peer-reviewed manuscripts', 'Connect with researchers worldwide', 'Manage your submissions'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-[14px] text-gray-700">
                <CheckCircleFilled className="text-[#7A1849]" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}