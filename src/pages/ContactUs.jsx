import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined, SendOutlined } from '@ant-design/icons';

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative py-20 bg-[#531324]">
          <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#531324] to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
            <p className="text-[11px] font-bold tracking-[0.2em] text-[#C59B4B] uppercase mb-3">Get in touch</p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Contact Us</h1>
            <p className="text-[15px] text-gray-200 max-w-2xl mx-auto">Reach out to the editorial office or technical support team.</p>
          </div>
        </section>

        <section className="py-20 max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col lg:flex-row">
            
            {/* Contact Info Left */}
            <div className="w-full lg:w-2/5 bg-[#7A1849] p-10 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-serif font-bold mb-4">Let's talk</h2>
                <p className="text-[14px] text-gray-300 mb-10 leading-relaxed">Have a question about submissions, peer review, or partnerships? Our team is here to help.</p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"><MailOutlined className="text-lg" /></div>
                    <div><p className="text-[12px] text-gray-300">Email</p><p className="text-[14px] font-medium">support@ora-academic.org</p></div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"><PhoneOutlined className="text-lg" /></div>
                    <div><p className="text-[12px] text-gray-300">Phone</p><p className="text-[14px] font-medium">+251 900 000 000</p></div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"><EnvironmentOutlined className="text-lg" /></div>
                    <div><p className="text-[12px] text-gray-300">Office</p><p className="text-[14px] font-medium">Bole, Addis Ababa, Ethiopia</p></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Right */}
            <div className="w-full lg:w-3/5 p-10">
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[12px] font-bold text-gray-700 mb-1.5">Full Name <span className="text-red-500">*</span></label>
                    <input type="text" placeholder="John Doe" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#7A1849]/20 focus:border-[#7A1849] outline-none transition-all text-[13px]" />
                  </div>
                  <div>
                    <label className="block text-[12px] font-bold text-gray-700 mb-1.5">Email Address <span className="text-red-500">*</span></label>
                    <input type="email" placeholder="john@institution.edu" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#7A1849]/20 focus:border-[#7A1849] outline-none transition-all text-[13px]" />
                  </div>
                </div>

                <div>
                  <label className="block text-[12px] font-bold text-gray-700 mb-1.5">Subject <span className="text-red-500">*</span></label>
                  <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#7A1849]/20 focus:border-[#7A1849] outline-none transition-all text-[13px] cursor-pointer">
                    <option>General Inquiry</option>
                    <option>Manuscript Submission</option>
                    <option>Technical Support</option>
                    <option>Partnership Opportunity</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[12px] font-bold text-gray-700 mb-1.5">Message <span className="text-red-500">*</span></label>
                  <textarea rows="4" placeholder="How can we help you?" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#7A1849]/20 focus:border-[#7A1849] outline-none transition-all text-[13px] resize-none"></textarea>
                </div>

                <button type="button" className="bg-[#7A1849] text-white px-8 py-3.5 rounded-xl text-[14px] font-bold hover:bg-[#5E1136] transition-all shadow-md flex items-center gap-2 w-full sm:w-auto justify-center">
                  Send Message <SendOutlined />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}