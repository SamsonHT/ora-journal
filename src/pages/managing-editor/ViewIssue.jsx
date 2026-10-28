import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import { useTheme } from '../../context/ThemeContext';
import { 
  ArrowLeftOutlined, FilePdfOutlined, GlobalOutlined, CalendarOutlined, 
  BookOutlined, EyeOutlined, EyeInvisibleOutlined, CheckCircleFilled, WarningFilled, EditOutlined 
} from '@ant-design/icons';

export default function ViewIssue() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const { id } = useParams();

  const bgCard = isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-200';
  const textMain = isDarkMode ? 'text-gray-100' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const borderCol = isDarkMode ? 'border-[#2D2D2D]' : 'border-gray-100';

  // Mock data
  const [issue, setIssue] = useState({
    id: id,
    title: 'Journal of Oromo Research',
    volume: '12',
    issueNumber: '3',
    date: 'Sep 15, 2026',
    issn: '2049-3630',
    articlesCount: 18,
    status: 'Scheduled', // 'Draft', 'Scheduled', 'Published'
    isPubliclyVisible: true,
    editorialNote: 'This issue features a curated selection of articles exploring the intersection of quantum computing, advanced sensor arrays, and autonomous control systems. Special focus is given to practical applications in flight path optimization and environmental monitoring.'
  });

  const articles = [
    { id: 'ORA-2026-077', title: 'Reinforcement learning in autonomous flight paths', authors: 'Dr. Rachel Green, Liam Neeson', keywords: 'Reinforcement Learning, UAV, Control', pages: '1-26', doi: '10.1080/ora.2026.077' },
    { id: 'ORA-2026-078', title: 'Graphene oxide membranes for water purification', authors: 'Dr. S. Okafor', keywords: 'Graphene, Water, Membranes', pages: '27-48', doi: '10.1080/ora.2026.078' },
    { id: 'ORA-2026-079', title: 'Neural diagnostics with multimodal imaging', authors: 'J. Wallace, M. Patel', keywords: 'Neural Networks, Diagnostics', pages: '49-72', doi: '10.1080/ora.2026.079' },
  ];

  const handlePublish = () => {
    if (issue.articlesCount < 6) {
      alert('Cannot publish. You need more than 5 articles.');
      return;
    }
    setIssue({ ...issue, status: 'Published', isPubliclyVisible: true });
    alert('Issue published to the public!');
  };

  return (
    <AdminLayout>
      <div className="max-w-[1400px] mx-auto animate-fade-in-up pb-24">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <p className={`text-[10px] font-bold tracking-[0.1em] uppercase mb-1.5 ${textMuted}`}>WORKSPACE / ISSUES / {id}</p>
            <div className="flex items-center gap-3">
              <h1 className={`text-[26px] font-bold tracking-tight ${textMain}`}>{issue.title}</h1>
              <span className={`text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-widest border ${issue.status === 'Published' ? 'bg-[#F0FDF4] text-[#15803D] border-[#DCFCE7]' : issue.status === 'Scheduled' ? 'bg-[#EBF1FA] text-[#1A56DB] border-[#D0E1FA]' : 'bg-[#FFF7ED] text-[#C2410C] border-[#FFEDD5]'}`}>
                {issue.status}
              </span>
            </div>
            <p className={`text-[13px] font-medium mt-1 ${textMuted}`}>Vol. {issue.volume} · Issue {issue.issueNumber} · {issue.date}</p>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={() => navigate(`/managing-editor/issues/edit/${id}`)}
              className="text-[12px] font-bold text-[#7A1849] hover:bg-[#FCF7F9] flex items-center gap-2 transition-colors px-4 py-2 border border-[#7A1849]/30 rounded-lg bg-white shadow-sm"
            >
              <EditOutlined /> Edit Issue
            </button>
            <button onClick={() => navigate('/managing-editor/issues')} className="text-[12px] font-bold text-gray-500 hover:text-[#7A1849] flex items-center gap-2 transition-colors px-4 py-2 border border-gray-200 rounded-lg bg-white shadow-sm">
              <ArrowLeftOutlined /> Back to Issues
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* LEFT COLUMN: Metadata & Articles (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Issue Metadata Card */}
            <div className={`p-6 rounded-xl border shadow-sm ${bgCard}`}>
              <h2 className={`text-[15px] font-bold tracking-tight mb-4 ${textMain}`}>Issue Details</h2>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div><p className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${textMuted}`}>Volume</p><p className={`text-[13px] font-bold ${textMain}`}>{issue.volume}</p></div>
                <div><p className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${textMuted}`}>Issue</p><p className={`text-[13px] font-bold ${textMain}`}>{issue.issueNumber}</p></div>
                <div><p className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${textMuted}`}>ISSN</p><p className={`text-[13px] font-bold ${textMain}`}>{issue.issn}</p></div>
                <div><p className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${textMuted}`}>Published</p><p className={`text-[13px] font-bold ${textMain}`}>{issue.date}</p></div>
                <div><p className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${textMuted}`}>Articles</p><p className={`text-[13px] font-bold ${textMain}`}>{issue.articlesCount}</p></div>
                <div><p className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${textMuted}`}>Status</p><p className={`text-[13px] font-bold ${issue.status === 'Published' ? 'text-[#15803D]' : 'text-[#C2410C]'}`}>{issue.status}</p></div>
              </div>
              <div className={`border-t pt-4 ${borderCol}`}>
                <h3 className={`text-[15px] font-bold tracking-tight mb-2 ${textMain}`}>Editorial Note</h3>
                <p className={`text-[13px] leading-[1.8] font-medium ${textMuted}`}>{issue.editorialNote}</p>
              </div>
            </div>

            {/* Articles List (Always visible, but with a status notice) */}
            <div className={`p-6 rounded-xl border shadow-sm ${bgCard}`}>
              <div className="flex justify-between items-center mb-4">
                <h2 className={`text-[15px] font-bold tracking-tight ${textMain}`}>Articles in this Issue</h2>
                <span className={`text-[11px] font-bold text-gray-400 px-2 py-0.5 rounded-md ${isDarkMode ? 'bg-[#2A2A2A] text-gray-300' : 'bg-gray-50 border border-gray-200'}`}>{articles.length} Articles</span>
              </div>

              {/* Notice if articles are not public */}
              {(issue.status !== 'Published' || !issue.isPubliclyVisible) && (
                <div className={`mb-4 p-3 rounded-lg border flex items-start gap-2 ${isDarkMode ? 'bg-[#2A2A2A] border-[#3D3D3D]' : 'bg-[#FFF7ED] border-[#FFEDD5]'}`}>
                  <EyeInvisibleOutlined className="text-[#C2410C] text-[14px] mt-0.5" />
                  <p className={`text-[12px] font-medium ${isDarkMode ? 'text-gray-300' : 'text-[#C2410C]'}`}>
                    <strong>Internal Preview:</strong> These articles are currently hidden from the public. 
                    {issue.status !== 'Published' ? ' Publish the issue to make them visible.' : ' Toggle the public visibility to show them.'}
                  </p>
                </div>
              )}
              
              <div className="space-y-3">
                {articles.map((art, i) => (
                  <div key={i} className={`p-4 rounded-lg border flex flex-col md:flex-row justify-between md:items-center gap-4 transition-colors ${isDarkMode ? 'bg-[#2A2A2A] border-[#3D3D3D]' : 'bg-white border-gray-100'}`}>
                    <div className="flex-1">
                      <h3 className={`text-[13px] font-bold ${textMain} leading-snug`}>{art.title}</h3>
                      <p className={`text-[11px] font-medium mt-0.5 ${textMuted}`}>{art.authors} · Pages {art.pages}</p>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {art.keywords.split(', ').map((k, ki) => (
                          <span key={ki} className="text-[9px] font-bold text-gray-500 bg-gray-50 px-1.5 py-0.5 rounded border border-gray-100">{k}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-3 shrink-0">
                      <button className="text-[11px] font-bold flex items-center gap-1 text-[#7A1849] hover:underline">
                        <FilePdfOutlined /> Download PDF
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Actions & Cover Image (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Access Management / Publish Card */}
            <div className={`p-6 rounded-xl border shadow-sm ${bgCard}`}>
              <h3 className={`text-[15px] font-bold tracking-tight mb-4 ${textMain}`}>
                {issue.status === 'Published' ? 'Access Management' : 'Publish Issue'}
              </h3>
              
              {issue.status === 'Published' ? (
                <div className="space-y-4">
                  <div className={`p-3 rounded-lg border flex items-center justify-between ${isDarkMode ? 'bg-[#2A2A2A] border-[#3D3D3D]' : 'bg-[#FAFAFA] border-gray-200'}`}>
                    <div className="flex items-center gap-2">
                      {issue.isPubliclyVisible ? <EyeOutlined className="text-[#7A1849]" /> : <EyeInvisibleOutlined className="text-gray-400" />}
                      <span className={`text-[12px] font-bold ${textMain}`}>Public Visibility</span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        checked={issue.isPubliclyVisible}
                        onChange={() => setIssue({ ...issue, isPubliclyVisible: !issue.isPubliclyVisible })}
                      />
                      <div className={`w-9 h-5 rounded-full peer transition-colors ${isDarkMode ? 'bg-gray-600 peer-checked:bg-[#7A1849]' : 'bg-gray-300 peer-checked:bg-[#7A1849]'}`}></div>
                      <div className="absolute left-[2px] top-[2px] bg-white rounded-full h-4 w-4 transition-all peer-checked:translate-x-full"></div>
                    </label>
                  </div>
                  <p className={`text-[11px] font-medium leading-relaxed ${textMuted}`}>
                    {issue.isPubliclyVisible ? 'This issue is currently visible to the public.' : 'This issue is hidden from the public.'}
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className={`p-3 rounded-lg border flex items-start gap-2 ${issue.articlesCount < 6 ? 'bg-[#FEF2F2] border-[#FCA5A5]' : 'bg-[#F0FDF4] border-[#DCFCE7]'}`}>
                    {issue.articlesCount < 6 ? (
                      <WarningFilled className="text-[#B91C1C] text-[12px] mt-0.5" />
                    ) : (
                      <CheckCircleFilled className="text-[#15803D] text-[12px] mt-0.5" />
                    )}
                    <p className={`text-[11px] font-medium ${issue.articlesCount < 6 ? 'text-[#B91C1C]' : 'text-[#15803D]'}`}>
                      {issue.articlesCount < 6 
                        ? `Cannot publish yet. You need more than 5 articles (Current: ${issue.articlesCount}).` 
                        : 'This issue is ready to be published.'}
                    </p>
                  </div>
                  <button 
                    onClick={handlePublish} 
                    disabled={issue.articlesCount < 6}
                    className={`w-full py-2.5 rounded-lg font-bold text-[13px] transition-colors shadow-sm ${
                      issue.articlesCount > 5 
                        ? 'bg-[#7A1849] text-white hover:bg-[#5E1136]' 
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Publish to Public
                  </button>
                </div>
              )}
            </div>

            {/* Public URL */}
            <div className={`p-6 rounded-xl border shadow-sm ${bgCard}`}>
              <h3 className={`text-[15px] font-bold tracking-tight mb-3 ${textMain}`}>Public Issue Link</h3>
              <div className={`p-3 rounded-lg border flex items-center gap-2 ${isDarkMode ? 'bg-[#2A2A2A] border-[#3D3D3D]' : 'bg-[#FAFAFA] border-gray-200'}`}>
                <GlobalOutlined className="text-[#7A1849]" />
                <p className={`text-[12px] font-mono font-medium truncate ${textMain}`}>https://ora.org/journal/vol{issue.volume}-issue{issue.issueNumber}</p>
              </div>
              <button className={`w-full mt-3 py-2.5 rounded-lg text-[12px] font-bold border transition-colors ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-200 text-gray-700 hover:bg-gray-50 bg-white'}`}>
                Copy Link
              </button>
            </div>

            {/* Cover Preview (Moved to bottom) */}
            <div className={`p-6 rounded-xl border shadow-sm ${bgCard}`}>
              <h3 className={`text-[15px] font-bold tracking-tight mb-4 ${textMain}`}>Cover Preview</h3>
              <div className="rounded-lg overflow-hidden shadow-md border border-gray-200 bg-[#7A1849] relative aspect-[3/4] max-w-[240px] mx-auto">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full translate-x-1/2 translate-y-1/2 blur-2xl"></div>
                </div>
                <div className="relative z-10 flex flex-col items-center justify-between h-full p-4 text-center">
                  <img src="/oralogo.png" alt="ORA Logo" className="h-10 w-auto mx-auto drop-shadow-md mt-2" onError={(e) => e.target.style.display = 'none'} />
                  
                  <div className="flex-1 flex flex-col justify-center items-center w-full px-2">
                    <p className="text-white text-[8px] font-bold tracking-widest uppercase mb-1">Oromoo Research Association</p>
                    <div className="flex items-center gap-1.5 mb-4 w-full justify-center">
                      <div className="h-[0.5px] w-8 bg-[#D4AF37]"></div>
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rotate-45"></div>
                      <div className="h-[0.5px] w-8 bg-[#D4AF37]"></div>
                    </div>
                    <p className="text-white text-[12px] font-serif leading-tight mb-1">JOURNAL OF</p>
                    <p className="text-[#E5C158] text-[18px] font-serif font-bold leading-tight uppercase">Oromo Research</p>
                  </div>

                  <div className="w-full border-t border-white/20 pt-2 mt-2 flex justify-between items-center text-white text-[6px] font-medium px-1">
                    <div className="flex flex-col items-center gap-0.5"><BookOutlined className="text-[#E5C158] text-[8px]" /><span>Vol. {issue.volume}</span><span>Issue {issue.issueNumber}</span></div>
                    <div className="flex flex-col items-center gap-0.5"><CalendarOutlined className="text-[#E5C158] text-[8px]" /><span>{issue.date}</span></div>
                    <div className="flex flex-col items-center gap-0.5"><div className="border border-[#E5C158] px-0.5 rounded text-[5px] text-[#E5C158]">ISSN</div><span>{issue.issn}</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}