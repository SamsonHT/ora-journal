import React from 'react';
import { useNavigate } from 'react-router-dom';
import EbookEditorialLayout from '../../../layouts/ebook/EbookEditorialLayout';
import { 
  FileTextOutlined, 
  TeamOutlined, 
  CheckCircleOutlined, 
  AuditOutlined,
  BookOutlined,
  UserAddOutlined,
} from '@ant-design/icons';

export default function EditorialDashboard() {
  const navigate = useNavigate();

  return (
    <EbookEditorialLayout>
      {/* Widened container to fit screen better */}
      <div className="max-w-[1400px] mx-auto pb-10">
        
        {/* --- HEADER SECTION --- */}
        <div className="flex justify-between items-end mb-6">
          <div>
            <h1 className="text-[26px] font-bold text-gray-900 tracking-tight">Editorial overview</h1>
            <p className="text-[12px] text-gray-500 mt-1">
              Monday, 5 October 2026 · Monitor the ebook pipeline and move priority titles forward.
            </p>
          </div>
          <button 
            onClick={() => navigate('/ebook/editorial/reviews-list')}
            className="bg-[#7A1849] hover:bg-[#531324] text-white px-4 py-2 rounded-lg text-[12px] font-semibold transition-colors shadow-sm flex items-center gap-2"
          >
            Review awaiting screens
          </button>
        </div>

        {/* --- METRICS ROW --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 mb-6">
          
          {/* Card 1 */}
          <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm relative overflow-hidden">
            <div className="flex justify-between items-start mb-1">
              <p className="text-[11px] font-medium text-gray-500">Submissions</p>
              <div className="w-6 h-6 rounded-md bg-[#FCF7F9] flex items-center justify-center text-[#7A1849]">
                <FileTextOutlined className="text-[12px]" />
              </div>
            </div>
            <p className="text-[28px] font-bold text-gray-900 leading-tight">148</p>
            <p className="text-[10px] font-medium text-gray-400 mt-1">+12 this month</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm relative overflow-hidden">
            <div className="flex justify-between items-start mb-1">
              <p className="text-[11px] font-medium text-gray-500">Awaiting screening</p>
              <div className="w-6 h-6 rounded-md bg-[#FEF8F3] flex items-center justify-center text-[#E67E22]">
                <AuditOutlined className="text-[12px]" />
              </div>
            </div>
            <p className="text-[28px] font-bold text-gray-900 leading-tight">18</p>
            <p className="text-[10px] font-medium text-[#E67E22] mt-1">6 due today</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm relative overflow-hidden">
            <div className="flex justify-between items-start mb-1">
              <p className="text-[11px] font-medium text-gray-500">Reviewers assigned</p>
              <div className="w-6 h-6 rounded-md bg-[#F0F5FF] flex items-center justify-center text-[#2F54EB]">
                <TeamOutlined className="text-[12px]" />
              </div>
            </div>
            <p className="text-[28px] font-bold text-gray-900 leading-tight">42</p>
            <p className="text-[10px] font-medium text-[#2F54EB] mt-1">87 invitations active</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm relative overflow-hidden">
            <div className="flex justify-between items-start mb-1">
              <p className="text-[11px] font-medium text-gray-500">Reviews completed</p>
              <div className="w-6 h-6 rounded-md bg-[#F6FFED] flex items-center justify-center text-[#52C41A]">
                <CheckCircleOutlined className="text-[12px]" />
              </div>
            </div>
            <p className="text-[28px] font-bold text-gray-900 leading-tight">31</p>
            <p className="text-[10px] font-medium text-[#52C41A] mt-1">+8 this week</p>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm relative overflow-hidden">
            <div className="flex justify-between items-start mb-1">
              <p className="text-[11px] font-medium text-gray-500">Final decisions</p>
              <div className="w-6 h-6 rounded-md bg-[#FFF1F0] flex items-center justify-center text-[#F5222D]">
                <svg className="w-[12px] h-[12px]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              </div>
            </div>
            <p className="text-[28px] font-bold text-gray-900 leading-tight">9</p>
            <p className="text-[10px] font-medium text-[#F5222D] mt-1">3 overdue</p>
          </div>
        </div>

        {/* --- MIDDLE ROW: Activity & Workload --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
          
          {/* Recent Activity */}
          <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col">
            <div className="flex justify-between items-center p-4 border-b border-gray-100">
              <h2 className="text-[14px] font-bold text-gray-900">Recent activity</h2>
              <button className="text-[11px] font-medium text-gray-400 hover:text-gray-700">View audit log</button>
            </div>
            
            <div className="flex-1 flex flex-col justify-center divide-y divide-gray-50">
              
              {/* Activity Item 1 */}
              <div className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer group">
                <div className="w-8 h-8 rounded-full bg-[#FCF7F9] flex items-center justify-center text-[#7A1849] shrink-0">
                  <BookOutlined className="text-[13px]" />
                </div>
                <div className="flex-1">
                  <p className="text-[12px] font-semibold text-gray-900">Dr. Leila Hassan submitted a revised manuscript</p>
                  <p className="text-[10px] text-gray-500 mt-0.5">EBK-2026-184 · 18 min ago</p>
                </div>
                <div className="text-gray-300 group-hover:text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </div>
              </div>

              {/* Activity Item 2 */}
              <div className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer group">
                <div className="w-8 h-8 rounded-full bg-[#F0F5FF] flex items-center justify-center text-[#2F54EB] shrink-0">
                  <UserAddOutlined className="text-[13px]" />
                </div>
                <div className="flex-1">
                  <p className="text-[12px] font-semibold text-gray-900">Prof. Naomi Brooks accepted a review invitation</p>
                  <p className="text-[10px] text-gray-500 mt-0.5">The Civic Algorithm · 42 min ago</p>
                </div>
                <div className="text-gray-300 group-hover:text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </div>
              </div>

              {/* Activity Item 3 */}
              <div className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer group">
                <div className="w-8 h-8 rounded-full bg-[#F6FFED] flex items-center justify-center text-[#52C41A] shrink-0">
                  <CheckCircleOutlined className="text-[13px]" />
                </div>
                <div className="flex-1">
                  <p className="text-[12px] font-semibold text-gray-900">Screening completed by M. Alvarez</p>
                  <p className="text-[10px] text-gray-500 mt-0.5">EBK-2026-179 · 1 hr ago</p>
                </div>
                <div className="text-gray-300 group-hover:text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </div>
              </div>

              {/* Activity Item 4 */}
              <div className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer group">
                <div className="w-8 h-8 rounded-full bg-[#FFF1F0] flex items-center justify-center text-[#F5222D] shrink-0">
                  <FileTextOutlined className="text-[13px]" />
                </div>
                <div className="flex-1">
                  <p className="text-[12px] font-semibold text-gray-900">Two reviews received</p>
                  <p className="text-[10px] text-gray-500 mt-0.5">Archives of a Warming World · 3 hrs ago</p>
                </div>
                <div className="text-gray-300 group-hover:text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </div>
              </div>

            </div>
          </div>

          {/* Pipeline Workload */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col">
            <div className="flex justify-between items-center p-4 border-b border-gray-100">
              <h2 className="text-[14px] font-bold text-gray-900">Pipeline workload</h2>
              <span className="text-[10px] font-medium text-gray-400 bg-gray-50 px-2 py-0.5 rounded">148 total</span>
            </div>

            <div className="p-4 flex-1 flex flex-col justify-between">
              
              <div className="space-y-3">
                {/* Item 1 */}
                <div>
                  <div className="flex justify-between text-[11px] font-semibold text-gray-700 mb-1">
                    <span>Initial screening</span>
                    <span>18</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5">
                    <div className="bg-[#E67E22] h-1.5 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                </div>

                {/* Item 2 */}
                <div>
                  <div className="flex justify-between text-[11px] font-semibold text-gray-700 mb-1">
                    <span>Reviewer assignment</span>
                    <span>23</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5">
                    <div className="bg-[#2F54EB] h-1.5 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>

                {/* Item 3 */}
                <div>
                  <div className="flex justify-between text-[11px] font-semibold text-gray-700 mb-1">
                    <span>Under review</span>
                    <span>67</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5">
                    <div className="bg-[#7A1849] h-1.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>

                {/* Item 4 */}
                <div>
                  <div className="flex justify-between text-[11px] font-semibold text-gray-700 mb-1">
                    <span>Final decision</span>
                    <span>9</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5">
                    <div className="bg-[#52C41A] h-1.5 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center">
                <div>
                  <p className="text-[11px] font-bold text-gray-800">Service-level health</p>
                  <p className="text-[10px] text-gray-500">92% of tasks within target</p>
                </div>
                <span className="bg-[#F6FFED] text-[#52C41A] border border-[#B7EB8F] px-2 py-0.5 rounded text-[10px] font-bold">Healthy</span>
              </div>

            </div>
          </div>
        </div>

        {/* --- BOTTOM ROW: Next Actions --- */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-center p-4 border-b border-gray-100">
            <h2 className="text-[14px] font-bold text-gray-900">Next actions</h2>
            <span className="text-[10px] font-medium text-gray-400">Prioritized by due date</span>
          </div>
          
          <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-3">
            
            {/* Action 1 */}
            <div 
              onClick={() => navigate('/ebook/editorial/screening')}
              className="bg-gray-50 rounded-lg border border-gray-200 p-3 hover:border-gray-300 transition-colors cursor-pointer group"
            >
              <h3 className="text-[13px] font-bold text-gray-900 mb-0.5">Screen 6 new submissions</h3>
              <p className="text-[10px] text-gray-500 mb-2">Oldest waiting 2 days</p>
              <p className="text-[11px] font-bold text-[#7A1849] group-hover:underline flex items-center gap-1">
                Screen books <span className="text-[12px] leading-none">→</span>
              </p>
            </div>

            {/* Action 2 */}
            <div 
              onClick={() => navigate('/ebook/editorial/reviewers')}
              className="bg-gray-50 rounded-lg border border-gray-200 p-3 hover:border-gray-300 transition-colors cursor-pointer group"
            >
              <h3 className="text-[13px] font-bold text-gray-900 mb-0.5">Assign reviewers to 4 books</h3>
              <p className="text-[10px] text-gray-500 mb-2">2 high-priority titles</p>
              <p className="text-[11px] font-bold text-[#7A1849] group-hover:underline flex items-center gap-1">
                Assign now <span className="text-[12px] leading-none">→</span>
              </p>
            </div>

            {/* Action 3 */}
            <div 
              onClick={() => navigate('/ebook/editorial/reviews-list')}
              className="bg-gray-50 rounded-lg border border-gray-200 p-3 hover:border-gray-300 transition-colors cursor-pointer group"
            >
              <h3 className="text-[13px] font-bold text-gray-900 mb-0.5">Issue 3 final decisions</h3>
              <p className="text-[10px] text-gray-500 mb-2">One due by 16:00</p>
              <p className="text-[11px] font-bold text-[#7A1849] group-hover:underline flex items-center gap-1">
                Open decisions <span className="text-[12px] leading-none">→</span>
              </p>
            </div>

          </div>
        </div>

      </div>
    </EbookEditorialLayout>
  );
}