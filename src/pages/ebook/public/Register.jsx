import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EbookHeader from '../../../components/ebook/EbookHeader';
import EbookFooter from '../../../components/ebook/EbookFooter';

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    alert('Registration successful! Please check your email.');
    navigate('/ebook/login');
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans">
      <EbookHeader />

      <div className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row min-h-[700px]">
          
          {/* Left Side: Branding & Books (Same as Login) */}
          <div className="md:w-1/2 bg-[#FCF7F9] p-12 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#7A1849]/5 rounded-full -ml-20 -mt-20 blur-3xl"></div>
            
            <div className="relative z-10">
              <p className="text-[10px] font-bold tracking-[0.2em] text-[#7A1849] uppercase mb-4">Your ORA eBook Library</p>
              <h1 className="text-4xl font-serif font-bold text-gray-900 leading-tight mb-6">
                A place for your next discovery.
              </h1>
              <p className="text-[14px] text-gray-600 mb-10">
                Keep the books that inspire you close. Build a personal reading list and discover new perspectives from ORA eBooks.
              </p>

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
            <div className="max-w-md mx-auto w-full">
              <p className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-2">ORA eBook Account</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Register</h2>
              <p className="text-[13px] text-gray-500 mb-8">Create your free account to save ebooks, curate reading lists, and follow new scholarship.</p>

              <form onSubmit={handleRegister} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] font-bold text-gray-700 mb-1">First name</label>
                    <input type="text" placeholder="First name" className="w-full border border-gray-300 rounded-lg p-2.5 text-[13px] focus:ring-2 focus:ring-[#7A1849]/20 outline-none" required />
                  </div>
                  <div>
                    <label className="block text-[12px] font-bold text-gray-700 mb-1">Last name</label>
                    <input type="text" placeholder="Last name" className="w-full border border-gray-300 rounded-lg p-2.5 text-[13px] focus:ring-2 focus:ring-[#7A1849]/20 outline-none" required />
                  </div>
                </div>
                
                <div>
                  <label className="block text-[12px] font-bold text-gray-700 mb-1">Email address</label>
                  <input type="email" placeholder="you@institution.edu" className="w-full border border-gray-300 rounded-lg p-2.5 text-[13px] focus:ring-2 focus:ring-[#7A1849]/20 outline-none" required />
                  <p className="text-[10px] text-gray-400 mt-1">We'll send a verification link to this address.</p>
                </div>
                
                <div>
                  <label className="block text-[12px] font-bold text-gray-700 mb-1">Institution or affiliation (optional)</label>
                  <input type="text" placeholder="University, organisation, or independent researcher" className="w-full border border-gray-300 rounded-lg p-2.5 text-[13px] focus:ring-2 focus:ring-[#7A1849]/20 outline-none" />
                </div>

                <div>
                  <label className="block text-[12px] font-bold text-gray-700 mb-1">Password</label>
                  <input type="password" placeholder="Create a password" className="w-full border border-gray-300 rounded-lg p-2.5 text-[13px] focus:ring-2 focus:ring-[#7A1849]/20 outline-none" required />
                  <p className="text-[10px] text-gray-400 mt-1">Use at least 8 characters, including a letter and a number.</p>
                </div>

                <div>
                  <label className="block text-[12px] font-bold text-gray-700 mb-1">Confirm password</label>
                  <input type="password" placeholder="Re-enter your password" className="w-full border border-gray-300 rounded-lg p-2.5 text-[13px] focus:ring-2 focus:ring-[#7A1849]/20 outline-none" required />
                </div>

                <div className="space-y-2 pt-2">
                  <label className="flex items-start gap-2 text-[11px] text-gray-600 cursor-pointer">
                    <input type="checkbox" className="accent-[#7A1849] mt-0.5" required /> 
                    <span>I agree to the <Link to="#" className="text-[#7A1849] font-bold hover:underline">Terms of use</Link> and <Link to="#" className="text-[#7A1849] font-bold hover:underline">Privacy policy</Link></span>
                  </label>
                  <label className="flex items-start gap-2 text-[11px] text-gray-600 cursor-pointer">
                    <input type="checkbox" className="accent-[#7A1849] mt-0.5" /> 
                    <span>Send me occasional updates about new ebooks and ORA eBooks. (optional)</span>
                  </label>
                </div>

                <button type="submit" className="w-full bg-[#7A1849] text-white py-3 rounded-lg font-bold text-[14px] hover:bg-[#531324] transition-colors shadow-md mt-2">
                  Create account →
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-[11px] text-gray-500 mb-3 flex items-center justify-center gap-1">
                   <span className="text-green-500">✔</span> Free to join. No payment details required.
                </p>
                <p className="text-[12px] text-gray-500">
                  Already have an account? <Link to="/ebook/login" className="text-[#7A1849] font-bold hover:underline">Login</Link>
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

      <EbookFooter />
    </div>
  );
}