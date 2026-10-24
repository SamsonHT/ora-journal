import React from 'react';
import { Link } from 'react-router-dom';
import { MailOutlined, LockOutlined, ArrowRightOutlined, DownOutlined, PhoneOutlined, BankOutlined } from '@ant-design/icons';
import Header from '../components/Header';

export default function Register() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] flex flex-col font-sans">
      <Header />
      
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8 lg:py-12 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
        
        {/* Left Side Branding */}
        <div className="w-full lg:w-[35%] max-w-md hidden lg:block">
          <Link to="/journals" className="text-[12px] text-[#7A1C39] font-bold mb-6 inline-flex items-center gap-1 hover:underline">
            &larr; Back to journals
          </Link>
          
          <p className="text-[10px] font-bold tracking-[0.2em] text-[#7A1C39] uppercase mb-4">Open Knowledge, Shared Progress.</p>
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-[1.15] mb-5">
            Your research.<br/>A world of possibility.
          </h1>
          <p className="text-[15px] text-gray-600 mb-8 leading-relaxed">
            One account connects you to the ORA Academic community, from your first discovery to your next publication.
          </p>
          
          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg relative group">
             <div className="absolute inset-0 bg-[#7A1C39]/10 group-hover:bg-transparent transition-colors z-10"></div>
             <img 
               src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
               alt="Library" 
               className="h-64 w-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
             />
          </div>
        </div>

        {/* Right Side Register Form */}
        <div className="w-full lg:w-[65%] max-w-[850px] bg-white p-6 sm:p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100">
          
          <div className="mb-8 border-b border-gray-100 pb-5">
            <p className="text-[10px] font-bold tracking-widest text-[#7A1C39] uppercase mb-1">Join the ORA Community</p>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">Create your account</h2>
            <p className="text-[14px] text-gray-500">Start discovering, publishing, and reviewing research. Registration is free.</p>
          </div>

          <button className="w-full border border-gray-300 rounded-xl py-3 font-semibold text-gray-700 hover:bg-gray-50 transition-all flex justify-center items-center gap-2 mb-6 text-[14px]">
             <svg className="w-5 h-5 text-[#A6CE39]" viewBox="0 0 256 256" fill="currentColor"><path d="M128 0C57.3 0 0 57.3 0 128s57.3 128 128 128 128-57.3 128-128S198.7 0 128 0zm-40 68.3c8.5 0 15.4 6.9 15.4 15.4s-6.9 15.4-15.4 15.4-15.4-6.9-15.4-15.4S79.5 68.3 88 68.3zm15.4 119.4h-30.8V104.7h30.8v83zM173 187.7h-30.8v-42c0-10.5-4.2-16.8-13.3-16.8-7.7 0-12.6 5.6-12.6 16.8v42h-30.8V104.7H116v9.8c4.9-7.7 13.3-12.6 24.5-12.6 20.3 0 32.5 13.3 32.5 36.4v49.4z"/></svg>
             Register with ORCID
          </button>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-gray-200 flex-1"></div>
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">or continue with email</span>
            <div className="h-px bg-gray-200 flex-1"></div>
          </div>

          <form className="space-y-6">
            
            {/* SECTION 1: Personal Info */}
            <div>
              <h3 className="text-[14px] font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#FCF7F9] text-[#7A1C39] flex items-center justify-center text-[10px]">1</span> Personal Information
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Title</label>
                  <div className="relative group">
                    <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#7A1C39]/20 focus:border-[#7A1C39] outline-none appearance-none text-[13px] cursor-pointer transition-all">
                      <option>Mr.</option><option>Ms.</option><option>Dr.</option><option>Prof.</option>
                    </select>
                    <DownOutlined className="absolute right-4 top-3.5 text-gray-400 text-[10px] pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">First Name <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="First" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#7A1C39]/20 focus:border-[#7A1C39] outline-none transition-all text-[13px]" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Middle Name</label>
                  <input type="text" placeholder="Middle" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#7A1C39]/20 focus:border-[#7A1C39] outline-none transition-all text-[13px]" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Last Name <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="Last name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#7A1C39]/20 focus:border-[#7A1C39] outline-none transition-all text-[13px]" />
                </div>
              </div>
            </div>

            {/* SECTION 2: Contact & Affiliation */}
            <div className="pt-2">
              <h3 className="text-[14px] font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#FCF7F9] text-[#7A1C39] flex items-center justify-center text-[10px]">2</span> Contact & Affiliation
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Email address <span className="text-red-500">*</span></label>
                  <div className="relative group">
                    <input type="email" placeholder="you@institution.edu" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#7A1C39]/20 focus:border-[#7A1C39] outline-none transition-all text-[13px]" />
                    <MailOutlined className="absolute left-3.5 top-3.5 text-gray-400 group-focus-within:text-[#7A1C39] transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Phone number</label>
                  <div className="relative group">
                    <input type="tel" placeholder="+251 900 000 000" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#7A1C39]/20 focus:border-[#7A1C39] outline-none transition-all text-[13px]" />
                    <PhoneOutlined className="absolute left-3.5 top-3.5 text-gray-400 group-focus-within:text-[#7A1C39] transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Institution / Affiliation</label>
                  <div className="relative group">
                    <input type="text" placeholder="e.g., Addis Ababa University" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#7A1C39]/20 focus:border-[#7A1C39] outline-none transition-all text-[13px]" />
                    <BankOutlined className="absolute left-3.5 top-3.5 text-gray-400 group-focus-within:text-[#7A1C39] transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Country / Region <span className="text-red-500">*</span></label>
                  <div className="relative group">
                    <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#7A1C39]/20 focus:border-[#7A1C39] outline-none appearance-none text-[13px] cursor-pointer transition-all">
                      <option>Select country</option><option>Ethiopia</option><option>Kenya</option>
                    </select>
                    <DownOutlined className="absolute right-4 top-3.5 text-gray-400 text-[10px] pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 3: Security & Participation */}
            <div className="pt-2">
              <h3 className="text-[14px] font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#FCF7F9] text-[#7A1C39] flex items-center justify-center text-[10px]">3</span> Security & Participation
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                 <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Password <span className="text-red-500">*</span></label>
                  <div className="relative group">
                    <input type="password" placeholder="Create password" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#7A1C39]/20 focus:border-[#7A1C39] outline-none transition-all text-[13px]" />
                    <LockOutlined className="absolute left-3.5 top-3.5 text-gray-400 group-focus-within:text-[#7A1C39] transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1.5">Confirm Password <span className="text-red-500">*</span></label>
                  <div className="relative group">
                    <input type="password" placeholder="Re-enter password" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#7A1C39]/20 focus:border-[#7A1C39] outline-none transition-all text-[13px]" />
                    <LockOutlined className="absolute left-3.5 top-3.5 text-gray-400 group-focus-within:text-[#7A1C39] transition-colors" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[12px] font-bold text-gray-800 mb-2">How would you like to participate?</label>
                <div className="grid grid-cols-3 gap-3">
                  <label className="border border-gray-200 rounded-xl p-3 cursor-pointer hover:border-[#7A1C39] transition-all flex flex-col justify-center items-center bg-white group has-[:checked]:border-[#7A1C39] has-[:checked]:bg-[#FCF7F9] has-[:checked]:border-2 text-center">
                    <input type="checkbox" defaultChecked className="w-5 h-5 mb-2 rounded border-gray-300 accent-[#7A1C39]" /> 
                    <span className="block text-[13px] font-bold text-gray-900 group-hover:text-[#7A1C39]">Reader</span>
                  </label>
                  <label className="border border-gray-200 rounded-xl p-3 cursor-pointer hover:border-[#7A1C39] transition-all flex flex-col justify-center items-center bg-white group has-[:checked]:border-[#7A1C39] has-[:checked]:bg-[#FCF7F9] has-[:checked]:border-2 text-center">
                    <input type="checkbox" className="w-5 h-5 mb-2 rounded border-gray-300 accent-[#7A1C39]" /> 
                    <span className="block text-[13px] font-bold text-gray-900 group-hover:text-[#7A1C39]">Author</span>
                  </label>
                  <label className="border border-gray-200 rounded-xl p-3 cursor-pointer hover:border-[#7A1C39] transition-all flex flex-col justify-center items-center bg-white group has-[:checked]:border-[#7A1C39] has-[:checked]:bg-[#FCF7F9] has-[:checked]:border-2 text-center">
                    <input type="checkbox" className="w-5 h-5 mb-2 rounded border-gray-300 accent-[#7A1C39]" /> 
                    <span className="block text-[13px] font-bold text-gray-900 group-hover:text-[#7A1C39]">Reviewer</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Terms & Submit */}
            <div className="pt-4 border-t border-gray-100">
               <label className="flex items-start gap-3 text-[12px] text-gray-600 cursor-pointer group mb-6">
                 <input type="checkbox" className="mt-0.5 w-5 h-5 rounded border-gray-300 accent-[#7A1C39] cursor-pointer" /> 
                 <span className="leading-relaxed">I agree to the <a href="#" className="text-[#7A1C39] font-bold hover:underline">Terms of Use</a> and <a href="#" className="text-[#7A1C39] font-bold hover:underline">Privacy Policy</a>. <span className="text-red-500">*</span></span>
               </label>

              <button type="button" className="w-full bg-[#7A1849] text-white py-4 rounded-xl font-bold hover:bg-[#5E1136] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex justify-center items-center gap-2 text-[15px] group">
                Create your account <ArrowRightOutlined className="text-[12px] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
          
          <p className="text-center text-[13px] text-gray-600 mt-8">
            Already have an account? <Link to="/login" className="text-[#7A1849] font-bold hover:underline">Sign in to your account</Link>
          </p>
        </div>
      </main>
    </div>
  );
}