import React, { useState } from 'react';
import { 
  PERSONAL_INFO, 
  TECH_CATEGORIES, 
  EXPERIENCES, 
  PHOTOS, 
  MOVIES, 
  ARTISTS, 
  PhotoItem, 
  MovieItem, 
  ArtistItem 
} from './data/portfolioData';
import { 
  Home, 
  Layers, 
  Briefcase, 
  Camera, 
  Film, 
  Disc3, 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  Facebook, 
  Download, 
  Check, 
  Copy, 
  ArrowUpRight, 
  X, 
  Play, 
  Pause, 
  Send, 
  CheckCircle2, 
  ExternalLink,
  MapPin,
  ArrowDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp
} from 'lucide-react';
import { CVModal } from './components/CVModal';

export const App: React.FC = () => {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const [selectedArtist, setSelectedArtist] = useState<ArtistItem | null>(null);
  const [isVinylSpinning, setIsVinylSpinning] = useState(true);

  // Hidden content until "See more" or Dock icon clicked
  const [isContentRevealed, setIsContentRevealed] = useState(false);
  
  // Pagination States (8 items per page for Movies and Music)
  const [moviePage, setMoviePage] = useState(0);
  const [musicPage, setMusicPage] = useState(0);
  const MOVIES_PER_PAGE = 8;
  const ARTISTS_PER_PAGE = 8;

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [photoErrors, setPhotoErrors] = useState<Record<string, boolean>>({});
  const [movieErrors, setMovieErrors] = useState<Record<string, boolean>>({});
  const [artistErrors, setArtistErrors] = useState<Record<string, boolean>>({});

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

  const handleRevealAndScroll = (sectionId: string) => {
    setIsContentRevealed(true);
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleScrollToHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getPhotoSrc = (photo: PhotoItem) => {
    return photoErrors[photo.id] ? photo.fallbackUrl : photo.localPath;
  };

  const getMovieSrc = (movie: MovieItem) => {
    return movieErrors[movie.id] ? movie.fallbackUrl : movie.localPath;
  };

  const getArtistSrc = (artist: ArtistItem) => {
    return artistErrors[artist.id] ? artist.avatarUrl : artist.localPath;
  };

  // Movie pagination slices
  const totalMoviePages = Math.ceil(MOVIES.length / MOVIES_PER_PAGE);
  const paginatedMovies = MOVIES.slice(
    moviePage * MOVIES_PER_PAGE,
    (moviePage + 1) * MOVIES_PER_PAGE
  );

  // Artist pagination slices
  const totalMusicPages = Math.ceil(ARTISTS.length / ARTISTS_PER_PAGE);
  const paginatedArtists = ARTISTS.slice(
    musicPage * ARTISTS_PER_PAGE,
    (musicPage + 1) * ARTISTS_PER_PAGE
  );

  // Marquee items
  const marqueePhotos = [...PHOTOS, ...PHOTOS, ...PHOTOS];
  const allTechSkills = [
    'Python', 'PyTorch', 'LangGraph', 'Model Context Protocol (MCP)', 
    'Agent-to-Agent (A2A)', 'RAG', 'AI Guardrails', 'FastAPI', 
    'PostgreSQL', 'Qdrant', 'Google Cloud (GCP)', 'Terraform', 'Docker'
  ];
  const marqueeTech = [...allTechSkills, ...allTechSkills, ...allTechSkills];

  return (
    <div className="min-h-screen bg-[#000000] text-zinc-300 selection:bg-[#cae8bd] selection:text-black font-sans antialiased">
      
      {/* ========================================================
          TOP FLOATING DOCK (100% Perfect Center)
      ======================================================== */}
      <header className="fixed top-5 inset-x-0 flex justify-center z-50 pointer-events-none px-4">
        <nav className="pointer-events-auto flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#121212]/90 backdrop-blur-md border border-white/[0.1] shadow-2xl text-zinc-400 animate-fade-in-down">
          <button 
            onClick={handleScrollToHome}
            className="p-2.5 rounded-full hover:text-white hover:bg-white/[0.08] transition-all cursor-pointer"
            title="Home"
          >
            <Home className="w-5 h-5" />
          </button>
          <button 
            onClick={() => handleRevealAndScroll('about')}
            className="p-2.5 rounded-full hover:text-white hover:bg-white/[0.08] transition-all cursor-pointer"
            title="About"
          >
            <Layers className="w-5 h-5" />
          </button>
          <button 
            onClick={() => handleRevealAndScroll('experience')}
            className="p-2.5 rounded-full hover:text-white hover:bg-white/[0.08] transition-all cursor-pointer"
            title="Experience"
          >
            <Briefcase className="w-5 h-5" />
          </button>
          <button 
            onClick={() => handleRevealAndScroll('photography')}
            className="p-2.5 rounded-full hover:text-white hover:bg-white/[0.08] transition-all cursor-pointer"
            title="Photography"
          >
            <Camera className="w-5 h-5" />
          </button>
          <button 
            onClick={() => handleRevealAndScroll('movie')}
            className="p-2.5 rounded-full hover:text-white hover:bg-white/[0.08] transition-all cursor-pointer"
            title="Movie"
          >
            <Film className="w-5 h-5" />
          </button>
          <button 
            onClick={() => handleRevealAndScroll('music')}
            className="p-2.5 rounded-full hover:text-white hover:bg-white/[0.08] transition-all cursor-pointer"
            title="Music"
          >
            <Disc3 className="w-5 h-5" />
          </button>
          <button 
            onClick={() => handleRevealAndScroll('contact')}
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
            onClick={() => handleRevealAndScroll('about')}
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
          MAIN VERTICAL CONTENT SECTIONS (Revealed with Smooth Animation)
      ======================================================== */}
      {isContentRevealed && (
        <div className="max-w-[840px] mx-auto px-5 sm:px-8 py-12 space-y-24 animate-reveal-content">
          
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
              TRANSITION STATEMENT (Between Experience & Passions)
          ======================================================== */}
          <div className="py-6 text-center max-w-2xl mx-auto px-4">
            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#151515] to-[#101010] border border-white/[0.06] space-y-3 relative shadow-xl">
              <p className="font-serif italic text-base sm:text-lg text-zinc-300 leading-relaxed">
                "When I step away from neural networks and terminals, I observe the world through street photography, cinematic narratives, and music."
              </p>
              <div className="h-[1px] w-12 bg-white/20 mx-auto" />
            </div>
          </div>

          {/* ========================================================
              5/ STREET PHOTOGRAPH
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
              6/ MOVIE (20 Films, 8 per Page, Hover-Only Details, No Rating)
          ======================================================== */}
          <section id="movie" className="space-y-6 scroll-mt-28">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 flex-1">
                <span className="text-sm font-mono text-zinc-500 font-bold">6/</span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-tight text-white">Movie</h2>
                <div className="h-[1px] bg-white/[0.08] flex-1" />
              </div>

              {/* Pagination Controls */}
              <div className="flex items-center gap-2 ml-4">
                <span className="text-xs text-zinc-500 font-mono">
                  {moviePage + 1} / {totalMoviePages}
                </span>
                <div className="flex items-center gap-1">
                  <button
                    disabled={moviePage === 0}
                    onClick={() => setMoviePage((prev) => Math.max(0, prev - 1))}
                    className="p-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                    title="Previous Page"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    disabled={moviePage === totalMoviePages - 1}
                    onClick={() => setMoviePage((prev) => Math.min(totalMoviePages - 1, prev + 1))}
                    className="p-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                    title="Next Page"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* 8 Movies Grid (4 cols x 2 rows) with Smooth Hover-Only Details */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              {paginatedMovies.map((movie) => (
                <div
                  key={movie.id}
                  className="group relative aspect-[2/3] rounded-3xl overflow-hidden bg-black border border-white/[0.08] hover:border-white/30 transition-all shadow-md cursor-default"
                >
                  {/* Poster Image */}
                  <img
                    src={getMovieSrc(movie)}
                    alt={movie.title}
                    onError={() => setMovieErrors((prev) => ({ ...prev, [movie.id]: true }))}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Always-visible subtle bottom title on mobile/default */}
                  <div className="absolute inset-x-0 bottom-0 p-2.5 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity">
                    <h4 className="text-xs font-semibold text-white truncate">{movie.title}</h4>
                    <p className="text-[10px] text-zinc-400">{movie.releaseYear}</p>
                  </div>

                  {/* Hover-Only Rich Overlay */}
                  <div className="absolute inset-0 bg-black/90 backdrop-blur-xs p-4 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-blue-400 uppercase tracking-wider">{movie.category}</span>
                      <h4 className="text-sm font-bold leading-tight">{movie.title}</h4>
                      <p className="text-[11px] text-zinc-400">{movie.releaseYear} • {movie.director}</p>
                    </div>

                    {movie.quote && (
                      <p className="text-[11px] text-zinc-300 italic border-l-2 border-white/20 pl-2 leading-relaxed">
                        "{movie.quote}"
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ========================================================
              7/ MUSIC (4 x 2 = 8 Grid with Pagination + 360° Spinning Vinyl)
          ======================================================== */}
          <section id="music" className="space-y-6 scroll-mt-28">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 flex-1">
                <span className="text-sm font-mono text-zinc-500 font-bold">7/</span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-tight text-white">Music</h2>
                <div className="h-[1px] bg-white/[0.08] flex-1" />
              </div>

              {/* Pagination Controls */}
              <div className="flex items-center gap-2 ml-4">
                <span className="text-xs text-zinc-500 font-mono">
                  {musicPage + 1} / {totalMusicPages}
                </span>
                <div className="flex items-center gap-1">
                  <button
                    disabled={musicPage === 0}
                    onClick={() => setMusicPage((prev) => Math.max(0, prev - 1))}
                    className="p-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                    title="Previous Page"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    disabled={musicPage === totalMusicPages - 1}
                    onClick={() => setMusicPage((prev) => Math.min(totalMusicPages - 1, prev + 1))}
                    className="p-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                    title="Next Page"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* 4 x 2 = 8 Artists Grid */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#121212] border border-white/[0.08] shadow-lg">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
                {paginatedArtists.map((artist) => (
                  <div
                    key={artist.id}
                    onClick={() => {
                      setSelectedArtist(artist);
                      setIsVinylSpinning(true);
                    }}
                    className="group flex flex-col items-center cursor-pointer space-y-2.5 text-center"
                  >
                    <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full p-0.5 ring-1 ring-white/10 group-hover:ring-[#cae8bd] group-hover:scale-105 transition-all duration-300 relative shadow-md">
                      <div className="w-full h-full rounded-full overflow-hidden bg-black">
                        <img
                          src={getArtistSrc(artist)}
                          alt={artist.name}
                          onError={() => setArtistErrors((prev) => ({ ...prev, [artist.id]: true }))}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                        <Play className="w-4 h-4 fill-white" />
                      </div>
                    </div>

                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors">
                        {artist.name}
                      </p>
                      <p className="text-[10px] text-zinc-500 max-w-[90px] truncate mx-auto">
                        {artist.genre.split('/')[0]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ========================================================
              9/ LET'S WORK TOGETHER (Exact Work Together Style)
          ======================================================== */}
          <section id="contact" className="space-y-6 pt-6 scroll-mt-28">
            <div className="flex items-center gap-4">
              <span className="text-sm font-mono text-zinc-500 font-bold">9/</span>
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
                  className="p-3.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-zinc-300 hover:text-white border border-white/[0.08] transition-all"
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
                      className="mt-2 px-4 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-semibold"
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
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-white/[0.08] hover:bg-white/[0.15] text-white border border-white/[0.1] text-xs font-semibold transition-all active:scale-[0.99]"
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
              className="text-xs text-zinc-500 hover:text-white inline-flex items-center gap-1 transition-colors"
            >
              <span>Back to Top</span>
              <ChevronUp className="w-3.5 h-3.5" />
            </button>
          </footer>
        </div>
      )}

      {/* ========================================================
          MODALS
      ======================================================== */}

      {/* MODAL 1: PHOTO LIGHTBOX */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn">
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative w-full max-w-2xl bg-[#141414] text-zinc-200 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/10 max-h-[90vh]">
            <div className="md:w-1/2 bg-black flex items-center justify-center p-2">
              <img
                src={getPhotoSrc(selectedPhoto)}
                alt={selectedPhoto.title}
                className="max-h-[55vh] md:max-h-[75vh] w-auto max-w-full object-contain"
              />
            </div>
            <div className="md:w-1/2 p-6 sm:p-7 overflow-y-auto custom-scrollbar space-y-3.5">
              <div className="flex items-center justify-between text-xs text-zinc-500">
                <span className="font-semibold text-white bg-white/[0.06] px-2.5 py-0.5 rounded-full border border-white/10">
                  {selectedPhoto.location}
                </span>
                <span className="font-mono">{selectedPhoto.year}</span>
              </div>
              <h3 className="text-lg font-bold text-white">{selectedPhoto.title}</h3>
              <p className="text-xs text-zinc-300 italic bg-white/[0.03] p-3 rounded-2xl border border-white/[0.06] leading-relaxed">
                "{selectedPhoto.caption}"
              </p>
              <p className="text-xs text-zinc-400 leading-relaxed">{selectedPhoto.story}</p>
              <p className="pt-2 border-t border-white/[0.06] text-[11px] text-zinc-500 font-mono">
                📷 {selectedPhoto.cameraInfo}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: SPOTIFY VINYL RECORD PLAYER */}
      {selectedArtist && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn">
          <button
            onClick={() => setSelectedArtist(null)}
            className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative w-full max-w-xl bg-[#141414] text-zinc-200 rounded-3xl overflow-hidden shadow-2xl border border-white/10 p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 max-h-[90vh] overflow-y-auto custom-scrollbar">
            
            {/* Spinning Vinyl */}
            <div className="flex flex-col items-center gap-3 shrink-0">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 flex items-center justify-center">
                <div
                  className={`w-full h-full rounded-full bg-gradient-to-tr from-black via-zinc-900 to-black p-2 shadow-2xl ring-2 ring-white/10 ${
                    isVinylSpinning ? 'animate-spin-slow' : 'animate-spin-slow-paused'
                  }`}
                  style={{
                    backgroundImage: `radial-gradient(circle, transparent 30%, rgba(255,255,255,0.05) 31%, transparent 32%, transparent 45%, rgba(255,255,255,0.05) 46%, transparent 47%, transparent 60%, rgba(255,255,255,0.04) 61%, transparent 62%)`,
                  }}
                >
                  <div className="w-full h-full rounded-full flex items-center justify-center overflow-hidden relative border border-zinc-800">
                    <img
                      src={getArtistSrc(selectedArtist)}
                      alt={selectedArtist.name}
                      className="w-18 h-18 sm:w-22 sm:h-22 rounded-full object-cover ring-1 ring-white/30"
                    />
                    <div className="absolute w-3.5 h-3.5 rounded-full bg-white ring-2 ring-black"></div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsVinylSpinning(!isVinylSpinning)}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[11px] font-medium text-zinc-300"
              >
                {isVinylSpinning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 fill-zinc-300" />}
                <span>{isVinylSpinning ? 'Pause' : 'Spin'}</span>
              </button>
            </div>

            {/* Tracklist */}
            <div className="w-full space-y-3.5">
              <div>
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">{selectedArtist.genre}</span>
                <h3 className="text-xl font-bold text-white">{selectedArtist.name}</h3>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed">{selectedArtist.bio}</p>

              <div className="space-y-1.5 pt-2 border-t border-white/[0.06]">
                <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">Top Tracks</p>
                {selectedArtist.topTracks.map((song, sIdx) => (
                  <a
                    key={sIdx}
                    href={song.youtubeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] text-xs font-medium text-zinc-200 transition-all"
                  >
                    <span>{sIdx + 1}. {song.title}</span>
                    <span className="text-[10px] text-blue-400 flex items-center gap-1">
                      Play on YouTube <ExternalLink className="w-2.5 h-2.5" />
                    </span>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* CV Modal */}
      <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
    </div>
  );
};

export default App;
