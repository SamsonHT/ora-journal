import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import HomeHeader from '../../components/home/HomeHeader';
import HomeFooter from '../../components/home/HomeFooter';
import { 
  ArrowRightOutlined, BookOutlined, ReadOutlined, BankOutlined, 
  GlobalOutlined, DatabaseOutlined, TeamOutlined, CheckCircleFilled 
} from '@ant-design/icons';

/* ---------- Animated Counter ---------- */
function useCountUp(target, duration = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const step = (now) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - (1 - p) * (1 - p);
          setCount(Math.floor(eased * target));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target, duration]);
  return { count, ref };
}

/* ---------- Scroll Reveal ---------- */
function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setTimeout(() => setVisible(true), delay);
        obs.disconnect();
      }
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [delay]);
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}>
      {children}
    </div>
  );
}

export default function HomeLanding() {
  const [form, setForm] = useState({
    title: 'Dr.',
    fullName: '',
    email: '',
    phone: '',
    institution: '',
    role: 'Researcher',
  });

  const modules = [
    { name: 'Journals', desc: 'Publish and discover peer-reviewed open access journals.', icon: <BookOutlined />, path: '/journal', color: 'from-blue-500 to-cyan-400' },
    { name: 'eBooks', desc: 'Read and publish digital books and monographs.', icon: <ReadOutlined />, path: '/ebook', color: 'from-emerald-500 to-teal-400' },
    { name: 'Library', desc: 'Explore physical and digital library collections.', icon: <BankOutlined />, path: '/library', color: 'from-purple-500 to-fuchsia-400' },
    { name: 'Repository', desc: 'Archive and access datasets, theses, and reports.', icon: <DatabaseOutlined />, path: '/repository', color: 'from-amber-500 to-orange-400' },
    { name: 'Oromo Wikipedia', desc: 'Collaborative encyclopedia of Oromo knowledge.', icon: <GlobalOutlined />, path: '/wiki', color: 'from-rose-500 to-pink-400' },
    { name: 'Researchers Network', desc: 'Connect, collaborate, and share with peers globally.', icon: <TeamOutlined />, path: '/network', color: 'from-[#5A153C] to-[#8B2A5E]' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Membership application submitted for ${form.title} ${form.fullName}. (Hook up to your backend here.)`);
  };

  const articles = useCountUp(2100);
  const researchers = useCountUp(142);
  const institutions = useCountUp(96);

  return (
    <div className="min-h-screen bg-[#F7F6F8] font-sans text-gray-800 selection:bg-[#5A153C] selection:text-white overflow-x-hidden">
      <HomeHeader />

      {/* ================= HERO — new design ================= */}
      <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-20 overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#5A153C]/8 to-transparent rounded-full blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-purple-200/40 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10 grid lg:grid-cols-12 gap-10 items-center">
          {/* Left: content */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm border border-gray-100 text-[#5A153C] text-[10px] font-bold tracking-[0.15em] uppercase mb-5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5A153C] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#5A153C]"></span>
                </span>
                Research • Publishing • Knowledge
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="text-[40px] sm:text-5xl lg:text-[58px] font-serif font-bold text-gray-900 leading-[1.06] mb-5 tracking-tight">
                Where research <br />
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-[#5A153C] via-[#8B2A5E] to-[#5A153C] bg-clip-text text-transparent">finds its voice</span>
                  <svg className="absolute -bottom-1 left-0 w-full h-2.5 text-[#5A153C]/15" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 6 Q 50 10 100 4" stroke="currentColor" strokeWidth="4" fill="transparent" />
                  </svg>
                </span>
                <br />and the world listens.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-[15px] text-gray-500 mb-7 max-w-md leading-relaxed">
                A curated ecosystem of peer-reviewed journals, scholarly eBooks, research repository, and collaborative Oromo Wikipedia — open to everyone, everywhere.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="flex flex-wrap items-center gap-3 mb-7">
                <a href="#modules" className="group bg-[#5A153C] text-white px-6 py-3 rounded-lg text-[13px] font-bold shadow-lg shadow-[#5A153C]/25 hover:shadow-xl hover:shadow-[#5A153C]/40 hover:-translate-y-0.5 transition-all flex items-center gap-2">
                  Explore modules <ArrowRightOutlined className="text-[10px] group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#membership" className="bg-white text-gray-700 border border-gray-200 px-6 py-3 rounded-lg text-[13px] font-bold hover:border-[#5A153C]/30 hover:bg-gray-50 hover:-translate-y-0.5 transition-all">
                  Become a member
                </a>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                {['Open Access', 'Peer Reviewed', 'Global Reach'].map(t => (
                  <span key={t} className="flex items-center gap-1.5">
                    <CheckCircleFilled className="text-[#5A153C]" /> {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: image collage */}
          <div className="lg:col-span-5 relative">
            <Reveal delay={150}>
              <div className="relative">
                {/* Main image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white ring-1 ring-black/5">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Students collaborating" 
                    className="w-full h-[340px] lg:h-[380px] object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A0510]/50 via-transparent to-transparent"></div>
                </div>
                {/* Secondary overlapping image */}
                <div className="absolute -bottom-6 -right-4 w-[140px] h-[120px] rounded-xl overflow-hidden shadow-xl border-2 border-white ring-1 ring-black/5 hidden sm:block">
                  <img 
                    src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Library books" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                {/* Floating stat badge */}
                <div className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-xl p-3 rounded-xl shadow-xl border border-white/60 flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#5A153C] to-[#8B2A5E] text-white flex items-center justify-center font-bold text-xs">25k+</div>
                  <div>
                    <p className="text-[11px] font-bold text-gray-900 leading-tight">Scholarly works</p>
                    <p className="text-[9px] text-gray-500">Openly accessible</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= FEATURE STRIP ================= */}
      <div className="border-y border-gray-100 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-4 flex flex-wrap justify-center md:justify-between items-center gap-4 text-[11px] font-semibold text-gray-500">
          {[
            'Over 25,000+ curated scholarly content',
            '100% Open Access, freely available',
            'Rigorous peer-review standards',
            'Global collaboration opportunities',
          ].map((t, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <CheckCircleFilled className="text-[#5A153C]" /> {t}
            </span>
          ))}
        </div>
      </div>

      {/* ================= MODULES ================= */}
      <section id="modules" className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
              <div className="max-w-2xl">
                <p className="text-[11px] font-bold tracking-[0.2em] text-[#5A153C] uppercase mb-2 flex items-center gap-2">
                  <span className="w-7 h-px bg-[#5A153C]"></span> Ecosystem
                </p>
                <h2 className="text-[28px] md:text-[36px] font-serif font-bold text-gray-900 leading-tight">
                  Six modules. <span className="text-[#5A153C]">One</span> scholarly journey.
                </h2>
                <p className="text-[14px] text-gray-500 mt-2">Everything you need to research, publish, and collaborate.</p>
              </div>
              <span className="text-[64px] font-serif text-gray-100 font-bold hidden md:block leading-none select-none">06</span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {modules.map((mod, idx) => (
              <Reveal key={mod.name} delay={idx * 80}>
                <Link 
                  to={mod.path}
                  className="group relative bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-[0_16px_40px_-16px_rgba(90,21,60,0.15)] hover:-translate-y-1 hover:border-[#5A153C]/10 transition-all duration-400 flex flex-col overflow-hidden h-full"
                >
                  <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${mod.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                  
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-lg bg-gradient-to-br ${mod.color} text-white shadow-md group-hover:scale-110 group-hover:-rotate-6 transition-all duration-400 shrink-0`}>
                      {mod.icon}
                    </div>
                    <h3 className="text-[16px] font-bold text-gray-900 mt-2.5 group-hover:text-[#5A153C] transition-colors">{mod.name}</h3>
                  </div>
                  <p className="text-[13px] text-gray-500 leading-relaxed mb-5 flex-grow">{mod.desc}</p>
                  <div className="flex items-center gap-1.5 text-[12px] font-bold text-[#5A153C] mt-auto pt-4 border-t border-gray-50">
                    Open module <ArrowRightOutlined className="text-[9px] group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MISSION / STATS ================= */}
      <section className="relative bg-[#1A0510] py-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#5A153C] rounded-full mix-blend-screen filter blur-[120px] opacity-25"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600 rounded-full mix-blend-screen filter blur-[120px] opacity-15"></div>

        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Reveal>
                <p className="text-[11px] font-bold tracking-[0.2em] text-[#E8C5D6] uppercase mb-3">Our Mission</p>
                <h2 className="text-[26px] md:text-[34px] font-serif font-bold text-white leading-tight mb-4">
                  Research is more valuable when people can <span className="text-[#E8C5D6]">find it, trust it,</span> and build on it.
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="text-[14px] text-gray-400 mb-6 max-w-md leading-relaxed">
                  Every article, dataset, and book is openly accessible and permanently preserved for future generations.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <ul className="space-y-3 mb-6 text-[13px] text-gray-300 font-medium">
                  {[
                    'Open access to all published research',
                    'Rigorous peer review and editorial standards',
                    'Persistent identifiers for long-term discovery',
                  ].map((t, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <CheckCircleFilled className="text-[#E8C5D6] text-[14px]" /> {t}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={300}>
                <button className="group bg-white text-[#5A153C] px-6 py-2.5 rounded-lg text-[13px] font-bold hover:bg-gray-100 hover:-translate-y-0.5 transition-all shadow-lg flex items-center gap-2">
                  Read our mission <ArrowRightOutlined className="text-[10px] group-hover:translate-x-1 transition-transform" />
                </button>
              </Reveal>
            </div>

            <div className="relative">
              <Reveal delay={200}>
                <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Researchers" className="w-full h-[260px] lg:h-[280px] object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A0510]/60 to-transparent"></div>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={300}>
            <div className="mt-12 grid grid-cols-3 gap-4 bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-xl p-6">
              <div ref={articles.ref} className="text-center">
                <p className="text-[28px] md:text-[32px] font-bold text-white mb-1 tabular-nums leading-none">
                  {articles.count.toLocaleString()}<span className="text-[#E8C5D6]">+</span>
                </p>
                <p className="text-[10px] text-gray-400 uppercase tracking-[0.15em] font-bold">Published Articles</p>
              </div>
              <div ref={researchers.ref} className="text-center border-x border-white/10">
                <p className="text-[28px] md:text-[32px] font-bold text-white mb-1 tabular-nums leading-none">
                  {researchers.count}<span className="text-[#E8C5D6]">+</span>
                </p>
                <p className="text-[10px] text-gray-400 uppercase tracking-[0.15em] font-bold">Active Researchers</p>
              </div>
              <div ref={institutions.ref} className="text-center">
                <p className="text-[28px] md:text-[32px] font-bold text-white mb-1 tabular-nums leading-none">
                  {institutions.count}<span className="text-[#E8C5D6]">+</span>
                </p>
                <p className="text-[10px] text-gray-400 uppercase tracking-[0.15em] font-bold">Partner Institutions</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= MEMBERSHIP — elegant form ================= */}
      <section id="membership" className="py-16 bg-[#F7F6F8]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side: pitch */}
          <div>
            <Reveal>
              <p className="text-[11px] font-bold tracking-[0.2em] text-[#5A153C] uppercase mb-2 flex items-center gap-2">
                <span className="w-7 h-px bg-[#5A153C]"></span> Join the Community
              </p>
              <h2 className="text-[28px] md:text-[34px] font-serif font-bold text-gray-900 mb-4 leading-tight">
                Become an <span className="text-[#5A153C]">ORA Member</span>
              </h2>
              <p className="text-[14px] text-gray-500 mb-7 max-w-md leading-relaxed">
                Membership gives you access to all six modules, the ability to submit manuscripts, publish books, deposit research, and connect with researchers globally.
              </p>
            </Reveal>
            <div className="space-y-4">
              {[
                { title: 'Publish & Share', desc: 'Submit to journals, publish eBooks, and deposit data.', icon: <BookOutlined /> },
                { title: 'Network Globally', desc: 'Connect with peers and join research groups worldwide.', icon: <TeamOutlined /> },
                { title: 'Access Everything', desc: 'Full access to all six modules and archives.', icon: <DatabaseOutlined /> },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 100}>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white shadow-sm flex items-center justify-center text-[#5A153C] shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-[13.5px] font-bold text-gray-900 mb-0.5">{item.title}</h4>
                      <p className="text-[12px] text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right side: form */}
          <Reveal delay={150}>
            <div className="relative bg-white rounded-2xl shadow-[0_20px_60px_-20px_rgba(90,21,60,0.18)] border border-gray-100 overflow-hidden">
              {/* Decorative top accent */}
              <div className="h-1 bg-gradient-to-r from-[#5A153C] via-[#8B2A5E] to-[#5A153C]"></div>

              <div className="p-7 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#5A153C] to-[#8B2A5E] flex items-center justify-center text-white shadow-md">
                    <TeamOutlined />
                  </div>
                  <div>
                    <h3 className="text-[19px] font-bold text-gray-900 leading-tight">Member Application</h3>
                    <p className="text-[12px] text-gray-500">Join a global scholarly community.</p>
                  </div>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  {/* Row 1: Title + Full Name */}
                  <div className="grid grid-cols-[100px_1fr] gap-3">
                    <div>
                      <label className="block text-[10px] font-bold text-gray-600 mb-1.5 uppercase tracking-wider">Title</label>
                      <select value={form.title} onChange={(e) => setForm({...form, title: e.target.value})} className="w-full border border-gray-200 bg-gray-50 rounded-lg px-3 py-2.5 text-[13px] focus:outline-none focus:border-[#5A153C] focus:ring-2 focus:ring-[#5A153C]/15 transition-all appearance-none cursor-pointer">
                        <option>Mr.</option>
                        <option>Ms.</option>
                        <option>Mrs.</option>
                        <option>Dr.</option>
                        <option>Prof.</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-gray-600 mb-1.5 uppercase tracking-wider">Full Name</label>
                      <input required type="text" value={form.fullName} onChange={(e) => setForm({...form, fullName: e.target.value})} placeholder="First  Middle  Last" className="w-full border border-gray-200 bg-gray-50 rounded-lg px-3 py-2.5 text-[13px] focus:outline-none focus:border-[#5A153C] focus:ring-2 focus:ring-[#5A153C]/15 transition-all" />
                      <p className="text-[10px] text-gray-400 mt-1 leading-tight">Write your first, middle and last name.</p>
                    </div>
                  </div>

                  {/* Row 2: Email + Phone */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-bold text-gray-600 mb-1.5 uppercase tracking-wider">Email</label>
                      <input required type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} placeholder="you@example.com" className="w-full border border-gray-200 bg-gray-50 rounded-lg px-3 py-2.5 text-[13px] focus:outline-none focus:border-[#5A153C] focus:ring-2 focus:ring-[#5A153C]/15 transition-all" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-gray-600 mb-1.5 uppercase tracking-wider">Phone</label>
                      <input type="tel" value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} placeholder="+251 ..." className="w-full border border-gray-200 bg-gray-50 rounded-lg px-3 py-2.5 text-[13px] focus:outline-none focus:border-[#5A153C] focus:ring-2 focus:ring-[#5A153C]/15 transition-all" />
                    </div>
                  </div>

                  {/* Row 3: Institution + Role */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-bold text-gray-600 mb-1.5 uppercase tracking-wider">
                        Institution <span className="text-gray-400 normal-case font-normal">(optional)</span>
                      </label>
                      <input type="text" value={form.institution} onChange={(e) => setForm({...form, institution: e.target.value})} placeholder="University / Organization" className="w-full border border-gray-200 bg-gray-50 rounded-lg px-3 py-2.5 text-[13px] focus:outline-none focus:border-[#5A153C] focus:ring-2 focus:ring-[#5A153C]/15 transition-all" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-gray-600 mb-1.5 uppercase tracking-wider">Primary Role</label>
                      <select value={form.role} onChange={(e) => setForm({...form, role: e.target.value})} className="w-full border border-gray-200 bg-gray-50 rounded-lg px-3 py-2.5 text-[13px] focus:outline-none focus:border-[#5A153C] focus:ring-2 focus:ring-[#5A153C]/15 transition-all appearance-none cursor-pointer">
                        <option>Researcher</option>
                        <option>Author</option>
                        <option>Reviewer</option>
                        <option>Librarian</option>
                        <option>Student</option>
                        <option>General Public</option>
                      </select>
                    </div>
                  </div>

                  <button type="submit" className="group w-full bg-gradient-to-r from-[#5A153C] to-[#8B2A5E] text-white py-3 rounded-lg font-bold text-[13px] hover:from-[#3D0F26] hover:to-[#5A153C] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 mt-2">
                    Submit application <ArrowRightOutlined className="text-[10px] group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-12 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="relative bg-[#5A153C] rounded-2xl overflow-hidden px-6 py-10 md:px-12 md:py-12">
            <div className="absolute inset-0 bg-[linear-gradient(120deg,#5A153C_0%,#3D0F26_100%)]"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-400/20 rounded-full blur-3xl"></div>

            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="max-w-xl text-center md:text-left">
                <h2 className="text-[24px] md:text-[30px] font-serif font-bold text-white mb-2 leading-tight">
                  Find the knowledge—and the people—to move your work forward.
                </h2>
                <p className="text-[13.5px] text-[#E8C5D6]">Get in touch with our team for support, partnerships, or general inquiries.</p>
              </div>
              <div className="flex gap-3 shrink-0">
                <button className="group bg-white text-[#5A153C] px-6 py-3 rounded-lg font-bold text-[13px] hover:bg-gray-100 transition-all hover:-translate-y-0.5 shadow-lg flex items-center gap-2">
                  Explore ORA <ArrowRightOutlined className="text-[10px] group-hover:translate-x-1 transition-transform" />
                </button>
                <a href="#contact" className="border border-white/30 text-white px-6 py-3 rounded-lg font-bold text-[13px] hover:bg-white/10 transition-all hover:-translate-y-0.5">
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomeFooter />
    </div>
  );
}