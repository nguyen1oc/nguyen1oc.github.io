import React, { useState } from 'react';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, TECH_CATEGORIES } from '../data/portfolioData';
import { X, Download, Printer, Copy, Check, FileText, GraduationCap, Briefcase, Code } from 'lucide-react';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyMarkdown = () => {
    const cvText = `# ${PERSONAL_INFO.fullName} - ${PERSONAL_INFO.title}
Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone} | GitHub: ${PERSONAL_INFO.github} | Location: ${PERSONAL_INFO.location}

## SUMMARY
${PERSONAL_INFO.bio}

## EDUCATION
${PERSONAL_INFO.education.school} - ${PERSONAL_INFO.education.degree} (${PERSONAL_INFO.education.period})
${PERSONAL_INFO.education.honors}

## EXPERIENCE
${EXPERIENCES.map((e) => `### ${e.role} | ${e.company} (${e.period})\n${e.points.map((p) => `- ${p}`).join('\n')}`).join('\n\n')}

## PROJECTS
${PROJECTS.map((p) => `### ${p.title}\n${p.description}\nTech Stack: ${p.techStack.join(', ')}`).join('\n\n')}

## SKILLS
${TECH_CATEGORIES.map((c) => `${c.category}: ${c.skills.join(', ')}`).join('\n')}
`;

    navigator.clipboard.writeText(cvText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Container */}
      <div className="relative w-full max-w-3xl bg-[#141414] text-zinc-200 rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col max-h-[92vh]">
        {/* Header Bar */}
        <div className="p-4 sm:p-5 border-b border-white/[0.08] flex items-center justify-between bg-[#181818]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-white/[0.06] text-white border border-white/10">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                Curriculum Vitae (CV / Resume)
              </h3>
              <p className="text-xs text-zinc-400 font-medium">
                {PERSONAL_INFO.fullName} — {PERSONAL_INFO.title}
              </p>
            </div>
          </div>

          {/* Action Tools */}
          <div className="flex items-center gap-2">
            {/* Direct PDF Download Link */}
            <a
              href="/cv/NguyenThienLoc_Resume.pdf"
              download="NguyenThienLoc_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#cae8bd] hover:bg-[#d8f2cd] text-zinc-950 text-xs font-semibold shadow-xs transition-all cursor-pointer"
              title="Tải trực tiếp file PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Tải file PDF</span>
            </a>

            <button
              onClick={handleCopyMarkdown}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.04] hover:bg-white/[0.08] text-xs font-medium text-zinc-300 transition-all cursor-pointer"
              title="Sao chép toàn bộ văn bản CV"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Đã sao chép' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.04] hover:bg-white/[0.08] text-xs font-medium text-zinc-300 transition-all cursor-pointer"
              title="In hoặc Lưu PDF"
            >
              <Printer className="w-3.5 h-3.5 text-zinc-400" />
              <span>In A4</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-all cursor-pointer"
              title="Đóng"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable CV Document Body */}
        <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar space-y-6 text-zinc-300 text-xs sm:text-sm">
          {/* Header Info */}
          <div className="border-b border-white/[0.08] pb-5 space-y-1 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              {PERSONAL_INFO.fullName}
            </h1>
            <p className="text-sm font-semibold text-zinc-400">{PERSONAL_INFO.title}</p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-2 text-xs text-zinc-500 font-mono">
              <span>{PERSONAL_INFO.phone}</span>
              <span>•</span>
              <span>{PERSONAL_INFO.email}</span>
              <span>•</span>
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-1.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 border-b border-white/[0.06] pb-1">
              SUMMARY
            </h4>
            <p className="text-xs text-zinc-300 leading-relaxed font-normal">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 border-b border-white/[0.06] pb-1 flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-zinc-400" />
              <span>EDUCATION</span>
            </h4>
            <div className="flex justify-between items-start text-xs">
              <div>
                <p className="font-bold text-white">{PERSONAL_INFO.education.school}</p>
                <p className="text-zinc-400 italic">{PERSONAL_INFO.education.degree}</p>
                <p className="text-zinc-300 font-medium mt-0.5">{PERSONAL_INFO.education.honors}</p>
              </div>
              <span className="text-zinc-500 font-mono">{PERSONAL_INFO.education.period}</span>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 border-b border-white/[0.06] pb-1 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-zinc-400" />
              <span>EXPERIENCE</span>
            </h4>
            <div className="space-y-4">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="space-y-1.5 text-xs">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold text-white">{exp.company}</p>
                      <p className="text-zinc-400 italic font-medium">{exp.role}</p>
                    </div>
                    <span className="text-zinc-500 font-mono text-right">{exp.period}</span>
                  </div>
                  <ul className="list-disc pl-4 space-y-1 text-zinc-400 leading-relaxed">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 border-b border-white/[0.06] pb-1 flex items-center gap-1.5">
              <Code className="w-3.5 h-3.5 text-zinc-400" />
              <span>PROJECTS</span>
            </h4>
            <div className="space-y-3">
              {PROJECTS.map((proj, idx) => (
                <div key={idx} className="space-y-1 text-xs">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-white">{proj.title}</span>
                    <span className="text-zinc-500 font-mono">{proj.period}</span>
                  </div>
                  <p className="text-zinc-400">{proj.description}</p>
                  <p className="text-zinc-500 font-mono text-[11px]">
                    Stack: {proj.techStack.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-white/[0.08] bg-[#181818] flex items-center justify-between">
          <span className="text-xs text-zinc-500">
            Đặt file PDF vào <code className="text-zinc-300 font-mono">public/cv/NguyenThienLoc_Resume.pdf</code> để tự động tải.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.06] hover:bg-white/[0.12] text-xs font-medium text-white transition-all cursor-pointer"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
