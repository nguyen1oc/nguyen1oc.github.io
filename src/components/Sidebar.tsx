import React, { useState } from 'react';
import { PERSONAL_INFO, TECH_CATEGORIES } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Github, 
  Linkedin, 
  Download, 
  Check, 
  Copy, 
  ExternalLink,
  GraduationCap
} from 'lucide-react';

interface SidebarProps {
  onOpenCVModal: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onOpenCVModal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [imgSrc, setImgSrc] = useState(PERSONAL_INFO.avatarLocalPath);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <aside className="w-full lg:w-[340px] xl:w-[360px] shrink-0 bg-white border-b lg:border-b-0 lg:border-r border-slate-200/80 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto custom-scrollbar p-6 lg:p-8 flex flex-col justify-between select-none">
      <div className="space-y-6">
        {/* Profile Card */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Avatar with subtle minimal frame */}
          <div className="relative group mb-5">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden bg-slate-100 ring-1 ring-slate-200 shadow-sm transition-all duration-300 group-hover:ring-slate-400">
              <img 
                src={imgSrc} 
                alt={PERSONAL_INFO.fullName}
                onError={() => setImgSrc(PERSONAL_INFO.avatarFallbackUrl)}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Location / Status Dot */}
            <div className="absolute -bottom-2 left-1/2 lg:left-3 -translate-x-1/2 lg:translate-x-0 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-[11px] font-medium text-slate-700 shadow-xs">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Sài Gòn, VN</span>
            </div>
          </div>

          {/* Name & Title */}
          <div className="w-full mt-2">
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight font-sans">
              {PERSONAL_INFO.fullName}
            </h1>
            <p className="text-sm font-medium text-blue-700 mt-0.5">
              {PERSONAL_INFO.title}
            </p>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
              {PERSONAL_INFO.focus}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
          <button
            onClick={onOpenCVModal}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-medium transition-all shadow-xs hover:shadow hover:-translate-y-0.5 active:translate-y-0"
          >
            <Download className="w-4 h-4 text-slate-300" />
            <span>Xem Resume (CV)</span>
          </button>
          
          <a
            href="#contact"
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs sm:text-sm font-medium transition-all border border-slate-200"
          >
            <Mail className="w-4 h-4 text-slate-500" />
            <span>Gửi lời nhắn</span>
          </a>
        </div>

        {/* Contact Info Card */}
        <div className="p-4 rounded-xl bg-slate-50/70 border border-slate-200/70 space-y-2.5 text-xs text-slate-700">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-slate-500">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              Ngày sinh
            </span>
            <span className="font-medium text-slate-900">{PERSONAL_INFO.dob}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-slate-500">
              <Phone className="w-3.5 h-3.5 text-slate-400" />
              Điện thoại
            </span>
            <a 
              href={`tel:${PERSONAL_INFO.phone.replace(/\s/g, '')}`} 
              className="font-medium text-slate-900 hover:text-blue-600 transition-colors"
            >
              {PERSONAL_INFO.phone}
            </a>
          </div>

          <div className="flex items-center justify-between gap-2">
            <span className="flex items-center gap-2 text-slate-500 shrink-0">
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              Email
            </span>
            <div className="flex items-center gap-1 min-w-0">
              <span className="font-medium text-slate-900 truncate" title={PERSONAL_INFO.email}>
                {PERSONAL_INFO.email}
              </span>
              <button 
                onClick={handleCopyEmail}
                className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-all shrink-0"
                title="Sao chép Email"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              Địa chỉ
            </span>
            <span className="font-medium text-slate-900">{PERSONAL_INFO.location}</span>
          </div>

          <div className="flex items-center justify-between pt-1.5 border-t border-slate-200">
            <span className="flex items-center gap-2 text-slate-500">
              <GraduationCap className="w-3.5 h-3.5 text-slate-400" />
              Học vấn
            </span>
            <span className="font-medium text-slate-900">HCMUT (Bách Khoa)</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-2">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-white border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-950 text-xs font-medium transition-all hover:bg-slate-50"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-white border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-blue-700 text-xs font-medium transition-all hover:bg-slate-50"
          >
            <Linkedin className="w-3.5 h-3.5 text-blue-600" />
            <span>LinkedIn</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
        </div>

        {/* Tech Stack */}
        <div className="space-y-3 pt-2">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Kỹ năng & Công cụ
          </p>

          <div className="space-y-3">
            {TECH_CATEGORIES.map((cat, idx) => (
              <div key={idx} className="space-y-1.5">
                <p className="text-[11px] font-semibold text-slate-500">
                  {cat.category}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded-md bg-slate-100/90 text-slate-800 text-[11px] font-medium border border-slate-200/60 hover:bg-slate-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 pt-4 border-t border-slate-100 text-center lg:text-left text-[11px] text-slate-400">
        © {new Date().getFullYear()} {PERSONAL_INFO.fullName}.
      </div>
    </aside>
  );
};
