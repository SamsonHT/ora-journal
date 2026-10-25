import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EbookHeader from '../../../components/ebook/EbookHeader';
import EbookFooter from '../../../components/ebook/EbookFooter';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate API login
    alert(`Logged in as ${email || 'Demo User'}`);
    navigate('/ebook'); // Redirect after standard login
  };

  const handleDemoLogin = (role) => {
    // Route based on the demo role clicked
    if (role === 'Author') {
      navigate('/ebook/author/dashboard');
    } else if (role === 'Editorial') {
      alert('Editorial Portal is not built yet. Coming soon!');
      // navigate('/ebook/editorial/dashboard'); 
    } else if (role === 'Content Manager') {
      alert('Content Manager Portal is not built yet. Coming soon!');
      // navigate('/ebook/manager/dashboard');
    } else if (role === 'Admin') {
      alert('Admin Portal is not built yet. Coming soon!');
      // navigate('/ebook/admin/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans">
      <EbookHeader />

      <div className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row min-h-[650px]">
          
          {/* Left Side: Branding & Books */}
          <div className="md:w-1/2 bg-[#FCF7F9] p-12 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#7A1849]/5 rounded-full -ml-20 -mt-20 blur-3xl"></div>
            
            <div className="relative z-10">
              <p className="text-[10px] font-bold tracking-[0.2em] text-[#7A1849] uppercase mb-4">Your ORA eBook Library</p>
              <h1 className="text-4xl font-serif font-bold text-gray-900 leading-tight mb-6">
                Good scholarship. Always within reach.
              </h1>
              <p className="text-[14px] text-gray-600 mb-10">
                Keep the books that inspire you close. Build a personal reading list and discover new perspectives from ORA eBooks.
              </p>

              {/* Book Mockups */}
              <div className="flex gap-4 mb-10">
                <div className="w-28 h-40 bg-gradient-to-br from-[#4A1229] to-[#7A1849] rounded p-3 shadow-lg flex flex-col justify-between">
                  <span className="text-[7px] text-white/60 font-bold">ORA eBooks</span>
                  <h3 className="text-white font-serif font-bold text-sm leading-tight">Rivers of Evidence</h3>
                </div>
                <div className="w-28 h-40 bg-gradient-to-br from-[#1C3F3A] to-[#2D6A60] rounded p-3 shadow-lg flex flex-col justify-between">
                  <span className="text-[7px] text-white/60 font-bold">ORA eBooks</span>
                  <h3 className="text-white font-serif font-bold text-sm leading-tight">The Civic Algorithm</h3>
                </div>
              </div>

              <ul className="space-y-3 text-[13px] text-gray-600">
                <li className="flex items-center gap-3"><span className="text-[#7A1849]">📖</span> Save books to your personal library</li>
                <li className="flex items-center gap-3"><span className="text-[#7A1849]">🔔</span> Follow subjects and new releases</li>
                <li className="flex items-center gap-3"><span className="text-[#7A1849]">📥</span> Read online or download EPUB and PDF</li>
              </ul>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="md:w-1/2 p-12 flex flex-col justify-center">
            <div className="max-w-sm mx-auto w-full">
              <p className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-2">ORA eBook Account</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Login</h2>
              <p className="text-[13px] text-gray-500 mb-8">Welcome back. Sign in to access your saved ebooks and reading lists.</p>

              <form onSubmit={handleLogin} className="space-y-5">
                <div>
                  <label className="block text-[12px] font-bold text-gray-700 mb-1">Email address</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@institution.edu" className="w-full border border-gray-300 rounded-lg p-3 text-[14px] focus:ring-2 focus:ring-[#7A1849]/20 outline-none" />
                </div>
                <div>
                  <label className="block text-[12px] font-bold text-gray-700 mb-1">Password</label>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" className="w-full border border-gray-300 rounded-lg p-3 text-[14px] focus:ring-2 focus:ring-[#7A1849]/20 outline-none" />
                </div>
                
                <div className="flex justify-between items-center text-[12px]">
                  <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
                    <input type="checkbox" className="accent-[#7A1849]" /> Remember me
                  </label>
                  <Link to="#" className="text-[#7A1849] font-bold hover:underline">Forgot password?</Link>
                </div>

                <button type="submit" className="w-full bg-[#7A1849] text-white py-3 rounded-lg font-bold text-[14px] hover:bg-[#531324] transition-colors shadow-md">
                  Login →
                </button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-[12px] text-gray-500 mb-4">New to ORA eBooks?</p>
                <Link to="/ebook/register" className="block w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-bold text-[13px] hover:bg-gray-50 transition-colors">
                  Create a free account
                </Link>
              </div>

              {/* DEMO USERS SECTION */}
              <div className="mt-10 pt-6 border-t border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center mb-3">Demo Access (Auto-Login)</p>
                <div className="grid grid-cols-2 gap-2">
                  <button onClick={() => handleDemoLogin('Author')} className="bg-gray-50 border border-gray-200 text-gray-700 text-[11px] font-bold py-2 rounded hover:bg-[#FCF7F9] hover:text-[#7A1849] transition-colors">Author</button>
                  <button onClick={() => handleDemoLogin('Editorial')} className="bg-gray-50 border border-gray-200 text-gray-700 text-[11px] font-bold py-2 rounded hover:bg-[#FCF7F9] hover:text-[#7A1849] transition-colors">Editorial</button>
                  <button onClick={() => handleDemoLogin('Content Manager')} className="bg-gray-50 border border-gray-200 text-gray-700 text-[11px] font-bold py-2 rounded hover:bg-[#FCF7F9] hover:text-[#7A1849] transition-colors">Content Manager</button>
                  <button onClick={() => handleDemoLogin('Admin')} className="bg-gray-50 border border-gray-200 text-gray-700 text-[11px] font-bold py-2 rounded hover:bg-[#FCF7F9] hover:text-[#7A1849] transition-colors">Admin</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <EbookFooter />
    </div>
  );
}