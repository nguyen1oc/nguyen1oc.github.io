import React from 'react';
import { PROJECTS } from '../data/portfolioData';
import { FolderGit2, ExternalLink, Calendar, Sparkles } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-indigo-100/70 text-indigo-700">
            <FolderGit2 className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-lg md:text-xl font-extrabold text-navy-950 tracking-tight">
              Dự Án Tiêu Biểu (Featured Projects)
            </h2>
            <p className="text-xs text-slate-500 font-medium">
              Multi-Agent Booking System & Nghiên cứu Học đối kháng Siêu phân giải khuôn mặt
            </p>
          </div>
        </div>
        <span className="text-xs font-semibold text-slate-400">
          {PROJECTS.length} dự án
        </span>
      </div>

      <div className="grid grid-cols-1 gap-5">
        {PROJECTS.map((proj, idx) => (
          <div
            key={idx}
            className="p-5 md:p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-blue-300 hover:shadow-lg transition-all space-y-5 group"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="text-lg md:text-xl font-extrabold text-navy-950 group-hover:text-blue-700 transition-colors">
                    {proj.title}
                  </h3>
                  {proj.badge && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                      {proj.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs md:text-sm font-medium text-slate-500">
                  {proj.subtitle}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <span className="flex items-center gap-1 text-xs text-slate-400 font-medium">
                  <Calendar className="w-3.5 h-3.5" />
                  {proj.period}
                </span>
                {proj.demoUrl && (
                  <a
                    href={proj.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-navy-950 hover:bg-blue-700 text-white text-xs font-semibold transition-all shadow-sm hover:shadow"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-normal">
              {proj.description}
            </p>

            {/* Stats Metrics Cards */}
            {proj.stats && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {proj.stats.map((s, sIdx) => (
                  <div key={sIdx} className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/70 space-y-0.5">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">{s.label}</p>
                    <p className="text-xs font-bold text-navy-950">{s.value}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Technical Highlights Callout */}
            <div className="p-4 rounded-2xl bg-blue-50/40 border border-blue-100/80 space-y-2.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-navy-950 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>Kiến trúc & Điểm nhấn Kỹ thuật</span>
              </div>
              <ul className="space-y-2">
                {proj.highlights.map((hl, hIdx) => (
                  <li key={hIdx} className="text-xs md:text-sm text-slate-700 flex items-start gap-2.5 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {proj.techStack.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 rounded-lg bg-slate-100/90 text-slate-800 text-[11px] font-mono font-medium border border-slate-200/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
