import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { ArrowLeftOutlined, DownloadOutlined, CheckCircleFilled, GlobalOutlined } from '@ant-design/icons';

export default function ProductionDetail() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const { id } = useParams(); 
  
  const isPublishView = id === '2' || id === 'publish';

  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-200';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const borderCol = isDarkMode ? 'border-[#2D2D2D]' : 'border-gray-100';
  const inputBg = isDarkMode ? 'bg-[#1A1A1A] border-[#3D3D3D] text-white' : 'bg-white border-gray-300 text-gray-900';

  return (
    <AdminLayout>
      <div className="max-w-[1400px] mx-auto animate-fade-in-up pb-24">
        
        {/* Header Section - Back button moved to top right */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <p className={`text-[10px] font-bold tracking-[0.1em] uppercase mb-1.5 ${textMuted}`}>
              WORKSPACE / PRODUCTION / ORA-2026-097
            </p>
            <div className="flex items-center gap-3">
              <h1 className={`text-[26px] font-bold tracking-tight ${textMain}`}>
                {isPublishView ? 'Accepted Proof to Publish' : 'Send Author Proof'}
              </h1>
              <span className="bg-[#7A1849] text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-widest">
                Managing Editor
              </span>
            </div>
            <p className={`text-[13px] font-medium mt-1 ${textMuted}`}>
              {isPublishView 
                ? 'Complete final publication details and release the accepted article to the public journal.' 
                : 'Prepare and send the final production proof to the corresponding author for review.'}
            </p>
          </div>
          
          <button onClick={() => navigate('/managing-editor/pending-production')} className="text-[12px] font-bold text-gray-500 hover:text-[#7A1849] flex items-center gap-2 transition-colors px-4 py-2 border border-gray-200 rounded-lg bg-white shadow-sm">
            <ArrowLeftOutlined /> Back to Pending Production
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Content Column (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Shared Banner */}
            <div className={`p-6 rounded-xl border shadow-sm ${bgCard}`}>
              <div className="flex justify-between items-start mb-4">
                <p className={`text-[10px] font-bold uppercase tracking-widest text-[#7A1849]`}>
                  {isPublishView ? 'ACCEPTED AUTHOR PROOF' : 'ACCEPTED MANUSCRIPT'}
                </p>
                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md ${isPublishView ? 'bg-[#F0FDF4] text-[#15803D]' : 'bg-[#FEF2F2] text-[#B91C1C]'}`}>
                  {isPublishView ? 'Ready to publish' : 'Awaiting proof'}
                </span>
              </div>
              <h2 className={`text-[20px] font-bold tracking-tight mb-6 ${textMain}`}>Adaptive models for coastal resilience under compound climate hazards</h2>
              
              <div className="grid grid-cols-5 gap-4 mb-6">
                <div><p className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${textMuted}`}>Corresponding Author</p><p className={`text-[13px] font-bold ${textMain}`}>Dr. Rui Chen</p></div>
                <div><p className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${textMuted}`}>Manuscript ID</p><p className={`text-[13px] font-bold text-[#7A1849]`}>ORA-2026-097</p></div>
                <div><p className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${textMuted}`}>{isPublishView ? 'Article Type' : 'Manuscript Type'}</p><p className={`text-[13px] font-bold ${textMain}`}>Case Study</p></div>
                <div><p className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${textMuted}`}>{isPublishView ? 'Proof Version' : 'Final Decision'}</p><p className={`text-[13px] font-bold ${isPublishView ? textMain : 'text-[#15803D]'}`}>{isPublishView ? 'Version 2 - accepted' : 'Accepted'}</p></div>
                <div><p className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${textMuted}`}>{isPublishView ? 'Accepted On' : 'Current Status'}</p><p className={`text-[13px] font-bold ${isPublishView ? textMain : 'text-[#7A1849]'}`}>{isPublishView ? 'Sep 27, 2026' : 'Awaiting proof'}</p></div>
              </div>
              
              <div className={`p-3 rounded-lg border flex items-center justify-between ${isDarkMode ? 'bg-[#F0FDF4]/10 border-[#15803D]/30' : 'bg-[#F0FDF4] border-[#DCFCE7]'}`}>
                <div className="flex items-center gap-3">
                  <CheckCircleFilled className="text-[#15803D]" />
                  <p className={`text-[12px] font-medium ${isDarkMode ? 'text-green-400' : 'text-[#15803D]'}`}>
                    {isPublishView 
                      ? 'Author approval is recorded. All production files pass validation, and no unresolved production queries remain.'
                      : 'Final acceptance recorded by Editor in Chief Prof. Elena Rossi on Sep 22, 2026. The manuscript is ready for author proofing.'}
                  </p>
                </div>
                <span className={`text-[11px] font-bold ${isDarkMode ? 'text-green-400 bg-[#1A1A1A] border-[#15803D]/30' : 'text-[#15803D] bg-white border-[#DCFCE7]'} px-2 py-0.5 rounded border`}>
                  {isPublishView ? 'Checked 4 min ago' : 'Ready'}
                </span>
              </div>
            </div>

            {/* ================= PUBLISH VIEW ================= */}
            {isPublishView ? (
              <>
                {/* DOI Input */}
                <div className={`p-6 rounded-xl border shadow-sm ${bgCard}`}>
                  <h3 className={`text-[15px] font-bold tracking-tight mb-1 ${textMain}`}>Digital Object Identifier (DOI)</h3>
                  <p className={`text-[12px] font-medium mb-4 ${textMuted}`}>Register the permanent identifier before publication. ORA will automatically generate the suffix from the manuscript record.</p>
                  <div className="flex items-center gap-3">
                    <span className="text-[14px] font-bold text-gray-500 bg-gray-50 px-3 py-2.5 rounded-lg border border-gray-200">DOI *</span>
                    <input type="text" defaultValue="10.1080/ora.2026.097" className={`flex-1 px-4 py-2.5 rounded-lg border text-[14px] font-medium outline-none ${inputBg}`} />
                    <button className="bg-[#7A1849] text-white px-5 py-2.5 rounded-lg font-bold text-[13px] hover:bg-[#5E1136] transition-colors shadow-sm flex items-center gap-2">
                      <GlobalOutlined /> Prepare DOI
                    </button>
                  </div>
                  <p className={`text-[11px] font-medium mt-2 ${textMuted}`}>Editable before registration. The DOI becomes permanent when the article is published.</p>
                </div>

                {/* Publication Metadata */}
                <div className={`p-6 rounded-xl border shadow-sm ${bgCard}`}>
                  <h3 className={`text-[15px] font-bold tracking-tight mb-1 ${textMain}`}>Publication metadata</h3>
                  <p className={`text-[12px] font-medium mb-6 ${textMuted}`}>Confirm how the article will appear in the journal issue and public discovery records.</p>
                  <div className="grid grid-cols-4 gap-4">
                    <div><label className={`block text-[11px] font-medium mb-1.5 ${textMuted}`}>Volume</label><input type="text" defaultValue="18" className={`w-full px-3 py-2 rounded-lg border text-[13px] font-bold outline-none ${inputBg}`} /></div>
                    <div><label className={`block text-[11px] font-medium mb-1.5 ${textMuted}`}>Issue</label><input type="text" defaultValue="10" className={`w-full px-3 py-2 rounded-lg border text-[13px] font-bold outline-none ${inputBg}`} /></div>
                    <div><label className={`block text-[11px] font-medium mb-1.5 ${textMuted}`}>Article number</label><input type="text" defaultValue="097" className={`w-full px-3 py-2 rounded-lg border text-[13px] font-bold outline-none ${inputBg}`} /></div>
                    <div><label className={`block text-[11px] font-medium mb-1.5 ${textMuted}`}>Page number</label><input type="text" defaultValue="1-26" className={`w-full px-3 py-2 rounded-lg border text-[13px] font-bold outline-none ${inputBg}`} /></div>
                  </div>
                </div>
              </>
            ) : (
              /* ================= SEND PROOF VIEW ================= */
              <>
                {/* Source Files */}
                <div className={`p-6 rounded-xl border shadow-sm ${bgCard}`}>
                  <h2 className={`text-[15px] font-bold tracking-tight mb-1 ${textMain}`}>Source and final files</h2>
                  <p className={`text-[12px] font-medium mb-4 ${textMuted}`}>Reference the accepted source package and production-ready files before uploading the author proof.</p>
                  <div className="space-y-3">
                    {[
                      { l: 'ORA-2026-097_Accepted_Manuscript.docx', s: 'Accepted source · 3.7 MB', d: 'Sep 22, 2026' },
                      { l: 'ORA-2026-097_Final_Figures.zip', s: 'Final figure package · 48 MB', d: 'Sep 22, 2026' },
                      { l: 'ORA-2026-097_Typeset_v1.indd', s: 'Production source · 32.4 MB', d: 'Sep 26, 2026' },
                    ].map((f, i) => (
                      <div key={i} className={`p-3 rounded-lg border flex justify-between items-center ${isDarkMode ? 'bg-[#2A2A2A] border-[#3D3D3D]' : 'bg-[#FAFAFA] border-gray-200'}`}>
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded bg-gray-100 text-gray-500 flex items-center justify-center text-[10px] font-bold">DOC</div>
                          <div>
                            <p className={`text-[13px] font-bold ${textMain}`}>{f.l}</p>
                            <p className={`text-[11px] font-medium ${textMuted}`}>{f.s} • {f.d}</p>
                          </div>
                        </div>
                        <button className={`text-[12px] font-bold text-[#7A1849] hover:underline`}>Download</button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Upload Proof */}
                <div className={`p-6 rounded-xl border shadow-sm ${bgCard}`}>
                  <h2 className={`text-[15px] font-bold tracking-tight mb-1 ${textMain}`}>Proof document</h2>
                  <p className={`text-[12px] font-medium mb-4 ${textMuted}`}>Upload the final PDF the author will review. This file will be visible in the author's Pending Proof workspace.</p>
                  <div className={`border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center text-center mb-4 cursor-pointer ${isDarkMode ? 'border-gray-700 hover:bg-[#2A2A2A]' : 'border-gray-300 hover:bg-gray-50'}`}>
                    <div className="w-10 h-10 rounded-full bg-[#FCF7F9] text-[#7A1849] flex items-center justify-center mb-3"><DownloadOutlined /></div>
                    <p className={`text-[13px] font-bold ${textMain}`}>Drop proof PDF here or browse files</p>
                    <p className={`text-[11px] font-medium ${textMuted}`}>PDF only · Maximum 50 MB · Include all figures, tables, and author queries.</p>
                  </div>
                  <div className={`p-3 rounded-lg border flex justify-between items-center mb-6 ${isDarkMode ? 'bg-[#2A2A2A] border-[#3D3D3D]' : 'bg-[#FCF7F9] border-[#7A1849]/20'}`}>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded bg-red-100 text-red-500 flex items-center justify-center text-[9px] font-bold">PDF</div>
                      <div>
                        <p className={`text-[13px] font-bold ${textMain}`}>ORA-2026-097_Author_Proof_v1.pdf</p>
                        <p className={`text-[11px] font-medium ${textMuted}`}>Author proof · 6.8 MB · Uploaded just now</p>
                      </div>
                    </div>
                    <button className={`text-[12px] font-bold text-[#7A1849] hover:underline`}>Download</button>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-[12px] font-bold mb-1.5 ${textMain}`}>Proof version *</label>
                      <select className={`w-full px-3 py-2.5 rounded-lg border text-[13px] font-medium outline-none ${inputBg}`}>
                        <option>Version 1</option>
                        <option>Version 2</option>
                      </select>
                    </div>
                    <div>
                      <label className={`block text-[12px] font-bold mb-1.5 ${textMain}`}>Response due date *</label>
                      <input type="date" defaultValue="2026-10-03" className={`w-full px-3 py-2.5 rounded-lg border text-[13px] font-medium outline-none ${inputBg}`} />
                      <p className={`text-[10px] font-medium mt-1 ${textMuted}`}>7 calendar days from sending</p>
                    </div>
                  </div>
                </div>

                {/* Message to Author */}
                <div className={`p-6 rounded-xl border shadow-sm ${bgCard}`}>
                  <h2 className={`text-[15px] font-bold tracking-tight mb-1 ${textMain}`}>Message to Author</h2>
                  <p className={`text-[12px] font-medium mb-4 ${textMuted}`}>This message is included in the proof notification email and author workspace.</p>
                  <div className="mb-4">
                    <label className={`block text-[12px] font-bold mb-1.5 ${textMain}`}>Message *</label>
                    <textarea rows="5" defaultValue="Dear Dr. Chen, please review the attached proof carefully, including author names, affiliations, figures, tables, and the highlighted production queries. Add concise comments directly in the PDF and return your response by October 3, 2026. Please avoid introducing new substantive changes at this stage." className={`w-full p-3 rounded-lg border text-[13px] leading-relaxed resize-none outline-none ${inputBg}`}></textarea>
                  </div>
                  <div>
                    <label className={`block text-[12px] font-bold mb-1.5 ${textMain}`}>Optional production instructions (internal notes)</label>
                    <textarea rows="3" placeholder="Add notes for the production team. These notes are not visible to the author." className={`w-full p-3 rounded-lg border text-[13px] resize-none outline-none ${inputBg}`}></textarea>
                    <p className={`text-[10px] font-medium mt-1 ${textMuted}`}>Internal only</p>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Right Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Status Timeline */}
            <div className={`p-6 rounded-xl border shadow-sm ${bgCard}`}>
              <h3 className={`text-[15px] font-bold tracking-tight mb-1 ${textMain}`}>Production status</h3>
              <p className={`text-[11px] font-medium mb-5 ${textMuted}`}>Current production history</p>
              
              <div className={`relative border-l-2 ml-2 space-y-6 ${borderCol}`}>
                {[
                  { t: 'Final decision accepted', d: 'Accepted · 3 min ago · by Prof. Elena Rossi', time: 'Sep 22, 2026', active: true },
                  { t: 'Production files prepared', d: 'Typeset package and final figures quality checked.', time: 'Sep 24, 2026', active: true },
                  { t: 'Awaiting proof', d: 'Upload and send the final author proof.', time: 'Current', active: true, current: !isPublishView },
                  { t: 'Proof sent', d: 'Author reviews and returns corrections or approval.', time: isPublishView ? 'Sep 24, 2026' : 'Pending', active: isPublishView },
                  { t: 'Comment received', d: 'Author requests changes or approves.', time: isPublishView ? 'Sep 27, 2026' : 'Pending', active: isPublishView },
                  { t: 'Accepted', d: 'Proof approved for final quality check.', time: isPublishView ? 'Current' : 'Pending', active: isPublishView, current: isPublishView },
                ].map((step, i) => (
                  <div key={i} className="ml-5 relative">
                    <span className={`absolute -left-[27px] top-1 w-3 h-3 rounded-full border-2 ${step.current ? 'bg-[#7A1849] border-[#7A1849]' : step.active ? 'bg-green-500 border-green-500' : 'bg-gray-200 border-gray-300 dark:bg-gray-700 dark:border-gray-600'}`}></span>
                    <p className={`text-[13px] font-bold ${step.current ? 'text-[#7A1849]' : textMain}`}>{step.t}</p>
                    <p className={`text-[11px] font-medium mt-0.5 ${textMuted}`}>{step.d}</p>
                    <p className={`text-[10px] font-bold mt-0.5 ${step.current ? 'text-[#7A1849]' : 'text-gray-400'}`}>{step.time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Ready Box */}
            <div className={`p-6 rounded-xl border shadow-sm ${bgCard}`}>
              <h3 className={`text-[14px] font-bold tracking-tight mb-1 ${textMain}`}>
                {isPublishView ? 'Ready to publish' : 'Ready to send'}
              </h3>
              <p className={`text-[11px] font-medium mb-4 ${textMuted}`}>
                {isPublishView ? 'All final checks are complete.' : 'All required proof details are complete.'}
              </p>
              
              <div className="space-y-3 mb-6">
                {isPublishView ? (
                  [
                    { t: 'Author proof accepted', d: 'Dr. Rui Chen approved proof v2 on Sep 27, 2026.' },
                    { t: 'Production files complete', d: 'PDF, XML, figures, and supplementary data validated.' },
                    { t: 'Journal assignment confirmed', d: 'ORA Volume 18, Issue 10.' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircleFilled className="text-[#15803D] text-[12px] mt-0.5" />
                      <div>
                        <p className={`text-[12px] font-bold ${textMain}`}>{item.t}</p>
                        <p className={`text-[11px] font-medium ${textMuted}`}>{item.d}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  ['Proof PDF uploaded', 'Version assigned', 'Response date set', 'Author message reviewed'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircleFilled className="text-[#15803D] text-[12px]" />
                      <span className={`text-[12px] font-medium ${textMain}`}>{item}</span>
                    </div>
                  ))
                )}
              </div>

              {isPublishView ? (
                <div className={`pt-4 border-t ${borderCol}`}>
                  <div className="flex justify-between items-center mb-1">
                    <span className={`text-[12px] font-medium ${textMuted}`}>Publication readiness</span>
                    <span className={`text-[12px] font-bold text-[#15803D]`}>100%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
                    <div className="h-full bg-[#15803D] rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
              ) : (
                <div className={`pt-4 border-t ${borderCol}`}>
                  <p className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${textMuted}`}>RECIPIENT</p>
                  <p className={`text-[13px] font-bold ${textMain}`}>Dr. Rui Chen</p>
                  <p className={`text-[11px] font-medium ${textMuted}`}>r.chen@coastal-resilience.edu</p>
                </div>
              )}
            </div>

            {/* Public destination (Only Publish) */}
            {isPublishView && (
              <div className={`p-6 rounded-xl border shadow-sm ${bgCard}`}>
                <h3 className={`text-[14px] font-bold tracking-tight mb-3 ${textMain}`}>Public destination</h3>
                <p className={`text-[11px] font-medium mb-4 ${textMuted}`}>The article will appear in the journal issue and ORA Academic discovery index.</p>
                <button className={`text-[12px] font-bold text-[#7A1849] hover:underline flex items-center gap-2`}>
                  <GlobalOutlined /> Preview public article page
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Sticky Footer */}
        <div className={`fixed bottom-0 left-0 right-0  p-4 border-t z-40 flex justify-between items-center gap-4 transition-colors duration-300 backdrop-blur-md ${isDarkMode ? 'bg-[#1E1E1E]/90 border-[#2D2D2D]' : 'bg-white/90 border-gray-200'}`}>
          <p className={`text-[11px] font-medium ${textMuted}`}>
            {isPublishView 
              ? 'Publishing makes the article immediately available on the public journal issue page. The DOI will be registered against the public article.'
              : 'Sending changes the status to Proof sent. The author will be notified by email and in their portal. This action will be logged.'}
          </p>
          <div className="flex gap-3 shrink-0">
            <button className={`px-5 py-2.5 rounded-lg text-[13px] font-bold border transition-colors ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-200 text-gray-700 hover:bg-gray-50 bg-white'}`}>
              {isPublishView ? 'Preview article' : 'Save as Draft'}
            </button>
            <button onClick={() => navigate('/managing-editor/pending-production')} className="bg-[#7A1849] text-white px-6 py-2.5 rounded-lg font-bold text-[13px] hover:bg-[#5E1136] shadow-sm flex items-center gap-2 transition-colors">
              {isPublishView ? 'Publish to Journal' : 'Send Proof to Author'}
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}