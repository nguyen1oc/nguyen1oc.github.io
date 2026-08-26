import React, { useState } from 'react';
import { 
  PERSONAL_INFO, 
  TECH_CATEGORIES, 
  EXPERIENCES, 
  PROJECTS,
  PHOTOS, 
  PhotoItem
} from './data/portfolioData';
import { 
  Home, 
  Layers, 
  Briefcase, 
  FolderGit2,
  Camera, 
  Mail, 
  Github, 
  Linkedin, 
  Facebook, 
  Download, 
  Check, 
  Copy, 
  X, 
  Send, 
  CheckCircle2, 
  ExternalLink, 
  ArrowDown, 
  ChevronUp
} from 'lucide-react';
import { CVModal } from './components/CVModal';

export const App: React.FC = () => {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [photoErrors, setPhotoErrors] = useState<Record<string, boolean>>({});

  // Contact Form State
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setSendSuccess(true);
      const mailto = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        `[Portfolio] ${contactForm.subject || 'Collaboration & Work Together'}`
      )}&body=${encodeURIComponent(
        `Hi Loc,\n\nName: ${contactForm.name}\nEmail: ${contactForm.email}\n\nMessage:\n${contactForm.message}\n\nBest regards,`
      )}`;
      window.location.href = mailto;
    }, 600);
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getPhotoSrc = (photo: PhotoItem) => {
    return photoErrors[photo.id] ? photo.fallbackUrl : photo.localPath;
  };

  // Categories list with counts
  const categories = ['All', 'Agents & LLMs', 'Computer Vision', 'Data & Software'];
  
  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  // Marquee items
  const marqueePhotos = [...PHOTOS, ...PHOTOS, ...PHOTOS];
  const allTechSkills = [
    'Python', 'PyTorch', 'LangGraph', 'Model Context Protocol (MCP)', 
    'Agent-to-Agent (A2A)', 'Hybrid RAG', 'AI Guardrails', 'FastAPI', 
    'PostgreSQL', 'Qdrant', 'Google Cloud (GCP)', 'Terraform', 'Docker'
  ];
  const marqueeTech = [...allTechSkills, ...allTechSkills, ...allTechSkills];

  return (
    <div className="min-h-screen bg-[#000000] text-zinc-300 selection:bg-[#cae8bd] selection:text-black font-sans antialiased">
      
      {/* ========================================================
          TOP FLOATING DOCK (100% Perfect Center)
      ======================================================== */}
      <header className="fixed top-5 inset-x-0 flex justify-center z-50 pointer-events-none px-4">
        <nav className="pointer-events-auto flex items-center gap-1.5 sm:gap-2 px-4 py-2.5 rounded-full bg-[#121212]/90 backdrop-blur-md border border-white/[0.1] shadow-2xl text-zinc-400 animate-fade-in-down">
          <button 
            onClick={handleScrollToHome}
            className="p-2.5 rounded-full hover:text-white hover:bg-white/[0.08] transition-all cursor-pointer"
            title="Home"
          >
            <Home className="w-5 h-5" />
          </button>
          <button 
            onClick={() => handleScrollToSection('about')}
            className="p-2.5 rounded-full hover:text-white hover:bg-white/[0.08] transition-all cursor-pointer"
            title="About"
          >
            <Layers className="w-5 h-5" />
          </button>
          <button 
            onClick={() => handleScrollToSection('experience')}
            className="p-2.5 rounded-full hover:text-white hover:bg-white/[0.08] transition-all cursor-pointer"
            title="Experience"
          >
            <Briefcase className="w-5 h-5" />
          </button>
          <button 
            onClick={() => handleScrollToSection('projects')}
            className="p-2.5 rounded-full hover:text-white hover:bg-white/[0.08] transition-all cursor-pointer"
            title="Projects"
          >
            <FolderGit2 className="w-5 h-5" />
          </button>
          <button 
            onClick={() => handleScrollToSection('photography')}
            className="p-2.5 rounded-full hover:text-white hover:bg-white/[0.08] transition-all cursor-pointer"
            title="Photography"
          >
            <Camera className="w-5 h-5" />
          </button>
          <button 
            onClick={() => handleScrollToSection('contact')}
            className="p-2.5 rounded-full hover:text-white hover:bg-white/[0.08] transition-all cursor-pointer"
            title="Get in Touch"
          >
            <Mail className="w-5 h-5" />
          </button>
        </nav>
      </header>

      {/* ========================================================
          HERO SECTION (Large, Bold Editorial Header)
      ======================================================== */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-16 pb-12 relative overflow-hidden">
        
        {/* Slow Continuous Tech Stack Marquee (Animated Entrance) */}
        <div className="w-full max-w-2xl overflow-hidden py-3 mb-8 relative animate-fade-in-up delay-100 opacity-0 [animation-fill-mode:forwards]">
          <div className="animate-marquee-slow flex gap-3 items-center">
            {marqueeTech.map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-1.5 rounded-full bg-[#181818] border border-white/[0.08] text-zinc-300 text-xs font-medium whitespace-nowrap shadow-xs"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent pointer-events-none" />
        </div>

        {/* Editorial Headline */}
        <div className="max-w-4xl space-y-3 animate-fade-in-up delay-200 opacity-0 [animation-fill-mode:forwards]">
          <h1 className="font-serif tracking-tight leading-[1.08]">
            <span className="block text-white font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
              Nguyen Thien Loc
            </span>
            <span className="block text-zinc-400 font-normal text-3xl sm:text-5xl md:text-6xl lg:text-7xl pt-1">
              AI Engineer
            </span>
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base md:text-lg font-mono tracking-wider pt-4 font-normal animate-fade-in-up delay-300 opacity-0 [animation-fill-mode:forwards]">
            Senior from HCMUT.
          </p>
        </div>

        {/* Dual CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-10 animate-fade-in-up delay-400 opacity-0 [animation-fill-mode:forwards]">
          {/* Mint Glow 'See more' Button */}
          <button
            onClick={() => handleScrollToSection('about')}
            className="group px-8 py-3.5 rounded-full bg-[#cae8bd] hover:bg-[#d8f2cd] text-zinc-950 text-xs sm:text-sm font-semibold transition-all duration-300 animate-glow-pulse hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
          >
            <span>See more</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
          </button>

          {/* Dark Pill 'Download CV' Button */}
          <button
            onClick={() => setIsCVModalOpen(true)}
            className="px-8 py-3.5 rounded-full bg-[#181818] hover:bg-[#222222] text-white text-xs sm:text-sm font-medium border border-white/[0.1] transition-all hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer shadow-md"
          >
            <Download className="w-4 h-4 text-zinc-400" />
            <span>Download CV</span>
          </button>
        </div>

      </section>

      {/* ========================================================
          MAIN VERTICAL CONTENT SECTIONS (Always Visible & Smooth Scrollable)
      ======================================================== */}
      <div className="max-w-[840px] mx-auto px-5 sm:px-8 py-12 space-y-24">
          
          {/* ========================================================
              1/ ABOUT
          ======================================================== */}
          <section id="about" className="space-y-6 scroll-mt-28">
            <div className="flex items-center gap-4">
              <span className="text-sm font-mono text-zinc-500 font-bold">1/</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-tight text-white">About</h2>
              <div className="h-[1px] bg-white/[0.08] flex-1" />
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-[#121212] border border-white/[0.08] text-xs sm:text-sm md:text-base text-zinc-300 leading-relaxed space-y-3 shadow-lg">
              <p>
                I am a final-year Computer Science student at <strong>Ho Chi Minh City University of Technology (HCMUT)</strong>, specializing in engineering intelligent AI systems.
              </p>
              <p>
                My work focuses on <strong>LLM & Multi-Agent Architectures</strong> (LangGraph, MCP, Agent-to-Agent, Hybrid RAG), <strong>Cloud AI Infrastructure</strong> on GCP, and <strong>Deep Generative Models</strong> (Adversarial Training for Face Super-Resolution). I prioritize building reliable, maintainable software designed for production-grade scale.
              </p>
            </div>
          </section>

          {/* ========================================================
              2/ TECH (Single Line Title & Vertically Centered Alignment)
          ======================================================== */}
          <section id="tech" className="space-y-6 scroll-mt-28">
            <div className="flex items-center gap-4">
              <span className="text-sm font-mono text-zinc-500 font-bold">2/</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-tight text-white">Tech</h2>
              <div className="h-[1px] bg-white/[0.08] flex-1" />
            </div>

            <div className="rounded-3xl bg-[#121212] border border-white/[0.08] divide-y divide-white/[0.06] overflow-hidden shadow-lg">
              {TECH_CATEGORIES.map((cat, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-5 hover:bg-white/[0.02] transition-colors"
                >
                  {/* Category Title (Fixed Width, Single Line, Centered with Badges) */}
                  <div className="md:w-[260px] lg:w-[280px] shrink-0 flex items-center gap-3">
                    <span className="text-[10px] font-mono text-zinc-500 font-bold px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08]">
                      0{idx + 1}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-white whitespace-nowrap">
                      {cat.category}
                    </h3>
                  </div>

                  {/* Skills Pill Badges (Wrapped gracefully, title sits in vertical center) */}
                  <div className="flex-1 flex flex-wrap gap-2 md:justify-start">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 rounded-xl bg-black border border-white/[0.08] text-zinc-300 text-xs font-mono hover:border-white/20 hover:text-white transition-all shadow-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ========================================================
              3/ EXPERIENCE
          ======================================================== */}
          <section id="experience" className="space-y-6 scroll-mt-28">
            <div className="flex items-center gap-4">
              <span className="text-sm font-mono text-zinc-500 font-bold">3/</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-tight text-white">Experience</h2>
              <div className="h-[1px] bg-white/[0.08] flex-1" />
            </div>

            <div className="space-y-4">
              {EXPERIENCES.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-3xl bg-[#121212] border border-white/[0.08] hover:border-white/20 transition-all space-y-4 shadow-lg"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 border-b border-white/[0.06] pb-3">
                    <div>
                      <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                      <p className="text-xs sm:text-sm font-medium text-blue-400 pt-0.5">{exp.company}</p>
                    </div>
                    <span className="text-xs text-zinc-500 font-mono shrink-0">{exp.period}</span>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-sm text-zinc-400 list-disc list-inside marker:text-zinc-600 leading-relaxed">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx}>{pt}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {exp.skills.map((s, sIdx) => (
                      <span key={sIdx} className="text-[10px] px-2.5 py-0.5 rounded-md bg-white/[0.04] text-zinc-400 font-mono">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ========================================================
              4/ PROJECTS (Categorized & Sorted Chronologically)
          ======================================================== */}
          <section id="projects" className="space-y-6 scroll-mt-28">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 flex-1">
                <span className="text-sm font-mono text-zinc-500 font-bold">4/</span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-tight text-white">Projects</h2>
                <div className="h-[1px] bg-white/[0.08] flex-1" />
              </div>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2 pt-2">
              {categories.map((cat) => {
                const count = cat === 'All' 
                  ? PROJECTS.length 
                  : PROJECTS.filter((p) => p.category === cat).length;
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                      isActive
                        ? 'bg-[#cae8bd] text-zinc-950 shadow-md shadow-[#cae8bd]/10'
                        : 'bg-[#141414] hover:bg-[#1f1f1f] text-zinc-400 hover:text-white border border-white/[0.08]'
                    }`}
                  >
                    <span>{cat}</span>
                    <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                      isActive ? 'bg-black/20 text-zinc-950 font-bold' : 'bg-white/[0.06] text-zinc-400'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 gap-4 pt-2">
              {filteredProjects.map((proj, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-3xl bg-[#121212] border border-white/[0.08] hover:border-white/20 transition-all space-y-4 shadow-lg group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-white/[0.06] pb-4">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-bold text-white group-hover:text-[#cae8bd] transition-colors">
                          {proj.title}
                        </h3>
                        {proj.badge && (
                          <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-white/[0.06] text-zinc-300 border border-white/[0.08]">
                            {proj.badge}
                          </span>
                        )}
                      </div>
                      {proj.subtitle && (
                        <p className="text-xs text-zinc-400 font-medium">
                          {proj.subtitle}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-white/[0.04] text-zinc-400 border border-white/[0.06]">
                        {proj.category}
                      </span>
                      <span className="text-xs text-zinc-500 font-mono">
                        {proj.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {proj.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] px-2.5 py-1 rounded-lg bg-black border border-white/[0.08] text-zinc-400 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links Row */}
                  {(proj.githubUrl || proj.demoUrl) && (
                    <div className="pt-2 flex flex-wrap items-center gap-3 border-t border-white/[0.04]">
                      {proj.githubUrl && (
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-zinc-300 hover:text-white border border-white/[0.08] text-xs font-medium transition-all cursor-pointer"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>GitHub Repository</span>
                        </a>
                      )}
                      {proj.demoUrl && (
                        <a
                          href={proj.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#cae8bd]/15 hover:bg-[#cae8bd]/25 text-[#cae8bd] border border-[#cae8bd]/30 text-xs font-medium transition-all cursor-pointer"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* ========================================================
              TRANSITION STATEMENT (Between Projects & Photography)
          ======================================================== */}
          <div className="py-6 text-center max-w-2xl mx-auto px-4">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#121212] border border-white/[0.08] hover:border-white/20 transition-all duration-500 space-y-4 shadow-lg">
              <p className="font-serif italic text-base sm:text-xl text-zinc-300 leading-relaxed">
                "When I step away from neural networks and terminals, I observe the world through street photography."
              </p>
              <div className="h-[1px] w-12 bg-white/20 mx-auto" />
            </div>
          </div>

          {/* ========================================================
              5/ STREET PHOTOGRAPHY
          ======================================================== */}
          <section id="photography" className="space-y-6 scroll-mt-28">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 flex-1">
                <span className="text-sm font-mono text-zinc-500 font-bold">5/</span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-tight text-white">Street Photograph</h2>
                <div className="h-[1px] bg-white/[0.08] flex-1" />
              </div>
              <span className="text-[11px] text-zinc-500 ml-3">Hover to pause</span>
            </div>

            <div className="relative w-full overflow-hidden rounded-3xl py-4 bg-[#121212] border border-white/[0.08] shadow-lg">
              <div className="animate-marquee flex gap-4 items-center">
                {marqueePhotos.map((photo, pIdx) => (
                  <div
                    key={`${photo.id}-${pIdx}`}
                    onClick={() => setSelectedPhoto(photo)}
                    className="group relative flex-shrink-0 w-[180px] sm:w-[200px] aspect-[3/4] rounded-2xl overflow-hidden bg-black cursor-pointer shadow-md hover:scale-105 transition-transform duration-300 border border-white/10"
                  >
                    <img
                      src={getPhotoSrc(photo)}
                      alt={photo.title}
                      onError={() => setPhotoErrors((prev) => ({ ...prev, [photo.id]: true }))}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end text-white">
                      <p className="text-xs font-semibold truncate">{photo.title}</p>
                      <p className="text-[10px] text-zinc-400">{photo.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ========================================================
              6/ LET'S WORK TOGETHER
          ======================================================== */}
          <section id="contact" className="space-y-6 pt-6 scroll-mt-28">
            <div className="flex items-center gap-4">
              <span className="text-sm font-mono text-zinc-500 font-bold">6/</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-tight text-white">Let's Work Together</h2>
              <div className="h-[1px] bg-white/[0.08] flex-1" />
            </div>

            {/* Large Hero Work Together Card */}
            <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-[#161616] to-[#101010] border border-white/[0.08] text-center space-y-8 shadow-2xl relative overflow-hidden">
              
              <div className="max-w-xl mx-auto space-y-3">
                <h3 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                  Have an AI project or role in mind?
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  I'm actively looking for opportunities to contribute to cutting-edge AI systems, LLM architectures, and deep learning engineering. Let's create something meaningful together.
                </p>
              </div>

              {/* Direct Email Action Button */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent('[Work Opportunity] Collaboration Inquiry')}`}
                  className="px-8 py-3.5 rounded-full bg-white text-black hover:bg-zinc-200 text-xs sm:text-sm font-semibold transition-all shadow-lg active:scale-95 flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-black" />
                  <span>{PERSONAL_INFO.email}</span>
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-3.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-zinc-300 hover:text-white border border-white/[0.08] transition-all cursor-pointer"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Form Container */}
              <div className="pt-4 max-w-lg mx-auto text-left">
                {sendSuccess ? (
                  <div className="p-6 rounded-2xl bg-emerald-950/30 border border-emerald-800 text-center space-y-2">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                    <h4 className="text-sm font-bold text-emerald-200">Message Ready!</h4>
                    <p className="text-xs text-emerald-300">Your email client has been opened with your pre-filled note.</p>
                    <button
                      type="button"
                      onClick={() => setSendSuccess(false)}
                      className="mt-2 px-4 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-semibold cursor-pointer"
                    >
                      Send Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-3.5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl border border-white/[0.08] bg-black text-xs text-white focus:outline-none focus:border-white/30 placeholder:text-zinc-600"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Your Email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl border border-white/[0.08] bg-black text-xs text-white focus:outline-none focus:border-white/30 placeholder:text-zinc-600"
                      />
                    </div>

                    <input
                      type="text"
                      placeholder="Subject (e.g. AI Engineer Opening / Collaboration)"
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-white/[0.08] bg-black text-xs text-white focus:outline-none focus:border-white/30 placeholder:text-zinc-600"
                    />

                    <textarea
                      required
                      rows={4}
                      placeholder="Write a message..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-white/[0.08] bg-black text-xs text-white focus:outline-none focus:border-white/30 placeholder:text-zinc-600 resize-none"
                    />

                    <button
                      type="submit"
                      disabled={isSending}
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-white/[0.08] hover:bg-white/[0.15] text-white border border-white/[0.1] text-xs font-semibold transition-all active:scale-[0.99] cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5 text-zinc-300" />
                      <span>{isSending ? 'Preparing...' : 'Send Message'}</span>
                    </button>
                  </form>
                )}
              </div>

              {/* Social Links Row */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-center gap-4">
                <a
                  href={PERSONAL_INFO.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-zinc-400 hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <Facebook className="w-3.5 h-3.5" />
                  <span>Facebook</span>
                </a>
                <span className="text-zinc-700">•</span>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-zinc-400 hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <span className="text-zinc-700">•</span>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-zinc-400 hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>

            </div>
          </section>

          {/* Footer */}
          <footer className="pt-8 text-center text-xs text-zinc-600 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-2">
            <span>© {new Date().getFullYear()} {PERSONAL_INFO.fullName}. All rights reserved.</span>
            <button
              onClick={handleScrollToHome}
              className="text-xs text-zinc-500 hover:text-white inline-flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ChevronUp className="w-3.5 h-3.5" />
            </button>
          </footer>
        </div>

      {/* ========================================================
          MODALS
      ======================================================== */}

      {/* PHOTO LIGHTBOX (Pure Clean Image Zoom) */}
      {selectedPhoto && (
        <div 
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-md animate-fadeIn cursor-pointer"
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer shadow-lg"
            title="Close"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Large Clean Zoomed Image */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[92vh] flex items-center justify-center cursor-default animate-reveal-content"
          >
            <img
              src={getPhotoSrc(selectedPhoto)}
              alt="Zoomed photography"
              className="max-h-[90vh] max-w-full w-auto h-auto object-contain rounded-2xl shadow-2xl ring-1 ring-white/10"
            />
          </div>
        </div>
      )}

      {/* CV Modal */}
      <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
    </div>
  );
};

export default App;
