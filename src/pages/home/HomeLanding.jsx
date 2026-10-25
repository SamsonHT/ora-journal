import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeHeader from '../../components/home/HomeHeader';
import HomeFooter from '../../components/home/HomeFooter';
import { 
  ArrowRightOutlined, BookOutlined, ReadOutlined, BankOutlined, 
  GlobalOutlined, DatabaseOutlined, TeamOutlined, CheckCircleFilled 
} from '@ant-design/icons';

export default function HomeLanding() {
  const [form, setForm] = useState({ name: '', email: '', institution: '', role: 'Researcher' });

  const modules = [
    { name: 'Journals', desc: 'Publish and discover peer-reviewed open access journals.', icon: <BookOutlined />, path: '/journal', bg: 'bg-blue-50', text: 'text-blue-600' },
    { name: 'eBooks', desc: 'Read and publish digital books and monographs.', icon: <ReadOutlined />, path: '/ebook', bg: 'bg-emerald-50', text: 'text-emerald-600' },
    { name: 'Library', desc: 'Explore physical and digital library collections.', icon: <BankOutlined />, path: '/library', bg: 'bg-purple-50', text: 'text-purple-600' },
    { name: 'Repository', desc: 'Archive and access datasets, theses, and reports.', icon: <DatabaseOutlined />, path: '/repository', bg: 'bg-amber-50', text: 'text-amber-600' },
    { name: 'Oromo Wikipedia', desc: 'Collaborative encyclopedia of Oromo knowledge.', icon: <GlobalOutlined />, path: '/wiki', bg: 'bg-rose-50', text: 'text-rose-600' },
    { name: 'Researchers Network', desc: 'Connect, collaborate, and share with peers globally.', icon: <TeamOutlined />, path: '/network', bg: 'bg-teal-50', text: 'text-teal-600' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Application submitted for ${form.name}. (Hook up to your backend here.)`);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-[#7A1849] selection:text-white">
      <HomeHeader />

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-white pt-20 pb-24 border-b border-gray-100">
        {/* Modern subtle background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCF7F9] border border-[#7A1849]/20 text-[#7A1849] text-[11px] font-bold tracking-widest uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-[#7A1849] animate-pulse"></span>
              Research • Publishing • Knowledge
            </div>
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight">
              Welcome to the <br/>
              <span className="text-[#7A1849]">ORA Academic</span> Platform
            </h1>
            <p className="text-[15px] text-gray-600 mb-10 max-w-lg leading-relaxed">
              Discover peer-reviewed, open-access scholarship across science, health, technology, society, and the environment. One unified ecosystem for the global Oromo research community.
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a href="#modules" className="bg-[#7A1849] text-white px-8 py-3 rounded-lg text-[14px] font-bold hover:bg-[#531324] hover:shadow-lg hover:shadow-[#7A1849]/20 transition-all duration-300">
                Explore Modules
              </a>
              <a href="#about" className="bg-white text-gray-700 border border-gray-200 px-8 py-3 rounded-lg text-[14px] font-bold hover:bg-gray-50 transition-all duration-300">
                Learn More
              </a>
            </div>
            <div className="flex flex-wrap gap-6 text-[12px] font-bold text-gray-500 uppercase tracking-wider">
              <span className="flex items-center gap-2"><CheckCircleFilled className="text-green-500" /> Open Access</span>
              <span className="flex items-center gap-2"><CheckCircleFilled className="text-green-500" /> Peer Reviewed</span>
              <span className="flex items-center gap-2"><CheckCircleFilled className="text-green-500" /> Global Reach</span>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#7A1849]/20 to-transparent rounded-3xl transform translate-x-4 translate-y-4 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Research" 
              className="rounded-2xl shadow-2xl object-cover h-[420px] w-full" 
            />
            {/* Modern Floating Glass Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white/50 flex items-center gap-4">
               <div className="w-12 h-12 rounded-full bg-[#7A1849] text-white flex items-center justify-center font-bold text-xl shadow-inner">A+</div>
               <div>
                 <p className="text-[14px] font-bold text-gray-900">Advanced Research</p>
                 <p className="text-[11px] text-gray-500 font-medium">Powered by ORA Network</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT US ================= */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[11px] font-bold tracking-[0.2em] text-[#7A1849] uppercase mb-3">About Us</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">A unified home for Oromo scholarship</h2>
          <p className="text-[15px] text-gray-600 leading-relaxed max-w-3xl mx-auto">
            The Oromo Research Association (ORA) is dedicated to preserving cultural knowledge and fostering academic excellence. 
            Our digital platform integrates six core modules — journals, books, library, repository, encyclopedia, and networking — 
            to support the entire lifecycle of research, from creation and peer review to publication, archiving, and global collaboration.
          </p>
        </div>
      </section>

      {/* ================= 6 MODULES (Modern Grid) ================= */}
      <section id="modules" className="py-24 bg-[#FAF9F6] border-y border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-6">
            <div>
              <p className="text-[11px] font-bold tracking-[0.2em] text-[#7A1849] uppercase mb-2">Ecosystem</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">Six modules. One scholarly journey.</h2>
              <p className="text-[14px] text-gray-500 mt-2">Everything you need to research, publish, and collaborate.</p>
            </div>
            <span className="text-5xl font-serif text-gray-200 font-bold hidden md:block">06</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map(mod => (
              <Link 
                key={mod.name} 
                to={mod.path} 
                className="group relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#7A1849]/20 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Background Watermark Icon */}
                <div className="absolute -right-4 -bottom-4 text-8xl opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500 pointer-events-none">
                  {mod.icon}
                </div>
                
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-6 ${mod.bg} ${mod.text}`}>
                    {mod.icon}
                  </div>
                  <h3 className="text-[18px] font-bold text-gray-900 mb-3 group-hover:text-[#7A1849] transition-colors">{mod.name}</h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed mb-8 relative z-10">{mod.desc}</p>
                </div>
                
                <div className="text-[12px] font-bold text-[#7A1849] flex items-center gap-2 group-hover:translate-x-1 transition-transform relative z-10">
                  Explore Module <ArrowRightOutlined />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DARK STATS SECTION ================= */}
      <section className="bg-[#1A050C] py-24 relative overflow-hidden">
        {/* Modern glowing blur background */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7A1849] rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white leading-tight mb-6">
              Research is more valuable when people can find it, trust it, and build on it.
            </h2>
            <p className="text-[15px] text-gray-400 mb-8 max-w-lg">
              Every article, dataset, and book is openly accessible and permanently preserved for future generations.
            </p>
            <ul className="space-y-4 mb-10 text-[14px] text-gray-300 font-medium">
               <li className="flex items-center gap-3"><CheckCircleFilled className="text-[#7A1849]" /> Open access to all published research</li>
               <li className="flex items-center gap-3"><CheckCircleFilled className="text-[#7A1849]" /> Rigorous peer review and editorial standards</li>
               <li className="flex items-center gap-3"><CheckCircleFilled className="text-[#7A1849]" /> Persistent identifiers for long-term discovery</li>
            </ul>
            <button className="bg-[#7A1849] text-white px-8 py-3 rounded-lg text-[14px] font-bold hover:bg-[#531324] transition-colors shadow-lg shadow-[#7A1849]/30">
              Read our mission
            </button>
          </div>
          
          <div className="lg:w-1/2 w-full">
             <div className="relative">
               <div className="absolute inset-0 bg-gradient-to-tr from-[#7A1849] to-transparent opacity-40 rounded-2xl transform -translate-x-4 translate-y-4"></div>
               <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Researchers" className="relative rounded-2xl shadow-2xl object-cover h-[400px] w-full" />
             </div>
          </div>
        </div>
        
        {/* Modern Stats Bar */}
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mt-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10">
             <div>
               <p className="text-4xl font-bold text-white mb-2">2,100+</p>
               <p className="text-[11px] text-gray-400 uppercase tracking-widest font-bold">Published Articles</p>
             </div>
             <div className="md:border-x border-white/10">
               <p className="text-4xl font-bold text-white mb-2">142</p>
               <p className="text-[11px] text-gray-400 uppercase tracking-widest font-bold">Active Researchers</p>
             </div>
             <div>
               <p className="text-4xl font-bold text-white mb-2">96</p>
               <p className="text-[11px] text-gray-400 uppercase tracking-widest font-bold">Partner Institutions</p>
             </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURED RESOURCES (Bento Box Style) ================= */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 lg:px-12 bg-white">
        <div className="flex justify-between items-end mb-10">
          <div>
            <p className="text-[11px] font-bold tracking-[0.2em] text-[#7A1849] uppercase mb-2">Discoveries</p>
            <h2 className="text-3xl font-serif font-bold text-gray-900">Featured resources and updates</h2>
          </div>
          <a href="#" className="text-[#7A1849] font-bold text-[13px] hover:underline">View all updates →</a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
           {/* Large Featured Card */}
           <div className="lg:col-span-2 bg-gray-900 rounded-3xl overflow-hidden relative h-[400px] group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-10">
                 <span className="bg-[#7A1849] text-white text-[10px] font-bold px-3 py-1 rounded-full mb-4 inline-block tracking-wider uppercase">Climatology</span>
                 <h3 className="text-3xl font-serif font-bold text-white mb-3 leading-tight">Coastal futures: evidence for modern conservation</h3>
                 <p className="text-[14px] text-gray-300 mb-6 max-w-lg">A new study on adaptive strategies for coastal resilience in the Horn of Africa.</p>
                 <div className="flex items-center gap-3 text-[12px] font-bold text-white">
                   <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center">DA</div>
                   Dr. Abdi A.
                 </div>
              </div>
           </div>

           {/* Side Cards */}
           <div className="flex flex-col gap-6">
              <div className="bg-[#FAF9F6] p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer flex-1 flex flex-col justify-center">
                 <span className="text-[10px] font-bold text-[#7A1849] uppercase tracking-widest mb-3 block">Announcement</span>
                 <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">Call for papers: Oromo cultural heritage</h3>
                 <p className="text-[13px] text-gray-500 mb-6 line-clamp-2">Submit your research to the upcoming special issue focused on preservation and modern identity.</p>
                 <a href="#" className="text-[13px] font-bold text-[#7A1849] mt-auto">Read more →</a>
              </div>
              
              <div className="bg-[#FAF9F6] p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer flex-1 flex flex-col justify-center">
                 <span className="text-[10px] font-bold text-[#7A1849] uppercase tracking-widest mb-3 block">Editorial</span>
                 <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">Mapping the intellectual landscape</h3>
                 <p className="text-[13px] text-gray-500 mb-6 line-clamp-2">Dr. Amina Hassan discusses the future of community-led research and digital archiving.</p>
                 <a href="#" className="text-[13px] font-bold text-[#7A1849] mt-auto">Read more →</a>
              </div>
           </div>
        </div>
      </section>

      {/* ================= PARTNERSHIP SECTION ================= */}
      <section className="bg-[#7A1849] py-24 relative overflow-hidden">
        {/* Abstract shape */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full filter blur-3xl"></div>
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 items-center relative z-10">
          <div className="lg:w-1/2">
             <p className="text-[11px] font-bold tracking-[0.2em] text-[#E8C5D6] uppercase mb-4">For Institutions</p>
             <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6 leading-tight">Strengthen your institution's research ecosystem.</h2>
             <p className="text-[15px] text-[#E8C5D6] mb-8 max-w-lg">Join leading universities and research centers using ORA to support open scholarship and global visibility.</p>
             <ul className="space-y-4 text-[14px] text-white font-medium">
               <li className="flex items-center gap-3"><CheckCircleFilled className="text-[#E8C5D6]" /> Centralized open-access publishing</li>
               <li className="flex items-center gap-3"><CheckCircleFilled className="text-[#E8C5D6]" /> Institutional repository hosting</li>
               <li className="flex items-center gap-3"><CheckCircleFilled className="text-[#E8C5D6]" /> Advanced usage analytics</li>
             </ul>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl">
               <h3 className="text-2xl font-bold text-gray-900 mb-2">Start a membership conversation</h3>
               <p className="text-[13px] text-gray-500 mb-8">Let us know your institutional needs and we will get back to you.</p>
               
               <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-5">
                     <div><label className="block text-[12px] font-bold text-gray-700 mb-2">Full Name</label><input required type="text" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className="w-full border border-gray-200 bg-gray-50 rounded-lg p-3 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#7A1849]/50" /></div>
                     <div><label className="block text-[12px] font-bold text-gray-700 mb-2">Institution</label><input type="text" value={form.institution} onChange={(e) => setForm({...form, institution: e.target.value})} className="w-full border border-gray-200 bg-gray-50 rounded-lg p-3 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#7A1849]/50" /></div>
                  </div>
                  <div><label className="block text-[12px] font-bold text-gray-700 mb-2">Email</label><input required type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className="w-full border border-gray-200 bg-gray-50 rounded-lg p-3 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#7A1849]/50" /></div>
                  <div><label className="block text-[12px] font-bold text-gray-700 mb-2">Message</label><textarea rows="3" className="w-full border border-gray-200 bg-gray-50 rounded-lg p-3 text-[14px] resize-none focus:outline-none focus:ring-2 focus:ring-[#7A1849]/50"></textarea></div>
                  <button type="submit" className="w-full bg-[#7A1849] text-white py-3.5 rounded-lg font-bold text-[14px] hover:bg-[#531324] transition-colors shadow-lg shadow-[#7A1849]/20">Submit Request</button>
               </form>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MODERN BE MEMBER FORM ================= */}
      <section id="be-member" className="py-24 bg-[#FAF9F6]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <p className="text-[11px] font-bold tracking-[0.2em] text-[#7A1849] uppercase mb-3">Join the Community</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">Become an ORA Member</h2>
            <p className="text-[15px] text-gray-600 mb-8 max-w-lg leading-relaxed">
              Membership gives you access to all six modules, the ability to submit manuscripts, publish books,
              deposit research, contribute to Oromo Wikipedia, and connect with researchers globally.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#7A1849]"><BookOutlined /></div>
                <div><h4 className="font-bold text-gray-900 text-[15px]">Publish & Share</h4><p className="text-[13px] text-gray-500">Submit to journals, publish eBooks, and deposit data.</p></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#7A1849]"><TeamOutlined /></div>
                <div><h4 className="font-bold text-gray-900 text-[15px]">Network Globally</h4><p className="text-[13px] text-gray-500">Connect with peers and join research groups worldwide.</p></div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Member Application</h3>
              <p className="text-[13px] text-gray-500 mb-8">Fill in your details to create your account.</p>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-[12px] font-bold text-gray-700 mb-2">Full Name</label>
                  <input required type="text" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})}
                    className="w-full border border-gray-200 bg-gray-50 rounded-lg p-3 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#7A1849]/50" />
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[12px] font-bold text-gray-700 mb-2">Email</label>
                    <input required type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})}
                      className="w-full border border-gray-200 bg-gray-50 rounded-lg p-3 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#7A1849]/50" />
                  </div>
                  <div>
                    <label className="block text-[12px] font-bold text-gray-700 mb-2">Institution</label>
                    <input type="text" value={form.institution} onChange={(e) => setForm({...form, institution: e.target.value})}
                      className="w-full border border-gray-200 bg-gray-50 rounded-lg p-3 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#7A1849]/50" />
                  </div>
                </div>
                <div>
                  <label className="block text-[12px] font-bold text-gray-700 mb-2">Primary Role</label>
                  <select value={form.role} onChange={(e) => setForm({...form, role: e.target.value})}
                    className="w-full border border-gray-200 bg-gray-50 rounded-lg p-3 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#7A1849]/50 appearance-none">
                    <option>Researcher</option>
                    <option>Author</option>
                    <option>Reviewer</option>
                    <option>Librarian</option>
                    <option>Student</option>
                    <option>General Public</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-[#7A1849] text-white py-3.5 rounded-lg font-bold text-[14px] hover:bg-[#531324] transition-colors shadow-lg shadow-[#7A1849]/20">
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT & CTA ================= */}
      <section id="contact" className="bg-[#1A050C] pt-20 pb-12 relative overflow-hidden">
         <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-20 border-b border-white/10 pb-20">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                  Find the knowledge—and the people—to move your work forward.
                </h2>
                <p className="text-[15px] text-gray-400">Get in touch with our team for support, partnerships, or general inquiries.</p>
              </div>
              <div className="flex gap-4">
                <button className="bg-white text-[#7A1849] px-8 py-3.5 rounded-lg font-bold text-[14px] hover:bg-gray-100 transition-colors">Contact Us</button>
                <a href="#be-member" className="border border-white/20 text-white px-8 py-3.5 rounded-lg font-bold text-[14px] hover:bg-white/10 transition-colors">Become a member</a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-2">Email</h4>
                <p className="text-[15px] text-white font-medium">info@oraresearch.org</p>
              </div>
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-2">Phone</h4>
                <p className="text-[15px] text-white font-medium">+251 000 000 000</p>
              </div>
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-2">Address</h4>
                <p className="text-[15px] text-white font-medium">Addis Ababa, Ethiopia</p>
              </div>
            </div>
         </div>
      </section>

      <HomeFooter />
    </div>
  );
}