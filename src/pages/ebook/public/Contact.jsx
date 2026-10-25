import React from 'react';
import EbookHeader from '../../../components/ebook/EbookHeader';
import EbookFooter from '../../../components/ebook/EbookFooter';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans">
      <EbookHeader />

      <section className="bg-[#FAF9F6] py-16 px-6 lg:px-12 border-b border-gray-200">
        <div className="max-w-[1000px] mx-auto text-center">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-[16px] text-gray-600 max-w-2xl mx-auto">
            Have a question about publishing, reviewing, or accessing our ebooks? We're here to help.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-[1000px] mx-auto px-6 flex flex-col md:flex-row gap-12">
        {/* Contact Info */}
        <div className="md:w-1/3 space-y-8">
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-[#FCF7F9] rounded-full flex items-center justify-center text-[#7A1849] shrink-0">
              <MailOutlined />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Email</h4>
              <p className="text-[13px] text-gray-500">editorial@oraebooks.org</p>
              <p className="text-[13px] text-gray-500">support@oraebooks.org</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-[#FCF7F9] rounded-full flex items-center justify-center text-[#7A1849] shrink-0">
              <PhoneOutlined />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
              <p className="text-[13px] text-gray-500">+251 111 234 567</p>
              <p className="text-[13px] text-gray-500">Mon-Fri, 9am - 5pm EAT</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-[#FCF7F9] rounded-full flex items-center justify-center text-[#7A1849] shrink-0">
              <EnvironmentOutlined />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Office</h4>
              <p className="text-[13px] text-gray-500">Oromo Research Association</p>
              <p className="text-[13px] text-gray-500">Bole Road, Addis Ababa, Ethiopia</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:w-2/3 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Send us a message</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[12px] font-bold text-gray-700 mb-1">Full Name</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg p-3 text-[13px] focus:ring-2 focus:ring-[#7A1849]/20 outline-none" required />
              </div>
              <div>
                <label className="block text-[12px] font-bold text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full border border-gray-300 rounded-lg p-3 text-[13px] focus:ring-2 focus:ring-[#7A1849]/20 outline-none" required />
              </div>
            </div>
            <div>
              <label className="block text-[12px] font-bold text-gray-700 mb-1">Subject</label>
              <select className="w-full border border-gray-300 rounded-lg p-3 text-[13px] focus:ring-2 focus:ring-[#7A1849]/20 outline-none bg-white">
                <option>General Inquiry</option>
                <option>Publishing Proposal</option>
                <option>Peer Review</option>
                <option>Technical Support</option>
              </select>
            </div>
            <div>
              <label className="block text-[12px] font-bold text-gray-700 mb-1">Message</label>
              <textarea rows="4" className="w-full border border-gray-300 rounded-lg p-3 text-[13px] focus:ring-2 focus:ring-[#7A1849]/20 outline-none resize-none" required></textarea>
            </div>
            <button type="submit" className="bg-[#7A1849] text-white px-8 py-3 rounded-lg font-bold text-[13px] hover:bg-[#531324] transition-colors">Send Message</button>
          </form>
        </div>
      </section>

      <EbookFooter />
    </div>
  );
}