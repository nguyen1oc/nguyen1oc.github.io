import React, { useState } from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, Building, MapPin, Calendar, CheckCircle2, Award } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const filterOptions = ['All', 'Infrastructure', 'LLM & Agents', 'Computer Vision'];

  const filteredExperiences = activeFilter === 'All' 
    ? EXPERIENCES 
    : EXPERIENCES.filter(exp => exp.category === activeFilter);

  return (
    <section id="experience" className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-blue-100/70 text-blue-700">
            <Briefcase className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-lg md:text-xl font-extrabold text-navy-950 tracking-tight">
              Kinh Nghiệm & Đào Tạo Doanh Nghiệp
            </h2>
            <p className="text-xs text-slate-500 font-medium">
              Hành trình thực chiến tại VinUniversity, bTaskee, DFM & Grab
            </p>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 self-start sm:self-center overflow-x-auto hide-scrollbar py-1">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setActiveFilter(opt)}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
                activeFilter === opt
                  ? 'bg-navy-950 text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300'
              }`}
            >
              {opt === 'All' ? 'Tất cả' : opt}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {filteredExperiences.map((exp, idx) => (
          <div
            key={idx}
            className="p-5 md:p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-300 hover:shadow-md transition-all space-y-3.5"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base md:text-lg font-bold text-navy-950">
                    {exp.role}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200/60">
                    {exp.category}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-blue-700">
                  <Building className="w-3.5 h-3.5" />
                  <span>{exp.company}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-500 font-medium shrink-0">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  {exp.period}
                </span>
                <span className="hidden sm:inline text-slate-300">•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {exp.location}
                </span>
              </div>
            </div>

            {/* Highlight Banner */}
            {exp.highlight && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50/80 border border-amber-200/70 text-amber-900 text-xs font-semibold">
                <Award className="w-4 h-4 text-amber-600 shrink-0" />
                <span>{exp.highlight}</span>
              </div>
            )}

            {/* Bullet Points */}
            <ul className="space-y-2">
              {exp.points.map((pt, pIdx) => (
                <li key={pIdx} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-700 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            {/* Skill Tags */}
            <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
              {exp.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-2.5 py-0.5 rounded-md bg-slate-100/90 text-slate-700 text-[11px] font-medium border border-slate-200/60"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
