import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MailOutlined, LockOutlined, ArrowRightOutlined, TeamOutlined } from '@ant-design/icons';

// ONLY ONE HEADER IMPORT (since Login is directly in /pages)
import Header from '../components/Header'; 

export default function Login() {
  const navigate = useNavigate();

  // Quick login handler for demo purposes
  const handleRoleLogin = (role) => {
    // In a real app, you would call your API here, get a JWT, and then redirect.
    // For now, we just redirect to the specific dashboard.
    if (role === 'admin') navigate('/admin/dashboard');
    if (role === 'author') navigate('/author/dashboard');
    if (role === 'reviewer') navigate('/reviewer/dashboard');
    if (role === 'eic') navigate('/eic/dashboard');
    if (role === 'editor') navigate('/editor/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] flex flex-col font-sans">
      <Header />
      
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-12 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24">
        
        {/* Left Side Branding */}
        <div className="w-full lg:w-[45%] max-w-md">
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
               src="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
               alt="Academic Research" 
               className="h-56 w-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
             />
          </div>
        </div>

        {/* Right Side Login Form */}
        <div className="w-full lg:w-[450px] bg-white p-8 sm:p-10 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100 relative">
          
          <p className="text-[11px] font-bold tracking-widest text-[#7A1C39] uppercase mb-2">Your ORA Account</p>
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">Welcome back</h2>
          <p className="text-[13px] text-gray-500 mb-6">Sign in to manage submissions, follow journals, and continue your research journey.</p>

          {/* Demo Quick Login Selector */}
          <div className="mb-6 bg-gray-50 border border-gray-200 rounded-xl p-4">
            <p className="text-[11px] font-bold text-gray-700 mb-3 flex items-center gap-1">
              <TeamOutlined /> DEMO ACCESS: SELECT A ROLE
            </p>
            <div className="grid grid-cols-2 gap-2">
              <button onClick={() => handleRoleLogin('admin')} className="bg-[#7A1C39] text-white text-[12px] font-bold py-2 rounded-lg hover:bg-[#531324] transition shadow-sm">
                Journal Admin
              </button>
              <button onClick={() => handleRoleLogin('author')} className="bg-white border border-gray-300 text-gray-700 text-[12px] font-bold py-2 rounded-lg hover:border-[#7A1C39] hover:text-[#7A1C39] transition shadow-sm">
                Author
              </button>
              <button onClick={() => handleRoleLogin('reviewer')} className="bg-white border border-gray-300 text-gray-700 text-[12px] font-bold py-2 rounded-lg hover:border-[#7A1C39] hover:text-[#7A1C39] transition shadow-sm">
                Reviewer
              </button>
              <button onClick={() => handleRoleLogin('eic')} className="bg-white border border-gray-300 text-gray-700 text-[12px] font-bold py-2 rounded-lg hover:border-[#7A1C39] hover:text-[#7A1C39] transition shadow-sm">
                EiC
              </button>
              <button onClick={() => handleRoleLogin('editor')} className="bg-white border border-gray-300 text-gray-700 text-[12px] font-bold py-2 rounded-lg hover:border-[#7A1C39] hover:text-[#7A1C39] transition shadow-sm col-span-2">
                Managing Editor
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="h-px bg-gray-200 flex-1"></div>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">or use credentials</span>
            <div className="h-px bg-gray-200 flex-1"></div>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-[12px] font-bold text-gray-700 mb-1.5">Email address</label>
              <div className="relative group">
                <input type="email" placeholder="you@institution.edu" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#7A1C39]/20 focus:border-[#7A1C39] outline-none transition-all text-[14px]" />
                <MailOutlined className="absolute left-3.5 top-3.5 text-gray-400 group-focus-within:text-[#7A1C39] transition-colors" />
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="block text-[12px] font-bold text-gray-700">Password</label>
                <a href="#" className="text-[11px] font-bold text-[#7A1C39] hover:underline">Forgot password?</a>
              </div>
              <div className="relative group">
                <input type="password" placeholder="Enter your password" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#7A1C39]/20 focus:border-[#7A1C39] outline-none transition-all text-[14px]" />
                <LockOutlined className="absolute left-3.5 top-3.5 text-gray-400 group-focus-within:text-[#7A1C39] transition-colors" />
              </div>
            </div>

            <div className="flex justify-between items-center pt-1 mb-2">
              <label className="flex items-center gap-2 text-[13px] text-gray-600 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-[#7A1C39]" /> Remember me
              </label>
            </div>

            <button 
              type="button" 
              onClick={() => handleRoleLogin('admin')} // Default behavior for main button for now
              className="w-full bg-[#7A1C39] text-white py-3.5 rounded-xl font-bold hover:bg-[#531324] transition-all shadow-md hover:shadow-lg flex justify-center items-center gap-2 text-[14px] group"
            >
              Sign in <ArrowRightOutlined className="text-[12px] group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
          
          <p className="text-center text-[13px] text-gray-600 mt-6">
            New to ORA? <Link to="/register" className="text-[#7A1C39] font-bold hover:underline">Create an account</Link>
          </p>
        </div>
      </main>
    </div>
  );
}