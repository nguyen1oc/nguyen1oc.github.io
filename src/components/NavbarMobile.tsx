import React from 'react';
import { User, Briefcase, FolderGit2, Camera, Film, Mail } from 'lucide-react';

export const NavbarMobile: React.FC = () => {
  const navItems = [
    { label: 'About', href: '#about', icon: <User className="w-4 h-4" /> },
    { label: 'Kinh nghiệm', href: '#experience', icon: <Briefcase className="w-4 h-4" /> },
    { label: 'Dự án', href: '#projects', icon: <FolderGit2 className="w-4 h-4" /> },
    { label: 'Ảnh dọc', href: '#photography', icon: <Camera className="w-4 h-4" /> },
    { label: 'Điện ảnh', href: '#movies', icon: <Film className="w-4 h-4" /> },
    { label: 'Liên hệ', href: '#contact', icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <nav className="lg:hidden sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 px-4 py-2 flex items-center justify-between overflow-x-auto hide-scrollbar gap-2">
      {navItems.map((item, idx) => (
        <a
          key={idx}
          href={item.href}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700 whitespace-nowrap transition-colors"
        >
          {item.icon}
          <span>{item.label}</span>
        </a>
      ))}
    </nav>
  );
};
